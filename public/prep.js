import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({region: 'us-east-1'});

import {markdown} from "markdown";

const prep = async () => {
    const command = new GetObjectCommand({
        Bucket: "aohpolarplungebucket", 
        Key: "prep.txt"
    });
  
    try {
        const response = await client.send(command);
        const str = await response.Body.transformToString();

        var class_text = " class=\"body-text\"";
        var regex = "(?<=<[^/]+)>";

        var page_text = markdown.toHTML(str, "Maruku");

        var insert_indeces = [...page_text.matchAll(new RegExp(regex, 'gi'))].map(a => a.index);

        for (let i = insert_indeces.length - 1; i > -1; i--)
        {
            page_text = page_text.substring(0, insert_indeces[i]) + class_text + page_text.substring(insert_indeces[i]);
        }

        var data = {
            page_text: page_text
        };
        
        return data;
    } catch (err) {
        console.error(err);
    }
};

export default prep;
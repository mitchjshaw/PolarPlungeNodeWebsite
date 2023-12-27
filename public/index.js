import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({region: 'us-east-1'});

import {markdown} from "markdown";

const index = async () => {
    const command = new GetObjectCommand({
        Bucket: "aohpolarplungebucket", 
        Key: "index.txt"
    });
  
    try {
        const response = await client.send(command);
        const str = await response.Body.transformToString();
        //console.log(str);

        var pre_limit = "PRE-CAROUSEL";
        var post_start = "POST-CAROUSEL";
        var pre = str.substring(0, str.indexOf(pre_limit));
        var post = str.substring(str.indexOf(post_start) + post_start.length);

        var class_text = " class=\"fs-4 body-text\"";
        var search_text = "<p";

        var pre_carousel_text = markdown.toHTML(pre, "Maruku");
        var post_carousel_text = markdown.toHTML(post, "Maruku");

        var pre_insert_indeces = [...pre_carousel_text.matchAll(new RegExp(search_text, 'gi'))].map(a => a.index);
        var post_insert_indeces = [...post_carousel_text.matchAll(new RegExp(search_text, 'gi'))].map(a => a.index);

        for (let i = pre_insert_indeces.length - 1; i > -1; i--)
        {
            pre_carousel_text = pre_carousel_text.substring(0, pre_insert_indeces[i] + 2) + class_text + pre_carousel_text.substring(pre_insert_indeces[i] + 2);
        }

        for (let i = post_insert_indeces.length - 1; i > -1; i--)
        {
            post_carousel_text = post_carousel_text.substring(0, post_insert_indeces[i] + 2) + class_text + post_carousel_text.substring(post_insert_indeces[i] + 2);
        }

        var data = {
            pre_carousel_text: pre_carousel_text,
            post_carousel_text: post_carousel_text
        };

        console.log("DATA_INDEX: " + JSON.stringify(data));

        return data;
    } catch (err) {
        console.error(err);
    }
  };

export default index;
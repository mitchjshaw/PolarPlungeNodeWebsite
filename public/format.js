import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({region: 'us-east-1'});

import {markdown} from "markdown";

const format = async () => {
    const command = new GetObjectCommand({
        Bucket: "aohpolarplungebucket", 
        Key: "format.txt"
    });
  
    try {
	    const response = await client.send(command);
	    const str = await response.Body.transformToString();
	    //console.log(str);

	    var elements = str.split('|');

	    var class_text = " class=\"title-text display-4 text-center\"";
	    var search_text = "<p";

	    var title_text = markdown.toHTML(elements[6], "Maruku");

	    var insert_indeces = [...title_text.matchAll(new RegExp(search_text, 'gi'))].map(a => a.index);

	    for (let i = insert_indeces.length - 1; i > -1; i--)
	    {
	    	title_text = title_text.substring(0, insert_indeces[i] + 2) + class_text + title_text.substring(insert_indeces[i] + 2);
	    }

	    var data = {
	      	page_1_link: elements[0],
		    page_2_link: elements[1],
		    page_3_link: elements[2],
		    page_4_link: elements[3],
		    page_5_link: elements[4],
		    page_6_link: elements[5],
		    page_title: title_text
	    };

	    console.log("DATA_FORMAT: " + JSON.stringify(data));

	    return data;
    } catch (err) {
      	console.error(err);
    }
  };

export default format;
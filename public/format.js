import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({region: 'us-east-1'});

const format = async () => {
    const command = new GetObjectCommand({
        Bucket: "aohpolarplungebucket", 
        Key: "format.txt"
    });
  
    try {
      const response = await client.send(command);
      const str = await response.Body.transformToString();
      console.log(str);

      var elements = str.split('|');

      var data = {
        page_1_link: elements[0],
        page_2_link: elements[1],
        page_3_link: elements[2],
        page_4_link: elements[3],
        page_5_link: elements[4],
        page_6_link: elements[5],
        page_title: markdown.toHTML(elements[6], "Maruku")
      }

      return data;
    } catch (err) {
      console.error(err);
    }
  };

export default format;
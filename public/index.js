import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({region: 'us-east-1'});

const index = async () => {
    const command = new GetObjectCommand({
        Bucket: "aohpolarplungebucket", 
        Key: "index.txt"
    });
  
    try {
      const response = await client.send(command);
      const str = await response.Body.transformToString();
      console.log(str);

      var pre_limit = "PRE-CAROUSEL";
      var post_start = "POST-CAROUSEL";
      var pre = data.substring(0, str.indexOf(pre_limit));
      var post = data.substring(str.indexOf(post_start) + post_start.length);

      var data = {
        pre_carousel_text: markdown.toHTML(pre, "Maruku"),
        post_carousel_text: markdown.toHTML(post, "Maruku")
      }

      return data;
    } catch (err) {
      console.error(err);
    }
  };

export default index;
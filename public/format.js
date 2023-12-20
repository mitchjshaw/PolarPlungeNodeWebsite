import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
const client = new S3Client({region: 'us-east-1'});

const format = async () => {
    const command = new GetObjectCommand({
        Bucket: "aohpolarplungebucket", 
        Key: "format.txt"
    });
  
    try {
      const response = await client.send(command);
      // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
      const str = await response.Body.transformToString();
      console.log(str);
    } catch (err) {
      console.error(err);
    }
    //   var elements = data.split('|');
    //         document.getElementById('home-link').innerHTML = elements[0];
    //         document.getElementById('info-link').innerHTML = elements[1];
    //         document.getElementById('pub-link').innerHTML = elements[2];
    //         document.getElementById('form-link').innerHTML = elements[3];
    //         document.getElementById('prep-link').innerHTML = elements[4];
    //         document.getElementById('ship-link').innerHTML = elements[5];
    //         $('#title-div').append(markdown.toHTML(elements[6], "Maruku"));
  };

export default format;
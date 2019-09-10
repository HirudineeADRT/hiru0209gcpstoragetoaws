let AWS = require('aws-sdk');
const s3 = new AWS.S3();
let google = require('googleapis').google;
let _auth = require('./Authorizer');
const storage = google.storage('v1');

exports.handler = function (request, response) {

    storage.objects.get({
        bucket: "hirutest01",
        object: "001.jpg"
    })
        .then(response => {
            console.log(response.data);
            content = response.data;
                    // successful response
            /*
            response.data = {
                "kind": "storage#object",
                "id": "<bucket>/<object>/<timestamp>",
                "selfLink": "https://www.googleapis.com/storage/v1/b/<bucket>/o/<object>",
                "name": "<object>",
                "bucket": "<bucket>",
                "contentType": "<content-type>",
                "timeCreated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
                "updated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
                "size": "<bytes>",
                "md5Hash": "<hash>",
                "metadata": {
                    "<key1>": "<val1>",
                    "<key2>": "<val2>"
                },
                "crc32c": "<crc>",
                "etag": "<etag>"
                // , ...
            }
            */


            
            // s3.putObject({
            //     "Body": content,
            //     "Bucket": "hirudinee0508",
            //     "Key": "savefromgcp"
            // })
            //     .promise()
            //     .then(data => {
            //         console.log(data);           // successful response
            //         /*
            //         data = {
            //             ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
            //             VersionId: "pSKidl4pHBiNwukdbcPXAIs.sshFFOc0"
            //         }
            //         */
            //     })
            //     .catch(err => {
            //         console.log(err, err.stack); // an error occurred
            //     });


        })
        .catch(err => {
            console.log(err, err.stack);
            response.send({ "message": "an error ocurred " + err.stack }); // an error occurred
        });


        response.send({ "message": "Successfully executed " + response.data }); 

    
}


// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://aws.amazon.com/developers/getting-started/nodejs/

// // Load the AWS SDK
// var AWS = require('aws-sdk'),
//     region = "eu-west-2",
//     secretName = "testsecretforjavascript",
//     secret,
//     decodedBinarySecret;

// // Create a Secrets Manager client
// var client = new AWS.SecretsManager({
//     region: region
// });


// POST / HTTP/1.1
// Host: secretsmanager.region.domain
// Accept-Encoding: identity
// X-Amz-Target: secretsmanager.GetSecretValue
// Content-Type: application/x-amz-json-1.1
// User-Agent: <user-agent-string>
// X-Amz-Date: <date>
// Authorization: AWS4-HMAC-SHA256 Credential=<credentials>,SignedHeaders=<headers>,
//  Signature=<signature>
// Content-Length: <payload-size-bytes>
// {
//  "SecretId": "MyTestDatabaseSecret",
// }
import  fetch from 'node-fetch';

//  function getsecret(){
//     console.log("test");
    let response = await fetch('https://secretsmanager.eu-west-2.amazonaws.com', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/x-amz-json-1.1',
        'Accept-Encoding':'identity',
        'X-Amz-Target': 'secretsmanager.GetSecretValue'
      
        
    },
    body: JSON.stringify({"SecretId": "nifitest"}),
    })
    console.log(response);
    // .then(response => response.json())
    // .then(data => {
    // console.log('Success:', data);
    // })
    // .catch((error) => {
    // console.error('Error:', error);
    // });
//}
//getsecret();

//var request=


//Create Secret

// function createSecrets (list) {
	
	
// 	let promises = [];
	
	
		
// 		let params = {
// 			Name: "Test1",
			
// 			SecretString: "Testvalue123",
// 		};
		
// 		if (Object.prototype.toString.call(params.SecretString) !== '[object String]') {

// 			try {
// 				params.SecretString = JSON.stringify(params.SecretString);
// 			} catch (err) {
// 				// ignore stringify err
// 			}
			
// 		}

// 		let promise = client.createSecret(params).promise();
// 		promises.push(promise);

	
	
// 	return Promise.allSettled(promises);
// }

// In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
// See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
// We rethrow the exception by default.

// client.getSecretValue({SecretId: secretName}, function(err, data) {

//     if (err) {
//         if (err.code === 'DecryptionFailureException')
//             // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InternalServiceErrorException')
//             // An error occurred on the server side.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InvalidParameterException')
//             // You provided an invalid value for a parameter.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'InvalidRequestException')
//             // You provided a parameter value that is not valid for the current state of the resource.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//         else if (err.code === 'ResourceNotFoundException')
//             // We can't find the resource that you asked for.
//             // Deal with the exception here, and/or rethrow at your discretion.
//             throw err;
//     }
//     else {
//         console.log(data);
//         // Decrypts secret using the associated KMS CMK.
//         // Depending on whether the secret is a string or binary, one of these fields will be populated.
//         if ('SecretString' in data) {
//             secret = data.SecretString;
//             console.log(secret);
//         } else {
//             let buff = new Buffer(data.SecretBinary, 'base64');
//             decodedBinarySecret = buff.toString('ascii');
            
            
//         }
//     }
    // Your code goes here.



     
// });
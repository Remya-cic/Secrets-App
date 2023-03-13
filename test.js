
import  fetch from 'node-fetch';
let response = await fetch('https://secretsmanager.eu-west-2.amazonaws.com', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/x-amz-json-1.1',
        'Accept-Encoding':'identity',
        'X-Amz-Target': 'secretsmanager.GetSecretValue',
        'ServiceName':'secretsmanager'
   
    },
    body: JSON.stringify({"SecretId": "nifitestsecret"}),
    })
    console.log(response);

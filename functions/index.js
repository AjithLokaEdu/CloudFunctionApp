const functions = require('firebase-functions');
const express = require('express');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app =express();

app.get('/home', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send(getData());
})

function getData() {
    return {
        channels: [
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 ODL Cushions',
            bp: 'Sauder Woodworking',
            productName: 'Yellow Thick 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 Beauty Products',
            bp: "L'Oreal",
            productName: 'Face Cleaner',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 ODL Cushions',
            bp: 'Vintage Global',
            productName: 'Orange Soft 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 Furniture chairs',
            bp: 'Libby Co',
            productName: 'Dark blue Thick 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 ODL Cushions',
            bp: 'Sauder Woodworking',
            productName: 'Yellow Thick 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 Beauty Products',
            bp: "L'Oreal",
            productName: 'Face Cleaner',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 ODL Cushions',
            bp: 'Vintage Global',
            productName: 'Orange Soft 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 Furniture chairs',
            bp: 'Libby Co',
            productName: 'Dark blue Thick 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 ODL Cushions',
            bp: 'Sauder Woodworking',
            productName: 'Yellow Thick 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 Beauty Products',
            bp: "L'Oreal",
            productName: 'Face Cleaner',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 ODL Cushions',
            bp: 'Vintage Global',
            productName: 'Orange Soft 12 set cushions',
            productId: '1232er2',
          },
          {
            id: 'abcudf234adsf',
            namespace: 'pcn',
            event: '2019 Furniture chairs',
            bp: 'Libby Co',
            productName: 'Dark blue Thick 12 set cushions',
            productId: '1232er2',
          },
        ],
        messages: [
          {
            id: 'msg12343',
            createdByUserGroup: 'TARGET',
            body: 'Hi, Can you send me more details about this product',
          },
          {
            id: 'msg12343',
            createdByUserGroup: 'Sauder',
            body:
              'Hi, I did not get udpate from my supplier. Please give me few more days.',
          },
          {
            id: 'msg12343',
            createdByUserGroup: 'TARGET',
            body: 'Okay',
          },
          {
            id: 'msg12343',
            createdByUserGroup: 'Sauder',
            body: 'I am not able to see a new product',
          },
          {
            id: 'msg12343',
            createdByUserGroup: 'Sauder',
            body: 'nvm, I am seeing it now',
          },
          {
            id: 'msg12343',
            createdByUserGroup: 'TARGET',
            body: 'Fill in the details for newly added product.',
          },
          {
            id: 'msg12343',
            createdByUserGroup: 'TARGET',
            body: 'I added few more required attibutes.',
          },
        ],
      }
}



exports.app = functions.https.onRequest(app);

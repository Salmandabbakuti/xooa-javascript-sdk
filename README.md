# Xooa SDK for JavaScript

The official Xooa SDK for Javascript, for browsers and mobile devices, or Node.js backends

Xooa (pronounced ZUU-ah) is dedicated to making blockchain easy. Focus on business problems, not blockchain problems.

## Installing

###  Nodejs
Simply type the command into the terminal window. 

```bash
npm install xooa-sdk
```

```js
var xooaClient = require("xooa-sdk");
```

### In React Native 

Install the SDK in the Project first using npm.

```bash
npm install xooa-sdk
```

```js
import * as XooaClient from "xooa-sdk"
```

```js
let xooaClient = XooaClient();
```


## Usage of Functions

```js
var XooaClient = require("xooa-sdk");
var xooaClient = new XooaClient();
xooaClient.setApiToken("<YOUR_TOKEN_HERE>");
//xooaClient.setLoggerLevel("all")
// Calling invoke methods

// The invoke function is used for submitting transaction for processing by the blockchain smart contract app
// when the transaction payload need to be persisted into the Ledger (new block is mined).
// Required permission: write ("Access":"rw")
// "set" function is the part of the smartcontract provided in this example
var [error, pendingResponse, data] = await xooaClient.invoke("set", {}, {args: ["123","123"]})
console.log(error, pendingResponse, data);


// The invokeAsync function is used for submitting transaction for processing by the blockchain smart contract app aynchronously
// when the transaction payload need to be persisted into the Ledger (new block is mined).
//Required permission: write ("Access":"rw")
//"set" function is the part of the smartcontract provided in this example
[error, pendingResponse, data] = await xooaClient.invokeAsync("increment", {}, {args: ["123"]})
console.log(error, pendingResponse, data);

// Calling query methods


// Query Blockchain data
// The query function is used for querying (reading) a blockchain ledger using smart contract function.
// It must pass a function name already defined in your smart contract app which will process the query request.
// Required permission: read ("Access":"rw" or "Access":"r")
// "get" function is the part of the smartcontract provided in this example

[error, pendingResponse, data] = await xooaClient.query("get", {}, {args: ["123"]})
console.log(error, pendingResponse, data);

// The query function is used for querying (reading) a blockchain ledger using smart contract function asynchronously.
// It must pass a function name already defined in your smart contract app which will process the query request.
// Required permission: read ("Access":"rw" or "Access":"r")
// "get" function is the part of the smartcontract provided in this example
// 
[error, pendingResponse, data] = await xooaClient.queryAsync("get", {}, {args: ["123"]})
console.log(error, pendingResponse, data);

//Calling identity methods


// Gets the detail about identity currently set
// no argument is required
//
[error, pendingResponse, data] = await xooaClient.currentIdentity()
console.log(error, pendingResponse, data);

// Get all identities from the identity registry
// no argument is required
//
[error, pendingResponse, data] = await xooaClient.getIdentities()
console.log(error, pendingResponse, data);

// The Enroll identity function is used to enroll new identities for the smart contract app. A success response includes the API Token generated for the identity. This API Token can be used to call API End points on behalf of the enrolled identity.
// This function provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this function will appear, and can be managed, using Xooa console under the identities tab of the smart contract app
// identityRequest is required argument
//

var newIdentity = {
    "IdentityName": "string",
    "Access": "r",
    "Attrs": [
        {
            "name": "string",
            "ecert": true,
            "value": "string"
        }
    ],
    "canManageIdentities": true
}

var [error, pendingResponse, data] = await xooaClient.enrollIdentity({}, newIdentity)
console.log(error, pendingResponse, data);


// // Get the specified identity from the identity registry
// // identity ID is required argument
// //
[error, pendingResponse, data] = xooaClient.getIdentity(data.Id)
console.log(error, pendingResponse, data);


// // Generates new identity API Token
// // identity ID is required argument
// //
[error, pendingResponse, data] = await xooaClient.regenerateIdentityApiToken({}, data.Id)
console.log(error, pendingResponse, data);


// // Generates new identity API Token asynchronously
// // identity ID is required argument
// //
[error, pendingResponse, data] = await xooaClient.regenerateIdentityApiTokenAsync({}, data.Id)
console.log(error, pendingResponse, data);

// // Deletes an identity.
// // identity ID is required argument
// //
[error, pendingResponse, data] = await xooaClient.deleteIdentity({}, data.Id)
console.log(error, pendingResponse, data);


// // Deletes an identity asynchronously.
// // identity ID is required argument
// //
[error, pendingResponse, data] = await xooaClient.deleteIdentityAsync({}, data.Id)
console.log(error, pendingResponse, data);

// // Calling blockchain state methods

// // To get details about current block, call getCurrentBlock method
// // no argument is required
// //
[error, pendingResponse, data] = await xooaClient.getBlockByNumber("1", {});
console.log(error, pendingResponse, data);

// // To get details about current block asynchronously, call getCurrentBlockAsync method
// // no argument is required
// //
[error, pendingResponse, data] = await xooaClient.getCurrentBlock({})
console.log(error, pendingResponse, data);

// // To get details about a block, call getBlockByNumber method
// // block number is required argument
// //
[error, pendingResponse, data] = await xooaClient.getBlockByNumber("1", {});
console.log(error, pendingResponse, data);


// // To get details about a block asynchronously, call getBlockByNumberAsync method
// // block number is required argument
// //
[error, pendingResponse, data] = await xooaClient.getBlockByNumberAsync("1", {});
console.log(error, pendingResponse, data);

// // To get details about a block, call getTransactionByTransactionId method
// // transaction id is required argument
// //
[error, pendingResponse, data] = await xooaClient.getTransactionByTransactionId("9d064180b1ec2a8e16168e4b372d32dc0bb1d1d9ed1c6d9182aa033367412874", {});
console.log(error, pendingResponse, data);

// // To get details about a block asynchronously, call getTransactionByTransactionIdAsync method
// // transaction id is required argument
// //
[error, pendingResponse, data] = await xooaClient.getTransactionByTransactionIdAsync("9d064180b1ec2a8e16168e4b372d32dc0bb1d1d9ed1c6d9182aa033367412874", {});
console.log(error, pendingResponse, data);

// // Calling results methods

// // To get result for block pending request, call getResultForBlockByNumber method
// // resultId is required argument
// //
[error, pendingResponse, data] = await xooaClient.getResultForBlockByNumber(blockResultID)
console.log(error, pendingResponse, data);

// // To get result for current block pending request, call getResultForCurrentBlock method
// // resultId is required argument
// //
[error, pendingResponse, data] = await xooaClient.getResultForCurrentBlock(currentBlockResultID)
console.log(error, pendingResponse, data);


// // To get result for identity pending request, call getResultForIdentity method
// // resultId is required argument
// //
[error, pendingResponse, data] = await xooaClient.getResultForIdentity(identityResultID)
console.log(error, pendingResponse, data);


// // To get result for delete identity pending request, call getResultForDeleteIdentity method
// // resultId is required argument
// //
[error, pendingResponse, data] = await xooaClient.getResultForDeleteIdentity(deleteIdentityResultID)
console.log(error, pendingResponse, data);


// // To get result for query pending request, call getResultForQuery method
// // resultId is required argument
// //
[error, pendingResponse, data] = await xooaClient.getResultForQuery(queryResultID)
console.log(error, pendingResponse, data);

// // To get result for invoke pending request, call getResultForInvoke method
// // resultId is required argument
// //
[error, pendingResponse, data] = await xooaClient.getResultForInvoke(invokeResultID)
console.log(error, pendingResponse, data);

// // To get result for transaction pending request, call getResultForTransaction method
// // resultId is required argument
// //
[error, pendingResponse, data] = xooaClient.getResultForTransaction(transactionResultID)
console.log(error, pendingResponse, data);
```

## License

This SDK is distributed under the Apache License, Version 2.0.
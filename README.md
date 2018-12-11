
# Xooa SDK for JavaScript

The official Xooa SDK for Javascript, for browsers and mobile devices, or Node.js backends

Xooa (pronounced ZUU-ah) is dedicated to making blockchain easy. Focus on business problems, not blockchain problems.

## Getting Started

```bash
npm install xooa-sdk --save
```

```js
var xooaClient = require("xooa-sdk");
```

## Usage of Functions

```js
var xooaClient = require("xooa-sdk");
xooaClient.setApiToken("<Your API Token>");

// Calling invoke methods


// The invoke function is used for submitting transaction for processing by the blockchain smart contract app
// when the transaction payload need to be persisted into the Ledger (new block is mined).
// Required permission: write ("Access":"rw")
// "set" function is the part of the smartcontract provided in this example
xooaClient.invoke("set", {}, { args: ["args1", "args2"] }, (error, pendingResponse, data) => {
    console.log(data);
    trxnId = data.txId;
});

// The invokeAsync function is used for submitting transaction for processing by the blockchain smart contract app aynchronously
// when the transaction payload need to be persisted into the Ledger (new block is mined).
//Required permission: write ("Access":"rw")
//"set" function is the part of the smartcontract provided in this example
xooaClient.invokeAsync("increment", {}, { args: ["args1", "args2"] }, (error, pendingResponse, data) =>{
    console.log(data);
    invokeResultID = data.resultId;
})


// Calling query methods


// Query Blockchain data
// The query function is used for querying (reading) a blockchain ledger using smart contract function.
// It must pass a function name already defined in your smart contract app which will process the query request.
// Required permission: read ("Access":"rw" or "Access":"r")
// "get" function is the part of the smartcontract provided in this example

xooaClient.query("get", {}, { args: ["args1"] }, (error, pendingResponse, data) => {
    console.log(data);
})


// The query function is used for querying (reading) a blockchain ledger using smart contract function asynchronously.
// It must pass a function name already defined in your smart contract app which will process the query request.
// Required permission: read ("Access":"rw" or "Access":"r")
// "get" function is the part of the smartcontract provided in this example
// 
xooaClient.queryAsync("get", {}, { args: ["args1"] }, (error, pendingResponse, data) => {
    console.log(data);
    queryResultID = data.resultId;
})

//Calling identity methods


// Gets the detail about identity currently set
// no argument is required
//
xooaClient.currentIdentity((error, pendingResponse, data) => {
    console.log(data);
})

// Get all identities from the identity registry
// no argument is required
//
xooaClient.getIdentities((error, pendingResponse, data) => {
    console.log(data);
})

// Get the specified identity from the identity registry
// identity ID is required argument
//
xooaClient.getIdentity(idTemp, (error, pendingResponse, data) => {
    console.log(data);
})

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

// The Enroll identity function is used to enroll new identities for the smart contract app. A success response includes the API Token generated for the identity. This API Token can be used to call API End points on behalf of the enrolled identity.
// This function provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this function will appear, and can be managed, using Xooa console under the identities tab of the smart contract app
// identityRequest is required argument
//
xooaClient.enrollIdentity({}, newIdentity, (error, pendingResponse, data) => {
    console.log(data);
    identityId1 = data.Id;
})

xooaClient.enrollIdentity({}, newIdentity, (error, pendingResponse, data) => {
    console.log(data);
    identityId2 = data.Id;
})

// The Enroll identity function is used to enroll new identities for the smart contract app asynchronously. A success response includes the API Token generated for the identity. This API Token can be used to call API End points on behalf of the enrolled identity.
// This function provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this function will appear, and can be managed, using Xooa console under the identities tab of the smart contract app
// `Required permission`: manage identities (canManageIdentities=true)
//
xooaClient.enrollIdentityAsync({}, newIdentity, (error, pendingResponse, data) => {
    console.log(data);
    identityResultID = data.resultId;
})

// Generates new identity API Token
// identity ID is required argument
//
xooaClient.regenerateIdentityApiToken({}, identityId1, (error, pendingResponse, data) => {
    console.log(data);
})

// Generates new identity API Token asynchronously
// identity ID is required argument
//
xooaClient.regenerateIdentityApiTokenAsync({}, identityId1, (error, pendingResponse, data) => {
    console.log(data);
    invokeResultID = data.resultId;
})

// Deletes an identity.
// identity ID is required argument
//
xooaClient.deleteIdentity({}, identityId1, (error, pendingResponse, data) => {
    console.log(data);
})

// Deletes an identity asynchronously.
// identity ID is required argument
//
xooaClient.deleteIdentityAsync({}, identityId2, (error, pendingResponse, data) => {
    console.log(data);
    deleteIdentityResultID = data.resultId;
})

// Calling blockchain state methods

// To get details about current block, call getCurrentBlock method
// no argument is required
//
xooaClient.getCurrentBlock({}, (error, pendingResponse, data) => {
    console.log(data);
})

// To get details about current block asynchronously, call getCurrentBlockAsync method
// no argument is required
//
xooaClient.getCurrentBlockAsync({}, (error, pendingResponse, data) => {
    console.log(data);
    currentBlockResultID = data.resultId;
})

// To get details about a block, call getBlockByNumber method
// block number is required argument
//
xooaClient.getBlockByNumber("1", {}, (error, pendingResponse, data) => {
    console.log(data);
})

// To get details about a block asynchronously, call getBlockByNumberAsync method
// block number is required argument
//
xooaClient.getBlockByNumberAsync("1", {}, (error, pendingResponse, data) => {
    console.log(data);
    blockResultID = data.resultId;
});

// To get details about a block, call getTransactionByTransactionId method
// transaction id is required argument
//
xooaClient.getTransactionByTransactionId(trxnId, {}, (error, pendingResponse, data) => {
    console.log(data);
});

// To get details about a block asynchronously, call getTransactionByTransactionIdAsync method
// transaction id is required argument
//
xooaClient.getTransactionByTransactionIdAsync(trxnId, {}, (error, pendingResponse, data) => {
    console.log(data);
    transactionResultID = data.resultId;
});

// Calling results methods

// To get result for block pending request, call getResultForBlockByNumber method
// resultId is required argument
//
xooaClient.getResultForBlockByNumber(blockResultID, (error, pendingResponse, data) => {
    console.log(data);
})

// To get result for current block pending request, call getResultForCurrentBlock method
// resultId is required argument
//
xooaClient.getResultForCurrentBlock(currentBlockResultID, (error, pendingResponse, data) => {
    console.log(data);
})

// To get result for identity pending request, call getResultForIdentity method
// resultId is required argument
//
xooaClient.getResultForIdentity(identityResultID, (error, pendingResponse, data) => {
    console.log(data);
})

// To get result for delete identity pending request, call getResultForDeleteIdentity method
// resultId is required argument
//
xooaClient.getResultForDeleteIdentity(deleteIdentityResultID, (error, pendingResponse, data) => {
    console.log(data);
})

// To get result for query pending request, call getResultForQuery method
// resultId is required argument
//
xooaClient.getResultForQuery(queryResultID, (error, pendingResponse, data) => {
    console.log(data);
})

// To get result for invoke pending request, call getResultForInvoke method
// resultId is required argument
//
xooaClient.getResultForInvoke(invokeResultID, (error, pendingResponse, data) => {
    console.log(data);
})

// To get result for transaction pending request, call getResultForTransaction method
// resultId is required argument
//
xooaClient.getResultForTransaction(transactionResultID, (error, pendingResponse, data) => {
    console.log(data);
})
```

## License

This SDK is distributed under the Apache License, Version 2.0.
    var XooaClient = require("../../../src/index")
    var identityId1 = "";
    var identityId2 = "";
    var trxnId = "";
    var invokeResultID = "";
    var queryResultID = "";
    var identityResultID = "";
    var deleteIdentityResultID = "";
    var currentBlockResultID = "";
    var blockResultID = "";
    var transactionResultID = "";
    var xooaClient = XooaClient()
    xooaClient.setLoggerLevel("debug")
    xooaClient.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiJBUDdCQUVYLURaVjQxRUQtSENZNlNENi0zMUdKMjFKIiwiQXBpU2VjcmV0IjoidGFWSU1vOTN4b1hxM3JpIiwiUGFzc3BocmFzZSI6IjRiMGU2YTQzYWUzNjc0OTVkZDBkMmVmMjhlODYzOGU4IiwiaWF0IjoxNTQ1MjkxNzM0fQ.HlHoY2xkJW7qgtpF9RbCsoS9yhFAKJjOBV3Q-UcUO4g");

    // Calling invoke methods
    async function runAll(){
        /**
     * The invoke function is used for submitting transaction for processing by the blockchain smart contract app
     * when the transaction payload need to be persisted into the Ledger (new block is mined).
     * Required permission: write ("Access":"rw")
     * "set" function is the part of the smartcontract provided in this example
     * */
    var [error, pendingResponse, data] = await xooaClient.invoke("set", {}, {args: ["abc","123"]})
        console.log(data);
        trxnId = data.txId;

    /**
     * The invokeAsync function is used for submitting transaction for processing by the blockchain smart contract app aynchronously
     * when the transaction payload need to be persisted into the Ledger (new block is mined).
     * Required permission: write ("Access":"rw")
     * "set" function is the part of the smartcontract provided in this example
     * */
    [error, pendingResponse, data] = await xooaClient.invokeAsync("set", {}, {args: ["abc","123"]})
        console.log(data);
        invokeResultID = data.resultId;



    // Calling query methods

    /**
     * Query Blockchain data
     * The query function is used for querying (reading) a blockchain ledger using smart contract function.
     * It must pass a function name already defined in your smart contract app which will process the query request.
     * Required permission: read ("Access":"rw" or "Access":"r")
     * "get" function is the part of the smartcontract provided in this example
     * */
    [error, pendingResponse, data] = await xooaClient.query("get", {}, {args: ["abc"]})
        console.log(data);

    /**
     * The query function is used for querying (reading) a blockchain ledger using smart contract function asynchronously.
     * It must pass a function name already defined in your smart contract app which will process the query request.
     * Required permission: read ("Access":"rw" or "Access":"r")
     * "get" function is the part of the smartcontract provided in this example
     * */
    [error, pendingResponse, data] = await xooaClient.queryAsync("get", {}, {args: ["abc"]})
        console.log(data);
        queryResultID = data.resultId;


    //Calling identity methods

    /**
     * Gets the detail about identity currently set
     * no argument is required
     * */
    [error, pendingResponse, data] = await xooaClient.currentIdentity()
        console.log(data);

    /**
     * Get all identities from the identity registry
     * no argument is required
     * */
    [error, pendingResponse, data] = await xooaClient.getIdentities()
        console.log(data);


    

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

    /**
     * The Enroll identity function is used to enroll new identities for the smart contract app. A success response includes the API Token generated for the identity. This API Token can be used to call API End points on behalf of the enrolled identity.
     * This function provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this function will appear, and can be managed, using Xooa console under the identities tab of the smart contract app
     * identityRequest is required argument
     * */
     console.log({}, newIdentity);
    [error, pendingResponse, data] = await xooaClient.enrollIdentity({}, newIdentity)
        console.log(data);
        identityId1 = data.Id;
        idTemp = identityId1;

    /**
     * Get the specified identity from the identity registry
     * identity ID is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getIdentity(identityId1)
        console.log(data);

    /**
     * The Enroll identity function is used to enroll new identities for the smart contract app asynchronously. A success response includes the API Token generated for the identity. This API Token can be used to call API End points on behalf of the enrolled identity.
     * This function provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this function will appear, and can be managed, using Xooa console under the identities tab of the smart contract app
     * `Required permission`: manage identities (canManageIdentities=true)
     * */
    [error, pendingResponse, data] = await xooaClient.enrollIdentityAsync({}, newIdentity)
        console.log(data);
        identityResultID = data.resultId;

    /**
     * Generates new identity API Token
     * identity ID is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.regenerateIdentityApiToken({}, idTemp)
        console.log(data);

    /**
     * Generates new identity API Token asynchronously
     * identity ID is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.regenerateIdentityApiTokenAsync({}, idTemp)
        console.log(data);
        invokeResultID = data.resultId;

    /**
     * Deletes an identity.
     * identity ID is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.deleteIdentity({}, identityId1)
        console.log(data);

    // Calling blockchain state methods

    /**
     * To get details about current block, call getCurrentBlock method
     * no argument is required
     * */
    [error, pendingResponse, data] = await xooaClient.getBlockByNumber("1", {});
        console.log(data);

    /**
     * To get details about current block asynchronously, call getCurrentBlockAsync method
     * no argument is required
     * */
    [error, pendingResponse, data] = await xooaClient.getCurrentBlock({})
        console.log(error, pendingResponse, data);


    [error, pendingResponse, data] = await xooaClient.getCurrentBlockAsync({})  
    console.log(error, pendingResponse, data);
        currentBlockResultID = data.resultId;  
    /**
     * To get details about current block, call getCurrentBlock method
     * no argument is required
     * */
    [error, pendingResponse, data] = await xooaClient.getBlockByNumber("1", {});
        console.log(data);

/**
     * To get details about current block, call getCurrentBlock method
     * no argument is required
     * */
    [error, pendingResponse, data] = await xooaClient.getBlockByNumberAsync("1", {});
        console.log(data);
        blockResultID = data.resultId;


    /**
     * To get details about a block, call getTransactionByTransactionId method
     * transaction id is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getTransactionByTransactionId(trxnId, {});
        console.log(data);

    /**
     * To get details about a block asynchronously, call getTransactionByTransactionIdAsync method
     * transaction id is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getTransactionByTransactionIdAsync(trxnId, {});
        console.log(data);
        transactionResultID = data.resultId;

    // Calling results methods

    /**
     * To get result for block pending request, call getResultForBlockByNumber method
     * resultId is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getResultForBlockByNumber(blockResultID)
    console.log(error, pendingResponse, data);


    /**
     * To get result for current block pending request, call getResultForCurrentBlock method
     * resultId is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getResultForCurrentBlock(currentBlockResultID)
    console.log(error, pendingResponse, data);

    /**
     * To get result for identity pending request, call getResultForIdentity method
     * resultId is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getResultForIdentity(identityResultID)
    console.log(error, pendingResponse, data);

    /**
     * To get result for delete identity pending request, call getResultForDeleteIdentity method
     * resultId is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getResultForDeleteIdentity(deleteIdentityResultID)
    console.log(error, pendingResponse, data);
    /**
     * To get result for query pending request, call getResultForQuery method
     * resultId is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getResultForQuery(queryResultID)
    console.log(error, pendingResponse, data);

    /**
     * To get result for invoke pending request, call getResultForInvoke method
     * resultId is required argument
     * */
    [error, pendingResponse, data] = await xooaClient.getResultForInvoke(invokeResultID)
    console.log(error, pendingResponse, data);
    /**
     * To get result for transaction pending request, call getResultForTransaction method
     * resultId is required argument
     * */
    [error, pendingResponse, data] = await  xooaClient.getResultForTransaction(transactionResultID)
    console.log(error, pendingResponse, data);
    // Calling events methods

    xooaClient.subscribeAllEvents(function (data) {})
    xooaClient.unsubscribe()

    }


    runAll()
    
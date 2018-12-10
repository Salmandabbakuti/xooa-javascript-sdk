Xooa JavaScript SDK
===================

*This is the base class of JavaScript SDK.*

This class contains all the public functions available by SDK.

This SDK refers to APIs available for Xooa platform. For more details, refer: <https://api.xooa.com/explorer>

The platform documentation is available at <https://docs.xooa.com>

Summary
-------

-   [ApiClient][247]
    -   [basePath][248]
    -   [logger][249]
    -   [token][250]
    -   [setLoggerLevel][255]
-   [EventClient][288]
-   [getBlockByNumber][295]
-   [getBlockByNumberAsync][297]
-   [getCurrentBlock][299]
-   [getCurrentBlockAsync][301]
-   [getTransactionByTransactionId][303]
-   [getTransactionByTransactionIdAsync][305]
-   [query][307]
-   [queryAsync][309]
-   [invoke][311]
-   [invokeAsync][313]
-   [currentIdentity][315]
-   [getIdentities][317]
-   [enrollIdentity][319]
-   [enrollIdentityAsync][321]
-   [regenerateIdentityApiToken][323]
-   [regenerateIdentityApiTokenAsync][325]
-   [getIdentity][327]
-   [deleteIdentity][329]
-   [deleteIdentityAsync][331]
-   [getResultForQuery][333]
-   [getResultForInvoke][335]
-   [getResultForIdentity][337]
-   [getResultForCurrentBlock][339]
-   [getResultForBlockByNumber][341]
-   [getResultForDeleteIdentity][343]
-   [setLoggerLevel][345]
-   [setApiToken][347]
-   [setURL][349]
-   [subscribeAllEvents][351]
-   [unsubscribe][353]


## ApiClient

### basePath

The base URL against which to resolve every API call's (relative) path.

Type: [String]

### token

API Token to authenticate API calls

### setLoggerLevel

Returns a string representation for an actual parameter.

#### Parameters

-   `level`  The actual parameter.

Returns **[String]** The string representation of <code>param</code>.

### buildUrl

Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
NOTE: query parameters are not handled here.

#### Parameters

-   `path` **[String]** The path to append to the base URL.
-   `pathParams` **[Object]** The parameter values to append.

Returns **[String]** The encoded path with parameter values substituted.


## getBlockByNumber

Get block data (block #)
Get specific block information such as hash, # of transactions

### Parameters

-   `blockNumber` **[String]** Block number to fetch data
-   `opts` **[Object]** Optional parameters
    -   `opts.async` **[String]** Call this request asynchronously without waiting for response
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `callback` **[module:api/BlockchainApi~blockDataCallback]** The callback function, accepting three arguments: error, data, response

## getBlockByNumberAsync

Get block data (block #)
Get specific block information such as hash, # of transactions

### Parameters

-   `blockNumber` **[String]** Block number to fetch data
-   `opts` **[Object]** Optional parameters
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `callback` **[module:api/BlockchainApi~blockDataCallback]** The callback function, accepting three arguments: error, data, response

## getCurrentBlock

Get current blocks
Get current blocks in the network

### Parameters

-   `opts` **[Object]** Optional parameters
    -   `opts.async` **[String]** Call this request asynchronously without waiting for response
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `callback` **[module:api/BlockchainApi~blockHeightCallback]** The callback function, accepting three arguments: error, data, response

## getCurrentBlockAsync

Get current blocks
Get current blocks in the network

### Parameters

-   `opts` **[Object]** Optional parameters
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `callback` **[module:api/BlockchainApi~blockHeightCallback]** The callback function, accepting three arguments: error, data, response

## getTransactionByTransactionId

Get transaction data
Get specific transaction information

### Parameters

-   `txId` **[String]** Transaction Id to fetch data
-   `opts` **[Object]** Optional parameters
    -   `opts.async` **[String]** Call this request asynchronously without waiting for response
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `callback` **[module:api/BlockchainApi~transactionCallback]** The callback function, accepting three arguments: error, data, response

## getTransactionByTransactionIdAsync

Get transaction data
Get specific transaction information

### Parameters

-   `txId` **[String]** Transaction Id to fetch data
-   `opts` **[Object]** Optional parameters
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `callback` **[module:api/BlockchainApi~transactionCallback]** The callback function, accepting three arguments: error, data, response

## query

The query API function is used for querying (reading) a blockchain ledger using smart contract function. It must pass a function parameter function already defined in your smart contract app which will process the query request.

### Parameters

-   `fcn` **[String]** The blockchain Smart Contract app function name to call
-   `opts` **[Object]** Optional parameters
    -   `opts.async` **[String]** Call this request asynchronously without waiting for response
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `args` **[String]** Argument(s) to pass to the blockchain Smart Contract app function. example - ["arg1","arg2"]
-   `callback` **[module:api/QueryApi~queryCallback]** The callback function, accepting three arguments: error, data, response

## queryAsync

The query API function is used for querying (reading) a blockchain ledger using smart contract function aynchronously. It must pass a function parameter function already defined in your smart contract app which will process the query request.

### Parameters

-   `fcn` **[String]** The blockchain Smart Contract app function name to call
-   `opts` **[Object]** Optional parameters
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `args` **[String]** Argument(s) to pass to the blockchain Smart Contract app function. example - ["arg1","arg2"]
-   `callback` **[module:api/QueryApi~queryCallback]** The callback function, accepting three arguments: error, data, response

## invoke

The invoke function is used for submitting transaction for processing by the blockchain smart contract app when the transaction payload need to be persisted into the Ledger (new block is mined). It must pass a function parameter function already defined in your smart contract app which will process the invoke request.

### Parameters

-   `fcn` **[String]** The blockchain Smart Contract app function name to invoke
-   `opts` **[Object]** Optional parameters
    -   `opts.async` **[String]** Call this request asynchronously without waiting for response
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `args` **[String]** argument to pass Smart Contract
-   `callback` **[module:api/InvokeApi~invokeCallback]** The callback function, accepting three arguments: error, data, response

## invokeAsync

The invoke function is used for submitting transaction for processing by the blockchain smart contract app aynchronously when the transaction payload need to be persisted into the Ledger (new block is mined). It must pass a function parameter function already defined in your smart contract app which will process the invoke request.

### Parameters

-   `fcn` **[String]** The blockchain Smart Contract app function name to invoke
-   `opts` **[Object]** Optional parameters
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `args` **[String]** argument to pass Smart Contract
-   `callback` **[module:api/InvokeApi~invokeCallback]** The callback function, accepting three arguments: error, data, response

## currentIdentity

Authenticated Identity Information
This End Point Returns Information about the Authenticated Identity

### Parameters

-   `callback` **[module:api/IdentitiesApi~authenticatedIdentityInformationCallback]** The callback function, accepting three arguments: error, data, response

## getIdentities

Get All Identities
Get all identities from the identity registry

### Parameters

-   `callback` **[module:api/IdentitiesApi~identitiesGetAllIdentitiesCallback]** The callback function, accepting three arguments: error, data, response

## enrollIdentity

The Enroll identity function is used to enroll new identities for the smart contract app. A success response includes the API Token generated for the identity. This API Token can be used to call API End points on behalf of the enrolled identity.

This function provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this function will appear, and can be managed, using Xooa console under the identities tab of the smart contract app

Required permission: manage identities (canManageIdentities=true)

### Parameters

-   `opts` **[Object]** Optional parameters
    -   `opts.async` **[String]** Call this request asynchronously without waiting for response
    -   `opts.timeout` **[String]** Request timeout
-   `identity` **[String]** Request payload body
-   `callback` **[module:api/IdentitiesApi~enrollmentCallback]** The callback function, accepting three arguments: error, data, response

## enrollIdentityAsync

The Enroll identity function is used to enroll new identities for the smart contract app asynchronously. A success response includes the API Token generated for the identity. This API Token can be used to call API End points on behalf of the enrolled identity.

This function provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this function will appear, and can be managed, using Xooa console under the identities tab of the smart contract app

Required permission: manage identities (canManageIdentities=true)

### Parameters

-   `opts` **[Object]** Optional parameters
    -   `opts.timeout` **[String]** Request timeout
-   `identity` **[String]** Request payload body
-   `callback` **[module:api/IdentitiesApi~enrollmentCallback]** The callback function, accepting three arguments: error, data, response

## regenerateIdentityApiToken

Regenerate Identity API Token

### Parameters

-   `opts` **[Object]** opts
-   `identityId` **[String]** Identity Id
-   `callback` **[module:api/IdentitiesApi~regenerateTokenCallback]** The callback function, accepting three arguments: error, data, response

## regenerateIdentityApiTokenAsync

Regenerate Identity API Token asynchronously

### Parameters

-   `opts` **[Object]** opts
-   `identityId` **[String]** Identity Id
-   `callback` **[module:api/IdentitiesApi~regenerateTokenCallback]** The callback function, accepting three arguments: error, data, response

## getIdentity

Identity Information
Get the specified identity from the identity registry

### Parameters

-   `identityId` **[String]** Identity Id
-   `callback` **[module:api/IdentitiesApi~identityInformationCallback]** The callback function, accepting three arguments: error, data, response

## deleteIdentity

Deletes an identity

### Parameters

-   `opts` **[Object]** Optional parameters
    -   `opts.async` **[String]** Call this request asynchronously without waiting for response
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `identityId` **[String]** Identity Id
-   `callback` **[module:api/IdentitiesApi~deleteIdentityCallback]** The callback function, accepting three arguments: error, data, response

## deleteIdentityAsync

Deletes the given identity asynchronously

### Parameters

-   `opts` **[Object]** Optional parameters
    -   `opts.timeout` **[String]** Request timeout in millisecond
-   `identityId` **[String]** Identity Id
-   `callback` **[module:api/IdentitiesApi~deleteIdentityCallback]** The callback function, accepting three arguments: error, data, response

## getResultForQuery

Fetch result of previously submitted Query
API Returns result of previously submitted transaction

### Parameters

-   `resultId` **[String]** Returned in previous Query/Invoke/Participant Operation
-   `callback` **[module:api/ResultApi~resultCallback]** The callback function, accepting three arguments: error, data, response

## getResultForInvoke

Fetch result of previously submitted Invoke
API Returns result of previously submitted transaction

### Parameters

-   `resultId` **[String]** Returned in previous Query/Invoke/Participant Operation
-   `callback` **[module:api/ResultApi~resultCallback]** The callback function, accepting three arguments: error, data, response

## getResultForIdentity

Fetch result of previously submitted Identity
API Returns result of previously submitted transaction

### Parameters

-   `resultId` **[String]** Returned in previous Query/Invoke/Participant Operation
-   `callback` **[module:api/ResultApi~resultCallback]** The callback function, accepting three arguments: error, data, response

## getResultForCurrentBlock

Fetch result of previously submitted Current Block
API Returns result of previously submitted transaction

### Parameters

-   `resultId` **[String]** Returned in previous Query/Invoke/Participant Operation
-   `callback` **[module:api/ResultApi~resultCallback]** The callback function, accepting three arguments: error, data, response

## getResultForBlockByNumber

Fetch result of previously submitted Block By Number
API Returns result of previously submitted transaction

### Parameters

-   `resultId` **[String]** Returned in previous Query/Invoke/Participant Operation
-   `callback` **[module:api/ResultApi~resultCallback]** The callback function, accepting three arguments: error, data, response

## getResultForDeleteIdentity

Fetch result of previously submitted Delete Identity
API Returns result of previously submitted transaction

### Parameters

-   `resultId` **[String]** Returned in previous Query/Invoke/Participant Operation
-   `callback` **[module:api/ResultApi~resultCallback]** The callback function, accepting three arguments: error, data, response

## setLoggerLevel

Set logger level
Function to set log level return nothing

### Parameters

-   `level` **[String]** "log level"

## setApiToken

Set Api Token
Function to set log level return nothing

### Parameters

-   `token` **[String]** "Setting Token"

## setURL

Set URL
Function to set log level return nothing

### Parameters

-   `url` **[String]** "Setting base URL"

## subscribeAllEvents

Subscribe all events
Listen to the event server for smart contract events

### Parameters

-   `callback` **[String]**




[247]: #apiclient

[248]: #basepath

[249]: #logger

[250]: #token

[255]: #setloggerlevel

[288]: #eventclient

[295]: #getblockbynumber

[297]: #getblockbynumberasync

[299]: #getcurrentblock

[301]: #getcurrentblockasync

[303]: #gettransactionbytransactionid

[305]: #gettransactionbytransactionidasync

[307]: #query

[309]: #queryasync

[311]: #invoke

[313]: #invokeasync

[315]: #currentidentity

[317]: #getidentities

[319]: #enrollidentity

[321]: #enrollidentityasync

[323]: #regenerateidentityapitoken

[325]: #regenerateidentityapitokenasync

[327]: #getidentity

[329]: #deleteidentity

[331]: #deleteidentityasync

[333]: #getresultforquery

[335]: #getresultforinvoke

[337]: #getresultforidentity

[339]: #getresultforcurrentblock

[341]: #getresultforblockbynumber

[343]: #getresultfordeleteidentity

[345]: #setloggerlevel-7

[347]: #setapitoken

[349]: #seturl

[351]: #subscribeallevents

[353]: #unsubscribe
/**
 * Javascript SDK for Xooa
 * 
 * Copyright 2018 Xooa
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at:
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License
 * for the specific language governing permissions and limitations under the License.
 * 
 * Author: Arisht Jain
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ApiClient', 'api/BlockchainApi', 'api/IdentitiesApi', 'api/InvokeApi', 'api/QueryApi', 'api/ResultApi', './api/EventClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('./ApiClient'), require('./api/BlockchainApi'), require('./api/IdentitiesApi'), require('./api/InvokeApi'), require('./api/QueryApi'), require('./api/ResultApi'), require('./api/EventClient'));
    }

    if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
        window.XooaClient = factory(require('./ApiClient'), require('./api/BlockchainApi'), require('./api/IdentitiesApi'), require('./api/InvokeApi'), require('./api/QueryApi'), require('./api/ResultApi'), require('./api/EventClient'));
    }
}(function (ApiClient, BlockchainApi, IdentitiesApi, InvokeApi, QueryApi, ResultApi, EventClient) {
    'use strict';


    ApiClient = new ApiClient(),

        /**
         * The EventClient service constructor.
         * @property {module:api/EventClient}
         */
        EventClient = new EventClient(ApiClient), /**
     * The ApiClient service constructor.
     * @property {module:api/ApiClient}
     */
        /**
         * The BlockchainApi service constructor.
         * @property {module:api/BlockchainApi}
         */
        BlockchainApi = new BlockchainApi(ApiClient),
        /**
         * The IdentitiesApi service constructor.
         * @property {module:api/IdentitiesApi}
         */
        IdentitiesApi = new IdentitiesApi(ApiClient),
        /**
         * The InvokeApi service constructor.
         * @property {module:api/InvokeApi}
         */
        InvokeApi = new InvokeApi(ApiClient),
        /**
         * The QueryApi service constructor.
         * @property {module:api/QueryApi}
         */
        QueryApi = new QueryApi(ApiClient),
        /**
         * The ResultApi service constructor.
         * @property {module:api/ResultApi}
         */
        ResultApi = new ResultApi(ApiClient)


    /**
     * Get block data (block #)
     * Get specific block information such as hash, # of transactions
     * @param {String} blockNumber Block number to fetch data
     * @param {Object} opts Optional parameters
     * @param {String} opts.async Call this request asynchronously without waiting for response
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/BlockchainApi~blockDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getBlockByNumber(blockNumber, opts, callback) {
        return await BlockchainApi.getBlockByNumber(blockNumber, opts, callback);
    }

    /**
     * Get block data (block #)
     * Get specific block information such as hash, # of transactions
     * @param {String} blockNumber Block number to fetch data
     * @param {Object} opts Optional parameters
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/BlockchainApi~blockDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getBlockByNumberAsync(blockNumber, opts, callback) {
        Object.assign(opts, {async: true})
        return await BlockchainApi.getBlockByNumber(blockNumber, opts, callback)
    }

    /**
     * Get current blocks
     * Get current blocks in the network
     * @param {Object} opts Optional parameters
     * @param {String} opts.async Call this request asynchronously without waiting for response
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/BlockchainApi~blockHeightCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getCurrentBlock(opts, callback) {
        return await BlockchainApi.getCurrentBlock(opts, callback)
    }

    /**
     * Get current blocks
     * Get current blocks in the network
     * @param {Object} opts Optional parameters
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/BlockchainApi~blockHeightCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getCurrentBlockAsync(opts, callback) {
        Object.assign(opts, {async: true})
        return await BlockchainApi.getCurrentBlock(opts, callback)
    }

    /**
     * Get transaction data
     * Get specific transaction information
     * @param {String} txId Transaction Id to fetch data
     * @param {Object} opts Optional parameters
     * @param {String} opts.async Call this request asynchronously without waiting for response
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/BlockchainApi~transactionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getTransactionByTransactionId(txId, opts, callback) {
        return await BlockchainApi.getTransactionByTransactionId(txId, opts, callback);
    }

    /**
     * Get transaction data
     * Get specific transaction information
     * @param {String} txId Transaction Id to fetch data
     * @param {Object} opts Optional parameters
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/BlockchainApi~transactionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getTransactionByTransactionIdAsync(txId, opts, callback) {
        Object.assign(opts, { async: true })
        return await BlockchainApi.getTransactionByTransactionId(txId, opts, callback)
    }

    /**
     * Query Blockchain data
     * The query API End Point is used for querying blockchain state. The end point must call a function already defined in your Smart Contract app which will process the query request. The function name is part of the endpoint URL, or can be entered as the fcn parameter  when testing using the Sandbox. The function arguments (number of arguments and type) is determined by the Smart Contract. The Smart Contract is responsible for validation and exception management. For example, if testing the sample get-set Smart Contract app, enter ‘get’ (without quotes) as the value for fcn.   The response body is also determined by the Smart Contract app, and that’s also the reason why a consistent response sample is unavailable for this end point. A success response may be either 200 or 202. For more details refer to Synchronous vs Asynchronous Calls. In contrast to Invoke, the Query end point will often return fast even when called in Synchronous mode  Required permission: read (\&quot;Access\&quot;:\&quot;rw\&quot; or \&quot;Access\&quot;:\&quot;r\&quot;)
     * @param {String} fcn The blockchain Smart Contract app function name to call
     * @param {Object} opts Optional parameters
     * @param {String} args Argument(s) to pass to the blockchain Smart Contract app function. example - [\&quot;arg1\&quot;,\&quot;arg2\&quot;]
     * @param {String} opts.async Call this request asynchronously without waiting for response
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/QueryApi~queryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function query(fcn, opts, args, callback) {
        return await QueryApi.query(fcn, opts, args, callback)
    }

    /**
     * Query Blockchain data
     * The query API End Point is used for querying blockchain state. The end point must call a function already defined in your Smart Contract app which will process the query request. The function name is part of the endpoint URL, or can be entered as the fcn parameter  when testing using the Sandbox. The function arguments (number of arguments and type) is determined by the Smart Contract. The Smart Contract is responsible for validation and exception management. For example, if testing the sample get-set Smart Contract app, enter ‘get’ (without quotes) as the value for fcn.   The response body is also determined by the Smart Contract app, and that’s also the reason why a consistent response sample is unavailable for this end point. A success response may be either 200 or 202. For more details refer to Synchronous vs Asynchronous Calls. In contrast to Invoke, the Query end point will often return fast even when called in Synchronous mode  Required permission: read (\&quot;Access\&quot;:\&quot;rw\&quot; or \&quot;Access\&quot;:\&quot;r\&quot;)
     * @param {String} fcn The blockchain Smart Contract app function name to call
     * @param {Object} opts Optional parameters
     * @param {String} args Argument(s) to pass to the blockchain Smart Contract app function. example - [\&quot;arg1\&quot;,\&quot;arg2\&quot;]
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/QueryApi~queryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function queryAsync(fcn, opts, args, callback) {
        Object.assign(opts, {async: true})
        return await QueryApi.query(fcn, opts, args, callback)
    }

    /**
     * Submit blockchain transaction
     * The Invoke API End Point is used for submitting transaction for processing by the blockchain Smart Contract app. The end point must call a function already defined in your Smart Contract app which will process the Invoke request. The function name is part of the endpoint URL, or can be entered as the fcn parameter  when testing using the Sandbox. For example, if testing the sample get-set Smart Contract app, use ‘set’ (without quotes)  as the value for fcn.   The function arguments (number of arguments and type) is determined by the Smart Contract. The Smart Contract is also responsible for arguments validation and exception management. The payload object of Invoke Transaction Response in case of Final Response is determined by the Smart Contract app.   A success response may be either 200 or 202. For more details refer to Synchronous vs Asynchronous Calls Required permission: write (\&quot;Access\&quot;:\&quot;rw\&quot;)
     * @param {String} fcn The blockchain Smart Contract app function name to invoke
     * @param {Object} opts Optional parameters
     * @param {String} opts.async Call this request asynchronously without waiting for response
     * @param {String} args argument to pass Smart Contract
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/InvokeApi~invokeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function invoke(fcn, opts, args, callback) {
        return await InvokeApi.invoke(fcn, opts, args, callback)
    }

    /**
     * Submit blockchain transaction
     * The Invoke API End Point is used for submitting transaction for processing by the blockchain Smart Contract app. The end point must call a function already defined in your Smart Contract app which will process the Invoke request. The function name is part of the endpoint URL, or can be entered as the fcn parameter  when testing using the Sandbox. For example, if testing the sample get-set Smart Contract app, use ‘set’ (without quotes)  as the value for fcn.   The function arguments (number of arguments and type) is determined by the Smart Contract. The Smart Contract is also responsible for arguments validation and exception management. The payload object of Invoke Transaction Response in case of Final Response is determined by the Smart Contract app.   A success response may be either 200 or 202. For more details refer to Synchronous vs Asynchronous Calls Required permission: write (\&quot;Access\&quot;:\&quot;rw\&quot;)
     * @param {String} fcn The blockchain Smart Contract app function name to invoke
     * @param {Object} opts Optional parameters
     * @param {String} args argument to pass Smart Contract
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/InvokeApi~invokeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function invokeAsync(fcn, opts, args, callback) {
        Object.assign(opts, {async: true})
        return await InvokeApi.invoke(fcn, opts, args, callback)
    }

    /**
     * Authenticated Identity Information
     * This End Point Returns Information about the Authenticated Identity
     * @param {module:api/IdentitiesApi~authenticatedIdentityInformationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function currentIdentity(callback) {
        return await IdentitiesApi.currentIdentity(callback)
    }

    /**
     * Get All Identities
     * Get all identities from the identity registry
     * @param {module:api/IdentitiesApi~identitiesGetAllIdentitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getIdentities(callback) {
        return await IdentitiesApi.getIdentities(callback)
    }

    /**
     * Enroll Identity
     * The Enroll Identity end point is used to  enroll new identities for the Smart Contract app.  A success response includes the API Key generated for the identity. This API Key can be used to call API End points on behalf of the enrolled identity. This End Point provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this end point will appear, and can be managed, using Xooa console under the identities tab of the Smart Contract app Required permission: manage identities (canManageIdentities&#x3D;true)
     * @param {Object} opts Optional parameters
     * @param {String} opts.async Call this request asynchronously without waiting for response
     * @param {String} opts.timeout Request timeout
     * @param {String} identity Request payload body
     * @param {module:api/IdentitiesApi~enrollmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function enrollIdentity(opts, identity, callback) {
        return await IdentitiesApi.enrollIdentity(opts, identity, callback)
    }

    /**
     * Enroll Identity
     * The Enroll Identity end point is used to  enroll new identities for the Smart Contract app.  A success response includes the API Key generated for the identity. This API Key can be used to call API End points on behalf of the enrolled identity. This End Point provides equivalent functionality to adding new identity manually using Xooa console, and identities added using this end point will appear, and can be managed, using Xooa console under the identities tab of the Smart Contract app Required permission: manage identities (canManageIdentities&#x3D;true)
     * @param {Object} opts Optional parameters
     * @param {String} opts.timeout Request timeout
     * @param {String} identity Request payload body
     * @param {module:api/IdentitiesApi~enrollmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function enrollIdentityAsync(opts, identity, callback) {
        Object.assign(opts, {async: true})
        return await IdentitiesApi.enrollIdentity(opts, identity, callback)
    }


    /**
     * Regenerate Identity API Token
     * @param {String} identityId Identity Id
     * @param {Object} opts opts
     * @param {module:api/IdentitiesApi~regenerateTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function regenerateIdentityApiToken(opts, identityId, callback) {
        return await IdentitiesApi.regenerateIdentityApiToken(opts, identityId, callback)
    }

    /**
     * Regenerate Identity API Token
     * @param {String} identityId Identity Id
     * @param {Object} opts opts
     * @param {module:api/IdentitiesApi~regenerateTokenCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function regenerateIdentityApiTokenAsync(opts, identityId, callback) {
        Object.assign(opts, {async: true})
        return await IdentitiesApi.regenerateIdentityApiToken(opts, identityId, callback)
    }

    /**
     * Identity Information
     * Get the specified identity from the identity registry
     * @param {String} identityId Identity Id
     * @param {module:api/IdentitiesApi~identityInformationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getIdentity(identityId, callback) {
        return await IdentitiesApi.getIdentity(identityId, callback)
    }

    /**
     * Delete Identity
     * @param {String} identityId Identity Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.async Call this request asynchronously without waiting for response
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/IdentitiesApi~deleteIdentityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function deleteIdentity(opts, identityId, callback) {
        return await IdentitiesApi.deleteIdentity(opts, identityId, callback)
    }

    /**
     * Delete Identity
     * Delete Identity.
     * @param {String} identityId Identity Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.timeout Request timeout in millisecond
     * @param {module:api/IdentitiesApi~deleteIdentityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function deleteIdentityAsync(opts, identityId, callback) {
        Object.assign(opts, {async: true})
        return await IdentitiesApi.deleteIdentity(opts, identityId, callback)
    }

    /**
     * Fetch result of previously submitted Query
     * API Returns result of previously submitted transaction
     * @param {String} resultId Returned in previous Query/Invoke/Participant Operation
     * @param {module:api/ResultApi~resultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getResultForQuery(resultId, callback) {
        return await ResultApi.result(resultId, callback)
    }

    /**
     * Fetch result of previously submitted Invoke
     * API Returns result of previously submitted transaction
     * @param {String} resultId Returned in previous Query/Invoke/Participant Operation
     * @param {module:api/ResultApi~resultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getResultForInvoke(resultId, callback) {
        return await ResultApi.result(resultId, callback)
    }

    /**
     * Fetch result of previously submitted Identity
     * API Returns result of previously submitted transaction
     * @param {String} resultId Returned in previous Query/Invoke/Participant Operation
     * @param {module:api/ResultApi~resultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getResultForIdentity(resultId, callback) {
        return await ResultApi.result(resultId, callback)
    }

    /**
     * Fetch result of previously submitted Current Block
     * API Returns result of previously submitted transaction
     * @param {String} resultId Returned in previous Query/Invoke/Participant Operation
     * @param {module:api/ResultApi~resultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getResultForCurrentBlock(resultId, callback) {
        return await ResultApi.result(resultId, callback)
    }

    /**
     * Fetch result of previously submitted Block By Number
     * API Returns result of previously submitted transaction
     * @param {String} resultId Returned in previous Query/Invoke/Participant Operation
     * @param {module:api/ResultApi~resultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getResultForBlockByNumber(resultId, callback) {
        return await ResultApi.result(resultId, callback)
    }

    /**
     * Fetch result of previously submitted Delete Identity
     * API Returns result of previously submitted transaction
     * @param {String} resultId Returned in previous Query/Invoke/Participant Operation
     * @param {module:api/ResultApi~resultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    async function getResultForDeleteIdentity(resultId, callback) {
        return await ResultApi.result(resultId, callback)
    }

    /**
     * Set logger level
     * Function to set log level return nothing
     * @param {String} level "log level"
     */
    function setLoggerLevel(level) {
        ApiClient.setLoggerLevel(level)
    }

    /**
     * Set Api Token
     * Function to set log level return nothing
     * @param {String} token "Setting Token"
     */
    function setApiToken(token) {
        ApiClient.setApiToken(token)
    }

    /**
     * Set URL
     * Function to set log level return nothing
     * @param {String} url "Setting Token"
     */
    function setURL(url) {
        ApiClient.setURL(url)
    }

    /**
     * Subscribe all events
     * Listen to the event server for smart contract events
     * @param {String} callback "Setting Token"
     */
    function subscribeAllEvents(callback) {
        EventClient.subscribeAllEvents(callback)
    }

    /**
     * Unsubscribe to all events
     * */
    function unsubscribe() {
        EventClient.unsubscribe()
    }


    var exports = function () {
        /**
         * The ApiClient constructor.
         * @property {module:ApiClient}
         */
        return {
            // validate : validate,
            getBlockByNumber: getBlockByNumber,
            getBlockByNumberAsync: getBlockByNumberAsync,
            getTransactionByTransactionId: getTransactionByTransactionId,
            getTransactionByTransactionIdAsync: getTransactionByTransactionIdAsync,
            getCurrentBlock: getCurrentBlock,
            getCurrentBlockAsync: getCurrentBlockAsync,
            query: query,
            queryAsync: queryAsync,
            invoke: invoke,
            invokeAsync: invokeAsync,
            currentIdentity: currentIdentity,
            getIdentities: getIdentities,
            enrollIdentity: enrollIdentity,
            enrollIdentityAsync: enrollIdentityAsync,
            regenerateIdentityApiToken: regenerateIdentityApiToken,
            regenerateIdentityApiTokenAsync: regenerateIdentityApiTokenAsync,
            getIdentity: getIdentity,
            deleteIdentity: deleteIdentity,
            deleteIdentityAsync: deleteIdentityAsync,
            getResultForQuery: getResultForQuery,
            getResultForInvoke: getResultForInvoke,
            getResultForIdentity: getResultForIdentity,
            getResultForCurrentBlock: getResultForCurrentBlock,
            getResultForBlockByNumber: getResultForBlockByNumber,
            getResultForDeleteIdentity: getResultForDeleteIdentity,
            setLoggerLevel: setLoggerLevel,
            setApiToken: setApiToken,
            setURL: setURL,
            subscribeAllEvents: subscribeAllEvents,
            unsubscribe: unsubscribe,
        }

    };

    return exports;
}));

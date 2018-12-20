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

(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'));
    } else {
        // Browser globals (root is window)
        if (!root.XooaJavascriptSdk) {
            root.XooaJavascriptSdk = {};
        }
        root.XooaJavascriptSdk.QueryApi = factory(root.XooaJavascriptSdk.ApiClient);
    }
}(this, function (ApiClient) {
    'use strict';

    /**
     * Query service.
     * @module api/QueryApi
     * @version v1
     */

    /**
     * Constructs a new QueryApi.
     * @alias module:api/QueryApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    var exports = function (apiClient) {
        this.apiClient = apiClient || ApiClient.instance;


        /**
         * Callback function to receive the result of the query operation.
         * @callback module:api/QueryApi~queryCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

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
        this.query = async function (fcn, opts, args, callback) {
            this.apiClient.debug({"fn": "query", fcn: fcn, args: args})
            opts = opts || {};

            // verify the required parameter 'fcn' is set
            if (fcn === undefined || fcn === null) {
                throw new Error("Missing the required parameter 'fcn' when calling query");
            }

            // verify the required parameter 'fcn' is set

            if (args === undefined || args === null) {
                throw new Error("Missing the required parameter 'args' when calling invoke");
            }
            var postBody = args;

            var pathParams = {
                'fcn': fcn
            };
            var queryParams = {
                'async': opts['async'],
                'timeout': opts['timeout'],
            };
            var collectionQueryParams = {};
            var headerParams = {};
            var formParams = {};

            var contentTypes = [];
            var accepts = [];
            var returnType = null;

            return await this.apiClient.callApi(
                '/query/{fcn}', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                contentTypes, accepts, returnType, queryParams.async, callback
            );
        }
    };

    return exports;
}));

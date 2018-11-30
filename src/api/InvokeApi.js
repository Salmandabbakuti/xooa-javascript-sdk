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
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['ApiClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../ApiClient'));
    } else {
        // Browser globals (root is window)
        if (!root.XooaBlockchainApis) {
            root.XooaBlockchainApis = {};
        }
        root.XooaBlockchainApis.InvokeApi = factory(root.XooaBlockchainApis.ApiClient);
    }
}(this, function (ApiClient) {
    'use strict';

    /**
     * Invoke service.
     * @module api/InvokeApi
     * @version v1
     */

    /**
     * Constructs a new InvokeApi.
     * @alias module:api/InvokeApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    var exports = function (apiClient) {
        this.apiClient = apiClient || ApiClient.instance;


        /**
         * Callback function to receive the result of the invoke operation.
         * @callback module:api/InvokeApi~invokeCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

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
        this.invoke = async function (fcn, opts, args, callback) {
            apiClient.logger.debug({"fn": "invoke", fcn: fcn, args: args})
            opts = opts || {};

            // verify the required parameter 'fcn' is set

            if (fcn === undefined || fcn === null) {
                throw new Error("Missing the required parameter 'fcn' when calling invoke");
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
                '/invoke/{fcn}', 'POST',
                pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
                 contentTypes, accepts, returnType, queryParams.async, callback
            );
        }
    };

    return exports;
}));

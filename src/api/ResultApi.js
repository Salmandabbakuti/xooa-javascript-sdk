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

(function(root, factory) {
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
    root.XooaBlockchainApis.ResultApi = factory(root.XooaBlockchainApis.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Result service.
   * @module api/ResultApi
   * @version v1
   */

  /**
   * Constructs a new ResultApi. 
   * @alias module:api/ResultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the result operation.
     * @callback module:api/ResultApi~resultCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch result of previously submitted transaction
     * API Returns result of previously submitted transaction
     * @param {String} resultId Returned in previous Query/Invoke/Participant Operation
     * @param {module:api/ResultApi~resultCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.result = async function(resultId, callback) {
        apiClient.logger.debug({"fn": "result", resultId: resultId})

        var postBody = null;

      // verify the required parameter 'resultId' is set
      if (resultId === undefined || resultId === null) {
        throw new Error("Missing the required parameter 'resultId' when calling result");
      }


      var pathParams = {
        'ResultId': resultId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return await this.apiClient.callApi(
        '/results/{ResultId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
         contentTypes, accepts, returnType, queryParams.async, callback
      );
    }
  };

  return exports;
}));

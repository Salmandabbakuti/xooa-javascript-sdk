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
	if (typeof module === 'object' && module.exports)
	// CommonJS-like environments that support module.exports, like Node.
		module.exports = factory(require('../ApiClient'))
	else {
		// Browser globals (root is window)
		if (!root.XooaJavascriptSdk)
			root.XooaJavascriptSdk = {}

		root.XooaJavascriptSdk.ResultApi = factory(root.XooaJavascriptSdk.ApiClient)
	}
}(this, ApiClient => {
	'use strict'

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
	const exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance


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
		this.result = async function (resultId, callback) {
			this.apiClient.debug({
				fn: 'result',
				resultId,
			})

			const postBody = null

			// verify the required parameter 'resultId' is set
			if (resultId === undefined || resultId === null)
				throw new Error("Missing the required parameter 'resultId' when calling result")



			const pathParams = { ResultId: resultId }
			const queryParams = {}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/results/{ResultId}', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}
	}

	return exports
}))

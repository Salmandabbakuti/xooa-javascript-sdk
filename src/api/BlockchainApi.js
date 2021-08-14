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

		root.XooaJavascriptSdk.BlockchainApi = factory(root.XooaJavascriptSdk.ApiClient)
	}
}(this, ApiClient => {
	'use strict'

	/**
     * Blockchain service.
     * @module api/BlockchainApi
     * @version v1
     */

	/**
     * Constructs a new BlockchainApi.
     * @alias module:api/BlockchainApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
	const exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance


		/**
         * Callback function to receive the result of the blockData operation.
         * @callback module:api/BlockchainApi~blockDataCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Get block data (block #)
         * Get specific block information such as hash, # of transactions
         * @param {String} blockNumber Block number to fetch data
         * @param {Object} opts Optional parameters
         * @param {String} opts.async Call this request asynchronously without waiting for response
         * @param {String} opts.timeout Request timeout in millisecond
         * @param {module:api/BlockchainApi~blockDataCallback} callback The callback function, accepting three arguments: error, data, response
		 * @returns {}
         */
		this.getBlockByNumber = async function (blockNumber, opts) {
			apiClient.debug({
				fn: 'getBlockByNumber',
				blockNumber,
				opts,
			})
			opts = opts || {}
			const postBody = null

			// verify the required parameter 'blockNumber' is set
			if (blockNumber === undefined || blockNumber === null)
				throw new Error("Missing the required parameter 'blockNumber' when calling blockData")



			const pathParams = { BlockNumber: blockNumber }
			const queryParams = {
				async: opts.async,
				timeout: opts.timeout,
			}
			this.apiClient.debug({
				fn: 'getBlockByNumber',
				queryParams,
			})

			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null


			return await this.apiClient.callApi(
				'/block/{BlockNumber}', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async
			)
		}

		/**
         * Callback function to receive the result of the blockHeight operation.
         * @callback module:api/BlockchainApi~blockHeightCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Get current blocks
         * Get current blocks in the network
         * @param {Object} opts Optional parameters
         * @param {String} opts.async Call this request asynchronously without waiting for response
         * @param {String} opts.timeout Request timeout in millisecond
         * @param {module:api/BlockchainApi~blockHeightCallback} callback The callback function, accepting three arguments: error, data, response
		 * @returns {}
         */
		this.getCurrentBlock = async function (opts, callback) {
			opts = opts || {}
			const postBody = null
			this.apiClient.debug({
				fn: 'getCurrentBlock',
				opts,
			})

			const pathParams = {}
			const queryParams = {
				async: opts.async,
				timeout: opts.timeout,
			}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/block/current', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

		/**
         * Callback function to receive the result of the transaction operation.
         * @callback module:api/BlockchainApi~transactionCallback
         * @param {String} error Error message, if any.
         * @param data This operation does not return a value.
         * @param {String} response The complete HTTP response.
         */

		/**
         * Get transaction data
         * Get specific transaction information
         * @param {String} txId Transaction Id to fetch data
         * @param {Object} opts Optional parameters
         * @param {String} opts.async Call this request asynchronously without waiting for response
         * @param {String} opts.timeout Request timeout in millisecond
         * @param {module:api/BlockchainApi~transactionCallback} callback The callback function, accepting three arguments: error, data, response
		 * @returns {}
         */
		this.getTransactionByTransactionId = async function (txId, opts) {
			this.apiClient.debug({
				fn: 'getTransactionByTransactionId',
				txId,
				opts,
			})
			opts = opts || {}
			const postBody = null

			// verify the required parameter 'txId' is set
			if (txId === undefined || txId === null)
				throw new Error("Missing the required parameter 'txId' when calling getTransactionByTransactionId")



			const pathParams = { TxId: txId }
			const queryParams = {
				async: opts.async,
				timeout: opts.timeout,
			}
			this.apiClient.debug({
				fn: 'getTransactionByTransactionId',
				queryParams,
			})

			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null


			return await this.apiClient.callApi(
				'/transactions/{TxId}', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async
			)
		}


		/**
				 * Gets the current worldstate with the applied filters
				 * Gets current worldstate list for last 30 days by default
				 * @param {Object} opts Optional parameters
				 * @param {module:api/BlockchainApi~transactionCallback} callback The callback function, accepting three arguments: error, data, response
				 * @returns {}
				 */
		this.getCurrentWorldState = async function (opts, callback) {
			opts = opts || {}
			const postBody = null
			this.apiClient.debug({
				fn: 'getCurrentWorldState',
				opts,
			})

			const pathParams = {}
			const queryParams = {
				from: opts.from || Date.now() - 2592000000,
				to: opts.to || Date.now(),
				key: opts.key,
				value: opts.value,
				limit: opts.limit || 10,
				offset: opts.offset || 0
			}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/worldstate/', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

		/**
				 * Gets the worldstate transactions with the applied filters
				 * Gets transactions list for last 30 days by default
				 * @param {Object} opts Optional parameters
				 * @param {module:api/BlockchainApi~transactionCallback} callback The callback function, accepting three arguments: error, data, response
				 * @returns {}
				 */
		this.getWorldStateTransactions = async function (opts, callback) {
			opts = opts || {}
			const postBody = null
			this.apiClient.debug({
				fn: 'getWorldStateTransactions',
				opts,
			})

			const pathParams = {}
			const queryParams = {
				from: opts.from || Date.now() - 2592000000,
				to: opts.to || Date.now(),
				key: opts.key,
				value: opts.value,
				limit: opts.limit || 10,
				offset: opts.offset || 0
			}
			const collectionQueryParams = {}
			const headerParams = {}
			const formParams = {}

			const contentTypes = []
			const accepts = []
			const returnType = null

			return await this.apiClient.callApi(
				'/worldstate/transactions', 'GET',
				pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
				contentTypes, accepts, returnType, queryParams.async, callback
			)
		}

	}

	return exports
}))

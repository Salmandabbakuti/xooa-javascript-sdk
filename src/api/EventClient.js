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
		module.exports = factory(require('socket.io-client'), require('../ApiClient'))
	else {
		// Browser globals (root is window)
		if (!root.XooaJavascriptSdk)
			root.XooaJavascriptSdk = {}


		root.XooaJavascriptSdk.EventClient = factory(root.io, root.XooaJavascriptSdk.ApiClient)
	}
}(this, (io, ApiClient) => {
	'use strict'

	/**
     * Invoke service.
     * @module api/InvokeApi
     * @version v1
     */
	const apiClient = ApiClient.instance


	let socketG = null
	/**
     * Constructs a new InvokeApi.
     * @alias module:api/InvokeApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */

	const exports = function (apiClient) {
		this.apiClient = apiClient || ApiClient.instance
		this.subscribeAllEvents = function (callback) {
			this.apiClient.debug(apiClient.token)
			this.apiClient.debug({ fn: 'subscribeAllEvents' })
			this.connectServer(apiClient.token, callback)
		}

		this.unsubscribe = function (callback) {
			apiClient.debug({ fn: 'unsubscribe' })
			this.unsubscribeE(callback)
		}

	}

	exports.prototype.connectServer = function (token, callback) {
		const socket = io('https://api.xooa.com', { path: '/subscribe' })
		socketG = socket
		apiClient.debug(apiClient.token)
		socket.on('connect', () => {
			// Authenticate Using Identity Token
			socket.emit('authenticate', { token })
		})

		socket.on('authenticated', () => {

		})
			.on('event', data => {
				callback(data)
			})
			.on('error', err => {
				console.error('Error', err)
			})
			.on('unauthorized', () => {
				console.warn('Unauthorized')
				socket.disconnect()
			})

	}

	exports.prototype.unsubscribeE = function () {
		socketG.disconnect()
	}

	return exports
}))

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
		module.exports = factory(require('superagent'), require('querystring'))
	else {
		// Browser globals (root is window)
		if (!root.XooaJavascriptSdk)
			root.XooaJavascriptSdk = {}

		root.XooaJavascriptSdk.ApiClient = factory(root.superagent, root.querystring)
	}
}(this, (superagent, querystring) => {
	'use strict'

	/**
     * @module ApiClient
     * @version v1
     */

	/**
     * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
     * application to use this class directly - the *Api and model classes provide the public API for the service. The
     * contents of this file should be regarded as internal but are documented for completeness.
     * @alias module:ApiClient
     * @class
     */



	const exports = function (logger) {


		/**
         * The base URL against which to resolve every API call's (relative) path.
         * @type {String}
         * @default https://api.xooa.com/api/v1/
         */
		this.basePath = 'https://api.xooa.com/api/v1/'.replace(/\/+$/, '')

		/**
         * Token
         * */
		this.token = '<YOUR_TOKEN_HERE>'
		/**
         * The default HTTP headers to be included for all API calls.
         * @type {Array.<String>}
         * @default {}
         */
		this.defaultHeaders = {}


		this.level = ''



		/**
         * The default HTTP timeout for all API calls.
         * @type {Number}
         * @default 60000
         */
		this.timeout = 60000

		/**
         * If set to false an additional timestamp parameter is added to all API GET calls to
         * prevent browser caching
         * @type {Boolean}
         * @default true
         */
		this.cache = true

		/**
         * If set to true, the client will save the cookies from each server
         * response, and return them in the next request.
         * @default false
         */
		this.enableCookies = false

		/*
         * Used to save and return cookies in a node.js (non-browser) setting,
         * if this.enableCookies is set to true.
         */
		if (typeof window === 'undefined')
			this.agent = new superagent.agent()


		/*
         * Allow user to override superagent agent
         */
		this.requestAgent = null
	}

	/**
     * Returns a string representation for an actual parameter.
     * @param level The actual parameter.
     * @returns {String} The string representation of <code>param</code>.
     */
	exports.prototype.setLoggerLevel = function (level) {
		if (level === undefined || level === null)
			throw new Error("Missing the required parameter 'level' when calling setLoggerLevel")

		this.level = level
	}

	/**
         *Setting Logger
         *t
         * */

	exports.prototype.normalizeContent = function (content) {
		let finalContent = ''
		for (let i = 0; i < content.length; i++) {
			const arg = content[i]
			finalContent += finalContent == '' ? JSON.stringify(arg) : '::' + JSON.stringify(arg)
		}
		return finalContent
	}

	exports.prototype.warn = function () {
		switch (this.level) {
			case 'warn':
			case 'all':
				const finalContent = this.normalizeContent(arguments)
				console.warn('[WARN] :: ', finalContent)
		}
	}
	exports.prototype.info = function () {
		switch (this.level) {
			case 'info':
			case 'all':
				const finalContent = this.normalizeContent(arguments)
				console.info('[INFO] :: ', finalContent)
		}
	}
	exports.prototype.debug = function () {
		switch (this.level) {
			case 'debug':
			case 'all':
				const finalContent = this.normalizeContent(arguments)
				console.debug('[DEBUG] :: ', finalContent)
		}
	}
	exports.prototype.log = function () {
		switch (this.level) {
			case 'log':
			case 'all':
				const finalContent = this.normalizeContent(arguments)
				console.log('[LOG] :: ', finalContent)
		}
	}
	exports.prototype.error = function () {
		switch (this.level) {
			case 'error':
			case 'all':
				const finalContent = this.normalizeContent(arguments)
				console.error('[ERROR] :: ', finalContent)
		}
	}

	// exports.prototype.setLoggerLevel = function (level) {
	//     if (level === undefined || level === null) {
	//         throw new Error("Missing the required parameter 'level' when calling result");
	//     }
	//     this.logger.level = level;
	// }


	exports.prototype.setApiToken = function (token) {
		if (token === undefined || token === null)
			throw new Error("Missing the required parameter 'token' when calling result")

		this.token = token
	}


	exports.prototype.setURL = function (url) {
		if (url === undefined || url === null)
			throw new Error("Missing the required parameter 'url' when calling result")

		this.basePath = url
	}


	exports.prototype.paramToString = function (param) {
		if (param == undefined || param == null)
			return ''

		if (param instanceof Date)
			return param.toJSON()

		return param.toString()
	}

	/**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @returns {String} The encoded path with parameter values substituted.
     */
	exports.prototype.buildUrl = function (path, pathParams) {
		if (!path.match(/^\//))
			path = '/' + path

		let url = this.basePath + path
		const _this = this
		url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
			let value
			if (pathParams.hasOwnProperty(key))
				value = _this.paramToString(pathParams[key])
			else
				value = fullMatch

			return encodeURIComponent(value)
		})
		return url
	}

	/**
     * Checks whether the given content type represents JSON.<br>
     * JSON content type examples:<br>
     * <ul>
     * <li>application/json</li>
     * <li>application/json; charset=UTF8</li>
     * <li>APPLICATION/JSON</li>
     * </ul>
     * @param {String} contentType The MIME content type to check.
     * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
     */
	exports.prototype.isJsonMime = function (contentType) {
		return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i))
	}

	/**
     * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
     * @param {Array.<String>} contentTypes
     * @returns {String} The chosen content type, preferring JSON.
     */
	exports.prototype.jsonPreferredMime = function (contentTypes) {
		for (let i = 0; i < contentTypes.length; i++)
			if (this.isJsonMime(contentTypes[i]))
				return contentTypes[i]


		return contentTypes[0]
	}


	/**
     * Normalizes parameter values:
     * <ul>
     * <li>remove nils</li>
     * <li>keep files and arrays</li>
     * <li>format to string with `paramToString` for other cases</li>
     * </ul>
     * @param {Object.<String, Object>} params The parameters as object properties.
     * @returns {Object.<String, Object>} normalized parameters.
     */
	exports.prototype.normalizeParams = function (params) {
		const newParams = {}
		for (const key in params)
			if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
				const value = params[key]

				newParams[key] = this.paramToString(value)

			}

		return newParams
	}

	/**
     * Builds a string representation of an array-type actual parameter, according to the given collection format.
     * @param {Array} param An array parameter.
     * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
     * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
     * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
     */
	exports.prototype.buildCollectionParam = function buildCollectionParam (param, collectionFormat) {
		if (param == null)
			return null

		switch (collectionFormat) {
			case 'csv':
				return param.map(this.paramToString).join(',')
			case 'ssv':
				return param.map(this.paramToString).join(' ')
			case 'tsv':
				return param.map(this.paramToString).join('\t')
			case 'pipes':
				return param.map(this.paramToString).join('|')
			case 'multi':
				// return the array directly as SuperAgent will handle it as expected
				return param.map(this.paramToString)
			default:
				throw new Error('Unknown collection format: ' + collectionFormat)
		}
	}

	/**
     * Applies authentication headers to the request.
     * @param {Object} request The request object created by a <code>superagent()</code> call.
     * @param {Array.<String>} authNames An array of authentication method names.
     */
	exports.prototype.applyAuthToRequest = function (request) {
		request.set({ Authorization: 'Bearer ' + this.token })
	}


	/**
     * Callback function to receive the result of the operation.
     * @callback module:ApiClient~callApiCallback
     * @param {String} error Error message, if any.
     * @param data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

	/**
     * Invokes the REST service using the supplied settings and parameters.
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Boolean} async Async or Sync call
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} collectionQueryParams A map of collection query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {Array.<String>} authNames An array of authentication type names.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * constructor for a complex type.
     * @param {module:ApiClient~callApiCallback} callback The callback function.
     * @returns {Object} The SuperAgent request object.
     */
	exports.prototype.callApi = async function callApi (path, httpMethod, pathParams,
		queryParams, collectionQueryParams, headerParams, formParams, bodyParam, contentTypes, accepts,
		returnType, async, callback) {


		this.info({
			path,
			httpMethod,
			pathParams,
			queryParams,
			collectionQueryParams,
			headerParams,
			formParams,
			bodyParam,
			contentTypes,
			accepts,
			returnType,
			async,
		})


		const _this = this
		const url = this.buildUrl(path, pathParams)
		const request = superagent(httpMethod, url)

		// apply authentications
		this.applyAuthToRequest(request)

		// set collection query parameters
		for (const key in collectionQueryParams)
			if (collectionQueryParams.hasOwnProperty(key)) {
				const param = collectionQueryParams[key]

				// All other collection query parameters should be treated as ordinary query parameters.
				queryParams[key] = this.buildCollectionParam(param.value, param.collectionFormat)

			}


		// set query parameters
		if (httpMethod.toUpperCase() === 'GET' && this.cache === false)
			queryParams._ = new Date().getTime()

		request.query(this.normalizeParams(queryParams))

		// set header parameters
		request.set(this.defaultHeaders).set(this.normalizeParams(headerParams))


		// set requestAgent if it is set by user
		if (this.requestAgent)
			request.agent(this.requestAgent)



		this.info({ timeout: this.timeout })
		// set request timeout
		request.timeout(this.timeout)


		request.type('application/json')

		if (bodyParam)
			request.send(bodyParam)


		const accept = this.jsonPreferredMime(accepts)
		if (accept)
			request.accept(accept)


		if (returnType === 'Blob')
			request.responseType('blob')
		else if (returnType === 'String')
			request.responseType('string')


		return new Promise((resolve, reject) => {
			request.end((error, response) => {
				const data = null
				if (!error)
					try {
						if (response.statusCode === 200 || async) {
							_this.info({
								statusCode: 200,
								body: response.body,
							})
							resolve([ error, undefined, response.body ])
						} else if (response.statusCode === 202) {
							_this.warn({
								statusCode: 202,
								body: response.body,
							})
							resolve([ error, response.body, undefined ])
						} else if (response.statusCode > 300) {
							_this.error(statusCode)
							resolve([ error, undefined, undefined ])
						}
					} catch (err) {
						error = err
						resolve(error.message)

					}

				else {
					_this.error(error)
					resolve(error, undefined, undefined)
				}
			}
			)
		})
	}

	/**
     * Parses an ISO-8601 string representation of a date value.
     * @param {String} str The date value as a string.
     * @returns {Date} The parsed date object.
     */
	exports.parseDate = function (str) {
		return new Date(str.replace(/T/i, ' '))
	}

	/**
     * Converts a value to the specified type.
     * @param {(String|Object)} data The data to convert, as a string or object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns An instance of the specified type or null or undefined if data is null or undefined.
     */
	// exports.convertToType = function (data, type) {
	//     if (data === null || data === undefined)
	//         return data

	//     switch (type) {
	//         case 'Boolean':
	//             return Boolean(data);
	//         case 'Integer':
	//             return parseInt(data, 10);
	//         case 'Number':
	//             return parseFloat(data);
	//         case 'String':
	//             return String(data);
	//         case 'Date':
	//             return this.parseDate(String(data));
	//         case 'Blob':
	//             return data;
	//         default:
	//             if (type === Object) {
	//                 // generic object, return directly
	//                 return data;
	//             } else if (typeof type === 'function') {
	//                 // for model type like: User
	//                 return type.constructFromObject(data);
	//             } else if (Array.isArray(type)) {
	//                 // for array type like: ['String']
	//                 var itemType = type[0];
	//                 return data.map(function (item) {
	//                     return exports.convertToType(item, itemType);
	//                 });
	//             } else if (typeof type === 'object') {
	//                 // for plain object type like: {'String': 'Integer'}
	//                 var keyType, valueType;
	//                 for (var k in type) {
	//                     if (type.hasOwnProperty(k)) {
	//                         keyType = k;
	//                         valueType = type[k];
	//                         break;
	//                     }
	//                 }
	//                 var result = {};
	//                 for (var k in data) {
	//                     if (data.hasOwnProperty(k)) {
	//                         var key = exports.convertToType(k, keyType);
	//                         var value = exports.convertToType(data[k], valueType);
	//                         result[key] = value;
	//                     }
	//                 }
	//                 return result;
	//             } else {
	//                 // for unknown type, return the data directly
	//                 return data;
	//             }
	//     }
	// };

	/**
     * Constructs a new map or array model from REST data.
     * @param data {Object|Array} The REST data.
     * @param obj {Object|Array} The target object or array.
     */
	// exports.constructFromObject = function (data, obj, itemType) {
	//     if (Array.isArray(data)) {
	//         for (var i = 0; i < data.length; i++) {
	//             if (data.hasOwnProperty(i))
	//                 obj[i] = exports.convertToType(data[i], itemType);
	//         }
	//     } else {
	//         for (var k in data) {
	//             if (data.hasOwnProperty(k))
	//                 obj[k] = exports.convertToType(data[k], itemType);
	//         }
	//     }
	// };

	/**
     * The default API client implementation.
     * @type {module:ApiClient}
     */
	exports.instance = new exports()

	return exports
}))

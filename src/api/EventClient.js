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
        define(['socket.io-client', 'ApiClient'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('socket.io-client'), require('../ApiClient'));
    } else {
        // Browser globals (root is window)
        if (!root.XooaBlockchainApis) {
            root.XooaBlockchainApis = {};
        }

        root.XooaBlockchainApis.EventClient = factory(root.io, root.XooaBlockchainApis.ApiClient);
    }
}(this, function (io, ApiClient) {
    'use strict';

    /**
     * Invoke service.
     * @module api/InvokeApi
     * @version v1
     */
    var apiClient = ApiClient.instance;


    var socketG = null
    /**
     * Constructs a new InvokeApi.
     * @alias module:api/InvokeApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */

    var exports = function () {
        this.subscribeAllEvents = function (callback) {
            apiClient.logger.debug({"fn": "subscribeAllEvents"})
            let regExFilter = "*"
            this.connectServer(regExFilter, callback);
        }


        this.subscribeEvents = function (regExFilter, callback) {
            apiClient.logger.debug({"fn": "subscribeEvents", regExFilter: regExFilter})

            this.connectServer(regExFilter, callback);
        }


        this.unsubscribe = function (callback) {
            apiClient.logger.debug({"fn": "unsubscribe"})
            this.unsubscribeE( callback);
        }

    };

    exports.prototype.connectServer = function (regExFilter, callback) {

        if (regExFilter !== "*") {
            var regExp = new RegExp(regExFilter)
        }
        const socket = io("https://api.xooa.com", {
            path: "/subscribe"
        });
        socketG = socket;
        socket.on("connect", function () {
            //Authenticate Using Identity Token
            socket.emit("authenticate", {
                token: apiClient.token
            });
        });

        socket
            .on("authenticated", function () {
                //console.log("Authenticated");
            })
            .on("event", (data) => {
                if (regExFilter === "*") {
                    callback(data)
                } else {
                    if (regExp.test(data.eventName)) {
                        callback(data)
                    }
                }
            })
            .on("error", err => {
                console.log("Error", err);
            })
            .on("unauthorized", function () {
                console.log("Unauthorized")
                socket.disconnect();
            });

    }

    exports.prototype.unsubscribeE = function () {
        socketG.disconnect();
    }

    return exports;
}));

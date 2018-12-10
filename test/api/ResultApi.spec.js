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
        // AMD.
        define(['expect.js', '../../src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        factory(require('expect.js'), require('../../src/index'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.XooaJavascriptSdk);
    }
}(this, function (expect, XooaJavascriptSdk) {
    'use strict';

    var instance;

    beforeEach(function () {
        instance = new XooaJavascriptSdk();
        instance.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiI3RDc4MDFQLVRHNjRQRUQtS0FNS1dXNS1DQzlZOVE1IiwiQXBpU2VjcmV0IjoiNThKc0pXMmNXYVNqZWJwIiwiUGFzc3BocmFzZSI6IjA0NDU5YzMxOTczZmZmZTUxMmY4YjE0YmM0YWY4ZTkyIiwiaWF0IjoxNTQzODE0MDg0fQ.53gr7fsngTaWLmcxozpuxCDjDVcScJOCZIdNflZ0fcI")

    });

    var newIdentity = {
        "IdentityName": "string",
        "Access": "r",
        "Attrs": [
            {
                "name": "string",
                "ecert": true,
                "value": "string"
            }
        ],
        "canManageIdentities": true
    }

    var invokeResultID = "eeaf0524-c78e-43bd-8788-f5d7c0bc6fe9";
    var queryResultID = "880671f6-b5ba-467e-8e12-ee935ebe9826";
    var identityResultID = "e2e98400-bce2-4afa-9794-419d1a02192d";
    var deleteIdentityResultID = "20e173ad-53dc-4860-9455-829582a54dac";
    var currentBlockResultID = "a5ba06d5-3d7a-474e-90be-68f900ce555e";
    var blockResultID = "25c99609-572d-49ed-b904-9d0ae9cc95f9";
    var transactionResultID = "83c94909-60b5-453d-8f82-75846cecfeb5";

    describe('ResultApi', function () {
        describe('result', function () {
            it('should call getResultForBlockByNumber successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForBlockByNumber(blockResultID)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });
            it('should call getResultForCurrentBlock successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForCurrentBlock(currentBlockResultID)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            })
            it('should call getResultForIdentity successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForIdentity(identityResultID)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultForDeleteIdentity successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForDeleteIdentity(deleteIdentityResultID)
                data = data.payload;
                expect(data.deleted).to.be(true);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultForInvoke successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForInvoke(invokeResultID)
                data = data.payload;
                expect(data.txId.length).to.be("6b53e116bc12c8d5ca3dfe41798d0ed85d7b7837bddf4fb0cb13eee99a4b6455".length);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultForQuery successfully', async () => {
                let [error, pendingResponse, data] = instance.getResultForQuery(queryResultID)
                data = data.payload;
                expect(data.payload).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultForTransaction successfully', async () => {
                let [error, pendingResponse, data] = instance.getResultForTransaction(transactionResultID)
                data = data.payload;
                expect(data.payload).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });
        });
    });

}));

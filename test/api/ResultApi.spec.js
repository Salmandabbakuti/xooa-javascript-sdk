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
        factory(root.expect, root.XooaBlockchainApis);
    }
}(this, function (expect, XooaBlockchainApis) {
    'use strict';

    var instance;

    beforeEach(function () {
        instance = new XooaBlockchainApis();
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

    var idTemp = ""
    var resultId = "'e7e8af84-fab6-456b-ab60-ceef38b82d60'"

    describe('ResultApi', function () {
        describe('result', function () {
            it('should call getResultForBlockByNumber successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForBlockByNumber(resultId)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });
            it('should call getResultForCurrentBlock successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForCurrentBlock(resultId)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            })
            it('should call getResultForIdentity successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForIdentity(resultId)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultFor regenerateIdentityApiTokenAsync successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForIdentity(resultId)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultForIdentity successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForIdentity(resultId)
                data = data.payload;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultForIdentity successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForDeleteIdentity(resultId)
                data = data.payload;
                expect(data.deleted).to.be(true);
                expect(pendingResponse).to.be(undefined);
            });

            it('should call getResultForInvoke successfully', async () => {
                let [error, pendingResponse, data] = await instance.getResultForInvoke(resultId)
                data = data.payload;
                expect(data.txId.length).to.be("6b53e116bc12c8d5ca3dfe41798d0ed85d7b7837bddf4fb0cb13eee99a4b6455".length);
                expect(pendingResponse).to.be(undefined);
            });
            it('should call getResultForQuery successfully', async () => {
                let [error, pendingResponse, data] = instance.getResultForInvoke(data.resultId)
                data = data.payload;
                expect(data.payload).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });
        });
    });

}));

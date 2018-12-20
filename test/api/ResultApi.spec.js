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
        factory(require('expect.js'), require('../../src/index'),require('await-timeout'));
    } else {
        // Browser globals (root is window)
        factory(root.expect, root.XooaJavascriptSdk);
    }
}(this, function (expect, XooaJavascriptSdk,Timeout) {
    'use strict';
    var idTemp;
    var txId;
    var instance;
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

    beforeEach(function () {
        instance = new XooaJavascriptSdk();
        instance.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiJKSjJZWTBFLUdRRk00NkYtUEdNOEZCTS02NDlBN1ZBIiwiQXBpU2VjcmV0IjoiYm5xM1hlZ0JqTzR5clNJIiwiUGFzc3BocmFzZSI6IjZlMTg3MTlhZTBmYmFlNjA3OGVkMDE0NGYwYTE3YTczIiwiaWF0IjoxNTQ1MjI3NDE5fQ.Xj7UkwBxh6axVx4QxHpv3LZaXkHbbU3fwVhM88JVNSc")
       // instance.setLoggerLevel("all")
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
            it('should call getResultForBlockByNumber successfully', async function()  {
                this.timeout(9000)
                var  [error, pendingResponse, data] = await instance.getBlockByNumberAsync("1", {});
                [error, pendingResponse, data] = await instance.getResultForBlockByNumber(data.resultId)
                data = data.result;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });

            describe('getResultForIdentity', function () {
            it('should call getResultForIdentity successfully', async function () {
                this.timeout(6000)
                var [error, pendingResponse, data] = await instance.enrollIdentityAsync({}, newIdentity);
                 [error, pendingResponse, data] = await instance.getResultForIdentity(data.resultId)
                data = data.result;
                expect(data.createdAt).not.to.be("");
                expect(typeof data.canManageIdentities).to.be("boolean");
                expect(data.updatedAt).not.to.be("");
                expect(data.Access).not.to.be("");
                expect(data.Id).not.to.be("");
                idTemp = data.Id;
            });

            it('should call getResultForDeleteIdentity successfully', async function() {
                this.timeout(6000)
                var [error, pendingResponse, data] = await instance.deleteIdentityAsync({}, idTemp);
                [error, pendingResponse, data] = await instance.getResultForDeleteIdentity(data.resultId)
                data = data.result;
                expect(data.deleted).to.be(true);
                expect(pendingResponse).to.be(undefined);
            });
        });
            

            it('should call getResultForQuery successfully', async function()  {
                this.timeout(8000)
                var [error, pendingResponse, data] = await instance.queryAsync("get", {}, {args: ["abc"]});
                await Timeout.set(2000);
                [error, pendingResponse, data] = await instance.getResultForQuery(data.resultId)
                data = data.result;
                expect(data.payload).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });
         describe('getResultForTransaction', function () {
            it('should call getResultForInvoke successfully', async function ()  {
                this.timeout(6000)
                var [error, pendingResponse, data] = await instance.invokeAsync("set", {}, {args: ["abc","123"]});
                await Timeout.set(2000); 
                [error, pendingResponse, data] = await instance.getResultForInvoke(data.resultId)
                data = data.result;
                expect(data.txId.length).to.be("6b53e116bc12c8d5ca3dfe41798d0ed85d7b7837bddf4fb0cb13eee99a4b6455".length);
                expect(pendingResponse).to.be(undefined);
                txId = data.txId
            });
            it('should call getResultForTransaction successfully', async function()  {
                this.timeout(6000)
                var  [error, pendingResponse, data] = await instance.getTransactionByTransactionIdAsync(txId, {});
                [error, pendingResponse, data] = await instance.getResultForTransaction(data.resultId)
                data = data.result;
                expect(data.result).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });
        });
        });
    });

}));
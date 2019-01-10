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
        instance.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiIzMUZWQ1MwLTQ3MzRXTkItTTJTNzg0RC01RkZDNTlRIiwiQXBpU2VjcmV0IjoicWJLZlRXdFFNaWJqSW5KIiwiUGFzc3BocmFzZSI6IjdhZjFmYmMzY2NlZjAyNDMyNDMyZGNkZjRjMWRlYmQwIiwiaWF0IjoxNTQ3MTExNzYwfQ.hHXUdbVgKWbVowkNTkMOpa-E7m0m0h-0lSYy8k05wNs")

        //instance.setLoggerLevel("all")
    });

    describe('BlockChain test cases', function () {
        describe('Getting Block Data by Number', function () {
            it('should call getBlockByNumber successfully', async function ()  {
                this.timeout(10000)
                console.log(instance);
                const [error, pendingResponse, data] = await instance.getBlockByNumber("1", {});
                if (error) throw error;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined)
            });

            it('should call getBlockByNumberAsync successfully', async function()  {
                this.timeout(4000)
                const [error, pendingResponse, data] = await instance.getBlockByNumberAsync("1", {});
                if (error) throw error;
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");
                expect(pendingResponse).to.be(undefined);

            });
            it('should call getBlockByNumber and response pending', async () => {
                const [error, pendingResponse, data] = await instance.getBlockByNumber("1", {timeout: 100})
                if (error) throw error;
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");
                expect(data).to.be(undefined);
            });

        });
        
        describe('Getting Current Block Cases', function () {
            it('should call getCurrentBlock successfully', async function() {
                this.timeout(6000)
                const [error, pendingResponse, data] = await instance.getCurrentBlock({timeout:30000})
                if (error) throw error;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });


            it('should call getCurrentBlock with timeout', async () => {
                const [error, pendingResponse, data] = await instance.getCurrentBlock({timeout: 100})
                if (error) throw error;
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");
                expect(data).to.be(undefined);

            });
            it('should call getCurrentBlockAsync', async function() {
                this.timeout(6000)
                const [error, pendingResponse, data] = await instance.getCurrentBlockAsync({})
                if (error) throw error;
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");
                expect(pendingResponse).to.be(undefined);

            });
        });
    });

}));
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
    var txId;
    var instance;

    beforeEach(function () {
        instance = new XooaJavascriptSdk();
        instance.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiIzMUZWQ1MwLTQ3MzRXTkItTTJTNzg0RC01RkZDNTlRIiwiQXBpU2VjcmV0IjoicWJLZlRXdFFNaWJqSW5KIiwiUGFzc3BocmFzZSI6IjdhZjFmYmMzY2NlZjAyNDMyNDMyZGNkZjRjMWRlYmQwIiwiaWF0IjoxNTQ3MTExNzYwfQ.hHXUdbVgKWbVowkNTkMOpa-E7m0m0h-0lSYy8k05wNs")
       //instance.setLoggerLevel("all")
        
    });


    describe('InvokeApi', function (){
        describe('invoke', function () {
        it('should call invoke successfully', async function () {
            this.timeout(8000)
            const [error, pendingResponse, data] = await instance.invoke("set", {timeout:30000}, {args: ["abc","123"]})
            if (error) throw error;
            expect(data).not.to.be(undefined);
            txId = data.txId
        });
    });

        it('should call invoke and revert timeout', async () => {
            const [error, pendingResponse, data] = await instance.invoke("set", {timeout: 100}, {args: ["abc","123"]})
            if (error) throw error;
            expect(data).to.be(undefined);
            expect(pendingResponse.resultId).not.to.be("");
            expect(pendingResponse.resultURL).not.to.be("");

        });
        it('should call invokeAsync successfully', async () => {
            const [error, pendingResponse, data] = await instance.invokeAsync("set", {}, {args: ["abc","123"]})
            if (error) throw error;
            expect(pendingResponse).to.be(undefined);
            expect(data.resultId).not.to.be("");
            expect(data.resultURL).not.to.be("");

        });
        describe('Getting Transaction Data by TxId',async  () =>  {
            it('should call getTransactionByTransactionId successfully', async function() {
                this.timeout(10000)
                const [error, pendingResponse, data] = await instance.getTransactionByTransactionId(txId, {});
                if (error) throw error;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined)
            });
    
            it('should call getTransactionByTransactionIdAsync successfully', async () => {
                //uncomment below and update the code to test blockData
    
                const [error, pendingResponse, data] = await instance.getTransactionByTransactionIdAsync(txId, {});
                if (error) throw error;
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");
                expect(pendingResponse).to.be(undefined);
    
            });
            it('should call getTransactionByTransactionId and response pending', async function()  {
                this.timeout(6000)
                const [error, pendingResponse, data] = await instance.getTransactionByTransactionId(txId, { timeout: 100 })
                if (error) throw error;
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");
                expect(data).to.be(undefined);
            });
    
        });

    });
    

}));
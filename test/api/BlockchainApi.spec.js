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
        // instance.setLoggerLevel("all")
    });

    describe('BlockChain test cases', function () {
        describe('Getting Block Data by Number', function () {
            it('should call getBlockByNumber successfully', async () => {
                this.timeout(10000)
                const [error, pendingResponse, data] = await instance.getBlockByNumber("1", {});
                if (error) throw error;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined)
            });

            it('should call getBlockByNumberAsync successfully', async () => {
                //uncomment below and update the code to test blockData

                const [error, pendingResponse, data] = await instance.getBlockByNumberAsync("1", {});
                if (error) throw error;
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");
                expect(pendingResponse).to.be(undefined);

            });
            it('should call getBlockByNumber and response pending', async () => {
                const [error, pendingResponse, data] = await instance.getBlockByNumber("1", {timeout: 200})
                if (error) throw error;
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");
                expect(data).to.be(undefined);
            });

        });
        describe('Getting Transaction Data by TxId', function () {
            it('should call getTransactionByTransactionId successfully', async () => {
                this.timeout(10000)
                const [error, pendingResponse, data] = await instance.getTransactionByTransactionId("9d064180b1ec2a8e16168e4b372d32dc0bb1d1d9ed1c6d9182aa033367412874", {});
                if (error) throw error;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined)
            });

            it('should call getTransactionByTransactionIdAsync successfully', async () => {
                //uncomment below and update the code to test blockData

                const [error, pendingResponse, data] = await instance.getTransactionByTransactionIdAsync("9d064180b1ec2a8e16168e4b372d32dc0bb1d1d9ed1c6d9182aa033367412874", {});
                if (error) throw error;
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");
                expect(pendingResponse).to.be(undefined);

            });
            it('should call getTransactionByTransactionId and response pending', async () => {
                const [error, pendingResponse, data] = await instance.getTransactionByTransactionId("9d064180b1ec2a8e16168e4b372d32dc0bb1d1d9ed1c6d9182aa033367412874", { timeout: 200 })
                if (error) throw error;
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");
                expect(data).to.be(undefined);
            });

        });
        describe('Getting Current Block Cases', function () {
            it('should call getCurrentBlock successfully', async () => {
                const [error, pendingResponse, data] = await instance.getCurrentBlock({})
                if (error) throw error;
                expect(data.previous_hash).not.to.be("");
                expect(data.data_hash).not.to.be("");
                expect(data.numberOfTransactions).not.to.be(0);
                expect(data.blockNumber).not.to.be(0);
                expect(pendingResponse).to.be(undefined);
            });


            it('should call getCurrentBlock with timeout', async () => {
                const [error, pendingResponse, data] = await instance.getCurrentBlock({timeout: 200})
                if (error) throw error;
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");
                expect(data).to.be(undefined);

            });
            it('should call getCurrentBlockAsync', async () => {
                const [error, pendingResponse, data] = await instance.getCurrentBlockAsync({})
                if (error) throw error;
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");
                expect(pendingResponse).to.be(undefined);

            });
        });
    });

}));

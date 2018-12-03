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
        instance.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiJIVzBDRTNSLVZCVDRXRkotTlZYRjQ4Ti02Q0RZWUdKIiwiQXBpU2VjcmV0IjoielhnOURXUFNLTXY3N0hkIiwiUGFzc3BocmFzZSI6ImE1YzkyM2E4NTU4ZjBmZmI5N2Y0M2FmMjIyYTM1NDAxIiwiaWF0IjoxNTQzODMzOTczfQ.aPbW6oMIRH-7xZhZ_0vvfjw5KxzuBzZvAL10MDAJiHY")

    });


    describe('QueryApi', function () {
        describe('query', function () {
            it('should call query successfully', async () => {
                //uncomment below and update the code to test query
                const [error, pendingResponse, data] = await instance.query("get", {}, {args: ["123"]})
                if (error) throw error;
                expect(data.payload).not.to.be(0);
                expect(pendingResponse).to.be(undefined);

            });
            it('should call query and revert timeout', async () => {
                //uncomment below and update the code to test query
                const [error, pendingResponse, data] = await instance.query("get", {timeout: 200}, {args: ["123"]})
                if (error) throw error;
                expect(data).to.be(undefined);
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");

            });
            it('should call queryAsync successfully', async () => {
                //uncomment below and update the code to test query
                const [error, pendingResponse, data] = await instance.queryAsync("get", {}, {args: ["123"]})
                if (error) throw error;
                expect(pendingResponse).to.be(undefined);
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");

            });
        });
    });

}));

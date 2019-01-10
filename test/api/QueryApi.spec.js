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
    //    instance.setLoggerLevel("all")

    });


    describe('QueryApi', function () {
        describe('query', function () {
            it('should call query successfully', async function()  {
                this.timeout(6000)
                const [error, pendingResponse, data] = await instance.query("get", {timeout:30000}, {args: ["abc"]})
                if (error) throw error;
                expect(data).not.to.be(undefined);

            });
            it('should call query and revert timeout', async () => {
                //uncomment below and update the code to test query
                const [error, pendingResponse, data] = await instance.query("get", {timeout: 200}, {args: ["abc"]})
                if (error) throw error;
                expect(data).to.be(undefined);
                expect(pendingResponse.resultId).not.to.be("");
                expect(pendingResponse.resultURL).not.to.be("");

            });
            it('should call queryAsync successfully', async () => {
                //uncomment below and update the code to test query
                const [error, pendingResponse, data] = await instance.queryAsync("get", {}, {args: ["abc"]})
                if (error) throw error;
                expect(pendingResponse).to.be(undefined);
                expect(data.resultId).not.to.be("");
                expect(data.resultURL).not.to.be("");

            });
        });
    });

}));
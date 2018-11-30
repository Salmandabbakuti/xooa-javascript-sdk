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
        instance.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiIxTktEUzQwLTU0WDQwOFctUTMwQlc4Uy1aSkg5SEtIIiwiQXBpU2VjcmV0IjoibWFDRTJiYTFYY21RVlc5IiwiUGFzc3BocmFzZSI6IjZiNTU4MTAzNGM4OWJhM2NmMzY2M2IwZTQ4ZjU0YmQ4IiwiaWF0IjoxNTQxNDg2NzM1fQ.w12oKDMLmnKn_-vMZCxu9mb2fb3r8RXxMWuVEjg9H48")

    });


    describe('InvokeApi', function () {

        it('should call invoke successfully', async () => {
            this.timeout(5000)
            const [error, pendingResponse, data] = await instance.invoke("increment", {}, {args: ["123"]})
            if (error) throw error;
            expect(data).not.to.be(undefined);

        });

        it('should call invoke and revert timeout', async () => {
            const [error, pendingResponse, data] = await instance.invoke("increment", {timeout: 100}, {args: ["123"]})
            if (error) throw error;
            expect(data).to.be(undefined);
            expect(pendingResponse.resultId).not.to.be("");
            expect(pendingResponse.resultURL).not.to.be("");

        });
        it('should call invokeAsync successfully', async () => {
            const [error, pendingResponse, data] = await instance.invokeAsync("increment", {}, {args: ["123"]})
            if (error) throw error;
            expect(pendingResponse).to.be(undefined);
            expect(data.resultId).not.to.be("");
            expect(data.resultURL).not.to.be("");

        });
    });

}));

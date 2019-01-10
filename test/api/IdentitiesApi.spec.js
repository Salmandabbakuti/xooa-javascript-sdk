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
    var idTemp = ""


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
        instance.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiIzMUZWQ1MwLTQ3MzRXTkItTTJTNzg0RC01RkZDNTlRIiwiQXBpU2VjcmV0IjoicWJLZlRXdFFNaWJqSW5KIiwiUGFzc3BocmFzZSI6IjdhZjFmYmMzY2NlZjAyNDMyNDMyZGNkZjRjMWRlYmQwIiwiaWF0IjoxNTQ3MTExNzYwfQ.hHXUdbVgKWbVowkNTkMOpa-E7m0m0h-0lSYy8k05wNs")
        // instance.setLoggerLevel("all")
    });


    describe('IdentitiesApi', function () {
        describe('currentIdentity', function () {
            it('should call currentIdentity successfully', async function() {
                this.timeout(6000)
                const [error, pendingResponse, data] = await instance.currentIdentity()
                if (error) throw error;
                expect(data.createdAt).not.to.be("");
                expect(typeof data.canManageIdentities).to.be("boolean");
                expect(data.updatedAt).not.to.be("");
                expect(data.Access).not.to.be("");
                expect(data.Id).not.to.be("");
                idTemp = data.Id;
            });
            it('should call getIdentities successfully', async function() {
                this.timeout(6000)
                let [error, pendingResponse, data] = await instance.getIdentities()
                if (error) throw error;
                expect(data.length).not.to.be(0)
                data = data[0]
                expect(data.createdAt).not.to.be("");
                expect(typeof data.canManageIdentities).to.be("boolean");
                expect(data.updatedAt).not.to.be("");
                expect(data.Access).not.to.be("");
                expect(data.Id).not.to.be("");
            });
            it('should call getIdentity successfully', async function() {
                this.timeout(6000)
                const [error, pendingResponse, data] = await  instance.getIdentity(idTemp)
                if (error) throw error;
    
                expect(data.createdAt).not.to.be("");
                expect(typeof data.canManageIdentities).to.be("boolean");
                expect(data.updatedAt).not.to.be("");
                expect(data.Access).not.to.be("");
                expect(data.Id).not.to.be("");
            });
        });
    });
    describe('enrollIdentity', function () {
        it('should call enrollIdentity successfully', async function()  {
            this.timeout(5000)
            const [error, pendingResponse, data] = await instance.enrollIdentity({}, newIdentity)
            if (error) throw error;
            expect(data.createdAt).not.to.be("");
            expect(typeof data.canManageIdentities).to.be("boolean");
            expect(data.updatedAt).not.to.be("");
            expect(data.Access).not.to.be("");
            expect(data.Id).not.to.be("");
            idTemp = data.Id;
        });
        it('should call enrollIdentity successfully return pending response', async function() {
            this.timeout(6000)
            const [error, pendingResponse, data] = await instance.enrollIdentity({timeout: 200}, newIdentity)
            if (error) throw error;
            expect(data).to.be(undefined);
            expect(pendingResponse.resultId).not.to.be("");
            expect(pendingResponse.resultURL).not.to.be("");
        });
        it('should call enrollIdentity async successfully', async function()  {
            this.timeout(6000)
            const [error, pendingResponse, data] = await instance.enrollIdentityAsync({}, newIdentity)
            if (error) throw error;
            expect(pendingResponse).to.be(undefined);
            expect(data.resultId).not.to.be("");
            expect(data.resultURL).not.to.be("");
        });
        it('should call regenerateIdentityApiToken successfully', async function() {
            this.timeout(10000)
            const [error, pendingResponse, data] = await instance.regenerateIdentityApiToken({timeout:30000}, idTemp)
            if (error) throw error;
            console.log(error, pendingResponse, data)
            expect(data.createdAt).not.to.be("");
            expect(typeof data.canManageIdentities).to.be("boolean");
            expect(data.updatedAt).not.to.be("");
            expect(data.Access).not.to.be("");
            expect(data.Id).not.to.be("");
        });
        it('should call regenerateIdentityApiToken successfully but timeout', async function()  {
            this.timeout(6000)
            const [error, pendingResponse, data] = await instance.regenerateIdentityApiToken({timeout: 20}, idTemp)
            if (error) throw error;
            expect(data).to.be(undefined);
            expect(pendingResponse.resultId).not.to.be("");
            expect(pendingResponse.resultURL).not.to.be("");
        });
        it('should call regenerateIdentityApiTokenAsync successfully', async function() {
            this.timeout(6000)
            const [error, pendingResponse, data] = await instance.regenerateIdentityApiTokenAsync({}, idTemp)
            if (error) throw error;
            expect(pendingResponse).to.be(undefined);
            expect(data.resultId).not.to.be("");
            expect(data.resultURL).not.to.be("");
        });
        it('should call deleteIdentity successfully', async function() {
            this.timeout(60000)

            const [error, pendingResponse, data] = await instance.enrollIdentity({timeout:30000}, newIdentity)
            if (error) throw error;
            expect(data.createdAt).not.to.be("");
            expect(typeof data.canManageIdentities).to.be("boolean");
            expect(data.updatedAt).not.to.be("");
            expect(data.Access).not.to.be("");
            expect(data.Id).not.to.be("");
            idTemp = data.Id;

            
            const [error_identity, pendingResponseIdentity, dataIdentity] = await instance.deleteIdentity({timeout:30000}, idTemp)
                if (error_identity) throw error_identity;
                expect(dataIdentity.deleted).to.be(true);
                expect(pendingResponseIdentity).to.be(undefined);
        });

    })
    
}))
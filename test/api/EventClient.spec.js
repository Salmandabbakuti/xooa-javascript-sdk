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


    describe('EventClient', function () {
        describe('Subscribe & Unsubscribe  Events', function () {
            it('should call subscribeEvent successfully', function (done) {
                this.timeout(15000)
                instance.subscribeAllEvents( function (data) {
                    expect(data.txId.length).to.be("ac33351bfefbbe7bf39ae792085eea0e320ebddd960400d7c737c5957ac6a695".length);
                    instance.unsubscribe()
                    done()
                });
            });
            it('should call subscribeEvents successfully', function (done) {
                this.timeout(15000)
                instance.subscribeEvents("putstate", function (data) {
                    expect(data.txId.length).to.be("ac33351bfefbbe7bf39ae792085eea0e320ebddd960400d7c737c5957ac6a695".length);
                    instance.unsubscribe()
                    done()
                });
            });

            it('should call unsubscribe successfully', function (done) {
                this.timeout(15000)
                instance.subscribeAllEvents( function (data) {
                    expect(data.txId.length).to.be("ac33351bfefbbe7bf39ae792085eea0e320ebddd960400d7c737c5957ac6a695".length);
                    instance.unsubscribe()
                    done()
                });
            });


        });
    });

}));

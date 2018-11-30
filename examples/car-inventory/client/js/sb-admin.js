/**
* Xooa Javascript SDK usage example
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

(function ($) {
    "use strict"; // Start of use strict

    var xooaClient = XooaClient()
    xooaClient.setApiToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcGlLZXkiOiIxTktEUzQwLTU0WDQwOFctUTMwQlc4Uy1aSkg5SEtIIiwiQXBpU2VjcmV0IjoibWFDRTJiYTFYY21RVlc5IiwiUGFzc3BocmFzZSI6IjZiNTU4MTAzNGM4OWJhM2NmMzY2M2IwZTQ4ZjU0YmQ4IiwiaWF0IjoxNTQxNDg2NzM1fQ.w12oKDMLmnKn_-vMZCxu9mb2fb3r8RXxMWuVEjg9H48")

    function displayIdentity() {
        xooaClient.getIdentities((error, pendingResponse, identity) => {
            if (identity && identity.length > 0) {
                console.log(identity)
                identity.forEach((i) => {
                    $('#dataTable > tbody:last-child').append(`<tr><td>${i.Id}</td><td>${i.IdentityName}</td><td>${i.canManageIdentities}</td><td>${i.Access}</td><td>${i.createdAt}</td></tr>`)

                })
            }
        })
    }

    displayIdentity()


    // Toggle the side navigation
    $("#sidebarToggle").on('click', function (e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

})(jQuery); // End of use strict

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
    xooaClient.setApiToken("<YOUR_TOKEN_HERE>")

   async  function displayCars() {
      const [error, pendingResponse, identity] = await  xooaClient.query("getAllCars", {}, {"args": []})
            if (identity && identity.payload) {
                $("#dataTable tr").remove();
                $('#dataTable > tbody:last-child').append(`<tr><th>Car Model</th><th>Available Count</th></tr>`)
                identity.payload.forEach((i) => {
                    $('#dataTable > tbody:last-child').append(`<tr><td>${i.Key}</td><td>${i.Record}</td></tr>`)

                })
            }
        
    }

    $('#submit-modal').click(function () {
        var carModel = $('#car-model').val();
        var carCount = $('#car-count').val();

        xooaClient.invoke("increment", {}, {args: [carModel, carCount]}, function (error, pendingResponse, data) {
            if (error) throw error;
            displayCars()
            closeModal()
        })
    });


    displayCars()


    function closeModal() {
        $('#myModal').modal('toggle');
    }

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

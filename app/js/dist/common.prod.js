"use strict";var _this=void 0;function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function filterLeague(){var e,t,o,n;for(e=document.getElementById("inputLeague").value.toUpperCase(),t=document.getElementById("messages").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("league")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}function filterName(){var e,t,o,n;for(e=document.getElementById("inputName").value.toUpperCase(),t=document.getElementById("messages").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("name")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}function filterLeague1(){var e,t,o,n;for(e=document.getElementById("inputLeague1").value.toUpperCase(),t=document.getElementById("messages1").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("league")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}function filterName1(){var e,t,o,n;for(e=document.getElementById("inputName1").value.toUpperCase(),t=document.getElementById("messages1").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("name")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}function filterLeague2(){var e,t,o,n;for(e=document.getElementById("inputLeague2").value.toUpperCase(),t=document.getElementById("messages2").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("league")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}function filterName2(){var e,t,o,n;for(e=document.getElementById("inputName2").value.toUpperCase(),t=document.getElementById("messages2").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("name")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}function filterLeague3(){var e,t,o,n;for(e=document.getElementById("inputLeague3").value.toUpperCase(),t=document.getElementById("messages3").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("league")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}function filterName3(){var e,t,o,n;for(e=document.getElementById("inputName3").value.toUpperCase(),t=document.getElementById("messages3").getElementsByTagName("tr"),n=0;n<t.length;n++)(o=t[n].getElementsByClassName("name")[0])&&(-1<(o.textContent||o.innerText).toUpperCase().indexOf(e)?t[n].style.display="":t[n].style.display="none")}$(document).ready(function(){var e,t;$("#infiniteScroll").jscroll({padding:10,nextSelector:".news-btn-scroll:last",contentSelector:".one-comment"}),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({lazyLoad:"ondemand",autoplay:!0,autoplaySpeed:2500,slidesToShow:1,slidesToScroll:1,asNavFor:".slider-for",dots:!0,prevArrow:"<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",nextArrow:"<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>",focusOnSelect:!0}),$(".company-slider").slick({dots:!0,lazyLoad:"ondemand",infinite:!1,autoplay:!1,autoplaySpeed:2500,speed:300,slidesToShow:3,slidesToScroll:1,prevArrow:"<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",nextArrow:"<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>",responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider-one").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".slider-all"}),$(".slider-all").slick({lazyLoad:"ondemand",autoplay:!1,centerMode:!0,autoplaySpeed:2500,slidesToShow:5,slidesToScroll:1,asNavFor:".slider-one",dots:!0,arrows:!1,focusOnSelect:!0,responsive:[{breakpoint:1111,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".one-news-slider").slick({useTransform:!0,autoplay:!0,autoplaySpeed:4500,prevArrow:"<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",nextArrow:"<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>",slidesToShow:1,slidesToScroll:1,dots:!0,cssEase:"ease-out",responsive:[{breakpoint:1024,settings:{dots:!1}}]}),$(".girl-slide").slick({lazyLoad:"ondemand",autoplay:!0,autoplaySpeed:6500,slidesToShow:1,slidesToScroll:1,prevArrow:"<img class='new-arrow-prev new-arrow' src='img/icons/next.svg'>",nextArrow:"<img class='new-arrow-next new-arrow' src='img/icons/next.svg'>"}),$(".popup-gallery").magnificPopup((_defineProperty(e={delegate:"a",type:"image",tLoading:"Загрузка #%curr%..."},"delegate","a:not(.slick-cloned)"),_defineProperty(e,"mainClass","mfp-img-mobile"),_defineProperty(e,"cursor","mfp-zoom-out-cur"),_defineProperty(e,"gallery",{enabled:!0,navigateByImgClick:!0,tCounter:'<span class="mfp-counter">%curr% из %total%</span>',preload:[0,2]}),_defineProperty(e,"image",{tError:'<a href="%url%">"Это фото #%curr%</a> не найдено',titleSrc:function(e){return e.el.attr("title")+"<small>SportKlan.ru</small>"}}),e)),$(".girl-gallery").magnificPopup((_defineProperty(t={delegate:"a",type:"image",tLoading:"Загрузка #%curr%..."},"delegate","a:not(.slick-cloned)"),_defineProperty(t,"mainClass","mfp-img-mobile"),_defineProperty(t,"cursor","mfp-zoom-out-cur"),_defineProperty(t,"gallery",{enabled:!0,navigateByImgClick:!0,tCounter:'<span class="mfp-counter">%curr% из %total%</span>',preload:[0,2]}),_defineProperty(t,"image",{tError:'<a href="%url%">"Это фото #%curr%</a> не найдено',titleSrc:function(e){return e.el.attr("title")+"<small>SportKlan.ru</small>"}}),t)),$(".image-table").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0}}),$(".image-popup-one-news").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0}}),$(".block1-hover").mouseover(function(){$(".block1").addClass("hover-img")}),$(".block1-hover").mouseout(function(){$(".block1").removeClass("hover-img")}),$(".search-icon").click(function(){$(".cont, .input").toggleClass("active"),$("input[type='text']").focus()}),$("#yourId").jalendar({color:"#333",color2:"#333",lang:"RU",sundayStart:!1}),$(".active-search").click(function(){$("#search-link").show(),$(".form-active").toggleClass("top-slide")}),$(".nav-item").click(function(){$(this).toggleClass("active")}),$(".nav-item").on("click",function(){$(this).addClass("active")}),$("a.scrollto").click(function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},800),!1});var o=document.querySelectorAll(".hamburger");0<o.length&&function(e,t,o){if("[object Object]"===Object.prototype.toString.call(e))for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.call(o,e[n],n,e);else for(var l=0,a=e.length;l<a;l++)t.call(o,e[l],l,e)}(o,function(e){e.addEventListener("click",function(){this.classList.toggle("is-active")},!1)})}),$(function(){jQuery(".js-filter-nav li").click(function(){event.preventDefault();var e=jQuery(this).attr("data-filter");"*"==e?jQuery(".filter-block .filter").fadeIn(500):(jQuery(".filter-block .filter."+e).fadeIn(500),jQuery(".filter-block .filter:not(."+e+")").fadeOut(500))})}),$(".tablesorter thead tr th").click(function(){$(this).toggleClass("rotate-arrow")}),$(".js-filter-nav li").click(function(){$(".js-filter-nav li").removeClass("active-filter"),$(this).toggleClass("active-filter")}),$("a.scroll-top").click(function(){event.preventDefault();var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},800),!1}),$(function(){$.fn.followTo=function(t){var o=this,n=$(window);n.scroll(function(e){n.scrollTop()>t?o.css({position:"fixed",top:15}):o.css({position:"static"})})},$(".sticky-container").followTo(515)}),$(function(){$.fn.followTo=function(t){var o=this,n=$(window);n.scroll(function(e){n.scrollTop()>t&&o.css({position:"static"})})},$(".sticky-container").followTo(4e3)}),$(".all-rating-block a").click(function(){$(".all-rating-block a").removeClass("active-rating"),$(this).toggleClass("active-rating")}),document.addEventListener("DOMContentLoaded",function(){$(".football-ball").addClass("active-move-ball")}),$(function(o){o(document).mouseup(function(e){var t=o("#search-link");t.is(e.target)||0!==t.has(e.target).length||t.hide()})}),window.onload=function(){document.querySelector("html").classList.add("js");var t=document.querySelector(".input-file"),e=document.querySelector(".input-file-trigger"),o=document.querySelector(".file-return");e&&(e.addEventListener("keydown",function(e){13!=e.keyCode&&32!=e.keyCode||t.focus()}),e.addEventListener("click",function(e){return t.focus(),!1}),t.addEventListener("change",function(e){o.innerHTML=this.value}))},(new WOW).init();var getCellValue=function(e,t){return e.children[t].innerText||e.children[t].textContent},comparer=function(l,a){return function(e,t){return o=getCellValue(a?e:t,l),n=getCellValue(a?t:e,l),""===o||""===n||isNaN(o)||isNaN(n)?o.toString().localeCompare(n):o-n;var o,n}};document.querySelectorAll("th").forEach(function(e){return e.addEventListener("click",function(){var t=e.closest("table");Array.from(t.querySelectorAll("tr:nth-child(n+2)")).sort(comparer(Array.from(e.parentNode.children).indexOf(e),_this.asc=!_this.asc)).forEach(function(e){return t.appendChild(e)})})});var postion=$("#static-block").offset().top,height=$("#static-block").height();$(document).on("scroll",function(){var e=$(document).scrollTop();postion<e&&e<postion+height?$(".rating-block-sidebar a:first-child").addClass("move-now"):$(".rating-block-sidebar a:first-child").removeClass("move-now")});var postion2=$("#informate-block").offset().top,height2=$("#informate-block").height();$(document).on("scroll",function(){var e=$(document).scrollTop();postion2<e&&e<postion2+height2?$(".rating-block-sidebar a:nth-child(3)").addClass("move-now"):$(".rating-block-sidebar a:nth-child(3)").removeClass("move-now")});var postion3=$("#video-block").offset().top,height3=$("#video-block").height();$(document).on("scroll",function(){var e=$(document).scrollTop();postion3<e&&e<postion3+height3?$(".rating-block-sidebar a:nth-child(4)").addClass("move-now"):$(".rating-block-sidebar a:nth-child(4)").removeClass("move-now")});var postion4=$("#bookmaker-reviews-block").offset().top,height4=$("#bookmaker-reviews-block").height();$(document).on("scroll",function(){var e=$(document).scrollTop();postion4<e&&e<postion4+height4?$(".rating-block-sidebar a:nth-child(2)").addClass("move-now"):$(".rating-block-sidebar a:nth-child(2)").removeClass("move-now")});var postion5=$("#description-block").offset().top,height5=$("#description-block").height();$(document).on("scroll",function(){var e=$(document).scrollTop();postion5<e&&e<postion5+height5?$(".rating-block-sidebar a:nth-child(5)").addClass("move-now"):$(".rating-block-sidebar a:nth-child(5)").removeClass("move-now")});
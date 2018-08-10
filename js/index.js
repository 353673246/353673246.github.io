(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var pg1RowCont = document.querySelectorAll(".pg1RowCont");
var pg1RowCont1 = document.querySelector(".pg1RowCont");
var pg1Img = document.querySelectorAll(".pg1Img1");
var nav = document.querySelectorAll(".navWrap ul li");
console.log(nav);
var pg3_Nav = document.querySelectorAll(".pg3 ul li");

for (var i = 0; i < nav.length; i++) {
	nav[i].onclick = function () {
		for (var j = 0; j < nav.length; j++) {
			nav[j].className = "oLi";
		}
		this.className = "current";
	};
	nav[i].onmouseover = function () {
		for (var n = 0; n < nav.length; n++) {
			nav[n].className = "oLi current";
		}
		this.className = " current current1";
	};
}

for (var i = 0; i < pg1RowCont.length; i++) {
	pg1RowCont[i].index = i;
	pg1RowCont[i].onmouseover = function () {
		// console.log(this.index);
		console.log(pg1Img[this.index]);
		// console.log(pg1Img);
		pg1Img[this.index].style.background = " url(images/img" + this.index + ".png) no-repeat";
		pg1Img[this.index].className += " animated  tada";
	};
	pg1RowCont[i].onmouseout = function () {
		pg1Img[this.index].style.background = "url(images/pic" + this.index + ".png) no-repeat";
		pg1Img[this.index].className = "pg1Img1";
	};
}

window.onscroll = function () {
	var pyo = window.pageYOffset;
	var nav = document.querySelector(".nav");
	var nav1 = document.querySelector(".nav1");
	if (pyo > 646) {
		nav.style.position = "fixed";
		nav.style.top = "0";
		nav1.style.display = "block";
	} else {
		nav.style.position = "";
		nav1.style.display = "none";
	}
};

for (var i = 0; i < pg3_Nav.length; i++) {
	var num = [0, -1080, -2160, -3240];
	pg3_Nav[i].index = i;
	pg3_Nav[i].onclick = function () {
		var carousel_inner = document.querySelector(".carousel-inner");
		for (var j = 0; j < pg3_Nav.length; j++) {
			pg3_Nav[j].className = "";
		}
		this.className = "current2";
		carousel_inner.style.transform = "translate(" + num[this.index] + "px,0px)";
		console.log(num[this.index]);
	};
}

},{}]},{},[1]);

//# sourceMappingURL=../maps/index.js.map

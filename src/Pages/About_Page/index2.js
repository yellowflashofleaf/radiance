import $ from 'jquery';

export function btn_1() {
    var dots = $(".dots1");
    var moreText = $("#more1");
    var btnText = $(".btn-1");

    if (dots.css("display") === "none") {
        console.log("Entered first if");
        dots.css("display", "inline");
        btnText.html("Show more");
        moreText.css("display", "none");
    } else {
        console.log("Entered second if");
        dots.css("display", "none");
        btnText.html("Show less");
        moreText.css("display", "inline");
    }
};

export function btn_2() {
    var dots = $(".dots2");
    var moreText = $("#more2");
    var btnText = $(".btn-2");

    if (dots.css("display") === "none") {
        console.log("Entered first if");
        dots.css("display", "inline");
        btnText.html("Show more");
        moreText.css("display", "none");
    } else {
        console.log("Entered second if");
        dots.css("display", "none");
        btnText.html("Show less");
        moreText.css("display", "inline");
    }
};

export function btn_3() {
    var dots = $(".dots3");
    var moreText = $("#more3");
    var btnText = $(".btn-3");

    if (dots.css("display") === "none") {
        console.log("Entered first if");
        dots.css("display", "inline");
        btnText.html("Show more");
        moreText.css("display", "none");
    } else {
        console.log("Entered second if");
        dots.css("display", "none");
        btnText.html("Show less");
        moreText.css("display", "inline");
    }
};

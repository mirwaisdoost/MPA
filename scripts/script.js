// slider
function f(p) {
  // document.getElementById("image").style.left="100%";
  var c = document.getElementsByClassName("circle");
  var image = document.getElementsByClassName("image");
  if (p == 1) {
    image[0].style.left = "-100%";
    image[0].style.transform = "translateX(100%)";
    image[0].style.transitionduration = "1s";
    image[0].transitiontimingfunction = "ease-in";
    image[0].src = "./images/slider-1.PNG";
    for (i = 0; i < c.length; i++) {
      c[i].style.background = "transparent";
    }
    document.getElementById(p).style.background = "white";
  } else if (p == 2) {
    image[1].style.left = "-100%";
    image[1].style.transform = "translateX(100%)";
    image[1].src = "./images/slider-2.PNG";
    for (i = 0; i < c.length; i++) {
      c[i].style.background = "transparent";
    }
    document.getElementById(p).style.background = "white";
  } else if (p == 3) {
    image[2].style.left = "-100%";
    image[2].style.transform = "translateX(100%)";
    image[2].src = "./images/slider-3.PNG";
    for (i = 0; i < c.length; i++) {
      c[i].style.background = "transparent";
    }
    document.getElementById(p).style.background = "white";
  } else if (p == 4) {
    image[3].style.left = "-100%";
    image[3].style.transform = "translateX(100%)";
    image[3].src = "./images/slider-4.PNG";
    for (i = 0; i < c.length; i++) {
      c[i].style.background = "transparent";
    }
    document.getElementById(p).style.background = "white";
  }
}

//The slider
var index = 0;
carousel();

function carousel() {
  var c = document.getElementsByClassName("circle");
  var img = document.getElementsByClassName("image");

  for (i = 0; i < img.length; i++) {
    // img[i].style.left="0%";
    // img[i].style.transitionduration="1s";
    // img[i].style.transitiontimingfunction="ease-in"
    img[i].style.display = "none";
    c[i].style.background = "transparent";
  }

  index++;
  if (index > img.length) {
    index = 1;
  }
  img[index - 1].style.display = "block";
  // img[index-1].style.transform="translateX(-100%)";
  c[index - 1].style.background = "white";

  setTimeout(carousel, 2000);
}

function menue() {
  var content = document.getElementsByClassName("r-navagation-menue-content");
  if (content[0].style.display == "block") {
    content[0].style.display = "none";
    document.getElementsByClassName("button")[0].style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementsByClassName("toggle")[0].style.display = "block";
    document.getElementById("header").style.height = "95px";
    document.getElementsByClassName("r-navagation")[0].style.height = "initial";
  } else {
    content[0].style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementsByClassName("toggle")[0].style.display = "none";
    document.getElementsByClassName("button")[0].style.display = "block";
    document.getElementById("header").style.height = "100%";
    document.getElementsByClassName("r-navagation")[0].style.height = "inherit";
    document.getElementsByClassName(
      "r-navagation-menue-content"
    )[0].style.transitionduration = ".3s";
    document.getElementsByClassName(
      "r-navagation-menue-content"
    )[0].style.transitiontimingfunction = "ease-in";
    document.getElementsByClassName("r-navagation")[0].style.overflowY = "auto";
  }
}

//The responsive mobile menue
var menuebarItem = document.getElementsByClassName("menuebar-item");
var subMenue = document.getElementsByClassName("submenue");
var subMenueItem = document.getElementsByClassName("submenue-content");

menuebarItem[0].onmouseover = function () {
  subMenue[0].style.visibility = "visible";
  subMenueItem[0].style.display = "block";
  subMenueItem[1].style.display = "none";
  subMenueItem[2].style.display = "none";
  subMenueItem[3].style.display = "none";
};

menuebarItem[1].onmouseover = function () {
  subMenue[0].style.visibility = "visible";
  subMenueItem[0].style.display = "none";
  subMenueItem[1].style.display = "block";
  subMenueItem[2].style.display = "none";
  subMenueItem[3].style.display = "none";
};

menuebarItem[2].onmouseover = function () {
  subMenue[0].style.visibility = "visible";
  subMenueItem[0].style.display = "none";
  subMenueItem[1].style.display = "none";
  subMenueItem[2].style.display = "block";
  subMenueItem[3].style.display = "none";
};

menuebarItem[3].onmouseover = function () {
  subMenue[0].style.visibility = "visible";
  subMenueItem[0].style.display = "none";
  subMenueItem[1].style.display = "none";
  subMenueItem[2].style.display = "none";
  subMenueItem[3].style.display = "block";
};

menuebarItem[4].onmouseover = function () {
  subMenue[0].style.visibility = "hidden";
};

document.getElementById("content").onmouseout = function () {
  subMenue[0].style.visibility = "hidden";
};

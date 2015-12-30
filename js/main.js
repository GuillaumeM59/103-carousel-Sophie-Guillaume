// add slideshow conteneur and a node of images inside
var contSlideShow = document.getElementById("slideshow");
var imgs = contSlideShow.getElementsByTagName("img");
var curImage = 0; //current image begin at 0 but will change

// create icons to move left right
var elRightArrow = document.createElement("i");
elRightArrow.className = " arrowright fa fa-chevron-right fa-3x ";
var elLeftArrow = document.createElement("i");
elLeftArrow.className = " arrowleft fa fa-chevron-left fa-3x ";

// add icons on html document in the slideshow
contSlideShow.appendChild(elRightArrow);
contSlideShow.appendChild(elLeftArrow);

//function who going to next img
var nextSlide = function() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[curImage].style.display = "block";
  curImage++;
  // after the last img, go back to the first img
  if (curImage == imgs.length) {
    curImage = 0;
  }
};

// function who going to the previous img
var onClickmovedw = function() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[curImage].style.display = "block";
  curImage--;
  // if we go before the first img, we go to last img
  if (curImage < 0) {
    curImage = imgs.length - 1;
  }
};

// function who initialize slideshow
var slideShow = function() {
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[0].style.display = "block";
  nextSlide();
};

//call the slideshow
slideShow();
// changing img each 4s
var timer = window.setInterval(nextSlide, 4000);

// giving actions to icons
elLeftArrow.addEventListener("click", onClickmovedw, false);
elRightArrow.addEventListener("click", nextSlide, false);


// add slideshow conteneur and a node of images inside
var contSlideShow = document.getElementById("slideshow");
var imgs = contSlideShow.getElementsByTagName("img");
var curImage = 0; //current image begin at 0 but will change
var timer;

// create icons to move left right
var elRightArrow = document.createElement("i");
elRightArrow.className = "navBTN arrowright fa fa-chevron-right fa-4x";
var elLeftArrow = document.createElement("i");
elLeftArrow.className = "navBTN arrowleft fa fa-chevron-left fa-4x ";
var elPauseBtn = document.createElement("i");
elPauseBtn.className = "navBTN playPause fa fa-pause-circle fa-3x ";
var elPlayBtn = document.createElement("i");
elPlayBtn.className = "navBTN playPause fa fa-play-circle fa-3x ";


// add icons on html document in the slideshow
contSlideShow.appendChild(elRightArrow);
contSlideShow.appendChild(elLeftArrow);
contSlideShow.appendChild(elPlayBtn);
contSlideShow.appendChild(elPauseBtn);


// changing img each 4s
var animate= function() {
  elPlayBtn.style.display = "none";
  elPauseBtn.style.display = "block";
 timer = window.setInterval(nextSlide, 4000);
};
//stop animate
var stopanim= function() {
  elPlayBtn.style.display = "block";
  elPauseBtn.style.display = "none";
  window.clearInterval(timer);
};

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
  stopanim();
};
// function who going to the previous img
var onClickmovenext = function() {
  nextSlide();
  stopanim();
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
animate();
// giving actions to icons
elLeftArrow.addEventListener("click", onClickmovedw, false);
elRightArrow.addEventListener("click", onClickmovenext, false);
elPlayBtn.addEventListener("click", animate, false);
elPauseBtn.addEventListener("click", stopanim, false);

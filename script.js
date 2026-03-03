var images = [
        "images/flower1 (1).jpg",
        "images/flower1 (2).jpg",
        "images/flower1 (3).jpg",
        "images/flower1 (4).jpg",
      ];

      var index = 0;
      var interval;

      var slide = document.getElementById("slide");
      var prev = document.getElementById("prevSlider");
      var play = document.getElementById("playSlider");
      var next = document.getElementById("nextslider");
      var stop = document.getElementById("stop");

      function showImage() {
        slide.src = images[index];
      }
      function nextSlide() {
        index++;
        if (index >= images.length) {
          index = 0;
        }
        showImage();
      }
      next.addEventListener("click", nextSlide);

      prev.addEventListener("click", function () {
        index--;
        if (index < 0) {
          index = images.length - 1;
        }
        showImage();
      });
      play.addEventListener("click", function () {
        if (!interval) {
          interval = setInterval(nextSlide, 1000);
        }
      });

      stop.addEventListener("click", function () {
        clearInterval(interval);
        interval = null;
      });
jQuery(function ($) {
  $(function () {
    $(".filters-container").mixItUp();

    var inputText;
    var $matching = $();

    var delay = (function () {
      var timer = 0;
      return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      };
    })();

    $("#input").keyup(function () {
      delay(function () {
        inputText = $("#input").val().toLowerCase();

        if (inputText.length > 0) {
          $(".article").each(function () {
            $this = $("this");

            if ($(this).children(".title").text().toLowerCase().match(inputText)) {
              $matching = $matching.add(this);
            } else {
              $matching = $matching.not(this);
            }
          });
          $(".container").mixItUp("filter", $matching);
        } else {
          $(".container").mixItUp("filter", "all");
        }
      }, 200);
    });
  });
});

let fullImg = document.getElementById("generatedImg");
let body = document.getElementById("body");
let images = document.querySelectorAll(".post__image");
let imgCreated = false;

images.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(this.src);
    fullImg.innerHTML = '<img src="' + this.src + '" class="img-full">';
    fullImg.classList.toggle("visible");
    body.classList.toggle("noverflow");
  });
});

function disableImg() {
  fullImg.classList.toggle("visible");
  body.classList.toggle("noverflow");
}

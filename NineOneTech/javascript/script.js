// Window scroll //
window.onscroll = function () {
  // access document Html //
  const AccessHtml = document.documentElement;

  const html = AccessHtml.scrollTop;

  const Minus = AccessHtml.scrollHeight - AccessHtml.clientHeight;

  const Result = (html / Minus) * 100;

  //   access Property //
  document.querySelector(".scroll").style.width = Result + "%";
};

// more icon //
const more_icon = document.getElementsByClassName("More_Icon");

for (let i = 0; i < more_icon.length; i++) {
  more_icon[i].addEventListener("click", function () {
    let text = this.nextElementSibling;

    if (text.style.display != "block") {
      text.style.display = "block";
      more_icon[i].classList.add("iconToggle");
    } else {
      text.style.display = "none";
      more_icon[i].classList.remove("iconToggle");
    }
  });
}

// up //
window.addEventListener("scroll", function () {
  const up = document.querySelector(".up");

  if (window.pageYOffset > 700) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});

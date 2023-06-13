//the problem is            |----------------------------------|
//===========================how to make button (scroll to top)=================================
//                          |----------------------------------|
let span = document.querySelector(".btn");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    span.style.cssText = "opacity: 1;";
  } else {
    span.style.cssText = "opacity: 0;;";
  }
};
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
span.addEventListener("click", scrollToTop);

// make the event to scroll
let countdown = new Date("dec 31,2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let time = countdown - dateNow;
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (time === 0) {
    clearInterval(counter);
  }
}, 1000);
//

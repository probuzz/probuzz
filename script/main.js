/**
 * Template Name: Maundy - v4.1.0
 * Template URL: https://bootstrapmade.com/maundy-free-coming-soon-bootstrap-theme/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Countdown timer
   */
  let countdown = select(".countdown");
  const output = countdown.innerHTML;
  let day_hour = 11;
  let day_minute = -47;

  const countDownDate = function () {
    let timeleft =
      new Date(countdown.getAttribute("data-count")).getTime() -
      new Date().getTime() +
      day_hour * 1000 * 60 * 60 +
      day_minute * 1000 * 60;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    countdown.innerHTML = output
      .replace("%d", days)
      .replace("%h", hours)
      .replace("%m", minutes)
      .replace("%s", seconds);
    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
      window.location.replace('http://probuzz.co.in/temp.html');
    }
  };
  countDownDate();
  setInterval(countDownDate, 1000);
})();

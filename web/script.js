// this is out button in the product details page
const backButton = document.getElementById("backbtn"); // check page location
if (backButton) {
  backButton.addEventListener('click', () => {
    if(window.history.length > 1) {
      window.history.back(); // back to previous page
    }
    else { // insurance
      window.location.href = window.location.href;
    }
  });
}

// this is an animation in the aboutus page
const aboutus1 = document.getElementById("aboutusdiv1"); // check page location
if (aboutus1) {
  function Animation2() {
    containerWidth = document.getElementById("aboutusdiv1").offsetWidth;
    let pos = 0;

    // Move to the initial position
    aboutus1.style.transform = `translateX(-100%)`;

    // Delay the animation start by 0.3 seconds
    setTimeout(() => {
      animationId = requestAnimationFrame(frame);
    }, 300);

    function frame() {
      if (pos >= containerWidth) {
        pos = -containerWidth; // resett to the left
      } else {
        pos += 5;  // set the speed
        aboutus1.style.transform = `translateX(${pos}px)`;
      }
      animationId = requestAnimationFrame(frame);
    }
  }
}
document.addEventListener("DOMContentLoaded", Animation2); //auto start

// this is an animation in the supprt page
const support = document.getElementById("supportdiv2"); // check page location
if (support) {
  function Animation1() {
    containerWidth = document.getElementById("supportdiv1").offsetWidth;
    let pos = 0;

    // move to the initial position
    support.style.transform = `translateX(-100%)`;

    // delay the animation start by 0.3 seconds
    setTimeout(() => {
    animationId = requestAnimationFrame(frame);
    }, 300);

    function frame() {
      if (pos >= containerWidth) {
        pos = -containerWidth; // reset to the left
      } else {
        pos += 5;   // set the speed
        support.style.transform = `translateX(${pos}px)`;
      }
      animationId = requestAnimationFrame(frame);
    }
  }
}
document.addEventListener("DOMContentLoaded", Animation1); // auto start

// this is typewriter animation in the homepage
//'typewriter' is from W3School. link:https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = 'PIXEL X ICE-CREAM'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */
const firstpagecheck = document.getElementById("homepagefirst1");
if (firstpagecheck) {
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("homepagefirsttext").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);


// 'Coming Soon Page' is from W3School. link:https://www.w3schools.com/howto/howto_css_coming_soon.asp
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

if (document.getElementById("time")) {
  // Update the count down every 1 second
  var countdownfunction = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("time").innerHTML = "! available now !";
    }
  }, 1000);
}

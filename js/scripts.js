document.addEventListener('DOMContentLoaded', function() {
    var fadeInElements = document.querySelectorAll('.fadeInOnScroll');
    var fadeAnimElements = document.querySelectorAll('.FadeAnimOnScroll');

    
  
    function fadeInOnScroll(elements) {
      elements.forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add('fade-in');
        }
      });
    }
  
    function fadeOutOnScroll(elements) {
      elements.forEach(function(element) {
        if (!isElementInViewport(element)) {
          element.classList.remove('fade-in');
        }
      });
    }
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      fadeInOnScroll(fadeInElements);
      fadeOutOnScroll(fadeAnimElements);
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
  
    // Trigger the animations once on page load
    handleScroll();
  });

//variable for accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
//variable for back-scroll button
const topBtn = document.querySelector("#scrollBtn");
//variables for offer tab
const tabsBtn   = document.querySelectorAll(".tabs-btn");
const tabsItems = document.querySelectorAll(".tabs-item");
let cont = document.querySelector(".img-carousel");


//accordion start
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    });
});
//accordion end


//scrollBtn appeare after 30 scrollPosition start
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos < 50){
        topBtn.classList.add("remove");
    }else{
        topBtn.classList.remove("remove");
    }
})

//on click you go on the top of page  
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//scrollbar end 



//popup start 
function togglePopup(popupId) {
    document.getElementById(popupId).classList.toggle("active");
}
//popup end


//Carusel

/*
gsap.to("img", {
  ease: "none",
  x: () => -(cont.scrollWidth - window.innerWidth),
  scrollTrigger: {
    trigger: cont,
    pin: cont,
    start: "center center",
    end: () => "+=" + (cont.scrollWidth - window.innerWidth),
    scrub: true,
    invalidateOnRefresh: true,
    markers: true,
  }
});*/

// master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 250 video lessons


const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"top 20%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
	markers:true
})



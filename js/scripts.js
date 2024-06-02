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
  
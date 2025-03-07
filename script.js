
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  // Apply scroll styles to navbar
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
  
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Carousel functionality
  const carousel = document.getElementById('carousel');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevButton = document.getElementById('prevSlide');
  const nextButton = document.getElementById('nextSlide');
  let currentSlide = 0;
  let slideInterval;
  
  // Function to change slide
  function goToSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    
    // Update current slide index
    currentSlide = index;
  }
  
  // Function for next slide
  function nextSlide() {
    const newIndex = (currentSlide + 1) % slides.length;
    goToSlide(newIndex);
  }
  
  // Function for previous slide
  function prevSlide() {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
  }
  
  // Start auto slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  // Stop auto slideshow
  function stopSlideshow() {
    clearInterval(slideInterval);
  }
  
  // Event listeners for carousel buttons
  prevButton.addEventListener('click', function() {
    prevSlide();
    stopSlideshow();
    startSlideshow();
  });
  
  nextButton.addEventListener('click', function() {
    nextSlide();
    stopSlideshow();
    startSlideshow();
  });
  
  // Event listeners for carousel indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
      goToSlide(index);
      stopSlideshow();
      startSlideshow();
    });
  });
  
  // Start the slideshow
  startSlideshow();
  
  // Fade-in animations for sections
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const fadeElements = document.querySelectorAll('.fade-in-section');
  fadeElements.forEach(element => {
    observer.observe(element);
  });
});

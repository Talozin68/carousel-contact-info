
document.addEventListener('DOMContentLoaded', function() {
  // Current Year for Footer Copyright
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Carousel Functionality
  const carousel = document.getElementById('carousel');
  const slides = carousel.getElementsByClassName('carousel-slide');
  const indicators = document.getElementsByClassName('indicator');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
      if (indicators[i]) {
        indicators[i].classList.remove('active');
      }
    }
    
    // Show the selected slide
    slides[index].classList.add('active');
    if (indicators[index]) {
      indicators[index].classList.add('active');
    }
    currentSlide = index;
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
      next = 0;
    }
    showSlide(next);
  }

  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) {
      prev = slides.length - 1;
    }
    showSlide(prev);
  }

  // Auto play carousel
  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Event listeners for carousel
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function() {
      prevSlide();
      stopSlideShow();
      startSlideShow();
    });

    nextBtn.addEventListener('click', function() {
      nextSlide();
      stopSlideShow();
      startSlideShow();
    });
  }

  // Indicator click events
  for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide'));
      showSlide(slideIndex);
      stopSlideShow();
      startSlideShow();
    });
  }

  // Start the carousel
  startSlideShow();

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would normally send the form data to a server
      // For now, we'll just show an alert
      alert('Obrigado pelo seu contato! Em breve retornaremos.');
      this.reset();
    });
  }
});

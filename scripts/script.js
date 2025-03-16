// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us!');
  contactForm.reset();
});

// Add event listeners for the buttons
const riderButton = document.getElementById('rider-button');
const driverButton = document.getElementById('driver-button');

riderButton.addEventListener('click', () => {
  alert('Welcome, Rider!');
  // Add functionality for riders (e.g., redirect to a rider page)
});

driverButton.addEventListener('click', () => {
  alert('Welcome, Driver!');
  // Add functionality for drivers (e.g., redirect to a driver page)
});

// Rider Login Form Submission
document.getElementById('rider-login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('rider-email').value;
  const password = document.getElementById('rider-password').value;
  alert(`Rider Login:\nEmail: ${email}\nPassword: ${password}`);
  // Add your login logic here
});

// Rider Registration Form Submission
document.getElementById('rider-register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('rider-name').value;
  const email = document.getElementById('rider-email-register').value;
  const password = document.getElementById('rider-password-register').value;
  const phone = document.getElementById('rider-phone').value;
  alert(`Rider Registration:\nName: ${name}\nEmail: ${email}\nPassword: ${password}\nPhone: ${phone}`);
  // Add your registration logic here
});

// Driver Login Form Submission
document.getElementById('driver-login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('driver-email').value;
  const password = document.getElementById('driver-password').value;
  alert(`Driver Login:\nEmail: ${email}\nPassword: ${password}`);
  // Add your login logic here
});

// Driver Registration Form Submission
document.getElementById('driver-register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('driver-name').value;
  const email = document.getElementById('driver-email-register').value;
  const password = document.getElementById('driver-password-register').value;
  const phone = document.getElementById('driver-phone').value;
  const license = document.getElementById('driver-license').value;
  const vehicle = document.getElementById('driver-vehicle').value;
  const vehicleNumber = document.getElementById('driver-vehicle-number').value;
  alert(`Driver Registration:\nName: ${name}\nEmail: ${email}\nPassword: ${password}\nPhone: ${phone}\nLicense: ${license}\nVehicle: ${vehicle}\nVehicle Number: ${vehicleNumber}`);
  // Add your registration logic here
});
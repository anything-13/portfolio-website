/* ==========================================================
   ROJESH NIROULA — PORTFOLIO SCRIPT
   Features:
     1. EmailJS contact form (sends real emails)
     2. Sticky navbar shadow on scroll
     3. Active nav-link highlighting
     4. Mobile hamburger menu
     5. Scroll-to-top button
     6. Footer year auto-update
   ========================================================== */

/* ============================================================
   EMAILJS CONFIGURATION
   ============================================================
   SETUP STEPS (free, takes ~5 minutes):

   Step 1 → Go to https://www.emailjs.com and sign up FREE.

   Step 2 → Click "Add New Service" → choose Gmail →
            connect your Gmail → give it any name →
            copy the SERVICE ID (e.g. service_abc123)

   Step 3 → Click "Email Templates" → "Create New Template"
            Set these fields in the template editor:
              To email  : niroularojesh01@gmail.com
              From name : {{from_name}}
              Reply to  : {{from_email}}
              Subject   : New Portfolio Message from {{from_name}}
              Body      :
                Name   : {{from_name}}
                Email  : {{from_email}}
                Message: {{message}}
            Click Save → copy the TEMPLATE ID (e.g. template_xyz789)

   Step 4 → Go to Account → API Keys → copy your PUBLIC KEY

   Step 5 → Replace the 3 placeholder strings below with
            your real values. Save the file. Done!
   ============================================================ */

const EMAILJS_PUBLIC_KEY  = 'IEXfQtQvZXQAudHHO';   // ← replace this
const EMAILJS_SERVICE_ID  = 'service_o9av5vd';   // ← replace this
const EMAILJS_TEMPLATE_ID = 'template_hyfg9io';  // ← replace this

/* ─────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. EMAILJS INITIALISE
     This must run before any send() call.
  ---------------------------------------------------------- */
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  } else {
    console.warn('EmailJS SDK not loaded. Check your internet connection.');
  }


  /* ----------------------------------------------------------
     2. CONTACT FORM — send email via EmailJS
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus  = document.getElementById('formStatus');
  const submitBtn   = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      /* — Basic validation — */
      const name    = document.getElementById('from_name').value.trim();
      const email   = document.getElementById('from_email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        showStatus('Please fill in all fields.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
      }

      /* — Check EmailJS is configured — */
      if (
        EMAILJS_PUBLIC_KEY  === 'YOUR_PUBLIC_KEY'  ||
        EMAILJS_SERVICE_ID  === 'YOUR_SERVICE_ID'  ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID'
      ) {
        showStatus(
          '⚠ EmailJS not configured yet. See script.js for setup steps.',
          'error'
        );
        return;
      }

      /* — Send — */
      submitBtn.disabled    = true;
      submitBtn.textContent = 'Sending...';
      showStatus('Sending your message, please wait...', 'loading');

      /* Template parameters must match what you set in EmailJS template */
      const templateParams = {
        from_name:  name,
        from_email: email,
        message:    message,
        reply_to:   email
      };

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(function () {
          /* SUCCESS */
          showStatus(
            '✓ Message sent! I will get back to you soon.',
            'success'
          );
          contactForm.reset();
        })
        .catch(function (error) {
          /* FAILURE */
          console.error('EmailJS error:', error);
          showStatus(
            'Something went wrong. Please email me directly: niroularojesh01@gmail.com',
            'error'
          );
        })
        .finally(function () {
          submitBtn.disabled    = false;
          submitBtn.textContent = 'Send Message';
        });
    });
  }

  /* Helper: show status message with colour class */
  function showStatus(msg, type) {
    formStatus.textContent = msg;
    formStatus.className   = 'form-status ' + type;
  }

  /* Helper: simple email format check */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  /* ----------------------------------------------------------
     3. NAVBAR — shadow on scroll + active link highlight
  ---------------------------------------------------------- */
  const navbar   = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    /* Add shadow when page is scrolled */
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    /* Highlight the nav link whose section is in view */
    let current = '';
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 90) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });

    /* Show / hide scroll-to-top button */
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); /* run once on load */


  /* ----------------------------------------------------------
     4. HAMBURGER MOBILE MENU
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navList   = document.getElementById('navLinks');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      navList.classList.toggle('open');
    });
  }

  /* Close menu when any nav link is clicked */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navList.classList.remove('open');
    });
  });


  /* ----------------------------------------------------------
     5. SCROLL-TO-TOP BUTTON
  ---------------------------------------------------------- */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ----------------------------------------------------------
     6. FOOTER YEAR — always shows the current year
  ---------------------------------------------------------- */
  const footerYear = document.getElementById('footerYear');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

}); /* end DOMContentLoaded */

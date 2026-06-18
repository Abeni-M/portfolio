/* ==========================================
   1. CORE INITIALIZATION & UTILITIES
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize Theme System
  initTheme();

  // Initialize Mobile Navigation Menu
  initMobileMenu();

  // Initialize Scroll-to-Top Floating Button
  initScrollToTop();

  // Initialize Scroll Reveal Animations (Intersection Observer)
  initScrollReveal();

  // Initialize EmailJS Contact Form handler
  initContactForm();

  // Initialize Resume PDF Exporter
  initPDFExporter();
});

/* ==========================================
   2. CUSTOM TOAST NOTIFICATION HELPERS
   ========================================== */
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast-notification');
  const toastIcon = document.getElementById('toast-icon');
  const toastMessage = document.getElementById('toast-message');
  
  if (!toast) return;

  // Set message text
  toastMessage.textContent = message;

  // Set classes
  toast.className = 'toast show';
  toast.classList.add(type);

  // Set correct Lucide icon name
  let iconName = 'info';
  if (type === 'success') {
    iconName = 'check-circle';
    toastIcon.style.color = '#10b981';
  } else if (type === 'error') {
    iconName = 'alert-triangle';
    toastIcon.style.color = '#ef4444';
  } else {
    toastIcon.style.color = 'var(--primary)';
  }

  toastIcon.setAttribute('data-lucide', iconName);
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        class: 'text-' + (type === 'success' ? 'emerald-500' : type === 'error' ? 'red-500' : 'primary')
      }
    });
  }

  // Hide toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ==========================================
   3. THEME TOGGLE CONTROLLER
   ========================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.querySelector('.theme-icon-sun');
  const moonIcon = document.querySelector('.theme-icon-moon');
  
  // Read current theme
  let theme = localStorage.getItem('theme') || 'dark';
  applyTheme(theme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
    });
  }

  function applyTheme(newTheme) {
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Sync icons visibility
    if (newTheme === 'dark') {
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }
  }
}

/* ==========================================
   4. MOBILE NAVIGATION CONTROLLER
   ========================================== */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const hamburgerIcon = document.querySelector('.menu-icon-hamburger');
  const closeIcon = document.querySelector('.menu-icon-close');
  const navItems = document.querySelectorAll('.mobile-nav-item');

  if (!mobileMenuBtn || !mobileMenuOverlay) return;

  mobileMenuBtn.addEventListener('click', toggleMenu);

  // Close menu when a navigation item is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });

  function toggleMenu() {
    const isActive = mobileMenuOverlay.classList.toggle('active');
    if (isActive) {
      if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Stop background scrolling
    } else {
      closeMenu();
    }
  }

  function closeMenu() {
    mobileMenuOverlay.classList.remove('active');
    if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ==========================================
   5. FLOATING SCROLL TO TOP CONTROLLER
   ========================================== */
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  if (!scrollToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.remove('opacity-0', 'scale-50', 'pointer-events-none');
      scrollToTopBtn.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    } else {
      scrollToTopBtn.classList.add('opacity-0', 'scale-50', 'pointer-events-none');
      scrollToTopBtn.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================
   6. SCROLL REVEAL ANIMATION CONTROLLER
   ========================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -80px 0px', // trigger slightly before entering
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, observerOptions);

    revealElements.forEach(element => {
      element.classList.add('reveal-on-scroll');
      observer.observe(element);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(element => {
      element.classList.add('revealed');
    });
  }
}

/* ==========================================
   7. CASE STUDY PORTFOLIO DYNAMIC MODAL
   ========================================== */
const projectsData = {
  kudeja: {
    title: 'Kudeja Enterprise Platform',
    type: 'E-commerce & Logistics',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Tailwind CSS', 'Cloud Security'],
    description: 'Lead architect for a multi-vendor ecosystem handling thousands of daily transactions. Implemented real-time inventory tracking, secure payment gateways, and highly optimized database querying structures.',
    result: 'Handled 80+ active clients with 99.9% uptime.',
    gallery: ['./assets/kudeja-hero-site.png', './assets/kudeja-preview.png'],
    links: { github: 'https://github.com/Abeni-M', live: 'https://kudeja.com' }
  },
  nexus: {
    title: 'Nexus API Gateway',
    type: 'Backend Infrastructure',
    tech: ['Node.js', 'Redis', 'Docker', 'TypeScript', 'Express.js', 'JSON Web Tokens'],
    description: 'Engineered a high-performance, distributed API gateway designed for high-concurrency traffic. Implemented granular rate-limiting using Redis clusters, JWT-based security verification, and dynamic, zero-config microservices routing.',
    result: 'Reduced average API response latencies by 35% through caching strategies.',
    gallery: ['./assets/nexus api.jpeg'],
    links: { github: 'https://github.com/Abeni-M', live: '#' }
  }
};

function openProjectModal(projectId) {
  const modal = document.getElementById('project-detail-modal');
  const modalContentArea = document.getElementById('modal-content-area');
  
  if (!modal || !modalContentArea || !projectsData[projectId]) return;

  const project = projectsData[projectId];
  
  // Build Gallery Images block
  let galleryHtml = '';
  project.gallery.forEach(img => {
    galleryHtml += `<img src="${img}" alt="${project.title} Gallery Asset" class="w-full rounded-2xl shadow-2xl border border-white/5 object-cover" />`;
  });

  // Build Tech tags
  let techTagsHtml = '';
  project.tech.forEach(t => {
    techTagsHtml += `<span class="px-4 py-2 bg-white/5 text-text-main rounded-full text-xs font-bold border border-white/5">${t}</span>`;
  });

  // Assemble content layout
  const modalHtml = `
    <div class="grid lg:grid-cols-2 gap-12 text-left">
      <div class="space-y-8">
        <div>
          <span class="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">${project.type}</span>
          <h2 class="text-4xl font-black mb-6 text-text-main">${project.title}</h2>
          <p class="text-muted leading-relaxed text-lg">${project.description}</p>
        </div>

        <div class="space-y-4">
          <h4 class="font-bold text-sm uppercase tracking-widest text-primary">Key Results</h4>
          <div class="bg-primary/10 p-6 rounded-2xl border border-primary/20">
            <p class="text-xl font-bold text-primary">${project.result}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          ${techTagsHtml}
        </div>

        <div class="flex gap-4 pt-6">
          <a href="${project.links.live}" target="_blank" rel="noreferrer" class="btn-pill btn-pill-solid">
            Live Preview <i data-lucide="external-link" size="18"></i>
          </a>
          <a href="${project.links.github}" target="_blank" rel="noreferrer" class="btn-pill btn-pill-outline">
            View Code <i data-lucide="github" size="18"></i>
          </a>
        </div>
      </div>

      <div class="space-y-6">
        ${galleryHtml}
      </div>
    </div>
  `;

  // Inject content
  modalContentArea.innerHTML = modalHtml;

  // Render Lucide icons in modal context
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Display modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Stop background scroll
}

function closeProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = ''; // Restore background scroll
}

// Bind modal closing on clicking the backdrop overlay directly
const modalOverlay = document.getElementById('project-detail-modal');
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeProjectModal();
    }
  });
}

// Expose modal handlers to global scope for HTML onclick bindings
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;


/* ==========================================
   8. EMAILJS CONTACT FORM SUBMITTER
   ========================================== */
function initContactForm() {
  const contactForm = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const spinner = document.getElementById('submit-spinner');
  const icon = document.getElementById('submit-icon');
  const submitText = document.getElementById('submit-text');

  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Lock UI and show spinner loading indicator
    submitBtn.disabled = true;
    if (spinner) spinner.classList.remove('hidden');
    if (icon) icon.classList.add('hidden');
    if (submitText) submitText.textContent = 'Sending Message...';

    try {
      // Validate CDN is present
      if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS SDK not loaded');
      }

      // Initialize with correct public keys
      emailjs.init({
        publicKey: "aat6ziqGEqgNtDAg6"
      });

      // Send form directly
      await emailjs.sendForm(
        'service_0ntia54', 
        'template_tfkv1xt', 
        '#portfolio-contact-form'
      );

      showToast('Message sent! I will respond shortly.', 'success');
      contactForm.reset();

    } catch (error) {
      console.error('Email error:', error);
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      // Restore UI elements
      submitBtn.disabled = false;
      if (spinner) spinner.classList.add('hidden');
      if (icon) icon.classList.remove('hidden');
      if (submitText) submitText.textContent = 'Send Message';
    }
  });
}

/* ==========================================
   9. RESUME PDF EXPORT CONTROLLER
   ========================================== */
function initPDFExporter() {
  const downloadPdfBtn = document.getElementById('download-pdf-btn');
  
  if (!downloadPdfBtn) return;

  downloadPdfBtn.addEventListener('click', async () => {
    showToast('Generating your PDF...', 'info');

    try {
      // Ensure CDNs are fully loaded
      if (typeof html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
        throw new Error('PDF conversion CDNs are not loaded');
      }

      const captureElement = document.getElementById('portfolio-container');
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';

      // Perform canvas capture
      const canvas = await html2canvas(captureElement, {
        scale: 1.5, // Crisp quality vs file weight balance
        useCORS: true,
        allowTaint: true,
        backgroundColor: activeTheme === 'dark' ? '#050505' : '#f8fafc',
        windowWidth: 1400, // Fixed width capture guarantees absolute styling metrics
        onclone: (clonedDoc) => {
          // Select and hide elements that shouldn't appear in the print document
          const elementsToHide = [
            '.premium-nav', 
            '.floating-socials', 
            '.hero-cta', 
            '#scroll-to-top-btn', 
            '#toast-notification',
            '#contact',
            '.footer-premium',
            '#cert-lightbox-modal'
          ];
          
          elementsToHide.forEach(selector => {
            const el = clonedDoc.querySelector(selector);
            if (el) el.style.display = 'none';
          });
          
          // Force all transition components (opacity: 0 on start) to be fully opaque in PDF
          const hiddenReveals = clonedDoc.querySelectorAll('.reveal-on-scroll');
          hiddenReveals.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          });
        }
      });

      // Compress compression ratio for balanced sizing
      const imgData = canvas.toDataURL('image/jpeg', 0.6);
      
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const contentHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = contentHeight;
      let position = 0;

      // Add page 1
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, contentHeight);
      heightLeft -= pdfHeight;

      // Append subsequent pages if content overflows single A4 layout
      while (heightLeft >= 0) {
        position = heightLeft - contentHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, contentHeight);
        heightLeft -= pdfHeight;
      }

      // Save PDF output file
      pdf.save('Abenezer_Mulatu_Portfolio.pdf');
      showToast('Portfolio downloaded!', 'success');

    } catch (error) {
      console.error('PDF generation error:', error);
      showToast('Failed to generate PDF. Please try again.', 'error');
    }
  });
}

/* ==========================================
   10. CERTIFICATIONS LIGHTBOX CONTROLLER
   ========================================== */
const certsData = {
  'hikvision-networking': {
    title: 'Hikvision Spark: Networking',
    issuer: 'Hikvision',
    date: 'June 17, 2026',
    desc: 'Certified completion of the Hikvision Spark Training Program in Networking, focusing on enterprise-grade local network design, configuration, switching, and routing protocols.',
    img: './assets/certificate.jpg'
  },
  'kaspersky-mail': {
    title: 'Kaspersky Sales Specialist: Security for Mail Server',
    issuer: 'Kaspersky',
    date: 'April 24, 2026',
    desc: 'Certified competence as a Sales Specialist for Kaspersky Security for Mail Server (S36.3), ensuring robust protection for enterprise mail server infrastructures.',
    img: './assets/photo_2026-06-18_11-34-25.jpg'
  },
  'hikvision-cctv': {
    title: 'Hikvision Spark: CCTV and PA',
    issuer: 'Hikvision',
    date: 'May 20, 2026',
    desc: 'Certified completion of the Hikvision Spark Training Program in CCTV and Public Address (PA) Systems, validating technical expertise in modern video surveillance and public paging systems.',
    img: './assets/photo_2026-06-18_11-34-31.jpg'
  },
  'kaspersky-kuma': {
    title: 'Kaspersky Sales Specialist: KUMA (SIEM)',
    issuer: 'Kaspersky',
    date: 'May 28, 2026',
    desc: 'Certified Sales Specialist for Kaspersky Unified Monitoring and Analysis Platform (KUMA - S34.3), validating knowledge in security information and event management systems.',
    img: './assets/photo_2026-06-18_11-34-35.jpg'
  }
};

function openCertModal(certId) {
  const modal = document.getElementById('cert-lightbox-modal');
  const modalImg = document.getElementById('cert-lightbox-img');
  const modalTitle = document.getElementById('cert-lightbox-title');
  const modalDesc = document.getElementById('cert-lightbox-desc');
  const modalDownload = document.getElementById('cert-lightbox-download');
  
  if (!modal || !certsData[certId]) return;
  
  const cert = certsData[certId];
  
  modalImg.src = cert.img;
  modalImg.alt = cert.title;
  modalTitle.textContent = cert.title;
  modalDesc.textContent = `${cert.issuer} • Issued on ${cert.date} • ${cert.desc}`;
  modalDownload.href = cert.img;
  modalDownload.download = `${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Stop background scroll
}

function closeCertModal() {
  const modal = document.getElementById('cert-lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  document.body.style.overflow = ''; // Restore background scroll
}

// Bind modal closing on clicking the backdrop overlay directly
const certModalOverlay = document.getElementById('cert-lightbox-modal');
if (certModalOverlay) {
  certModalOverlay.addEventListener('click', (e) => {
    if (e.target === certModalOverlay) {
      closeCertModal();
    }
  });
}

// Bind escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertModal();
    closeProjectModal();
  }
});

// Expose modal handlers to global scope for HTML onclick bindings
window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;

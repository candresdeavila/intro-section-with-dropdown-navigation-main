document.addEventListener("DOMContentLoaded", () => {
  // Inyectar logo
  const logoContainer = document.querySelector(".logo-container");
  logoContainer.innerHTML = `
    <h1 class="text-4xl font-bold">snap</h1>
  `;

  // Referencias
  const menuToggle = document.querySelector("button.menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");

  // Íconos SVG
  const menuIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  `;

  const closeIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
`;

  // Mostrar ícono hamburguesa al inicio
  menuToggle.innerHTML = menuIcon;

  let isMenuOpen = false;

  menuToggle.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden");
      overlay.classList.remove("hidden");
      menuToggle.innerHTML = closeIcon;
    } else {
      mobileMenu.classList.add("hidden");
      overlay.classList.add("hidden");
      menuToggle.innerHTML = menuIcon;
    }
  });

  // Cerrar menú si se hace clic en el overlay
  overlay.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    overlay.classList.add("hidden");
    menuToggle.innerHTML = menuIcon;
    isMenuOpen = false;
  });

  // Inyectar contenido del menú móvil
  mobileMenu.innerHTML = `
    <nav class="flex flex-col gap-6 text-gray-700 text-lg">
      <div>
        <button class="flex items-center justify-between w-full group features-toggle">
          <span>Features</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 transition-transform group-[.open]:rotate-180" viewBox="0 0 10 6"><path fill="none" stroke="#686868" stroke-width="1.5" d="M1 1l4 4 4-4"/></svg>
        </button>
        <ul class="features-menu hidden mt-2 pl-4 flex flex-col gap-2 text-base text-gray-500">
          <li class="flex items-center gap-2"><span>📋</span>Todo List</li>
          <li class="flex items-center gap-2"><span>📅</span>Calendar</li>
          <li class="flex items-center gap-2"><span>⏰</span>Reminders</li>
          <li class="flex items-center gap-2"><span>📌</span>Planning</li>
        </ul>
      </div>
      <div>
        <button class="flex items-center justify-between w-full group company-toggle">
          <span>Company</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 transition-transform group-[.open]:rotate-180" viewBox="0 0 10 6"><path fill="none" stroke="#686868" stroke-width="1.5" d="M1 1l4 4 4-4"/></svg>
        </button>
        <ul class="company-menu hidden mt-2 pl-4 flex flex-col gap-2 text-base text-gray-500">
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
      </div>
      <a href="#" class="text-gray-700">Careers</a>
      <a href="#" class="text-gray-700">About</a>
      <div class="border-t border-gray-200 pt-4 mt-4 flex flex-col gap-4">
        <a href="#" class="text-center text-gray-700">Login</a>
        <a href="#" class="border rounded-xl py-2 text-center border-gray-700">Register</a>
      </div>
    </nav>
  `;

  // Lógica de submenús
  const featuresToggle = document.querySelector(".features-toggle");
  const featuresMenu = document.querySelector(".features-menu");
  const companyToggle = document.querySelector(".company-toggle");
  const companyMenu = document.querySelector(".company-menu");

  featuresToggle.addEventListener("click", () => {
    featuresMenu.classList.toggle("hidden");
    featuresToggle.classList.toggle("open");
  });

  companyToggle.addEventListener("click", () => {
    companyMenu.classList.toggle("hidden");
    companyToggle.classList.toggle("open");
  });


  // Hero text (título, párrafo y botón)
const heroText = document.querySelector(".hero-text");
heroText.innerHTML = `
  <h1 class="text-4xl md:text-5xl font-bold text-neutral-900">Make remote work</h1>
  <p class="text-neutral-500 text-lg md:text-xl">
    Get your team in sync, no matter your location. Streamline processes, 
    create team rituals, and watch productivity soar.
  </p>
  <button class="bg-neutral-900 text-white px-6 py-3 rounded-xl w-fit hover:bg-neutral-700 transition">
    Learn more
  </button>
`;

// Hero image (solo se ve en desktop)
const heroImage = document.querySelector(".hero-image");
heroImage.innerHTML = `
  <img src="images/image-hero-mobile.png" alt="Hero image" class="w-full md:hidden">
  <img src="images/image-hero-desktop.png" alt="Hero image" class="w-full hidden md:block">
`;

// Menú de navegación de escritorio
const navDesktop = document.querySelector(".nav-desktop");
navDesktop.innerHTML = `
  <ul class="flex items-center gap-8 text-sm text-neutral-700">
    <li class="relative group">
      <button class="flex items-center gap-2 features-toggle-desktop">
        Features
        <svg class="w-2.5 h-2.5 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6"><path fill="none" stroke="#686868" stroke-width="1.5" d="M1 1l4 4 4-4"/></svg>
      </button>
      <ul class="features-menu-desktop absolute top-full left-0 mt-2 w-40 p-4 bg-white rounded-lg shadow-lg hidden flex-col gap-3 text-sm text-neutral-500">
        <li class="flex items-center gap-2"><span>📋</span>Todo List</li>
        <li class="flex items-center gap-2"><span>📅</span>Calendar</li>
        <li class="flex items-center gap-2"><span>⏰</span>Reminders</li>
        <li class="flex items-center gap-2"><span>📌</span>Planning</li>
      </ul>
    </li>
    <li class="relative group">
      <button class="flex items-center gap-2 company-toggle-desktop">
        Company
        <svg class="w-2.5 h-2.5 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6"><path fill="none" stroke="#686868" stroke-width="1.5" d="M1 1l4 4 4-4"/></svg>
      </button>
      <ul class="company-menu-desktop absolute top-full left-0 mt-2 w-32 p-4 bg-white rounded-lg shadow-lg hidden flex-col gap-3 text-sm text-neutral-500">
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </li>
    <li><a href="#" class="hover:text-neutral-900">Careers</a></li>
    <li><a href="#" class="hover:text-neutral-900">About</a></li>
  </ul>
`;


// Botones de Login y Register (escritorio)
const authDesktop = document.querySelector(".auth-desktop");
authDesktop.innerHTML = `
  <a href="#" class="text-sm text-neutral-700 hover:text-neutral-900">Login</a>
  <a href="#" class="border border-neutral-700 rounded-xl px-5 py-2 text-sm hover:bg-neutral-900 hover:text-white transition">Register</a>
`;


// Clientes (se muestra igual en mobile y desktop)
const clients = document.querySelector(".clients");
clients.innerHTML = `
  <img src="./images/client-databiz.svg" alt="Databiz" class="h-6 md:h-8">
  <img src="./images/client-audiophile.svg" alt="Audiophile" class="h-6 md:h-8">
  <img src="./images/client-meet.svg" alt="Meet" class="h-6 md:h-8">
  <img src="./images/client-maker.svg" alt="Maker" class="h-6 md:h-8">
`;

// Funcionalidad para Features y Company en desktop
const featuresToggleDesktop = document.querySelector(".features-toggle-desktop");
const featuresMenuDesktop = document.querySelector(".features-menu-desktop");
const companyToggleDesktop = document.querySelector(".company-toggle-desktop");
const companyMenuDesktop = document.querySelector(".company-menu-desktop");

featuresToggleDesktop.addEventListener("click", (e) => {
  e.stopPropagation(); // evita cerrar al hacer clic en el botón
  featuresMenuDesktop.classList.toggle("hidden");
  companyMenuDesktop.classList.add("hidden"); // cierra el otro si está abierto
});

companyToggleDesktop.addEventListener("click", (e) => {
  e.stopPropagation();
  companyMenuDesktop.classList.toggle("hidden");
  featuresMenuDesktop.classList.add("hidden");
});

// Cierra ambos menús si haces clic fuera
document.addEventListener("click", () => {
  featuresMenuDesktop.classList.add("hidden");
  companyMenuDesktop.classList.add("hidden");
});


});

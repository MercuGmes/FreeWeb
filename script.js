/* ============================================
   MyE Food Service — script.js
   ============================================ */

// ---- Productos ----
const PRODUCTS = [
  // CONGELADOS
  { id: "c1",  name: "Tacos boqueros 25 unid",                  category: "Congelados", price: 3616 },
  { id: "c2",  name: "Tacos medianos 5 unid",                   category: "Congelados", price: 1695 },
  { id: "c3",  name: "Tacos medianos 10 unid",                  category: "Congelados", price: 3051 },
  { id: "c4",  name: "Tacos medianos 25 unid",                  category: "Congelados", price: 7797 },
  { id: "c5",  name: "Tacos Jumbo 5 unid",                      category: "Congelados", price: 3672.5 },
  { id: "c6",  name: "Tacos Jumbo 10 unid",                     category: "Congelados", price: 7345 },
  { id: "c7",  name: "Tacos Jumbo 12 unid",                     category: "Congelados", price: 5367.5 },
  { id: "c8",  name: "Rabioles 8 unid",                         category: "Congelados", price: 4181 },
  { id: "c9",  name: "Burritos de Res 4 unid",                  category: "Congelados", price: 3672.5 },
  { id: "c10", name: "Burritos de Pollo 4 unid",                category: "Congelados", price: 3672.5 },
  { id: "c11", name: "Tequeños 20 unid",                        category: "Congelados", price: 3729 },
  { id: "c12", name: "Tequeños 100 unid",                       category: "Congelados", price: 17515 },
  { id: "c13", name: "Jamón 1/2 kilo",                          category: "Congelados", price: 3107.5 },
  { id: "c14", name: "Queso Americano reb 40 unid",             category: "Congelados", price: 3220.5 },
  { id: "c15", name: "Caja Queso Americano 800 unid",           category: "Congelados", price: 58760 },
  { id: "c16", name: "Papas Brakes caja 4x2.5 kg",             category: "Congelados", price: 13860.58 },
  { id: "c17", name: "Papas Miglo caja 4x2.5 kg",              category: "Congelados", price: 12712.5 },
  { id: "c18", name: "Papas MFS caja 4x2.5 kg",                category: "Congelados", price: 12486.5 },
  { id: "c19", name: "Papa Gajo Ecofrost caja",                 category: "Congelados", price: 16950 },
  { id: "c20", name: "Papa Gajo Ecofrost bolsa",                category: "Congelados", price: 4237.5 },
  { id: "c21", name: "Papas 1 kilo",                            category: "Congelados", price: 2090.5 },
  { id: "c22", name: "Papas 2.5 kilos bolsa",                   category: "Congelados", price: 3955 },
  { id: "c23", name: "Hash Brown torta de papa",                category: "Congelados", price: 2768.5 },
  { id: "c24", name: "Aros de Cebolla 1 kg",                   category: "Congelados", price: 4633 },
  { id: "c25", name: "Sticks de Yuca 2 kg",                    category: "Congelados", price: 7062.5 },
  { id: "c26", name: "Tilapia caja 4.5 kg",                    category: "Congelados", price: 8888 },
  { id: "c27", name: "Torta Zaragosa Res 24 unid",              category: "Congelados", price: 14125 },
  { id: "c28", name: "Torta Res del Arreo 72 unid 75 g",       category: "Congelados", price: 27685 },
  { id: "c29", name: "Torta Res del Arreo 72 unid 1/4 lb",     category: "Congelados", price: 39437 },
  { id: "c30", name: "Torta Res del Arreo 36 unid 1/4 lb",     category: "Congelados", price: 19775 },
  { id: "c31", name: "Chili Poppers 60 unid",                   category: "Congelados", price: 13560 },
  { id: "c32", name: "Mozzarella Sticks 30 unid",               category: "Congelados", price: 15255 },

  // EMPAQUES
  { id: "e1",  name: "Laminas Enceradas x kilo",                category: "Empaques", price: 3729 },
  { id: "e2",  name: "Papel Encerado Logan 10x10",              category: "Empaques", price: 6215 },
  { id: "e3",  name: "Papel Encerado Logan 6x10",               category: "Empaques", price: 5311 },
  { id: "e4",  name: "Bolsas para Tacos x kilo",                category: "Empaques", price: 3729 },
  { id: "e5",  name: "Bolsas para Cubiertos transparentes 1 kg", category: "Empaques", price: 3729 },
  { id: "e6",  name: "Bolsas Maniqueta mini 6x12 1 kg",         category: "Empaques", price: 3051 },
  { id: "e7",  name: "Bolsas Maniqueta 7x14 1 kg",              category: "Empaques", price: 3051 },
  { id: "e8",  name: "Bolsas Maniqueta 8x16 1 kg",              category: "Empaques", price: 3051 },
  { id: "e9",  name: "Bolsas Maniqueta 10x20 1 kg",             category: "Empaques", price: 3051 },
  { id: "e10", name: "Bolsas Maniqueta 12x25 1 kg",             category: "Empaques", price: 3051 },
  { id: "e11", name: "Bolsas Maniqueta Gris 37x55 1 kg",        category: "Empaques", price: 3333.5 },
  { id: "e12", name: "Bolsas de Basura Jardin kilo",            category: "Empaques", price: 2825 },
  { id: "e13", name: "Bolsas de Basura Cintura 30x40",          category: "Empaques", price: 2525 },
  { id: "e14", name: "Bolsas de Porcionar 4x9",                 category: "Empaques", price: 2768.5 },
  { id: "e15", name: "Bolsas de Porcionar 5x10",                category: "Empaques", price: 2768.5 },
  { id: "e16", name: "Bolsas de Porcionar 7x11",                category: "Empaques", price: 2768.5 },
  { id: "e17", name: "Bolsas de Porcionar 9x14",                category: "Empaques", price: 2768.5 },
  { id: "e18", name: "Bolsas de Porcionar 10x16",               category: "Empaques", price: 2768.5 },
  { id: "e19", name: "Bolsas de Porcionar 14x20",               category: "Empaques", price: 2768.5 },
  { id: "e20", name: "Bolsas Transparentes 17x25",              category: "Empaques", price: 2768.5 },
  { id: "e21", name: "Bolsa para Hielo 21x30",                  category: "Empaques", price: 2768.5 },
  { id: "e22", name: "Bolsas Kraft Cubiertos 50 unid",          category: "Empaques", price: 734.5 },
  { id: "e23", name: "Bolsas Kraft Cubiertos c/diseno 50 unid", category: "Empaques", price: 734.5 },
  { id: "e24", name: "Bolsa #5 Pollo 1 porcion 50 unid",        category: "Empaques", price: 847.5 },
  { id: "e25", name: "Bolsa #8 Pollo 3 porciones 100 unid",     category: "Empaques", price: 2260 },
  { id: "e26", name: "Bolsa To Go 50 unid",                     category: "Empaques", price: 2599 },
  { id: "e27", name: "Bolsa 25 LB Nacional 50 unid",            category: "Empaques", price: 2825 },
  { id: "e28", name: "Bolsa 25 LB Supermercado 50 unid",        category: "Empaques", price: 4124.5 },
  { id: "e29", name: "Bandeja plastica transparente 5x5",       category: "Empaques", price: 96.05 },
  { id: "e30", name: "Empaque PP plastico 6x4",                 category: "Empaques", price: 67.80 },
  { id: "e31", name: "Empaque Bagazo 6x6",                      category: "Empaques", price: 90.40 },
  { id: "e32", name: "Empaque PP bio 6x6",                      category: "Empaques", price: 79.10 },
  { id: "e33", name: "Empaque PP bio 6x9",                      category: "Empaques", price: 113 },
  { id: "e34", name: "Empaque Bagazo 6x9",                      category: "Empaques", price: 154.47 },
  { id: "e35", name: "Empaque PP bio 9x9",                      category: "Empaques", price: 143.51 },
  { id: "e36", name: "Empaque Bagazo 9x9",                      category: "Empaques", price: 154.50 },
  { id: "e37", name: "Empaque PP bio 8x8",                      category: "Empaques", price: 113 },
  { id: "e38", name: "Empaque Bagazo 8x8",                      category: "Empaques", price: 124.30 },

  // UTENSILIOS
  { id: "u1",  name: "Tasas Chinas Enteras Verdes 25 unid",     category: "Utensilios", price: 4068 },
  { id: "u2",  name: "Tasas Chinas Medianas Verdes 25 unid",    category: "Utensilios", price: 3842 },
  { id: "u3",  name: "Tasas Chinas Enteras Transparentes 25 unid", category: "Utensilios", price: 5311 },
  { id: "u4",  name: "Tasas Chinas Medias Transparentes 25 unid", category: "Utensilios", price: 5085 },
  { id: "u5",  name: "Tasitas 8 Onzas Verdes",                  category: "Utensilios", price: 2373 },
  { id: "u6",  name: "Sufles 1 oz — 100 unid",                  category: "Utensilios", price: 2260 },
  { id: "u7",  name: "Sufles 2 oz — 50 unid",                   category: "Utensilios", price: 2825 },
  { id: "u8",  name: "Sufles 3.25 oz — 50 unid",               category: "Utensilios", price: 3107.5 },
  { id: "u9",  name: "Sufles 4 oz — 50 unid",                   category: "Utensilios", price: 3220.5 },
  { id: "u10", name: "Sufles 4 oz Verdes — 50 unid",            category: "Utensilios", price: 2825 },
  { id: "u11", name: "Sufles 5 oz — 50 unid",                   category: "Utensilios", price: 3333.5 },
  { id: "u12", name: "Vaso Cafe 8 oz con tapa 25 unid",         category: "Utensilios", price: 2825 },
  { id: "u13", name: "Vaso Refresco 12 oz con tapa 50 unid",    category: "Utensilios", price: 3390 },
  { id: "u14", name: "Vaso Refresco Domo 12 oz 100 unid",       category: "Utensilios", price: 6667 },
  { id: "u15", name: "Vaso Refresco 16 oz con tapa 50 unid",    category: "Utensilios", price: 3390 },
  { id: "u16", name: "Vaso Refresco Domo 16 oz 100 unid",       category: "Utensilios", price: 5900.86 },
  { id: "u17", name: "Vaso Carton 12 oz con tapa 25 unid",      category: "Utensilios", price: 2486 },
  { id: "u18", name: "Removedores Cortos 1000 unid",            category: "Utensilios", price: 3390 },
  { id: "u19", name: "Removedores Largos 500 unid",             category: "Utensilios", price: 3107.5 },
  { id: "u20", name: "Pajillas Biodegradables 500 unid",        category: "Utensilios", price: 3503 },
  { id: "u21", name: "Combo Utensilios + Servilletas 100 unid", category: "Utensilios", price: 5424 },
  { id: "u22", name: "Cucharas Plasticas 100 unid",             category: "Utensilios", price: 1695 },
  { id: "u23", name: "Tenedores Plasticos 100 unid",            category: "Utensilios", price: 1130 },
  { id: "u24", name: "Cuchillos Plasticos 100 unid",            category: "Utensilios", price: 1695 },
  { id: "u25", name: "Cajitas de Palillos de Madera",           category: "Utensilios", price: 802.30 },
  { id: "u26", name: "Palillos Bambu para Pinchos 100 unid",    category: "Utensilios", price: 1356 },
  { id: "u27", name: "Servilletas Corriente Bulto 24 unid",     category: "Utensilios", price: 14068.5 },
  { id: "u28", name: "Servilletas x unid corriente",            category: "Utensilios", price: 587.60 },
  { id: "u29", name: "Servilletas Pop-up Caja 24 unid",         category: "Utensilios", price: 11978 },
  { id: "u30", name: "Servilletas Pop-up 1/2 caja",             category: "Utensilios", price: 7062.5 },
  { id: "u31", name: "Toallas Dispensador 240 metros",          category: "Utensilios", price: 3390 },
  { id: "u32", name: "Toallas Dispensador 152 metros",          category: "Utensilios", price: 3164 },
  { id: "u33", name: "Papel Higienico Jumbo Roll",              category: "Utensilios", price: 2034 },
  { id: "u34", name: "Papel Aluminio Industrial 18x100",        category: "Utensilios", price: 16159 },
  { id: "u35", name: "Plastico Adhesivo Industrial 12x200",     category: "Utensilios", price: 3390 },
  { id: "u36", name: "Plastico Adhesivo Industrial 18x200",     category: "Utensilios", price: 3390 },
  { id: "u37", name: "Guantes Caja 100 unid M o L",             category: "Utensilios", price: 2373 },

  // LIMPIEZA
  { id: "l1", name: "Alambrinas 1x5",                           category: "Limpieza", price: 2768.5 },
  { id: "l2", name: "Esponjas Doble Proposito 1x6",             category: "Limpieza", price: 2655.5 },
  { id: "l3", name: "Jabon Lavaloza Tasa 1 kilo",               category: "Limpieza", price: 1977.5 },
  { id: "l4", name: "Cloro 3.5% en Galon",                      category: "Limpieza", price: 1695 },
  { id: "l5", name: "Detergente en Polvo 5 kg",                 category: "Limpieza", price: 9492 },
  { id: "l6", name: "Alcohol en Galon liquido o gel",           category: "Limpieza", price: 8475 },
  { id: "l7", name: "Desinfectante en Galon",                   category: "Limpieza", price: 1695 },
  { id: "l8", name: "Desengrasante en Galon",                   category: "Limpieza", price: 3729 },
  { id: "l9", name: "Jabon Liquido Lavamanos",                  category: "Limpieza", price: 4068 },

  // VARIOS
  { id: "v1", name: "Aceite Dorofrit 17 litros",                category: "Varios", price: 22684.60 },
  { id: "v2", name: "Aceite Clover 17 litros",                  category: "Varios", price: 23875.39 },
];

// ---- Utilidades ----
function formatPrice(price) {
  return '\u20a1' + price.toLocaleString('es-CR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ---- Estado ----
let currentCategory = 'Todos';
let currentSearch = '';
let debounceTimer = null;

// ---- Render de productos ----
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyMsg = document.getElementById('emptyMsg');

  const q = currentSearch.toLowerCase().trim();
  const words = q ? q.split(/\s+/) : [];
  const filtered = PRODUCTS.filter(p => {
    const matchCat = currentCategory === 'Todos' || p.category === currentCategory;
    const haystack = (p.name + ' ' + p.category).toLowerCase();
    const matchQ = words.length === 0 || words.every(w => haystack.includes(w));
    return matchCat && matchQ;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    emptyMsg.classList.remove('hidden');
    return;
  }

  emptyMsg.classList.add('hidden');

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = Math.min(i * 0.04, 0.4) + 's';
    card.innerHTML = `
      <p class="product-card__name">${p.name}</p>
      <span class="product-card__cat">${p.category}</span>
      <div class="product-card__price">${formatPrice(p.price)}<span>c/IVA</span></div>
    `;
    grid.appendChild(card);
  });
}

function resetFilters() {
  currentCategory = 'Todos';
  currentSearch = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === 'Todos');
  });
  renderProducts();
}

// ---- Navbar scroll ----
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ---- Smooth scroll ----
function smoothScroll(event, sectionId) {
  event.preventDefault();
  const el = document.getElementById(sectionId);
  if (el) {
    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

// ---- Scroll reveal ----
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ---- Search & Filter ----
function initProductControls() {
  const searchInput = document.getElementById('searchInput');
  const filterTabs = document.getElementById('filterTabs');

  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentSearch = e.target.value;
      renderProducts();
    }, 180);
  });

  filterTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    currentCategory = tab.dataset.cat;
    filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderProducts();
  });
}

// ---- FAQ Accordion ----
function initFaq() {
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq__question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });
}

// ---- Contact Form ----
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre  = document.getElementById('fname').value.trim();
    const correo  = document.getElementById('femail').value.trim();
    const mensaje = document.getElementById('fmsg').value.trim();

    if (!nombre || !correo || !mensaje) return;

    const subject = encodeURIComponent('Contacto desde MyE Food Service — ' + nombre);
    const body    = encodeURIComponent(
      'Nombre: ' + nombre + '\n' +
      'Correo: ' + correo + '\n\n' +
      'Mensaje:\n' + mensaje
    );

    window.location.href = 'mailto:aaronmejiavg@gmail.com?subject=' + subject + '&body=' + body;

    successMsg.classList.remove('hidden');
    form.reset();
    setTimeout(() => successMsg.classList.add('hidden'), 6000);
  });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveal();
  initProductControls();
  initFaq();
  initContactForm();
  renderProducts();
});

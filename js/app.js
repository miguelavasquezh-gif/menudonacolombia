/* ============================================================
   DOÑA COLOMBIA — LÓGICA DE LA APLICACIÓN
   Usa MENU_DATA (menudata.js) como única fuente de datos.
   ============================================================ */

var currentLang = 'en';
var currentCat = null;
var carouselIndex = 0;
var carouselTimer = null;
const CAROUSEL_INTERVAL_MS = 4500; // velocidad del carrusel (ni rápida ni lenta)

/* ---------- Utilidades de idioma ---------- */

function setLang(lang) {
  currentLang = lang;

  // Textos estáticos marcados con data-en / data-es
  document.querySelectorAll('[data-en]').forEach(function (el) {
    el.textContent = el.getAttribute('data-' + lang);
  });

  var btnEN = document.getElementById('btnEN');
  var btnES = document.getElementById('btnES');
  if (btnEN && btnES) {
    btnEN.classList.toggle('active', lang === 'en');
    btnES.classList.toggle('active', lang === 'es');
  }
  document.documentElement.lang = lang;

  // Re-renderizar contenido dinámico que depende del idioma
  if (document.getElementById('categoryGrid')) {
    renderCategoryGrid();
  }
  if (document.getElementById('catTabs')) {
    renderTabs();
    renderCategoryHeader();
    renderItems();
  }
  if (document.getElementById('carouselTrack')) {
    renderCarouselCaptions();
  }
}

/* ---------- Manejo de imágenes con respaldo (fallback) ---------- */
// Si la imagen no existe/no carga, se oculta y se muestra el emoji de respaldo.
function imgTagWithFallback(src, altText, iconEmoji, wrapClass) {
  return (
    '<div class="' + wrapClass + '">' +
      '<img src="' + src + '" alt="' + altText + '" ' +
        'onload="this.parentElement.classList.add(\'has-photo\')" ' +
        'onerror="this.style.display=\'none\'; this.parentElement.classList.remove(\'has-photo\');">' +
      '<span class="cat-fallback">' + iconEmoji + '</span>' +
    '</div>'
  );
}

/* ---------- INDEX: grid de categorías ---------- */

function renderCategoryGrid() {
  var grid = document.getElementById('categoryGrid');
  if (!grid) return;

  var html = MENU_DATA.categories.map(function (cat) {
    return (
      '<a class="cat-card" href="menu.html?cat=' + cat.id + '">' +
        imgTagWithFallback(cat.img, cat.name[currentLang], cat.icon, 'cat-img-wrap') +
        '<div class="cat-name">' + cat.name[currentLang] + '</div>' +
      '</a>'
    );
  }).join('');

  grid.innerHTML = html;
}

/* ---------- MENU.HTML: pestañas de categoría ---------- */

function getCategoryFromURL() {
  var params = new URLSearchParams(window.location.search);
  var id = params.get('cat');
  var found = MENU_DATA.categories.find(function (c) { return c.id === id; });
  return found ? found.id : MENU_DATA.categories[0].id;
}

function renderTabs() {
  var tabsWrap = document.getElementById('catTabs');
  if (!tabsWrap) return;

  tabsWrap.innerHTML = MENU_DATA.categories.map(function (cat) {
    var activeClass = cat.id === currentCat ? ' active' : '';
    return (
      '<button class="cat-tab' + activeClass + '" data-cat="' + cat.id + '">' +
        cat.name[currentLang] +
      '</button>'
    );
  }).join('');

  // Listeners de clic
  tabsWrap.querySelectorAll('.cat-tab').forEach(function (btn) {
    btn.addEventListener('click', function () {
      selectCategory(btn.getAttribute('data-cat'), true);
    });
  });

  // Centrar la pestaña activa dentro de la barra
  var activeTab = tabsWrap.querySelector('.cat-tab.active');
  if (activeTab) {
    activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function renderCategoryHeader() {
  var titleEl = document.getElementById('categoryTitle');
  if (!titleEl) return;
  var cat = MENU_DATA.categories.find(function (c) { return c.id === currentCat; });
  if (cat) {
    titleEl.textContent = cat.name[currentLang];
    document.title = 'Doña Colombia – ' + cat.name[currentLang];
  }
}

function renderItems() {
  var list = document.getElementById('itemList');
  if (!list) return;

  var cat = MENU_DATA.categories.find(function (c) { return c.id === currentCat; });
  if (!cat) return;

  list.innerHTML = cat.items.map(function (item) {
    return (
      '<div class="item-row">' +
        imgTagWithFallback(item.img, item.name, item.icon, 'item-img-wrap') +
        '<div class="item-content">' +
          '<div class="item-top">' +
            '<span class="item-name">' + item.name + '</span>' +
            '<span class="item-price">' + item.price + '</span>' +
          '</div>' +
          '<div class="item-desc">' + item.desc[currentLang] + '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');
}

function selectCategory(catId, updateURL) {
  currentCat = catId;

  // Actualizar clase activa en las pestañas sin volver a construirlas todas
  document.querySelectorAll('.cat-tab').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === catId);
  });
  var activeTab = document.querySelector('.cat-tab.active');
  if (activeTab) {
    activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }

  renderCategoryHeader();
  renderItems();

  if (updateURL) {
    var newURL = window.location.pathname + '?cat=' + catId;
    history.pushState({ cat: catId }, '', newURL);
  }
}

function scrollTabs(dir) {
  var tabs = document.getElementById('catTabs');
  if (tabs) tabs.scrollBy({ left: dir * 160, behavior: 'smooth' });
}

// Soporte para el botón "atrás/adelante" del navegador
window.addEventListener('popstate', function () {
  if (document.getElementById('catTabs')) {
    currentCat = getCategoryFromURL();
    selectCategory(currentCat, false);
  }
});

/* ---------- CARRUSEL ---------- */

function renderCarouselCaptions() {
  document.querySelectorAll('.carousel-caption').forEach(function (el, i) {
    el.textContent = MENU_DATA.carousel[i].caption[currentLang];
  });
}

function initCarousel() {
  var track = document.getElementById('carouselTrack');
  var dotsWrap = document.getElementById('carouselDots');
  if (!track) return;

  track.innerHTML = MENU_DATA.carousel.map(function (slide) {
    return (
      '<div class="carousel-slide">' +
        '<img src="' + slide.img + '" alt="promo" ' +
          'onload="this.parentElement.classList.add(\'has-photo\')" ' +
          'onerror="this.style.display=\'none\'; this.parentElement.classList.remove(\'has-photo\');">' +
        '<span class="slide-fallback">' + slide.icon + '</span>' +
        '<div class="carousel-caption">' + slide.caption[currentLang] + '</div>' +
      '</div>'
    );
  }).join('');

  dotsWrap.innerHTML = MENU_DATA.carousel.map(function (_, i) {
    return '<span class="carousel-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></span>';
  }).join('');

  dotsWrap.querySelectorAll('.carousel-dot').forEach(function (dot) {
    dot.addEventListener('click', function () {
      goToSlide(parseInt(dot.getAttribute('data-index'), 10));
      restartCarouselAutoplay();
    });
  });

  document.getElementById('carouselPrev').addEventListener('click', function () {
    goToSlide(carouselIndex - 1);
    restartCarouselAutoplay();
  });
  document.getElementById('carouselNext').addEventListener('click', function () {
    goToSlide(carouselIndex + 1);
    restartCarouselAutoplay();
  });

  // Pausar el autoplay mientras el usuario interactúa con el mouse encima
  var carouselEl = document.getElementById('carousel');
  carouselEl.addEventListener('mouseenter', stopCarouselAutoplay);
  carouselEl.addEventListener('mouseleave', restartCarouselAutoplay);

  goToSlide(0);
  restartCarouselAutoplay();
}

function goToSlide(index) {
  var total = MENU_DATA.carousel.length;
  carouselIndex = (index + total) % total;

  var track = document.getElementById('carouselTrack');
  track.style.transform = 'translateX(-' + (carouselIndex * 100) + '%)';

  document.querySelectorAll('.carousel-dot').forEach(function (dot, i) {
    dot.classList.toggle('active', i === carouselIndex);
  });
}

function restartCarouselAutoplay() {
  stopCarouselAutoplay();
  carouselTimer = setInterval(function () {
    goToSlide(carouselIndex + 1);
  }, CAROUSEL_INTERVAL_MS);
}

function stopCarouselAutoplay() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}

/* ---------- INICIALIZACIÓN ---------- */

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('categoryGrid')) {
    renderCategoryGrid();
  }

  if (document.getElementById('catTabs')) {
    currentCat = getCategoryFromURL();
    renderTabs();
    renderCategoryHeader();
    renderItems();
    initCarousel();
  }

  setLang(currentLang);
});

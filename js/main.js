const promoDots =
  document.querySelectorAll(".promo-dot");

const promoImages = document.querySelectorAll(".promo-image");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let currentIndex = 0;


/* =========================
   ACTUALIZAR SLIDER
========================= */

function updateSlider() {

  promoImages.forEach((image, index) => {

    image.classList.toggle(
      "active",
      index === currentIndex
    );

  });
promoDots.forEach((dot, index) => {

  dot.classList.toggle(
    "active",
    index === currentIndex
  );

});


promoDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    currentIndex = index;

    updateSlider();

  });

});


  /* BOTON PREV */

  if (currentIndex === 0) {

    prevBtn.classList.add("disabled");

  } else {

    prevBtn.classList.remove("disabled");

  }


  /* BOTON NEXT */

  if (currentIndex === promoImages.length - 1) {

    nextBtn.classList.add("disabled");

  } else {

    nextBtn.classList.remove("disabled");

  }

}


/* =========================
   SIGUIENTE
========================= */

nextBtn.addEventListener("click", () => {

  if (currentIndex < promoImages.length - 1) {

    currentIndex++;

    updateSlider();

  }

});


/* =========================
   ANTERIOR
========================= */

prevBtn.addEventListener("click", () => {

  if (currentIndex > 0) {

    currentIndex--;

    updateSlider();

  }

});

const trigger = document.querySelector('.download-trigger');
const modal = document.getElementById('downloadModal');
const closeBtn = document.getElementById('closeDownload');

if (trigger && modal && closeBtn) {

  trigger.addEventListener('click', (e) => {

    e.preventDefault();

    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {

    modal.classList.remove('active');
  });

}

/* =========================
   MODAL COSTOS PROMOCIONALES
========================= */
const triggerCostos = document.querySelector('.trigger-costos');
const modalCostos = document.getElementById('modalCostos');
const closeCostos = document.getElementById('closeCostos');

if (triggerCostos && modalCostos && closeCostos) {

  triggerCostos.addEventListener('click', (e) => {

    e.preventDefault();

    modalCostos.classList.add('active');
  });

  closeCostos.addEventListener('click', () => {

    modalCostos.classList.remove('active');
  });

}


/* =========================
   INIT
========================= */

updateSlider();


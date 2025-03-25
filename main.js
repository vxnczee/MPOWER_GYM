const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

document.getElementById("calculate-btn").addEventListener("click", calculateBMI);

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const resultDiv = document.getElementById("result");

    if (!weight || !height || !age) {
        resultDiv.innerHTML = "Kérlek, töltsd ki az összes mezőt.";
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let category = "";

    if (bmi < 18.6) {
        category = "Alulsúlyos";
    } else if (bmi < 24.9) {
        category = "Normál súlyú";
    } else if (bmi < 29.9) {
        category = "Túlsúlyos";
    } else {
        category = "Elhízott";
    }

    resultDiv.innerHTML = `A BMI-d: ${bmi} (${category}). Kor: ${age} év.`;
}



document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Megakadályozza az űrlap alapértelmezett beküldését

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  document.getElementById('form-result').innerText = `Köszönjük, ${name}! Az email címed: ${email}. Hamarosan felvesszük veled a kapcsolatot.`;
  document.getElementById('contact-form').reset();

  
});
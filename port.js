// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================= KNOW MORE BUTTON =================

function showMessage() {

    alert(
        "Hello! I am Veera Lokesh, a Computer Science Engineering student interested in Full Stack Development, Java, JavaScript and Machine Learning."
    );

}


// ================= PROJECT BUTTON =================

function projectMessage() {

    alert(
        "Customer Churn Prediction project using Machine Learning."
    );

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " + name + "! Your message has been received."
    );

    contactForm.reset();

});
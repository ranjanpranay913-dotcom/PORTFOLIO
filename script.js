const text = [
    "Web Developer",
    "Software Developer",
    "BCA Student",
    "Creative Developer"
];

let index = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if (charIndex < text[index].length) {

        typing.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(deleteEffect, 1500);

    }
}

function deleteEffect() {

    if (charIndex > 0) {

        typing.textContent =
            text[index].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteEffect, 60);

    } else {

        index++;

        if (index >= text.length) {
            index = 0;
        }

        setTimeout(typeEffect, 400);
    }
}

typeEffect();


// CONTACT FORM

document
    .querySelector(".contact-form")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        this.reset();

    });
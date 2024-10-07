const projectCarousel = document.querySelector('.project-carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click',()=>{
    projectCarousel.scrollBy({
        left:300,
        behavior: "smooth"
    });
});
prevBtn.addEventListener('click',()=>{
    projectCarousel.scrollBy({
        left:-300,
        behavior: "smooth"
    });
});

function toggleDetails(button){
    const details = button.nextElementSibling;

    if(details.style.display === "none"){
        details.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        details.style.display = "none";
        button.textContent = "View Details";
    }
}
// Get elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const thankYouMessage = document.getElementById('thankYouMessage');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Real-time validation
function validateInput() {
    let valid = true;

    if (nameInput.value.trim() === '') {
        nameError.innerText = 'Please enter your name.';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.innerText = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        messageError.innerText = 'Please enter a message.';
        messageError.style.display = 'block';
        valid = false;
    } else {
        messageError.style.display = 'none';
    }

    return valid;
}

// Submit form event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Validate the form
    if (validateInput()) {
        // Hide form and show thank-you message
        form.style.display = 'none';
        thankYouMessage.style.display = 'block';
    }
});
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toLocaleDateString();

    document.getElementById('clock').innerHTML = `${date} ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to display the clock immediately


const contactForm = document.getElementById('contact-form');
const contactAnchor = document.querySelectorAll('.contact-anchor');

// fix spacing between mail and phone number

if (contactAnchor) {
    contactAnchor.forEach(anchor => {
        anchor.style.cssText = 'cursor: pointer;'
        anchor.addEventListener('click', (event) => {
            document.location.href = contactPage;
            localStorage.setItem('cf', true);
        });
    });
}

if (localStorage.length > 0 && document.title === 'Franklin Court Press - Contact Us') {
    window.location.href = "#contact-form";
    localStorage.removeItem('cf');
}

showActivePage();

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const url = 'http://localhost:3000/contact';
        const nameInput = document.querySelector('input[name="name"');
        const numberInput = document.querySelector('input[name="number"');
        const emailInput = document.querySelector('input[name="email"');
        const assistanceInput = document.querySelector('textarea[name="assistance"');
        const honey = document.querySelector('input[name="lastname"');
        const data = {
            name: nameInput.value,
            number: numberInput.value,
            email: emailInput.value,
            assistance: assistanceInput.value,
            honey: honey.value,
        }
        fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.status === 400) {
                setErrorMessage();
            } else {
                if (document.getElementById('contact-error-message')) {
                    const fieldset = document.getElementById('assistance-field');
                    fieldset.removeChild(document.getElementById('contact-error-message'));
                }
                nameInput.value = '';
                numberInput.value = '';
                emailInput.value = '';
                assistanceInput.value = '';
            }
        })
        .catch(error => setErrorMessage());
    });
}

function setErrorMessage() {
    if (!document.getElementById('contact-error-message')) {
        const p = document.createElement('p');
        const fieldset = document.getElementById('assistance-field');
        p.innerText = 'Something went wrong. Please try again.';
        p.id = 'contact-error-message';
        p.style.cssText = 'margin: 0; padding: 0; color: red;';
        fieldset.append(p);
    }
}

function showActivePage() {
    const title = document.title;
    switch(document.title) {
        case 'Franklin Court Press - Resources':
            return activate(1);
        case 'Franklin Court Press - Contact Us':
            return activate(2);
        default:
            return activate(0);
    }
}

function activate(pageNumber) {
    const navbar = document.querySelector('.main-nav');
    Array.from(navbar.children).forEach((page, index) => {
        if (index === pageNumber) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}


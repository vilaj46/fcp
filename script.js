const initialURL = window.location.href;
const mainNav = document.querySelector('.main-nav');

// Underlining the active page.
if (initialURL.includes('index')) {
    Array.from(mainNav.children).forEach(link => {
        if (link.innerText === 'Home') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        } 
    });
} else if (initialURL.includes('resources')) {
    Array.from(mainNav.children).forEach(link => {
        if (link.innerText === 'Resources') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        } 
    });
} else {
    Array.from(mainNav.children).forEach(link => {
        if (link.innerText === 'Contact') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        } 
    });
}


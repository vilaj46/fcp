const button = '<button class="contact-button contact-anchor">Contact Now</button>';

document.write(`
<footer>
    <hr />
    <h1><a href="${homePage}">Franklin Court Press</a></h1>
    <small>
        229 West 28th Street 8th Floor | New York, New York 10001 | Phone:
        <a href="tel:1-212-594-7902">212-594-7902</a>
    </small>
    ${document.title !== 'Franklin Court Press - Contact Us' ? button : ''}
    
</footer>
`)
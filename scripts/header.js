let headerPic = './images/picResized.jpg';
let homePage = './index.html';
let resourcesPage = './pages/resources.html';
let contactPage = './pages/contact.html';
let logo = './images/logos/FCP_logo.png';

if (document.title !== 'Franklin Court Press - Home') {
  headerPic = '../images/picResized.jpg';
  homePage = '../index.html';
  resourcesPage = './resources.html';
  contactPage = './contact.html';
  logo = '../images/logos/FCP_logo.png';
}

document.write(`
<header>
      <section class="header-items">
        <section>
          <a href="${homePage}">
            <img src="${logo}" id="logo"/>
            <h1>Franklin Court Press</h1>
          </a>
        </section>
        <section class="contact">
          <a class="contact-anchor">
            <i class="fas fa-envelope"></i>
          </a>
          <p style="display: inline-block">
            &nbsp / <a href="tel:1-212-594-7902">212-594-7902</a>
          </p>
        </section>
      </section>
      <nav>
        <!-- Figure out best way to template other pages-->
        <ul class="main-nav">
          <li><a href="${homePage}">Home</a></li>
          <li><a href="${resourcesPage}">Resources</a></li>
          <li><a href="${contactPage}">Contact</a></li>
        </ul>
      </nav>
    </header>
    <section class="motivation">
    <img src="${headerPic}" alt="Picture" width="100%" />
      <h4>Dedicated to serving your interests</h4>
      <hr />
    </section>
`);
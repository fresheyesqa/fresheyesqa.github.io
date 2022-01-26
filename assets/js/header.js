class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
      this.innerHTML = `
          <div id="header">
            <h1><a href="index.html" id="logo">Fresh Eyes QA</a></h1>
            <nav id="nav">
              <ul>
                <li class="index"><a href="index.html">Home</a></li>
                <li class="services"><a href="services.html">Services & Rates</a></li>
                <li class="resources"><a href="resources.html">Resources</a></li>
                <li class="blog"><a href="blog.html">Blog</a></li>
                <li class="contact"><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
    `;
  }
}

customElements.define('header-component', Header);
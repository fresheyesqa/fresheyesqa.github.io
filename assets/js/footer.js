class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="footer">
          <div class="copyright">
            <ul class="menu">
              <li>&copy; Fresh Eyes QA. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li><li>Contact via <a href="https://www.linkedin.com/company/fresh-eyes-qa">LinkedIn</a></li>
            </ul>
          </div>
      </div>
    `;
  }
}

customElements.define('footer-component', Footer);
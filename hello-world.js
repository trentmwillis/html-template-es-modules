import template from './hello-world.t.html';

class HelloWorldElement extends HTMLElement {

  static get is() {

    return 'hello-world';

  }

  constructor() {

    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }

}

customElements.define(HelloWorldElement.is, HelloWorldElement);

export default HelloWorldElement;

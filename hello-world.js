import template from './hello-world.t.html';

class HelloWorldElement extends HTMLElement {

  // Defines the name of the component
  static get is() {

    return 'hello-world';

  }

  constructor() {

    super();

    // Add shadow dom
    this.attachShadow({ mode: 'open' });

    // Append a clone of the template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

  }

}

// Register the component as a custom element
customElements.define(HelloWorldElement.is, HelloWorldElement);

export default HelloWorldElement;

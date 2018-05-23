# HTML Template ES Modules

A simple, proof-of-concept for importing HTML files as HTML Templates into ES Modules. Made possible by using [`Service Workers`](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to transparently transform HTML file responses into ES Modules that export an [`HTMLTemplateElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement).

## Example

Given [`hello-world.html`](./hello-world.html):

```html
<h1>Hello, world!</h1>
<p><em>Coming at you live, from an HTML Template imported as an ES Module!</em></p>
```

You can import it in [`hello-world.js`](./hello-world.js) like so:

```js
import template from './hello-world.html';
console.log(template.toString()); // [object HTMLTemplateElement]
```

From there you can clone the template and insert it into the DOM! Or do whatever else you'd like with the element.

## Running The Demo

To try out the demo, do the following:

* Clone the repo: `git clone https://github.com/trentmwillis/html-template-es-modules.git`
* Install dependencies in the repo: `cd html-template-es-modules && npm install`
* Run the server: `npm run start`

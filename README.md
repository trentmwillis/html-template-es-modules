# HTML Template ES Modules

A simple, proof-of-concept for importing HTML Templates into ES Modules. Made possible by using [`Service Workers`](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to transparently transform plain text HTML responses into ES Modules that export an [`HTMLTemplateElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTemplateElement).

## Example

Given [`hello-world.t.html`](./hello-world.t.html):

```html
<h1>Hello, world!</h1>
<p><em>Coming at you live, from an HTML Template imported as an ES Module!</em></p>
```

You can import it in [`hello-world.js`](./hello-world.js) like so:

```js
import template from './hello-world.t.html';
console.log(template.toString()); // [object HTMLTemplateElement]
```

From there you can clone then template and insert it into the DOM! Or do whatever else you'd like with the element.

self.addEventListener('fetch', (event) => {

  if (isTemplateRequest(event.request)) {

    event.respondWith(esModuleFromTemplateRequest(event.request));

  }

});

function isTemplateRequest(request) {

  return request.url.endsWith('.t.html');

}

async function esModuleFromTemplateRequest(request) {

  const response = await fetch(request); // Fetch the original data
  const markup = await response.text(); // Get the raw markup as text
  const esModule = insertMarkupIntoESModule(markup);
  const responseOptions = { // Return the new "module" as the appropriate type
    headers: {
      'Content-Type': 'application/javascript',
    },
  };

  return new Response(esModule, responseOptions);

}

function insertMarkupIntoESModule(html) {

  return `
    const template = document.createElement('template');
    template.innerHTML = \`${html}\`;
    export default template;
  `;

}

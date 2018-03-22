self.addEventListener('fetch', (event) => {

  if (isTemplateRequest(event.request)) {

    event.respondWith(esModuleFromTemplateRequest(event.request));

  }

});

function isTemplateRequest(request) {

  const pathParts = request.url.split('.').reverse();
  return `${pathParts[1]}.${pathParts[0]}` === 't.html';

}

async function esModuleFromTemplateRequest(request) {

  const response = await fetch(request);
  const markup = await response.text();
  const esModule = insertMarkupIntoESModule(markup);
  const responseOptions = {
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

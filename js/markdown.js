async function fetchAndParseMarkdown() {
    const url = 'https://github.com/Mumsizzz/FrontEnd-1---Final-Assignment/blob/52eebcf5a92d2d7f80149c1ca07b1b833d8da107/README.md'
    const response = await fetch(url)
    const data = await response.text()
    const htmlFromMarkdown = marked(data, { sanitize: true });
    return htmlFromMarkdown
  }

  async function init() {
    const $main = document.querySelector('#app');
    const htmlContent = await fetchAndParseMarkdown();
    $main.innerHTML = htmlContent
  }
  
  init();
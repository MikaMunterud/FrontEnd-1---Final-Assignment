
async function fetchAndParseMarkdown(){
    const url = "https://github.com/Mumsizzz/FrontEnd-1---Final-Assignment/blob/570f2c649b769484b202e7310edcd567d4833db6/README.md";
    const response = await fetch(url);
    const data = await response.text();
    const htmlFromMarkdown = marked(data, {sanitize: true});
    return htmlFromMarkdown;
}

async function init() {
    const main = document.querySelector("#readme");
    const htmlContent = await fetchAndParseMarkdown();
    main.innerHTML = htmlContent;
}
init();
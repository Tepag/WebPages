var language; 
var link;
function getLanguage() {
    (
        localStorage.getItem('language') == null) ? setLanguage('zh') : false;
        $.ajax({ 
            url:  '../content/' +  localStorage.getItem('language') + '.json', 
            dataType: 'json', async: false, 
            success: function (lang) { language = lang } 
        }
);
}
function getLinks() {
    (
        localStorage.getItem('links') == null) ? null : null;
        $.ajax({ 
            url:  '../content/links.json', 
            dataType: 'json', async: false, 
            success: function (linkjson) { links = linkjson } 
        }
    );
}


function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage(); // Call getLanguage after setting the language
    location.reload();
}
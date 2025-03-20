var language; 
var links;

function getLanguage() {
    (
        localStorage.getItem('language') == null) ? setLanguage('en') : false;
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
            success: function (linkjson) { link = linkjson } 
        }
    );
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    getLanguage(); // Call getLanguage after setting the language
    location.reload();
}

$(document).ready(function() {
    const navbarHtml = `
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="./home.html">
                <figure class="image" style="max-width: 20px">
                    <img class="is-rounded is-square" src="../assets/images/logo.png" alt="icon"/>
                </figure>
                <b>PLP</b>
            </a>
            <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navMenu">
            <div class="navbar-start">
                <a class="navbar-item" id="navHome" href="./home.html"></a>
                <a class="navbar-item" id="navGroups" href="./wechatgroups.html"></a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" id="navMore" href="./workInProgress.html"></a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" id="navInstagram" href=""></a>
                        <a class="navbar-item" id="navRednote" href=""></a>
                        <a class="navbar-item" id="navSponsor" href="./workInProgress.html"></a>
                        <a class="navbar-item" id="navOurTeam" href="./workInProgress.html"></a>
                        <hr class="navbar-divider">
                        <a class="navbar-item" id="navContactUs" href="./workInProgress.html"></a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-dark" href="#" onclick="setLanguage('en')">EN</a> 
                        <a class="button is-dark" href="#" onclick="setLanguage('zh')">中</a>
                        <a class="button is-primary" id="navAboutUs" href="./home.html"><strong></strong></a>
                        <a class="button is-light" id="navJoinUs" href="./joinUs.html"></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;
    $('body').prepend(navbarHtml);

    // Navbar burger toggle
    $('.navbar-burger').click(function() {
        const target = $(this).data('target');
        $(this).toggleClass('is-active');
        $('#' + target).toggleClass('is-active');
    });
});

$(document).ready(function(){
    getLinks();
    getLanguage(); // Ensure language is loaded on document ready
    $('#navRednote').text(language.navbar.rednote);
    $('#navInstagram').text(language.navbar.instagram);
    $('#navSponsor').text(language.navbar.sponsor);
    $('#navOurTeam').text(language.navbar.ourTeam);
    $('#navContactUs').text(language.navbar.contactUs);
    $('#navAboutUs').text(language.navbar.aboutUs);
    $('#navJoinUs').text(language.navbar.joinUs);
    $('#navHome').text(language.navbar.home);
    $('#navGroups').text(language.navbar.groups);
    $('#navMore').text(language.navbar.more);
    $('#navRednote').attr('href', link.rednote);
    $('#navInstagram').attr('href', link.instagram);
});



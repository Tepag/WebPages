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
                <a class="navbar-item" href="./home.html">Home</a>
                <a class="navbar-item" href="./wechatgroups.html">Groups</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" href="./workInProgress.html">More</a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="https://www.instagram.com/passionlab.polimi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">📸 Instagram</a>
                        <a class="navbar-item" href="https://www.xiaohongshu.com/user/profile/624ebd7c000000001000a777?xsec_token=YBfQfd6YxrhArkYMXpTT2fBKUt6Riyp1i6m7LEd8j04Yk=&xsec_source=app_share&xhsshare=CopyLink&appuid=628e8cdd00000000210265b1&apptime=1742463665&share_id=f5cab7f9ebd84f2ea0ea8b4d0f1b553f">📕 Rednote</a>
                        <a class="navbar-item" href="./workInProgress.html">Sponsor</a>
                        <a class="navbar-item" href="./workInProgress.html">Our team</a>
                        <hr class="navbar-divider">
                        <a class="navbar-item" href="./workInProgress.html">Report an issue</a>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary" href="./home.html"><strong>About US</strong></a>
                        <a class="button is-light" href="./joinUs.html">Join US</a>
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

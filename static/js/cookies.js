$(document).ready(function(){
    setTimeout(function () {
        if (localStorage.getItem('cookieSeen') !== 'shown') {
            $("#cookieConsent").fadeIn(200);
            localStorage.setItem('cookieSeen','shown')
        }
    }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    });
});

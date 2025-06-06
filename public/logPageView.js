// pyxfluff 2025

window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments)
};

function trackPageview() {
    if (window.plausible) {
        window.plausible('pageview');
    }
}

// i love recursion!!!
const ps = history.pushState;
history.pushState = function () {
    ps.apply(this, arguments);
    trackPageview();
};

const rs = history.replaceState;
history.replaceState = function () {
    rs.apply(this, arguments);
    trackPageview();
};

window.addEventListener('popstate', () => {
    trackPageview();
});

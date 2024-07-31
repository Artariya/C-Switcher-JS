$(document).ready(function () {
    let navbar = $('#navbar');
    const $window = $(window);
    // scrolling window event
    $window.scroll(function () {
        if ($window.scrollTop() > 0) {
            // page scrolling status
            CSW.switch({
                element: navbar.get(0),
                mode: 'dark',
                switch_children: true,
            })
        } else {
            // page on top status
            CSW.switch({
                element: navbar.get(0),
                mode: 'light',
                switch_children: true,
            })
        }
    });
})
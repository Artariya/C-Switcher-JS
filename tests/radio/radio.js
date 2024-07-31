$(document).ready(function () {
    let switch_example = $('#switch-example');
    // radio 1
    $('#radio1').on('change', function () {
        if ($(this).prop("checked")) {
            CSW.switch({
                element: switch_example.get(0),
                mode: 'card-1',
                switch_children: true
            })
        }
    });
    // radio 2
    $('#radio2').on('change', function () {
        if ($(this).prop("checked")) {
            CSW.switch({
                element: switch_example.get(0),
                mode: 'card-2',
                switch_children: true
            })
        }
    });
})
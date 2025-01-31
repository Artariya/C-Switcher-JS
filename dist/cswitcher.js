var CSW = /** @class */ (function () {
    function CSW() {
    }
    CSW.switch = function (_a) {
        var element = _a.element, mode = _a.mode, switch_children = _a.switch_children;
        var $element = $(element);
        function switchElement(_element, _mode) {
            var $_element = $(_element);
            var modes = {};
            $.each(_element.attributes, function (key, value) {
                if (String(value.name).startsWith('data-csm-')) {
                    var _key = String(value.name).replace('data-csm-', '');
                    modes[_key] = String(value.value).trim().split(' ');
                }
            });
            if (modes.hasOwnProperty(_mode)) {
                $.each(modes, function (key, value) {
                    if (key != _mode) {
                        $_element.removeClass(value);
                    }
                });
                $_element.addClass(modes[_mode]);
                $_element.data('csw-status', _mode);
            }
        }
        switchElement(element, mode);
        // call switch element for children have data-mode attribute
        if (switch_children) {
            $element.find('*').filter(function () {
                var founded = false;
                $.each(this.attributes, function (key, at) {
                    if (at.name.startsWith('data-csm-')) {
                        founded = true;
                    }
                });
                return founded;
            }).each(function () {
                switchElement(this, mode);
            });
        }
    };
    return CSW;
}());
export { CSW };
window.CSW = CSW;

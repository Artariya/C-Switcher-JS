export class CSW {
    static switch({element, mode, switch_children}: {
        element: HTMLElement,
        mode: string,
        switch_children: boolean
    }): void {
        let $element = $(element);

        function switchElement(_element: HTMLElement, _mode: string) {
            let $_element = $(_element);
            let modes: any = {};
            $.each(_element.attributes, function (key, value) {
                if (String(value.name).startsWith('data-csm-')) {
                    let _key = String(value.name).replace('data-csm-', '');
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
                let founded = false;
                $.each(this.attributes, function (key, at) {
                    if (at.name.startsWith('data-csm-')) {
                        founded = true;
                    }
                });
                return founded;
            }).each(function () {
                switchElement(this, mode)
            });
        }
    }
}

(window as any).CSW = CSW;
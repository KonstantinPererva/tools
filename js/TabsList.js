function TabsList(node) {
    var self = this;
    self.nodeSelector = node;
    if (!self.nodeSelector) {return}

    self.node = document.querySelector(self.nodeSelector);

    if (!self.node.querySelectorAll('[data-button-tab]').length) {return;}

    self.btnSwitchList = [].slice.call(self.node.querySelectorAll('[data-button-tab]'));
    self.tab = [].slice.call(self.node.querySelectorAll('[data-content-tab]'));

    self.btnSwitchList.forEach(function (btn, ind) {
        btn.addEventListener('click', function () {
            var name = this.dataset.buttonTab;

            self.tab.forEach(function (el) {
                el.classList.remove('active');
            });

            self.btnSwitchList.forEach(function (el) {
                el.classList.remove('active');
            });

            self.node.querySelector('[data-content-tab="' + name + '"]').classList.add('active');
            this.classList.add('active');
        });
    })
}

let containerTabs = document.querySelector('[data-container="wrapper_tabs"]');

if (containerTabs) {
    new TabsList('[data-container="wrapper_tabs"]');
}
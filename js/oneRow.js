document.addEventListener('DOMContentLoaded', function () {
    let propertiesList = document.querySelectorAll('.compare-similar-section .properties-list');

    if (propertiesList.length)
    {
        function handleOneHeight(nodeList) {
            let self = this;
            self.nodeList = nodeList;
            self.listCell = [];
            self.row = self.nodeList[0].querySelectorAll('li').length;
            self.elHeihgt = {};

            function getSizeHeight(el) {
                return el.getBoundingClientRect().bottom - el.getBoundingClientRect().top;
            }

            for (let i = 0; i < self.nodeList.length; ++i)
            {
                for (let j = 0; j < self.row; ++j)
                {
                    let cell = self.nodeList[i].querySelectorAll('li')[j];
                    cell.ind = j;
                    cell.height = getSizeHeight(cell);

                    self.listCell.push(cell);
                }
            }

            for (let i = 0; i < self.row; ++i) {
                self.elHeihgt[i] = 0;
            }

            for (let i = 0; i < self.nodeList.length; ++i) {
                if (self.elHeihgt[i % self.row] < self.listCell[i].height && self.listCell[i].ind == (i % self.row))
                {
                    self.elHeihgt[i % self.row] = self.listCell[i].height;
                }
            }

            for (let i = 0; i < self.listCell.length; ++i) {
                if (self.listCell[i].ind == (i % self.row))
                {
                    self.listCell[i].style.height = self.elHeihgt[i % self.row] + "px";
                }
            }
        }

        handleOneHeight(propertiesList);
    }
})
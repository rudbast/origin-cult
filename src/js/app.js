(function() {
    var app = angular.module('home', []);

    app.controller('CategoryController', function () {
        var cats = [
            'All',
            'Accommodation',
            'Culinary',
            'Culture',
            'Tourism',
        ];

        this.categories = cats;
        this.selected = 0;

        this.select = function(index) {
            this.selected = index;
        };
    });

})();

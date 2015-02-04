var currentLang = 'ru';

var ml = function (ru, eng) {
    this.view = function () {
        if (currentLang === 'ru') {
            return ru;
        }
        return eng == null ? ru : eng;
    };
};

var staff = {
    data: [
        {
            code: 'anan',
            img: 'data/anan/anan.jpg',
            name: new ml('Сергей Михайлович Ананьевский'),
            email: 'ananjevskii@mail.ru',
            interests: [
                new ml('функции концентрации сумм случайных величин'), new ml('проблемы случайного заполнения и случайного покрытия множеств')],
            docs: [
                {
                    name: new ml('Конспект курса Теория вероятностей'),
                    url: 'data/anan/Conspect_TV.doc',
                    type: 'doc'
                },
                {
                    name: new ml('Список вопросов к экзамену по курсу теории вероятностей для специальности "Прикладная математика иинформатика"'),
                    url: 'data/anan/questionsTV.doc',
                    type: 'doc'
                }
            ]
        },
        {
            code: 'borodin',
            img: 'data/borodin/borodin.jpg',
            name: new ml('Андрей Николаевич Бородин'),
            email: 'borodin@pdmi.ras.ru',
            web: 'http://www.pdmi.ras.ru/ru/perso/borodin.php',
            docs: [
                {
                    name: new ml('Вопросы по спецкурсу "Случайные процессы"'),
                    url: 'data/borodin/borodin_slup.txt',
                    type: 'doc'
                },
                {
                    name: new ml('Лекции по случайным процессам'),
                    url: 'data/borodin/borodin_lectures.zip',
                    type: 'doc'
                }
            ]
        },
        {
            code: 'frolov',
            img: 'data/frolov/frolov.jpg',
            name: new ml('Фролов')
        },
        {
            code: 'gordin',
            img: 'data/gordin/gordin.jpg',
            name: new ml('Гордин')
        },
        {
            code: 'gribkova',
            img: 'data/gribkova/gribkova.jpg',
            name: new ml('Грибкова')
        },
        {
            code: 'hartov',
            img: 'data/hartov/hartov.jpg',
            name: new ml('Хартов')
        },
        {
            code: 'ibragimov',
            img: 'data/ibragimov/ibragimov.gif',
            name: new ml('Ибрагимов')
        },
        {
            code: 'lifshits',
            img: 'data/lifshits/lifshits.jpg',
            name: new ml('Лифшиц')
        },
        {
            code: 'malov',
            img: 'data/malov/malov.jpg',
            name: new ml('Малов')
        },
        {
            code: 'martikainen',
            img: 'data/martikainen/martikainen.jpg',
            name: new ml('Мартикайнен')
        },
        {
            code: 'nevzorov',
            img: 'data/nevzorov/nevzorov.jpg',
            name: new ml('Невзоров')
        },
        {
            code: 'nikitin',
            img: 'data/nikitin/nikitin.gif',
            name: new ml('Яков Юрьевич Никитин', 'Nikitin'),
            email: 'yanikit47@mail.ru',
            web: 'http://www.math.spbu.ru/user/nikitin/',
            interests: [new ml('асимптотическая эффективность статистических критериев'),
                new ml('большие уклонения статистических оценок'),
                new ml('непараметрическая статистика'),
                new ml('характеризационные задачи математической статистики'),
                new ml('скорость сходимости в предельных теоремах теории вероятностей и математической статистики'),
                new ml('малые уклонения гауссовских процессов')
            ],
            docs: [
                {
                    name: new ml('Вопросы к экзамену по курсу "Дополнительные главы математической статистики"'),
                    url: 'data/nikitin/nikitin_dopMS.doc',
                    type: 'doc'
                },
                {
                    name: new ml('Другие методические материалы'),
                    url: 'http://www.math.spbu.ru/user/nikitin/',
                    type: 'doc'
                }
            ]
        },
        {
            code: 'petrov',
            img: 'data/petrov/petrov.jpg',
            name: new ml('Петров')
        },
        {
            code: 'pusev',
            img: 'data/pusev/pusev.jpg',
            name: new ml('Пусев')
        },
        {
            code: 'rusakov',
            img: 'data/rusakov/rusakov.gif',
            name: new ml('Русаков')
        },
        {
            code: 'solev',
            img: 'data/solev/solev.jpg',
            name: new ml('Солев')
        },
        {
            code: 'vallander',
            img: 'data/vallander/vallander.jpg',
            name: new ml('Валландер')
        },
        {
            code: 'volkova',
            img: 'data/volkova/volkova.jpg',
            name: new ml('Волкова')
        }
    ],
    link: function (item) {
        return '#/staff/' + item.code;
    },
    template: function (item) {
        return 'views/staff/' + item.code + '.html';
    }
};

var kafedra = angular.module('kafedra', ['ngRoute', 'pascalprecht.translate']);
kafedra.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/about', {
            templateUrl: 'views/about/about.html'
        }).
        when('/about/history', {
            templateUrl: 'views/about/history.html'
        }).
        when('/about/awards', {
            templateUrl: 'views/about/awards.html'
        }).
        when('/about/graduates', {
            templateUrl: 'views/about/graduates.html'
        }).
        when('/about/books', {
            templateUrl: 'views/about/books.html'
        }).
        when('/staff/:code', {
            templateUrl: 'views/personal-page.html'
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'views/main.html'
        });
}]);
kafedra.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.preferredLanguage('ru');
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
    });
}]);


kafedra.filter('byCode', function () {
    return function (input, code) {
        var i = 0, len = input.length;
        for (; i < len; i++) {
            if (input[i].code == code) {
                return input[i];
            }
        }
        return null;
    }
});

kafedra.controller('MenuController', function ($scope, $location) {
    $scope.toHistory = function () {
        var $target = $("#history");
        if ($target.length == 1) {
            $("html,body").animate({scrollTop: $target.offset().top - 80});
        } else {
            $location.path("/about/history");
        }
    };
}).controller('StaffController', function ($scope, $timeout) {
    $scope.staff = staff.data;
    $scope.itemLink = function(staffItem){
      return staff.link(staffItem);
    };
    $timeout(function () {
        $('.slick-track').slick({
            infinite: true,
            slidesToShow: 13,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnDotsHover: false,
            pauseOnHover: false
        });
        $('[data-toggle="tooltip"]').tooltip();
    }, 0);
}).controller('PersonalPageController', function ($scope, $timeout, $routeParams, $filter) {
    $scope.item = $filter('byCode')(staff.data, $routeParams.code);
}).controller('LangController', function ($scope, $translate) {
    $scope.changeLanguage = function (langKey) {
        currentLang = langKey;
        $translate.use(langKey);
        $route.reload();
    };
});;

kafedra.directive('scrollOnClick', function () {
    return {
        restrict: 'A',
        link: function (scope, $elm, attrs) {
            var idToScroll = attrs.destination;
            $elm.on('click', function () {
                var $target;
                if (idToScroll) {
                    $target = $("#" + idToScroll);
                } else {
                    $target = $elm;
                }
                $("html,body").animate({scrollTop: $target.offset().top - 80});
            });
        }
    }
}).directive('email', function () {
    return {
        restrict: 'E',
        scope: {
            address: '@address'
        },
        template: '<div>' +
        '<icon class="fa fa-lg fa-envelope-o"></icon><a href="mailto:{{address}}"><span class="offset">{{address}}</span></a>' +
        '</div>'
    };
}).directive('web', function () {
    return {
        restrict: 'E',
        scope: {
            address: '@address'
        },
        template: '<div>' +
        '<icon class="fa fa-lg fa-book"></icon><a href="mailto:{{address}}"><span class="offset">{{address}}</span></a>' +
        '</div>'
    };
}).directive('doc', function () {
    return {
        restrict: 'E',
        scope: {
            address: '@address',
            name: '@name'
        },
        template: '<div>' +
        '<icon class="fa fa-lg fa-file-word-o"></icon><a href="{{address}}"><span class="offset">{{name}}</span></a>' +
        '</div>'
    };
}).directive('pdf', function () {
    return {
        restrict: 'E',
        scope: {
            address: '@address',
            name: '@name'
        },
        template: '<div>' +
        '<icon class="fa fa-file-pdf-o fa-lg"></icon><a href="{{address}}"><span class="offset">{{name}}</span></a>' +
        '</div>'
    };
});

var currentLang = 'ru';

var ml = function (ru, eng) {
    this.view = function () {
        if (currentLang === 'ru') {
            return ru;
        }
        return eng == null ? ru : eng;
    };
};

var newsItem = function (date, header, text) {
    this.date = date;
    this.header = header;
    this.text = text;
};

var news = [
    new newsItem(
        '04.04.2013',
        new ml('Трудоустройство', 'Job Position'),
        new ml(
            'Международная инвестиционная компания <a href="http://www.worldquant.com "> WorldQuant</a>,' +
            'имеющая филиалы в крупнейших городах мира, открывает набор сотрудников, примерно 10 человек. В России у' +
            'компании' +
            'представлено подразделение research, которое размещается в двух офисах, в Москве и Санкт-Петербурге.' +
            'В качестве претендентов на открытые вакансии компанию интересуют выпускники мат-меха, а также студенты 4-5' +
            'курсов на перспективу, в основном по специальности теория вероятностей и мат. статистика' +
            'для построения, анализа и предсказания финансовых рынков.' +
            '<br/>По всем интересующим вопросам обращаться на нашу кафедру (аудитории 4512, 4515).'
            ,
            'International investment company <a href="http://www.worldquant.com "> WorldQuant</a>,' +
            'open about 10 job positions. In Russia company has research department in Moscow and Saint-Petersburg.' +
            'Candidate should has mathematic degree (preferred Mathemtics and Mechanics departments)' +
            ' or be a students of last courses, degree of statistics and probability theory is a strong plus' +
            '<br/>Contact with statistic and probability deparment for more information (lectures 4512, 4515).'
        )
    ),
    new newsItem(
        '24.08.2013',
        new ml('Трудоустройство', 'Job Position'),
        new ml(
            'Компания ООО "ГАЗПРОМ ЭКСПОРТ" ищет сотрудников в отдел Управления по рискам, окончивших кафедру' +
            'Теории' +
            'вероятностей и математической статистики.' +
            '<br/> <a href="files/Gazprom-export.pdf">Подробнее...</a>'
            ,
            '"GazProm Export" open position in Risk Management department,' +
            '<br/> <a href="files/Gazprom-export.pdf">more information...</a>'
        )
    ),
    new newsItem(
        '28.09.2013',
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml(
            '<a href=" http://taac.org.ua">III International Scientific Conference of Students and Young Scientists' +
            '"Theoretical and Applied Aspects of Cybernetics" (TAAC-2013)</a>' +
            '<br/>Киев, 25 - 29 ноября 2013 г.' +
            '<br/>Окончание регистрации и предоставления докладов: 20 октября 2013 г.' +
            '<br/><a href="files/taac2013_en.pdf">Подробнее...</a>'
            ,
            '<a href=" http://taac.org.ua">III International Scientific Conference of Students and Young Scientists' +
            '"Theoretical and Applied Aspects of Cybernetics" (TAAC-2013)</a>' +
            '<br/>Kiev, 25 - 29 november 2013' +
            '<br/>Registration end: 20 october 2013' +
            '<br/><a href="files/taac2013_en.pdf">more information...</a>'
        )
    ),
    new newsItem(
        '04.10.2013',
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml(
            '<a href=" http://www.gpsd-ulm2014.de/">11th German Probability and Statistics Days</a>' +
            '<br/>Ульм, Германия, 4 - 7 марта 2014 г.' +
            ' <br/>Окончание регистрации: 15 января 2014 г., предоставить доклады необходимо до 30 ноября 2013 г.' +
            '<br/>Параллельно пройдет другая конференция <a href=" http://graduiertenkolleg.gpsd-ulm2014.de/">Conference' +
            'on' +
            'Modeling, Analysis and Simulation in Economathematics</a>' +
            '<br/>Ульм, Германия, 6 - 8 марта 2014 г.' +
            '<br/>Дополнительной регистрации не требуется.'
            ,
            '<a href=" http://www.gpsd-ulm2014.de/">11th German Probability and Statistics Days</a>' +
            '<br/>Ulm, Germany, 4 - 7 march 2014' +
            ' <br/>Registration end: 15 january 2014 г., submit presentations 30 november 2013' +
            '<br/>Another conference <a href=" http://graduiertenkolleg.gpsd-ulm2014.de/">Conference' +
            'on' +
            'Modeling, Analysis and Simulation in Economathematics</a>' +
            '<br/>Ulm, Germany, 6 - 8 march 2014' +
            '<br/>No additional registration.'
        )
    ),
    new newsItem(
        '07.10.2013',
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml(
            '<a href=" http://www.ipiran.ru/conference/stabil2014/">XXXII International Seminar on Stability' +
            'Problems' +
            'for Stochastic Models</a>' +
            '<br/>Тронхейм, Норвегия, 16 - 21 июня 2014 г.' +
            '<br/>Предоставить доклады необходимо до 1 марта 2014 г.'
            ,
            '<a href=" http://www.ipiran.ru/conference/stabil2014/">XXXII International Seminar on Stability' +
            'Problems' +
            'for Stochastic Models</a>' +
            '<br/>Trondheim, Norway, 16 - 21 june 2014' +
            '<br/>submit papers till 1 march 2014'
        )
    ),
    new newsItem(
        '09.10.2013',
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml('<a href=" http://www.vilniusconference2014.mif.vu.lt/">11th International Vilnius Conference on' +
            'Probability' +
            'and Mathematical Statistics</a>' +
            '<br/>Вильнюс, Литва, 30 июня - 4 июля 2014 г.' +
            '<br/>Окончание ранней регистрации: 1 мая 2014 г.'
            ,
            '<a href=" http://www.vilniusconference2014.mif.vu.lt/">11th International Vilnius Conference on' +
            'Probability' +
            'and Mathematical Statistics</a>' +
            '<br/>Vilnius, Litva, 30 june - 4 july 2014 г.' +
            '<br/>End of registration: 1 may 2014 г.'
        )
    ),
    new newsItem(
        '09.10.2013',
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml('<a href=" http://www.vilniusconference2014.mif.vu.lt/">11th International Vilnius Conference on' +
            'Probability' +
            'and Mathematical Statistics</a>' +
            '<br/>Вильнюс, Литва, 30 июня - 4 июля 2014 г.' +
            '<br/>Окончание ранней регистрации: 1 мая 2014 г.',
            '<a href=" http://www.vilniusconference2014.mif.vu.lt/">11th International Vilnius Conference on' +
            'Probability' +
            'and Mathematical Statistics</a>' +
            '<br/>Vilnius, Litva, 30 june - 4 july 2014 г.' +
            '<br/>End of registration: 1 may 2014 г.'
        )
    )

];

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
    $scope.itemLink = function (staffItem) {
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
}).controller('NewsController', function ($scope, $sce) {
    $scope.topNews = news.reverse().slice(1, 10);
    $scope.allNews = news.reverse();
    $scope.showNews = function(item){
        return $sce.trustAsHtml(item.text.view());
    }

});

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

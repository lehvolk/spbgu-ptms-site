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

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

var news = [
    new newsItem(
        new ml('19.06.2015','19 Jun 2015'),
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml('<a href="http://www.tvp.ru/"> XVI Всероссийский Симпозиум ' +
            'по прикладной и промышленной математике (осенняя открытая сессия)</a>' +
            '<br/>г. Сочи–Дагомыс, 27 сентября – 4 октября 2015 г.'
            ,
            '<a href="http://www.tvp.ru/"> XVI Russian Symposium ' +
            'on Applied and Industrial Mathematics (autumn open session)</a>' +
            '<br/>Sochi-Dagomis, Russia, September  27 – October 4  2015.'
        )
    ),
    new newsItem(
        new ml('30.05.2015','30 May 2015'),
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml(
            '39th Conference on Stochastic Processes and their Applications (SPA)' +
            '<br/>г. Москва, 24 - 28 июля 2017 г.' +
            '<br/>Сайт конференции пока в разработке.'
            ,
            '39th Conference on Stochastic Processes and their Applications (SPA)' +
            '<br/>Moscow, Russia, July 24 – 28, 2017.' +
            '<br/>The website is under development, but mark your calendar.'
        )
    ),
    new newsItem(
        new ml('13.05.2015','13 May 2015'),
        new ml('Поздравляем победителя!', 'Congratulation to the winner!'),
        new ml(
            'В МГУ состоялась очередная 14-я' +
            ' Колмогоровская Олимпиада для студентов по теории вероятностей. ' +
            'Формулировки задач олимпиады можно посмотреть ' +
            '<a href="files/olimp2015.pdf">в файле</a>. ' +
            '<br/>Среди студентов нашей кафедры Д. Егоров (4 курс) второй год подряд ' +
            'победил с огромным отрывом и награжден первой премией! ' +
            'Поздравляем победителя и желаем ему дальнейших успехов в науке, учёбе и соревнованиях!'
            ,
            'It took place at the Moscow State University the 14th Students Olympiad on Probability Theory. ' +
            'D. Egorov (4 year education) took the first Prize the second time in a row. We congratulate the winner ' +
            'and wish him continued success in science, in education and in competitions!'
        )
    ),
    new newsItem(
        new ml('17.03.2015','17 Mar 2015'),
        new ml(
            'С глубоким прискорбием сообщаем о том, что 17 марта 2015 г. после продолжительной и ' +
            'тяжелой болезни скончался доцент нашей кафедры Гордин Михаил Иосифович.'
            ,
            'We regret to inform that March 17, 2015 after a long and protracted illness ' +
            'died Associate Professor of the Chair Gordin Mikhail Iosifovich.'
        )
    ),
    new newsItem(
        new ml('21.02.2015','21 Feb 2015'),
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml(
            '<a href="http://www.pdmi.ras.ru/EIMI/2015/Linnik/index.html"> Yu.V.Linnik Centennial Conference' +
            ' "Analytical methods in number theory, probability theory and mathematical statistics"</a>' +
            ' <br/>г. Санкт-Петербург, 14 - 18 сентября 2015 г.'
            ,
            '<a href="http://www.pdmi.ras.ru/EIMI/2015/Linnik/index.html"> Yu.V.Linnik Centennial Conference' +
            ' "Analytical methods in number theory, probability theory and mathematical statistics"</a>' +
            ' <br/>Saint-Peterburg, Russia, September 14 – 18, 2015.' +
            '<br/>Abstract submission deadline: April 15, 2015.'
        )
    ),
    new newsItem(
        new ml('13.02.2015','13 Feb 2015'),
        new ml('Поздравление!', 'Congratulation!'),
        new ml('Поздравляем Ильдара Абдулловича Ибрагимова с присуждением ему звания "Почетный профессор СПбГУ"!'
            ,
            'Ildar Ibragimov was awarded by the title "Honorable professor SPbGU"!'
        )
    ),
    new newsItem(
        new ml('20.01.2015','20 Jan 2015'),
        new ml('Объявление о конференции', 'Conference announcement'),
        new ml('<a href="http://www.amsa.conf.nstu.ru/amsa2015/"> Third International Workshop ' +
            '“Applied Methods of Statistical Analysis. Nonparametric Approach” – AMSA’2015</a> ' +
            '<br/>г. Белокуриха, Алтайский край, 14 - 19 сентября 2015 г.' +
            '<br/>Окончание ранней регистрации: 20 мая 2015 г.',
            '<a href="http://www.amsa.conf.nstu.ru/amsa2015/"> Third International Workshop “Applied ' +
            'Methods of Statistical Analysis. Nonparametric Approach” – AMSA’2015</a>' +
            ' <br/>Belokurikha, Altai, Russia, September 14 – 19, 2015.' +
            '<br/>Early registration deadline: May 20, 2015.'
        )
    )

];

var staff = {
    data: [
        {
            code: 'nikitin',
            img: 'data/nikitin/nikitin.jpg',
            img2: 'data/nikitin/nikitin2.jpg',
            style: 'height: 350px; width: 313px',
            name: new ml('Яков Юрьевич Никитин', 'Yakov Nikitin'),
            email: 'yanikit47@mail.ru',
            web: new ml('http://www.math.spbu.ru/user/nikitin/'),
            interests: [new ml('асимптотическая эффективность статистических критериев','asymptotic efficiency of statistical tests'),
                new ml('большие уклонения статистических оценок','large deviations of test statistics'),
                new ml('непараметрическая статистика','nonparametric Statistics'),
                new ml('характеризационные задачи математической статистики','characterization problems of Statistics'),
                new ml('скорость сходимости в предельных теоремах теории вероятностей и математической статистики',
                'rate of convergence results in Probability and Statistics'),
                new ml('малые уклонения гауссовских процессов', 'small deviations of Gaussian processes')
            ],
            docs: [
                {
                    name: new ml('Вопросы к экзамену по курсу "Дополнительные главы математической статистики"' +
                        ' (мат-мех, 8-й семестр)','The list of questions on "Extra chapters of ' +
                    'Mathematical Statistics" Course ( Math.-Mech. faculty, 8-th semester)'),
                    url: 'data/nikitin/nikitin_dopMS.doc',
                    type: 'doc'
                }
            ],
            texts: [{
                    name: new ml('Другие методические материалы находятся на ' +
                        '<a href="http://www.math.spbu.ru/user/nikitin/ ">личной странице </a> Я.Ю.Никитина.',
                        'Another teaching materials see on <a href="http://www.math.spbu.ru/user/nikitin/ ">personal page. </a>')
            }]
        },
        {
            code: 'anan',
            img: 'data/anan/anan.jpg',
            img2: 'data/anan/anan2.jpg',
            style: 'height: 350px; width: 273px;',
            name: new ml('Сергей Михайлович Ананьевский', 'Sergei Ananievskii'),
            email: 'ananjevskii@mail.ru',
            interests: [
                new ml('функции концентрации сумм случайных величин'),
                new ml('проблемы случайного заполнения и случайного покрытия множеств')],
            docs: [
                {
                    name: new ml('Конспект курса "Теория вероятностей"','Abstract for Probability Theory Course'),
                    url: 'data/anan/Conspect_TV.doc',
                    type: 'doc'
                },
                {
                    name: new ml('Список вопросов к экзамену по курсу теории вероятностей для специальности ' +
                        '"Прикладная математика и иинформатика"', 'The list of questions on Probability ' +
                        'Theory Course for specialization "Applied Mathematics and Information science"'),
                    url: 'data/anan/questionsTV.doc',
                    type: 'doc'
                }
            ]
        },
        {
            code: 'borodin',
            img: 'data/borodin/borodin.jpg',
            img2: 'data/borodin/borodin2.jpg',
            style: 'height: 265px; width: 350px; ',
            name: new ml('Андрей Николаевич Бородин', 'Andrei Borodin'),
            email: 'borodin@pdmi.ras.ru',
            web: new ml('http://www.pdmi.ras.ru/pdmi/node/85','http://www.pdmi.ras.ru/pdmi/en/staff/andrei-borodin'),
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
            code: 'vallander',
            img: 'data/vallander/vallander.jpg',
            img2: 'data/vallander/vallander2.jpg',
            style: 'height: 350px; width: 197px; ',
            name: new ml('Сергей Сергеевич Валландер', 'Sergei Vallander'),
            email: 'crazymath@yandex.ru',
            interests: [new ml('теория случайных процессов'),
                new ml('некоторые приложения вероятностных методов (в том числе, к статистической физике, теории страхового риска)'),
                new ml('более широким образом в круг интересов входят разнообразные другие разделы математики и близких наук')
            ]
        },
        {
            code: 'volkova',
            img: 'data/volkova/volk1.jpg',
            img2: 'data/volkova/volkova2.jpg',
            style: 'height: 350px; width: 327px; ',
            name: new ml('Ксения Юрьевна Волкова', 'Ksenia Volkova'),
            email: 'k.volkova@spbu.ru',
            interests: [new ml('асимптотическая эффективность статистических критериев','asymptotic efficiency of statistical tests'),
                new ml('характеризационные задачи математической статистики','characterization problems of Statistics')
            ],
            papers: [new ml('Волкова К. Ю., “Об асимптотической эффективности критериев экспоненциальности, основанных на ' +
                'характеризации Россберга.”, Зап. научн. сем. ПОМИ, 368 (2009), 95–109; J. Math. Sci. (N. Y.), 167:4 (2010), ' +
                '486–494','Volkova K. Yu., “On asymptotic efficiency of exponentiality tests based on Rossberg’s characterization ”, ' +
                'Zap. nauchn. sem. POMI, 368 (2009), 95–109; J. Math. Sci. (N. Y.), 167:4 (2010), 486–494 '),
                new ml('Волкова К. Ю., Никитин Я. Ю., “Об асимптотической эффективности критериев нормальности, основанных на свойстве Шеппа”, ' +
                    'Вестник СПБГУ, 1:13–19 (2009)','Nikitin Ya. Yu., Volkova K. Yu., “On asymptotic efficiency of normality tests based ' +
                    'on Shepp property ”, Vestnik SPbGU, 1:13–19 (2009)'),
                new ml('Nikitin Ya. Yu., Volkova K. Yu., “Asymptotic efficiency of exponentiality tests based on order statistics characterization”, GEORGIAN MATHEMATICAL JOURNAL, 17:4 (2010), 749–763	')
            ]
        },
        {
            code: 'gribkova',
            img: 'data/gribkova/gribkova.jpg',
            img2: 'data/gribkova/gribkova2.jpg',
            style: 'height: 350px; width: 263px; ',
            name: new ml('Надежда Викторовна Грибкова', 'Nadezda Gribkova'),
            email: 'nv.gribkova@gmail.com',
            interests: [new ml('порядковые статистики,  предельные теоремы для порядковых статистик'),
                new ml('асимптотические свойства распределений усеченных сумм и L-статистик, влияние на асимптотику  крайних членов  вариационного ряда'),
                new ml('бутстреп-метод, его теоретическое обоснование, асимптотические свойства, корректность второго порядка, экстраполяция')
            ]
        },
        {
            code: 'zaitsev',
            img: 'data/zaitsev/zaitsev.jpg',
            img2: 'data/zaitsev/zaitsev2.jpg',
            style: 'height: 264px; width: 350px; ',
            name: new ml('Андрей Юрьевич Зайцев', 'Andrei Zaitsev'),
            email: 'zaitsev@pdmi.ras.ru',
            web: new ml('http://www.pdmi.ras.ru/pdmi/staff/андрей-юрьевич-зайцев','http://www.pdmi.ras.ru/pdmi/en/staff/andrei-zaitsev'),
            interests: [new ml('асимптотические свойства сумм независимых случайных векторов'),
                new ml('безгранично делимая аппроксимация сверток вероятностных распределений'),
                new ml('оценки точности сильной аппроксимации в принципе инвариантности'),
                new ml('функции концентрации'),
                new ml('центральная предельная теорема')
            ]
        },
        {
            code: 'ibragimov',
            img: 'data/ibragimov/ibragimov.jpg',
            img2: 'data/ibragimov/ibragimov2.jpg',
            style: 'height: 350px; width: 332px; ',
            name: new ml('Ильдар Абдуллович Ибрагимов','Ildar Ibragimov'),
            email: 'ibr32@pdmi.ras.ru',
            web: new ml('http://www.pdmi.ras.ru/pdmi/staff/ильдар-абдуллович-ибрагимов','http://www.pdmi.ras.ru/pdmi/en/staff/ildar-ibragimov'),
            interests: [  new ml('оценивание аналитической спектральной плотности стационарных случайных процессов'),
                   new ml('оценивание параметров стохастических дифференциальных уравнений в частных производных')
            ],
            texts: [{
               name: new ml('О других научных интересах И.А. Ибрагимова см. ' +
                   '<a href="data/ibragimov/Mal64.pdf">здесь</a>.'),

            }]
        },
        {
            code: 'lifshits',
            img: 'data/lifshits/lifshits.jpg',
            img2: 'data/lifshits/lifshits.jpg',
            style: 'height: 350px; width: 257px; ',
            name: new ml('Михаил Анатольевич Лифшиц', 'Mikhail Lifshits'),
            email: 'mikhail@lifshits.org',
            web: new ml('http://m.l.probability.googlepages.com'),
            interests: [new ml('гауссовские случайные процессы и поля'),
                new ml('вероятности малых уклонений'),
                new ml('приближение случайных полей, зависящих от большого числа параметров'),
                new ml('динамика больших стохастических систем частиц')
            ],
            texts: [{
                name: new ml('<a href="data/lifshits/mal_atlanta_univ.pdf">Впечатления об американском университете</a>'),

            }],
            docs: [
                {
                name: new ml('Материалы спецсеминара по теории вероятностей: мат-мех, IV курс (2009): <br/>' +
                    ' <a href="data/lifshits/seminar09.pdf"> Конспект</a>, <a href="data/lifshits/kajtaqqu07.pdf">' +
                    ' Статья 1</a>, <a href="data/lifshits/kaj_mult.pdf"> Статья 2</a>.'),
                type: 'html'
                },
                {
                    name: new ml('Программа спецкурса "Гауссовские случайные функции": мат-мех, V курс (2007)'),
                    url: 'data/lifshits/mal_gauss07.pdf',
                    type: 'pdf'
                },
                {
                    name: new ml('Программа спецкурса "Теория случайных процессов":  мат-мех, IV курс (2007)'),
                    url: 'data/lifshits/mal_process07.pdf',
                    type: 'pdf'
                },
                {
                    name: new ml('Курс "Теория вероятностей и математическая статистика". Экономический факультет ' +
                    '(заочное отделение). <a href="data/lifshits/prosta10z.pdf"> Программа (2010)</a>, ' +
                    '<a href="data/lifshits/tren_ef09_zao.pdf">Задачи для тренировки</a>, <a href="data/lifshits/statist1.pdf"> Лекции по статистике</a>.'),
                    type: 'html'
                },
                {
                    name: new ml('Лекции по сильной аппроксимации. Учебно-методическое пособие'),
                    url: 'data/lifshits/mal_met_kmt.pdf',
                    type: 'pdf'
                },
                {
                    name: new ml('Предельные теоремы типа "почти наверное". Учебно-методическое пособие'),
                    url: 'data/lifshits/mal_met_ptpn.pdf',
                    type: 'pdf'
                },
                {
                    name: new ml('Устойчивые распределения, случайные величины и процессы. Учебно-методическое пособие'),
                    url: 'data/lifshits/mal_met_stables.pdf',
                    type: 'pdf'
                }
            ]
        },
        {
            code: 'malov',
            img: 'data/malov/malov.jpg',
            img2: 'data/malov/malov2.jpg',
            style: 'height: 350px; width: 279px; ',
            name: new ml('Сергей Васильевич Малов', 'Sergei Malov'),
            email: 'malovs@SM14820.spb.edu',
            interests: [new ml('cтруктура зависимости, копулы'),
                new ml('cемипараметрические модели анализа многомерных данных типа времени жизни'),
                new ml('cтатистики многомерных рангов (multivariate rank statistics)'),
                new ml('биостатистика'),
                new ml('анализ категориальных данных (categorical data analysis)'),
                new ml('анализ коротких временных рядов (Longitudinal data analysis)')
            ],
            texts: [
                {
                    name: new ml('Идея представления функции распределения в виде суперпозиции функции распределения случайного' +
                        ' вектора с равномерно распределенными компонентами (копулы) и функций распределения компонент была ' +
                        'предложена в конце 50-х. Такое разложение позволяет отдельно исследовать распределения компонент' +
                        ' случайного вектора и собственно зависимость, что делает его популярным при построении ' +
                        'статистических моделей. Основным направлением моей научной деятельности является изучение ' +
                        'моделей анализа многомерных данных типа времени жизни, исследование асимптотических свойств' +
                        ' оценок параметров модели. Копулы играют ключевую роль при построении моделей. Попутно ведется ' +
                        'изучение асимптотических свойств так называемых статистик многомерных рангов ' +
                        '(multivariate rank statistics) общего вида для проверки однородности и для проверки независимости.')
                },
                {
                    name: new ml('Помимо теоретических вопросов,  с 2007 года в круг моих научных интересов входят некоторые опросы,' +
                        ' связанные с обработкой реальных данных. В частности, ведется работа в области анализа коротких' +
                        ' временных рядов (longitudinal data analysis) из категориальных данных. Данная тематика больше' +
                        ' подходит магистрам, специализирующимся по направлению “биостатистика”.')
                },
                {
                    name: new ml('Более подробное представление об этом дает мой <a href="malov/malov_list09.pdf"> список основных научных работ.</a>')

                }
            ]
        },
        {
            code: 'nevzorov',
            img: 'data/nevzorov/nevzorov.jpg',
            img2: 'data/nevzorov/nevzorov2.jpg',
            style: 'height: 350px; width: 328px; ',
            name: new ml('Валерий Борисович Невзоров', 'Valerii Nevzorov'),
            email: 'valnev@mail.ru',
            web: new ml('http://www.probabil.pisem.net'),
            interests: [new ml('Научные интересы В.Б. Невзорова связаны с изучением различных видов упорядоченных ' +
                'случайных величин. К ним относятся порядковые статистики, абсолютные порядковые статистики, ' +
                'порядковые статистики, построенные по последовательным суммам. Много времени В.Б.Невзоров ' +
                'и его ученики уделяли и уделяют изучению рекордных моментов и рекордных величин. Здесь также ' +
                'интерес представляют различные типы рекордов.'),
                new ml('В последнее время В.Б. Невзоров заинтересовался различными характеризационными свойствами ' +
                    'ряда вероятностных распределений. Были найдены некоторые свойства порядковых статистик и их сумм, ' +
                    'рекордных величин и ряда связанных с ними статистик, выполнение которых свидетельствует о каком-то ' +
                    'конкретном исходном распределении (например, экспоненциальном, равномерном, степенном, ' +
                    'распределении Стьюдента или некотором другом).'),
                new ml('Ряд направлений научной деятельности В.Б. Невзорова представлен в книгах' +
                    '<ul class=" list-style: decimal">' +
                    '<li> В.Б.Невзоров "Рекорды. Математическая теория", Москва, Фазис, 2000.</li>' +
                    '<li> M.Ahsanullah, V.B.Nevzorov "Ordered random variables", Nova Science Publishers, Huntington, NY, 2001.</li>' +
                    '</ul>')
            ],
            docs: [
                {
                    name: new ml('Программа экзамена по курсу "Теория вероятностей и математическая статистика" (мат-мех, вечернее отделение)'),
                    url: 'data/nevzorov/Nevzorov_vechernTV.doc',
                    type: 'doc'
                },
                {
                    name: new ml('Спецкурс "Порядковые статистики"'),
                    url: 'data/nevzorov/order statistics.pdf',
                    type: 'pdf'
                },
                {
                    name: new ml('Другие методические материалы'),
                    url: 'http://www.probabil.pisem.net',
                    type: 'doc'
                }
            ]
        },

        {
            code: 'petrov',
            img: 'data/petrov/petrov.jpg',
            img2: 'data/petrov/petrov.jpg',
            style: 'height: 310px; width: 310px; ',
            name: new ml('Валентин Владимирович Петров', 'Valentin Petrov'),
            email: 'Valentin@VP15136.spb.edu',
            interest:
                new ml('Основные научные интересы В.В.Петрова относятся к области ' +
                    'предельных теорем теории вероятностей (в настоящее время' +
                    ' особенности к сильным предельным теоремам для последовательностей' +
                    ' случайных величин без предположения о независимости) ' +
                    'и вероятностных неравенств. Дополнительную информацию можно ' +
                    'найти в <a href="files/books.pdf"> книгах </a> В.В.Петрова, в которых, ' +
                    'в частности, содержатся формулировки многих его научных результатов.')

        },
        {
            code: 'pusev',
            img: 'data/pusev/pusev.jpg',
            img2: 'data/pusev/pusev2.jpg',
            style: 'height: 350px; width: 265px; ',
            name: new ml('Руслан Сергеевич Пусев','Ruslan Pusev'),
            email: 'Ruslan.Pusev@math.spbu.ru',
            interests: [new ml('малые уклонения гауссовских процессов','small deviations of Gaussian processes')
            ],
            papers: [new ml('Р. С. Пусев, “Малые уклонения полей и процессов Матерна в гильбертовой норме”, ' +
                'Доклады Академии наук, 422:6 (2008), 741–743; Doklady Mathematics, 78:2 (2008), 778–780 ',
                'R. S. Pusev, “Small deviations for Matern random fields and processes in the Hilbert norm”, ' +
                'Doklady Akademii nauk, 422:6 (2008), 741–743; Doklady Mathematics, 78:2 (2008), 778–780 '),
                new ml('А. И. Назаров, Р. С. Пусев, “Точная асимптотика малых уклонений в L2-норме с весом ' +
                    'для некоторых гауссовских процессов”, Вероятность и статистика. 14–2, Зап. научн. сем. ' +
                    'ПОМИ, 364, ПОМИ, СПб., 2009, 166–199; J. Math. Sci. (N. Y.), 163:4 (2010), 409–429 ',
                    'A. I. Nazarov, R. S. Pusev, “Exact small ball asymptotics in weighted L2-norm for ' +
                    'some Gaussian processes”, Veroyatnost i statistika. 14–2, Zap. nauchn. sem. POMI, 364, ' +
                    'POMI, SPb., 2009, 166–199; J. Math. Sci. (N. Y.), 163:4 (2010), 409–429  '),
                new ml('Р. С. Пусев, “Асимптотика малых уклонений в весовой квадратичной норме для полей и ' +
                    'процессов Матерна”, ТВП, 55:1 (2010), 187–195; Theory Probab. Appl., 55:1 (2011), 164–172',
                'R. S. Pusev, “Small deviation asymptotics for Matern processes and fields under weighted quadratic ' +
                'norm”, TVP, 55:1 (2010), 187–195; Theory Probab. Appl., 55:1 (2011), 164–172'),
                new ml('Р. С. Пусев, “Асимптотика малых уклонений процессов Боголюбова в квадратичной норме”, ТМФ, ' +
                    '165:1 (2010), 134–144; Theoret. and Math. Phys., 165:1 (2010), 1348–1357',
                    'R. S. Pusev, “Asymptotics of small deviations of the Bogoliubov processes with respect to a ' +
                    'quadratic norm”, TMF, 165:1 (2010), 134–144; Theoret. and Math. Phys., 165:1 (2010), 1348–1357')
            ],
            texts: [
                {
                    name: new ml('<a href=" http://www.mathnet.ru/php/person.phtml?option_lang=rus&personid=38867">' +
                        'Полный список публикаций на портале Math-Net.Ru</a>',
                        '<a href=" http://www.mathnet.ru/php/person.phtml?&personid=38867&option_lang=eng ">Full list of' +
                        ' publications on Math-Net.Ru</a>')
                }
            ]
        },
        {
            code: 'rusakov',
            img: 'data/rusakov/rusakov.gif',
            img2: 'data/rusakov/rusakov2.jpg',
            style: 'height: 350px; width: 327px; ',
            name: new ml('Олег Витальевич Русаков', 'Oleg Rusakov'),
            email: 'OViRusakov@yahoo.co.uk',
            interests: [new ml('процессы типа Орнштейна-Уленбека'),
                new ml('моделирование случайных процессов и полей'),
                new ml('модели стохастической финансовой математики'),
                new ml('стохастические фракталы...')
            ],
            maininterests: [
                {
                    name: new ml('Limit Theorems Which Establish a ' +
                        'Keeping Intensity Relationship Between Poisson and Ornstein-Uhlenbeck Processes (2007)' +
                        '/ Proceedings of the XXVI International Seminar on Stability Problems for Stochastic ' +
                        'Models, October 22-26, 2007, Israel /'),
                    url: 'data/rusakov/Izr ORus 07.pdf',
                    type: 'pdf'
                },
                {
                    name: new ml('Предельные теоремы для неоднородного процесса ' +
                        'Орнштейна-Уленбека (2006) /совместно с А.Н. Чупруновым/'),
                    url: 'data/rusakov/Rusa_2.pdf',
                    type: 'pdf'
                },
                {
                    name: new ml('Прогулки по фракталам (2005)'),
                    url: 'data/rusakov/fract05.doc',
                    type: 'doc'
                }
            ]
        },
        {
            code: 'solev',
            img: 'data/solev/solev.jpg',
            img2: 'data/solev/solev2.jpg',
            style: 'height: 350px; width: 284px; ',
            name: new ml('Валентин Николаевич Солев', 'Valentin Solev'),
            email: 'solev@pdmi.ras.ru',
            web: new ml('http://www.pdmi.ras.ru/pdmi/node/301','http://www.pdmi.ras.ru/pdmi/en/staff/valentin-solev'),
            interests: [new ml('cпектральные задачи теории случайных процессов'),
                new ml('задачи оценивания функции, наблюдаемой на фоне стационарного шума'),
                new ml('Задачи оценивания и проверки гипотез по косвенным наблюдениям')
            ],
            doc:
                new ml('Методические работы В.Н.Солева, написанные в соавторстве с О.В.Русаковым, смотри на страничке О.В.Русакова.')

        },
        {
            code: 'frolov',
            img: 'data/frolov/frolov.jpg',
            img2: 'data/frolov/frolov2.jpg',
            style: 'height: 350px; width: 331px; ',
            name: new ml('Андрей Николаевич Фролов', 'Andrei Frolov'),
            email: 'Andrei.Frolov@pobox.spbu.ru',
            interests: [new ml('Предельные теоремы теории вероятностей: большие уклонения, малые уклонения, сильные предельные теоремы, закон больших чисел, закон повторного логарифма, закон повторного логарифма в форме Чжуна. Основные работы посвящены исследованию асимптотического поведения приращений сумм независимых случайных величин, случайных полей, процессов с независимыми приращениями, процессов восстановления и обобщенных процессов восстановления. Результаты, в частности, позволяют объединить единой теорией ряд известных теорем: закон больших чисел Колмогорова, закон повторного логарифма Хартмана-Винтнера, закон Эрдеша-Реньи и закон Чёргё-Ревеса. При этом значительное внимание уделено анализу вероятностей больших уклонений (как в случае притяжения к нормальному закону, так и в случаях притяжения к асимметричным устойчивым законам). Имеются работы по большим уклонениям.'),
                new ml('В последнее время ряд работ был посвящен малым уклонениям и закону Чжуна для некоторых случайных процессов, таких, например, как обобщенные процессы восстановления и обобщенные процессы Кокса.')
            ]
        },
        {
            code: 'khartov',
            img: 'data/khartov/khartov.jpg',
            img2: 'data/khartov/khartov2.jpg',
            style: 'height: 350px; width: 244px; ',
            name: new ml('Алексей Андреевич Хартов', 'Alexey Khartov'),
            email: 'alexeykhartov@gmail.com ',
            interests: [new ml('аппроксимация случайных полей, зависящих от большого числа параметров'),
            ]
        },
        {
            code: 'yuyakub',
            img: 'data/yuyakub/yuyakub.jpg',
            img2: 'data/yuyakub/yuyakub2.jpg',
            style: 'height: 350px; width: 304px; ',
            name: new ml('Юрий Владимирович Якубович', 'Yurii Yakubovich'),
            web: new ml('https://sites.google.com/site/yuyakub')
        }
    ],
    link: function (item) {
        return '#/staff/' + item.code;
    },
    template: function (item) {
        return 'views/staff/' + item.code + '.html';
    }
};

var kafedra = angular.module('kafedra', ['ngRoute', 'ngCookies', 'pascalprecht.translate']);
kafedra.config(function ($routeProvider) {
    $routeProvider.
        when ('/about', {
            templateUrl: 'views/about/about.html'
        }).
        when ('/about/history/ru', {
            templateUrl: 'views/about/history.html'
        }).
        when ('/about/history/en', {
            templateUrl: 'views/about/history_eng.html'
        }).
        when('/about/awards/ru', {
            templateUrl: 'views/about/awards.html'
        }).
        when('/about/awards/en', {
            templateUrl: 'views/about/awards_eng.html'
        }).
        when('/conference/conference/ru', {
            templateUrl: 'views/conference/conference.html'
        }).
        when('/conference/conference/en', {
            templateUrl: 'views/conference/conference_eng.html'
        }).
        when('/students/diploma/ru', {
            templateUrl: 'views/students/diploma.html'
        }).
        when('/students/diploma/en', {
            templateUrl: 'views/students/diploma_eng.html'
        }).
        when('/students/courses/ru', {
            templateUrl: 'views/students/courses.html'
        }).
        when('/students/courses/en', {
            templateUrl: 'views/students/courses_eng.html'
        }).
        when('/staff/staff/ru', {
            templateUrl: 'views/staff/staff.html'
        }).
        when('/staff/staff/en', {
            templateUrl: 'views/staff/staff_eng.html'
        }).
        when('/staff/:code', {
            templateUrl: 'views/staff/personal-page.html'
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'views/main.html'
        });
});
kafedra.config(function ($translateProvider) {
    $translateProvider.preferredLanguage('ru');
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/',
        suffix: '.json'
    });
});


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
}).filter("sanitize", function($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
});

kafedra.controller('MenuController', function ($scope, $location) {
    $scope.toHistory = function () {
        //if($location.path() !== "/about") {
        //    $location.path("/about");
        //}
        //setTimeout(function () {
            var $target = $("#history");
            if ($target.length == 1) {
                $("html,body").animate({scrollTop: $target.offset().top - 80});
            }else{
                $location.path("/about");
            }
        //}, 100);
    };
    $scope.to = function(path){
        var newPath =  path + '/' + currentLang;
        $location.path(newPath);
    };
    $scope.redirect = function(ruLink, enLink){
        return  currentLang === 'ru' ? ruLink : enLink;
    };
}).controller('StaffController', function ($scope, $timeout) {
    $scope.staff = staff.data;
    $scope.itemLink = function (staffItem) {
        return staff.link(staffItem);
    };
    $timeout(function () {
        $('.slick-track').slick({
            infinite: true,
            slidesToShow: 10,
            slidesToScroll: 3,
            autoplay: true,
            pauseOnDotsHover: false,
            pauseOnHover: false
        });
        $('[data-toggle="tooltip"]').tooltip();
    }, 100);
}).controller('PersonalPageController', function ($scope, $routeParams, $filter) {
    $scope.item = $filter('byCode')(staff.data, $routeParams.code);
}).controller('LangController', function ($scope, $route, $translate, $location, $cookies) {
    $scope.changeLanguage = function (langKey) {
        var oldLang = currentLang;
        currentLang = langKey;
        $cookies['lang'] = currentLang;
        $translate.use(langKey);
        if($location.path().endsWith(oldLang)){
            $location.path($location.path().slice(0, -2) + currentLang);
        }else{
            $route.reload();
        }
    };
    var lang = $cookies['lang'];
    if(lang && lang !== currentLang){
        $scope.changeLanguage(lang);
    }
}).controller('NewsController', function ($scope, $sce) {
    $scope.topNews = news;
    $scope.showNews = function(item){
        if(item.text){
            return $sce.trustAsHtml(item.text.view());
        }
        return null;
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
        '<icon class="fa fa-lg fa-globe"></icon><a href="{{address}}"><span class="offset">{{address}}</span></a>' +
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
}).directive('toWithLang', function ($location, $route) {
    return {
        restrict: 'A',
        link: function (scope, $elm, attrs) {
            $elm.on('click', function () {
                $location.path(attrs.destination + '/' + currentLang);
                $route.reload();
            });
        }
    };
});


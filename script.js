let commands = ['help', 'about', 'work', 'hobbies', 'life', 'projects', 'tech'];

var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container').on('click', function (e) {
    input.focus();
});

$('.light-toggle').on('click', function(e){
    $('body').toggleClass('light');
})

input.on('keyup', function (e) {
    $('.new-output').text(input.val());
});

$('.four-oh-four-form').on('submit', function (e) {
    e.preventDefault();
    var val = $(this).children($('.404-input')).val().toLowerCase();
    var href;

    var containsCommand = (commands.indexOf(val.toLowerCase()) > -1);

    if (containsCommand) {
        processCommand(val);
    } else {
        resetForm();
    }
});

function processCommand(command) {
    switch (command.toLowerCase()) {
        case "help":
            $('.terminal').append('<div class="out"><p class="prompt output">=============================================================</p>'+
            '<p class="prompt output">The available commands are: "Help", "About", "Work", "Hobbies", "Life", "Projects", "Tech"</p></div>');
            break;
        case "about":
            $('.terminal').append('<div class="out"><p class="prompt output">=============================================================</p>'+
            '<p class="prompt output">Name: Cory Harkins</p>' +
            '<p class="prompt output">Age: ' + (new Date().getFullYear() - 1990) + '</p>' +
            '<p class="prompt output">Location: Unknown</p>' +
            '<p class="prompt output">Status: Wanted</p>' +
            '<p class="prompt output">Family: Yes</p>' +
            '<p class="prompt output">Working Years: '+ (new Date().getFullYear() - 2013) +'</p>' +
            '<p class="prompt output">Job Title: Software Engineer</p>' +
            '</div>');
            break;
        case "work":
            $('.terminal').append('<div class="out"><p class="prompt output">=============================================================</p>'+
            '<p class="prompt output">Current: PureCars - Software Engineer</p>' +
            '<p class="prompt output">2018 - 2021: PSM Marketing - Full Stack Developer</p>' +
            '<p class="prompt output">2014 - 2018: Pratt Industries - Jr Full Stack Developer</p>' +
            '</div>');
            break;
        case "hobbies":
            $('.terminal').append('<div class="out"><p class="prompt output">=============================================================</p>'+
            '<p class="prompt output">Gamer</p>' +
            '<p class="prompt output">Painter</p>' +
            '<p class="prompt output">Percutionist</p>' +
            '<p class="prompt output">Coder</p>' +
            '</div>');
            break;
        case "life":
            $('.terminal').append('<div class="out"><p class="prompt output">=============================================================</p>'+
            '<p class="prompt output">Born: 1990</p>' +
            '<p class="prompt output">Married: Yes</p>' +
            '<p class="prompt output">Children: 2</p>' +
            '<p class="prompt output">Location: Atlanta, GA</p>' +
            '<p class="prompt output">Education: BAS - Computer Engineering - SPSU - 2015</p>' +
            '</div>');
            break;
        case "projects":
            $('.terminal').append('<div class="out"><p class="prompt output">=============================================================</p>'+
            '<p class="prompt output">Projects that I have worked on in the past:</p>' +
            '<p class="prompt output">- Rungutan</p>' +
            '<p class="prompt output">Cloud based automation tool.</p>' +
            '<p class="prompt output"><a href="https://rungutan.com/" target="_blank">Check it out at https://rungutan.com/</a></p>' +
            '<p class="prompt output"></p>' +

            '<p class="prompt output">Projects that I have worked on in the past:</p>' +
            '<p class="prompt output">- Try Treats</p>' +
            '<p class="prompt output">Worldwide snack subscription box.</p>' +
            '<p class="prompt output"><a href="https://trytreats.com/" target="_blank">Check it out here at https://trytreats.com/</a></p>' +
            '<p class="prompt output"></p>' +

            '<p class="prompt output">Projects that I have worked on in the past:</p>' +
            '<p class="prompt output">- Jump Rope Dudes</p>' +
            '<p class="prompt output">Website for exercise, workouts, equipment related to jumping rope.</p>' +
            '<p class="prompt output"><a href="https://jumpropedudes.com/" target="_blank">Check it out at https://jumpropedudes.com</a></p>' +
            '</div>');
            break;
        case "tech":
            $('.terminal').append('<div class="out"><p class="prompt output">=============================================================</p>'+
            '<p class="prompt output">Tech that I have worked with</p>' +
            '<p class="prompt output">-Front End</p>' +
            '<p class="prompt output">HTML</p>' +
            '<p class="prompt output">CSS</p>' +
            '<p class="prompt output">Bootstrap</p>' +
            '<p class="prompt output">Javascript</p>' +
            '<p class="prompt output">Jquery</p>' +
            '<p class="prompt output">React.js</p>' +
            '<p class="prompt output"></p>' +

            '<p class="prompt output">-Back End</p>' +
            '<p class="prompt output">Asp.net (webforms, mvc, dotnetcore)</p>' +
            '<p class="prompt output">C#</p>' +
            '<p class="prompt output">Node.js</p>' +
            '<p class="prompt output"></p>' +

            '<p class="prompt output">-Mobile</p>' +
            '<p class="prompt output">Android</p>' +
            '<p class="prompt output">React Native</p>' +
            '<p class="prompt output">Flutter</p>' +
            '<p class="prompt output">Xamerin</p>' +
            '<p class="prompt output"></p>' +

            '<p class="prompt output">-Databases</p>' +
            '<p class="prompt output">MSSQL</p>' +
            '<p class="prompt output">My SQL</p>' +
            '<p class="prompt output">Postgrese SQL</p>' +
            '<p class="prompt output">Air Table</p>' +
            '<p class="prompt output"></p>' +

            '<p class="prompt output">-Cloud Servers</p>' +
            '<p class="prompt output">Azure</p>' +
            '<p class="prompt output">AWS</p>' +
            '<p class="prompt output"></p>' +

            '<p class="prompt output">-OS</p>' +
            '<p class="prompt output">Windows</p>' +
            '<p class="prompt output">Linux</p>' +
            '<p class="prompt output"></p>'

            );
    }

    var lines = $('.out p');
    $.each(lines, function (index, line) {
        setTimeout(function () {
            $(line).css({
                "opacity": 1
            });

            textEffect($(line))
        }, index * 100);
    });

    $('.new-output').removeClass('new-output');
    input.val('');
    $('.terminal').append('<p class="prompt output new-output"></p>');
}

function resetForm(withKittens) {
    var message = "Sorry that command is not recognized."
    var input = $('.404-input');

    $('.new-output').removeClass('new-output');
    input.val('');
    $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

    $('.new-output').velocity(
        'scroll'
    ), { duration: 100 }
}

function textEffect(line) {
    var alpha = [';', '.', ',', ':', ';', '~', '`'];
    var animationSpeed = 10;
    var index = 0;
    var string = line.text();
    var splitString = string.split("");
    var copyString = splitString.slice(0);

    var emptyString = copyString.map(function (el) {
        return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
    })

    emptyString = shuffle(emptyString);

    $.each(copyString, function (i, el) {
        var newChar = emptyString[i];
        toUnderscore(copyString, line, newChar);

        setTimeout(function () {
            fromUnderscore(copyString, splitString, newChar, line);
        }, i * animationSpeed);
    })
}

function toUnderscore(copyString, line, newChar) {
    copyString[newChar[1]] = newChar[0];
    line.text(copyString.join(''));
}

function fromUnderscore(copyString, splitString, newChar, line) {
    copyString[newChar[1]] = splitString[newChar[1]];
    line.text(copyString.join(""));
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
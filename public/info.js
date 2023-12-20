function info() {$(function () {

    $.get('./text/info.txt', function(data) {
        $('#markdown-body').append(markdown.toHTML(data, "Maruku"));
    }, 'text');
});}

module.exports = info;
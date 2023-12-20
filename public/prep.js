function prep() {$(function () {
    $.get("./text/prep.txt", function(data) {
        console.log(data);
        $('#prep-text').append(markdown.toHTML(data, "Maruku"));
    }, 'text');
});}

module.exports = prep;

function index() {$(function () {
    $.get("./text/index.txt", function(data) {
        var pre_limit = "PRE-CAROUSEL";
        var post_start = "POST-CAROUSEL";
        var pre = data.substring(0, data.indexOf(pre_limit));
        var post = data.substring(data.indexOf(post_start) + post_start.length);
        console.log(pre);
        console.log(post);
        $('#pre-carousel').append(markdown.toHTML(pre, "Maruku"));
        $('#post-carousel').append(markdown.toHTML(post, "Maruku"));
    }, 'text');
});}

module.exports = index;
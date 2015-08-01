$(function() {
    // $("#nav-top li a").click(function() {
    //     $("#nav-top li a").each(function() {
    //         $(this).removeClass("active");
    //     });
    //     $(this).addClass("active");
    // });
    //
    // $("#nav-mid li a").click(function() {
    //     $("#nav-mid li a").each(function() {
    //         $(this).removeClass("active");
    //     });
    //     $(this).addClass("active");
    // });

    // TODO: review toggle style, smoothing animation
    $("#toggle-post").click(function(event) {
        event.preventDefault();
        $('#overlay').css('display', 'block').fadeIn(500);
    });

    $("#close-post").click(function(event) {
        event.preventDefault();
        $('#overlay').css('display', 'none').fadeOut(500);
    });
});

console.log("Testing the debug output.");

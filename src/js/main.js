$(function() {
    $("#nav-top li a").click(function() {
        $("#nav-top li a").each(function() {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    $("#nav-mid li a").click(function() {
        $("#nav-mid li a").each(function() {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });
});

console.log("Testing the debug output.");

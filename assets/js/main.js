$(function(){$("#nav-top li a").click(function(){$("#nav-top li a").each(function(){$(this).removeClass("active")}),$(this).addClass("active")}),$("#toggle-post").click(function(t){t.preventDefault(),$("#overlay").css("display","block").fadeIn(500)}),$("#close-post").click(function(t){t.preventDefault(),$("#overlay").css("display","none").fadeOut(500)})});
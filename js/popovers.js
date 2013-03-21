/* This code traverses the DOM looking for any element
   that has the class "popover" and attaches it as a popover
   to it's parent element.  The 'title' attribute of the
   element is used as the title in the popover.
*/

$("* > .popover").each(function(index) {
    var parent = $(this).parent()
    var content = $(this).html()
    $(parent).popover({
	"title": $(this).attr("title"),
	"placement": $(this).attr("data-placement"),
	"html": true,
	"content": content
    });
    $(parent).addClass("pparent");
    $(this).remove()
});

/* Bind ESC so it closes all windows */
$(document).bind('keyup', function(e) {
    if (e.keyCode==27) {
	$(".pparent").each( function(i) { $(this).popover('hide'); } )
    }
})

$('body').on('click', '.popover div', function() {
    $(".pparent").each( function(i) { $(this).popover('hide'); } )
})
/* This code traverses the DOM looking for any element
   that has the class "popover" and attaches it as a popover
   to it's parent element.  The 'title' attribute of the
   element is used as the title in the popover.
*/
/* $("* > [class=\"popover\"]").each(function(index) { */
$("* > .popover").each(function(index) {
    var parent = $(this).parent()
    var content = $(this).html()
    $(parent).popover({
	"title": $(this).attr("title"),
	"placement": $(this).attr("data-placement"),
	"html": true,
	"content": content
    });
    $(this).remove()
});

/*
$("#real_attrs").popover({
    "title": "Common Attributes",
    "html": true,
    "content": "<tt>quantity: <span class=\"pull-right\">String</span></tt><br>\
<tt>unit: String</tt><br>\
<tt>displayUnit: String</tt><br>\
<tt>start: Real</tt><br>\
<tt>fixed: Boolean</tt><br>\
<tt>min: Real</tt><br>\
<tt>max: Real</tt><br>\
<tt>nominal: Real</tt><br>\
<tt>stateSelect: StateSelect</tt><br>"
})
*/
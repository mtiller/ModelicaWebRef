$("#rtype").tooltip({
    "title": "Used to represent floating point numbers",
    "placement": "right",
});

$("#itype").tooltip({
    "title": "Used to represent integer numbers",
    "placement": "right",
});

$("#btype").tooltip({
    "html": true,
    "title": "Used to represent boolean numbers (possible values: <tt>true</tt> and <tt>false</tt>)",
    "placement": "right",
});

$("#stype").tooltip({
    "title": "Used to represent floating point number",
    "placement": "right",
});
$("#rc").tooltip({
    "title": "This is a model, other restricted classes include <tt>connector</tt>, <tt>block</tt> and <tt>function</tt>",
    "html": true,
    "placement": "bottom"
});

$(".classname").tooltip({
    "title": "This is the model name.  It is used at the start and the end of a definition (they <b>must match</b>)",
    "html": true,
    "placement": "bottom"
});

$("#descstr").tooltip({
    "title": "This is a descriptive string. While optional, they often provide very useful documentation",
    "placement": "bottom"
});

$("#initeqs").tooltip({
    "title": "Place any equations that apply only at the start of a simulation in the <tt>initial equation</tt> section",
    "html": true,
    "placement": "right"
});
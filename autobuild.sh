#!/bin/sh
# If you have the python 'watchdog' extension installed,
# it comes with a script called 'watchmedo' which this
# script uses to auto-update 'ref.html'.  This is useful
# while editing the underlying macros.

make
watchmedo shell-command --patterns="*.html;vars.json" \
    --recursive --command=make --wait templates

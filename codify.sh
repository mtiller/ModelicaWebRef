# This script can be used to convert all <tt> tags
# into <code> tags.  The best way to run it is in conjunction
# with find so that it acts on all .html files, e.g.,
#
# % find . -name '*.html' -exec ./codify.sh {} \;
#
sed 's/<tt/<code/g' $1 | sed 's/tt>/code>/g' > $1_tmp
mv $1_tmp $1


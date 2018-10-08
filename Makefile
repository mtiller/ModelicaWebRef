MODS = modules/model_template.html

all:	index.html

.PHONY: index.html

build:
	virtualenv build
	build/bin/pip install jinja2

index.html: build
	(cd templates; ../build/bin/python2 ../jinjafy.py --output ../index.html root.html)

export: index.html
	-mkdir output
	cp index.html output
	cp -r js img css output

push: export
	(cd output; git add .; git commit -m "New version to push"; git push)

clean:
	-rm -rf build
	-rm index.html

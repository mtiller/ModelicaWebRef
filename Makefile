MODS = modules/model_template.html

all:	index.html

.PHONY: index.html

index.html:
	(cd templates; ../jinjafy.py --output ../index.html root.html)

export: index.html
	-mkdir output
	cp index.html output
	cp -r js img css output

push: export
	(cd output; git add .; git commit -m "New version to push"; git push)

clean:
	-rm index.html

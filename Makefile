MODS = modules/model_template.html

all:	index.html

.PHONY: index.html

index.html:
	(cd templates; ../jinjafy.py --output ../index.html root.html)

export:
	-mkdir output
	cp index.html output
	cp -r js img css output

clean:
	-rm index.html

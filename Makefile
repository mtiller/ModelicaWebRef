MODS = modules/model_template.html

all:	ref.html

.PHONY: ref.html

ref.html:
	(cd templates; ../jinjafy.py --output ../ref.html root.html)

export:
	-mkdir output
	cp ref.html output
	cp -r js img css output

clean:
	-rm ref.html

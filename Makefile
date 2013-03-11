MODS = modules/model_template.html

all:	ref.html

.PHONY: ref.html

ref.html:
	(cd templates; ../jinjafy.py --output ../ref.html root.html)

clean:
	-rm ref.html

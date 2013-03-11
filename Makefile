MODS = modules/model_template.html

ref.html: root.html $(MODS)
	./jinjafy.py --output ref.html root.html


GOOGLE_APPENGINE_SDK_VERSION=1.4.2
LATEST_RIGHTJS_VERSION=2.2.2

.PHONY: all bootstrap clean

all: app/static/latest

app/static/latest: app/static/versions/$(LATEST_RIGHTJS_VERSION)
	@echo Creating symlink to latest version
	@rm -rf app/static/latest 
	ln -s $< $@

bootstrap: google_appengine_$(GOOGLE_APPENGINE_SDK_VERSION).zip
	unzip google_appengine_$(GOOGLE_APPENGINE_SDK_VERSION).zip

google_appengine_$(GOOGLE_APPENGINE_SDK_VERSION).zip:
	wget -c http://googleappengine.googlecode.com/files/google_appengine_$(GOOGLE_APPENGINE_SDK_VERSION).zip

upload:
	python google_appengine/appcfg.py update app/

clean:
	rm -rf app/static/latest
	rm -rf google_appengine/
	rm -f *.zip

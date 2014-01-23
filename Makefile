ifndef YUI_COMPRESSOR
	YUI_COMPRESSOR=/usr/share/yui-compressor/yui-compressor.jar
endif

all: submodules strophe config

config: .config.status
	cat .config.status | sed 's/[\%]/\\&/g;s/\([^=]*\)=\(.*\)/s%\\$$\1\\$$%\2%/' > .sed.script;
	cat js/core/config.sample.js | sed 's/\$$version\$$/'`git describe`'/' | \
	sed -f .sed.script > js/core/config.js

clean:
	$(MAKE) -C js/lib/strophe clean

submodules:
	@@git submodule update --init

update-libs:
	for lib in `ls js/lib/`; do git -C js/lib/$$lib pull; done;

strophe:
	env YUI_COMPRESSOR=$(YUI_COMPRESSOR) $(MAKE) -C js/lib/strophe

.config.status: configure
	./configure ; if [ $$? -eq "1" ]; then exit 1; fi

.PHONY: all clean submodules strophe config

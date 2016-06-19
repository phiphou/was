./node_modules/protractor/bin/webdriver-manager update
http-server dist -a 127.0.0.1 -s & ./node_modules/protractor/bin/webdriver-manager start &
./node_modules/protractor/bin/protractor ./config/protractor.conf.js

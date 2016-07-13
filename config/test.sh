webdriver-manager update
http-server dist -a 127.0.0.1 -s & webdriver-manager start &
protractor ./config/protractor.conf.js

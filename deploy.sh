#!/bin/bash

# Script mit dem ich zuhause 
# die app auf meinem raspi deployen kann. 
scp ./public/build/* pihole:/var/www/html/build
scp ./public/* pihole:/var/www/html/

#!/bin/bash

scp ./public/build/* pihole:/var/www/html/build
scp ./public/* pihole:/var/www/html/

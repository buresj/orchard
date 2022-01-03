#!/bin/bash

VER=$(jq ".version" --raw-output < package.json)
git add .
git commit -m "chore: bump v$VER :robot:"
git push origin master
#!/bin/bash

# not needed for now as we dont have any translations
#./compile-translations.sh 

python3 asknot-ng.py \
	templates/index.html \
	questions/archlinux.yml \
	l10n/archlinux/locale \
	--theme archlinux

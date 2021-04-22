#!/bin/bash

ASKNOT_THEME=${ASKNOT_THEME:-archlinux}

./compile-translations.sh

npx postcss templates/site.css -o build/site.css

python asknot-ng.py \
       templates/index.html \
       questions/"$ASKNOT_THEME".yml \
       l10n/fedora/locale \
       --theme "$ASKNOT_THEME"

#!/bin/bash

# Not needed until we set up our own translations.
#./compile-translations.sh

python asknot-ng.py \
       templates/index.html \
       questions/archlinux.yml \
       l10n/fedora/locale \
       --theme archlinux

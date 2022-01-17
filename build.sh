#!/bin/bash

./compile-translations.sh

python asknot-ng.py \
       templates/index.html \
       questions/archlinux.yml \
       l10n/fedora/locale \
       --theme archlinux

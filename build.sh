#!/bin/bash

./compile-translations.sh

python3 asknot-ng.py \
	templates/index.html \
	questions/arch.yml \
	l10n/arch/locale \
	--theme arch

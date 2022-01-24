# asknot-ng

Ask not what `$ORG` can do for you, but what you can do for `$ORG`.

Originally written by [@ralphbean].  Inspired by [the original work][wcidfm] of
[Josh Matthews][jdm], [Henri Koivuneva][wham], and [others][asknot-contribs].

> I stumbled upon and loved the original [whatcanidoformozilla.org][wcidfm] and
> wanted to deploy it for the [Fedora Community][fedora] but I found that I
> couldn't easily change the questions and links that were presented.  A year
> went by and in 2015 I wrote this:  "asknot-ng".

The gist of this “next generation” rewrite is to make it as configurable as
possible.  There is a primary script, ``asknot-ng.py``
that works like a static-site generator.  It takes as input three things:

- A questions file, written in yaml (see eg.
  [archlinux.yml](questions/archlinux.yml)).  You’ll have to write your own one of
  these.
- A template file, written in mako (the [default](templates/index.html) should work
  for everybody).
- A ‘theme’ argument to specify what CSS to use.  The default is nice enough,
  but you’ll probably want to customize it to your own use case.

We have a (WIP) [Arch Linux instance up and running][wcidfa] if you’d like to
poke it.

## Requirements

Clone the repo:

    $ git clone https://gitlab.archlinux.org/archlinux/asknot-ng.git
    $ cd asknot-ng

The site-generator is written in Python, and the CSS build deps are written in
Node.js:

    $ sudo pacman -Syu npm python-mako python-yaml
    $ npm ci

The script can optionally generate an svg visualizing your question tree.  This
requires pygraphviz which you could install like so:

    $ git clone https://aur.archlinux.org/python-pygraphviz.git
    $ cd python-pygraphviz
    $ makepkg -isr

## Giving it a run

Run the script with the Arch Linux configuration:

    $ ./build.sh
    …
    Copied /home/user/repos/asknot-ng/static to build/static

and open up `build/en/index.html` in your favorite browser.

## Preparing Translations

**Note**: Currently we piggyback off of Fedora's translations, so skip this.

First, install Babel, setup a virtualenv, and build the egg info:

    $ sudo pacman -Syu python-babel
    $ python -m venv --system-site-packages venv
    $ venv/bin/python setup.py develop

Then, extract the translatable strings:

    $ venv/bin/python setup.py extract_messages --output-file l10n/fedora/locale/asknot-ng.pot --input-dir=.

## Application Deployment

The (WIP) Arch Linux ``asknot-ng`` instance currently runs on GitLab Pages.
There are 2 deployments one in [staging] and one in [production].

The deployment of new versions to these environments is managed from the GitLab
repository, thanks to the following 2 branches: ``staging`` and ``archlinux``.

### Staging

Currently this is a bit convoluted and done on gitlab.com (at least until
[multiple version Pages
support](https://gitlab.com/gitlab-org/gitlab/-/issues/16208) is implemented or
one of the proposed solutions is used).

### Production

To deploy a change in the production environment you need to push the commits
to the ``archlinux`` branch, then GitLab Pages will build and deploy the site.

## Contributing back

``asknot-ng`` is licensed GPLv3+ and we’d love to get patches back containing
even the things you might not think we want.  If you have a questions file for
your repo, a modified template, or a CSS theme for your use case, please [send
them to us][patches].  It would be nice to build a library of deployments so we
can all learn.

Of course, bug reports and patches to the main script are appreciated as
always.

Happy Hacking!

[@ralphbean]: http://threebean.org
[fedora]: https://getfedora.org
[patches]: https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html
[wcidfm]: https://whatcanidoformozilla.org
[wcidfa]: https://whatcanidofor.archlinux.org
[jdm]: https://www.joshmatthews.net
[wham]: https://koivuneva.net/
[asknot-contribs]: https://github.com/jdm/asknot/contributors
[staging]: https://polyzen.gitlab.io/asknot-ng-staging
[production]: https://whatcanidofor.archlinux.org

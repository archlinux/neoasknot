# neoasknot

Ask not what `$ORG` can do for you, but what you can do for `$ORG`.

Rewrite of [asknot-ng], which was written by [@ralphbean] and its
[contributors][asknot-ng-contribs], which itself was inspired by the
original [asknot] by [Josh Matthews][jdm], Henri Koivuneva, and
[others][asknot-contribs]. The concept is a basic decision tree.

`neoasknot` is built with [SvelteKit] and [Tailwind CSS] using the [Skeleton] UI
library:<br>
https://whatcanidofor.archlinux.org

## Usage

Clean install the project's development dependencies:

    $ npm ci

Start the dev server:

    $ npm run dev

Build for production and preview the static site:

    $ npm run build
    $ npm run preview

## Deployment

The Arch Linux instance runs on [GitLab Pages][glpages].
There are 2 deployments: one in [staging] and one in [production].

### Staging

Currently this is a bit convoluted and done on gitlab.com (at least until
[multiple version Pages support][multiverpages] is implemented or one of the
proposed solutions is used).

### Production

Push to the `main` branch and GitLab CI will build and publish the site.

## Contributing

Development of neoasknot takes place on Arch Linux’s GitLab:
https://gitlab.archlinux.org/archlinux/neoasknot

Please read our distribution-wide [Code of Conduct][coc] before contributing,
to understand what actions will and will not be tolerated.

All code contributions fall under the terms of the [GPL-3.0-or-later][license].

[asknot-ng]: https://whatcanidoforfedora.org
[@ralphbean]: http://threebean.org
[asknot-ng-contribs]: https://github.com/fedora-infra/asknot-ng/graphs/contributors
[asknot]: https://whatcanidoformozilla.org
[jdm]: https://www.joshmatthews.net
[asknot-contribs]: https://github.com/jdm/asknot/contributors
[SvelteKit]: https://kit.svelte.dev
[Tailwind CSS]: https://tailwindcss.com
[Skeleton]: https://www.skeleton.dev
[glpages]: https://docs.gitlab.com/ee/user/project/pages/
[staging]: https://polyzen.gitlab.io/neoasknot-staging
[production]: https://whatcanidofor.archlinux.org
[multiverpages]: https://gitlab.com/gitlab-org/gitlab/-/issues/16208
[coc]: https://terms.archlinux.org/docs/code-of-conduct/
[license]: https://gitlab.archlinux.org/main/neoasknot/-/blob/archlinux/LICENSE

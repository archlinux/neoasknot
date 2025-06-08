# neoasknot

Ask not what `$ORG` can do for you, but what you can do for `$ORG`.

Rewrite of [asknot-ng], which was written by [@ralphbean] and its
[contributors][asknot-ng-contribs], which itself was inspired by the
original asknot by [Josh Matthews], Henri Koivuneva, and
[others][asknot-contribs]. The concept is a basic decision tree.

`neoasknot` is built with [SvelteKit] and [Tailwind CSS] using the [daisyUI]
component library: \
<https://whatcanidofor.archlinux.org>

## Usage

Clean install the project's development dependencies:

```sh
npm ci
```

Start the dev server:

```sh
npm run dev
```

Build for production and preview the static site:

```sh
npm run build
npm run preview
```

## Deployment

The Arch Linux instance runs on [GitLab Pages].

Push to the `main` branch to have CI build and publish the site.

The `staging` branch gets deployed to the [/staging subdirectory][staging].

## Contributing

Development of neoasknot takes place on Arch Linux’s GitLab: \
<https://gitlab.archlinux.org/archlinux/neoasknot>

Please read our distribution-wide [Code of Conduct] before contributing.

All code contributions fall under the terms of the [GPL-3.0-or-later][license].

[@ralphbean]: http://threebean.org
[asknot-contribs]: https://github.com/jdm/asknot/contributors
[asknot-ng]: https://whatcanidoforfedora.org
[asknot-ng-contribs]: https://github.com/fedora-infra/asknot-ng/graphs/contributors
[code of conduct]: https://terms.archlinux.org/docs/code-of-conduct/
[daisyui]: https://daisyui.com/
[gitlab pages]: https://docs.gitlab.com/ee/user/project/pages/
[josh matthews]: https://www.joshmatthews.net
[license]: https://gitlab.archlinux.org/main/neoasknot/-/blob/archlinux/LICENSE
[staging]: https://whatcanidofor.archlinux.org/staging
[sveltekit]: https://kit.svelte.dev
[tailwind css]: https://tailwindcss.com

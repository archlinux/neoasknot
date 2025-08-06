# neoasknot

Ask not what `$ORG` can do for you, but what you can do for `$ORG`.

Rewrite of [asknot-ng], which was written by [@ralphbean] and its
[contributors][asknot-ng-contributors], which itself was inspired by the
original [asknot] by [Josh Matthews], Henri Koivuneva, and
[others][asknot-contributors]. The concept is a basic decision tree.

`neoasknot` is built with [SvelteKit] and [Tailwind CSS] using the [daisyUI]
component library.

You can find the Arch Linux deployment at <https://whatcanidofor.archlinux.org>.

## Hacking

Install the development dependencies:

```sh
npm i
```

Start Vite dev server:

```sh
npm run dev
```

## Deployment

Create optimized production build of the static site and preview it:

```sh
npm run build
npm run preview
```

The Arch Linux instance uses [GitLab Pages]:

- Push to the `main` branch to have CI build and publish the site.
- The `staging` branch gets deployed to the /staging subdirectory. \
  Note: The next production deployment will remove this subdirectory.

## Contributing

Development takes place at <https://gitlab.archlinux.org/archlinux/neoasknot>.

Please read our distribution-wide [Code of Conduct] before contributing.

All code contributions fall under the terms of the GPL-3.0-or-later license.

[@ralphbean]: http://threebean.org
[asknot]: https://github.com/jdm/asknot
[asknot-contributors]: https://github.com/jdm/asknot/graphs/contributors
[asknot-ng]: https://github.com/fedora-infra/asknot-ng
[asknot-ng-contributors]: https://github.com/fedora-infra/asknot-ng/graphs/contributors
[code of conduct]: https://terms.archlinux.org/docs/code-of-conduct/
[daisyui]: https://daisyui.com/
[gitlab pages]: https://docs.gitlab.com/user/project/pages/
[josh matthews]: https://www.joshmatthews.net
[sveltekit]: https://svelte.dev/docs/kit/introduction
[tailwind css]: https://tailwindcss.com

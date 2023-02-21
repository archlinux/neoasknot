import type { LayoutLoad } from './$types';

export const prerender = true;
export const trailingSlash = 'always';

export const load = (async () => {
  const nodeImport = await import('$content/root.yml');

  return {
    ...nodeImport.default,
    metaDescription:
      'Landing page for areas of Arch Linux you may be interested in contributing to.',
    title: nodeImport.default.title,
  };
}) satisfies LayoutLoad;

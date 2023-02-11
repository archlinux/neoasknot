export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  const nodeImport = await import('$content/root.yml');

  return {
    metaDescription:
      'Landing page for areas of Arch Linux you may be interested in contributing to.',
    nodeContent: nodeImport.default,
    title: nodeImport.default.title,
  };
}

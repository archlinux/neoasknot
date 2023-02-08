export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export function load() {
  return {
    nodeImport: import('$content/root.yml'),
  };
}

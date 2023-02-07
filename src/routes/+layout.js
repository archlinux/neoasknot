export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').LayoutLoad} */
export function load() {
  return {
    content: import('$content/root.yml'),
  };
}

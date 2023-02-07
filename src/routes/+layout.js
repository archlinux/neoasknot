export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export function load() {
  return {
    content: import('$content/root.yml'),
  };
}

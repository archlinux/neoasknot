/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    content: import(`$content/children/${params.slug}.yml`)
  };
}

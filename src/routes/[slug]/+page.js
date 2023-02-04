/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const root = await parent();
  return {
    roottitle: root.content.default.title,
    content: import(`$content/children/${params.slug}.yml`),
  };
}

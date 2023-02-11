/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const nodeImport = await import(`$content/children/${params.slug}.yml`);
  const root = await parent();
  const slug = params.slug;

  return {
    metaDescription: `Arch Linux ${slug} topics that you may be interested in contributing to.`,
    nodeContent: nodeImport.default,
    slug: slug,
    title: `${slug} · ${root.nodeContent.title}`,
  };
}

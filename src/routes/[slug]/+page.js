/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const nodeImport = await import(`$content/children/${params.slug}.yml`);
  const root = await parent();

  return {
    metaDescription: `Arch Linux ${params.slug} topics that you may be interested in contributing to.`,
    nodeContent: nodeImport.default,
    title: `${params.slug} · ${root.nodeContent.title}`,
  };
}

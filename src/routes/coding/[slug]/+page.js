/** @type {import('./$types').PageLoad} */
export async function load({ params, parent }) {
  const nodeImport = await import(
    `$content/children/coding/${params.slug}.yml`
  );
  const root = await parent();

  return {
    metaDescription: `Arch Linux projects using ${params.slug} that you may be interested in contributing to.`,
    nodeContent: nodeImport.default,
    title: `${params.slug} · ${root.nodeContent.title}`,
  };
}

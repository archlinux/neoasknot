import type { PageLoad } from './$types';

export const load = (async ({ params, parent }) => {
  const nodeImport = await import(
    `$content/children/coding/${params.slug}.yml`
  );
  const parentData = await parent();
  const slug = params.slug;

  return {
    metaDescription: `Arch Linux projects using ${slug} that you may be interested in contributing to.`,
    nodeContent: nodeImport.default,
    slug,
    title: `${slug} · ${parentData.title}`,
  };
}) satisfies PageLoad;

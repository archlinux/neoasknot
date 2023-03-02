import type { PageLoad } from './$types';

export const load = (async ({ params, parent }) => {
  const nodeImport = await import(
    `$content/children/coding/${params.slug}.yml`
  );
  const parentData = await parent();
  const slug = params.slug;

  return {
    ...nodeImport.default,
    metaDescription: `Arch Linux projects using ${slug} that you may be interested in contributing to.`,
    slug,
    title: `${slug} · ${parentData.title}`,
    heading: `Projects using ${slug}`,
  };
}) satisfies PageLoad;

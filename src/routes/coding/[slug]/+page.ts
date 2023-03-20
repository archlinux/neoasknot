export const load = async ({ params, parent }) => {
  const slug = params.slug;
  const nodeImport = await import(`$content/children/coding/${slug}.yml`);
  const { title } = await parent();

  return {
    slug,
    ...nodeImport.default,
    metaDescription: `Arch Linux projects using ${slug} that you may be interested in contributing to.`,
    title: `${slug} · ${title}`,
    heading: `Projects using ${slug}`,
  };
};

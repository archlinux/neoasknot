export const load = (async ({ params, parent }) => {
  const slug = params.slug;
  const nodeImport = await import(`$content/children/${slug}.yml`);
  const { title } = await parent();

  return {
    slug,
    ...nodeImport.default,
    metaDescription: `Arch Linux ${slug} topics that you may be interested in contributing to.`,
    title: `${slug} · ${title}`,
  };
});

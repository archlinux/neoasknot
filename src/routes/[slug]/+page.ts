import { PUBLIC_ORG, PUBLIC_ORG_DIR } from '$env/static/public';

export const load = async ({ params, parent }) => {
  const slug = params.slug;
  const treeImport = await import(
    `$contentRoot/${PUBLIC_ORG_DIR}/tree/children/${slug}.yaml`
  );
  const { title } = await parent();

  return {
    slug,
    ...treeImport.default,
    metaDescription: `${PUBLIC_ORG} ${slug} topics that you may be interested in contributing to.`,
    title: `${slug} · ${title}`,
  };
};

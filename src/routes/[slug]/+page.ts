import { PUBLIC_ORG } from '$env/static/public';

export const load = async ({ params, parent }) => {
  const slug = params.slug;
  const nodeImport = await import(
    `$content/${PUBLIC_ORG}/tree/children/${slug}.yaml`
  );
  const { title } = await parent();

  return {
    slug,
    ...nodeImport.default,
    metaDescription: `${PUBLIC_ORG} ${slug} topics that you may be interested in contributing to.`,
    title: `${slug} · ${title}`,
  };
};

import { PUBLIC_ORG } from '$env/static/public';

export const load = async ({ params, parent }) => {
  const slug = params.slug;
  const nodeImport = await import(
    `$content/${PUBLIC_ORG}/tree/children/coding/${slug}.yaml`
  );
  const { title } = await parent();

  return {
    slug,
    ...nodeImport.default,
    metaDescription: `${PUBLIC_ORG} projects using ${slug} that you may be interested in contributing to.`,
    title: `${slug} · ${title}`,
    heading: `Projects using ${slug}`,
  };
};

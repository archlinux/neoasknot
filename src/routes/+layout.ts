import { PUBLIC_ORG, PUBLIC_ORG_DIR } from '$env/static/public';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async () => {
  const treeImport = await import(
    `$contentRoot/${PUBLIC_ORG_DIR}/tree/root.yaml`
  );

  return {
    ...treeImport.default,
    title: `What can I do for ${PUBLIC_ORG}?`,
    heading: 'What is your area of interest?',
  };
};

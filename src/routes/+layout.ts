import { PUBLIC_ORG } from '$env/static/public';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async () => {
  const treeImport = await import(`$content/${PUBLIC_ORG}/tree/root.yaml`);

  return {
    ...treeImport.default,
    title: `What can I do for ${PUBLIC_ORG}?`,
    heading: 'What is your area of interest?',
  };
};

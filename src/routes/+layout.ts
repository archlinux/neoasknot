export const prerender = true;
export const trailingSlash = 'always';

export const load = (async () => {
  const nodeImport = await import('$content/root.yml');

  return {
    ...nodeImport.default,
  };
});

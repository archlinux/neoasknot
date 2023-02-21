import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
  const parentData = await parent();

  return {
    ...parentData,
    metaDescription:
      'Landing page for areas of Arch Linux you may be interested in contributing to.',
    title: parentData.title,
  };
}) satisfies PageLoad;

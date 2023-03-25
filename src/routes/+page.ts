import { PUBLIC_ORG } from '$env/static/public';

export const load = async ({ parent }) => {
  const parentData = await parent();

  return {
    ...parentData,
    metaDescription: `Landing page for areas of ${PUBLIC_ORG} you may be interested in contributing to.`,
    title: parentData.title,
  };
};

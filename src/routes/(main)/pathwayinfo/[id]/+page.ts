import { error } from '@sveltejs/kit';
import { pathWayItems } from '$lib/utils/navdata/pathway';
import type { PageLoad } from './$types';

const images = import.meta.glob('$lib/images/csfhs/**/*.{png,jpg,jpeg}', { as: 'url', eager: true });

export const load = (async ({ params }) => {
  const pathWay = pathWayItems.find((p) => p.id === params.id);
  if (!pathWay) throw error(404, 'Page Not Found.');

  const pageImages = Object.keys(images).flatMap((path) => {
    const img = images[path];
    if (path.includes(`/${params.id}/`)) {
      return [img];
    }

    return [];
  });

  return { pathWay, pageImages };
}) satisfies PageLoad;
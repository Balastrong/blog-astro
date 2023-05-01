import { Post } from '~/types';

const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/content/post/**');
  } catch (e) {
    // continue regardless of error
  }
  return images;
};

let _images;

/** */
export const fetchLocalImages = async () => {
  _images = _images || load();
  return await _images;
};

/** */
export const findImage = async ({ image: imagePath, id: postId }: Pick<Post, 'image' | 'id'>) => {
  if (typeof imagePath !== 'string') {
    return null;
  }

  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  if (!imagePath.startsWith('~/assets') && !imagePath.startsWith('./')) {
    return null;
  } // For now only consume images using ~/assets alias (or absolute)

  const images = await fetchLocalImages();
  let key = imagePath.replace('~/', '/src/');

  if (imagePath.startsWith('./') && !!postId) {
    const postPath = postId.split('/').slice(0, -1).join('/');
    const image = imagePath.replace('./', '');

    key = `/src/content/post/${postPath}/${image}`;
  }

  return typeof images[key] === 'function' ? (await images[key]())['default'] : null;
};

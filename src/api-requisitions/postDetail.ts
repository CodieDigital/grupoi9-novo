import { api } from 'src/services/api';

import { PostDetailMockData } from 'src/mock-data/postDetail';
import { PostDetail } from 'codieweb/dist/cjs/components/pages/post/interfaces';
import { IDetach } from 'src/interfaces/blogs';
import { IBlogCategories } from 'src/interfaces/blog-categories';
import { MockBlogCategories } from 'src/mock-data/blogCategories';
import { MockDetachs } from 'src/mock-data/detachs';

export async function getPostDetailData(url: string | string[] | undefined) {
  try {
    const [responsePostDetailData, responseDetach, responseBlogCategories] =
      await Promise.all([
        api.get<PostDetail>('blog/detail/' + url).catch(() => ({ data: null })),
        api.get<IDetach[]>('blog/destaques').catch(() => ({ data: null })),
        api
          .get<IBlogCategories[]>('blog/categorias')
          .catch(() => ({ data: null })),
      ]);

    const postDetailData = responsePostDetailData?.data || PostDetailMockData;

    const detachs = responseDetach?.data || MockDetachs;

    const categories = responseBlogCategories?.data || MockBlogCategories;

    return { postDetailData, detachs, categories };
  } catch (error: any) {
    console.error('Erro ao obter os dados do PostDetail ', error);
    return {
      postDetailData: PostDetailMockData,
      detachs: MockDetachs,
      categories: MockBlogCategories,
    };
  }
}

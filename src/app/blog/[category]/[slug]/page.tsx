import Header from '@/components/header';
import { formatDate, getBlogPosts } from '../../utils';
import Container from '@/components/Container';
import { BreadcrumbWithCustomSeparator } from '@/components/breadcrumb';
import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';

export default function SlugPage({
  params,
}: {
  params: { category: string; slug: string };
}) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  // console.log(post);

  if (!post) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <BreadcrumbWithCustomSeparator
            category={post?.metadata.category}
            slug={post?.slug}
          />
          <h1 className='font-semibold text-2xl tracking-tighter mt-4'>
            {post?.metadata.title}
          </h1>
          <div className='flex justify-between items-center mt-2 mb-4 text-sm'>
            <p className='text-sm text-neutral-600 dark:text-neutral-400 mt-2 '>
              {formatDate(post?.metadata.publishedAt)}
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className='prose'>
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
}

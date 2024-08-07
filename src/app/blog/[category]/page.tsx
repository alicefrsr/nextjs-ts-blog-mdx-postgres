// 'use client';

import Link from 'next/link';
import { getBlogPosts } from '../utils';
import CardCategory from '@/components/card-category';
import Container from '@/components/Container';
import Header from '@/components/header';

export default function Page({ params }: { params: { category: string } }) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  let sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  if (!posts.length) {
    notFound();
  }

  return (
    <>
      <Header>
        <Container>
          <h1 className='title font-semibold text-2xl tracking-wider mt-4 uppercase'>
            {/* {params.category} */}
            {posts[0]?.metadata.category}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
          {sortedPosts.map((post) => (
            <Link
              href={`/blog/${post.metadata.category}/${post.slug}`}
              key={post.slug}
            >
              <CardCategory
                title={post.metadata.title}
                summary={post.metadata.summary}
                date={post.metadata.publishedAt}
              />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

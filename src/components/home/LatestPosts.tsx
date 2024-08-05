import { formatDate, getBlogPosts } from '@/app/blog/utils';
import Link from 'next/link';
import React from 'react';

export default function LatestPosts() {
  let latestPosts = getBlogPosts();
  const sortedPosts = latestPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <>
      <h1>Recently published</h1>
      {sortedPosts.map((post) => (
        <article key={post.slug} className='text-wrap max-w-md my-10'>
          <Link href={'#'}>
            <h2 className='font-bold py-2 leading-5 hover:text-sky-400'>
              {' '}
              {post.metadata.title}
            </h2>
          </Link>
          <p className='leading-7'>{post.metadata.summary}</p>
          <p className='text-sm text-muted-foreground'>
            {formatDate(post.metadata.publishedAt)}
          </p>
        </article>
      ))}
    </>
  );
}

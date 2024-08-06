import Container from '@/components/Container';
import LatestPosts from '@/components/home/LatestPosts';
import PopularPosts from '@/components/home/popular-posts';
import TopCategories from '@/components/home/top-categories';
import { MainNav } from '@/components/main-nav';

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className='flex flex-col items-start justify-evenly mt-16 md:flex-row'>
        <div>
          <LatestPosts />
        </div>
        <div className='h-screen'>
          <div>
            <h2 className='font-bold mb-4'>TOP CATEGORIES</h2>
            <TopCategories />
          </div>
          <div className='mt-10 sticky top-0'>
            <h2 className='font-bold mb-4'>POPULAR POSTS</h2>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container>
  );
}

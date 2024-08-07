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
        <section>
          <LatestPosts />
        </section>
        <div className='h-screen'>
          <section>
            <h2 className='font-bold mb-4'>TOP CATEGORIES</h2>
            <TopCategories />
          </section>
          <section className='mt-10 sticky top-0'>
            <h2 className='font-bold mb-4'>POPULAR POSTS</h2>
            <PopularPosts />
          </section>
        </div>
      </main>
    </Container>
  );
}

import LatestPosts from '@/components/home/LatestPosts';
import { MainNav } from '@/components/MainNav';

export default function Home() {
  return (
    <>
      <MainNav />
      <main>
        <div>
          <LatestPosts />;
        </div>
      </main>
    </>
  );
}

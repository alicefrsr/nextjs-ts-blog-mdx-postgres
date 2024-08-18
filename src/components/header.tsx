export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className='bg-sky-100 p-8 dark:bg-gray-800'>{children}</header>
  );
}

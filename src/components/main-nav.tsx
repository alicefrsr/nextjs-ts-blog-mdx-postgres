'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
// import { Icons } from '@/components/icons';
import { Icons } from './icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from './ui/mode-toggle';
import { POSTS } from '@/lib/constants';

//REFACTORED
// const posts: { title: string; href: string; description: string }[] = [
//   {
//     title: 'React',
//     href: '/blog/react',
//     description: 'Stuff about React.',
//   },
//   {
//     title: 'Next.js',
//     href: '/blog/next-js',
//     description: 'Stuff about Next.js.',
//   },
//   {
//     title: 'CSS',
//     href: '/blog/css',
//     description: 'Stuff about css.',
//   },
//   {
//     title: 'Javacript',
//     href: '/blog/javacript',
//     description: 'Stuff about Javascript.',
//   },
//   {
//     title: 'SEO',
//     href: '/blog/seo',
//     description: 'Stuff about SEO.',
//   },

//   {
//     title: 'Random',
//     href: '/blog/random',
//     description: 'Random stuff.',
//   },
// ];

export function MainNav({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between pt-10 z-50',
        className
      )}
    >
      <Link href={'/'}>
        {/* LOGO -- LEFT */}
        <div className='flex items-center justify-between w-32 '>
          <Icons.logo className='h-6 w-6' />
          <p>Huggabug</p>
        </div>
      </Link>
      {/* MAIN MENU -- CENTER */}
      <NavigationMenu>
        <NavigationMenuList>
          {/* FEATURED ITEM WITH SUBITEMS */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <a
                      className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                      href='/'
                    >
                      {/* <Icons.logo className='h-6 w-6' /> */}
                      <div className='mb-2 mt-4 text-lg font-medium'>
                        What's this?
                      </div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        A selection of articles about whatever it is I've
                        learned at some point in my coding journey that I feel
                        may be of use to others.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href='/docs' title='Menu item'>
                  Menu Item title
                </ListItem>
                <ListItem href='/docs/installation' title='Menu item'>
                  Menu Item title
                </ListItem>
                <ListItem href='/docs/primitives/typography' title='Menu item'>
                  Menu Item title
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* ITEM WITH SUBITEMS */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* ITEM */}
          <NavigationMenuItem>
            <Link href='/about' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* TOGGLE + RSS -- RIGHT */}
      <div className='flex items-center justify-between w-20'>
        <ModeToggle />
        <Link href='/rss'>
          <Icons.rss className='h-6 w-6' />
        </Link>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

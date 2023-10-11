'use client';

import clsx from 'clsx';
import {usePathname} from 'next-intl/client';
import Link from 'next-intl/link';
import {ComponentProps} from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function NavigationLink({href, ...rest}: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive}
      className={clsx(
        'inline-block transition-colors',
        isActive ? 'border-black h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase' : 'border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase'
      )}
      href={href}
      {...rest}
    />
  );
}




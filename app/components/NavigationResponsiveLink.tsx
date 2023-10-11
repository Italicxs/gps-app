'use client';

import clsx from 'clsx';
import {usePathname} from 'next-intl/client';
import Link from 'next-intl/link';
import {ComponentProps} from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function NavigationResponsiveLink({href, ...rest}: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive}
      className={clsx(
        isActive ? 'bg-black-50 border-black text-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium' : 'border-transparent text-black hover:border-black block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
      )}
      href={href}
      {...rest}
    />
  );
}




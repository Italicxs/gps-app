'use client';

import clsx from 'clsx';
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';
import {ChangeEvent, useTransition} from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <span
    className={clsx('relative group cursor-pointer', isPending && 'transition-opacity [&:disabled]:opacity-30')}>
    <select className={clsx('border-transparent text-black hover:text-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
        isPending && 'opacity-70 cursor-not-allowed'
      )}

      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {['en', 'es'].map((cur) => (
          
          <option key={cur} value={cur}>
          {t('locale', { locale: cur })}
        </option>

        ))}
    </select>
  </span>
  );
}



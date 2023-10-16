import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  title: 'Gas Plum Solutions',
  description: 'Soluciones a Gas Panama.',
}

export async function generateStaticParams() {
  return ['en', 'es'].map((locale) => ({locale}));
}


export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  const messages = await getMessages(locale);


  return (
    <html lang={locale}>
      <Head>
      <link rel="icon" href='./favicon.ico'/>
      </Head>
      <body className={inter.className}>
      <NextIntlClientProvider locale={locale} messages={messages}>
      <Navigation />
        {children}
        <Footer></Footer> 
        </NextIntlClientProvider>
        </body>
    </html>
  )
}

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
  title: {
    default: 'GasPlum Solutions | Diseño, Soluciones a gas para hogar, locales y edificios en Panamá',
    template: '%s | Gas Plum Solutions, Plomeria a gas, Plomero a gas, Panamá,'
  },
  description: 'Gas Plum Solutions es una empresa líder en el diseño, instalación y mantenimiento de sistemas de gas en Panamá. Ofrecemos servicios para el hogar, locales y edificios, en toda la ciudad de Panamá, Panamá Oeste, Colón y Darién.',
  generator: 'Next.js',
  applicationName: 'GPSAPP',
  referrer: 'origin-when-cross-origin',
  keywords: ['Plomeria', 'Plomeria a Gas', 'Plomeria a Gas Panamá', 'Plomero', 'Plomero a Gas', 'Plomero en Panamá'],
  metadataBase: new URL('https://gasplum.com'),
  alternates: {
    canonical: '/es',
  },
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

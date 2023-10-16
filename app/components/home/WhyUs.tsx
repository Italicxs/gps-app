import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations('WhyUs');

  return (
    <div className="bg-transparent py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-light mb-4 text-black uppercase">{t('header')}</h2>
        <h1 className="text-2xl font-semibold mb-6 text-[#4A60A1] uppercase">{t('title')}</h1>
        <div className="flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0">
          <div className="w-full sm:w-1/2 text-center">
            <h2 className="text-xl font-semibold text-black capitalize">{t('subtitle 1')}</h2>
            <p className="text-lg text-black p-4">
            {t('description 1')}
            </p>
          </div>
          <div className="w-full sm:w-1/2 text-center">
            <h2 className="text-xl font-semibold text-black capitalize">{t('subtitle 2')}</h2>
            <p className="text-lg text-black p-4">
            {t('description 2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

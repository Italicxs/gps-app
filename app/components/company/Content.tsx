
import { useTranslations } from 'next-intl';

export default function Content() {
  const t = useTranslations('Company');
    return (
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-light mb-6 text-[#4A60A1]">{t('header')}</h3>
          <h1 className="text-2xl font-semibold mb-6 text-[#4A60A1]">{t('title')}</h1>
          <div className="text-lg text-black p-4">
          {t('description')}   </div>
          <div className="flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-y-0">
            <div className="w-full sm:w-1/2 text-center">
              <h2 className="text-2xl font-extrabold text-black">{t('title 1')}</h2>
              <p className="text-lg text-black p-4">
              {t('description 1')}</p>
            </div>
            <div className="w-full sm:w-1/2 text-center">
              <h2 className="text-2xl font-extrabold text-black">{t('title 2')}</h2>
              <p className="text-lg text-black p-4">
              {t('description 2')}          </p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
  
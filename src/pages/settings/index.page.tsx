import { useResponsive } from 'antd-style';
import Head from 'next/head';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import SafeSpacing from '@/components/SafeSpacing';
import { createI18nNext } from '@/locales/create';
import { useSwitchSideBarOnInit } from '@/store/global';
import { genSiteHeadTitle } from '@/utils/genSiteHeadTitle';

import Header from './Header';
import Settings from './Settings';
import SettingLayout from './layout';
import Mobile from './mobile';

const initI18n = createI18nNext('setting');

const Setting = memo(() => {
  const { mobile } = useResponsive();
  const { t } = useTranslation('setting');
  const pageTitle = genSiteHeadTitle(t('header.global'));

  useEffect(() => {
    initI18n.finally();
  }, []);

  useSwitchSideBarOnInit('settings');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {mobile ? (
        <Mobile>
          <Flexbox align={'center'} padding={16} style={{ overflow: 'auto' }}>
            <Settings />
          </Flexbox>
        </Mobile>
      ) : (
        <SettingLayout>
          <Header />
          <Flexbox align={'center'} flex={1} padding={24} style={{ overflow: 'auto' }}>
            <SafeSpacing />
            <Settings />
          </Flexbox>
        </SettingLayout>
      )}
    </>
  );
});

export default Setting;

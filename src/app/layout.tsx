import './globals.css';

import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['300', '700', '900'],
  display: 'swap',
  variable: '--font-exo2',
});

import type { Metadata } from 'next';

import GlowEffect from '@/components/GlowEffect/GlowEffect';
import { PlayerProvider } from '@/components/Player/context/PlayerContext';

import { gunnyRewritten, inspiration, marckScript, ntSomic, ntSomicVariable } from './fonts';


export const metadata: Metadata = {
  // Основные метаданные
  title: 'IDGIE.Prod | Музыкальный продюсер и звукорежиссёр',
  description:
    'IDGIE — профессиональный музыкальный продюсер и звукорежиссёр с 14-летним опытом. 1000+ аранжировок, саундтреки для Wargaming. Создаём уникальный звук без шаблонов.',

  // Иконки (уже у вас есть, но для примера)
  icons: {
    icon: [
      { url: '/images/icons/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/images/icons/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/images/icons/favicon/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: [
      { url: '/images/icons/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/images/icons/favicon/site.webmanifest',
  appleWebApp: {
    title: 'IDGIE Prod.',
    statusBarStyle: 'default',
  },

  // SEO-метаданные
  keywords: [
    'музыкальный продюсер',
    'звукорежиссёр',
    'аранжировки',
    'саундтреки',
    'музыка для игр',
    'IDGIE',
    'производство музыки',
    'запись треков',
  ],
  authors: [{ name: 'IDGIE' }],
  creator: 'IDGIE',
  publisher: 'IDGIE.Prod',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (для социальных сетей)
  openGraph: {
    title: 'IDGIE.Prod | Музыкальный продюсер',
    description:
      'Создание уникальных треков и саундтреков от IDGIE. 14 лет опыта, 1000+ аранжировок, работа с Wargaming.',
    url: 'https://idgieprod.com', // Замените на ваш домен
    siteName: 'IDGIE.Prod',
    images: [
      {
        url: '/images/og-image.jpg', // Локальный путь или внешний URL
        width: 1200,
        height: 630,
        alt: 'IDGIE.Prod — Музыкальный продюсер',
      },
    ],
    locale: 'ru_RU', // Локаль для русского языка
    type: 'website',
  },

  // Twitter/X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'IDGIE.Prod | Музыкальный продюсер',
    description:
      'IDGIE — продюсер и звукорежиссёр с 14-летним опытом. Уникальный звук для ваших проектов.',
    images: ['/images/twitter-image.jpg'], // Локальный путь или внешний URL
    creator: '@idgieprod', // Ваш Twitter/X handle, если есть
  },

  // Дополнительные метатеги
  alternates: {
    canonical: 'https://idgieprod.com', // Канонический URL для избежания дублирования
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#000000', // Цвет темы для браузера (например, для мобильных устройств)
  category: 'Music Production',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${exo2.variable} ${ntSomic.variable} ${ntSomicVariable.variable} ${inspiration.variable} ${gunnyRewritten.variable} ${marckScript.variable} antialiased`}
      >
        <GlowEffect />
        <PlayerProvider>{children}</PlayerProvider>
      </body>
    </html>
  );
}

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
  title: 'IDGIE.Prod',
  description: 'IDGIE — продюсер, сонграйтер и звукорежиссёр с 14-летним опытом. 1000+ аранжировок и треков. Саундтреки для Wargaming. Звук со вкусом — без шаблона.',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/favicon.png', type: 'image/png' }],
  },
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

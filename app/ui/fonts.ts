import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  // google fontに存在する何系のフォントを優先的に使用するかを表すもの。
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

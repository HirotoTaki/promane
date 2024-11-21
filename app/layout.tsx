import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// それぞれのページで共通して表示するコンポーネントを指定するときに使用するファイル
// layout.jsをディレクトリに配置することで、そのディレクトリ配下のすべてのページに
// layout.jsで記述した内容を適用することができる。
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

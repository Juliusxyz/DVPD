import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Demokratische Volkspartei Deutschland | Home',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor nulla sed lacus congue tempus. Ut mollis, lectus in volutpat consectetur, enim elit scelerisque massa, facilisis euismod tellus nisl vitae velit. Mauris quis gravida sapien. Donec eleifend nibh facilisis aliquet euismod. Suspendisse tempus mattis urna, ut volutpat lorem efficitur id.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

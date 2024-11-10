import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
 subsets: ['latin'],
 weight: ['300', '400', '500', '600', '700', '800', '900'],
 variable: '--font-montserrat',
});
import { cn } from '@/lib/utils';
import Header from './header';

export const metadata: Metadata = {
 title: 'my_portfolio.',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en" suppressHydrationWarning>
   <body
    className={cn(
     'min-h-screen bg-background font-barlow antialiased',
     montserrat.variable,
     montserrat.className
    )}
   >
    <Header />
    {children}
   </body>
  </html>
 );
}

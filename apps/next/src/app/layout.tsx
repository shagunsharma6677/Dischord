import '@repo/ui/styles/shared-globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from '@/src/components/providers/theme-provider';

import { ModalProvider } from '../components/providers/ModalProvider';
import { cn } from '../../../../packages/ui/src/lib/utils';
import { SocketProvider } from '../components/providers/socket-provider';
import { QueryProvider } from '../components/providers/query-provider';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dischord Chat Application',
  description: 'Generated by create turbo',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" className={font.className} suppressHydrationWarning>
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            storageKey="dischord-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
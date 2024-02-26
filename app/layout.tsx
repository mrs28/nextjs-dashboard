//  Root Layout 
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
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

//  Any UI you add to the root layout will be shared across all pages in your application.
//  I can use it to modify <html> and <body> tags, and add metadata
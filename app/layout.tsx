import "@/app/ui/global.css";
import { inter, itim } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${itim.className} antialiased`}>{children}</body>
    </html>
  );
}

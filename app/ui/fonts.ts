import { Inter, Lusitana, Itim } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lusitana",
});
export const itim = Itim({
  weight: ["400"],
  subsets: ["thai"],
  variable: "--font-lusitana",
});

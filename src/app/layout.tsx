import clsx from "clsx";
import localFont from "next/font/local";
import "tailwindcss/tailwind.css";

const montserrat = localFont({
  display: "swap",
  src: [
    { path: "../font/Montserrat/Montserrat-VariableFont_wght.ttf", style: "normal" },
    { path: "../font/Montserrat/Montserrat-Italic-VariableFont_wght.ttf", style: "italic" },
  ],
  variable: "--font-montserrat",
});

const playfair = localFont({
  display: "swap",
  src: [
    { path: "../font/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf", style: "normal" },
    { path: "../font/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf", style: "italic" },
  ],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx(montserrat.variable, playfair.variable)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-[#f2f5fb]">{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Michael Copland",
};

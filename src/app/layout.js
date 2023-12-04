import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "SeekPlayer",
  description: "Web application to search for a professional counter-strike player",
  icons: {
    icon: [
      {
        url: '/icon.ico',
        href: '/icon.ico',
      },

    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={roboto.className}>
        <main className="max-w-7xl mx-auto p-4">
          <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2023  | Made by <a className="underline" target="_blank" href="https://twitter.com/professorbidou">Professor</a>
            </footer>
        </main>
      </body>
    </html>
  )
};
import "./globals.css";
import Header from "../components/layout/Header";
import { Provider } from "./provider";

export const metadata = {
  title: "SeekPlayer",
  description:
    "Web application to search for a professional counter-strike player",
  icons: {
    icon: [
      {
        url: "/icon.ico",
        href: "/icon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="font-gayathri">
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="max-w-7xl mx-auto p-4">{children}</main>
          <footer className="p-8 text-center text-textLigth dark:text-textDark mt-16">
            &copy; 2023 | Made by{" "}
            <a
              className="underline"
              target="_blank"
              href="https://twitter.com/professorbidou"
            >
              Professor
            </a>
          </footer>
        </Provider>
      </body>
    </html>
  );
}

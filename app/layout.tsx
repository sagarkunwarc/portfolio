import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sagar Kunwar - Software Engineer Portfolio",
  description:
    "A portfolio showcasing my skills and projects as a software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

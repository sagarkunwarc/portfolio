import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/header";
import { SmoothScrollContainer } from "./components/smooth-scroll-container";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Hero from "./page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sagar Kunwar - Software Engineer Portfolio",
  description:
    "A portfolio showcasing my skills and projects as a software engineer",
};

export default function RootLayout() {
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
          <main>
            <SmoothScrollContainer>
              <section id="home" className="h-screen snap-start">
                <Hero />
              </section>

              <section id="about" className="h-screen snap-start">
                <About />
              </section>

              <section id="skills" className="h-screen snap-start">
                <Skills />
              </section>

              <section id="contact" className="h-screen snap-start">
                <Contact />
              </section>
            </SmoothScrollContainer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

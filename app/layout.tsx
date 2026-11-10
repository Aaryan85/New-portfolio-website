import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { IntroProvider } from "@/components/animations/IntroProvider";
import FloatingNav from "@/components/navigation/FloatingNav";

export const metadata: Metadata = {
  title: "Aaryan Yadav — Full-Stack Developer",
  description:
    "Portfolio of Aaryan Yadav, third-year Computer Engineering student at TCET Mumbai. Full-Stack Developer specializing in scalable web systems, clean architecture, and modern interfaces.",
  keywords: [
    "Aaryan Yadav",
    "Full-Stack Developer",
    "Software Engineer",
    "TCET Mumbai",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "TraceBack",
    "FormFlow",
  ],
  authors: [{ name: "Aaryan Yadav" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" }
    ],
  },
  openGraph: {
    title: "Aaryan Yadav — Full-Stack Developer",
    description:
      "Engineering scalable web systems, runtime diagnostic platforms, and intuitive interfaces.",
    url: "https://aaryanyadav.dev",
    siteName: "Aaryan Yadav Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('aaryan-portfolio-theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
        <ThemeProvider>
          <IntroProvider>
            {children}
            <FloatingNav />
          </IntroProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/providers/next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryClientContextProvider from "@/providers/react-query";

const space_Grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientContextProvider>
        <body className={`${space_Grotesk.variable}`}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </body>
      </QueryClientContextProvider>
    </html>
  );
}

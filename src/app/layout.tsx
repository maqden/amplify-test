import "./globals.css";

import React from "react";
import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import {ThemeProvider} from "@/components/theme/theme-provider"
import ConfigureAmplifyClientSide from "@/components/amplify/configure";

const nunito = Nunito({subsets: ["latin"], variable: "--font-nunito",});

export const metadata: Metadata = {
    title: {template: '%s - MAQDEN', default: 'MAQDEN'},
    description: 'App exclusivo para uso de contas pertencentes ao domínio maqden.com.br',
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <ConfigureAmplifyClientSide/>

            <body className={nunito.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

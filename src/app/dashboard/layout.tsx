import React from "react";

export default function RootLayout({
    children,
    header,
    sidebar
}: Readonly<{
    children: React.ReactNode;
    header: React.ReactNode;
    sidebar: React.ReactNode;
}>) {
    return (
        <main>
            {header}
            {sidebar}
            {children}
        </main>
    );
}
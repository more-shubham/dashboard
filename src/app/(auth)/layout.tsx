import { Card } from "@/components/ui/card";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-svh flex justify-center items-center">
            <Card>
                {children}
            </Card>
        </main>
    );
}
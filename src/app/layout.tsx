import Nav from "./_components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="py-3 border-b">
          <Nav />
        </header>
        <main className="max-w-[1200px] mx-auto">{children}</main>
      </body>
    </html>
  );
}

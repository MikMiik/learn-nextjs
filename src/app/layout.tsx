import "./globals.css";
export const metadata = {
  title: "F8 - hoc lap trinh",
  description: "hoc lap trinh de di lam",
  openGraph: {
    images: ["https://fullstack.edu.vn/image/01.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

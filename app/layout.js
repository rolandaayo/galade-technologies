import "./globals.css";

export const metadata = {
  title: "Galade Technologies | Energy for what's next",
  description: "Professional solar installation designed for real life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

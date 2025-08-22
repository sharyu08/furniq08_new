import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata = {
  title: "My Store",
  description: "Furniture shopping site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />       {/* 👈 Always on top */}
        {children}       {/* 👈 Page content goes here */}
             {/* 👈 Always at bottom */}
      </body>
    </html>
  );
}


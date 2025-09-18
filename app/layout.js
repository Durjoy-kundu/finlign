import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Finlign",
  description: "One stop solution for all your financial needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
      {/* header */}
      {children}
      {/* footer */}
      <footer className="bg-blue-50">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>Made with ❤️ by Durjoy</p>
        </div>
      </footer>
      </body>
    </html>
  );
}

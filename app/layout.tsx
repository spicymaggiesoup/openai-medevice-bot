import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Support Your Health",
  description: "OpenAI Assistant를 적용한 메디바이스 MEDevice 서비스입니다.",
  icons: {
    icon: "/openai.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <a href="/" title="메인으로 이동하기"><img className="logo" src="/openai.svg" alt="Me Logo" /></a>
      </body>
    </html>
  );
}

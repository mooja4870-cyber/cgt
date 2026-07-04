import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CGT Lab — AI 양도소득세 1초 계산",
  description: "복잡한 양도소득세, 조건만 입력하면 1초 만에 계산완료. 1세대 1주택 비과세 판독부터 절세 시뮬레이션까지 지원합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "StayEasy | จองโรงแรมและที่พัก",
  description: "ค้นหาโรงแรมและจองที่พักได้ง่าย ๆ กับ StayEasy"
};

export default function RootLayout({ children }) {
  return <html lang="th"><body>{children}</body></html>;
}

import Link from "next/link";
import { Roboto , Noto_Sans_KR } from 'next/font/google';
const notoSansKr = Noto_Sans_KR({subsets:["latin"],weight:["100","400","700"]});
const roboto = Roboto({subsets:["latin"],weight:["100","400","700"],variable:"--roboto"});
import './globals.css'

export const metadata = {
  title: '브라우저 타이틀',
  description: '설명부분 입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <div>
            <Link href="/">홈</Link> | 
            <Link href="/lists">목록</Link> | 
            <Link href="/goods/item">상품상세</Link>
        </div>
        <div className="wrapper">
          <div>저는 루트 레이아웃 입니다.</div>
          <div className={roboto.className}>roboto font family</div>
          {children}
        </div>
      </body>
    </html>
  )
}

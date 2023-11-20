import Link from "next/link";
export const metadata = {
    title: '브라우저 타이틀33',
    description: '설명부분 입니다.',
  }

export default function Home() {
  return (
    <main>
      <h1>리스트페이지 입니다.</h1>
      <ul className="lists">
        <li><Link href="/goods/item">상품0</Link></li>
        <li><Link href="/goods/item">상품1</Link></li>
        <li><Link href="/goods/item">상품2</Link></li>
      </ul>
    </main>
  )
}

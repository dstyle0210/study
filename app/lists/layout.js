
import './lists.css'

export const metadata = {
  title: '브라우저 타이틀22',
  description: '설명부분 입니다.',
}

export default function ListsLayout({ children }) {
  return (
    <section>
        <p>lists 껍데기 입니다.</p>
        {children}
    </section>
  )
}

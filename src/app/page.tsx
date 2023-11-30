import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <h1>next.js</h1>
        <Link href='./samples/01'>sample01</Link>
        <Link href='./samples/02'>sample02</Link>
        <Link href='./samples/03'>sample03</Link>
      </div>
    </>
  )
}
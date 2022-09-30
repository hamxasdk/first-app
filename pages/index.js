import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const handleRoute = () => {
    router.push('/product')
  }
  return (
    <div className={styles.container}>
      Home Page
      <h1>
        <Link href="/blog">Blog</Link>
      </h1>
      <h1>
        <Link href="/product">Product</Link>
      </h1>
      <button onClick={handleRoute}>Place Your Order</button>
    </div>
  )
}

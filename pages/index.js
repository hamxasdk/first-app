import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      Home Page
      <h1>
        <Link href="/blog">Blog</Link>
      </h1>
      <h1>
        <Link href="/product">Product</Link>
      </h1>
    </div>
  )
}

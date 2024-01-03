"use client"
//"use client" pARA USAR EL CONSOLA DEL SERVIDOR
import styles from './page.module.css'

export default function Home() {
  console.log("Hola Mundo")
  return (
    <main className={styles.main}>
      <h1>Hola Mundo</h1>
    </main>
  )
}

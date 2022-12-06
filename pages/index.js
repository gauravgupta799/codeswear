import Heads from '../components/Head/Heads'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div >
     <Heads/>
      <main>
        <h1 className="text-right">Main Page</h1>
        <p className="text-lime-200">Hiii</p>
      </main>

      <footer >
       <h2>Footer</h2>
      </footer>
    </div>
  )
}

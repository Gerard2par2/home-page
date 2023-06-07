import Image from 'next/image'
import HomePage from './pages/home/HomePage'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen p-0 flex-col items-center justify-between">
      <HomePage></HomePage>      
    </main>
  )
}

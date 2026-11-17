import Header from './Layout/Header/Header'
import Hero from './Layout/Hero/hero'

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1232px] px-4">
        <Hero />
      </main>
    </>
  )
}

export default App
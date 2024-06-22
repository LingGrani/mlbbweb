import Header from './Header.jsx'
import Footer from './Footer.jsx'
import ListHeroMLBB from './List.jsx'

function App() {
  return (
  <>
    <Header/>
    <section className='hero-list'>
      <ul id="filter">
        <li className="active" data-category="all">All</li>
        <li data-category="tank">Tank</li>
        <li data-category="fighter">Fighter</li>
        <li data-category="assassin">Assassin</li>
        <li data-category="mage">Mage</li>
        <li data-category="marksman">Marksman</li>
        <li data-category="support">Support</li>
      </ul>
      <div className="hero">
        <ListHeroMLBB/>
      </div>
    </section>
    <Footer/>
  </>
  )
}

export default App

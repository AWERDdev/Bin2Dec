import './styles/App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
function App() {
  
  return (
    <>
      <div className="header">
        <NavBar/>
      </div>
    
      <div className="body">
     
        <Body/>
      </div>
     
    </>
  )
}

export default App


import './App.css'
import { Test } from './test.jsx'
function App() {

  return (
    <>
      <section id="center">
        <h1  className="Welcome" style={{fontFamily: 'Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif' , fontSize: '100px'}}>Welcome</h1>
        <h1  className="Welcome2" style={{fontFamily: 'Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif' ,}}>to</h1>
        <h1 className="Welcome3" style={{fontFamily: 'Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif' , fontSize: '100px'}}>My Page</h1>
        <h1 className="Main-Title"> What is this page? </h1>
        <p className="Main-Text"> This page is a simple React application that demonstrates the use of components, styling, and JSX. It serves as a basic template for building more complex applications in the future. The page includes a welcome message and a brief description of its purpose !!</p>
      </section>
    </>
  )
}

export default App


import './App.css'
import { Badge } from './badge.jsx'
function App() {

  return (
    <>
      <section id="center">
        <h1  className="Welcome" >Welcome</h1>
        <h1  className="Welcome2" >to</h1>
        <h1 className="Welcome3" >My Page</h1>
        <h1 className="Main-Title"> What is this page? </h1>
        <p className="Main-Text"> This page is a simple React application that demonstrates the use of components, styling, and JSX. It serves as a basic template for building more complex applications in the future. The page includes a welcome message and a brief description of its purpose !!</p>
      </section>
      <Badge />
    </>
  )
}

export default App

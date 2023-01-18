import './App.css'
import { ContentNotes, ExampleContainer, Note } from './components'
import { CounterApp } from './examples/CounterApp'
import { reactNote, reduxToolkitNote } from './notes/mainNotes'

function App() {

  return (
    <div className="App">
      <header>
        <a href={reactNote.link} target="_blank" className='animate_rotate'>
          <img src={reactNote.logo} className="logo" alt="React logo" />
        </a>
        <a href={reduxToolkitNote.link} target="_blank" className='animate_rotate'>
          <img src={reduxToolkitNote.logo} className="logo" alt="Redux logo" />
        </a>
        <h1>React.js + Redux Toolkit</h1>
        <ContentNotes>
          <Note note={reactNote} />
          <Note note={reduxToolkitNote} />
        </ContentNotes>
      </header>
      <main>
        <ExampleContainer children={<CounterApp />}/>
      </main>
    </div>
  )
}

export default App

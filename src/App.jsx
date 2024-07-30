import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import linktree from './Components/linktree'


function App() {

return (
<BrowserRouter>
    <Routes>
      <Route path='/' Component={linktree}> </Route>
      <Route path='/linktree' Component={linktree}></Route>
      </Routes>
</BrowserRouter>
)
}

export default App
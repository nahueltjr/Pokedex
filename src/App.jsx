import { HashRouter, Routes, Route } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import InputName from './components/InputName'
import PokemonDetail from './components/PokemonDetail'
import Config from './components/Config'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputName/>}/>
        <Route element={<ProtectedRoutes />}>
				  <Route path='/pokemons' element={<Pokemons/>}/>
          <Route path='/pokemons/:id' element={<PokemonDetail/>}/>  
			  </Route>
        <Route path='/config' element={<Config/>}/>	 
      </Routes>
    </HashRouter>
  )
}

export default App

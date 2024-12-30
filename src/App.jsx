import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PaginaRegistro from './pages/registro'
import PaginaLogin from './pages/login'
import './index.css';
import HomePage from './pages/home';
import Turnos from './pages/turnos';
import CrearTurno from './pages/crearTurno';
import TurnoPorDia from './pages/turnoPorDia';
import EliminarTurno from './pages/deleteTurno';





function App() {
  return (
       <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<PaginaLogin/>}/>
      <Route path='/registro' element={<PaginaRegistro/>}/>
      <Route path='/turnos' element={<Turnos/>}/>
      <Route path='/crearTurno' element={<CrearTurno/>}/>
      <Route path='/turnosPorDia' element={<TurnoPorDia/>}/>
      <Route path='/borrarTurno' element={<EliminarTurno/>}/>
      <Route path='/profile' element={<h1>Perfil</h1>}/>
    </Routes>
   </BrowserRouter>

  )
}

export default App

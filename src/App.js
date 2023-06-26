import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPatient from "./Patient/Cadastro";
import CadastroDoctor from './Doctor/Cadastro';
import LoginDoctor from './Doctor/Login';
import LoginPatient from "./Patient/Login";
import Choice from './Choice';
import AppointmentPatient from './Patient/Appointments';
import {AuthProvider} from "./auth"
import Scheduled from './Patient/Schedules';


function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Choice />}/>
            <Route path="/doctor" element={<LoginDoctor />} />
            <Route path="/doctor/signup" element={<CadastroDoctor />} />
            <Route path="/patient" element={<LoginPatient/>}/>
            <Route path="/patient/signup" element={<CadastroPatient />} />
            <Route path="/patient/appointments" element={<AppointmentPatient />} />
            <Route path="/patient/scheduled" element={<Scheduled />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
   
  );
}

export default App;

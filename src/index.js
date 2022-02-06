import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header.jsx';
import CarnetdeNote from './pages/CarnetdeNote';
import reportWebVitals from './reportWebVitals';
import Statistiques from './pages/Statistiques';
import CreationNote from './pages/CreationNote';
<<<<<<< HEAD
import ListeCarnetNotes from './pages/ListeCarnetNotes';

=======
import Liste from './pages/Liste'
import ModifNote from './pages/ModifNote'
>>>>>>> bcf197a5a2f74187e94d484338045acc567b9314
ReactDOM.render(
  <React.StrictMode>
    <main>
    <Router>
    <Header/>

    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/CarnetdeNote" element={<CarnetdeNote />}/>
      <Route path="/Statistiques" element={<Statistiques />}/>
      <Route path="/CreationNote" element={<CreationNote />}/>
<<<<<<< HEAD
      <Route path="/ListeCarnetNotes" element={<ListeCarnetNotes />}/>
=======
      <Route path="/Liste" element={<Liste/>}/>
      <Route path="/ModifNote/:id" element={<ModifNote/>}/>
>>>>>>> bcf197a5a2f74187e94d484338045acc567b9314
    </Routes>
    </Router>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

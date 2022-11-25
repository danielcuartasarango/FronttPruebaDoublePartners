import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Formulario from './componentes/Formulario';
import Persona from './componentes/Persona';
import Usuario from './componentes/Usuario';


ReactDOM.render(
	<React.StrictMode>
		
		<div className='contenedor'>
			<Persona/>
			<Usuario/>
		</div>
		<div className='contenedor' >
			<Formulario />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);
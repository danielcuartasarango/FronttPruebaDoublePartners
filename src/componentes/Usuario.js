import React from 'react';
import { Formik } from 'formik';
import {axios} from 'axios';


const baseUrl="https://localhost:44396//api/Users/Registrer";



const Usuario = () => {


	
	return (
		<>
		<Formik

			initialValues={{
				user:'',
				password:'',
			}}
			validate={(valores) => {
				let errores = {};
				if (!valores.user){
					errores.user = "Ingrese un nombre de usuario"

				}else if(!/^[a-zA-Z\s]{1,40}$/.test(valores.user)){
					errores.user = "EL nombre solo puede contener letras"
				}

				if (!valores.password){
					errores.password = "Ingrese su contraseña"

				}else if(!/^[a-zA-Z0-9]{1,40}$/.test(valores.password)){
					errores.password = "la contraseña solo puede tener numeros y letras"
				}
				return errores;
			}}
			onSubmit={async (valores, {resetForm})=>{
				resetForm()

				console.log(valores);

				var data = {};
				data.user = valores.user;
				data.password = valores.password
				var solicitud = JSON.stringify(data);
				console.log(solicitud);
				
				
				const grabar = async (solicitud) => {
					
					return await fetch(baseUrl,{
						method : 'POST',
						headers : {
							'Content-Type' : 'application/json'
						},
						body : solicitud
					});
				};
				await grabar()
				
				

				
				console.log('Formulario enviado')
			}}		
		
		>

		{({errors, values,touched, handleSubmit,handleChange,handleBur})=>(
			<form className='formulario' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='user'>Nombre de usuario</label>
					<input type='text'
					 id='user' 
					 name='user' 
					 placeholder='Nombre de usuario'
					 value={values.usuario}
					 onChange={handleChange}
					 onBlur={handleBur}
					 />
					 { errors.user && <div className="error">{errors.user}</div>}
				</div>
				<div>
					<label htmlFor='password'>Contraseña</label>
					<input type='text' 
					id='password' 
					name='password' 
					placeholder="Contraseña"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBur}
				/>
				
				{ errors.password && <div className="error">{errors.password}</div>}
				</div> 
				<button type='submit'>Crear usuario</button>
			</form>
		)}
		

		</Formik>
			
				
		</>
	);
}
 
export default Usuario;
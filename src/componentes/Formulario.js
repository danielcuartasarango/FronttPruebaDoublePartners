import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {
	const baseUrl="https://localhost:44396//api/Users/Login";

	
	return (
		<>
		<Formik

			initialValues={{
				usuario:'',
				password:''
			}}
			validate={(valores) => {
				let errores = {};
				if (!valores.usuario){
					errores.usuario = "Ingrese un nombre de usuario"

				}else if(!/^[a-zA-Z\s]{1,40}$/.test(valores.usuario)){
					errores.usuario = "EL nombre solo puede contener letras"
				}

				if (!valores.password){
					errores.password = "Ingrese su contraseña"

				}else if(!/^[a-zA-Z0-9]{1,40}$/.test(valores.password)){
					errores.password = "la contraseña solo puede tener numeros y letras"
				}
				return errores;
			}}
			onSubmit={(valores, {resetForm})=>{
				resetForm()
				console.log(valores);
				var data = {};
				data.user = valores.usuario;
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
				 grabar()
				console.log('Formulario enviado')
			}}		
		>
		{({errors, values,touched, handleSubmit,handleChange,handleBur})=>(
			<form className='formulario' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='usuario'>Nombre de usuario</label>
					<input type='text'
					 id='usuario' 
					 name='usuario' 
					 placeholder='Nombre Usuario'
					 value={values.usuario}
					 onChange={handleChange}
					 onBlur={handleBur}
					 />
					 { errors.usuario && <div className="error">{errors.usuario}</div>}
				</div>
				<div>
					<label htmlFor='password'>Contraseña</label>
					<input type='password' 
					id='password' 
					name='password' 
					placeholder="Contraseña"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBur}
				/>
				
				{ errors.password && <div className="error">{errors.password}</div>}
				</div> 
				<button type='submit'>Iniciar Sesion</button>
			</form>
		)}
		

		</Formik>
			
				
		</>
	);
}
 
export default Formulario;
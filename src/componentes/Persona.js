import React from 'react';
import { Formik } from 'formik';

const Persona = () => {
	const baseUrl="https://localhost:44396//api/p";
	
	return (
		<>
		<Formik

			initialValues={{

				nombres:'',
				apellidos:'',
                email:'',
                numerodocumento:'',
                tipodocumento:'CC'
			}}
			validate={(valores) => {
				let errores = {};
				if (!valores.nombres){
					errores.nombres = "Ingrese su o sus nombres"

				}else if(!/^[a-zA-Z\s]{1,40}$/.test(valores.nombres)){
					errores.nombres = "EL nombre solo puede contener letras"
				}
				if (!valores.apellidos){
					errores.apellidos = "Ingrese su contraseña"

				}else if(!/^[a-zA-Z]{1,40}$/.test(valores.apellidos)){
					errores.apellidos = "los apellidos solo pueden tener letras"
				}
                if (!valores.email){
					errores.email = "Ingrese su email"

				}
                if (!valores.numerodocumento){
					errores.numerodocumento = "Ingrese su contraseña"

				}else if(!/^[a-zA-Z0-9]{1,40}$/.test(valores.numerodocumento)){
					errores.email = "la contraseña solo puede tener numeros y letras "
				}
				return errores;
			}}
			onSubmit={(valores, {resetForm})=>{
				resetForm()

				console.log(valores);

				var data = {};
				data.nombres = valores.nombres;
				data.apellidos = valores.apellidos;
				data.tipodocumento = valores.tipodocumento;
				data.numeroidentificacion = valores.numerodocumento;
				data.fechacreacion= Date.now();
				var solicitud = JSON.stringify(data);
				console.log(solicitud)

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
					<label htmlFor='nombres'>Nombres</label>
					<input type='text'
					 id='nombres' 
					 name='nombres' 
					 placeholder='Nombres'
					 value={values.nombres}
					 onChange={handleChange}
					 onBlur={handleBur}
					 />
					 { errors.nombres && <div className="error">{errors.nombres}</div>}
				</div>
				<div>
					<label htmlFor='apellidos'>Apellidos</label>
					<input type='text' 
					id='apellidos' 
					name='apellidos' 
					placeholder="Apellidos"
					value={values.apellidos}
					onChange={handleChange}
					onBlur={handleBur}
				/>

				
				{ errors.apellidos && <div className="error">{errors.apellidos}</div>}
				</div>
                <div>
					<label htmlFor='email'>Email</label>
					<input type='email'
					 id='email' 
					 name='email' 
					 placeholder='Email'
					 value={values.email}
					 onChange={handleChange}
					 onBlur={handleBur}
					 />
					 { errors.email && <div className="error">{errors.email}</div>}
				</div>
                <div>
					<label htmlFor='numerodocumento'>Numero Identificacion</label>
					<input type='text'
					 id='numerodocumento' 
					 name='numerodocumento' 
					 placeholder='Numero de identidad'
					 value={values.numerodocumento}
					 onChange={handleChange}
					 onBlur={handleBur}
					 />
					 { errors.numerodocumento && <div className="error">{errors.numerodocumento}</div>}
				</div>
                <div>
					<label htmlFor='tipodocumento'>Tipo Documento</label>
					
					<input type='text'
					 id='tipodocumento' 
					 name='tipodocumento' 
					 placeholder='CC'
					 value={values.tipodocumento}
					 onChange={handleChange}
					 onBlur={handleBur}
					 />
					 { errors.tipodocumento && <div className="error">{errors.tipodocumento}</div>}
				</div>
				<button type='submit'>Registrar persona</button>
			</form>
		)}
		

		</Formik>
			
				
		</>
	);
}
 
export default Persona;
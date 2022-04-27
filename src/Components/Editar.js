import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


export const Editar = ({ handleUpdate }) => {

    const navigate = useNavigate();
    const location = useLocation();

	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');
    const [tienda, setTienda] = useState('');
	const [description, setDescription] = useState('');

	



	const handleSubmit = (e) => {
		e.preventDefault();
		
		if(name===''|| price === '' || quantity === '' || tienda === '' || description === ''){
			alert('Debes llenar todos los campos!');
			return;
		}

		const infoForm = {
			id: location.state.producto.id,
			name,
			price,
			quantity,
            tienda,
			description,
		};

		handleUpdate(infoForm);

		setName('');
		setPrice('');
		setQuantity('');
        setTienda('');
		setDescription('');

		navigate('/');
	};

	return (
		<>
			<div className='cajaFormulario'>
				<h2>Editar productos</h2>
				<button type='button' onClick={() => navigate('/')} >
					Regresar a formulario
				</button>
				<form onSubmit={handleSubmit}>
					<section>
						<label>Ingrese nombre</label>
						<input
							type="text"
							placeholder="Nombre"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
					</section>

					<section>
						<label>Ingrese precio</label>
						<input
							type="text"
							placeholder="Precio"
							onChange={(e) => setPrice(e.target.value)}
							value={price}
						/>
					</section>

					<section>
						<label>Ingrese cantidad</label>
						<input
							type="text"
							placeholder="Cantidad"
							onChange={(e) => setQuantity(e.target.value)}
							value = {quantity}
						/>
					</section>


                    <section>
						<label>Ingrese tienda</label>
						<input
							type="text"
							placeholder="Tienda"
							onChange={(e) => setTienda(e.target.value)}
							value = {tienda}
						/>
					</section>


					<section>
						<label>Ingrese descripcion</label>
						<textarea
							type="text"
							placeholder="Descripcion"
							onChange={(e) => setDescription(e.target.value)}
							value = {description}
						/>
					</section>

					<section>
						<input type="submit" value="Enviar" />
					</section>
				</form>
			</div>
		</>
	);
};


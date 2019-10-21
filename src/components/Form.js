import React from 'react';
import useForm from "./useForm";

	const Form = _ => {
		const { values, handleChange, handleSubmit } = useForm(login);
		function login() {
			alert(values.param);
		}
	return (
		<form role="search" className="search" onSubmit={handleSubmit}>
			<input placeholder="Nunca dejes de buscar"
				   name="param"
				   onChange={handleChange}
				   value={values.param} required />
			<button type="submit" className="button is-block is-info is-fullwidth">Search</button>
		</form>
	);
};

export default Form;
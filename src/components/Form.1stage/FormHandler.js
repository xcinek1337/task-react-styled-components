/* eslint-disable no-console */
import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import validate from './helper';

import './form1stage.css';

const FormHandler = props => {
	const { fieldsList } = props;

	const init = {};

	fieldsList.forEach(({ name, defaultValue }) => {
		init[name] = defaultValue;
	});

	function reducer(state, action) {
		switch (action.type) {
			case 'change': {
				return { ...state, [action.key]: action.value };
			}
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, init);
	const [errors, setErrors] = useState([]);

	function renderFieldList() {
		return fieldsList.map(({ name, type }) => {
			let tag;

			tag = (
				<input
					className='form__input'
					onChange={e => dispatch({ type: 'change', key: name, value: e.target.value })}
					type={type}
					name={name}
					id={name}
					value={state[name]}
				/>
			);

			return (
				<div>
					<label className='form__label' htmlFor={name}>
						{name}
						{tag}
					</label>
				</div>
			);
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		const validationErrors = validate(fieldsList, state);

		if (validationErrors.length === 0) {
			props.onSubmit();
		} else {
			setErrors(validate(fieldsList, state));
		}
	}

	function renderErros() {
		return (
			errors.length > 0 && (
				<ul>
					{errors.map(message => (
						<li>{message}</li>
					))}
				</ul>
			)
		);
	}

	return (
		<form className='form' onSubmit={handleSubmit}>
			{renderErros()}
			{renderFieldList()}
			<div>
				<input className='form__submit' type='submit' />
			</div>
		</form>
	);
};

FormHandler.propTypes = {
	fieldsList: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			type: PropTypes.string,
			defaultValue: PropTypes.string,
		})
	).isRequired,
};

export default FormHandler;

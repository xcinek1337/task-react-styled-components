import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import validate from './helper';

import { Root, FormInput, FormLabel, FormSubmit } from './FormHandler.styled';

// import './form1stage.css';

const FormHandler = props => {
	const { fieldsList } = props;

	function reducer(state, action) {
		switch (action.type) {
			case 'change': {
				return { ...state, [action.key]: action.value };
			}
			case 'init': {
				return { ...state, ...action.data };
			}
			default:
				return state;
		}
	}

	const init = {};
	fieldsList.forEach(({ name, defaultValue }) => {
		init[name] = defaultValue;
	});

	const [state, dispatch] = useReducer(reducer, init);
	const [errors, setErrors] = useState([]);

	function renderFieldList() {
		return fieldsList.map(({ name, type }) => {
			const value = state[name];
			const error = errors[name];

			const inputClasses = `form__input ${error ? 'form__input--error' : ''}`;

			return (
				<div>
					<FormLabel className='form__label' htmlFor={name}>
						{name}
						<FormInput
							placeholder='Write here...'
							className={inputClasses}
							onChange={e => dispatch({ type: 'change', key: name, value: e.target.value })}
							type={type}
							name={name}
							id={name}
							value={value}
						/>
					</FormLabel>
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
			const errorObject = {};
			validationErrors.forEach(error => {
				const fieldName = error.split(' ')[1];
				errorObject[fieldName] = error;
			});
			setErrors(errorObject);
		}
	}

	function renderErros() {
		return (
			errors.length > 0 && (
				<ul className='form__error-list'>
					{errors.map(message => (
						<li className='form__error-item' key={message}>
							{message}
						</li>
					))}
				</ul>
			)
		);
	}

	useEffect(() => {
		const sessionData = localStorage.getItem('formState');
		if (sessionData) {
			const storedState = JSON.parse(sessionData);
			dispatch({ type: 'init', data: storedState });
		}
	}, []);

	useEffect(() => {
		const formState = {};
		fieldsList.forEach(({ name }) => {
			formState[name] = state[name];
		});
		localStorage.setItem('formState', JSON.stringify(formState));
	}, [fieldsList, state]);

	return (
		<Root>
			<form className='form' onSubmit={handleSubmit}>
				{renderErros()}
				{renderFieldList()}
				<div>
					<FormSubmit>
						{'>'}
					</FormSubmit>
				</div>
			</form>
		</Root>
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

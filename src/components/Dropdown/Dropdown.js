import React from 'react';

import { StyleDropdown, StyleUlList } from './Dropdown.styled';

const Dropdown = ({ trigger, menu }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<StyleDropdown>
			{React.cloneElement(trigger, {
				onClick: handleOpen,
				onBlur: handleOpen,
			})}
			{open ? (
				<StyleUlList className='menu'>
					{menu.map((menuItem, index) => (
						<li key={index} className='menu-item'>
							{React.cloneElement(menuItem, {
								onClick: () => {
									menuItem.props.onClick();
									setOpen(false);
								},
							})}
						</li>
					))}
				</StyleUlList>
			) : null}
		</StyleDropdown>
	);
};

export default Dropdown;

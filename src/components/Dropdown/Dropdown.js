import React from 'react';

import { StyleDropdown, StyleUlList, StyleLiItem } from './Dropdown.styled';

const Dropdown = ({ trigger, menu, setTxt }) => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(!open);
	};
	const setSelect = textContent => {
		setTxt(textContent);
	};

	return (
		<StyleDropdown>
			{React.cloneElement(trigger, {
				onClick: handleOpen,
			})}
			{open ? (
				<StyleUlList>
					{menu.map((menuItem, index) => (
						<StyleLiItem key={index}>
							{React.cloneElement(menuItem, {
								onClick: e => {
									setSelect(e.target.textContent);
									setOpen(false);
								},
							})}
						</StyleLiItem>
					))}
				</StyleUlList>
			) : null}
		</StyleDropdown>
	);
};

export default Dropdown;

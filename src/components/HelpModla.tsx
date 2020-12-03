import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
const HelpModal: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
	const [open, setOpen] = useState(isOpen);
	const onCloseModal = () => setOpen(false);
	return (
		<Modal open={open} onClose={onCloseModal} center closeIcon={<span></span>}>
			hello
		</Modal>
	);
};

export default HelpModal;

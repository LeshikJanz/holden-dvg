import React from 'react';
import Modal from 'react-modal';
import css from 'services/cssService';
import styles from 'template/components/Modal/ModalComponent.scss';

const ModalComponent = (props) => (
  <Modal
    {...props}
    style={{
      content: { zIndex: 5 },
    }}
    className={{
      base: props.styles.base,
      afterOpen: props.styles.afterOpen,
      beforeClose: props.styles.beforeClose,
    }}
    overlayClassName={{
      base: props.styles.overlayBase,
    }}
  >
    {props.children}
  </Modal>
);

ModalComponent.propTypes = {
};

export default css(ModalComponent, styles);

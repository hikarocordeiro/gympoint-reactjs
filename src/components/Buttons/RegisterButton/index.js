import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd } from 'react-icons/md';

import { Button } from './styles';

export default function RegisterButton({ onClick }) {
  return (
    <>
      <Button type="button" onClick={() => onClick()}>
        <MdAdd size={23} color="#FFF" />
        <strong>CADASTRAR</strong>
      </Button>
    </>
  );
}

RegisterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

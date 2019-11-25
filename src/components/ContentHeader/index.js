import React from 'react';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Container, BackButton, SaveButton } from './styles';

export default function ContentHeader({ title, onClickBack }) {
  return (
    <Container>
      <strong>{title}</strong>
      <aside>
        <BackButton type="button" onClick={onClickBack}>
          <MdKeyboardArrowLeft size={23} color="#FFF" />
          <strong>VOLTAR</strong>
        </BackButton>
        <SaveButton type="submit">
          <MdCheck size={23} color="#FFF" />
          <strong>SALVAR</strong>
        </SaveButton>
      </aside>
    </Container>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClickBack: PropTypes.func.isRequired,
};

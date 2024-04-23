import { useState } from 'react';

import ReactModal from 'react-modal';

import { Button } from 'codieweb/dist/cjs/components/data/simple-button';

import * as S from './styles';

export function CookiesModal() {
  const [modal, setModal] = useState(true);
  function handleOpen() {
    setModal(true);
  }

  function handleClose() {
    setModal(false);
  }

  const modalText = `Aviso de Cookies:<div class="line"></div>
  Quando você acessa este site, podem vir a ser coletados alguns dados relacionados ao seu dispositivo, bem como cookies, a fim de que possamos operacionalizar os nossos sistemas e fornecer conteúdos personalizados para você. Para saber mais sobre cookies acesse a nossa <a href="" class="link">Política de Privacidade</a>.<div class="line"></div> Para aceitar, clique no botão "Aceitar Cookies", ou, caso não aceite, <a href="" class="link">marque aqui</a> suas preferências`;

  return (
    <ReactModal
      isOpen={modal}
      onAfterOpen={handleOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      style={S.customStyles}
    >
      <S.CookiesModal>
        <div
          className="paragraph-4"
          dangerouslySetInnerHTML={{ __html: modalText }}
        />

        <button className="link-1 button" onClick={handleClose}>
          Aceitar Cookies
        </button>
      </S.CookiesModal>
    </ReactModal>
  );
}

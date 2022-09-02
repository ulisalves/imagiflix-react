import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const today = new Date();

  return (
    <footer className='mt-32 px-12 pb-4 text-gray-600 text-sm'>
      <FontAwesomeIcon className='mr-4 hover:text-white cursor-pointer' icon={faFacebookSquare} size='2x'/>
      <FontAwesomeIcon className='mr-4 hover:text-white cursor-pointer' icon={faInstagram} size='2x'/>
      <FontAwesomeIcon className='mr-4 hover:text-white cursor-pointer' icon={faTwitter} size='2x'/>
      <FontAwesomeIcon className='mr-4 hover:text-white cursor-pointer' icon={faYoutube} size='2x'/>
      <div className='grid grid-cols-4 gap-2 my-8'>
        <p className='hover:text-white' >Idiomas e legendas</p>
        <p className='hover:text-white' >Audiodescrição</p>
        <p className='hover:text-white' >Centro de ajuda</p>
        <p className='hover:text-white' >Cartão pré-pago</p>
        <p className='hover:text-white' >Imprensa</p>
        <p className='hover:text-white' >Relação com investidores</p>
        <p className='hover:text-white' >Carreiras</p>
        <p className='hover:text-white'>Termos de uso</p>
        <p className='hover:text-white' >Privacidade</p>
        <p className='hover:text-white' >Avisos legais</p>
        <p className='hover:text-white' >Preferências de cookies</p>
        <p className='hover:text-white' >Informações corporativas</p>
        <p className='hover:text-white' >Entre em contato</p>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
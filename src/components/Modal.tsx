import React from 'react';
import emitter from '../utils/eventEmitter';
import CONST from './data/contants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Score from './Score';

const Modal = ({poster_path, title, original_title, name, original_name, overview, vote_average, runtime, number_of_seasons, }: any) => {
    const { IMAGEURL} = CONST;

    const handleClick = () => {
    emitter.emit(CONST.EVENTS.ModalClose);
  }; 
    return (
        <div className='fixed top-0 left-0 z-10 p-12 w-full h-screen grid place-items-center'>
            <article className='w-full h-full grid grid-flow-col auto-cols-max p-8 bg-black shadow-lg opacity-90'>
                <img className='w-4/5 h-full' src={`${IMAGEURL}/w500/${poster_path}`} alt={title ? title : name} />
                <div className='relative'>
                    <FontAwesomeIcon
                        className='fixed cursor-pointer absolute top-0 left-full text-red-600'
                        icon={faTimesCircle}
                        size='2x'
                        onClick={handleClick}
                    />
                    <h2 className='text-3xl font-bold p-4'>{title ? title : name}</h2>
                    <h6 className='font-bold italic'>{original_name? original_title : original_name}</h6>
                    <p className='fixed p-16 left-96 grid place-items-center'>{overview}</p>
                    <Score value={vote_average} />
                    <span className='bg-red-600 rounded py-2 px-4 ml-2'>{runtime ? `${runtime} min` : `${number_of_seasons} temporadas`}</span>
                </div>
            </article>
        </div>
    )
};

export default Modal;
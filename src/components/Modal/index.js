import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLaptop, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ onClose, currentWork }) => {
    const {image, name, tools, app} = currentWork;

    const bottomRef = useRef(null);

    const jumpToBottom = () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className='modal-screen'>
            <div className='modal-close' onClick={onClose}></div>
            <div className='modal-container'>
                <div className='modal-image-container'>
                    <section>
                        <span className='exit-icon' onClick={onClose}><FontAwesomeIcon icon={faXmark} size="2x" /></span>
                        <span className='down-arrow-icon' onClick={jumpToBottom}><FontAwesomeIcon icon={faChevronDown} size="2x" /></span>
                    </section>
                    <img
                        src={require(`../../assets/images/websites/${image}`)}
                        alt={name}
                        className="modal-image"                
                    />
                </div>
                <section className='row modal-text m-0 p-4' ref={bottomRef}>
                    <div className='col-12 text-center mb-3 modal-title'>
                        <h3>{name}</h3>
                    </div>
                    <div className='col-md-8'>
                        <h4>Tools</h4>
                        <p>{tools}</p>
                    </div>
                    <div className='col-md-4 text-md-right text-center modal-links'>                        
                        <a href={app} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLaptop} size="2x" />
                        </a>
                    </div>
                    
                </section>
            </div>
        </div>
  );
}

export default Modal;
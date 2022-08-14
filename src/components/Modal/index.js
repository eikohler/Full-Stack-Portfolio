import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Modal = ({ onClose, currentWork }) => {
    const {image, name, tools, app, github, summaryPoints} = currentWork;

    const bottomRef = useRef(null);

    const jumpToBottom = () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div className='modal-screen'>
            <div className='modal-close' onClick={onClose}></div>
            <div className='modal-container'>
                <div className='modal-image-container'>
                    <section><span onClick={jumpToBottom}><FontAwesomeIcon icon={faChevronDown} size="2x" /></span></section>
                    <img
                        src={require(`../../assets/gifs/${image}`)}
                        alt={name}
                        className="modal-image"                
                    />
                </div>
                <section className='row modal-text m-0 p-4' ref={bottomRef}>
                    <div className='col-md-8'>
                        <h4>Tools</h4>
                        <p>{tools}</p>
                    </div>
                    <div className='col-md-4 text-right'>
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href={app} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLaptop} size="2x" />
                        </a>
                    </div>
                    <div className='col-12 mt-4'>
                        <h4>Summary</h4>
                        <ul>
                            {summaryPoints.map((point, i) => (
                                <li key={i}>
                                    <p key={i+" text"}>{point}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </div>
  );
}

export default Modal;
import React from 'react';

const Modal = ({ onClose, currentWork }) => {
    const {image, name, tools, app, github, summaryPoints} = currentWork;

    return (
        <div className='modal-screen'>
            <div className='modal-close' onClick={onClose}></div>
            <div className='modal-container'>
                <img
                    src={require(`../../assets/gifs/${image}`)}
                    alt={name}
                    className="modal-image"                
                />
                <section className='row modal-text m-0 p-4'>
                    <div className='col-md-8'>
                        <h4>Tools</h4>
                        <p>{tools}</p>
                    </div>
                    <div className='col-md-4 text-right'>
                        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={app} target="_blank" rel="noopener noreferrer">App</a>
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
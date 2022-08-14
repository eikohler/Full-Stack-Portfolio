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
                <section className='row modal-content'>
                    <div className='col-md-8'>
                        <h4>Tools</h4>
                        <p>{tools}</p>
                    </div>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-12'>

                    </div>
                </section>
            </div>
        </div>
  );
}

export default Modal;
import React from 'react';
import Docencia from '../assets/certificado_docente.png'
import Front_End from '../assets/certificado_front-end.png'
import './Certificates.css'


const Certificates = () => {
    //Datos de cada cards que represente un certificado
    const certificados = [
        {
            id: 1,
            image: Docencia,
            title: 'Docente en desarrollo web',
            description: '2023',
            certificateLink: 'https://media.licdn.com/dms/document/media/D4D2DAQEqvR08X-EBdg/profile-treasury-document-pdf-analyzed/0/1682508217220?e=1701302400&v=beta&t=E84MLS-ydH_8srMSmxLPyeHnghuyVKma6KwXvcrMLjQ',
        },
        {
            id: 2,
            image: Front_End,
            title: 'Diplomatura front-end',
            description: '2022',
            certificateLink: 'https://media.licdn.com/dms/document/media/C4D2DAQE4ofDCKK9RlQ/profile-treasury-document-pdf-analyzed/0/1671664600121?e=1701302400&v=beta&t=ZnO_38oE4RuAJ6He_lWqnpTFgPjN3ZG48LXoXc5A69E'
        }
    ];
    //funcion parap oder abrir el certificado en otra pestaña
    const openCertificate = (link) => { // link ???? 
        window.open(link, '_blank')
    }
    return (
        <>
            <section className='certificates'>
                <h2 className="certificates-title">Certificados</h2>
                <div className="certificates-grid">
                    {/*Mapear cada certificado y crear una tarjeta para cada uno*/}
                    {certificados.map((certificate) => (
                        <div key={certificate.id} className='certificate-card'>
                            <img src={certificate.image} alt="" className='certificate-image' />
                            <h3 className="certificate-subtitle">{certificate.title}</h3>
                            <p className="certificate-description">{certificate.description}</p>
                            <button className='btn yellow-btn' onClick={() => openCertificate(certificate.certificateLink)}>
                                Ver certificado
                            </button>
                        </div>
                    ))

                    }
                </div>
            </section>


        </>
    )
}

export { Certificates }
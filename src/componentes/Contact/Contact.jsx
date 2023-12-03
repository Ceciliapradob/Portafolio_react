import React, { useRef } from 'react';
import emailjs, { sendForm } from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gqxkrid', 'template_z4s8kbw', form.current, 'YNeCEgdNT4Pg6aoun')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  //EXPLICACION 
  // const form = useRef(); // Crea una referencia al formulario
  // useRef permite acceder a elementos del DOM dentro de componentes 
  // funcionales y realizar operaciones sobre ellos

  // const sendEmail = (e) => {
  //   e.preventDefault(); // Previene el comportamiento por defecto del formulario al enviar
 // En el contexto de formularios HTML, por ejemplo, cuando un formulario 
 // se envía(submit), la página tiende a recargarse o 
 // redirigirse a la acción definida en el atributo action 
 // del formulario.El método preventDefault() evita este 
 // comportamiento predeterminado.

//  Esto evita que el formulario se envíe de la manera convencional 
//  (recargar la página o redirigir a una nueva página) y permite 
//  manejar la lógica personalizada de envío del formulario

//-------------------------
    //   // Envia el formulario utilizando emailjs
    //   emailjs.sendForm('service_gqxkrid', 'template_z4s8kbw', form.current, 'YNeCEgdNT4Pg6aoun')
    //     .then(
    //       (result) => {
    //         console.log(result.text); // Imprime en la consola el texto del resultado exitoso
    //       },
    //       (error) => {
    //         console.log(error.text); // Imprime en la consola el texto del error
    //       }
    //     );
    // };
    return(
      <>

        <section className="contact">
          <div className="contact-form">
            <h2>Contacto</h2>


            <form ref={form} onSubmit={sendEmail}>
              <div className='form-group'>
                <label>Nombre</label>
                <input type="text" name="user_name" />
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
              <div className='form-group'>
                <label>Mensaje</label>
                <textarea name="user_message" />
              </div>
              <input className='enviar' type="submit" value="Enviar" onSubmit={sendForm} />
            </form>
          </div>
        </section>
      </>
    )
}

export { Contact }
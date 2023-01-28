import React, { useState } from "react";
import "./Formulario.css"


const Formulario = () => {

    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        name:null,
        email: null,
        msn: null,
    });

   
     //Setea los valores que se ingresan en cada input
     const handleName = (e) => {
      const name = e.target.value;
      setUser({ ...user, name });
      setErrors({ ...errors, name: null });
    };
     const handleEmail = (e) => {
      const email = e.target.value;
      setUser({ ...user, email });
      setErrors({ ...errors, email: null });
    };

     //Validacion de campos
     const validate = (values) => {
      console.log("values", values)
      const error = {};

      if (values.name === null) error.name = "Este campo es obligatorio";              
      if (!values.email) error.email = "Este campo es obligatorio";
      else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      )
      error.email = "Email incorrecto";
      else error.email = null;
    
      if (values.msn === null) error.msn = "Este campo es obligatorio";
     
    
      setErrors(error);
      //si el campo esta vacio o hay error returna mensaje de info
      if (error.name || error.email || error.msn)
        return true;
      else return false;
    };

    const handleMsn = (e) => {
      const msn = e.target.value;
      setUser({ ...user, msn });
      setErrors({ ...errors, msn: null });
    };

         //valida los campos y envia la info 
         const sendMsn = (e) => {
          e.preventDefault();
          
          if (validate(user)) {
            return;
            
          }
        
          window.alert("La información se ha enviado correctamente")
        
        }
       

  return (
  <section className='formu'>
    <article className='form'>
        <h1>SUBSCRIBE</h1>
        <h6>to our newsletter</h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br>
           Quisquam eius possimus tempor incidunt.</p>
           <div className='container'>
                  <form className="contactForm">
                        <input
                            type="text"
                            placeholder="NAME"
                            autoFocus
                            name="name"
                            value={user.name || ""}
                            onChange={handleName}
                          />
                           {errors.name && (
                                <p className='warningError'>{errors.name}</p>
                            )}
                        <input
                            type="text"
                            placeholder="MAIL"
                            autoFocus
                            name="email"
                            value={user.email || ""}
                            onChange={handleEmail}
                          />
                           {errors.email && (
                                <p className='warningError'>{errors.email}</p>
                            )}
                         <textarea
                            rows={6} 
                            placeholder="MESSAGE"
                            autoFocus
                            name="msn"
                            value={user.msn || ""}
                            onChange={handleMsn}
                          />
                           {errors.msn && (
                                <p className='warningError'>{errors.msn}</p>
                            )}
                                     
                          <button className='searchBtn' onClick={sendMsn}>SEND MESSAGE</button>
                         
                    </form>

              </div>
    </article>
  </section>
  )
}

export default Formulario
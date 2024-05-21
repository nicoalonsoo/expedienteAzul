import React, { useState, useRef, useEffect } from "react";
import loading from "../../multimedia/load3.gif";
import logo from "../../multimedia/logo.png";
import email from "../../multimedia/email.svg";
import person from "../../multimedia/person.svg";
import phone from "../../multimedia/phone.svg";
import company from "../../multimedia/company.svg"
import { useHistory } from "react-router-dom";
import "./Registro.css";

const Registro = ({ actualizarEstado, countries }) => {
  const formRef = useRef(null);
  const history = useHistory();
  const [registro, setRegistro] = useState({
    FNAME: "",
    EMAIL: "",
    PHONE: "",
    MMERGE3: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    FNAME: "completar con su nombre",
    EMAIL: "completar email",
    PHONE: "colocar su numero",
    MMERGE3: "Colocar su empresa",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isComponentReady, setIsComponentReady] = useState(false);

  useEffect(() => {
    // Simulate loading resources
    const loadResources = async () => {
      // Simulate a resource loading delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsComponentReady(true);
    };

    loadResources();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
    validate({ ...registro, [name]: value });
  };

  const validate = (registro) => {
    let errors = {};
    if (!registro.FNAME) {
      errors.FNAME = "Llenar con su nombre";
    }
    if (!registro.MMERGE3) {
      errors.MMERGE3 = "Debes ingresar el nombre de su empresa.";
    }
    if (!registro.EMAIL) {
      errors.EMAIL = "Debes ingresar un Email.";
    }
    if (registro.EMAIL) {
      const EmailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!EmailRegex.test(registro.EMAIL)) {
        errors.EMAIL = "El email ingresado no es válido";
      }
    }
    if (!registro.PHONE) {
      errors.PHONE = "Debe ingresar su numero de celular.";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
      window.fbq("track", "CompleteRegistration");
      if (formRef.current) {
        formRef.current.submit();
      }
      Submit(e);
    } else {
      setFormSubmitted(true);
    }
  };

  const Submit = (e) => {
    const formDatab = new FormData();
    for (const key in registro) {
      formDatab.append(key, registro[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwtT4CFuW6ALlexD9PoyEaaXEIRu8DxD8chARER5GsMoVFD5GLcIEonjsUQokrjtriY/exec",
      {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });

      const form = e.target.closest('form');
      const formData = new FormData(form);
  
      fetch(form.action, {
        method: form.method,
        body: formData,
        mode: 'no-cors',
      })
        .then(() => {
          // Mostrar mensaje de éxito (puedes ajustar esto según tus necesidades)
          // const successResponse = document.getElementById('mce-success-response');
          // successResponse.style.display = 'block';
          // successResponse.textContent = 'Subscription successful! Thank you.';
  
          
          // setTimeout(() => {
          //   window.location.href = 'https://your-redirect-url.com'; 
          // }, 5000);
        })
        .catch(() => {
          // Manejo de error (puedes ajustar esto según tus necesidades)
          const errorResponse = document.getElementById('mce-error-response');
          errorResponse.style.display = 'block';
          errorResponse.textContent = 'Subscription failed. Please try again.';
        });


    setIsLoading(true);
    setRegistro({
      Name: "",
      Email: "",
      Phone: "",
    });
    actualizarEstado(false);
    history.push("/video");
    // actualizarEstado(true);
  };
  

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  if (!isComponentReady) {
    return (
      <div className="flex items-center justify-center w-[700px] max-h-[700px]">
        <img src={loading} alt="loading" className="max-w-[76px] max-h-[76px]" />
      </div>
    );
  }
  return (
    <div
      className="max-w-[1100px] flex items-center justify-center"
    >
        <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
          <button
            className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-2 right-0 mt-2 mr-2"
            onClick={() => handleClick(false)}
          >
            X
          </button>
          <div className="flex justify-center mb-2">
            <img src={logo} alt="Logo" className="w-30 h-20 p-0" />
          </div>
          <h1 className="font-catamaran text-lg md:text-2xl font-semibold text-center text-gray-900 mt-4 mb-12">
            INGRESA TUS DATOS PARA RECIBIR ACCESO
          </h1>

          <form className="max-w-[400px] sm:max-w-[700px] mx-auto"
           action="https://xpazul.us22.list-manage.com/subscribe/post?u=5bfe56f5b60b5aed537cf0588&amp;id=1e30ac2b95&amp;f_id=008dc9e1f0"
           method="post"
           id="mc-embedded-subscribe-form"
           name="mc-embedded-subscribe-form"
      
           target="_self"
           noValidate
          
          >
            <div className="mb-4">
              <input
                type="text"
                id="FNAME"
                name="FNAME"
                value={registro.FNAME}
                onChange={handleChange}
                placeholder="Ingresa tu Nombre y Apellido"
                className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                style={{
                  backgroundImage: `url(${person})`,
                  backgroundSize: "25px 25px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {formSubmitted && errors.FNAME && (
                <span className="text-red-500">{errors.FNAME}</span>
              )}
            </div>
            <div className="mb-4">
              <div className="flex max-h-[54px] ">
                <input
                  type="text"
                  id="PHONE"
                  name="PHONE"
                  value={registro.PHONE}
                  onChange={handleChange}
                  className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Tu número de teléfono..."
                  required
                  style={{
                    backgroundImage: `url(${phone})`,
                    backgroundSize: "25px 25px",
                    backgroundPosition: "5px center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              {formSubmitted && errors.PHONE && (
                <span className="text-red-500">{errors.PHONE}</span>
              )}
            </div>

            <div className="mb-4">
              <input
                type="Email"
                id="EMAIL"
                name="EMAIL"
                value={registro.EMAIL}
                onChange={handleChange}
                placeholder="Ingresá tu Correo electrónico"
                className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                style={{
                  backgroundImage: `url(${email})`,
                  backgroundSize: "25px 25px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {formSubmitted && errors.EMAIL && (
                <span className="text-red-500">{errors.EMAIL}</span>
              )}
            </div>

            <div className="mb-4">
            
              <input
                type="text"
                id="MMERGE3"
                name="MMERGE3"
                value={registro.MMERGE3}
                onChange={handleChange}
                placeholder="Ingrese el nombre de su empresa"
                className="input-f h-[40px] w-full px-4 pl-10 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                style={{
                  backgroundImage: `url(${company})`,
                  backgroundSize: "25px 25px",
                  backgroundPosition: "5px center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              {formSubmitted && errors.MMERGE3 && (
                <span className="text-red-500">{errors.MMERGE3}</span>
              )}
            </div>

            <div className="flex items-center justify-center mt-12">
              {isLoading ? (
                <img
                  src={loading}
                  alt="loading"
                  className="max-w-[76px] max-h-[76px]"
                />
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="button h-[54px] w-2/3 sm:w-48 bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-xl mx-auto block text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 hover:opacity-80"
                >
                  Ingresar mis datos
                </button>
              )}
            </div>
          </form>
          <div className="text-center"></div>
          <p className="text-xs text-gray-600 text-center mt-8">
            &copy; 2024 XpAzul
          </p>
        </div>
   
    </div>
  );
};

export default Registro;

// className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"

import React, { useState, useRef } from "react";
import axios from "axios";
import loading from "../../multimedia/load3.gif";
import logo from "../../multimedia/logo.png";
import country from "../../multimedia/country.svg";
import email from "../../multimedia/email.svg";
import person from "../../multimedia/person.svg";
import phone from "../../multimedia/phone.svg";
import company from "../../multimedia/company.svg";
import { eventLead } from "../../utils/pixelEvents/PixelEvents";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import "./Registro.css";
import { motion } from "framer-motion";
import MailchimpForm from "../Mailchimp";
const RegistroDisplayed = ({ actualizarEstado, countries }) => {
  const formRef = useRef(null);
  const history = useHistory();
  const [registro, setRegistro] = useState({
    FNAME: "",
    EMAIL: "",
    PHONE: "",
    MMERGE3: "",
    Country: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    FNAME: "completar con su nombre",
    EMAIL: "completar email",
    PHONE: "colocar su numero",
    MMERGE3: "Colocar su empresa",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      // eventLead(registro.email, registro.name);
      // window.fbq("track", "CompleteRegistration");
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

    const form = e.target.closest("form");
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      mode: "no-cors",
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
        const errorResponse = document.getElementById("mce-error-response");
        errorResponse.style.display = "block";
        errorResponse.textContent = "Subscription failed. Please try again.";
      });

    setIsLoading(true);
    setRegistro({
      Name: "",
      Email: "",
      Phone: "",
      CountryCode: "",
      Country: "",
    });
    actualizarEstado(false);
    history.push("/video");
    // actualizarEstado(true);
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  const selectedCountry = countries.find(
    (country) => country.code === registro.CountryCode
  );

  const placeholderHTML = `
    <img src="${phone}" alt="Phone Icon" style="width: 35px; height: 35px; vertical-align: middle;" />
    Tu número de teléfono...
  `;
  const cardVariants = {
    offscreen: {
      y: -150,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="max-w-[1100px] flex items-center justify-center"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="max-w-[700px] p-4 bg-white rounded-lg shadow-lg overflow-auto max-h-[700px] relative">
        <button
          className="bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out text-white font-semibold text-sm py-1 px-2 rounded absolute top-2 right-0 mt-2 mr-2"
          onClick={() => handleClick(false)}
          // style={{ marginLeft: "250px" }}
        >
          X
        </button>
        <div className="flex justify-center mb-2">
          <img src={logo} alt="Logo" className="w-30 h-20 p-0" />
        </div>
        <h1 className="font-catamaran text-lg md:text-2xl font-semibold text-center text-gray-900 mt-4 mb-12">
          INGRESA TUS DATOS PARA RECIBIR ACCESO
        </h1>

        <form
          className="max-w-[400px] sm:max-w-[700px] mx-auto"
          action="https://xpazul.us22.list-manage.com/subscribe/post?u=5bfe56f5b60b5aed537cf0588&amp;id=1e30ac2b95&amp;f_id=008dc9e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_self"
          noValidate
        >
          <div className="mb-4">
            {/* <label
              htmlFor="name"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Primer Nombre y Apellido
            </label> */}
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
            {/* <label
              htmlFor="phone"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Numero de telefono
            </label> */}
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
    </motion.div>
  );
};

export default RegistroDisplayed;

// className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"

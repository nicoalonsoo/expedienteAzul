import React, { useState } from "react";
import axios from "axios";
import loading from "../../multimedia/load3.gif";
import logo from "../../multimedia/log.png";
import country from "../../multimedia/country.svg";
import email from "../../multimedia/email.svg";
import person from "../../multimedia/person.svg";
import phone from "../../multimedia/phone.svg";
import { eventLead } from "../../utils/pixelEvents/PixelEvents";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import "./Registro.css";
import { motion } from "framer-motion";
const Registro = ({ actualizarEstado, countries }) => {
  const history = useHistory();
  const [registro, setRegistro] = useState({
    Name: "",
    Email: "",
    Phone: "",
    CountryCode: null,
    Country: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    Name: "completar con su nombre",
    Email: "completar email",
    Phone: "colocar su numero",
    CountryCode: "colocar Country Code",
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
  // const handleCountryChange = (e) => {
  //   const code = e.target.value;
  //   setRegistro({
  //     ...registro,
  //     countryCode: code,
  //   });
  //   validate({ ...registro, countryCode: code });
  // };

  const validate = (registro) => {
    let errors = {};
    if (!registro.Name) {
      errors.Name = "Llenar con su nombre";
    }
    if (!registro.Email) {
      errors.Email = "Debes ingresar un Email.";
    }
    if (registro.Email) {
      const EmailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!EmailRegex.test(registro.Email)) {
        errors.Email = "El email ingresado no es válido";
      }
    }
    if (!registro.Phone) {
      errors.Phone = "Debe ingresar su numero de celular.";
    }
    if (!registro.CountryCode) {
      errors.Phone = "Debe ingresar el código de su pais.";
    }
    if (!registro.CountryCode && !registro.Phone) {
      errors.Phone = "Debe ingresar su pais y su numero de celular.";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
      // eventLead(registro.email, registro.name);
    
    
      Submit();
      // axios
      //   .post("/users", registro)
      //   .then((res) => {
      //     // alert(`usuario enviado con éxito`);
      //     setRegistro({
      //       name: "",
      //       email: "",
      //       phone: "",
      //     });
      //     actualizarEstado(false);
      //     history.push("/video");
      //   })
      //   .catch((err) => alert(err));
    } else {
      setFormSubmitted(true);
    }
  };

  const Submit = () => {
    const formDatab = new FormData();
    for (const key in registro) {
      formDatab.append(key, registro[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbzxJCjRVhOSqnKj89_1EMwqiLquM2oujNOy0fFZGdYsWJg6Bd8AyC53lOgv-rR5S-zP/exec",
      {
        method: "POST",
        body: formDatab,
        mode: "no-cors",
      }
    )
      .then((res) => res.json())
      .then((data) => {

      })
      .catch((error) => {
        console.log(error);
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
    <motion.div className="max-w-[1100px] flex items-center justify-center"
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

        <form className="max-w-[400px] sm:max-w-[700px] mx-auto">
          <div className="mb-4">
            {/* <label
              htmlFor="name"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Primer Nombre y Apellido
            </label> */}
            <input
              type="text"
              id="Name"
              name="Name"
              value={registro.Name}
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
            {formSubmitted && errors.Name && (
              <span className="text-red-500">{errors.Name}</span>
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
              <Select
                options={countries.map((country) => ({
                  value: [country.code, country.name],
                  label: (
                    <div className="cursor-pointer flex items-center">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-6 h-4"
                      />
                      <span>{country.name}</span>
                    </div>
                  ),
                }))}
                placeholder={null}
                value={
                  selectedCountry
                    ? {
                        value: [registro.CountryCode, registro.Country],
                        label: (
                          <div className="flex items-center cursor-pointer">
                            <img
                              src={selectedCountry.flag}
                              alt={selectedCountry.name}
                              className="w-6 h-4"
                            />
                            <span>{`${selectedCountry.name}`}</span>
                          </div>
                        ),
                      }
                    : registro.CountryCode
                }
                onChange={(selectedOption) => {
                  setRegistro({
                    ...registro,
                    CountryCode: selectedOption.value[0],
                    Country: selectedOption.value[1],
                  });
                  validate({ ...registro, CountryCode: selectedOption.value });
                }}
                className="div-f w-2/3 py-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2"
                styles={{
                  control: (provided) => {
                    const controlStyles = {
                      ...provided,
                      "&::placeholder": {
                        color: "lightgray", // Cambiar el color del placeholder a gris claro
                      },
                    };
              
                    if (!selectedCountry) {
                      // Agregar estilo de fondo de imagen si no hay país seleccionado
                      controlStyles.backgroundImage = `url(${country})`; // Reemplaza con la ruta de tu imagen de marcador de posición
                      controlStyles.backgroundSize = "25px 25px";
                      controlStyles.backgroundPosition = "5px center";
                      controlStyles.backgroundRepeat = "no-repeat";
                      controlStyles.paddingLeft = "40px"; // Ajusta el espacio para la imagen
                    }
              
                    return controlStyles;
                  },
                }}
              />

              <input
                type="text"
                id="Phone"
                name="Phone"
                value={registro.Phone}
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
            {formSubmitted && errors.Phone && (
              <span className="text-red-500">{errors.Phone}</span>
            )}
          </div>
          <div className="mb-4">
            {/* <label
              htmlFor="email"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Correo electrónico
            </label> */}

            <input
              type="Email"
              id="Email"
              name="Email"
              value={registro.Email}
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
            {formSubmitted && errors.Email && (
              <span className="text-red-500">{errors.Email}</span>
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
        {/* <h3
          className="font-open-sans text-sm md:text-lg font-bold text-red-500 mb-2 mt-0 mx-4 md:my-0 text-left"
          style={{ marginBottom: "1rem" }}
        >
          *Utilizaremos estos datos para ponernos en contacto y regalarte
          material de entrenamiento extra en base tus necesidades específicas de
          trading.
        </h3> */}
        <div className="text-center"></div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2023 Expediente Azul
        </p>
      </div>
    </motion.div>
  );
};

export default Registro;

// className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"

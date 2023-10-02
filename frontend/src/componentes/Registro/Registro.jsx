import React, { useState } from "react";
import axios from "axios";
import loading from "../../multimedia/load3.gif";
import logo from "../../multimedia/log.png";
import { eventLead } from "../../utils/pixelEvents/PixelEvents";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import "./Registro.css";
const Registro = ({ actualizarEstado, countries }) => {
  const history = useHistory();
  const [registro, setRegistro] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: null,
    country: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "completar con su nombre",
    email: "completar email",
    phone: "colocar su numero",
    countryCode: "colocar Country Code",
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
    if (!registro.name) {
      errors.name = "Llenar con su nombre";
    }
    if (!registro.email) {
      errors.email = "Debes ingresar un email.";
    }
    if (registro.email) {
      const emailRegex =
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (!emailRegex.test(registro.email)) {
        errors.email = "El email ingresado no es válido";
      }
    }
    if (!registro.phone) {
      errors.phone = "Debe ingresar su numero de celular.";
    }
    if (!registro.countryCode) {
      errors.phone = "Debe ingresar el código de su pais.";
    }
    if (!registro.countryCode && !registro.phone) {
      errors.phone =
        "Debe ingresar el código de su pais y su numero de celular.";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(registro);
    if (Object.keys(errors).length === 0) {
      eventLead(registro.email, registro.name);
      setIsLoading(true);
      axios
        .post("/users", registro)
        .then((res) => {
          // alert(`usuario enviado con éxito`);
          setRegistro({
            name: "",
            email: "",
            phone: "",
          });
          actualizarEstado(false);
          history.push("/video");
        })
        .catch((err) => alert(err));
    } else {
      setFormSubmitted(true);
    }
  };

  const handleClick = (click) => {
    actualizarEstado(click);
  };

  const selectedCountry = countries.find(
    (country) => country.code === registro.countryCode
  );

  return (
    <div className="max-w-[1100px] flex items-center justify-center">
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
        <h1 className="font-open-sans text-lg md:text-2xl font-semibold text-center text-gray-900 mt-4 mb-2">
          INGRESA TUS DATOS PARA RECIBIR ACCESO + MATERIAL EXTRA PERSONALIZADO.
        </h1>
        <h3
          className="font-open-sans text-sm md:text-lg font-bold text-red-500 mb-2 mt-0 mx-4 md:my-0 text-left"
          style={{ marginBottom: "1rem" }}
        >
          *SÓLO regístrate si tienes más de $100 dólares para depositar en tu
          cuenta personal de trading y estás dispuesto a crecer.
        </h3>

        <form className="max-w-[400px] sm:max-w-[700px] mx-auto">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Primer Nombre y Apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={registro.name}
              onChange={handleChange}
              className="h-[54px] w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {formSubmitted && errors.name && (
              <span className="text-red-500">{errors.name}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Numero de telefono
            </label>
            <div className="flex max-h-[54px] mb-2">
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
                      <span>
                        {country.name} ({country.code})
                      </span>
                    </div>
                  ),
                }))}
                placeholder={
                  <span className="sm:text-sm text-13px leading-1.25rem text-gray-600 ">
                    País
                  </span>
                }
                value={
                  selectedCountry
                    ? {
                        value: [registro.countryCode, registro.country],
                        label: (
                          <div className="flex items-center cursor-pointer">
                            <img
                              src={selectedCountry.flag}
                              alt={selectedCountry.name}
                              className="w-6 h-4"
                            />
                            <span>
                              {`${selectedCountry.name} (${registro.countryCode})`}
                            </span>
                          </div>
                        ),
                      }
                    : registro.countryCode
                }
                onChange={(selectedOption) => {
                  setRegistro({
                    ...registro,
                    countryCode: selectedOption.value[0],
                    country: selectedOption.value[1],
                  });
                  validate({ ...registro, countryCode: selectedOption.value });
                }}
                className="w-2/3 px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                id="phone"
                name="phone"
                value={registro.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            {formSubmitted && errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 sm:mb-2 text-sm text-gray-600"
            >
              Ingresá tu Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={registro.email}
              onChange={handleChange}
              className="h-[54px] w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
            {formSubmitted && errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </div>
          <div className="flex items-center justify-center ">
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
                className="h-[54px] w-full sm:w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
              >
                Registro
              </button>
            )}
          </div>
        </form>
        <h3
          className="font-open-sans text-sm md:text-lg font-bold text-red-500 mb-2 mt-0 mx-4 md:my-0 text-left"
          style={{ marginBottom: "1rem" }}
        >
          *Utilizaremos estos datos para ponernos en contacto y regalarte
          material de entrenamiento extra en base tus necesidades específicas de
          trading.
        </h3>
        <div className="text-center"></div>
        <p className="text-xs text-gray-600 text-center mt-8">
          &copy; 2023 Expediente Azul
        </p>
      </div>
    </div>
  );
};

export default Registro;

// className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"

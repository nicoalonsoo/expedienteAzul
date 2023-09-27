import React, { useEffect } from "react";
import "./LandingForm.css";
import DropboxVideo from "../../componentes/Video/Video";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer";
import Registro from "../../componentes/Registro/Registro";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
const LandingForm = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const modifiedCountries = countries.filter(country => country.continent === 'South America' || country.continent === 'North America');

  const filteredCountryNames = ['British Virgin Islands', 'Canada', 'Venezuela', 'Cayman Islands', 'Caribbean Netherlands', 'Saint Vincent and the Grenadines', 'United States Virgin Islands', 'United States', 'French Guiana', 'Turks and Caicos Islands', 'Brazil', 'Falkland Islands', 'Sint Maarten', 'Belize', 'Montserrat', 'Suriname', 'Greenland', 'Jamaica', 'Guyana', 'Saint Barthélemy', 'Saint Pierre and Miquelon', 'Martinique', 'Guadeloupe', 'Saint Kitts and Nevis', 'Saint Martin', 'Anguilla', 'Saint Lucia', 'Curaçao', 'Dominican Republic', 'Trinidad and Tobago', 'Antigua and Barbuda'];

  const filterCountries = modifiedCountries.filter(country => !filteredCountryNames.includes(country.name));
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-top bg-fixed h-full" style={{ backgroundImage: 'url(https://expedienteazul.com/financiera/wp-content/uploads/2018/05/fondo.jpg)' }}>
      <Header />
      <div className="text-center py-8 max-w-[1200px] mx-auto ">
        <h3
          className="text-lg md:text-2xl mb-4 font-bold mx-4 my-4 md:my-0"
          style={{ marginBottom: "1rem" }}
        >
          {" "}
          COMO LOGRAR OBTENER UNA RENTABILIDAD DEL{" "}
          <span className="underline">10%</span> AL{" "}
          <span className="underline">30%</span> MENSUAL HACIENDO COPYTRADING DE
          LA MANO DE UN EXPERTO
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          PASO 1: MIRA EL VIDEO
        </h1>
        <div className="mx-auto max-w-[700px] mb-8 mt-8">
          <DropboxVideo/>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          PASO 2: REGISTRATE EN NUESTRA ACADEMIA
        </h1>
        <Registro 
        countries={filterCountries}
        />
        <h3 className="text-sm md:text-lg font-bold text-red-500 mb-4 mx-4 my-4 md:my-0">
          *Si ya tienes cuenta en Libertex puedes registrarte con el mismo
          nombre y número de teléfono pero distinto email.
        </h3>
        <h3 className="text-sm md:text-lg font-bold text-red-500 mb-4 mx-4 my-4 md:my-0">
          *Solamente regístrate si tienes más de $100 dólares para depositar en
          tu cuenta de trading
        </h3>
        <h3
          className="text-sm md:text-lg font-bold text-red-500 mb-4 mx-4 my-4 md:my-0"
          style={{ marginBottom: "1rem" }}
        >
          *No somos una empresa multinivel ni un fondo de inversión, somos una
          academia de trading asociada al broker Libertex.
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default LandingForm;

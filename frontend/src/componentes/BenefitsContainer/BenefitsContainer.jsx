import React from "react";
import Benefits from "../Benefits/Benefits";
import risks from "../../multimedia/b_risks.png";
import b_clients from "../../multimedia/b_clients.png";
import b_audi from "../../multimedia/b_audi.png";
import b_better from "../../multimedia/b_better.png";
import b_levelupx5 from "../../multimedia/b_levelupx5.png";
import b_safe from "../../multimedia/b_safe.png";
const BenefitsContainer = () => {
  const datosComponenteB = [
    {
      imageUrl:
      b_safe,
      text: `<span style="color: #40b4e5; font-weight: 600;">Datos de tus clientes seguros y encriptados.</span> Operamos bajo <span style="font-weight: 600;">normativas: </span>HIPAA, NIST, ISO-27001`,
    },
    {
      imageUrl:
      risks,
      text: `<span style="color: #40b4e5; font-weight: 600;">Reduce </span> hasta  <span style="font-weight: 600;"> 30% los errores </span>enviados por tu clientes`,
    },
    {
      imageUrl:
      b_levelupx5,
      text: `<span style="color: #40b4e5; font-weight: 600;">Aumenta x5 </span> la productividad 
      de tus ejecutivos.
      `,
    },
    {
      imageUrl:
      b_clients,
      text: `<span style="color: #40b4e5; font-weight: 600;">Cierra 40% más negocios. </span> Fortalece tu competitividad.`,
    },
    {
      imageUrl:
      risks,
      text: `<span style="color: #40b4e5; font-weight: 600;">Reduce el riesgo  </span>  de Fraudes, multas y problemas de recuperación`,
    },
    {
      imageUrl:
      b_audi,
      text: `<span style="color: #40b4e5; font-weight: 600;">Audita   </span>  cuando quieras <span style="font-weight: 600;"> sin parar la operación.</span>`,
    },
    {
      imageUrl:
      b_better,
      text: `<span style="color: #40b4e5; font-weight: 600;">Mejora la experiencia de tu cliente   </span> significativamente.<span style="font-weight: 600;"> Disminuye el abandono</span> e trámites en<span style="font-weight: 600;"> 60%</span>`,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center  md:max-w-[1300px]">
      {datosComponenteB.map((datos, index) => (
        <div key={index} className={`flex flex-wrap justify-center items-start sm:w-1/2 md:w-1/4 mb-4`}>
          <Benefits imageUrl={datos.imageUrl} text={datos.text} />
        </div>
      ))}
    </div>
  );
};

export default BenefitsContainer;

import React from "react";
import Benefits from "../Benefits/Benefits";
const BenefitsContainer = () => {
  const datosComponenteB = [
    {
      imageUrl:
        "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/negocios.png",
      text: `<span style="color: #40b4e5; font-weight: 600;">Datos de tus clientes seguros y encriptados:</span> operamos bajo <span style="font-weight: 600;">normativas: </span>HIPAA, NIST, ISO-27001`,
    },
    {
      imageUrl:
        "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/tiempo.png",
      text: `<span style="color: #40b4e5; font-weight: 600;">Reduce </span> hasta  <span style="font-weight: 600;"> 30% los errores </span>enviados por tu clientes`,
    },
    {
      imageUrl:
        "https://expedienteazul.com/financiera/wp-content/uploads/2021/06/stats.png",
      text: `<span style="color: #40b4e5; font-weight: 600;">Aumenta x5 </span> la productividad 
      de tus ejecutivos.
      `,
    },
    {
      imageUrl:
        "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/conoce-el-status-de-los-expedientes.png",
      text: `<span style="color: #40b4e5; font-weight: 600;">Cierra 40% más negocios </span> Fortalece tu competitividad.`,
    },
    {
      imageUrl:
        "https://expedienteazul.com/financiera/wp-content/uploads/2018/11/seguridad.png",
      text: `<span style="color: #40b4e5; font-weight: 600;">Reduce el riesgo  </span>  de Fraudes, multas y problemas de recuperación`,
    },
    {
      imageUrl:
        "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/reducir-errores.png",
      text: `<span style="color: #40b4e5; font-weight: 600;">Audita   </span>  cuando quieras <span style="font-weight: 600;"> sin parar la operación.</span>`,
    },
    // {
    //   imageUrl:
    //     "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/reducir-errores.png",
    //   text: `<span style="color: #40b4e5; font-weight: 600;">Audita   </span>  cuando quieras <span style="font-weight: 600;"> sin parar la operación.</span>`,
    // },
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

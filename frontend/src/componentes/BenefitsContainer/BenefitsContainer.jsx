import React from "react";
import Benefits from "../Benefits/Benefits";

const BenefitsContainer = () => {
  const datosComponenteB = [
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/negocios.png", text: "Cierras 40% más negocios" },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/tiempo.png", text: "Integras tus expedientes en la mitad de tiempo" },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2021/06/stats.png", text: "Mide la efectividad de tu trámite y coloca más créditos" },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/conoce-el-status-de-los-expedientes.png", text: "Conoce el estatus e histórico de cada expediente en tiempo real" },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/11/seguridad.png", text: "Valida cada requisito a detalle y blinda tu operación contra fraudes" },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/reducir-errores.png", text: "Reduce hasta 30% los errores en documentos enviados por parte del cliente" },
  ];

  return (
    <div className="flex flex-wrap max-w-[330px] md:max-w-[1300px]">
      {datosComponenteB.map((datos, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
          <Benefits imageUrl={datos.imageUrl} text={datos.text} />
        </div>
      ))}
    </div>
  );
};

export default BenefitsContainer;
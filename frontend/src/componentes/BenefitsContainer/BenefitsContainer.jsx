import React from "react";
import Benefits from "../Benefits/Benefits";
const BenefitsContainer = () => {
  const datosComponenteB = [
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/negocios.png", text: "Seguridad de datos cifrada conforme a normativas HIPAA, NIST, ISO-27001. ➡️ DATOS DE TUS CLIENTES SEGUROS Y ENCRIPTADOS bajo estándares lideres en el sector." },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/tiempo.png", text: "Reduce errores y fraudes en trámites financieros en un 30%, incrementando fiabilidad y disminuyendo el fraude3.  Agiliza cierres de contratos 9.5 veces más rápido, optimizando procesos." },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2021/06/stats.png", text: "Mide la efectividad de tu trámite y coloca más créditos" },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/conoce-el-status-de-los-expedientes.png", text: "Conoce el estatus e histórico de cada expediente en tiempo real" },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/11/seguridad.png", text: "Mejora significativa en experiencia de clientes; disminuye abandono de trámites en 60%." },
    { imageUrl: "https://expedienteazul.com/financiera/wp-content/uploads/2018/05/reducir-errores.png", text: "Incrementa operaciones concluidas en un 40%, fortaleciendo posición de mercado y competitividad." },
  ];

  return (
    <div className="flex flex-wrap  md:max-w-[1300px]">
      {datosComponenteB.map((datos, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3  mb-4">
          <Benefits imageUrl={datos.imageUrl} text={datos.text} />
        </div>
      ))}
    </div>
  );
};

export default BenefitsContainer;
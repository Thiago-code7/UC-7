import React, {useState} from "react";
import Button from "../../components/Button/Button";
import ImputField from "../../components/ImputField/ImputField";
import ResultDisplay from "../../components/ResultDisplay/Result.Display"


function TipCalculator() {
    const [valorConta, setValorConta] = useState("");
    const [percentualGorjeta, setPercentualGorjeta] = useState("")
    const [resultado, setResultado] = useState("");

    const CalcularGorjeta = () =>{
        const valor = parseFloat(valorConta);
        const valorGorjeta = (valor * parseFloat(percentualGorjeta))/100;
        const total = valor + valorGorjeta;
        setResultado({gorjeta: valorGorjeta, total:total});
    }
    return(
        <>
         <h1>Calculadora de Gorjeta</h1>
         <ImputField
         label = "Valor da conta"
         value ={valorConta}
         onChange={(e) => setValorConta(e.target.value)}
        />
          <ImputField
         label = "Porcentagem da gorjeta (%)"
         value ={percentualGorjeta}
         onChange={(e) => setPercentualGorjeta(e.target.value)}
         />

         <Button
         text="Calcular" onClick={CalcularGorjeta}
         />
         <ResultDisplay gorjeta={resultado.gorjeta} total={resultado.total}/>

        </>
    );
}

export default TipCalculator;


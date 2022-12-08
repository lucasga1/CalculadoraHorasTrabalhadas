import { Div } from "./styles"
import { useFormik } from "formik"
import { useState } from "react";
import MaskedInput from "react-text-mask";

function Programa() {

    const [resultadoAntesAlmoço, setResultadoAntesAlmoço] = useState();
    const [resultadoDepoisAlmoço, setResultadoDepoisAlmoço] = useState();
    const [calculoAntesAlmoço, setCalculoAntesAlmoço] = useState();
    const [calculoDepoisAlmoço, setCalculoDepoisAlmoço] = useState();
    const [resultatoTotal, setResultadoTotal] = useState();

    const calculoHorasAntes = (inicio, inicioAlmoço) => {

        let valorInicio = `2022-11-18T${inicio}`
        let resInicio = new Date(valorInicio)
        let valorInicioAlmoço = `2022-11-18T${inicioAlmoço}`
        let resInicioAlmoço = new Date(valorInicioAlmoço)

        setCalculoAntesAlmoço(new Date(resInicioAlmoço - resInicio));

        setResultadoAntesAlmoço(calculoAntesAlmoço.getUTCHours() + "h " + calculoAntesAlmoço.getUTCMinutes() + "m ");
    }

    const calculoHorasDepois = (voltaAlmoço, saida) => {

        let valorvoltaAlmoço = `2022-11-18T${voltaAlmoço}`
        let resvoltaAlmoço = new Date(valorvoltaAlmoço)
        let valorSaida = `2022-11-18T${saida}`
        let resSaida = new Date(valorSaida)

        setCalculoDepoisAlmoço(new Date(resSaida - resvoltaAlmoço));

        setResultadoDepoisAlmoço(calculoDepoisAlmoço.getUTCHours() + "h " + calculoDepoisAlmoço.getUTCMinutes() + "m ");
    }

    const calculaTotal = () => {
        let antes = calculoAntesAlmoço;
        let depois = calculoDepoisAlmoço;
        let somaDosMin = antes.getUTCMinutes() + depois.getUTCMinutes();

        if (somaDosMin >= 60) {
            let diferença = somaDosMin - 60;
            console.log(diferença)
            setResultadoTotal((antes.getUTCHours() + depois.getUTCHours() + 1 + "h ")
                + (diferença + "m"))
        } else {
            setResultadoTotal((antes.getUTCHours() + depois.getUTCHours() + "h ") + (antes.getUTCMinutes() + depois.getUTCMinutes() + "m"))
        }
    }

    const calculoHoras = (inicio, inicioAlmoço, voltaAlmoço, saida) => {
        calculoHorasAntes(inicio, inicioAlmoço);
        calculoHorasDepois(voltaAlmoço, saida);
        calculaTotal()
    }

    const formik = useFormik({
        initialValues: {
            inicio: '',
            inicioAlmoço: '',
            voltaAlmoço: '',
            saida: '',
        },
        onSubmit: values => {
            calculoHoras(values.inicio, values.inicioAlmoço, values.voltaAlmoço, values.saida);

        },
    });

    return (
        <Div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="inicio">Início:</label>
                    <MaskedInput
                        mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                        id="inicio"
                        name="inicio"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.inicio}
                    />
                </div>

                <div>
                    <label htmlFor="inicioAlmoço">Início do almoço:</label>
                    <MaskedInput
                        mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                        id="inicioAlmoço"
                        name="inicioAlmoço"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.inicioAlmoço}
                    />
                </div>

                <div>
                    <label htmlFor="voltaAlmoço">Volta do almoço:</label>
                    <MaskedInput
                        mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                        id="voltaAlmoço"
                        name="voltaAlmoço"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.voltaAlmoço}
                    />
                </div>

                <div>
                    <label htmlFor="saida">Saída:</label>
                    <MaskedInput
                        mask={[/[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/]}
                        id="saida"
                        name="saida"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.saida}
                    />
                </div>
                <p>Horas trabalhadas até sair para o almoço: {resultadoAntesAlmoço}</p>
                <p>Horas trabalhadas após voltar do almoço: {resultadoDepoisAlmoço}</p>
                <p>Total trabalhado hoje: {resultatoTotal}</p>
                <button type="submit">CALCULAR</button>
            </form>
        </Div>
    )

}
export default Programa;
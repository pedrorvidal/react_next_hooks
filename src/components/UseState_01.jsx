import { useState } from "react"

export default () => {
    const [valor, setValor] = useState( 0 )

    function aumentar() {
        setValor( valor => valor + 1 )
    }

    function diminuir() {
        setValor( valor => valor - 1 )
    }
    return (
        <>
            <h4>UseState</h4>
            <p>Valor: { valor }</p>
            <button onClick={ aumentar }>+</button>
            <button onClick={ diminuir }>-</button>

        </>
    )
}
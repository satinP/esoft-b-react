import React from 'react'

import styles from "./Contador.module.css";

interface ContadorProps {
    valorInicial: number
    callback: (valor: number) => void
}

function Contador({valorInicial, callback}: ContadorProps) {
    const [contador, setContador] = React.useState(valorInicial)

    function incrementar(){
        setContador(contador + 1)
        callback(contador + 1)
    }
    
    function decrementar(){
        if (contador === 0) {
             return
        }
        setContador(contador - 1)
        callback(contador - 1)
    }

    return (
        <div>
            <button 
                className={styles.button}
                onClick={() => decrementar()}>
                    -
            </button>
            <span className={styles.span}>{contador}</span>
            <button 
                className={styles.button}
                onClick={() => incrementar()}
                >
                    +
            </button>
        </div>
    )
}

export default Contador
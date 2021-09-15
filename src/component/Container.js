import React from "react";
import Form from './Form';
import View from './View';

class Container extends React.Component {
   // estado inicial 
    state = {
        usuarios: [
            { nombre: "Pedro" },
            { nombre: "Cesar" }
        ]
    }
    //recibe el valor del input del componente Form a traves de la prop inputState 
    //setea un nuevo estado 
    setInputState = (inputState) => {
        this.setState({
            usuarios: [
                //trae el estado anterior 
                ...this.state.usuarios,
                //agrega el valor del input 
                { nombre: inputState }
            ]
        })
    }
    render = () => {

        return (
            <div className="App">
                <header className="App-header">
                    
                    {/* mapea el arreglo usuarios del estado. 
                        por cada objeto que haya en el arreglo imprime un componente View.
                        en la prop key de View pasa el indice de cada objeto.
                        en la prop renderState de View pasa el objeto. 
                    */
                    this.state.usuarios.map((usuario, index) => {
                        return <View
                            key={index}
                            renderState={usuario}
                        />
                    })}
                    <Form
                        /*envia al componente Form el metodo setInputState en la propiedad
                        inputState.
                        en el componente Form se le agrega el parametro
                        al metodo enviado y se ejecuta. */
                        inputState={this.setInputState}
                    />
                </header>
            </div>
        )
    }
}
export default Container
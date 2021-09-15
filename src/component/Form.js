import React from 'react'

class Form extends React.Component {
    //referencia un nodo del DOM en este caso al input
    inputRef = React.createRef()
    // envia el dato tomado del input al componente Container
    sendState = (e) => {
        e.preventDefault()
        // le agrega a la prop inputState el valor del dato tomado del input
        this.props.inputState(this.inputRef.current.value)
    }
    render = () => {
       
        return(
            <form>
                <span>
                    Ingrese su nombre de Usuario:  
                </span>
                <input type ="text" placeholder="Nombre de usuario" width="35px" height="75px" ref={this.inputRef}></input>
                <button onClick = {this.sendState}>Enviar </button>
            </form>
        )
    }
}
export default Form
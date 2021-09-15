import React from "react";

class View extends React.Component {

    

    render (){
        //selecciona el objeto nombre de la prop renderState
        const {nombre} = this.props.renderState
        
        return(
            <div>
                {/*imprime el objeto de la prop renderState */}
                <h1>{nombre}</h1>
            </div>
        ) 
       
    }
}
export default View;
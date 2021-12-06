import React from 'react';
import { obtenerVehiculos} from '../utils/api';


class Cards extends React.Component {



    constructor(props) {
        super(props);
        this.state = { datosCargados:false,
        vehiculos:[] 
    }
    }




    cargarDatos(){
        fetch(obtenerVehiculos)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta);
            this.setState({ datosCargados:true,vehiculos:datosRespuesta})

            })
        .catch(console.log)
    }

    componentDidMount(){

        this.cargarDatos();


    }

    render() { 

        const{datosCargados, vehiculos}=this.state

        if(!datosCargados){ return(<div>Cargando...</div>);}
        else{

       


        //mostrar contenido
        return (
            
            <div className="card">
                <div className="card-header">
                </div>
                <div className="card-body">
                    <h4> Lista de empleados</h4>

                    <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    vehiculos.map(
                        (vehiculo)=>(
                            <tr key={vehiculo.id}>
                            <td >{vehiculo.id}</td>
                            <td>{vehiculo.name}</td>
                            <td>{vehiculo.description}</td>
                        </tr>
                        )
                    )
                }

            </tbody>
        </table>

                    
                </div>
                <div class="card-footer text-muted">
                </div>
            </div>
            
            );
        }
    }
}
 


export default Cards;
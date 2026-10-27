import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      recuperado: false  
    }
  }


  componentDidMount() {
    fetch('http://localhost:8000/api/productos/')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({ 
          productos: prod,
          recuperado: true // <--- Agregado en el paso 12
        })
      })
  }


  mostrarTabla() {
    return (
      <div className="App">
        <h2>Lista de Productos</h2>
        <table border="1" style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productos.map(prod => {
              return (
                <tr key={prod.codigo}>
                  <td>{prod.codigo}</td>
                  <td>{prod.descripcion}</td>
                  <td>{prod.precio}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }


  render() {
    if (this.state.recuperado) {
      return this.mostrarTabla()
    } else {
      return (<div>recuperando datos...</div>)
    }
  }
}

export default App;
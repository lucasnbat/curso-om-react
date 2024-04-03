import React, { Component } from 'react'; //desctructuring para pegar a class Component
import './Main.css'
import { FaPlus } from 'react-icons/fa'


// essa class extende Component
/* class com estado precisam da função render()
 para retornar o que será renderizado */
export default class Main extends Component {
    state = {
      novaTarefa: '',
    }

  // escreve como arrow function para evitar problema com this
  handleChange = (e) => {
    this.setState({
      /*quando a função é acionada pela mudança no input,
      atualiza a variavel que está no estado com o valor digitado*/
      novaTarefa: e.target.value
    })
  }

  render() {
    //const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="form">
          <input onChange={this.handleChange} type="text"/>
          <button type="submit">
            <FaPlus/>
          </button>
        </form>
      </div>
    )
  }
}

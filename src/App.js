import { Component } from 'react'
import Productos from './components/Productos'
class App extends Component {
	state = {
		productos: [
			{ name: 'Tomate', price: 15, img: '/productos/tomate.jpg' },
			{ name: 'Arbejas', price: 20, img: 'productos/arbejas.jpg' },
			{ name: 'lechuga', price: 10, img: 'productos/lechuga.jpg' },
		]
	}
	render() {
		return(
			<div>
				<Productos
			agregarAlCarro={() => console.log('no hace nada')}
			productos={this.state.productos}
			/>
			</div>
		)
	}
}


export default App;

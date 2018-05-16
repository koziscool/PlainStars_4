

let data= [
	{
		name: 'john kosmicke',
		company: 'tetris', 
		avatar_url: "https://avatars1.githubusercontent.com/u/1393010?v=4"
	}
];

const Card = (props) =>{
	return (
		<div style={{ margin: '1em' }}>
			<img width="100" src={props.avatar_url} />

		</div>
	)
}

class CardList extends React.Component{
	render() {
		return(
			<div>
				{ this.props.cards.map( card => <Card key={card.name} {...card} />) }
			</div>
		)
	}

}


class App extends React.Component {

	render() {
		return (
			<div>
				<div> check this out </div>
				<CardList cards={data} />
			</div>
		);
	}
}




ReactDOM.render(
	<App />,
	document.getElementById('root')
);




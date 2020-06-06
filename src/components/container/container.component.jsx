import React, { Component } from 'react'
import ListItem from "../list-item/list-item.component"

export default class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: []
        }
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
            .then(res => res.json())
            .then(data => {
                this.setState((state, props) => {
                    return {
                        pokemon: data.results
                    }
                })
            });
    }

    extractKey(str){
        return str.split('/')[6];
    }

    render() {
        return (
            <div>
                {
                    this.state.pokemon.map(e => {
                        var key = this.extractKey(e.url)
                        return <ListItem name={e.name} id={key} key={key}/>
                    })
                }
            </div>
        );
    }
}
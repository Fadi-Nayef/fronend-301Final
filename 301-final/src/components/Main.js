import React, { Component } from 'react';
import axios from 'axios';
import DigimonsCards from './DigimonsCards';
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            digimons:[]
        }
    }
    componentDidMount=async()=>{
        const url='https://digimon-api.vercel.app/api/digimon';
        const result = await axios.get(url);
        this.setState({
            digimons:result.data
        })
        console.log(this.state.digimons)

    }
    addToFav=async(data)=>{
        console.log(data)
        const server ='http://localhost:3003';
        const addToFav = await axios.post(`${server}/addtofav`,data)
    }

    render() {
        return (
            <div>
                {
                    this.state.digimons.map((item,idx)=>{
                return <DigimonsCards
                name={item.name}
                        img={item.img}                  
                        level={item.level}
                        addToFav={this.addToFav}
                        idx={idx}
                />
    })}

            </div>
        )
    }
}

export default Main

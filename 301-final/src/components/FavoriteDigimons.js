import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/';
import UpdateModal from './UpdateModal';
import axios from 'axios';
class FavoriteDigimons extends Component {
    constructor(props){
        super(props);
        this.state={
            favDigimons:[],
            show:false,
            id:''
        }
    }
    componentDidMount=async()=>{
        const  server=process.env.REACT_APP_SERVER;
        const result = await axios.get(`http://localhost:3003/getFav`);
        this.setState({
            favDigimons:result.data
        })
    }
deleteDigimon=async(id)=>{

    const deleted = await axios.delete(`http://localhost:3003/deleteDigimon/${id}`);
    this.setState({
        favDigimons:deleted.data
    })
}


showModal=(id)=>{
this.setState({
    show:true,
    id:id
})
}

updateDigimon=async(data)=>{
const result = await axios.put(`http://localhost:3003/updateDigimon/${this.state.id}`,data)
this.setState({
    favDigimons:result.data,
    show:false
})
}
    render() {
        return (
            <div>
                           <div>
                               {this.state.favDigimons.map(item=>{

                 return <Card key={item._id}style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          {item.level}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.deleteDigimon(item._id)} > Delete </Button>
                        <Button variant="primary" onClick={()=>this.showModal(item._id)} > Update </Button>

                    </Card.Body>
                </Card>
                               })}

            </div>
            <UpdateModal
            show={this.state.show}
            updateDigimon={this.updateDigimon}
            />
            </div>
        )
    }
}

export default FavoriteDigimons

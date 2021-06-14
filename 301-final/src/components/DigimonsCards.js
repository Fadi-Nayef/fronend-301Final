import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/';

class DigimonsCards extends Component {
    render() {
        return (
            <div>
                  <Card key={this.props.idx}style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                          {this.props.level}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.props.addToFav({name:this.props.name,img:this.props.img,level:this.props.level})} >Add to Fav</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default DigimonsCards

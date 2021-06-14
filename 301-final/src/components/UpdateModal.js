import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap/';

 class UpdateModal extends Component {
constructor(props){
    super(props);
this.state={
    name:'',
    image:'',
    level:''
}
}
    updateName=(e)=>{this.setState({name:e.target.value})}
    updateImge=(e)=>{this.setState({image:e.target.value})}
    updateLevel=(e)=>{this.setState({level:e.target.value})}
    render() {
        return (
            <div>
                <>
      
      <Modal show={this.props.show}  animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type='text' placeholder='Name' onChange={this.updateName} />
            <input type='text' placeholder='Img' onChange={this.updateImge} />
            <input type='text' placeholder='Level' onChange={this.updateLevel} />

        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="primary" onClick={()=>this.props.updateDigimon({name:this.state.name,image:this.state.image,level:this.state.level})}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
            </div>
        )
    }
}

export default UpdateModal

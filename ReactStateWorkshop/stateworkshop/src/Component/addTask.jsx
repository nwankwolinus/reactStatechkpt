import React, { Component } from 'react';

class AddTasks extends Component {

    state = {
        desc : ""
    }

    render() {

        return(

        <div className = "row mt-3">
            <div className="col-md-10">
                <input 
                    className = "form-control" 
                    type="text" 
                    onChange={(e)=>this.setState({
                    desc: e.target.value
                    })}
                />

                <div className="col-md-2">
                    <img
                        src={require('../assets/cross-or-plus-icon-163229.jpg')}
                        alt="Add"
                        style={{width : 30}}
                        onClick={()=>
                            this.props.handleAdd({
                                id : Date.now(),
                                description : this.state.desc,
                                done : false
                        })}
                    />
                </div>
            </div>
        </div>

        )

    }
        
    
}

export default AddTasks;
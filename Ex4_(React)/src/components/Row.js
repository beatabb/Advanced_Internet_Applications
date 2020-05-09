import React from 'react'

class Row extends React.Component {    
    constructor(props){
        super(props);
        let i = this.props.item;
        this.state = {
            country: i.country,
            city: i.city,
            description: i.description,
            rating: i.rating,
            image: i.image
        }
    }
    
    render() {
        let i = this.props.item;
        let editableRow = (
            <tr>
                <td>
                    <input value={this.state.image}
                           onChange={i => this.setState({image: i.target.value})}/>
                </td>
                <td>
                    <input value={this.state.title} 
                           onChange={i=>this.setState({country: i.target.value})}/>
                </td>
                <td>
                    <input value={this.state.title} 
                           onChange={i=>this.setState({city: i.target.value})}/>
                </td>
                <td>
                    <div>
                        <textarea value={this.state.description}
                            onChange={i => this.setState({description: i.target.value})}/>
                    </div>
                </td>
                <td>
                    <input value={this.state.rating}
                           onChange={i => this.setState({rating: i.target.value})}/>
                </td>
                <td>
                    <button onClick={
                        ()=>{
                            this.props.changeItem(i.id, Object.assign({}, this.state, {act: !i.act}))
                        }
                    }>Save</button>
                </td>
            </tr>
        )

        const imgStyle = {
            width: 100,
            height: 100
        }

        let normalRow = (
            
            <tr onClick={()=>this.props.changeItem(i.id, {act: !i.act})}>
                <td>
                    <img style={imgStyle} src={i.image}/>
                </td>
                <td>
                    {i.country}
                </td>
                <td>
                    {i.city}
                </td>
                <td>
                    {i.description}
                </td>
                <td>
                    {i.rating}
                </td>
                <td>
                    <button onClick={(event)=>{
                        event.stopPropagation();
                        this.props.removeElement(i.id)}}>Delete</button>
                </td>
            </tr>
        )           
        return !i.act ? normalRow : editableRow;
    }
}

export default Row;
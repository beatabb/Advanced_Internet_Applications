import React from 'react';
import Row from './Row';

class Table extends React.Component {

    render(){

        const itemsStyle = {
            width: `${20}%`,
            alignItems: 'left',
            textAlign: 'left'
        }

        let TableRows = this.props.data.map(i => 
            <Row 
                item={i} 
                key={i.id} 
                act={i.act}
                changeItem={this.props.changeItem}
                removeElement={this.props.removeElement}
            />)
        
        return(
        <table>
            <tbody>
                <tr className = "header">
                    <th className style={itemsStyle}>Image</th>
                    <th className style={itemsStyle}>Country</th>
                    <th className style={itemsStyle}>City</th>
                    <th className style={itemsStyle}>Description</th>
                    <th className style={itemsStyle}>Rating</th>
                </tr>
                    {TableRows}
            </tbody>
        </table>)
    }
}

export default Table;
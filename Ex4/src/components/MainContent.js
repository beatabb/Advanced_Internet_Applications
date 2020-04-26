import React from 'react';
import Countries from '../countries.json';
import Table from './Table';

class MainContent extends React.Component {

    constructor(props){
        super(props);
        Countries.forEach(i=>{i.act = false});
        this.state = {
            data: Countries,
            text: "",
            length: Countries.length
        };

        this.removeElement = this.removeElement.bind(this);
        this.changeItm = this.changeItm.bind(this);
        this.sortArray = this.sortArray.bind(this);
        this.filter = this.filter.bind(this);
        
    }

    

    addNewCity = () => {
        this.setState({data: 
            this.state.data.concat([
                {
                    image: "",
                    country: "",
                    city: "",
                    description:"",
                    rating: "",
                    id: this.state.data.length + 1,
                    act: true
                }
            ])
        })
    }

    filter = (arr) => {
        let filtered = arr.filter
            (i => i.country
                    .toLowerCase()
                    .includes(this.state.text.toLowerCase()));
    
        return filtered;
    }

    removeElement = (id) => {
        let filtered = this.state.data
            .filter((i) => i.id !== id);
        this.setState({data: filtered});
    }

    changeItm = (id, newObject) => {
        this.setState({data: this.state.data.map(i=>{
            if(i.id === id){
                let newObj = Object.assign({}, i, newObject);
                return newObj;
            }
            else return i;
        })});
    }

    sortArray = (arr) => {
        let sorted = arr.sort((a, b)=>{
            if(a.rating < b.rating) return 1;
            else if(a.rating == b.rating) return 0;
            else return -1;
        });
        return sorted;
    }

    render() {
        const sortStyle = {
            backgroundColor: "#222222",
            padding: 10,
            color: "#ffffff"
        }
        const addStyle = {
            backgroundColor: "#222222",
            padding: 10,
            textAlign: 'center',
            color: "#ffffff"
        }
        const searchSortDivStyle = {
            height: 50,
            padding: 15
        }
        let mainThis = this;
        return (
        <div>
            <div>
                <div>
                    <span style={searchSortDivStyle}>Search: </span>
                    <input
                        spellCheck="false"
                        value={mainThis.state.text}
                        onChange={(i)=>{mainThis.setState({text: i.target.value})}}
                    />
                    <div style={searchSortDivStyle}>
                        <div 
                             onClick=
                             {()=>
                                {mainThis.setState(
                                {data: mainThis.sortArray(mainThis.state.data, !mainThis.state.inversed)
                        })}}>
                            <span style={sortStyle}>Sort</span>
                        </div>
                    </div>
                </div>
            </div>
            <Table data={this.filter(this.state.data)}
                   removeElement={this.removeElement}
                   changeItem={this.changeItm}/>
            
            <div>
                <div>
                    <div style={addStyle} onClick={()=>{mainThis.addNewCity()}}>Add new city</div>
                </div>
            </div>
        </div>
        );
    }
}

export default MainContent;
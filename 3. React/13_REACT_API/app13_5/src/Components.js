import React from "react";
import Component1 from './components/Component1';

class Components extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            records: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/images')
            .then(response => response.json())
            .then(records => {
                this.setState({
                    records: records
                })
            })
            .catch(error => console.log(error))
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    renderListing() {
        let recordList = []
        this.state.records.map(record => {
            // console.log(record._id, record.name, record.desc, record.img);            
            const base64Flag = 'data:image/jpeg;base64,';
            const imageStr = this.arrayBufferToBase64(record.img.data.data);
            var img = base64Flag + imageStr;
            console.log(img);
            return recordList.push(<Component1 key={record._id} id={record._id} name={record.name} desc={record.desc} img={img}/>);
        })
        return recordList;
    }
    render() {
        return (
            <div key='1'>
                {this.renderListing()}
            </div>
        );
    }
}
export default Components;
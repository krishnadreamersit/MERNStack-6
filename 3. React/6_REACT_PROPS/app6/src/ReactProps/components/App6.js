import React, { Component } from 'react';
import './App6.css';

class App6 extends Component {
    render() {
        const lists = this.props.items.map((item) =>
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.amount}</td>
                <td>{new Date(item.spendDate).toDateString()}</td>
                <td>{item.category}</td>
            </tr>
        );
        return (
            <div>
                <h1>List of Items</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                    </tbody>
                </table>
            </div>
        );
    }

}

export default App6;
import React, { Component } from 'react';
import App0 from './components/App0';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import App6 from './components/App6';
import App7 from './components/App7';
import App8 from './components/App8';

var Apps = function () {
    
    const id = 1;
    const fullname = 'Raj Rai';
    const address = 'KTM';
    const email = 'raj@gmail.com';
    const phone = 1234567890;
    const date = new Date();

    const person = {
        id: 1,
        fullname: 'Raj Rai',
        address: 'KTM',
        email: 'raj@gmail.com',
        phone: 1234567890,
        date: new Date()
    };

    const fruits = ['Apple', 'Apricots', 'Avocado', 'Banana', 'Blackberries'];

    const items = [
        { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
        { id: 1, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
        { id: 1, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
        { id: 1, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
        { id: 1, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
        { id: 1, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
        { id: 1, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
        { id: 1, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
        { id: 1, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
        { id: 1, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
    ]

    const marks = [67, 43, 56]

    return (
        <div>
            <App0 />,
            <App1 title='Broadway' />,
            <App2 n1='2' n2='5' />,
            <App3 id={id} fullname={fullname} address={address} email={email} phone={phone} date={date} />,
            <App4 data={person} />,
            <App5 fruits={fruits} />
            <App6 items={items} />
            <App7 result={true} />
            <App8 marks = {marks} />
        </div>
    )
};

export default Apps;
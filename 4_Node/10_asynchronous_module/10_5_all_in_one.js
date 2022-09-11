//Example-1 [Problem Statement]

const records = [
	{id:1, name:'Raj',address:'KTM'},
	{id:2, name:'Keshor',address:'Bhk'},
	{id:3, name:'Shree',address:'Lat'}
];

function displayData(){
	setTimeout(()=>{
		let str1 = "";
		records.forEach((data, index)=>{
			str1 +=`${data.name}\n`;
		});
        console.log(str1);
	}, 1*1000);
}

function createData(newRow){
	setTimeout(()=>{
        records.push(newRow)
	}, 2*1000);
}
createData({id:4, name:'Raju',address:'Lat'});
displayData();


// Example-1 - Callback function
/*
const records = [
	{id:1, name:'Raj',address:'KTM'},
	{id:2, name:'Keshor',address:'Bhk'},
	{id:3, name:'Shree',address:'Lat'}
];

function displayData(){
	setTimeout(()=>{
		let str1 = "";
		records.forEach((data, index)=>{
			str1 +=`${data.name}\n`;
		});
        console.log(str1);
	}, 1*1000);
}

function createData(newRow, callback){
	setTimeout(()=>{
        records.push(newRow)
        callback();
	}, 2*1000);
}
createData({id:4, name:'Raju',address:'Lat'}, displayData);
*/

// Example-2 - Promise
/*
const records = [
	{id:1, name:'Raj',address:'KTM'},
	{id:2, name:'Keshor',address:'Bhk'},
	{id:3, name:'Shree',address:'Lat'}
];

function displayData(){
	setTimeout(()=>{
		let str1 = "";
		records.forEach((data, index)=>{
			str1 +=`${data.name}\n`;
		});
        console.log(str1);
	}, 1*1000);
}

function createData(newRow){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            records.push(newRow)
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error: to add new row");
            }
        }, 2*1000);
    });	
}
// createData({id:4, name:'Raju',address:'Lat'}).then(displayData);
// createData({id:4, name:'Raju',address:'Lat'}).then(displayData).catch(error=>console.log(error));
*/

// Example-3 - async and await
/*
const records = [
	{id:1, name:'Raj',address:'KTM'},
	{id:2, name:'Keshor',address:'Bhk'},
	{id:3, name:'Shree',address:'Lat'}
];

function displayData(){
	setTimeout(()=>{
		let str1 = "";
		records.forEach((data, index)=>{
			str1 +=`${data.name}\n`;
		});
        console.log(str1);
	}, 1*1000);
}

function createData(newRow){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            records.push(newRow)
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Error: to add new row");
            }
        }, 2*1000);
    });	
}
async function start(){
	await createData({id:4, name:'Raju',address:'Lat'});
    displayData();
}
start();
*/
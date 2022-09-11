var calculator = function(command, num1, num2){
    if(command=='/add'){
        return (num1+num2);
    }
    else if(command=='/sub'){
        return Math.abs(num1-num2);
    }
    else{
        return "NA";
    }
}

module.exports = {calculator};
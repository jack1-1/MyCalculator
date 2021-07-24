const defaultResult = 0;
let currentResult = defaultResult;
let logEntries=[];

function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog( 
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
)
{
    const logEntry={     // learning objects
        operation:operationIdentifier,
        prevNumber:  prevResult,
        Number:  operationNumber,
        result:newResult,

    }
    logEntries.push(logEntry);        //pushing element into array
    console.log(logEntry.operation);    // accessing particular data of object
    console.log(logEntries);             // console.log(logEntries[0])  accessing aaray element with index

}



function calculateResult(calculationType){
   
    if(
        calculationType!=='ADD'&&
    calculationType!=='SUBTRACT'&&
    calculationType!=='MULTIPLY'&&
    calculationType!=='DIVIDE'
    ){
        return;
    }

    // if(
    //     calculationType==='ADD'||
    // calculationType==='SUBTRACT'||
    // calculationType==='MULTIPLY'||
    // calculationType==='DIVIDE'
    // )
    // {
        const enteredNumber=getUserNumberInput();
        const intialResult=currentResult;
        let mathOperator;
        if(calculationType==='ADD'){  //learning if statements
            currentResult=currentResult+enteredNumber;
            mathOperator='+';
        }
        else if(calculationType==='SUBTRACT'){
            currentResult=currentResult-enteredNumber;
            mathOperator='-';
        }
        else if(calculationType==='MULTIPLY'){
            currentResult=currentResult*enteredNumber;
            mathOperator='*';
        }
        else if(calculationType==='DIVIDE'){
            currentResult=currentResult/enteredNumber;
            mathOperator='/';
        }
    
        
        
        createAndWriteOutput(mathOperator, intialResult, enteredNumber);
        writeToLog(calculationType, intialResult, enteredNumber, currentResult);    
    // }

   
}



function add() {
    calculateResult('ADD');
    

}

function subtract() {
    calculateResult('SUBTRACT');

}

function multiply() {
    calculateResult('MULTIPLY');

}

function divide() {
    calculateResult('DIVIDE');

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);








   









    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   


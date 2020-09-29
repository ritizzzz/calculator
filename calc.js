document.addEventListener('DOMContentLoaded', () => {
    let calculatedvalue = 0;
    let value = '';
    const operation = ['+', '-', '*', '/' ]
    document.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            for(i = 0; i < operation.length; i++){
                if(operation[i] === button.dataset.value){
                    calculatedvalue = `${calculatedvalue} ${operation[i]} `
                    value = `${value}${operation[i]}`
                    document.querySelector('input').value = value;
                    return true
                }
            }
           
            if(button.dataset.value === 'C'){
                value = '';
                calculatedvalue = '';
                document.querySelector('input').value = '';
                
                return true
            }
            if(button.dataset.value === 'equal'){
                calculatedvalue = eval(calculatedvalue);
                value = calculatedvalue;
                document.querySelector('input').value = calculatedvalue;
                
                return true
            }
            
            value = `${value}${button.dataset.value}`
            calculatedvalue =   `${calculatedvalue}${button.dataset.value}`
            
            console.log(value);
            console.log(calculatedvalue);
            document.querySelector('input').value = value;
        }
    });
});

const results = document.getElementById('results');

    const  pushBtn =(obj) =>{
         
        const pushed = obj.innerHTML;
         
        if (pushed == '=') {
            // Calculate
            results.innerHTML = eval(results.innerHTML);
             
        } else if (pushed == 'AC') {
            // All Clear
            results.innerHTML = '0';
             
        } else {
            if (results.innerHTML == '0') {
                results.innerHTML = pushed;
                 
            } else {
                results.innerHTML += pushed;   
            }
        }
    }
# IZ CALCULATOR ⚓
[![Build Status](https://izcalculator.herokuapp.com.svg?branch=master)](https://izcalculator.herokuapp.com)
[![Docs](https://izcalculator.herokuapp.com)](https://izcalculator.herokuapp.com)

[![License](https://img.shields.io/github/license/project-serum/calculator?color=ff69b4)](https://opensource.org/licenses/Apache-2.0)

izcaliculator is a  for IZ's [projects](https://izcalculator.herokuapp.com)  developer tools.

- Javascript for writing Calculator program


## Getting Started

Build stateful programs on iz

```javascript 

#[script.js]

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
```

## Contribution

Thank you for your interest in contributing to izcalculator! All contributions are welcome no
matter how big or small. 

When contributing, please make sure your code adheres to some basic coding guidlines:



## License
IZcalculator is licensed under [Apache 2.0](./LICENSE).

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in izcalculator by you, as defined in the Apache-2.0 license, shall be
licensed as above, without any additional terms or conditions.

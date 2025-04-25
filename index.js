const express = require("express");
const app = express();

const addition = (num1, num2) => {
    return num1 + num2;
}

app.get("/addition", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if(isNaN(num1)) {
            throw new Error("num1 is not a valid number");
        }

        if(isNaN(num2)) {
            throw new Error("num2 is not a valid number");
        }

        const result = addition(num1, num2);
        res.status(200).json({Answer: result});
    }
    catch(error) {
        console.log(error)
        res.status(400).json({msg:error.toString()})
    }
});

const subtraction = (num1, num2) => {
    return num1 - num2;
}

app.get("/subtraction", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if(isNaN(num1)) {
            throw new Error("num1 is not a valid number");
        }

        if(isNaN(num2)) {
            throw new Error("num2 is not a valid number");
        }

        const result = subtraction(num1, num2);
        res.status(200).json({Answer: result});
    }
    catch(error) {
        console.log(error)
        res.status(400).json({msg:error.toString()})
    }
});

const multiplication = (num1, num2) => {
    return num1 * num2;
}

app.get("/multiplication", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if(isNaN(num1)) {
            throw new Error("num1 is not a valid number");
        }

        if(isNaN(num2)) {
            throw new Error("num2 is not a valid number");
        }

        const result = multiplication(num1, num2);
        res.status(200).json({Answer: result});
    }
    catch(error) {
        console.log(error)
        res.status(400).json({msg:error.toString()})
    }
});

const division = (num1, num2) => {
    if(num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

app.get("/division", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if(isNaN(num1)) {
            throw new Error("num1 is not a valid number");
        }

        if(isNaN(num2)) {
            throw new Error("num2 is not a valid number");
        }

        const result = division(num1, num2);
        res.status(200).json({Answer: result});
    }
    catch(error) {
        console.log(error)
        res.status(400).json({msg:error.toString()})
    }
});

const exponentiation = (num1, num2) => {
    return num1 ** num2;
}

app.get("/exponentiation", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if(isNaN(num1)) {
            throw new Error("num1 is not a valid number");
        }

        if(isNaN(num2)) {
            throw new Error("num2 is not a valid number");
        }

        const result = exponentiation(num1, num2);
        res.status(200).json({Answer: result});
    }
    catch(error) {
        console.log(error)
        res.status(400).json({msg:error.toString()})
    }
});

const squareroot = (num1) => {
    if(num1 < 0) {
        throw new Error("Cannot calculate the square root of a negative number");
    }
    return Math.sqrt(num1);
}

app.get("/squareroot", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);

        if(isNaN(num1)) {
            throw new Error("num1 is not a valid number");
        }

        const result = squareroot(num1);
        res.status(200).json({Answer: result});
    }
    catch(error) {
        console.log(error)
        res.status(400).json({msg:error.toString()})
    }
});

const modulo = (num1, num2) => {
    if(num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 % num2;
}

app.get("/modulo", (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if(isNaN(num1)) {
            throw new Error("num1 is not a valid number");
        }

        if(isNaN(num2)) {
            throw new Error("num2 is not a valid number");
        }

        const result = modulo(num1, num2);
        res.status(200).json({Answer: result});
    }
    catch(error) {
        console.log(error)
        res.status(400).json({msg:error.toString()})
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})


//Detailed Documentation:
//1. Imported the required "express" module and created an Express application.
//2. A function that performs the API endpoint for addition.
//3. Served the addition requests to validate inputs, perform addition, send responses and handle errors.
//4. A function that performs the API endpoint for subtraction.
//5. Served the subtraction requests to validate inputs, perform subtraction, send responses and handle errors.
//6. A function that performs the API endpoint for multiplication.
//7. Served the multiplication requests to validate inputs, perform multiplication, send responses and handle errors.
//8. A function that performs the API endpoint for division.
//9. Served the division requests to validate inputs, perform division, send responses and handle errors.
//10. A function that performs the API endpoint for exponentiation.
//11. Served the exponentiation requests to validate inputs, perform exponentiation, send responses and handle errors.
//12. A function that performs the API endpoint for square root.
//13. Served the square root requests to validate inputs, perform square root, send responses and handle errors.
//14. A function that performs the API endpoint for modulo.
//15. Served the modulo requests to validate inputs, perform modulo, send responses and handle errors.
//16. For starting the server.
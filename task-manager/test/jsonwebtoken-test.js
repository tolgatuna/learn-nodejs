const jwt = require('jsonwebtoken');

const myTestFunc = async () => {
    const privateKey = 'thisismyprivatekey';
    const token = await jwt.sign({_id: "12312421asd12"}, privateKey, {expiresIn: '0 seconds'});
    console.log(token);

    try {
        const data = jwt.verify(token, privateKey);
        console.log('Data : ', data);
    } catch (e) {
        console.log('Error: ', e.message);
    }
};

myTestFunc();
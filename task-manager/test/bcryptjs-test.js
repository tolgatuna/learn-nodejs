const bcrypt = require('bcryptjs');

const testFunc = async () => {
    const password = 'Red12345!';
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(password, hashedPassword);
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Is match: ', isMatch);
};

testFunc();
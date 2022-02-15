const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => { 
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there is an error, reject the promise and send the error to the .catch() method
            if(err){
                reject(err);
                //return out of the function here to make sure the promise doesn't execute resolve 
                return;
            }

            //if everything went, resolve the promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File Created!'
            })
        })
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Copied!'
            })
        })
    })
};

module.exports = { writeFile, copyFile };

//is the same as ^^^. as long as the key name and value are the same
// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Not is a number ${base}`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }
        resolve(data);
    });
};

let createFile = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Not is a number ${base}`);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    createFile,
    listarTabla
}
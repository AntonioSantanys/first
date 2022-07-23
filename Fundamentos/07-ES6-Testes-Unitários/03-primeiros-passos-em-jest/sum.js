const sum = (a, b) => {
if(typeof a !== 'number' || typeof b !== 'number') {
   throw new Error('Os valores precisam ser numéricos');
}

return a + b;
}


console.log(sum(2, 4));





module.exports = sum;
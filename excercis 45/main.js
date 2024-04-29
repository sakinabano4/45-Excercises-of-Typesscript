"use strict";
// QUESTION 45 
// 1ST EXAMPLE
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const CarInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return CarInfo;
}
;
let answere = storeCarInfo('Honda', 'Civic', { color: 'black', sunroof: "true" }, { features: ['Navigation', 'power window', 'year2020'] });
console.log(answere);

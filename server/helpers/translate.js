const translate = require('@vitalets/google-translate-api');

// translate('Ik spreek Engels', {to: 'id'}).then(res => {
//     console.log(res.text);
//     //=> I speak English
//     console.log(res.from.language.iso);
//     //=> nl
// }).catch(err => {
//     console.error(err);
// });

function translateToIna(){

    translate('Ik spreek Engels', {to: 'id'})


}
// console.log(translateToIna())

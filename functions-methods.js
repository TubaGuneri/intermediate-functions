// // Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// // Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.
//
//
// /* Opdracht  1 */
// // Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// // ---- Verwachte uitkomsten:
// // getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// // getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// // getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
//
function getEmailDomain (email) {
const parts = email.split('@');
console.log('parts: ', parts);
return parts [1];

// if (parts.length >= 2) {
//         return parts [parts.length -1];
//     }  else {
//         return email;
//     }
//

}

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));
//
//
//
// /* Opdracht  2 */
// // Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// // ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function  typeOfEmail(emailAdress) {

    const arrayPart = emailAdress. split('@');
    if (arrayPart[1] === 'novi-education.nl') {
        return 'Student';
    } else if (arrayPart[1] === 'novi.nl') {
        return 'Medewerker';
    } else if (arrayPart[1] === 'outlook.com' || 'gmail.com') {
        return 'Extern';
    }
 }

console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@gmail.com"));
//
// // alternatief
//
function typeOfEmail2(emailAdress){
    const arrayPart = emailAdress.split('@')[1];
    // console.log(arrayPart);

    switch (arrayPart) {
        case 'novi-education.nl':
            return "Student";
        case 'novi.nl':
            return "Medewerker";
        default:
            return "Extern";
    }
}
console.log(typeOfEmail2("n.eeken@novi-education.nl"));
console.log(typeOfEmail2("t.mellink@novi.nl"));
console.log(typeOfEmail2("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail2("a.wiersma@gmail.com"));

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:git
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (emailAdress) {
if (emailAdress.includes('@') && !emailAdress.includes(',') && emailAdress.lastIndexOf('.') !== emailAdress.length-1) {
    return true;
} else {
    return false;
}
}

    // if (emailAdress.includes('@')){
    //     return true;
    // } else if(emailAdress.includes(',')){
    //     return false;
    // } else if (emailAdress.lastIndexOf('.') !== emailAdress.length-1){
    // }

    // switch (emailAdress) {
    // case emailAdress.includes('@'):
    //     return 'true';
    // case emailAdress.includes(','):
    //     return 'false';
    // case emailAdress.indexOf('.') === emailAdress.length-1):
    //     return 'false';


console.log(checkEmailValidity("n.eeken@novi.nl"));

console.log(checkEmailValidity("tessmellink@novi.nl"));

console.log(checkEmailValidity("n.eekenanovi.nl"));

console.log(checkEmailValidity("n.eeken@novinl."));

console.log(checkEmailValidity("tessmellink@novi,nl"));




// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

    let countGraduated = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
         countGraduated++;
        }

}
console.log(countGraduated);
//
// /*  1b: Omschrijven tot een herbruikbare functie   */
// // Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// // Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// // Log het antwoord in de terminal.
//
// // ---- Verwachte uitkomsten:
// // cumLaude(grades) geeft 6
// // cumLaude([6, 4, 5]) geeft 0
// // cumLaude([8, 9, 4, 6, 10]) geeft 3
//
//
function cumLaude(grades) {
    let countGraduated = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
           countGraduated++;
        }
    } return countGraduated;
}

const grade1 = [6, 4, 5];
const grade2 = [8, 9, 4, 6, 10];

console.log(cumLaude(grades));
console.log(cumLaude(grade1));
console.log(cumLaude(grade2));


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

// getallen  van array bij elkaar optellen
// delen door aantal items van array grades
//


let sum =0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}
const averageOfGrades = sum / grades.length;
console.log(averageOfGrades);


// const average= grades => grades.reduce((p,c) => p + c, 0) / grades.length;


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

// 2b & 2c

function averageGrade(grades) {
    let sum = 0;

    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    const averageOfGrades = (sum / grades.length).toFixed(2);
    return averageOfGrades
}

const averageGrade1 = [6, 4, 5];
const averageGrade2 = [8, 9, 4, 6, 10];
//
console.log(averageGrade(grades));
console.log(averageGrade(averageGrade1));
console.log(averageGrade(averageGrade2));

//
// // Math.round(average);
//
//
//
// const resultAverage = averageGrade(grades).toFixed(2);
// console.log(resultAverage);

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// Laagste waarde is 0

let currentMaxGrade = 0;

// iedere waarde van array langsgaan en die vergelijken met 0. iedere waarde die hoger is dan 0 is telkens de nieuwe hoogste waarde.

for (let i = 0; i < grades.length; i++){
    if (grades[i] > currentMaxGrade) {
        currentMaxGrade = grades[i];
    }
}

console.log(currentMaxGrade);

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade (grades) {
    let currentMaxGrade = 0;

    for (let i = 0; i < grades.length; i++){
        if (grades[i] > currentMaxGrade) {
            currentMaxGrade = grades[i];
        }
    }
    return currentMaxGrade;
}
const checkMaxGrade = highestGrade(grades);
const checkMaxGrade1 = highestGrade([6, 4, 5]);
const checkMaxGrade2 = highestGrade([8, 9, 4, 6, 10]);

console.log(`${checkMaxGrade},\n ${checkMaxGrade1}, \n ${checkMaxGrade2}`);

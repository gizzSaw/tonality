//const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',];
let notes = [];

let notesHTML = document.querySelectorAll('.note');
let ladHTML = document.querySelectorAll('.lad');
let selectedNote, selectedLad;

document.querySelector('.button1').addEventListener('click', outNotes);
document.querySelector('.button2').addEventListener('click', outChords);

// console.log("Ля Минор: ", getScale('A', "min"));
// console.log("До Мажор: ", getScale('C', "maj"));
// console.log("Си Блюз: ", getScale('B'));


function getNotes() { // получем массив нот из хтмл
    for (let i = 0; i < notesHTML.length; i++) {
        notes.push(notesHTML[i].value)
    }
}
function getSelectedNote() { //получаем выбранную ноту
    for (let i = 0; i < notesHTML.length; i++) {
        if (notesHTML[i].checked) {
            selectedNote = notesHTML[i].value;
        }
    }
    return selectedNote;
}
function getSelectedLad() { //получаем выбранную гамму
    for (let i = 0; i < ladHTML.length; i++) {
        if (ladHTML[i].checked) {
            selectedLad = ladHTML[i].value;
        }
    }
    return selectedLad;
}



function getScale(note, lad) {
    getNotes(); // получаем ноты для дальнейшей работы из хтмл
    const index = notes.indexOf(note);

    let int2, int3, int4, int5, int6, int7 = 0;

    if (lad === "maj") {
        int2 = 2;
        int3 = 4;
        int4 = 5;
        int5 = 7;
        int6 = 9;
        int7 = 11;
    } else if (lad === "min") {
        int2 = 2;
        int3 = 3;
        int4 = 5;
        int5 = 7;
        int6 = 8;
        int7 = 10;
    } else if (lad ==="blues") {
        int2 = 2;
        int3 = 3;
        int4 = 5;
        int5 = 6;
        int6 = 7;
        int7 = 10;
    }

    const step1 = notes[index];                                                           // Прима
    const step2 = notes[index + int2] ? notes[index + int2] : notes[index + int2 - 12];   // Секунда
    const step3 = notes[index + int3] ? notes[index + int3] : notes[index + int3 - 12];   // Терция
    const step4 = notes[index + int4] ? notes[index + int4] : notes[index + int4 - 12];   // Кварта 
    const step5 = notes[index + int5] ? notes[index + int5] : notes[index + int5 - 12];   // Квинта
    const step6 = notes[index + int6] ? notes[index + int6] : notes[index + int6 - 12];   // Секста
    const step7 = notes[index + int7] ? notes[index + int7] : notes[index + int7 - 12];   // Септима
    let res = [step1, step2, step3, step4, step5, step6, step7];
    //console.log(res);
    return res
}

function getChords(note, lad) {
    const notes = getScale(note, lad);
    let chords = [];
    
    if (lad === 'maj') {
        for (let i = 0; i < notes.length; i++) {
            if(i === 1 || i === 2 ||  i === 5) {              // выборка миноров
                chords.push(notes[i].concat('m'));
            } else if (i === 0 || i === 3 || i === 4) {       //выборка мажоров
                chords.push(notes[i]);
            } else if (i === 6){
                chords.push(notes[i].concat('dim'));          // один уменьшенный
            }
        }
    } else if (lad === 'min') {
        for (let i = 0; i < notes.length; i++) {
            if(i === 0 || i === 3 ||  i === 4) {              // выборка миноров
                chords.push(notes[i].concat('m'));
            } else if (i === 2 || i === 5 || i === 6) {       //выборка мажоров
                chords.push(notes[i]);
            } else if (i === 1){                              // один уменьшенный
                chords.push(notes[i].concat('dim'));
            } 
        }
    } else {
        console.log(note + ' блюзовая гамма без аккордов');
        return
    }
    return chords;
}


console.log(getChords('D', "blues"));
console.log(getChords('C', "maj"));
console.log(getChords('A', "min"));

// минор 0 3 4
// мажор 2 5 6
// уменьшенный 1


// ====== Функции вывода ======
function outNotes() { //выводим ноты по нажатию
    getSelectedNote();
    getSelectedLad();
    let out = document.querySelector('.out-block');
    if(selectedNote && selectedLad) {
        out.innerHTML = `Результат ${getScale(selectedNote, selectedLad).join(' ')}`
    } else {
        console.log("Ми блюзовая гамма ", getScale('E', 'blues'));
    }
}
function outChords() { //выводим аккорды по нажатию
    getSelectedNote();
    getSelectedLad();
    let out = document.querySelector('.out-block');
    if(selectedNote && selectedLad) {
        out.innerHTML = `Результат ${getChords(selectedNote, selectedLad).join(' ')}`
    } else {
        console.log("Ми блюзовая гамма ", getChords('E', 'blues'));
    }
}
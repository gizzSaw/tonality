//const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',];
let notes = [];

let notesHTML = document.querySelectorAll('.note');
let ladHTML = document.querySelectorAll('.lad');
let selectedNote, selectedLad;

document.querySelector('.button3').addEventListener('click', out)

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
function out() { //выводим в консоль
    getSelectedNote();
    getSelectedLad();
    let out = document.querySelector('.out-block');
    if(selectedNote && selectedLad) {
        console.log("Результат ", getScale(selectedNote, selectedLad));
        out.innerHTML = `Результат ${getScale(selectedNote, selectedLad).join(' ')}`
    } else {
        console.log("Ми блюзовая гамма ", getScale('E', 'blues'));
    }
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

    const step1 = notes[index]; // 	Прима
    const step2 = notes[index + int2] ? notes[index + int2] : notes[index + int2 - 12]; // Секунда
    const step3 = notes[index + int3] ? notes[index + int3] : notes[index + int3 - 12]; // Терция
    const step4 = notes[index + int4] ? notes[index + int4] : notes[index + int4 - 12]; // Кварта 
    const step5 = notes[index + int5] ? notes[index + int5] : notes[index + int5 - 12]; // Квинта
    const step6 = notes[index + int6] ? notes[index + int6] : notes[index + int6 - 12]; // Секста
    const step7 = notes[index + int7] ? notes[index + int7] : notes[index + int7 - 12]; // Септима
    let res = [step1, step2, step3, step4, step5, step6, step7];
    // console.log(res);
    return res
}


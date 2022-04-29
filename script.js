const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B',];

console.log("Ля Минор: ", getScale('A', "min"));
console.log("До Мажор: ", getScale('C', "maj"));
console.log("Си Блюз: ", getScale('B'));


function getScale(note, lad) {
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
    } else {
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






// function getResult(note) {
//     const p = document.querySelector('p');
//     p.innerHTML = getMajorScale(note);

// }

// for (let i = 0; i < notes.length; i++) {
//     getScale(notes[i], "min")
// }



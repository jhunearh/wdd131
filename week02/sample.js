const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i])
    }
}
// for (i = 0; i < studentReport.length; i++) {
//     let score = studentReport[i];
//     if (score < LIMIT) {
//         console.log(score);
//     }
// }

/*
// Sonsuz Döngü
for(;;){
    console.log("peekaboo");
}
*/

let n = 1;
for(;;){ // for(;true;) → default
    console.log(n++);
    if (n == 200)
        break; // Sonsuz döngüyü içerden kırdık
}
/* console.log(2+2); */ /* Output: 4 */

// let n = 1;
// Kod tekrarı olur. Daha büyük sayılarda tek tek yazılması mı gerekecek?
/*
console.log(n++); // Output: 1
console.log(n++); // Output: 2
console.log(n++); // Output: 3
console.log(n++); // Output: 4
console.log(n++); // Output: 5
*/
//Daha dinamik bir yapıya ihtiyaç var. Kod tekrarını önlememiz gerekecek. Kaç kere tekrar edeceğini bilmediğimiz durumlar da olabilir.

let n = 1; // ilk değer atama (initialization)
while(n < 6) { // koşul (condition)
    // true olduğu sürece kod bloğu çalışacaktır.
    // while'ın gövdesindeki kod while içinde belirtilen koşul "true" sonuç verdikçe çalışır.
    console.log(n);
    n = n + 1; // arttırma/azaltma (increment/decrement) | iterator
}
console.log("bye bye");
console.log(n); // Output: 6

// While Döngüsü ile For Döngüsü arasındaki fark nedir?


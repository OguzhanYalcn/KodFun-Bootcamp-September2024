/* 
    for (initialization; condition; iterator)
    body
*/
// for ile yapılan her şey while ile yapılabilir.
// for daha derli toplu bir yazım.
// for döngüsünü anlamamız için şunları bilmek gerek:
// initialization bir kere çalışır bir daha çalışmaz. Koşul "false" olana kadar çalışmaya devam eder.
// while döngüsünün for ile yazım şekli.
for (let n = 1; n < 6; n++){
    console.log(n);
}
// burada n'ye erişilemez çünkü "n" local scope'ta. "n" for'un bodysinde tanımlı.
// while döngüsündeyken global scope'ta tanımlıydı.
/* 
Global scope'ta yazarak da erişebiliriz.
*/
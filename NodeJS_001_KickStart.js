function crt(deger = 100){
    return Math.ceil(Math.random() * deger);
}

a = crt();
b= crt();
c = crt();

console.log("Rastgele 3 saıdan en büyüğü");

if ( a > b && a > c){
    console.log("en büyük sayı a dır ve a =",a);
}
else if ( b > a && b > c) {
    console.log("en büyük sayı b dir ve b =",b);
}
else if ( c > a && c > a) {
    console.log("en büyük sayı c dir ve c =",c);
}
else {
    console.log("Bütün sayılar eşittir");
}
function sayiUret(ustLimit = 49 ){
   return (Math.ceil(Math.random() * ustLimit))
}

sayiUret()

let sayi1 = sayiUret()  
let sayi2 = sayiUret()
let sayi3 = sayiUret()
let sayi4 = sayiUret()
let sayi5 = sayiUret()
let sayi6 = sayiUret()

console.log('Kolon : ' + sayi1 + ' ' 
+ sayi2 + ' '+ sayi3 + ' '+ sayi4 + ' '+ sayi5 + ' '+ sayi6)

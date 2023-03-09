//64 bytes = 512 bits
let byteSize = 64;
//buffer de 64 bytes
var buffer = new ArrayBuffer(byteSize);
//i32array puede tener 4 bytes en cada elemento, lo estamos definiendo del tamaño de 64 bytes
//que es el tamaño de buffer, que asu vez toma el valor de bytes que declaramos, 64bytes/4bytes por elemento=16 bytes
//16bytes en total, cada uno de 8 bits, en total se crearán 16 elementos en el array i32view
var i32View = new Int32Array(buffer);

console.log(i32View);
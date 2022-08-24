function tabla(ini,end){
    for (let i=ini; i<=end; i++){
        let j=1;
        console.log("tabla del"+i);
        do{
            console.log(i+'*'+j+'='+i*j);
            j++;
        }while (j<=10)
    }
}
let ini=prompt("ingrese nro 1");
//parseInt(ini)//parsea un valor de string a entero
let end=prompt("ingrese nro 2");
tabla(parseInt(ini), parseInt(end));
print('Ingresa el primer numero: ');
var num1=Number(readline());
print('Ingresa el segundo numero: ');
var num2=Number(readline());
print('Ingresa el tercer numero: ');
var num3=Number(readline());

//Neutro Aditivo

if(num1==0)
    print('El 1er numero es neutro aditivo');
if(num2==0)
    print('El 2do numero es neutro aditivo');
if(num3==0)
    print('El 3er numero es neutro aditivo');


//Cuadrados
print('Cuadrados de los negativos: ')

if(num1<0)
    print('El 1er numero: '+(num1*num1));
if(num2<0)
    print('El 2do numero: '+(num2*num2));
if(num3<0)
    print('El 3er numero: '+(num3*num3));

//Perimetro

var per=num1+num2+num3;
print('El perimetro del triangulo es: '+per);

//raices
var raiz=Math.sqrt(num2*num2-4*num1*num3);
var chicha1=((-1*num2)+(raiz))/(2*num1);
var chicha2=((-1*num2)-(raiz))/(2*num1);

print('x1='+chicha1);
print('x2='+chicha2);

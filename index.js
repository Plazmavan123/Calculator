const clear = () =>{ // функция очистки значений при нажатии кнопки 'ac'
    a = '';
    b = '';
    sign ='';
    result = false;
    output.textContent = '0';
}
const plus_minus = () =>{ // функция для кнопки +/-
    if (a !=='' && b === '') {
        a = -a
        output.textContent = a
    }
    else{

        b = -b
        output.textContent = b

    }
   console.log(a,b)
    
}


const numbers = (event) => { //функция для рассчёта и обработки нажатых кнопок

    if (!event.target.classList.contains('btn')) { //если мимо кнопки щелкнули ничего не произойдет
        return;
    }
    if (event.target.classList.contains('ac')) { // если нажата кнопка ac выход из функции и запуск ф-ии очистки
        return;
    }
    if (event.target.classList.contains('plus-minus')) { // если нажата кнопка ac выход из функции и запуск ф-ии очистки
        return;
    }

    const key = event.target.textContent
    output.textContent = ''



   if (digits.includes(key)) {  //проверка того, является ли нажатая кнопка числом
        if (b === '' && sign ==='') {  
            
            a += key
            output.textContent = a;
            console.log(`a = ${a}, b = ${b}, sign = ${sign}`)
        }
        else if (a !=='' && b !=='' && result) {
            b = key;
            result = false
            output.textContent = b
        }
        else{
            b += key
            output.textContent = b;
            console.log(`a = ${a}, b = ${b}, sign = ${sign}`)
        }
        return
   }

   else if (signs.includes(key)) { //проверка того, является ли нажатая кнопка знаком
        sign = key;
        output.textContent = sign;
        console.log(`a = ${a}, b = ${b}, sign = ${sign}`)
        
   }    
   
   if (key === '=') { //обработка оператора =
    if (b == '') {
        b = a
    }
    
        switch (sign) { //обработка того, какой именно знак нажат
            case "+":
                a = (+a) + (+b)
                
                break;
            case "-":
                 a = a - b
                    
                 break;
             case "*":
                 a = a * b
                    
                 break;
            case "/":
                if (b === '0') {
                    output.textContent = 'Ошибка'
                    a = '';
                    b='';
                    sign ='';
                    return;
                }
                else{

                    a = a / b
                }
                       
                break;
            
            
        
            
        }
       output.textContent = a
       result = true
   }



}

//инициализация констант
const buttons = document.querySelector('.buttons')
const output = document.querySelector('.input-calc p')
const digits = ['1','2','3','4','5','6','7','8','9','0','.']
const signs = ['+','-','*','/','+/-','%']

// инициализация переменных
let a =''; //первое число
let b = ''; // второе число
let sign = ''; //знак
let result = false;


//реализация работы кнопки 'ac'
document.querySelector('.ac').addEventListener('click', clear)
document.querySelector('.plus-minus').addEventListener('click', plus_minus)

buttons.addEventListener('click', numbers) // создание обработчика нажатия кнопок
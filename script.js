/* ШАГ 1. Функция принимает строку, изменяет (или нет) и возвращает строку.
1. Получение строки
2. Проверка 
3. Перебор элементов строки с возможным изменением
4. Создане измененной строки
5. Возврат (вывод) измененной строки
ШАГ 2. Проверка входных данных: а) пустой ввод; б) пробел; в) преобразование в стороку; г) разбиение 
по пробелу в массив.
ШАГ 3. 
1. Получить строку;
2. Проверить введенные данные, если ничего не введено, выдать соообщение "Пустая строка.";
3. Если введен 1 или несколько пробелов, выдать соообщение "Пустая строка.";
4. Привести введенное значение к строке;
5. Разбить на массив по пробелу;
6. В цикле перебирать массив, если в слове 5 или больше букв, поменять порядок букв на обратный;
7. Записывать проверенные и (не)измененные значения в новый массив;
8. Вернуть(вывести) новую строку.
*/
const returnUserStr = (element) => {
    let changedString = '';
    if (typeof element !== 'string') {
        return console.error('Not a string');
    }
    if (element === null || element === ' ') {
        return console.log('Пустая строка.');

    } else {
        let wordsArray = element.split(' ');
        if (wordsArray.length === 0 || wordsArray.length === 1 && wordsArray[0] === ' ') {
            return console.log('Пустая строка.');
        }
        for (let i = 0; i < wordsArray.length; i++) {
            if (wordsArray[i].length >= 5) {
                let changeWord = wordsArray[i].split('');
                wordsArray[i] = "";
                for (let j = changeWord.length - 1; j >= 0; j--) {
                    wordsArray[i] += changeWord[j];
                }
            }
            changedString += (wordsArray[i] + ' ');
        }
        console.log(changedString);
    }
};

returnUserStr("Seriously this is the last one condition");

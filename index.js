let stack = [];
let a = 5;
let b = 2;
let str = "";
let operator = '+';
pushToStack(a);
pushToStack(b);
pushToStack(operator);
operator = '-';
pushToStack(10);
pushToStack(operator);

function pushToStack(el) {
    if(typeof(el) === "number")
    {
        str += el + ' ';
        stack.push(el)
    }
    else if(typeof(el) === "string")
    {
        str += el + ' ';
        if(stack.length > 1)
        {
            str += '=';
            let first = stack.pop();
            let second = stack.pop();
            let result;
            if(el === '+')
            {
                result = first + second;
            }
            else if(el === '-')
            {
                result = first - second;
            }
            else if(el === '*')
            {
                result = first * second;
            }
            else if(el === '/')
            {
                result = first / second;
            }
            pushToStack(result);
        }
    }
    console.log(str);
}
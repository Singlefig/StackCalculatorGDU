let stack = [];
let a = 5;
let b = 2;
let operator = '+';
console.log(typeof(a));
console.log(typeof(operator));
pushToStack(a);
pushToStack(b);
pushToStack(operator);
operator = '-';
pushToStack(10);
pushToStack(operator);
console.log(stack);
console.log(stack.pop());

function pushToStack(el) {
    if(typeof(el) === "number")
    {
        stack.push(el)
    }
    else if(typeof(el) === "string")
    {
        if(stack.length > 1)
        {
            let first = stack.pop();
            let second = stack.pop();
            if(el === '+')
            {
                let result = first + second;
                stack.push(result);
            }
            else if(el === '-')
            {
                let result = first - second;
                stack.push(result);
            }
            else if(el === '*')
            {
                let result = first * second;
                stack.push(result);
            }
            else if(el === '/')
            {
                let result = first / second;
                stack.push(result);
            }
        }
    }
    let str = "";
    for(let i = 0;i < stack.length; i++)
    {
        str += stack[i]+' ';
    }
    console.log(str);
}
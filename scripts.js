var sec=0
var min=0
var hr=0
var interval

function twoNumbers(number){
    if(number<10){
        return('0'+number)
    }else{
        return(number)
    }
}

function start(){
    counter()
    interval= setInterval(counter,1000)
}

function pause(){
    clearInterval(interval)
}

function cancel(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('counter').innerText='00:00:00'
}

function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('counter').innerText=twoNumbers(hr)+":"+twoNumbers(min)+":"+twoNumbers(sec)
}

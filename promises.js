let function1= (name,callback)=>{
    console.log(name);
    callback()
}
let function2 = ()=>{
    console.log("hello");
}
function1("reshma",function2)
function calltime(){
    setTimeout(()=>{
     console.log("1");
     setTimeout(()=>{
         console.log("2");
         setTimeout(()=>{
             console.log("3");
             setTimeout(()=>{
                 console.log("4");
                 setTimeout(()=>{
                     console.log("5");
                     setTimeout(()=>{
                         console.log("6")
                         setTimeout(()=>{
                             console.log("7")
                         },7000)
                     },6000)
                    },5000)
             },4000)
            },3000)
     },2000)
    },1000)
 }
 calltime()

 

 //Q3 "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
let prntnumber = (tme, num) => {
    return new Promise((res, rej) => {
        if(num){
            setTimeout(()=>{
                res(num());
            }, tme)
        }
        else{
            rej(console.log("No Number"))
        }

    })
}

prntnumber(0, ()=>console.log("Number"))
.then(()=>{
    prntnumber(1000, ()=>console.log("1"))
})
.then(()=>{
    prntnumber(2000, ()=>console.log("2"))
})
.then(()=>{
    prntnumber(3000, ()=>console.log("3"))
})
.then(()=>{
    prntnumber(4000, ()=>console.log("4"))
})
.then(()=>{
    prntnumber(5000, ()=>console.log("5"))
})
.then(()=>{
    prntnumber(6000, ()=>console.log("6"))
})
.then(()=>{
    prntnumber(7000, ()=>console.log("7"))
})

//Q4 Create a promise function accepting a argument, if yes is passed to the function then it should go to 
// resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and 
// catch the error and print Promise Rejected 

let x = function(condition){
    return new Promise((resolve, reject)=>{
        if(condition == 'yes'){
            resolve('promise resolved')
        }
        else{
            reject('promise rejected')
        }
    })
}
x('yes').then(response => console.log(response)).catch(err=>console.log(err))


//Q5 Create examples to explain callback function

function fun(a, b, add) {
    console.log(a);
    add(2, 3);
    console.log(b);

}

function add(c, d) {
    console.log(`sum is ${c + d}`);
}

fun(2, 3, add)


//Q6 Create examples to explain callback hell function

function CallBackDemo() {
    CallBackDemo1()
    function CallBackDemo1() {
        CallBackDemo2()
        function CallBackDemo2() {
            CallBackDemo3()
            function CallBackDemo3() {
                CallBackDemo4()
                function CallBackDemo4() {
                    console.log("Callback Functon");
                }
            }
        }
    }
}
CallBackDemo()

//Q7 Create examples to explain promises function

let message = (num) => {
    return new Promise((res, rej) => {
        if(num){
            res(num())
        }
        else{
            rej(console.log("No Data"))
        }

    })
}

message(()=>console.log("Message is printed"))
.then(()=>{
    prntdata(()=>console.log("Promise Functon"))
})
.catch(()=>console.log("No Data available"))


//Q8 Create examples to explain async await function


let vari=5;
console.log(vari);
add1();
console.log("Hello");
function add1(){
    setTimeout(()=>{
        console.log("Async Await Called");

    }, 2000)
}

//Q10 Create examples to explain promise.all function

const fun1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
    },1000);
  });
  const fun2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2000);
  });
  const fun3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3000);
  });
  
  Promise.all([fun1, fun2, fun3]).then((results) => {
    const total = results.reduce((p, c) => p + c);
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);
  });
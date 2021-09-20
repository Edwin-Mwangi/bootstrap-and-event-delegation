const quizAnswers = ['B','B','B','B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check user answers
    userAnswers.forEach((answer,index) =>{
        if(answer === quizAnswers[index]){
            score += 25;
        }
    });

    //show results on page

    scrollTo(0,0); //window is already inferred ie window.scrollTo();...brings user to pagetop  

    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove("d-none");

    // const span = document.querySelector('span');
    // span.textContent = score + '%';
    // console.log(score);

    //animate the score
    let output = 0;
    const timer = setInterval(() =>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    },20);
    

});
    //the above when you click submit does not return to beginning of page to show results
    //Window obj used in Js for this(encompasses/displays whole web page )
    //typing window in console shows all properties available eg window.outerWidth...or outerWidth...window not necessary
    //for example
    console.log('hello');
    window.console.log('hello');///the two are similar...window automatically inferred as it's in global obj

    //alert('hello');
    //window.alert('hello')//..same concept

    //window not necessary
    //the function below has 2 params it executes a certain func after a specific amount of time
    setTimeout(() =>{
       // alert('hello');
    }, 3000)//time in ms

    //making a cool count effect

    //we use the setInterval(takes 2 args like above) it fires the callback after certain time intervals
    // setInterval(() =>{
    //     console.log('hello people');
    // },1000);    //time in ms

    //stopping set interval....

    let i = 0;
    
    const timer = setInterval(() =>{
        console.log('hello people');
        i++;
        if(i === 5){
            clearInterval(timer);//window obj method
        }
    },1000);

    //we are using this technique to animate our score




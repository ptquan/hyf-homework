console.log('Script loaded');
const url ='https://gist.githubusercontent.com/benna100/13f5850bf78f59d9baea915cbbe9f258/raw/ef8f2b137b07b05e8f593cef0281b4f1f0aba79a/JS-3%2520questions';
const createQuiz = function(){
    return {
        fetchQuestions : function(url){
             return fetch(url).then(res => res.json())
            },
            render :function (question) {
                const ul = document.querySelector('ul.questions')

                question.forEach((element) => {
                    const li = document.createElement('li');
                    ul.appendChild(li)

                    const h2 = document.createElement('h2');
                    li.appendChild(h2);
                    h2.innerText = element.title;

                    const p = document.createElement('p');
                    li.appendChild(p);
                    p.innerText = element.content;

                    const selectAnswer = document.createElement('select');
                   
                    li.appendChild(selectAnswer);
 
                    element.options.forEach(x => {
                        const optionElement = document.createElement('option');
                        selectAnswer.appendChild(optionElement)
                        optionElement.innerText = x.content;
                        optionElement.value = x.correct;
                    })
                });
            },
            showScore : function(event) {
                event.preventDefault();
                console.log('click');
                let score = 0;
              const selector =  [...document.querySelectorAll('select')]

              selector.forEach((select)=> {
                    console.log(select);
                    const i = select.selectedIndex;
                    const answer = select.options[i].value;

                    if(answer === 'true') {
                        count++;
                    }
                });
                const total = selector.length
                document.querySelector('.result').innerText = score + '/' + total;

                if (score === total){
                    const confetti = new ConfettiGenerator({target: 'confetti'});
                    confetti.render();
                }
            }
    }
};
const hyfQuiz = createQuiz();
hyfQuiz.fetchQuestions(url)
.then((res) => {
   return res
})
.then(x => {
    hyfQuiz.render(x)
})

document.querySelector('button')
.addEventListener('click' , hyfQuiz.showScore);

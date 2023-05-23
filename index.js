// обработка ответов на 1 тест

const sum = () => {
  let input = document.querySelectorAll('input');
  console.log(input);
  let x = 0;
  input.forEach((el) => {
    x += parseInt(el.value);

    const motivation = document.querySelector('h1');
    const text1 = 'Залупа коня';
    const text2 = 'Залупа коня средняя';
    const text3 = 'Залупа коня больше средней';
    const text4 = 'Залупа коня огромная';

    if (x <= 10) {
      motivation.innerText = text1;
    } else if (x <= 20) {
      motivation.innerText = text2;
    } else if (x <= 40) {
      motivation.innerText = text3;
    } else if (x > 100) {
      motivation.innerText = text4;
    }
  });

  console.log(x);

  return input;
};



// Авторизация

const logButton = document.querySelector('.lodButton');

logButton.onclick = () => {
  login();
};


const login = () => {
  fakeLogin = 'Andrey';
  fakePass = '12345';

  const log = document.querySelector('.loginInput');
  const pass = document.querySelector('.password');

  if (log.value === fakeLogin && pass.value === fakePass) {
    document.querySelector('.userName').innerHTML+=`${log.value}`
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.login').remove();
    document.querySelector('.header__nav').style.display = 'flex';
    document.querySelector('.hidden').style.display = 'block';
    document.querySelector('.main-info').style.display = 'block';

    const tab1 = document.querySelector('.tab1');
    tab1.onclick = () => {
      tab1Click();
    };

    const tab2 = document.querySelector('.tab2');
    tab2.onclick = () => {
      tab2Click();
    };

    const tab3 = document.querySelector('.tab3');
    tab3.onclick = () => {
      tab3Click();
    };
  }
};






// массив со вторым тестом
const test2 = [
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
  { question: 'dsfgdfgdfgdfgdfgd', answer: false },
];

const test1 = [
  { question: 'dsgdfgdfhgdh', answer: 0 },
  { question: 'dsgdfgdfhgdh', answer: 0 },
  { question: 'dsgdfgdfhgdh', answer: 0 },
  { question: 'dsgdfgdfhgdh', answer: 0 },
  { question: 'dsgdfgdfhgdh', answer: 0 },
];

// Обработка клико по 1 тесту

const tab1Click = () => {
  if (document.querySelector('.main-info')) {
    document.querySelector('.main-info').style.display = 'none';
  }

  if (document.querySelector('.tab-2')) {
    document.querySelector('.tab-2').remove();
  }
  if (document.querySelector('.tab-3')) {
    document.querySelector('.tab-3').remove();
  }
  const currentDiv = document.querySelector('.main');
  if (!document.querySelector('.tab-1')) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab-1');

    currentDiv.appendChild(newTab);

    test1.forEach((el, index) => {
      newTab.innerHTML += `<label for="">${(index += 1)}
   ${el.question} <input class="qw" type="number"
        value=${el.answer}>
</label>`;
    });

    newTab.innerHTML += `  <button class='test1__submit-button' onclick="sum()">Определить уровень мотивации</button>
    <h1></h1>`;
  }
};

// Обработка клико по 2 тесту
const tab2Click = () => {
  if (document.querySelector('.main-info')) {
    document.querySelector('.main-info').style.display = 'none';
  }

  if (document.querySelector('.tab-1')) {
    document.querySelector('.tab-1').remove();
  }
  if (document.querySelector('.tab-3')) {
    document.querySelector('.tab-3').remove();
  }

  const currentDiv = document.querySelector('.main');
  if (!document.querySelector('.tab-2')) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab-2');
    currentDiv.appendChild(newTab);
    test2.forEach((el, index) => {
      newTab.innerHTML += `<label for="">${(index += 1)}
   ${el.question} <input class="qw" type="checkbox"
        value=${el.answer}>
</label>`;
    });
    newTab.innerHTML += `<button class="test2-sumbit">Отправить ответы</button>`;
    const sumButton = document.querySelector('.test2-sumbit');
    sumButton.onclick = () => {
      test2WriteAnswers();
    };
  }
};

// Функция для записи ответов на 2 тест в массив test2
const test2WriteAnswers = () => {
  const inputsList = document.querySelectorAll('.qw');
  inputsList.forEach((el, index) => {
    test2[index].answer = el.checked;
  });
  console.log(test2);
  test2GetResult();
};

// Функция для подсчета результатов в тесте 2
// По 1 баллу начисляется за ответ «да» на вопросы: 2–5, 7–10, 14–17, 21, 22, 25–30, 32, 37, 41 и
// «нет» — на следующие: 6, 13, 18, 20, 24, 31, 36, 38 и 39. Ответы на вопросы 1, 11, 12, 19, 23, 33–35 и 40 не учитываются. Подсчитывается общая сумма баллов.

const test2GetResult = () => {
  marks = 0;

  yesAnswers = [
    2, 3, 4, 5, 7, 8, 9, 10, 14, 15, 16, 17, 21, 22, 25, 26, 27, 28, 29, 30, 32,
    37, 41,
  ];

  noAnswers = [6, 13, 18, 20, 24, 31, 36, 38, 39];

  yesAnswers.forEach((el) => {
    if (test2[el - 1].answer === true) {
      marks += 1;
    }
  });
  noAnswers.forEach((el) => {
    if (test2[el - 1].answer === false) {
      marks += 1;
    }
  });

  console.log(marks);
  const div = document.querySelector('.tab-2');
  if (marks >= 1 && marks <= 10) {
    div.innerHTML += `<h1>Низкая мотивация</h1>`;
  } else if (marks >= 11 && marks <= 16) {
    div.innerHTML += `<h1>Средняя мотивация</h1>`;
  } else if (marks >= 17 && marks <= 20) {
    div.innerHTML += `<h1>Умеренно высокая мотивация</h1>`;
  } else if (marks >= 21) {
    div.innerHTML += `<h1>Высокая мотивация</h1>`;
  }
};




// Обработка клика по 3 тесту
const test3 = [
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
  { question: 'gfdhfgjhhg', answer: '', variants: ['ебите меня семеро', 'В рот мне ноги', 'хасбик лох', 'ебать дилом']},
 
];

const tab3Click = () => {
  if (document.querySelector('.main-info')) {
    document.querySelector('.main-info').style.display = 'none';
  }

  if (document.querySelector('.tab-1')) {
    document.querySelector('.tab-1').remove();
  }
  if (document.querySelector('.tab-2')) {
    document.querySelector('.tab-2').remove();
  }
  const currentDiv = document.querySelector('.main');
  if (!document.querySelector('.tab-3')) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab-3');
    currentDiv.appendChild(newTab);

    test3.forEach((el, index) => {
      newTab.innerHTML += `<label class='test3-answer' for="">${(index += 1)}
   ${el.question} 
   <form>
   А) ${el.variants[0]} <input class="qw" type="radio" name='${el.index}' value='A'  id='${el.index}1'  ><br>
   Б) ${el.variants[1]} <input class="qw" type="radio"  name='${el.index}' value='B' id='${el.index}2'  ><br>
   В) ${el.variants[2]}<input class="qw" type="radio"  name='${el.index}' value='V' id='${el.index}3'><br>
   Г) ${el.variants[3]}<input class="qw" type="radio"  name='${el.index}' value='G'  id='${el.index}4'><br>
   <form/>
</label>`;
    });
    newTab.innerHTML += `<button class="test3-sumbit">Отправить ответы</button>`;
    const sumButton = document.querySelector('.test3-sumbit');
    sumButton.onclick = () => {
     

test3WriteAnswers()

    };
  }
};


// запись ответов на тест 3 в массив

const test3WriteAnswers=()=>{
  const questions=document.querySelectorAll('.test3-answer')
  console.log(questions)
let answers =[]
let counter=0
  questions.forEach((el)=>{
    answers=el.querySelectorAll('.qw')
  
    answers.forEach((el)=>{
      if(el.checked===true){
        test3[counter].answer=el.value
      }
    })
    counter+=1   
  })
  // console.log(test3)
  test3GetResult()
}



const test3GetResult = () => {


  let factors=[0,0,0,0,0,0,0,0,0,0,0,0]

// обработка 1 вопроса

  if(test3[0].answer==='A'){
factors[0]+=1
  }

  if(test3[0].answer==='B'){
factors[4]+=1
  }

  if(test3[0].answer==='V'){
factors[7]+=1
  }

  if(test3[0].answer==='G'){
factors[10]+=1
  }



// обработка 2 вопроса

if(test3[1].answer==='A'){
  factors[2]+=1
    }
  
    if(test3[1].answer==='B'){
  factors[5]+=1
    }
  
    if(test3[1].answer==='V'){
  factors[11]+=1
    }
  
    if(test3[1].answer==='G'){
  factors[1]+=1
    }
  
// обработка 3 вопроса

if(test3[2].answer==='A'){
  factors[8]+=1
    }
  
    if(test3[2].answer==='B'){
  factors[3]+=1
    }
  
    if(test3[2].answer==='V'){
  factors[2]+=1
    }
  
    if(test3[2].answer==='G'){
  factors[4]+=1
    }
// обработка 4 вопроса

if(test3[3].answer==='A'){
  factors[3]+=1
    }
  
    if(test3[3].answer==='B'){
  factors[5]+=1
    }
  
    if(test3[3].answer==='V'){
  factors[2]+=1
    }
  
    if(test3[3].answer==='G'){
  factors[8]+=1
    }
// обработка 5 вопроса

if(test3[4].answer==='A'){
  factors[2]+=1
    }
  
    if(test3[4].answer==='B'){
  factors[1]+=1
    }
  
    if(test3[4].answer==='V'){
  factors[0]+=1
    }
  
    if(test3[4].answer==='G'){
  factors[10]+=1
    }
// обработка 6 вопроса

if(test3[5].answer==='A'){
  factors[1]+=1
    }
  
    if(test3[5].answer==='B'){
  factors[0]+=1
    }
  
    if(test3[5].answer==='V'){
  factors[11]+=1
    }
  
    if(test3[5].answer==='G'){
  factors[5]+=1
    }
  
  
// обработка 7 вопроса

if(test3[6].answer==='A'){
  factors[2]+=1
    }
  
    if(test3[6].answer==='B'){
  factors[4]+=1
    }
  
    if(test3[6].answer==='V'){
  factors[11]+=1
    }
  
    if(test3[6].answer==='G'){
  factors[5]+=1
    }
  
  
// обработка 8 вопроса

if(test3[7].answer==='A'){
  factors[8]+=1
    }
  
    if(test3[7].answer==='B'){
  factors[10]+=1
    }
  
    if(test3[7].answer==='V'){
  factors[11]+=1
    }
  
    if(test3[7].answer==='G'){
  factors[9]+=1
    }
  
// обработка 9 вопроса

if(test3[8].answer==='A'){
  factors[5]+=1
    }
  
    if(test3[8].answer==='B'){
  factors[10]+=1
    }
  
    if(test3[8].answer==='V'){
  factors[8]+=1
    }
  
    if(test3[8].answer==='G'){
  factors[7]+=1
    }
  
  
  console.log(factors)


  const div= document.querySelector('.tab-3')
  div.innerHTML+=`<div>  ваши баллы в факторе 1 ${factors[0]}</div>
  <div>  ваши баллы в факторе 2 ${factors[1]}</div>
  <div>  ваши баллы в факторе 3 ${factors[2]}</div>
  <div>  ваши баллы в факторе 4 ${factors[3]}</div>
  <div>  ваши баллы в факторе 5 ${factors[4]}</div>
  <div>  ваши баллы в факторе 6 ${factors[5]}</div>
  <div>  ваши баллы в факторе 7 ${factors[6]}</div>
  <div>  ваши баллы в факторе 8 ${factors[7]}</div>
  <div>  ваши баллы в факторе 9 ${factors[8]}</div>
  <div>  ваши баллы в факторе 10 ${factors[9]}</div>
  <div>  ваши баллы в факторе 11 ${factors[10]}</div>
  <div>  ваши баллы в факторе 12 ${factors[11]}</div>
  
  `





};




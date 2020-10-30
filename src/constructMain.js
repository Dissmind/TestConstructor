<<<<<<< HEAD
con
=======
<<<<<<< HEAD
import { Constructor } from './constuctor/Constructor.js'

const $btnAddQuestion = document.querySelector('.btnAddQuestion')
const $btnAddAnswer = document.querySelector('.btnAddAnswer')
const $btnConfirm = document.querySelector('.btnConfirm')
const $answers = document.querySelector('.answers')


let questions = [] 

const constructor = new Constructor()

function btnAddQuestionHandler() {
    const questionTitle = '.questionTitle'
    const answerTitle = '.answerTitle'
    const correctAnswer = '.correctAnswer'

    const question = constructor.addQuestion(questionTitle, answerTitle, correctAnswer)
    questions.push(question)

    constructor.clear(questionTitle, answerTitle, correctAnswer)
}

function btnAddAnswerHandler() {
    const idButton = 'answer-button-' + Math.round(Math.random() * (10000 - 1) + 1);
    const idAnswer = 'answer-' + Math.round(Math.random() * (10000 - 1) + 1);

    $answers.insertAdjacentHTML('beforeend', `
        <div class="added answer" id="${idAnswer}">
            <input type="text" class="answerTitle" placeholder="Ответ">
            <input type="radio" class="correctAnswer" name="correctAnswer">
            <button id="${idButton}" class="btnDelAnswer">-</button>
        </div>
    `)

    document.querySelector('#' + idButton)
        .addEventListener('click', () => { btnDelAnswerHandler(idAnswer) })
}

function btnDelAnswerHandler(id) {
    const $addedAnswer = document.querySelector('#' + id)
    $addedAnswer.parentNode.removeChild($addedAnswer)
}

function btnConfirmHandler() {
    btnAddQuestionHandler()

    // TODO: Отправка данных на сервер (questions[])

    console.log(questions)
    questions = []
}

$btnAddQuestion.addEventListener('click', btnAddQuestionHandler)
$btnAddAnswer.addEventListener('click', btnAddAnswerHandler)
$btnConfirm.addEventListener('click', btnConfirmHandler)

//TODO: метод - строка пуста (или пробелы) - true, иначе false
=======
console.log('asdas')
>>>>>>> 078076881b0d5f49d6247811dfb0d963dbb91d6f
>>>>>>> origin/testconstructor-dev

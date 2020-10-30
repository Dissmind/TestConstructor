import { Question } from "../Model/Question.js"


export class Constructor {
    clear(titleSelector, questionSelectors, correctAnswerSelectors) {
        const $title = document.querySelector(titleSelector)
        const $questions = document.querySelectorAll(questionSelectors)
        const $correctAnswer = document.querySelectorAll(correctAnswerSelectors)

        $title.value = ''
        
        for (let i = 0; i < $questions.length; i++) {
            $questions[i].value = ''
            $correctAnswer[i].checked = false
        }
    }

    addQuestion(titleSelector, questionSelectors, correctAnswerSelectors) {
        const $title = document.querySelector(titleSelector)
        const $answers = document.querySelectorAll(questionSelectors)
        const $correctAnswers = document.querySelectorAll(correctAnswerSelectors)

        const answers = []
        for (let i = 0; i < $answers.length; i++) {
            answers.push($answers[i].value)
        }

        let correctAnswer = 0
        for (let i = 0; i < $correctAnswers.length; i++) {
            if ($correctAnswers[i].checked) {
                correctAnswer = i + 1
                break
            }
        }

        return new Question($title.value, answers, correctAnswer)
    }
}

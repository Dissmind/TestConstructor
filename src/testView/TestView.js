export class TestView {
    renderTest(test) {
        const $title = document.querySelector('h1');
        $title.innerHTML = test.title;

        const $block = document.querySelector('.block');
        const $content = document.querySelector('.content');
        const $question = document.querySelector('.question');
        const $answer = document.querySelector('.answer');

        const tempContent = (question, answers) => {
            const tempAnswer = (answer) => {
                return `<div class="answer">${answer}</div>`
            }

            let tempAnswers = ''

            for (let i = 0; i < answers.length; i++) {
                tempAnswers += tempAnswer(answers[i]);
            }

            const temp = `
                <div class="content">
                    <div class="question">${question}</div>
            `
                + tempAnswers + `</div>`;

            return temp;
        }


        for (let i = 0; i < test.questions.length; i++) {
            $block.innerHTML += tempContent(test.questions[i].title, test.questions[i].answers);


        }
    }
}
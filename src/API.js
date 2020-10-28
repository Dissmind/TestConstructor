import { Test } from './Model/Test.js'
import { Question } from './Model/Question.js'


export class API {
    /**
     * Метод отправки данных на сервер
     *
     * @param data - Объекта класса Test
     */
    addTest(data) {
        // TODO: Заглушка

        console.log('Данные отправлены на сервер')
        console.log(data)
    }


    /**
     * Метод получения данных (Теста) от сервера (по ID теста)
     *
     * @param id - id теста
     * @returns {Test} - Объект теста
     */
    getTest(id) {
        // TODO: Заглушка

        const questions = [
            new Question('Тестовый вопрос (1 вопрос верный)', [
                'Тестовый ответ 1',
                'Тестовый ответ 2',
                'Тестовый ответ 3',
                'Тестовый ответ 4'
            ], 1),

            new Question('Тестовый вопрос 2 (2 вопрос верный)', [
                'Тестовый ответ 1',
                'Тестовый ответ 2',
                'Тестовый ответ 3',
                'Тестовый ответ 4'
            ], 2)
        ]

        return new Test(id, 'Тестовый Тест', questions)
    }
}
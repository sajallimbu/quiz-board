import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { quizQuestions } from '../model/questions'
import { Radio } from '@mantine/core'
import { categories } from '../model/categories'
import { useNavigate } from 'react-router-dom'

import NavigationBar from '../components/NavigationBar'
import { ImSad2, ImSmile } from 'react-icons/im'

export default function QuizBoard() {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const { id } = useParams()
    const navigate = useNavigate()
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    const [showQuestions, setShowQuestions] = useState(true)

    const passPercentage = 0.6

    const questionObject = quizQuestions.filter((obj) => {
        return obj['Id'] === id
    })[0]
    const questions = questionObject['Questions']

    const currentCategory = categories.filter((obj) => {
        return obj['title'] === questionObject['Name']
    })[0]

    const { Answer, Question, Info, Options } = questions[activeQuestion]
    const { Name } = questionObject

    const onNextClick = () => {
        // TODO: no actions currently on next
        console.log('Next button clicked')
    }

    const onRadioSelect = (selectedAnswer: string) => {
        if (activeQuestion === questions.length - 1) {
            setShowQuestions(false)
        } else {
            setTimeout(() => {
                setActiveQuestion(activeQuestion + 1)
            }, 200)
        }
        if (selectedAnswer === Answer) {
            setResult((prev) => {
                return {
                    ...prev,
                    score: prev.score + 1,
                    correctAnswers: prev.correctAnswers + 1,
                }
            })
        } else {
            setResult((prev) => {
                return {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
            })
        }
    }

    return (
        <>
            <NavigationBar
                categoryLogo={currentCategory.logo}
                onBackClick={() => navigate(-1)}
                onNextClick={onNextClick}
                quizCategoryName={Name}
            />
            <div
                className={`question-wrapper flex flex-col flex-row-2 px-8 ${
                    showQuestions ? '' : 'invisible'
                }`}
            >
                <Radio.Group
                    onChange={onRadioSelect}
                    name={Question}
                    label={Question}
                    description={Info}
                    orientation="vertical"
                    labelProps={{ fz: 'xl', py: 'xl' }}
                    className="flex flex-col items-start"
                >
                    {Options.map((obj, index) => {
                        return (
                            <Radio
                                value={obj}
                                label={obj}
                                className="flex flex-start"
                                key={index}
                            />
                        )
                    })}
                </Radio.Group>
            </div>
            {!showQuestions && (
                <div className="score-wrapper grid grid-col-3 gap-4">
                    <div className="">
                        <span className="score text-xl">Score: </span>
                        {result['score']}
                    </div>
                    <div className="">
                        <span className="correctAnswers text-xl">
                            Correct answers:
                        </span>
                        {result['correctAnswers']}
                    </div>
                    <div className="">
                        <span className="wrongAnswers text-xl">
                            Wrong answers:
                        </span>
                        {result['wrongAnswers']}
                    </div>
                    <div className="result-wrapper m-8">
                        {result['score'] > passPercentage * questions.length ? (
                            <div className="passed text-2xl">
                                Congratulations! You passed!
                                <ImSmile size={40} />
                            </div>
                        ) : (
                            <div className="failed text-2xl flex items-center justify-center gap-4">
                                <ImSad2 size={40} />
                                Sorry! You failed!
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

interface NavigationBarProps {
    onBackClick: () => void
    categoryLogo: any
    quizCategoryName: string
    onNextClick: () => void
}

export default function NavigationBar({
    onBackClick,
    categoryLogo,
    quizCategoryName,
    onNextClick,
}: NavigationBarProps) {
    return (
        <div className="navgation-wrapper flex flex-row justify-between flex-wrap">
            <div className="back-button-wrapper flex items-center">
                <button
                    className="back-button border rounded bg-black p-2 text-white"
                    onClick={onBackClick}
                >
                    <IoChevronBackOutline />
                </button>
            </div>
            <div className="quiz-title-wrapper flex flex-row items-center gap-2">
                <div className="category-title-image w-16">
                    <img src={categoryLogo || ''} alt="Typescript" />
                </div>
                <div className="quiz-title flex items-end justify-end text-xl">
                    {quizCategoryName}
                </div>
            </div>
            <div className="next-btn-wrapper flex items-center">
                <button
                    className="next-btn border rounded bg-black p-2 text-white disabled:opacity-50"
                    onClick={onNextClick}
                >
                    <IoChevronForwardOutline />
                </button>
            </div>
        </div>
    )
}

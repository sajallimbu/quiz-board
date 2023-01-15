import { useNavigate } from 'react-router-dom'

interface CategoryTileProps {
    logo: any
    title: String
    description: String
    buttonLabel: String
    categoryId: String
}

export default function CategoryTile({
    logo,
    title,
    description,
    buttonLabel,
    categoryId,
}: CategoryTileProps) {
    const navigate = useNavigate()

    return (
        <div
            className="category-tile p-4 border-dashed border-gray border-2 flex flex-col justify-between"
            id="category-tile"
        >
            <div className="category-title-wrapper flex flex-row items-center space-x-2 ">
                <div className="category-title-image w-16">
                    <img src={logo} alt="Typescript" />
                </div>
                <div className="category-title-label">{title}</div>
            </div>
            <div className="category-description flex flex-row my-4">
                {description}
            </div>
            <div className="take-quiz-button-wrapper flex justify-end mt-6">
                <button
                    className="take-quiz-button p-2 rounded shadow-sm bg-sky-600 text-white hover:bg-sky-600 hover:shadow-lg focus:bg-sky-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => navigate(`/quizboard/${categoryId}`)}
                >
                    {buttonLabel}
                </button>
            </div>
        </div>
    )
}

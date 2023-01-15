import React from 'react'
import CategoryTile from '../components/CategoryTile'
import { categories } from '../model/categories'

export default function Dashboard() {
    return (
        <div className="categories">
            <div className="text-2xl title flex justify-start my-4">
                Categories
            </div>
            <div className="categories-wrapper grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {categories.map((obj, index) => {
                    return (
                        <CategoryTile
                            logo={obj.logo}
                            title={obj.title}
                            description={obj.description}
                            buttonLabel={obj.buttonLabel}
                            categoryId={obj.id}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

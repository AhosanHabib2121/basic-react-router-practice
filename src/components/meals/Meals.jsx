import { useLoaderData } from "react-router-dom";
import SingleMeal from "../singleMeal/SingleMeal";

const MealBlog = () => {
    const {meals}= useLoaderData()
    return (
        <div>
            <h2 className='text-center text-lg font-semibold'>All Meal: {meals.length}</h2>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    meals.map(meal => <SingleMeal key={meal.id} meal={meal}></SingleMeal>)
                }
            </div>
        </div>
    );
};

export default MealBlog;
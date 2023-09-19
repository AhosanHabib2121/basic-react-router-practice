import { useLoaderData } from "react-router-dom";

const MealDetail = () => {
    const singleMeal = useLoaderData()
    const singleMealData = singleMeal.meals[0];
    const {idMeal} = singleMealData
    console.log(idMeal)
    return (
        <div>
            <h2>Meal Detail</h2>
        </div>
    );
};

export default MealDetail;
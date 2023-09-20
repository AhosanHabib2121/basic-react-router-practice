import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetail = () => {
    const navigate = useNavigate()
    const singleMeal = useLoaderData()
    const singleMealData = singleMeal.meals[0];
    const {idMeal,strMeal, strMealThumb} = singleMealData
    
    const handlePrevious = () => {
        navigate(-1);
    }
    return (
        <div className="grid justify-center">
            <div className='border-2 border-lime-700 rounded-lg pb-4 w-64'>
                <img src={strMealThumb} className='w-64' alt="not found" />
                <h2 className='text-lg font-bold pt-3 pl-3'>Meal ID : { idMeal }</h2>
                <h2 className='text-lg font-bold pl-3'>Name : {strMeal}</h2>
                <div className='text-center mt-4'>
                    <button onClick={handlePrevious} className=' inline-block bg-blue-600 text-white py-2 px-3 rounded-lg'>Previous</button>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;
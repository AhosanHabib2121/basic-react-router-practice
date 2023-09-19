import PropTypes from 'prop-types';

const SingleMeal = ({meal}) => {
    const {strMealThumb, strMeal, idMeal } = meal;
    return (
        <div className='border-2 border-lime-700 rounded-lg pb-4'>
            <img src={strMealThumb} className='w-full' alt="not found" />
            <h2 className='text-lg font-bold pt-3 pl-3'>Meal ID : { idMeal }</h2>
            <h2 className='text-lg font-bold pl-3'>Name : {strMeal}</h2>
            <div className='text-center mt-4'>
                <button className=' inline-block bg-blue-600 text-white py-2 px-3 rounded-lg'>Show details</button>
            </div>
        </div>
    );
};

SingleMeal.propTypes = {
    meal:PropTypes.object
}
export default SingleMeal;
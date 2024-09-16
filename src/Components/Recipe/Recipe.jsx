

const Recipe = ({recipe, handleCook}) => {
    const {recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div>
            <div className="p-4 rounded-xl border border-gray-400 h-full">
                <div>
                    <img src={recipe_image} alt="" />
                </div>
                <h3 className="text-xl font-semibold my-2">{recipe_name}</h3>
                <p>{short_description}</p>
                <div className="my-3 border-y border-gray-400 py-3">
                    <h3 className="text-lg font-semibold">Ingredients: {ingredients.length} </h3>
                    {
                        ingredients.map((item, idx )=> <li key={idx} className="ml-4">{item}</li>)
                    }
                </div>
                <div className="flex gap-7">
                    <p>{preparing_time}</p>
                    <p>{calories}</p>
                </div>
                <button onClick={() => handleCook(recipe)} className="bg-[#0BE58A] rounded-full px-4 py-2 text-black font-bold mt-4 hover:bg-[#0ac074]">Want to Cook</button>
            </div>
        </div>
    );
};
export default Recipe;
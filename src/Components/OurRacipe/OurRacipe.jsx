import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const OurRacipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [cook, setCook] = useState([]);
    const [prepare, setPrepare] = useState([]);

    const handleCook = (item) => {
        const newRacipe = [...cook, item];
        setCook(newRacipe);
        // remove from list
        // const filterItem = cook.filter(remove =>  remove.id !== item.id );
        // console.log(item.id);
        // setCook(filterItem);

    }

    const handlePreparing = (item) =>{
        const newItem = [...prepare, item];
        setPrepare(newItem);
    }

    useEffect(() => {
        fetch('../../../public/Data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="container">
            <h1 className="text-3xl font-semibold text-center">Our Racipe</h1>
            <p className="text-center my-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="sm:flex sm:flex-row flex flex-col gap-4">
                <div className="sm:w-[60%] w-full sm:grid sm:grid-cols-2 grid grid-cols-1 gap-3">
                    {
                        recipes.map(recipe => <Recipe handleCook={handleCook} recipe={recipe} key={recipe.id}></Recipe>)
                    }
                </div>
                <div className="sm:w-[40%] w-full border border-gray-400 rounded-xl">
                    <div>
                        <h1 className="text-center text-2xl font-semibold my-4">Want To cook : {cook.length} </h1>
                        <table className="mx-3">
                            <th className="px-4">Name</th>
                            <th className="px-4">Time</th>
                            <th className="px-4">Calories</th>

                            {
                                cook.map((item, idx) => <tbody className=" border-b border-gray-400" key={idx}>
                                    
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}</td>
                                        <td>{item.calories}</td>
                                    
                                    <div>
                                        {/* problem res deign */}
                                        <button onClick={() => handlePreparing(item)} className="bg-[#0BE58A] rounded-full px-4 py-2 text-black font-bold hover:bg-[#0ac074]">Preparing</button>
                                    </div>
                                </tbody>)
                            }
                        </table>
                    </div>
                    <div>
                    <h1 className="text-center text-2xl font-semibold my-4">Currently Cooking : {prepare.length} </h1>
                        <table className="mx-3">
                            <th className="px-4">Name</th>
                            <th className="px-4">Time</th>
                            <th className="px-4">Calories</th>

                            {
                                prepare.map((item, idx) => <tbody className=" border-b border-gray-400 bg-gray-200" key={idx}>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time}</td>
                                        <td>{item.calories}</td>
                                </tbody>)
                            }
                        </table>
                        <div>
                            <h4>Total Time: {}</h4>
                            <h4>Total Calories: {}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurRacipe;
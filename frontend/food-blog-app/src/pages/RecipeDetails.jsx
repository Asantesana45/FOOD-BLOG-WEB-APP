import React from 'react';
import profileImg from '../assets/profile.png';
import { useLoaderData } from 'react-router-dom';

export default function RecipeDetails() {
    const recipe = useLoaderData();
    console.log(recipe);

    return (
        <>
            <style>{`
                body {
                    background: linear-gradient(135deg, #fffbe6, #fff0b3);
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    margin: 0;
                    padding: 0;
                    color: #5a4c1a;
                }

                .outer-container {
                    max-width: 600px;
                    margin: 60px auto;
                    background: rgba(255, 248, 220, 0.3);
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 8px 32px rgba(200, 180, 100, 0.25);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    transition: all 0.3s ease;
                }

                .profile {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 20px;
                }

                .profile img {
                    border-radius: 50%;
                    border: 2px solid #e5c07b;
                    box-shadow: 0 4px 12px rgba(240, 210, 120, 0.2);
                }

                .title {
                    text-align: center;
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: #5a4c1a;
                    text-shadow: 0px 0px 6px rgba(255, 238, 150, 0.5);
                }

                .cover-img {
                    display: block;
                    margin: 0 auto 30px auto;
                    border-radius: 15px;
                    box-shadow: 0 0 20px rgba(230, 210, 150, 0.3);
                }

                .recipe-details {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .ingredients, .instructions {
                    background-color: rgba(255, 255, 255, 0.4);
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: inset 0 0 10px rgba(200, 180, 100, 0.1);
                    transition: transform 0.3s ease;
                }

                .ingredients:hover, .instructions:hover {
                    transform: translateY(-5px);
                }

                .ingredients ul {
                    list-style: none;
                    padding-left: 0;
                }

                .ingredients li::before {
                    content: "🍋 ";
                    margin-right: 8px;
                }

                .instructions p {
                    line-height: 1.7;
                    font-size: 16px;
                    margin-top: 10px;
                    color: #4b3f1b;
                }

                h4 {
                    color: #7a5e1a;
                }
            `}</style>

            <div className="outer-container">
                <div className="profile">
                    <img src={profileImg} width="50px" height="50px" alt="Profile" />
                    <h5>{recipe.email}</h5>
                </div>
                <h3 className="title">{recipe.title}</h3>
                <img
                    className="cover-img"
                    src={`http://localhost:5000/images/${recipe.coverImage}`}
                    width="220px"
                    height="200px"
                    alt="Recipe"
                />
                <div className="recipe-details">
                    <div className="ingredients">
                        <h4>🍽 Ingredients</h4>
                        <ul>{recipe.ingredients.map((item, index) => (<li key={index}>{item}</li>))}</ul>
                    </div>
                    <div className="instructions">
                        <h4>📜 Instructions</h4>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

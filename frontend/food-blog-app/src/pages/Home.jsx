import React, { useState } from 'react';
import foodRecipe from '../assets/foodRecipe.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RecipeItems from '../components/RecipeItems';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import InputForm from '../components/InputForm';

export default function Home() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const addRecipe = () => {
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/addRecipe");
        } else {
            setIsOpen(true);
        }
    };

    return (
        <>
            <Navbar />

            <section style={styles.home}>
                <div style={styles.homeLeft}>
                    <h1 style={styles.homeTitle}>Food Recipe</h1>
                    <h5 style={styles.homeDescription}>
                        Discover a world of delicious recipes at your fingertips. Whether you're a beginner or a seasoned chef, our app offers a wide variety of recipes with easy-to-follow instructions, ingredients, and tips to make your cooking experience enjoyable and effortless. From quick snacks to gourmet meals, explore recipes from different cuisines and try something new today. Start cooking, start enjoying! 🍳🍴
                    </h5>
                    <button style={styles.shareBtn} onClick={addRecipe}>Share your recipe</button>
                </div>
                <div style={styles.homeRight}>
                    <img src={foodRecipe} style={styles.foodImage} alt="Food Recipe" />
                </div>
            </section>

            <div style={styles.bg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#d4f6e8" fillOpacity="1" d="M0,32L40,32C80,32,160,32,240,58.7C320,85,400,139,480,149.3C560,160,640,128,720,101.3C800,75,880,53,960,80C1040,107,1120,181,1200,213.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                </svg>
            </div>

            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <InputForm setIsOpen={() => setIsOpen(false)} />
                </Modal>
            )}

            <div style={styles.recipe}>
                <RecipeItems />
            </div>

            <Footer />
        </>
    );
}

const styles = {
    home: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '50px',
        background: 'linear-gradient(135deg, #ffbc00, #e63946)',
        borderRadius: '20px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        marginTop: '50px',
        flexWrap: 'wrap',
    },
    homeLeft: {
        width: '50%',
        color: '#fff',
        textAlign: 'left',
        paddingRight: '30px',
        minWidth: '300px',
    },
    homeTitle: {
        fontSize: '3rem',
        fontWeight: '700',
        letterSpacing: '2px',
        marginBottom: '10px',
    },
    homeDescription: {
        fontSize: '1.1rem',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    shareBtn: {
        backgroundColor: '#ff9f00',
        color: 'white',
        padding: '15px 30px',
        fontSize: '1.1rem',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontWeight: 'bold',
    },
    homeRight: {
        width: '50%',
        textAlign: 'center',
        minWidth: '300px',
        marginTop: '20px',
    },
    foodImage: {
        maxWidth: '100%',
        borderRadius: '15px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
    },
    bg: {
        position: 'absolute',
        width: '100%',
        top: '70%',
        left: '0',
        zIndex: '-1',
    },
    recipe: {
        marginTop: '80px',
        marginBottom: '60px', // added spacing before Footer
        padding: '20px',
        backgroundColor: '#f4f4f4',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    },
};

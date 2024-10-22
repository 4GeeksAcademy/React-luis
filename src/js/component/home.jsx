import React from "react";
import Navb from "./Navb";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import { characters } from "../rawData";



//create your first component
const Home = () => {

    return (
        <>



            <Navb marca={'Start bootstrap'} />

            <div className="container justify-content-center">

                <Jumbotron />
                <div className="row" >
                    {characters.map(character => (
                        <div key={character.id} className="col-12 col-md-6 col-lg-3">
                            <Card name={character.name}  srcImage={character.image} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                        </div>
                    ))
                    }


                    {/* <div className="col-12 col-md-6 col-lg-3">
                        <Card name={characters[2].name} srcImage={characters[2].image} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card name={characters[4].name} srcImage={characters[4].image} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <Card name={characters[7].name} srcImage={characters[7].image} description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>*/}
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Home;

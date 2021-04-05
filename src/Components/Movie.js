import React from "react";
import "./Movie.css";

export const MovieList = (props) => {
    return (
        <>
            {props.dataMovie.map((v) => {
                <div className="image-container d-flex justify-content-start m-3 movie">
                    <img 
                        width={200} 
                        src={"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}>
                    </img>
                    <p>{v.Title}</p>
                </div>
            })}
        </>
    );
};


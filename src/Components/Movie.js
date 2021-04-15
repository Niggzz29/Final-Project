import React from "react";
import "./Movie.css";
import { Layout, Breadcrumb, Col, Row, Input } from "antd";

export const MovieList = (props) => {
    console.log(props);
    return (
        <>
            <div className="movies row p-5">
                {props.dataMovie && props.dataMovie.map((v) => {
                    return (
                        <div className="movie col-md-3">
                            <div>
                                <p className='title-movie'>

                                    <img
                                        width={250}
                                        src={v.Poster}>
                                    </img>

                                    {v.Title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};


import "./Header.css";

export const MovieHeader = (props) => {
    return (
        <>
            <div className="row header">
                <h1 className="finpro">{props.header}</h1>
            </div>
        </>
    );
};
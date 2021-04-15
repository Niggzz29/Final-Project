import "./Header.css";

export const MovieHeader = (props) => {
    return (
        <>
            <div className="row header">
                <span className="finpro">{props.header}</span>
                {props.children}
            </div>

        </>
    );
};
import React from "react";
import PropTypes from "prop-types";

export const PrimeraApp = ({ saludo, subtitulo } ) => {
    return (
        <>
            <h1> { saludo }</h1>
            <p> { subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: "Mi primera aplicación React"
}

import React from "react";
import "./NotFound.scss";

export default function NotFound() {

    return (
        <section className={`page-not-found`}>
            <h1 className={`title-page`}>404</h1>
            <p className={`description-not-found`}>Sorry, the page you requested could not be found</p>
        </section>
    )

}
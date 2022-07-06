import React from "react"

export default function Card(props) {
    return (
        <section>
        <div className="card">
        <img className="hero--photo" src={props.item.imageUrl} />
        <div className="Info--text">
        <h1>{props.item.title}</h1>
        <p>{props.item.googleMapsUrl}</p>
        <span>{props.item.startDate}</span>
        <p>{props.item.description}</p>
            </div>
        </div>
        </section>
    )
}
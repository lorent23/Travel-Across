import React from "react"
import Navbar from "./components/Navbar"
import data from "./data"
import Card from "./components/Card"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
            key={item.id}
            item={item}
            />
        )
    })        

    return (
        <div>
            
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
        
    )
}
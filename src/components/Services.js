import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'


class Services extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             services:[
              {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info: "Enjoy complimentary cocktails during your stay. Our skilled bartenders are ready to serve you the finest drinks."
              },
              {
                icon: <FaHiking />,
                title: "Hiking Adventures",
                info: "Embark on exciting hiking adventures with breathtaking views. Our guided tours cater to all skill levels, from beginners to experienced hikers."
              },
              {
                icon: <FaShuttleVan />,
                title: "Convenient Shuttle Service",
                info: "Take advantage of our complimentary shuttle service. We provide convenient transportation to nearby attractions, making your travel hassle-free."
              },
              {
                icon: <FaBeer />,
                title: "Craft Beer Selection",
                info: "Indulge in a diverse selection of craft beers. Our extensive beer menu ensures that you can savor unique and flavorful options during your stay."
              }
            ]
        }
    }
    

    render() {
        return (
            <section className="services">
                <Title title = "services"/>
            <div className="services-center">
                {this.state.services.map((item,index) => {
                    return <article key ={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
                

            </section>
        )
    }
}

export default Services

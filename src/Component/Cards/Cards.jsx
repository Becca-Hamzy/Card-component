import "./Cards.css"
import sedan from "../../assets/svg/icon-sedans.svg"
import luxury from "../../assets/svg/icon-luxury.svg"
import suv from "../../assets/svg/icon-suvs.svg"


const Cards = () => {

    return(
     <div className="Main-container">
        <div className="Mini-container">
            <div className="sedan">
                 <img src= {sedan} alt="#" />
                 <h1>
                    SEDANS
                 </h1>
                 <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or for your next road trip</p>
                 
                 <button className="se-btn"> Learn More</button>
            </div>

            <div className="suv">
                <img src={suv} alt="" />
              <h1>
                SUVS
              </h1>
              <p> Take an SUV for its spacious interior,power, and versatility. Perfect for your next family vacation and off road adventure</p>

              <button className="s-btn"> Learn More</button>

            </div>

            <div className="luxury">
                <img src= {luxury }alt="" />
                <h1>
                    LUXURY
                </h1>
                <p>Cruise in the best car brand without the bloated prices. Enjoy the comfort of a luxury rental and arrive in style</p>
                <button className="l-btn "> Learn More</button>
            </div>

        </div>
        
     </div>
    )
}


export default Cards
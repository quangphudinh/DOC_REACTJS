import { country } from "../../data/country"
// import "./Country.css"
import "./Country.scss"
function Country() {
    console.log(country)
    return (
        <>
            <ul className="country">
                {country.map((itemCountry) => (
                    <li className="country-item" key={itemCountry.id}>
                        <span className="country-text">{itemCountry.name}</span>
                        <ul className="country-sub">
                            {/* su ly data= null undefined thi khong hien thi */}
                            {(itemCountry.city || []).map((city) => (
                                <li className=" " key={city.id}>{city.name}</li>
                                
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Country
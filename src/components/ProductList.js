import { useEffect, useState } from "react";
import { apiKey, baseUrl, hostName } from "../consts";
import Image from './Image'
import LinkButton from "./LinkButton";

function ProductInfo(props) {
const [itemInfo, setItemInfo] = useState([]);

  const makeAPICall = () => {
    fetch(baseUrl, {
	method: "GET",
  
	headers: {
		"x-rapidapi-host": hostName,
		"x-rapidapi-key": apiKey
	},
})
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setItemInfo(data.results);
});
};  
  

useEffect(() => {
    makeAPICall();
  }, [props.title]);
return (
    <div className="ProductInfo">
        <h3 style={{ marginBottom: 20 }}>Sneakers</h3>
        <div>
          <ul className="shoe-list">
            {itemInfo.map((item) => {
              return <li key={item.id} className="shoe-item"  >
                <h4 style={{ textAlign: 'center' }}>
                  {item.shoe}
                  </h4>
                  <Image styles={{ margin: '0 auto' }}
                  className="shoe-img"
                  src={item.media.imageUrl}
                  alt="shoe" />
                <p style={{ textAlign: 'center' }}>
                  {item.retailPrice} $
                </p>
                <LinkButton text="Show more info" route={`/shoe/${item.id}`} />
              </li>
            })}
          </ul>
        </div>
    </div>
)
};
export default ProductInfo;
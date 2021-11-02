import { useEffect, useState } from "react";
import { items } from './products'

function ProductInfo(props) {
const [itemInfo, setItemInfo] = useState(items);

  const makeAPICall = () => {
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers/${props.title}", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "29a55ca99emshd4a5fd759a735c3p11eae3jsnf2d5bf9b4f21"
	}
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

const productDescription = () => {
  itemInfo.map(items[0])
}
return (
    <div className="ProductInfo">
        <h3>Description</h3>
        <div>
          <ul>
            {items.map((item) => {
              return <li key={item.id}>
                {item.shoe}
                <img className="shoe-img" src={item.media.imageUrl} alt="shoe" />
              </li>
            })}
          </ul>
        </div>
    </div>
)
};
export default ProductInfo;
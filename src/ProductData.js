import { useEffect, useState } from "react";

function ProductData(props) {
const [itemData, setItemData] = useState([]);

  const makeAPICall = () => {
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "29a55ca99emshd4a5fd759a735c3p11eae3jsnf2d5bf9b4f21"
	}
})
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        setItemData(data.results);
});
};  
  

useEffect(() => {
    makeAPICall();
  }, []);


return (
    <div className="ProductData">
        <h2>Sneakers</h2>
    </div>
)
};
export default ProductData;
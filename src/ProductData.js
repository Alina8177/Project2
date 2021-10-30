import { useEffect, useState } from "react";

function ProductData(props) {
const [itemData, setItemData] = useState([]);

  const makeAPICall = () => {
   fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=20/${props.title} ")
    .then((response) => response.json())
    .then(data => {
      console.log(data)
      setItemData(data.results)
    })
    .catch(err => {
      console.error(err);
    });
    
  

  useEffect(() => {
      makeAPICall();
  }, [props.title]);
  
};
return (
    <div className="ProductData">
        <h2></h2>
    </div>
)

export default ProductData;
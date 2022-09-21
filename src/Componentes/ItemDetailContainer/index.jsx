import ItemDetail from '../ItemDetail';
import React,{useEffect,useState}  from "react";
const film=
{id:3,image:"https://i.imgur.com/6AdryIE.png"};

export const ItemDetailContainer = () =>{
  const[data,setData] = useState({});
  useEffect(() =>{
    const getData= new Promise(resolve =>{
      setTimeout (() =>{
        resolve(film);
      },3000);
    });
    getData.then(res =>setData(res));
    }, [])

return (
  <ItemDetail data={data} />
);
}

export default ItemDetailContainer;
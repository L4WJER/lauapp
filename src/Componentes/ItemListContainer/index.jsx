import React, {useState,useEffect} from "react";

import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import Title from '../Title';

const film=[
  {id:1, image:"https://static1-es.millenium.gg/articles/2/41/32/2/@/213585-jet-article_m-1.jpg",title:jatte},
{id:2,image:"https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png",title:jatt},
{id:3,image:"https://i.imgur.com/6AdryIE.png",title: jett},

];


export const ItemListContainer = ({texto}) =>{
  const [data,setData] = useState([]);
  useEffect(() =>{
  const getData= new Promise(resolve =>{
    setTimeout (() =>{
      resolve(film);
    },3000);
  });
  getData.then(res =>setData(res));
  }, [])
  
  const onAdd = (quantity) =>{
    console.log (`Compraste ${quantity} unidades`);
  }
  return (
    <>
    <Title greeting={texto} />
    <ItemCount initial ={1} stock={5} onAdd={onAdd} />
    <ItemList data={data} />
    </>
    
  );
}

export default ItemListContainer;
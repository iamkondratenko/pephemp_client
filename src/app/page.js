"use client"

import Image from "next/image";
import styles from "./page.module.css";
import HeroSlider from '@/app/Components/HeroSlider/HeroSlider';
import Header from "@/app/Components/Header/Header";
import { CartProvider } from "./contexts/CartContext";
import Cart from "./Components/Cart/Cart";
import QualitiesPic from "./Components/Qualities/QualitiesPic";
import Qualities from "./Components/Qualities/Qualities";



export default function Home() {

  const qualitiesArray = [
    {
    label: 'Наші рослини вирощуються в ЄС з легально ліцензованого насіння 🌿',
    pic: "/mint_5.png"
      
  },
    {
      label: 'Регулює цикл сну і неспання і значно покращує ранок 😴',
      pic: "/reg_10.png"
      },

    {
      label: 'Без добавок. Ніяких хімікатів. Протестовано в незалежних лабораторіях 🙂',
      pic: "/mint_20.png"
      },

    {
      label: 'Наші рослини вирощуються в ЄС з легально ліцензованого насіння 💪',
      pic: "/reg_30.png"
      },

    {
      label: 'Наші рослини вирощуються в ЄС з легально ліцензованого насіння 🌿',
      pic: "/mint_5.png"
      },

]




const allProducts = [
  {id:0, price_uah:1000, price_usd:30, img:'/mint_5.png', bg:'#a7dad0', group:'Mint', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Mint 5% CBD OIL'},
  {id:1, price_uah:1000, price_usd:30, img:'/mint_10.png', bg:'#a7dad0', group:'Mint', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Mint 10% CBD OIL'},
  {id:2, price_uah:1000, price_usd:30, img:'/mint_20.png', bg:'#a7dad0', group:'Mint', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Mint 20% CBD OIL'},
  {id:3, price_uah:1000, price_usd:30, img:'/mint_30.png', bg:'#a7dad0', group:'Mint', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Mint 30% CBD OIL'},
  {id:4, price_uah:1000, price_usd:30, img:'/reg_5.png', bg:'#cbdccc', group:'Regular', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Regular 5% CBD OIL'},
  {id:5, price_uah:1000, price_usd:30, img:'/reg_10.png', bg:'#cbdccc', group:'Regular', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Regular 10% CBD OIL'},
  {id:6, price_uah:1000, price_usd:30, img:'/reg_20.png', bg:'#cbdccc', group:'Regular', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Regular 20% CBD OIL'},
  {id:7, price_uah:1000, price_usd:30, img:'/reg_30.png', bg:'#cbdccc', group:'Regular', description:"Щоб почати свою пригоду з CBD, ми пропонуємо легке рішення. Ця формула - це делікатність і м'якість у найнижчій концентрації та безумовно найлегшій ціні",  title:'Regular 30% CBD OIL'}]


  const resultArray = ((data, key) =>
  Object.values(data.reduce((result, item) => {
    const groupValue = item[key];
    if (!result[groupValue]) {
      result[groupValue] = [];
    }
    result[groupValue].push(item);
    return result;
  }, {}))
)(allProducts, 'group');



  return (

    <CartProvider>
    <main className={styles.main}>
      <Header/>
      <HeroSlider products={resultArray} />
      <QualitiesPic qualitiesArray={qualitiesArray}/>


      <div>
          {allProducts.map((item, i)=>{
            return(
              <div key={i}>{item.description}</div>
            )
          })}
        </div>

          <Cart/>
    </main>
    </CartProvider>
  );
}

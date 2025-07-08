import axios from 'axios';
import './App.css';
import Category from './Category';
import {useEffect, useState } from 'react';

function App() {
  let [categoryList, setCategoryList] = useState([])
  let [product, setProduct] = useState([])
  let [catName, setCatName] = useState('')

  let getCategory = () => {
    axios.get("https://dummyjson.com/products/category-list")
    .then((res) => res.data)
    .then((finalRes) => {
      setCategoryList(finalRes)
      console.log(finalRes)
    })
  }

  let getproducts = () => {
    axios.get('https://dummyjson.com/products')
    .then((proRes) => proRes.data)
    .then((proFinalRes) => {
      setProduct(proFinalRes.products)
    })
  }

  let catProduct = () => {
    axios.get(`https://dummyjson.com/products/category/${catName}`)
    .then((catProRes) => catProRes.data)
    .then((catProFinalRes) => {
      setProduct(catProFinalRes.products)
      console.log(catProFinalRes.products)
    })
  }



  let pItem = product.map((obj, index) => {
    return(
    <ProductItems item={obj} key={index}/>
  )})

  
  useEffect(() => {
    if(catName !== ''){
      catProduct();
      console.log("hello");
      console.log(catName);
    }
  },[catName])
  
  
  useEffect(() => {
    getCategory();
    getproducts();
  },[])
    
  return (
    <>
    <div className='py-[40px]'>
      <div className='max-w-[1320px] mx-auto'>
        <h1 className='text-center text-[40px] font-[700] mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div>
            <Category CL={categoryList} setCatName={setCatName}/>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-6'>
              {
                product.length >= 1 ?
                  pItem
                :
                  <h3 className='text-center justify-center'>No Product Found</h3>  
              }
            </div>
          </div>
        </div>
      </div>

    </div>






    </>
  );
}

export default App;

function ProductItems({item}) {

  return(
    <div className='shadow-lg text-center pb-4'>
      <img alt='img' src={item.thumbnail} className='w-[100%] h-[220px]'/>
      <h4>{item.title}</h4>
      <p>₹ {item.price*80}</p>
    </div>
  )
}

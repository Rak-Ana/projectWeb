'use client'
import { Catamaran } from "next/font/google";
import Image from "next/image";
import React,{useEffect,useState} from "react";

interface Product{
    id:number
    name:Text;
    price : number;

}

interface Category{
    id : number;
    name : Text;

}

export default function Home(){

    const [product,setProduct] = useState<Product[]>([]);
    const [category,setCategory] = useState<Category[]>([]);
   useEffect(()=>{
    async function fetchHome(){
        try {
            const result = await fetch('/category')
            const result2 = await fetch('/product')
            const data = await result.json();
            const data2 = await result2.json();
            setProduct(data);
            setCategory(data2);

        } catch (err) {
            console.log("Error:", err);
        }
    }
    fetchHome();
   },[])
   
   if(!product.length || !category) return (<>loading...</>)
    return(
    <div>
        <h1 className="font-bold  justify-center">Product List 2024</h1>
        <div>
            Add new category
            <div>
            <input 
            className="rounded-lg border border-gray-200 p-3 text-sm"
            type="text" />
            <button className="rounded-lg flex justify-center m-2 p-1  text-sm  bg-gray-100 px-5 py-2.5  font-medium" >Add</button>
            </div>
        </div>

        
        <div>
            <h3 className="font-bold">Categories</h3>
        </div>
            <h3 className="font-bold">Products</h3>
            {product.map((post,index) => (<div key ={post.id}>
                <div className="flex items-center gap-4">
                    <div className="text">{post.id}</div>
                    

                </div>
            </div>))}
        
    </div>


    ) 
}
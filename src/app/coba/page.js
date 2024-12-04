"use client"
import { collection, addDoc, query, onSnapshot } from "firebase/firestore"; 
import { useEffect, useState } from "react";
import { db } from "../firebase";



export default function Page() {
  const [items, setItems ] = useState([])
  const [item, setItem] = useState({name: "", price: ""})

//add item to firebase
  const addItem = async (e) => {
    e.preventDefault()
    if(item.name !== "" && item.price !== ""){
      await addDoc(collection(db, "items"), {
        name: item.name.trim(),
        price: item.price,
      })
    }
  }

  //read item firebase
  useEffect(() => {
    const q = query(collection(db, "items"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let itemArr = []
      querySnapshot.forEach((doc) => {
        itemArr.push({...doc.data(), id: doc.id})
      })

      setItems(itemArr)
    })

    return unsubscribe
  },[])


  return(
    <form>
      <input value={item.name} onChange={(e) => setItem({...item, name: e.target.value})}/>
      <input value={item.price} onChange={(e) => setItem({...item, price: e.target.value})}/>
      <button className="" type="submit" onClick={addItem}>tes</button>
      {items.map((tem) => (
        <div key={tem.id}>
          <div>{tem.name}</div>
          <div>{tem.price}</div>
        </div>
      ))}
    </form>
  )
}
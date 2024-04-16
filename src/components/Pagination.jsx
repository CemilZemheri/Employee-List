import { useState } from "react";
import data from "../helper/data"

const Pagination = ({data, personPerPage}) =>{


const[currentPage, setCurrentPage] = useState(1);
const indexOfLastPerson = currentPage * 5;
console.log(indexOfLastPerson);
const indexOfFirstPerson = indexOfLastPerson - 5;
console.log(indexOfFirstPerson);
console.log({data});
const currentPersons = data.slice(indexOfFirstPerson,indexOfLastPerson);
const nextpage = ()=>{
    setCurrentPage(currentPage + 1)};
const prevPage = ()=>{
    setCurrentPage(currentPage - 1)};
  
    


    return(
        <>
        { currentPersons.map((person)=>
         <article className="person">
           <img src={person.image} key ={person.id} alt={"img"} />
          
           <div>
             <h4>{person.name}</h4>
             <p>{person.email}</p>
             <p>{person.age} years</p>
           </div>
         </article>)
         }
       </>
    )
}

export default Pagination
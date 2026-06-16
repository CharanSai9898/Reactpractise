import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
import book1 from "./Assets/book1.jpg";
import book2 from "./Assets/book2.jpg";
import book3 from "./Assets/book3.jpg";

const Books = [
  {
    id: 1,
    author: "J.k.Rowling",
    title: `Harry Potter and the Philosopher's Stone`,
    img:  book1 ,
  },
  { id: 2, author: "Dandy Smith", title: `The Wrong Daughter`, img: book2 },
  {
    id: 3,
    author: "Shrijeet Sandhilya",
    title: `can we be strangers again ?`,
    img : book3,
  },
];

const Booklist = () =>{
 return (
   <>
     <h1 className="titlename">Amazon best Sellers</h1>
     <section className="booklist">
       {Books.map((book, index) => {
         return <Book {...book} key={book.id} number={index} />;
       })}
     </section>
   </>
 );

};

const Book =(props) =>{
    const{img,title,author,number} =props;
    return( 
    <article className = 'book'>
    <img src={img} alt ={title}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <span className='number'>{number + 1}</span>
   </article>
    );
};



const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Booklist/>);

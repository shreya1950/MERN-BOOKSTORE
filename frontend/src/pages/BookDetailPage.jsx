import React ,{useEffect, useState} from "react";
import {Link,useNavigate,useParams} from "react-router";
import api from "../lib/axios"
import toast from "react-hot-toast"
import { LoaderIcon, Trash2Icon,ArrowLeftIcon } from "lucide-react";

const BookDetailPage = () => {
  const[book,setBook] = useState(null);
  const[loading,setLoading]=useState(true);
  const[saving, setSaving]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(() =>{
    const fetchBook=async()=>{
    try{
      const res=await api.get(`/books/${id}`);
      setBook(res.data)
    }catch(error){
      console.error("Error fetching book",error)
      toast.error("Failed to fetch book");
    }finally{
      setLoading(false)
    }
  };
  fetchBook();
}, [id]);

const handleDelete =async () =>{
  if(!window.confirm("Are yo sure you want to dlete this book?"))
    return;
     try{
      await api.delete(`/books/${id}`);
      toast.success("Book deleted successfully")
      navigate("/")

     }catch(error){
      console.error("Error deleting book",error);
      toast.error("Failed to delete book");
     }

};

const handleSave =async()=>{
  if (!book.title.trim() || !book.author.trim()){
    toast.error("Please add title and author");
    return;
  }
  setSaving(true);
  try{

    await api.put(`/books/${id}`,
      {
      title: book.title,
      author: book.author,
      publishYear:Number(book.publishYear)
    });
    toast.success("Book upadated successfully");
    navigate("/");
  }catch(error){
    console.error("error updating book",error);
    toast.error("Failed to update book");
  }finally{
    setSaving(true);
  }
};
if (loading){
  return(
  <div className="min-h.screen bg-base-200 flex items-center justify-center">
     <LoaderIcon className="animate-spin size-10"/>
  </div>
  );
}
  
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx=auto px-4 py=8">
        <div className="max-w-zx1 mx-auto">
          {/*HEADER */}
      <div className="flex item-center justify-between mb-6">
      <Link to="/" className="btn btn-ghost">
      <ArrowLeftIcon classname='h-5 w-5'/>Back to Books
      </Link>  
      <button onClick={handleDelete} className="btn btn-error btn-outline">
        <Trash2Icon className="h-5 w-5"/>Delete Book

      </button>


      </div>
       {/*FORM CARD */}

       <div className="card bg-base-100 shadow-lg">
        <div className="card-body">

       {/*TITLE */}
       <div className="card bg-base-100 shadow-lg">
       <label className="label">
        <span className="label-text">Title</span>
         </label> 
        <input type='text' placeholder="Book title" className="input input-bordered" value={book.title} onChange={(e)=>
          setBook({...book, title: e.target.value})
        }/>
        </div>

        {/*AUTHOR */}
        <div className="form-control mb-4">
          <label className="label">
          <span className="label -text">Author 
          </span>  
          </label> 

        <input type="text" placeholder="Book author" className="input input-bordered" value={book.author} onChange={(e)=>
         setBook({...book,author: e.target.value}) }/>
         </div>

         {/*PUBLISH YEAR */}
         <div className="form-control mb-6">
         <label className="label">
          <span className="label-text">PublishYear</span>
         </label>
          <input type="number" placeholder="year" className="input input-borderd" value={book.publishYear} onChange={(e)=>
            setBook({...book,publishYear:e.target.value})}/>
          </div>

          {/*ACTION */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary" disabled={saving} onClick={handleSave}>
              {saving? "Saving...":"Save Changes"}

            </button>
          </div></div></div></div></div></div>
  );
};

export default BookDetailPage

import React from 'react'
import { FcLike , FcLikePlaceholder } from 'react-icons/fc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {

  let data = props.data;

  let shortDescription = data.description.substring(0,100); 
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;


  function toastHandler() {
    if(likedCourse.includes(data.id)){

      //means all ready liked
      setLikedCourse( (prev) => prev.filter( (cid) => (cid !== data.id) ));
      toast.warning("Unliked");
    }

    else{
      // it is not liked
      if(likedCourse.length === 0){
        setLikedCourse([data.id])
      }
      else{
        setLikedCourse( (prev) => [...prev , data.id]);
      }

      toast.success("Liked");

    }
  }

    
  return (
    <div className='border border-black relative w-72 border-1 rounded-md bg-ligthBlue shadow-2xl '>
        <img src={data.image.url} className='rounded-md'></img>

        <button onClick={toastHandler} className='absolute left-60 top-36'>

          {

            likedCourse.includes(data.id) ? <FcLike className='border-2 border-white bg-white font-semibold py-1 rounded-full' size={40} /> : < FcLikePlaceholder className='border-2 border-white bg-white font-semibold py-1 rounded-full' size={40}/>

          }
            
        </button>

        <div className='py-2'>
            <h3 className='text-[color:white] mt-2 px-2 font-bold'>{data.title}</h3>
            <p className='text-[color:white] mt-2 px-2'>{shortDescription}....</p>
        </div>

        <ToastContainer />
    </div>
  )
}

export default Card;
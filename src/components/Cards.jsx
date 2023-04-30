import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {

    let category = props.category;


    const [likedCourse , setLikedCourse] = useState([]);

    let data = props.course
    let allData = [];

    function formatingData(){

        if(category === "All"){
            Object.values(data).forEach((value) => {
                value.forEach((values) => {
                    allData.push(values);
                })
            });
        }

        else{
            return data[category];
        }

        

        return allData;

    }

    

  return (
    <div className="w-9/12 min-h-full flex flex-wrap gap-6 justify-center mb-5">
        {
            formatingData().map( (data) => {
                return <Card key = {data.id} data = {data} 
                likedCourse = {likedCourse} 
                setLikedCourse = {setLikedCourse}></Card>
            })
        }
    </div>
  )
}

export default Cards
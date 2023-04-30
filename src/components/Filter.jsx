import React from 'react'

function Filter(props) {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

  return (
    <div className= "py-3 flex flex-wrap justify-center items-center gap-4">
        {
            filterData.map( (filter) => {
              return (<button onClick={() => {setCategory(filter.title)}} key = {filter.id}
               className = {` bg-black text-white rounded-md py-1 px-3 ${category === filter.title ? "border-2 border-white" : "border-transparent"}`}>{filter.title}</button>)
            })
        }
    </div>
  )
}

export default Filter
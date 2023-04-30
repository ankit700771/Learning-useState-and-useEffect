import './App.css';
import Header from './components/Header';
import { filterData , apiUrl } from './data';
import Filter from './components/Filter';
import { useState , useEffect } from 'react';
import Loader from './components/Loader';
import Cards from './components/Cards';

function App() {
  const [course ,setCourseData] = useState(null);

  const [category , setCategory] = useState(filterData[0].title);

  const [loader , setLoader] = useState(true);


  async function fetchData() {

    setLoader(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourseData(output.data);
    }
    catch{
      console.log('propblem');
    }
    setLoader(false);
    
  }

  useEffect( () => {
    fetchData();
  },[]);


  return (
    <div className="w-screen flex flex-col overflow-y-hidden bg-ligthBlue">
      <Header></Header>
    <Filter filterData = {filterData} category = {category} setCategory = {setCategory}></Filter>
      <div className='flex justify-center'>
        {
          loader ? (<Loader></Loader>) : (<Cards course = {course} category = {category}></Cards>)
        }
      </div>
    </div>
  );
}

export default App;

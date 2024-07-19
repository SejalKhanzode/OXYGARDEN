import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Plant from "../components/Plant";
import Footer from "../components/Footer";

const Home = () => {
  const API_URL = "https://oxygarden-3e5j.onrender.com/plants";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchPlantData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchPlantData();
  },[])

  return (
    <div>
      <section className="">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center">
          <header className="mx-auto py-20 text-3xl font-semibold lg:w-[70%]">
          <h1 className="bg-gradient-to-b from-[#15381a] via-[#07bb94] to-[#285a3d] text-transparent bg-clip-text font-bold text-5xl">
          Shop with OXYGARDEN
            </h1>
             Nurturing Health Through Indoor Oxygen Plants
          </header>
        </div>
      </section>
      {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Plant key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
      <Footer/>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const FeatureContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataTaker = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=3&limit=6');
        const result = await response.json();
        setData(result);
        console.log(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    dataTaker();
  }, []);

  if (loading) return <div className="text-center py-20 text-gray-500">Loading gallery...</div>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Photographers</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div  key={item.id} 
            className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="relative h-64 w-full overflow-hidden">
              <img  src={item.download_url}  alt={`Photo by ${item.author}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div className='text-black text-[11px] p-[5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Author</p>
                <h3 className="text-lg font-semibold text-gray-900">{item.author}</h3>
              </div>
              <a href={item.url} target="_blank" rel="noopener noreferrer"
                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors"
              > View </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureContainer
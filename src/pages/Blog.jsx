
import blogs from '../Blog.json';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <div className="banner-section about-banner-section flex justify-center items-center">
            <div className="banner-section-content text-center z-10">
                <h6 className="uppercase text-white">- Multinest</h6>
                <h1 className='text-6xl font-semibold text-white'>
                    Our<span className=' text-[#ff823a]'> Blog</span>
                </h1>
            </div>
      </div>
      <div className="shop-container px-[8%] lg:px-[12%] py-[50px]">
        <div className="mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
                <div key={index} className="bg-white shadow-md rounded-md overflow-hidden flex flex-col justify-between items-center">
                
                {/* Image Block */}
                <div className="blog-image relative overflow-hidden">
                    <img src={blog.image} alt={blog.title} />

                    {/* Badge inside image */}
                    <span className="blog-badge">News</span>
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{blog.pere}</h3>

                    <div className="flex justify-between items-center text-sm text-gray-600 mt-3">
                    <span>New Post on</span>
                    <span>{blog.date}</span>
                    <button className="text-[#ff823a] hover:underline! cursor-pointer flex items-center">
                        Read More →
                    </button>
                </div>
            </div>
        </div>
      ))}
    </div>
  </div>
      </div>
    </>
  )
}

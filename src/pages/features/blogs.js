import React, { useState, useEffect } from 'react'
import PostCard from '../../global/components/postCard'
import { postData } from '../../global/utils/data'
import axios from 'axios'

function Blogs() {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        axios.get('https://mern-801-backend.vercel.app/get_blogs')
            .then(function (response) {
                console.log("All data", response)
                setBlogs(response?.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <section className='blog_card'>
                <div className="page_width">
                    <h2>Letest Post</h2>
                    <div className="posts">
                        {
                            blogs?.map((item, index) => {
                                return (
                                    <PostCard
                                        key={index}
                                        // img={item.img}
                                        id={item._id}
                                        des={item.description}
                                        author={item.author_name}
                                        name={item.description}
                                    />
                                )
                            })
                        }

                    </div>
                    <div className="view">
                        <button>View All Post</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs

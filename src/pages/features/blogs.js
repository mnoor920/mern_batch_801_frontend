import React from 'react'
import PostCard from '../../global/components/postCard'
import { postData } from '../../global/utils/data'

function Blogs() {
    return (
        <div>
            <section className='blog_card'>
                <div className="page_width">
                    <h2>Letest Post</h2>
                    <div className="posts">
                        {
                            postData.map((item, index) => {
                                return (
                                    <PostCard
                                        img={item.img}
                                        author={item.author}
                                        name={item.name}
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

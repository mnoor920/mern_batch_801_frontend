import React from 'react'
import Img from '../../assets/images/blog_imgs/Rectangle 38.svg'
import author1 from '../../assets/images/author/author1.png'
import { Link } from 'react-router-dom'

function PostCard({ img, author, name, des, id }) {
    return (
        <div>
            <Link to={`/blog_post/${id}`} >
                <div className="post">
                    <img src={img ? img : Img} alt="" />
                    <div className="post_card">
                        <button className='btn1'>Technology</button>

                        {/* <div className="card_content"> */}
                        <h2>{des}</h2>

                        {/* </div> */}
                        <div className="author">
                            <img src={author ? author : author1} alt="" />
                            <h5>{name ? name : "Tracey Wilson"}</h5>
                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default PostCard

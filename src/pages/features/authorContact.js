import React from 'react'
import Img from '../../assets/images/author/author_1.png'
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import PostCard from '../../global/components/postCard';
import { postData } from '../../../src/global/utils/data'



function AuthorContact() {
    return (
        <div>
            <div className="author_contact">
                <div className="page_width">
                    <div className="inner_author">
                        <div className="auth_detail">
                            <div className="auth">
                                <div className="auth_img">
                                    <img src={Img} alt="" />
                                </div>
                                <div className="auth_info">
                                    <h5>Jonathan Doe</h5>
                                    <p>Collaborator & Editor</p>
                                </div>
                            </div>
                            <div className="detail">
                                <p>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
                            </div>
                            <div className="social_link">
                                <button>
                                    <IoLogoFacebook />
                                </button>
                                <button>
                                    <IoLogoTwitter />
                                </button>
                                <button>
                                    <IoLogoInstagram />
                                </button>
                                <button>
                                    <IoLogoYoutube />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className='blog_card'>
                <div className="page_width">
                    {/* <h2>Letest Post</h2> */}
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
                    
                </div>
            </section>
        </div>
    )
}

export default AuthorContact

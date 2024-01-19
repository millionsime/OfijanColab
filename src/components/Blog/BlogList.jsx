import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';
import './Blogs.scss';
import Logo from '../../assets/logo.png'
const BlogList = ({ blogs }) => {

    return (
        <section className="blogs">
            <Wrapper className="blogs__container">
                <div className='blog__section'>
                <div className='blogs_side'>
                        <div className='side_menu_head'>
                            <h6 className='title2'>Related Topics</h6>
                            <ul>
                                <li>The importance of exit</li>
                                <li>The purpose of exit exams</li>
                            </ul>
                        </div>
                    </div>
                    <div className='blogs_content'>
                        {/* <CategoryDiv/> */}
                        <h3 className='latest_post'>LATEST POST</h3>
                        <div className='underline'></div>


                        <div>
                            {blogs && blogs.map((blog, index) => (
                                <div className='blogs_content_single' key={index}>
                                    <div className="blog_list_div" key={blog.title}>
                                        <h1>{blog.title}</h1>
                                        <p className="blog_gener">Published in: {blog.categories}</p>
                                        <div className='author-card'>
                                            <img src={Logo}
                                                width={10} height={10} className='author-photo' />
                                            <div className='author-info'>
                                                <p className="author-name">Mr.{blog.author}</p>
                                                <p className="author-role">Writer</p>
                                            </div>
                                        </div> 
                                        <p className="blog_list_body" dangerouslySetInnerHTML={{ __html: blog.body.slice(0, 300)}}/>
                                        <Link to={`/blog/${blog.categories}/${blog.title}/full`}>Read More</Link>
                                        <div className='imageSpace'>
                                            <img height={'100%'} width={'100%'} src={'https://brandhub.co.nz/wp-content/uploads/2018/03/blog-page-placeholder-image.jpg'}
                                            />
                                        </div>
                                        <hr />
                                    </div>
                                </div>))}
                        </div>
                    </div>
                    <div className='blogs_side'>
                        <h3 className='title'>Popular Posts</h3>
                        <div className='side_menu_head'>
                            <hr></hr>
                            <ul>
                                <li><a href="#">የፈተና ጭንቀትን እንዴት መቆጣጠር እንደሚቻል</a></li>
                                <li><a href="#">The purpose of exit exams</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

            </Wrapper>
        </section>
    );
};

export default BlogList;

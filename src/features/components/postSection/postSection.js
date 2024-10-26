import './postSection.css'
import SinglePost from '../singlePost/singlePost'
import { selectActiveRedditPost } from '../../slices/postSlice'
import { useSelector } from 'react-redux'

const PostSection = () => {
    const { filterPosts } = useSelector(selectActiveRedditPost)

    return (
        <section className='post-section'>
            {filterPosts.map((post, index) => {
                return (
                    <SinglePost title={post.title} text={post.text} img={post.author} timeAgo={post.timeSince} comments={post.comments} upVotes={post.upVotes} downVotes={post.downVotes} key={index}/>
                )
            })}
        </section>
    )
}

export default PostSection
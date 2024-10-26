import './subReddit.css'
import SingleSubReddit from '../singleSubReddit/singleSubReddit'
import { fetchSubReddit, selectSubReddit } from '../../slices/subRedditSlice'
import { fetchActiveRedditPost } from '../../slices/postSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SubReddit = () => {
    const dispatch = useDispatch()
    let fetchCount = 0
    let postCount = 0
    const { subReddit } = useSelector(selectSubReddit)

    useEffect(() => {
        if(fetchCount > 0) return
        dispatch(fetchSubReddit())
        fetchCount++
    }, [])

    useEffect(() => {
        if(postCount > 0) return
        dispatch(fetchActiveRedditPost('home'))
        postCount++
    }, [])

    return (
        <div className='subreddit-container'>
            <section className='subreddit-section'>
                <h2>SUBBREDDITS</h2>
                {subReddit.map((each, index) => {
                    return <SingleSubReddit name={each.name} img={each.img} key={index}/>
                })}
            </section>
        </div>
    )
}

export default SubReddit

export const toggleModal = () => {
    const target = document.querySelector('.mobile-subreddit-container')
    target.style.left = target.style.left === '15px' ? '-340px' : '15px'
    document.querySelector('.post-section').addEventListener('click', () => {
        target.style.left = '-340px'
    })
}
import '../subReddit/subReddit.css'
import SingleSubReddit from '../../slices/subRedditSlice'
import { selectSubReddit } from '../../slices/subRedditSlice'
import { useSelector } from 'react-redux'

const MobileSubReddit = () => {
    
    const { subReddit } = useSelector(selectSubReddit)

    return (
        <div className='mobile-subbreddit-container'>
            <section className='mobile-subbredit-section'>
                <h2>SUBBREDDITS</h2>
                {subReddit.map((each, index) => {
                    return <SingleSubReddit name={each.name} img={each.img} key={index}/>
                })}
            </section>
        </div>
    )
}

export default MobileSubReddit

export const toggleModal = () => {
    const target = document.querySelector('.mobile-subreddit-container')
    target.style.display = 'block'
    setTimeout(() => {
        target.style.left = target.style.left === '15px' ? '-340px' : '15px'
    }, 100)
}
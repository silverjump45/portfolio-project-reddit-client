import './post.css'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import { TiMessage } from 'react-icons/ti'
import { useEffect, useState } from 'react'

const post = (props) => {
    const [time, setTime] = useState()
    let imgCheck = props.imgCheck
    if (imgCheck.includes('jpg') || imgCheck.includes('png') || imgCheck.includes('jpeg') || imgCheck.included('gif')) {
        imgCheck = props.img
    } else {
        imgCheck = false
    }

    const toggleVoteColor = (e) => {
        const list = e.target.closest('span').classList[0]
        const numVote = e.target.closest('div').children[1]
        list === 'up-votes' ? numVote.style.color = 'green' : numVote.style.color = 'red'
    }

    const removeVoteColor = (e) => {
        e.target.closest('div').children[1].style.color ='black'
    }

    useEffect(() => {
        const curDate = new Date()
        const date = new Date(props.timeAgo *1000)
        const daysAgo = curDate.getDate() - date.getDate()
        const hoursAgo = (curDate.getHours() - date.getHours())
        let output = (daysAgo * 24) + hoursAgo

        if(daysAgo > 1) {
            output = `${daysAgo} days ago`
        } else if(daysAgo === 1) {
            output = `${daysAgo} days ago`
        } else if(hoursAgo > 1) {
            output = `${hoursAgo} hours ago`
        }
        setTime(output)
    },[])

    if (time < 1) return

    return (
        <section className='post'>
            <div className='votes'>
                <span className='up-votes'><BiUpArrow onMouseOver={toggleVoteColor} onMouseLeave={removeVoteColor}/></span>
                <p className='num-votes'>{props.upVotes}</p>
                <span className='down-votes'><BiDownArrow onMouseOver={toggleVoteColor} onMouseLeave={removeVoteColor}/></span>
            </div>
            <div className='post-content'>
                <h2>{props.title}</h2>
                <p>{props.text ? props.text : null}</p>
                {imgCheck ? (
                    <img src={props.img}/>
                ) : null }
                <div className='border-line'/>
                <div className='post-information'>
                    <p className='author'>{props.author}</p>
                    <p className='time-ago'>{time}</p>
                    <div className='comment-icon-section'>
                        <TiMessage className='message-icon'/>
                        <span>{props.comments}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default post
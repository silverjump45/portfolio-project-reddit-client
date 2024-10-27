import '../singleSubReddit/singleSubReddit.css';

const HomeSubReddit = (props) => {
    console.log(props)

    return (
        <section className='single-subreddit'>
            <img src='https://imgs.search.brave.com/r8SaAT0A4evMc0liRJ96rFUPE24EmlAI590hcOjplDI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/OTFDZFg5dnJ2cDE1/RHIxalMtOWhBSGFI/YSZwaWQ9QXBp'/>
            <p>{props.name}</p>
        </section>
    )
}

export default HomeSubReddit
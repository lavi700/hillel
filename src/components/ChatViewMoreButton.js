import '../styles/ChatButtons.css'

export default function ChatViewMoreButton(props){

    let text

    if (props.language === 'hebrew'){
        text = 'הצג עוד'
    }else text = 'View more'

    return(
        <button className='button' >{text}</button>
    )
}
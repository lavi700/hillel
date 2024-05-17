import '../styles/ChatButtons.css'

export default function ChatMenuButton(props){

    return(
        <button className='button' onClick={() => props.onClick(props.language)}>{props.text}</button>
    )

}
import '../styles/ChatButtons.css'

export default function ChatOptionButton(props){


    return(
        <>
            <button className='button' onClick={props.onClick} >{props.text}</button>
        </>
    )
}
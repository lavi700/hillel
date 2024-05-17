import ChatOptionButton from "./ChatOptionButton"

export default function OptionsButtonsDiv(props){


    const buttons = props.list.map(item => <ChatOptionButton subject={item.subject} text={item.text} onClick={() => props.handleClick(item.subject, props.language)}/>)

    return(
        <div style={{display:'flex', flexDirection: 'column', gap:'5px'}}>
            {buttons}
        </div>
    )

}
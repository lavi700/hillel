import "../styles/Message.css"

export default function(props){
    


    return(
        <div className={'message'} style={{ marginLeft: 'auto',backgroundColor:'lightblue', marginRight:"10px",borderRadius: '20px 0px 20px 20px'}}>
            {props.text}
        </div>
    )
}


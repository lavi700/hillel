import "../styles/Message.css";

export default function UserMessage(props) {
    const truncateWord = word => word.length > 20 ? `${word.slice(0, 20)}...` : word;
    
    const truncatedText = props.text.split(' ').map(word => truncateWord(word)).join(' ');

    return (
        <div className="message" style={{ marginRight: 'auto', backgroundColor: 'rgb(30,144,255)', marginLeft: "10px", borderRadius: '0 20px 20px 20px' }}>
            {truncatedText}
        </div>
    );
}

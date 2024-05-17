import {IconButton} from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useDispatch } from "react-redux";
import { handleOpenChat } from "../state/ChatSlice";
import {TextField} from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import InputAdornment from '@mui/material/InputAdornment';
import React from "react";
import UserMessage from "./UserMessage";
import { handleOptionClickBackend, handleSendQuestionGPT } from "../backendFunctions";
import GptMessage from "./GptMessage";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ChatOptionButton from "./ChatOptionButton";
import OptionsButtonsDiv from "./OptionsButtonsDiv";
import { answers_dict_hebrew, answers_dict_english } from "../gpt_writen_answers";
import ChatMenuButton from "./ChatMenuButton";
import ChatViewMoreButton from "./ChatViewMoreButton";



export default function ChatBox(){

    const dispatch = useDispatch()
    const hebrewSubjectsList = [{subject:'Pricing', text:'מחירים'},{subject:'Location', text:'מיקום'}]
    const englishSubjectsList = [{subject:'Pricing', text:'Pricing'},{subject:'Location', text:'Location'}]
    const initialChatMessagesList = [{text:answers_dict_english["Opening"], type: 'gpt'},{text:answers_dict_hebrew["Opening"], type: 'gpt'},{text:"Show menu",type:"menu", language: "english"},{text:"הצג תפריט",type:"menu", language: "hebrew"}]

    var [chatMessagesList, setChatMessagesList] = React.useState(initialChatMessagesList)
    const [inputValue, setInputValue] = React.useState()
    const [currentLanguage, setCurrentLanguage] = React.useState('')

    async function handleOptionClick(subject, language) {
        try {
            const gptResponse = await handleOptionClickBackend(subject, language);
            setChatMessagesList(prevList => {
                const currentSubjectList = language === 'hebrew' ? hebrewSubjectsList : englishSubjectsList
                const title = currentSubjectList.find(item => item.subject === subject)?.text || ''
                const newList = [...prevList, { text: `${title}: \n ${gptResponse}`, type: 'gpt' }];
                return newList;
            });
        } catch (error) {
            console.error('Error handling option click:', error);
        }
    }

    function handleMenuClick(language){
        setChatMessagesList(prevList => {
            let title
            if (language === "hebrew"){
                title = ":בחר מהתפריט"
            }else title = "Pick from the menu:"
            return [...prevList,{text: title, type: 'gpt'}, {text:'none', type:'options', language: language}, {type: 'view-more', language:language}]
        })
    }
            

    const messages = chatMessagesList.map((message) => {
        if (message.type === 'user'){
            return (
                <UserMessage text={message.text}/>
            )
        }if (message.type === 'gpt'){
            return(
                <GptMessage text={message.text}/>
            )
        }if (message.type === 'options'){
            return <OptionsButtonsDiv handleClick={handleOptionClick} language={message.language} list={message.language === 'hebrew' ? hebrewSubjectsList : englishSubjectsList}/>
        }if (message.type === 'menu'){
            return <ChatMenuButton text={message.text} language={message.language} onClick={handleMenuClick}/>
        }if (message.type === 'view-more'){
            return <ChatViewMoreButton language={message.language}/>
        }
    })


    
    function handleInputChange(event){

        setInputValue(event.target.value)
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleSendMessage()
        }
    }

    

    async function handleSendMessage() {
        const currentInptValue = inputValue;
;
        setInputValue('');
    
        if (currentInptValue) {
            try {
                const gpt_response = await handleSendQuestionGPT(currentInptValue);
                const gpt_response_text = gpt_response.text
                setCurrentLanguage(gpt_response.language)
    
                setChatMessagesList(prevList => {
                    const newList = [...prevList, { text: currentInptValue, type: 'user' }, { text: gpt_response_text, type: 'gpt' }];

                    if (gpt_response.subject === 'None'){
                        newList.push({text:'none', type:'options', language: gpt_response.language})
                        newList.push({ type:'view-more', language: gpt_response.language})
                    }
    
                    return newList;
                });
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    }

            


    React.useEffect(() => {
        // Scroll to the bottom after the component has re-rendered
        const messagesContainer = document.getElementById("messages-container");
    
        // Smooth scroll to the bottom
        messagesContainer.scrollTo({
            top: messagesContainer.scrollHeight,
            behavior: "smooth"
        });
    }, [chatMessagesList]);
    
      
      


    return(
        <>
        <div style={{position:  "fixed", right: "80px",top:"80px", height:"480px", width: "350px", backgroundColor:"white", borderRadius: '20px'}}>
            <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center', height: '50px', padding: '0 10px'}}>
                <IconButton 
                onClick={() => setChatMessagesList(initialChatMessagesList)}
                sx={{}}>
                    <DeleteOutlineRoundedIcon />
                </IconButton>
                <IconButton 
                onClick={() => dispatch(handleOpenChat())}
                sx={{}}>
                    <CloseRoundedIcon />
                </IconButton>
            </div>
            <div id="messages-container" style={{display:'flex', flexDirection: "column", height: '373px', overflowY: 'scroll'  ,gap: '10px', backgroundColor:'rgb(240,248,255)', whiteSpace: 'pre-line' }}>
                {messages}
            </div>
            <TextField 
            variant="outlined" 
            autoComplete="off" 
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}

            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSendMessage}>
                      <SendRoundedIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            sx={{position:"absolute", bottom: 0, right:0, left:0}}>
                
            </TextField>
        </div>
        </>
    )
}


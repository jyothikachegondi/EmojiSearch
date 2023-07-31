import React,{useState} from 'react'
import './emojiSearch.css'
const emojiData=[
      {
        id:1,
        symbol:"😊",
        name:"Smile"
      },
      {
        id:2,
        symbol:"😂",
        name:"Laughing with tears"
      },
      {
        id:3,
        symbol:"🥳",
        name:"Party"
      },
      {
        id:4,
        symbol:"😋",
        name:"Yummy face"
      },
      {
        id:5,
        symbol:"🤗",
        name:"Hug"
      },
      {
        id:6,
        symbol:"😴",
        name:"Sleeping"
      },
      {
        id:7,
        symbol:"😭",
        name:"Crying"
      },
      {
        id:8,
        symbol:"😙",
        name:"Kiss"
      },
      {
        id:9,
        symbol:"🥱",
        name:"Yawning face"
      },
      {
        id:10,
        symbol:"❤️",
        name:"Heart"
      },
    ];
    function EmojiSearch() {
        const [searchEmoji,setSearchEmoji]=useState("");
        const handleChange=(e)=>{
            setSearchEmoji(e.target.value);
        }
        const showEmoji= emojiData.filter((emoji)=>{
            const emojiName=emoji.name.toLowerCase();
            return emojiName.includes(searchEmoji.toLowerCase());
        });
      return (
        
        <div id="Main">
            <h1><u>React Emoji Search</u></h1>
            <input type='text' placeholder='search for emoji' value={searchEmoji} onChange={handleChange}></input>
            <div>
                {
                    showEmoji.map((emoji) =>emoji.symbol)
                }
            </div>
        </div>
        
      )
    }
    
    export default EmojiSearch
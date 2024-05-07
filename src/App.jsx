function App(){
  
  function chatbot(){
    
    function getVoices(){
      let voices = speechSynthesis.getVoices();
      if(!voices.length){
          let utterance = new SpeechSynthesisUtterance(" ");
          speechSynthesis.speak(utterance);
          voices = speechSynthesis.getVoices();
      }
      return voices;
  }
  function speak(text, voice, rate, pitch, volume){
      let speakData = new SpeechSynthesisUtterance();
      speakData.volume = volume;
      speakData.rate = rate;
      speakData.pitch = pitch;
      speakData.voice = voice;
      speakData.text = text;
      speakData.lang = 'en';
      speechSynthesis.speak(speakData);
      

  }
  
              var recongnization = new webkitSpeechRecognition();
      recongnization.onstart =() =>{
        document.getElementById("result").innerText = "Listening..."

       
  
         
      } 
      recongnization.onresult = (e) =>{
        var Whatsapp;
          var transcript = e.results[0][0].transcript;
          var data =  transcript.toLowerCase();
          var chat = data.replace(/[^a-zA-Z0-9 ]/g,'');
      
          document.getElementById("result").innerText = "";
          console.log(chat)
        
          
          if(chat === "open whatsapp" || chat === "open my whatsapp" ||chat === "please open whatsapp"){
            const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
            const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
            if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
               alert("ios")
  
            }
            else if(windowsPlatforms.includes(platform)){
              alert("window");
            }
            else if (/Android/.test(navigator.userAgent)) {
  
              window.location.href = "whatsapp://send?phone=6266834504";
              
               }
               else{
                alert("window");
  
               }

          }
          else if(chat === "open facebook" || chat === "open my facebook" ||chat === "please open facebook"){
            window.location.href = "facebook://";
            return;


          }
         else if(chat === "open instagram"){
         const platform = window.navigator?.userAgentData?.platform || window.navigator.platform;
          const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
          if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
             

          }
          else if(windowsPlatforms.includes(platform)){
            alert("window");
          }
          else if (/Android/.test(navigator.userAgent)) {

            window.location.href = "intent://instagram.com/_n/mainfeed/#Intent;package=com.instagram.android;scheme=https;end";
            
             }
             else{
              alert("window");

             }
          }
          else if(chat === "open camera"){
           
            try{
              window.location.href = "intent:android.media.action.IMAGE_CAPTURE#Intent;package=com.android.camera;scheme=content;end";

            }
            catch(err){
              console.log(err.message);
            }
            
          }
          else{
            
            console.log(chat)
            const userMessage = [
              ["hi", "hey", "hello"],
              ["sure", "yes", "no"],
              ["are you genious", "are you nerd", "are you intelligent"],
              ["i hate you", "i dont like you"],
              ["how are you", "how is life", "how are things", "how are you doing"],
              ["how is corona", "how is covid 19", "how is covid19 situation"],
              ["what are you doing", "what is going on", "what is up"],
              ["how old are you"],
              ["who are you", "are you human", "are you bot", "are you human or bot"],
              ["who created you", "who made you", "who is your creator"],
            
              [
                "your name please",
                "your name",
                "may i know your name",
                "what is your name",
                "what call yourself"
              ],
              ["i love you"],
              ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
              ["bad", "bored", "tired"],
              ["help me", "tell me story", "tell me joke"],
              ["ah", "ok", "okay", "nice", "welcome"],
              ["thanks", "thank you"],
              ["what should i eat today"],
              ["bro"],
              ["what", "why", "how", "where", "when"],
              ["corona", "covid19", "coronavirus"],
              ["you are funny"],
              ["i dont know"],
              ["boring"],
              ["im tired"]
            ];
            const botReply = [
              ["Hello!", "Hi!", "Hey!", "Hi there!"],
              ["Okay"],
              ["Yes I am! "],
              ["I'm sorry about that. But I like you dude."],
              [
                "Fine... how are you?",
                "Pretty well, how are you?",
                "Fantastic, how are you?"
              ],
              ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
            
              [
                "Nothing much",
                "About to go to sleep",
                "Can you guess?",
                "I don't know actually"
              ],
              ["I am always young."],
              ["I am just a bot", "I am a bot. What are you?"],
              ["Sabitha Kuppusamy"],
              ["I am nameless", "I don't have a name"],
              ["I love you too", "Me too"],
              ["Have you ever felt bad?", "Glad to hear it"],
              ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
              ["What about?", "Once upon a time..."],
              ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
              ["You're welcome"],
              ["Briyani", "Burger", "Sushi", "Pizza"],
              ["Dude!"],
              ["Yes?"],
              ["Please stay home"],
              ["Glad to hear it"],
              ["Say something interesting"],
              ["Sorry for that. Let's chat!"],
              ["Take some rest, Dude!"]
            ];
       
        let string = chat;
        
        let item;
        let items;
        for (let x = 0; x < userMessage.length; x++) {
          for (let y = 0; y <botReply.length; y++) {
            if (userMessage[x][y] == string) {
              
              items = botReply[x];
            
              item = items[Math.floor(Math.random() * items.length)];
             
            }
          }
        }
        if(item){
          document.getElementById("result").innerHTML = item;
          if('speechSynthesis' in window){
            let voices = getVoices();
            let rate = 1.2, pitch = 1, volume = 1;
            let text = item;
            speak(text, voices[1],rate,pitch,volume);
        }
        else{
            console.log("error");
        
        }
        
        }
        else{
          let expectedReply = [
            [
              "Good Bye, dude",
              "Bye, See you!",
              "Dude, Bye. Take care of your health in this situation."
            ],
            ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
            ["Have a pleasant evening!", "Good evening too", "Evening!"],
            ["Good morning, Have a great day!", "Morning, dude!"],
            ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
          ];
          let expectedMessage = [
            ["bye", "tc", "take care"],
            ["night", "good night"],
            ["evening", "good evening"],
            ["morning", "good morning"],
            ["noon"]
          ];
        
          for (let x = 0; x < expectedMessage.length; x++) {
            if (expectedMessage[x].includes(string)) {
              items = expectedReply[x];
              item = items[Math.floor(Math.random() * items.length)];
               
              if('speechSynthesis' in window){
                let voices = getVoices();
                let rate = 1.2, pitch = 1, volume = 1;
                let text = item;
                speak(text, voices[1],rate,pitch,volume);
            }
            else{
                console.log("error");
            
            }
            document.getElementById("result").innerHTML = item;
            }
          }
         
        }
        
           
             
            }
         
            

          }

          
         
        
          
         
  
          
         
  
       
       recongnization.start();

        }
  
  
      
        
       


        
  /** 
  
  function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
  }
  
  function sendMessage() {
   
  }
  
  
  
  function appendMessage(sender, message) {
    
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    console.log()
   
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            appendMessage('bot', responses["expert"]);
        };
        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✖ No';
        buttonNo.onclick = function() {
            appendMessage('bot', responses["no"]);
        };

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
  }
  */
  
  return( 
   
  
    <>
    <div className=" flex justify-center mt-60  text-6xl "> <i className='fa fa-user-circle text-5xl shadow-md rounded-full shadow-blue-500 hover:cursor-pointer' onClick={chatbot}></i></div>
    <div id = "result" className="result flex justify-center"></div>
    <button id="chatbot-toggle-btn" ></button>
      <div className="chatbot-popup hidden" id="chatbot-popup">
        <div className="chat-header">
            <span>Chatbot</span>
            <button id="close-btn" >&times;</button>
        </div>
        <div className="chat-box" id="chat-box"></div>
        <div className="chat-input">
            <input type="text" id="user-input" placeholder="Type a message..."/>
            <button id="send-btn" >Send</button>
        </div>
        
    </div>
    </>
  )

}
      
  

export default App

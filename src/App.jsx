function App(){
  function chatbot(){
    console.log("hello");
    
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
            window.location.href = "whatsapp://"
            return;

          }
          else if(chat === "open facebook" || chat === "open my facebook" ||chat === "please open facebook"){
            window.location.href = "facebook://";
            return;


          }
         else if(chat === "open instagram"){
          if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream){
            alert("ios");

          }
          else if(windowsPlatforms.includes(platform)){
            alert("window");
          }
          if (/Android/.test(navigator.userAgent)) {

            document.getElementById("result").innerHTML = "Android";
            alert("android");
             }
             else{
              alert("window");

             }
          }
          else{
            
            console.log(chat)
            const responses = {
              "hello.": "Hi there! How can I assist you today?",
              "hello": "Hi there! How can I assist you today?",
              "coding hubs": "Here you will get Notes, Ebooks, project source Code, Interview questions. visit Coding Hubs.<a href='https://thecodinghubs.com' target='_blank'>Visit Website</a>",
              "how are you": "I'm just a bot, but I'm here to help you!",
              "need help": "How I can help you today?",
              "bye": "Goodbye! Have a great day!",
              "default": "i didn't understand",
              "expert": "",
              "no": "Okay, if you change your mind just let me know!",
              "hii" : "Hi Whats'up",
              "hi" : "Hi Whats'up",
              "hii." : "Hi Whats'up",
              "you are single": "yes i am  single",
              
              
            };
            const userInput = chat;
            if (userInput !== '') {
                //appendMessage('user', userInput);
                respondToUser(userInput);
                console.log(userInput);
                document.getElementById("result").innerHTML = userInput;
                
            }
            function respondToUser(userInput) {
              const response = responses[userInput] || responses["default"];
              document.getElementById("result").innerHTML = response;
             
              console.log(response);
              if('speechSynthesis' in window){
                let voices = getVoices();
                let rate = 1.2, pitch = 1, volume = 1;
                let text = response;
                speak(text, voices[1],rate,pitch,volume);
            }
            else{
                console.log("error");
            
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

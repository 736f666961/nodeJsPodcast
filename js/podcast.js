// #################### For Audio Podcast #################
let pButton = document.getElementById("playButton");

// Songs
let songs = ["1.mp3", "2.mp3"];

// Create Audio Object
let audio = new Audio();

// Set Source of Audio
audio.src = songs[0];

// Check Play Method
function checkPlay(){
    if (audio.paused){
        // play audio
        audio.play();

        // Set Audio Duration
        startTime.innerHTML = audio.duration * 100;

        // Change To Play Button
        pButton.setAttribute("class","fa fa-pause");
            
        // For Check Working
        console.log("Audio Paused");
    }else{
        // Pause audio
        audio.pause();

        // Change To Play Button
        pButton.setAttribute("class","fa fa-play");

        // For Check Working
        console.log("Audio Played");
    }
}

// Set Volume
function setvolume(){
    let rangeVolume = document.getElementById("rangeVolume");
    audio.volume = rangeVolume.value / 100;
}

// Set Volume By Default
let rangeVolume = document.getElementById("rangeVolume").value = 50;

// Set Start Time

// My Range (Slider Of AUdio)
let slider = document.getElementById("myRange");

audio.addEventListener('timeupdate', updatewaktu);

function updatewaktu(){
  let progress = audio.currentTime * (100/audio.duration);
  slider.value = progress;

  let startTime = document.getElementById("startTime");
  
  let minute = Math.floor(audio.currentTime/60);
  let second =  Math.floor(audio.currentTime - minute * 60);

  startTime.innerHTML = minute + ":" + second;

    // elpased time
    let elpasedMinute = Math.floor(audio.duration / 60);
    let elpasedSecond = Math.floor(audio.duration - elpasedMinute * 60);

    // Elpased 
    let elpased = document.getElementById("elapsedTime");
    elpased.innerHTML = elpasedMinute + ":" + elpasedSecond;
}

// ##################### Add Podcast ####################
// Create a double linked list As node
class Node{
    constructor(data, title, singer, description, next, previous){
        this.data = data;
        this.title = title;
        this.singer = singer;
        this.description = description;
        this.next = next || null;
        this.previous = previous || null;
    }
}

// Create a queue
class Queue{
    constructor(){
        this.front = this.rear = this.bottom = null;
    }

    // Enqueue Method for add data
    enqueue(data, title, singer, description){
        // If this bottom is not exists
        if(!this.bottom){
            // let front and rear and bottom points to the new node
            this.front = this.rear = this.bottom = new Node(data, title, singer, description);
            // console.log("Data: " + data);
            return;
        }
        // create temp and store rear in it
        let temp = this.rear;
        
        // Let rear equal next rear and store the new node in it
        this.rear = this.rear.next = new Node(data, title, singer, description);
        
        // and let previous rear point to temp
        this.rear.previous = temp;

    }

    // Dequeue Method for delete data
    dequeue(){
        // If front and front equal bottom
        if(this.front && this.front === this.bottom){
            // store in front next bottom
            this.front = this.bottom.next;
        }
        // When we have a lot of nodes to dequeue it
        if(this.bottom && this.bottom.next){
            // point to the next node
            this.bottom = this.bottom.next;
            // and let previous null because it is the first one
            this.bottom.previous = null;
        }else{
            // when queue is empty
            this.front = this.rear = this.bottom = null;
        }
    }

    // Next Method for travers to next node
    next(){
        // Get Title Podcast
        let t = document.getElementById("title");

        // Get Singer Podcast
        let s = document.getElementById("singer");

        // Get descripition
        let d = document.getElementById("des");

        // If front and next front is exists
        // Go to the next front and with show method return it's data
        if(this.front && this.front.next){
            this.front = this.front.next;
            console.log("Data(next): " + this.front.data);
            t.innerHTML = this.front.title;
            s.innerHTML = this.front.singer;
            d.innerHTML = this.front.description;
            audio.src = this.front.data;
            audio.play();
        }
    }

    // Previous Method for travers to previous node
    previous(){
        // Get Title Podcast
        let t = document.getElementById("title");

        // Get Singer Podcast
        let s = document.getElementById("singer");

        // Get descripition
        let d = document.getElementById("des");

        // If front and front previous is exists 
        // return the data front and with show method return the data that exists in that front
        if(this.front && this.front.previous){
            this.front = this.front.previous;

            console.log("Data(prev): " + this.front.data);

            t.innerHTML = this.front.title;
            s.innerHTML = this.front.singer;
            d.innerHTML = this.front.description;

            audio.src = this.front.data;
            audio.play();
        }
    }

    // Show Method for display data
    show(){
        // If front exists return it's data
        if(this.front){
            return this.front.data;
        }

        // Other ways return queue is empty
        return "Queue Is Empty !";
    }
}

let qu = new Queue();

// Enqueue Function
function enqueue(){
    qu.enqueue("1.mp3", "JRE MMA Show", "with Radio Rahim", "Joe sits down with boxing reporter and journalist Radio Rahim.");
    qu.enqueue("2.mp3", "JRE MMA Show", "with Rashad Evans", "Joe sits down with former UFC Light Heavyweight Champion, and a 2019 inductee of the UFC Hall of Fame, Rashad Evans.");

    qu.show();
}

// Dequeue function
// function dequeue(){
//     qu.dequeue();
//     qu.show();
// }

// Next Function
function next(){
    qu.next();
    qu.show();
}

// Previous Function
function previous(){
    qu.previous();
    qu.show();
}

// Call enqueue function by default
enqueue();

// Set default title and subtitle
// document.getElementById("title").innerHTML = "Jef1";
// document.getElementById("singer").innerHTML = "Izecold1";

// New Podcast 1 For Joe
function newPodcast1(){
    // Get Description
    let description = document.getElementById("des");

    // Get Title
    let title = document.getElementById("title");

    // Get Singer
    let singer = document.getElementById("singer");

    description.style.fontSize = "11px";
    title.innerHTML = "JRE MMA Show";
    singer.innerHTML = "with Radio Rahim";

    description.innerHTML = "Joe sits down with boxing reporter and journalist Radio Rahim.";
    audio.src = songs[0];
    checkPlay();
}

// New Podcast 2 For Joe
function newPodcast2(){
    // Get Description
    let description = document.getElementById("des");

    // Get Title
    let title = document.getElementById("title");

    // Get Singer
    let singer = document.getElementById("singer");

    description.style.fontSize = "11px";
    title.innerHTML = "JRE MMA Show ";
    singer.innerHTML = "with Rashad Evans";

    description.innerHTML = "Joe sits down with former UFC Light Heavyweight Champion, and a 2019 inductee of the UFC Hall of Fame, Rashad Evans.";
    audio.src = songs[1];
    checkPlay();
}

// New Podcast 3 For MFCEO
function newPodcast3(){
    // Get Description
    let description = document.getElementById("des");

    // Get Title
    let title = document.getElementById("title");

    // Get Singer
    let singer = document.getElementById("singer");

    description.style.fontSize = "11px";
    title.innerHTML = "MFCEO318";
    singer.innerHTML = "The End, with Andy Frisella";

    description.innerHTML = "And now...the final episode of The MFCEO Project podcast (which, by the way, has language and adult humor that is not suitable for kids. Use your brains. Be a good parent.)    ";
    audio.src = songs[0];
    checkPlay();
}

// New Podcast 4 For MFCEO
function newPodcast4(){
    // Get Description
    let description = document.getElementById("des");

    // Get Title
    let title = document.getElementById("title");

    // Get Singer
    let singer = document.getElementById("singer");

    description.style.fontSize = "11px";
    title.innerHTML = "MFCEO317";
    singer.innerHTML = "the Final Episode";

    description.innerHTML = "We chase extraordinary moments instead of being grateful for ordinary moments until hard shit happens. And then in the face of really hard stuff — illness, death, loss — the only thing we're begging for is a normal moment.";
    audio.src = songs[1];
    checkPlay();
}

// New Podcast 5 For TIM
function newPodcast5(){
    // Get Description
    let description = document.getElementById("des");

    // Get Title
    let title = document.getElementById("title");

    // Get Singer
    let singer = document.getElementById("singer");

    description.style.fontSize = "11px";
    title.innerHTML = "Ryan Holiday";
    singer.innerHTML = "Turning the Tables";

    description.innerHTML = "Preview of the final episode.";
    audio.src = songs[0];
    checkPlay();
}

// New Podcast 6 FOR TIM
function newPodcast6(){
    // Get Description
    let description = document.getElementById("des");

    // Get Title
    let title = document.getElementById("title");

    // Get Singer
    let singer = document.getElementById("singer");

    description.style.fontSize = "11px";
    title.innerHTML = "Brene Brown";
    singer.innerHTML = "Striving versus self-Accept";

    description.innerHTML = "Welcome to The Tim Ferriss Show! It is — usually — my job to sit down with world-class performers of all different types to tease out the habits, routines .";
    audio.src = songs[1];
    checkPlay();
}


// Create New Element
function newElement(){
    // Get Data which is source audio
    let morceau = document.getElementById("morceau");
    
    // Get Title
    let episode = document.getElementById("episode");
    
    // Get Singer
    let launch = document.getElementById("launch");

    // Get Description
    let des = document.getElementById("description");

    // ############ Create elemenets ############

    if(morceau.value.length > 0 && episode.value.length && launch.value.length > 0 && des.value.length > 0){
        // Get Div Element
        let pdiv = document.getElementById("newPodcasts");

        // Create New Podcast
        let div = document.createElement("div");

        // Create h2
        let h2 = document.createElement("h2");
        div.appendChild(h2);
        
        // Create text for h2
        let h2Text = document.createTextNode(episode.value + " - " + launch.value);
        h2.appendChild(h2Text);

        // Add New Created div to the 
        pdiv.appendChild(div);

        // Add new Element to double linked list
        qu.enqueue(morceau.value, episode.value, launch.value, des.value);
        
        checkPlay();
    }
}

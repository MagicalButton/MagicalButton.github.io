var title = document.createElement("h1");
title.innerHTML = "MAGICAL BUTTON";
title.style.textAlign = "center";
title.style.marginTop = "10%"; // Adjust the margin top value as needed
title.style.fontFamily = "Arial, sans-serif";
title.style.fontSize = "5.5vw"; // Adjust the font size using viewport units
title.style.color = "#337ab7"; // Match the button color
title.style.textTransform = "capitalize"; // Capitalize the title name

// Create a button container element
var buttonContainer = document.createElement("div");
buttonContainer.style.textAlign = "center";

// Create a button element
var button = document.createElement("button");

var originalColor= "#337ab7"
var darkerColor = "#13547a";

// Add event listeners for mouseover and mouseout events
button.addEventListener("mouseover", function() {
  // Change the button color to the darker shade of blue
  button.style.backgroundColor = darkerColor;
});

button.addEventListener("mouseout", function() {
  // Change the button color back to the original blue
  button.style.backgroundColor = originalColor;
});

// Set the button text
button.innerHTML = "Click Me";

// Apply CSS styles to the button
button.style.backgroundColor = "#337ab7";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "4px";
button.style.padding = "1vw 3vw"; // Adjust the padding using viewport units
button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
button.style.transition = "background-color 0.3s ease";
button.style.fontFamily = "Arial, sans-serif";
button.style.fontSize = "1.3vw"; // Adjust the font size using viewport units
button.style.cursor = "pointer";
button.style.marginTop = "2%"; // Add spacing below the title

// Create a paragraph element for the message
var message = document.createElement("p");
message.style.color = "#337ab7"; // Match the button color
message.style.display = "none";
message.style.fontSize = "1.4vw"; // Adjust the font size using viewport units
message.style.fontWeight = "bold"; // Make the text bold
message.style.textAlign = "center";


var romanticQuestions = [];

// Function to add a question to the storage list
function addQuestion(question) {
  romanticQuestions.push(question);
}


// Add your romantic questions to the storage list:
addQuestion("Do you have a name, or can I call you mine?");
addQuestion("Is your name Google? Because you have everything I've been searching for.");
addQuestion("Excuse me, but I think you dropped something: my jaw.");
addQuestion("If you were a vegetable, you'd be a cute-cumber.");
addQuestion("Is your dad a baker? Because you're a cutie pie!");
addQuestion("Are you a magician? Because whenever I look at you, everyone else disappears.");
addQuestion("Is your name Wi-Fi? Because I'm really feeling a connection.");
addQuestion("Can I follow you home? Cause my parents always told me to follow my dreams.");
addQuestion("Do you believe in love at first sight, or should I walk by again?");
addQuestion("Is your smile made of magic? Because whenever I see it, the whole room lights up.");
addQuestion("If you were a vegetable, you'd be a cute-cumber.");
addQuestion("Is your dad a boxer? Because you're a knockout!");
addQuestion("I must be a snowflake because I've fallen for you.");
addQuestion("Do you have a name, or can I call you mine?");
addQuestion("Are you a magician? Whenever I look at you, everyone else disappears.");
addQuestion("Is your name Google? Because you have everything I've been searching for.");
addQuestion("Excuse me, but I think you dropped something: my jaw.");
addQuestion("Is your dad a baker? Because you're a cutie pie!");
addQuestion("Is your name Wi-Fi? Because I'm really feeling a connection.");
addQuestion("Do you have a Band-Aid? I just scraped my knee falling for you.");
addQuestion("Is your smile made of magic? Because whenever I see it, the whole room lights up.");
addQuestion("Can I follow you home? Cause my parents always told me to follow my dreams.");
addQuestion("Do you believe in love at first sight, or should I walk by again?");
addQuestion("Are you a camera? Every time I look at you, I smile.");
addQuestion("If you were a vegetable, you'd be a cute-asparagus.");
addQuestion("Is your name Google? Because you've got everything I'm searching for.");
addQuestion("Do you have a name, or can I call you mine?");
addQuestion("Excuse me, but I think you dropped something: my jaw.");
addQuestion("Is your dad a boxer? Because you're a knockout!");
addQuestion("If looks could kill, you'd definitely be a weapon of mass seduction.");
addQuestion("Is your name Wi-Fi? Because I'm really feeling a connection.");
addQuestion("I must be a snowflake because I've fallen for you.");
addQuestion("Are you a magician? Whenever I look at you, everyone else disappears.");
addQuestion("Is your dad a baker? Because you're a cutie pie!");
addQuestion("Is your smile made of magic? Because whenever I see it, the whole room lights up.");
addQuestion("Can I follow you home? Cause my parents always told me to follow my dreams.");
addQuestion("Do you believe in love at first sight, or should I walk by again?");
addQuestion("Are you a camera? Every time I look at you, I smile.");
addQuestion("If you were a vegetable, you'd be a cute-cumber.");
addQuestion("Is your dad a boxer? Because you're a knockout!");
addQuestion("Do you have a name, or can I call you mine?");
addQuestion("Excuse me, but I think you dropped something: my jaw.");
addQuestion("Is your name Google? Because you have everything I've been searching for.");
addQuestion("Is your smile made of magic? Because whenever I see it, the whole room lights up.");
addQuestion("Is your name Wi-Fi? Because I'm really feeling a connection.");
addQuestion("Can I follow you home? Cause my parents always told me to follow my dreams.");
addQuestion("Do you believe in love at first sight, or should I walk by again?");
addQuestion("If you were a vegetable, you'd be a cute-asparagus.");
addQuestion("Are you a magician? Whenever I look at you, everyone else disappears.");
addQuestion("Is your dad a baker? Because you're a cutie pie!");
addQuestion("If looks could kill, you'd definitely be a weapon of mass seduction.");
addQuestion("Is your dad a photographer? Because you're a picture-perfect beauty.");
addQuestion("Do you have a map? I keep getting lost in your eyes.");
addQuestion("Is your name Google? Because you've got everything I'm searching for.");
addQuestion("Do you believe in love at first sight, or should I walk by again?");
addQuestion("Are you a magician? Because whenever I look at you, everyone else disappears.");
addQuestion("Is your dad a baker? Because you're a cutie pie!");
addQuestion("Can I follow you home? Cause my parents always told me to follow my dreams.");
addQuestion("Is your smile made of magic? Because whenever I see it, the whole room lights up.");
addQuestion("Do you have a Band-Aid? I just scraped my knee falling for you.");
addQuestion("Are you a camera? Every time I look at you, I smile.");
addQuestion("If you were a vegetable, you'd be a cute-cumber.");
addQuestion("Is your name Google? Because you're the answer to all my searches.");
addQuestion("If you were a vegetable, you'd be a cute-tato.");
addQuestion("Do you have a name, or can I call you mine?");
addQuestion("Are you a magician? Because whenever I look at you, everyone else disappears.");
addQuestion("Do you have a Band-Aid? I just scraped my knee falling for you.");
addQuestion("Is your dad a boxer? Because you're a knockout!");
addQuestion("Is your smile made of magic? Because whenever I see it, the whole world brightens up.");
addQuestion("Do you believe in love at first sight, or should I walk by again?");
addQuestion("If you were a fruit, you'd be a fineapple.");
addQuestion("Is there a rainbow today? I just found the treasure I've been searching for.");
addQuestion("Excuse me, but I think you dropped something: my jaw.");
addQuestion("Do you have a name, or can I call you mine?");
addQuestion("If you were a vegetable, you'd be a cute-cumber.");
addQuestion("Are you a camera? Every time I look at you, I smile.");
addQuestion("Is your dad a baker? Because you're a cutie pie!");
addQuestion("Can I follow you home? Cause my parents always told me to follow my dreams.");
addQuestion("Is your dad a photographer? Because you're a picture-perfect beauty.");
addQuestion("If looks could kill, you'd definitely be a weapon of mass seduction.");
addQuestion("Is your name Wi-Fi? Because I'm feeling a strong connection.");
addQuestion("Do you believe in fate? Because I think we were meant to meet.");
addQuestion("Is your name Wi-Fi? Because I'm really feeling a connection.");
addQuestion("Do you have a name, or can I call you mine?");
addQuestion("Are you a magician? Because whenever I look at you, everyone else disappears.");
addQuestion("If you were a vegetable, you'd be a cute-cumber.");
addQuestion("Excuse me, but I think you dropped something: my jaw.");
addQuestion("Is your dad a baker? Because you're a cutie pie!");
addQuestion("Do you have a Band-Aid? I just scraped my knee falling for you.");
addQuestion("If you were a fruit, you'd be a fineapple.");
addQuestion("Are you a camera? Every time I look at you, I smile.");
addQuestion("Is your smile made of magic? Because whenever I see it, the whole room lights up.");
addQuestion("Is your name a magician's spell? Because you've got me enchanted.");
addQuestion("Are you a shooting star? Because every time I see you, I make a wish.");
addQuestion("Is your smile from a fairy tale? Because it's absolutely captivating.");
addQuestion("Do you have a name, or can I call you mine and make you the protagonist of my story?");
addQuestion("Is your laughter made of stardust? Because it lights up the whole room.");
addQuestion("Are you a dream? Because I can't believe someone as beautiful as you exists.");
addQuestion("If kisses were snowflakes, I'd send you a blizzard.");
addQuestion("Do you have a map? Because I seem to have gotten lost in your eyes.");
addQuestion("Is your heart a compass? Because it's pointing straight towards mine.");
addQuestion("If you were a song, you'd be the melody that plays on repeat in my heart.");
addQuestion("Are you a magician? Because whenever I'm with you, time seems to disappear.");
addQuestion("Is your smile a magnet? Because it's attracting my heart towards you.");
addQuestion("If you were a flower, you'd be a blossoming beauty in the garden of my life.");
addQuestion("Are you a dictionary? Because you add meaning to my world.");
addQuestion("Do you believe in love at first sight, or should I walk by again and make sure?");
addQuestion("Is your name a work of art? Because you're a masterpiece in my eyes.");
addQuestion("Are you a shooting star? Because I wish to spend countless magical moments with you.");
addQuestion("If happiness was a currency, your presence would be my greatest wealth.");
addQuestion("Is your laughter a symphony? Because it brings harmony to my soul.");
addQuestion("Are you a book? Because every chapter of your life seems worth reading.");
addQuestion("Is your smile a sunbeam? Because it brightens up even the gloomiest of days.");
addQuestion("Are you a puzzle? Because I'd love to spend my time figuring you out.");
addQuestion("If love was a language, you'd be my favorite phrase.");
addQuestion("Is your heart a compass? Because it always leads me straight to you.");
addQuestion("Are you a shooting arrow? Because you've pierced my heart with love.");
addQuestion("If kisses were raindrops, I'd send you a storm of affection.");
addQuestion("Is your voice a melody? Because it resonates deeply within my soul.");
addQuestion("Are you a star in the night sky? Because you guide me towards my dreams.");
addQuestion("If beauty was a crime, you'd be serving a life sentence.");
addQuestion("Is your laughter a magic spell? Because it casts happiness wherever it goes.");
addQuestion("Are you a guardian angel? Because being with you feels like heaven.");
addQuestion("If love was a journey, you'd be the destination I've been searching for.");
addQuestion("Is your name a poem? Because it rhymes perfectly with mine.");
addQuestion("Are you a firework? Because you light up my world with joy and excitement.");
addQuestion("If smiles were currency, I'd be a billionaire whenever I'm with you.");
addQuestion("Is your charm contagious? Because I can't help but be drawn to you.");
addQuestion("Are you a rare gem? Because you shine brightly among the rest.");
addQuestion("If laughter was a superpower, you'd be my kryptonite.");
addQuestion("Is your love a magnet? Because it's pulling me closer with every heartbeat.");
addQuestion("Are you a sunrise? Because your presence brings warmth and beauty to my day.");
addQuestion("If hugs were music, I'd dance to the rhythm of your embrace.");
addQuestion("Is your personality a rainbow? Because it fills my life with vibrant colors.");
addQuestion("Are you a starry night? Because your beauty leaves me in awe.");
addQuestion("If smiles were flowers, I'd pick you every single time.");
addQuestion("Is your laughter a fountain of joy? Because it's refreshing to my spirit.");
addQuestion("Are you a puzzle piece? Because you complete the picture of my happiness.");
addQuestion("If love was a song, you'd be the melody that echoes in my heart.");
addQuestion("Is your presence a spell? Because I can't help but be enchanted by you.");
addQuestion("Are you a shooting comet? Because you've ignited a spark within me.");
addQuestion("If dreams were whispers, you'd be the one I hear every night.");
addQuestion("If love was a dance, you'd be my perfect partner in every step.");
addQuestion("Are you a ray of sunshine? Because your smile brightens up my world.");
addQuestion("Is your heart a treasure chest? Because I'm ready to unlock the love within.");
addQuestion("If laughter was medicine, you'd be the cure to all my worries.");
addQuestion("Are you a shooting arrow? Because you've hit the bullseye of my heart.");
addQuestion("Is your love a whisper? Because it speaks volumes to my soul.");
addQuestion("If hugs were wishes, I'd spend eternity in your embrace.");
addQuestion("Are you a moonbeam? Because your presence lights up my darkest nights.");
addQuestion("Is your laughter a symphony? Because it's music to my ears.");
addQuestion("If love was a secret, you'd be the one I'd share it with.");

// Function to display a random question from the list
function displayRandomQuestion() {
  // Get a random question from the list
  var randomIndex = Math.floor(Math.random() * romanticQuestions.length);
  var randomQuestion = romanticQuestions[randomIndex];

  // Display the question in the message element
  message.innerHTML = randomQuestion;
  message.style.display = "block";
}

// Add event listener to the button for click event
button.addEventListener("click", displayRandomQuestion);

// Append the elements to the button container
buttonContainer.appendChild(button);
buttonContainer.appendChild(message);

// Append the button container and title to the document body
document.body.appendChild(title);
document.body.appendChild(buttonContainer);
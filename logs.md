## 2018-05-23

This is the first draft of the morse game -- an idea I came accoss recently. I call it the morse game for now but the name of this will probaly change soon. Basically, this takes the form on an online game -- played by two players behind their computers. The idea is rather simple: player A need to send a message to player B using the morse protocol. Player A types a message that gets sonified to morse (or maybe modem?) and player B decrypt the morse message. However, this is when the whole thing becomes exciting: in order to correctly decrypt the message sonified by player A, B's morse decrypter need to be based on the same settings as A's one.

### Here's a collection of broad links to introduce you to the morse protocol:

- https://en.wikipedia.org/wiki/Morse_code
- https://www.youtube.com/watch?v=kDeVR6sWFZ4
- https://starling.us/free/morse/
- https://www.dxzone.com/catalog/Operating_Modes/Morse_code/

### Now, here's an ongoing collection of games playing with morse/other interesting analog signal protocols

- http://www.searchamateur.com/Play-Free-Online-Games/Morse-Code-Machine.htm
- http://www.searchamateur.com/Radio-Amateur/Radio-Amateur-Software.htm (!!)

### Now, here's an ongoing collection of stuffs I could use for inplementing this idea

- http://md5decrypt.net/Api/
- https://github.com/ozdemirburak/morsify
- https://morsecode.scphillips.com/labs/decoder/ (this has an API to decode from morse to text)
- https://gist.github.com/myme/7554709
- https://ubuntuforums.org/showthread.php?t=2211655
- https://stackoverflow.com/questions/43012715/morse-audio-decoding-using-python

For now, I'm thinking of using a button to trigger the signal. However, another option could be to trigger a signal every time a letter will be inputted to the form. This last idea will probably make the game more "playable". Also -- this makes me think that the time is an important asset of the game (...to be developed).

------

For now I'm using the morsify JavaScript package. I'm just investigating if there's a way to transfert back the morse signals to text. I may shift to this package (https://github.com/scp93ch/morse-pro) which has more audio capabilities. Or I'll probably use morsify to produce the text > morse and https://github.com/scp93ch/morse-pro/blob/master/src/morse-pro-listener.js to open the microphone and converts back the morse to text.

------

The central question that I still didn't addressed is: WHY? What does the game reflect on? What am I trying to investigate through this game?

Two years ago, I enrolled myself in an intensive programming bootcamp. By doing so, my goals were to explore the affordances of source code and approach its intersections with politics x art x design (and so on). Later on I came accross the all [Software Studies](http://dm.ncl.ac.uk/courseblog/files/2010/02/softwarestudies.pdf) research and the [critical engineering](https://criticalengineering.org/)'s manifesto -- and more recently Carl DiSalvo's [Adversarial Design](https://mitpress.mit.edu/books/adversarial-design).

------

From DiSalvo's book:

### "Agonism in Theory and Design"

"Agonism is a condition of disagreement and confrontation—a condition of contestation and dissensus. Those who espouse an agonistic approach to democracy encourage contestation and dissensus as fundamental to democracy." (DiSalvo, 2015)

### Politics vs Political

"Politics are a series of structures and mechanisms that enable governing. (...) Different from these means, the political is a condition of life — a condition of ongoing contest between forces or ideals." (DiSalvo, 2015)

### "Doing the Work of Agonism"

"To claim that adversarial design does the work of agonism means that designed objects can function to prompt recognition of political issues and relations, express dissensus, and enable contestational claims and arguments." (DiSalvo, 2015)

------

My work (even if it's not exclusively MY work since it's enacted by the restrictions/affordances of a [variety of agents](https://www.youtube.com/watch?v=imMthTQLo_Y&t=4s) is drawing on this theoritical frame. It aims to question through engineering and design dominent ideologies and question using *Agonism* how technologiy unfolds itself in our sociopolitical ecosystems.

More specifically, I'm highly interested by investigating:

- The intersections between natural language and source code

1. How does source code carries/alters/enact natural language (and vice versa)?
2. Narrowing down the scope to our information ecosystem: how does the affordances/restrictions of platforms and their underlying source code bring forward new models of interactions and politics?

- The intersections between digital and analog in the context of internet and data transmission

1. How is data carried from Hardwares to Softwares, from analog to digital apparatuses?
2. What is data? How does these apparatuses are shifting our understanding of data?

### morse_guessing_game: WHY

Through this game, my aim is to reflect on:

1. How does technology (morse) brings new affordances/restrictions for data transmission?
2. How does morse perform with/upon natural language?

------

After commit [3b0819ee9b8a6e6a0323dc9e2607f328b8fdb257](https://github.com/cyruslk/morse_guessing_game/commit/3b0819ee9b8a6e6a0323dc9e2607f328b8fdb257): shortly after this main functionality of transferring the user's data to audio, I realized that there is an important dimension that need to be investigated now: time. For now, I'm thinking of looping the audio and using 1) a fixed ammount of time or 2) an ammount defined by player A to output the signal to player B.

After commit [10633ff6fc27e069f1e543c9397d768e43ef062b](https://github.com/cyruslk/morse_guessing_game/commit/10633ff6fc27e069f1e543c9397d768e43ef062b): once a first draft of handling time has been done, it's now the time to introduce the morse's affordances/restrictions -> the core elements of the game. Drawing on [morsify](https://github.com/ozdemirburak/morsify), a variety of parameters could be used:

- The Unit Period: the speed of transmission, in words per minute
- The oscillator's type: sine, square, sawtooth, triangle
- The value (in hertz) of the frequencies  

## 2018-05-24

What need to be done:

- Write "the rules" of the game.
- Is this a two-player game? Is this a X-player game?
- program the routes for /index /player-a /player-b
- Research on the min/max. of the slidebar values (= min/max. frequencies of morse?).
- Following Stephen C. Phillips' [morse listener](https://github.com/scp93ch/morse-pro/blob/master/src/morse-pro-listener.js), start working on the functionalities of /player-b

## 2018-05-26

Instead of creating two routes I could use socket-io to keep all the components in the page but "frieze" them depending on who starts emitting + receiving. (This will require a backend). Here's the logic ( Using [ReactJS](https://reactjs.org/) and [NodeJs](https://nodejs.org/en/))

/player-a

1. How to handle the settings? Player-a or randomly chosen? (...to be continued)
2. When the Field is : [OnFocus](https://reactjs.org/docs/events.html): lock the morse settings' components (checkBoxes, slider)
3. With a onSubmit method --> [socket.broadcast.emit](https://socket.io/docs/emit-cheatsheet/) to all the other clients with the morse settings.

/players-b

1. Receivig the message with [socket.on](https://socket.io/docs/), I will use a callback to "frieze" the(ir) field component
2. The microphone will then trigger and I will start to output the stuff received.
3. How to handle the end of the game? (...to be continued)

------

For now I'll probably just keep the slider -> remove the checkboxes. Before building the logic of the game, i'll make sure the receiver piece of code works fine. ~~I'll make a /test route for this.~~ I'll just make two components.

## 2018-06-06

First, I'll remove the input form on the receiver component. This helps me to go further into the logic of the game and it's visual components. By removing as much as possible from the interface, the idea is to actually create a tension btw a loud/strident morse (or modem) sound and a very "lisse" and minimal set of visual components.

I'm also removing the checkboxes from the receiver component. For the emitter's one, I need to figure out what to do with the slider.

## 2018-08-01/02/03

I'm now reading [Protocol: How Control Exists after Decentralization](https://mitpress.mit.edu/books/protocol) by Alexander Galloway. This really helped me to structure my researches spawning Modem and Language.

Alexander's Galloway's Protocol is directly rooted in Deuleuze's researches on a) the [*societies of control*](*societies of control*) and b) the rhizome; using them to investigate the political and technical structure of the internet.

### A Society of Control

Following Deleuze: "It’s easy to set up a correspondence between any society and some kind of machine . . . The old sovereign societies worked with simple machines, levers, pulleys, clocks; but recent disciplinary societies were equipped with thermodynamic machines. . . ; control societies function with a third generation of machines,with information technology and computers.” (Deleuze, [Negotiations](https://cdn.preterhuman.net/texts/thought_and_writing/philosophy/Deleuze/Deleuze%20-%20Negotiations.pdf), p. 180.)

In other words, from XVIIIth-Century to XIXth and XXth-Century, the manifestation of Power respectively evolved from a Centralized Network to a Decentralized and a **distributed/rhizomic** one - where Internet belongs (and other modern-computing apparatuses).

In a distributed network like Internet where there is no *chain of command*, **nodes** acts as an **autonomous agents**. Following Deleuze and Guattari in [A Thousand Plateaus](http://www.kareneliot.de/downloads/Deleuze%20Guattari%20A%20Thousand%20Plateaus.pdf) (p.12,15, 21), the distributed network thus works as follow:

- Connecting any node to any other node.
- Not composed by units, but by directions in motions.
- Not defined by a specific structure.
- Characterized by a short-term memory model.
- operating by variation, expansion, conquest, capture, offshoot
- acentered, nonheriarchical, nonsignifying - and without an organizing memory or central automation.

### Nodes are Protocols; Protocols are Nodes

For Galloway, internet is then a distributed network composed by a variety of **autonomous** nodes (in other terms: **Protocols**). Internet appears as a set of "technical procedures for defining, managing, modulating, and distributing information throughout a flexible yet robust delivery infrastructure." (Thacker: Foreword: XV)

Galloway defines a Protocol as:

-  a system of recommendations, regulations and rules that outline specific technical *standards*. (p.6)
-  an anti-hierarchy and anti-authority system of distributed management; facilitating peer-to-peer relationships between **autonomous entities** and engendering localized decision making. (p.82)
-  a language that *regulates flow*, directs netspace, codes relationships, and connects *life-forms*. (p. 74)
-  a *structuring* agent that appears as the result of a set of object dispositions. (p. 75)

Consequently:

-  Protocol is how control exists after distribution. (p.75) It's the "production of the possibility for experience in control societies." (Foreword: XX)
- "Protocol outlines the playing field for what can happen, and where. If one chooses to ignore a certain protocol, then it becomes impossible to communicate on that particular channel. No protocol, no connection." (p.167)
- "The concept of Protocol is as concerned with disconnection as it is with connectivity. The moment of disconnectivity is the moment when protocol most forcefully displays its political character. " (Foreword: XVI)

(Computational) Protocols could as a result take the form of:

- Code
- Networked Communication *Layers*, such as the ones of the [Open Systems Interconnection model (OSI model)](https://en.wikipedia.org/wiki/OSI_model) standardized by the [International Organization for Standardization (ISO)](https://www.iso.org/home.html).
- Formats, Codecs (and so on, and so on) - acting as wrappers imposing "at a deep level contemporary sensations of movement, color, light, and time." (Adrian Mackenzie, Codecs; [Software Studies: A Lexicon](https://monoskop.org/images/a/a1/Fuller_Matthew_ed_Software_Studies_A_Lexicon.pdf))
- Internet's [Requests for Comments](https://en.wikipedia.org/wiki/Request_for_Comments).

### GOING BACK TO MODEMS

From 2XTWEETSXMODEMSXTEXTXTWEET to this project, there is a constant in my researches: investigating the interactions betwen Modems - and consequently: Transmitting Protocols, Code and [Natural Language](https://en.wikipedia.org/wiki/Natural_language).

### Now: What is a Modem?

Taken from [Wikipedia](https://en.wikipedia.org/wiki/Modem), a A "**modem** (**mo**dulator–**dem**odulator) is a [network hardware](https://en.wikipedia.org/wiki/Network_hardware) device that [modulates](https://en.wikipedia.org/wiki/Modulation#Digital_modulation_methods) one or more [carrier wave](https://en.wikipedia.org/wiki/Carrier_wave) signals to encode [digital information](https://en.wikipedia.org/wiki/Digital_information) for transmission and [demodulates](https://en.wikipedia.org/wiki/Demodulation) signals to decode the transmitted information."

A Modem is thus a concrete (and very signifiant ) Protocol of the Internet. Belonging to the **Physical Layer ** (the #1 layer of the OSI Model), a Modem is a perfect **node** : performing specific standarts in order to establish a connection with others.

### Why code?/ What is code?

Following Galloway, the emergence of *artificial life* is characterized by a specific shift in computer science: "the change from 'procedural'(or linear) programming to so-called object-oriented programming." (p.108); from *procedural* code to *distributed object-oriented* one.

Code is language. Code is a Protocol, also defined by by specific *standarts*, run by specific "series of commands" (p. 108).  

More specifically, code is **performative**.

- "Code is the only language that is executable." (p. 165)
- Following Kittler, instead of ordinary/natural language where there is no word "which does what it says" (p. 165),  code is a machine "for converting meaning into action" (p. 166)
- Code has a semantic meaning, but it also has an enactment of meaning. Code has both a legible state and an executable state.

### Natural Language?

Galloway states that in the *control society*/information age we're living in, "matter itself is understood in terms of information or code." (p. 111) - the best example is the rise of [biometrics](https://en.wikipedia.org/wiki/Biometrics).

Consequently, code (and by extension, Protocols) becomes executable "metalayers that encapsulates Natural language". (p. 166)


### NARROWING DOWN MY PROBLEMATICS

My aim is consequently to investigate through design and engineering and inside a research/creation approach the **performativity of Protocols.**

In other words, I aim to ask: **How do Protocols play the role of [Apparatuses](https://soundenvironments.files.wordpress.com/2011/11/agamben-what-is-and-apparatus.pdf) interacting/altering/performing/processing/desiging (with) Natural Language inside our online information ecosystem.**

In other words: **how do Protocols perform (with/upon) Natural Language?**

My definition of the Apparatus is directly driven by Giorgio Agamben: as a mechanism that has “the capacity to capture, orient, determine (...) the gestures, behaviors, opinions, or discourses of living beings.”(Agamben, 2009).

### GOING BACK TO MODEMS: WHY?

As I said earlier, Modems are in my opinion very interesting kinds of Protocols to investigate and hack - due amongst other characteristics to a) their *sonic agency*, b) their *archaic* association and c) their *primitive* modus operandi of data transmission (loud and screeching sounds, analog process...).

As a way to investigate the performative agency of Protocols **through** Modems , my primary goal is to explore the tension between digital interfaces and their hidden structure - aka the hidden ("distributed",  messy, noisy, multidimensional ...) layers of protocols that enable internet and make the information *flow*.

What really strikes me using the Internet is its *silent* characteristic...Internet appears a lot for it users as a smooth - and silent - space; defined by what Galloway states as a *continuity*.

By placing intentionally a **noisy** protocol at the center of the game and creating a condition when - for the players to communicate - the protocol needs to perform *well*  (Following its specific standards), **my goals are  a) to make protocols visible; and b) question the way internet's data flows.**

## 2018-08-04

Instead of working with Morse, I'll now work with Modem. Same logic:

- The Modem is at the center of the Game/Interaction.
- **The rules of the game is defined by the affordances of the Protocol**.

I'll now rename the repo MODEMGUESSINGGAME.

## 2018-08-05

This research is directly linked to two very hot topics related to the politial consequences of internet: a) Net Neutrality and b) Fake News. Net Neutrality for the affordances of Internet's stack of Protocols. Fake News for misinformation spreading through Code's performativity.

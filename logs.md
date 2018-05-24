## 2018-05-23

This is the first draft of the morse game -- an idea I came accoss recently. I call it the morse game for now but the name of this will probaly change soon. Basically, this takes the form on an online game -- played by two players behind their computers. The idea is rather simple: player A need to send a message to player B using the morse protocol. Player A types a message that gets sonified to morse (or maybe modem?) and player B decrypt the morse message. However, this is when the whole thing becomes exciting: in order to correctly decrypt the message sonified by player A, B's morse decrypter need to be based on the same settings as A's one.

### Here's a collection of broad links to introduce you to the morse protocol: ###

* https://en.wikipedia.org/wiki/Morse_code
* https://www.youtube.com/watch?v=kDeVR6sWFZ4
* https://starling.us/free/morse/
* https://www.dxzone.com/catalog/Operating_Modes/Morse_code/

### Now, here's an ongoing collection of games playing with morse/other interesting analog signal protocols###

* http://www.searchamateur.com/Play-Free-Online-Games/Morse-Code-Machine.htm
* http://www.searchamateur.com/Radio-Amateur/Radio-Amateur-Software.htm (!!)

### Now, here's an ongoing collection of stuffs I could use for inplementing this idea###

* http://md5decrypt.net/Api/
* https://github.com/ozdemirburak/morsify
* https://morsecode.scphillips.com/labs/decoder/ (this has an API to decode from morse to text)
* https://gist.github.com/myme/7554709
* https://ubuntuforums.org/showthread.php?t=2211655
* https://stackoverflow.com/questions/43012715/morse-audio-decoding-using-python

For now, I'm thinking of using a button to trigger the signal. However, another option could be to trigger a signal every time a letter will be inputted to the form. This last idea will probably make the game more "playable". Also -- this makes me think that the time is an important asset of the game (...to be developed).

- - - -

For now I'm using the morsify JavaScript package. I'm just investigating if there's a way to transfert back the morse signals to text. I may shift to this package (https://github.com/scp93ch/morse-pro) which has more audio capabilities. Or I'll probably use morsify to produce the text > morse and https://github.com/scp93ch/morse-pro/blob/master/src/morse-pro-listener.js to open the microphone and converts back the morse to text.

- - - -

The central question that I still didn't addressed is: WHY? What does the game reflect on? What am I trying to investigate through this game?


Two years ago, I enrolled myself in an intensive programming bootcamp. By doing so, my goals were to explore the affordances of source code and approach its intersections with politics x art x design (and so on). Later on I came accross the all [Software Studies](http://dm.ncl.ac.uk/courseblog/files/2010/02/softwarestudies.pdf) research and the [critical engineering](https://criticalengineering.org/)'s manifesto -- and more recently Carl DiSalvo's [Adversarial Design](https://mitpress.mit.edu/books/adversarial-design).

- - - -
From DiSalvo's book:

### "Agonism in Theory and Design" ###

"Agonism is a condition of disagreement and confrontation—a condition of contestation and dissensus. Those who espouse an agonistic approach to democracy encourage contestation and dissensus as fundamental to democracy." (DiSalvo, 2015)

### Politics vs Political ###

"Politics are a series of structures and mechanisms that enable governing. (...) Different from these means, the political is a condition of life — a condition of ongoing contest between forces or ideals." (DiSalvo, 2015)

### "Doing the Work of Agonism" ###

"To claim that adversarial design does the work of agonism means that designed objects can function to prompt recognition of political issues and relations, express dissensus, and enable contestational claims and arguments." (DiSalvo, 2015)

- - - -

My work (even if it's not exclusively MY work since it's enacted by the restrictions/affordances of a [variety of agents](https://www.youtube.com/watch?v=imMthTQLo_Y&t=4s) is drawing on this theoritical frame. It aims to question through engineering and design dominent ideologies and question using *Agonism* how technologiy unfolds itself in our sociopolitical ecosystems.

More specifically, I'm highly interested by investigating:

* The intersections between natural language and source code

1. How does source code carries/alters/enact natural language (and vice versa)?
2. Narrowing down the scope to our information ecosystem: how does the affordances/restrictions of platforms and their underlying source code bring forward new models of interactions and politics?

* The intersections between digital and analog in the context of internet and data transmission

### morse_guessing_game : WHY? ###

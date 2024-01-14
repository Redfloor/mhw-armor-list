#Monster Hunter Now Armor filter

##Purpose
This is a small helper I wrote to easily look up builds on armor sets in the Niantic game "Monster Hunter Now."
I threw it together over two days over the holidays on a whim and am unlikely to maintain it.
It's very simple to use - basically a custom spreadsheet with a filter.

##Licensy stuff
- If you decide to fork this and build on it, any amount of credit would be nice, just don't use it for profit without pinging me.
- I didn't check where I got images from yet, I'll need to get a proper set at some point. If I'm using your work and you don't like it, please do let me know.

##Requirements:
- nodejs: https://nodejs.org/en
- nvm: https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
- yarn: https://classic.yarnpkg.com/lang/en/docs/install/

##First-time steps
- clone/download a copy of the repo locally.
- ```yarn install``` fetches and installs all dependencies.

##Run the applett
- ```yarn start``` serves the app at localhost:3000
- navigate to localhost:3000 on a browser of your choice. 
- any device on that wifi network will be able to access the applett by going to [your.ip.address]:3000

##TODOS:
- add Black Diablos & Azure Rathalos
- add event sets
- make moar prett
- nextjs conversion go vroom
- mobile friendly
- add element info to weapons
- lint
- better handling of grades/multiple levels at diff grades
- multifilter
- plugin json for other MH games
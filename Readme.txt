//.....Package.json......//
1.Entry point -- index.js

2.scripts: {
    "start": "node index.js"
}

start command -- npm run start

//.......Terminal.........//
npm install express

//......Nodemon --- development dependency (not required in production)......//
npm i -D nodemon

scripts: {
    "start": "node index.js",
    "dev":"nodemon index.js"
}
start command -- npm run dev
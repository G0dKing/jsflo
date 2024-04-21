![jsFlorp](https://github.com/G0dKing/jsflo/assets/68952952/ca0da65c-8a2f-4a93-8cd1-b9c2039640e0)
# jsfLO
## A pre-configured fullstack MERN boilerplate ready for customization!
### NODE.JS | EXPREESS.JS | REACT.JS | VITE | MONGODB

#### USAGE:
1. In Terminal/CMD:
```
git clone https://github.com/G0dKing/jsflo.git
cd jsflo
cp .env.default .env
echo "MONGO_URI=[your-mongo-uri]" >> .env
cd client && npm i
cd ../server && npm i
cd .. && npm run deploy
```
2. Open your browser and navigate to http://localhost:3000 (edit HOST and PORT in .env to adjust). This should load a page with the text "Status: OK" if installed properly.
3. Navigate to http://localhost:3000/status to test the API. If you receive Status Code 200 and some JSON with the words "Status: OK", everything is functioning properly.
4. Start customizing!
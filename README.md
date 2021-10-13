## Purpose
To test out Apple Pay Adyen integration

## Setup (Work in progress)
1. Add .env files in both `client` and `server` directories. Will share the environment variables over slack.
2. We will be testing on Safari.
3. Do `brew install mkcert` for adding https certificate for Applepay button to get rendered.
   a) Do mkcert -install
   b) mkcert localhost
   
4. In a terminal
   ```
   cd server 
   yarn start
   ```
5. In another terminal
   ```
   cd client 
   yarn start
   ```
6. Visit https://localhost:3000/payment

## Purpose
To test out PayPal Adyen integration

## Setup
1. Add .env files in both `client` and `server` directories. Will share the environment variables over slack.
2. Add the following to your hosts file
   ```
   127.0.0.1    test.paypal.com
   ```
3. Add the following to your nginx.conf
   ```
   server {
        server_name test.paypal.com;
        listen  80;

        location ~ /api/ {    
          proxy_pass http://localhost:3010;
        }

        location ~ / {
          proxy_pass http://localhost:3011;
        }
   }
   ```
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
6. Visit http://test.paypal.com
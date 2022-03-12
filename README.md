# Hack Day 1 Boilerplate

## Branch Repository

Click on master, and in the dropdown create a new branch named after your team name (only one person should do this!)

##Clone Repository & Setup
In your new branch, click _Clone_ button

Use HTTPS

Click Generate git credentials

COPY THE PASSWORD

Use the HTTP URL to clone locally and setup environment:

1. Open VS Code
2. Click on Terminal to open a new terminal using **Powershell**
3. Clone the Repository (git clone https....etc)
4. Navigate to the **hack-day-1-boilerplate** folder and switch to the new branch (git checkout branchname)
5. In VSCode, select File > Open folder
6. Navigate to where your repository folder **hack-day-1-boilerplate** is and click open
7. Open a new terminal and switch the terminal to **Ubuntu (WSL)**
8. Navigate to the hack-day-1 folder if you are not in it
9. run _sudo apt install npm_

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build the application and generate every route as a HTML file (used for static hosting).
$ npm run generate

# generate and deploy static site to S3 (need to specify bucket in deploy.sh)
$ npm run deploy
```

## Use the provided APIs

### Retrieving images

Perform a GET Request

```
https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/{teamName}/files
```

Response will be a list of images

```js
{
  "data": [
    "https://gradhack-2020.s3-eu-west-1.amazonaws.com/example/david-marcu-78A265wPiO4-unsplash.jpg",
    "https://gradhack-2020.s3-eu-west-1.amazonaws.com/example/jay-mantri-TFyi0QOx08c-unsplash.jpg",
    "https://gradhack-2020.s3-eu-west-1.amazonaws.com/example/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
    "https://gradhack-2020.s3-eu-west-1.amazonaws.com/example/mountain-landscape-2031539_1280.jpg",
    "https://gradhack-2020.s3-eu-west-1.amazonaws.com/example/niko-photos-tGTVxeOr_Rs-unsplash.jpg",
    "https://gradhack-2020.s3-eu-west-1.amazonaws.com/example/road-1072823_1280.jpg",
    "https://gradhack-2020.s3-eu-west-1.amazonaws.com/example/sean-o-KMn4VEeEPR8-unsplash.jpg"
  ]
}
```

### Uploading image

Perform a POST Request, where the body is a base64 encoded image

```
https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/{teamName}/files/{fileName}
```

Response will be an object with a key of success, where the value will indicate whether your upload succeeded or not

```js
{
  "success": true
}
```

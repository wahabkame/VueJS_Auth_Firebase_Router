# vueauth

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





## VueJS_Auth_Firebase-Router
This is my project for "VueAuth" , Authentication Database :Firebase ,using VUE.js, and Router and bootstap.
Firebase Authentication provides backend services, easy-to-use SDKs, 
and ready-made UI libraries to authenticate users to your app.It supports authentication using passwords,
phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.





## Installation      
      install npm 
              Vue
              Firebase
              Bootstrap
              jQuery                          
              VueRouter               
       
       You should file called "node_modules"
       
       
### Firebase 
       You need to Creat account on Firebase webiste
       Then, Add Project
       In ,Project settings 
           App nickname:vueauth
       Get SDK , get npm web script 
       Copy-Paste from script to main.js in src to "const Config".
       
###  Firebase Authentication  option
      In firebase website , go to firestore database
      make sure sing in methodes : Email/Password And Google

### Router
     you have router file and components
     In router file , you have index.js
     1-import VueRouter --- Very Important to do that
     2-Import 4 files from compoents 
               which are 
                     Forgot password
                     Home
                     LogIn
                     SignUp
     3- routes 
           make :path, name,component
           
           
### babel.config.js
```
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
```






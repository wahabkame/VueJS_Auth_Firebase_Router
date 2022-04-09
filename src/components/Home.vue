/* eslint-disable */
<template>
<div class="container"><br>
    <div class="card" style="width: 18rem;">
    <h1>User Information</h1>
    <div class="card-body">
        <h5 class="card-title">{{user.displayName}}</h5>
        <p class="card-text">{{user.email}} </p>
        <button type="submit" @click="logOut()" class="btn btn-danger">Logout</button>
    </div>
</div>
</div>
</template>
<script>
import firebase from 'firebase/app'

export default {
    data(){
        return{
            user:null
        }
    },
    created(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.user=user
            }else{
                this.user=null
            }
        })
    },
    methods:{
        logOut(){
            firebase.auth().signOut().then(()=>{
                firebase.auth().onAuthStateChanged(()=>{
                    this.$router.push('/LogIn')
                })
            })
        }
    }
}
</script>
<style>

</style>

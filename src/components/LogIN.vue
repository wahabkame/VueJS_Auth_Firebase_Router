<template>
    <div class="container">
        <form @submit.prevent='userLogin'>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" class="form-control" v-model="user.email" >
            </div>
            <div class="form-group">
                <label for="">password</label>
                <input type="password" class="form-control" v-model="user.password" >
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
            <p><router-link to="/forgot-pass">Forgot Password?</router-link></p>
        </form>
    </div>
</template>
<script>

import firebase from 'firebase/app'
export default {
    data(){
        return {
            user:{
                email:'',
                password:'', 
            }
        }
    },
    methods:{
        userLogin(){
            firebase.auth()
            .signInWithEmailAndPassword(this.user.email,this.user.password) 
            .then(()=>{
                this.$router.push('/')
            }).catch((error)=>{
                alert(error.message)
            })
        }
    } 
}

</script>
<style>

</style>
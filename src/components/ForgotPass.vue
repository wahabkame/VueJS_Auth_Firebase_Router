<template>
    <div class="container">
        <form @submit.prevent='forgotPassword'>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" class="form-control" v-model="user.email" >
            </div>
            <button type="submit" class="btn btn-primary">Reset password</button>
        </form>
    </div>
</template>
<script>

import firebase from 'firebase/app'

export default {
    data(){
        return {
            user:{
                email:''
            }
        }
    },
    methods:{
        forgotPassword(){
            firebase.auth()
            .sendPasswordResetEmail(this.user.email) 
            .then(()=>{
                alert('check your email')
                this.user ={
                    email:''
                }
                
            }).catch((error)=>{
                alert(error.message)
            })
        }
    } 
}

</script>
<style>

</style>
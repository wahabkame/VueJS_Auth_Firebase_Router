<template>
    <div class="container">
        <form @submit.prevent='userRegistration'>
            <div class="form-group">
                <label for="Name">Name</label>
                <input type="text" class="form-control" v-model="user.name">
            </div>
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="email" class="form-control" v-model="user.email" >
            </div>
            <div class="form-group">
                <label for="Password">password</label>
                <input type="password" class="form-control" v-model="user.password">
            </div>
            <button type="submit" class="btn btn-primary">register</button>
        </form>
    </div>
</template>
<script>

import firebase from 'firebase/app'
export default {
    data(){
        return {
            user:{
                name:'',
                email:'',
                password:'', 
            }
        }
    },
    methods:{
        userRegistration(){
            firebase.auth()
            .createUserWithEmailAndPassword(this.user.email,this.user.password) 
            .then((res)=>{
                res.user.updateProfile({
                    displayName:this.user.name
                }).then(()=>{
                    this.$router.push('/log-in')
                })
            }).catch((error)=>{
                alert(error.message)
            }) 
        }
    } 
}

</script>
<style>

</style>
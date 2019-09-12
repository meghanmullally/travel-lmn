<template>
  <div class="user">
    <!-- <article class="container">  -->
    <!-- <div Profile Info --> 
    <md-toolbar :md-elevation="0">
        <span class="md-title">User Info</span>
      </md-toolbar>
      <md-list class="md-double-line">
        <!-- user's name -->
      <md-subheader>Name</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">person</md-icon>
          <div class="md-list-item-text">
            <span>Jane Doe</span>
          </div>
          </md-list-item>
        <md-divider></md-divider>
        <md-subheader>Phone</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">phone</md-icon>
          <!-- phone number -->
          <div class="md-list-item-text">
            <span>(123) 456-7890</span>
            <span>Mobile</span>
          </div>
        </md-list-item>
        <md-divider></md-divider>
        <md-subheader>Email</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">email</md-icon>
            <!-- personal email -->
          <div class="md-list-item-text">
            <span>test@example.com</span>
            <span>Personal</span>
          </div>
        </md-list-item>
          <!-- work email -->
        <md-list-item class="md-inset">
          <div class="md-list-item-text">
            <span>test@example.com</span>
            <span>Work</span>
          </div>
        </md-list-item>
      </md-list>  



      
        
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  date(){
    return {
      msg: "user"
  }
  }
}
</script>
<style>
/* @import './assets/styles/style.css'; */

.user {
  width: 275px;
  height: 525px;
  overflow:auto;
}

</style>
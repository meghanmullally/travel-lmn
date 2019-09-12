<template>
  <div class="toolbar">
    <md-toolbar class="md" id="navigation">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <!-- <span class="md-title">LMN</span> -->
      </md-toolbar>

      <md-drawer :md-active.sync="menuVisible" md-persistent="full" id="drawer">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <md-list id="nav-list">
          <md-list-item>
            <md-icon>card_travel</md-icon>
            <span class="md-list-item-text">Destination</span>
          </md-list-item>

          <md-list-item>
            <md-icon>explore</md-icon>
            <span class="md-list-item-text">Activities</span>
          </md-list-item>

          <md-list-item>
            <md-icon>supervisor_account</md-icon>
            <span class="md-list-item-text">Profile</span>
          </md-list-item>

          <md-list-item>
            <md-icon>chat</md-icon>
            <span class="md-list-item-text">Chat</span>
          </md-list-item>
        </md-list>
      </md-drawer>
  </div>
</template>
<script>
export default {
name: "toolbar",
data() {
  return {
  menuVisible: false
  }
},
methods: {
  toggleMenu() {
        this.menuVisible = !this.menuVisible
      }
}
}
</script>
<style>
/*  navigation  */

#navigation {
  background-color: transparent;
  box-shadow: none;
}

#drawer, #nav-list {
  background-color: white;
  /* margin: 10px; */
  padding: 0 auto;
}

/* #nav-list {
  background-color: transparent;
} */

</style>
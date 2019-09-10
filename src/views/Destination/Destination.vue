<template>
  <div class="Destination">
    <h1>This is the Destination page</h1>
    <NavBar/>
  </div>
</template>
<script>
import NavBar from '../../components/Navbar/Navbar';

export default {
  name: 'Destination',
  components: {
    NavBar,
    },
  date(){
    return {
      msg: "Destination page"
  }
  }
}
</script>
<style>
</style>
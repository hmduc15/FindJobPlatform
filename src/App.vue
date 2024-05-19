<template>
   <the-nav></the-nav>
   <div class="main-container">
    <suspense>
      <router-view />
    </suspense>
   </div>
</template>

<script>
import TheNav from '@/layout/TheNav';

export default {
  name: "App",
  components: {
    "the-nav": TheNav,
  },
};
</script>

<style>
</style>

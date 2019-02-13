<template>
  <div class="home">
    <h1 class="cover-heading">Open Source Engineering</h1>
    <p class="lead mb-5">#Coding #Web #Hosting #Consulting #Cloud #Support</p>

    <form class="form-inline justify-content-center" id="subscribe"
          action="https://tinyletter.com/autoverse" method="post" target="popupwindow"
          onsubmit="window.open('https://tinyletter.com/autoverse', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
      <div class="form-group mr-3">
        <label for="tlemail" class="sr-only">Stay in touch</label>
        <input type="email" class="form-control" id="tlemail" name="email" placeholder="me@example.com">
        <input type="hidden" value="1" name="embed">
      </div>
      <button type="submit" class="btn btn-dark">Stay in touch</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>

</style>

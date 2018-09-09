<template>
  <div class="services">
    <div class="item">
      <i class="fa fa-server" aria-hidden="true"></i>
      <h2>Hosting</h2>
      <p>
        Website hosting, either for full featured CMS platfomrs
        or simple static pages. But also services hosting (eg. email).
        Full FTP or Shell access, depending on the hosting requirements.
      </p>
    </div>
    <div class="item">
      <i class="fa fa-code" aria-hidden="true"></i>
      <h2>Web Development</h2>
      <p>
        Design and development of websites, using the best tech tool for any given case.
        Using certain platforms (eg. Wordpress) or frameworks (eg. Django, VueJS) for
        more customized solutions.
      </p>
    </div>
    <div class="item">
      <i class="fa fa-cloud" aria-hidden="true"></i>
      <h2>Cloud Services</h2>
      <p>
        Setup and manage customized cloud solutions for small businesses and organizations.
        This can include a variety of Open Source cloud software, like NextCloud, Discourse,
        Mediawiki and more.
      </p>
    </div>
    <div class="item">
      <i class="fa fa-linux" aria-hidden="true"></i>
      <h2>Consulting & Support</h2>
      <p>
        Years of Linux experience, can offer consulting, custom solutions or
        infrastructure systems administration for small businesses and organizations.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
};
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: center;
  align-items: center;

  .item {
    padding: 10px;
    text-align: center;
    justify-self: stretch;
    align-self: start;

    i {
      display: block;
      font-size: 2rem;
    }
  }
}
</style>

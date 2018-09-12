<template>
  <div class="projects">
    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>

    <p class="lead text-left">
      This is a snapshot of developed projects developed, either in full, part or voluntarily capacity.
    </p>

    <div class="project">
      <div v-for="project in projects" :key="project.slug" class="item">
        <div class="thumb" @click="showImage=true">
          <img v-bind:src="'./static/projects/' + project.slug + '_thumb.jpg'" v-bind:alt="project.name">
        </div>
        <div class="info">
          <div class="year small">{{ project.year }}</div>
          <h4>{{ project.name }}</h4>
          <div class="description">{{ project.description }}</div>
          <div class="tech">
            <span v-for="tech in project.tech" :key="tech">#{{ tech }} </span>
          </div>
        </div>

        <div class="image" v-if="showImage">

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Api from '../api';

export default {
  name: 'Projects',

  data () {
    return {
      projects: [],
      loading: true,
      showImage: false
    };
  },

  created () {
    this.fetchProjects();
  },

  methods: {
    fetchProjects: function() {
      Api.getProjects().then(response => {
        this.loading = false;
        this.projects = response.data;
      // eslint-disable-next-line
      }, error => {
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
@import '../assets/scss/mixins';

.lead {
  margin: 20px 40px 0 40px;
}

.project {
  text-align: center;
  width: 100%;

  .item {
    padding: 20px;
    margin: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    min-height: 240px;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);

    .thumb {
      overflow: hidden;
      width: 100%;
      cursor: pointer;

      @include medium-and-up {
        width: 200px;
        height: 200px;
        float: left;
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: 0 0;

        @include medium-and-up {
          width: 200px;
          height: 200px;
        }
      }
    }

    .info {
      text-align: left;
      margin-top: 20px;

      @include medium-and-up {
        margin-left: 220px;
        margin-top: 0;
      }
    }

    .tech {
      font-family: monospace;
      font-size: 0.9rem;
      margin-top: 10px;
      color: white;
      text-shadow: 1px 1px 1px black;
    }

    .image {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(58, 58, 58, 0.2);
      display: table;
      transition: opacity .5s ease;
    }
  }
}
</style>

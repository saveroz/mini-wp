<template>
  <div>
    <b-navbar type="dark" variant="dark" toggleable="lg">
      <b-navbar-brand @click.prevent="trigger">X Wordpress</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav v-if="isLogin" class="ml-auto">
          <b-nav-form class="ml-auto">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Article" class="font-weight-bold" right>
            <b-dropdown-item href="#" @click.prevent="showCreateForm">Create New Article</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="showAllArticle">All Article</b-dropdown-item>
            <b-dropdown-item href="#" @click.prevent="showUserArticle">My Article</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em class="font-weight-bold">User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click.prevent="logOut" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    isLogin: Boolean
  },
  data() {
    return {};
  },
  methods: {
    trigger() {
      this.$emit("fromChildren", 1);
    },
    logOut() {

      localStorage.removeItem("token");
      localStorage.removeItem("author");
      this.$emit("fromLogOutButton");
    },
    showUserArticle() {
      this.$emit("showPage", "UserArticle");
    },
    showAllArticle() {
      this.$emit("showPage", "AllArticle");
    },
    showCreateForm() {
      console.log("create dari navbar");
      this.$emit("showPage", "createTodoForm");
    }
  },
  created() {
    console.log(this.isLogin);
  }
};
</script>

<style>
</style>
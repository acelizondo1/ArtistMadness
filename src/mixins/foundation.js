//Used to use Foundation JS components in Vue components
module.exports = {
    mounted() {
      $(this.$el).foundation();
    },
    destroyed() {
      // eslint-disable-next-line
      $(this.$el).foundation('_destroy');

    }
};
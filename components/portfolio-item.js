Vue.component('portfolio-item', {
  props: ['item'],
  template:
    '<div class="tile is-ancestor tile-row"><div class="tile is-parent"><article class="tile is-child box"><p class="title">{{ item.title }}</p><p class="subtitle">{{item.subtitle}}</p><div class="content">{{ item.description }}<p><br><a href="{{ item.link }}" class="button is-primary">Check me out</a></div><div class="tags"><span class="tag" v-for="tag in item.tags">{{tag}}</span></div></article></div></div>'
});

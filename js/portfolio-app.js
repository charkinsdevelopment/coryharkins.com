Vue.component('portfolio-item', {
  props: ['item'],
  template:
    '<div class="tile is-ancestor tile-row"><div class="tile is-parent"><article class="tile is-child box"><p class="title">{{ item.title }}</p><p class="subtitle">{{item.subtitle}}</p><div class="content">{{ item.description }}<p><br><a href="{{ item.link }}" class="button is-primary">Check me out</a></div><div class="tags"><span class="tag" v-for="tag in item.tags">{{tag}}</span></div></article></div></div>'
});


new Vue({ 
  el: '#portfolio', 
  data: {
    project_type: 'all',
    items:  [
      {id: 1, title: 'Listify.io', subtitle: 'Data converter', description: 'A conversion tool that transforms excel data into wrapped and comma separated data to port into sql.', link: 'https://codepen.io/charkins/pen/aPpaeK', tags: ['Front End', 'Html', 'Css', 'Jquery'], project_type: 'front_end'}, 
      {id: 2, title: 'Listify.io', subtitle: 'Data converter', description: 'A conversion tool that transforms excel data into wrapped and comma separated data to port into sql.', link: 'https://codepen.io/charkins/pen/aPpaeK', tags: ['Front End', 'Html', 'Css', 'Jquery'], project_type: 'front_end'},
      {id: 3, title: 'Back End Test', subtitle: 'Data converter', description: 'A conversion tool that transforms excel data into wrapped and comma separated data to port into sql.', link: 'https://codepen.io/charkins/pen/aPpaeK', tags: ['Front End', 'Html', 'Css', 'Jquery'], project_type: 'back_end'}, 
      {id: 4, title: 'Full Stack Test', subtitle: 'Data converter', description: 'A conversion tool that transforms excel data into wrapped and comma separated data to port into sql.', link: 'https://codepen.io/charkins/pen/aPpaeK', tags: ['Front End', 'Html', 'Css', 'Jquery'], project_type: 'full_stack'}
    ]
  },
  methods: {
    filter_projectType: function(project_type){
	this.project_type = project_type;
      }
  }
})

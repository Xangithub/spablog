'use strict';
var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

var list = new Vue({
    el: '#form',
    data: {
        errored: false,
        article: {
            id: null,
            title: '',
            body: '',
            publishedDate: undefined
        },

        messageList: []


    },
    mounted: function () {
        axios.get(baseUrl + 'posts?sort=publishedDate,desc').then(response => {
            console.log(response);
            this.messageList = response.data._embedded.posts;
        }).catch(reason => {
            this.errored = true;
            console.error(reason);
        });

    },
    methods: {
        addNewMessage: function () {
            var id = this.messageList.length + 1;
            var date = new Date();
            // console.log(id + '-' + this.article.title + '-' + this.article.body + '-' + date);
            this.messageList.unshift({
                id: id,
                title: this.article.title,
                body: this.article.body,
                publishedDate: date
            });

        },
        addServerMessage: function (e) {
            axios.post('/posts', {
                    title: this.article.title,
                    body: this.article.body,
                    publishedDate: new Date()
                })
                .then(response => {
                    this.addNewMessage()
                }).catch(error => {
                    this.errored = true;
                    console.log('Ощибка ' + error);
                });

        }
    }

});

Vue.component('article-element', {
    props: ['element'],
    options: {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    },
    template: '<li>{{new Date(element.publishedDate).toLocaleString("ru",this.options)}}<br> {{element.title}}<br> {{ element.body}}</li>'
});

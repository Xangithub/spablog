'use strict';
var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

Vue.component('article-element', {
    props: ['element'],
    template: '<li>{{element.publishedDate}}<br> {{element.title}}<br> {{ element.body}}</li>'
});
var objList;
var list = new Vue({
        el: '#form',
        data: {
            article: {
                id: null,
                title: '',
                body: '',
                publishedDate: undefined,
            },

            // messageList: messageList,
            messageList: []

        },
        mounted: function () {
             axios.get(baseUrl+'posts?sort=publishedDate,desc').then(response => {console.log(response); this.messageList=response.data._embedded.posts; }).catch(reason => {console.error(reason)});
        },
        methods: {
                addNewMessage: function () {
                var id = this.messageList.length + 1;
                var date = new Date();
                // console.log(id + '-' + this.article.title + '-' + this.article.body + '-' + date);
                this.messageList.unshift({id: id, title: this.article.title, body: this.article.body, publishedDate: date});

            },
            addServerMessage: function (e) {
                axios.post('/posts', {
                    title: this.article.title,
                    body: this.article.body,
                    publishedDate: new Date(),
                })
            .then(response=>{this.addNewMessage()}).catch(function (error) {
                        console.log(error);
                    });

            }
        },

    }
);
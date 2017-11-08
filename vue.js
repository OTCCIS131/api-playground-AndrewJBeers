$(function () {
    let vm = new Vue({
        el: '#app',
        data: {
            loading: false,



        },
        computed: {

        },
        methods: {
            loadCards() {
                this.loading = true
                this.$http.get('http://api.magicthegathering.io/v1/cards')
                    .then(resp => {
                        this.cards = resp.body
                        this.loading = false
                    })
            }






        }
    })
})
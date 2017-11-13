$(function () {
    let vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            showing: 'quotes',
            quotes: [],
            quote: null

            // curl --request GET \            PROBLEM WITH A NO HEADER THING screenshot in Capture.JPG
            // --url 'https://api.tronalddump.io/random/quote' \
            // --header 'accept: application/hal+json'

        },
        computed: {

        },
        methods: {
            loadQuote() {
                this.loading = true
                this.$http.get('https://api.tronalddump.io/random/quote')
                    .then(resp => {
                        this.quotes = resp.body
                        this.loading = false
                    })
            },
            // selectQuote(quote) {
            //     this.quote = quote
            //     this.showing = '~~~~~'
            //     this.loading = false
            // }

        }
    })
})
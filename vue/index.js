var app = new Vue({
    el: "#app",
    data: {
        list: [{
                tab: "选项一",
                show: true,
                title: "111111111111"
            },
            {
                tab: "选项二",
                show: false,
                title: "222222222222"
            },
            {
                tab: "选项三",
                show: false,
                title: "333333333333"
            }
        ]
    },
    methods: {
        tab: function (index) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].show = false;
            }
            this.list[index].show = true;
        }
    }
});
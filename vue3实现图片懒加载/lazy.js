var ObserverList = [];

var dom = document.getElementById('app')

var imgShow = (num) => {
    ObserverList.forEach(({ el, value }, index) => {
        if (el.offsetTop - 200 <= num) {
            el.src = value
            ObserverList.splice(index, 1)
        }
    })
}

var scrollFun = () => {
    imgShow(dom.scrollTop + document.body.clientHeight)
    dom.addEventListener('scroll', () => {
        imgShow(dom.scrollTop + document.body.clientHeight)
    })
}

const lazyPlugin = {
    install(app, options) {
        app.directive('lazy', {
            mounted(el, { value }) {
                ObserverList.push({
                    el,
                    value,
                })
                scrollFun()

                // el.src = value ???
            }
        })
    }
}
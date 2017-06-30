const KOA = require('koa'),
    router = require('koa-router')(),
    mock = require('mockjs');

let app = new KOA();

function mockArr(option, key) {
    var data = mock.mock(option)
    return new Promise((resolve, reject) => {
        resolve(data[key]);
    });
}

router.get('/api/test', async ctx => {
    ctx.body = await mockArr({
        'ad|20': [
            {
                title: '@ctitle(4)',
                img: '@Image(30x30)',
                link: '@url'
            }
        ]
    }, 'ad');
})
router.get('/api/homelist/:city/:page', async ctx => {
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page
    ctx.body = await mockArr({
        'homelist|20': [
            {
                img: '@image(50x50)',
                title: '@ctitle(4)',
                subTitle: '@cparagraph(2)',
                'price': '@integer(20,30)',
                distance: '@integer(0,500)m',
                'mumber': '@integer(200,500)'
            }
        ]
    }, 'homelist');
})

router

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);

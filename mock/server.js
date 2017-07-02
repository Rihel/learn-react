const KOA = require('koa'),
    router = require('koa-router')(),
    mock = require('mockjs');

let app = new KOA();

function mockArr(option, key) {
    var data = {
        success: true,
        data: mock.mock(option)
    }
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}

router.get('/api/homead', async ctx => {
    ctx.body = await mockArr({
        'ads|6': [{
            title: '@ctitle(4)',
            img: '@image(30x30)' ,link: '@url'
        }]
    });
})
router.get('/api/citys', async ctx => {
    ctx.body = await mockArr({
        'citys|20': [{
            name: '@city()',
            'citycode|+1': 0
        }]
    })
})
router.get('/api/homelist/:city/:page', async ctx => {
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page
    ctx.body = await mockArr({
        'homelist|5': [{
            img: '@image(90x90)',
            title: '@ctitle(4)',
            subTitle: '@cparagraph(1)',
            'price': '@integer(20,30)',
            distance: '@integer(0,500)m',
            'number': '@integer(200,500)'
        }],
        hasMore:true
    });
})



app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);
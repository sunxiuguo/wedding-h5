const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const routesConfig = require('./router.config');
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
    configureWebpack: config => {
        const plugins = [];

        if (IS_PROD) {
            // 预加载
            plugins.push(
                new PrerenderSpaPlugin({
                    staticDir: resolve('dist'),
                    routes: Object.keys(routesConfig),
                    postProcess(ctx) {
                        ctx.route = ctx.originalRoute;
                        ctx.html = ctx.html.split(/>[\s]+</gim).join('><');
                        ctx.html = ctx.html.replace(
                            /<title>(.*?)<\/title>/gi,
                            `<title>${routesConfig[ctx.route].title}</title><meta name="keywords" content="${
                                routesConfig[ctx.route].keywords
                            }" /><meta name="description" content="${routesConfig[ctx.route].description}" />`
                        );
                        if (ctx.route.endsWith('.html')) {
                            ctx.outputPath = path.join(__dirname, 'dist', ctx.route);
                        }
                        return ctx;
                    },
                    minify: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        decodeEntities: true,
                        keepClosingSlash: true,
                        sortAttributes: true
                    },
                    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
                        // 需要注入一个值，这样就可以检测页面当前是否是预渲染的
                        inject: {},
                        headless: false,
                        // 视图组件是在API请求获取所有必要数据后呈现的，因此我们在dom中存在“data view”属性后创建页面快照
                        renderAfterDocumentEvent: 'render-event'
                    })
                })
            );
        }

        config.plugins = [...config.plugins, ...plugins];
    }
};

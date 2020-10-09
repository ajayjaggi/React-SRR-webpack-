import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import paths from '../../config/paths'

import bodyParser from 'body-parser'
import App from '../shared/app'
import {StaticRouter} from 'react-router-dom'

// const {clientCompiler, watchOptions} = require('../../scripts/start')
// // const webpackDevMiddleware = require('webpack-dev-middleware')
// const clientConfig = require('../../config/webpack/client')


const app = express()

app.use(bodyParser.json())
app.use('/static',express.static('public'))

// app.use(webpackDevMiddleware(clientCompiler,{
//   publicPath: clientConfig.output.publicPath,
//     ...watchOptions
// }))

app.use((req,res) => {
    res.locals.extractor = new ChunkExtractor({
       statsFile: paths.loadableServerStatsFile,
        entrypoints: ['clientBundle']
    })

    const extractor  = res.locals.extractor

    const appContainer = renderToString(extractor.collectChunks(
        <StaticRouter location={req.url}>
            <App/>
        </StaticRouter>
    ))

    res.send(
    `
      <html>
        <head>
            <title>
                   Basic Webpack app            
            </title>
        </head>
      </html>
      <body>
      ${extractor.getScriptTags()}
      <div id='root'>
        ${appContainer}
      </div>
      
      </body>
      `
    )
})




app.listen(process.env.PORT || 4004,() => {
    console.log('Server started')
})







import React from 'react'
import { Carousel3D } from '../carousel3D/carousel3D'
import LayoutImg from '../layoutImage/layoutImg'
import '../page/page.scss'


export const MainPage = () => {
    return (
        <div>
            <Carousel3D />
            <div className='content-text'>
                Lorem    asset main.906df964ecef501940f2.hot-update.json 28 bytes [emitted] [immutable] [hmr]
                asset index.html 605 bytes [emitted]
                Entrypoint main 1.52 MiB (1.51 MiB) = static/js/bundle.js 1.52 MiB main.906df964ecef501940f2.hot-update.js 3.88 KiB 2 auxiliary assets
                cached modules 1.37 MiB [cached] 112 modules
                runtime modules 28.2 KiB 13 modules
                ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[2]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[1].oneOf[7].use[3]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[7].use[4]!./src/components/footer/footer.scss 1000 bytes [built] [code generated]
                webpack 5.70.0 compiled successfully in 227 ms  asset main.906df964ecef501940f2.hot-update.json 28 bytes [emitted] [immutable] [hmr]
                asset index.html 605 bytes [emitted]
            </div>
            <LayoutImg />
        </div>
    )

}
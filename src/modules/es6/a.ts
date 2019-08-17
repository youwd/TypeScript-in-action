/**单独导出 */
export let a = 6;

/**批量导出 */
let b = 2;
let c = 3;
export { b, c };

/**导出接口 */
export interface P {
    /**这是x */
    x: number,
    /**这是y */
    y: number
}

/**导出函数 */
export function fc() { }

/**导出时起别名 */
function g() { };
export { g as G }

/**默认导出 无需函数名 */
export default function(){
    console.log('我是默认导出');
    return 1;
}

/**引入外部模块，并导出 */
export {str as hello} from './b';
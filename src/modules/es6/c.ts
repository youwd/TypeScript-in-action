import { a, b, c } from './a';
/**导入全部模块 */
import * as qwe from './a';
/**不加{},则导入默认模块 */
import default_ from "./a";

console.log(a, b, c);

let p: qwe.P = {
    x: 1,
    y: 2
}

console.log(qwe);
console.log(default_());
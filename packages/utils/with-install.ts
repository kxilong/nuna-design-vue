import type { Plugin } from 'vue'; // 只是导入类型不是导入App的值

/**
 * 组件外部使用use时执行install，然后将组件注册为全局
 */

// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin;

/**
 * 定义一个withInstall方法处理以下组件类型问题
 * @param main
 */
export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
    /**
     * 直接写comp.install = function(){} 的话会报错，因为comp下没有install方法
     * 所以从vue中引入Plugin类型，断言comp的类型为T&Plugin
     */
    (main as SFCWithInstall<T>).install = (app): void => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            app.component(comp.name, comp);
        }
    };

    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            (main as any)[key] = comp;
        }
    }
    return main as SFCWithInstall<T>;
};

export const withNoopInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = () => void {};

    return component as SFCWithInstall<T>;
};

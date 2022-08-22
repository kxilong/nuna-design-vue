/**
 * @author        changan <740394554@qq.com>
 * @date          2022-08-22 16:33:05
 * Copyright © YourCompanyName All rights reserved
 */
export default (name: string) => {
  const prefixCls = name ? `na-${name}` : 'na';

  return {
    prefixCls,
  };
};

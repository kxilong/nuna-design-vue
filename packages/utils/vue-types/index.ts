/**
 * @author        changan <740394554@qq.com>
 * @date          2022-08-22 17:00:44
 * Copyright © YourCompanyName All rights reserved
 */
import { createTypes } from 'vue-types';

const PropTypes = createTypes({});

PropTypes.extend([
  {
    name: 'positive',
    getter: true,
    type: Number,
  },
]);

export default PropTypes;

/**
 * @author        changan <740394554@qq.com>
 * @date          2022-08-22 16:42:27
 * Copyright © YourCompanyName All rights reserved
 */
import PropTypes from 'vue-types';
import { SizeType } from '@nuna-ui/components/config-provider';
import { ExtractPropTypes, PropType } from 'vue';

const spinProps = {
  tip: PropTypes.string,
  size: {
    type: String as PropType<SizeType>,
  },
  spinning: PropTypes.bool,
  delay: PropTypes.number,
};

export type SpinProps = Partial<ExtractPropTypes<typeof spinProps>>;

export default spinProps;

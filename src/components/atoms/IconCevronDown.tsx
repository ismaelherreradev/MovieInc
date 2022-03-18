import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconCevronDownAtom = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M10.48.765 6 5.632 1.52.765 1 1.333l5 5.432 5-5.432-.52-.568Z"
      fill="#3544C4"
      stroke="#3544C4"
      strokeWidth={0.5}
      strokeLinejoin="round"
    />
  </Svg>
);

export default IconCevronDownAtom;

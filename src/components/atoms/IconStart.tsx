import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const IconStartAtom = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M15.958 6.046a.857.857 0 0 0-.732-.61l-4.618-.438L8.782.538A.85.85 0 0 0 8 0a.85.85 0 0 0-.782.54L5.392 4.997l-4.619.438a.859.859 0 0 0-.731.61.912.912 0 0 0 .249.943l3.49 3.194-1.03 4.732a.907.907 0 0 0 .332.916.82.82 0 0 0 .934.043L8 13.388l3.982 2.484a.818.818 0 0 0 .935-.042.908.908 0 0 0 .33-.916l-1.029-4.732 3.49-3.194a.913.913 0 0 0 .25-.943Z"
      fill="#fff"
    />
  </Svg>
);

export default IconStartAtom;

import { FC } from 'react'
import { KinecticCursorContext } from './KinecticCursorProvider';

const withKinecticCursor = (Component: FC<any>) => {
  return function KinecticCursorComponentWrapper(props: any) {
    return (
      <KinecticCursorContext.Consumer>
        {kinecticCursor => <Component {...props} kinecticCursor={kinecticCursor} />}
      </KinecticCursorContext.Consumer>
    )
  }
};

export default withKinecticCursor;
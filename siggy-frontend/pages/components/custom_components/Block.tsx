import { FC } from 'react'
import blocks, {Iblocks} from "./Blocks";

interface Props {
    type: string,
}

const Block: FC<Props> = ({ type, ...rest }) => {
    const Component = blocks[type]
    return <Component {...rest} />;
}

export default Block
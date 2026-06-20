import { Loader2 } from 'lucide-react'

const Loading = ({size=22}) => {
    return (
        <Loader2 size={size} className='animate-spin'/>
    )
}

export default Loading
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'

export function HomeIcon() {
    return <span><AiOutlineHome /></span>
}

export function InfoIcon(key:string = ''+Date.now(), className:string = "") {
    return <span className={className} key={key}><AiOutlineInfoCircle/></span>
}
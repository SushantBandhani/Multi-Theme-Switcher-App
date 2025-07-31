import { useDispatch } from 'react-redux';
import {THEME_SETTINGS} from '../utils/themSetting'
import type { DispatchType } from '../redux/store';
import { toggleTheme } from '../redux/theme/themeSlice';

interface ClickInterface{
    e:React.MouseEvent<HTMLButtonElement>;
    type:string
}

const Modal = () => {
    const dispatch=useDispatch<DispatchType>();
    const handleClick=({e,type}:ClickInterface)=>{
        console.log(e)
        dispatch(toggleTheme(type))
    }
  return (
<div className="flex flex-col gap-2.5 border border-gray-700 p-2.5 bg-white dark:bg-gray-900 rounded-md shadow-md w-fit min-w-[160px]">
       {
        THEME_SETTINGS.map(({id,label,type,icon:Icon,colorClass})=>{
            return <div key={id} className="flex justify-between w-full">
                <button className= {`${colorClass} w-full flex justify-around gap-3`}
                onClick={(e)=>{handleClick({e,type})}}
                >
                <Icon />
                {label}
                </button>
            </div>
        })
       }
    </div>
  )
}

export default Modal

function HeaderItem({Icon,title}) {
    return (
        <div className='flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group'>
            <div>
            <Icon className='h-8 mb-1 headerItem_icon_animation'/>
            </div>
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItem

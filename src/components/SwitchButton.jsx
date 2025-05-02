export default function SwitchButton({modeId, switchMode}){
    const modes = [
        'Web Design', 'Graphic Design'
      ]
    return (
        <div className="flex flex-col justify-between sm:flex-row">
            <h3 className="inline-flex flex-col justify-center items-center z-50 transition-[0.5] text-lg font-medium tracking-wider text-white ml-0.5">TSAI MIN-HSUAN
                <div className="grid grid-cols-[1fr_auto] justify-between w-1/2 sm:w-full items-center mt-1">
                    <span className="inline-block w-full h-1 bg-amber-600"></span>
                    <span className="text-sm text-amber-600 font-normal ml-4 mr-1 tracking-widest">Portfolio</span>
                </div>
            </h3>
            <nav className="inline-grid grid-cols-2 items-center justify-start h-15 bg-gray-600 text-gray-900 rounded-full my-5 relative " role="navigation" aria-label="Switch between Web and Graphic Design">
                <button className={`relative flex items-center justify-center h-full rounded-full transition-all duration-300 cursor-pointer ${modeId === 0 ? ' font-bold shadow-md': ''}`}
                onClick={()=>switchMode(-1)}
                tabIndex={0}
                onKeyDown={(e)=>e.key === "Enter" && switchMode(-1)}
                aria-label="Switch to Web Design"
                aria-current={modeId === 0 ? 'true': 'false'}
                >
                    <span className="p-3.5 text-nowrap text-white z-20">Web Design</span>
                </button>
                <button className={`relative flex items-center justify-center h-full rounded-full transition-all duration-300 cursor-pointer ${modeId === 1 ? ' font-bold shadow-md': ''}`}
                onClick={()=>switchMode(1)}
                tabIndex={0}
                onKeyDown={(e)=>e.key === "Enter" && switchMode(1)}
                aria-label="Switch to Graphic Design"
                aria-current={modeId === 1 ? 'true': 'false'}
                >
                    <span className="p-3.5 text-nowrap text-white z-20">Graphic Design</span>
                </button>
                <span className={`w-[50%] full h-full absolute left-0 top-0 bg-amber-600 rounded-full z-10  ${modeId === 1 ? 'left-[50%] animate-[movingRight_0.3s_ease-in-out]' : 'left-0  animate-[movingLeft_0.3s_ease-in-out]'}`}></span>
            </nav>
        </div>
        
    )
}
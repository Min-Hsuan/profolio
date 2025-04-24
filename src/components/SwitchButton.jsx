export default function SwitchButton({modeId, switchMode}){
    const modes = [
        'Web Design', 'Graphic Design'
      ]
    return (
        <nav className="flex items-center justify-center w-48 h-12 bg-gray-600 text-gray-900 rounded-full mx-auto mt-4" role="navigation" aria-label="Switch between Web and Graphic Design">
            <button className={`relative flex items-center justify-center w-1/2 h-full rounded-full transition-all duration-300 ${modeId === 0 ? 'bg-amber-600 text-black shadow-md': ''}`}
            onClick={()=>switchMode(-1)}
            tabIndex={0}
            onKeyDown={(e)=>e.key === "Enter" && switchMode(-1)}
            aria-label="Switch to Web Design"
            aria-current={modeId === 0 ? 'true': 'false'}
            >
                <span>Web Design</span>
            </button>
            <button className={`relative flex items-center justify-center w-1/2 h-full rounded-full transition-all duration-300 ${modeId === 1 ? 'bg-amber-600 text-black shadow-md': ''}`}
            onClick={()=>switchMode(1)}
            tabIndex={0}
            onKeyDown={(e)=>e.key === "Enter" && switchMode(1)}
            aria-label="Switch to Graphic Design"
            aria-current={modeId === 1 ? 'true': 'false'}
            >
                <span>Graphic Design</span>
            </button>

        </nav>
    )
}
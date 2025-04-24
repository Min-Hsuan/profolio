export default function Loading(){
    return(
        <div className="w-full h-full fixed top-0 left-0 text-white flex items-center justify-center">
            <h3 className="inline-flex flex-col justify-center items-center z-50 transition-[0.5] text-3xl font-bold tracking-wider ">TSAI MIN-HSUAN
                <div className="grid grid-cols-[1fr_auto] mt-4 justify-between w-full items-center">
                    <span className="inline-block w-full h-3 bg-amber-600"></span>
                    <span className="text-lg text-amber-600 font-normal ml-4 mr-1 tracking-widest">Portfolio</span>
                </div>
            </h3>
        </div>
    )
}
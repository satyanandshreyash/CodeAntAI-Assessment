
const LeftPart = () => {
    return (
        <div className="hidden md:flex h-screen w-1/2 bg-white border-r relative items-center justify-center">
            <div className="">
                <div className="w-full border-2 border-gray-200 shadow-2xl rounded-3xl">
                    <div className="flex items-center gap-2 p-4 border-gray-200">
                        <div><img src="/card-subtract.png" alt="" className="w-7 h-8" /></div>
                        <div><span className="flex flex-col items-center text-lg font-bold">AI to Detect & Autofix Bad Code</span></div>
                    </div>
                    <hr />
                    <div className="flex justify-between p-6 gap-12">
                        <div className="text-center">
                            <h2 className="font-bold text-lg">30+</h2>
                            <p className="text-sm font-normal">Language Support</p>
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-lg">10K+</h2>
                            <p className="text-sm font-normal">Developers</p>
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-lg">100K+</h2>
                            <p className="text-sm font-normal">Hours Saved</p>
                        </div>
                    </div>
                </div>
                <div className="w-[50%] shadow-2xl border-2 border-gray-200 py-4 px-6 rounded-3xl translate-x-[100%] -translate-y-[16px] bg-white">
                    <div className="flex justify-between">
                        <div>
                            <img src="/Group4.png" alt="" className="size-14" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center gap-2">
                                <img src="/arrowup.svg" alt="" className="w-4 h-4" />
                                <span className="text-blue-500 font-bold">14%</span>
                            </div>
                            <p className="text-sm">This week</p>
                        </div>
                    </div>
                    <div className="flex flex-col pt-2">
                        <h2 className="text-sm font-bold">Issues Fixed</h2>
                        <h1 className="text-3xl font-bold">500K+</h1>
                    </div>
                </div>
            </div>
            <img src="/Subtract.png" alt="" className="absolute left-0 bottom-0" />
        </div>
    )
}

export default LeftPart;

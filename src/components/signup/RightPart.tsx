import { useState } from "react"
import { Link } from "react-router-dom"

const RightPart = () => {
    const [isSaas, setIsSaas] = useState(true)
    return (
        <div className="flex w-full md:w-1/2 flex-col justify-center h-screen items-center p-4 gap-4 bg-[#FAFAFA]">
            <div className="w-full bg-white flex flex-col justify-between items-center p-6 rounded-3xl border-2 border-gray-100 gap-4">
                <div className="flex flex-col justify-between gap-6 w-full">
                    <div className="flex justify-center items-center gap-2">
                        <img src="/logo.png" alt="" className="h-10 w-9" />
                        <h2 className="font-normal font-santoshi text-3xl">CodeAnt AI</h2>
                    </div>
                    <div className="text-2xl md:text-3xl font-semibold text-center">Welcome to CodeAnt AI</div>
                    <div className="w-full">
                        <div className="border rounded-xl w-full">
                            <button className={`rounded-lg text-xl p-3 w-[50%] ${isSaas ? "bg-[#1570EF] text-white" : "bg-[#FAFAFA]"} `} onClick={() => { setIsSaas(true) }}>SASS</button>
                            <button className={`rounded-lg text-xl p-3 w-[50%] ${isSaas ? "bg-[#FAFAFA]" : "bg-[#1570EF] text-white"} `} onClick={() => { setIsSaas(false) }}>Self Hosted</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="w-full flex justify-center min-h-60">
                    {isSaas ? (<div className="flex flex-col gap-3 w-full items-center">
                        <Link to="/dashboard" className="flex border rounded-lg w-full md:w-[70%] justify-center p-3 gap-4">
                            <img src="/githublogo.png" alt="" className="size-6" />
                            <p className="text-base font-semibold">Sign in with Github</p>
                        </Link>
                        <Link to="/dashboard" className="flex border rounded-lg w-full md:w-[70%] justify-center p-3 gap-4">
                            <img src="/bitbucketlogo.png" alt="" className="size-6" />
                            <p className="text-base font-semibold">Sign in with Bitbucket</p>
                        </Link>
                        <Link to="/dashboard" className="flex border rounded-lg w-full md:w-[70%] justify-center p-3 gap-4">
                            <img src="/azurelogo.png" alt="" className="size-6" />
                            <p className="text-base font-semibold">Sign in with Azure Devops</p>
                        </Link>
                        <Link to="/dashboard" className="flex border rounded-lg w-full md:w-[70%] justify-center p-3 gap-4">
                            <img src="/gitlablogo.png" alt="" className="size-6" />
                            <p className="text-base font-semibold">Sign in with GitLab</p>
                        </Link>
                    </div>) : (<div className="flex flex-col items-center h-full gap-3 w-full">
                        <Link to="/dashboard" className="flex border rounded-lg w-full md:w-[70%] justify-center p-3 gap-4">
                            <img src="/gitlablogo.png" alt="" className="size-6" />
                            <p className="text-base font-semibold">Self Hosted GitLab</p>
                        </Link>
                        <Link to="/dashboard" className="flex border rounded-lg w-full md:w-[70%] justify-center p-3 gap-4">
                            <img src="/key.png" alt="" className="size-6" />
                            <p className="text-base font-semibold">Sign in with SSO</p>
                        </Link>
                    </div>)}

                </div>
            </div>
            <p className="text-sm md:text-base font-normal">By signing up you agree to the <span className="text-sm md:text-base font-bold">Privacy Policy.</span> </p>
        </div>
    )
}

export default RightPart

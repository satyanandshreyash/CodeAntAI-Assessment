

interface RepoProps {
    name: string
    type: string
    language: string
    size: string
    updatedAt: string
}

const Repo = ({ name, type, language, size, updatedAt }: RepoProps) => {
    return (
        <div className="p-4 py-6 border-b flex flex-col gap-2 hover:bg-[#F5F5F5]">
            <div className="flex gap-4 items-center">
                <h2 className="text-lg md:text-xl text-[#181D27] font-medium">{name}</h2>
                <span className="text-sm text-[#175CD3] bg-[#EFF8FF] border-[#B2DDFF] border h-fit px-2 rounded-full">{type}</span>
            </div>
            <div className="flex gap-6 md:gap-10">
                <span className="flex gap-2 items-center">
                    <span className="text-sm font-normal text-[#181D27] ">{language}</span>
                    <img src="/ellipse.png" alt="" className="w-fit h-fit" />
                </span>
                <span className="flex gap-2 items-center">
                    <img src="/database.png" alt="" className="w-fit h-fit" />
                    <span className="text-sm font-normal text-[#181D27] ">{size}</span>
                </span>
                <span className="text-sm font-normal text-[#181D27] ">{updatedAt}</span>
            </div>
        </div>
    )
}

export default Repo

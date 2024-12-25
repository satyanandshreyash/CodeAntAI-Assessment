import Repo from "./Repo";
import { ReposData } from "../../../data";
import { ChangeEvent, useState } from "react";

const Repos = () => {
    const [data, setData] = useState(ReposData);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value.toLowerCase();
        const filteredData = ReposData.filter((repo) => {
            return (repo.name.toLowerCase().includes(searchValue) ||
                repo.language.toLowerCase().includes(searchValue));
        })
        setData(filteredData);
    }
    return (
        <div className="md:border-2 rounded-xl bg-white">
            <div className="flex flex-col border-b">
                <div className="space-y-2 md:flex justify-between p-4">
                    <div className="flex flex-col">
                        <span className="text-[#181D27] text-2xl font-semibold">Repositories</span>
                        <p className="text-sm text-[#414651] font-normal">33 total repositories</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex py-2 px-4 border rounded-lg text-[#414651] text-sm font-normal items-center gap-2"> <img src="/refresh.png" alt="" />Refresh All</button>
                        <button className="flex px-4 border rounded-lg bg-[#1570EF] text-sm font-normal text-white items-center gap-2"> <img src="/plus.png" alt="" /> Add Repository</button>
                    </div>
                </div>
                <div className="p-4 pt-0">
                    <label htmlFor="search" className="flex gap-2 border p-2 items-cener rounded-md w-fit">
                        <img src="/search.svg" alt="" className="size-5" />
                        <input type="text" onChange={handleSearch} placeholder="Search Repositories" className="text-sm outline-none w-[300px]" />
                    </label>
                </div>
            </div>
            {/* Repositories List */}
            <div>
                {data.length >= 1 ? (data.map((repo) => {
                    return <Repo key={repo.name} name={repo.name} type={repo.type} language={repo.language} size={repo.size} updatedAt={repo.updatedAt} />
                })) : (<div className="text-lg text-[#414651] text-center p-10">No repositories found</div>)}
            </div>
        </div>
    )
}

export default Repos

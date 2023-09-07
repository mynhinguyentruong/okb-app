import { ethers } from "ethers"
import { aggregatorV3InterfaceABI } from "@/utils/abi"

export async function getUSDCETHPrice(): Promise<number> {
    const provider = new ethers.AlchemyProvider("mainnet",process.env.ALCHEMY_KEY as string) 
    
    // const addr = '0x986b5E1e1755e3C2440e960477f25201B0a8bbD4';
    const addr = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419" 

    const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider);

    let roundData = await priceFeed.latestRoundData();

    let decimals = await priceFeed.decimals();

    return Number(roundData.answer.toString()) / Math.pow(10, Number(decimals));
}


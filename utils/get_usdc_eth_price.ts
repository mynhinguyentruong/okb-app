import { ethers } from "ethers"
import { aggregatorV3InterfaceABI } from "@/utils/abi"
import { uniswapV3PoolABI } from "@/utils/uniswapv3pool_abi"

export async function getUSDCETHPrice(): Promise<number> {
    const provider = new ethers.AlchemyProvider("mainnet",process.env.ALCHEMY_KEY as string) 
    
    // const addr = '0x986b5E1e1755e3C2440e960477f25201B0a8bbD4';
    const addr = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419" 

    const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider);

    let roundData = await priceFeed.latestRoundData();

    let decimals = await priceFeed.decimals();

    return (Number(roundData.answer.toString()) / Math.pow(10, Number(decimals)));
}

export async function getPriceFromSQRTPriceX96(): Promise<number> {
  const provider = new ethers.AlchemyProvider("mainnet",process.env.ALCHEMY_KEY as string) 

  // UniswapV3Pool Address of USDC/ETH
  // https://etherscan.io/address/0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8#code
  const addr = "0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8"

  const contract = new ethers.Contract(addr, uniswapV3PoolABI, provider);

  const sqrtPriceX96 = (await contract.slot0()).sqrtPriceX96

  const Q96 = BigInt(Math.pow(2, 96))

  const P = (sqrtPriceX96/Q96)*(sqrtPriceX96/Q96)
  const ethPrice = (Math.pow(10, 12)) / Number(P) 

  console.log({ ethPrice })
  console.log({ ethPrice })
  console.log({ ethPrice })

  return ethPrice
}

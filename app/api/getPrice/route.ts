import { getUSDCETHPrice } from "@/utils/get_usdc_eth_price"
import { NextResponse } from 'next/server'


export async function GET(request: Request) {
  // GET /api/getPrice?eth=2

  const { searchParams } = new URL(request.url)
  const eth = Number(searchParams.get("eth"))

  const value = await getUSDCETHPrice(eth)


  return NextResponse.json(value)
}

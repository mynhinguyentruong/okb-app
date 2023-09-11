import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getPriceFromSQRTPriceX96, getUSDCETHPrice } from "@/utils/get_usdc_eth_price" 

export default async function Page() {

  const value = await getUSDCETHPrice()
  const value_0 = await getPriceFromSQRTPriceX96()
  
  return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Current ETH/USD Price</CardTitle>
        </CardHeader>

        <CardContent>
          <p>On Chainlink: ${JSON.stringify(value)}</p>
          <p>On Uniswap: ${JSON.stringify(value_0)}</p>
        </CardContent>
      </Card>
  )
 }

 export const revalidate = 5 // Refresh every 5 second 

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CardPrice from "@/components/ui/card-price"
import { Input } from "@/components/ui/input"

import { getPriceFromSQRTPriceX96, getUSDCETHPrice } from "@/utils/get_usdc_eth_price" 

export default async function Page() {

  const value = await getUSDCETHPrice(2)

  const value_1 = await getPriceFromSQRTPriceX96()
  // await getPrice()
  
  return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Current ETH/USD Price</CardTitle>
        </CardHeader>

        <CardPrice />
      </Card>
  )
 }

 export const revalidate = 5 // Refresh every 5 second 

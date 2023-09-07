import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getUSDCETHPrice } from "@/utils/get_usdc_eth_price" 

export default async function Page() {

  const value = await getUSDCETHPrice()
  
  return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Current USDC/ETH Price</CardTitle>
        </CardHeader>

        <CardContent>
          <p>{JSON.stringify(value)}</p>
        </CardContent>
      </Card>
  )
 }

 export const revalidate = 5 // Refresh every 5 second 

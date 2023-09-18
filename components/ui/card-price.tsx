'use client'

import {
  CardContent,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { getUSDCETHPrice } from "@/utils/get_usdc_eth_price"

import { useState } from "react"

export default function CardPrice() {

  const [input, setInput] = useState(0)
  const [price, setPrice] = useState(0)

  const onInputChange = async (e) => {
    // const value = await getUSDCETHPrice(input)
    const res = await fetch(`http://localhost:3000/api/getPrice?eth=${e.target.value}`)
    const value = await res.json()
    setPrice(value)
  }

  console.log({input})
  console.log({price})


  return (
  <>
              <CardContent>
          <Input type="number" name="input" onChange={onInputChange}/>  
        </CardContent>
        <CardContent>
          <p>On Chainlink: ${JSON.stringify(price)}</p>
        </CardContent>
        
        <CardContent>
          <p>On Uniswap: ${JSON.stringify(price)}</p>
        </CardContent>
</>
      )
}

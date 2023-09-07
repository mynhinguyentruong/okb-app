import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  let date = new Date().toJSON();
  
  return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Current Time</CardTitle>
        </CardHeader>

        <CardContent>
          <p>{date}</p>
        </CardContent>
      </Card>
  )
 }

 export const revalidate = 1 // Refresh every second 

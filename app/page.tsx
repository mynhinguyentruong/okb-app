import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
  <main className="flex space-x-3 m-3">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Current Time</CardTitle>
      </CardHeader>

      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Current Time</CardTitle>
      </CardHeader>

      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>

  </main>
  )
}

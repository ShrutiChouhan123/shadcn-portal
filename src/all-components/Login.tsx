
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navigation } from "./Navigation"

export const Login=()=>{
  return (
    <>
    <Navigation />
    <Card className="w-[450px] my-8 mt-20 container mx-auto">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome to the BestPeers.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Name Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input id="name" placeholder="Enter Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-right">
        <Button>Login</Button>
      </CardFooter>
    </Card>
    </>
  )
}

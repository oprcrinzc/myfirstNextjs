import { redirect } from "next/navigation"
import login from "@/app/lib/login";

import type {UserLogin} from "@/app/lib/types/dtypes";

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get("name")
  const password = formData.get("password")
  let loginStatus = {}
  if(typeof(name)==="string" && typeof(password) === "string"){
    const loginData:UserLogin = {
      name: name,
      password: password
    }
    loginStatus = await login(loginData)
  }
  console.log(loginStatus)
  // return Response.json({msg: await User.find({})})
  redirect('/login')
}
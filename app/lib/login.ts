import type UserLogin from "./types/dtypes"
import connectMongo from "./mongodb"
import UserDb from "./userDb"
import {cookies} from "next/headers"

const login = async (data: UserLogin) => {
    const cookieStore = cookies()
    await connectMongo()
    const exits = await UserDb.find({name: data.name, password: data.password})
    const status = exits.length == 0 ? {code: 0,msg: "account not found"} : {code: 1,msg: "success"}
    cookieStore.set("name", data.name)
    return status
}

export default login
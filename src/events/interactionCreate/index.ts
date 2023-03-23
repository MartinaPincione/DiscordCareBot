import { Event } from "../../types";
import commands from "./commands";
import help from './help'
import care from './care'

const events: Event<any>[] = [
    commands,
    help,
    care,
]

export default events
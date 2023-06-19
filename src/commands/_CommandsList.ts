import { Command } from "../interfaces/Command";
import { minesweeper } from "./fun/minesweeper";
import { ping } from "./fun/ping";
import { question} from "./fun/quiz";
import { purge } from "./moderation/purge";
import { server } from "./moderation/server";
import { user } from "./moderation/user";
import {pong} from "./fun/pong";

export const CommandList: Command[] = [minesweeper, ping, server, user, purge, question, pong];
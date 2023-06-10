import { Command } from "../interfaces/Command";
import { minesweeper } from "./fun/minesweeper";
import { ping } from "./fun/ping";
import { purge } from "./moderation/purge";
import { server } from "./moderation/server";
import { user } from "./moderation/user";

export const CommandList: Command[] = [minesweeper, ping, server, user, purge];
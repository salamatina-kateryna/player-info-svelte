import type { PlayerDetailedInfo } from "./types/player-info";

export const processPlayerInfo = (data: PlayerDetailedInfo) => {
    if (!data) return null;

    const newData = JSON.parse(JSON.stringify(data))

    let avatarInfo = {} as { avatar: string, avatarFrame: string };
    try {
        avatarInfo = JSON.parse(data.Player.Avatar as unknown as string || "");
    }
    catch (ex) { /* empty */ }

    newData.Player.Avatar = avatarInfo;

    return newData
}
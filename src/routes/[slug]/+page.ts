import { processPlayerInfo } from "$lib/helpers";
import type { PlayerDetailedInfo } from "$lib/types/player-info";

/** @type {import('./$types').PageLoad} */
export async function load() {
    /* const res = await fetch(`http://localhost:3000/${params.slug}`);
    const item = await res.json(); */

    const item = [{
        "FfLastTopRank": -1,
        "FfSeason": 14,
        "Power": {
            "HeroPower": 10051200,
            "TechniquePower": 31342718,
            "TroopPower": 111678537,
            "BuildingPower": 19350352
        },
        "AsBattleInfo": {
            "Show": true,
            "Heal": 30097,
            "Kill": 3988999,
            "WinCnt": 55,
            "LeagueWinCnt": 0,
            "JoinCnt": 63,
            "LeagueJoinCnt": 22,
            "Dead": 2269438
        },
        "KvkInfo": {
            "JoinCnt": 2,
            "PeakCnt": 2,
            "MaxHeal": 324789853,
            "MaxKill": 551823325,
            "Show": true,
            "MaxDead": 17681786
        },
        "Alliance": {
            "Abbr": "60GT",
            "Name": "黑人抬棺",
            "Logo": "1_16_14_6_4_9",
            "Id": 2384869,
            "Owner": 0,
            "Lang": 1,
            "OwnerName": ""
        },
        "Player": {
            "PlayerId": 43476269,
            "Kill": 4320953972,
            "Power": 172422807,
            "KillScore": 72046379279,
            "VipLevel": 18,
            "ServerId": 960,
            "Name": "osNo",
            "Civilization": 2,
            "OriServerId": 960,
            "TownCenterLevel": 25,
            "Avatar": "{\"avatarFrame\":\"http://imimg.lilithcdn.com/roc/img_AvatarFrame_130.png\",\"avatar\":\"http://imimg.lilithcdn.com/roc/img_player_head07.png\"}",
            "OriHomeProvince": 1
        },
        "Fight": {
            "TiersKill": [
                {
                    "Kill": 2931830328,
                    "Tier": 5
                },
                {
                    "Kill": 1329217224,
                    "Tier": 4
                },
                {
                    "Kill": 15647687,
                    "Tier": 3
                },
                {
                    "Kill": 25646582,
                    "Tier": 2
                },
                {
                    "Kill": 18582837,
                    "Tier": 1
                }
            ],
            "UnitRangeAttackScore": 0,
            "UnitLost": 169920681,
            "TiersKillScore": [
                {
                    "KillScore": 58636606560,
                    "Tier": 5
                },
                {
                    "KillScore": 13292172240,
                    "Tier": 4
                },
                {
                    "KillScore": 62590748,
                    "Tier": 3
                },
                {
                    "KillScore": 51293164,
                    "Tier": 2
                },
                {
                    "KillScore": 3716567,
                    "Tier": 1
                }
            ],
            "FightWin": 610367,
            "ScoutTimes": 12229,
            "FightLose": 25246,
            "UnitHealing": 2584577712,
            "UnitKillScore": 72046379279,
            "UnitKill": 4320953972,
            "PowerPeak": 322759896
        },
        "Country": "韩国",
        "FfLastRankInfo": {
            "TotalStars": 0,
            "SubRankStars": 0,
            "SubRank": 0,
            "LastBattleStars": 0,
            "Rank": 1
        },
        "Res": {
            "AsHelp": 153838,
            "RssAll": 27449225202,
            "ResTrade": 176917639090
        },
        "FfInfo": {
            "Show": true,
            "WinCnt": 2,
            "TopRank": 0,
            "HighestRank": "1-0-2",
            "JoinCnt": 4,
            "ThumbUpCnt": 0,
            "Rank": "1-0-0"
        },
        "Province": "韩国"
    }]



    const playerInfo = processPlayerInfo(item?.[0] as unknown as PlayerDetailedInfo);
    return { item: playerInfo };
}
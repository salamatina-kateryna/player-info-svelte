interface PlayerDetailedInfo {
    FfLastTopRank: number;
    FfSeason: number;
    Power: Partial<Power>;
    AsBattleInfo: Partial<AsBattleInfo>;
    KvkInfo: Partial<KvkInfo>;
    Alliance: Partial<Alliance>;
    Player: Partial<Player>;
    Fight: Partial<Fight>;
    Country: string;
    FfLastRankInfo: Partial<FfLastRankInfo>;
    Res: Partial<Res>;
    FfInfo: Partial<FfInfo>;
    Province: string;
}

interface Power {
    HeroPower: number;
    TechniquePower: number;
    TroopPower: number;
    BuildingPower: number;
}

interface AsBattleInfo {
    Show: boolean;
    Heal: number;
    Kill: number;
    WinCnt: number;
    LeagueWinCnt: number;
    JoinCnt: number;
    LeagueJoinCnt: number;
    Dead: number;
}

interface KvkInfo {
    JoinCnt: number;
    PeakCnt: number;
    MaxHeal: number;
    MaxKill: number;
    Show: boolean;
    MaxDead: number;
}

interface Alliance {
    Abbr: string;
    Name: string;
    Logo: string;
    Id: number;
    Owner: number;
    Lang: number;
    OwnerName: string;
}

interface Player {
    PlayerId: number;
    Kill: number;
    Power: number;
    KillScore: number;
    VipLevel: number;
    ServerId: number;
    Name: string;
    Civilization: number;
    OriServerId: number;
    TownCenterLevel: number;
    Avatar: {
        avatar: string;
        avatarFrame: string;
    };
    OriHomeProvince: number;
}

interface Fight {
    TiersKill: TierKill[];
    UnitRangeAttackScore: number;
    UnitLost: number;
    TiersKillScore: TierKillScore[];
    FightWin: number;
    ScoutTimes: number;
    FightLose: number;
    UnitHealing: number;
    UnitKillScore: number;
    UnitKill: number;
    PowerPeak: number;
}

interface TierKill {
    Kill: number;
    Tier: number;
}

interface TierKillScore {
    KillScore: number;
    Tier: number;
}

interface FfLastRankInfo {
    TotalStars: number;
    SubRankStars: number;
    SubRank: number;
    LastBattleStars: number;
    Rank: number;
}

interface Res {
    AsHelp: number;
    RssAll: number;
    ResTrade: number;
}

interface FfInfo {
    Show: boolean;
    WinCnt: number;
    TopRank: number;
    HighestRank: string;
    JoinCnt: number;
    ThumbUpCnt: number;
    Rank: string;
}

export type { PlayerDetailedInfo, Power, AsBattleInfo, KvkInfo, Alliance, Player, Fight, TierKill, TierKillScore, FfLastRankInfo, Res, FfInfo };

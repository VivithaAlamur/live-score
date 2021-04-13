export interface SandBResponse {
  Data: any;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
  DeviceIds:string;
}
export interface ILoginRequest {
  email: string;
  password: string;
}
export interface ILoginMatches {
  Emailid: string;
  Password:string;
}
export interface ILoginResponse {
  Data: IloginResponseData;
  ErrorCode: string;
  Message: string;
}
export interface IPasswordChangeRequest {
  Password: string;
  userID: string;
  Update_Password: string;
}
export interface IUpdatePasswordResponse {
  Data: boolean;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IforgotPasswordRequest {
  email: string;
}
export interface IforgotPasswordResponse {
  Data: boolean;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IRegisterRequest {
  firstName: string;
  lastName: string;
  registeremail: string;
  registerpassword: string;
}
export interface IRegisterResponse {
  Data: number;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IResetPasswordRequest {
  email: string;
  password: string;
}

export interface IResetPasswordResponse {
  Data: number;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IloginResponseData {
  AccessToken: number;
  RoleName: string;
  UserId: number;
  UserName: string;
  EmailAddress: string;
}
export interface IStorageService {
  setItem: (key: string, value: any) => void;
  getItem: (key: string) => string;
  clearItem: (key: string) => void;
  clearStorage: () => void;
}
export interface IManagedLeaguesRequest {
  UserID: string;
}

export interface IJoinedLeaguesRequest {
  email: string;
}
export interface ICitiesResponse {
  Data: any[];
  ErrorCode: string;
  Message: string;
  StatusCode: string;
}
export interface ILeagueRespone {
  Data: any[];
  ErrorCode: string;
  Message: string;
  StatusCode: string;
}
export interface IleagueInfo {
  ReturnCode: string;
  LeagueId: number;
  LeagueName: string;
  NoTeams: string;
  LeagueOwner: string;
  NoOfTeams: string;
  AcceptedTeams: string;
  FTID: string;
  LTPID: number;
  PlayingAS: string;
  Starter: string;
  LeagueUniqueId: string;
  TeamEmail: string;
  TeamName: string;
  TeamId: string;
  TeamStatus: string;
  LeagueStatus: string;
  Flag: string;
  TeamOwner: string;
  EmailStatus: string;
  UserId: number;
  LeagueStatusId: number;
  NoofPlayersperTeam: number;
  CapAmount: any;
  FAAmount: any;
  AllowBidding: any;
}
export interface IJoinedLeaguesResponse {
  Data: ILeagueStats[];
  ErrorCode: string;
  Mesaage: string;
}
export interface ILeagueRequest {
  LeagueId: string;
}
export interface ITeamStatsRequest {
  teamId: string;
}
export interface ILeagueTrends {
  FTID: string;
  FTName: string;
  Trend: number;
}
export interface ILeagueStats {
  ReturnCode: string;
  LeagueId: number;
  LeagueName: string;
  NoTeams: string;
  LeagueOwner: string;
  NoOfTeams: string;
  AcceptedTeams: string;
  Names: string;
  Runs: string;
  Fourties: string;
  RNR: string;
  SR: string;
  SRR: string;
  BDR: string;
  FTR: string;
  DSR: string;
  BBR: string;
  ECR: string;
  WTR: string;
  WR: string;
  OAVG: string;
  OVR: string;
  AVG: string;
  Bds: string;
  Forties: string;
  Ds: string;
  FTName: string;
  EC: string;
  WT: string;
  bf: string;
  WS: string;
  FTID: string;
  LTPID: number;
  PlayingAS: string;
  Starter: string;
  LeagueUniqueId: string;
  TeamEmail: string;
  TeamName: string;
  TeamId: string;
  TeamStatus: string;
  LeagueStatus: string;
  Flag: string;
  TeamOwner: string;
  EmailStatus: string;
  SeriesId: string;
  NoOfPlayersPerTeam: string;
  IsSnakeDraft: number;
  DB: string;
  Fours: string;
  Sixes: string;
  Fifties: string;
  Hundreds: string;
  Maidens: string;
  HDR:string;
  FSR:string;
  SXR:string;
  DBR:string;
  FWR:string;
  TWR:string;
  MDR:string;
}
export interface ITeamNewStats {
  ReturnCode: string;
  LeagueId: number;
  LeagueName: string;
  NoTeams: string;
  LeagueOwner: string;
  NoOfTeams: string;
  AcceptedTeams: string;
  Names: string;
  Runs: string;
  RNR: string;
  SR: string;
  SRR: string;
  BDR: string;
  FTR: string;
  DSR: string;
  BBR: string;
  ECR: string;
  WTR: string;
  WR: string;
  OAVG: string;
  OVR: string;
  AVG: string;
  Bds: string;
  Forties: string;
  Ds: string;
  FTName: string;
  EC: string;
  WT: string;
  bf: string;
  WS: string;
  FTID: string;
  LTPID: number;
  PlayingAS: string;
  Starter: string;
  LeagueUniqueId: string;
  TeamEmail: string;
  TeamName: string;
  TeamId: string;
  TeamStatus: string;
  LeagueStatus: string;
  Flag: string;
  TeamOwner: string;
  EmailStatus: string;
  ISEdited: boolean;
  IsSnakeDraft: number;
}
export interface IJoinedLeaguesResponse {
  ReturnCode: string;
  LeagueId: number;
  LeagueName: string;
  NoTeams: string;
  LeagueOwner: string;
  NoOfTeams: string;
  AcceptedTeams: string;
  FTID: string;
  LTPID: number;
  PlayingAS: string;
  Starter: string;
  LeagueUniqueId: string;
  TeamEmail: string;
  TeamName: string;
  TeamId: string;
  TeamStatus: string;
  LeagueStatus: string;
  Flag: string;
  TeamOwner: string;
  EmailStatus: string;
  UserId: number;
}

export interface NoOfTeams {
  value: string;
  viewValue: string;
}

export interface Noofbenchs {
  value: string;
  viewValue: string;
}
export interface TradePer {
  value: string;
  viewValue: string;
}

export interface Noofvotes {
  value: string;
  viewValue: string;
}

export interface ICreateLeagueRequest {
  seriesID: string;
  userID: string;
  LeagueName: string;
  teamName: string;
  NoofTeams: string;
  Noofbenchs: string;
  userEmail: string;
  teamCode: string;
  capamount: string;
  isSnakeDraft: string;
  categories: string;
  faamount: string;
  tradePercentage: string;
  voteTeams: string;
}


export interface ICreateLeagueRespone {
  Data: string;
  ErrorCode: string;
  Message: string;
  StatusCode: string;
}

export interface IInviteEmailRequest {
  teamID: string;
  email: string;
  usedID: string;
  flag: string;
}
export interface IMoveLeaguetoLive {
  userID: string;
  leagueID: string;
}
export interface TradePer {
  value: string;
  viewValue: string;
}

export interface Noofvotes {
  value: string;
  viewValue: string;
}
export interface IInviteLeagueResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface IUpdateLeagueRequest {
  userID: string;
  Noofbenchs: string;
  capamount: string;
  leagueId: string;
  isSnakeDraft: string;
  categories: string;
  faamount: string;
  VetoPercentage: string;
  vetoTeams: string;

}
export interface ITeamPlayersResponse {
  totalusedmoney: any;
  BB: string;
  Bds: string;
  Ds: string;
  EC: string;
  Forties: string;
  Names: string;
  PID: string;
  PlayerCount: string;
  PlayerType: string;
  Rating: string;
  Runs: string;
  SR: string;
  Status: string;
  Team: string;
  WS: string;
  WT: string;
  usedmoney: string;
  FTID: any;
  PlayerPrice: any;
  AllowBidding: any;
  SeriesId: number;
  IsSnakeDraft: number;
  PlayerFAPrice: number;
  FAmoneyused: string;
  IsSelected: boolean;


}
export interface ITeamNewlyAddedPlayers {
  ID: string;
  PID: string;
  FTID: string;
  userId: string;
}

export interface IJoinLeagueRequest {
  leagueId: string;
  teamName: string;
  email: string;
  teamCode: string;
}
export interface IDimissLeagueRequest {
  leagueId: string;
  email: string;
}

export interface IJoinLeagueResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IDeletePlayerRequest {
  teamId: string;
  PID: string;
  PlayerCount: string;
  SeriesId: string
}

export interface IPlayerStatusTypeRequest {
  userId: string;
}
export interface IPlayerStatusTypeResponse {
  Data: IPlayerStatusType[];
  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}
export interface IPlayerStatusType {
  StatusID: string;
  StatusType: string;
}
export interface ITeamEdiatbleRequest {
  userid: string;
  leagueId: string;
  teamId: string;
}

export interface ITeamEdiatbleResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IchatResponse {
  Data: any;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IchatRequest {
  LeagueID: string;
}
export interface Iaddchatresponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface ISnakeDraftResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface INewsResponse {
  Data: INewsItem[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IBlogResponse {
  Data: IBlog[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IBlogItemRequest {
  blogId: string;
}
export interface INewsItemRequest {
  newsId: string;
}
export interface IBlogItemResponse {
  Data: IBlogItem[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface INewsItemResponse {
  Data: INewsItem[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface INewsItem {
  ISFeatured: boolean;
  coverImages: string;
  description: string;
  link: string;
  newsId: string;
  pubDate: string;
  title: string;
}
export interface IBlogItem {
  Name: string;
  BlogId: string;
  date: string;
  date_gmt: string;
  url?: string;
  modified: string;
  status: string;
  title: string;
  Content: string;
  excerpt: string;
  author: string;
  featured_media: string;
  categories: string;
  tags: string;
  DocumentName: string;
  DocumentPath: string;
}
export interface INews {
  title: string;
  description: string;
  coverImages: string;
  link: string;
  pubDate: string;
}
export interface IBlog {
  BlogId: string;
  Content: string;
  Name: string;
  author: string;
  categories: string;
  date: string;
  date_gmt: string;
  excerpt: string;
  featured_media: string;
  modified: string;
  status: string;
  tags: string;
  title: string;
  url: string;
}

export interface IProfileRequest {
  userid: string;
}
export interface IPlayersListRequest {
  matchUniqueID: string;
}

export interface IPlayerListResponse {
  Data: IPlayers[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface IPlayers {
  PlayerID: number;
  PlayerName: string;
  RN: number;
  SR: string;
  BDS: string;
  str40s: string;
  DS: string;
  BB: number;
  EC: string;
  WT: string;
  ISSelected: boolean;
  MatchuniqueID: string;
  PlayerType: string;
  PlayerTeam: string;
}

export interface ISelectedPlayerRecomendationRequest {
  matchid: string;
  selectedPlayersList: string;
}

export interface ISelectedPlayerRecomendationResponse {
  Data: IRecomendations[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}


export interface IRecomendations {
  PlayerID: number;
  PlayerName: string;
  OverallRating: string;
  TotalCredits: string;
  Reccomendation: string;
  MatchuniqueID: number;
  PlayerType: string;
  PlayerTeam: string;
  ISSelected: boolean;
}

export interface IPlayerDataRequest {
  playerID: string;
  seriesID: string;
  teamID: string;
}
export interface IPlayerDataResponse {
  Data: IPlayerData[];
  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}
export interface IPlayerData {
  PlayerID: number;
  SeriesID: number;
  PlayerName: string;
  Team2: string;
  Team1: string;
  MatchTimeGMT: string;
  Sixes: string;
  Fours: string;

  Run: string;
  BallsFaced: string;
  Catches: string;
  Stumped: string;
  Runout: string;
  WicketTaken: string;
  RunsGiven: string;
  MaidenOvers: string;

  OversBowled: string;
  Dotballs: string;
  PlayingAS: String;
  shortTeam1: string;
  shortTeam2: string;
}

export interface ISeriesRequest {
  userID: string;
}

export interface ISeriesResponse {
  Data: ISeries[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface ISeries {
  ID: number;
  SeriesName: string;
  NoofTeams: number;
}



export interface Imanagesubscription {
  ReturnCode: string;
  LeagueId: string;
  Subscriptiontype: string;
  Days: string;
  StartDate: string;
  Enddate: string;
  Isactive: string;
  LeagueUniqueId: string;
  TeamEmail: string;
  TeamName: string;
  ADD: string;
  EmailStatus: string;
  UserId: string;
}


export interface ISubscriptionRequest {
  UserId: string;
  Stype: string;
}


export interface ISubscriptionResponse {
  Data: boolean;
  ErrorCode: string;
  Mesaage: string;
}


export interface IManagedLeaguesRequest {
  UserID: string;
}

export interface ImanagedSubscriptionResponse {
  Data: boolean;
  ErrorCode: string;
  Message: string;
}

export interface ImanagedSubscriptionRequest {
  UserId: string;
}


export interface IProfileResponse {
  Data: IProfileDetails;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IProfileDetails {
  FirstName: string;
  LastName: string;
  email: string;
  MobileNo: string;
  City: string;
  Country: string;
  Zipcode: string;
}

export interface IRegConfirmRequest {
  GUID: string;
}

export interface IRegConfirmResponse {
  Data: boolean;
  ErrorCode: string;
  Mesaage: string;
}

export interface IUpcomingMatchesResponse {
  Data: IUpcomingMatches;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IUpcomingMatches {
  MTID: string;
  UniQueID: string;
  team1: string;
  team2: string;
  PlayerType: string;
  PlayDate: string;
  matchTime: string;
  shortTeam1: string;
  shortTeam2: string;
}

export interface ScoreProviderResponse {
  score: any;
  source: string;
  stat: string;
  description: string;
  matchStarted: boolean;
  'team-1': string;
  'team-2': string;
  ttl: string;
  v: string;
  creditsLeft: string;
  provider: any;
}

export interface InewsResponse {
  link: string;
  title: string;
  excerpt: string;
  fimg_url: string;
}

export interface IProfileUpdateRequest {
  userid: string;
  FirstName: string;
  LastName: string;
  email: string;
  City: string;
  Country: string;
  Zipcode: number;

}

export interface IProfileupdateResponse {
  Data: number;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}


export interface ITeamPlayersRequest {
  userID: string;
  leagueID: string;
}

export interface ITeamPlayersResponse {
  Data: ITeamPlayers[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface ITeamPlayers {
  FTID: number;
  FTName: string;
  PlayerDetails: IplayersData[];
  ShowDetails: boolean;
}

export interface IplayersData {
  PlayerName: string;
  PlayerPrice: string;
}

export interface AuthenticationResponse {
  Data: boolean;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface IValidateTokenRequest {
  token: string;
}

export interface IValidateTokenResponse {
  Data: boolean;
  ErrorCode: string;
  Message: string;
}

export interface ILiveUnidIdRequest {
  UnidId: any;
}

export interface ILiveUnidIdRespone {
  Data: string;
  ErrorCode: string;
  Message: string;
  StatusCode: string;
}

export interface ITeamComparisonRequest {
  teamId1: string;
  teamId2: string;
}

export interface ITeamComparisonResponse {
  Data: ILeagueStats[];
  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}

export interface ITeamPlayerstoWatch {
  Data: any[];
  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}

export interface IUserLeagueResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}


export interface IuserleagueRequest {
  leagueId: string;
  userId: string;
}
export interface ITransactionsRequest {
  leagueId: string;
}

export interface ITransactionsResponce {
  Data: Transactionstats[];
  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}
export interface Transactionstats {
  Team: string;
  Player: string;
  Transaction: string;
  ActiveDate: any;
  ExpirationDate: any;
  Created_Date: any;
}

export interface Quelist {
  Position: string;
  TeamID: string;
  TeamName: string;
  RoundNo: number;
  Status: string;
  PlayerID: number;
  LeagueID: number;
}
export interface ITimer {
  minutes: number;
  seconds: number;
}


export interface IMoveLeaguetoBidding {
  userID: string;
  leagueID: string;
}

export interface IGetBiddingPlayerRequest {
  teamId: string;
}
export interface IRemoveBiddingPlayerRequest {
  teamId: string;
  teambiddingid: string;
}
export interface IGetBiddingPlayerResponse {
  Data: IBiddingPlayers[];
  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}
export interface IBiddingPlayers {
  PID: number;
  FTID: number;
  Names: string;
  PlayerPrice: string;
  TransactionType: string;
  PPriceAdd: number;

}
export interface UniqueIdRequest {
  UniqueID: any;
}
// export interface PidRequest {
//   pid: string;
// }
export interface PidResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IScoreResponse {
  Data: any;
  ErrorCode: string;
  Message: string;
}
export interface PidRequest {
  PDBID: string;
  // PID: string;
}

export interface ScoreRequest {
  LeagueId: string;
}
export interface ScoreResponse {
  Data: any;
  ErrorCode: string;
  StatusCode: string;
  Message: string;
}

export interface PproRequest {
  PID: string;
}
export interface ProRequest {
  PID: string;
}
export interface IcurrentMatchesRequest {
  UniQueID: string;
}

export interface ICurrentmatchResponce {
  Data: IcurrentMatches[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface PidResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface ListResponse {
  Data: ListItem[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface ListItem {
  Names: string;
  PID: string;
}

export interface ILeaguesInfoRequest {
  userId: string;
  email: string;
}
export interface ILeaguesInfoResponse {
  Data: ILeaguesInfo[];

  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}

export interface IcurrentMatches {

  PlayerID: string;
  PlayerName: string;
  OverallRating: string;
  TotalCredits: string;
  Reccomendation: string;
  MatchuniqueID: string;
  PlayerType: string;
  PlayerTeam: string;
  Team1: string;
  Team2: string;
  Location: string;
  Runs: string;
  BallsFaced: string;
  Fours: string;
  Sixes: string;
  StrikeRate: string;
  Overs: string;
  Balls: string;
  Maidens: string;
  Wickets: string;
  EconRate: string;
}

export interface IprevfiveMatchesRequest {
  UniQueID: string;
  PlayerID: string;
}
export interface newsRequest {
  id: string;
}


export interface IprevfiveMatchesResponce {
  Data: IprevfiveMatches[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface ILeaguesInfo {
  LeagueName: string;
  FLID: number;
}


export interface ILeagueSettingRequest {
  userID: string;
  leagueId: string;
}

export interface ILeagueSettingResponse {
  Data: ILeagueSettings;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface ILeagueSettings {
  LeagueId: number;
  LeagueName: string;
  TeamName: string;
  teamCode: string;
  NoOfTeams: number;
  NoofBenchPlayers: string;
  CapAmount: string;
  FAAmount: string;
  IsSnakeDraft: string;
}


export interface ISnakeDraftRefreshRequest {
  leagueId: string;
  userteamid: any;
  //teamId : any;
}


export interface ISnakeDraftRequest {
  leagueId: string;
  //teamId : any;
}

export interface ISnakeDraftResponce {
  Data: ISnakeDraft[];

  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}

export interface IprevfiveMatches {

  PlayerID: string;
  PlayerName: string;
  OverallRating: string;
  TotalCredits: string;
  Reccomendation: string;
  MatchuniqueID: string;
  PlayerType: string;
  PlayerTeam: string;
  Team1: string;
  Team2: string;
  Location: string;
  Runs: string;
  BallsFaced: string;
  Fours: string;
  Sixes: string;
  StrikeRate: string;
  Overs: string;
  Balls: string;
  Maidens: string;
  Wickets: string;
  EconRate: string;
  Date: string;
}

export interface ISnakeDraft {
  Position: number;
  TeamID: number;
  TeamName: string;
  CurrentDraftingTeam: string;
  TeamCode: number;
  RoundNo: number;

  Status: string;
  PlayerID: number;
  LeagueID: number;
  PlayerCount: number;
  UserId: number;
  Timeleft: string;
}


export interface ICategoriesResponse {
  Data: ICategories[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface ICategories {
  LeagueID: number;
  CategoryName: string;
  CategoryID: string;
  Description: string;
  IsCategorySelected: number;
}
export interface Ichat {
  TeamID: string;
  TeamName: string;
  LeagueID: string;
  TeamEmail: string;
  Description: string;
}


export interface IGetNoofBenchPlayersRequest {
  noofTeams: string;
}


export interface IGetNoofBenchPlayersResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface IAutoDraftRequest {
  leagueId: string;
  teamId: string;
  flag: string;
}

export interface IAutoDraftRespone {
  Data: string;
  ErrorCode: string;
  Message: string;
  StatusCode: string;
}

export interface IFATransactionsRequest {
  leagueId: string;
}

export interface IFATransactionsResponce {
  Data: FATransactionstats[];
  ErrorCode: string;
  Mesaage: string;
  StatusCode: string;
}
export interface FATransactionstats {
  leagueName: string;
  TeamName: string;
  PLayerAdded: string;
  PlayerRemoved: string;
  AuctionPrice: any;
  ProcessedDate: any;
  BiddingResult: string;
}
export interface ISubmitTradeRequest {
  tradingplayers: tradingplayers[];
}
export interface tradingplayers {
  FromTeamID: string;
  FromPID: string;
  FromPDesc: string;
  FromPlayerCount: string;
  ToTeamID: string;
  ToPID: string;
  ToPDesc: string;
  ToPlayerCount: string;
  Seriesid: string;
  leagueid: string;
}

export interface getmyTradesRequest {
  leagueId: string,
  userteamid: string
}

export interface deletemyTradeRequest {
  PlayerTradingID: string
}

export interface IAcceptRejectTradingRequests {
  PlayerTradingID: string;
  tstatus: string;
  tleagueid: string;
}
export interface IAcceptRejectTradingVoting {
  PlayerTradingID: string;
  vstatus: string;
  vteamid: string;
}

export interface IchatNotificationRequest {
  leagueID: string;
  teamID: string;
}

export interface IChatNotificationResponse {
  Data: string;
  StatusCode: string;
  Message: any;
  ErrorCode: string;
}
export interface IchatNotifyRequest {
  leagueID: string;
  teamID: string;
}
export interface ITeamsRequest {
  leagueID: string;
  teamEmail: string;
}
export interface ITeamsResponse {
  Data: string;
  StatusCode: string;
  Message: any;
  ErrorCode: string;
}
export interface IChatNotifyResponse {
  Data: string;
  StatusCode: string;
  Message: any;
  ErrorCode: string;
}
export interface IChatRequest {
  LeagueID: string;
  Description: string;
  teamEmail: string;
}
export interface IChatResponse {
  Data: string;
  StatusCode: string;
  Message: any;
  ErrorCode: string;
}
export interface IGetChatResponse {
  Data: string;
}
export interface IVotesResponse {
  Data: IVotes[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface IVotes {
  value: number;
  viewValue: number;
}

export interface IVotesResponse {
  Data: IVotes[];
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}
export interface IGetChatRequest {
  LeagueID: string;
  teamID: string;
}

export interface IReadMessage {
  Description: string;
  LeagueID: string;
  TeamEmail: string;
  TeamID: string;
  TeamName: string;
}
export interface IVotes {
  value: number;
  viewValue: number;
}
export interface ICompareRequest {
  PID1: string;
  PID2: string;
  SID: string;
}
export interface ICompareResponse {
  Data: IPlayerStats[];
  ErrorCode: string;
  Message: string;
  StatusCode: string;
}

export interface IPlayerStats {
  ReturnCode: string;
  LeagueId: string;
  LeagueName: string;
  NoTeams: string;
  LeagueOwner: string;
  NoOfTeams: string;
  AcceptedTeams: string;
  Names: string;
  Runs: string;
  Fourties: string,
  RNR: string;
  SR: string;
  SRR: string;
  BDR: string;
  FTR: string;
  DSR: string;
  BBR: string;
  ECR: string;
  WTR: string;
  TWR: string;
  OAVG: string;
  OVR: string;
  AVG: string;
  Bds: string;
  Forties: string;
  Ds: string;
  FTName: string;
  EC: string;
  WT: string;
  bf: string;
  TWS: string;
  FTID: string;
  LTPID: string;
  PlayingAS: string;
  Starter: string;
  PlayerCount: string;
  Dts: string;
  LeagueUniqueId: string;
  TeamEmail: string;
  TeamName: string;
  TeamId: string;
  TeamStatus: string;
  LeagueStatus: string;
  Flag: string;
  TeamOwner: string;
  EmailStatus: string;
  SeriesId: string;
  NoOfPlayersPerTeam: string;
  DBR: string;
  DB: string;
  NoofBenchPlayers: string;
  Fours: string;
  Sixes: string;
  FWR: string;
  FWS: string;
  Fifties: string;
  Hundreds: string;
  HDR: string;
  Maidens: string;
  MDR: string;
  FSR: string;
  SXR: string;
}


export interface IsocialUserLoginRequest {
  Name: string;
  Email: string;
  Id: string;
}

export interface IsocialUserLoginResponse {
  Data: string;
  StatusCode: string;
  Message: string;
  ErrorCode: string;
}

export interface ILeagueStatsdetails {
  ReturnCode: string;
  LeagueId: number;
  LeagueName: string;
  OAVG: string;
  OVR: string;
  FTName: string;
  FTID: string;
  BTAVG: string,
  BWAVG: string,
  FAVG: string,
}
export interface ILeagueStatsbattingRanking {
  RNR: string;
  SRR: string;
  BDR: string;
  FTR: string;
  HDR: string;
  FSR: string;
  SXR: string;
}
export interface ILeagueStatsbowlRanking {
  DBR: string,
  ECR: string,
  WTR: string,
  TWR: string,
  FWR: string,
  MDR: string
}
export interface ILeagueStatsfeildRanking {
  DSR: string;
}
export interface ILeagueStatsBatting {
  Runs: string,
  SR: string,
  Bds: string,
  Fifties: string,
  Hundreds: string,
  Fours: string,
  Sixes: string,
  Fourties: string,
}
export interface ILeagueStatsBowling {
  DB: string,
  EC: string,
  WT: string,
  TWS: string,
  FWS: string,
  Maidens: string,

}
export interface ILeagueStatsFeilding {
  Ds: string;
}
export interface IpredictionResponse {
  link: string;
  title: string;
  excerpt: string;
  fimg_url: string;
}
export interface IpredictiondetailsResponse {
  link: string;
  title: any;
  excerpt: string;
  fimg_url: string;
  featured_image_src_medium: string;
  content: any;
}
export interface InewsdetailsResponse {
  link: string;
  title: any;
  excerpt: string;
  fimg_url: string;
  featured_image_src_medium: string;
  content: any;
}
export interface IPlayerRequestNew {
  Team: string;
  PlayerType:string;
}
export interface IPlayerResponseNew {
  Data: any[];
  ErrorCode: string;
  Message: string;
  StatusCode: string;
}

export interface IupdatedevideIDRequest {
  DeviceID: string;
  userId:string;
}
export interface IupdatedevideIDResponse {
  Data: any[];
  ErrorCode: string;
  Message: string;
  StatusCode: string;
  isError:string;
}

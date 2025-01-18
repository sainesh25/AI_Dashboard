// Types based on the actual data structure
export interface InsightSummary {
  total_queries: number;
  successful_queries: number;
  failed_queries: number;
  average_response_time: number;
}

export interface CategoryDistribution {
  category: string;
  count: number;
}

export interface DayWiseResponse {
  date: string;
  average_time: number;
}

export interface WeekWiseResponse {
  week: string;
  average_time: number;
}

export interface ResponseTimes {
  day_wise: DayWiseResponse[];
  week_wise: WeekWiseResponse[];
}

export interface Rating {
  rating: number;
  count: number;
}

export interface UserSatisfaction {
  ratings: Rating[];
}

export interface PlatformUsage {
  platform: string;
  users: number;
}

export interface CountryUsage {
  country: string;
  users: number;
}

export interface UsageStatistics {
  by_platform: { [key: string]: number };
  by_country: { [key: string]: number };
}

export interface AIData {
  insight_summary: InsightSummary;
  category_distribution: { [key: string]: number };
  response_times: ResponseTimes;
  user_satisfaction: UserSatisfaction;
  usage_statistics: UsageStatistics;
}
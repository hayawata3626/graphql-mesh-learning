import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type Query = {
  /**
   * Gets availability of featured feed content for the apps by wiki domain.
   *
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   *
   *
   * Equivalent to GET /feed/availability
   */
  getFeedAvailability?: Maybe<Availability>;
  /**
   * Returns the previously-stored formula via `/media/math/check/{type}` for
   * the given hash.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   *
   * Equivalent to GET /media/math/formula/{hash}
   */
  getMediaMathFormulaHash?: Maybe<Scalars['JSON']>;
  /**
   * Given a request hash, renders a TeX formula into its mathematic
   * representation in the given format. When a request is issued to the
   * `/media/math/check/{format}` POST endpoint, the response contains the
   * `x-resource-location` header denoting the hash ID of the POST data. Once
   * obtained, this endpoint has to be used to obtain the actual render.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   *
   * Equivalent to GET /media/math/render/{format}/{hash}
   */
  getMediaMathRenderFormatHash?: Maybe<Scalars['JSON']>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
   * difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
   * name-bot, user) and page-type (all-page-types, content, non-content). You can choose
   * between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/bytes-difference/absolute/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}
   */
  getMetricsBytesDifferenceAbsoluteAggregateProjectEditorTypePageTypeGranularityStartEnd?: Maybe<AbsoluteBytesDifference>;
  /**
   * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
   * difference absolute sums. You can filter by editors-type (all-editor-types, anonymous,
   * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/bytes-difference/absolute/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}
   */
  getMetricsBytesDifferenceAbsolutePerPageProjectPageTitleEditorTypeGranularityStartEnd?: Maybe<AbsoluteBytesDifferencePerPage>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
   * sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
   * user) and page-type (all-page-types, content or non-content). You can choose between
   * daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/bytes-difference/net/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}
   */
  getMetricsBytesDifferenceNetAggregateProjectEditorTypePageTypeGranularityStartEnd?: Maybe<NetBytesDifference>;
  /**
   * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
   * difference net sums. You can filter by editors-type (all-editor-types, anonymous,
   * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/bytes-difference/net/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}
   */
  getMetricsBytesDifferenceNetPerPageProjectPageTitleEditorTypeGranularityStartEnd?: Maybe<NetBytesDifferencePerPage>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
   * You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
   * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
   * 5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
   * granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/edited-pages/aggregate/{project}/{editor-type}/{page-type}/{activity-level}/{granularity}/{start}/{end}
   */
  getMetricsEditedPagesAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd?: Maybe<EditedPages>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
   * You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
   * or page-type (all-page-types, content or non-content). You can choose between daily and
   * monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/edited-pages/new/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}
   */
  getMetricsEditedPagesNewProjectEditorTypePageTypeGranularityStartEnd?: Maybe<NewPages>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * edited-pages by absolute bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/edited-pages/top-by-absolute-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}
   */
  getMetricsEditedPagesTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Maybe<TopEditedPagesByAbsBytesDiff>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
   * 100 edited-pages by edits count. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
   * non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/edited-pages/top-by-edits/{project}/{editor-type}/{page-type}/{year}/{month}/{day}
   */
  getMetricsEditedPagesTopByEditsProjectEditorTypePageTypeYearMonthDay?: Maybe<TopEditedPagesByEdits>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * edited-pages by net bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/edited-pages/top-by-net-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}
   */
  getMetricsEditedPagesTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Maybe<TopEditedPagesByNetBytesDiff>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
   * You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
   * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
   * 5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
   * granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/editors/aggregate/{project}/{editor-type}/{page-type}/{activity-level}/{granularity}/{start}/{end}
   */
  getMetricsEditorsAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd?: Maybe<Editors>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * editors by absolute bytes-difference. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
   * The user_text returned is either the mediawiki user_text if the user is registered, or
   * null if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/editors/top-by-absolute-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}
   */
  getMetricsEditorsTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Maybe<TopEditorsByAbsBytesDiff>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
   * 100 editors by edits count. You can filter by editor-type (all-editor-types,
   * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
   * non-content). The user_text returned is either the mediawiki user_text if the user is
   * registered, or null if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/editors/top-by-edits/{project}/{editor-type}/{page-type}/{year}/{month}/{day}
   */
  getMetricsEditorsTopByEditsProjectEditorTypePageTypeYearMonthDay?: Maybe<TopEditorsByEdits>;
  /**
   * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
   * editors by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
   * group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The
   * user_text returned is either the mediawiki user_text if the user is registered, or
   * "Anonymous Editor" if user is anonymous.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/editors/top-by-net-bytes-difference/{project}/{editor-type}/{page-type}/{year}/{month}/{day}
   */
  getMetricsEditorsTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Maybe<TopEditorsByNetBytesDiff>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of edits counts.
   * You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
   * page-type (all-page-types, content or non-content). You can choose between daily and
   * monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/edits/aggregate/{project}/{editor-type}/{page-type}/{granularity}/{start}/{end}
   */
  getMetricsEditsAggregateProjectEditorTypePageTypeGranularityStartEnd?: Maybe<MetricsEditsAggregate>;
  /**
   * Given a Mediawiki project, a page-title prefixed with its canonical namespace (for
   * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of edit counts.
   * You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot, user).
   * You can choose between daily and monthly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/edits/per-page/{project}/{page-title}/{editor-type}/{granularity}/{start}/{end}
   */
  getMetricsEditsPerPageProjectPageTitleEditorTypeGranularityStartEnd?: Maybe<EditsPerPage>;
  /**
   * Given a project and a date range, returns a timeseries of pagecounts.
   * You can filter by access site (mobile or desktop) and you can choose between monthly,
   * daily and hourly granularity as well.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/legacy/pagecounts/aggregate/{project}/{access-site}/{granularity}/{start}/{end}
   */
  getMetricsLegacyPagecountsAggregateProjectAccessSiteGranularityStartEnd?: Maybe<PagecountsProject>;
  /**
   * Given a date range, returns a timeseries of pageview counts. You can filter by project,
   * access method and/or agent type. You can choose between daily and hourly granularity
   * as well.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/pageviews/aggregate/{project}/{access}/{agent}/{granularity}/{start}/{end}
   */
  getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd?: Maybe<PageviewProject>;
  /**
   * Given a Mediawiki article and a date range, returns a daily timeseries of its pageview
   * counts. You can also filter by access method and/or agent type.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/pageviews/per-article/{project}/{access}/{agent}/{article}/{granularity}/{start}/{end}
   */
  getMetricsPageviewsPerArticleProjectAccessAgentArticleGranularityStartEnd?: Maybe<PageviewArticle>;
  /**
   * Lists the pageviews to this project, split by country of origin for a given month.
   * Because of privacy reasons, pageviews are given in a bucketed format, and countries
   * with less than 100 views do not get reported.
   * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/pageviews/top-by-country/{project}/{access}/{year}/{month}
   */
  getMetricsPageviewsTopByCountryProjectAccessYearMonth?: Maybe<ByCountry>;
  /**
   * Lists the 1000 most viewed articles for a given project and timespan (month or day).
   * You can filter by access method.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/pageviews/top/{project}/{access}/{year}/{month}/{day}
   */
  getMetricsPageviewsTopProjectAccessYearMonthDay?: Maybe<PageviewTops>;
  /**
   * Given a Mediawiki project and a date range, returns a timeseries of its newly registered
   * users counts. You can choose between daily and monthly granularity. The newly registered
   * users value is computed with self-created users only, not auto-login created ones.
   *
   * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
   * - Rate limit: 25 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/registered-users/new/{project}/{granularity}/{start}/{end}
   */
  getMetricsRegisteredUsersNewProjectGranularityStartEnd?: Maybe<NewRegisteredUsers>;
  /**
   * Given a project and a date range, returns a timeseries of unique devices counts.
   * You need to specify a project, and can filter by accessed site (mobile or desktop).
   * You can choose between daily and hourly granularity as well.
   *
   * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
   * - Rate limit: 100 req/s
   * - License: Data accessible via this endpoint is available under the
   *   [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
   *
   *
   * Equivalent to GET /metrics/unique-devices/{project}/{access-site}/{granularity}/{start}/{end}
   */
  getMetricsUniqueDevicesProjectAccessSiteGranularityStartEnd?: Maybe<UniqueDevices>;
  /**
   * Fetches the list of language pairs the back-end service can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to GET /transform/list/languagepairs/
   */
  getTransformListLanguagepairs?: Maybe<CxLanguagepairs>;
  /**
   * Fetches the list of tools that are available for the given pair of languages.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to GET /transform/list/pair/{from}/{to}/
   */
  getTransformListPairFromTo?: Maybe<CxListTools>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to GET /transform/list/tool/{tool}
   */
  getTransformListToolTool?: Maybe<Scalars['JSON']>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to GET /transform/list/tool/{tool}/{from}
   */
  getTransformListToolToolFrom?: Maybe<Scalars['JSON']>;
  /**
   * Fetches the list of tools and all of the language pairs it can translate
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to GET /transform/list/tool/{tool}/{from}/{to}
   */
  getTransformListToolToolFromTo?: Maybe<Scalars['JSON']>;
  /**
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to GET /transform/word/from/{from_lang}/to/{to_lang}/{word}
   */
  getTransformWordFromFromLangToToLangWord?: Maybe<CxDict>;
  /**
   * Fetches the dictionary meaning of a word from a language and displays
   * it in the target language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to GET /transform/word/from/{from_lang}/to/{to_lang}/{word}/{provider}
   */
  getTransformWordFromFromLangToToLangWordProvider?: Maybe<CxDict>;
  viewsInPastMonth: Scalars['Float'];
};


export type QueryGetMediaMathFormulaHashArgs = {
  hash: Scalars['String'];
};


export type QueryGetMediaMathRenderFormatHashArgs = {
  format: Format;
  hash: Scalars['String'];
};


export type QueryGetMetricsBytesDifferenceAbsoluteAggregateProjectEditorTypePageTypeGranularityStartEndArgs = {
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageType: PageType13;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsBytesDifferenceAbsolutePerPageProjectPageTitleEditorTypeGranularityStartEndArgs = {
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageTitle: Scalars['String'];
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsBytesDifferenceNetAggregateProjectEditorTypePageTypeGranularityStartEndArgs = {
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageType: PageType13;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsBytesDifferenceNetPerPageProjectPageTitleEditorTypeGranularityStartEndArgs = {
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageTitle: Scalars['String'];
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsEditedPagesAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEndArgs = {
  activityLevel: ActivityLevel3;
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageType: PageType13;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsEditedPagesNewProjectEditorTypePageTypeGranularityStartEndArgs = {
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageType: PageType13;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsEditedPagesTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs = {
  day: Scalars['String'];
  editorType: EditorType16;
  month: Scalars['String'];
  pageType: PageType13;
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsEditedPagesTopByEditsProjectEditorTypePageTypeYearMonthDayArgs = {
  day: Scalars['String'];
  editorType: EditorType16;
  month: Scalars['String'];
  pageType: PageType13;
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsEditedPagesTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs = {
  day: Scalars['String'];
  editorType: EditorType16;
  month: Scalars['String'];
  pageType: PageType13;
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsEditorsAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEndArgs = {
  activityLevel: ActivityLevel3;
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageType: PageType13;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsEditorsTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs = {
  day: Scalars['String'];
  editorType: EditorType16;
  month: Scalars['String'];
  pageType: PageType13;
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsEditorsTopByEditsProjectEditorTypePageTypeYearMonthDayArgs = {
  day: Scalars['String'];
  editorType: EditorType16;
  month: Scalars['String'];
  pageType: PageType13;
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsEditorsTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs = {
  day: Scalars['String'];
  editorType: EditorType16;
  month: Scalars['String'];
  pageType: PageType13;
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsEditsAggregateProjectEditorTypePageTypeGranularityStartEndArgs = {
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageType: PageType13;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsEditsPerPageProjectPageTitleEditorTypeGranularityStartEndArgs = {
  editorType: EditorType16;
  end: Scalars['String'];
  granularity: Granularity21;
  pageTitle: Scalars['String'];
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsLegacyPagecountsAggregateProjectAccessSiteGranularityStartEndArgs = {
  accessSite: AccessSite3;
  end: Scalars['String'];
  granularity: Granularity22;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsPageviewsAggregateProjectAccessAgentGranularityStartEndArgs = {
  access: Access5;
  agent: Agent3;
  end: Scalars['String'];
  granularity: Granularity22;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsPageviewsPerArticleProjectAccessAgentArticleGranularityStartEndArgs = {
  access: Access5;
  agent: Agent4;
  article: Scalars['String'];
  end: Scalars['String'];
  granularity: Granularity21;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsPageviewsTopByCountryProjectAccessYearMonthArgs = {
  access: Access5;
  month: Scalars['String'];
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsPageviewsTopProjectAccessYearMonthDayArgs = {
  access: Access5;
  day: Scalars['String'];
  month: Scalars['String'];
  project: Scalars['String'];
  year: Scalars['String'];
};


export type QueryGetMetricsRegisteredUsersNewProjectGranularityStartEndArgs = {
  end: Scalars['String'];
  granularity: Granularity21;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetMetricsUniqueDevicesProjectAccessSiteGranularityStartEndArgs = {
  accessSite: AccessSite3;
  end: Scalars['String'];
  granularity: Granularity21;
  project: Scalars['String'];
  start: Scalars['String'];
};


export type QueryGetTransformListPairFromToArgs = {
  from: Scalars['String'];
  to: Scalars['String'];
};


export type QueryGetTransformListToolToolArgs = {
  tool: Tool;
};


export type QueryGetTransformListToolToolFromArgs = {
  from: Scalars['String'];
  tool: Tool;
};


export type QueryGetTransformListToolToolFromToArgs = {
  from: Scalars['String'];
  to: Scalars['String'];
  tool: Tool;
};


export type QueryGetTransformWordFromFromLangToToLangWordArgs = {
  fromLang: Scalars['String'];
  toLang: Scalars['String'];
  word: Scalars['String'];
};


export type QueryGetTransformWordFromFromLangToToLangWordProviderArgs = {
  fromLang: Scalars['String'];
  provider: Provider2;
  toLang: Scalars['String'];
  word: Scalars['String'];
};


export type QueryViewsInPastMonthArgs = {
  project: Scalars['String'];
};

export type Availability = {
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  inTheNews: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  mostRead: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  onThisDay: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  pictureOfTheDay: Array<Maybe<Scalars['String']>>;
  /** domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project */
  todaysFeaturedArticle: Array<Maybe<Scalars['String']>>;
};


export enum Format {
  SVG = 'svg',
  MML = 'mml',
  PNG = 'png'
}

export type AbsoluteBytesDifference = {
  items?: Maybe<Array<Maybe<ItemsListItem>>>;
};

export type ItemsListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<ResultsListItem>>>;
};

export type ResultsListItem = {
  absBytesDiff?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
};

export enum EditorType16 {
  ALL_EDITOR_TYPES = 'all-editor-types',
  ANONYMOUS = 'anonymous',
  GROUP_BOT = 'group-bot',
  NAME_BOT = 'name-bot',
  USER = 'user'
}

export enum Granularity21 {
  DAILY = 'daily',
  MONTHLY = 'monthly'
}

export enum PageType13 {
  ALL_PAGE_TYPES = 'all-page-types',
  CONTENT = 'content',
  NON_CONTENT = 'non-content'
}

export type AbsoluteBytesDifferencePerPage = {
  items?: Maybe<Array<Maybe<Items2ListItem>>>;
};

export type Items2ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<ResultsListItem>>>;
};

export type NetBytesDifference = {
  items?: Maybe<Array<Maybe<Items3ListItem>>>;
};

export type Items3ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results2ListItem>>>;
};

export type Results2ListItem = {
  netBytesDiff?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type NetBytesDifferencePerPage = {
  items?: Maybe<Array<Maybe<Items4ListItem>>>;
};

export type Items4ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results2ListItem>>>;
};

export type EditedPages = {
  items?: Maybe<Array<Maybe<Items5ListItem>>>;
};

export type Items5ListItem = {
  activityLevel?: Maybe<Scalars['String']>;
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results3ListItem>>>;
};

export type Results3ListItem = {
  editedPages?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

export enum ActivityLevel3 {
  ALL_ACTIVITY_LEVELS = 'all-activity-levels',
  _1__4_EDITS = '1..4-edits',
  _5__24_EDITS = '5..24-edits',
  _25__99_EDITS = '25..99-edits',
  _100___EDITS = '100..-edits'
}

export type NewPages = {
  items?: Maybe<Array<Maybe<Items6ListItem>>>;
};

export type Items6ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results4ListItem>>>;
};

export type Results4ListItem = {
  newPages?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type TopEditedPagesByAbsBytesDiff = {
  items?: Maybe<Array<Maybe<Items7ListItem>>>;
};

export type Items7ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results5ListItem>>>;
};

export type Results5ListItem = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<TopListItem>>>;
};

export type TopListItem = {
  absBytesDiff?: Maybe<Scalars['Float']>;
  pageTitle2?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

export type TopEditedPagesByEdits = {
  items?: Maybe<Array<Maybe<Items8ListItem>>>;
};

export type Items8ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results6ListItem>>>;
};

export type Results6ListItem = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<Top2ListItem>>>;
};

export type Top2ListItem = {
  edits?: Maybe<Scalars['Float']>;
  pageTitle3?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

export type TopEditedPagesByNetBytesDiff = {
  items?: Maybe<Array<Maybe<Items9ListItem>>>;
};

export type Items9ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results7ListItem>>>;
};

export type Results7ListItem = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<Top3ListItem>>>;
};

export type Top3ListItem = {
  netBytesDiff?: Maybe<Scalars['Float']>;
  pageTitle4?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

export type Editors = {
  items?: Maybe<Array<Maybe<Items10ListItem>>>;
};

export type Items10ListItem = {
  activityLevel?: Maybe<Scalars['String']>;
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results8ListItem>>>;
};

export type Results8ListItem = {
  editors?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type TopEditorsByAbsBytesDiff = {
  items?: Maybe<Array<Maybe<Items11ListItem>>>;
};

export type Items11ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results9ListItem>>>;
};

export type Results9ListItem = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<Top4ListItem>>>;
};

export type Top4ListItem = {
  absBytesDiff?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Int']>;
  userText?: Maybe<Scalars['String']>;
};

export type TopEditorsByEdits = {
  items?: Maybe<Array<Maybe<Items12ListItem>>>;
};

export type Items12ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results10ListItem>>>;
};

export type Results10ListItem = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<Top5ListItem>>>;
};

export type Top5ListItem = {
  edits?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Int']>;
  userText?: Maybe<Scalars['String']>;
};

export type TopEditorsByNetBytesDiff = {
  items?: Maybe<Array<Maybe<Items13ListItem>>>;
};

export type Items13ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results11ListItem>>>;
};

export type Results11ListItem = {
  timestamp?: Maybe<Scalars['String']>;
  top?: Maybe<Array<Maybe<Top6ListItem>>>;
};

export type Top6ListItem = {
  netBytesDiff?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Int']>;
  userText?: Maybe<Scalars['String']>;
};

export type MetricsEditsAggregate = {
  items?: Maybe<Array<Maybe<Items14ListItem>>>;
};

export type Items14ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results12ListItem>>>;
};

export type Results12ListItem = {
  edits?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type EditsPerPage = {
  items?: Maybe<Array<Maybe<Items15ListItem>>>;
};

export type Items15ListItem = {
  editorType?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results12ListItem>>>;
};

export type PagecountsProject = {
  items?: Maybe<Array<Maybe<Items16ListItem>>>;
};

export type Items16ListItem = {
  accessSite?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Float']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

export enum AccessSite3 {
  ALL_SITES = 'all-sites',
  DESKTOP_SITE = 'desktop-site',
  MOBILE_SITE = 'mobile-site'
}

export enum Granularity22 {
  HOURLY = 'hourly',
  DAILY = 'daily',
  MONTHLY = 'monthly'
}

export type PageviewProject = {
  items?: Maybe<Array<Maybe<Items17ListItem>>>;
};

export type Items17ListItem = {
  access?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Float']>;
};

export enum Access5 {
  ALL_ACCESS = 'all-access',
  DESKTOP = 'desktop',
  MOBILE_APP = 'mobile-app',
  MOBILE_WEB = 'mobile-web'
}

export enum Agent3 {
  ALL_AGENTS = 'all-agents',
  USER = 'user',
  SPIDER = 'spider'
}

export type PageviewArticle = {
  items?: Maybe<Array<Maybe<Items18ListItem>>>;
};

export type Items18ListItem = {
  access?: Maybe<Scalars['String']>;
  agent?: Maybe<Scalars['String']>;
  article?: Maybe<Scalars['String']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Float']>;
};

export enum Agent4 {
  ALL_AGENTS = 'all-agents',
  USER = 'user',
  SPIDER = 'spider',
  BOT = 'bot'
}

export type ByCountry = {
  items?: Maybe<Array<Maybe<Items19ListItem>>>;
};

export type Items19ListItem = {
  access?: Maybe<Scalars['String']>;
  countries?: Maybe<Array<Maybe<CountriesListItem>>>;
  month?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type CountriesListItem = {
  country?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Float']>;
};

export type PageviewTops = {
  items?: Maybe<Array<Maybe<Items20ListItem>>>;
};

export type Items20ListItem = {
  access?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<ArticlesListItem>>>;
  day?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type ArticlesListItem = {
  article?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Float']>;
};

export type NewRegisteredUsers = {
  items?: Maybe<Array<Maybe<Items21ListItem>>>;
};

export type Items21ListItem = {
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Results13ListItem>>>;
};

export type Results13ListItem = {
  newRegisteredUsers?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type UniqueDevices = {
  items?: Maybe<Array<Maybe<Items22ListItem>>>;
};

export type Items22ListItem = {
  accessSite?: Maybe<Scalars['String']>;
  devices?: Maybe<Scalars['Float']>;
  granularity?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
};

export type CxLanguagepairs = {
  /** the list of available source languages */
  source?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** the list of available destination languages */
  target?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CxListTools = {
  /** the list of tools available for the given language pair */
  tools?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Tool {
  MT = 'mt',
  DICTIONARY = 'dictionary'
}

export type CxDict = {
  /** the original word to look up */
  source?: Maybe<Scalars['String']>;
  /** the translations found */
  translations?: Maybe<Array<Maybe<TranslationsListItem>>>;
};

export type TranslationsListItem = {
  /** extra information about the phrase */
  info?: Maybe<Scalars['String']>;
  /** the translated phrase */
  phrase?: Maybe<Scalars['String']>;
  /** the source dictionary used for the translation */
  sources?: Maybe<Scalars['String']>;
};

export enum Provider2 {
  JSONDICT = 'JsonDict',
  DICTD = 'Dictd'
}

export type Mutation = {
  /**
   * Checks the supplied TeX formula for correctness and returns the
   * normalised formula representation as well as information about
   * identifiers. Available types are tex and inline-tex. The response
   * contains the `x-resource-location` header which can be used to retrieve
   * the render of the checked formula in one of the supported rendering
   * formats. Just append the value of the header to `/media/math/{format}/`
   * and perform a GET request against that URL.
   *
   * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
   *
   *
   * Equivalent to POST /media/math/check/{type}
   */
  postMediaMathCheckType?: Maybe<Scalars['JSON']>;
  /**
   * Fetches the machine translation for the posted content from the source
   * to the destination language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to POST /transform/html/from/{from_lang}/to/{to_lang}
   */
  postTransformHtmlFromFromLangToToLang?: Maybe<CxMt>;
  /**
   * Fetches the machine translation for the posted content from the source
   * to the destination language.
   *
   * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
   *
   *
   * Equivalent to POST /transform/html/from/{from_lang}/to/{to_lang}/{provider}
   */
  postTransformHtmlFromFromLangToToLangProvider?: Maybe<CxMt>;
};


export type MutationPostMediaMathCheckTypeArgs = {
  mediaMathCheckInput: MediaMathCheckInput;
  type: Type;
};


export type MutationPostTransformHtmlFromFromLangToToLangArgs = {
  fromLang: Scalars['String'];
  toLang: Scalars['String'];
  transformHtmlFromToInput: TransformHtmlFromToInput;
};


export type MutationPostTransformHtmlFromFromLangToToLangProviderArgs = {
  fromLang: Scalars['String'];
  provider: Provider;
  toLang: Scalars['String'];
  transformHtmlFromToInput: TransformHtmlFromToInput;
};

export type MediaMathCheckInput = {
  /** The formula to check */
  q: Scalars['String'];
};

export enum Type {
  TEX = 'tex',
  INLINE_TEX = 'inline-tex',
  CHEM = 'chem'
}

export type CxMt = {
  /** the translated content */
  contents?: Maybe<Scalars['String']>;
};

export type TransformHtmlFromToInput = {
  /** The HTML content to translate */
  html: Scalars['String'];
};

export enum Provider {
  APERTIUM = 'Apertium',
  YANDEX = 'Yandex',
  YOUDAO = 'Youdao'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Availability: ResolverTypeWrapper<Availability>;
  String: ResolverTypeWrapper<Scalars['String']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Format: Format;
  AbsoluteBytesDifference: ResolverTypeWrapper<AbsoluteBytesDifference>;
  ItemsListItem: ResolverTypeWrapper<ItemsListItem>;
  ResultsListItem: ResolverTypeWrapper<ResultsListItem>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  EditorType16: EditorType16;
  Granularity21: Granularity21;
  PageType13: PageType13;
  AbsoluteBytesDifferencePerPage: ResolverTypeWrapper<AbsoluteBytesDifferencePerPage>;
  Items2ListItem: ResolverTypeWrapper<Items2ListItem>;
  NetBytesDifference: ResolverTypeWrapper<NetBytesDifference>;
  Items3ListItem: ResolverTypeWrapper<Items3ListItem>;
  Results2ListItem: ResolverTypeWrapper<Results2ListItem>;
  NetBytesDifferencePerPage: ResolverTypeWrapper<NetBytesDifferencePerPage>;
  Items4ListItem: ResolverTypeWrapper<Items4ListItem>;
  EditedPages: ResolverTypeWrapper<EditedPages>;
  Items5ListItem: ResolverTypeWrapper<Items5ListItem>;
  Results3ListItem: ResolverTypeWrapper<Results3ListItem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ActivityLevel3: ActivityLevel3;
  NewPages: ResolverTypeWrapper<NewPages>;
  Items6ListItem: ResolverTypeWrapper<Items6ListItem>;
  Results4ListItem: ResolverTypeWrapper<Results4ListItem>;
  TopEditedPagesByAbsBytesDiff: ResolverTypeWrapper<TopEditedPagesByAbsBytesDiff>;
  Items7ListItem: ResolverTypeWrapper<Items7ListItem>;
  Results5ListItem: ResolverTypeWrapper<Results5ListItem>;
  TopListItem: ResolverTypeWrapper<TopListItem>;
  TopEditedPagesByEdits: ResolverTypeWrapper<TopEditedPagesByEdits>;
  Items8ListItem: ResolverTypeWrapper<Items8ListItem>;
  Results6ListItem: ResolverTypeWrapper<Results6ListItem>;
  Top2ListItem: ResolverTypeWrapper<Top2ListItem>;
  TopEditedPagesByNetBytesDiff: ResolverTypeWrapper<TopEditedPagesByNetBytesDiff>;
  Items9ListItem: ResolverTypeWrapper<Items9ListItem>;
  Results7ListItem: ResolverTypeWrapper<Results7ListItem>;
  Top3ListItem: ResolverTypeWrapper<Top3ListItem>;
  Editors: ResolverTypeWrapper<Editors>;
  Items10ListItem: ResolverTypeWrapper<Items10ListItem>;
  Results8ListItem: ResolverTypeWrapper<Results8ListItem>;
  TopEditorsByAbsBytesDiff: ResolverTypeWrapper<TopEditorsByAbsBytesDiff>;
  Items11ListItem: ResolverTypeWrapper<Items11ListItem>;
  Results9ListItem: ResolverTypeWrapper<Results9ListItem>;
  Top4ListItem: ResolverTypeWrapper<Top4ListItem>;
  TopEditorsByEdits: ResolverTypeWrapper<TopEditorsByEdits>;
  Items12ListItem: ResolverTypeWrapper<Items12ListItem>;
  Results10ListItem: ResolverTypeWrapper<Results10ListItem>;
  Top5ListItem: ResolverTypeWrapper<Top5ListItem>;
  TopEditorsByNetBytesDiff: ResolverTypeWrapper<TopEditorsByNetBytesDiff>;
  Items13ListItem: ResolverTypeWrapper<Items13ListItem>;
  Results11ListItem: ResolverTypeWrapper<Results11ListItem>;
  Top6ListItem: ResolverTypeWrapper<Top6ListItem>;
  MetricsEditsAggregate: ResolverTypeWrapper<MetricsEditsAggregate>;
  Items14ListItem: ResolverTypeWrapper<Items14ListItem>;
  Results12ListItem: ResolverTypeWrapper<Results12ListItem>;
  EditsPerPage: ResolverTypeWrapper<EditsPerPage>;
  Items15ListItem: ResolverTypeWrapper<Items15ListItem>;
  PagecountsProject: ResolverTypeWrapper<PagecountsProject>;
  Items16ListItem: ResolverTypeWrapper<Items16ListItem>;
  AccessSite3: AccessSite3;
  Granularity22: Granularity22;
  PageviewProject: ResolverTypeWrapper<PageviewProject>;
  Items17ListItem: ResolverTypeWrapper<Items17ListItem>;
  Access5: Access5;
  Agent3: Agent3;
  PageviewArticle: ResolverTypeWrapper<PageviewArticle>;
  Items18ListItem: ResolverTypeWrapper<Items18ListItem>;
  Agent4: Agent4;
  ByCountry: ResolverTypeWrapper<ByCountry>;
  Items19ListItem: ResolverTypeWrapper<Items19ListItem>;
  CountriesListItem: ResolverTypeWrapper<CountriesListItem>;
  PageviewTops: ResolverTypeWrapper<PageviewTops>;
  Items20ListItem: ResolverTypeWrapper<Items20ListItem>;
  ArticlesListItem: ResolverTypeWrapper<ArticlesListItem>;
  NewRegisteredUsers: ResolverTypeWrapper<NewRegisteredUsers>;
  Items21ListItem: ResolverTypeWrapper<Items21ListItem>;
  Results13ListItem: ResolverTypeWrapper<Results13ListItem>;
  UniqueDevices: ResolverTypeWrapper<UniqueDevices>;
  Items22ListItem: ResolverTypeWrapper<Items22ListItem>;
  CxLanguagepairs: ResolverTypeWrapper<CxLanguagepairs>;
  CxListTools: ResolverTypeWrapper<CxListTools>;
  Tool: Tool;
  CxDict: ResolverTypeWrapper<CxDict>;
  TranslationsListItem: ResolverTypeWrapper<TranslationsListItem>;
  Provider2: Provider2;
  Mutation: ResolverTypeWrapper<{}>;
  MediaMathCheckInput: MediaMathCheckInput;
  Type: Type;
  CxMt: ResolverTypeWrapper<CxMt>;
  TransformHtmlFromToInput: TransformHtmlFromToInput;
  Provider: Provider;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Availability: Availability;
  String: Scalars['String'];
  JSON: Scalars['JSON'];
  AbsoluteBytesDifference: AbsoluteBytesDifference;
  ItemsListItem: ItemsListItem;
  ResultsListItem: ResultsListItem;
  Float: Scalars['Float'];
  AbsoluteBytesDifferencePerPage: AbsoluteBytesDifferencePerPage;
  Items2ListItem: Items2ListItem;
  NetBytesDifference: NetBytesDifference;
  Items3ListItem: Items3ListItem;
  Results2ListItem: Results2ListItem;
  NetBytesDifferencePerPage: NetBytesDifferencePerPage;
  Items4ListItem: Items4ListItem;
  EditedPages: EditedPages;
  Items5ListItem: Items5ListItem;
  Results3ListItem: Results3ListItem;
  Int: Scalars['Int'];
  NewPages: NewPages;
  Items6ListItem: Items6ListItem;
  Results4ListItem: Results4ListItem;
  TopEditedPagesByAbsBytesDiff: TopEditedPagesByAbsBytesDiff;
  Items7ListItem: Items7ListItem;
  Results5ListItem: Results5ListItem;
  TopListItem: TopListItem;
  TopEditedPagesByEdits: TopEditedPagesByEdits;
  Items8ListItem: Items8ListItem;
  Results6ListItem: Results6ListItem;
  Top2ListItem: Top2ListItem;
  TopEditedPagesByNetBytesDiff: TopEditedPagesByNetBytesDiff;
  Items9ListItem: Items9ListItem;
  Results7ListItem: Results7ListItem;
  Top3ListItem: Top3ListItem;
  Editors: Editors;
  Items10ListItem: Items10ListItem;
  Results8ListItem: Results8ListItem;
  TopEditorsByAbsBytesDiff: TopEditorsByAbsBytesDiff;
  Items11ListItem: Items11ListItem;
  Results9ListItem: Results9ListItem;
  Top4ListItem: Top4ListItem;
  TopEditorsByEdits: TopEditorsByEdits;
  Items12ListItem: Items12ListItem;
  Results10ListItem: Results10ListItem;
  Top5ListItem: Top5ListItem;
  TopEditorsByNetBytesDiff: TopEditorsByNetBytesDiff;
  Items13ListItem: Items13ListItem;
  Results11ListItem: Results11ListItem;
  Top6ListItem: Top6ListItem;
  MetricsEditsAggregate: MetricsEditsAggregate;
  Items14ListItem: Items14ListItem;
  Results12ListItem: Results12ListItem;
  EditsPerPage: EditsPerPage;
  Items15ListItem: Items15ListItem;
  PagecountsProject: PagecountsProject;
  Items16ListItem: Items16ListItem;
  PageviewProject: PageviewProject;
  Items17ListItem: Items17ListItem;
  PageviewArticle: PageviewArticle;
  Items18ListItem: Items18ListItem;
  ByCountry: ByCountry;
  Items19ListItem: Items19ListItem;
  CountriesListItem: CountriesListItem;
  PageviewTops: PageviewTops;
  Items20ListItem: Items20ListItem;
  ArticlesListItem: ArticlesListItem;
  NewRegisteredUsers: NewRegisteredUsers;
  Items21ListItem: Items21ListItem;
  Results13ListItem: Results13ListItem;
  UniqueDevices: UniqueDevices;
  Items22ListItem: Items22ListItem;
  CxLanguagepairs: CxLanguagepairs;
  CxListTools: CxListTools;
  CxDict: CxDict;
  TranslationsListItem: TranslationsListItem;
  Mutation: {};
  MediaMathCheckInput: MediaMathCheckInput;
  CxMt: CxMt;
  TransformHtmlFromToInput: TransformHtmlFromToInput;
  Boolean: Scalars['Boolean'];
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getFeedAvailability?: Resolver<Maybe<ResolversTypes['Availability']>, ParentType, ContextType>;
  getMediaMathFormulaHash?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetMediaMathFormulaHashArgs, 'hash'>>;
  getMediaMathRenderFormatHash?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetMediaMathRenderFormatHashArgs, 'format' | 'hash'>>;
  getMetricsBytesDifferenceAbsoluteAggregateProjectEditorTypePageTypeGranularityStartEnd?: Resolver<Maybe<ResolversTypes['AbsoluteBytesDifference']>, ParentType, ContextType, RequireFields<QueryGetMetricsBytesDifferenceAbsoluteAggregateProjectEditorTypePageTypeGranularityStartEndArgs, 'editorType' | 'end' | 'granularity' | 'pageType' | 'project' | 'start'>>;
  getMetricsBytesDifferenceAbsolutePerPageProjectPageTitleEditorTypeGranularityStartEnd?: Resolver<Maybe<ResolversTypes['AbsoluteBytesDifferencePerPage']>, ParentType, ContextType, RequireFields<QueryGetMetricsBytesDifferenceAbsolutePerPageProjectPageTitleEditorTypeGranularityStartEndArgs, 'editorType' | 'end' | 'granularity' | 'pageTitle' | 'project' | 'start'>>;
  getMetricsBytesDifferenceNetAggregateProjectEditorTypePageTypeGranularityStartEnd?: Resolver<Maybe<ResolversTypes['NetBytesDifference']>, ParentType, ContextType, RequireFields<QueryGetMetricsBytesDifferenceNetAggregateProjectEditorTypePageTypeGranularityStartEndArgs, 'editorType' | 'end' | 'granularity' | 'pageType' | 'project' | 'start'>>;
  getMetricsBytesDifferenceNetPerPageProjectPageTitleEditorTypeGranularityStartEnd?: Resolver<Maybe<ResolversTypes['NetBytesDifferencePerPage']>, ParentType, ContextType, RequireFields<QueryGetMetricsBytesDifferenceNetPerPageProjectPageTitleEditorTypeGranularityStartEndArgs, 'editorType' | 'end' | 'granularity' | 'pageTitle' | 'project' | 'start'>>;
  getMetricsEditedPagesAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd?: Resolver<Maybe<ResolversTypes['EditedPages']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditedPagesAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEndArgs, 'activityLevel' | 'editorType' | 'end' | 'granularity' | 'pageType' | 'project' | 'start'>>;
  getMetricsEditedPagesNewProjectEditorTypePageTypeGranularityStartEnd?: Resolver<Maybe<ResolversTypes['NewPages']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditedPagesNewProjectEditorTypePageTypeGranularityStartEndArgs, 'editorType' | 'end' | 'granularity' | 'pageType' | 'project' | 'start'>>;
  getMetricsEditedPagesTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Resolver<Maybe<ResolversTypes['TopEditedPagesByAbsBytesDiff']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditedPagesTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, 'day' | 'editorType' | 'month' | 'pageType' | 'project' | 'year'>>;
  getMetricsEditedPagesTopByEditsProjectEditorTypePageTypeYearMonthDay?: Resolver<Maybe<ResolversTypes['TopEditedPagesByEdits']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditedPagesTopByEditsProjectEditorTypePageTypeYearMonthDayArgs, 'day' | 'editorType' | 'month' | 'pageType' | 'project' | 'year'>>;
  getMetricsEditedPagesTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Resolver<Maybe<ResolversTypes['TopEditedPagesByNetBytesDiff']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditedPagesTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, 'day' | 'editorType' | 'month' | 'pageType' | 'project' | 'year'>>;
  getMetricsEditorsAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd?: Resolver<Maybe<ResolversTypes['Editors']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditorsAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEndArgs, 'activityLevel' | 'editorType' | 'end' | 'granularity' | 'pageType' | 'project' | 'start'>>;
  getMetricsEditorsTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Resolver<Maybe<ResolversTypes['TopEditorsByAbsBytesDiff']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditorsTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, 'day' | 'editorType' | 'month' | 'pageType' | 'project' | 'year'>>;
  getMetricsEditorsTopByEditsProjectEditorTypePageTypeYearMonthDay?: Resolver<Maybe<ResolversTypes['TopEditorsByEdits']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditorsTopByEditsProjectEditorTypePageTypeYearMonthDayArgs, 'day' | 'editorType' | 'month' | 'pageType' | 'project' | 'year'>>;
  getMetricsEditorsTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay?: Resolver<Maybe<ResolversTypes['TopEditorsByNetBytesDiff']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditorsTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, 'day' | 'editorType' | 'month' | 'pageType' | 'project' | 'year'>>;
  getMetricsEditsAggregateProjectEditorTypePageTypeGranularityStartEnd?: Resolver<Maybe<ResolversTypes['MetricsEditsAggregate']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditsAggregateProjectEditorTypePageTypeGranularityStartEndArgs, 'editorType' | 'end' | 'granularity' | 'pageType' | 'project' | 'start'>>;
  getMetricsEditsPerPageProjectPageTitleEditorTypeGranularityStartEnd?: Resolver<Maybe<ResolversTypes['EditsPerPage']>, ParentType, ContextType, RequireFields<QueryGetMetricsEditsPerPageProjectPageTitleEditorTypeGranularityStartEndArgs, 'editorType' | 'end' | 'granularity' | 'pageTitle' | 'project' | 'start'>>;
  getMetricsLegacyPagecountsAggregateProjectAccessSiteGranularityStartEnd?: Resolver<Maybe<ResolversTypes['PagecountsProject']>, ParentType, ContextType, RequireFields<QueryGetMetricsLegacyPagecountsAggregateProjectAccessSiteGranularityStartEndArgs, 'accessSite' | 'end' | 'granularity' | 'project' | 'start'>>;
  getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd?: Resolver<Maybe<ResolversTypes['PageviewProject']>, ParentType, ContextType, RequireFields<QueryGetMetricsPageviewsAggregateProjectAccessAgentGranularityStartEndArgs, 'access' | 'agent' | 'end' | 'granularity' | 'project' | 'start'>>;
  getMetricsPageviewsPerArticleProjectAccessAgentArticleGranularityStartEnd?: Resolver<Maybe<ResolversTypes['PageviewArticle']>, ParentType, ContextType, RequireFields<QueryGetMetricsPageviewsPerArticleProjectAccessAgentArticleGranularityStartEndArgs, 'access' | 'agent' | 'article' | 'end' | 'granularity' | 'project' | 'start'>>;
  getMetricsPageviewsTopByCountryProjectAccessYearMonth?: Resolver<Maybe<ResolversTypes['ByCountry']>, ParentType, ContextType, RequireFields<QueryGetMetricsPageviewsTopByCountryProjectAccessYearMonthArgs, 'access' | 'month' | 'project' | 'year'>>;
  getMetricsPageviewsTopProjectAccessYearMonthDay?: Resolver<Maybe<ResolversTypes['PageviewTops']>, ParentType, ContextType, RequireFields<QueryGetMetricsPageviewsTopProjectAccessYearMonthDayArgs, 'access' | 'day' | 'month' | 'project' | 'year'>>;
  getMetricsRegisteredUsersNewProjectGranularityStartEnd?: Resolver<Maybe<ResolversTypes['NewRegisteredUsers']>, ParentType, ContextType, RequireFields<QueryGetMetricsRegisteredUsersNewProjectGranularityStartEndArgs, 'end' | 'granularity' | 'project' | 'start'>>;
  getMetricsUniqueDevicesProjectAccessSiteGranularityStartEnd?: Resolver<Maybe<ResolversTypes['UniqueDevices']>, ParentType, ContextType, RequireFields<QueryGetMetricsUniqueDevicesProjectAccessSiteGranularityStartEndArgs, 'accessSite' | 'end' | 'granularity' | 'project' | 'start'>>;
  getTransformListLanguagepairs?: Resolver<Maybe<ResolversTypes['CxLanguagepairs']>, ParentType, ContextType>;
  getTransformListPairFromTo?: Resolver<Maybe<ResolversTypes['CxListTools']>, ParentType, ContextType, RequireFields<QueryGetTransformListPairFromToArgs, 'from' | 'to'>>;
  getTransformListToolTool?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetTransformListToolToolArgs, 'tool'>>;
  getTransformListToolToolFrom?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetTransformListToolToolFromArgs, 'from' | 'tool'>>;
  getTransformListToolToolFromTo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<QueryGetTransformListToolToolFromToArgs, 'from' | 'to' | 'tool'>>;
  getTransformWordFromFromLangToToLangWord?: Resolver<Maybe<ResolversTypes['CxDict']>, ParentType, ContextType, RequireFields<QueryGetTransformWordFromFromLangToToLangWordArgs, 'fromLang' | 'toLang' | 'word'>>;
  getTransformWordFromFromLangToToLangWordProvider?: Resolver<Maybe<ResolversTypes['CxDict']>, ParentType, ContextType, RequireFields<QueryGetTransformWordFromFromLangToToLangWordProviderArgs, 'fromLang' | 'provider' | 'toLang' | 'word'>>;
  viewsInPastMonth?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<QueryViewsInPastMonthArgs, 'project'>>;
}>;

export type AvailabilityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Availability'] = ResolversParentTypes['Availability']> = ResolversObject<{
  inTheNews?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  mostRead?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  onThisDay?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  pictureOfTheDay?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  todaysFeaturedArticle?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type FormatResolvers = { SVG: 'svg', MML: 'mml', PNG: 'png' };

export type AbsoluteBytesDifferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AbsoluteBytesDifference'] = ResolversParentTypes['AbsoluteBytesDifference']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemsListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ItemsListItem'] = ResolversParentTypes['ItemsListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResultsListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResultsListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResultsListItem'] = ResolversParentTypes['ResultsListItem']> = ResolversObject<{
  absBytesDiff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditorType16Resolvers = { ALL_EDITOR_TYPES: 'all-editor-types', ANONYMOUS: 'anonymous', GROUP_BOT: 'group-bot', NAME_BOT: 'name-bot', USER: 'user' };

export type Granularity21Resolvers = { DAILY: 'daily', MONTHLY: 'monthly' };

export type PageType13Resolvers = { ALL_PAGE_TYPES: 'all-page-types', CONTENT: 'content', NON_CONTENT: 'non-content' };

export type AbsoluteBytesDifferencePerPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AbsoluteBytesDifferencePerPage'] = ResolversParentTypes['AbsoluteBytesDifferencePerPage']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items2ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items2ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items2ListItem'] = ResolversParentTypes['Items2ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResultsListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NetBytesDifferenceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NetBytesDifference'] = ResolversParentTypes['NetBytesDifference']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items3ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items3ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items3ListItem'] = ResolversParentTypes['Items3ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results2ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results2ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results2ListItem'] = ResolversParentTypes['Results2ListItem']> = ResolversObject<{
  netBytesDiff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NetBytesDifferencePerPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NetBytesDifferencePerPage'] = ResolversParentTypes['NetBytesDifferencePerPage']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items4ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items4ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items4ListItem'] = ResolversParentTypes['Items4ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results2ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditedPagesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EditedPages'] = ResolversParentTypes['EditedPages']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items5ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items5ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items5ListItem'] = ResolversParentTypes['Items5ListItem']> = ResolversObject<{
  activityLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results3ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results3ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results3ListItem'] = ResolversParentTypes['Results3ListItem']> = ResolversObject<{
  editedPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityLevel3Resolvers = { ALL_ACTIVITY_LEVELS: 'all-activity-levels', _1__4_EDITS: '1..4-edits', _5__24_EDITS: '5..24-edits', _25__99_EDITS: '25..99-edits', _100___EDITS: '100..-edits' };

export type NewPagesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewPages'] = ResolversParentTypes['NewPages']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items6ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items6ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items6ListItem'] = ResolversParentTypes['Items6ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results4ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results4ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results4ListItem'] = ResolversParentTypes['Results4ListItem']> = ResolversObject<{
  newPages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopEditedPagesByAbsBytesDiffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopEditedPagesByAbsBytesDiff'] = ResolversParentTypes['TopEditedPagesByAbsBytesDiff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items7ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items7ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items7ListItem'] = ResolversParentTypes['Items7ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results5ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results5ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results5ListItem'] = ResolversParentTypes['Results5ListItem']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['TopListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopListItem'] = ResolversParentTypes['TopListItem']> = ResolversObject<{
  absBytesDiff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pageTitle2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopEditedPagesByEditsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopEditedPagesByEdits'] = ResolversParentTypes['TopEditedPagesByEdits']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items8ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items8ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items8ListItem'] = ResolversParentTypes['Items8ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results6ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results6ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results6ListItem'] = ResolversParentTypes['Results6ListItem']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['Top2ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Top2ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Top2ListItem'] = ResolversParentTypes['Top2ListItem']> = ResolversObject<{
  edits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pageTitle3?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopEditedPagesByNetBytesDiffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopEditedPagesByNetBytesDiff'] = ResolversParentTypes['TopEditedPagesByNetBytesDiff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items9ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items9ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items9ListItem'] = ResolversParentTypes['Items9ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results7ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results7ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results7ListItem'] = ResolversParentTypes['Results7ListItem']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['Top3ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Top3ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Top3ListItem'] = ResolversParentTypes['Top3ListItem']> = ResolversObject<{
  netBytesDiff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  pageTitle4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditorsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Editors'] = ResolversParentTypes['Editors']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items10ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items10ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items10ListItem'] = ResolversParentTypes['Items10ListItem']> = ResolversObject<{
  activityLevel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results8ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results8ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results8ListItem'] = ResolversParentTypes['Results8ListItem']> = ResolversObject<{
  editors?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopEditorsByAbsBytesDiffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopEditorsByAbsBytesDiff'] = ResolversParentTypes['TopEditorsByAbsBytesDiff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items11ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items11ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items11ListItem'] = ResolversParentTypes['Items11ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results9ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results9ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results9ListItem'] = ResolversParentTypes['Results9ListItem']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['Top4ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Top4ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Top4ListItem'] = ResolversParentTypes['Top4ListItem']> = ResolversObject<{
  absBytesDiff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopEditorsByEditsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopEditorsByEdits'] = ResolversParentTypes['TopEditorsByEdits']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items12ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items12ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items12ListItem'] = ResolversParentTypes['Items12ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results10ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results10ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results10ListItem'] = ResolversParentTypes['Results10ListItem']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['Top5ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Top5ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Top5ListItem'] = ResolversParentTypes['Top5ListItem']> = ResolversObject<{
  edits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopEditorsByNetBytesDiffResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TopEditorsByNetBytesDiff'] = ResolversParentTypes['TopEditorsByNetBytesDiff']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items13ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items13ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items13ListItem'] = ResolversParentTypes['Items13ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results11ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results11ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results11ListItem'] = ResolversParentTypes['Results11ListItem']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  top?: Resolver<Maybe<Array<Maybe<ResolversTypes['Top6ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Top6ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Top6ListItem'] = ResolversParentTypes['Top6ListItem']> = ResolversObject<{
  netBytesDiff?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetricsEditsAggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MetricsEditsAggregate'] = ResolversParentTypes['MetricsEditsAggregate']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items14ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items14ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items14ListItem'] = ResolversParentTypes['Items14ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results12ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results12ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results12ListItem'] = ResolversParentTypes['Results12ListItem']> = ResolversObject<{
  edits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EditsPerPageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['EditsPerPage'] = ResolversParentTypes['EditsPerPage']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items15ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items15ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items15ListItem'] = ResolversParentTypes['Items15ListItem']> = ResolversObject<{
  editorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results12ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PagecountsProjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PagecountsProject'] = ResolversParentTypes['PagecountsProject']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items16ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items16ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items16ListItem'] = ResolversParentTypes['Items16ListItem']> = ResolversObject<{
  accessSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessSite3Resolvers = { ALL_SITES: 'all-sites', DESKTOP_SITE: 'desktop-site', MOBILE_SITE: 'mobile-site' };

export type Granularity22Resolvers = { HOURLY: 'hourly', DAILY: 'daily', MONTHLY: 'monthly' };

export type PageviewProjectResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageviewProject'] = ResolversParentTypes['PageviewProject']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items17ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items17ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items17ListItem'] = ResolversParentTypes['Items17ListItem']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Access5Resolvers = { ALL_ACCESS: 'all-access', DESKTOP: 'desktop', MOBILE_APP: 'mobile-app', MOBILE_WEB: 'mobile-web' };

export type Agent3Resolvers = { ALL_AGENTS: 'all-agents', USER: 'user', SPIDER: 'spider' };

export type PageviewArticleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageviewArticle'] = ResolversParentTypes['PageviewArticle']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items18ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items18ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items18ListItem'] = ResolversParentTypes['Items18ListItem']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Agent4Resolvers = { ALL_AGENTS: 'all-agents', USER: 'user', SPIDER: 'spider', BOT: 'bot' };

export type ByCountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ByCountry'] = ResolversParentTypes['ByCountry']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items19ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items19ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items19ListItem'] = ResolversParentTypes['Items19ListItem']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countries?: Resolver<Maybe<Array<Maybe<ResolversTypes['CountriesListItem']>>>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CountriesListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CountriesListItem'] = ResolversParentTypes['CountriesListItem']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageviewTopsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageviewTops'] = ResolversParentTypes['PageviewTops']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items20ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items20ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items20ListItem'] = ResolversParentTypes['Items20ListItem']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  articles?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticlesListItem']>>>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticlesListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ArticlesListItem'] = ResolversParentTypes['ArticlesListItem']> = ResolversObject<{
  article?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  views?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewRegisteredUsersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewRegisteredUsers'] = ResolversParentTypes['NewRegisteredUsers']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items21ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items21ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items21ListItem'] = ResolversParentTypes['Items21ListItem']> = ResolversObject<{
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['Results13ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Results13ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Results13ListItem'] = ResolversParentTypes['Results13ListItem']> = ResolversObject<{
  newRegisteredUsers?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UniqueDevicesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UniqueDevices'] = ResolversParentTypes['UniqueDevices']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items22ListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Items22ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Items22ListItem'] = ResolversParentTypes['Items22ListItem']> = ResolversObject<{
  accessSite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  devices?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  granularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CxLanguagepairsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CxLanguagepairs'] = ResolversParentTypes['CxLanguagepairs']> = ResolversObject<{
  source?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  target?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CxListToolsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CxListTools'] = ResolversParentTypes['CxListTools']> = ResolversObject<{
  tools?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ToolResolvers = { MT: 'mt', DICTIONARY: 'dictionary' };

export type CxDictResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CxDict'] = ResolversParentTypes['CxDict']> = ResolversObject<{
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  translations?: Resolver<Maybe<Array<Maybe<ResolversTypes['TranslationsListItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TranslationsListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TranslationsListItem'] = ResolversParentTypes['TranslationsListItem']> = ResolversObject<{
  info?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sources?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Provider2Resolvers = { JSONDICT: 'JsonDict', DICTD: 'Dictd' };

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  postMediaMathCheckType?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<MutationPostMediaMathCheckTypeArgs, 'mediaMathCheckInput' | 'type'>>;
  postTransformHtmlFromFromLangToToLang?: Resolver<Maybe<ResolversTypes['CxMt']>, ParentType, ContextType, RequireFields<MutationPostTransformHtmlFromFromLangToToLangArgs, 'fromLang' | 'toLang' | 'transformHtmlFromToInput'>>;
  postTransformHtmlFromFromLangToToLangProvider?: Resolver<Maybe<ResolversTypes['CxMt']>, ParentType, ContextType, RequireFields<MutationPostTransformHtmlFromFromLangToToLangProviderArgs, 'fromLang' | 'provider' | 'toLang' | 'transformHtmlFromToInput'>>;
}>;

export type TypeResolvers = { TEX: 'tex', INLINE_TEX: 'inline-tex', CHEM: 'chem' };

export type CxMtResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CxMt'] = ResolversParentTypes['CxMt']> = ResolversObject<{
  contents?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProviderResolvers = { APERTIUM: 'Apertium', YANDEX: 'Yandex', YOUDAO: 'Youdao' };

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Availability?: AvailabilityResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Format?: FormatResolvers;
  AbsoluteBytesDifference?: AbsoluteBytesDifferenceResolvers<ContextType>;
  ItemsListItem?: ItemsListItemResolvers<ContextType>;
  ResultsListItem?: ResultsListItemResolvers<ContextType>;
  EditorType16?: EditorType16Resolvers;
  Granularity21?: Granularity21Resolvers;
  PageType13?: PageType13Resolvers;
  AbsoluteBytesDifferencePerPage?: AbsoluteBytesDifferencePerPageResolvers<ContextType>;
  Items2ListItem?: Items2ListItemResolvers<ContextType>;
  NetBytesDifference?: NetBytesDifferenceResolvers<ContextType>;
  Items3ListItem?: Items3ListItemResolvers<ContextType>;
  Results2ListItem?: Results2ListItemResolvers<ContextType>;
  NetBytesDifferencePerPage?: NetBytesDifferencePerPageResolvers<ContextType>;
  Items4ListItem?: Items4ListItemResolvers<ContextType>;
  EditedPages?: EditedPagesResolvers<ContextType>;
  Items5ListItem?: Items5ListItemResolvers<ContextType>;
  Results3ListItem?: Results3ListItemResolvers<ContextType>;
  ActivityLevel3?: ActivityLevel3Resolvers;
  NewPages?: NewPagesResolvers<ContextType>;
  Items6ListItem?: Items6ListItemResolvers<ContextType>;
  Results4ListItem?: Results4ListItemResolvers<ContextType>;
  TopEditedPagesByAbsBytesDiff?: TopEditedPagesByAbsBytesDiffResolvers<ContextType>;
  Items7ListItem?: Items7ListItemResolvers<ContextType>;
  Results5ListItem?: Results5ListItemResolvers<ContextType>;
  TopListItem?: TopListItemResolvers<ContextType>;
  TopEditedPagesByEdits?: TopEditedPagesByEditsResolvers<ContextType>;
  Items8ListItem?: Items8ListItemResolvers<ContextType>;
  Results6ListItem?: Results6ListItemResolvers<ContextType>;
  Top2ListItem?: Top2ListItemResolvers<ContextType>;
  TopEditedPagesByNetBytesDiff?: TopEditedPagesByNetBytesDiffResolvers<ContextType>;
  Items9ListItem?: Items9ListItemResolvers<ContextType>;
  Results7ListItem?: Results7ListItemResolvers<ContextType>;
  Top3ListItem?: Top3ListItemResolvers<ContextType>;
  Editors?: EditorsResolvers<ContextType>;
  Items10ListItem?: Items10ListItemResolvers<ContextType>;
  Results8ListItem?: Results8ListItemResolvers<ContextType>;
  TopEditorsByAbsBytesDiff?: TopEditorsByAbsBytesDiffResolvers<ContextType>;
  Items11ListItem?: Items11ListItemResolvers<ContextType>;
  Results9ListItem?: Results9ListItemResolvers<ContextType>;
  Top4ListItem?: Top4ListItemResolvers<ContextType>;
  TopEditorsByEdits?: TopEditorsByEditsResolvers<ContextType>;
  Items12ListItem?: Items12ListItemResolvers<ContextType>;
  Results10ListItem?: Results10ListItemResolvers<ContextType>;
  Top5ListItem?: Top5ListItemResolvers<ContextType>;
  TopEditorsByNetBytesDiff?: TopEditorsByNetBytesDiffResolvers<ContextType>;
  Items13ListItem?: Items13ListItemResolvers<ContextType>;
  Results11ListItem?: Results11ListItemResolvers<ContextType>;
  Top6ListItem?: Top6ListItemResolvers<ContextType>;
  MetricsEditsAggregate?: MetricsEditsAggregateResolvers<ContextType>;
  Items14ListItem?: Items14ListItemResolvers<ContextType>;
  Results12ListItem?: Results12ListItemResolvers<ContextType>;
  EditsPerPage?: EditsPerPageResolvers<ContextType>;
  Items15ListItem?: Items15ListItemResolvers<ContextType>;
  PagecountsProject?: PagecountsProjectResolvers<ContextType>;
  Items16ListItem?: Items16ListItemResolvers<ContextType>;
  AccessSite3?: AccessSite3Resolvers;
  Granularity22?: Granularity22Resolvers;
  PageviewProject?: PageviewProjectResolvers<ContextType>;
  Items17ListItem?: Items17ListItemResolvers<ContextType>;
  Access5?: Access5Resolvers;
  Agent3?: Agent3Resolvers;
  PageviewArticle?: PageviewArticleResolvers<ContextType>;
  Items18ListItem?: Items18ListItemResolvers<ContextType>;
  Agent4?: Agent4Resolvers;
  ByCountry?: ByCountryResolvers<ContextType>;
  Items19ListItem?: Items19ListItemResolvers<ContextType>;
  CountriesListItem?: CountriesListItemResolvers<ContextType>;
  PageviewTops?: PageviewTopsResolvers<ContextType>;
  Items20ListItem?: Items20ListItemResolvers<ContextType>;
  ArticlesListItem?: ArticlesListItemResolvers<ContextType>;
  NewRegisteredUsers?: NewRegisteredUsersResolvers<ContextType>;
  Items21ListItem?: Items21ListItemResolvers<ContextType>;
  Results13ListItem?: Results13ListItemResolvers<ContextType>;
  UniqueDevices?: UniqueDevicesResolvers<ContextType>;
  Items22ListItem?: Items22ListItemResolvers<ContextType>;
  CxLanguagepairs?: CxLanguagepairsResolvers<ContextType>;
  CxListTools?: CxListToolsResolvers<ContextType>;
  Tool?: ToolResolvers;
  CxDict?: CxDictResolvers<ContextType>;
  TranslationsListItem?: TranslationsListItemResolvers<ContextType>;
  Provider2?: Provider2Resolvers;
  Mutation?: MutationResolvers<ContextType>;
  Type?: TypeResolvers;
  CxMt?: CxMtResolvers<ContextType>;
  Provider?: ProviderResolvers;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as BaseMeshContext, ProjectionOptions } from '@graphql-mesh/runtime';

export type WikiSdk = {
  getFeedAvailability: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getFeedAvailability']>,
  getMediaMathFormulaHash: (args: QueryGetMediaMathFormulaHashArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMediaMathFormulaHash']>,
  getMediaMathRenderFormatHash: (args: QueryGetMediaMathRenderFormatHashArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMediaMathRenderFormatHash']>,
  getMetricsBytesDifferenceAbsoluteAggregateProjectEditorTypePageTypeGranularityStartEnd: (args: QueryGetMetricsBytesDifferenceAbsoluteAggregateProjectEditorTypePageTypeGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsBytesDifferenceAbsoluteAggregateProjectEditorTypePageTypeGranularityStartEnd']>,
  getMetricsBytesDifferenceAbsolutePerPageProjectPageTitleEditorTypeGranularityStartEnd: (args: QueryGetMetricsBytesDifferenceAbsolutePerPageProjectPageTitleEditorTypeGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsBytesDifferenceAbsolutePerPageProjectPageTitleEditorTypeGranularityStartEnd']>,
  getMetricsBytesDifferenceNetAggregateProjectEditorTypePageTypeGranularityStartEnd: (args: QueryGetMetricsBytesDifferenceNetAggregateProjectEditorTypePageTypeGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsBytesDifferenceNetAggregateProjectEditorTypePageTypeGranularityStartEnd']>,
  getMetricsBytesDifferenceNetPerPageProjectPageTitleEditorTypeGranularityStartEnd: (args: QueryGetMetricsBytesDifferenceNetPerPageProjectPageTitleEditorTypeGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsBytesDifferenceNetPerPageProjectPageTitleEditorTypeGranularityStartEnd']>,
  getMetricsEditedPagesAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd: (args: QueryGetMetricsEditedPagesAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditedPagesAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd']>,
  getMetricsEditedPagesNewProjectEditorTypePageTypeGranularityStartEnd: (args: QueryGetMetricsEditedPagesNewProjectEditorTypePageTypeGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditedPagesNewProjectEditorTypePageTypeGranularityStartEnd']>,
  getMetricsEditedPagesTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay: (args: QueryGetMetricsEditedPagesTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditedPagesTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay']>,
  getMetricsEditedPagesTopByEditsProjectEditorTypePageTypeYearMonthDay: (args: QueryGetMetricsEditedPagesTopByEditsProjectEditorTypePageTypeYearMonthDayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditedPagesTopByEditsProjectEditorTypePageTypeYearMonthDay']>,
  getMetricsEditedPagesTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay: (args: QueryGetMetricsEditedPagesTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditedPagesTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay']>,
  getMetricsEditorsAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd: (args: QueryGetMetricsEditorsAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditorsAggregateProjectEditorTypePageTypeActivityLevelGranularityStartEnd']>,
  getMetricsEditorsTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay: (args: QueryGetMetricsEditorsTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditorsTopByAbsoluteBytesDifferenceProjectEditorTypePageTypeYearMonthDay']>,
  getMetricsEditorsTopByEditsProjectEditorTypePageTypeYearMonthDay: (args: QueryGetMetricsEditorsTopByEditsProjectEditorTypePageTypeYearMonthDayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditorsTopByEditsProjectEditorTypePageTypeYearMonthDay']>,
  getMetricsEditorsTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay: (args: QueryGetMetricsEditorsTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditorsTopByNetBytesDifferenceProjectEditorTypePageTypeYearMonthDay']>,
  getMetricsEditsAggregateProjectEditorTypePageTypeGranularityStartEnd: (args: QueryGetMetricsEditsAggregateProjectEditorTypePageTypeGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditsAggregateProjectEditorTypePageTypeGranularityStartEnd']>,
  getMetricsEditsPerPageProjectPageTitleEditorTypeGranularityStartEnd: (args: QueryGetMetricsEditsPerPageProjectPageTitleEditorTypeGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsEditsPerPageProjectPageTitleEditorTypeGranularityStartEnd']>,
  getMetricsLegacyPagecountsAggregateProjectAccessSiteGranularityStartEnd: (args: QueryGetMetricsLegacyPagecountsAggregateProjectAccessSiteGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsLegacyPagecountsAggregateProjectAccessSiteGranularityStartEnd']>,
  getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd: (args: QueryGetMetricsPageviewsAggregateProjectAccessAgentGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd']>,
  getMetricsPageviewsPerArticleProjectAccessAgentArticleGranularityStartEnd: (args: QueryGetMetricsPageviewsPerArticleProjectAccessAgentArticleGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsPageviewsPerArticleProjectAccessAgentArticleGranularityStartEnd']>,
  getMetricsPageviewsTopByCountryProjectAccessYearMonth: (args: QueryGetMetricsPageviewsTopByCountryProjectAccessYearMonthArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsPageviewsTopByCountryProjectAccessYearMonth']>,
  getMetricsPageviewsTopProjectAccessYearMonthDay: (args: QueryGetMetricsPageviewsTopProjectAccessYearMonthDayArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsPageviewsTopProjectAccessYearMonthDay']>,
  getMetricsRegisteredUsersNewProjectGranularityStartEnd: (args: QueryGetMetricsRegisteredUsersNewProjectGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsRegisteredUsersNewProjectGranularityStartEnd']>,
  getMetricsUniqueDevicesProjectAccessSiteGranularityStartEnd: (args: QueryGetMetricsUniqueDevicesProjectAccessSiteGranularityStartEndArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getMetricsUniqueDevicesProjectAccessSiteGranularityStartEnd']>,
  getTransformListLanguagepairs: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getTransformListLanguagepairs']>,
  getTransformListPairFromTo: (args: QueryGetTransformListPairFromToArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getTransformListPairFromTo']>,
  getTransformListToolTool: (args: QueryGetTransformListToolToolArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getTransformListToolTool']>,
  getTransformListToolToolFrom: (args: QueryGetTransformListToolToolFromArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getTransformListToolToolFrom']>,
  getTransformListToolToolFromTo: (args: QueryGetTransformListToolToolFromToArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getTransformListToolToolFromTo']>,
  getTransformWordFromFromLangToToLangWord: (args: QueryGetTransformWordFromFromLangToToLangWordArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getTransformWordFromFromLangToToLangWord']>,
  getTransformWordFromFromLangToToLangWordProvider: (args: QueryGetTransformWordFromFromLangToToLangWordProviderArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getTransformWordFromFromLangToToLangWordProvider']>,
  viewsInPastMonth: (args: QueryViewsInPastMonthArgs, projectionOptions?: ProjectionOptions) => Promise<Query['viewsInPastMonth']>,
  postMediaMathCheckType: (args: MutationPostMediaMathCheckTypeArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postMediaMathCheckType']>,
  postTransformHtmlFromFromLangToToLang: (args: MutationPostTransformHtmlFromFromLangToToLangArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postTransformHtmlFromFromLangToToLang']>,
  postTransformHtmlFromFromLangToToLangProvider: (args: MutationPostTransformHtmlFromFromLangToToLangProviderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postTransformHtmlFromFromLangToToLangProvider']>
};

export type WikiContext = { 
      Wiki: { api: WikiSdk }, 
    };

export type MeshContext = WikiContext & BaseMeshContext;
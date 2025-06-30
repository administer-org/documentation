# Default ButtonID Fields

In case you need to reference the stock Button IDs, you may find them here.

**Home**: AdmHomepage
**Configuration**: AdmConfiguration
**Information** AdmConfiguration\Information
**Options**: AdmConfiguration\Settings
**Marketplace**: AdmConfiguration\Marketplace
**Ranks**: AdmConfiguration\AdminConfig

## 1st-party Apps

**Announcements**: GlobalAnnouncements

**Player Management**: PlayerManagement
**Bulk Moderate**: PlayerManagement\BulkModerate
**Player Lookup**: PlayerManagement\PlayerSearch
**Directory**: PlayerManagement\PlrDirectory

**Team Manager**: TeamManager

**V2 Reporting Assistant**: V2Assistant

## Why is this useful?

App IDs are used for persistence in ranks when app names are dynamic. They're sent as parameters to [Apps.AddAppDrawerButton](/v2/client/apps.md) and are stored as booleans under [RankData](/v2/schemas/admindb/rank.md).

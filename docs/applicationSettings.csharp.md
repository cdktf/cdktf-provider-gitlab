# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-gitlab.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings gitlab_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ApplicationSettings(Construct Scope, string Id, ApplicationSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail">ResetAbuseNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode">ResetAdminMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath">ResetAfterSignOutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText">ResetAfterSignUpText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey">ResetAkismetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled">ResetAkismetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap">ResetAllowGroupOwnersToManageLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks">ResetAllowLocalRequestsFromSystemHooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices">ResetAllowLocalRequestsFromWebHooksAndServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable">ResetArchiveBuildsInHumanReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist">ResetAssetProxyAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled">ResetAssetProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey">ResetAssetProxySecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl">ResetAssetProxyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled">ResetAuthorizedKeysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain">ResetAutoDevopsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled">ResetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation">ResetAutomaticPurchasedStorageAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup">ResetCanCreateGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan">ResetCheckNamespacePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname">ResetCommitEmailHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries">ResetContainerExpirationPoliciesEnableHistoricEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize">ResetContainerRegistryCleanupTagsServiceMaxListSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout">ResetContainerRegistryDeleteTagsServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching">ResetContainerRegistryExpirationPoliciesCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity">ResetContainerRegistryExpirationPoliciesWorkerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay">ResetContainerRegistryTokenExpireDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers">ResetDeactivateDormantUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn">ResetDefaultArtifactsExpireIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName">ResetDefaultBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection">ResetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath">ResetDefaultCiConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility">ResetDefaultGroupVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation">ResetDefaultProjectCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit">ResetDefaultProjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility">ResetDefaultProjectVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility">ResetDefaultSnippetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects">ResetDeleteInactiveProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod">ResetDeletionAdjournedPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles">ResetDiffMaxFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines">ResetDiffMaxLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes">ResetDiffMaxPatchBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources">ResetDisabledOauthSignInSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken">ResetDisableFeedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled">ResetDnsRebindingProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist">ResetDomainAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist">ResetDomainDenylist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled">ResetDomainDenylistEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction">ResetDsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaKeyRestriction">ResetEcdsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaSkKeyRestriction">ResetEcdsaSkKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519KeyRestriction">ResetEd25519KeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519SkKeyRestriction">ResetEd25519SkKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccessKeyId">ResetEksAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccountId">ResetEksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksIntegrationEnabled">ResetEksIntegrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksSecretAccessKey">ResetEksSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAws">ResetElasticsearchAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsAccessKey">ResetElasticsearchAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsRegion">ResetElasticsearchAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsSecretAccessKey">ResetElasticsearchAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFieldLengthLimit">ResetElasticsearchIndexedFieldLengthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFileSizeLimitKb">ResetElasticsearchIndexedFileSizeLimitKb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexing">ResetElasticsearchIndexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchLimitIndexing">ResetElasticsearchLimitIndexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkConcurrency">ResetElasticsearchMaxBulkConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkSizeMb">ResetElasticsearchMaxBulkSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds">ResetElasticsearchNamespaceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword">ResetElasticsearchPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds">ResetElasticsearchProjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch">ResetElasticsearchSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl">ResetElasticsearchUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername">ResetElasticsearchUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText">ResetEmailAdditionalText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody">ResetEmailAuthorInBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnabledGitAccessProtocol">ResetEnabledGitAccessProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceNamespaceStorageLimit">ResetEnforceNamespaceStorageLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceTerms">ResetEnforceTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientCert">ResetExternalAuthClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKey">ResetExternalAuthClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKeyPass">ResetExternalAuthClientKeyPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceDefaultLabel">ResetExternalAuthorizationServiceDefaultLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceEnabled">ResetExternalAuthorizationServiceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceTimeout">ResetExternalAuthorizationServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceUrl">ResetExternalAuthorizationServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceTimeout">ResetExternalPipelineValidationServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceToken">ResetExternalPipelineValidationServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceUrl">ResetExternalPipelineValidationServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId">ResetFileTemplateProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek">ResetFirstDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps">ResetGeoNodeAllowedIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout">ResetGeoStatusTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault">ResetGitalyTimeoutDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast">ResetGitalyTimeoutFast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium">ResetGitalyTimeoutMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist">ResetGitRateLimitUsersAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry">ResetGitTwoFactorSessionExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaEnabled">ResetGrafanaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaUrl">ResetGrafanaUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGravatarEnabled">ResetGravatarEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGroupOwnersCanManageDefaultBranchProtection">ResetGroupOwnersCanManageDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHashedStorageEnabled">ResetHashedStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageHideCommercialContent">ResetHelpPageHideCommercialContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageSupportUrl">ResetHelpPageSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageText">ResetHelpPageText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpText">ResetHelpText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHideThirdPartyOffers">ResetHideThirdPartyOffers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHomePageUrl">ResetHomePageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingEnabled">ResetHousekeepingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingFullRepackPeriod">ResetHousekeepingFullRepackPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingGcPeriod">ResetHousekeepingGcPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingIncrementalRepackPeriod">ResetHousekeepingIncrementalRepackPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingOptimizeRepositoryPeriod">ResetHousekeepingOptimizeRepositoryPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHtmlEmailsEnabled">ResetHtmlEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetImportSources">ResetImportSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsDeleteAfterMonths">ResetInactiveProjectsDeleteAfterMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsMinSizeMb">ResetInactiveProjectsMinSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsSendWarningEmailAfterMonths">ResetInactiveProjectsSendWarningEmailAfterMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled">ResetInProductMarketingEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled">ResetInvisibleCaptchaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit">ResetIssuesCreateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact">ResetKeepLatestArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion">ResetLocalMarkdownVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled">ResetMailgunEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey">ResetMailgunSigningKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode">ResetMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage">ResetMaintenanceModeMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize">ResetMaxArtifactsSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize">ResetMaxAttachmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize">ResetMaxExportSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize">ResetMaxImportSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads">ResetMaxNumberOfRepositoryDownloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod">ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize">ResetMaxPagesSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime">ResetMaxPersonalAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime">ResetMaxSshKeyLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold">ResetMetricsMethodCallThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable">ResetMirrorAvailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold">ResetMirrorCapacityThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity">ResetMirrorMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay">ResetMirrorMaxDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding">ResetNpmPackageRequestsForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist">ResetOutboundLocalRequestsWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryCleanupPoliciesWorkerCapacity">ResetPackageRegistryCleanupPoliciesWorkerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPagesDomainVerificationEnabled">ResetPagesDomainVerificationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForGit">ResetPasswordAuthenticationEnabledForGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForWeb">ResetPasswordAuthenticationEnabledForWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordLowercaseRequired">ResetPasswordLowercaseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordNumberRequired">ResetPasswordNumberRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordSymbolRequired">ResetPasswordSymbolRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordUppercaseRequired">ResetPasswordUppercaseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPerformanceBarAllowedGroupPath">ResetPerformanceBarAllowedGroupPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPersonalAccessTokenPrefix">ResetPersonalAccessTokenPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPipelineLimitPerProjectUserSha">ResetPipelineLimitPerProjectUserSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlEnabled">ResetPlantumlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlUrl">ResetPlantumlUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPollingIntervalMultiplier">ResetPollingIntervalMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectExportEnabled">ResetProjectExportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPrometheusMetricsEnabled">ResetPrometheusMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProtectedCiVariables">ResetProtectedCiVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventActivitiesLimit">ResetPushEventActivitiesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventHooksLimit">ResetPushEventHooksLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPypiPackageRequestsForwarding">ResetPypiPackageRequestsForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRateLimitingResponseText">ResetRateLimitingResponseText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRawBlobRequestLimit">ResetRawBlobRequestLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaEnabled">ResetRecaptchaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaPrivateKey">ResetRecaptchaPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaSiteKey">ResetRecaptchaSiteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceiveMaxInputSize">ResetReceiveMaxInputSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled">ResetRepositoryChecksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit">ResetRepositorySizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages">ResetRepositoryStorages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted">ResetRepositoryStoragesWeighted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup">ResetRequireAdminApprovalAfterUserSignup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication">ResetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels">ResetRestrictedVisibilityLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction">ResetRsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit">ResetSearchRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated">ResetSearchRateLimitUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail">ResetSendUserConfirmationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay">ResetSessionExpireDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled">ResetSharedRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes">ResetSharedRunnersMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText">ResetSharedRunnersText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes">ResetSidekiqJobLimiterCompressionThresholdBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes">ResetSidekiqJobLimiterLimitBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode">ResetSidekiqJobLimiterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText">ResetSignInText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled">ResetSignupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled">ResetSlackAppEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId">ResetSlackAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret">ResetSlackAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret">ResetSlackAppSigningSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken">ResetSlackAppVerificationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit">ResetSnippetSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId">ResetSnowplowAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname">ResetSnowplowCollectorHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain">ResetSnowplowCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled">ResetSnowplowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled">ResetSourcegraphEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly">ResetSourcegraphPublicOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl">ResetSourcegraphUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey">ResetSpamCheckApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled">ResetSpamCheckEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl">ResetSpamCheckEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSuggestPipelineEnabled">ResetSuggestPipelineEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerminalMaxSessionTime">ResetTerminalMaxSessionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerms">ResetTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiEnabled">ResetThrottleAuthenticatedApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiPeriodInSeconds">ResetThrottleAuthenticatedApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiRequestsPerPeriod">ResetThrottleAuthenticatedApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiEnabled">ResetThrottleAuthenticatedPackagesApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiPeriodInSeconds">ResetThrottleAuthenticatedPackagesApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiRequestsPerPeriod">ResetThrottleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebEnabled">ResetThrottleAuthenticatedWebEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebPeriodInSeconds">ResetThrottleAuthenticatedWebPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebRequestsPerPeriod">ResetThrottleAuthenticatedWebRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiEnabled">ResetThrottleUnauthenticatedApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiPeriodInSeconds">ResetThrottleUnauthenticatedApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiRequestsPerPeriod">ResetThrottleUnauthenticatedApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiEnabled">ResetThrottleUnauthenticatedPackagesApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiPeriodInSeconds">ResetThrottleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod">ResetThrottleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebEnabled">ResetThrottleUnauthenticatedWebEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebPeriodInSeconds">ResetThrottleUnauthenticatedWebPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebRequestsPerPeriod">ResetThrottleUnauthenticatedWebRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTimeTrackingLimitToHours">ResetTimeTrackingLimitToHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTwoFactorGracePeriod">ResetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled">ResetUniqueIpsLimitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser">ResetUniqueIpsLimitPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow">ResetUniqueIpsLimitTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled">ResetUsagePingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled">ResetUserDeactivationEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal">ResetUserDefaultExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex">ResetUserDefaultInternalRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications">ResetUserOauthApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage">ResetUserShowAddSshKeyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled">ResetVersionCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled">ResetWebIdeClientsidePreviewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant">ResetWhatsNewVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes">ResetWikiPageMaxContentBytes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAbuseNotificationEmail` <a name="ResetAbuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail"></a>

```csharp
private void ResetAbuseNotificationEmail()
```

##### `ResetAdminMode` <a name="ResetAdminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode"></a>

```csharp
private void ResetAdminMode()
```

##### `ResetAfterSignOutPath` <a name="ResetAfterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath"></a>

```csharp
private void ResetAfterSignOutPath()
```

##### `ResetAfterSignUpText` <a name="ResetAfterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText"></a>

```csharp
private void ResetAfterSignUpText()
```

##### `ResetAkismetApiKey` <a name="ResetAkismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey"></a>

```csharp
private void ResetAkismetApiKey()
```

##### `ResetAkismetEnabled` <a name="ResetAkismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled"></a>

```csharp
private void ResetAkismetEnabled()
```

##### `ResetAllowGroupOwnersToManageLdap` <a name="ResetAllowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap"></a>

```csharp
private void ResetAllowGroupOwnersToManageLdap()
```

##### `ResetAllowLocalRequestsFromSystemHooks` <a name="ResetAllowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks"></a>

```csharp
private void ResetAllowLocalRequestsFromSystemHooks()
```

##### `ResetAllowLocalRequestsFromWebHooksAndServices` <a name="ResetAllowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices"></a>

```csharp
private void ResetAllowLocalRequestsFromWebHooksAndServices()
```

##### `ResetArchiveBuildsInHumanReadable` <a name="ResetArchiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable"></a>

```csharp
private void ResetArchiveBuildsInHumanReadable()
```

##### `ResetAssetProxyAllowlist` <a name="ResetAssetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist"></a>

```csharp
private void ResetAssetProxyAllowlist()
```

##### `ResetAssetProxyEnabled` <a name="ResetAssetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled"></a>

```csharp
private void ResetAssetProxyEnabled()
```

##### `ResetAssetProxySecretKey` <a name="ResetAssetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey"></a>

```csharp
private void ResetAssetProxySecretKey()
```

##### `ResetAssetProxyUrl` <a name="ResetAssetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl"></a>

```csharp
private void ResetAssetProxyUrl()
```

##### `ResetAuthorizedKeysEnabled` <a name="ResetAuthorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled"></a>

```csharp
private void ResetAuthorizedKeysEnabled()
```

##### `ResetAutoDevopsDomain` <a name="ResetAutoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain"></a>

```csharp
private void ResetAutoDevopsDomain()
```

##### `ResetAutoDevopsEnabled` <a name="ResetAutoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled"></a>

```csharp
private void ResetAutoDevopsEnabled()
```

##### `ResetAutomaticPurchasedStorageAllocation` <a name="ResetAutomaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation"></a>

```csharp
private void ResetAutomaticPurchasedStorageAllocation()
```

##### `ResetCanCreateGroup` <a name="ResetCanCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup"></a>

```csharp
private void ResetCanCreateGroup()
```

##### `ResetCheckNamespacePlan` <a name="ResetCheckNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan"></a>

```csharp
private void ResetCheckNamespacePlan()
```

##### `ResetCommitEmailHostname` <a name="ResetCommitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname"></a>

```csharp
private void ResetCommitEmailHostname()
```

##### `ResetContainerExpirationPoliciesEnableHistoricEntries` <a name="ResetContainerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries"></a>

```csharp
private void ResetContainerExpirationPoliciesEnableHistoricEntries()
```

##### `ResetContainerRegistryCleanupTagsServiceMaxListSize` <a name="ResetContainerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize"></a>

```csharp
private void ResetContainerRegistryCleanupTagsServiceMaxListSize()
```

##### `ResetContainerRegistryDeleteTagsServiceTimeout` <a name="ResetContainerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout"></a>

```csharp
private void ResetContainerRegistryDeleteTagsServiceTimeout()
```

##### `ResetContainerRegistryExpirationPoliciesCaching` <a name="ResetContainerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching"></a>

```csharp
private void ResetContainerRegistryExpirationPoliciesCaching()
```

##### `ResetContainerRegistryExpirationPoliciesWorkerCapacity` <a name="ResetContainerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity"></a>

```csharp
private void ResetContainerRegistryExpirationPoliciesWorkerCapacity()
```

##### `ResetContainerRegistryTokenExpireDelay` <a name="ResetContainerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay"></a>

```csharp
private void ResetContainerRegistryTokenExpireDelay()
```

##### `ResetDeactivateDormantUsers` <a name="ResetDeactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers"></a>

```csharp
private void ResetDeactivateDormantUsers()
```

##### `ResetDefaultArtifactsExpireIn` <a name="ResetDefaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn"></a>

```csharp
private void ResetDefaultArtifactsExpireIn()
```

##### `ResetDefaultBranchName` <a name="ResetDefaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName"></a>

```csharp
private void ResetDefaultBranchName()
```

##### `ResetDefaultBranchProtection` <a name="ResetDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection"></a>

```csharp
private void ResetDefaultBranchProtection()
```

##### `ResetDefaultCiConfigPath` <a name="ResetDefaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath"></a>

```csharp
private void ResetDefaultCiConfigPath()
```

##### `ResetDefaultGroupVisibility` <a name="ResetDefaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility"></a>

```csharp
private void ResetDefaultGroupVisibility()
```

##### `ResetDefaultProjectCreation` <a name="ResetDefaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation"></a>

```csharp
private void ResetDefaultProjectCreation()
```

##### `ResetDefaultProjectsLimit` <a name="ResetDefaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit"></a>

```csharp
private void ResetDefaultProjectsLimit()
```

##### `ResetDefaultProjectVisibility` <a name="ResetDefaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility"></a>

```csharp
private void ResetDefaultProjectVisibility()
```

##### `ResetDefaultSnippetVisibility` <a name="ResetDefaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility"></a>

```csharp
private void ResetDefaultSnippetVisibility()
```

##### `ResetDeleteInactiveProjects` <a name="ResetDeleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects"></a>

```csharp
private void ResetDeleteInactiveProjects()
```

##### `ResetDeletionAdjournedPeriod` <a name="ResetDeletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod"></a>

```csharp
private void ResetDeletionAdjournedPeriod()
```

##### `ResetDiffMaxFiles` <a name="ResetDiffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles"></a>

```csharp
private void ResetDiffMaxFiles()
```

##### `ResetDiffMaxLines` <a name="ResetDiffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines"></a>

```csharp
private void ResetDiffMaxLines()
```

##### `ResetDiffMaxPatchBytes` <a name="ResetDiffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes"></a>

```csharp
private void ResetDiffMaxPatchBytes()
```

##### `ResetDisabledOauthSignInSources` <a name="ResetDisabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources"></a>

```csharp
private void ResetDisabledOauthSignInSources()
```

##### `ResetDisableFeedToken` <a name="ResetDisableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken"></a>

```csharp
private void ResetDisableFeedToken()
```

##### `ResetDnsRebindingProtectionEnabled` <a name="ResetDnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled"></a>

```csharp
private void ResetDnsRebindingProtectionEnabled()
```

##### `ResetDomainAllowlist` <a name="ResetDomainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist"></a>

```csharp
private void ResetDomainAllowlist()
```

##### `ResetDomainDenylist` <a name="ResetDomainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist"></a>

```csharp
private void ResetDomainDenylist()
```

##### `ResetDomainDenylistEnabled` <a name="ResetDomainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled"></a>

```csharp
private void ResetDomainDenylistEnabled()
```

##### `ResetDsaKeyRestriction` <a name="ResetDsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction"></a>

```csharp
private void ResetDsaKeyRestriction()
```

##### `ResetEcdsaKeyRestriction` <a name="ResetEcdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaKeyRestriction"></a>

```csharp
private void ResetEcdsaKeyRestriction()
```

##### `ResetEcdsaSkKeyRestriction` <a name="ResetEcdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaSkKeyRestriction"></a>

```csharp
private void ResetEcdsaSkKeyRestriction()
```

##### `ResetEd25519KeyRestriction` <a name="ResetEd25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519KeyRestriction"></a>

```csharp
private void ResetEd25519KeyRestriction()
```

##### `ResetEd25519SkKeyRestriction` <a name="ResetEd25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519SkKeyRestriction"></a>

```csharp
private void ResetEd25519SkKeyRestriction()
```

##### `ResetEksAccessKeyId` <a name="ResetEksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccessKeyId"></a>

```csharp
private void ResetEksAccessKeyId()
```

##### `ResetEksAccountId` <a name="ResetEksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccountId"></a>

```csharp
private void ResetEksAccountId()
```

##### `ResetEksIntegrationEnabled` <a name="ResetEksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksIntegrationEnabled"></a>

```csharp
private void ResetEksIntegrationEnabled()
```

##### `ResetEksSecretAccessKey` <a name="ResetEksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksSecretAccessKey"></a>

```csharp
private void ResetEksSecretAccessKey()
```

##### `ResetElasticsearchAws` <a name="ResetElasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAws"></a>

```csharp
private void ResetElasticsearchAws()
```

##### `ResetElasticsearchAwsAccessKey` <a name="ResetElasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsAccessKey"></a>

```csharp
private void ResetElasticsearchAwsAccessKey()
```

##### `ResetElasticsearchAwsRegion` <a name="ResetElasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsRegion"></a>

```csharp
private void ResetElasticsearchAwsRegion()
```

##### `ResetElasticsearchAwsSecretAccessKey` <a name="ResetElasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsSecretAccessKey"></a>

```csharp
private void ResetElasticsearchAwsSecretAccessKey()
```

##### `ResetElasticsearchIndexedFieldLengthLimit` <a name="ResetElasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFieldLengthLimit"></a>

```csharp
private void ResetElasticsearchIndexedFieldLengthLimit()
```

##### `ResetElasticsearchIndexedFileSizeLimitKb` <a name="ResetElasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFileSizeLimitKb"></a>

```csharp
private void ResetElasticsearchIndexedFileSizeLimitKb()
```

##### `ResetElasticsearchIndexing` <a name="ResetElasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexing"></a>

```csharp
private void ResetElasticsearchIndexing()
```

##### `ResetElasticsearchLimitIndexing` <a name="ResetElasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchLimitIndexing"></a>

```csharp
private void ResetElasticsearchLimitIndexing()
```

##### `ResetElasticsearchMaxBulkConcurrency` <a name="ResetElasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkConcurrency"></a>

```csharp
private void ResetElasticsearchMaxBulkConcurrency()
```

##### `ResetElasticsearchMaxBulkSizeMb` <a name="ResetElasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkSizeMb"></a>

```csharp
private void ResetElasticsearchMaxBulkSizeMb()
```

##### `ResetElasticsearchNamespaceIds` <a name="ResetElasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds"></a>

```csharp
private void ResetElasticsearchNamespaceIds()
```

##### `ResetElasticsearchPassword` <a name="ResetElasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword"></a>

```csharp
private void ResetElasticsearchPassword()
```

##### `ResetElasticsearchProjectIds` <a name="ResetElasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds"></a>

```csharp
private void ResetElasticsearchProjectIds()
```

##### `ResetElasticsearchSearch` <a name="ResetElasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch"></a>

```csharp
private void ResetElasticsearchSearch()
```

##### `ResetElasticsearchUrl` <a name="ResetElasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl"></a>

```csharp
private void ResetElasticsearchUrl()
```

##### `ResetElasticsearchUsername` <a name="ResetElasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername"></a>

```csharp
private void ResetElasticsearchUsername()
```

##### `ResetEmailAdditionalText` <a name="ResetEmailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText"></a>

```csharp
private void ResetEmailAdditionalText()
```

##### `ResetEmailAuthorInBody` <a name="ResetEmailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody"></a>

```csharp
private void ResetEmailAuthorInBody()
```

##### `ResetEnabledGitAccessProtocol` <a name="ResetEnabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnabledGitAccessProtocol"></a>

```csharp
private void ResetEnabledGitAccessProtocol()
```

##### `ResetEnforceNamespaceStorageLimit` <a name="ResetEnforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceNamespaceStorageLimit"></a>

```csharp
private void ResetEnforceNamespaceStorageLimit()
```

##### `ResetEnforceTerms` <a name="ResetEnforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceTerms"></a>

```csharp
private void ResetEnforceTerms()
```

##### `ResetExternalAuthClientCert` <a name="ResetExternalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientCert"></a>

```csharp
private void ResetExternalAuthClientCert()
```

##### `ResetExternalAuthClientKey` <a name="ResetExternalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKey"></a>

```csharp
private void ResetExternalAuthClientKey()
```

##### `ResetExternalAuthClientKeyPass` <a name="ResetExternalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKeyPass"></a>

```csharp
private void ResetExternalAuthClientKeyPass()
```

##### `ResetExternalAuthorizationServiceDefaultLabel` <a name="ResetExternalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceDefaultLabel"></a>

```csharp
private void ResetExternalAuthorizationServiceDefaultLabel()
```

##### `ResetExternalAuthorizationServiceEnabled` <a name="ResetExternalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceEnabled"></a>

```csharp
private void ResetExternalAuthorizationServiceEnabled()
```

##### `ResetExternalAuthorizationServiceTimeout` <a name="ResetExternalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceTimeout"></a>

```csharp
private void ResetExternalAuthorizationServiceTimeout()
```

##### `ResetExternalAuthorizationServiceUrl` <a name="ResetExternalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceUrl"></a>

```csharp
private void ResetExternalAuthorizationServiceUrl()
```

##### `ResetExternalPipelineValidationServiceTimeout` <a name="ResetExternalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceTimeout"></a>

```csharp
private void ResetExternalPipelineValidationServiceTimeout()
```

##### `ResetExternalPipelineValidationServiceToken` <a name="ResetExternalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceToken"></a>

```csharp
private void ResetExternalPipelineValidationServiceToken()
```

##### `ResetExternalPipelineValidationServiceUrl` <a name="ResetExternalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceUrl"></a>

```csharp
private void ResetExternalPipelineValidationServiceUrl()
```

##### `ResetFileTemplateProjectId` <a name="ResetFileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId"></a>

```csharp
private void ResetFileTemplateProjectId()
```

##### `ResetFirstDayOfWeek` <a name="ResetFirstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek"></a>

```csharp
private void ResetFirstDayOfWeek()
```

##### `ResetGeoNodeAllowedIps` <a name="ResetGeoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps"></a>

```csharp
private void ResetGeoNodeAllowedIps()
```

##### `ResetGeoStatusTimeout` <a name="ResetGeoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout"></a>

```csharp
private void ResetGeoStatusTimeout()
```

##### `ResetGitalyTimeoutDefault` <a name="ResetGitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault"></a>

```csharp
private void ResetGitalyTimeoutDefault()
```

##### `ResetGitalyTimeoutFast` <a name="ResetGitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast"></a>

```csharp
private void ResetGitalyTimeoutFast()
```

##### `ResetGitalyTimeoutMedium` <a name="ResetGitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium"></a>

```csharp
private void ResetGitalyTimeoutMedium()
```

##### `ResetGitRateLimitUsersAllowlist` <a name="ResetGitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist"></a>

```csharp
private void ResetGitRateLimitUsersAllowlist()
```

##### `ResetGitTwoFactorSessionExpiry` <a name="ResetGitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry"></a>

```csharp
private void ResetGitTwoFactorSessionExpiry()
```

##### `ResetGrafanaEnabled` <a name="ResetGrafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaEnabled"></a>

```csharp
private void ResetGrafanaEnabled()
```

##### `ResetGrafanaUrl` <a name="ResetGrafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaUrl"></a>

```csharp
private void ResetGrafanaUrl()
```

##### `ResetGravatarEnabled` <a name="ResetGravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGravatarEnabled"></a>

```csharp
private void ResetGravatarEnabled()
```

##### `ResetGroupOwnersCanManageDefaultBranchProtection` <a name="ResetGroupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGroupOwnersCanManageDefaultBranchProtection"></a>

```csharp
private void ResetGroupOwnersCanManageDefaultBranchProtection()
```

##### `ResetHashedStorageEnabled` <a name="ResetHashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHashedStorageEnabled"></a>

```csharp
private void ResetHashedStorageEnabled()
```

##### `ResetHelpPageHideCommercialContent` <a name="ResetHelpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageHideCommercialContent"></a>

```csharp
private void ResetHelpPageHideCommercialContent()
```

##### `ResetHelpPageSupportUrl` <a name="ResetHelpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageSupportUrl"></a>

```csharp
private void ResetHelpPageSupportUrl()
```

##### `ResetHelpPageText` <a name="ResetHelpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageText"></a>

```csharp
private void ResetHelpPageText()
```

##### `ResetHelpText` <a name="ResetHelpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpText"></a>

```csharp
private void ResetHelpText()
```

##### `ResetHideThirdPartyOffers` <a name="ResetHideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHideThirdPartyOffers"></a>

```csharp
private void ResetHideThirdPartyOffers()
```

##### `ResetHomePageUrl` <a name="ResetHomePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHomePageUrl"></a>

```csharp
private void ResetHomePageUrl()
```

##### `ResetHousekeepingEnabled` <a name="ResetHousekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingEnabled"></a>

```csharp
private void ResetHousekeepingEnabled()
```

##### `ResetHousekeepingFullRepackPeriod` <a name="ResetHousekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingFullRepackPeriod"></a>

```csharp
private void ResetHousekeepingFullRepackPeriod()
```

##### `ResetHousekeepingGcPeriod` <a name="ResetHousekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingGcPeriod"></a>

```csharp
private void ResetHousekeepingGcPeriod()
```

##### `ResetHousekeepingIncrementalRepackPeriod` <a name="ResetHousekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingIncrementalRepackPeriod"></a>

```csharp
private void ResetHousekeepingIncrementalRepackPeriod()
```

##### `ResetHousekeepingOptimizeRepositoryPeriod` <a name="ResetHousekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingOptimizeRepositoryPeriod"></a>

```csharp
private void ResetHousekeepingOptimizeRepositoryPeriod()
```

##### `ResetHtmlEmailsEnabled` <a name="ResetHtmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHtmlEmailsEnabled"></a>

```csharp
private void ResetHtmlEmailsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportSources` <a name="ResetImportSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetImportSources"></a>

```csharp
private void ResetImportSources()
```

##### `ResetInactiveProjectsDeleteAfterMonths` <a name="ResetInactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsDeleteAfterMonths"></a>

```csharp
private void ResetInactiveProjectsDeleteAfterMonths()
```

##### `ResetInactiveProjectsMinSizeMb` <a name="ResetInactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsMinSizeMb"></a>

```csharp
private void ResetInactiveProjectsMinSizeMb()
```

##### `ResetInactiveProjectsSendWarningEmailAfterMonths` <a name="ResetInactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsSendWarningEmailAfterMonths"></a>

```csharp
private void ResetInactiveProjectsSendWarningEmailAfterMonths()
```

##### `ResetInProductMarketingEmailsEnabled` <a name="ResetInProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled"></a>

```csharp
private void ResetInProductMarketingEmailsEnabled()
```

##### `ResetInvisibleCaptchaEnabled` <a name="ResetInvisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled"></a>

```csharp
private void ResetInvisibleCaptchaEnabled()
```

##### `ResetIssuesCreateLimit` <a name="ResetIssuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit"></a>

```csharp
private void ResetIssuesCreateLimit()
```

##### `ResetKeepLatestArtifact` <a name="ResetKeepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact"></a>

```csharp
private void ResetKeepLatestArtifact()
```

##### `ResetLocalMarkdownVersion` <a name="ResetLocalMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion"></a>

```csharp
private void ResetLocalMarkdownVersion()
```

##### `ResetMailgunEventsEnabled` <a name="ResetMailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled"></a>

```csharp
private void ResetMailgunEventsEnabled()
```

##### `ResetMailgunSigningKey` <a name="ResetMailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey"></a>

```csharp
private void ResetMailgunSigningKey()
```

##### `ResetMaintenanceMode` <a name="ResetMaintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode"></a>

```csharp
private void ResetMaintenanceMode()
```

##### `ResetMaintenanceModeMessage` <a name="ResetMaintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage"></a>

```csharp
private void ResetMaintenanceModeMessage()
```

##### `ResetMaxArtifactsSize` <a name="ResetMaxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize"></a>

```csharp
private void ResetMaxArtifactsSize()
```

##### `ResetMaxAttachmentSize` <a name="ResetMaxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize"></a>

```csharp
private void ResetMaxAttachmentSize()
```

##### `ResetMaxExportSize` <a name="ResetMaxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize"></a>

```csharp
private void ResetMaxExportSize()
```

##### `ResetMaxImportSize` <a name="ResetMaxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize"></a>

```csharp
private void ResetMaxImportSize()
```

##### `ResetMaxNumberOfRepositoryDownloads` <a name="ResetMaxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads"></a>

```csharp
private void ResetMaxNumberOfRepositoryDownloads()
```

##### `ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod` <a name="ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```csharp
private void ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod()
```

##### `ResetMaxPagesSize` <a name="ResetMaxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize"></a>

```csharp
private void ResetMaxPagesSize()
```

##### `ResetMaxPersonalAccessTokenLifetime` <a name="ResetMaxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime"></a>

```csharp
private void ResetMaxPersonalAccessTokenLifetime()
```

##### `ResetMaxSshKeyLifetime` <a name="ResetMaxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime"></a>

```csharp
private void ResetMaxSshKeyLifetime()
```

##### `ResetMetricsMethodCallThreshold` <a name="ResetMetricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold"></a>

```csharp
private void ResetMetricsMethodCallThreshold()
```

##### `ResetMirrorAvailable` <a name="ResetMirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable"></a>

```csharp
private void ResetMirrorAvailable()
```

##### `ResetMirrorCapacityThreshold` <a name="ResetMirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold"></a>

```csharp
private void ResetMirrorCapacityThreshold()
```

##### `ResetMirrorMaxCapacity` <a name="ResetMirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity"></a>

```csharp
private void ResetMirrorMaxCapacity()
```

##### `ResetMirrorMaxDelay` <a name="ResetMirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay"></a>

```csharp
private void ResetMirrorMaxDelay()
```

##### `ResetNpmPackageRequestsForwarding` <a name="ResetNpmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding"></a>

```csharp
private void ResetNpmPackageRequestsForwarding()
```

##### `ResetOutboundLocalRequestsWhitelist` <a name="ResetOutboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist"></a>

```csharp
private void ResetOutboundLocalRequestsWhitelist()
```

##### `ResetPackageRegistryCleanupPoliciesWorkerCapacity` <a name="ResetPackageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryCleanupPoliciesWorkerCapacity"></a>

```csharp
private void ResetPackageRegistryCleanupPoliciesWorkerCapacity()
```

##### `ResetPagesDomainVerificationEnabled` <a name="ResetPagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPagesDomainVerificationEnabled"></a>

```csharp
private void ResetPagesDomainVerificationEnabled()
```

##### `ResetPasswordAuthenticationEnabledForGit` <a name="ResetPasswordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForGit"></a>

```csharp
private void ResetPasswordAuthenticationEnabledForGit()
```

##### `ResetPasswordAuthenticationEnabledForWeb` <a name="ResetPasswordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForWeb"></a>

```csharp
private void ResetPasswordAuthenticationEnabledForWeb()
```

##### `ResetPasswordLowercaseRequired` <a name="ResetPasswordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordLowercaseRequired"></a>

```csharp
private void ResetPasswordLowercaseRequired()
```

##### `ResetPasswordNumberRequired` <a name="ResetPasswordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordNumberRequired"></a>

```csharp
private void ResetPasswordNumberRequired()
```

##### `ResetPasswordSymbolRequired` <a name="ResetPasswordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordSymbolRequired"></a>

```csharp
private void ResetPasswordSymbolRequired()
```

##### `ResetPasswordUppercaseRequired` <a name="ResetPasswordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordUppercaseRequired"></a>

```csharp
private void ResetPasswordUppercaseRequired()
```

##### `ResetPerformanceBarAllowedGroupPath` <a name="ResetPerformanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPerformanceBarAllowedGroupPath"></a>

```csharp
private void ResetPerformanceBarAllowedGroupPath()
```

##### `ResetPersonalAccessTokenPrefix` <a name="ResetPersonalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPersonalAccessTokenPrefix"></a>

```csharp
private void ResetPersonalAccessTokenPrefix()
```

##### `ResetPipelineLimitPerProjectUserSha` <a name="ResetPipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPipelineLimitPerProjectUserSha"></a>

```csharp
private void ResetPipelineLimitPerProjectUserSha()
```

##### `ResetPlantumlEnabled` <a name="ResetPlantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlEnabled"></a>

```csharp
private void ResetPlantumlEnabled()
```

##### `ResetPlantumlUrl` <a name="ResetPlantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlUrl"></a>

```csharp
private void ResetPlantumlUrl()
```

##### `ResetPollingIntervalMultiplier` <a name="ResetPollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPollingIntervalMultiplier"></a>

```csharp
private void ResetPollingIntervalMultiplier()
```

##### `ResetProjectExportEnabled` <a name="ResetProjectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectExportEnabled"></a>

```csharp
private void ResetProjectExportEnabled()
```

##### `ResetPrometheusMetricsEnabled` <a name="ResetPrometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPrometheusMetricsEnabled"></a>

```csharp
private void ResetPrometheusMetricsEnabled()
```

##### `ResetProtectedCiVariables` <a name="ResetProtectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProtectedCiVariables"></a>

```csharp
private void ResetProtectedCiVariables()
```

##### `ResetPushEventActivitiesLimit` <a name="ResetPushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventActivitiesLimit"></a>

```csharp
private void ResetPushEventActivitiesLimit()
```

##### `ResetPushEventHooksLimit` <a name="ResetPushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventHooksLimit"></a>

```csharp
private void ResetPushEventHooksLimit()
```

##### `ResetPypiPackageRequestsForwarding` <a name="ResetPypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPypiPackageRequestsForwarding"></a>

```csharp
private void ResetPypiPackageRequestsForwarding()
```

##### `ResetRateLimitingResponseText` <a name="ResetRateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRateLimitingResponseText"></a>

```csharp
private void ResetRateLimitingResponseText()
```

##### `ResetRawBlobRequestLimit` <a name="ResetRawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRawBlobRequestLimit"></a>

```csharp
private void ResetRawBlobRequestLimit()
```

##### `ResetRecaptchaEnabled` <a name="ResetRecaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaEnabled"></a>

```csharp
private void ResetRecaptchaEnabled()
```

##### `ResetRecaptchaPrivateKey` <a name="ResetRecaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaPrivateKey"></a>

```csharp
private void ResetRecaptchaPrivateKey()
```

##### `ResetRecaptchaSiteKey` <a name="ResetRecaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaSiteKey"></a>

```csharp
private void ResetRecaptchaSiteKey()
```

##### `ResetReceiveMaxInputSize` <a name="ResetReceiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceiveMaxInputSize"></a>

```csharp
private void ResetReceiveMaxInputSize()
```

##### `ResetRepositoryChecksEnabled` <a name="ResetRepositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled"></a>

```csharp
private void ResetRepositoryChecksEnabled()
```

##### `ResetRepositorySizeLimit` <a name="ResetRepositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit"></a>

```csharp
private void ResetRepositorySizeLimit()
```

##### `ResetRepositoryStorages` <a name="ResetRepositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages"></a>

```csharp
private void ResetRepositoryStorages()
```

##### `ResetRepositoryStoragesWeighted` <a name="ResetRepositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted"></a>

```csharp
private void ResetRepositoryStoragesWeighted()
```

##### `ResetRequireAdminApprovalAfterUserSignup` <a name="ResetRequireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup"></a>

```csharp
private void ResetRequireAdminApprovalAfterUserSignup()
```

##### `ResetRequireTwoFactorAuthentication` <a name="ResetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication"></a>

```csharp
private void ResetRequireTwoFactorAuthentication()
```

##### `ResetRestrictedVisibilityLevels` <a name="ResetRestrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels"></a>

```csharp
private void ResetRestrictedVisibilityLevels()
```

##### `ResetRsaKeyRestriction` <a name="ResetRsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction"></a>

```csharp
private void ResetRsaKeyRestriction()
```

##### `ResetSearchRateLimit` <a name="ResetSearchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit"></a>

```csharp
private void ResetSearchRateLimit()
```

##### `ResetSearchRateLimitUnauthenticated` <a name="ResetSearchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated"></a>

```csharp
private void ResetSearchRateLimitUnauthenticated()
```

##### `ResetSendUserConfirmationEmail` <a name="ResetSendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail"></a>

```csharp
private void ResetSendUserConfirmationEmail()
```

##### `ResetSessionExpireDelay` <a name="ResetSessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay"></a>

```csharp
private void ResetSessionExpireDelay()
```

##### `ResetSharedRunnersEnabled` <a name="ResetSharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled"></a>

```csharp
private void ResetSharedRunnersEnabled()
```

##### `ResetSharedRunnersMinutes` <a name="ResetSharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes"></a>

```csharp
private void ResetSharedRunnersMinutes()
```

##### `ResetSharedRunnersText` <a name="ResetSharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText"></a>

```csharp
private void ResetSharedRunnersText()
```

##### `ResetSidekiqJobLimiterCompressionThresholdBytes` <a name="ResetSidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes"></a>

```csharp
private void ResetSidekiqJobLimiterCompressionThresholdBytes()
```

##### `ResetSidekiqJobLimiterLimitBytes` <a name="ResetSidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes"></a>

```csharp
private void ResetSidekiqJobLimiterLimitBytes()
```

##### `ResetSidekiqJobLimiterMode` <a name="ResetSidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode"></a>

```csharp
private void ResetSidekiqJobLimiterMode()
```

##### `ResetSignInText` <a name="ResetSignInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText"></a>

```csharp
private void ResetSignInText()
```

##### `ResetSignupEnabled` <a name="ResetSignupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled"></a>

```csharp
private void ResetSignupEnabled()
```

##### `ResetSlackAppEnabled` <a name="ResetSlackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled"></a>

```csharp
private void ResetSlackAppEnabled()
```

##### `ResetSlackAppId` <a name="ResetSlackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId"></a>

```csharp
private void ResetSlackAppId()
```

##### `ResetSlackAppSecret` <a name="ResetSlackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret"></a>

```csharp
private void ResetSlackAppSecret()
```

##### `ResetSlackAppSigningSecret` <a name="ResetSlackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret"></a>

```csharp
private void ResetSlackAppSigningSecret()
```

##### `ResetSlackAppVerificationToken` <a name="ResetSlackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken"></a>

```csharp
private void ResetSlackAppVerificationToken()
```

##### `ResetSnippetSizeLimit` <a name="ResetSnippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit"></a>

```csharp
private void ResetSnippetSizeLimit()
```

##### `ResetSnowplowAppId` <a name="ResetSnowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId"></a>

```csharp
private void ResetSnowplowAppId()
```

##### `ResetSnowplowCollectorHostname` <a name="ResetSnowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname"></a>

```csharp
private void ResetSnowplowCollectorHostname()
```

##### `ResetSnowplowCookieDomain` <a name="ResetSnowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain"></a>

```csharp
private void ResetSnowplowCookieDomain()
```

##### `ResetSnowplowEnabled` <a name="ResetSnowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled"></a>

```csharp
private void ResetSnowplowEnabled()
```

##### `ResetSourcegraphEnabled` <a name="ResetSourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled"></a>

```csharp
private void ResetSourcegraphEnabled()
```

##### `ResetSourcegraphPublicOnly` <a name="ResetSourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly"></a>

```csharp
private void ResetSourcegraphPublicOnly()
```

##### `ResetSourcegraphUrl` <a name="ResetSourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl"></a>

```csharp
private void ResetSourcegraphUrl()
```

##### `ResetSpamCheckApiKey` <a name="ResetSpamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey"></a>

```csharp
private void ResetSpamCheckApiKey()
```

##### `ResetSpamCheckEndpointEnabled` <a name="ResetSpamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled"></a>

```csharp
private void ResetSpamCheckEndpointEnabled()
```

##### `ResetSpamCheckEndpointUrl` <a name="ResetSpamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl"></a>

```csharp
private void ResetSpamCheckEndpointUrl()
```

##### `ResetSuggestPipelineEnabled` <a name="ResetSuggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSuggestPipelineEnabled"></a>

```csharp
private void ResetSuggestPipelineEnabled()
```

##### `ResetTerminalMaxSessionTime` <a name="ResetTerminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerminalMaxSessionTime"></a>

```csharp
private void ResetTerminalMaxSessionTime()
```

##### `ResetTerms` <a name="ResetTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerms"></a>

```csharp
private void ResetTerms()
```

##### `ResetThrottleAuthenticatedApiEnabled` <a name="ResetThrottleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiEnabled"></a>

```csharp
private void ResetThrottleAuthenticatedApiEnabled()
```

##### `ResetThrottleAuthenticatedApiPeriodInSeconds` <a name="ResetThrottleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiPeriodInSeconds"></a>

```csharp
private void ResetThrottleAuthenticatedApiPeriodInSeconds()
```

##### `ResetThrottleAuthenticatedApiRequestsPerPeriod` <a name="ResetThrottleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiRequestsPerPeriod"></a>

```csharp
private void ResetThrottleAuthenticatedApiRequestsPerPeriod()
```

##### `ResetThrottleAuthenticatedPackagesApiEnabled` <a name="ResetThrottleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiEnabled"></a>

```csharp
private void ResetThrottleAuthenticatedPackagesApiEnabled()
```

##### `ResetThrottleAuthenticatedPackagesApiPeriodInSeconds` <a name="ResetThrottleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiPeriodInSeconds"></a>

```csharp
private void ResetThrottleAuthenticatedPackagesApiPeriodInSeconds()
```

##### `ResetThrottleAuthenticatedPackagesApiRequestsPerPeriod` <a name="ResetThrottleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```csharp
private void ResetThrottleAuthenticatedPackagesApiRequestsPerPeriod()
```

##### `ResetThrottleAuthenticatedWebEnabled` <a name="ResetThrottleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebEnabled"></a>

```csharp
private void ResetThrottleAuthenticatedWebEnabled()
```

##### `ResetThrottleAuthenticatedWebPeriodInSeconds` <a name="ResetThrottleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebPeriodInSeconds"></a>

```csharp
private void ResetThrottleAuthenticatedWebPeriodInSeconds()
```

##### `ResetThrottleAuthenticatedWebRequestsPerPeriod` <a name="ResetThrottleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebRequestsPerPeriod"></a>

```csharp
private void ResetThrottleAuthenticatedWebRequestsPerPeriod()
```

##### `ResetThrottleUnauthenticatedApiEnabled` <a name="ResetThrottleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiEnabled"></a>

```csharp
private void ResetThrottleUnauthenticatedApiEnabled()
```

##### `ResetThrottleUnauthenticatedApiPeriodInSeconds` <a name="ResetThrottleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiPeriodInSeconds"></a>

```csharp
private void ResetThrottleUnauthenticatedApiPeriodInSeconds()
```

##### `ResetThrottleUnauthenticatedApiRequestsPerPeriod` <a name="ResetThrottleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiRequestsPerPeriod"></a>

```csharp
private void ResetThrottleUnauthenticatedApiRequestsPerPeriod()
```

##### `ResetThrottleUnauthenticatedPackagesApiEnabled` <a name="ResetThrottleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiEnabled"></a>

```csharp
private void ResetThrottleUnauthenticatedPackagesApiEnabled()
```

##### `ResetThrottleUnauthenticatedPackagesApiPeriodInSeconds` <a name="ResetThrottleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```csharp
private void ResetThrottleUnauthenticatedPackagesApiPeriodInSeconds()
```

##### `ResetThrottleUnauthenticatedPackagesApiRequestsPerPeriod` <a name="ResetThrottleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```csharp
private void ResetThrottleUnauthenticatedPackagesApiRequestsPerPeriod()
```

##### `ResetThrottleUnauthenticatedWebEnabled` <a name="ResetThrottleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebEnabled"></a>

```csharp
private void ResetThrottleUnauthenticatedWebEnabled()
```

##### `ResetThrottleUnauthenticatedWebPeriodInSeconds` <a name="ResetThrottleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebPeriodInSeconds"></a>

```csharp
private void ResetThrottleUnauthenticatedWebPeriodInSeconds()
```

##### `ResetThrottleUnauthenticatedWebRequestsPerPeriod` <a name="ResetThrottleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebRequestsPerPeriod"></a>

```csharp
private void ResetThrottleUnauthenticatedWebRequestsPerPeriod()
```

##### `ResetTimeTrackingLimitToHours` <a name="ResetTimeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTimeTrackingLimitToHours"></a>

```csharp
private void ResetTimeTrackingLimitToHours()
```

##### `ResetTwoFactorGracePeriod` <a name="ResetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTwoFactorGracePeriod"></a>

```csharp
private void ResetTwoFactorGracePeriod()
```

##### `ResetUniqueIpsLimitEnabled` <a name="ResetUniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled"></a>

```csharp
private void ResetUniqueIpsLimitEnabled()
```

##### `ResetUniqueIpsLimitPerUser` <a name="ResetUniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser"></a>

```csharp
private void ResetUniqueIpsLimitPerUser()
```

##### `ResetUniqueIpsLimitTimeWindow` <a name="ResetUniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow"></a>

```csharp
private void ResetUniqueIpsLimitTimeWindow()
```

##### `ResetUsagePingEnabled` <a name="ResetUsagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled"></a>

```csharp
private void ResetUsagePingEnabled()
```

##### `ResetUserDeactivationEmailsEnabled` <a name="ResetUserDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled"></a>

```csharp
private void ResetUserDeactivationEmailsEnabled()
```

##### `ResetUserDefaultExternal` <a name="ResetUserDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal"></a>

```csharp
private void ResetUserDefaultExternal()
```

##### `ResetUserDefaultInternalRegex` <a name="ResetUserDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex"></a>

```csharp
private void ResetUserDefaultInternalRegex()
```

##### `ResetUserOauthApplications` <a name="ResetUserOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications"></a>

```csharp
private void ResetUserOauthApplications()
```

##### `ResetUserShowAddSshKeyMessage` <a name="ResetUserShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage"></a>

```csharp
private void ResetUserShowAddSshKeyMessage()
```

##### `ResetVersionCheckEnabled` <a name="ResetVersionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled"></a>

```csharp
private void ResetVersionCheckEnabled()
```

##### `ResetWebIdeClientsidePreviewEnabled` <a name="ResetWebIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled"></a>

```csharp
private void ResetWebIdeClientsidePreviewEnabled()
```

##### `ResetWhatsNewVariant` <a name="ResetWhatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant"></a>

```csharp
private void ResetWhatsNewVariant()
```

##### `ResetWikiPageMaxContentBytes` <a name="ResetWikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes"></a>

```csharp
private void ResetWikiPageMaxContentBytes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationSettings.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput">AbuseNotificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput">AdminModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput">AfterSignOutPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput">AfterSignUpTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput">AkismetApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput">AkismetEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput">AllowGroupOwnersToManageLdapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput">AllowLocalRequestsFromSystemHooksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput">AllowLocalRequestsFromWebHooksAndServicesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput">ArchiveBuildsInHumanReadableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput">AssetProxyAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput">AssetProxyEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput">AssetProxySecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput">AssetProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput">AuthorizedKeysEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput">AutoDevopsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput">AutomaticPurchasedStorageAllocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput">CanCreateGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput">CheckNamespacePlanInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput">CommitEmailHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput">ContainerExpirationPoliciesEnableHistoricEntriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput">ContainerRegistryCleanupTagsServiceMaxListSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput">ContainerRegistryDeleteTagsServiceTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput">ContainerRegistryExpirationPoliciesCachingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput">ContainerRegistryExpirationPoliciesWorkerCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput">ContainerRegistryTokenExpireDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput">DeactivateDormantUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput">DefaultArtifactsExpireInInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput">DefaultBranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput">DefaultBranchProtectionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput">DefaultCiConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput">DefaultGroupVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput">DefaultProjectCreationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput">DefaultProjectsLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput">DefaultProjectVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput">DefaultSnippetVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput">DeleteInactiveProjectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput">DeletionAdjournedPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput">DiffMaxFilesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput">DiffMaxLinesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput">DiffMaxPatchBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput">DisabledOauthSignInSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput">DisableFeedTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput">DnsRebindingProtectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput">DomainAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput">DomainDenylistEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput">DomainDenylistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput">DsaKeyRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput">EcdsaKeyRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput">EcdsaSkKeyRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput">Ed25519KeyRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput">Ed25519SkKeyRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput">EksAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput">EksAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput">EksIntegrationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput">EksSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput">ElasticsearchAwsAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput">ElasticsearchAwsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput">ElasticsearchAwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput">ElasticsearchAwsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput">ElasticsearchIndexedFieldLengthLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput">ElasticsearchIndexedFileSizeLimitKbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput">ElasticsearchIndexingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput">ElasticsearchLimitIndexingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput">ElasticsearchMaxBulkConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput">ElasticsearchMaxBulkSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput">ElasticsearchNamespaceIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput">ElasticsearchPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput">ElasticsearchProjectIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput">ElasticsearchSearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput">ElasticsearchUrlInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput">ElasticsearchUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput">EmailAdditionalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput">EmailAuthorInBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput">EnabledGitAccessProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput">EnforceNamespaceStorageLimitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput">EnforceTermsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput">ExternalAuthClientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput">ExternalAuthClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput">ExternalAuthClientKeyPassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput">ExternalAuthorizationServiceDefaultLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput">ExternalAuthorizationServiceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput">ExternalAuthorizationServiceTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput">ExternalAuthorizationServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput">ExternalPipelineValidationServiceTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput">ExternalPipelineValidationServiceTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput">ExternalPipelineValidationServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput">FileTemplateProjectIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput">FirstDayOfWeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput">GeoNodeAllowedIpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput">GeoStatusTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput">GitalyTimeoutDefaultInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput">GitalyTimeoutFastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput">GitalyTimeoutMediumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput">GitRateLimitUsersAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput">GitTwoFactorSessionExpiryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput">GrafanaEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput">GrafanaUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput">GravatarEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput">GroupOwnersCanManageDefaultBranchProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput">HashedStorageEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput">HelpPageHideCommercialContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput">HelpPageSupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput">HelpPageTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput">HelpTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput">HideThirdPartyOffersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput">HomePageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput">HousekeepingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput">HousekeepingFullRepackPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput">HousekeepingGcPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput">HousekeepingIncrementalRepackPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriodInput">HousekeepingOptimizeRepositoryPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput">HtmlEmailsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput">ImportSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput">InactiveProjectsDeleteAfterMonthsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput">InactiveProjectsMinSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput">InactiveProjectsSendWarningEmailAfterMonthsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput">InProductMarketingEmailsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput">InvisibleCaptchaEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput">IssuesCreateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput">KeepLatestArtifactInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput">LocalMarkdownVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput">MailgunEventsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput">MailgunSigningKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput">MaintenanceModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput">MaintenanceModeMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput">MaxArtifactsSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput">MaxAttachmentSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput">MaxExportSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput">MaxImportSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput">MaxNumberOfRepositoryDownloadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput">MaxNumberOfRepositoryDownloadsWithinTimePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput">MaxPagesSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput">MaxPersonalAccessTokenLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput">MaxSshKeyLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput">MetricsMethodCallThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput">MirrorAvailableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput">MirrorCapacityThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput">MirrorMaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput">MirrorMaxDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput">NpmPackageRequestsForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput">OutboundLocalRequestsWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput">PackageRegistryCleanupPoliciesWorkerCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput">PagesDomainVerificationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput">PasswordAuthenticationEnabledForGitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput">PasswordAuthenticationEnabledForWebInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput">PasswordLowercaseRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput">PasswordNumberRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput">PasswordSymbolRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput">PasswordUppercaseRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput">PerformanceBarAllowedGroupPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput">PersonalAccessTokenPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput">PipelineLimitPerProjectUserShaInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput">PlantumlEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput">PlantumlUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput">PollingIntervalMultiplierInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput">ProjectExportEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput">PrometheusMetricsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput">ProtectedCiVariablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput">PushEventActivitiesLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput">PushEventHooksLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput">PypiPackageRequestsForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput">RateLimitingResponseTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput">RawBlobRequestLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput">RecaptchaEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput">RecaptchaPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput">RecaptchaSiteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput">ReceiveMaxInputSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput">RepositoryChecksEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput">RepositorySizeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput">RepositoryStoragesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput">RepositoryStoragesWeightedInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput">RequireAdminApprovalAfterUserSignupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput">RequireTwoFactorAuthenticationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput">RestrictedVisibilityLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput">RsaKeyRestrictionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput">SearchRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput">SearchRateLimitUnauthenticatedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput">SendUserConfirmationEmailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput">SessionExpireDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput">SharedRunnersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput">SharedRunnersMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput">SharedRunnersTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput">SidekiqJobLimiterCompressionThresholdBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput">SidekiqJobLimiterLimitBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput">SidekiqJobLimiterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput">SignInTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput">SignupEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput">SlackAppEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput">SlackAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput">SlackAppSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput">SlackAppSigningSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput">SlackAppVerificationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput">SnippetSizeLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput">SnowplowAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput">SnowplowCollectorHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput">SnowplowCookieDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput">SnowplowEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput">SourcegraphEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput">SourcegraphPublicOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput">SourcegraphUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput">SpamCheckApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput">SpamCheckEndpointEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput">SpamCheckEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput">SuggestPipelineEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput">TerminalMaxSessionTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput">TermsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput">ThrottleAuthenticatedApiEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput">ThrottleAuthenticatedApiPeriodInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput">ThrottleAuthenticatedApiRequestsPerPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput">ThrottleAuthenticatedPackagesApiEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput">ThrottleAuthenticatedPackagesApiPeriodInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput">ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput">ThrottleAuthenticatedWebEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput">ThrottleAuthenticatedWebPeriodInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput">ThrottleAuthenticatedWebRequestsPerPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput">ThrottleUnauthenticatedApiEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput">ThrottleUnauthenticatedApiPeriodInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput">ThrottleUnauthenticatedApiRequestsPerPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput">ThrottleUnauthenticatedPackagesApiEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput">ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput">ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput">ThrottleUnauthenticatedWebEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput">ThrottleUnauthenticatedWebPeriodInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput">ThrottleUnauthenticatedWebRequestsPerPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput">TimeTrackingLimitToHoursInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput">TwoFactorGracePeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput">UniqueIpsLimitEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput">UniqueIpsLimitPerUserInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput">UniqueIpsLimitTimeWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput">UsagePingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput">UserDeactivationEmailsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput">UserDefaultExternalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput">UserDefaultInternalRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput">UserOauthApplicationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput">UserShowAddSshKeyMessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput">VersionCheckEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput">WebIdeClientsidePreviewEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput">WhatsNewVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput">WikiPageMaxContentBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail">AbuseNotificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode">AdminMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath">AfterSignOutPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText">AfterSignUpText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey">AkismetApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled">AkismetEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap">AllowGroupOwnersToManageLdap</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks">AllowLocalRequestsFromSystemHooks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices">AllowLocalRequestsFromWebHooksAndServices</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable">ArchiveBuildsInHumanReadable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist">AssetProxyAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled">AssetProxyEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey">AssetProxySecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl">AssetProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled">AuthorizedKeysEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain">AutoDevopsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation">AutomaticPurchasedStorageAllocation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup">CanCreateGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan">CheckNamespacePlan</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname">CommitEmailHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries">ContainerExpirationPoliciesEnableHistoricEntries</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize">ContainerRegistryCleanupTagsServiceMaxListSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout">ContainerRegistryDeleteTagsServiceTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching">ContainerRegistryExpirationPoliciesCaching</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity">ContainerRegistryExpirationPoliciesWorkerCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay">ContainerRegistryTokenExpireDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers">DeactivateDormantUsers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn">DefaultArtifactsExpireIn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName">DefaultBranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath">DefaultCiConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility">DefaultGroupVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation">DefaultProjectCreation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit">DefaultProjectsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility">DefaultProjectVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility">DefaultSnippetVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects">DeleteInactiveProjects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod">DeletionAdjournedPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles">DiffMaxFiles</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines">DiffMaxLines</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes">DiffMaxPatchBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources">DisabledOauthSignInSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken">DisableFeedToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled">DnsRebindingProtectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist">DomainAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist">DomainDenylist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled">DomainDenylistEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction">DsaKeyRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction">EcdsaKeyRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction">EcdsaSkKeyRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction">Ed25519KeyRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction">Ed25519SkKeyRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId">EksAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId">EksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled">EksIntegrationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey">EksSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws">ElasticsearchAws</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey">ElasticsearchAwsAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion">ElasticsearchAwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey">ElasticsearchAwsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit">ElasticsearchIndexedFieldLengthLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb">ElasticsearchIndexedFileSizeLimitKb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing">ElasticsearchIndexing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing">ElasticsearchLimitIndexing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency">ElasticsearchMaxBulkConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb">ElasticsearchMaxBulkSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds">ElasticsearchNamespaceIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds">ElasticsearchProjectIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch">ElasticsearchSearch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl">ElasticsearchUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername">ElasticsearchUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText">EmailAdditionalText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody">EmailAuthorInBody</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol">EnabledGitAccessProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit">EnforceNamespaceStorageLimit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms">EnforceTerms</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert">ExternalAuthClientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey">ExternalAuthClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass">ExternalAuthClientKeyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel">ExternalAuthorizationServiceDefaultLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled">ExternalAuthorizationServiceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout">ExternalAuthorizationServiceTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl">ExternalAuthorizationServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout">ExternalPipelineValidationServiceTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken">ExternalPipelineValidationServiceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl">ExternalPipelineValidationServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId">FileTemplateProjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek">FirstDayOfWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps">GeoNodeAllowedIps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout">GeoStatusTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault">GitalyTimeoutDefault</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast">GitalyTimeoutFast</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium">GitalyTimeoutMedium</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist">GitRateLimitUsersAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry">GitTwoFactorSessionExpiry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled">GrafanaEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl">GrafanaUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled">GravatarEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection">GroupOwnersCanManageDefaultBranchProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled">HashedStorageEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent">HelpPageHideCommercialContent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl">HelpPageSupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText">HelpPageText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText">HelpText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers">HideThirdPartyOffers</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl">HomePageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled">HousekeepingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod">HousekeepingFullRepackPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod">HousekeepingGcPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod">HousekeepingIncrementalRepackPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriod">HousekeepingOptimizeRepositoryPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled">HtmlEmailsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources">ImportSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths">InactiveProjectsDeleteAfterMonths</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb">InactiveProjectsMinSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths">InactiveProjectsSendWarningEmailAfterMonths</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled">InProductMarketingEmailsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled">InvisibleCaptchaEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit">IssuesCreateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion">LocalMarkdownVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled">MailgunEventsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey">MailgunSigningKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode">MaintenanceMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage">MaintenanceModeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize">MaxArtifactsSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize">MaxAttachmentSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize">MaxExportSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize">MaxImportSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads">MaxNumberOfRepositoryDownloads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">MaxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize">MaxPagesSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime">MaxPersonalAccessTokenLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime">MaxSshKeyLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold">MetricsMethodCallThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable">MirrorAvailable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold">MirrorCapacityThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity">MirrorMaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay">MirrorMaxDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding">NpmPackageRequestsForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist">OutboundLocalRequestsWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity">PackageRegistryCleanupPoliciesWorkerCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled">PagesDomainVerificationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit">PasswordAuthenticationEnabledForGit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb">PasswordAuthenticationEnabledForWeb</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired">PasswordLowercaseRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired">PasswordNumberRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired">PasswordSymbolRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired">PasswordUppercaseRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath">PerformanceBarAllowedGroupPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix">PersonalAccessTokenPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha">PipelineLimitPerProjectUserSha</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled">PlantumlEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl">PlantumlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier">PollingIntervalMultiplier</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled">ProjectExportEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled">PrometheusMetricsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables">ProtectedCiVariables</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit">PushEventActivitiesLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit">PushEventHooksLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding">PypiPackageRequestsForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText">RateLimitingResponseText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit">RawBlobRequestLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled">RecaptchaEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey">RecaptchaPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey">RecaptchaSiteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize">ReceiveMaxInputSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled">RepositoryChecksEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit">RepositorySizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages">RepositoryStorages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted">RepositoryStoragesWeighted</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup">RequireAdminApprovalAfterUserSignup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels">RestrictedVisibilityLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction">RsaKeyRestriction</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit">SearchRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated">SearchRateLimitUnauthenticated</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail">SendUserConfirmationEmail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay">SessionExpireDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes">SharedRunnersMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText">SharedRunnersText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes">SidekiqJobLimiterCompressionThresholdBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes">SidekiqJobLimiterLimitBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode">SidekiqJobLimiterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText">SignInText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled">SignupEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled">SlackAppEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId">SlackAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret">SlackAppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret">SlackAppSigningSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken">SlackAppVerificationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit">SnippetSizeLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId">SnowplowAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname">SnowplowCollectorHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain">SnowplowCookieDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled">SnowplowEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled">SourcegraphEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly">SourcegraphPublicOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl">SourcegraphUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey">SpamCheckApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled">SpamCheckEndpointEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl">SpamCheckEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled">SuggestPipelineEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime">TerminalMaxSessionTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms">Terms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled">ThrottleAuthenticatedApiEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds">ThrottleAuthenticatedApiPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod">ThrottleAuthenticatedApiRequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled">ThrottleAuthenticatedPackagesApiEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds">ThrottleAuthenticatedPackagesApiPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">ThrottleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled">ThrottleAuthenticatedWebEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds">ThrottleAuthenticatedWebPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod">ThrottleAuthenticatedWebRequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled">ThrottleUnauthenticatedApiEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds">ThrottleUnauthenticatedApiPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod">ThrottleUnauthenticatedApiRequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled">ThrottleUnauthenticatedPackagesApiEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">ThrottleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">ThrottleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled">ThrottleUnauthenticatedWebEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds">ThrottleUnauthenticatedWebPeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod">ThrottleUnauthenticatedWebRequestsPerPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours">TimeTrackingLimitToHours</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled">UniqueIpsLimitEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser">UniqueIpsLimitPerUser</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow">UniqueIpsLimitTimeWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled">UsagePingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled">UserDeactivationEmailsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal">UserDefaultExternal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex">UserDefaultInternalRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications">UserOauthApplications</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage">UserShowAddSshKeyMessage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled">VersionCheckEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled">WebIdeClientsidePreviewEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant">WhatsNewVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes">WikiPageMaxContentBytes</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AbuseNotificationEmailInput`<sup>Optional</sup> <a name="AbuseNotificationEmailInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput"></a>

```csharp
public string AbuseNotificationEmailInput { get; }
```

- *Type:* string

---

##### `AdminModeInput`<sup>Optional</sup> <a name="AdminModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput"></a>

```csharp
public object AdminModeInput { get; }
```

- *Type:* object

---

##### `AfterSignOutPathInput`<sup>Optional</sup> <a name="AfterSignOutPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput"></a>

```csharp
public string AfterSignOutPathInput { get; }
```

- *Type:* string

---

##### `AfterSignUpTextInput`<sup>Optional</sup> <a name="AfterSignUpTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput"></a>

```csharp
public string AfterSignUpTextInput { get; }
```

- *Type:* string

---

##### `AkismetApiKeyInput`<sup>Optional</sup> <a name="AkismetApiKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput"></a>

```csharp
public string AkismetApiKeyInput { get; }
```

- *Type:* string

---

##### `AkismetEnabledInput`<sup>Optional</sup> <a name="AkismetEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput"></a>

```csharp
public object AkismetEnabledInput { get; }
```

- *Type:* object

---

##### `AllowGroupOwnersToManageLdapInput`<sup>Optional</sup> <a name="AllowGroupOwnersToManageLdapInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput"></a>

```csharp
public object AllowGroupOwnersToManageLdapInput { get; }
```

- *Type:* object

---

##### `AllowLocalRequestsFromSystemHooksInput`<sup>Optional</sup> <a name="AllowLocalRequestsFromSystemHooksInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput"></a>

```csharp
public object AllowLocalRequestsFromSystemHooksInput { get; }
```

- *Type:* object

---

##### `AllowLocalRequestsFromWebHooksAndServicesInput`<sup>Optional</sup> <a name="AllowLocalRequestsFromWebHooksAndServicesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput"></a>

```csharp
public object AllowLocalRequestsFromWebHooksAndServicesInput { get; }
```

- *Type:* object

---

##### `ArchiveBuildsInHumanReadableInput`<sup>Optional</sup> <a name="ArchiveBuildsInHumanReadableInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput"></a>

```csharp
public string ArchiveBuildsInHumanReadableInput { get; }
```

- *Type:* string

---

##### `AssetProxyAllowlistInput`<sup>Optional</sup> <a name="AssetProxyAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput"></a>

```csharp
public string[] AssetProxyAllowlistInput { get; }
```

- *Type:* string[]

---

##### `AssetProxyEnabledInput`<sup>Optional</sup> <a name="AssetProxyEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput"></a>

```csharp
public object AssetProxyEnabledInput { get; }
```

- *Type:* object

---

##### `AssetProxySecretKeyInput`<sup>Optional</sup> <a name="AssetProxySecretKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput"></a>

```csharp
public string AssetProxySecretKeyInput { get; }
```

- *Type:* string

---

##### `AssetProxyUrlInput`<sup>Optional</sup> <a name="AssetProxyUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput"></a>

```csharp
public string AssetProxyUrlInput { get; }
```

- *Type:* string

---

##### `AuthorizedKeysEnabledInput`<sup>Optional</sup> <a name="AuthorizedKeysEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput"></a>

```csharp
public object AuthorizedKeysEnabledInput { get; }
```

- *Type:* object

---

##### `AutoDevopsDomainInput`<sup>Optional</sup> <a name="AutoDevopsDomainInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput"></a>

```csharp
public string AutoDevopsDomainInput { get; }
```

- *Type:* string

---

##### `AutoDevopsEnabledInput`<sup>Optional</sup> <a name="AutoDevopsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput"></a>

```csharp
public object AutoDevopsEnabledInput { get; }
```

- *Type:* object

---

##### `AutomaticPurchasedStorageAllocationInput`<sup>Optional</sup> <a name="AutomaticPurchasedStorageAllocationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput"></a>

```csharp
public object AutomaticPurchasedStorageAllocationInput { get; }
```

- *Type:* object

---

##### `CanCreateGroupInput`<sup>Optional</sup> <a name="CanCreateGroupInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput"></a>

```csharp
public object CanCreateGroupInput { get; }
```

- *Type:* object

---

##### `CheckNamespacePlanInput`<sup>Optional</sup> <a name="CheckNamespacePlanInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput"></a>

```csharp
public object CheckNamespacePlanInput { get; }
```

- *Type:* object

---

##### `CommitEmailHostnameInput`<sup>Optional</sup> <a name="CommitEmailHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput"></a>

```csharp
public string CommitEmailHostnameInput { get; }
```

- *Type:* string

---

##### `ContainerExpirationPoliciesEnableHistoricEntriesInput`<sup>Optional</sup> <a name="ContainerExpirationPoliciesEnableHistoricEntriesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput"></a>

```csharp
public object ContainerExpirationPoliciesEnableHistoricEntriesInput { get; }
```

- *Type:* object

---

##### `ContainerRegistryCleanupTagsServiceMaxListSizeInput`<sup>Optional</sup> <a name="ContainerRegistryCleanupTagsServiceMaxListSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput"></a>

```csharp
public double ContainerRegistryCleanupTagsServiceMaxListSizeInput { get; }
```

- *Type:* double

---

##### `ContainerRegistryDeleteTagsServiceTimeoutInput`<sup>Optional</sup> <a name="ContainerRegistryDeleteTagsServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput"></a>

```csharp
public double ContainerRegistryDeleteTagsServiceTimeoutInput { get; }
```

- *Type:* double

---

##### `ContainerRegistryExpirationPoliciesCachingInput`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesCachingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput"></a>

```csharp
public object ContainerRegistryExpirationPoliciesCachingInput { get; }
```

- *Type:* object

---

##### `ContainerRegistryExpirationPoliciesWorkerCapacityInput`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesWorkerCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput"></a>

```csharp
public double ContainerRegistryExpirationPoliciesWorkerCapacityInput { get; }
```

- *Type:* double

---

##### `ContainerRegistryTokenExpireDelayInput`<sup>Optional</sup> <a name="ContainerRegistryTokenExpireDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput"></a>

```csharp
public double ContainerRegistryTokenExpireDelayInput { get; }
```

- *Type:* double

---

##### `DeactivateDormantUsersInput`<sup>Optional</sup> <a name="DeactivateDormantUsersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput"></a>

```csharp
public object DeactivateDormantUsersInput { get; }
```

- *Type:* object

---

##### `DefaultArtifactsExpireInInput`<sup>Optional</sup> <a name="DefaultArtifactsExpireInInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput"></a>

```csharp
public string DefaultArtifactsExpireInInput { get; }
```

- *Type:* string

---

##### `DefaultBranchNameInput`<sup>Optional</sup> <a name="DefaultBranchNameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput"></a>

```csharp
public string DefaultBranchNameInput { get; }
```

- *Type:* string

---

##### `DefaultBranchProtectionInput`<sup>Optional</sup> <a name="DefaultBranchProtectionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput"></a>

```csharp
public double DefaultBranchProtectionInput { get; }
```

- *Type:* double

---

##### `DefaultCiConfigPathInput`<sup>Optional</sup> <a name="DefaultCiConfigPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput"></a>

```csharp
public string DefaultCiConfigPathInput { get; }
```

- *Type:* string

---

##### `DefaultGroupVisibilityInput`<sup>Optional</sup> <a name="DefaultGroupVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput"></a>

```csharp
public string DefaultGroupVisibilityInput { get; }
```

- *Type:* string

---

##### `DefaultProjectCreationInput`<sup>Optional</sup> <a name="DefaultProjectCreationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput"></a>

```csharp
public double DefaultProjectCreationInput { get; }
```

- *Type:* double

---

##### `DefaultProjectsLimitInput`<sup>Optional</sup> <a name="DefaultProjectsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput"></a>

```csharp
public double DefaultProjectsLimitInput { get; }
```

- *Type:* double

---

##### `DefaultProjectVisibilityInput`<sup>Optional</sup> <a name="DefaultProjectVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput"></a>

```csharp
public string DefaultProjectVisibilityInput { get; }
```

- *Type:* string

---

##### `DefaultSnippetVisibilityInput`<sup>Optional</sup> <a name="DefaultSnippetVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput"></a>

```csharp
public string DefaultSnippetVisibilityInput { get; }
```

- *Type:* string

---

##### `DeleteInactiveProjectsInput`<sup>Optional</sup> <a name="DeleteInactiveProjectsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput"></a>

```csharp
public object DeleteInactiveProjectsInput { get; }
```

- *Type:* object

---

##### `DeletionAdjournedPeriodInput`<sup>Optional</sup> <a name="DeletionAdjournedPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput"></a>

```csharp
public double DeletionAdjournedPeriodInput { get; }
```

- *Type:* double

---

##### `DiffMaxFilesInput`<sup>Optional</sup> <a name="DiffMaxFilesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput"></a>

```csharp
public double DiffMaxFilesInput { get; }
```

- *Type:* double

---

##### `DiffMaxLinesInput`<sup>Optional</sup> <a name="DiffMaxLinesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput"></a>

```csharp
public double DiffMaxLinesInput { get; }
```

- *Type:* double

---

##### `DiffMaxPatchBytesInput`<sup>Optional</sup> <a name="DiffMaxPatchBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput"></a>

```csharp
public double DiffMaxPatchBytesInput { get; }
```

- *Type:* double

---

##### `DisabledOauthSignInSourcesInput`<sup>Optional</sup> <a name="DisabledOauthSignInSourcesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput"></a>

```csharp
public string[] DisabledOauthSignInSourcesInput { get; }
```

- *Type:* string[]

---

##### `DisableFeedTokenInput`<sup>Optional</sup> <a name="DisableFeedTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput"></a>

```csharp
public object DisableFeedTokenInput { get; }
```

- *Type:* object

---

##### `DnsRebindingProtectionEnabledInput`<sup>Optional</sup> <a name="DnsRebindingProtectionEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput"></a>

```csharp
public object DnsRebindingProtectionEnabledInput { get; }
```

- *Type:* object

---

##### `DomainAllowlistInput`<sup>Optional</sup> <a name="DomainAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput"></a>

```csharp
public string[] DomainAllowlistInput { get; }
```

- *Type:* string[]

---

##### `DomainDenylistEnabledInput`<sup>Optional</sup> <a name="DomainDenylistEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput"></a>

```csharp
public object DomainDenylistEnabledInput { get; }
```

- *Type:* object

---

##### `DomainDenylistInput`<sup>Optional</sup> <a name="DomainDenylistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput"></a>

```csharp
public string[] DomainDenylistInput { get; }
```

- *Type:* string[]

---

##### `DsaKeyRestrictionInput`<sup>Optional</sup> <a name="DsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput"></a>

```csharp
public double DsaKeyRestrictionInput { get; }
```

- *Type:* double

---

##### `EcdsaKeyRestrictionInput`<sup>Optional</sup> <a name="EcdsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput"></a>

```csharp
public double EcdsaKeyRestrictionInput { get; }
```

- *Type:* double

---

##### `EcdsaSkKeyRestrictionInput`<sup>Optional</sup> <a name="EcdsaSkKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput"></a>

```csharp
public double EcdsaSkKeyRestrictionInput { get; }
```

- *Type:* double

---

##### `Ed25519KeyRestrictionInput`<sup>Optional</sup> <a name="Ed25519KeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput"></a>

```csharp
public double Ed25519KeyRestrictionInput { get; }
```

- *Type:* double

---

##### `Ed25519SkKeyRestrictionInput`<sup>Optional</sup> <a name="Ed25519SkKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput"></a>

```csharp
public double Ed25519SkKeyRestrictionInput { get; }
```

- *Type:* double

---

##### `EksAccessKeyIdInput`<sup>Optional</sup> <a name="EksAccessKeyIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput"></a>

```csharp
public string EksAccessKeyIdInput { get; }
```

- *Type:* string

---

##### `EksAccountIdInput`<sup>Optional</sup> <a name="EksAccountIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput"></a>

```csharp
public string EksAccountIdInput { get; }
```

- *Type:* string

---

##### `EksIntegrationEnabledInput`<sup>Optional</sup> <a name="EksIntegrationEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput"></a>

```csharp
public object EksIntegrationEnabledInput { get; }
```

- *Type:* object

---

##### `EksSecretAccessKeyInput`<sup>Optional</sup> <a name="EksSecretAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput"></a>

```csharp
public string EksSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `ElasticsearchAwsAccessKeyInput`<sup>Optional</sup> <a name="ElasticsearchAwsAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput"></a>

```csharp
public string ElasticsearchAwsAccessKeyInput { get; }
```

- *Type:* string

---

##### `ElasticsearchAwsInput`<sup>Optional</sup> <a name="ElasticsearchAwsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput"></a>

```csharp
public object ElasticsearchAwsInput { get; }
```

- *Type:* object

---

##### `ElasticsearchAwsRegionInput`<sup>Optional</sup> <a name="ElasticsearchAwsRegionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput"></a>

```csharp
public string ElasticsearchAwsRegionInput { get; }
```

- *Type:* string

---

##### `ElasticsearchAwsSecretAccessKeyInput`<sup>Optional</sup> <a name="ElasticsearchAwsSecretAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput"></a>

```csharp
public string ElasticsearchAwsSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `ElasticsearchIndexedFieldLengthLimitInput`<sup>Optional</sup> <a name="ElasticsearchIndexedFieldLengthLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput"></a>

```csharp
public double ElasticsearchIndexedFieldLengthLimitInput { get; }
```

- *Type:* double

---

##### `ElasticsearchIndexedFileSizeLimitKbInput`<sup>Optional</sup> <a name="ElasticsearchIndexedFileSizeLimitKbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput"></a>

```csharp
public double ElasticsearchIndexedFileSizeLimitKbInput { get; }
```

- *Type:* double

---

##### `ElasticsearchIndexingInput`<sup>Optional</sup> <a name="ElasticsearchIndexingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput"></a>

```csharp
public object ElasticsearchIndexingInput { get; }
```

- *Type:* object

---

##### `ElasticsearchLimitIndexingInput`<sup>Optional</sup> <a name="ElasticsearchLimitIndexingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput"></a>

```csharp
public object ElasticsearchLimitIndexingInput { get; }
```

- *Type:* object

---

##### `ElasticsearchMaxBulkConcurrencyInput`<sup>Optional</sup> <a name="ElasticsearchMaxBulkConcurrencyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput"></a>

```csharp
public double ElasticsearchMaxBulkConcurrencyInput { get; }
```

- *Type:* double

---

##### `ElasticsearchMaxBulkSizeMbInput`<sup>Optional</sup> <a name="ElasticsearchMaxBulkSizeMbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput"></a>

```csharp
public double ElasticsearchMaxBulkSizeMbInput { get; }
```

- *Type:* double

---

##### `ElasticsearchNamespaceIdsInput`<sup>Optional</sup> <a name="ElasticsearchNamespaceIdsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput"></a>

```csharp
public double[] ElasticsearchNamespaceIdsInput { get; }
```

- *Type:* double[]

---

##### `ElasticsearchPasswordInput`<sup>Optional</sup> <a name="ElasticsearchPasswordInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput"></a>

```csharp
public string ElasticsearchPasswordInput { get; }
```

- *Type:* string

---

##### `ElasticsearchProjectIdsInput`<sup>Optional</sup> <a name="ElasticsearchProjectIdsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput"></a>

```csharp
public double[] ElasticsearchProjectIdsInput { get; }
```

- *Type:* double[]

---

##### `ElasticsearchSearchInput`<sup>Optional</sup> <a name="ElasticsearchSearchInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput"></a>

```csharp
public object ElasticsearchSearchInput { get; }
```

- *Type:* object

---

##### `ElasticsearchUrlInput`<sup>Optional</sup> <a name="ElasticsearchUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput"></a>

```csharp
public string[] ElasticsearchUrlInput { get; }
```

- *Type:* string[]

---

##### `ElasticsearchUsernameInput`<sup>Optional</sup> <a name="ElasticsearchUsernameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput"></a>

```csharp
public string ElasticsearchUsernameInput { get; }
```

- *Type:* string

---

##### `EmailAdditionalTextInput`<sup>Optional</sup> <a name="EmailAdditionalTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput"></a>

```csharp
public string EmailAdditionalTextInput { get; }
```

- *Type:* string

---

##### `EmailAuthorInBodyInput`<sup>Optional</sup> <a name="EmailAuthorInBodyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput"></a>

```csharp
public object EmailAuthorInBodyInput { get; }
```

- *Type:* object

---

##### `EnabledGitAccessProtocolInput`<sup>Optional</sup> <a name="EnabledGitAccessProtocolInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput"></a>

```csharp
public string EnabledGitAccessProtocolInput { get; }
```

- *Type:* string

---

##### `EnforceNamespaceStorageLimitInput`<sup>Optional</sup> <a name="EnforceNamespaceStorageLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput"></a>

```csharp
public object EnforceNamespaceStorageLimitInput { get; }
```

- *Type:* object

---

##### `EnforceTermsInput`<sup>Optional</sup> <a name="EnforceTermsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput"></a>

```csharp
public object EnforceTermsInput { get; }
```

- *Type:* object

---

##### `ExternalAuthClientCertInput`<sup>Optional</sup> <a name="ExternalAuthClientCertInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput"></a>

```csharp
public string ExternalAuthClientCertInput { get; }
```

- *Type:* string

---

##### `ExternalAuthClientKeyInput`<sup>Optional</sup> <a name="ExternalAuthClientKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput"></a>

```csharp
public string ExternalAuthClientKeyInput { get; }
```

- *Type:* string

---

##### `ExternalAuthClientKeyPassInput`<sup>Optional</sup> <a name="ExternalAuthClientKeyPassInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput"></a>

```csharp
public string ExternalAuthClientKeyPassInput { get; }
```

- *Type:* string

---

##### `ExternalAuthorizationServiceDefaultLabelInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceDefaultLabelInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput"></a>

```csharp
public string ExternalAuthorizationServiceDefaultLabelInput { get; }
```

- *Type:* string

---

##### `ExternalAuthorizationServiceEnabledInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput"></a>

```csharp
public object ExternalAuthorizationServiceEnabledInput { get; }
```

- *Type:* object

---

##### `ExternalAuthorizationServiceTimeoutInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput"></a>

```csharp
public double ExternalAuthorizationServiceTimeoutInput { get; }
```

- *Type:* double

---

##### `ExternalAuthorizationServiceUrlInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput"></a>

```csharp
public string ExternalAuthorizationServiceUrlInput { get; }
```

- *Type:* string

---

##### `ExternalPipelineValidationServiceTimeoutInput`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput"></a>

```csharp
public double ExternalPipelineValidationServiceTimeoutInput { get; }
```

- *Type:* double

---

##### `ExternalPipelineValidationServiceTokenInput`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput"></a>

```csharp
public string ExternalPipelineValidationServiceTokenInput { get; }
```

- *Type:* string

---

##### `ExternalPipelineValidationServiceUrlInput`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput"></a>

```csharp
public string ExternalPipelineValidationServiceUrlInput { get; }
```

- *Type:* string

---

##### `FileTemplateProjectIdInput`<sup>Optional</sup> <a name="FileTemplateProjectIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput"></a>

```csharp
public double FileTemplateProjectIdInput { get; }
```

- *Type:* double

---

##### `FirstDayOfWeekInput`<sup>Optional</sup> <a name="FirstDayOfWeekInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput"></a>

```csharp
public double FirstDayOfWeekInput { get; }
```

- *Type:* double

---

##### `GeoNodeAllowedIpsInput`<sup>Optional</sup> <a name="GeoNodeAllowedIpsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput"></a>

```csharp
public string GeoNodeAllowedIpsInput { get; }
```

- *Type:* string

---

##### `GeoStatusTimeoutInput`<sup>Optional</sup> <a name="GeoStatusTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput"></a>

```csharp
public double GeoStatusTimeoutInput { get; }
```

- *Type:* double

---

##### `GitalyTimeoutDefaultInput`<sup>Optional</sup> <a name="GitalyTimeoutDefaultInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput"></a>

```csharp
public double GitalyTimeoutDefaultInput { get; }
```

- *Type:* double

---

##### `GitalyTimeoutFastInput`<sup>Optional</sup> <a name="GitalyTimeoutFastInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput"></a>

```csharp
public double GitalyTimeoutFastInput { get; }
```

- *Type:* double

---

##### `GitalyTimeoutMediumInput`<sup>Optional</sup> <a name="GitalyTimeoutMediumInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput"></a>

```csharp
public double GitalyTimeoutMediumInput { get; }
```

- *Type:* double

---

##### `GitRateLimitUsersAllowlistInput`<sup>Optional</sup> <a name="GitRateLimitUsersAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput"></a>

```csharp
public string[] GitRateLimitUsersAllowlistInput { get; }
```

- *Type:* string[]

---

##### `GitTwoFactorSessionExpiryInput`<sup>Optional</sup> <a name="GitTwoFactorSessionExpiryInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput"></a>

```csharp
public double GitTwoFactorSessionExpiryInput { get; }
```

- *Type:* double

---

##### `GrafanaEnabledInput`<sup>Optional</sup> <a name="GrafanaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput"></a>

```csharp
public object GrafanaEnabledInput { get; }
```

- *Type:* object

---

##### `GrafanaUrlInput`<sup>Optional</sup> <a name="GrafanaUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput"></a>

```csharp
public string GrafanaUrlInput { get; }
```

- *Type:* string

---

##### `GravatarEnabledInput`<sup>Optional</sup> <a name="GravatarEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput"></a>

```csharp
public object GravatarEnabledInput { get; }
```

- *Type:* object

---

##### `GroupOwnersCanManageDefaultBranchProtectionInput`<sup>Optional</sup> <a name="GroupOwnersCanManageDefaultBranchProtectionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput"></a>

```csharp
public object GroupOwnersCanManageDefaultBranchProtectionInput { get; }
```

- *Type:* object

---

##### `HashedStorageEnabledInput`<sup>Optional</sup> <a name="HashedStorageEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput"></a>

```csharp
public object HashedStorageEnabledInput { get; }
```

- *Type:* object

---

##### `HelpPageHideCommercialContentInput`<sup>Optional</sup> <a name="HelpPageHideCommercialContentInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput"></a>

```csharp
public object HelpPageHideCommercialContentInput { get; }
```

- *Type:* object

---

##### `HelpPageSupportUrlInput`<sup>Optional</sup> <a name="HelpPageSupportUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput"></a>

```csharp
public string HelpPageSupportUrlInput { get; }
```

- *Type:* string

---

##### `HelpPageTextInput`<sup>Optional</sup> <a name="HelpPageTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput"></a>

```csharp
public string HelpPageTextInput { get; }
```

- *Type:* string

---

##### `HelpTextInput`<sup>Optional</sup> <a name="HelpTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput"></a>

```csharp
public string HelpTextInput { get; }
```

- *Type:* string

---

##### `HideThirdPartyOffersInput`<sup>Optional</sup> <a name="HideThirdPartyOffersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput"></a>

```csharp
public object HideThirdPartyOffersInput { get; }
```

- *Type:* object

---

##### `HomePageUrlInput`<sup>Optional</sup> <a name="HomePageUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput"></a>

```csharp
public string HomePageUrlInput { get; }
```

- *Type:* string

---

##### `HousekeepingEnabledInput`<sup>Optional</sup> <a name="HousekeepingEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput"></a>

```csharp
public object HousekeepingEnabledInput { get; }
```

- *Type:* object

---

##### `HousekeepingFullRepackPeriodInput`<sup>Optional</sup> <a name="HousekeepingFullRepackPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput"></a>

```csharp
public double HousekeepingFullRepackPeriodInput { get; }
```

- *Type:* double

---

##### `HousekeepingGcPeriodInput`<sup>Optional</sup> <a name="HousekeepingGcPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput"></a>

```csharp
public double HousekeepingGcPeriodInput { get; }
```

- *Type:* double

---

##### `HousekeepingIncrementalRepackPeriodInput`<sup>Optional</sup> <a name="HousekeepingIncrementalRepackPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput"></a>

```csharp
public double HousekeepingIncrementalRepackPeriodInput { get; }
```

- *Type:* double

---

##### `HousekeepingOptimizeRepositoryPeriodInput`<sup>Optional</sup> <a name="HousekeepingOptimizeRepositoryPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriodInput"></a>

```csharp
public double HousekeepingOptimizeRepositoryPeriodInput { get; }
```

- *Type:* double

---

##### `HtmlEmailsEnabledInput`<sup>Optional</sup> <a name="HtmlEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput"></a>

```csharp
public object HtmlEmailsEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportSourcesInput`<sup>Optional</sup> <a name="ImportSourcesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput"></a>

```csharp
public string[] ImportSourcesInput { get; }
```

- *Type:* string[]

---

##### `InactiveProjectsDeleteAfterMonthsInput`<sup>Optional</sup> <a name="InactiveProjectsDeleteAfterMonthsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput"></a>

```csharp
public double InactiveProjectsDeleteAfterMonthsInput { get; }
```

- *Type:* double

---

##### `InactiveProjectsMinSizeMbInput`<sup>Optional</sup> <a name="InactiveProjectsMinSizeMbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput"></a>

```csharp
public double InactiveProjectsMinSizeMbInput { get; }
```

- *Type:* double

---

##### `InactiveProjectsSendWarningEmailAfterMonthsInput`<sup>Optional</sup> <a name="InactiveProjectsSendWarningEmailAfterMonthsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput"></a>

```csharp
public double InactiveProjectsSendWarningEmailAfterMonthsInput { get; }
```

- *Type:* double

---

##### `InProductMarketingEmailsEnabledInput`<sup>Optional</sup> <a name="InProductMarketingEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput"></a>

```csharp
public object InProductMarketingEmailsEnabledInput { get; }
```

- *Type:* object

---

##### `InvisibleCaptchaEnabledInput`<sup>Optional</sup> <a name="InvisibleCaptchaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput"></a>

```csharp
public object InvisibleCaptchaEnabledInput { get; }
```

- *Type:* object

---

##### `IssuesCreateLimitInput`<sup>Optional</sup> <a name="IssuesCreateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput"></a>

```csharp
public double IssuesCreateLimitInput { get; }
```

- *Type:* double

---

##### `KeepLatestArtifactInput`<sup>Optional</sup> <a name="KeepLatestArtifactInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput"></a>

```csharp
public object KeepLatestArtifactInput { get; }
```

- *Type:* object

---

##### `LocalMarkdownVersionInput`<sup>Optional</sup> <a name="LocalMarkdownVersionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput"></a>

```csharp
public double LocalMarkdownVersionInput { get; }
```

- *Type:* double

---

##### `MailgunEventsEnabledInput`<sup>Optional</sup> <a name="MailgunEventsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput"></a>

```csharp
public object MailgunEventsEnabledInput { get; }
```

- *Type:* object

---

##### `MailgunSigningKeyInput`<sup>Optional</sup> <a name="MailgunSigningKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput"></a>

```csharp
public string MailgunSigningKeyInput { get; }
```

- *Type:* string

---

##### `MaintenanceModeInput`<sup>Optional</sup> <a name="MaintenanceModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput"></a>

```csharp
public object MaintenanceModeInput { get; }
```

- *Type:* object

---

##### `MaintenanceModeMessageInput`<sup>Optional</sup> <a name="MaintenanceModeMessageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput"></a>

```csharp
public string MaintenanceModeMessageInput { get; }
```

- *Type:* string

---

##### `MaxArtifactsSizeInput`<sup>Optional</sup> <a name="MaxArtifactsSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput"></a>

```csharp
public double MaxArtifactsSizeInput { get; }
```

- *Type:* double

---

##### `MaxAttachmentSizeInput`<sup>Optional</sup> <a name="MaxAttachmentSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput"></a>

```csharp
public double MaxAttachmentSizeInput { get; }
```

- *Type:* double

---

##### `MaxExportSizeInput`<sup>Optional</sup> <a name="MaxExportSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput"></a>

```csharp
public double MaxExportSizeInput { get; }
```

- *Type:* double

---

##### `MaxImportSizeInput`<sup>Optional</sup> <a name="MaxImportSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput"></a>

```csharp
public double MaxImportSizeInput { get; }
```

- *Type:* double

---

##### `MaxNumberOfRepositoryDownloadsInput`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloadsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput"></a>

```csharp
public double MaxNumberOfRepositoryDownloadsInput { get; }
```

- *Type:* double

---

##### `MaxNumberOfRepositoryDownloadsWithinTimePeriodInput`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloadsWithinTimePeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput"></a>

```csharp
public double MaxNumberOfRepositoryDownloadsWithinTimePeriodInput { get; }
```

- *Type:* double

---

##### `MaxPagesSizeInput`<sup>Optional</sup> <a name="MaxPagesSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput"></a>

```csharp
public double MaxPagesSizeInput { get; }
```

- *Type:* double

---

##### `MaxPersonalAccessTokenLifetimeInput`<sup>Optional</sup> <a name="MaxPersonalAccessTokenLifetimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput"></a>

```csharp
public double MaxPersonalAccessTokenLifetimeInput { get; }
```

- *Type:* double

---

##### `MaxSshKeyLifetimeInput`<sup>Optional</sup> <a name="MaxSshKeyLifetimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput"></a>

```csharp
public double MaxSshKeyLifetimeInput { get; }
```

- *Type:* double

---

##### `MetricsMethodCallThresholdInput`<sup>Optional</sup> <a name="MetricsMethodCallThresholdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput"></a>

```csharp
public double MetricsMethodCallThresholdInput { get; }
```

- *Type:* double

---

##### `MirrorAvailableInput`<sup>Optional</sup> <a name="MirrorAvailableInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput"></a>

```csharp
public object MirrorAvailableInput { get; }
```

- *Type:* object

---

##### `MirrorCapacityThresholdInput`<sup>Optional</sup> <a name="MirrorCapacityThresholdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput"></a>

```csharp
public double MirrorCapacityThresholdInput { get; }
```

- *Type:* double

---

##### `MirrorMaxCapacityInput`<sup>Optional</sup> <a name="MirrorMaxCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput"></a>

```csharp
public double MirrorMaxCapacityInput { get; }
```

- *Type:* double

---

##### `MirrorMaxDelayInput`<sup>Optional</sup> <a name="MirrorMaxDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput"></a>

```csharp
public double MirrorMaxDelayInput { get; }
```

- *Type:* double

---

##### `NpmPackageRequestsForwardingInput`<sup>Optional</sup> <a name="NpmPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput"></a>

```csharp
public object NpmPackageRequestsForwardingInput { get; }
```

- *Type:* object

---

##### `OutboundLocalRequestsWhitelistInput`<sup>Optional</sup> <a name="OutboundLocalRequestsWhitelistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput"></a>

```csharp
public string[] OutboundLocalRequestsWhitelistInput { get; }
```

- *Type:* string[]

---

##### `PackageRegistryCleanupPoliciesWorkerCapacityInput`<sup>Optional</sup> <a name="PackageRegistryCleanupPoliciesWorkerCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput"></a>

```csharp
public double PackageRegistryCleanupPoliciesWorkerCapacityInput { get; }
```

- *Type:* double

---

##### `PagesDomainVerificationEnabledInput`<sup>Optional</sup> <a name="PagesDomainVerificationEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput"></a>

```csharp
public object PagesDomainVerificationEnabledInput { get; }
```

- *Type:* object

---

##### `PasswordAuthenticationEnabledForGitInput`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForGitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput"></a>

```csharp
public object PasswordAuthenticationEnabledForGitInput { get; }
```

- *Type:* object

---

##### `PasswordAuthenticationEnabledForWebInput`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForWebInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput"></a>

```csharp
public object PasswordAuthenticationEnabledForWebInput { get; }
```

- *Type:* object

---

##### `PasswordLowercaseRequiredInput`<sup>Optional</sup> <a name="PasswordLowercaseRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput"></a>

```csharp
public object PasswordLowercaseRequiredInput { get; }
```

- *Type:* object

---

##### `PasswordNumberRequiredInput`<sup>Optional</sup> <a name="PasswordNumberRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput"></a>

```csharp
public object PasswordNumberRequiredInput { get; }
```

- *Type:* object

---

##### `PasswordSymbolRequiredInput`<sup>Optional</sup> <a name="PasswordSymbolRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput"></a>

```csharp
public object PasswordSymbolRequiredInput { get; }
```

- *Type:* object

---

##### `PasswordUppercaseRequiredInput`<sup>Optional</sup> <a name="PasswordUppercaseRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput"></a>

```csharp
public object PasswordUppercaseRequiredInput { get; }
```

- *Type:* object

---

##### `PerformanceBarAllowedGroupPathInput`<sup>Optional</sup> <a name="PerformanceBarAllowedGroupPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput"></a>

```csharp
public string PerformanceBarAllowedGroupPathInput { get; }
```

- *Type:* string

---

##### `PersonalAccessTokenPrefixInput`<sup>Optional</sup> <a name="PersonalAccessTokenPrefixInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput"></a>

```csharp
public string PersonalAccessTokenPrefixInput { get; }
```

- *Type:* string

---

##### `PipelineLimitPerProjectUserShaInput`<sup>Optional</sup> <a name="PipelineLimitPerProjectUserShaInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput"></a>

```csharp
public double PipelineLimitPerProjectUserShaInput { get; }
```

- *Type:* double

---

##### `PlantumlEnabledInput`<sup>Optional</sup> <a name="PlantumlEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput"></a>

```csharp
public object PlantumlEnabledInput { get; }
```

- *Type:* object

---

##### `PlantumlUrlInput`<sup>Optional</sup> <a name="PlantumlUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput"></a>

```csharp
public string PlantumlUrlInput { get; }
```

- *Type:* string

---

##### `PollingIntervalMultiplierInput`<sup>Optional</sup> <a name="PollingIntervalMultiplierInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput"></a>

```csharp
public double PollingIntervalMultiplierInput { get; }
```

- *Type:* double

---

##### `ProjectExportEnabledInput`<sup>Optional</sup> <a name="ProjectExportEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput"></a>

```csharp
public object ProjectExportEnabledInput { get; }
```

- *Type:* object

---

##### `PrometheusMetricsEnabledInput`<sup>Optional</sup> <a name="PrometheusMetricsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput"></a>

```csharp
public object PrometheusMetricsEnabledInput { get; }
```

- *Type:* object

---

##### `ProtectedCiVariablesInput`<sup>Optional</sup> <a name="ProtectedCiVariablesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput"></a>

```csharp
public object ProtectedCiVariablesInput { get; }
```

- *Type:* object

---

##### `PushEventActivitiesLimitInput`<sup>Optional</sup> <a name="PushEventActivitiesLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput"></a>

```csharp
public double PushEventActivitiesLimitInput { get; }
```

- *Type:* double

---

##### `PushEventHooksLimitInput`<sup>Optional</sup> <a name="PushEventHooksLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput"></a>

```csharp
public double PushEventHooksLimitInput { get; }
```

- *Type:* double

---

##### `PypiPackageRequestsForwardingInput`<sup>Optional</sup> <a name="PypiPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput"></a>

```csharp
public object PypiPackageRequestsForwardingInput { get; }
```

- *Type:* object

---

##### `RateLimitingResponseTextInput`<sup>Optional</sup> <a name="RateLimitingResponseTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput"></a>

```csharp
public string RateLimitingResponseTextInput { get; }
```

- *Type:* string

---

##### `RawBlobRequestLimitInput`<sup>Optional</sup> <a name="RawBlobRequestLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput"></a>

```csharp
public double RawBlobRequestLimitInput { get; }
```

- *Type:* double

---

##### `RecaptchaEnabledInput`<sup>Optional</sup> <a name="RecaptchaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput"></a>

```csharp
public object RecaptchaEnabledInput { get; }
```

- *Type:* object

---

##### `RecaptchaPrivateKeyInput`<sup>Optional</sup> <a name="RecaptchaPrivateKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput"></a>

```csharp
public string RecaptchaPrivateKeyInput { get; }
```

- *Type:* string

---

##### `RecaptchaSiteKeyInput`<sup>Optional</sup> <a name="RecaptchaSiteKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput"></a>

```csharp
public string RecaptchaSiteKeyInput { get; }
```

- *Type:* string

---

##### `ReceiveMaxInputSizeInput`<sup>Optional</sup> <a name="ReceiveMaxInputSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput"></a>

```csharp
public double ReceiveMaxInputSizeInput { get; }
```

- *Type:* double

---

##### `RepositoryChecksEnabledInput`<sup>Optional</sup> <a name="RepositoryChecksEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput"></a>

```csharp
public object RepositoryChecksEnabledInput { get; }
```

- *Type:* object

---

##### `RepositorySizeLimitInput`<sup>Optional</sup> <a name="RepositorySizeLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput"></a>

```csharp
public double RepositorySizeLimitInput { get; }
```

- *Type:* double

---

##### `RepositoryStoragesInput`<sup>Optional</sup> <a name="RepositoryStoragesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput"></a>

```csharp
public string[] RepositoryStoragesInput { get; }
```

- *Type:* string[]

---

##### `RepositoryStoragesWeightedInput`<sup>Optional</sup> <a name="RepositoryStoragesWeightedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RepositoryStoragesWeightedInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `RequireAdminApprovalAfterUserSignupInput`<sup>Optional</sup> <a name="RequireAdminApprovalAfterUserSignupInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput"></a>

```csharp
public object RequireAdminApprovalAfterUserSignupInput { get; }
```

- *Type:* object

---

##### `RequireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="RequireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput"></a>

```csharp
public object RequireTwoFactorAuthenticationInput { get; }
```

- *Type:* object

---

##### `RestrictedVisibilityLevelsInput`<sup>Optional</sup> <a name="RestrictedVisibilityLevelsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput"></a>

```csharp
public string[] RestrictedVisibilityLevelsInput { get; }
```

- *Type:* string[]

---

##### `RsaKeyRestrictionInput`<sup>Optional</sup> <a name="RsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput"></a>

```csharp
public double RsaKeyRestrictionInput { get; }
```

- *Type:* double

---

##### `SearchRateLimitInput`<sup>Optional</sup> <a name="SearchRateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput"></a>

```csharp
public double SearchRateLimitInput { get; }
```

- *Type:* double

---

##### `SearchRateLimitUnauthenticatedInput`<sup>Optional</sup> <a name="SearchRateLimitUnauthenticatedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput"></a>

```csharp
public double SearchRateLimitUnauthenticatedInput { get; }
```

- *Type:* double

---

##### `SendUserConfirmationEmailInput`<sup>Optional</sup> <a name="SendUserConfirmationEmailInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput"></a>

```csharp
public object SendUserConfirmationEmailInput { get; }
```

- *Type:* object

---

##### `SessionExpireDelayInput`<sup>Optional</sup> <a name="SessionExpireDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput"></a>

```csharp
public double SessionExpireDelayInput { get; }
```

- *Type:* double

---

##### `SharedRunnersEnabledInput`<sup>Optional</sup> <a name="SharedRunnersEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput"></a>

```csharp
public object SharedRunnersEnabledInput { get; }
```

- *Type:* object

---

##### `SharedRunnersMinutesInput`<sup>Optional</sup> <a name="SharedRunnersMinutesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput"></a>

```csharp
public double SharedRunnersMinutesInput { get; }
```

- *Type:* double

---

##### `SharedRunnersTextInput`<sup>Optional</sup> <a name="SharedRunnersTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput"></a>

```csharp
public string SharedRunnersTextInput { get; }
```

- *Type:* string

---

##### `SidekiqJobLimiterCompressionThresholdBytesInput`<sup>Optional</sup> <a name="SidekiqJobLimiterCompressionThresholdBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput"></a>

```csharp
public double SidekiqJobLimiterCompressionThresholdBytesInput { get; }
```

- *Type:* double

---

##### `SidekiqJobLimiterLimitBytesInput`<sup>Optional</sup> <a name="SidekiqJobLimiterLimitBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput"></a>

```csharp
public double SidekiqJobLimiterLimitBytesInput { get; }
```

- *Type:* double

---

##### `SidekiqJobLimiterModeInput`<sup>Optional</sup> <a name="SidekiqJobLimiterModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput"></a>

```csharp
public string SidekiqJobLimiterModeInput { get; }
```

- *Type:* string

---

##### `SignInTextInput`<sup>Optional</sup> <a name="SignInTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput"></a>

```csharp
public string SignInTextInput { get; }
```

- *Type:* string

---

##### `SignupEnabledInput`<sup>Optional</sup> <a name="SignupEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput"></a>

```csharp
public object SignupEnabledInput { get; }
```

- *Type:* object

---

##### `SlackAppEnabledInput`<sup>Optional</sup> <a name="SlackAppEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput"></a>

```csharp
public object SlackAppEnabledInput { get; }
```

- *Type:* object

---

##### `SlackAppIdInput`<sup>Optional</sup> <a name="SlackAppIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput"></a>

```csharp
public string SlackAppIdInput { get; }
```

- *Type:* string

---

##### `SlackAppSecretInput`<sup>Optional</sup> <a name="SlackAppSecretInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput"></a>

```csharp
public string SlackAppSecretInput { get; }
```

- *Type:* string

---

##### `SlackAppSigningSecretInput`<sup>Optional</sup> <a name="SlackAppSigningSecretInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput"></a>

```csharp
public string SlackAppSigningSecretInput { get; }
```

- *Type:* string

---

##### `SlackAppVerificationTokenInput`<sup>Optional</sup> <a name="SlackAppVerificationTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput"></a>

```csharp
public string SlackAppVerificationTokenInput { get; }
```

- *Type:* string

---

##### `SnippetSizeLimitInput`<sup>Optional</sup> <a name="SnippetSizeLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput"></a>

```csharp
public double SnippetSizeLimitInput { get; }
```

- *Type:* double

---

##### `SnowplowAppIdInput`<sup>Optional</sup> <a name="SnowplowAppIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput"></a>

```csharp
public string SnowplowAppIdInput { get; }
```

- *Type:* string

---

##### `SnowplowCollectorHostnameInput`<sup>Optional</sup> <a name="SnowplowCollectorHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput"></a>

```csharp
public string SnowplowCollectorHostnameInput { get; }
```

- *Type:* string

---

##### `SnowplowCookieDomainInput`<sup>Optional</sup> <a name="SnowplowCookieDomainInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput"></a>

```csharp
public string SnowplowCookieDomainInput { get; }
```

- *Type:* string

---

##### `SnowplowEnabledInput`<sup>Optional</sup> <a name="SnowplowEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput"></a>

```csharp
public object SnowplowEnabledInput { get; }
```

- *Type:* object

---

##### `SourcegraphEnabledInput`<sup>Optional</sup> <a name="SourcegraphEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput"></a>

```csharp
public object SourcegraphEnabledInput { get; }
```

- *Type:* object

---

##### `SourcegraphPublicOnlyInput`<sup>Optional</sup> <a name="SourcegraphPublicOnlyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput"></a>

```csharp
public object SourcegraphPublicOnlyInput { get; }
```

- *Type:* object

---

##### `SourcegraphUrlInput`<sup>Optional</sup> <a name="SourcegraphUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput"></a>

```csharp
public string SourcegraphUrlInput { get; }
```

- *Type:* string

---

##### `SpamCheckApiKeyInput`<sup>Optional</sup> <a name="SpamCheckApiKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput"></a>

```csharp
public string SpamCheckApiKeyInput { get; }
```

- *Type:* string

---

##### `SpamCheckEndpointEnabledInput`<sup>Optional</sup> <a name="SpamCheckEndpointEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput"></a>

```csharp
public object SpamCheckEndpointEnabledInput { get; }
```

- *Type:* object

---

##### `SpamCheckEndpointUrlInput`<sup>Optional</sup> <a name="SpamCheckEndpointUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput"></a>

```csharp
public string SpamCheckEndpointUrlInput { get; }
```

- *Type:* string

---

##### `SuggestPipelineEnabledInput`<sup>Optional</sup> <a name="SuggestPipelineEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput"></a>

```csharp
public object SuggestPipelineEnabledInput { get; }
```

- *Type:* object

---

##### `TerminalMaxSessionTimeInput`<sup>Optional</sup> <a name="TerminalMaxSessionTimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput"></a>

```csharp
public double TerminalMaxSessionTimeInput { get; }
```

- *Type:* double

---

##### `TermsInput`<sup>Optional</sup> <a name="TermsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput"></a>

```csharp
public string TermsInput { get; }
```

- *Type:* string

---

##### `ThrottleAuthenticatedApiEnabledInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput"></a>

```csharp
public object ThrottleAuthenticatedApiEnabledInput { get; }
```

- *Type:* object

---

##### `ThrottleAuthenticatedApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput"></a>

```csharp
public double ThrottleAuthenticatedApiPeriodInSecondsInput { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput"></a>

```csharp
public double ThrottleAuthenticatedApiRequestsPerPeriodInput { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedPackagesApiEnabledInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput"></a>

```csharp
public object ThrottleAuthenticatedPackagesApiEnabledInput { get; }
```

- *Type:* object

---

##### `ThrottleAuthenticatedPackagesApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput"></a>

```csharp
public double ThrottleAuthenticatedPackagesApiPeriodInSecondsInput { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput"></a>

```csharp
public double ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedWebEnabledInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput"></a>

```csharp
public object ThrottleAuthenticatedWebEnabledInput { get; }
```

- *Type:* object

---

##### `ThrottleAuthenticatedWebPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput"></a>

```csharp
public double ThrottleAuthenticatedWebPeriodInSecondsInput { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedWebRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput"></a>

```csharp
public double ThrottleAuthenticatedWebRequestsPerPeriodInput { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedApiEnabledInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput"></a>

```csharp
public object ThrottleUnauthenticatedApiEnabledInput { get; }
```

- *Type:* object

---

##### `ThrottleUnauthenticatedApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput"></a>

```csharp
public double ThrottleUnauthenticatedApiPeriodInSecondsInput { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput"></a>

```csharp
public double ThrottleUnauthenticatedApiRequestsPerPeriodInput { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedPackagesApiEnabledInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput"></a>

```csharp
public object ThrottleUnauthenticatedPackagesApiEnabledInput { get; }
```

- *Type:* object

---

##### `ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput"></a>

```csharp
public double ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput"></a>

```csharp
public double ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedWebEnabledInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput"></a>

```csharp
public object ThrottleUnauthenticatedWebEnabledInput { get; }
```

- *Type:* object

---

##### `ThrottleUnauthenticatedWebPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput"></a>

```csharp
public double ThrottleUnauthenticatedWebPeriodInSecondsInput { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedWebRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput"></a>

```csharp
public double ThrottleUnauthenticatedWebRequestsPerPeriodInput { get; }
```

- *Type:* double

---

##### `TimeTrackingLimitToHoursInput`<sup>Optional</sup> <a name="TimeTrackingLimitToHoursInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput"></a>

```csharp
public object TimeTrackingLimitToHoursInput { get; }
```

- *Type:* object

---

##### `TwoFactorGracePeriodInput`<sup>Optional</sup> <a name="TwoFactorGracePeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput"></a>

```csharp
public double TwoFactorGracePeriodInput { get; }
```

- *Type:* double

---

##### `UniqueIpsLimitEnabledInput`<sup>Optional</sup> <a name="UniqueIpsLimitEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput"></a>

```csharp
public object UniqueIpsLimitEnabledInput { get; }
```

- *Type:* object

---

##### `UniqueIpsLimitPerUserInput`<sup>Optional</sup> <a name="UniqueIpsLimitPerUserInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput"></a>

```csharp
public double UniqueIpsLimitPerUserInput { get; }
```

- *Type:* double

---

##### `UniqueIpsLimitTimeWindowInput`<sup>Optional</sup> <a name="UniqueIpsLimitTimeWindowInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput"></a>

```csharp
public double UniqueIpsLimitTimeWindowInput { get; }
```

- *Type:* double

---

##### `UsagePingEnabledInput`<sup>Optional</sup> <a name="UsagePingEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput"></a>

```csharp
public object UsagePingEnabledInput { get; }
```

- *Type:* object

---

##### `UserDeactivationEmailsEnabledInput`<sup>Optional</sup> <a name="UserDeactivationEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput"></a>

```csharp
public object UserDeactivationEmailsEnabledInput { get; }
```

- *Type:* object

---

##### `UserDefaultExternalInput`<sup>Optional</sup> <a name="UserDefaultExternalInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput"></a>

```csharp
public object UserDefaultExternalInput { get; }
```

- *Type:* object

---

##### `UserDefaultInternalRegexInput`<sup>Optional</sup> <a name="UserDefaultInternalRegexInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput"></a>

```csharp
public string UserDefaultInternalRegexInput { get; }
```

- *Type:* string

---

##### `UserOauthApplicationsInput`<sup>Optional</sup> <a name="UserOauthApplicationsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput"></a>

```csharp
public object UserOauthApplicationsInput { get; }
```

- *Type:* object

---

##### `UserShowAddSshKeyMessageInput`<sup>Optional</sup> <a name="UserShowAddSshKeyMessageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput"></a>

```csharp
public object UserShowAddSshKeyMessageInput { get; }
```

- *Type:* object

---

##### `VersionCheckEnabledInput`<sup>Optional</sup> <a name="VersionCheckEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput"></a>

```csharp
public object VersionCheckEnabledInput { get; }
```

- *Type:* object

---

##### `WebIdeClientsidePreviewEnabledInput`<sup>Optional</sup> <a name="WebIdeClientsidePreviewEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput"></a>

```csharp
public object WebIdeClientsidePreviewEnabledInput { get; }
```

- *Type:* object

---

##### `WhatsNewVariantInput`<sup>Optional</sup> <a name="WhatsNewVariantInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput"></a>

```csharp
public string WhatsNewVariantInput { get; }
```

- *Type:* string

---

##### `WikiPageMaxContentBytesInput`<sup>Optional</sup> <a name="WikiPageMaxContentBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput"></a>

```csharp
public double WikiPageMaxContentBytesInput { get; }
```

- *Type:* double

---

##### `AbuseNotificationEmail`<sup>Required</sup> <a name="AbuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail"></a>

```csharp
public string AbuseNotificationEmail { get; }
```

- *Type:* string

---

##### `AdminMode`<sup>Required</sup> <a name="AdminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode"></a>

```csharp
public object AdminMode { get; }
```

- *Type:* object

---

##### `AfterSignOutPath`<sup>Required</sup> <a name="AfterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath"></a>

```csharp
public string AfterSignOutPath { get; }
```

- *Type:* string

---

##### `AfterSignUpText`<sup>Required</sup> <a name="AfterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText"></a>

```csharp
public string AfterSignUpText { get; }
```

- *Type:* string

---

##### `AkismetApiKey`<sup>Required</sup> <a name="AkismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey"></a>

```csharp
public string AkismetApiKey { get; }
```

- *Type:* string

---

##### `AkismetEnabled`<sup>Required</sup> <a name="AkismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled"></a>

```csharp
public object AkismetEnabled { get; }
```

- *Type:* object

---

##### `AllowGroupOwnersToManageLdap`<sup>Required</sup> <a name="AllowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap"></a>

```csharp
public object AllowGroupOwnersToManageLdap { get; }
```

- *Type:* object

---

##### `AllowLocalRequestsFromSystemHooks`<sup>Required</sup> <a name="AllowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks"></a>

```csharp
public object AllowLocalRequestsFromSystemHooks { get; }
```

- *Type:* object

---

##### `AllowLocalRequestsFromWebHooksAndServices`<sup>Required</sup> <a name="AllowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices"></a>

```csharp
public object AllowLocalRequestsFromWebHooksAndServices { get; }
```

- *Type:* object

---

##### `ArchiveBuildsInHumanReadable`<sup>Required</sup> <a name="ArchiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable"></a>

```csharp
public string ArchiveBuildsInHumanReadable { get; }
```

- *Type:* string

---

##### `AssetProxyAllowlist`<sup>Required</sup> <a name="AssetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist"></a>

```csharp
public string[] AssetProxyAllowlist { get; }
```

- *Type:* string[]

---

##### `AssetProxyEnabled`<sup>Required</sup> <a name="AssetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled"></a>

```csharp
public object AssetProxyEnabled { get; }
```

- *Type:* object

---

##### `AssetProxySecretKey`<sup>Required</sup> <a name="AssetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey"></a>

```csharp
public string AssetProxySecretKey { get; }
```

- *Type:* string

---

##### `AssetProxyUrl`<sup>Required</sup> <a name="AssetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl"></a>

```csharp
public string AssetProxyUrl { get; }
```

- *Type:* string

---

##### `AuthorizedKeysEnabled`<sup>Required</sup> <a name="AuthorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled"></a>

```csharp
public object AuthorizedKeysEnabled { get; }
```

- *Type:* object

---

##### `AutoDevopsDomain`<sup>Required</sup> <a name="AutoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain"></a>

```csharp
public string AutoDevopsDomain { get; }
```

- *Type:* string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled"></a>

```csharp
public object AutoDevopsEnabled { get; }
```

- *Type:* object

---

##### `AutomaticPurchasedStorageAllocation`<sup>Required</sup> <a name="AutomaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation"></a>

```csharp
public object AutomaticPurchasedStorageAllocation { get; }
```

- *Type:* object

---

##### `CanCreateGroup`<sup>Required</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup"></a>

```csharp
public object CanCreateGroup { get; }
```

- *Type:* object

---

##### `CheckNamespacePlan`<sup>Required</sup> <a name="CheckNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan"></a>

```csharp
public object CheckNamespacePlan { get; }
```

- *Type:* object

---

##### `CommitEmailHostname`<sup>Required</sup> <a name="CommitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname"></a>

```csharp
public string CommitEmailHostname { get; }
```

- *Type:* string

---

##### `ContainerExpirationPoliciesEnableHistoricEntries`<sup>Required</sup> <a name="ContainerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```csharp
public object ContainerExpirationPoliciesEnableHistoricEntries { get; }
```

- *Type:* object

---

##### `ContainerRegistryCleanupTagsServiceMaxListSize`<sup>Required</sup> <a name="ContainerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```csharp
public double ContainerRegistryCleanupTagsServiceMaxListSize { get; }
```

- *Type:* double

---

##### `ContainerRegistryDeleteTagsServiceTimeout`<sup>Required</sup> <a name="ContainerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout"></a>

```csharp
public double ContainerRegistryDeleteTagsServiceTimeout { get; }
```

- *Type:* double

---

##### `ContainerRegistryExpirationPoliciesCaching`<sup>Required</sup> <a name="ContainerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching"></a>

```csharp
public object ContainerRegistryExpirationPoliciesCaching { get; }
```

- *Type:* object

---

##### `ContainerRegistryExpirationPoliciesWorkerCapacity`<sup>Required</sup> <a name="ContainerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```csharp
public double ContainerRegistryExpirationPoliciesWorkerCapacity { get; }
```

- *Type:* double

---

##### `ContainerRegistryTokenExpireDelay`<sup>Required</sup> <a name="ContainerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay"></a>

```csharp
public double ContainerRegistryTokenExpireDelay { get; }
```

- *Type:* double

---

##### `DeactivateDormantUsers`<sup>Required</sup> <a name="DeactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers"></a>

```csharp
public object DeactivateDormantUsers { get; }
```

- *Type:* object

---

##### `DefaultArtifactsExpireIn`<sup>Required</sup> <a name="DefaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn"></a>

```csharp
public string DefaultArtifactsExpireIn { get; }
```

- *Type:* string

---

##### `DefaultBranchName`<sup>Required</sup> <a name="DefaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName"></a>

```csharp
public string DefaultBranchName { get; }
```

- *Type:* string

---

##### `DefaultBranchProtection`<sup>Required</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection"></a>

```csharp
public double DefaultBranchProtection { get; }
```

- *Type:* double

---

##### `DefaultCiConfigPath`<sup>Required</sup> <a name="DefaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath"></a>

```csharp
public string DefaultCiConfigPath { get; }
```

- *Type:* string

---

##### `DefaultGroupVisibility`<sup>Required</sup> <a name="DefaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility"></a>

```csharp
public string DefaultGroupVisibility { get; }
```

- *Type:* string

---

##### `DefaultProjectCreation`<sup>Required</sup> <a name="DefaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation"></a>

```csharp
public double DefaultProjectCreation { get; }
```

- *Type:* double

---

##### `DefaultProjectsLimit`<sup>Required</sup> <a name="DefaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit"></a>

```csharp
public double DefaultProjectsLimit { get; }
```

- *Type:* double

---

##### `DefaultProjectVisibility`<sup>Required</sup> <a name="DefaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility"></a>

```csharp
public string DefaultProjectVisibility { get; }
```

- *Type:* string

---

##### `DefaultSnippetVisibility`<sup>Required</sup> <a name="DefaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility"></a>

```csharp
public string DefaultSnippetVisibility { get; }
```

- *Type:* string

---

##### `DeleteInactiveProjects`<sup>Required</sup> <a name="DeleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects"></a>

```csharp
public object DeleteInactiveProjects { get; }
```

- *Type:* object

---

##### `DeletionAdjournedPeriod`<sup>Required</sup> <a name="DeletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod"></a>

```csharp
public double DeletionAdjournedPeriod { get; }
```

- *Type:* double

---

##### `DiffMaxFiles`<sup>Required</sup> <a name="DiffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles"></a>

```csharp
public double DiffMaxFiles { get; }
```

- *Type:* double

---

##### `DiffMaxLines`<sup>Required</sup> <a name="DiffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines"></a>

```csharp
public double DiffMaxLines { get; }
```

- *Type:* double

---

##### `DiffMaxPatchBytes`<sup>Required</sup> <a name="DiffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes"></a>

```csharp
public double DiffMaxPatchBytes { get; }
```

- *Type:* double

---

##### `DisabledOauthSignInSources`<sup>Required</sup> <a name="DisabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources"></a>

```csharp
public string[] DisabledOauthSignInSources { get; }
```

- *Type:* string[]

---

##### `DisableFeedToken`<sup>Required</sup> <a name="DisableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken"></a>

```csharp
public object DisableFeedToken { get; }
```

- *Type:* object

---

##### `DnsRebindingProtectionEnabled`<sup>Required</sup> <a name="DnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled"></a>

```csharp
public object DnsRebindingProtectionEnabled { get; }
```

- *Type:* object

---

##### `DomainAllowlist`<sup>Required</sup> <a name="DomainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist"></a>

```csharp
public string[] DomainAllowlist { get; }
```

- *Type:* string[]

---

##### `DomainDenylist`<sup>Required</sup> <a name="DomainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist"></a>

```csharp
public string[] DomainDenylist { get; }
```

- *Type:* string[]

---

##### `DomainDenylistEnabled`<sup>Required</sup> <a name="DomainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled"></a>

```csharp
public object DomainDenylistEnabled { get; }
```

- *Type:* object

---

##### `DsaKeyRestriction`<sup>Required</sup> <a name="DsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction"></a>

```csharp
public double DsaKeyRestriction { get; }
```

- *Type:* double

---

##### `EcdsaKeyRestriction`<sup>Required</sup> <a name="EcdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction"></a>

```csharp
public double EcdsaKeyRestriction { get; }
```

- *Type:* double

---

##### `EcdsaSkKeyRestriction`<sup>Required</sup> <a name="EcdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction"></a>

```csharp
public double EcdsaSkKeyRestriction { get; }
```

- *Type:* double

---

##### `Ed25519KeyRestriction`<sup>Required</sup> <a name="Ed25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction"></a>

```csharp
public double Ed25519KeyRestriction { get; }
```

- *Type:* double

---

##### `Ed25519SkKeyRestriction`<sup>Required</sup> <a name="Ed25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction"></a>

```csharp
public double Ed25519SkKeyRestriction { get; }
```

- *Type:* double

---

##### `EksAccessKeyId`<sup>Required</sup> <a name="EksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId"></a>

```csharp
public string EksAccessKeyId { get; }
```

- *Type:* string

---

##### `EksAccountId`<sup>Required</sup> <a name="EksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId"></a>

```csharp
public string EksAccountId { get; }
```

- *Type:* string

---

##### `EksIntegrationEnabled`<sup>Required</sup> <a name="EksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled"></a>

```csharp
public object EksIntegrationEnabled { get; }
```

- *Type:* object

---

##### `EksSecretAccessKey`<sup>Required</sup> <a name="EksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey"></a>

```csharp
public string EksSecretAccessKey { get; }
```

- *Type:* string

---

##### `ElasticsearchAws`<sup>Required</sup> <a name="ElasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws"></a>

```csharp
public object ElasticsearchAws { get; }
```

- *Type:* object

---

##### `ElasticsearchAwsAccessKey`<sup>Required</sup> <a name="ElasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey"></a>

```csharp
public string ElasticsearchAwsAccessKey { get; }
```

- *Type:* string

---

##### `ElasticsearchAwsRegion`<sup>Required</sup> <a name="ElasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion"></a>

```csharp
public string ElasticsearchAwsRegion { get; }
```

- *Type:* string

---

##### `ElasticsearchAwsSecretAccessKey`<sup>Required</sup> <a name="ElasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey"></a>

```csharp
public string ElasticsearchAwsSecretAccessKey { get; }
```

- *Type:* string

---

##### `ElasticsearchIndexedFieldLengthLimit`<sup>Required</sup> <a name="ElasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit"></a>

```csharp
public double ElasticsearchIndexedFieldLengthLimit { get; }
```

- *Type:* double

---

##### `ElasticsearchIndexedFileSizeLimitKb`<sup>Required</sup> <a name="ElasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb"></a>

```csharp
public double ElasticsearchIndexedFileSizeLimitKb { get; }
```

- *Type:* double

---

##### `ElasticsearchIndexing`<sup>Required</sup> <a name="ElasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing"></a>

```csharp
public object ElasticsearchIndexing { get; }
```

- *Type:* object

---

##### `ElasticsearchLimitIndexing`<sup>Required</sup> <a name="ElasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing"></a>

```csharp
public object ElasticsearchLimitIndexing { get; }
```

- *Type:* object

---

##### `ElasticsearchMaxBulkConcurrency`<sup>Required</sup> <a name="ElasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency"></a>

```csharp
public double ElasticsearchMaxBulkConcurrency { get; }
```

- *Type:* double

---

##### `ElasticsearchMaxBulkSizeMb`<sup>Required</sup> <a name="ElasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb"></a>

```csharp
public double ElasticsearchMaxBulkSizeMb { get; }
```

- *Type:* double

---

##### `ElasticsearchNamespaceIds`<sup>Required</sup> <a name="ElasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds"></a>

```csharp
public double[] ElasticsearchNamespaceIds { get; }
```

- *Type:* double[]

---

##### `ElasticsearchPassword`<sup>Required</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword"></a>

```csharp
public string ElasticsearchPassword { get; }
```

- *Type:* string

---

##### `ElasticsearchProjectIds`<sup>Required</sup> <a name="ElasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds"></a>

```csharp
public double[] ElasticsearchProjectIds { get; }
```

- *Type:* double[]

---

##### `ElasticsearchSearch`<sup>Required</sup> <a name="ElasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch"></a>

```csharp
public object ElasticsearchSearch { get; }
```

- *Type:* object

---

##### `ElasticsearchUrl`<sup>Required</sup> <a name="ElasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl"></a>

```csharp
public string[] ElasticsearchUrl { get; }
```

- *Type:* string[]

---

##### `ElasticsearchUsername`<sup>Required</sup> <a name="ElasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername"></a>

```csharp
public string ElasticsearchUsername { get; }
```

- *Type:* string

---

##### `EmailAdditionalText`<sup>Required</sup> <a name="EmailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText"></a>

```csharp
public string EmailAdditionalText { get; }
```

- *Type:* string

---

##### `EmailAuthorInBody`<sup>Required</sup> <a name="EmailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody"></a>

```csharp
public object EmailAuthorInBody { get; }
```

- *Type:* object

---

##### `EnabledGitAccessProtocol`<sup>Required</sup> <a name="EnabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol"></a>

```csharp
public string EnabledGitAccessProtocol { get; }
```

- *Type:* string

---

##### `EnforceNamespaceStorageLimit`<sup>Required</sup> <a name="EnforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit"></a>

```csharp
public object EnforceNamespaceStorageLimit { get; }
```

- *Type:* object

---

##### `EnforceTerms`<sup>Required</sup> <a name="EnforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms"></a>

```csharp
public object EnforceTerms { get; }
```

- *Type:* object

---

##### `ExternalAuthClientCert`<sup>Required</sup> <a name="ExternalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert"></a>

```csharp
public string ExternalAuthClientCert { get; }
```

- *Type:* string

---

##### `ExternalAuthClientKey`<sup>Required</sup> <a name="ExternalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey"></a>

```csharp
public string ExternalAuthClientKey { get; }
```

- *Type:* string

---

##### `ExternalAuthClientKeyPass`<sup>Required</sup> <a name="ExternalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass"></a>

```csharp
public string ExternalAuthClientKeyPass { get; }
```

- *Type:* string

---

##### `ExternalAuthorizationServiceDefaultLabel`<sup>Required</sup> <a name="ExternalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel"></a>

```csharp
public string ExternalAuthorizationServiceDefaultLabel { get; }
```

- *Type:* string

---

##### `ExternalAuthorizationServiceEnabled`<sup>Required</sup> <a name="ExternalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled"></a>

```csharp
public object ExternalAuthorizationServiceEnabled { get; }
```

- *Type:* object

---

##### `ExternalAuthorizationServiceTimeout`<sup>Required</sup> <a name="ExternalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout"></a>

```csharp
public double ExternalAuthorizationServiceTimeout { get; }
```

- *Type:* double

---

##### `ExternalAuthorizationServiceUrl`<sup>Required</sup> <a name="ExternalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl"></a>

```csharp
public string ExternalAuthorizationServiceUrl { get; }
```

- *Type:* string

---

##### `ExternalPipelineValidationServiceTimeout`<sup>Required</sup> <a name="ExternalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout"></a>

```csharp
public double ExternalPipelineValidationServiceTimeout { get; }
```

- *Type:* double

---

##### `ExternalPipelineValidationServiceToken`<sup>Required</sup> <a name="ExternalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken"></a>

```csharp
public string ExternalPipelineValidationServiceToken { get; }
```

- *Type:* string

---

##### `ExternalPipelineValidationServiceUrl`<sup>Required</sup> <a name="ExternalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl"></a>

```csharp
public string ExternalPipelineValidationServiceUrl { get; }
```

- *Type:* string

---

##### `FileTemplateProjectId`<sup>Required</sup> <a name="FileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId"></a>

```csharp
public double FileTemplateProjectId { get; }
```

- *Type:* double

---

##### `FirstDayOfWeek`<sup>Required</sup> <a name="FirstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek"></a>

```csharp
public double FirstDayOfWeek { get; }
```

- *Type:* double

---

##### `GeoNodeAllowedIps`<sup>Required</sup> <a name="GeoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps"></a>

```csharp
public string GeoNodeAllowedIps { get; }
```

- *Type:* string

---

##### `GeoStatusTimeout`<sup>Required</sup> <a name="GeoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout"></a>

```csharp
public double GeoStatusTimeout { get; }
```

- *Type:* double

---

##### `GitalyTimeoutDefault`<sup>Required</sup> <a name="GitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault"></a>

```csharp
public double GitalyTimeoutDefault { get; }
```

- *Type:* double

---

##### `GitalyTimeoutFast`<sup>Required</sup> <a name="GitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast"></a>

```csharp
public double GitalyTimeoutFast { get; }
```

- *Type:* double

---

##### `GitalyTimeoutMedium`<sup>Required</sup> <a name="GitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium"></a>

```csharp
public double GitalyTimeoutMedium { get; }
```

- *Type:* double

---

##### `GitRateLimitUsersAllowlist`<sup>Required</sup> <a name="GitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist"></a>

```csharp
public string[] GitRateLimitUsersAllowlist { get; }
```

- *Type:* string[]

---

##### `GitTwoFactorSessionExpiry`<sup>Required</sup> <a name="GitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry"></a>

```csharp
public double GitTwoFactorSessionExpiry { get; }
```

- *Type:* double

---

##### `GrafanaEnabled`<sup>Required</sup> <a name="GrafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled"></a>

```csharp
public object GrafanaEnabled { get; }
```

- *Type:* object

---

##### `GrafanaUrl`<sup>Required</sup> <a name="GrafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl"></a>

```csharp
public string GrafanaUrl { get; }
```

- *Type:* string

---

##### `GravatarEnabled`<sup>Required</sup> <a name="GravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled"></a>

```csharp
public object GravatarEnabled { get; }
```

- *Type:* object

---

##### `GroupOwnersCanManageDefaultBranchProtection`<sup>Required</sup> <a name="GroupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection"></a>

```csharp
public object GroupOwnersCanManageDefaultBranchProtection { get; }
```

- *Type:* object

---

##### `HashedStorageEnabled`<sup>Required</sup> <a name="HashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled"></a>

```csharp
public object HashedStorageEnabled { get; }
```

- *Type:* object

---

##### `HelpPageHideCommercialContent`<sup>Required</sup> <a name="HelpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent"></a>

```csharp
public object HelpPageHideCommercialContent { get; }
```

- *Type:* object

---

##### `HelpPageSupportUrl`<sup>Required</sup> <a name="HelpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl"></a>

```csharp
public string HelpPageSupportUrl { get; }
```

- *Type:* string

---

##### `HelpPageText`<sup>Required</sup> <a name="HelpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText"></a>

```csharp
public string HelpPageText { get; }
```

- *Type:* string

---

##### `HelpText`<sup>Required</sup> <a name="HelpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText"></a>

```csharp
public string HelpText { get; }
```

- *Type:* string

---

##### `HideThirdPartyOffers`<sup>Required</sup> <a name="HideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers"></a>

```csharp
public object HideThirdPartyOffers { get; }
```

- *Type:* object

---

##### `HomePageUrl`<sup>Required</sup> <a name="HomePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl"></a>

```csharp
public string HomePageUrl { get; }
```

- *Type:* string

---

##### `HousekeepingEnabled`<sup>Required</sup> <a name="HousekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled"></a>

```csharp
public object HousekeepingEnabled { get; }
```

- *Type:* object

---

##### `HousekeepingFullRepackPeriod`<sup>Required</sup> <a name="HousekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod"></a>

```csharp
public double HousekeepingFullRepackPeriod { get; }
```

- *Type:* double

---

##### `HousekeepingGcPeriod`<sup>Required</sup> <a name="HousekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod"></a>

```csharp
public double HousekeepingGcPeriod { get; }
```

- *Type:* double

---

##### `HousekeepingIncrementalRepackPeriod`<sup>Required</sup> <a name="HousekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod"></a>

```csharp
public double HousekeepingIncrementalRepackPeriod { get; }
```

- *Type:* double

---

##### `HousekeepingOptimizeRepositoryPeriod`<sup>Required</sup> <a name="HousekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriod"></a>

```csharp
public double HousekeepingOptimizeRepositoryPeriod { get; }
```

- *Type:* double

---

##### `HtmlEmailsEnabled`<sup>Required</sup> <a name="HtmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled"></a>

```csharp
public object HtmlEmailsEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportSources`<sup>Required</sup> <a name="ImportSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources"></a>

```csharp
public string[] ImportSources { get; }
```

- *Type:* string[]

---

##### `InactiveProjectsDeleteAfterMonths`<sup>Required</sup> <a name="InactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths"></a>

```csharp
public double InactiveProjectsDeleteAfterMonths { get; }
```

- *Type:* double

---

##### `InactiveProjectsMinSizeMb`<sup>Required</sup> <a name="InactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb"></a>

```csharp
public double InactiveProjectsMinSizeMb { get; }
```

- *Type:* double

---

##### `InactiveProjectsSendWarningEmailAfterMonths`<sup>Required</sup> <a name="InactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```csharp
public double InactiveProjectsSendWarningEmailAfterMonths { get; }
```

- *Type:* double

---

##### `InProductMarketingEmailsEnabled`<sup>Required</sup> <a name="InProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled"></a>

```csharp
public object InProductMarketingEmailsEnabled { get; }
```

- *Type:* object

---

##### `InvisibleCaptchaEnabled`<sup>Required</sup> <a name="InvisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled"></a>

```csharp
public object InvisibleCaptchaEnabled { get; }
```

- *Type:* object

---

##### `IssuesCreateLimit`<sup>Required</sup> <a name="IssuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit"></a>

```csharp
public double IssuesCreateLimit { get; }
```

- *Type:* double

---

##### `KeepLatestArtifact`<sup>Required</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact"></a>

```csharp
public object KeepLatestArtifact { get; }
```

- *Type:* object

---

##### `LocalMarkdownVersion`<sup>Required</sup> <a name="LocalMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion"></a>

```csharp
public double LocalMarkdownVersion { get; }
```

- *Type:* double

---

##### `MailgunEventsEnabled`<sup>Required</sup> <a name="MailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled"></a>

```csharp
public object MailgunEventsEnabled { get; }
```

- *Type:* object

---

##### `MailgunSigningKey`<sup>Required</sup> <a name="MailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey"></a>

```csharp
public string MailgunSigningKey { get; }
```

- *Type:* string

---

##### `MaintenanceMode`<sup>Required</sup> <a name="MaintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode"></a>

```csharp
public object MaintenanceMode { get; }
```

- *Type:* object

---

##### `MaintenanceModeMessage`<sup>Required</sup> <a name="MaintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage"></a>

```csharp
public string MaintenanceModeMessage { get; }
```

- *Type:* string

---

##### `MaxArtifactsSize`<sup>Required</sup> <a name="MaxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize"></a>

```csharp
public double MaxArtifactsSize { get; }
```

- *Type:* double

---

##### `MaxAttachmentSize`<sup>Required</sup> <a name="MaxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize"></a>

```csharp
public double MaxAttachmentSize { get; }
```

- *Type:* double

---

##### `MaxExportSize`<sup>Required</sup> <a name="MaxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize"></a>

```csharp
public double MaxExportSize { get; }
```

- *Type:* double

---

##### `MaxImportSize`<sup>Required</sup> <a name="MaxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize"></a>

```csharp
public double MaxImportSize { get; }
```

- *Type:* double

---

##### `MaxNumberOfRepositoryDownloads`<sup>Required</sup> <a name="MaxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads"></a>

```csharp
public double MaxNumberOfRepositoryDownloads { get; }
```

- *Type:* double

---

##### `MaxNumberOfRepositoryDownloadsWithinTimePeriod`<sup>Required</sup> <a name="MaxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```csharp
public double MaxNumberOfRepositoryDownloadsWithinTimePeriod { get; }
```

- *Type:* double

---

##### `MaxPagesSize`<sup>Required</sup> <a name="MaxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize"></a>

```csharp
public double MaxPagesSize { get; }
```

- *Type:* double

---

##### `MaxPersonalAccessTokenLifetime`<sup>Required</sup> <a name="MaxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime"></a>

```csharp
public double MaxPersonalAccessTokenLifetime { get; }
```

- *Type:* double

---

##### `MaxSshKeyLifetime`<sup>Required</sup> <a name="MaxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime"></a>

```csharp
public double MaxSshKeyLifetime { get; }
```

- *Type:* double

---

##### `MetricsMethodCallThreshold`<sup>Required</sup> <a name="MetricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold"></a>

```csharp
public double MetricsMethodCallThreshold { get; }
```

- *Type:* double

---

##### `MirrorAvailable`<sup>Required</sup> <a name="MirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable"></a>

```csharp
public object MirrorAvailable { get; }
```

- *Type:* object

---

##### `MirrorCapacityThreshold`<sup>Required</sup> <a name="MirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold"></a>

```csharp
public double MirrorCapacityThreshold { get; }
```

- *Type:* double

---

##### `MirrorMaxCapacity`<sup>Required</sup> <a name="MirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity"></a>

```csharp
public double MirrorMaxCapacity { get; }
```

- *Type:* double

---

##### `MirrorMaxDelay`<sup>Required</sup> <a name="MirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay"></a>

```csharp
public double MirrorMaxDelay { get; }
```

- *Type:* double

---

##### `NpmPackageRequestsForwarding`<sup>Required</sup> <a name="NpmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding"></a>

```csharp
public object NpmPackageRequestsForwarding { get; }
```

- *Type:* object

---

##### `OutboundLocalRequestsWhitelist`<sup>Required</sup> <a name="OutboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist"></a>

```csharp
public string[] OutboundLocalRequestsWhitelist { get; }
```

- *Type:* string[]

---

##### `PackageRegistryCleanupPoliciesWorkerCapacity`<sup>Required</sup> <a name="PackageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```csharp
public double PackageRegistryCleanupPoliciesWorkerCapacity { get; }
```

- *Type:* double

---

##### `PagesDomainVerificationEnabled`<sup>Required</sup> <a name="PagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled"></a>

```csharp
public object PagesDomainVerificationEnabled { get; }
```

- *Type:* object

---

##### `PasswordAuthenticationEnabledForGit`<sup>Required</sup> <a name="PasswordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit"></a>

```csharp
public object PasswordAuthenticationEnabledForGit { get; }
```

- *Type:* object

---

##### `PasswordAuthenticationEnabledForWeb`<sup>Required</sup> <a name="PasswordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb"></a>

```csharp
public object PasswordAuthenticationEnabledForWeb { get; }
```

- *Type:* object

---

##### `PasswordLowercaseRequired`<sup>Required</sup> <a name="PasswordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired"></a>

```csharp
public object PasswordLowercaseRequired { get; }
```

- *Type:* object

---

##### `PasswordNumberRequired`<sup>Required</sup> <a name="PasswordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired"></a>

```csharp
public object PasswordNumberRequired { get; }
```

- *Type:* object

---

##### `PasswordSymbolRequired`<sup>Required</sup> <a name="PasswordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired"></a>

```csharp
public object PasswordSymbolRequired { get; }
```

- *Type:* object

---

##### `PasswordUppercaseRequired`<sup>Required</sup> <a name="PasswordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired"></a>

```csharp
public object PasswordUppercaseRequired { get; }
```

- *Type:* object

---

##### `PerformanceBarAllowedGroupPath`<sup>Required</sup> <a name="PerformanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath"></a>

```csharp
public string PerformanceBarAllowedGroupPath { get; }
```

- *Type:* string

---

##### `PersonalAccessTokenPrefix`<sup>Required</sup> <a name="PersonalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix"></a>

```csharp
public string PersonalAccessTokenPrefix { get; }
```

- *Type:* string

---

##### `PipelineLimitPerProjectUserSha`<sup>Required</sup> <a name="PipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha"></a>

```csharp
public double PipelineLimitPerProjectUserSha { get; }
```

- *Type:* double

---

##### `PlantumlEnabled`<sup>Required</sup> <a name="PlantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled"></a>

```csharp
public object PlantumlEnabled { get; }
```

- *Type:* object

---

##### `PlantumlUrl`<sup>Required</sup> <a name="PlantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl"></a>

```csharp
public string PlantumlUrl { get; }
```

- *Type:* string

---

##### `PollingIntervalMultiplier`<sup>Required</sup> <a name="PollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier"></a>

```csharp
public double PollingIntervalMultiplier { get; }
```

- *Type:* double

---

##### `ProjectExportEnabled`<sup>Required</sup> <a name="ProjectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled"></a>

```csharp
public object ProjectExportEnabled { get; }
```

- *Type:* object

---

##### `PrometheusMetricsEnabled`<sup>Required</sup> <a name="PrometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled"></a>

```csharp
public object PrometheusMetricsEnabled { get; }
```

- *Type:* object

---

##### `ProtectedCiVariables`<sup>Required</sup> <a name="ProtectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables"></a>

```csharp
public object ProtectedCiVariables { get; }
```

- *Type:* object

---

##### `PushEventActivitiesLimit`<sup>Required</sup> <a name="PushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit"></a>

```csharp
public double PushEventActivitiesLimit { get; }
```

- *Type:* double

---

##### `PushEventHooksLimit`<sup>Required</sup> <a name="PushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit"></a>

```csharp
public double PushEventHooksLimit { get; }
```

- *Type:* double

---

##### `PypiPackageRequestsForwarding`<sup>Required</sup> <a name="PypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding"></a>

```csharp
public object PypiPackageRequestsForwarding { get; }
```

- *Type:* object

---

##### `RateLimitingResponseText`<sup>Required</sup> <a name="RateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText"></a>

```csharp
public string RateLimitingResponseText { get; }
```

- *Type:* string

---

##### `RawBlobRequestLimit`<sup>Required</sup> <a name="RawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit"></a>

```csharp
public double RawBlobRequestLimit { get; }
```

- *Type:* double

---

##### `RecaptchaEnabled`<sup>Required</sup> <a name="RecaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled"></a>

```csharp
public object RecaptchaEnabled { get; }
```

- *Type:* object

---

##### `RecaptchaPrivateKey`<sup>Required</sup> <a name="RecaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey"></a>

```csharp
public string RecaptchaPrivateKey { get; }
```

- *Type:* string

---

##### `RecaptchaSiteKey`<sup>Required</sup> <a name="RecaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey"></a>

```csharp
public string RecaptchaSiteKey { get; }
```

- *Type:* string

---

##### `ReceiveMaxInputSize`<sup>Required</sup> <a name="ReceiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize"></a>

```csharp
public double ReceiveMaxInputSize { get; }
```

- *Type:* double

---

##### `RepositoryChecksEnabled`<sup>Required</sup> <a name="RepositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled"></a>

```csharp
public object RepositoryChecksEnabled { get; }
```

- *Type:* object

---

##### `RepositorySizeLimit`<sup>Required</sup> <a name="RepositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit"></a>

```csharp
public double RepositorySizeLimit { get; }
```

- *Type:* double

---

##### `RepositoryStorages`<sup>Required</sup> <a name="RepositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages"></a>

```csharp
public string[] RepositoryStorages { get; }
```

- *Type:* string[]

---

##### `RepositoryStoragesWeighted`<sup>Required</sup> <a name="RepositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RepositoryStoragesWeighted { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `RequireAdminApprovalAfterUserSignup`<sup>Required</sup> <a name="RequireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup"></a>

```csharp
public object RequireAdminApprovalAfterUserSignup { get; }
```

- *Type:* object

---

##### `RequireTwoFactorAuthentication`<sup>Required</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication"></a>

```csharp
public object RequireTwoFactorAuthentication { get; }
```

- *Type:* object

---

##### `RestrictedVisibilityLevels`<sup>Required</sup> <a name="RestrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels"></a>

```csharp
public string[] RestrictedVisibilityLevels { get; }
```

- *Type:* string[]

---

##### `RsaKeyRestriction`<sup>Required</sup> <a name="RsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction"></a>

```csharp
public double RsaKeyRestriction { get; }
```

- *Type:* double

---

##### `SearchRateLimit`<sup>Required</sup> <a name="SearchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit"></a>

```csharp
public double SearchRateLimit { get; }
```

- *Type:* double

---

##### `SearchRateLimitUnauthenticated`<sup>Required</sup> <a name="SearchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated"></a>

```csharp
public double SearchRateLimitUnauthenticated { get; }
```

- *Type:* double

---

##### `SendUserConfirmationEmail`<sup>Required</sup> <a name="SendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail"></a>

```csharp
public object SendUserConfirmationEmail { get; }
```

- *Type:* object

---

##### `SessionExpireDelay`<sup>Required</sup> <a name="SessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay"></a>

```csharp
public double SessionExpireDelay { get; }
```

- *Type:* double

---

##### `SharedRunnersEnabled`<sup>Required</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled"></a>

```csharp
public object SharedRunnersEnabled { get; }
```

- *Type:* object

---

##### `SharedRunnersMinutes`<sup>Required</sup> <a name="SharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes"></a>

```csharp
public double SharedRunnersMinutes { get; }
```

- *Type:* double

---

##### `SharedRunnersText`<sup>Required</sup> <a name="SharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText"></a>

```csharp
public string SharedRunnersText { get; }
```

- *Type:* string

---

##### `SidekiqJobLimiterCompressionThresholdBytes`<sup>Required</sup> <a name="SidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```csharp
public double SidekiqJobLimiterCompressionThresholdBytes { get; }
```

- *Type:* double

---

##### `SidekiqJobLimiterLimitBytes`<sup>Required</sup> <a name="SidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes"></a>

```csharp
public double SidekiqJobLimiterLimitBytes { get; }
```

- *Type:* double

---

##### `SidekiqJobLimiterMode`<sup>Required</sup> <a name="SidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode"></a>

```csharp
public string SidekiqJobLimiterMode { get; }
```

- *Type:* string

---

##### `SignInText`<sup>Required</sup> <a name="SignInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText"></a>

```csharp
public string SignInText { get; }
```

- *Type:* string

---

##### `SignupEnabled`<sup>Required</sup> <a name="SignupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled"></a>

```csharp
public object SignupEnabled { get; }
```

- *Type:* object

---

##### `SlackAppEnabled`<sup>Required</sup> <a name="SlackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled"></a>

```csharp
public object SlackAppEnabled { get; }
```

- *Type:* object

---

##### `SlackAppId`<sup>Required</sup> <a name="SlackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId"></a>

```csharp
public string SlackAppId { get; }
```

- *Type:* string

---

##### `SlackAppSecret`<sup>Required</sup> <a name="SlackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret"></a>

```csharp
public string SlackAppSecret { get; }
```

- *Type:* string

---

##### `SlackAppSigningSecret`<sup>Required</sup> <a name="SlackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret"></a>

```csharp
public string SlackAppSigningSecret { get; }
```

- *Type:* string

---

##### `SlackAppVerificationToken`<sup>Required</sup> <a name="SlackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken"></a>

```csharp
public string SlackAppVerificationToken { get; }
```

- *Type:* string

---

##### `SnippetSizeLimit`<sup>Required</sup> <a name="SnippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit"></a>

```csharp
public double SnippetSizeLimit { get; }
```

- *Type:* double

---

##### `SnowplowAppId`<sup>Required</sup> <a name="SnowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId"></a>

```csharp
public string SnowplowAppId { get; }
```

- *Type:* string

---

##### `SnowplowCollectorHostname`<sup>Required</sup> <a name="SnowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname"></a>

```csharp
public string SnowplowCollectorHostname { get; }
```

- *Type:* string

---

##### `SnowplowCookieDomain`<sup>Required</sup> <a name="SnowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain"></a>

```csharp
public string SnowplowCookieDomain { get; }
```

- *Type:* string

---

##### `SnowplowEnabled`<sup>Required</sup> <a name="SnowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled"></a>

```csharp
public object SnowplowEnabled { get; }
```

- *Type:* object

---

##### `SourcegraphEnabled`<sup>Required</sup> <a name="SourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled"></a>

```csharp
public object SourcegraphEnabled { get; }
```

- *Type:* object

---

##### `SourcegraphPublicOnly`<sup>Required</sup> <a name="SourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly"></a>

```csharp
public object SourcegraphPublicOnly { get; }
```

- *Type:* object

---

##### `SourcegraphUrl`<sup>Required</sup> <a name="SourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl"></a>

```csharp
public string SourcegraphUrl { get; }
```

- *Type:* string

---

##### `SpamCheckApiKey`<sup>Required</sup> <a name="SpamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey"></a>

```csharp
public string SpamCheckApiKey { get; }
```

- *Type:* string

---

##### `SpamCheckEndpointEnabled`<sup>Required</sup> <a name="SpamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled"></a>

```csharp
public object SpamCheckEndpointEnabled { get; }
```

- *Type:* object

---

##### `SpamCheckEndpointUrl`<sup>Required</sup> <a name="SpamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl"></a>

```csharp
public string SpamCheckEndpointUrl { get; }
```

- *Type:* string

---

##### `SuggestPipelineEnabled`<sup>Required</sup> <a name="SuggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled"></a>

```csharp
public object SuggestPipelineEnabled { get; }
```

- *Type:* object

---

##### `TerminalMaxSessionTime`<sup>Required</sup> <a name="TerminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime"></a>

```csharp
public double TerminalMaxSessionTime { get; }
```

- *Type:* double

---

##### `Terms`<sup>Required</sup> <a name="Terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms"></a>

```csharp
public string Terms { get; }
```

- *Type:* string

---

##### `ThrottleAuthenticatedApiEnabled`<sup>Required</sup> <a name="ThrottleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled"></a>

```csharp
public object ThrottleAuthenticatedApiEnabled { get; }
```

- *Type:* object

---

##### `ThrottleAuthenticatedApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```csharp
public double ThrottleAuthenticatedApiPeriodInSeconds { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```csharp
public double ThrottleAuthenticatedApiRequestsPerPeriod { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedPackagesApiEnabled`<sup>Required</sup> <a name="ThrottleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled"></a>

```csharp
public object ThrottleAuthenticatedPackagesApiEnabled { get; }
```

- *Type:* object

---

##### `ThrottleAuthenticatedPackagesApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```csharp
public double ThrottleAuthenticatedPackagesApiPeriodInSeconds { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedPackagesApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```csharp
public double ThrottleAuthenticatedPackagesApiRequestsPerPeriod { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedWebEnabled`<sup>Required</sup> <a name="ThrottleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled"></a>

```csharp
public object ThrottleAuthenticatedWebEnabled { get; }
```

- *Type:* object

---

##### `ThrottleAuthenticatedWebPeriodInSeconds`<sup>Required</sup> <a name="ThrottleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```csharp
public double ThrottleAuthenticatedWebPeriodInSeconds { get; }
```

- *Type:* double

---

##### `ThrottleAuthenticatedWebRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```csharp
public double ThrottleAuthenticatedWebRequestsPerPeriod { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedApiEnabled`<sup>Required</sup> <a name="ThrottleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled"></a>

```csharp
public object ThrottleUnauthenticatedApiEnabled { get; }
```

- *Type:* object

---

##### `ThrottleUnauthenticatedApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```csharp
public double ThrottleUnauthenticatedApiPeriodInSeconds { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```csharp
public double ThrottleUnauthenticatedApiRequestsPerPeriod { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedPackagesApiEnabled`<sup>Required</sup> <a name="ThrottleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```csharp
public object ThrottleUnauthenticatedPackagesApiEnabled { get; }
```

- *Type:* object

---

##### `ThrottleUnauthenticatedPackagesApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```csharp
public double ThrottleUnauthenticatedPackagesApiPeriodInSeconds { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedPackagesApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```csharp
public double ThrottleUnauthenticatedPackagesApiRequestsPerPeriod { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedWebEnabled`<sup>Required</sup> <a name="ThrottleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled"></a>

```csharp
public object ThrottleUnauthenticatedWebEnabled { get; }
```

- *Type:* object

---

##### `ThrottleUnauthenticatedWebPeriodInSeconds`<sup>Required</sup> <a name="ThrottleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```csharp
public double ThrottleUnauthenticatedWebPeriodInSeconds { get; }
```

- *Type:* double

---

##### `ThrottleUnauthenticatedWebRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```csharp
public double ThrottleUnauthenticatedWebRequestsPerPeriod { get; }
```

- *Type:* double

---

##### `TimeTrackingLimitToHours`<sup>Required</sup> <a name="TimeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours"></a>

```csharp
public object TimeTrackingLimitToHours { get; }
```

- *Type:* object

---

##### `TwoFactorGracePeriod`<sup>Required</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod"></a>

```csharp
public double TwoFactorGracePeriod { get; }
```

- *Type:* double

---

##### `UniqueIpsLimitEnabled`<sup>Required</sup> <a name="UniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled"></a>

```csharp
public object UniqueIpsLimitEnabled { get; }
```

- *Type:* object

---

##### `UniqueIpsLimitPerUser`<sup>Required</sup> <a name="UniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser"></a>

```csharp
public double UniqueIpsLimitPerUser { get; }
```

- *Type:* double

---

##### `UniqueIpsLimitTimeWindow`<sup>Required</sup> <a name="UniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow"></a>

```csharp
public double UniqueIpsLimitTimeWindow { get; }
```

- *Type:* double

---

##### `UsagePingEnabled`<sup>Required</sup> <a name="UsagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled"></a>

```csharp
public object UsagePingEnabled { get; }
```

- *Type:* object

---

##### `UserDeactivationEmailsEnabled`<sup>Required</sup> <a name="UserDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled"></a>

```csharp
public object UserDeactivationEmailsEnabled { get; }
```

- *Type:* object

---

##### `UserDefaultExternal`<sup>Required</sup> <a name="UserDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal"></a>

```csharp
public object UserDefaultExternal { get; }
```

- *Type:* object

---

##### `UserDefaultInternalRegex`<sup>Required</sup> <a name="UserDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex"></a>

```csharp
public string UserDefaultInternalRegex { get; }
```

- *Type:* string

---

##### `UserOauthApplications`<sup>Required</sup> <a name="UserOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications"></a>

```csharp
public object UserOauthApplications { get; }
```

- *Type:* object

---

##### `UserShowAddSshKeyMessage`<sup>Required</sup> <a name="UserShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage"></a>

```csharp
public object UserShowAddSshKeyMessage { get; }
```

- *Type:* object

---

##### `VersionCheckEnabled`<sup>Required</sup> <a name="VersionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled"></a>

```csharp
public object VersionCheckEnabled { get; }
```

- *Type:* object

---

##### `WebIdeClientsidePreviewEnabled`<sup>Required</sup> <a name="WebIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled"></a>

```csharp
public object WebIdeClientsidePreviewEnabled { get; }
```

- *Type:* object

---

##### `WhatsNewVariant`<sup>Required</sup> <a name="WhatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant"></a>

```csharp
public string WhatsNewVariant { get; }
```

- *Type:* string

---

##### `WikiPageMaxContentBytes`<sup>Required</sup> <a name="WikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes"></a>

```csharp
public double WikiPageMaxContentBytes { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ApplicationSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AbuseNotificationEmail = null,
    object AdminMode = null,
    string AfterSignOutPath = null,
    string AfterSignUpText = null,
    string AkismetApiKey = null,
    object AkismetEnabled = null,
    object AllowGroupOwnersToManageLdap = null,
    object AllowLocalRequestsFromSystemHooks = null,
    object AllowLocalRequestsFromWebHooksAndServices = null,
    string ArchiveBuildsInHumanReadable = null,
    string[] AssetProxyAllowlist = null,
    object AssetProxyEnabled = null,
    string AssetProxySecretKey = null,
    string AssetProxyUrl = null,
    object AuthorizedKeysEnabled = null,
    string AutoDevopsDomain = null,
    object AutoDevopsEnabled = null,
    object AutomaticPurchasedStorageAllocation = null,
    object CanCreateGroup = null,
    object CheckNamespacePlan = null,
    string CommitEmailHostname = null,
    object ContainerExpirationPoliciesEnableHistoricEntries = null,
    double ContainerRegistryCleanupTagsServiceMaxListSize = null,
    double ContainerRegistryDeleteTagsServiceTimeout = null,
    object ContainerRegistryExpirationPoliciesCaching = null,
    double ContainerRegistryExpirationPoliciesWorkerCapacity = null,
    double ContainerRegistryTokenExpireDelay = null,
    object DeactivateDormantUsers = null,
    string DefaultArtifactsExpireIn = null,
    string DefaultBranchName = null,
    double DefaultBranchProtection = null,
    string DefaultCiConfigPath = null,
    string DefaultGroupVisibility = null,
    double DefaultProjectCreation = null,
    double DefaultProjectsLimit = null,
    string DefaultProjectVisibility = null,
    string DefaultSnippetVisibility = null,
    object DeleteInactiveProjects = null,
    double DeletionAdjournedPeriod = null,
    double DiffMaxFiles = null,
    double DiffMaxLines = null,
    double DiffMaxPatchBytes = null,
    string[] DisabledOauthSignInSources = null,
    object DisableFeedToken = null,
    object DnsRebindingProtectionEnabled = null,
    string[] DomainAllowlist = null,
    string[] DomainDenylist = null,
    object DomainDenylistEnabled = null,
    double DsaKeyRestriction = null,
    double EcdsaKeyRestriction = null,
    double EcdsaSkKeyRestriction = null,
    double Ed25519KeyRestriction = null,
    double Ed25519SkKeyRestriction = null,
    string EksAccessKeyId = null,
    string EksAccountId = null,
    object EksIntegrationEnabled = null,
    string EksSecretAccessKey = null,
    object ElasticsearchAws = null,
    string ElasticsearchAwsAccessKey = null,
    string ElasticsearchAwsRegion = null,
    string ElasticsearchAwsSecretAccessKey = null,
    double ElasticsearchIndexedFieldLengthLimit = null,
    double ElasticsearchIndexedFileSizeLimitKb = null,
    object ElasticsearchIndexing = null,
    object ElasticsearchLimitIndexing = null,
    double ElasticsearchMaxBulkConcurrency = null,
    double ElasticsearchMaxBulkSizeMb = null,
    double[] ElasticsearchNamespaceIds = null,
    string ElasticsearchPassword = null,
    double[] ElasticsearchProjectIds = null,
    object ElasticsearchSearch = null,
    string[] ElasticsearchUrl = null,
    string ElasticsearchUsername = null,
    string EmailAdditionalText = null,
    object EmailAuthorInBody = null,
    string EnabledGitAccessProtocol = null,
    object EnforceNamespaceStorageLimit = null,
    object EnforceTerms = null,
    string ExternalAuthClientCert = null,
    string ExternalAuthClientKey = null,
    string ExternalAuthClientKeyPass = null,
    string ExternalAuthorizationServiceDefaultLabel = null,
    object ExternalAuthorizationServiceEnabled = null,
    double ExternalAuthorizationServiceTimeout = null,
    string ExternalAuthorizationServiceUrl = null,
    double ExternalPipelineValidationServiceTimeout = null,
    string ExternalPipelineValidationServiceToken = null,
    string ExternalPipelineValidationServiceUrl = null,
    double FileTemplateProjectId = null,
    double FirstDayOfWeek = null,
    string GeoNodeAllowedIps = null,
    double GeoStatusTimeout = null,
    double GitalyTimeoutDefault = null,
    double GitalyTimeoutFast = null,
    double GitalyTimeoutMedium = null,
    string[] GitRateLimitUsersAllowlist = null,
    double GitTwoFactorSessionExpiry = null,
    object GrafanaEnabled = null,
    string GrafanaUrl = null,
    object GravatarEnabled = null,
    object GroupOwnersCanManageDefaultBranchProtection = null,
    object HashedStorageEnabled = null,
    object HelpPageHideCommercialContent = null,
    string HelpPageSupportUrl = null,
    string HelpPageText = null,
    string HelpText = null,
    object HideThirdPartyOffers = null,
    string HomePageUrl = null,
    object HousekeepingEnabled = null,
    double HousekeepingFullRepackPeriod = null,
    double HousekeepingGcPeriod = null,
    double HousekeepingIncrementalRepackPeriod = null,
    double HousekeepingOptimizeRepositoryPeriod = null,
    object HtmlEmailsEnabled = null,
    string Id = null,
    string[] ImportSources = null,
    double InactiveProjectsDeleteAfterMonths = null,
    double InactiveProjectsMinSizeMb = null,
    double InactiveProjectsSendWarningEmailAfterMonths = null,
    object InProductMarketingEmailsEnabled = null,
    object InvisibleCaptchaEnabled = null,
    double IssuesCreateLimit = null,
    object KeepLatestArtifact = null,
    double LocalMarkdownVersion = null,
    object MailgunEventsEnabled = null,
    string MailgunSigningKey = null,
    object MaintenanceMode = null,
    string MaintenanceModeMessage = null,
    double MaxArtifactsSize = null,
    double MaxAttachmentSize = null,
    double MaxExportSize = null,
    double MaxImportSize = null,
    double MaxNumberOfRepositoryDownloads = null,
    double MaxNumberOfRepositoryDownloadsWithinTimePeriod = null,
    double MaxPagesSize = null,
    double MaxPersonalAccessTokenLifetime = null,
    double MaxSshKeyLifetime = null,
    double MetricsMethodCallThreshold = null,
    object MirrorAvailable = null,
    double MirrorCapacityThreshold = null,
    double MirrorMaxCapacity = null,
    double MirrorMaxDelay = null,
    object NpmPackageRequestsForwarding = null,
    string[] OutboundLocalRequestsWhitelist = null,
    double PackageRegistryCleanupPoliciesWorkerCapacity = null,
    object PagesDomainVerificationEnabled = null,
    object PasswordAuthenticationEnabledForGit = null,
    object PasswordAuthenticationEnabledForWeb = null,
    object PasswordLowercaseRequired = null,
    object PasswordNumberRequired = null,
    object PasswordSymbolRequired = null,
    object PasswordUppercaseRequired = null,
    string PerformanceBarAllowedGroupPath = null,
    string PersonalAccessTokenPrefix = null,
    double PipelineLimitPerProjectUserSha = null,
    object PlantumlEnabled = null,
    string PlantumlUrl = null,
    double PollingIntervalMultiplier = null,
    object ProjectExportEnabled = null,
    object PrometheusMetricsEnabled = null,
    object ProtectedCiVariables = null,
    double PushEventActivitiesLimit = null,
    double PushEventHooksLimit = null,
    object PypiPackageRequestsForwarding = null,
    string RateLimitingResponseText = null,
    double RawBlobRequestLimit = null,
    object RecaptchaEnabled = null,
    string RecaptchaPrivateKey = null,
    string RecaptchaSiteKey = null,
    double ReceiveMaxInputSize = null,
    object RepositoryChecksEnabled = null,
    double RepositorySizeLimit = null,
    string[] RepositoryStorages = null,
    System.Collections.Generic.IDictionary<string, double> RepositoryStoragesWeighted = null,
    object RequireAdminApprovalAfterUserSignup = null,
    object RequireTwoFactorAuthentication = null,
    string[] RestrictedVisibilityLevels = null,
    double RsaKeyRestriction = null,
    double SearchRateLimit = null,
    double SearchRateLimitUnauthenticated = null,
    object SendUserConfirmationEmail = null,
    double SessionExpireDelay = null,
    object SharedRunnersEnabled = null,
    double SharedRunnersMinutes = null,
    string SharedRunnersText = null,
    double SidekiqJobLimiterCompressionThresholdBytes = null,
    double SidekiqJobLimiterLimitBytes = null,
    string SidekiqJobLimiterMode = null,
    string SignInText = null,
    object SignupEnabled = null,
    object SlackAppEnabled = null,
    string SlackAppId = null,
    string SlackAppSecret = null,
    string SlackAppSigningSecret = null,
    string SlackAppVerificationToken = null,
    double SnippetSizeLimit = null,
    string SnowplowAppId = null,
    string SnowplowCollectorHostname = null,
    string SnowplowCookieDomain = null,
    object SnowplowEnabled = null,
    object SourcegraphEnabled = null,
    object SourcegraphPublicOnly = null,
    string SourcegraphUrl = null,
    string SpamCheckApiKey = null,
    object SpamCheckEndpointEnabled = null,
    string SpamCheckEndpointUrl = null,
    object SuggestPipelineEnabled = null,
    double TerminalMaxSessionTime = null,
    string Terms = null,
    object ThrottleAuthenticatedApiEnabled = null,
    double ThrottleAuthenticatedApiPeriodInSeconds = null,
    double ThrottleAuthenticatedApiRequestsPerPeriod = null,
    object ThrottleAuthenticatedPackagesApiEnabled = null,
    double ThrottleAuthenticatedPackagesApiPeriodInSeconds = null,
    double ThrottleAuthenticatedPackagesApiRequestsPerPeriod = null,
    object ThrottleAuthenticatedWebEnabled = null,
    double ThrottleAuthenticatedWebPeriodInSeconds = null,
    double ThrottleAuthenticatedWebRequestsPerPeriod = null,
    object ThrottleUnauthenticatedApiEnabled = null,
    double ThrottleUnauthenticatedApiPeriodInSeconds = null,
    double ThrottleUnauthenticatedApiRequestsPerPeriod = null,
    object ThrottleUnauthenticatedPackagesApiEnabled = null,
    double ThrottleUnauthenticatedPackagesApiPeriodInSeconds = null,
    double ThrottleUnauthenticatedPackagesApiRequestsPerPeriod = null,
    object ThrottleUnauthenticatedWebEnabled = null,
    double ThrottleUnauthenticatedWebPeriodInSeconds = null,
    double ThrottleUnauthenticatedWebRequestsPerPeriod = null,
    object TimeTrackingLimitToHours = null,
    double TwoFactorGracePeriod = null,
    object UniqueIpsLimitEnabled = null,
    double UniqueIpsLimitPerUser = null,
    double UniqueIpsLimitTimeWindow = null,
    object UsagePingEnabled = null,
    object UserDeactivationEmailsEnabled = null,
    object UserDefaultExternal = null,
    string UserDefaultInternalRegex = null,
    object UserOauthApplications = null,
    object UserShowAddSshKeyMessage = null,
    object VersionCheckEnabled = null,
    object WebIdeClientsidePreviewEnabled = null,
    string WhatsNewVariant = null,
    double WikiPageMaxContentBytes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail">AbuseNotificationEmail</a></code> | <code>string</code> | If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode">AdminMode</a></code> | <code>object</code> | Require administrators to enable Admin Mode by re-authenticating for administrative tasks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath">AfterSignOutPath</a></code> | <code>string</code> | Where to redirect users after logout. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText">AfterSignUpText</a></code> | <code>string</code> | Text shown to the user after signing up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey">AkismetApiKey</a></code> | <code>string</code> | API key for Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled">AkismetEnabled</a></code> | <code>object</code> | (If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap">AllowGroupOwnersToManageLdap</a></code> | <code>object</code> | Set to true to allow group owners to manage LDAP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks">AllowLocalRequestsFromSystemHooks</a></code> | <code>object</code> | Allow requests to the local network from system hooks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices">AllowLocalRequestsFromWebHooksAndServices</a></code> | <code>object</code> | Allow requests to the local network from web hooks and services. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable">ArchiveBuildsInHumanReadable</a></code> | <code>string</code> | Set the duration for which the jobs are considered as old and expired. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist">AssetProxyAllowlist</a></code> | <code>string[]</code> | Assets that match these domains are not proxied. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled">AssetProxyEnabled</a></code> | <code>object</code> | (If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey">AssetProxySecretKey</a></code> | <code>string</code> | Shared secret with the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl">AssetProxyUrl</a></code> | <code>string</code> | URL of the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled">AuthorizedKeysEnabled</a></code> | <code>object</code> | By default, we write to the authorized_keys file to support Git over SSH without additional configuration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain">AutoDevopsDomain</a></code> | <code>string</code> | Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | Enable Auto DevOps for projects by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation">AutomaticPurchasedStorageAllocation</a></code> | <code>object</code> | Enabling this permits automatic allocation of purchased storage in a namespace. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup">CanCreateGroup</a></code> | <code>object</code> | Indicates whether users can create top-level groups. Introduced in GitLab 15.5. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan">CheckNamespacePlan</a></code> | <code>object</code> | Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname">CommitEmailHostname</a></code> | <code>string</code> | Custom hostname (for private commit emails). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries">ContainerExpirationPoliciesEnableHistoricEntries</a></code> | <code>object</code> | Enable cleanup policies for all projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize">ContainerRegistryCleanupTagsServiceMaxListSize</a></code> | <code>double</code> | The maximum number of tags that can be deleted in a single execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout">ContainerRegistryDeleteTagsServiceTimeout</a></code> | <code>double</code> | The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching">ContainerRegistryExpirationPoliciesCaching</a></code> | <code>object</code> | Caching during the execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity">ContainerRegistryExpirationPoliciesWorkerCapacity</a></code> | <code>double</code> | Number of workers for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay">ContainerRegistryTokenExpireDelay</a></code> | <code>double</code> | Container Registry token duration in minutes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers">DeactivateDormantUsers</a></code> | <code>object</code> | Enable automatic deactivation of dormant users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn">DefaultArtifactsExpireIn</a></code> | <code>string</code> | Set the default expiration time for each job’s artifacts. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName">DefaultBranchName</a></code> | <code>string</code> | Instance-level custom initial branch name (introduced in GitLab 13.2). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>double</code> | Determine if developers can push to the default branch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath">DefaultCiConfigPath</a></code> | <code>string</code> | Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility">DefaultGroupVisibility</a></code> | <code>string</code> | What visibility level new groups receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation">DefaultProjectCreation</a></code> | <code>double</code> | Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit">DefaultProjectsLimit</a></code> | <code>double</code> | Project limit per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility">DefaultProjectVisibility</a></code> | <code>string</code> | What visibility level new projects receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility">DefaultSnippetVisibility</a></code> | <code>string</code> | What visibility level new snippets receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects">DeleteInactiveProjects</a></code> | <code>object</code> | Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod">DeletionAdjournedPeriod</a></code> | <code>double</code> | The number of days to wait before deleting a project or group that is marked for deletion. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles">DiffMaxFiles</a></code> | <code>double</code> | Maximum files in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines">DiffMaxLines</a></code> | <code>double</code> | Maximum lines in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes">DiffMaxPatchBytes</a></code> | <code>double</code> | Maximum diff patch size, in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources">DisabledOauthSignInSources</a></code> | <code>string[]</code> | Disabled OAuth sign-in sources. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken">DisableFeedToken</a></code> | <code>object</code> | Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled">DnsRebindingProtectionEnabled</a></code> | <code>object</code> | Enforce DNS rebinding attack protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist">DomainAllowlist</a></code> | <code>string[]</code> | Force people to use only corporate emails for sign-up. Null means there is no restriction. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist">DomainDenylist</a></code> | <code>string[]</code> | Users with email addresses that match these domains cannot sign up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled">DomainDenylistEnabled</a></code> | <code>object</code> | (If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction">DsaKeyRestriction</a></code> | <code>double</code> | The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction">EcdsaKeyRestriction</a></code> | <code>double</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction">EcdsaSkKeyRestriction</a></code> | <code>double</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction">Ed25519KeyRestriction</a></code> | <code>double</code> | The minimum allowed curve size (in bits) of an uploaded ED25519 key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction">Ed25519SkKeyRestriction</a></code> | <code>double</code> | The minimum allowed curve size (in bits) of an uploaded ED25519_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId">EksAccessKeyId</a></code> | <code>string</code> | AWS IAM access key ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId">EksAccountId</a></code> | <code>string</code> | Amazon account ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled">EksIntegrationEnabled</a></code> | <code>object</code> | Enable integration with Amazon EKS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey">EksSecretAccessKey</a></code> | <code>string</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws">ElasticsearchAws</a></code> | <code>object</code> | Enable the use of AWS hosted Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey">ElasticsearchAwsAccessKey</a></code> | <code>string</code> | AWS IAM access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion">ElasticsearchAwsRegion</a></code> | <code>string</code> | The AWS region the Elasticsearch domain is configured. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey">ElasticsearchAwsSecretAccessKey</a></code> | <code>string</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit">ElasticsearchIndexedFieldLengthLimit</a></code> | <code>double</code> | Maximum size of text fields to index by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb">ElasticsearchIndexedFileSizeLimitKb</a></code> | <code>double</code> | Maximum size of repository and wiki files that are indexed by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing">ElasticsearchIndexing</a></code> | <code>object</code> | Enable Elasticsearch indexing. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing">ElasticsearchLimitIndexing</a></code> | <code>object</code> | Limit Elasticsearch to index certain namespaces and projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency">ElasticsearchMaxBulkConcurrency</a></code> | <code>double</code> | Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb">ElasticsearchMaxBulkSizeMb</a></code> | <code>double</code> | Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds">ElasticsearchNamespaceIds</a></code> | <code>double[]</code> | The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>string</code> | The password of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds">ElasticsearchProjectIds</a></code> | <code>double[]</code> | The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch">ElasticsearchSearch</a></code> | <code>object</code> | Enable Elasticsearch search. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl">ElasticsearchUrl</a></code> | <code>string[]</code> | The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername">ElasticsearchUsername</a></code> | <code>string</code> | The username of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText">EmailAdditionalText</a></code> | <code>string</code> | Additional text added to the bottom of every email for legal/auditing/compliance reasons. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody">EmailAuthorInBody</a></code> | <code>object</code> | Some email servers do not support overriding the email sender name. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol">EnabledGitAccessProtocol</a></code> | <code>string</code> | Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit">EnforceNamespaceStorageLimit</a></code> | <code>object</code> | Enabling this permits enforcement of namespace storage limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms">EnforceTerms</a></code> | <code>object</code> | (If enabled, requires: terms) Enforce application ToS to all users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert">ExternalAuthClientCert</a></code> | <code>string</code> | (If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey">ExternalAuthClientKey</a></code> | <code>string</code> | Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass">ExternalAuthClientKeyPass</a></code> | <code>string</code> | Passphrase to use for the private key when authenticating with the external service this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel">ExternalAuthorizationServiceDefaultLabel</a></code> | <code>string</code> | The default classification label to use when requesting authorization and no classification label has been specified on the project. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled">ExternalAuthorizationServiceEnabled</a></code> | <code>object</code> | (If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout">ExternalAuthorizationServiceTimeout</a></code> | <code>double</code> | The timeout after which an authorization request is aborted, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl">ExternalAuthorizationServiceUrl</a></code> | <code>string</code> | URL to which authorization requests are directed. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout">ExternalPipelineValidationServiceTimeout</a></code> | <code>double</code> | How long to wait for a response from the pipeline validation service. Assumes OK if it times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken">ExternalPipelineValidationServiceToken</a></code> | <code>string</code> | Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl">ExternalPipelineValidationServiceUrl</a></code> | <code>string</code> | URL to use for pipeline validation requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId">FileTemplateProjectId</a></code> | <code>double</code> | The ID of a project to load custom file templates from. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek">FirstDayOfWeek</a></code> | <code>double</code> | Start day of the week for calendar views and date pickers. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps">GeoNodeAllowedIps</a></code> | <code>string</code> | Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout">GeoStatusTimeout</a></code> | <code>double</code> | The amount of seconds after which a request to get a secondary node status times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault">GitalyTimeoutDefault</a></code> | <code>double</code> | Default Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast">GitalyTimeoutFast</a></code> | <code>double</code> | Gitaly fast operation timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium">GitalyTimeoutMedium</a></code> | <code>double</code> | Medium Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist">GitRateLimitUsersAllowlist</a></code> | <code>string[]</code> | List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry">GitTwoFactorSessionExpiry</a></code> | <code>double</code> | Maximum duration (in minutes) of a session for Git operations when 2FA is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled">GrafanaEnabled</a></code> | <code>object</code> | Enable Grafana. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl">GrafanaUrl</a></code> | <code>string</code> | Grafana URL. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled">GravatarEnabled</a></code> | <code>object</code> | Enable Gravatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection">GroupOwnersCanManageDefaultBranchProtection</a></code> | <code>object</code> | Prevent overrides of default branch protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled">HashedStorageEnabled</a></code> | <code>object</code> | Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent">HelpPageHideCommercialContent</a></code> | <code>object</code> | Hide marketing-related entries from help. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl">HelpPageSupportUrl</a></code> | <code>string</code> | Alternate support URL for help page and help dropdown. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText">HelpPageText</a></code> | <code>string</code> | Custom text displayed on the help page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText">HelpText</a></code> | <code>string</code> | GitLab server administrator information. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers">HideThirdPartyOffers</a></code> | <code>object</code> | Do not display offers from third parties in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl">HomePageUrl</a></code> | <code>string</code> | Redirect to this URL when not logged in. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled">HousekeepingEnabled</a></code> | <code>object</code> | Enable or disable Git housekeeping. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod">HousekeepingFullRepackPeriod</a></code> | <code>double</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod">HousekeepingGcPeriod</a></code> | <code>double</code> | Number of Git pushes after which git gc is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod">HousekeepingIncrementalRepackPeriod</a></code> | <code>double</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingOptimizeRepositoryPeriod">HousekeepingOptimizeRepositoryPeriod</a></code> | <code>double</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled">HtmlEmailsEnabled</a></code> | <code>object</code> | Enable HTML emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources">ImportSources</a></code> | <code>string[]</code> | Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths">InactiveProjectsDeleteAfterMonths</a></code> | <code>double</code> | If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb">InactiveProjectsMinSizeMb</a></code> | <code>double</code> | If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths">InactiveProjectsSendWarningEmailAfterMonths</a></code> | <code>double</code> | If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled">InProductMarketingEmailsEnabled</a></code> | <code>object</code> | Enable in-product marketing emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled">InvisibleCaptchaEnabled</a></code> | <code>object</code> | Enable Invisible CAPTCHA spam detection during sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit">IssuesCreateLimit</a></code> | <code>double</code> | Max number of issue creation requests per minute per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>object</code> | Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion">LocalMarkdownVersion</a></code> | <code>double</code> | Increase this value when any cached Markdown should be invalidated. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled">MailgunEventsEnabled</a></code> | <code>object</code> | Enable Mailgun event receiver. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey">MailgunSigningKey</a></code> | <code>string</code> | The Mailgun HTTP webhook signing key for receiving events from webhook. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode">MaintenanceMode</a></code> | <code>object</code> | When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage">MaintenanceModeMessage</a></code> | <code>string</code> | Message displayed when instance is in maintenance mode. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize">MaxArtifactsSize</a></code> | <code>double</code> | Maximum artifacts size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize">MaxAttachmentSize</a></code> | <code>double</code> | Limit attachment size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize">MaxExportSize</a></code> | <code>double</code> | Maximum export size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize">MaxImportSize</a></code> | <code>double</code> | Maximum import size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads">MaxNumberOfRepositoryDownloads</a></code> | <code>double</code> | Maximum number of unique repositories a user can download in the specified time period before they are banned. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">MaxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | <code>double</code> | Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize">MaxPagesSize</a></code> | <code>double</code> | Maximum size of pages repositories in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime">MaxPersonalAccessTokenLifetime</a></code> | <code>double</code> | Maximum allowable lifetime for access tokens in days. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime">MaxSshKeyLifetime</a></code> | <code>double</code> | Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold">MetricsMethodCallThreshold</a></code> | <code>double</code> | A method call is only tracked when it takes longer than the given amount of milliseconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable">MirrorAvailable</a></code> | <code>object</code> | Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold">MirrorCapacityThreshold</a></code> | <code>double</code> | Minimum capacity to be available before scheduling more mirrors preemptively. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity">MirrorMaxCapacity</a></code> | <code>double</code> | Maximum number of mirrors that can be synchronizing at the same time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay">MirrorMaxDelay</a></code> | <code>double</code> | Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding">NpmPackageRequestsForwarding</a></code> | <code>object</code> | Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist">OutboundLocalRequestsWhitelist</a></code> | <code>string[]</code> | Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity">PackageRegistryCleanupPoliciesWorkerCapacity</a></code> | <code>double</code> | Number of workers assigned to the packages cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled">PagesDomainVerificationEnabled</a></code> | <code>object</code> | Require users to prove ownership of custom domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit">PasswordAuthenticationEnabledForGit</a></code> | <code>object</code> | Enable authentication for Git over HTTP(S) via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb">PasswordAuthenticationEnabledForWeb</a></code> | <code>object</code> | Enable authentication for the web interface via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired">PasswordLowercaseRequired</a></code> | <code>object</code> | Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired">PasswordNumberRequired</a></code> | <code>object</code> | Indicates whether passwords require at least one number. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired">PasswordSymbolRequired</a></code> | <code>object</code> | Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired">PasswordUppercaseRequired</a></code> | <code>object</code> | Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath">PerformanceBarAllowedGroupPath</a></code> | <code>string</code> | Path of the group that is allowed to toggle the performance bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix">PersonalAccessTokenPrefix</a></code> | <code>string</code> | Prefix for all generated personal access tokens. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha">PipelineLimitPerProjectUserSha</a></code> | <code>double</code> | Maximum number of pipeline creation requests per minute per user and commit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled">PlantumlEnabled</a></code> | <code>object</code> | (If enabled, requires: plantuml_url) Enable PlantUML integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl">PlantumlUrl</a></code> | <code>string</code> | The PlantUML instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier">PollingIntervalMultiplier</a></code> | <code>double</code> | Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled">ProjectExportEnabled</a></code> | <code>object</code> | Enable project export. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled">PrometheusMetricsEnabled</a></code> | <code>object</code> | Enable Prometheus metrics. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables">ProtectedCiVariables</a></code> | <code>object</code> | CI/CD variables are protected by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit">PushEventActivitiesLimit</a></code> | <code>double</code> | Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit">PushEventHooksLimit</a></code> | <code>double</code> | Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding">PypiPackageRequestsForwarding</a></code> | <code>object</code> | Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText">RateLimitingResponseText</a></code> | <code>string</code> | When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit">RawBlobRequestLimit</a></code> | <code>double</code> | Max number of requests per minute for each raw path. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled">RecaptchaEnabled</a></code> | <code>object</code> | (If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey">RecaptchaPrivateKey</a></code> | <code>string</code> | Private key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey">RecaptchaSiteKey</a></code> | <code>string</code> | Site key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize">ReceiveMaxInputSize</a></code> | <code>double</code> | Maximum push size (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled">RepositoryChecksEnabled</a></code> | <code>object</code> | GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit">RepositorySizeLimit</a></code> | <code>double</code> | Size limit per repository (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages">RepositoryStorages</a></code> | <code>string[]</code> | (GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted">RepositoryStoragesWeighted</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | (GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup">RequireAdminApprovalAfterUserSignup</a></code> | <code>object</code> | When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>object</code> | (If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels">RestrictedVisibilityLevels</a></code> | <code>string[]</code> | Selected levels cannot be used by non-Administrator users for groups, projects or snippets. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction">RsaKeyRestriction</a></code> | <code>double</code> | The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit">SearchRateLimit</a></code> | <code>double</code> | Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated">SearchRateLimitUnauthenticated</a></code> | <code>double</code> | Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail">SendUserConfirmationEmail</a></code> | <code>object</code> | Send confirmation email on sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay">SessionExpireDelay</a></code> | <code>double</code> | Session duration in minutes. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>object</code> | (If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes">SharedRunnersMinutes</a></code> | <code>double</code> | Set the maximum number of CI/CD minutes that a group can use on shared runners per month. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText">SharedRunnersText</a></code> | <code>string</code> | Shared runners text. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes">SidekiqJobLimiterCompressionThresholdBytes</a></code> | <code>double</code> | The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes">SidekiqJobLimiterLimitBytes</a></code> | <code>double</code> | The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode">SidekiqJobLimiterMode</a></code> | <code>string</code> | track or compress. Sets the behavior for Sidekiq job size limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText">SignInText</a></code> | <code>string</code> | Text on the login page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled">SignupEnabled</a></code> | <code>object</code> | Enable registration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled">SlackAppEnabled</a></code> | <code>object</code> | (If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId">SlackAppId</a></code> | <code>string</code> | The app ID of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret">SlackAppSecret</a></code> | <code>string</code> | The app secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret">SlackAppSigningSecret</a></code> | <code>string</code> | The signing secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken">SlackAppVerificationToken</a></code> | <code>string</code> | The verification token of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit">SnippetSizeLimit</a></code> | <code>double</code> | Max snippet content size in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId">SnowplowAppId</a></code> | <code>string</code> | The Snowplow site name / application ID. (for example, gitlab). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname">SnowplowCollectorHostname</a></code> | <code>string</code> | The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain">SnowplowCookieDomain</a></code> | <code>string</code> | The Snowplow cookie domain. (for example, .gitlab.com). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled">SnowplowEnabled</a></code> | <code>object</code> | Enable snowplow tracking. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled">SourcegraphEnabled</a></code> | <code>object</code> | Enables Sourcegraph integration. If enabled, requires sourcegraph_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly">SourcegraphPublicOnly</a></code> | <code>object</code> | Blocks Sourcegraph from being loaded on private and internal projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl">SourcegraphUrl</a></code> | <code>string</code> | The Sourcegraph instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey">SpamCheckApiKey</a></code> | <code>string</code> | API key used by GitLab for accessing the Spam Check service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled">SpamCheckEndpointEnabled</a></code> | <code>object</code> | Enables spam checking using external Spam Check API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl">SpamCheckEndpointUrl</a></code> | <code>string</code> | URL of the external Spamcheck service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled">SuggestPipelineEnabled</a></code> | <code>object</code> | Enable pipeline suggestion banner. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime">TerminalMaxSessionTime</a></code> | <code>double</code> | Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms">Terms</a></code> | <code>string</code> | (Required by: enforce_terms) Markdown content for the ToS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled">ThrottleAuthenticatedApiEnabled</a></code> | <code>object</code> | (If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds">ThrottleAuthenticatedApiPeriodInSeconds</a></code> | <code>double</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod">ThrottleAuthenticatedApiRequestsPerPeriod</a></code> | <code>double</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled">ThrottleAuthenticatedPackagesApiEnabled</a></code> | <code>object</code> | (If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds">ThrottleAuthenticatedPackagesApiPeriodInSeconds</a></code> | <code>double</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">ThrottleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>double</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled">ThrottleAuthenticatedWebEnabled</a></code> | <code>object</code> | (If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds">ThrottleAuthenticatedWebPeriodInSeconds</a></code> | <code>double</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod">ThrottleAuthenticatedWebRequestsPerPeriod</a></code> | <code>double</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled">ThrottleUnauthenticatedApiEnabled</a></code> | <code>object</code> | (If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds">ThrottleUnauthenticatedApiPeriodInSeconds</a></code> | <code>double</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod">ThrottleUnauthenticatedApiRequestsPerPeriod</a></code> | <code>double</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled">ThrottleUnauthenticatedPackagesApiEnabled</a></code> | <code>object</code> | (If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">ThrottleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | <code>double</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">ThrottleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>double</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled">ThrottleUnauthenticatedWebEnabled</a></code> | <code>object</code> | (If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds">ThrottleUnauthenticatedWebPeriodInSeconds</a></code> | <code>double</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod">ThrottleUnauthenticatedWebRequestsPerPeriod</a></code> | <code>double</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours">TimeTrackingLimitToHours</a></code> | <code>object</code> | Limit display of time tracking units to hours. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>double</code> | Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled">UniqueIpsLimitEnabled</a></code> | <code>object</code> | (If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser">UniqueIpsLimitPerUser</a></code> | <code>double</code> | Maximum number of IPs per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow">UniqueIpsLimitTimeWindow</a></code> | <code>double</code> | How many seconds an IP is counted towards the limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled">UsagePingEnabled</a></code> | <code>object</code> | Every week GitLab reports license usage back to GitLab, Inc. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled">UserDeactivationEmailsEnabled</a></code> | <code>object</code> | Send an email to users upon account deactivation. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal">UserDefaultExternal</a></code> | <code>object</code> | Newly registered users are external by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex">UserDefaultInternalRegex</a></code> | <code>string</code> | Specify an email address regex pattern to identify default internal users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications">UserOauthApplications</a></code> | <code>object</code> | Allow users to register any application to use GitLab as an OAuth provider. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage">UserShowAddSshKeyMessage</a></code> | <code>object</code> | When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled">VersionCheckEnabled</a></code> | <code>object</code> | Let GitLab inform you when an update is available. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled">WebIdeClientsidePreviewEnabled</a></code> | <code>object</code> | Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant">WhatsNewVariant</a></code> | <code>string</code> | What’s new variant, possible values: all_tiers, current_tier, and disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes">WikiPageMaxContentBytes</a></code> | <code>double</code> | Maximum wiki page content size in bytes. The minimum value is 1024 bytes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AbuseNotificationEmail`<sup>Optional</sup> <a name="AbuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail"></a>

```csharp
public string AbuseNotificationEmail { get; set; }
```

- *Type:* string

If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#abuse_notification_email ApplicationSettings#abuse_notification_email}

---

##### `AdminMode`<sup>Optional</sup> <a name="AdminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode"></a>

```csharp
public object AdminMode { get; set; }
```

- *Type:* object

Require administrators to enable Admin Mode by re-authenticating for administrative tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#admin_mode ApplicationSettings#admin_mode}

---

##### `AfterSignOutPath`<sup>Optional</sup> <a name="AfterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath"></a>

```csharp
public string AfterSignOutPath { get; set; }
```

- *Type:* string

Where to redirect users after logout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#after_sign_out_path ApplicationSettings#after_sign_out_path}

---

##### `AfterSignUpText`<sup>Optional</sup> <a name="AfterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText"></a>

```csharp
public string AfterSignUpText { get; set; }
```

- *Type:* string

Text shown to the user after signing up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#after_sign_up_text ApplicationSettings#after_sign_up_text}

---

##### `AkismetApiKey`<sup>Optional</sup> <a name="AkismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey"></a>

```csharp
public string AkismetApiKey { get; set; }
```

- *Type:* string

API key for Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#akismet_api_key ApplicationSettings#akismet_api_key}

---

##### `AkismetEnabled`<sup>Optional</sup> <a name="AkismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled"></a>

```csharp
public object AkismetEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#akismet_enabled ApplicationSettings#akismet_enabled}

---

##### `AllowGroupOwnersToManageLdap`<sup>Optional</sup> <a name="AllowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap"></a>

```csharp
public object AllowGroupOwnersToManageLdap { get; set; }
```

- *Type:* object

Set to true to allow group owners to manage LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#allow_group_owners_to_manage_ldap ApplicationSettings#allow_group_owners_to_manage_ldap}

---

##### `AllowLocalRequestsFromSystemHooks`<sup>Optional</sup> <a name="AllowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks"></a>

```csharp
public object AllowLocalRequestsFromSystemHooks { get; set; }
```

- *Type:* object

Allow requests to the local network from system hooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#allow_local_requests_from_system_hooks ApplicationSettings#allow_local_requests_from_system_hooks}

---

##### `AllowLocalRequestsFromWebHooksAndServices`<sup>Optional</sup> <a name="AllowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices"></a>

```csharp
public object AllowLocalRequestsFromWebHooksAndServices { get; set; }
```

- *Type:* object

Allow requests to the local network from web hooks and services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#allow_local_requests_from_web_hooks_and_services ApplicationSettings#allow_local_requests_from_web_hooks_and_services}

---

##### `ArchiveBuildsInHumanReadable`<sup>Optional</sup> <a name="ArchiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable"></a>

```csharp
public string ArchiveBuildsInHumanReadable { get; set; }
```

- *Type:* string

Set the duration for which the jobs are considered as old and expired.

After that time passes, the jobs are archived and no longer able to be retried. Make it empty to never expire jobs. It has to be no less than 1 day, for example: 15 days, 1 month, 2 years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#archive_builds_in_human_readable ApplicationSettings#archive_builds_in_human_readable}

---

##### `AssetProxyAllowlist`<sup>Optional</sup> <a name="AssetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist"></a>

```csharp
public string[] AssetProxyAllowlist { get; set; }
```

- *Type:* string[]

Assets that match these domains are not proxied.

Wildcards allowed. Your GitLab installation URL is automatically allowlisted. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#asset_proxy_allowlist ApplicationSettings#asset_proxy_allowlist}

---

##### `AssetProxyEnabled`<sup>Optional</sup> <a name="AssetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled"></a>

```csharp
public object AssetProxyEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#asset_proxy_enabled ApplicationSettings#asset_proxy_enabled}

---

##### `AssetProxySecretKey`<sup>Optional</sup> <a name="AssetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey"></a>

```csharp
public string AssetProxySecretKey { get; set; }
```

- *Type:* string

Shared secret with the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#asset_proxy_secret_key ApplicationSettings#asset_proxy_secret_key}

---

##### `AssetProxyUrl`<sup>Optional</sup> <a name="AssetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl"></a>

```csharp
public string AssetProxyUrl { get; set; }
```

- *Type:* string

URL of the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#asset_proxy_url ApplicationSettings#asset_proxy_url}

---

##### `AuthorizedKeysEnabled`<sup>Optional</sup> <a name="AuthorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled"></a>

```csharp
public object AuthorizedKeysEnabled { get; set; }
```

- *Type:* object

By default, we write to the authorized_keys file to support Git over SSH without additional configuration.

GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#authorized_keys_enabled ApplicationSettings#authorized_keys_enabled}

---

##### `AutoDevopsDomain`<sup>Optional</sup> <a name="AutoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain"></a>

```csharp
public string AutoDevopsDomain { get; set; }
```

- *Type:* string

Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#auto_devops_domain ApplicationSettings#auto_devops_domain}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled"></a>

```csharp
public object AutoDevopsEnabled { get; set; }
```

- *Type:* object

Enable Auto DevOps for projects by default.

It automatically builds, tests, and deploys applications based on a predefined CI/CD configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#auto_devops_enabled ApplicationSettings#auto_devops_enabled}

---

##### `AutomaticPurchasedStorageAllocation`<sup>Optional</sup> <a name="AutomaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation"></a>

```csharp
public object AutomaticPurchasedStorageAllocation { get; set; }
```

- *Type:* object

Enabling this permits automatic allocation of purchased storage in a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#automatic_purchased_storage_allocation ApplicationSettings#automatic_purchased_storage_allocation}

---

##### `CanCreateGroup`<sup>Optional</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup"></a>

```csharp
public object CanCreateGroup { get; set; }
```

- *Type:* object

Indicates whether users can create top-level groups. Introduced in GitLab 15.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#can_create_group ApplicationSettings#can_create_group}

---

##### `CheckNamespacePlan`<sup>Optional</sup> <a name="CheckNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan"></a>

```csharp
public object CheckNamespacePlan { get; set; }
```

- *Type:* object

Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#check_namespace_plan ApplicationSettings#check_namespace_plan}

---

##### `CommitEmailHostname`<sup>Optional</sup> <a name="CommitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname"></a>

```csharp
public string CommitEmailHostname { get; set; }
```

- *Type:* string

Custom hostname (for private commit emails).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#commit_email_hostname ApplicationSettings#commit_email_hostname}

---

##### `ContainerExpirationPoliciesEnableHistoricEntries`<sup>Optional</sup> <a name="ContainerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```csharp
public object ContainerExpirationPoliciesEnableHistoricEntries { get; set; }
```

- *Type:* object

Enable cleanup policies for all projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#container_expiration_policies_enable_historic_entries ApplicationSettings#container_expiration_policies_enable_historic_entries}

---

##### `ContainerRegistryCleanupTagsServiceMaxListSize`<sup>Optional</sup> <a name="ContainerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```csharp
public double ContainerRegistryCleanupTagsServiceMaxListSize { get; set; }
```

- *Type:* double

The maximum number of tags that can be deleted in a single execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#container_registry_cleanup_tags_service_max_list_size ApplicationSettings#container_registry_cleanup_tags_service_max_list_size}

---

##### `ContainerRegistryDeleteTagsServiceTimeout`<sup>Optional</sup> <a name="ContainerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout"></a>

```csharp
public double ContainerRegistryDeleteTagsServiceTimeout { get; set; }
```

- *Type:* double

The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#container_registry_delete_tags_service_timeout ApplicationSettings#container_registry_delete_tags_service_timeout}

---

##### `ContainerRegistryExpirationPoliciesCaching`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching"></a>

```csharp
public object ContainerRegistryExpirationPoliciesCaching { get; set; }
```

- *Type:* object

Caching during the execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#container_registry_expiration_policies_caching ApplicationSettings#container_registry_expiration_policies_caching}

---

##### `ContainerRegistryExpirationPoliciesWorkerCapacity`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```csharp
public double ContainerRegistryExpirationPoliciesWorkerCapacity { get; set; }
```

- *Type:* double

Number of workers for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#container_registry_expiration_policies_worker_capacity ApplicationSettings#container_registry_expiration_policies_worker_capacity}

---

##### `ContainerRegistryTokenExpireDelay`<sup>Optional</sup> <a name="ContainerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay"></a>

```csharp
public double ContainerRegistryTokenExpireDelay { get; set; }
```

- *Type:* double

Container Registry token duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#container_registry_token_expire_delay ApplicationSettings#container_registry_token_expire_delay}

---

##### `DeactivateDormantUsers`<sup>Optional</sup> <a name="DeactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers"></a>

```csharp
public object DeactivateDormantUsers { get; set; }
```

- *Type:* object

Enable automatic deactivation of dormant users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#deactivate_dormant_users ApplicationSettings#deactivate_dormant_users}

---

##### `DefaultArtifactsExpireIn`<sup>Optional</sup> <a name="DefaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn"></a>

```csharp
public string DefaultArtifactsExpireIn { get; set; }
```

- *Type:* string

Set the default expiration time for each job’s artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_artifacts_expire_in ApplicationSettings#default_artifacts_expire_in}

---

##### `DefaultBranchName`<sup>Optional</sup> <a name="DefaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName"></a>

```csharp
public string DefaultBranchName { get; set; }
```

- *Type:* string

Instance-level custom initial branch name (introduced in GitLab 13.2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_branch_name ApplicationSettings#default_branch_name}

---

##### `DefaultBranchProtection`<sup>Optional</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection"></a>

```csharp
public double DefaultBranchProtection { get; set; }
```

- *Type:* double

Determine if developers can push to the default branch.

Can take: 0 (not protected, both users with the Developer role or Maintainer role can push new commits and force push), 1 (partially protected, users with the Developer role or Maintainer role can push new commits, but cannot force push) or 2 (fully protected, users with the Developer or Maintainer role cannot push new commits, but users with the Developer or Maintainer role can; no one can force push) as a parameter. Default is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_branch_protection ApplicationSettings#default_branch_protection}

---

##### `DefaultCiConfigPath`<sup>Optional</sup> <a name="DefaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath"></a>

```csharp
public string DefaultCiConfigPath { get; set; }
```

- *Type:* string

Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_ci_config_path ApplicationSettings#default_ci_config_path}

---

##### `DefaultGroupVisibility`<sup>Optional</sup> <a name="DefaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility"></a>

```csharp
public string DefaultGroupVisibility { get; set; }
```

- *Type:* string

What visibility level new groups receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_group_visibility ApplicationSettings#default_group_visibility}

---

##### `DefaultProjectCreation`<sup>Optional</sup> <a name="DefaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation"></a>

```csharp
public double DefaultProjectCreation { get; set; }
```

- *Type:* double

Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_project_creation ApplicationSettings#default_project_creation}

---

##### `DefaultProjectsLimit`<sup>Optional</sup> <a name="DefaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit"></a>

```csharp
public double DefaultProjectsLimit { get; set; }
```

- *Type:* double

Project limit per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_projects_limit ApplicationSettings#default_projects_limit}

---

##### `DefaultProjectVisibility`<sup>Optional</sup> <a name="DefaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility"></a>

```csharp
public string DefaultProjectVisibility { get; set; }
```

- *Type:* string

What visibility level new projects receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_project_visibility ApplicationSettings#default_project_visibility}

---

##### `DefaultSnippetVisibility`<sup>Optional</sup> <a name="DefaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility"></a>

```csharp
public string DefaultSnippetVisibility { get; set; }
```

- *Type:* string

What visibility level new snippets receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#default_snippet_visibility ApplicationSettings#default_snippet_visibility}

---

##### `DeleteInactiveProjects`<sup>Optional</sup> <a name="DeleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects"></a>

```csharp
public object DeleteInactiveProjects { get; set; }
```

- *Type:* object

Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#delete_inactive_projects ApplicationSettings#delete_inactive_projects}

---

##### `DeletionAdjournedPeriod`<sup>Optional</sup> <a name="DeletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod"></a>

```csharp
public double DeletionAdjournedPeriod { get; set; }
```

- *Type:* double

The number of days to wait before deleting a project or group that is marked for deletion.

Value must be between 1 and 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#deletion_adjourned_period ApplicationSettings#deletion_adjourned_period}

---

##### `DiffMaxFiles`<sup>Optional</sup> <a name="DiffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles"></a>

```csharp
public double DiffMaxFiles { get; set; }
```

- *Type:* double

Maximum files in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#diff_max_files ApplicationSettings#diff_max_files}

---

##### `DiffMaxLines`<sup>Optional</sup> <a name="DiffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines"></a>

```csharp
public double DiffMaxLines { get; set; }
```

- *Type:* double

Maximum lines in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#diff_max_lines ApplicationSettings#diff_max_lines}

---

##### `DiffMaxPatchBytes`<sup>Optional</sup> <a name="DiffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes"></a>

```csharp
public double DiffMaxPatchBytes { get; set; }
```

- *Type:* double

Maximum diff patch size, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#diff_max_patch_bytes ApplicationSettings#diff_max_patch_bytes}

---

##### `DisabledOauthSignInSources`<sup>Optional</sup> <a name="DisabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources"></a>

```csharp
public string[] DisabledOauthSignInSources { get; set; }
```

- *Type:* string[]

Disabled OAuth sign-in sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#disabled_oauth_sign_in_sources ApplicationSettings#disabled_oauth_sign_in_sources}

---

##### `DisableFeedToken`<sup>Optional</sup> <a name="DisableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken"></a>

```csharp
public object DisableFeedToken { get; set; }
```

- *Type:* object

Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#disable_feed_token ApplicationSettings#disable_feed_token}

---

##### `DnsRebindingProtectionEnabled`<sup>Optional</sup> <a name="DnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled"></a>

```csharp
public object DnsRebindingProtectionEnabled { get; set; }
```

- *Type:* object

Enforce DNS rebinding attack protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#dns_rebinding_protection_enabled ApplicationSettings#dns_rebinding_protection_enabled}

---

##### `DomainAllowlist`<sup>Optional</sup> <a name="DomainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist"></a>

```csharp
public string[] DomainAllowlist { get; set; }
```

- *Type:* string[]

Force people to use only corporate emails for sign-up. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#domain_allowlist ApplicationSettings#domain_allowlist}

---

##### `DomainDenylist`<sup>Optional</sup> <a name="DomainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist"></a>

```csharp
public string[] DomainDenylist { get; set; }
```

- *Type:* string[]

Users with email addresses that match these domains cannot sign up.

Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#domain_denylist ApplicationSettings#domain_denylist}

---

##### `DomainDenylistEnabled`<sup>Optional</sup> <a name="DomainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled"></a>

```csharp
public object DomainDenylistEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#domain_denylist_enabled ApplicationSettings#domain_denylist_enabled}

---

##### `DsaKeyRestriction`<sup>Optional</sup> <a name="DsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction"></a>

```csharp
public double DsaKeyRestriction { get; set; }
```

- *Type:* double

The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#dsa_key_restriction ApplicationSettings#dsa_key_restriction}

---

##### `EcdsaKeyRestriction`<sup>Optional</sup> <a name="EcdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction"></a>

```csharp
public double EcdsaKeyRestriction { get; set; }
```

- *Type:* double

The minimum allowed curve size (in bits) of an uploaded ECDSA key.

0 means no restriction. -1 disables ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#ecdsa_key_restriction ApplicationSettings#ecdsa_key_restriction}

---

##### `EcdsaSkKeyRestriction`<sup>Optional</sup> <a name="EcdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction"></a>

```csharp
public double EcdsaSkKeyRestriction { get; set; }
```

- *Type:* double

The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key.

0 means no restriction. -1 disables ECDSA_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#ecdsa_sk_key_restriction ApplicationSettings#ecdsa_sk_key_restriction}

---

##### `Ed25519KeyRestriction`<sup>Optional</sup> <a name="Ed25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction"></a>

```csharp
public double Ed25519KeyRestriction { get; set; }
```

- *Type:* double

The minimum allowed curve size (in bits) of an uploaded ED25519 key.

0 means no restriction. -1 disables ED25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#ed25519_key_restriction ApplicationSettings#ed25519_key_restriction}

---

##### `Ed25519SkKeyRestriction`<sup>Optional</sup> <a name="Ed25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction"></a>

```csharp
public double Ed25519SkKeyRestriction { get; set; }
```

- *Type:* double

The minimum allowed curve size (in bits) of an uploaded ED25519_SK key.

0 means no restriction. -1 disables ED25519_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#ed25519_sk_key_restriction ApplicationSettings#ed25519_sk_key_restriction}

---

##### `EksAccessKeyId`<sup>Optional</sup> <a name="EksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId"></a>

```csharp
public string EksAccessKeyId { get; set; }
```

- *Type:* string

AWS IAM access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#eks_access_key_id ApplicationSettings#eks_access_key_id}

---

##### `EksAccountId`<sup>Optional</sup> <a name="EksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId"></a>

```csharp
public string EksAccountId { get; set; }
```

- *Type:* string

Amazon account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#eks_account_id ApplicationSettings#eks_account_id}

---

##### `EksIntegrationEnabled`<sup>Optional</sup> <a name="EksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled"></a>

```csharp
public object EksIntegrationEnabled { get; set; }
```

- *Type:* object

Enable integration with Amazon EKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#eks_integration_enabled ApplicationSettings#eks_integration_enabled}

---

##### `EksSecretAccessKey`<sup>Optional</sup> <a name="EksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey"></a>

```csharp
public string EksSecretAccessKey { get; set; }
```

- *Type:* string

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#eks_secret_access_key ApplicationSettings#eks_secret_access_key}

---

##### `ElasticsearchAws`<sup>Optional</sup> <a name="ElasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws"></a>

```csharp
public object ElasticsearchAws { get; set; }
```

- *Type:* object

Enable the use of AWS hosted Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_aws ApplicationSettings#elasticsearch_aws}

---

##### `ElasticsearchAwsAccessKey`<sup>Optional</sup> <a name="ElasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey"></a>

```csharp
public string ElasticsearchAwsAccessKey { get; set; }
```

- *Type:* string

AWS IAM access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_aws_access_key ApplicationSettings#elasticsearch_aws_access_key}

---

##### `ElasticsearchAwsRegion`<sup>Optional</sup> <a name="ElasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion"></a>

```csharp
public string ElasticsearchAwsRegion { get; set; }
```

- *Type:* string

The AWS region the Elasticsearch domain is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_aws_region ApplicationSettings#elasticsearch_aws_region}

---

##### `ElasticsearchAwsSecretAccessKey`<sup>Optional</sup> <a name="ElasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey"></a>

```csharp
public string ElasticsearchAwsSecretAccessKey { get; set; }
```

- *Type:* string

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_aws_secret_access_key ApplicationSettings#elasticsearch_aws_secret_access_key}

---

##### `ElasticsearchIndexedFieldLengthLimit`<sup>Optional</sup> <a name="ElasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit"></a>

```csharp
public double ElasticsearchIndexedFieldLengthLimit { get; set; }
```

- *Type:* double

Maximum size of text fields to index by Elasticsearch.

0 value means no limit. This does not apply to repository and wiki indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_indexed_field_length_limit ApplicationSettings#elasticsearch_indexed_field_length_limit}

---

##### `ElasticsearchIndexedFileSizeLimitKb`<sup>Optional</sup> <a name="ElasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb"></a>

```csharp
public double ElasticsearchIndexedFileSizeLimitKb { get; set; }
```

- *Type:* double

Maximum size of repository and wiki files that are indexed by Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_indexed_file_size_limit_kb ApplicationSettings#elasticsearch_indexed_file_size_limit_kb}

---

##### `ElasticsearchIndexing`<sup>Optional</sup> <a name="ElasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing"></a>

```csharp
public object ElasticsearchIndexing { get; set; }
```

- *Type:* object

Enable Elasticsearch indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_indexing ApplicationSettings#elasticsearch_indexing}

---

##### `ElasticsearchLimitIndexing`<sup>Optional</sup> <a name="ElasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing"></a>

```csharp
public object ElasticsearchLimitIndexing { get; set; }
```

- *Type:* object

Limit Elasticsearch to index certain namespaces and projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_limit_indexing ApplicationSettings#elasticsearch_limit_indexing}

---

##### `ElasticsearchMaxBulkConcurrency`<sup>Optional</sup> <a name="ElasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency"></a>

```csharp
public double ElasticsearchMaxBulkConcurrency { get; set; }
```

- *Type:* double

Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_max_bulk_concurrency ApplicationSettings#elasticsearch_max_bulk_concurrency}

---

##### `ElasticsearchMaxBulkSizeMb`<sup>Optional</sup> <a name="ElasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb"></a>

```csharp
public double ElasticsearchMaxBulkSizeMb { get; set; }
```

- *Type:* double

Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_max_bulk_size_mb ApplicationSettings#elasticsearch_max_bulk_size_mb}

---

##### `ElasticsearchNamespaceIds`<sup>Optional</sup> <a name="ElasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds"></a>

```csharp
public double[] ElasticsearchNamespaceIds { get; set; }
```

- *Type:* double[]

The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_namespace_ids ApplicationSettings#elasticsearch_namespace_ids}

---

##### `ElasticsearchPassword`<sup>Optional</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword"></a>

```csharp
public string ElasticsearchPassword { get; set; }
```

- *Type:* string

The password of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_password ApplicationSettings#elasticsearch_password}

---

##### `ElasticsearchProjectIds`<sup>Optional</sup> <a name="ElasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds"></a>

```csharp
public double[] ElasticsearchProjectIds { get; set; }
```

- *Type:* double[]

The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_project_ids ApplicationSettings#elasticsearch_project_ids}

---

##### `ElasticsearchSearch`<sup>Optional</sup> <a name="ElasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch"></a>

```csharp
public object ElasticsearchSearch { get; set; }
```

- *Type:* object

Enable Elasticsearch search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_search ApplicationSettings#elasticsearch_search}

---

##### `ElasticsearchUrl`<sup>Optional</sup> <a name="ElasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl"></a>

```csharp
public string[] ElasticsearchUrl { get; set; }
```

- *Type:* string[]

The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_url ApplicationSettings#elasticsearch_url}

---

##### `ElasticsearchUsername`<sup>Optional</sup> <a name="ElasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername"></a>

```csharp
public string ElasticsearchUsername { get; set; }
```

- *Type:* string

The username of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#elasticsearch_username ApplicationSettings#elasticsearch_username}

---

##### `EmailAdditionalText`<sup>Optional</sup> <a name="EmailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText"></a>

```csharp
public string EmailAdditionalText { get; set; }
```

- *Type:* string

Additional text added to the bottom of every email for legal/auditing/compliance reasons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#email_additional_text ApplicationSettings#email_additional_text}

---

##### `EmailAuthorInBody`<sup>Optional</sup> <a name="EmailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody"></a>

```csharp
public object EmailAuthorInBody { get; set; }
```

- *Type:* object

Some email servers do not support overriding the email sender name.

Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#email_author_in_body ApplicationSettings#email_author_in_body}

---

##### `EnabledGitAccessProtocol`<sup>Optional</sup> <a name="EnabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol"></a>

```csharp
public string EnabledGitAccessProtocol { get; set; }
```

- *Type:* string

Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#enabled_git_access_protocol ApplicationSettings#enabled_git_access_protocol}

---

##### `EnforceNamespaceStorageLimit`<sup>Optional</sup> <a name="EnforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit"></a>

```csharp
public object EnforceNamespaceStorageLimit { get; set; }
```

- *Type:* object

Enabling this permits enforcement of namespace storage limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#enforce_namespace_storage_limit ApplicationSettings#enforce_namespace_storage_limit}

---

##### `EnforceTerms`<sup>Optional</sup> <a name="EnforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms"></a>

```csharp
public object EnforceTerms { get; set; }
```

- *Type:* object

(If enabled, requires: terms) Enforce application ToS to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#enforce_terms ApplicationSettings#enforce_terms}

---

##### `ExternalAuthClientCert`<sup>Optional</sup> <a name="ExternalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert"></a>

```csharp
public string ExternalAuthClientCert { get; set; }
```

- *Type:* string

(If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_auth_client_cert ApplicationSettings#external_auth_client_cert}

---

##### `ExternalAuthClientKey`<sup>Optional</sup> <a name="ExternalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey"></a>

```csharp
public string ExternalAuthClientKey { get; set; }
```

- *Type:* string

Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_auth_client_key ApplicationSettings#external_auth_client_key}

---

##### `ExternalAuthClientKeyPass`<sup>Optional</sup> <a name="ExternalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass"></a>

```csharp
public string ExternalAuthClientKeyPass { get; set; }
```

- *Type:* string

Passphrase to use for the private key when authenticating with the external service this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_auth_client_key_pass ApplicationSettings#external_auth_client_key_pass}

---

##### `ExternalAuthorizationServiceDefaultLabel`<sup>Optional</sup> <a name="ExternalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel"></a>

```csharp
public string ExternalAuthorizationServiceDefaultLabel { get; set; }
```

- *Type:* string

The default classification label to use when requesting authorization and no classification label has been specified on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_authorization_service_default_label ApplicationSettings#external_authorization_service_default_label}

---

##### `ExternalAuthorizationServiceEnabled`<sup>Optional</sup> <a name="ExternalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled"></a>

```csharp
public object ExternalAuthorizationServiceEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_authorization_service_enabled ApplicationSettings#external_authorization_service_enabled}

---

##### `ExternalAuthorizationServiceTimeout`<sup>Optional</sup> <a name="ExternalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout"></a>

```csharp
public double ExternalAuthorizationServiceTimeout { get; set; }
```

- *Type:* double

The timeout after which an authorization request is aborted, in seconds.

When a request times out, access is denied to the user. (min: 0.001, max: 10, step: 0.001).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_authorization_service_timeout ApplicationSettings#external_authorization_service_timeout}

---

##### `ExternalAuthorizationServiceUrl`<sup>Optional</sup> <a name="ExternalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl"></a>

```csharp
public string ExternalAuthorizationServiceUrl { get; set; }
```

- *Type:* string

URL to which authorization requests are directed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_authorization_service_url ApplicationSettings#external_authorization_service_url}

---

##### `ExternalPipelineValidationServiceTimeout`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout"></a>

```csharp
public double ExternalPipelineValidationServiceTimeout { get; set; }
```

- *Type:* double

How long to wait for a response from the pipeline validation service. Assumes OK if it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_pipeline_validation_service_timeout ApplicationSettings#external_pipeline_validation_service_timeout}

---

##### `ExternalPipelineValidationServiceToken`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken"></a>

```csharp
public string ExternalPipelineValidationServiceToken { get; set; }
```

- *Type:* string

Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_pipeline_validation_service_token ApplicationSettings#external_pipeline_validation_service_token}

---

##### `ExternalPipelineValidationServiceUrl`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl"></a>

```csharp
public string ExternalPipelineValidationServiceUrl { get; set; }
```

- *Type:* string

URL to use for pipeline validation requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#external_pipeline_validation_service_url ApplicationSettings#external_pipeline_validation_service_url}

---

##### `FileTemplateProjectId`<sup>Optional</sup> <a name="FileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId"></a>

```csharp
public double FileTemplateProjectId { get; set; }
```

- *Type:* double

The ID of a project to load custom file templates from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#file_template_project_id ApplicationSettings#file_template_project_id}

---

##### `FirstDayOfWeek`<sup>Optional</sup> <a name="FirstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek"></a>

```csharp
public double FirstDayOfWeek { get; set; }
```

- *Type:* double

Start day of the week for calendar views and date pickers.

Valid values are 0 for Sunday, 1 for Monday, and 6 for Saturday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#first_day_of_week ApplicationSettings#first_day_of_week}

---

##### `GeoNodeAllowedIps`<sup>Optional</sup> <a name="GeoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps"></a>

```csharp
public string GeoNodeAllowedIps { get; set; }
```

- *Type:* string

Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#geo_node_allowed_ips ApplicationSettings#geo_node_allowed_ips}

---

##### `GeoStatusTimeout`<sup>Optional</sup> <a name="GeoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout"></a>

```csharp
public double GeoStatusTimeout { get; set; }
```

- *Type:* double

The amount of seconds after which a request to get a secondary node status times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#geo_status_timeout ApplicationSettings#geo_status_timeout}

---

##### `GitalyTimeoutDefault`<sup>Optional</sup> <a name="GitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault"></a>

```csharp
public double GitalyTimeoutDefault { get; set; }
```

- *Type:* double

Default Gitaly timeout, in seconds.

This timeout is not enforced for Git fetch/push operations or Sidekiq jobs. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#gitaly_timeout_default ApplicationSettings#gitaly_timeout_default}

---

##### `GitalyTimeoutFast`<sup>Optional</sup> <a name="GitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast"></a>

```csharp
public double GitalyTimeoutFast { get; set; }
```

- *Type:* double

Gitaly fast operation timeout, in seconds.

Some Gitaly operations are expected to be fast. If they exceed this threshold, there may be a problem with a storage shard and ‘failing fast’ can help maintain the stability of the GitLab instance. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#gitaly_timeout_fast ApplicationSettings#gitaly_timeout_fast}

---

##### `GitalyTimeoutMedium`<sup>Optional</sup> <a name="GitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium"></a>

```csharp
public double GitalyTimeoutMedium { get; set; }
```

- *Type:* double

Medium Gitaly timeout, in seconds.

This should be a value between the Fast and the Default timeout. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#gitaly_timeout_medium ApplicationSettings#gitaly_timeout_medium}

---

##### `GitRateLimitUsersAllowlist`<sup>Optional</sup> <a name="GitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist"></a>

```csharp
public string[] GitRateLimitUsersAllowlist { get; set; }
```

- *Type:* string[]

List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#git_rate_limit_users_allowlist ApplicationSettings#git_rate_limit_users_allowlist}

---

##### `GitTwoFactorSessionExpiry`<sup>Optional</sup> <a name="GitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry"></a>

```csharp
public double GitTwoFactorSessionExpiry { get; set; }
```

- *Type:* double

Maximum duration (in minutes) of a session for Git operations when 2FA is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#git_two_factor_session_expiry ApplicationSettings#git_two_factor_session_expiry}

---

##### `GrafanaEnabled`<sup>Optional</sup> <a name="GrafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled"></a>

```csharp
public object GrafanaEnabled { get; set; }
```

- *Type:* object

Enable Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#grafana_enabled ApplicationSettings#grafana_enabled}

---

##### `GrafanaUrl`<sup>Optional</sup> <a name="GrafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl"></a>

```csharp
public string GrafanaUrl { get; set; }
```

- *Type:* string

Grafana URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#grafana_url ApplicationSettings#grafana_url}

---

##### `GravatarEnabled`<sup>Optional</sup> <a name="GravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled"></a>

```csharp
public object GravatarEnabled { get; set; }
```

- *Type:* object

Enable Gravatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#gravatar_enabled ApplicationSettings#gravatar_enabled}

---

##### `GroupOwnersCanManageDefaultBranchProtection`<sup>Optional</sup> <a name="GroupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection"></a>

```csharp
public object GroupOwnersCanManageDefaultBranchProtection { get; set; }
```

- *Type:* object

Prevent overrides of default branch protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#group_owners_can_manage_default_branch_protection ApplicationSettings#group_owners_can_manage_default_branch_protection}

---

##### `HashedStorageEnabled`<sup>Optional</sup> <a name="HashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled"></a>

```csharp
public object HashedStorageEnabled { get; set; }
```

- *Type:* object

Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk.

This prevents repositories from having to be moved or renamed when the Project URL changes and may improve disk I/O performance. (Always enabled in GitLab versions 13.0 and later, configuration is scheduled for removal in 14.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#hashed_storage_enabled ApplicationSettings#hashed_storage_enabled}

---

##### `HelpPageHideCommercialContent`<sup>Optional</sup> <a name="HelpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent"></a>

```csharp
public object HelpPageHideCommercialContent { get; set; }
```

- *Type:* object

Hide marketing-related entries from help.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#help_page_hide_commercial_content ApplicationSettings#help_page_hide_commercial_content}

---

##### `HelpPageSupportUrl`<sup>Optional</sup> <a name="HelpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl"></a>

```csharp
public string HelpPageSupportUrl { get; set; }
```

- *Type:* string

Alternate support URL for help page and help dropdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#help_page_support_url ApplicationSettings#help_page_support_url}

---

##### `HelpPageText`<sup>Optional</sup> <a name="HelpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText"></a>

```csharp
public string HelpPageText { get; set; }
```

- *Type:* string

Custom text displayed on the help page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#help_page_text ApplicationSettings#help_page_text}

---

##### `HelpText`<sup>Optional</sup> <a name="HelpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText"></a>

```csharp
public string HelpText { get; set; }
```

- *Type:* string

GitLab server administrator information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#help_text ApplicationSettings#help_text}

---

##### `HideThirdPartyOffers`<sup>Optional</sup> <a name="HideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers"></a>

```csharp
public object HideThirdPartyOffers { get; set; }
```

- *Type:* object

Do not display offers from third parties in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#hide_third_party_offers ApplicationSettings#hide_third_party_offers}

---

##### `HomePageUrl`<sup>Optional</sup> <a name="HomePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl"></a>

```csharp
public string HomePageUrl { get; set; }
```

- *Type:* string

Redirect to this URL when not logged in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#home_page_url ApplicationSettings#home_page_url}

---

##### `HousekeepingEnabled`<sup>Optional</sup> <a name="HousekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled"></a>

```csharp
public object HousekeepingEnabled { get; set; }
```

- *Type:* object

Enable or disable Git housekeeping.

If enabled, requires either housekeeping_optimize_repository_period OR housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period.
Options housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period are deprecated. Use housekeeping_optimize_repository_period instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#housekeeping_enabled ApplicationSettings#housekeeping_enabled}

---

##### `HousekeepingFullRepackPeriod`<sup>Optional</sup> <a name="HousekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod"></a>

```csharp
public double HousekeepingFullRepackPeriod { get; set; }
```

- *Type:* double

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#housekeeping_full_repack_period ApplicationSettings#housekeeping_full_repack_period}

---

##### `HousekeepingGcPeriod`<sup>Optional</sup> <a name="HousekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod"></a>

```csharp
public double HousekeepingGcPeriod { get; set; }
```

- *Type:* double

Number of Git pushes after which git gc is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#housekeeping_gc_period ApplicationSettings#housekeeping_gc_period}

---

##### `HousekeepingIncrementalRepackPeriod`<sup>Optional</sup> <a name="HousekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod"></a>

```csharp
public double HousekeepingIncrementalRepackPeriod { get; set; }
```

- *Type:* double

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#housekeeping_incremental_repack_period ApplicationSettings#housekeeping_incremental_repack_period}

---

##### `HousekeepingOptimizeRepositoryPeriod`<sup>Optional</sup> <a name="HousekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingOptimizeRepositoryPeriod"></a>

```csharp
public double HousekeepingOptimizeRepositoryPeriod { get; set; }
```

- *Type:* double

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#housekeeping_optimize_repository_period ApplicationSettings#housekeeping_optimize_repository_period}

---

##### `HtmlEmailsEnabled`<sup>Optional</sup> <a name="HtmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled"></a>

```csharp
public object HtmlEmailsEnabled { get; set; }
```

- *Type:* object

Enable HTML emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#html_emails_enabled ApplicationSettings#html_emails_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportSources`<sup>Optional</sup> <a name="ImportSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources"></a>

```csharp
public string[] ImportSources { get; set; }
```

- *Type:* string[]

Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#import_sources ApplicationSettings#import_sources}

---

##### `InactiveProjectsDeleteAfterMonths`<sup>Optional</sup> <a name="InactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths"></a>

```csharp
public double InactiveProjectsDeleteAfterMonths { get; set; }
```

- *Type:* double

If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#inactive_projects_delete_after_months ApplicationSettings#inactive_projects_delete_after_months}

---

##### `InactiveProjectsMinSizeMb`<sup>Optional</sup> <a name="InactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb"></a>

```csharp
public double InactiveProjectsMinSizeMb { get; set; }
```

- *Type:* double

If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#inactive_projects_min_size_mb ApplicationSettings#inactive_projects_min_size_mb}

---

##### `InactiveProjectsSendWarningEmailAfterMonths`<sup>Optional</sup> <a name="InactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```csharp
public double InactiveProjectsSendWarningEmailAfterMonths { get; set; }
```

- *Type:* double

If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#inactive_projects_send_warning_email_after_months ApplicationSettings#inactive_projects_send_warning_email_after_months}

---

##### `InProductMarketingEmailsEnabled`<sup>Optional</sup> <a name="InProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled"></a>

```csharp
public object InProductMarketingEmailsEnabled { get; set; }
```

- *Type:* object

Enable in-product marketing emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#in_product_marketing_emails_enabled ApplicationSettings#in_product_marketing_emails_enabled}

---

##### `InvisibleCaptchaEnabled`<sup>Optional</sup> <a name="InvisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled"></a>

```csharp
public object InvisibleCaptchaEnabled { get; set; }
```

- *Type:* object

Enable Invisible CAPTCHA spam detection during sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#invisible_captcha_enabled ApplicationSettings#invisible_captcha_enabled}

---

##### `IssuesCreateLimit`<sup>Optional</sup> <a name="IssuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit"></a>

```csharp
public double IssuesCreateLimit { get; set; }
```

- *Type:* double

Max number of issue creation requests per minute per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#issues_create_limit ApplicationSettings#issues_create_limit}

---

##### `KeepLatestArtifact`<sup>Optional</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact"></a>

```csharp
public object KeepLatestArtifact { get; set; }
```

- *Type:* object

Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#keep_latest_artifact ApplicationSettings#keep_latest_artifact}

---

##### `LocalMarkdownVersion`<sup>Optional</sup> <a name="LocalMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion"></a>

```csharp
public double LocalMarkdownVersion { get; set; }
```

- *Type:* double

Increase this value when any cached Markdown should be invalidated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#local_markdown_version ApplicationSettings#local_markdown_version}

---

##### `MailgunEventsEnabled`<sup>Optional</sup> <a name="MailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled"></a>

```csharp
public object MailgunEventsEnabled { get; set; }
```

- *Type:* object

Enable Mailgun event receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#mailgun_events_enabled ApplicationSettings#mailgun_events_enabled}

---

##### `MailgunSigningKey`<sup>Optional</sup> <a name="MailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey"></a>

```csharp
public string MailgunSigningKey { get; set; }
```

- *Type:* string

The Mailgun HTTP webhook signing key for receiving events from webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#mailgun_signing_key ApplicationSettings#mailgun_signing_key}

---

##### `MaintenanceMode`<sup>Optional</sup> <a name="MaintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode"></a>

```csharp
public object MaintenanceMode { get; set; }
```

- *Type:* object

When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#maintenance_mode ApplicationSettings#maintenance_mode}

---

##### `MaintenanceModeMessage`<sup>Optional</sup> <a name="MaintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage"></a>

```csharp
public string MaintenanceModeMessage { get; set; }
```

- *Type:* string

Message displayed when instance is in maintenance mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#maintenance_mode_message ApplicationSettings#maintenance_mode_message}

---

##### `MaxArtifactsSize`<sup>Optional</sup> <a name="MaxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize"></a>

```csharp
public double MaxArtifactsSize { get; set; }
```

- *Type:* double

Maximum artifacts size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_artifacts_size ApplicationSettings#max_artifacts_size}

---

##### `MaxAttachmentSize`<sup>Optional</sup> <a name="MaxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize"></a>

```csharp
public double MaxAttachmentSize { get; set; }
```

- *Type:* double

Limit attachment size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_attachment_size ApplicationSettings#max_attachment_size}

---

##### `MaxExportSize`<sup>Optional</sup> <a name="MaxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize"></a>

```csharp
public double MaxExportSize { get; set; }
```

- *Type:* double

Maximum export size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_export_size ApplicationSettings#max_export_size}

---

##### `MaxImportSize`<sup>Optional</sup> <a name="MaxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize"></a>

```csharp
public double MaxImportSize { get; set; }
```

- *Type:* double

Maximum import size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_import_size ApplicationSettings#max_import_size}

---

##### `MaxNumberOfRepositoryDownloads`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads"></a>

```csharp
public double MaxNumberOfRepositoryDownloads { get; set; }
```

- *Type:* double

Maximum number of unique repositories a user can download in the specified time period before they are banned.

Maximum: 10,000 repositories. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_number_of_repository_downloads ApplicationSettings#max_number_of_repository_downloads}

---

##### `MaxNumberOfRepositoryDownloadsWithinTimePeriod`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```csharp
public double MaxNumberOfRepositoryDownloadsWithinTimePeriod { get; set; }
```

- *Type:* double

Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_number_of_repository_downloads_within_time_period ApplicationSettings#max_number_of_repository_downloads_within_time_period}

---

##### `MaxPagesSize`<sup>Optional</sup> <a name="MaxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize"></a>

```csharp
public double MaxPagesSize { get; set; }
```

- *Type:* double

Maximum size of pages repositories in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_pages_size ApplicationSettings#max_pages_size}

---

##### `MaxPersonalAccessTokenLifetime`<sup>Optional</sup> <a name="MaxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime"></a>

```csharp
public double MaxPersonalAccessTokenLifetime { get; set; }
```

- *Type:* double

Maximum allowable lifetime for access tokens in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_personal_access_token_lifetime ApplicationSettings#max_personal_access_token_lifetime}

---

##### `MaxSshKeyLifetime`<sup>Optional</sup> <a name="MaxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime"></a>

```csharp
public double MaxSshKeyLifetime { get; set; }
```

- *Type:* double

Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#max_ssh_key_lifetime ApplicationSettings#max_ssh_key_lifetime}

---

##### `MetricsMethodCallThreshold`<sup>Optional</sup> <a name="MetricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold"></a>

```csharp
public double MetricsMethodCallThreshold { get; set; }
```

- *Type:* double

A method call is only tracked when it takes longer than the given amount of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#metrics_method_call_threshold ApplicationSettings#metrics_method_call_threshold}

---

##### `MirrorAvailable`<sup>Optional</sup> <a name="MirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable"></a>

```csharp
public object MirrorAvailable { get; set; }
```

- *Type:* object

Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#mirror_available ApplicationSettings#mirror_available}

---

##### `MirrorCapacityThreshold`<sup>Optional</sup> <a name="MirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold"></a>

```csharp
public double MirrorCapacityThreshold { get; set; }
```

- *Type:* double

Minimum capacity to be available before scheduling more mirrors preemptively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#mirror_capacity_threshold ApplicationSettings#mirror_capacity_threshold}

---

##### `MirrorMaxCapacity`<sup>Optional</sup> <a name="MirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity"></a>

```csharp
public double MirrorMaxCapacity { get; set; }
```

- *Type:* double

Maximum number of mirrors that can be synchronizing at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#mirror_max_capacity ApplicationSettings#mirror_max_capacity}

---

##### `MirrorMaxDelay`<sup>Optional</sup> <a name="MirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay"></a>

```csharp
public double MirrorMaxDelay { get; set; }
```

- *Type:* double

Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#mirror_max_delay ApplicationSettings#mirror_max_delay}

---

##### `NpmPackageRequestsForwarding`<sup>Optional</sup> <a name="NpmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding"></a>

```csharp
public object NpmPackageRequestsForwarding { get; set; }
```

- *Type:* object

Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#npm_package_requests_forwarding ApplicationSettings#npm_package_requests_forwarding}

---

##### `OutboundLocalRequestsWhitelist`<sup>Optional</sup> <a name="OutboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist"></a>

```csharp
public string[] OutboundLocalRequestsWhitelist { get; set; }
```

- *Type:* string[]

Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#outbound_local_requests_whitelist ApplicationSettings#outbound_local_requests_whitelist}

---

##### `PackageRegistryCleanupPoliciesWorkerCapacity`<sup>Optional</sup> <a name="PackageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```csharp
public double PackageRegistryCleanupPoliciesWorkerCapacity { get; set; }
```

- *Type:* double

Number of workers assigned to the packages cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#package_registry_cleanup_policies_worker_capacity ApplicationSettings#package_registry_cleanup_policies_worker_capacity}

---

##### `PagesDomainVerificationEnabled`<sup>Optional</sup> <a name="PagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled"></a>

```csharp
public object PagesDomainVerificationEnabled { get; set; }
```

- *Type:* object

Require users to prove ownership of custom domains.

Domain verification is an essential security measure for public GitLab sites. Users are required to demonstrate they control a domain before it is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#pages_domain_verification_enabled ApplicationSettings#pages_domain_verification_enabled}

---

##### `PasswordAuthenticationEnabledForGit`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit"></a>

```csharp
public object PasswordAuthenticationEnabledForGit { get; set; }
```

- *Type:* object

Enable authentication for Git over HTTP(S) via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#password_authentication_enabled_for_git ApplicationSettings#password_authentication_enabled_for_git}

---

##### `PasswordAuthenticationEnabledForWeb`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb"></a>

```csharp
public object PasswordAuthenticationEnabledForWeb { get; set; }
```

- *Type:* object

Enable authentication for the web interface via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#password_authentication_enabled_for_web ApplicationSettings#password_authentication_enabled_for_web}

---

##### `PasswordLowercaseRequired`<sup>Optional</sup> <a name="PasswordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired"></a>

```csharp
public object PasswordLowercaseRequired { get; set; }
```

- *Type:* object

Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#password_lowercase_required ApplicationSettings#password_lowercase_required}

---

##### `PasswordNumberRequired`<sup>Optional</sup> <a name="PasswordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired"></a>

```csharp
public object PasswordNumberRequired { get; set; }
```

- *Type:* object

Indicates whether passwords require at least one number. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#password_number_required ApplicationSettings#password_number_required}

---

##### `PasswordSymbolRequired`<sup>Optional</sup> <a name="PasswordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired"></a>

```csharp
public object PasswordSymbolRequired { get; set; }
```

- *Type:* object

Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#password_symbol_required ApplicationSettings#password_symbol_required}

---

##### `PasswordUppercaseRequired`<sup>Optional</sup> <a name="PasswordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired"></a>

```csharp
public object PasswordUppercaseRequired { get; set; }
```

- *Type:* object

Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#password_uppercase_required ApplicationSettings#password_uppercase_required}

---

##### `PerformanceBarAllowedGroupPath`<sup>Optional</sup> <a name="PerformanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath"></a>

```csharp
public string PerformanceBarAllowedGroupPath { get; set; }
```

- *Type:* string

Path of the group that is allowed to toggle the performance bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#performance_bar_allowed_group_path ApplicationSettings#performance_bar_allowed_group_path}

---

##### `PersonalAccessTokenPrefix`<sup>Optional</sup> <a name="PersonalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix"></a>

```csharp
public string PersonalAccessTokenPrefix { get; set; }
```

- *Type:* string

Prefix for all generated personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#personal_access_token_prefix ApplicationSettings#personal_access_token_prefix}

---

##### `PipelineLimitPerProjectUserSha`<sup>Optional</sup> <a name="PipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha"></a>

```csharp
public double PipelineLimitPerProjectUserSha { get; set; }
```

- *Type:* double

Maximum number of pipeline creation requests per minute per user and commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#pipeline_limit_per_project_user_sha ApplicationSettings#pipeline_limit_per_project_user_sha}

---

##### `PlantumlEnabled`<sup>Optional</sup> <a name="PlantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled"></a>

```csharp
public object PlantumlEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: plantuml_url) Enable PlantUML integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#plantuml_enabled ApplicationSettings#plantuml_enabled}

---

##### `PlantumlUrl`<sup>Optional</sup> <a name="PlantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl"></a>

```csharp
public string PlantumlUrl { get; set; }
```

- *Type:* string

The PlantUML instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#plantuml_url ApplicationSettings#plantuml_url}

---

##### `PollingIntervalMultiplier`<sup>Optional</sup> <a name="PollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier"></a>

```csharp
public double PollingIntervalMultiplier { get; set; }
```

- *Type:* double

Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#polling_interval_multiplier ApplicationSettings#polling_interval_multiplier}

---

##### `ProjectExportEnabled`<sup>Optional</sup> <a name="ProjectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled"></a>

```csharp
public object ProjectExportEnabled { get; set; }
```

- *Type:* object

Enable project export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#project_export_enabled ApplicationSettings#project_export_enabled}

---

##### `PrometheusMetricsEnabled`<sup>Optional</sup> <a name="PrometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled"></a>

```csharp
public object PrometheusMetricsEnabled { get; set; }
```

- *Type:* object

Enable Prometheus metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#prometheus_metrics_enabled ApplicationSettings#prometheus_metrics_enabled}

---

##### `ProtectedCiVariables`<sup>Optional</sup> <a name="ProtectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables"></a>

```csharp
public object ProtectedCiVariables { get; set; }
```

- *Type:* object

CI/CD variables are protected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#protected_ci_variables ApplicationSettings#protected_ci_variables}

---

##### `PushEventActivitiesLimit`<sup>Optional</sup> <a name="PushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit"></a>

```csharp
public double PushEventActivitiesLimit { get; set; }
```

- *Type:* double

Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created.

Bulk push events are created if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#push_event_activities_limit ApplicationSettings#push_event_activities_limit}

---

##### `PushEventHooksLimit`<sup>Optional</sup> <a name="PushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit"></a>

```csharp
public double PushEventHooksLimit { get; set; }
```

- *Type:* double

Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not.

Webhooks and services aren’t submitted if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#push_event_hooks_limit ApplicationSettings#push_event_hooks_limit}

---

##### `PypiPackageRequestsForwarding`<sup>Optional</sup> <a name="PypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding"></a>

```csharp
public object PypiPackageRequestsForwarding { get; set; }
```

- *Type:* object

Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#pypi_package_requests_forwarding ApplicationSettings#pypi_package_requests_forwarding}

---

##### `RateLimitingResponseText`<sup>Optional</sup> <a name="RateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText"></a>

```csharp
public string RateLimitingResponseText { get; set; }
```

- *Type:* string

When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded.

‘Retry later’ is sent if this is blank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#rate_limiting_response_text ApplicationSettings#rate_limiting_response_text}

---

##### `RawBlobRequestLimit`<sup>Optional</sup> <a name="RawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit"></a>

```csharp
public double RawBlobRequestLimit { get; set; }
```

- *Type:* double

Max number of requests per minute for each raw path. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#raw_blob_request_limit ApplicationSettings#raw_blob_request_limit}

---

##### `RecaptchaEnabled`<sup>Optional</sup> <a name="RecaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled"></a>

```csharp
public object RecaptchaEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#recaptcha_enabled ApplicationSettings#recaptcha_enabled}

---

##### `RecaptchaPrivateKey`<sup>Optional</sup> <a name="RecaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey"></a>

```csharp
public string RecaptchaPrivateKey { get; set; }
```

- *Type:* string

Private key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#recaptcha_private_key ApplicationSettings#recaptcha_private_key}

---

##### `RecaptchaSiteKey`<sup>Optional</sup> <a name="RecaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey"></a>

```csharp
public string RecaptchaSiteKey { get; set; }
```

- *Type:* string

Site key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#recaptcha_site_key ApplicationSettings#recaptcha_site_key}

---

##### `ReceiveMaxInputSize`<sup>Optional</sup> <a name="ReceiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize"></a>

```csharp
public double ReceiveMaxInputSize { get; set; }
```

- *Type:* double

Maximum push size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#receive_max_input_size ApplicationSettings#receive_max_input_size}

---

##### `RepositoryChecksEnabled`<sup>Optional</sup> <a name="RepositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled"></a>

```csharp
public object RepositoryChecksEnabled { get; set; }
```

- *Type:* object

GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#repository_checks_enabled ApplicationSettings#repository_checks_enabled}

---

##### `RepositorySizeLimit`<sup>Optional</sup> <a name="RepositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit"></a>

```csharp
public double RepositorySizeLimit { get; set; }
```

- *Type:* double

Size limit per repository (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#repository_size_limit ApplicationSettings#repository_size_limit}

---

##### `RepositoryStorages`<sup>Optional</sup> <a name="RepositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages"></a>

```csharp
public string[] RepositoryStorages { get; set; }
```

- *Type:* string[]

(GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#repository_storages ApplicationSettings#repository_storages}

---

##### `RepositoryStoragesWeighted`<sup>Optional</sup> <a name="RepositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> RepositoryStoragesWeighted { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

(GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#repository_storages_weighted ApplicationSettings#repository_storages_weighted}

---

##### `RequireAdminApprovalAfterUserSignup`<sup>Optional</sup> <a name="RequireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup"></a>

```csharp
public object RequireAdminApprovalAfterUserSignup { get; set; }
```

- *Type:* object

When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#require_admin_approval_after_user_signup ApplicationSettings#require_admin_approval_after_user_signup}

---

##### `RequireTwoFactorAuthentication`<sup>Optional</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication"></a>

```csharp
public object RequireTwoFactorAuthentication { get; set; }
```

- *Type:* object

(If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#require_two_factor_authentication ApplicationSettings#require_two_factor_authentication}

---

##### `RestrictedVisibilityLevels`<sup>Optional</sup> <a name="RestrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels"></a>

```csharp
public string[] RestrictedVisibilityLevels { get; set; }
```

- *Type:* string[]

Selected levels cannot be used by non-Administrator users for groups, projects or snippets.

Can take private, internal and public as a parameter. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#restricted_visibility_levels ApplicationSettings#restricted_visibility_levels}

---

##### `RsaKeyRestriction`<sup>Optional</sup> <a name="RsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction"></a>

```csharp
public double RsaKeyRestriction { get; set; }
```

- *Type:* double

The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#rsa_key_restriction ApplicationSettings#rsa_key_restriction}

---

##### `SearchRateLimit`<sup>Optional</sup> <a name="SearchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit"></a>

```csharp
public double SearchRateLimit { get; set; }
```

- *Type:* double

Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#search_rate_limit ApplicationSettings#search_rate_limit}

---

##### `SearchRateLimitUnauthenticated`<sup>Optional</sup> <a name="SearchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated"></a>

```csharp
public double SearchRateLimitUnauthenticated { get; set; }
```

- *Type:* double

Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#search_rate_limit_unauthenticated ApplicationSettings#search_rate_limit_unauthenticated}

---

##### `SendUserConfirmationEmail`<sup>Optional</sup> <a name="SendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail"></a>

```csharp
public object SendUserConfirmationEmail { get; set; }
```

- *Type:* object

Send confirmation email on sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#send_user_confirmation_email ApplicationSettings#send_user_confirmation_email}

---

##### `SessionExpireDelay`<sup>Optional</sup> <a name="SessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay"></a>

```csharp
public double SessionExpireDelay { get; set; }
```

- *Type:* double

Session duration in minutes. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#session_expire_delay ApplicationSettings#session_expire_delay}

---

##### `SharedRunnersEnabled`<sup>Optional</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled"></a>

```csharp
public object SharedRunnersEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#shared_runners_enabled ApplicationSettings#shared_runners_enabled}

---

##### `SharedRunnersMinutes`<sup>Optional</sup> <a name="SharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes"></a>

```csharp
public double SharedRunnersMinutes { get; set; }
```

- *Type:* double

Set the maximum number of CI/CD minutes that a group can use on shared runners per month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#shared_runners_minutes ApplicationSettings#shared_runners_minutes}

---

##### `SharedRunnersText`<sup>Optional</sup> <a name="SharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText"></a>

```csharp
public string SharedRunnersText { get; set; }
```

- *Type:* string

Shared runners text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#shared_runners_text ApplicationSettings#shared_runners_text}

---

##### `SidekiqJobLimiterCompressionThresholdBytes`<sup>Optional</sup> <a name="SidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```csharp
public double SidekiqJobLimiterCompressionThresholdBytes { get; set; }
```

- *Type:* double

The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#sidekiq_job_limiter_compression_threshold_bytes ApplicationSettings#sidekiq_job_limiter_compression_threshold_bytes}

---

##### `SidekiqJobLimiterLimitBytes`<sup>Optional</sup> <a name="SidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes"></a>

```csharp
public double SidekiqJobLimiterLimitBytes { get; set; }
```

- *Type:* double

The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#sidekiq_job_limiter_limit_bytes ApplicationSettings#sidekiq_job_limiter_limit_bytes}

---

##### `SidekiqJobLimiterMode`<sup>Optional</sup> <a name="SidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode"></a>

```csharp
public string SidekiqJobLimiterMode { get; set; }
```

- *Type:* string

track or compress. Sets the behavior for Sidekiq job size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#sidekiq_job_limiter_mode ApplicationSettings#sidekiq_job_limiter_mode}

---

##### `SignInText`<sup>Optional</sup> <a name="SignInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText"></a>

```csharp
public string SignInText { get; set; }
```

- *Type:* string

Text on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#sign_in_text ApplicationSettings#sign_in_text}

---

##### `SignupEnabled`<sup>Optional</sup> <a name="SignupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled"></a>

```csharp
public object SignupEnabled { get; set; }
```

- *Type:* object

Enable registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#signup_enabled ApplicationSettings#signup_enabled}

---

##### `SlackAppEnabled`<sup>Optional</sup> <a name="SlackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled"></a>

```csharp
public object SlackAppEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#slack_app_enabled ApplicationSettings#slack_app_enabled}

---

##### `SlackAppId`<sup>Optional</sup> <a name="SlackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId"></a>

```csharp
public string SlackAppId { get; set; }
```

- *Type:* string

The app ID of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#slack_app_id ApplicationSettings#slack_app_id}

---

##### `SlackAppSecret`<sup>Optional</sup> <a name="SlackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret"></a>

```csharp
public string SlackAppSecret { get; set; }
```

- *Type:* string

The app secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#slack_app_secret ApplicationSettings#slack_app_secret}

---

##### `SlackAppSigningSecret`<sup>Optional</sup> <a name="SlackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret"></a>

```csharp
public string SlackAppSigningSecret { get; set; }
```

- *Type:* string

The signing secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#slack_app_signing_secret ApplicationSettings#slack_app_signing_secret}

---

##### `SlackAppVerificationToken`<sup>Optional</sup> <a name="SlackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken"></a>

```csharp
public string SlackAppVerificationToken { get; set; }
```

- *Type:* string

The verification token of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#slack_app_verification_token ApplicationSettings#slack_app_verification_token}

---

##### `SnippetSizeLimit`<sup>Optional</sup> <a name="SnippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit"></a>

```csharp
public double SnippetSizeLimit { get; set; }
```

- *Type:* double

Max snippet content size in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#snippet_size_limit ApplicationSettings#snippet_size_limit}

---

##### `SnowplowAppId`<sup>Optional</sup> <a name="SnowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId"></a>

```csharp
public string SnowplowAppId { get; set; }
```

- *Type:* string

The Snowplow site name / application ID. (for example, gitlab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#snowplow_app_id ApplicationSettings#snowplow_app_id}

---

##### `SnowplowCollectorHostname`<sup>Optional</sup> <a name="SnowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname"></a>

```csharp
public string SnowplowCollectorHostname { get; set; }
```

- *Type:* string

The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#snowplow_collector_hostname ApplicationSettings#snowplow_collector_hostname}

---

##### `SnowplowCookieDomain`<sup>Optional</sup> <a name="SnowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain"></a>

```csharp
public string SnowplowCookieDomain { get; set; }
```

- *Type:* string

The Snowplow cookie domain. (for example, .gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#snowplow_cookie_domain ApplicationSettings#snowplow_cookie_domain}

---

##### `SnowplowEnabled`<sup>Optional</sup> <a name="SnowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled"></a>

```csharp
public object SnowplowEnabled { get; set; }
```

- *Type:* object

Enable snowplow tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#snowplow_enabled ApplicationSettings#snowplow_enabled}

---

##### `SourcegraphEnabled`<sup>Optional</sup> <a name="SourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled"></a>

```csharp
public object SourcegraphEnabled { get; set; }
```

- *Type:* object

Enables Sourcegraph integration. If enabled, requires sourcegraph_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#sourcegraph_enabled ApplicationSettings#sourcegraph_enabled}

---

##### `SourcegraphPublicOnly`<sup>Optional</sup> <a name="SourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly"></a>

```csharp
public object SourcegraphPublicOnly { get; set; }
```

- *Type:* object

Blocks Sourcegraph from being loaded on private and internal projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#sourcegraph_public_only ApplicationSettings#sourcegraph_public_only}

---

##### `SourcegraphUrl`<sup>Optional</sup> <a name="SourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl"></a>

```csharp
public string SourcegraphUrl { get; set; }
```

- *Type:* string

The Sourcegraph instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#sourcegraph_url ApplicationSettings#sourcegraph_url}

---

##### `SpamCheckApiKey`<sup>Optional</sup> <a name="SpamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey"></a>

```csharp
public string SpamCheckApiKey { get; set; }
```

- *Type:* string

API key used by GitLab for accessing the Spam Check service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#spam_check_api_key ApplicationSettings#spam_check_api_key}

---

##### `SpamCheckEndpointEnabled`<sup>Optional</sup> <a name="SpamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled"></a>

```csharp
public object SpamCheckEndpointEnabled { get; set; }
```

- *Type:* object

Enables spam checking using external Spam Check API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#spam_check_endpoint_enabled ApplicationSettings#spam_check_endpoint_enabled}

---

##### `SpamCheckEndpointUrl`<sup>Optional</sup> <a name="SpamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl"></a>

```csharp
public string SpamCheckEndpointUrl { get; set; }
```

- *Type:* string

URL of the external Spamcheck service endpoint.

Valid URI schemes are grpc or tls. Specifying tls forces communication to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#spam_check_endpoint_url ApplicationSettings#spam_check_endpoint_url}

---

##### `SuggestPipelineEnabled`<sup>Optional</sup> <a name="SuggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled"></a>

```csharp
public object SuggestPipelineEnabled { get; set; }
```

- *Type:* object

Enable pipeline suggestion banner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#suggest_pipeline_enabled ApplicationSettings#suggest_pipeline_enabled}

---

##### `TerminalMaxSessionTime`<sup>Optional</sup> <a name="TerminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime"></a>

```csharp
public double TerminalMaxSessionTime { get; set; }
```

- *Type:* double

Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#terminal_max_session_time ApplicationSettings#terminal_max_session_time}

---

##### `Terms`<sup>Optional</sup> <a name="Terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms"></a>

```csharp
public string Terms { get; set; }
```

- *Type:* string

(Required by: enforce_terms) Markdown content for the ToS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#terms ApplicationSettings#terms}

---

##### `ThrottleAuthenticatedApiEnabled`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled"></a>

```csharp
public object ThrottleAuthenticatedApiEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_api_enabled ApplicationSettings#throttle_authenticated_api_enabled}

---

##### `ThrottleAuthenticatedApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```csharp
public double ThrottleAuthenticatedApiPeriodInSeconds { get; set; }
```

- *Type:* double

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_api_period_in_seconds ApplicationSettings#throttle_authenticated_api_period_in_seconds}

---

##### `ThrottleAuthenticatedApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```csharp
public double ThrottleAuthenticatedApiRequestsPerPeriod { get; set; }
```

- *Type:* double

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_api_requests_per_period ApplicationSettings#throttle_authenticated_api_requests_per_period}

---

##### `ThrottleAuthenticatedPackagesApiEnabled`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled"></a>

```csharp
public object ThrottleAuthenticatedPackagesApiEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_packages_api_enabled ApplicationSettings#throttle_authenticated_packages_api_enabled}

---

##### `ThrottleAuthenticatedPackagesApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```csharp
public double ThrottleAuthenticatedPackagesApiPeriodInSeconds { get; set; }
```

- *Type:* double

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_packages_api_period_in_seconds ApplicationSettings#throttle_authenticated_packages_api_period_in_seconds}

---

##### `ThrottleAuthenticatedPackagesApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```csharp
public double ThrottleAuthenticatedPackagesApiRequestsPerPeriod { get; set; }
```

- *Type:* double

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_packages_api_requests_per_period ApplicationSettings#throttle_authenticated_packages_api_requests_per_period}

---

##### `ThrottleAuthenticatedWebEnabled`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled"></a>

```csharp
public object ThrottleAuthenticatedWebEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_web_enabled ApplicationSettings#throttle_authenticated_web_enabled}

---

##### `ThrottleAuthenticatedWebPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```csharp
public double ThrottleAuthenticatedWebPeriodInSeconds { get; set; }
```

- *Type:* double

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_web_period_in_seconds ApplicationSettings#throttle_authenticated_web_period_in_seconds}

---

##### `ThrottleAuthenticatedWebRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```csharp
public double ThrottleAuthenticatedWebRequestsPerPeriod { get; set; }
```

- *Type:* double

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_authenticated_web_requests_per_period ApplicationSettings#throttle_authenticated_web_requests_per_period}

---

##### `ThrottleUnauthenticatedApiEnabled`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled"></a>

```csharp
public object ThrottleUnauthenticatedApiEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_api_enabled ApplicationSettings#throttle_unauthenticated_api_enabled}

---

##### `ThrottleUnauthenticatedApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```csharp
public double ThrottleUnauthenticatedApiPeriodInSeconds { get; set; }
```

- *Type:* double

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_api_period_in_seconds}

---

##### `ThrottleUnauthenticatedApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```csharp
public double ThrottleUnauthenticatedApiRequestsPerPeriod { get; set; }
```

- *Type:* double

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_api_requests_per_period ApplicationSettings#throttle_unauthenticated_api_requests_per_period}

---

##### `ThrottleUnauthenticatedPackagesApiEnabled`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```csharp
public object ThrottleUnauthenticatedPackagesApiEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_enabled ApplicationSettings#throttle_unauthenticated_packages_api_enabled}

---

##### `ThrottleUnauthenticatedPackagesApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```csharp
public double ThrottleUnauthenticatedPackagesApiPeriodInSeconds { get; set; }
```

- *Type:* double

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_packages_api_period_in_seconds}

---

##### `ThrottleUnauthenticatedPackagesApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```csharp
public double ThrottleUnauthenticatedPackagesApiRequestsPerPeriod { get; set; }
```

- *Type:* double

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_packages_api_requests_per_period ApplicationSettings#throttle_unauthenticated_packages_api_requests_per_period}

---

##### `ThrottleUnauthenticatedWebEnabled`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled"></a>

```csharp
public object ThrottleUnauthenticatedWebEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_web_enabled ApplicationSettings#throttle_unauthenticated_web_enabled}

---

##### `ThrottleUnauthenticatedWebPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```csharp
public double ThrottleUnauthenticatedWebPeriodInSeconds { get; set; }
```

- *Type:* double

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_web_period_in_seconds ApplicationSettings#throttle_unauthenticated_web_period_in_seconds}

---

##### `ThrottleUnauthenticatedWebRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```csharp
public double ThrottleUnauthenticatedWebRequestsPerPeriod { get; set; }
```

- *Type:* double

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#throttle_unauthenticated_web_requests_per_period ApplicationSettings#throttle_unauthenticated_web_requests_per_period}

---

##### `TimeTrackingLimitToHours`<sup>Optional</sup> <a name="TimeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours"></a>

```csharp
public object TimeTrackingLimitToHours { get; set; }
```

- *Type:* object

Limit display of time tracking units to hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#time_tracking_limit_to_hours ApplicationSettings#time_tracking_limit_to_hours}

---

##### `TwoFactorGracePeriod`<sup>Optional</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod"></a>

```csharp
public double TwoFactorGracePeriod { get; set; }
```

- *Type:* double

Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#two_factor_grace_period ApplicationSettings#two_factor_grace_period}

---

##### `UniqueIpsLimitEnabled`<sup>Optional</sup> <a name="UniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled"></a>

```csharp
public object UniqueIpsLimitEnabled { get; set; }
```

- *Type:* object

(If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#unique_ips_limit_enabled ApplicationSettings#unique_ips_limit_enabled}

---

##### `UniqueIpsLimitPerUser`<sup>Optional</sup> <a name="UniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser"></a>

```csharp
public double UniqueIpsLimitPerUser { get; set; }
```

- *Type:* double

Maximum number of IPs per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#unique_ips_limit_per_user ApplicationSettings#unique_ips_limit_per_user}

---

##### `UniqueIpsLimitTimeWindow`<sup>Optional</sup> <a name="UniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow"></a>

```csharp
public double UniqueIpsLimitTimeWindow { get; set; }
```

- *Type:* double

How many seconds an IP is counted towards the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#unique_ips_limit_time_window ApplicationSettings#unique_ips_limit_time_window}

---

##### `UsagePingEnabled`<sup>Optional</sup> <a name="UsagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled"></a>

```csharp
public object UsagePingEnabled { get; set; }
```

- *Type:* object

Every week GitLab reports license usage back to GitLab, Inc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#usage_ping_enabled ApplicationSettings#usage_ping_enabled}

---

##### `UserDeactivationEmailsEnabled`<sup>Optional</sup> <a name="UserDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled"></a>

```csharp
public object UserDeactivationEmailsEnabled { get; set; }
```

- *Type:* object

Send an email to users upon account deactivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#user_deactivation_emails_enabled ApplicationSettings#user_deactivation_emails_enabled}

---

##### `UserDefaultExternal`<sup>Optional</sup> <a name="UserDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal"></a>

```csharp
public object UserDefaultExternal { get; set; }
```

- *Type:* object

Newly registered users are external by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#user_default_external ApplicationSettings#user_default_external}

---

##### `UserDefaultInternalRegex`<sup>Optional</sup> <a name="UserDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex"></a>

```csharp
public string UserDefaultInternalRegex { get; set; }
```

- *Type:* string

Specify an email address regex pattern to identify default internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#user_default_internal_regex ApplicationSettings#user_default_internal_regex}

---

##### `UserOauthApplications`<sup>Optional</sup> <a name="UserOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications"></a>

```csharp
public object UserOauthApplications { get; set; }
```

- *Type:* object

Allow users to register any application to use GitLab as an OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#user_oauth_applications ApplicationSettings#user_oauth_applications}

---

##### `UserShowAddSshKeyMessage`<sup>Optional</sup> <a name="UserShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage"></a>

```csharp
public object UserShowAddSshKeyMessage { get; set; }
```

- *Type:* object

When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#user_show_add_ssh_key_message ApplicationSettings#user_show_add_ssh_key_message}

---

##### `VersionCheckEnabled`<sup>Optional</sup> <a name="VersionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled"></a>

```csharp
public object VersionCheckEnabled { get; set; }
```

- *Type:* object

Let GitLab inform you when an update is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#version_check_enabled ApplicationSettings#version_check_enabled}

---

##### `WebIdeClientsidePreviewEnabled`<sup>Optional</sup> <a name="WebIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled"></a>

```csharp
public object WebIdeClientsidePreviewEnabled { get; set; }
```

- *Type:* object

Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#web_ide_clientside_preview_enabled ApplicationSettings#web_ide_clientside_preview_enabled}

---

##### `WhatsNewVariant`<sup>Optional</sup> <a name="WhatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant"></a>

```csharp
public string WhatsNewVariant { get; set; }
```

- *Type:* string

What’s new variant, possible values: all_tiers, current_tier, and disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#whats_new_variant ApplicationSettings#whats_new_variant}

---

##### `WikiPageMaxContentBytes`<sup>Optional</sup> <a name="WikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes"></a>

```csharp
public double WikiPageMaxContentBytes { get; set; }
```

- *Type:* double

Maximum wiki page content size in bytes. The minimum value is 1024 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.11.0/docs/resources/application_settings#wiki_page_max_content_bytes ApplicationSettings#wiki_page_max_content_bytes}

---




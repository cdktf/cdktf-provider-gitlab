# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-gitlab.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings gitlab_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

applicationsettings.NewApplicationSettings(scope Construct, id *string, config ApplicationSettingsConfig) ApplicationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.putDefaultBranchProtectionDefaults">PutDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail">ResetAbuseNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode">ResetAdminMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath">ResetAfterSignOutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText">ResetAfterSignUpText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey">ResetAkismetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled">ResetAkismetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowAccountDeletion">ResetAllowAccountDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap">ResetAllowGroupOwnersToManageLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks">ResetAllowLocalRequestsFromSystemHooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices">ResetAllowLocalRequestsFromWebHooksAndServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowProjectCreationForGuestAndBelow">ResetAllowProjectCreationForGuestAndBelow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowRunnerRegistrationToken">ResetAllowRunnerRegistrationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable">ResetArchiveBuildsInHumanReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAsciidocMaxIncludes">ResetAsciidocMaxIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist">ResetAssetProxyAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled">ResetAssetProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey">ResetAssetProxySecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl">ResetAssetProxyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled">ResetAuthorizedKeysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoBanUserOnExcessiveProjectsDownload">ResetAutoBanUserOnExcessiveProjectsDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain">ResetAutoDevopsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled">ResetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation">ResetAutomaticPurchasedStorageAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportConcurrentPipelineBatchLimit">ResetBulkImportConcurrentPipelineBatchLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportEnabled">ResetBulkImportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportMaxDownloadFileSize">ResetBulkImportMaxDownloadFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup">ResetCanCreateGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan">ResetCheckNamespacePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxIncludes">ResetCiMaxIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxTotalYamlSizeBytes">ResetCiMaxTotalYamlSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname">ResetCommitEmailHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketImportJobsLimit">ResetConcurrentBitbucketImportJobsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketServerImportJobsLimit">ResetConcurrentBitbucketServerImportJobsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentGithubImportJobsLimit">ResetConcurrentGithubImportJobsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries">ResetContainerExpirationPoliciesEnableHistoricEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize">ResetContainerRegistryCleanupTagsServiceMaxListSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout">ResetContainerRegistryDeleteTagsServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching">ResetContainerRegistryExpirationPoliciesCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity">ResetContainerRegistryExpirationPoliciesWorkerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay">ResetContainerRegistryTokenExpireDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers">ResetDeactivateDormantUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsersPeriod">ResetDeactivateDormantUsersPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDecompressArchiveFileTimeout">ResetDecompressArchiveFileTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn">ResetDefaultArtifactsExpireIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName">ResetDefaultBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection">ResetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtectionDefaults">ResetDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath">ResetDefaultCiConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility">ResetDefaultGroupVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultPreferredLanguage">ResetDefaultPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation">ResetDefaultProjectCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit">ResetDefaultProjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility">ResetDefaultProjectVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility">ResetDefaultSnippetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSyntaxHighlightingTheme">ResetDefaultSyntaxHighlightingTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects">ResetDeleteInactiveProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteUnconfirmedUsers">ResetDeleteUnconfirmedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod">ResetDeletionAdjournedPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetEnabled">ResetDiagramsnetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetUrl">ResetDiagramsnetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles">ResetDiffMaxFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines">ResetDiffMaxLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes">ResetDiffMaxPatchBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableAdminOauthScopes">ResetDisableAdminOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources">ResetDisabledOauthSignInSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken">ResetDisableFeedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisablePersonalAccessTokens">ResetDisablePersonalAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled">ResetDnsRebindingProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist">ResetDomainAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist">ResetDomainDenylist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled">ResetDomainDenylistEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDownstreamPipelineTriggerLimitPerProjectUserSha">ResetDownstreamPipelineTriggerLimitPerProjectUserSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction">ResetDsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDuoFeaturesEnabled">ResetDuoFeaturesEnabled</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxCodeIndexingConcurrency">ResetElasticsearchMaxCodeIndexingConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds">ResetElasticsearchNamespaceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword">ResetElasticsearchPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds">ResetElasticsearchProjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchRequeueWorkers">ResetElasticsearchRequeueWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch">ResetElasticsearchSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl">ResetElasticsearchUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername">ResetElasticsearchUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchWorkerNumberOfShards">ResetElasticsearchWorkerNumberOfShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText">ResetEmailAdditionalText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody">ResetEmailAuthorInBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailConfirmationSetting">ResetEmailConfirmationSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnableArtifactExternalRedirectWarningPage">ResetEnableArtifactExternalRedirectWarningPage</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFailedLoginAttemptsUnlockPeriodInMinutes">ResetFailedLoginAttemptsUnlockPeriodInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId">ResetFileTemplateProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek">ResetFirstDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps">ResetGeoNodeAllowedIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout">ResetGeoStatusTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault">ResetGitalyTimeoutDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast">ResetGitalyTimeoutFast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium">ResetGitalyTimeoutMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitlabShellOperationLimit">ResetGitlabShellOperationLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodEnabled">ResetGitpodEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodUrl">ResetGitpodUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAlertlist">ResetGitRateLimitUsersAlertlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist">ResetGitRateLimitUsersAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry">ResetGitTwoFactorSessionExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGloballyAllowedIps">ResetGloballyAllowedIps</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIncludeOptionalMetricsInServicePing">ResetIncludeOptionalMetricsInServicePing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled">ResetInProductMarketingEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled">ResetInvisibleCaptchaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit">ResetIssuesCreateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectApplicationKey">ResetJiraConnectApplicationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectProxyUrl">ResetJiraConnectProxyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectPublicKeyStorageEnabled">ResetJiraConnectPublicKeyStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact">ResetKeepLatestArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion">ResetLocalMarkdownVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLockDuoFeaturesEnabled">ResetLockDuoFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled">ResetMailgunEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey">ResetMailgunSigningKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode">ResetMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage">ResetMaintenanceModeMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMavenPackageRequestsForwarding">ResetMavenPackageRequestsForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize">ResetMaxArtifactsSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize">ResetMaxAttachmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxDecompressedArchiveSize">ResetMaxDecompressedArchiveSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize">ResetMaxExportSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportRemoteFileSize">ResetMaxImportRemoteFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize">ResetMaxImportSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxLoginAttempts">ResetMaxLoginAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads">ResetMaxNumberOfRepositoryDownloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod">ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize">ResetMaxPagesSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime">ResetMaxPersonalAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime">ResetMaxSshKeyLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxTerraformStateSizeBytes">ResetMaxTerraformStateSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold">ResetMetricsMethodCallThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable">ResetMirrorAvailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold">ResetMirrorCapacityThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity">ResetMirrorMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay">ResetMirrorMaxDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding">ResetNpmPackageRequestsForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNugetSkipMetadataUrlValidation">ResetNugetSkipMetadataUrlValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist">ResetOutboundLocalRequestsWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageMetadataPurlTypes">ResetPackageMetadataPurlTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryAllowAnyoneToPullOption">ResetPackageRegistryAllowAnyoneToPullOption</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectJobsApiRateLimit">ResetProjectJobsApiRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectsApiRateLimitUnauthenticated">ResetProjectsApiRateLimitUnauthenticated</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceptiveClusterAgentsEnabled">ResetReceptiveClusterAgentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRememberMeEnabled">ResetRememberMeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled">ResetRepositoryChecksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit">ResetRepositorySizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages">ResetRepositoryStorages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted">ResetRepositoryStoragesWeighted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup">ResetRequireAdminApprovalAfterUserSignup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminTwoFactorAuthentication">ResetRequireAdminTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequirePersonalAccessTokenExpiry">ResetRequirePersonalAccessTokenExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication">ResetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels">ResetRestrictedVisibilityLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction">ResetRsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit">ResetSearchRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated">ResetSearchRateLimitUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityApprovalPoliciesLimit">ResetSecurityApprovalPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityPolicyGlobalGroupApproversEnabled">ResetSecurityPolicyGlobalGroupApproversEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityTxtContent">ResetSecurityTxtContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail">ResetSendUserConfirmationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetServiceAccessTokensExpirationEnforced">ResetServiceAccessTokensExpirationEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay">ResetSessionExpireDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled">ResetSharedRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes">ResetSharedRunnersMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText">ResetSharedRunnersText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes">ResetSidekiqJobLimiterCompressionThresholdBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes">ResetSidekiqJobLimiterLimitBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode">ResetSidekiqJobLimiterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText">ResetSignInText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled">ResetSignupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentAdminExportsEnabled">ResetSilentAdminExportsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentModeEnabled">ResetSilentModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled">ResetSlackAppEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId">ResetSlackAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret">ResetSlackAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret">ResetSlackAppSigningSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken">ResetSlackAppVerificationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit">ResetSnippetSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId">ResetSnowplowAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname">ResetSnowplowCollectorHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain">ResetSnowplowCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowDatabaseCollectorHostname">ResetSnowplowDatabaseCollectorHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled">ResetSnowplowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled">ResetSourcegraphEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly">ResetSourcegraphPublicOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl">ResetSourcegraphUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey">ResetSpamCheckApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled">ResetSpamCheckEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl">ResetSpamCheckEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageAuthToken">ResetStaticObjectsExternalStorageAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageUrl">ResetStaticObjectsExternalStorageUrl</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUnconfirmedUsersDeleteAfterDays">ResetUnconfirmedUsersDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled">ResetUniqueIpsLimitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser">ResetUniqueIpsLimitPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow">ResetUniqueIpsLimitTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUpdateRunnerVersionsEnabled">ResetUpdateRunnerVersionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled">ResetUsagePingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUseClickhouseForAnalytics">ResetUseClickhouseForAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled">ResetUserDeactivationEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal">ResetUserDefaultExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex">ResetUserDefaultInternalRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultsToPrivateProfile">ResetUserDefaultsToPrivateProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications">ResetUserOauthApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage">ResetUserShowAddSshKeyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetValidRunnerRegistrars">ResetValidRunnerRegistrars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled">ResetVersionCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled">ResetWebIdeClientsidePreviewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant">ResetWhatsNewVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes">ResetWikiPageMaxContentBytes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultBranchProtectionDefaults` <a name="PutDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.putDefaultBranchProtectionDefaults"></a>

```go
func PutDefaultBranchProtectionDefaults(value ApplicationSettingsDefaultBranchProtectionDefaults)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.putDefaultBranchProtectionDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

---

##### `ResetAbuseNotificationEmail` <a name="ResetAbuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail"></a>

```go
func ResetAbuseNotificationEmail()
```

##### `ResetAdminMode` <a name="ResetAdminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode"></a>

```go
func ResetAdminMode()
```

##### `ResetAfterSignOutPath` <a name="ResetAfterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath"></a>

```go
func ResetAfterSignOutPath()
```

##### `ResetAfterSignUpText` <a name="ResetAfterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText"></a>

```go
func ResetAfterSignUpText()
```

##### `ResetAkismetApiKey` <a name="ResetAkismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey"></a>

```go
func ResetAkismetApiKey()
```

##### `ResetAkismetEnabled` <a name="ResetAkismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled"></a>

```go
func ResetAkismetEnabled()
```

##### `ResetAllowAccountDeletion` <a name="ResetAllowAccountDeletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowAccountDeletion"></a>

```go
func ResetAllowAccountDeletion()
```

##### `ResetAllowGroupOwnersToManageLdap` <a name="ResetAllowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap"></a>

```go
func ResetAllowGroupOwnersToManageLdap()
```

##### `ResetAllowLocalRequestsFromSystemHooks` <a name="ResetAllowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks"></a>

```go
func ResetAllowLocalRequestsFromSystemHooks()
```

##### `ResetAllowLocalRequestsFromWebHooksAndServices` <a name="ResetAllowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices"></a>

```go
func ResetAllowLocalRequestsFromWebHooksAndServices()
```

##### `ResetAllowProjectCreationForGuestAndBelow` <a name="ResetAllowProjectCreationForGuestAndBelow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowProjectCreationForGuestAndBelow"></a>

```go
func ResetAllowProjectCreationForGuestAndBelow()
```

##### `ResetAllowRunnerRegistrationToken` <a name="ResetAllowRunnerRegistrationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowRunnerRegistrationToken"></a>

```go
func ResetAllowRunnerRegistrationToken()
```

##### `ResetArchiveBuildsInHumanReadable` <a name="ResetArchiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable"></a>

```go
func ResetArchiveBuildsInHumanReadable()
```

##### `ResetAsciidocMaxIncludes` <a name="ResetAsciidocMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAsciidocMaxIncludes"></a>

```go
func ResetAsciidocMaxIncludes()
```

##### `ResetAssetProxyAllowlist` <a name="ResetAssetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist"></a>

```go
func ResetAssetProxyAllowlist()
```

##### `ResetAssetProxyEnabled` <a name="ResetAssetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled"></a>

```go
func ResetAssetProxyEnabled()
```

##### `ResetAssetProxySecretKey` <a name="ResetAssetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey"></a>

```go
func ResetAssetProxySecretKey()
```

##### `ResetAssetProxyUrl` <a name="ResetAssetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl"></a>

```go
func ResetAssetProxyUrl()
```

##### `ResetAuthorizedKeysEnabled` <a name="ResetAuthorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled"></a>

```go
func ResetAuthorizedKeysEnabled()
```

##### `ResetAutoBanUserOnExcessiveProjectsDownload` <a name="ResetAutoBanUserOnExcessiveProjectsDownload" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoBanUserOnExcessiveProjectsDownload"></a>

```go
func ResetAutoBanUserOnExcessiveProjectsDownload()
```

##### `ResetAutoDevopsDomain` <a name="ResetAutoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain"></a>

```go
func ResetAutoDevopsDomain()
```

##### `ResetAutoDevopsEnabled` <a name="ResetAutoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled"></a>

```go
func ResetAutoDevopsEnabled()
```

##### `ResetAutomaticPurchasedStorageAllocation` <a name="ResetAutomaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation"></a>

```go
func ResetAutomaticPurchasedStorageAllocation()
```

##### `ResetBulkImportConcurrentPipelineBatchLimit` <a name="ResetBulkImportConcurrentPipelineBatchLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportConcurrentPipelineBatchLimit"></a>

```go
func ResetBulkImportConcurrentPipelineBatchLimit()
```

##### `ResetBulkImportEnabled` <a name="ResetBulkImportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportEnabled"></a>

```go
func ResetBulkImportEnabled()
```

##### `ResetBulkImportMaxDownloadFileSize` <a name="ResetBulkImportMaxDownloadFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportMaxDownloadFileSize"></a>

```go
func ResetBulkImportMaxDownloadFileSize()
```

##### `ResetCanCreateGroup` <a name="ResetCanCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup"></a>

```go
func ResetCanCreateGroup()
```

##### `ResetCheckNamespacePlan` <a name="ResetCheckNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan"></a>

```go
func ResetCheckNamespacePlan()
```

##### `ResetCiMaxIncludes` <a name="ResetCiMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxIncludes"></a>

```go
func ResetCiMaxIncludes()
```

##### `ResetCiMaxTotalYamlSizeBytes` <a name="ResetCiMaxTotalYamlSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxTotalYamlSizeBytes"></a>

```go
func ResetCiMaxTotalYamlSizeBytes()
```

##### `ResetCommitEmailHostname` <a name="ResetCommitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname"></a>

```go
func ResetCommitEmailHostname()
```

##### `ResetConcurrentBitbucketImportJobsLimit` <a name="ResetConcurrentBitbucketImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketImportJobsLimit"></a>

```go
func ResetConcurrentBitbucketImportJobsLimit()
```

##### `ResetConcurrentBitbucketServerImportJobsLimit` <a name="ResetConcurrentBitbucketServerImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketServerImportJobsLimit"></a>

```go
func ResetConcurrentBitbucketServerImportJobsLimit()
```

##### `ResetConcurrentGithubImportJobsLimit` <a name="ResetConcurrentGithubImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentGithubImportJobsLimit"></a>

```go
func ResetConcurrentGithubImportJobsLimit()
```

##### `ResetContainerExpirationPoliciesEnableHistoricEntries` <a name="ResetContainerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries"></a>

```go
func ResetContainerExpirationPoliciesEnableHistoricEntries()
```

##### `ResetContainerRegistryCleanupTagsServiceMaxListSize` <a name="ResetContainerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize"></a>

```go
func ResetContainerRegistryCleanupTagsServiceMaxListSize()
```

##### `ResetContainerRegistryDeleteTagsServiceTimeout` <a name="ResetContainerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout"></a>

```go
func ResetContainerRegistryDeleteTagsServiceTimeout()
```

##### `ResetContainerRegistryExpirationPoliciesCaching` <a name="ResetContainerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching"></a>

```go
func ResetContainerRegistryExpirationPoliciesCaching()
```

##### `ResetContainerRegistryExpirationPoliciesWorkerCapacity` <a name="ResetContainerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity"></a>

```go
func ResetContainerRegistryExpirationPoliciesWorkerCapacity()
```

##### `ResetContainerRegistryTokenExpireDelay` <a name="ResetContainerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay"></a>

```go
func ResetContainerRegistryTokenExpireDelay()
```

##### `ResetDeactivateDormantUsers` <a name="ResetDeactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers"></a>

```go
func ResetDeactivateDormantUsers()
```

##### `ResetDeactivateDormantUsersPeriod` <a name="ResetDeactivateDormantUsersPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsersPeriod"></a>

```go
func ResetDeactivateDormantUsersPeriod()
```

##### `ResetDecompressArchiveFileTimeout` <a name="ResetDecompressArchiveFileTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDecompressArchiveFileTimeout"></a>

```go
func ResetDecompressArchiveFileTimeout()
```

##### `ResetDefaultArtifactsExpireIn` <a name="ResetDefaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn"></a>

```go
func ResetDefaultArtifactsExpireIn()
```

##### `ResetDefaultBranchName` <a name="ResetDefaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName"></a>

```go
func ResetDefaultBranchName()
```

##### `ResetDefaultBranchProtection` <a name="ResetDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection"></a>

```go
func ResetDefaultBranchProtection()
```

##### `ResetDefaultBranchProtectionDefaults` <a name="ResetDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtectionDefaults"></a>

```go
func ResetDefaultBranchProtectionDefaults()
```

##### `ResetDefaultCiConfigPath` <a name="ResetDefaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath"></a>

```go
func ResetDefaultCiConfigPath()
```

##### `ResetDefaultGroupVisibility` <a name="ResetDefaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility"></a>

```go
func ResetDefaultGroupVisibility()
```

##### `ResetDefaultPreferredLanguage` <a name="ResetDefaultPreferredLanguage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultPreferredLanguage"></a>

```go
func ResetDefaultPreferredLanguage()
```

##### `ResetDefaultProjectCreation` <a name="ResetDefaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation"></a>

```go
func ResetDefaultProjectCreation()
```

##### `ResetDefaultProjectsLimit` <a name="ResetDefaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit"></a>

```go
func ResetDefaultProjectsLimit()
```

##### `ResetDefaultProjectVisibility` <a name="ResetDefaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility"></a>

```go
func ResetDefaultProjectVisibility()
```

##### `ResetDefaultSnippetVisibility` <a name="ResetDefaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility"></a>

```go
func ResetDefaultSnippetVisibility()
```

##### `ResetDefaultSyntaxHighlightingTheme` <a name="ResetDefaultSyntaxHighlightingTheme" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSyntaxHighlightingTheme"></a>

```go
func ResetDefaultSyntaxHighlightingTheme()
```

##### `ResetDeleteInactiveProjects` <a name="ResetDeleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects"></a>

```go
func ResetDeleteInactiveProjects()
```

##### `ResetDeleteUnconfirmedUsers` <a name="ResetDeleteUnconfirmedUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteUnconfirmedUsers"></a>

```go
func ResetDeleteUnconfirmedUsers()
```

##### `ResetDeletionAdjournedPeriod` <a name="ResetDeletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod"></a>

```go
func ResetDeletionAdjournedPeriod()
```

##### `ResetDiagramsnetEnabled` <a name="ResetDiagramsnetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetEnabled"></a>

```go
func ResetDiagramsnetEnabled()
```

##### `ResetDiagramsnetUrl` <a name="ResetDiagramsnetUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetUrl"></a>

```go
func ResetDiagramsnetUrl()
```

##### `ResetDiffMaxFiles` <a name="ResetDiffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles"></a>

```go
func ResetDiffMaxFiles()
```

##### `ResetDiffMaxLines` <a name="ResetDiffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines"></a>

```go
func ResetDiffMaxLines()
```

##### `ResetDiffMaxPatchBytes` <a name="ResetDiffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes"></a>

```go
func ResetDiffMaxPatchBytes()
```

##### `ResetDisableAdminOauthScopes` <a name="ResetDisableAdminOauthScopes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableAdminOauthScopes"></a>

```go
func ResetDisableAdminOauthScopes()
```

##### `ResetDisabledOauthSignInSources` <a name="ResetDisabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources"></a>

```go
func ResetDisabledOauthSignInSources()
```

##### `ResetDisableFeedToken` <a name="ResetDisableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken"></a>

```go
func ResetDisableFeedToken()
```

##### `ResetDisablePersonalAccessTokens` <a name="ResetDisablePersonalAccessTokens" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisablePersonalAccessTokens"></a>

```go
func ResetDisablePersonalAccessTokens()
```

##### `ResetDnsRebindingProtectionEnabled` <a name="ResetDnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled"></a>

```go
func ResetDnsRebindingProtectionEnabled()
```

##### `ResetDomainAllowlist` <a name="ResetDomainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist"></a>

```go
func ResetDomainAllowlist()
```

##### `ResetDomainDenylist` <a name="ResetDomainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist"></a>

```go
func ResetDomainDenylist()
```

##### `ResetDomainDenylistEnabled` <a name="ResetDomainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled"></a>

```go
func ResetDomainDenylistEnabled()
```

##### `ResetDownstreamPipelineTriggerLimitPerProjectUserSha` <a name="ResetDownstreamPipelineTriggerLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDownstreamPipelineTriggerLimitPerProjectUserSha"></a>

```go
func ResetDownstreamPipelineTriggerLimitPerProjectUserSha()
```

##### `ResetDsaKeyRestriction` <a name="ResetDsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction"></a>

```go
func ResetDsaKeyRestriction()
```

##### `ResetDuoFeaturesEnabled` <a name="ResetDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDuoFeaturesEnabled"></a>

```go
func ResetDuoFeaturesEnabled()
```

##### `ResetEcdsaKeyRestriction` <a name="ResetEcdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaKeyRestriction"></a>

```go
func ResetEcdsaKeyRestriction()
```

##### `ResetEcdsaSkKeyRestriction` <a name="ResetEcdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaSkKeyRestriction"></a>

```go
func ResetEcdsaSkKeyRestriction()
```

##### `ResetEd25519KeyRestriction` <a name="ResetEd25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519KeyRestriction"></a>

```go
func ResetEd25519KeyRestriction()
```

##### `ResetEd25519SkKeyRestriction` <a name="ResetEd25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519SkKeyRestriction"></a>

```go
func ResetEd25519SkKeyRestriction()
```

##### `ResetEksAccessKeyId` <a name="ResetEksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccessKeyId"></a>

```go
func ResetEksAccessKeyId()
```

##### `ResetEksAccountId` <a name="ResetEksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccountId"></a>

```go
func ResetEksAccountId()
```

##### `ResetEksIntegrationEnabled` <a name="ResetEksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksIntegrationEnabled"></a>

```go
func ResetEksIntegrationEnabled()
```

##### `ResetEksSecretAccessKey` <a name="ResetEksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksSecretAccessKey"></a>

```go
func ResetEksSecretAccessKey()
```

##### `ResetElasticsearchAws` <a name="ResetElasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAws"></a>

```go
func ResetElasticsearchAws()
```

##### `ResetElasticsearchAwsAccessKey` <a name="ResetElasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsAccessKey"></a>

```go
func ResetElasticsearchAwsAccessKey()
```

##### `ResetElasticsearchAwsRegion` <a name="ResetElasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsRegion"></a>

```go
func ResetElasticsearchAwsRegion()
```

##### `ResetElasticsearchAwsSecretAccessKey` <a name="ResetElasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsSecretAccessKey"></a>

```go
func ResetElasticsearchAwsSecretAccessKey()
```

##### `ResetElasticsearchIndexedFieldLengthLimit` <a name="ResetElasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFieldLengthLimit"></a>

```go
func ResetElasticsearchIndexedFieldLengthLimit()
```

##### `ResetElasticsearchIndexedFileSizeLimitKb` <a name="ResetElasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFileSizeLimitKb"></a>

```go
func ResetElasticsearchIndexedFileSizeLimitKb()
```

##### `ResetElasticsearchIndexing` <a name="ResetElasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexing"></a>

```go
func ResetElasticsearchIndexing()
```

##### `ResetElasticsearchLimitIndexing` <a name="ResetElasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchLimitIndexing"></a>

```go
func ResetElasticsearchLimitIndexing()
```

##### `ResetElasticsearchMaxBulkConcurrency` <a name="ResetElasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkConcurrency"></a>

```go
func ResetElasticsearchMaxBulkConcurrency()
```

##### `ResetElasticsearchMaxBulkSizeMb` <a name="ResetElasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkSizeMb"></a>

```go
func ResetElasticsearchMaxBulkSizeMb()
```

##### `ResetElasticsearchMaxCodeIndexingConcurrency` <a name="ResetElasticsearchMaxCodeIndexingConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxCodeIndexingConcurrency"></a>

```go
func ResetElasticsearchMaxCodeIndexingConcurrency()
```

##### `ResetElasticsearchNamespaceIds` <a name="ResetElasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds"></a>

```go
func ResetElasticsearchNamespaceIds()
```

##### `ResetElasticsearchPassword` <a name="ResetElasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword"></a>

```go
func ResetElasticsearchPassword()
```

##### `ResetElasticsearchProjectIds` <a name="ResetElasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds"></a>

```go
func ResetElasticsearchProjectIds()
```

##### `ResetElasticsearchRequeueWorkers` <a name="ResetElasticsearchRequeueWorkers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchRequeueWorkers"></a>

```go
func ResetElasticsearchRequeueWorkers()
```

##### `ResetElasticsearchSearch` <a name="ResetElasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch"></a>

```go
func ResetElasticsearchSearch()
```

##### `ResetElasticsearchUrl` <a name="ResetElasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl"></a>

```go
func ResetElasticsearchUrl()
```

##### `ResetElasticsearchUsername` <a name="ResetElasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername"></a>

```go
func ResetElasticsearchUsername()
```

##### `ResetElasticsearchWorkerNumberOfShards` <a name="ResetElasticsearchWorkerNumberOfShards" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchWorkerNumberOfShards"></a>

```go
func ResetElasticsearchWorkerNumberOfShards()
```

##### `ResetEmailAdditionalText` <a name="ResetEmailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText"></a>

```go
func ResetEmailAdditionalText()
```

##### `ResetEmailAuthorInBody` <a name="ResetEmailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody"></a>

```go
func ResetEmailAuthorInBody()
```

##### `ResetEmailConfirmationSetting` <a name="ResetEmailConfirmationSetting" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailConfirmationSetting"></a>

```go
func ResetEmailConfirmationSetting()
```

##### `ResetEnableArtifactExternalRedirectWarningPage` <a name="ResetEnableArtifactExternalRedirectWarningPage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnableArtifactExternalRedirectWarningPage"></a>

```go
func ResetEnableArtifactExternalRedirectWarningPage()
```

##### `ResetEnabledGitAccessProtocol` <a name="ResetEnabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnabledGitAccessProtocol"></a>

```go
func ResetEnabledGitAccessProtocol()
```

##### `ResetEnforceNamespaceStorageLimit` <a name="ResetEnforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceNamespaceStorageLimit"></a>

```go
func ResetEnforceNamespaceStorageLimit()
```

##### `ResetEnforceTerms` <a name="ResetEnforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceTerms"></a>

```go
func ResetEnforceTerms()
```

##### `ResetExternalAuthClientCert` <a name="ResetExternalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientCert"></a>

```go
func ResetExternalAuthClientCert()
```

##### `ResetExternalAuthClientKey` <a name="ResetExternalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKey"></a>

```go
func ResetExternalAuthClientKey()
```

##### `ResetExternalAuthClientKeyPass` <a name="ResetExternalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKeyPass"></a>

```go
func ResetExternalAuthClientKeyPass()
```

##### `ResetExternalAuthorizationServiceDefaultLabel` <a name="ResetExternalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceDefaultLabel"></a>

```go
func ResetExternalAuthorizationServiceDefaultLabel()
```

##### `ResetExternalAuthorizationServiceEnabled` <a name="ResetExternalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceEnabled"></a>

```go
func ResetExternalAuthorizationServiceEnabled()
```

##### `ResetExternalAuthorizationServiceTimeout` <a name="ResetExternalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceTimeout"></a>

```go
func ResetExternalAuthorizationServiceTimeout()
```

##### `ResetExternalAuthorizationServiceUrl` <a name="ResetExternalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceUrl"></a>

```go
func ResetExternalAuthorizationServiceUrl()
```

##### `ResetExternalPipelineValidationServiceTimeout` <a name="ResetExternalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceTimeout"></a>

```go
func ResetExternalPipelineValidationServiceTimeout()
```

##### `ResetExternalPipelineValidationServiceToken` <a name="ResetExternalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceToken"></a>

```go
func ResetExternalPipelineValidationServiceToken()
```

##### `ResetExternalPipelineValidationServiceUrl` <a name="ResetExternalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceUrl"></a>

```go
func ResetExternalPipelineValidationServiceUrl()
```

##### `ResetFailedLoginAttemptsUnlockPeriodInMinutes` <a name="ResetFailedLoginAttemptsUnlockPeriodInMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFailedLoginAttemptsUnlockPeriodInMinutes"></a>

```go
func ResetFailedLoginAttemptsUnlockPeriodInMinutes()
```

##### `ResetFileTemplateProjectId` <a name="ResetFileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId"></a>

```go
func ResetFileTemplateProjectId()
```

##### `ResetFirstDayOfWeek` <a name="ResetFirstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek"></a>

```go
func ResetFirstDayOfWeek()
```

##### `ResetGeoNodeAllowedIps` <a name="ResetGeoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps"></a>

```go
func ResetGeoNodeAllowedIps()
```

##### `ResetGeoStatusTimeout` <a name="ResetGeoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout"></a>

```go
func ResetGeoStatusTimeout()
```

##### `ResetGitalyTimeoutDefault` <a name="ResetGitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault"></a>

```go
func ResetGitalyTimeoutDefault()
```

##### `ResetGitalyTimeoutFast` <a name="ResetGitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast"></a>

```go
func ResetGitalyTimeoutFast()
```

##### `ResetGitalyTimeoutMedium` <a name="ResetGitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium"></a>

```go
func ResetGitalyTimeoutMedium()
```

##### `ResetGitlabShellOperationLimit` <a name="ResetGitlabShellOperationLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitlabShellOperationLimit"></a>

```go
func ResetGitlabShellOperationLimit()
```

##### `ResetGitpodEnabled` <a name="ResetGitpodEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodEnabled"></a>

```go
func ResetGitpodEnabled()
```

##### `ResetGitpodUrl` <a name="ResetGitpodUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodUrl"></a>

```go
func ResetGitpodUrl()
```

##### `ResetGitRateLimitUsersAlertlist` <a name="ResetGitRateLimitUsersAlertlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAlertlist"></a>

```go
func ResetGitRateLimitUsersAlertlist()
```

##### `ResetGitRateLimitUsersAllowlist` <a name="ResetGitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist"></a>

```go
func ResetGitRateLimitUsersAllowlist()
```

##### `ResetGitTwoFactorSessionExpiry` <a name="ResetGitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry"></a>

```go
func ResetGitTwoFactorSessionExpiry()
```

##### `ResetGloballyAllowedIps` <a name="ResetGloballyAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGloballyAllowedIps"></a>

```go
func ResetGloballyAllowedIps()
```

##### `ResetGrafanaEnabled` <a name="ResetGrafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaEnabled"></a>

```go
func ResetGrafanaEnabled()
```

##### `ResetGrafanaUrl` <a name="ResetGrafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaUrl"></a>

```go
func ResetGrafanaUrl()
```

##### `ResetGravatarEnabled` <a name="ResetGravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGravatarEnabled"></a>

```go
func ResetGravatarEnabled()
```

##### `ResetGroupOwnersCanManageDefaultBranchProtection` <a name="ResetGroupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGroupOwnersCanManageDefaultBranchProtection"></a>

```go
func ResetGroupOwnersCanManageDefaultBranchProtection()
```

##### `ResetHashedStorageEnabled` <a name="ResetHashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHashedStorageEnabled"></a>

```go
func ResetHashedStorageEnabled()
```

##### `ResetHelpPageHideCommercialContent` <a name="ResetHelpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageHideCommercialContent"></a>

```go
func ResetHelpPageHideCommercialContent()
```

##### `ResetHelpPageSupportUrl` <a name="ResetHelpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageSupportUrl"></a>

```go
func ResetHelpPageSupportUrl()
```

##### `ResetHelpPageText` <a name="ResetHelpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageText"></a>

```go
func ResetHelpPageText()
```

##### `ResetHelpText` <a name="ResetHelpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpText"></a>

```go
func ResetHelpText()
```

##### `ResetHideThirdPartyOffers` <a name="ResetHideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHideThirdPartyOffers"></a>

```go
func ResetHideThirdPartyOffers()
```

##### `ResetHomePageUrl` <a name="ResetHomePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHomePageUrl"></a>

```go
func ResetHomePageUrl()
```

##### `ResetHousekeepingEnabled` <a name="ResetHousekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingEnabled"></a>

```go
func ResetHousekeepingEnabled()
```

##### `ResetHousekeepingFullRepackPeriod` <a name="ResetHousekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingFullRepackPeriod"></a>

```go
func ResetHousekeepingFullRepackPeriod()
```

##### `ResetHousekeepingGcPeriod` <a name="ResetHousekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingGcPeriod"></a>

```go
func ResetHousekeepingGcPeriod()
```

##### `ResetHousekeepingIncrementalRepackPeriod` <a name="ResetHousekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingIncrementalRepackPeriod"></a>

```go
func ResetHousekeepingIncrementalRepackPeriod()
```

##### `ResetHousekeepingOptimizeRepositoryPeriod` <a name="ResetHousekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingOptimizeRepositoryPeriod"></a>

```go
func ResetHousekeepingOptimizeRepositoryPeriod()
```

##### `ResetHtmlEmailsEnabled` <a name="ResetHtmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHtmlEmailsEnabled"></a>

```go
func ResetHtmlEmailsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetImportSources` <a name="ResetImportSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetImportSources"></a>

```go
func ResetImportSources()
```

##### `ResetInactiveProjectsDeleteAfterMonths` <a name="ResetInactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsDeleteAfterMonths"></a>

```go
func ResetInactiveProjectsDeleteAfterMonths()
```

##### `ResetInactiveProjectsMinSizeMb` <a name="ResetInactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsMinSizeMb"></a>

```go
func ResetInactiveProjectsMinSizeMb()
```

##### `ResetInactiveProjectsSendWarningEmailAfterMonths` <a name="ResetInactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsSendWarningEmailAfterMonths"></a>

```go
func ResetInactiveProjectsSendWarningEmailAfterMonths()
```

##### `ResetIncludeOptionalMetricsInServicePing` <a name="ResetIncludeOptionalMetricsInServicePing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIncludeOptionalMetricsInServicePing"></a>

```go
func ResetIncludeOptionalMetricsInServicePing()
```

##### `ResetInProductMarketingEmailsEnabled` <a name="ResetInProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled"></a>

```go
func ResetInProductMarketingEmailsEnabled()
```

##### `ResetInvisibleCaptchaEnabled` <a name="ResetInvisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled"></a>

```go
func ResetInvisibleCaptchaEnabled()
```

##### `ResetIssuesCreateLimit` <a name="ResetIssuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit"></a>

```go
func ResetIssuesCreateLimit()
```

##### `ResetJiraConnectApplicationKey` <a name="ResetJiraConnectApplicationKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectApplicationKey"></a>

```go
func ResetJiraConnectApplicationKey()
```

##### `ResetJiraConnectProxyUrl` <a name="ResetJiraConnectProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectProxyUrl"></a>

```go
func ResetJiraConnectProxyUrl()
```

##### `ResetJiraConnectPublicKeyStorageEnabled` <a name="ResetJiraConnectPublicKeyStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectPublicKeyStorageEnabled"></a>

```go
func ResetJiraConnectPublicKeyStorageEnabled()
```

##### `ResetKeepLatestArtifact` <a name="ResetKeepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact"></a>

```go
func ResetKeepLatestArtifact()
```

##### `ResetLocalMarkdownVersion` <a name="ResetLocalMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion"></a>

```go
func ResetLocalMarkdownVersion()
```

##### `ResetLockDuoFeaturesEnabled` <a name="ResetLockDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLockDuoFeaturesEnabled"></a>

```go
func ResetLockDuoFeaturesEnabled()
```

##### `ResetMailgunEventsEnabled` <a name="ResetMailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled"></a>

```go
func ResetMailgunEventsEnabled()
```

##### `ResetMailgunSigningKey` <a name="ResetMailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey"></a>

```go
func ResetMailgunSigningKey()
```

##### `ResetMaintenanceMode` <a name="ResetMaintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode"></a>

```go
func ResetMaintenanceMode()
```

##### `ResetMaintenanceModeMessage` <a name="ResetMaintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage"></a>

```go
func ResetMaintenanceModeMessage()
```

##### `ResetMavenPackageRequestsForwarding` <a name="ResetMavenPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMavenPackageRequestsForwarding"></a>

```go
func ResetMavenPackageRequestsForwarding()
```

##### `ResetMaxArtifactsSize` <a name="ResetMaxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize"></a>

```go
func ResetMaxArtifactsSize()
```

##### `ResetMaxAttachmentSize` <a name="ResetMaxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize"></a>

```go
func ResetMaxAttachmentSize()
```

##### `ResetMaxDecompressedArchiveSize` <a name="ResetMaxDecompressedArchiveSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxDecompressedArchiveSize"></a>

```go
func ResetMaxDecompressedArchiveSize()
```

##### `ResetMaxExportSize` <a name="ResetMaxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize"></a>

```go
func ResetMaxExportSize()
```

##### `ResetMaxImportRemoteFileSize` <a name="ResetMaxImportRemoteFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportRemoteFileSize"></a>

```go
func ResetMaxImportRemoteFileSize()
```

##### `ResetMaxImportSize` <a name="ResetMaxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize"></a>

```go
func ResetMaxImportSize()
```

##### `ResetMaxLoginAttempts` <a name="ResetMaxLoginAttempts" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxLoginAttempts"></a>

```go
func ResetMaxLoginAttempts()
```

##### `ResetMaxNumberOfRepositoryDownloads` <a name="ResetMaxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads"></a>

```go
func ResetMaxNumberOfRepositoryDownloads()
```

##### `ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod` <a name="ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```go
func ResetMaxNumberOfRepositoryDownloadsWithinTimePeriod()
```

##### `ResetMaxPagesSize` <a name="ResetMaxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize"></a>

```go
func ResetMaxPagesSize()
```

##### `ResetMaxPersonalAccessTokenLifetime` <a name="ResetMaxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime"></a>

```go
func ResetMaxPersonalAccessTokenLifetime()
```

##### `ResetMaxSshKeyLifetime` <a name="ResetMaxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime"></a>

```go
func ResetMaxSshKeyLifetime()
```

##### `ResetMaxTerraformStateSizeBytes` <a name="ResetMaxTerraformStateSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxTerraformStateSizeBytes"></a>

```go
func ResetMaxTerraformStateSizeBytes()
```

##### `ResetMetricsMethodCallThreshold` <a name="ResetMetricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold"></a>

```go
func ResetMetricsMethodCallThreshold()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMinimumPasswordLength"></a>

```go
func ResetMinimumPasswordLength()
```

##### `ResetMirrorAvailable` <a name="ResetMirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable"></a>

```go
func ResetMirrorAvailable()
```

##### `ResetMirrorCapacityThreshold` <a name="ResetMirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold"></a>

```go
func ResetMirrorCapacityThreshold()
```

##### `ResetMirrorMaxCapacity` <a name="ResetMirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity"></a>

```go
func ResetMirrorMaxCapacity()
```

##### `ResetMirrorMaxDelay` <a name="ResetMirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay"></a>

```go
func ResetMirrorMaxDelay()
```

##### `ResetNpmPackageRequestsForwarding` <a name="ResetNpmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding"></a>

```go
func ResetNpmPackageRequestsForwarding()
```

##### `ResetNugetSkipMetadataUrlValidation` <a name="ResetNugetSkipMetadataUrlValidation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNugetSkipMetadataUrlValidation"></a>

```go
func ResetNugetSkipMetadataUrlValidation()
```

##### `ResetOutboundLocalRequestsWhitelist` <a name="ResetOutboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist"></a>

```go
func ResetOutboundLocalRequestsWhitelist()
```

##### `ResetPackageMetadataPurlTypes` <a name="ResetPackageMetadataPurlTypes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageMetadataPurlTypes"></a>

```go
func ResetPackageMetadataPurlTypes()
```

##### `ResetPackageRegistryAllowAnyoneToPullOption` <a name="ResetPackageRegistryAllowAnyoneToPullOption" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryAllowAnyoneToPullOption"></a>

```go
func ResetPackageRegistryAllowAnyoneToPullOption()
```

##### `ResetPackageRegistryCleanupPoliciesWorkerCapacity` <a name="ResetPackageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryCleanupPoliciesWorkerCapacity"></a>

```go
func ResetPackageRegistryCleanupPoliciesWorkerCapacity()
```

##### `ResetPagesDomainVerificationEnabled` <a name="ResetPagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPagesDomainVerificationEnabled"></a>

```go
func ResetPagesDomainVerificationEnabled()
```

##### `ResetPasswordAuthenticationEnabledForGit` <a name="ResetPasswordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForGit"></a>

```go
func ResetPasswordAuthenticationEnabledForGit()
```

##### `ResetPasswordAuthenticationEnabledForWeb` <a name="ResetPasswordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForWeb"></a>

```go
func ResetPasswordAuthenticationEnabledForWeb()
```

##### `ResetPasswordLowercaseRequired` <a name="ResetPasswordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordLowercaseRequired"></a>

```go
func ResetPasswordLowercaseRequired()
```

##### `ResetPasswordNumberRequired` <a name="ResetPasswordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordNumberRequired"></a>

```go
func ResetPasswordNumberRequired()
```

##### `ResetPasswordSymbolRequired` <a name="ResetPasswordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordSymbolRequired"></a>

```go
func ResetPasswordSymbolRequired()
```

##### `ResetPasswordUppercaseRequired` <a name="ResetPasswordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordUppercaseRequired"></a>

```go
func ResetPasswordUppercaseRequired()
```

##### `ResetPerformanceBarAllowedGroupPath` <a name="ResetPerformanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPerformanceBarAllowedGroupPath"></a>

```go
func ResetPerformanceBarAllowedGroupPath()
```

##### `ResetPersonalAccessTokenPrefix` <a name="ResetPersonalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPersonalAccessTokenPrefix"></a>

```go
func ResetPersonalAccessTokenPrefix()
```

##### `ResetPipelineLimitPerProjectUserSha` <a name="ResetPipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPipelineLimitPerProjectUserSha"></a>

```go
func ResetPipelineLimitPerProjectUserSha()
```

##### `ResetPlantumlEnabled` <a name="ResetPlantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlEnabled"></a>

```go
func ResetPlantumlEnabled()
```

##### `ResetPlantumlUrl` <a name="ResetPlantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlUrl"></a>

```go
func ResetPlantumlUrl()
```

##### `ResetPollingIntervalMultiplier` <a name="ResetPollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPollingIntervalMultiplier"></a>

```go
func ResetPollingIntervalMultiplier()
```

##### `ResetProjectExportEnabled` <a name="ResetProjectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectExportEnabled"></a>

```go
func ResetProjectExportEnabled()
```

##### `ResetProjectJobsApiRateLimit` <a name="ResetProjectJobsApiRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectJobsApiRateLimit"></a>

```go
func ResetProjectJobsApiRateLimit()
```

##### `ResetProjectsApiRateLimitUnauthenticated` <a name="ResetProjectsApiRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectsApiRateLimitUnauthenticated"></a>

```go
func ResetProjectsApiRateLimitUnauthenticated()
```

##### `ResetPrometheusMetricsEnabled` <a name="ResetPrometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPrometheusMetricsEnabled"></a>

```go
func ResetPrometheusMetricsEnabled()
```

##### `ResetProtectedCiVariables` <a name="ResetProtectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProtectedCiVariables"></a>

```go
func ResetProtectedCiVariables()
```

##### `ResetPushEventActivitiesLimit` <a name="ResetPushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventActivitiesLimit"></a>

```go
func ResetPushEventActivitiesLimit()
```

##### `ResetPushEventHooksLimit` <a name="ResetPushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventHooksLimit"></a>

```go
func ResetPushEventHooksLimit()
```

##### `ResetPypiPackageRequestsForwarding` <a name="ResetPypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPypiPackageRequestsForwarding"></a>

```go
func ResetPypiPackageRequestsForwarding()
```

##### `ResetRateLimitingResponseText` <a name="ResetRateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRateLimitingResponseText"></a>

```go
func ResetRateLimitingResponseText()
```

##### `ResetRawBlobRequestLimit` <a name="ResetRawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRawBlobRequestLimit"></a>

```go
func ResetRawBlobRequestLimit()
```

##### `ResetRecaptchaEnabled` <a name="ResetRecaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaEnabled"></a>

```go
func ResetRecaptchaEnabled()
```

##### `ResetRecaptchaPrivateKey` <a name="ResetRecaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaPrivateKey"></a>

```go
func ResetRecaptchaPrivateKey()
```

##### `ResetRecaptchaSiteKey` <a name="ResetRecaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaSiteKey"></a>

```go
func ResetRecaptchaSiteKey()
```

##### `ResetReceiveMaxInputSize` <a name="ResetReceiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceiveMaxInputSize"></a>

```go
func ResetReceiveMaxInputSize()
```

##### `ResetReceptiveClusterAgentsEnabled` <a name="ResetReceptiveClusterAgentsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceptiveClusterAgentsEnabled"></a>

```go
func ResetReceptiveClusterAgentsEnabled()
```

##### `ResetRememberMeEnabled` <a name="ResetRememberMeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRememberMeEnabled"></a>

```go
func ResetRememberMeEnabled()
```

##### `ResetRepositoryChecksEnabled` <a name="ResetRepositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled"></a>

```go
func ResetRepositoryChecksEnabled()
```

##### `ResetRepositorySizeLimit` <a name="ResetRepositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit"></a>

```go
func ResetRepositorySizeLimit()
```

##### `ResetRepositoryStorages` <a name="ResetRepositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages"></a>

```go
func ResetRepositoryStorages()
```

##### `ResetRepositoryStoragesWeighted` <a name="ResetRepositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted"></a>

```go
func ResetRepositoryStoragesWeighted()
```

##### `ResetRequireAdminApprovalAfterUserSignup` <a name="ResetRequireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup"></a>

```go
func ResetRequireAdminApprovalAfterUserSignup()
```

##### `ResetRequireAdminTwoFactorAuthentication` <a name="ResetRequireAdminTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminTwoFactorAuthentication"></a>

```go
func ResetRequireAdminTwoFactorAuthentication()
```

##### `ResetRequirePersonalAccessTokenExpiry` <a name="ResetRequirePersonalAccessTokenExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequirePersonalAccessTokenExpiry"></a>

```go
func ResetRequirePersonalAccessTokenExpiry()
```

##### `ResetRequireTwoFactorAuthentication` <a name="ResetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication"></a>

```go
func ResetRequireTwoFactorAuthentication()
```

##### `ResetRestrictedVisibilityLevels` <a name="ResetRestrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels"></a>

```go
func ResetRestrictedVisibilityLevels()
```

##### `ResetRsaKeyRestriction` <a name="ResetRsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction"></a>

```go
func ResetRsaKeyRestriction()
```

##### `ResetSearchRateLimit` <a name="ResetSearchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit"></a>

```go
func ResetSearchRateLimit()
```

##### `ResetSearchRateLimitUnauthenticated` <a name="ResetSearchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated"></a>

```go
func ResetSearchRateLimitUnauthenticated()
```

##### `ResetSecurityApprovalPoliciesLimit` <a name="ResetSecurityApprovalPoliciesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityApprovalPoliciesLimit"></a>

```go
func ResetSecurityApprovalPoliciesLimit()
```

##### `ResetSecurityPolicyGlobalGroupApproversEnabled` <a name="ResetSecurityPolicyGlobalGroupApproversEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityPolicyGlobalGroupApproversEnabled"></a>

```go
func ResetSecurityPolicyGlobalGroupApproversEnabled()
```

##### `ResetSecurityTxtContent` <a name="ResetSecurityTxtContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityTxtContent"></a>

```go
func ResetSecurityTxtContent()
```

##### `ResetSendUserConfirmationEmail` <a name="ResetSendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail"></a>

```go
func ResetSendUserConfirmationEmail()
```

##### `ResetServiceAccessTokensExpirationEnforced` <a name="ResetServiceAccessTokensExpirationEnforced" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetServiceAccessTokensExpirationEnforced"></a>

```go
func ResetServiceAccessTokensExpirationEnforced()
```

##### `ResetSessionExpireDelay` <a name="ResetSessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay"></a>

```go
func ResetSessionExpireDelay()
```

##### `ResetSharedRunnersEnabled` <a name="ResetSharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled"></a>

```go
func ResetSharedRunnersEnabled()
```

##### `ResetSharedRunnersMinutes` <a name="ResetSharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes"></a>

```go
func ResetSharedRunnersMinutes()
```

##### `ResetSharedRunnersText` <a name="ResetSharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText"></a>

```go
func ResetSharedRunnersText()
```

##### `ResetSidekiqJobLimiterCompressionThresholdBytes` <a name="ResetSidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes"></a>

```go
func ResetSidekiqJobLimiterCompressionThresholdBytes()
```

##### `ResetSidekiqJobLimiterLimitBytes` <a name="ResetSidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes"></a>

```go
func ResetSidekiqJobLimiterLimitBytes()
```

##### `ResetSidekiqJobLimiterMode` <a name="ResetSidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode"></a>

```go
func ResetSidekiqJobLimiterMode()
```

##### `ResetSignInText` <a name="ResetSignInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText"></a>

```go
func ResetSignInText()
```

##### `ResetSignupEnabled` <a name="ResetSignupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled"></a>

```go
func ResetSignupEnabled()
```

##### `ResetSilentAdminExportsEnabled` <a name="ResetSilentAdminExportsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentAdminExportsEnabled"></a>

```go
func ResetSilentAdminExportsEnabled()
```

##### `ResetSilentModeEnabled` <a name="ResetSilentModeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentModeEnabled"></a>

```go
func ResetSilentModeEnabled()
```

##### `ResetSlackAppEnabled` <a name="ResetSlackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled"></a>

```go
func ResetSlackAppEnabled()
```

##### `ResetSlackAppId` <a name="ResetSlackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId"></a>

```go
func ResetSlackAppId()
```

##### `ResetSlackAppSecret` <a name="ResetSlackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret"></a>

```go
func ResetSlackAppSecret()
```

##### `ResetSlackAppSigningSecret` <a name="ResetSlackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret"></a>

```go
func ResetSlackAppSigningSecret()
```

##### `ResetSlackAppVerificationToken` <a name="ResetSlackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken"></a>

```go
func ResetSlackAppVerificationToken()
```

##### `ResetSnippetSizeLimit` <a name="ResetSnippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit"></a>

```go
func ResetSnippetSizeLimit()
```

##### `ResetSnowplowAppId` <a name="ResetSnowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId"></a>

```go
func ResetSnowplowAppId()
```

##### `ResetSnowplowCollectorHostname` <a name="ResetSnowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname"></a>

```go
func ResetSnowplowCollectorHostname()
```

##### `ResetSnowplowCookieDomain` <a name="ResetSnowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain"></a>

```go
func ResetSnowplowCookieDomain()
```

##### `ResetSnowplowDatabaseCollectorHostname` <a name="ResetSnowplowDatabaseCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowDatabaseCollectorHostname"></a>

```go
func ResetSnowplowDatabaseCollectorHostname()
```

##### `ResetSnowplowEnabled` <a name="ResetSnowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled"></a>

```go
func ResetSnowplowEnabled()
```

##### `ResetSourcegraphEnabled` <a name="ResetSourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled"></a>

```go
func ResetSourcegraphEnabled()
```

##### `ResetSourcegraphPublicOnly` <a name="ResetSourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly"></a>

```go
func ResetSourcegraphPublicOnly()
```

##### `ResetSourcegraphUrl` <a name="ResetSourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl"></a>

```go
func ResetSourcegraphUrl()
```

##### `ResetSpamCheckApiKey` <a name="ResetSpamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey"></a>

```go
func ResetSpamCheckApiKey()
```

##### `ResetSpamCheckEndpointEnabled` <a name="ResetSpamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled"></a>

```go
func ResetSpamCheckEndpointEnabled()
```

##### `ResetSpamCheckEndpointUrl` <a name="ResetSpamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl"></a>

```go
func ResetSpamCheckEndpointUrl()
```

##### `ResetStaticObjectsExternalStorageAuthToken` <a name="ResetStaticObjectsExternalStorageAuthToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageAuthToken"></a>

```go
func ResetStaticObjectsExternalStorageAuthToken()
```

##### `ResetStaticObjectsExternalStorageUrl` <a name="ResetStaticObjectsExternalStorageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageUrl"></a>

```go
func ResetStaticObjectsExternalStorageUrl()
```

##### `ResetSuggestPipelineEnabled` <a name="ResetSuggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSuggestPipelineEnabled"></a>

```go
func ResetSuggestPipelineEnabled()
```

##### `ResetTerminalMaxSessionTime` <a name="ResetTerminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerminalMaxSessionTime"></a>

```go
func ResetTerminalMaxSessionTime()
```

##### `ResetTerms` <a name="ResetTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerms"></a>

```go
func ResetTerms()
```

##### `ResetThrottleAuthenticatedApiEnabled` <a name="ResetThrottleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiEnabled"></a>

```go
func ResetThrottleAuthenticatedApiEnabled()
```

##### `ResetThrottleAuthenticatedApiPeriodInSeconds` <a name="ResetThrottleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiPeriodInSeconds"></a>

```go
func ResetThrottleAuthenticatedApiPeriodInSeconds()
```

##### `ResetThrottleAuthenticatedApiRequestsPerPeriod` <a name="ResetThrottleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiRequestsPerPeriod"></a>

```go
func ResetThrottleAuthenticatedApiRequestsPerPeriod()
```

##### `ResetThrottleAuthenticatedPackagesApiEnabled` <a name="ResetThrottleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiEnabled"></a>

```go
func ResetThrottleAuthenticatedPackagesApiEnabled()
```

##### `ResetThrottleAuthenticatedPackagesApiPeriodInSeconds` <a name="ResetThrottleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiPeriodInSeconds"></a>

```go
func ResetThrottleAuthenticatedPackagesApiPeriodInSeconds()
```

##### `ResetThrottleAuthenticatedPackagesApiRequestsPerPeriod` <a name="ResetThrottleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```go
func ResetThrottleAuthenticatedPackagesApiRequestsPerPeriod()
```

##### `ResetThrottleAuthenticatedWebEnabled` <a name="ResetThrottleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebEnabled"></a>

```go
func ResetThrottleAuthenticatedWebEnabled()
```

##### `ResetThrottleAuthenticatedWebPeriodInSeconds` <a name="ResetThrottleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebPeriodInSeconds"></a>

```go
func ResetThrottleAuthenticatedWebPeriodInSeconds()
```

##### `ResetThrottleAuthenticatedWebRequestsPerPeriod` <a name="ResetThrottleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebRequestsPerPeriod"></a>

```go
func ResetThrottleAuthenticatedWebRequestsPerPeriod()
```

##### `ResetThrottleUnauthenticatedApiEnabled` <a name="ResetThrottleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiEnabled"></a>

```go
func ResetThrottleUnauthenticatedApiEnabled()
```

##### `ResetThrottleUnauthenticatedApiPeriodInSeconds` <a name="ResetThrottleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiPeriodInSeconds"></a>

```go
func ResetThrottleUnauthenticatedApiPeriodInSeconds()
```

##### `ResetThrottleUnauthenticatedApiRequestsPerPeriod` <a name="ResetThrottleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiRequestsPerPeriod"></a>

```go
func ResetThrottleUnauthenticatedApiRequestsPerPeriod()
```

##### `ResetThrottleUnauthenticatedPackagesApiEnabled` <a name="ResetThrottleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiEnabled"></a>

```go
func ResetThrottleUnauthenticatedPackagesApiEnabled()
```

##### `ResetThrottleUnauthenticatedPackagesApiPeriodInSeconds` <a name="ResetThrottleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```go
func ResetThrottleUnauthenticatedPackagesApiPeriodInSeconds()
```

##### `ResetThrottleUnauthenticatedPackagesApiRequestsPerPeriod` <a name="ResetThrottleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```go
func ResetThrottleUnauthenticatedPackagesApiRequestsPerPeriod()
```

##### `ResetThrottleUnauthenticatedWebEnabled` <a name="ResetThrottleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebEnabled"></a>

```go
func ResetThrottleUnauthenticatedWebEnabled()
```

##### `ResetThrottleUnauthenticatedWebPeriodInSeconds` <a name="ResetThrottleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebPeriodInSeconds"></a>

```go
func ResetThrottleUnauthenticatedWebPeriodInSeconds()
```

##### `ResetThrottleUnauthenticatedWebRequestsPerPeriod` <a name="ResetThrottleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebRequestsPerPeriod"></a>

```go
func ResetThrottleUnauthenticatedWebRequestsPerPeriod()
```

##### `ResetTimeTrackingLimitToHours` <a name="ResetTimeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTimeTrackingLimitToHours"></a>

```go
func ResetTimeTrackingLimitToHours()
```

##### `ResetTwoFactorGracePeriod` <a name="ResetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTwoFactorGracePeriod"></a>

```go
func ResetTwoFactorGracePeriod()
```

##### `ResetUnconfirmedUsersDeleteAfterDays` <a name="ResetUnconfirmedUsersDeleteAfterDays" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUnconfirmedUsersDeleteAfterDays"></a>

```go
func ResetUnconfirmedUsersDeleteAfterDays()
```

##### `ResetUniqueIpsLimitEnabled` <a name="ResetUniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled"></a>

```go
func ResetUniqueIpsLimitEnabled()
```

##### `ResetUniqueIpsLimitPerUser` <a name="ResetUniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser"></a>

```go
func ResetUniqueIpsLimitPerUser()
```

##### `ResetUniqueIpsLimitTimeWindow` <a name="ResetUniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow"></a>

```go
func ResetUniqueIpsLimitTimeWindow()
```

##### `ResetUpdateRunnerVersionsEnabled` <a name="ResetUpdateRunnerVersionsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUpdateRunnerVersionsEnabled"></a>

```go
func ResetUpdateRunnerVersionsEnabled()
```

##### `ResetUsagePingEnabled` <a name="ResetUsagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled"></a>

```go
func ResetUsagePingEnabled()
```

##### `ResetUseClickhouseForAnalytics` <a name="ResetUseClickhouseForAnalytics" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUseClickhouseForAnalytics"></a>

```go
func ResetUseClickhouseForAnalytics()
```

##### `ResetUserDeactivationEmailsEnabled` <a name="ResetUserDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled"></a>

```go
func ResetUserDeactivationEmailsEnabled()
```

##### `ResetUserDefaultExternal` <a name="ResetUserDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal"></a>

```go
func ResetUserDefaultExternal()
```

##### `ResetUserDefaultInternalRegex` <a name="ResetUserDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex"></a>

```go
func ResetUserDefaultInternalRegex()
```

##### `ResetUserDefaultsToPrivateProfile` <a name="ResetUserDefaultsToPrivateProfile" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultsToPrivateProfile"></a>

```go
func ResetUserDefaultsToPrivateProfile()
```

##### `ResetUserOauthApplications` <a name="ResetUserOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications"></a>

```go
func ResetUserOauthApplications()
```

##### `ResetUserShowAddSshKeyMessage` <a name="ResetUserShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage"></a>

```go
func ResetUserShowAddSshKeyMessage()
```

##### `ResetValidRunnerRegistrars` <a name="ResetValidRunnerRegistrars" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetValidRunnerRegistrars"></a>

```go
func ResetValidRunnerRegistrars()
```

##### `ResetVersionCheckEnabled` <a name="ResetVersionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled"></a>

```go
func ResetVersionCheckEnabled()
```

##### `ResetWebIdeClientsidePreviewEnabled` <a name="ResetWebIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled"></a>

```go
func ResetWebIdeClientsidePreviewEnabled()
```

##### `ResetWhatsNewVariant` <a name="ResetWhatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant"></a>

```go
func ResetWhatsNewVariant()
```

##### `ResetWikiPageMaxContentBytes` <a name="ResetWikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes"></a>

```go
func ResetWikiPageMaxContentBytes()
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

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

applicationsettings.ApplicationSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

applicationsettings.ApplicationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

applicationsettings.ApplicationSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

applicationsettings.ApplicationSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApplicationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApplicationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaults">DefaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference">ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabDedicatedInstance">GitlabDedicatedInstance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabEnvironmentToolkitInstance">GitlabEnvironmentToolkitInstance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput">AbuseNotificationEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput">AdminModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput">AfterSignOutPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput">AfterSignUpTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput">AkismetApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput">AkismetEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletionInput">AllowAccountDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput">AllowGroupOwnersToManageLdapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput">AllowLocalRequestsFromSystemHooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput">AllowLocalRequestsFromWebHooksAndServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelowInput">AllowProjectCreationForGuestAndBelowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationTokenInput">AllowRunnerRegistrationTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput">ArchiveBuildsInHumanReadableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludesInput">AsciidocMaxIncludesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput">AssetProxyAllowlistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput">AssetProxyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput">AssetProxySecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput">AssetProxyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput">AuthorizedKeysEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownloadInput">AutoBanUserOnExcessiveProjectsDownloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput">AutoDevopsDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput">AutomaticPurchasedStorageAllocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimitInput">BulkImportConcurrentPipelineBatchLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabledInput">BulkImportEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSizeInput">BulkImportMaxDownloadFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput">CanCreateGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput">CheckNamespacePlanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludesInput">CiMaxIncludesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytesInput">CiMaxTotalYamlSizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput">CommitEmailHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimitInput">ConcurrentBitbucketImportJobsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimitInput">ConcurrentBitbucketServerImportJobsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimitInput">ConcurrentGithubImportJobsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput">ContainerExpirationPoliciesEnableHistoricEntriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput">ContainerRegistryCleanupTagsServiceMaxListSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput">ContainerRegistryDeleteTagsServiceTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput">ContainerRegistryExpirationPoliciesCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput">ContainerRegistryExpirationPoliciesWorkerCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput">ContainerRegistryTokenExpireDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput">DeactivateDormantUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriodInput">DeactivateDormantUsersPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeoutInput">DecompressArchiveFileTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput">DefaultArtifactsExpireInInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput">DefaultBranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaultsInput">DefaultBranchProtectionDefaultsInput</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput">DefaultBranchProtectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput">DefaultCiConfigPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput">DefaultGroupVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguageInput">DefaultPreferredLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput">DefaultProjectCreationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput">DefaultProjectsLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput">DefaultProjectVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput">DefaultSnippetVisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingThemeInput">DefaultSyntaxHighlightingThemeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput">DeleteInactiveProjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsersInput">DeleteUnconfirmedUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput">DeletionAdjournedPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabledInput">DiagramsnetEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrlInput">DiagramsnetUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput">DiffMaxFilesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput">DiffMaxLinesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput">DiffMaxPatchBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopesInput">DisableAdminOauthScopesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput">DisabledOauthSignInSourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput">DisableFeedTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokensInput">DisablePersonalAccessTokensInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput">DnsRebindingProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput">DomainAllowlistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput">DomainDenylistEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput">DomainDenylistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserShaInput">DownstreamPipelineTriggerLimitPerProjectUserShaInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput">DsaKeyRestrictionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabledInput">DuoFeaturesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput">EcdsaKeyRestrictionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput">EcdsaSkKeyRestrictionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput">Ed25519KeyRestrictionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput">Ed25519SkKeyRestrictionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput">EksAccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput">EksAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput">EksIntegrationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput">EksSecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput">ElasticsearchAwsAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput">ElasticsearchAwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput">ElasticsearchAwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput">ElasticsearchAwsSecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput">ElasticsearchIndexedFieldLengthLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput">ElasticsearchIndexedFileSizeLimitKbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput">ElasticsearchIndexingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput">ElasticsearchLimitIndexingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput">ElasticsearchMaxBulkConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput">ElasticsearchMaxBulkSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrencyInput">ElasticsearchMaxCodeIndexingConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput">ElasticsearchNamespaceIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput">ElasticsearchPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput">ElasticsearchProjectIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkersInput">ElasticsearchRequeueWorkersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput">ElasticsearchSearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput">ElasticsearchUrlInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput">ElasticsearchUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShardsInput">ElasticsearchWorkerNumberOfShardsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput">EmailAdditionalTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput">EmailAuthorInBodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSettingInput">EmailConfirmationSettingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPageInput">EnableArtifactExternalRedirectWarningPageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput">EnabledGitAccessProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput">EnforceNamespaceStorageLimitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput">EnforceTermsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput">ExternalAuthClientCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput">ExternalAuthClientKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput">ExternalAuthClientKeyPassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput">ExternalAuthorizationServiceDefaultLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput">ExternalAuthorizationServiceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput">ExternalAuthorizationServiceTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput">ExternalAuthorizationServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput">ExternalPipelineValidationServiceTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput">ExternalPipelineValidationServiceTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput">ExternalPipelineValidationServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutesInput">FailedLoginAttemptsUnlockPeriodInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput">FileTemplateProjectIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput">FirstDayOfWeekInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput">GeoNodeAllowedIpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput">GeoStatusTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput">GitalyTimeoutDefaultInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput">GitalyTimeoutFastInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput">GitalyTimeoutMediumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimitInput">GitlabShellOperationLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabledInput">GitpodEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrlInput">GitpodUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlistInput">GitRateLimitUsersAlertlistInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput">GitRateLimitUsersAllowlistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput">GitTwoFactorSessionExpiryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIpsInput">GloballyAllowedIpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput">GrafanaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput">GrafanaUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput">GravatarEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput">GroupOwnersCanManageDefaultBranchProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput">HashedStorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput">HelpPageHideCommercialContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput">HelpPageSupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput">HelpPageTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput">HelpTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput">HideThirdPartyOffersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput">HomePageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput">HousekeepingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput">HousekeepingFullRepackPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput">HousekeepingGcPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput">HousekeepingIncrementalRepackPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriodInput">HousekeepingOptimizeRepositoryPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput">HtmlEmailsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput">ImportSourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput">InactiveProjectsDeleteAfterMonthsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput">InactiveProjectsMinSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput">InactiveProjectsSendWarningEmailAfterMonthsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePingInput">IncludeOptionalMetricsInServicePingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput">InProductMarketingEmailsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput">InvisibleCaptchaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput">IssuesCreateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKeyInput">JiraConnectApplicationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrlInput">JiraConnectProxyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabledInput">JiraConnectPublicKeyStorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput">KeepLatestArtifactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput">LocalMarkdownVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabledInput">LockDuoFeaturesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput">MailgunEventsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput">MailgunSigningKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput">MaintenanceModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput">MaintenanceModeMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwardingInput">MavenPackageRequestsForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput">MaxArtifactsSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput">MaxAttachmentSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSizeInput">MaxDecompressedArchiveSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput">MaxExportSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSizeInput">MaxImportRemoteFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput">MaxImportSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttemptsInput">MaxLoginAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput">MaxNumberOfRepositoryDownloadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput">MaxNumberOfRepositoryDownloadsWithinTimePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput">MaxPagesSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput">MaxPersonalAccessTokenLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput">MaxSshKeyLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytesInput">MaxTerraformStateSizeBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput">MetricsMethodCallThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput">MirrorAvailableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput">MirrorCapacityThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput">MirrorMaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput">MirrorMaxDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput">NpmPackageRequestsForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidationInput">NugetSkipMetadataUrlValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput">OutboundLocalRequestsWhitelistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypesInput">PackageMetadataPurlTypesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOptionInput">PackageRegistryAllowAnyoneToPullOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput">PackageRegistryCleanupPoliciesWorkerCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput">PagesDomainVerificationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput">PasswordAuthenticationEnabledForGitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput">PasswordAuthenticationEnabledForWebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput">PasswordLowercaseRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput">PasswordNumberRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput">PasswordSymbolRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput">PasswordUppercaseRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput">PerformanceBarAllowedGroupPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput">PersonalAccessTokenPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput">PipelineLimitPerProjectUserShaInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput">PlantumlEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput">PlantumlUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput">PollingIntervalMultiplierInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput">ProjectExportEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimitInput">ProjectJobsApiRateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticatedInput">ProjectsApiRateLimitUnauthenticatedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput">PrometheusMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput">ProtectedCiVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput">PushEventActivitiesLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput">PushEventHooksLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput">PypiPackageRequestsForwardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput">RateLimitingResponseTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput">RawBlobRequestLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput">RecaptchaEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput">RecaptchaPrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput">RecaptchaSiteKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput">ReceiveMaxInputSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabledInput">ReceptiveClusterAgentsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabledInput">RememberMeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput">RepositoryChecksEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput">RepositorySizeLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput">RepositoryStoragesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput">RepositoryStoragesWeightedInput</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput">RequireAdminApprovalAfterUserSignupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthenticationInput">RequireAdminTwoFactorAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiryInput">RequirePersonalAccessTokenExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput">RequireTwoFactorAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput">RestrictedVisibilityLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput">RsaKeyRestrictionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput">SearchRateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput">SearchRateLimitUnauthenticatedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimitInput">SecurityApprovalPoliciesLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabledInput">SecurityPolicyGlobalGroupApproversEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContentInput">SecurityTxtContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput">SendUserConfirmationEmailInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforcedInput">ServiceAccessTokensExpirationEnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput">SessionExpireDelayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput">SharedRunnersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput">SharedRunnersMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput">SharedRunnersTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput">SidekiqJobLimiterCompressionThresholdBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput">SidekiqJobLimiterLimitBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput">SidekiqJobLimiterModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput">SignInTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput">SignupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabledInput">SilentAdminExportsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabledInput">SilentModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput">SlackAppEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput">SlackAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput">SlackAppSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput">SlackAppSigningSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput">SlackAppVerificationTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput">SnippetSizeLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput">SnowplowAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput">SnowplowCollectorHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput">SnowplowCookieDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostnameInput">SnowplowDatabaseCollectorHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput">SnowplowEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput">SourcegraphEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput">SourcegraphPublicOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput">SourcegraphUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput">SpamCheckApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput">SpamCheckEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput">SpamCheckEndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthTokenInput">StaticObjectsExternalStorageAuthTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrlInput">StaticObjectsExternalStorageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput">SuggestPipelineEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput">TerminalMaxSessionTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput">TermsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput">ThrottleAuthenticatedApiEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput">ThrottleAuthenticatedApiPeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput">ThrottleAuthenticatedApiRequestsPerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput">ThrottleAuthenticatedPackagesApiEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput">ThrottleAuthenticatedPackagesApiPeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput">ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput">ThrottleAuthenticatedWebEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput">ThrottleAuthenticatedWebPeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput">ThrottleAuthenticatedWebRequestsPerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput">ThrottleUnauthenticatedApiEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput">ThrottleUnauthenticatedApiPeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput">ThrottleUnauthenticatedApiRequestsPerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput">ThrottleUnauthenticatedPackagesApiEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput">ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput">ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput">ThrottleUnauthenticatedWebEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput">ThrottleUnauthenticatedWebPeriodInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput">ThrottleUnauthenticatedWebRequestsPerPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput">TimeTrackingLimitToHoursInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput">TwoFactorGracePeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDaysInput">UnconfirmedUsersDeleteAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput">UniqueIpsLimitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput">UniqueIpsLimitPerUserInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput">UniqueIpsLimitTimeWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabledInput">UpdateRunnerVersionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput">UsagePingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalyticsInput">UseClickhouseForAnalyticsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput">UserDeactivationEmailsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput">UserDefaultExternalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput">UserDefaultInternalRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfileInput">UserDefaultsToPrivateProfileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput">UserOauthApplicationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput">UserShowAddSshKeyMessageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrarsInput">ValidRunnerRegistrarsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput">VersionCheckEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput">WebIdeClientsidePreviewEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput">WhatsNewVariantInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput">WikiPageMaxContentBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail">AbuseNotificationEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode">AdminMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath">AfterSignOutPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText">AfterSignUpText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey">AkismetApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled">AkismetEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletion">AllowAccountDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap">AllowGroupOwnersToManageLdap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks">AllowLocalRequestsFromSystemHooks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices">AllowLocalRequestsFromWebHooksAndServices</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelow">AllowProjectCreationForGuestAndBelow</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationToken">AllowRunnerRegistrationToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable">ArchiveBuildsInHumanReadable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludes">AsciidocMaxIncludes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist">AssetProxyAllowlist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled">AssetProxyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey">AssetProxySecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl">AssetProxyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled">AuthorizedKeysEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownload">AutoBanUserOnExcessiveProjectsDownload</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain">AutoDevopsDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation">AutomaticPurchasedStorageAllocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimit">BulkImportConcurrentPipelineBatchLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabled">BulkImportEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSize">BulkImportMaxDownloadFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup">CanCreateGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan">CheckNamespacePlan</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludes">CiMaxIncludes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytes">CiMaxTotalYamlSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname">CommitEmailHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimit">ConcurrentBitbucketImportJobsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimit">ConcurrentBitbucketServerImportJobsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimit">ConcurrentGithubImportJobsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries">ContainerExpirationPoliciesEnableHistoricEntries</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize">ContainerRegistryCleanupTagsServiceMaxListSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout">ContainerRegistryDeleteTagsServiceTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching">ContainerRegistryExpirationPoliciesCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity">ContainerRegistryExpirationPoliciesWorkerCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay">ContainerRegistryTokenExpireDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers">DeactivateDormantUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriod">DeactivateDormantUsersPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeout">DecompressArchiveFileTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn">DefaultArtifactsExpireIn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName">DefaultBranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath">DefaultCiConfigPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility">DefaultGroupVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguage">DefaultPreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation">DefaultProjectCreation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit">DefaultProjectsLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility">DefaultProjectVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility">DefaultSnippetVisibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingTheme">DefaultSyntaxHighlightingTheme</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects">DeleteInactiveProjects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsers">DeleteUnconfirmedUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod">DeletionAdjournedPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabled">DiagramsnetEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrl">DiagramsnetUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles">DiffMaxFiles</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines">DiffMaxLines</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes">DiffMaxPatchBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopes">DisableAdminOauthScopes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources">DisabledOauthSignInSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken">DisableFeedToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokens">DisablePersonalAccessTokens</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled">DnsRebindingProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist">DomainAllowlist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist">DomainDenylist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled">DomainDenylistEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserSha">DownstreamPipelineTriggerLimitPerProjectUserSha</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction">DsaKeyRestriction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabled">DuoFeaturesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction">EcdsaKeyRestriction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction">EcdsaSkKeyRestriction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction">Ed25519KeyRestriction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction">Ed25519SkKeyRestriction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId">EksAccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId">EksAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled">EksIntegrationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey">EksSecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws">ElasticsearchAws</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey">ElasticsearchAwsAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion">ElasticsearchAwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey">ElasticsearchAwsSecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit">ElasticsearchIndexedFieldLengthLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb">ElasticsearchIndexedFileSizeLimitKb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing">ElasticsearchIndexing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing">ElasticsearchLimitIndexing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency">ElasticsearchMaxBulkConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb">ElasticsearchMaxBulkSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrency">ElasticsearchMaxCodeIndexingConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds">ElasticsearchNamespaceIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds">ElasticsearchProjectIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkers">ElasticsearchRequeueWorkers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch">ElasticsearchSearch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl">ElasticsearchUrl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername">ElasticsearchUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShards">ElasticsearchWorkerNumberOfShards</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText">EmailAdditionalText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody">EmailAuthorInBody</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSetting">EmailConfirmationSetting</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPage">EnableArtifactExternalRedirectWarningPage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol">EnabledGitAccessProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit">EnforceNamespaceStorageLimit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms">EnforceTerms</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert">ExternalAuthClientCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey">ExternalAuthClientKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass">ExternalAuthClientKeyPass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel">ExternalAuthorizationServiceDefaultLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled">ExternalAuthorizationServiceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout">ExternalAuthorizationServiceTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl">ExternalAuthorizationServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout">ExternalPipelineValidationServiceTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken">ExternalPipelineValidationServiceToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl">ExternalPipelineValidationServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutes">FailedLoginAttemptsUnlockPeriodInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId">FileTemplateProjectId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek">FirstDayOfWeek</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps">GeoNodeAllowedIps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout">GeoStatusTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault">GitalyTimeoutDefault</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast">GitalyTimeoutFast</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium">GitalyTimeoutMedium</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimit">GitlabShellOperationLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabled">GitpodEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrl">GitpodUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlist">GitRateLimitUsersAlertlist</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist">GitRateLimitUsersAllowlist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry">GitTwoFactorSessionExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIps">GloballyAllowedIps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled">GrafanaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl">GrafanaUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled">GravatarEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection">GroupOwnersCanManageDefaultBranchProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled">HashedStorageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent">HelpPageHideCommercialContent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl">HelpPageSupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText">HelpPageText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText">HelpText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers">HideThirdPartyOffers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl">HomePageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled">HousekeepingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod">HousekeepingFullRepackPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod">HousekeepingGcPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod">HousekeepingIncrementalRepackPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriod">HousekeepingOptimizeRepositoryPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled">HtmlEmailsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources">ImportSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths">InactiveProjectsDeleteAfterMonths</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb">InactiveProjectsMinSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths">InactiveProjectsSendWarningEmailAfterMonths</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePing">IncludeOptionalMetricsInServicePing</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled">InProductMarketingEmailsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled">InvisibleCaptchaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit">IssuesCreateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKey">JiraConnectApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrl">JiraConnectProxyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabled">JiraConnectPublicKeyStorageEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion">LocalMarkdownVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabled">LockDuoFeaturesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled">MailgunEventsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey">MailgunSigningKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode">MaintenanceMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage">MaintenanceModeMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwarding">MavenPackageRequestsForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize">MaxArtifactsSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize">MaxAttachmentSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSize">MaxDecompressedArchiveSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize">MaxExportSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSize">MaxImportRemoteFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize">MaxImportSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttempts">MaxLoginAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads">MaxNumberOfRepositoryDownloads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">MaxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize">MaxPagesSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime">MaxPersonalAccessTokenLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime">MaxSshKeyLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytes">MaxTerraformStateSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold">MetricsMethodCallThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable">MirrorAvailable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold">MirrorCapacityThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity">MirrorMaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay">MirrorMaxDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding">NpmPackageRequestsForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidation">NugetSkipMetadataUrlValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist">OutboundLocalRequestsWhitelist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypes">PackageMetadataPurlTypes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOption">PackageRegistryAllowAnyoneToPullOption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity">PackageRegistryCleanupPoliciesWorkerCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled">PagesDomainVerificationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit">PasswordAuthenticationEnabledForGit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb">PasswordAuthenticationEnabledForWeb</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired">PasswordLowercaseRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired">PasswordNumberRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired">PasswordSymbolRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired">PasswordUppercaseRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath">PerformanceBarAllowedGroupPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix">PersonalAccessTokenPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha">PipelineLimitPerProjectUserSha</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled">PlantumlEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl">PlantumlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier">PollingIntervalMultiplier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled">ProjectExportEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimit">ProjectJobsApiRateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticated">ProjectsApiRateLimitUnauthenticated</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled">PrometheusMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables">ProtectedCiVariables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit">PushEventActivitiesLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit">PushEventHooksLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding">PypiPackageRequestsForwarding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText">RateLimitingResponseText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit">RawBlobRequestLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled">RecaptchaEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey">RecaptchaPrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey">RecaptchaSiteKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize">ReceiveMaxInputSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabled">ReceptiveClusterAgentsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabled">RememberMeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled">RepositoryChecksEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit">RepositorySizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages">RepositoryStorages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted">RepositoryStoragesWeighted</a></code> | <code>*map[string]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup">RequireAdminApprovalAfterUserSignup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthentication">RequireAdminTwoFactorAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiry">RequirePersonalAccessTokenExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels">RestrictedVisibilityLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction">RsaKeyRestriction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit">SearchRateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated">SearchRateLimitUnauthenticated</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimit">SecurityApprovalPoliciesLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabled">SecurityPolicyGlobalGroupApproversEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContent">SecurityTxtContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail">SendUserConfirmationEmail</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforced">ServiceAccessTokensExpirationEnforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay">SessionExpireDelay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes">SharedRunnersMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText">SharedRunnersText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes">SidekiqJobLimiterCompressionThresholdBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes">SidekiqJobLimiterLimitBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode">SidekiqJobLimiterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText">SignInText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled">SignupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabled">SilentAdminExportsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabled">SilentModeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled">SlackAppEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId">SlackAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret">SlackAppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret">SlackAppSigningSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken">SlackAppVerificationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit">SnippetSizeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId">SnowplowAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname">SnowplowCollectorHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain">SnowplowCookieDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostname">SnowplowDatabaseCollectorHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled">SnowplowEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled">SourcegraphEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly">SourcegraphPublicOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl">SourcegraphUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey">SpamCheckApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled">SpamCheckEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl">SpamCheckEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthToken">StaticObjectsExternalStorageAuthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrl">StaticObjectsExternalStorageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled">SuggestPipelineEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime">TerminalMaxSessionTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms">Terms</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled">ThrottleAuthenticatedApiEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds">ThrottleAuthenticatedApiPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod">ThrottleAuthenticatedApiRequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled">ThrottleAuthenticatedPackagesApiEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds">ThrottleAuthenticatedPackagesApiPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">ThrottleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled">ThrottleAuthenticatedWebEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds">ThrottleAuthenticatedWebPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod">ThrottleAuthenticatedWebRequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled">ThrottleUnauthenticatedApiEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds">ThrottleUnauthenticatedApiPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod">ThrottleUnauthenticatedApiRequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled">ThrottleUnauthenticatedPackagesApiEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">ThrottleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">ThrottleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled">ThrottleUnauthenticatedWebEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds">ThrottleUnauthenticatedWebPeriodInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod">ThrottleUnauthenticatedWebRequestsPerPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours">TimeTrackingLimitToHours</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDays">UnconfirmedUsersDeleteAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled">UniqueIpsLimitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser">UniqueIpsLimitPerUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow">UniqueIpsLimitTimeWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabled">UpdateRunnerVersionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled">UsagePingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalytics">UseClickhouseForAnalytics</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled">UserDeactivationEmailsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal">UserDefaultExternal</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex">UserDefaultInternalRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfile">UserDefaultsToPrivateProfile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications">UserOauthApplications</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage">UserShowAddSshKeyMessage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrars">ValidRunnerRegistrars</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled">VersionCheckEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled">WebIdeClientsidePreviewEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant">WhatsNewVariant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes">WikiPageMaxContentBytes</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultBranchProtectionDefaults`<sup>Required</sup> <a name="DefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaults"></a>

```go
func DefaultBranchProtectionDefaults() ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference">ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference</a>

---

##### `GitlabDedicatedInstance`<sup>Required</sup> <a name="GitlabDedicatedInstance" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabDedicatedInstance"></a>

```go
func GitlabDedicatedInstance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GitlabEnvironmentToolkitInstance`<sup>Required</sup> <a name="GitlabEnvironmentToolkitInstance" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabEnvironmentToolkitInstance"></a>

```go
func GitlabEnvironmentToolkitInstance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AbuseNotificationEmailInput`<sup>Optional</sup> <a name="AbuseNotificationEmailInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput"></a>

```go
func AbuseNotificationEmailInput() *string
```

- *Type:* *string

---

##### `AdminModeInput`<sup>Optional</sup> <a name="AdminModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput"></a>

```go
func AdminModeInput() interface{}
```

- *Type:* interface{}

---

##### `AfterSignOutPathInput`<sup>Optional</sup> <a name="AfterSignOutPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput"></a>

```go
func AfterSignOutPathInput() *string
```

- *Type:* *string

---

##### `AfterSignUpTextInput`<sup>Optional</sup> <a name="AfterSignUpTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput"></a>

```go
func AfterSignUpTextInput() *string
```

- *Type:* *string

---

##### `AkismetApiKeyInput`<sup>Optional</sup> <a name="AkismetApiKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput"></a>

```go
func AkismetApiKeyInput() *string
```

- *Type:* *string

---

##### `AkismetEnabledInput`<sup>Optional</sup> <a name="AkismetEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput"></a>

```go
func AkismetEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AllowAccountDeletionInput`<sup>Optional</sup> <a name="AllowAccountDeletionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletionInput"></a>

```go
func AllowAccountDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowGroupOwnersToManageLdapInput`<sup>Optional</sup> <a name="AllowGroupOwnersToManageLdapInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput"></a>

```go
func AllowGroupOwnersToManageLdapInput() interface{}
```

- *Type:* interface{}

---

##### `AllowLocalRequestsFromSystemHooksInput`<sup>Optional</sup> <a name="AllowLocalRequestsFromSystemHooksInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput"></a>

```go
func AllowLocalRequestsFromSystemHooksInput() interface{}
```

- *Type:* interface{}

---

##### `AllowLocalRequestsFromWebHooksAndServicesInput`<sup>Optional</sup> <a name="AllowLocalRequestsFromWebHooksAndServicesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput"></a>

```go
func AllowLocalRequestsFromWebHooksAndServicesInput() interface{}
```

- *Type:* interface{}

---

##### `AllowProjectCreationForGuestAndBelowInput`<sup>Optional</sup> <a name="AllowProjectCreationForGuestAndBelowInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelowInput"></a>

```go
func AllowProjectCreationForGuestAndBelowInput() interface{}
```

- *Type:* interface{}

---

##### `AllowRunnerRegistrationTokenInput`<sup>Optional</sup> <a name="AllowRunnerRegistrationTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationTokenInput"></a>

```go
func AllowRunnerRegistrationTokenInput() interface{}
```

- *Type:* interface{}

---

##### `ArchiveBuildsInHumanReadableInput`<sup>Optional</sup> <a name="ArchiveBuildsInHumanReadableInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput"></a>

```go
func ArchiveBuildsInHumanReadableInput() *string
```

- *Type:* *string

---

##### `AsciidocMaxIncludesInput`<sup>Optional</sup> <a name="AsciidocMaxIncludesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludesInput"></a>

```go
func AsciidocMaxIncludesInput() *f64
```

- *Type:* *f64

---

##### `AssetProxyAllowlistInput`<sup>Optional</sup> <a name="AssetProxyAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput"></a>

```go
func AssetProxyAllowlistInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssetProxyEnabledInput`<sup>Optional</sup> <a name="AssetProxyEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput"></a>

```go
func AssetProxyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AssetProxySecretKeyInput`<sup>Optional</sup> <a name="AssetProxySecretKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput"></a>

```go
func AssetProxySecretKeyInput() *string
```

- *Type:* *string

---

##### `AssetProxyUrlInput`<sup>Optional</sup> <a name="AssetProxyUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput"></a>

```go
func AssetProxyUrlInput() *string
```

- *Type:* *string

---

##### `AuthorizedKeysEnabledInput`<sup>Optional</sup> <a name="AuthorizedKeysEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput"></a>

```go
func AuthorizedKeysEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoBanUserOnExcessiveProjectsDownloadInput`<sup>Optional</sup> <a name="AutoBanUserOnExcessiveProjectsDownloadInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownloadInput"></a>

```go
func AutoBanUserOnExcessiveProjectsDownloadInput() interface{}
```

- *Type:* interface{}

---

##### `AutoDevopsDomainInput`<sup>Optional</sup> <a name="AutoDevopsDomainInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput"></a>

```go
func AutoDevopsDomainInput() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabledInput`<sup>Optional</sup> <a name="AutoDevopsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput"></a>

```go
func AutoDevopsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutomaticPurchasedStorageAllocationInput`<sup>Optional</sup> <a name="AutomaticPurchasedStorageAllocationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput"></a>

```go
func AutomaticPurchasedStorageAllocationInput() interface{}
```

- *Type:* interface{}

---

##### `BulkImportConcurrentPipelineBatchLimitInput`<sup>Optional</sup> <a name="BulkImportConcurrentPipelineBatchLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimitInput"></a>

```go
func BulkImportConcurrentPipelineBatchLimitInput() *f64
```

- *Type:* *f64

---

##### `BulkImportEnabledInput`<sup>Optional</sup> <a name="BulkImportEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabledInput"></a>

```go
func BulkImportEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BulkImportMaxDownloadFileSizeInput`<sup>Optional</sup> <a name="BulkImportMaxDownloadFileSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSizeInput"></a>

```go
func BulkImportMaxDownloadFileSizeInput() *f64
```

- *Type:* *f64

---

##### `CanCreateGroupInput`<sup>Optional</sup> <a name="CanCreateGroupInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput"></a>

```go
func CanCreateGroupInput() interface{}
```

- *Type:* interface{}

---

##### `CheckNamespacePlanInput`<sup>Optional</sup> <a name="CheckNamespacePlanInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput"></a>

```go
func CheckNamespacePlanInput() interface{}
```

- *Type:* interface{}

---

##### `CiMaxIncludesInput`<sup>Optional</sup> <a name="CiMaxIncludesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludesInput"></a>

```go
func CiMaxIncludesInput() *f64
```

- *Type:* *f64

---

##### `CiMaxTotalYamlSizeBytesInput`<sup>Optional</sup> <a name="CiMaxTotalYamlSizeBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytesInput"></a>

```go
func CiMaxTotalYamlSizeBytesInput() *f64
```

- *Type:* *f64

---

##### `CommitEmailHostnameInput`<sup>Optional</sup> <a name="CommitEmailHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput"></a>

```go
func CommitEmailHostnameInput() *string
```

- *Type:* *string

---

##### `ConcurrentBitbucketImportJobsLimitInput`<sup>Optional</sup> <a name="ConcurrentBitbucketImportJobsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimitInput"></a>

```go
func ConcurrentBitbucketImportJobsLimitInput() *f64
```

- *Type:* *f64

---

##### `ConcurrentBitbucketServerImportJobsLimitInput`<sup>Optional</sup> <a name="ConcurrentBitbucketServerImportJobsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimitInput"></a>

```go
func ConcurrentBitbucketServerImportJobsLimitInput() *f64
```

- *Type:* *f64

---

##### `ConcurrentGithubImportJobsLimitInput`<sup>Optional</sup> <a name="ConcurrentGithubImportJobsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimitInput"></a>

```go
func ConcurrentGithubImportJobsLimitInput() *f64
```

- *Type:* *f64

---

##### `ContainerExpirationPoliciesEnableHistoricEntriesInput`<sup>Optional</sup> <a name="ContainerExpirationPoliciesEnableHistoricEntriesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput"></a>

```go
func ContainerExpirationPoliciesEnableHistoricEntriesInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryCleanupTagsServiceMaxListSizeInput`<sup>Optional</sup> <a name="ContainerRegistryCleanupTagsServiceMaxListSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput"></a>

```go
func ContainerRegistryCleanupTagsServiceMaxListSizeInput() *f64
```

- *Type:* *f64

---

##### `ContainerRegistryDeleteTagsServiceTimeoutInput`<sup>Optional</sup> <a name="ContainerRegistryDeleteTagsServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput"></a>

```go
func ContainerRegistryDeleteTagsServiceTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ContainerRegistryExpirationPoliciesCachingInput`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesCachingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput"></a>

```go
func ContainerRegistryExpirationPoliciesCachingInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryExpirationPoliciesWorkerCapacityInput`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesWorkerCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput"></a>

```go
func ContainerRegistryExpirationPoliciesWorkerCapacityInput() *f64
```

- *Type:* *f64

---

##### `ContainerRegistryTokenExpireDelayInput`<sup>Optional</sup> <a name="ContainerRegistryTokenExpireDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput"></a>

```go
func ContainerRegistryTokenExpireDelayInput() *f64
```

- *Type:* *f64

---

##### `DeactivateDormantUsersInput`<sup>Optional</sup> <a name="DeactivateDormantUsersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput"></a>

```go
func DeactivateDormantUsersInput() interface{}
```

- *Type:* interface{}

---

##### `DeactivateDormantUsersPeriodInput`<sup>Optional</sup> <a name="DeactivateDormantUsersPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriodInput"></a>

```go
func DeactivateDormantUsersPeriodInput() *f64
```

- *Type:* *f64

---

##### `DecompressArchiveFileTimeoutInput`<sup>Optional</sup> <a name="DecompressArchiveFileTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeoutInput"></a>

```go
func DecompressArchiveFileTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DefaultArtifactsExpireInInput`<sup>Optional</sup> <a name="DefaultArtifactsExpireInInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput"></a>

```go
func DefaultArtifactsExpireInInput() *string
```

- *Type:* *string

---

##### `DefaultBranchNameInput`<sup>Optional</sup> <a name="DefaultBranchNameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput"></a>

```go
func DefaultBranchNameInput() *string
```

- *Type:* *string

---

##### `DefaultBranchProtectionDefaultsInput`<sup>Optional</sup> <a name="DefaultBranchProtectionDefaultsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaultsInput"></a>

```go
func DefaultBranchProtectionDefaultsInput() ApplicationSettingsDefaultBranchProtectionDefaults
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

---

##### `DefaultBranchProtectionInput`<sup>Optional</sup> <a name="DefaultBranchProtectionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput"></a>

```go
func DefaultBranchProtectionInput() *f64
```

- *Type:* *f64

---

##### `DefaultCiConfigPathInput`<sup>Optional</sup> <a name="DefaultCiConfigPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput"></a>

```go
func DefaultCiConfigPathInput() *string
```

- *Type:* *string

---

##### `DefaultGroupVisibilityInput`<sup>Optional</sup> <a name="DefaultGroupVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput"></a>

```go
func DefaultGroupVisibilityInput() *string
```

- *Type:* *string

---

##### `DefaultPreferredLanguageInput`<sup>Optional</sup> <a name="DefaultPreferredLanguageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguageInput"></a>

```go
func DefaultPreferredLanguageInput() *string
```

- *Type:* *string

---

##### `DefaultProjectCreationInput`<sup>Optional</sup> <a name="DefaultProjectCreationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput"></a>

```go
func DefaultProjectCreationInput() *f64
```

- *Type:* *f64

---

##### `DefaultProjectsLimitInput`<sup>Optional</sup> <a name="DefaultProjectsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput"></a>

```go
func DefaultProjectsLimitInput() *f64
```

- *Type:* *f64

---

##### `DefaultProjectVisibilityInput`<sup>Optional</sup> <a name="DefaultProjectVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput"></a>

```go
func DefaultProjectVisibilityInput() *string
```

- *Type:* *string

---

##### `DefaultSnippetVisibilityInput`<sup>Optional</sup> <a name="DefaultSnippetVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput"></a>

```go
func DefaultSnippetVisibilityInput() *string
```

- *Type:* *string

---

##### `DefaultSyntaxHighlightingThemeInput`<sup>Optional</sup> <a name="DefaultSyntaxHighlightingThemeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingThemeInput"></a>

```go
func DefaultSyntaxHighlightingThemeInput() *f64
```

- *Type:* *f64

---

##### `DeleteInactiveProjectsInput`<sup>Optional</sup> <a name="DeleteInactiveProjectsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput"></a>

```go
func DeleteInactiveProjectsInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteUnconfirmedUsersInput`<sup>Optional</sup> <a name="DeleteUnconfirmedUsersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsersInput"></a>

```go
func DeleteUnconfirmedUsersInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionAdjournedPeriodInput`<sup>Optional</sup> <a name="DeletionAdjournedPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput"></a>

```go
func DeletionAdjournedPeriodInput() *f64
```

- *Type:* *f64

---

##### `DiagramsnetEnabledInput`<sup>Optional</sup> <a name="DiagramsnetEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabledInput"></a>

```go
func DiagramsnetEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DiagramsnetUrlInput`<sup>Optional</sup> <a name="DiagramsnetUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrlInput"></a>

```go
func DiagramsnetUrlInput() *string
```

- *Type:* *string

---

##### `DiffMaxFilesInput`<sup>Optional</sup> <a name="DiffMaxFilesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput"></a>

```go
func DiffMaxFilesInput() *f64
```

- *Type:* *f64

---

##### `DiffMaxLinesInput`<sup>Optional</sup> <a name="DiffMaxLinesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput"></a>

```go
func DiffMaxLinesInput() *f64
```

- *Type:* *f64

---

##### `DiffMaxPatchBytesInput`<sup>Optional</sup> <a name="DiffMaxPatchBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput"></a>

```go
func DiffMaxPatchBytesInput() *f64
```

- *Type:* *f64

---

##### `DisableAdminOauthScopesInput`<sup>Optional</sup> <a name="DisableAdminOauthScopesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopesInput"></a>

```go
func DisableAdminOauthScopesInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledOauthSignInSourcesInput`<sup>Optional</sup> <a name="DisabledOauthSignInSourcesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput"></a>

```go
func DisabledOauthSignInSourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisableFeedTokenInput`<sup>Optional</sup> <a name="DisableFeedTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput"></a>

```go
func DisableFeedTokenInput() interface{}
```

- *Type:* interface{}

---

##### `DisablePersonalAccessTokensInput`<sup>Optional</sup> <a name="DisablePersonalAccessTokensInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokensInput"></a>

```go
func DisablePersonalAccessTokensInput() interface{}
```

- *Type:* interface{}

---

##### `DnsRebindingProtectionEnabledInput`<sup>Optional</sup> <a name="DnsRebindingProtectionEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput"></a>

```go
func DnsRebindingProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DomainAllowlistInput`<sup>Optional</sup> <a name="DomainAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput"></a>

```go
func DomainAllowlistInput() *[]*string
```

- *Type:* *[]*string

---

##### `DomainDenylistEnabledInput`<sup>Optional</sup> <a name="DomainDenylistEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput"></a>

```go
func DomainDenylistEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DomainDenylistInput`<sup>Optional</sup> <a name="DomainDenylistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput"></a>

```go
func DomainDenylistInput() *[]*string
```

- *Type:* *[]*string

---

##### `DownstreamPipelineTriggerLimitPerProjectUserShaInput`<sup>Optional</sup> <a name="DownstreamPipelineTriggerLimitPerProjectUserShaInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserShaInput"></a>

```go
func DownstreamPipelineTriggerLimitPerProjectUserShaInput() *f64
```

- *Type:* *f64

---

##### `DsaKeyRestrictionInput`<sup>Optional</sup> <a name="DsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput"></a>

```go
func DsaKeyRestrictionInput() *f64
```

- *Type:* *f64

---

##### `DuoFeaturesEnabledInput`<sup>Optional</sup> <a name="DuoFeaturesEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabledInput"></a>

```go
func DuoFeaturesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EcdsaKeyRestrictionInput`<sup>Optional</sup> <a name="EcdsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput"></a>

```go
func EcdsaKeyRestrictionInput() *f64
```

- *Type:* *f64

---

##### `EcdsaSkKeyRestrictionInput`<sup>Optional</sup> <a name="EcdsaSkKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput"></a>

```go
func EcdsaSkKeyRestrictionInput() *f64
```

- *Type:* *f64

---

##### `Ed25519KeyRestrictionInput`<sup>Optional</sup> <a name="Ed25519KeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput"></a>

```go
func Ed25519KeyRestrictionInput() *f64
```

- *Type:* *f64

---

##### `Ed25519SkKeyRestrictionInput`<sup>Optional</sup> <a name="Ed25519SkKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput"></a>

```go
func Ed25519SkKeyRestrictionInput() *f64
```

- *Type:* *f64

---

##### `EksAccessKeyIdInput`<sup>Optional</sup> <a name="EksAccessKeyIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput"></a>

```go
func EksAccessKeyIdInput() *string
```

- *Type:* *string

---

##### `EksAccountIdInput`<sup>Optional</sup> <a name="EksAccountIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput"></a>

```go
func EksAccountIdInput() *string
```

- *Type:* *string

---

##### `EksIntegrationEnabledInput`<sup>Optional</sup> <a name="EksIntegrationEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput"></a>

```go
func EksIntegrationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EksSecretAccessKeyInput`<sup>Optional</sup> <a name="EksSecretAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput"></a>

```go
func EksSecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `ElasticsearchAwsAccessKeyInput`<sup>Optional</sup> <a name="ElasticsearchAwsAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput"></a>

```go
func ElasticsearchAwsAccessKeyInput() *string
```

- *Type:* *string

---

##### `ElasticsearchAwsInput`<sup>Optional</sup> <a name="ElasticsearchAwsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput"></a>

```go
func ElasticsearchAwsInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchAwsRegionInput`<sup>Optional</sup> <a name="ElasticsearchAwsRegionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput"></a>

```go
func ElasticsearchAwsRegionInput() *string
```

- *Type:* *string

---

##### `ElasticsearchAwsSecretAccessKeyInput`<sup>Optional</sup> <a name="ElasticsearchAwsSecretAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput"></a>

```go
func ElasticsearchAwsSecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `ElasticsearchIndexedFieldLengthLimitInput`<sup>Optional</sup> <a name="ElasticsearchIndexedFieldLengthLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput"></a>

```go
func ElasticsearchIndexedFieldLengthLimitInput() *f64
```

- *Type:* *f64

---

##### `ElasticsearchIndexedFileSizeLimitKbInput`<sup>Optional</sup> <a name="ElasticsearchIndexedFileSizeLimitKbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput"></a>

```go
func ElasticsearchIndexedFileSizeLimitKbInput() *f64
```

- *Type:* *f64

---

##### `ElasticsearchIndexingInput`<sup>Optional</sup> <a name="ElasticsearchIndexingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput"></a>

```go
func ElasticsearchIndexingInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchLimitIndexingInput`<sup>Optional</sup> <a name="ElasticsearchLimitIndexingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput"></a>

```go
func ElasticsearchLimitIndexingInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchMaxBulkConcurrencyInput`<sup>Optional</sup> <a name="ElasticsearchMaxBulkConcurrencyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput"></a>

```go
func ElasticsearchMaxBulkConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `ElasticsearchMaxBulkSizeMbInput`<sup>Optional</sup> <a name="ElasticsearchMaxBulkSizeMbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput"></a>

```go
func ElasticsearchMaxBulkSizeMbInput() *f64
```

- *Type:* *f64

---

##### `ElasticsearchMaxCodeIndexingConcurrencyInput`<sup>Optional</sup> <a name="ElasticsearchMaxCodeIndexingConcurrencyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrencyInput"></a>

```go
func ElasticsearchMaxCodeIndexingConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `ElasticsearchNamespaceIdsInput`<sup>Optional</sup> <a name="ElasticsearchNamespaceIdsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput"></a>

```go
func ElasticsearchNamespaceIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ElasticsearchPasswordInput`<sup>Optional</sup> <a name="ElasticsearchPasswordInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput"></a>

```go
func ElasticsearchPasswordInput() *string
```

- *Type:* *string

---

##### `ElasticsearchProjectIdsInput`<sup>Optional</sup> <a name="ElasticsearchProjectIdsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput"></a>

```go
func ElasticsearchProjectIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ElasticsearchRequeueWorkersInput`<sup>Optional</sup> <a name="ElasticsearchRequeueWorkersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkersInput"></a>

```go
func ElasticsearchRequeueWorkersInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchSearchInput`<sup>Optional</sup> <a name="ElasticsearchSearchInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput"></a>

```go
func ElasticsearchSearchInput() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchUrlInput`<sup>Optional</sup> <a name="ElasticsearchUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput"></a>

```go
func ElasticsearchUrlInput() *[]*string
```

- *Type:* *[]*string

---

##### `ElasticsearchUsernameInput`<sup>Optional</sup> <a name="ElasticsearchUsernameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput"></a>

```go
func ElasticsearchUsernameInput() *string
```

- *Type:* *string

---

##### `ElasticsearchWorkerNumberOfShardsInput`<sup>Optional</sup> <a name="ElasticsearchWorkerNumberOfShardsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShardsInput"></a>

```go
func ElasticsearchWorkerNumberOfShardsInput() *f64
```

- *Type:* *f64

---

##### `EmailAdditionalTextInput`<sup>Optional</sup> <a name="EmailAdditionalTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput"></a>

```go
func EmailAdditionalTextInput() *string
```

- *Type:* *string

---

##### `EmailAuthorInBodyInput`<sup>Optional</sup> <a name="EmailAuthorInBodyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput"></a>

```go
func EmailAuthorInBodyInput() interface{}
```

- *Type:* interface{}

---

##### `EmailConfirmationSettingInput`<sup>Optional</sup> <a name="EmailConfirmationSettingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSettingInput"></a>

```go
func EmailConfirmationSettingInput() *string
```

- *Type:* *string

---

##### `EnableArtifactExternalRedirectWarningPageInput`<sup>Optional</sup> <a name="EnableArtifactExternalRedirectWarningPageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPageInput"></a>

```go
func EnableArtifactExternalRedirectWarningPageInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledGitAccessProtocolInput`<sup>Optional</sup> <a name="EnabledGitAccessProtocolInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput"></a>

```go
func EnabledGitAccessProtocolInput() *string
```

- *Type:* *string

---

##### `EnforceNamespaceStorageLimitInput`<sup>Optional</sup> <a name="EnforceNamespaceStorageLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput"></a>

```go
func EnforceNamespaceStorageLimitInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceTermsInput`<sup>Optional</sup> <a name="EnforceTermsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput"></a>

```go
func EnforceTermsInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalAuthClientCertInput`<sup>Optional</sup> <a name="ExternalAuthClientCertInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput"></a>

```go
func ExternalAuthClientCertInput() *string
```

- *Type:* *string

---

##### `ExternalAuthClientKeyInput`<sup>Optional</sup> <a name="ExternalAuthClientKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput"></a>

```go
func ExternalAuthClientKeyInput() *string
```

- *Type:* *string

---

##### `ExternalAuthClientKeyPassInput`<sup>Optional</sup> <a name="ExternalAuthClientKeyPassInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput"></a>

```go
func ExternalAuthClientKeyPassInput() *string
```

- *Type:* *string

---

##### `ExternalAuthorizationServiceDefaultLabelInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceDefaultLabelInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput"></a>

```go
func ExternalAuthorizationServiceDefaultLabelInput() *string
```

- *Type:* *string

---

##### `ExternalAuthorizationServiceEnabledInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput"></a>

```go
func ExternalAuthorizationServiceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalAuthorizationServiceTimeoutInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput"></a>

```go
func ExternalAuthorizationServiceTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ExternalAuthorizationServiceUrlInput`<sup>Optional</sup> <a name="ExternalAuthorizationServiceUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput"></a>

```go
func ExternalAuthorizationServiceUrlInput() *string
```

- *Type:* *string

---

##### `ExternalPipelineValidationServiceTimeoutInput`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput"></a>

```go
func ExternalPipelineValidationServiceTimeoutInput() *f64
```

- *Type:* *f64

---

##### `ExternalPipelineValidationServiceTokenInput`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput"></a>

```go
func ExternalPipelineValidationServiceTokenInput() *string
```

- *Type:* *string

---

##### `ExternalPipelineValidationServiceUrlInput`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput"></a>

```go
func ExternalPipelineValidationServiceUrlInput() *string
```

- *Type:* *string

---

##### `FailedLoginAttemptsUnlockPeriodInMinutesInput`<sup>Optional</sup> <a name="FailedLoginAttemptsUnlockPeriodInMinutesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutesInput"></a>

```go
func FailedLoginAttemptsUnlockPeriodInMinutesInput() *f64
```

- *Type:* *f64

---

##### `FileTemplateProjectIdInput`<sup>Optional</sup> <a name="FileTemplateProjectIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput"></a>

```go
func FileTemplateProjectIdInput() *f64
```

- *Type:* *f64

---

##### `FirstDayOfWeekInput`<sup>Optional</sup> <a name="FirstDayOfWeekInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput"></a>

```go
func FirstDayOfWeekInput() *f64
```

- *Type:* *f64

---

##### `GeoNodeAllowedIpsInput`<sup>Optional</sup> <a name="GeoNodeAllowedIpsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput"></a>

```go
func GeoNodeAllowedIpsInput() *string
```

- *Type:* *string

---

##### `GeoStatusTimeoutInput`<sup>Optional</sup> <a name="GeoStatusTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput"></a>

```go
func GeoStatusTimeoutInput() *f64
```

- *Type:* *f64

---

##### `GitalyTimeoutDefaultInput`<sup>Optional</sup> <a name="GitalyTimeoutDefaultInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput"></a>

```go
func GitalyTimeoutDefaultInput() *f64
```

- *Type:* *f64

---

##### `GitalyTimeoutFastInput`<sup>Optional</sup> <a name="GitalyTimeoutFastInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput"></a>

```go
func GitalyTimeoutFastInput() *f64
```

- *Type:* *f64

---

##### `GitalyTimeoutMediumInput`<sup>Optional</sup> <a name="GitalyTimeoutMediumInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput"></a>

```go
func GitalyTimeoutMediumInput() *f64
```

- *Type:* *f64

---

##### `GitlabShellOperationLimitInput`<sup>Optional</sup> <a name="GitlabShellOperationLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimitInput"></a>

```go
func GitlabShellOperationLimitInput() *f64
```

- *Type:* *f64

---

##### `GitpodEnabledInput`<sup>Optional</sup> <a name="GitpodEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabledInput"></a>

```go
func GitpodEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GitpodUrlInput`<sup>Optional</sup> <a name="GitpodUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrlInput"></a>

```go
func GitpodUrlInput() *string
```

- *Type:* *string

---

##### `GitRateLimitUsersAlertlistInput`<sup>Optional</sup> <a name="GitRateLimitUsersAlertlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlistInput"></a>

```go
func GitRateLimitUsersAlertlistInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `GitRateLimitUsersAllowlistInput`<sup>Optional</sup> <a name="GitRateLimitUsersAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput"></a>

```go
func GitRateLimitUsersAllowlistInput() *[]*string
```

- *Type:* *[]*string

---

##### `GitTwoFactorSessionExpiryInput`<sup>Optional</sup> <a name="GitTwoFactorSessionExpiryInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput"></a>

```go
func GitTwoFactorSessionExpiryInput() *f64
```

- *Type:* *f64

---

##### `GloballyAllowedIpsInput`<sup>Optional</sup> <a name="GloballyAllowedIpsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIpsInput"></a>

```go
func GloballyAllowedIpsInput() *string
```

- *Type:* *string

---

##### `GrafanaEnabledInput`<sup>Optional</sup> <a name="GrafanaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput"></a>

```go
func GrafanaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GrafanaUrlInput`<sup>Optional</sup> <a name="GrafanaUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput"></a>

```go
func GrafanaUrlInput() *string
```

- *Type:* *string

---

##### `GravatarEnabledInput`<sup>Optional</sup> <a name="GravatarEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput"></a>

```go
func GravatarEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupOwnersCanManageDefaultBranchProtectionInput`<sup>Optional</sup> <a name="GroupOwnersCanManageDefaultBranchProtectionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput"></a>

```go
func GroupOwnersCanManageDefaultBranchProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `HashedStorageEnabledInput`<sup>Optional</sup> <a name="HashedStorageEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput"></a>

```go
func HashedStorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HelpPageHideCommercialContentInput`<sup>Optional</sup> <a name="HelpPageHideCommercialContentInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput"></a>

```go
func HelpPageHideCommercialContentInput() interface{}
```

- *Type:* interface{}

---

##### `HelpPageSupportUrlInput`<sup>Optional</sup> <a name="HelpPageSupportUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput"></a>

```go
func HelpPageSupportUrlInput() *string
```

- *Type:* *string

---

##### `HelpPageTextInput`<sup>Optional</sup> <a name="HelpPageTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput"></a>

```go
func HelpPageTextInput() *string
```

- *Type:* *string

---

##### `HelpTextInput`<sup>Optional</sup> <a name="HelpTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput"></a>

```go
func HelpTextInput() *string
```

- *Type:* *string

---

##### `HideThirdPartyOffersInput`<sup>Optional</sup> <a name="HideThirdPartyOffersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput"></a>

```go
func HideThirdPartyOffersInput() interface{}
```

- *Type:* interface{}

---

##### `HomePageUrlInput`<sup>Optional</sup> <a name="HomePageUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput"></a>

```go
func HomePageUrlInput() *string
```

- *Type:* *string

---

##### `HousekeepingEnabledInput`<sup>Optional</sup> <a name="HousekeepingEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput"></a>

```go
func HousekeepingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HousekeepingFullRepackPeriodInput`<sup>Optional</sup> <a name="HousekeepingFullRepackPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput"></a>

```go
func HousekeepingFullRepackPeriodInput() *f64
```

- *Type:* *f64

---

##### `HousekeepingGcPeriodInput`<sup>Optional</sup> <a name="HousekeepingGcPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput"></a>

```go
func HousekeepingGcPeriodInput() *f64
```

- *Type:* *f64

---

##### `HousekeepingIncrementalRepackPeriodInput`<sup>Optional</sup> <a name="HousekeepingIncrementalRepackPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput"></a>

```go
func HousekeepingIncrementalRepackPeriodInput() *f64
```

- *Type:* *f64

---

##### `HousekeepingOptimizeRepositoryPeriodInput`<sup>Optional</sup> <a name="HousekeepingOptimizeRepositoryPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriodInput"></a>

```go
func HousekeepingOptimizeRepositoryPeriodInput() *f64
```

- *Type:* *f64

---

##### `HtmlEmailsEnabledInput`<sup>Optional</sup> <a name="HtmlEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput"></a>

```go
func HtmlEmailsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportSourcesInput`<sup>Optional</sup> <a name="ImportSourcesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput"></a>

```go
func ImportSourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `InactiveProjectsDeleteAfterMonthsInput`<sup>Optional</sup> <a name="InactiveProjectsDeleteAfterMonthsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput"></a>

```go
func InactiveProjectsDeleteAfterMonthsInput() *f64
```

- *Type:* *f64

---

##### `InactiveProjectsMinSizeMbInput`<sup>Optional</sup> <a name="InactiveProjectsMinSizeMbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput"></a>

```go
func InactiveProjectsMinSizeMbInput() *f64
```

- *Type:* *f64

---

##### `InactiveProjectsSendWarningEmailAfterMonthsInput`<sup>Optional</sup> <a name="InactiveProjectsSendWarningEmailAfterMonthsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput"></a>

```go
func InactiveProjectsSendWarningEmailAfterMonthsInput() *f64
```

- *Type:* *f64

---

##### `IncludeOptionalMetricsInServicePingInput`<sup>Optional</sup> <a name="IncludeOptionalMetricsInServicePingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePingInput"></a>

```go
func IncludeOptionalMetricsInServicePingInput() interface{}
```

- *Type:* interface{}

---

##### `InProductMarketingEmailsEnabledInput`<sup>Optional</sup> <a name="InProductMarketingEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput"></a>

```go
func InProductMarketingEmailsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `InvisibleCaptchaEnabledInput`<sup>Optional</sup> <a name="InvisibleCaptchaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput"></a>

```go
func InvisibleCaptchaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IssuesCreateLimitInput`<sup>Optional</sup> <a name="IssuesCreateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput"></a>

```go
func IssuesCreateLimitInput() *f64
```

- *Type:* *f64

---

##### `JiraConnectApplicationKeyInput`<sup>Optional</sup> <a name="JiraConnectApplicationKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKeyInput"></a>

```go
func JiraConnectApplicationKeyInput() *string
```

- *Type:* *string

---

##### `JiraConnectProxyUrlInput`<sup>Optional</sup> <a name="JiraConnectProxyUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrlInput"></a>

```go
func JiraConnectProxyUrlInput() *string
```

- *Type:* *string

---

##### `JiraConnectPublicKeyStorageEnabledInput`<sup>Optional</sup> <a name="JiraConnectPublicKeyStorageEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabledInput"></a>

```go
func JiraConnectPublicKeyStorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeepLatestArtifactInput`<sup>Optional</sup> <a name="KeepLatestArtifactInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput"></a>

```go
func KeepLatestArtifactInput() interface{}
```

- *Type:* interface{}

---

##### `LocalMarkdownVersionInput`<sup>Optional</sup> <a name="LocalMarkdownVersionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput"></a>

```go
func LocalMarkdownVersionInput() *f64
```

- *Type:* *f64

---

##### `LockDuoFeaturesEnabledInput`<sup>Optional</sup> <a name="LockDuoFeaturesEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabledInput"></a>

```go
func LockDuoFeaturesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MailgunEventsEnabledInput`<sup>Optional</sup> <a name="MailgunEventsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput"></a>

```go
func MailgunEventsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MailgunSigningKeyInput`<sup>Optional</sup> <a name="MailgunSigningKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput"></a>

```go
func MailgunSigningKeyInput() *string
```

- *Type:* *string

---

##### `MaintenanceModeInput`<sup>Optional</sup> <a name="MaintenanceModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput"></a>

```go
func MaintenanceModeInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceModeMessageInput`<sup>Optional</sup> <a name="MaintenanceModeMessageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput"></a>

```go
func MaintenanceModeMessageInput() *string
```

- *Type:* *string

---

##### `MavenPackageRequestsForwardingInput`<sup>Optional</sup> <a name="MavenPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwardingInput"></a>

```go
func MavenPackageRequestsForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `MaxArtifactsSizeInput`<sup>Optional</sup> <a name="MaxArtifactsSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput"></a>

```go
func MaxArtifactsSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxAttachmentSizeInput`<sup>Optional</sup> <a name="MaxAttachmentSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput"></a>

```go
func MaxAttachmentSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxDecompressedArchiveSizeInput`<sup>Optional</sup> <a name="MaxDecompressedArchiveSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSizeInput"></a>

```go
func MaxDecompressedArchiveSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxExportSizeInput`<sup>Optional</sup> <a name="MaxExportSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput"></a>

```go
func MaxExportSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxImportRemoteFileSizeInput`<sup>Optional</sup> <a name="MaxImportRemoteFileSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSizeInput"></a>

```go
func MaxImportRemoteFileSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxImportSizeInput`<sup>Optional</sup> <a name="MaxImportSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput"></a>

```go
func MaxImportSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxLoginAttemptsInput`<sup>Optional</sup> <a name="MaxLoginAttemptsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttemptsInput"></a>

```go
func MaxLoginAttemptsInput() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfRepositoryDownloadsInput`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloadsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput"></a>

```go
func MaxNumberOfRepositoryDownloadsInput() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfRepositoryDownloadsWithinTimePeriodInput`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloadsWithinTimePeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput"></a>

```go
func MaxNumberOfRepositoryDownloadsWithinTimePeriodInput() *f64
```

- *Type:* *f64

---

##### `MaxPagesSizeInput`<sup>Optional</sup> <a name="MaxPagesSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput"></a>

```go
func MaxPagesSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxPersonalAccessTokenLifetimeInput`<sup>Optional</sup> <a name="MaxPersonalAccessTokenLifetimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput"></a>

```go
func MaxPersonalAccessTokenLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxSshKeyLifetimeInput`<sup>Optional</sup> <a name="MaxSshKeyLifetimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput"></a>

```go
func MaxSshKeyLifetimeInput() *f64
```

- *Type:* *f64

---

##### `MaxTerraformStateSizeBytesInput`<sup>Optional</sup> <a name="MaxTerraformStateSizeBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytesInput"></a>

```go
func MaxTerraformStateSizeBytesInput() *f64
```

- *Type:* *f64

---

##### `MetricsMethodCallThresholdInput`<sup>Optional</sup> <a name="MetricsMethodCallThresholdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput"></a>

```go
func MetricsMethodCallThresholdInput() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLengthInput"></a>

```go
func MinimumPasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `MirrorAvailableInput`<sup>Optional</sup> <a name="MirrorAvailableInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput"></a>

```go
func MirrorAvailableInput() interface{}
```

- *Type:* interface{}

---

##### `MirrorCapacityThresholdInput`<sup>Optional</sup> <a name="MirrorCapacityThresholdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput"></a>

```go
func MirrorCapacityThresholdInput() *f64
```

- *Type:* *f64

---

##### `MirrorMaxCapacityInput`<sup>Optional</sup> <a name="MirrorMaxCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput"></a>

```go
func MirrorMaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MirrorMaxDelayInput`<sup>Optional</sup> <a name="MirrorMaxDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput"></a>

```go
func MirrorMaxDelayInput() *f64
```

- *Type:* *f64

---

##### `NpmPackageRequestsForwardingInput`<sup>Optional</sup> <a name="NpmPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput"></a>

```go
func NpmPackageRequestsForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `NugetSkipMetadataUrlValidationInput`<sup>Optional</sup> <a name="NugetSkipMetadataUrlValidationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidationInput"></a>

```go
func NugetSkipMetadataUrlValidationInput() interface{}
```

- *Type:* interface{}

---

##### `OutboundLocalRequestsWhitelistInput`<sup>Optional</sup> <a name="OutboundLocalRequestsWhitelistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput"></a>

```go
func OutboundLocalRequestsWhitelistInput() *[]*string
```

- *Type:* *[]*string

---

##### `PackageMetadataPurlTypesInput`<sup>Optional</sup> <a name="PackageMetadataPurlTypesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypesInput"></a>

```go
func PackageMetadataPurlTypesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PackageRegistryAllowAnyoneToPullOptionInput`<sup>Optional</sup> <a name="PackageRegistryAllowAnyoneToPullOptionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOptionInput"></a>

```go
func PackageRegistryAllowAnyoneToPullOptionInput() interface{}
```

- *Type:* interface{}

---

##### `PackageRegistryCleanupPoliciesWorkerCapacityInput`<sup>Optional</sup> <a name="PackageRegistryCleanupPoliciesWorkerCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput"></a>

```go
func PackageRegistryCleanupPoliciesWorkerCapacityInput() *f64
```

- *Type:* *f64

---

##### `PagesDomainVerificationEnabledInput`<sup>Optional</sup> <a name="PagesDomainVerificationEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput"></a>

```go
func PagesDomainVerificationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordAuthenticationEnabledForGitInput`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForGitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput"></a>

```go
func PasswordAuthenticationEnabledForGitInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordAuthenticationEnabledForWebInput`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForWebInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput"></a>

```go
func PasswordAuthenticationEnabledForWebInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordLowercaseRequiredInput`<sup>Optional</sup> <a name="PasswordLowercaseRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput"></a>

```go
func PasswordLowercaseRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordNumberRequiredInput`<sup>Optional</sup> <a name="PasswordNumberRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput"></a>

```go
func PasswordNumberRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordSymbolRequiredInput`<sup>Optional</sup> <a name="PasswordSymbolRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput"></a>

```go
func PasswordSymbolRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordUppercaseRequiredInput`<sup>Optional</sup> <a name="PasswordUppercaseRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput"></a>

```go
func PasswordUppercaseRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceBarAllowedGroupPathInput`<sup>Optional</sup> <a name="PerformanceBarAllowedGroupPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput"></a>

```go
func PerformanceBarAllowedGroupPathInput() *string
```

- *Type:* *string

---

##### `PersonalAccessTokenPrefixInput`<sup>Optional</sup> <a name="PersonalAccessTokenPrefixInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput"></a>

```go
func PersonalAccessTokenPrefixInput() *string
```

- *Type:* *string

---

##### `PipelineLimitPerProjectUserShaInput`<sup>Optional</sup> <a name="PipelineLimitPerProjectUserShaInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput"></a>

```go
func PipelineLimitPerProjectUserShaInput() *f64
```

- *Type:* *f64

---

##### `PlantumlEnabledInput`<sup>Optional</sup> <a name="PlantumlEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput"></a>

```go
func PlantumlEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PlantumlUrlInput`<sup>Optional</sup> <a name="PlantumlUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput"></a>

```go
func PlantumlUrlInput() *string
```

- *Type:* *string

---

##### `PollingIntervalMultiplierInput`<sup>Optional</sup> <a name="PollingIntervalMultiplierInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput"></a>

```go
func PollingIntervalMultiplierInput() *f64
```

- *Type:* *f64

---

##### `ProjectExportEnabledInput`<sup>Optional</sup> <a name="ProjectExportEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput"></a>

```go
func ProjectExportEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectJobsApiRateLimitInput`<sup>Optional</sup> <a name="ProjectJobsApiRateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimitInput"></a>

```go
func ProjectJobsApiRateLimitInput() *f64
```

- *Type:* *f64

---

##### `ProjectsApiRateLimitUnauthenticatedInput`<sup>Optional</sup> <a name="ProjectsApiRateLimitUnauthenticatedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticatedInput"></a>

```go
func ProjectsApiRateLimitUnauthenticatedInput() *f64
```

- *Type:* *f64

---

##### `PrometheusMetricsEnabledInput`<sup>Optional</sup> <a name="PrometheusMetricsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput"></a>

```go
func PrometheusMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ProtectedCiVariablesInput`<sup>Optional</sup> <a name="ProtectedCiVariablesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput"></a>

```go
func ProtectedCiVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `PushEventActivitiesLimitInput`<sup>Optional</sup> <a name="PushEventActivitiesLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput"></a>

```go
func PushEventActivitiesLimitInput() *f64
```

- *Type:* *f64

---

##### `PushEventHooksLimitInput`<sup>Optional</sup> <a name="PushEventHooksLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput"></a>

```go
func PushEventHooksLimitInput() *f64
```

- *Type:* *f64

---

##### `PypiPackageRequestsForwardingInput`<sup>Optional</sup> <a name="PypiPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput"></a>

```go
func PypiPackageRequestsForwardingInput() interface{}
```

- *Type:* interface{}

---

##### `RateLimitingResponseTextInput`<sup>Optional</sup> <a name="RateLimitingResponseTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput"></a>

```go
func RateLimitingResponseTextInput() *string
```

- *Type:* *string

---

##### `RawBlobRequestLimitInput`<sup>Optional</sup> <a name="RawBlobRequestLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput"></a>

```go
func RawBlobRequestLimitInput() *f64
```

- *Type:* *f64

---

##### `RecaptchaEnabledInput`<sup>Optional</sup> <a name="RecaptchaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput"></a>

```go
func RecaptchaEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RecaptchaPrivateKeyInput`<sup>Optional</sup> <a name="RecaptchaPrivateKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput"></a>

```go
func RecaptchaPrivateKeyInput() *string
```

- *Type:* *string

---

##### `RecaptchaSiteKeyInput`<sup>Optional</sup> <a name="RecaptchaSiteKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput"></a>

```go
func RecaptchaSiteKeyInput() *string
```

- *Type:* *string

---

##### `ReceiveMaxInputSizeInput`<sup>Optional</sup> <a name="ReceiveMaxInputSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput"></a>

```go
func ReceiveMaxInputSizeInput() *f64
```

- *Type:* *f64

---

##### `ReceptiveClusterAgentsEnabledInput`<sup>Optional</sup> <a name="ReceptiveClusterAgentsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabledInput"></a>

```go
func ReceptiveClusterAgentsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RememberMeEnabledInput`<sup>Optional</sup> <a name="RememberMeEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabledInput"></a>

```go
func RememberMeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryChecksEnabledInput`<sup>Optional</sup> <a name="RepositoryChecksEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput"></a>

```go
func RepositoryChecksEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RepositorySizeLimitInput`<sup>Optional</sup> <a name="RepositorySizeLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput"></a>

```go
func RepositorySizeLimitInput() *f64
```

- *Type:* *f64

---

##### `RepositoryStoragesInput`<sup>Optional</sup> <a name="RepositoryStoragesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput"></a>

```go
func RepositoryStoragesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryStoragesWeightedInput`<sup>Optional</sup> <a name="RepositoryStoragesWeightedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput"></a>

```go
func RepositoryStoragesWeightedInput() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `RequireAdminApprovalAfterUserSignupInput`<sup>Optional</sup> <a name="RequireAdminApprovalAfterUserSignupInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput"></a>

```go
func RequireAdminApprovalAfterUserSignupInput() interface{}
```

- *Type:* interface{}

---

##### `RequireAdminTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="RequireAdminTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthenticationInput"></a>

```go
func RequireAdminTwoFactorAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `RequirePersonalAccessTokenExpiryInput`<sup>Optional</sup> <a name="RequirePersonalAccessTokenExpiryInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiryInput"></a>

```go
func RequirePersonalAccessTokenExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `RequireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="RequireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput"></a>

```go
func RequireTwoFactorAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictedVisibilityLevelsInput`<sup>Optional</sup> <a name="RestrictedVisibilityLevelsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput"></a>

```go
func RestrictedVisibilityLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RsaKeyRestrictionInput`<sup>Optional</sup> <a name="RsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput"></a>

```go
func RsaKeyRestrictionInput() *f64
```

- *Type:* *f64

---

##### `SearchRateLimitInput`<sup>Optional</sup> <a name="SearchRateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput"></a>

```go
func SearchRateLimitInput() *f64
```

- *Type:* *f64

---

##### `SearchRateLimitUnauthenticatedInput`<sup>Optional</sup> <a name="SearchRateLimitUnauthenticatedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput"></a>

```go
func SearchRateLimitUnauthenticatedInput() *f64
```

- *Type:* *f64

---

##### `SecurityApprovalPoliciesLimitInput`<sup>Optional</sup> <a name="SecurityApprovalPoliciesLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimitInput"></a>

```go
func SecurityApprovalPoliciesLimitInput() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyGlobalGroupApproversEnabledInput`<sup>Optional</sup> <a name="SecurityPolicyGlobalGroupApproversEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabledInput"></a>

```go
func SecurityPolicyGlobalGroupApproversEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityTxtContentInput`<sup>Optional</sup> <a name="SecurityTxtContentInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContentInput"></a>

```go
func SecurityTxtContentInput() *string
```

- *Type:* *string

---

##### `SendUserConfirmationEmailInput`<sup>Optional</sup> <a name="SendUserConfirmationEmailInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput"></a>

```go
func SendUserConfirmationEmailInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccessTokensExpirationEnforcedInput`<sup>Optional</sup> <a name="ServiceAccessTokensExpirationEnforcedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforcedInput"></a>

```go
func ServiceAccessTokensExpirationEnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `SessionExpireDelayInput`<sup>Optional</sup> <a name="SessionExpireDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput"></a>

```go
func SessionExpireDelayInput() *f64
```

- *Type:* *f64

---

##### `SharedRunnersEnabledInput`<sup>Optional</sup> <a name="SharedRunnersEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput"></a>

```go
func SharedRunnersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SharedRunnersMinutesInput`<sup>Optional</sup> <a name="SharedRunnersMinutesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput"></a>

```go
func SharedRunnersMinutesInput() *f64
```

- *Type:* *f64

---

##### `SharedRunnersTextInput`<sup>Optional</sup> <a name="SharedRunnersTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput"></a>

```go
func SharedRunnersTextInput() *string
```

- *Type:* *string

---

##### `SidekiqJobLimiterCompressionThresholdBytesInput`<sup>Optional</sup> <a name="SidekiqJobLimiterCompressionThresholdBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput"></a>

```go
func SidekiqJobLimiterCompressionThresholdBytesInput() *f64
```

- *Type:* *f64

---

##### `SidekiqJobLimiterLimitBytesInput`<sup>Optional</sup> <a name="SidekiqJobLimiterLimitBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput"></a>

```go
func SidekiqJobLimiterLimitBytesInput() *f64
```

- *Type:* *f64

---

##### `SidekiqJobLimiterModeInput`<sup>Optional</sup> <a name="SidekiqJobLimiterModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput"></a>

```go
func SidekiqJobLimiterModeInput() *string
```

- *Type:* *string

---

##### `SignInTextInput`<sup>Optional</sup> <a name="SignInTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput"></a>

```go
func SignInTextInput() *string
```

- *Type:* *string

---

##### `SignupEnabledInput`<sup>Optional</sup> <a name="SignupEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput"></a>

```go
func SignupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SilentAdminExportsEnabledInput`<sup>Optional</sup> <a name="SilentAdminExportsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabledInput"></a>

```go
func SilentAdminExportsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SilentModeEnabledInput`<sup>Optional</sup> <a name="SilentModeEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabledInput"></a>

```go
func SilentModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SlackAppEnabledInput`<sup>Optional</sup> <a name="SlackAppEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput"></a>

```go
func SlackAppEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SlackAppIdInput`<sup>Optional</sup> <a name="SlackAppIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput"></a>

```go
func SlackAppIdInput() *string
```

- *Type:* *string

---

##### `SlackAppSecretInput`<sup>Optional</sup> <a name="SlackAppSecretInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput"></a>

```go
func SlackAppSecretInput() *string
```

- *Type:* *string

---

##### `SlackAppSigningSecretInput`<sup>Optional</sup> <a name="SlackAppSigningSecretInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput"></a>

```go
func SlackAppSigningSecretInput() *string
```

- *Type:* *string

---

##### `SlackAppVerificationTokenInput`<sup>Optional</sup> <a name="SlackAppVerificationTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput"></a>

```go
func SlackAppVerificationTokenInput() *string
```

- *Type:* *string

---

##### `SnippetSizeLimitInput`<sup>Optional</sup> <a name="SnippetSizeLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput"></a>

```go
func SnippetSizeLimitInput() *f64
```

- *Type:* *f64

---

##### `SnowplowAppIdInput`<sup>Optional</sup> <a name="SnowplowAppIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput"></a>

```go
func SnowplowAppIdInput() *string
```

- *Type:* *string

---

##### `SnowplowCollectorHostnameInput`<sup>Optional</sup> <a name="SnowplowCollectorHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput"></a>

```go
func SnowplowCollectorHostnameInput() *string
```

- *Type:* *string

---

##### `SnowplowCookieDomainInput`<sup>Optional</sup> <a name="SnowplowCookieDomainInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput"></a>

```go
func SnowplowCookieDomainInput() *string
```

- *Type:* *string

---

##### `SnowplowDatabaseCollectorHostnameInput`<sup>Optional</sup> <a name="SnowplowDatabaseCollectorHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostnameInput"></a>

```go
func SnowplowDatabaseCollectorHostnameInput() *string
```

- *Type:* *string

---

##### `SnowplowEnabledInput`<sup>Optional</sup> <a name="SnowplowEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput"></a>

```go
func SnowplowEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SourcegraphEnabledInput`<sup>Optional</sup> <a name="SourcegraphEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput"></a>

```go
func SourcegraphEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SourcegraphPublicOnlyInput`<sup>Optional</sup> <a name="SourcegraphPublicOnlyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput"></a>

```go
func SourcegraphPublicOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `SourcegraphUrlInput`<sup>Optional</sup> <a name="SourcegraphUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput"></a>

```go
func SourcegraphUrlInput() *string
```

- *Type:* *string

---

##### `SpamCheckApiKeyInput`<sup>Optional</sup> <a name="SpamCheckApiKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput"></a>

```go
func SpamCheckApiKeyInput() *string
```

- *Type:* *string

---

##### `SpamCheckEndpointEnabledInput`<sup>Optional</sup> <a name="SpamCheckEndpointEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput"></a>

```go
func SpamCheckEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SpamCheckEndpointUrlInput`<sup>Optional</sup> <a name="SpamCheckEndpointUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput"></a>

```go
func SpamCheckEndpointUrlInput() *string
```

- *Type:* *string

---

##### `StaticObjectsExternalStorageAuthTokenInput`<sup>Optional</sup> <a name="StaticObjectsExternalStorageAuthTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthTokenInput"></a>

```go
func StaticObjectsExternalStorageAuthTokenInput() *string
```

- *Type:* *string

---

##### `StaticObjectsExternalStorageUrlInput`<sup>Optional</sup> <a name="StaticObjectsExternalStorageUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrlInput"></a>

```go
func StaticObjectsExternalStorageUrlInput() *string
```

- *Type:* *string

---

##### `SuggestPipelineEnabledInput`<sup>Optional</sup> <a name="SuggestPipelineEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput"></a>

```go
func SuggestPipelineEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TerminalMaxSessionTimeInput`<sup>Optional</sup> <a name="TerminalMaxSessionTimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput"></a>

```go
func TerminalMaxSessionTimeInput() *f64
```

- *Type:* *f64

---

##### `TermsInput`<sup>Optional</sup> <a name="TermsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput"></a>

```go
func TermsInput() *string
```

- *Type:* *string

---

##### `ThrottleAuthenticatedApiEnabledInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput"></a>

```go
func ThrottleAuthenticatedApiEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleAuthenticatedApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput"></a>

```go
func ThrottleAuthenticatedApiPeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput"></a>

```go
func ThrottleAuthenticatedApiRequestsPerPeriodInput() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedPackagesApiEnabledInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput"></a>

```go
func ThrottleAuthenticatedPackagesApiEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleAuthenticatedPackagesApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput"></a>

```go
func ThrottleAuthenticatedPackagesApiPeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput"></a>

```go
func ThrottleAuthenticatedPackagesApiRequestsPerPeriodInput() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedWebEnabledInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput"></a>

```go
func ThrottleAuthenticatedWebEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleAuthenticatedWebPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput"></a>

```go
func ThrottleAuthenticatedWebPeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedWebRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput"></a>

```go
func ThrottleAuthenticatedWebRequestsPerPeriodInput() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedApiEnabledInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput"></a>

```go
func ThrottleUnauthenticatedApiEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleUnauthenticatedApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput"></a>

```go
func ThrottleUnauthenticatedApiPeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput"></a>

```go
func ThrottleUnauthenticatedApiRequestsPerPeriodInput() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedPackagesApiEnabledInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput"></a>

```go
func ThrottleUnauthenticatedPackagesApiEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput"></a>

```go
func ThrottleUnauthenticatedPackagesApiPeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput"></a>

```go
func ThrottleUnauthenticatedPackagesApiRequestsPerPeriodInput() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedWebEnabledInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput"></a>

```go
func ThrottleUnauthenticatedWebEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleUnauthenticatedWebPeriodInSecondsInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput"></a>

```go
func ThrottleUnauthenticatedWebPeriodInSecondsInput() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedWebRequestsPerPeriodInput`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput"></a>

```go
func ThrottleUnauthenticatedWebRequestsPerPeriodInput() *f64
```

- *Type:* *f64

---

##### `TimeTrackingLimitToHoursInput`<sup>Optional</sup> <a name="TimeTrackingLimitToHoursInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput"></a>

```go
func TimeTrackingLimitToHoursInput() interface{}
```

- *Type:* interface{}

---

##### `TwoFactorGracePeriodInput`<sup>Optional</sup> <a name="TwoFactorGracePeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput"></a>

```go
func TwoFactorGracePeriodInput() *f64
```

- *Type:* *f64

---

##### `UnconfirmedUsersDeleteAfterDaysInput`<sup>Optional</sup> <a name="UnconfirmedUsersDeleteAfterDaysInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDaysInput"></a>

```go
func UnconfirmedUsersDeleteAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `UniqueIpsLimitEnabledInput`<sup>Optional</sup> <a name="UniqueIpsLimitEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput"></a>

```go
func UniqueIpsLimitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueIpsLimitPerUserInput`<sup>Optional</sup> <a name="UniqueIpsLimitPerUserInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput"></a>

```go
func UniqueIpsLimitPerUserInput() *f64
```

- *Type:* *f64

---

##### `UniqueIpsLimitTimeWindowInput`<sup>Optional</sup> <a name="UniqueIpsLimitTimeWindowInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput"></a>

```go
func UniqueIpsLimitTimeWindowInput() *f64
```

- *Type:* *f64

---

##### `UpdateRunnerVersionsEnabledInput`<sup>Optional</sup> <a name="UpdateRunnerVersionsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabledInput"></a>

```go
func UpdateRunnerVersionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UsagePingEnabledInput`<sup>Optional</sup> <a name="UsagePingEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput"></a>

```go
func UsagePingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UseClickhouseForAnalyticsInput`<sup>Optional</sup> <a name="UseClickhouseForAnalyticsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalyticsInput"></a>

```go
func UseClickhouseForAnalyticsInput() interface{}
```

- *Type:* interface{}

---

##### `UserDeactivationEmailsEnabledInput`<sup>Optional</sup> <a name="UserDeactivationEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput"></a>

```go
func UserDeactivationEmailsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `UserDefaultExternalInput`<sup>Optional</sup> <a name="UserDefaultExternalInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput"></a>

```go
func UserDefaultExternalInput() interface{}
```

- *Type:* interface{}

---

##### `UserDefaultInternalRegexInput`<sup>Optional</sup> <a name="UserDefaultInternalRegexInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput"></a>

```go
func UserDefaultInternalRegexInput() *string
```

- *Type:* *string

---

##### `UserDefaultsToPrivateProfileInput`<sup>Optional</sup> <a name="UserDefaultsToPrivateProfileInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfileInput"></a>

```go
func UserDefaultsToPrivateProfileInput() interface{}
```

- *Type:* interface{}

---

##### `UserOauthApplicationsInput`<sup>Optional</sup> <a name="UserOauthApplicationsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput"></a>

```go
func UserOauthApplicationsInput() interface{}
```

- *Type:* interface{}

---

##### `UserShowAddSshKeyMessageInput`<sup>Optional</sup> <a name="UserShowAddSshKeyMessageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput"></a>

```go
func UserShowAddSshKeyMessageInput() interface{}
```

- *Type:* interface{}

---

##### `ValidRunnerRegistrarsInput`<sup>Optional</sup> <a name="ValidRunnerRegistrarsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrarsInput"></a>

```go
func ValidRunnerRegistrarsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VersionCheckEnabledInput`<sup>Optional</sup> <a name="VersionCheckEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput"></a>

```go
func VersionCheckEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WebIdeClientsidePreviewEnabledInput`<sup>Optional</sup> <a name="WebIdeClientsidePreviewEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput"></a>

```go
func WebIdeClientsidePreviewEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WhatsNewVariantInput`<sup>Optional</sup> <a name="WhatsNewVariantInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput"></a>

```go
func WhatsNewVariantInput() *string
```

- *Type:* *string

---

##### `WikiPageMaxContentBytesInput`<sup>Optional</sup> <a name="WikiPageMaxContentBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput"></a>

```go
func WikiPageMaxContentBytesInput() *f64
```

- *Type:* *f64

---

##### `AbuseNotificationEmail`<sup>Required</sup> <a name="AbuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail"></a>

```go
func AbuseNotificationEmail() *string
```

- *Type:* *string

---

##### `AdminMode`<sup>Required</sup> <a name="AdminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode"></a>

```go
func AdminMode() interface{}
```

- *Type:* interface{}

---

##### `AfterSignOutPath`<sup>Required</sup> <a name="AfterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath"></a>

```go
func AfterSignOutPath() *string
```

- *Type:* *string

---

##### `AfterSignUpText`<sup>Required</sup> <a name="AfterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText"></a>

```go
func AfterSignUpText() *string
```

- *Type:* *string

---

##### `AkismetApiKey`<sup>Required</sup> <a name="AkismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey"></a>

```go
func AkismetApiKey() *string
```

- *Type:* *string

---

##### `AkismetEnabled`<sup>Required</sup> <a name="AkismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled"></a>

```go
func AkismetEnabled() interface{}
```

- *Type:* interface{}

---

##### `AllowAccountDeletion`<sup>Required</sup> <a name="AllowAccountDeletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletion"></a>

```go
func AllowAccountDeletion() interface{}
```

- *Type:* interface{}

---

##### `AllowGroupOwnersToManageLdap`<sup>Required</sup> <a name="AllowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap"></a>

```go
func AllowGroupOwnersToManageLdap() interface{}
```

- *Type:* interface{}

---

##### `AllowLocalRequestsFromSystemHooks`<sup>Required</sup> <a name="AllowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks"></a>

```go
func AllowLocalRequestsFromSystemHooks() interface{}
```

- *Type:* interface{}

---

##### `AllowLocalRequestsFromWebHooksAndServices`<sup>Required</sup> <a name="AllowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices"></a>

```go
func AllowLocalRequestsFromWebHooksAndServices() interface{}
```

- *Type:* interface{}

---

##### `AllowProjectCreationForGuestAndBelow`<sup>Required</sup> <a name="AllowProjectCreationForGuestAndBelow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelow"></a>

```go
func AllowProjectCreationForGuestAndBelow() interface{}
```

- *Type:* interface{}

---

##### `AllowRunnerRegistrationToken`<sup>Required</sup> <a name="AllowRunnerRegistrationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationToken"></a>

```go
func AllowRunnerRegistrationToken() interface{}
```

- *Type:* interface{}

---

##### `ArchiveBuildsInHumanReadable`<sup>Required</sup> <a name="ArchiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable"></a>

```go
func ArchiveBuildsInHumanReadable() *string
```

- *Type:* *string

---

##### `AsciidocMaxIncludes`<sup>Required</sup> <a name="AsciidocMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludes"></a>

```go
func AsciidocMaxIncludes() *f64
```

- *Type:* *f64

---

##### `AssetProxyAllowlist`<sup>Required</sup> <a name="AssetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist"></a>

```go
func AssetProxyAllowlist() *[]*string
```

- *Type:* *[]*string

---

##### `AssetProxyEnabled`<sup>Required</sup> <a name="AssetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled"></a>

```go
func AssetProxyEnabled() interface{}
```

- *Type:* interface{}

---

##### `AssetProxySecretKey`<sup>Required</sup> <a name="AssetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey"></a>

```go
func AssetProxySecretKey() *string
```

- *Type:* *string

---

##### `AssetProxyUrl`<sup>Required</sup> <a name="AssetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl"></a>

```go
func AssetProxyUrl() *string
```

- *Type:* *string

---

##### `AuthorizedKeysEnabled`<sup>Required</sup> <a name="AuthorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled"></a>

```go
func AuthorizedKeysEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutoBanUserOnExcessiveProjectsDownload`<sup>Required</sup> <a name="AutoBanUserOnExcessiveProjectsDownload" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownload"></a>

```go
func AutoBanUserOnExcessiveProjectsDownload() interface{}
```

- *Type:* interface{}

---

##### `AutoDevopsDomain`<sup>Required</sup> <a name="AutoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain"></a>

```go
func AutoDevopsDomain() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled"></a>

```go
func AutoDevopsEnabled() interface{}
```

- *Type:* interface{}

---

##### `AutomaticPurchasedStorageAllocation`<sup>Required</sup> <a name="AutomaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation"></a>

```go
func AutomaticPurchasedStorageAllocation() interface{}
```

- *Type:* interface{}

---

##### `BulkImportConcurrentPipelineBatchLimit`<sup>Required</sup> <a name="BulkImportConcurrentPipelineBatchLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimit"></a>

```go
func BulkImportConcurrentPipelineBatchLimit() *f64
```

- *Type:* *f64

---

##### `BulkImportEnabled`<sup>Required</sup> <a name="BulkImportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabled"></a>

```go
func BulkImportEnabled() interface{}
```

- *Type:* interface{}

---

##### `BulkImportMaxDownloadFileSize`<sup>Required</sup> <a name="BulkImportMaxDownloadFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSize"></a>

```go
func BulkImportMaxDownloadFileSize() *f64
```

- *Type:* *f64

---

##### `CanCreateGroup`<sup>Required</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup"></a>

```go
func CanCreateGroup() interface{}
```

- *Type:* interface{}

---

##### `CheckNamespacePlan`<sup>Required</sup> <a name="CheckNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan"></a>

```go
func CheckNamespacePlan() interface{}
```

- *Type:* interface{}

---

##### `CiMaxIncludes`<sup>Required</sup> <a name="CiMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludes"></a>

```go
func CiMaxIncludes() *f64
```

- *Type:* *f64

---

##### `CiMaxTotalYamlSizeBytes`<sup>Required</sup> <a name="CiMaxTotalYamlSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytes"></a>

```go
func CiMaxTotalYamlSizeBytes() *f64
```

- *Type:* *f64

---

##### `CommitEmailHostname`<sup>Required</sup> <a name="CommitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname"></a>

```go
func CommitEmailHostname() *string
```

- *Type:* *string

---

##### `ConcurrentBitbucketImportJobsLimit`<sup>Required</sup> <a name="ConcurrentBitbucketImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimit"></a>

```go
func ConcurrentBitbucketImportJobsLimit() *f64
```

- *Type:* *f64

---

##### `ConcurrentBitbucketServerImportJobsLimit`<sup>Required</sup> <a name="ConcurrentBitbucketServerImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimit"></a>

```go
func ConcurrentBitbucketServerImportJobsLimit() *f64
```

- *Type:* *f64

---

##### `ConcurrentGithubImportJobsLimit`<sup>Required</sup> <a name="ConcurrentGithubImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimit"></a>

```go
func ConcurrentGithubImportJobsLimit() *f64
```

- *Type:* *f64

---

##### `ContainerExpirationPoliciesEnableHistoricEntries`<sup>Required</sup> <a name="ContainerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```go
func ContainerExpirationPoliciesEnableHistoricEntries() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryCleanupTagsServiceMaxListSize`<sup>Required</sup> <a name="ContainerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```go
func ContainerRegistryCleanupTagsServiceMaxListSize() *f64
```

- *Type:* *f64

---

##### `ContainerRegistryDeleteTagsServiceTimeout`<sup>Required</sup> <a name="ContainerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout"></a>

```go
func ContainerRegistryDeleteTagsServiceTimeout() *f64
```

- *Type:* *f64

---

##### `ContainerRegistryExpirationPoliciesCaching`<sup>Required</sup> <a name="ContainerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching"></a>

```go
func ContainerRegistryExpirationPoliciesCaching() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryExpirationPoliciesWorkerCapacity`<sup>Required</sup> <a name="ContainerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```go
func ContainerRegistryExpirationPoliciesWorkerCapacity() *f64
```

- *Type:* *f64

---

##### `ContainerRegistryTokenExpireDelay`<sup>Required</sup> <a name="ContainerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay"></a>

```go
func ContainerRegistryTokenExpireDelay() *f64
```

- *Type:* *f64

---

##### `DeactivateDormantUsers`<sup>Required</sup> <a name="DeactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers"></a>

```go
func DeactivateDormantUsers() interface{}
```

- *Type:* interface{}

---

##### `DeactivateDormantUsersPeriod`<sup>Required</sup> <a name="DeactivateDormantUsersPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriod"></a>

```go
func DeactivateDormantUsersPeriod() *f64
```

- *Type:* *f64

---

##### `DecompressArchiveFileTimeout`<sup>Required</sup> <a name="DecompressArchiveFileTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeout"></a>

```go
func DecompressArchiveFileTimeout() *f64
```

- *Type:* *f64

---

##### `DefaultArtifactsExpireIn`<sup>Required</sup> <a name="DefaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn"></a>

```go
func DefaultArtifactsExpireIn() *string
```

- *Type:* *string

---

##### `DefaultBranchName`<sup>Required</sup> <a name="DefaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName"></a>

```go
func DefaultBranchName() *string
```

- *Type:* *string

---

##### `DefaultBranchProtection`<sup>Required</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection"></a>

```go
func DefaultBranchProtection() *f64
```

- *Type:* *f64

---

##### `DefaultCiConfigPath`<sup>Required</sup> <a name="DefaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath"></a>

```go
func DefaultCiConfigPath() *string
```

- *Type:* *string

---

##### `DefaultGroupVisibility`<sup>Required</sup> <a name="DefaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility"></a>

```go
func DefaultGroupVisibility() *string
```

- *Type:* *string

---

##### `DefaultPreferredLanguage`<sup>Required</sup> <a name="DefaultPreferredLanguage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguage"></a>

```go
func DefaultPreferredLanguage() *string
```

- *Type:* *string

---

##### `DefaultProjectCreation`<sup>Required</sup> <a name="DefaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation"></a>

```go
func DefaultProjectCreation() *f64
```

- *Type:* *f64

---

##### `DefaultProjectsLimit`<sup>Required</sup> <a name="DefaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit"></a>

```go
func DefaultProjectsLimit() *f64
```

- *Type:* *f64

---

##### `DefaultProjectVisibility`<sup>Required</sup> <a name="DefaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility"></a>

```go
func DefaultProjectVisibility() *string
```

- *Type:* *string

---

##### `DefaultSnippetVisibility`<sup>Required</sup> <a name="DefaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility"></a>

```go
func DefaultSnippetVisibility() *string
```

- *Type:* *string

---

##### `DefaultSyntaxHighlightingTheme`<sup>Required</sup> <a name="DefaultSyntaxHighlightingTheme" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingTheme"></a>

```go
func DefaultSyntaxHighlightingTheme() *f64
```

- *Type:* *f64

---

##### `DeleteInactiveProjects`<sup>Required</sup> <a name="DeleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects"></a>

```go
func DeleteInactiveProjects() interface{}
```

- *Type:* interface{}

---

##### `DeleteUnconfirmedUsers`<sup>Required</sup> <a name="DeleteUnconfirmedUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsers"></a>

```go
func DeleteUnconfirmedUsers() interface{}
```

- *Type:* interface{}

---

##### `DeletionAdjournedPeriod`<sup>Required</sup> <a name="DeletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod"></a>

```go
func DeletionAdjournedPeriod() *f64
```

- *Type:* *f64

---

##### `DiagramsnetEnabled`<sup>Required</sup> <a name="DiagramsnetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabled"></a>

```go
func DiagramsnetEnabled() interface{}
```

- *Type:* interface{}

---

##### `DiagramsnetUrl`<sup>Required</sup> <a name="DiagramsnetUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrl"></a>

```go
func DiagramsnetUrl() *string
```

- *Type:* *string

---

##### `DiffMaxFiles`<sup>Required</sup> <a name="DiffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles"></a>

```go
func DiffMaxFiles() *f64
```

- *Type:* *f64

---

##### `DiffMaxLines`<sup>Required</sup> <a name="DiffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines"></a>

```go
func DiffMaxLines() *f64
```

- *Type:* *f64

---

##### `DiffMaxPatchBytes`<sup>Required</sup> <a name="DiffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes"></a>

```go
func DiffMaxPatchBytes() *f64
```

- *Type:* *f64

---

##### `DisableAdminOauthScopes`<sup>Required</sup> <a name="DisableAdminOauthScopes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopes"></a>

```go
func DisableAdminOauthScopes() interface{}
```

- *Type:* interface{}

---

##### `DisabledOauthSignInSources`<sup>Required</sup> <a name="DisabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources"></a>

```go
func DisabledOauthSignInSources() *[]*string
```

- *Type:* *[]*string

---

##### `DisableFeedToken`<sup>Required</sup> <a name="DisableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken"></a>

```go
func DisableFeedToken() interface{}
```

- *Type:* interface{}

---

##### `DisablePersonalAccessTokens`<sup>Required</sup> <a name="DisablePersonalAccessTokens" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokens"></a>

```go
func DisablePersonalAccessTokens() interface{}
```

- *Type:* interface{}

---

##### `DnsRebindingProtectionEnabled`<sup>Required</sup> <a name="DnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled"></a>

```go
func DnsRebindingProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `DomainAllowlist`<sup>Required</sup> <a name="DomainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist"></a>

```go
func DomainAllowlist() *[]*string
```

- *Type:* *[]*string

---

##### `DomainDenylist`<sup>Required</sup> <a name="DomainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist"></a>

```go
func DomainDenylist() *[]*string
```

- *Type:* *[]*string

---

##### `DomainDenylistEnabled`<sup>Required</sup> <a name="DomainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled"></a>

```go
func DomainDenylistEnabled() interface{}
```

- *Type:* interface{}

---

##### `DownstreamPipelineTriggerLimitPerProjectUserSha`<sup>Required</sup> <a name="DownstreamPipelineTriggerLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserSha"></a>

```go
func DownstreamPipelineTriggerLimitPerProjectUserSha() *f64
```

- *Type:* *f64

---

##### `DsaKeyRestriction`<sup>Required</sup> <a name="DsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction"></a>

```go
func DsaKeyRestriction() *f64
```

- *Type:* *f64

---

##### `DuoFeaturesEnabled`<sup>Required</sup> <a name="DuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabled"></a>

```go
func DuoFeaturesEnabled() interface{}
```

- *Type:* interface{}

---

##### `EcdsaKeyRestriction`<sup>Required</sup> <a name="EcdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction"></a>

```go
func EcdsaKeyRestriction() *f64
```

- *Type:* *f64

---

##### `EcdsaSkKeyRestriction`<sup>Required</sup> <a name="EcdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction"></a>

```go
func EcdsaSkKeyRestriction() *f64
```

- *Type:* *f64

---

##### `Ed25519KeyRestriction`<sup>Required</sup> <a name="Ed25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction"></a>

```go
func Ed25519KeyRestriction() *f64
```

- *Type:* *f64

---

##### `Ed25519SkKeyRestriction`<sup>Required</sup> <a name="Ed25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction"></a>

```go
func Ed25519SkKeyRestriction() *f64
```

- *Type:* *f64

---

##### `EksAccessKeyId`<sup>Required</sup> <a name="EksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId"></a>

```go
func EksAccessKeyId() *string
```

- *Type:* *string

---

##### `EksAccountId`<sup>Required</sup> <a name="EksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId"></a>

```go
func EksAccountId() *string
```

- *Type:* *string

---

##### `EksIntegrationEnabled`<sup>Required</sup> <a name="EksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled"></a>

```go
func EksIntegrationEnabled() interface{}
```

- *Type:* interface{}

---

##### `EksSecretAccessKey`<sup>Required</sup> <a name="EksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey"></a>

```go
func EksSecretAccessKey() *string
```

- *Type:* *string

---

##### `ElasticsearchAws`<sup>Required</sup> <a name="ElasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws"></a>

```go
func ElasticsearchAws() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchAwsAccessKey`<sup>Required</sup> <a name="ElasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey"></a>

```go
func ElasticsearchAwsAccessKey() *string
```

- *Type:* *string

---

##### `ElasticsearchAwsRegion`<sup>Required</sup> <a name="ElasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion"></a>

```go
func ElasticsearchAwsRegion() *string
```

- *Type:* *string

---

##### `ElasticsearchAwsSecretAccessKey`<sup>Required</sup> <a name="ElasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey"></a>

```go
func ElasticsearchAwsSecretAccessKey() *string
```

- *Type:* *string

---

##### `ElasticsearchIndexedFieldLengthLimit`<sup>Required</sup> <a name="ElasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit"></a>

```go
func ElasticsearchIndexedFieldLengthLimit() *f64
```

- *Type:* *f64

---

##### `ElasticsearchIndexedFileSizeLimitKb`<sup>Required</sup> <a name="ElasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb"></a>

```go
func ElasticsearchIndexedFileSizeLimitKb() *f64
```

- *Type:* *f64

---

##### `ElasticsearchIndexing`<sup>Required</sup> <a name="ElasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing"></a>

```go
func ElasticsearchIndexing() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchLimitIndexing`<sup>Required</sup> <a name="ElasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing"></a>

```go
func ElasticsearchLimitIndexing() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchMaxBulkConcurrency`<sup>Required</sup> <a name="ElasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency"></a>

```go
func ElasticsearchMaxBulkConcurrency() *f64
```

- *Type:* *f64

---

##### `ElasticsearchMaxBulkSizeMb`<sup>Required</sup> <a name="ElasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb"></a>

```go
func ElasticsearchMaxBulkSizeMb() *f64
```

- *Type:* *f64

---

##### `ElasticsearchMaxCodeIndexingConcurrency`<sup>Required</sup> <a name="ElasticsearchMaxCodeIndexingConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrency"></a>

```go
func ElasticsearchMaxCodeIndexingConcurrency() *f64
```

- *Type:* *f64

---

##### `ElasticsearchNamespaceIds`<sup>Required</sup> <a name="ElasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds"></a>

```go
func ElasticsearchNamespaceIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `ElasticsearchPassword`<sup>Required</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword"></a>

```go
func ElasticsearchPassword() *string
```

- *Type:* *string

---

##### `ElasticsearchProjectIds`<sup>Required</sup> <a name="ElasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds"></a>

```go
func ElasticsearchProjectIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `ElasticsearchRequeueWorkers`<sup>Required</sup> <a name="ElasticsearchRequeueWorkers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkers"></a>

```go
func ElasticsearchRequeueWorkers() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchSearch`<sup>Required</sup> <a name="ElasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch"></a>

```go
func ElasticsearchSearch() interface{}
```

- *Type:* interface{}

---

##### `ElasticsearchUrl`<sup>Required</sup> <a name="ElasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl"></a>

```go
func ElasticsearchUrl() *[]*string
```

- *Type:* *[]*string

---

##### `ElasticsearchUsername`<sup>Required</sup> <a name="ElasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername"></a>

```go
func ElasticsearchUsername() *string
```

- *Type:* *string

---

##### `ElasticsearchWorkerNumberOfShards`<sup>Required</sup> <a name="ElasticsearchWorkerNumberOfShards" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShards"></a>

```go
func ElasticsearchWorkerNumberOfShards() *f64
```

- *Type:* *f64

---

##### `EmailAdditionalText`<sup>Required</sup> <a name="EmailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText"></a>

```go
func EmailAdditionalText() *string
```

- *Type:* *string

---

##### `EmailAuthorInBody`<sup>Required</sup> <a name="EmailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody"></a>

```go
func EmailAuthorInBody() interface{}
```

- *Type:* interface{}

---

##### `EmailConfirmationSetting`<sup>Required</sup> <a name="EmailConfirmationSetting" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSetting"></a>

```go
func EmailConfirmationSetting() *string
```

- *Type:* *string

---

##### `EnableArtifactExternalRedirectWarningPage`<sup>Required</sup> <a name="EnableArtifactExternalRedirectWarningPage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPage"></a>

```go
func EnableArtifactExternalRedirectWarningPage() interface{}
```

- *Type:* interface{}

---

##### `EnabledGitAccessProtocol`<sup>Required</sup> <a name="EnabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol"></a>

```go
func EnabledGitAccessProtocol() *string
```

- *Type:* *string

---

##### `EnforceNamespaceStorageLimit`<sup>Required</sup> <a name="EnforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit"></a>

```go
func EnforceNamespaceStorageLimit() interface{}
```

- *Type:* interface{}

---

##### `EnforceTerms`<sup>Required</sup> <a name="EnforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms"></a>

```go
func EnforceTerms() interface{}
```

- *Type:* interface{}

---

##### `ExternalAuthClientCert`<sup>Required</sup> <a name="ExternalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert"></a>

```go
func ExternalAuthClientCert() *string
```

- *Type:* *string

---

##### `ExternalAuthClientKey`<sup>Required</sup> <a name="ExternalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey"></a>

```go
func ExternalAuthClientKey() *string
```

- *Type:* *string

---

##### `ExternalAuthClientKeyPass`<sup>Required</sup> <a name="ExternalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass"></a>

```go
func ExternalAuthClientKeyPass() *string
```

- *Type:* *string

---

##### `ExternalAuthorizationServiceDefaultLabel`<sup>Required</sup> <a name="ExternalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel"></a>

```go
func ExternalAuthorizationServiceDefaultLabel() *string
```

- *Type:* *string

---

##### `ExternalAuthorizationServiceEnabled`<sup>Required</sup> <a name="ExternalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled"></a>

```go
func ExternalAuthorizationServiceEnabled() interface{}
```

- *Type:* interface{}

---

##### `ExternalAuthorizationServiceTimeout`<sup>Required</sup> <a name="ExternalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout"></a>

```go
func ExternalAuthorizationServiceTimeout() *f64
```

- *Type:* *f64

---

##### `ExternalAuthorizationServiceUrl`<sup>Required</sup> <a name="ExternalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl"></a>

```go
func ExternalAuthorizationServiceUrl() *string
```

- *Type:* *string

---

##### `ExternalPipelineValidationServiceTimeout`<sup>Required</sup> <a name="ExternalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout"></a>

```go
func ExternalPipelineValidationServiceTimeout() *f64
```

- *Type:* *f64

---

##### `ExternalPipelineValidationServiceToken`<sup>Required</sup> <a name="ExternalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken"></a>

```go
func ExternalPipelineValidationServiceToken() *string
```

- *Type:* *string

---

##### `ExternalPipelineValidationServiceUrl`<sup>Required</sup> <a name="ExternalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl"></a>

```go
func ExternalPipelineValidationServiceUrl() *string
```

- *Type:* *string

---

##### `FailedLoginAttemptsUnlockPeriodInMinutes`<sup>Required</sup> <a name="FailedLoginAttemptsUnlockPeriodInMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutes"></a>

```go
func FailedLoginAttemptsUnlockPeriodInMinutes() *f64
```

- *Type:* *f64

---

##### `FileTemplateProjectId`<sup>Required</sup> <a name="FileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId"></a>

```go
func FileTemplateProjectId() *f64
```

- *Type:* *f64

---

##### `FirstDayOfWeek`<sup>Required</sup> <a name="FirstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek"></a>

```go
func FirstDayOfWeek() *f64
```

- *Type:* *f64

---

##### `GeoNodeAllowedIps`<sup>Required</sup> <a name="GeoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps"></a>

```go
func GeoNodeAllowedIps() *string
```

- *Type:* *string

---

##### `GeoStatusTimeout`<sup>Required</sup> <a name="GeoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout"></a>

```go
func GeoStatusTimeout() *f64
```

- *Type:* *f64

---

##### `GitalyTimeoutDefault`<sup>Required</sup> <a name="GitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault"></a>

```go
func GitalyTimeoutDefault() *f64
```

- *Type:* *f64

---

##### `GitalyTimeoutFast`<sup>Required</sup> <a name="GitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast"></a>

```go
func GitalyTimeoutFast() *f64
```

- *Type:* *f64

---

##### `GitalyTimeoutMedium`<sup>Required</sup> <a name="GitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium"></a>

```go
func GitalyTimeoutMedium() *f64
```

- *Type:* *f64

---

##### `GitlabShellOperationLimit`<sup>Required</sup> <a name="GitlabShellOperationLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimit"></a>

```go
func GitlabShellOperationLimit() *f64
```

- *Type:* *f64

---

##### `GitpodEnabled`<sup>Required</sup> <a name="GitpodEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabled"></a>

```go
func GitpodEnabled() interface{}
```

- *Type:* interface{}

---

##### `GitpodUrl`<sup>Required</sup> <a name="GitpodUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrl"></a>

```go
func GitpodUrl() *string
```

- *Type:* *string

---

##### `GitRateLimitUsersAlertlist`<sup>Required</sup> <a name="GitRateLimitUsersAlertlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlist"></a>

```go
func GitRateLimitUsersAlertlist() *[]*f64
```

- *Type:* *[]*f64

---

##### `GitRateLimitUsersAllowlist`<sup>Required</sup> <a name="GitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist"></a>

```go
func GitRateLimitUsersAllowlist() *[]*string
```

- *Type:* *[]*string

---

##### `GitTwoFactorSessionExpiry`<sup>Required</sup> <a name="GitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry"></a>

```go
func GitTwoFactorSessionExpiry() *f64
```

- *Type:* *f64

---

##### `GloballyAllowedIps`<sup>Required</sup> <a name="GloballyAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIps"></a>

```go
func GloballyAllowedIps() *string
```

- *Type:* *string

---

##### `GrafanaEnabled`<sup>Required</sup> <a name="GrafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled"></a>

```go
func GrafanaEnabled() interface{}
```

- *Type:* interface{}

---

##### `GrafanaUrl`<sup>Required</sup> <a name="GrafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl"></a>

```go
func GrafanaUrl() *string
```

- *Type:* *string

---

##### `GravatarEnabled`<sup>Required</sup> <a name="GravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled"></a>

```go
func GravatarEnabled() interface{}
```

- *Type:* interface{}

---

##### `GroupOwnersCanManageDefaultBranchProtection`<sup>Required</sup> <a name="GroupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection"></a>

```go
func GroupOwnersCanManageDefaultBranchProtection() interface{}
```

- *Type:* interface{}

---

##### `HashedStorageEnabled`<sup>Required</sup> <a name="HashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled"></a>

```go
func HashedStorageEnabled() interface{}
```

- *Type:* interface{}

---

##### `HelpPageHideCommercialContent`<sup>Required</sup> <a name="HelpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent"></a>

```go
func HelpPageHideCommercialContent() interface{}
```

- *Type:* interface{}

---

##### `HelpPageSupportUrl`<sup>Required</sup> <a name="HelpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl"></a>

```go
func HelpPageSupportUrl() *string
```

- *Type:* *string

---

##### `HelpPageText`<sup>Required</sup> <a name="HelpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText"></a>

```go
func HelpPageText() *string
```

- *Type:* *string

---

##### `HelpText`<sup>Required</sup> <a name="HelpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText"></a>

```go
func HelpText() *string
```

- *Type:* *string

---

##### `HideThirdPartyOffers`<sup>Required</sup> <a name="HideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers"></a>

```go
func HideThirdPartyOffers() interface{}
```

- *Type:* interface{}

---

##### `HomePageUrl`<sup>Required</sup> <a name="HomePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl"></a>

```go
func HomePageUrl() *string
```

- *Type:* *string

---

##### `HousekeepingEnabled`<sup>Required</sup> <a name="HousekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled"></a>

```go
func HousekeepingEnabled() interface{}
```

- *Type:* interface{}

---

##### `HousekeepingFullRepackPeriod`<sup>Required</sup> <a name="HousekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod"></a>

```go
func HousekeepingFullRepackPeriod() *f64
```

- *Type:* *f64

---

##### `HousekeepingGcPeriod`<sup>Required</sup> <a name="HousekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod"></a>

```go
func HousekeepingGcPeriod() *f64
```

- *Type:* *f64

---

##### `HousekeepingIncrementalRepackPeriod`<sup>Required</sup> <a name="HousekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod"></a>

```go
func HousekeepingIncrementalRepackPeriod() *f64
```

- *Type:* *f64

---

##### `HousekeepingOptimizeRepositoryPeriod`<sup>Required</sup> <a name="HousekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriod"></a>

```go
func HousekeepingOptimizeRepositoryPeriod() *f64
```

- *Type:* *f64

---

##### `HtmlEmailsEnabled`<sup>Required</sup> <a name="HtmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled"></a>

```go
func HtmlEmailsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportSources`<sup>Required</sup> <a name="ImportSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources"></a>

```go
func ImportSources() *[]*string
```

- *Type:* *[]*string

---

##### `InactiveProjectsDeleteAfterMonths`<sup>Required</sup> <a name="InactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths"></a>

```go
func InactiveProjectsDeleteAfterMonths() *f64
```

- *Type:* *f64

---

##### `InactiveProjectsMinSizeMb`<sup>Required</sup> <a name="InactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb"></a>

```go
func InactiveProjectsMinSizeMb() *f64
```

- *Type:* *f64

---

##### `InactiveProjectsSendWarningEmailAfterMonths`<sup>Required</sup> <a name="InactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```go
func InactiveProjectsSendWarningEmailAfterMonths() *f64
```

- *Type:* *f64

---

##### `IncludeOptionalMetricsInServicePing`<sup>Required</sup> <a name="IncludeOptionalMetricsInServicePing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePing"></a>

```go
func IncludeOptionalMetricsInServicePing() interface{}
```

- *Type:* interface{}

---

##### `InProductMarketingEmailsEnabled`<sup>Required</sup> <a name="InProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled"></a>

```go
func InProductMarketingEmailsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InvisibleCaptchaEnabled`<sup>Required</sup> <a name="InvisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled"></a>

```go
func InvisibleCaptchaEnabled() interface{}
```

- *Type:* interface{}

---

##### `IssuesCreateLimit`<sup>Required</sup> <a name="IssuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit"></a>

```go
func IssuesCreateLimit() *f64
```

- *Type:* *f64

---

##### `JiraConnectApplicationKey`<sup>Required</sup> <a name="JiraConnectApplicationKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKey"></a>

```go
func JiraConnectApplicationKey() *string
```

- *Type:* *string

---

##### `JiraConnectProxyUrl`<sup>Required</sup> <a name="JiraConnectProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrl"></a>

```go
func JiraConnectProxyUrl() *string
```

- *Type:* *string

---

##### `JiraConnectPublicKeyStorageEnabled`<sup>Required</sup> <a name="JiraConnectPublicKeyStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabled"></a>

```go
func JiraConnectPublicKeyStorageEnabled() interface{}
```

- *Type:* interface{}

---

##### `KeepLatestArtifact`<sup>Required</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact"></a>

```go
func KeepLatestArtifact() interface{}
```

- *Type:* interface{}

---

##### `LocalMarkdownVersion`<sup>Required</sup> <a name="LocalMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion"></a>

```go
func LocalMarkdownVersion() *f64
```

- *Type:* *f64

---

##### `LockDuoFeaturesEnabled`<sup>Required</sup> <a name="LockDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabled"></a>

```go
func LockDuoFeaturesEnabled() interface{}
```

- *Type:* interface{}

---

##### `MailgunEventsEnabled`<sup>Required</sup> <a name="MailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled"></a>

```go
func MailgunEventsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MailgunSigningKey`<sup>Required</sup> <a name="MailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey"></a>

```go
func MailgunSigningKey() *string
```

- *Type:* *string

---

##### `MaintenanceMode`<sup>Required</sup> <a name="MaintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode"></a>

```go
func MaintenanceMode() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceModeMessage`<sup>Required</sup> <a name="MaintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage"></a>

```go
func MaintenanceModeMessage() *string
```

- *Type:* *string

---

##### `MavenPackageRequestsForwarding`<sup>Required</sup> <a name="MavenPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwarding"></a>

```go
func MavenPackageRequestsForwarding() interface{}
```

- *Type:* interface{}

---

##### `MaxArtifactsSize`<sup>Required</sup> <a name="MaxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize"></a>

```go
func MaxArtifactsSize() *f64
```

- *Type:* *f64

---

##### `MaxAttachmentSize`<sup>Required</sup> <a name="MaxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize"></a>

```go
func MaxAttachmentSize() *f64
```

- *Type:* *f64

---

##### `MaxDecompressedArchiveSize`<sup>Required</sup> <a name="MaxDecompressedArchiveSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSize"></a>

```go
func MaxDecompressedArchiveSize() *f64
```

- *Type:* *f64

---

##### `MaxExportSize`<sup>Required</sup> <a name="MaxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize"></a>

```go
func MaxExportSize() *f64
```

- *Type:* *f64

---

##### `MaxImportRemoteFileSize`<sup>Required</sup> <a name="MaxImportRemoteFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSize"></a>

```go
func MaxImportRemoteFileSize() *f64
```

- *Type:* *f64

---

##### `MaxImportSize`<sup>Required</sup> <a name="MaxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize"></a>

```go
func MaxImportSize() *f64
```

- *Type:* *f64

---

##### `MaxLoginAttempts`<sup>Required</sup> <a name="MaxLoginAttempts" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttempts"></a>

```go
func MaxLoginAttempts() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfRepositoryDownloads`<sup>Required</sup> <a name="MaxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads"></a>

```go
func MaxNumberOfRepositoryDownloads() *f64
```

- *Type:* *f64

---

##### `MaxNumberOfRepositoryDownloadsWithinTimePeriod`<sup>Required</sup> <a name="MaxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```go
func MaxNumberOfRepositoryDownloadsWithinTimePeriod() *f64
```

- *Type:* *f64

---

##### `MaxPagesSize`<sup>Required</sup> <a name="MaxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize"></a>

```go
func MaxPagesSize() *f64
```

- *Type:* *f64

---

##### `MaxPersonalAccessTokenLifetime`<sup>Required</sup> <a name="MaxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime"></a>

```go
func MaxPersonalAccessTokenLifetime() *f64
```

- *Type:* *f64

---

##### `MaxSshKeyLifetime`<sup>Required</sup> <a name="MaxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime"></a>

```go
func MaxSshKeyLifetime() *f64
```

- *Type:* *f64

---

##### `MaxTerraformStateSizeBytes`<sup>Required</sup> <a name="MaxTerraformStateSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytes"></a>

```go
func MaxTerraformStateSizeBytes() *f64
```

- *Type:* *f64

---

##### `MetricsMethodCallThreshold`<sup>Required</sup> <a name="MetricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold"></a>

```go
func MetricsMethodCallThreshold() *f64
```

- *Type:* *f64

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLength"></a>

```go
func MinimumPasswordLength() *f64
```

- *Type:* *f64

---

##### `MirrorAvailable`<sup>Required</sup> <a name="MirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable"></a>

```go
func MirrorAvailable() interface{}
```

- *Type:* interface{}

---

##### `MirrorCapacityThreshold`<sup>Required</sup> <a name="MirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold"></a>

```go
func MirrorCapacityThreshold() *f64
```

- *Type:* *f64

---

##### `MirrorMaxCapacity`<sup>Required</sup> <a name="MirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity"></a>

```go
func MirrorMaxCapacity() *f64
```

- *Type:* *f64

---

##### `MirrorMaxDelay`<sup>Required</sup> <a name="MirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay"></a>

```go
func MirrorMaxDelay() *f64
```

- *Type:* *f64

---

##### `NpmPackageRequestsForwarding`<sup>Required</sup> <a name="NpmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding"></a>

```go
func NpmPackageRequestsForwarding() interface{}
```

- *Type:* interface{}

---

##### `NugetSkipMetadataUrlValidation`<sup>Required</sup> <a name="NugetSkipMetadataUrlValidation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidation"></a>

```go
func NugetSkipMetadataUrlValidation() interface{}
```

- *Type:* interface{}

---

##### `OutboundLocalRequestsWhitelist`<sup>Required</sup> <a name="OutboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist"></a>

```go
func OutboundLocalRequestsWhitelist() *[]*string
```

- *Type:* *[]*string

---

##### `PackageMetadataPurlTypes`<sup>Required</sup> <a name="PackageMetadataPurlTypes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypes"></a>

```go
func PackageMetadataPurlTypes() *[]*f64
```

- *Type:* *[]*f64

---

##### `PackageRegistryAllowAnyoneToPullOption`<sup>Required</sup> <a name="PackageRegistryAllowAnyoneToPullOption" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOption"></a>

```go
func PackageRegistryAllowAnyoneToPullOption() interface{}
```

- *Type:* interface{}

---

##### `PackageRegistryCleanupPoliciesWorkerCapacity`<sup>Required</sup> <a name="PackageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```go
func PackageRegistryCleanupPoliciesWorkerCapacity() *f64
```

- *Type:* *f64

---

##### `PagesDomainVerificationEnabled`<sup>Required</sup> <a name="PagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled"></a>

```go
func PagesDomainVerificationEnabled() interface{}
```

- *Type:* interface{}

---

##### `PasswordAuthenticationEnabledForGit`<sup>Required</sup> <a name="PasswordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit"></a>

```go
func PasswordAuthenticationEnabledForGit() interface{}
```

- *Type:* interface{}

---

##### `PasswordAuthenticationEnabledForWeb`<sup>Required</sup> <a name="PasswordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb"></a>

```go
func PasswordAuthenticationEnabledForWeb() interface{}
```

- *Type:* interface{}

---

##### `PasswordLowercaseRequired`<sup>Required</sup> <a name="PasswordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired"></a>

```go
func PasswordLowercaseRequired() interface{}
```

- *Type:* interface{}

---

##### `PasswordNumberRequired`<sup>Required</sup> <a name="PasswordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired"></a>

```go
func PasswordNumberRequired() interface{}
```

- *Type:* interface{}

---

##### `PasswordSymbolRequired`<sup>Required</sup> <a name="PasswordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired"></a>

```go
func PasswordSymbolRequired() interface{}
```

- *Type:* interface{}

---

##### `PasswordUppercaseRequired`<sup>Required</sup> <a name="PasswordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired"></a>

```go
func PasswordUppercaseRequired() interface{}
```

- *Type:* interface{}

---

##### `PerformanceBarAllowedGroupPath`<sup>Required</sup> <a name="PerformanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath"></a>

```go
func PerformanceBarAllowedGroupPath() *string
```

- *Type:* *string

---

##### `PersonalAccessTokenPrefix`<sup>Required</sup> <a name="PersonalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix"></a>

```go
func PersonalAccessTokenPrefix() *string
```

- *Type:* *string

---

##### `PipelineLimitPerProjectUserSha`<sup>Required</sup> <a name="PipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha"></a>

```go
func PipelineLimitPerProjectUserSha() *f64
```

- *Type:* *f64

---

##### `PlantumlEnabled`<sup>Required</sup> <a name="PlantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled"></a>

```go
func PlantumlEnabled() interface{}
```

- *Type:* interface{}

---

##### `PlantumlUrl`<sup>Required</sup> <a name="PlantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl"></a>

```go
func PlantumlUrl() *string
```

- *Type:* *string

---

##### `PollingIntervalMultiplier`<sup>Required</sup> <a name="PollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier"></a>

```go
func PollingIntervalMultiplier() *f64
```

- *Type:* *f64

---

##### `ProjectExportEnabled`<sup>Required</sup> <a name="ProjectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled"></a>

```go
func ProjectExportEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProjectJobsApiRateLimit`<sup>Required</sup> <a name="ProjectJobsApiRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimit"></a>

```go
func ProjectJobsApiRateLimit() *f64
```

- *Type:* *f64

---

##### `ProjectsApiRateLimitUnauthenticated`<sup>Required</sup> <a name="ProjectsApiRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticated"></a>

```go
func ProjectsApiRateLimitUnauthenticated() *f64
```

- *Type:* *f64

---

##### `PrometheusMetricsEnabled`<sup>Required</sup> <a name="PrometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled"></a>

```go
func PrometheusMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ProtectedCiVariables`<sup>Required</sup> <a name="ProtectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables"></a>

```go
func ProtectedCiVariables() interface{}
```

- *Type:* interface{}

---

##### `PushEventActivitiesLimit`<sup>Required</sup> <a name="PushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit"></a>

```go
func PushEventActivitiesLimit() *f64
```

- *Type:* *f64

---

##### `PushEventHooksLimit`<sup>Required</sup> <a name="PushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit"></a>

```go
func PushEventHooksLimit() *f64
```

- *Type:* *f64

---

##### `PypiPackageRequestsForwarding`<sup>Required</sup> <a name="PypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding"></a>

```go
func PypiPackageRequestsForwarding() interface{}
```

- *Type:* interface{}

---

##### `RateLimitingResponseText`<sup>Required</sup> <a name="RateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText"></a>

```go
func RateLimitingResponseText() *string
```

- *Type:* *string

---

##### `RawBlobRequestLimit`<sup>Required</sup> <a name="RawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit"></a>

```go
func RawBlobRequestLimit() *f64
```

- *Type:* *f64

---

##### `RecaptchaEnabled`<sup>Required</sup> <a name="RecaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled"></a>

```go
func RecaptchaEnabled() interface{}
```

- *Type:* interface{}

---

##### `RecaptchaPrivateKey`<sup>Required</sup> <a name="RecaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey"></a>

```go
func RecaptchaPrivateKey() *string
```

- *Type:* *string

---

##### `RecaptchaSiteKey`<sup>Required</sup> <a name="RecaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey"></a>

```go
func RecaptchaSiteKey() *string
```

- *Type:* *string

---

##### `ReceiveMaxInputSize`<sup>Required</sup> <a name="ReceiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize"></a>

```go
func ReceiveMaxInputSize() *f64
```

- *Type:* *f64

---

##### `ReceptiveClusterAgentsEnabled`<sup>Required</sup> <a name="ReceptiveClusterAgentsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabled"></a>

```go
func ReceptiveClusterAgentsEnabled() interface{}
```

- *Type:* interface{}

---

##### `RememberMeEnabled`<sup>Required</sup> <a name="RememberMeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabled"></a>

```go
func RememberMeEnabled() interface{}
```

- *Type:* interface{}

---

##### `RepositoryChecksEnabled`<sup>Required</sup> <a name="RepositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled"></a>

```go
func RepositoryChecksEnabled() interface{}
```

- *Type:* interface{}

---

##### `RepositorySizeLimit`<sup>Required</sup> <a name="RepositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit"></a>

```go
func RepositorySizeLimit() *f64
```

- *Type:* *f64

---

##### `RepositoryStorages`<sup>Required</sup> <a name="RepositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages"></a>

```go
func RepositoryStorages() *[]*string
```

- *Type:* *[]*string

---

##### `RepositoryStoragesWeighted`<sup>Required</sup> <a name="RepositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted"></a>

```go
func RepositoryStoragesWeighted() *map[string]*f64
```

- *Type:* *map[string]*f64

---

##### `RequireAdminApprovalAfterUserSignup`<sup>Required</sup> <a name="RequireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup"></a>

```go
func RequireAdminApprovalAfterUserSignup() interface{}
```

- *Type:* interface{}

---

##### `RequireAdminTwoFactorAuthentication`<sup>Required</sup> <a name="RequireAdminTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthentication"></a>

```go
func RequireAdminTwoFactorAuthentication() interface{}
```

- *Type:* interface{}

---

##### `RequirePersonalAccessTokenExpiry`<sup>Required</sup> <a name="RequirePersonalAccessTokenExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiry"></a>

```go
func RequirePersonalAccessTokenExpiry() interface{}
```

- *Type:* interface{}

---

##### `RequireTwoFactorAuthentication`<sup>Required</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication"></a>

```go
func RequireTwoFactorAuthentication() interface{}
```

- *Type:* interface{}

---

##### `RestrictedVisibilityLevels`<sup>Required</sup> <a name="RestrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels"></a>

```go
func RestrictedVisibilityLevels() *[]*string
```

- *Type:* *[]*string

---

##### `RsaKeyRestriction`<sup>Required</sup> <a name="RsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction"></a>

```go
func RsaKeyRestriction() *f64
```

- *Type:* *f64

---

##### `SearchRateLimit`<sup>Required</sup> <a name="SearchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit"></a>

```go
func SearchRateLimit() *f64
```

- *Type:* *f64

---

##### `SearchRateLimitUnauthenticated`<sup>Required</sup> <a name="SearchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated"></a>

```go
func SearchRateLimitUnauthenticated() *f64
```

- *Type:* *f64

---

##### `SecurityApprovalPoliciesLimit`<sup>Required</sup> <a name="SecurityApprovalPoliciesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimit"></a>

```go
func SecurityApprovalPoliciesLimit() *f64
```

- *Type:* *f64

---

##### `SecurityPolicyGlobalGroupApproversEnabled`<sup>Required</sup> <a name="SecurityPolicyGlobalGroupApproversEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabled"></a>

```go
func SecurityPolicyGlobalGroupApproversEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecurityTxtContent`<sup>Required</sup> <a name="SecurityTxtContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContent"></a>

```go
func SecurityTxtContent() *string
```

- *Type:* *string

---

##### `SendUserConfirmationEmail`<sup>Required</sup> <a name="SendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail"></a>

```go
func SendUserConfirmationEmail() interface{}
```

- *Type:* interface{}

---

##### `ServiceAccessTokensExpirationEnforced`<sup>Required</sup> <a name="ServiceAccessTokensExpirationEnforced" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforced"></a>

```go
func ServiceAccessTokensExpirationEnforced() interface{}
```

- *Type:* interface{}

---

##### `SessionExpireDelay`<sup>Required</sup> <a name="SessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay"></a>

```go
func SessionExpireDelay() *f64
```

- *Type:* *f64

---

##### `SharedRunnersEnabled`<sup>Required</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled"></a>

```go
func SharedRunnersEnabled() interface{}
```

- *Type:* interface{}

---

##### `SharedRunnersMinutes`<sup>Required</sup> <a name="SharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes"></a>

```go
func SharedRunnersMinutes() *f64
```

- *Type:* *f64

---

##### `SharedRunnersText`<sup>Required</sup> <a name="SharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText"></a>

```go
func SharedRunnersText() *string
```

- *Type:* *string

---

##### `SidekiqJobLimiterCompressionThresholdBytes`<sup>Required</sup> <a name="SidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```go
func SidekiqJobLimiterCompressionThresholdBytes() *f64
```

- *Type:* *f64

---

##### `SidekiqJobLimiterLimitBytes`<sup>Required</sup> <a name="SidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes"></a>

```go
func SidekiqJobLimiterLimitBytes() *f64
```

- *Type:* *f64

---

##### `SidekiqJobLimiterMode`<sup>Required</sup> <a name="SidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode"></a>

```go
func SidekiqJobLimiterMode() *string
```

- *Type:* *string

---

##### `SignInText`<sup>Required</sup> <a name="SignInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText"></a>

```go
func SignInText() *string
```

- *Type:* *string

---

##### `SignupEnabled`<sup>Required</sup> <a name="SignupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled"></a>

```go
func SignupEnabled() interface{}
```

- *Type:* interface{}

---

##### `SilentAdminExportsEnabled`<sup>Required</sup> <a name="SilentAdminExportsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabled"></a>

```go
func SilentAdminExportsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SilentModeEnabled`<sup>Required</sup> <a name="SilentModeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabled"></a>

```go
func SilentModeEnabled() interface{}
```

- *Type:* interface{}

---

##### `SlackAppEnabled`<sup>Required</sup> <a name="SlackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled"></a>

```go
func SlackAppEnabled() interface{}
```

- *Type:* interface{}

---

##### `SlackAppId`<sup>Required</sup> <a name="SlackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId"></a>

```go
func SlackAppId() *string
```

- *Type:* *string

---

##### `SlackAppSecret`<sup>Required</sup> <a name="SlackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret"></a>

```go
func SlackAppSecret() *string
```

- *Type:* *string

---

##### `SlackAppSigningSecret`<sup>Required</sup> <a name="SlackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret"></a>

```go
func SlackAppSigningSecret() *string
```

- *Type:* *string

---

##### `SlackAppVerificationToken`<sup>Required</sup> <a name="SlackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken"></a>

```go
func SlackAppVerificationToken() *string
```

- *Type:* *string

---

##### `SnippetSizeLimit`<sup>Required</sup> <a name="SnippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit"></a>

```go
func SnippetSizeLimit() *f64
```

- *Type:* *f64

---

##### `SnowplowAppId`<sup>Required</sup> <a name="SnowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId"></a>

```go
func SnowplowAppId() *string
```

- *Type:* *string

---

##### `SnowplowCollectorHostname`<sup>Required</sup> <a name="SnowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname"></a>

```go
func SnowplowCollectorHostname() *string
```

- *Type:* *string

---

##### `SnowplowCookieDomain`<sup>Required</sup> <a name="SnowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain"></a>

```go
func SnowplowCookieDomain() *string
```

- *Type:* *string

---

##### `SnowplowDatabaseCollectorHostname`<sup>Required</sup> <a name="SnowplowDatabaseCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostname"></a>

```go
func SnowplowDatabaseCollectorHostname() *string
```

- *Type:* *string

---

##### `SnowplowEnabled`<sup>Required</sup> <a name="SnowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled"></a>

```go
func SnowplowEnabled() interface{}
```

- *Type:* interface{}

---

##### `SourcegraphEnabled`<sup>Required</sup> <a name="SourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled"></a>

```go
func SourcegraphEnabled() interface{}
```

- *Type:* interface{}

---

##### `SourcegraphPublicOnly`<sup>Required</sup> <a name="SourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly"></a>

```go
func SourcegraphPublicOnly() interface{}
```

- *Type:* interface{}

---

##### `SourcegraphUrl`<sup>Required</sup> <a name="SourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl"></a>

```go
func SourcegraphUrl() *string
```

- *Type:* *string

---

##### `SpamCheckApiKey`<sup>Required</sup> <a name="SpamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey"></a>

```go
func SpamCheckApiKey() *string
```

- *Type:* *string

---

##### `SpamCheckEndpointEnabled`<sup>Required</sup> <a name="SpamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled"></a>

```go
func SpamCheckEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `SpamCheckEndpointUrl`<sup>Required</sup> <a name="SpamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl"></a>

```go
func SpamCheckEndpointUrl() *string
```

- *Type:* *string

---

##### `StaticObjectsExternalStorageAuthToken`<sup>Required</sup> <a name="StaticObjectsExternalStorageAuthToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthToken"></a>

```go
func StaticObjectsExternalStorageAuthToken() *string
```

- *Type:* *string

---

##### `StaticObjectsExternalStorageUrl`<sup>Required</sup> <a name="StaticObjectsExternalStorageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrl"></a>

```go
func StaticObjectsExternalStorageUrl() *string
```

- *Type:* *string

---

##### `SuggestPipelineEnabled`<sup>Required</sup> <a name="SuggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled"></a>

```go
func SuggestPipelineEnabled() interface{}
```

- *Type:* interface{}

---

##### `TerminalMaxSessionTime`<sup>Required</sup> <a name="TerminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime"></a>

```go
func TerminalMaxSessionTime() *f64
```

- *Type:* *f64

---

##### `Terms`<sup>Required</sup> <a name="Terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms"></a>

```go
func Terms() *string
```

- *Type:* *string

---

##### `ThrottleAuthenticatedApiEnabled`<sup>Required</sup> <a name="ThrottleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled"></a>

```go
func ThrottleAuthenticatedApiEnabled() interface{}
```

- *Type:* interface{}

---

##### `ThrottleAuthenticatedApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```go
func ThrottleAuthenticatedApiPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```go
func ThrottleAuthenticatedApiRequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedPackagesApiEnabled`<sup>Required</sup> <a name="ThrottleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled"></a>

```go
func ThrottleAuthenticatedPackagesApiEnabled() interface{}
```

- *Type:* interface{}

---

##### `ThrottleAuthenticatedPackagesApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```go
func ThrottleAuthenticatedPackagesApiPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedPackagesApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```go
func ThrottleAuthenticatedPackagesApiRequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedWebEnabled`<sup>Required</sup> <a name="ThrottleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled"></a>

```go
func ThrottleAuthenticatedWebEnabled() interface{}
```

- *Type:* interface{}

---

##### `ThrottleAuthenticatedWebPeriodInSeconds`<sup>Required</sup> <a name="ThrottleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```go
func ThrottleAuthenticatedWebPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `ThrottleAuthenticatedWebRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```go
func ThrottleAuthenticatedWebRequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedApiEnabled`<sup>Required</sup> <a name="ThrottleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled"></a>

```go
func ThrottleUnauthenticatedApiEnabled() interface{}
```

- *Type:* interface{}

---

##### `ThrottleUnauthenticatedApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```go
func ThrottleUnauthenticatedApiPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```go
func ThrottleUnauthenticatedApiRequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedPackagesApiEnabled`<sup>Required</sup> <a name="ThrottleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```go
func ThrottleUnauthenticatedPackagesApiEnabled() interface{}
```

- *Type:* interface{}

---

##### `ThrottleUnauthenticatedPackagesApiPeriodInSeconds`<sup>Required</sup> <a name="ThrottleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```go
func ThrottleUnauthenticatedPackagesApiPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedPackagesApiRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```go
func ThrottleUnauthenticatedPackagesApiRequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedWebEnabled`<sup>Required</sup> <a name="ThrottleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled"></a>

```go
func ThrottleUnauthenticatedWebEnabled() interface{}
```

- *Type:* interface{}

---

##### `ThrottleUnauthenticatedWebPeriodInSeconds`<sup>Required</sup> <a name="ThrottleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```go
func ThrottleUnauthenticatedWebPeriodInSeconds() *f64
```

- *Type:* *f64

---

##### `ThrottleUnauthenticatedWebRequestsPerPeriod`<sup>Required</sup> <a name="ThrottleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```go
func ThrottleUnauthenticatedWebRequestsPerPeriod() *f64
```

- *Type:* *f64

---

##### `TimeTrackingLimitToHours`<sup>Required</sup> <a name="TimeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours"></a>

```go
func TimeTrackingLimitToHours() interface{}
```

- *Type:* interface{}

---

##### `TwoFactorGracePeriod`<sup>Required</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod"></a>

```go
func TwoFactorGracePeriod() *f64
```

- *Type:* *f64

---

##### `UnconfirmedUsersDeleteAfterDays`<sup>Required</sup> <a name="UnconfirmedUsersDeleteAfterDays" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDays"></a>

```go
func UnconfirmedUsersDeleteAfterDays() *f64
```

- *Type:* *f64

---

##### `UniqueIpsLimitEnabled`<sup>Required</sup> <a name="UniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled"></a>

```go
func UniqueIpsLimitEnabled() interface{}
```

- *Type:* interface{}

---

##### `UniqueIpsLimitPerUser`<sup>Required</sup> <a name="UniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser"></a>

```go
func UniqueIpsLimitPerUser() *f64
```

- *Type:* *f64

---

##### `UniqueIpsLimitTimeWindow`<sup>Required</sup> <a name="UniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow"></a>

```go
func UniqueIpsLimitTimeWindow() *f64
```

- *Type:* *f64

---

##### `UpdateRunnerVersionsEnabled`<sup>Required</sup> <a name="UpdateRunnerVersionsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabled"></a>

```go
func UpdateRunnerVersionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `UsagePingEnabled`<sup>Required</sup> <a name="UsagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled"></a>

```go
func UsagePingEnabled() interface{}
```

- *Type:* interface{}

---

##### `UseClickhouseForAnalytics`<sup>Required</sup> <a name="UseClickhouseForAnalytics" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalytics"></a>

```go
func UseClickhouseForAnalytics() interface{}
```

- *Type:* interface{}

---

##### `UserDeactivationEmailsEnabled`<sup>Required</sup> <a name="UserDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled"></a>

```go
func UserDeactivationEmailsEnabled() interface{}
```

- *Type:* interface{}

---

##### `UserDefaultExternal`<sup>Required</sup> <a name="UserDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal"></a>

```go
func UserDefaultExternal() interface{}
```

- *Type:* interface{}

---

##### `UserDefaultInternalRegex`<sup>Required</sup> <a name="UserDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex"></a>

```go
func UserDefaultInternalRegex() *string
```

- *Type:* *string

---

##### `UserDefaultsToPrivateProfile`<sup>Required</sup> <a name="UserDefaultsToPrivateProfile" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfile"></a>

```go
func UserDefaultsToPrivateProfile() interface{}
```

- *Type:* interface{}

---

##### `UserOauthApplications`<sup>Required</sup> <a name="UserOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications"></a>

```go
func UserOauthApplications() interface{}
```

- *Type:* interface{}

---

##### `UserShowAddSshKeyMessage`<sup>Required</sup> <a name="UserShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage"></a>

```go
func UserShowAddSshKeyMessage() interface{}
```

- *Type:* interface{}

---

##### `ValidRunnerRegistrars`<sup>Required</sup> <a name="ValidRunnerRegistrars" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrars"></a>

```go
func ValidRunnerRegistrars() *[]*string
```

- *Type:* *[]*string

---

##### `VersionCheckEnabled`<sup>Required</sup> <a name="VersionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled"></a>

```go
func VersionCheckEnabled() interface{}
```

- *Type:* interface{}

---

##### `WebIdeClientsidePreviewEnabled`<sup>Required</sup> <a name="WebIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled"></a>

```go
func WebIdeClientsidePreviewEnabled() interface{}
```

- *Type:* interface{}

---

##### `WhatsNewVariant`<sup>Required</sup> <a name="WhatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant"></a>

```go
func WhatsNewVariant() *string
```

- *Type:* *string

---

##### `WikiPageMaxContentBytes`<sup>Required</sup> <a name="WikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes"></a>

```go
func WikiPageMaxContentBytes() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

&applicationsettings.ApplicationSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AbuseNotificationEmail: *string,
	AdminMode: interface{},
	AfterSignOutPath: *string,
	AfterSignUpText: *string,
	AkismetApiKey: *string,
	AkismetEnabled: interface{},
	AllowAccountDeletion: interface{},
	AllowGroupOwnersToManageLdap: interface{},
	AllowLocalRequestsFromSystemHooks: interface{},
	AllowLocalRequestsFromWebHooksAndServices: interface{},
	AllowProjectCreationForGuestAndBelow: interface{},
	AllowRunnerRegistrationToken: interface{},
	ArchiveBuildsInHumanReadable: *string,
	AsciidocMaxIncludes: *f64,
	AssetProxyAllowlist: *[]*string,
	AssetProxyEnabled: interface{},
	AssetProxySecretKey: *string,
	AssetProxyUrl: *string,
	AuthorizedKeysEnabled: interface{},
	AutoBanUserOnExcessiveProjectsDownload: interface{},
	AutoDevopsDomain: *string,
	AutoDevopsEnabled: interface{},
	AutomaticPurchasedStorageAllocation: interface{},
	BulkImportConcurrentPipelineBatchLimit: *f64,
	BulkImportEnabled: interface{},
	BulkImportMaxDownloadFileSize: *f64,
	CanCreateGroup: interface{},
	CheckNamespacePlan: interface{},
	CiMaxIncludes: *f64,
	CiMaxTotalYamlSizeBytes: *f64,
	CommitEmailHostname: *string,
	ConcurrentBitbucketImportJobsLimit: *f64,
	ConcurrentBitbucketServerImportJobsLimit: *f64,
	ConcurrentGithubImportJobsLimit: *f64,
	ContainerExpirationPoliciesEnableHistoricEntries: interface{},
	ContainerRegistryCleanupTagsServiceMaxListSize: *f64,
	ContainerRegistryDeleteTagsServiceTimeout: *f64,
	ContainerRegistryExpirationPoliciesCaching: interface{},
	ContainerRegistryExpirationPoliciesWorkerCapacity: *f64,
	ContainerRegistryTokenExpireDelay: *f64,
	DeactivateDormantUsers: interface{},
	DeactivateDormantUsersPeriod: *f64,
	DecompressArchiveFileTimeout: *f64,
	DefaultArtifactsExpireIn: *string,
	DefaultBranchName: *string,
	DefaultBranchProtection: *f64,
	DefaultBranchProtectionDefaults: github.com/cdktf/cdktf-provider-gitlab-go/gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults,
	DefaultCiConfigPath: *string,
	DefaultGroupVisibility: *string,
	DefaultPreferredLanguage: *string,
	DefaultProjectCreation: *f64,
	DefaultProjectsLimit: *f64,
	DefaultProjectVisibility: *string,
	DefaultSnippetVisibility: *string,
	DefaultSyntaxHighlightingTheme: *f64,
	DeleteInactiveProjects: interface{},
	DeleteUnconfirmedUsers: interface{},
	DeletionAdjournedPeriod: *f64,
	DiagramsnetEnabled: interface{},
	DiagramsnetUrl: *string,
	DiffMaxFiles: *f64,
	DiffMaxLines: *f64,
	DiffMaxPatchBytes: *f64,
	DisableAdminOauthScopes: interface{},
	DisabledOauthSignInSources: *[]*string,
	DisableFeedToken: interface{},
	DisablePersonalAccessTokens: interface{},
	DnsRebindingProtectionEnabled: interface{},
	DomainAllowlist: *[]*string,
	DomainDenylist: *[]*string,
	DomainDenylistEnabled: interface{},
	DownstreamPipelineTriggerLimitPerProjectUserSha: *f64,
	DsaKeyRestriction: *f64,
	DuoFeaturesEnabled: interface{},
	EcdsaKeyRestriction: *f64,
	EcdsaSkKeyRestriction: *f64,
	Ed25519KeyRestriction: *f64,
	Ed25519SkKeyRestriction: *f64,
	EksAccessKeyId: *string,
	EksAccountId: *string,
	EksIntegrationEnabled: interface{},
	EksSecretAccessKey: *string,
	ElasticsearchAws: interface{},
	ElasticsearchAwsAccessKey: *string,
	ElasticsearchAwsRegion: *string,
	ElasticsearchAwsSecretAccessKey: *string,
	ElasticsearchIndexedFieldLengthLimit: *f64,
	ElasticsearchIndexedFileSizeLimitKb: *f64,
	ElasticsearchIndexing: interface{},
	ElasticsearchLimitIndexing: interface{},
	ElasticsearchMaxBulkConcurrency: *f64,
	ElasticsearchMaxBulkSizeMb: *f64,
	ElasticsearchMaxCodeIndexingConcurrency: *f64,
	ElasticsearchNamespaceIds: *[]*f64,
	ElasticsearchPassword: *string,
	ElasticsearchProjectIds: *[]*f64,
	ElasticsearchRequeueWorkers: interface{},
	ElasticsearchSearch: interface{},
	ElasticsearchUrl: *[]*string,
	ElasticsearchUsername: *string,
	ElasticsearchWorkerNumberOfShards: *f64,
	EmailAdditionalText: *string,
	EmailAuthorInBody: interface{},
	EmailConfirmationSetting: *string,
	EnableArtifactExternalRedirectWarningPage: interface{},
	EnabledGitAccessProtocol: *string,
	EnforceNamespaceStorageLimit: interface{},
	EnforceTerms: interface{},
	ExternalAuthClientCert: *string,
	ExternalAuthClientKey: *string,
	ExternalAuthClientKeyPass: *string,
	ExternalAuthorizationServiceDefaultLabel: *string,
	ExternalAuthorizationServiceEnabled: interface{},
	ExternalAuthorizationServiceTimeout: *f64,
	ExternalAuthorizationServiceUrl: *string,
	ExternalPipelineValidationServiceTimeout: *f64,
	ExternalPipelineValidationServiceToken: *string,
	ExternalPipelineValidationServiceUrl: *string,
	FailedLoginAttemptsUnlockPeriodInMinutes: *f64,
	FileTemplateProjectId: *f64,
	FirstDayOfWeek: *f64,
	GeoNodeAllowedIps: *string,
	GeoStatusTimeout: *f64,
	GitalyTimeoutDefault: *f64,
	GitalyTimeoutFast: *f64,
	GitalyTimeoutMedium: *f64,
	GitlabShellOperationLimit: *f64,
	GitpodEnabled: interface{},
	GitpodUrl: *string,
	GitRateLimitUsersAlertlist: *[]*f64,
	GitRateLimitUsersAllowlist: *[]*string,
	GitTwoFactorSessionExpiry: *f64,
	GloballyAllowedIps: *string,
	GrafanaEnabled: interface{},
	GrafanaUrl: *string,
	GravatarEnabled: interface{},
	GroupOwnersCanManageDefaultBranchProtection: interface{},
	HashedStorageEnabled: interface{},
	HelpPageHideCommercialContent: interface{},
	HelpPageSupportUrl: *string,
	HelpPageText: *string,
	HelpText: *string,
	HideThirdPartyOffers: interface{},
	HomePageUrl: *string,
	HousekeepingEnabled: interface{},
	HousekeepingFullRepackPeriod: *f64,
	HousekeepingGcPeriod: *f64,
	HousekeepingIncrementalRepackPeriod: *f64,
	HousekeepingOptimizeRepositoryPeriod: *f64,
	HtmlEmailsEnabled: interface{},
	Id: *string,
	ImportSources: *[]*string,
	InactiveProjectsDeleteAfterMonths: *f64,
	InactiveProjectsMinSizeMb: *f64,
	InactiveProjectsSendWarningEmailAfterMonths: *f64,
	IncludeOptionalMetricsInServicePing: interface{},
	InProductMarketingEmailsEnabled: interface{},
	InvisibleCaptchaEnabled: interface{},
	IssuesCreateLimit: *f64,
	JiraConnectApplicationKey: *string,
	JiraConnectProxyUrl: *string,
	JiraConnectPublicKeyStorageEnabled: interface{},
	KeepLatestArtifact: interface{},
	LocalMarkdownVersion: *f64,
	LockDuoFeaturesEnabled: interface{},
	MailgunEventsEnabled: interface{},
	MailgunSigningKey: *string,
	MaintenanceMode: interface{},
	MaintenanceModeMessage: *string,
	MavenPackageRequestsForwarding: interface{},
	MaxArtifactsSize: *f64,
	MaxAttachmentSize: *f64,
	MaxDecompressedArchiveSize: *f64,
	MaxExportSize: *f64,
	MaxImportRemoteFileSize: *f64,
	MaxImportSize: *f64,
	MaxLoginAttempts: *f64,
	MaxNumberOfRepositoryDownloads: *f64,
	MaxNumberOfRepositoryDownloadsWithinTimePeriod: *f64,
	MaxPagesSize: *f64,
	MaxPersonalAccessTokenLifetime: *f64,
	MaxSshKeyLifetime: *f64,
	MaxTerraformStateSizeBytes: *f64,
	MetricsMethodCallThreshold: *f64,
	MinimumPasswordLength: *f64,
	MirrorAvailable: interface{},
	MirrorCapacityThreshold: *f64,
	MirrorMaxCapacity: *f64,
	MirrorMaxDelay: *f64,
	NpmPackageRequestsForwarding: interface{},
	NugetSkipMetadataUrlValidation: interface{},
	OutboundLocalRequestsWhitelist: *[]*string,
	PackageMetadataPurlTypes: *[]*f64,
	PackageRegistryAllowAnyoneToPullOption: interface{},
	PackageRegistryCleanupPoliciesWorkerCapacity: *f64,
	PagesDomainVerificationEnabled: interface{},
	PasswordAuthenticationEnabledForGit: interface{},
	PasswordAuthenticationEnabledForWeb: interface{},
	PasswordLowercaseRequired: interface{},
	PasswordNumberRequired: interface{},
	PasswordSymbolRequired: interface{},
	PasswordUppercaseRequired: interface{},
	PerformanceBarAllowedGroupPath: *string,
	PersonalAccessTokenPrefix: *string,
	PipelineLimitPerProjectUserSha: *f64,
	PlantumlEnabled: interface{},
	PlantumlUrl: *string,
	PollingIntervalMultiplier: *f64,
	ProjectExportEnabled: interface{},
	ProjectJobsApiRateLimit: *f64,
	ProjectsApiRateLimitUnauthenticated: *f64,
	PrometheusMetricsEnabled: interface{},
	ProtectedCiVariables: interface{},
	PushEventActivitiesLimit: *f64,
	PushEventHooksLimit: *f64,
	PypiPackageRequestsForwarding: interface{},
	RateLimitingResponseText: *string,
	RawBlobRequestLimit: *f64,
	RecaptchaEnabled: interface{},
	RecaptchaPrivateKey: *string,
	RecaptchaSiteKey: *string,
	ReceiveMaxInputSize: *f64,
	ReceptiveClusterAgentsEnabled: interface{},
	RememberMeEnabled: interface{},
	RepositoryChecksEnabled: interface{},
	RepositorySizeLimit: *f64,
	RepositoryStorages: *[]*string,
	RepositoryStoragesWeighted: *map[string]*f64,
	RequireAdminApprovalAfterUserSignup: interface{},
	RequireAdminTwoFactorAuthentication: interface{},
	RequirePersonalAccessTokenExpiry: interface{},
	RequireTwoFactorAuthentication: interface{},
	RestrictedVisibilityLevels: *[]*string,
	RsaKeyRestriction: *f64,
	SearchRateLimit: *f64,
	SearchRateLimitUnauthenticated: *f64,
	SecurityApprovalPoliciesLimit: *f64,
	SecurityPolicyGlobalGroupApproversEnabled: interface{},
	SecurityTxtContent: *string,
	SendUserConfirmationEmail: interface{},
	ServiceAccessTokensExpirationEnforced: interface{},
	SessionExpireDelay: *f64,
	SharedRunnersEnabled: interface{},
	SharedRunnersMinutes: *f64,
	SharedRunnersText: *string,
	SidekiqJobLimiterCompressionThresholdBytes: *f64,
	SidekiqJobLimiterLimitBytes: *f64,
	SidekiqJobLimiterMode: *string,
	SignInText: *string,
	SignupEnabled: interface{},
	SilentAdminExportsEnabled: interface{},
	SilentModeEnabled: interface{},
	SlackAppEnabled: interface{},
	SlackAppId: *string,
	SlackAppSecret: *string,
	SlackAppSigningSecret: *string,
	SlackAppVerificationToken: *string,
	SnippetSizeLimit: *f64,
	SnowplowAppId: *string,
	SnowplowCollectorHostname: *string,
	SnowplowCookieDomain: *string,
	SnowplowDatabaseCollectorHostname: *string,
	SnowplowEnabled: interface{},
	SourcegraphEnabled: interface{},
	SourcegraphPublicOnly: interface{},
	SourcegraphUrl: *string,
	SpamCheckApiKey: *string,
	SpamCheckEndpointEnabled: interface{},
	SpamCheckEndpointUrl: *string,
	StaticObjectsExternalStorageAuthToken: *string,
	StaticObjectsExternalStorageUrl: *string,
	SuggestPipelineEnabled: interface{},
	TerminalMaxSessionTime: *f64,
	Terms: *string,
	ThrottleAuthenticatedApiEnabled: interface{},
	ThrottleAuthenticatedApiPeriodInSeconds: *f64,
	ThrottleAuthenticatedApiRequestsPerPeriod: *f64,
	ThrottleAuthenticatedPackagesApiEnabled: interface{},
	ThrottleAuthenticatedPackagesApiPeriodInSeconds: *f64,
	ThrottleAuthenticatedPackagesApiRequestsPerPeriod: *f64,
	ThrottleAuthenticatedWebEnabled: interface{},
	ThrottleAuthenticatedWebPeriodInSeconds: *f64,
	ThrottleAuthenticatedWebRequestsPerPeriod: *f64,
	ThrottleUnauthenticatedApiEnabled: interface{},
	ThrottleUnauthenticatedApiPeriodInSeconds: *f64,
	ThrottleUnauthenticatedApiRequestsPerPeriod: *f64,
	ThrottleUnauthenticatedPackagesApiEnabled: interface{},
	ThrottleUnauthenticatedPackagesApiPeriodInSeconds: *f64,
	ThrottleUnauthenticatedPackagesApiRequestsPerPeriod: *f64,
	ThrottleUnauthenticatedWebEnabled: interface{},
	ThrottleUnauthenticatedWebPeriodInSeconds: *f64,
	ThrottleUnauthenticatedWebRequestsPerPeriod: *f64,
	TimeTrackingLimitToHours: interface{},
	TwoFactorGracePeriod: *f64,
	UnconfirmedUsersDeleteAfterDays: *f64,
	UniqueIpsLimitEnabled: interface{},
	UniqueIpsLimitPerUser: *f64,
	UniqueIpsLimitTimeWindow: *f64,
	UpdateRunnerVersionsEnabled: interface{},
	UsagePingEnabled: interface{},
	UseClickhouseForAnalytics: interface{},
	UserDeactivationEmailsEnabled: interface{},
	UserDefaultExternal: interface{},
	UserDefaultInternalRegex: *string,
	UserDefaultsToPrivateProfile: interface{},
	UserOauthApplications: interface{},
	UserShowAddSshKeyMessage: interface{},
	ValidRunnerRegistrars: *[]*string,
	VersionCheckEnabled: interface{},
	WebIdeClientsidePreviewEnabled: interface{},
	WhatsNewVariant: *string,
	WikiPageMaxContentBytes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail">AbuseNotificationEmail</a></code> | <code>*string</code> | If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode">AdminMode</a></code> | <code>interface{}</code> | Require administrators to enable Admin Mode by re-authenticating for administrative tasks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath">AfterSignOutPath</a></code> | <code>*string</code> | Where to redirect users after logout. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText">AfterSignUpText</a></code> | <code>*string</code> | Text shown to the user after signing up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey">AkismetApiKey</a></code> | <code>*string</code> | API key for Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled">AkismetEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowAccountDeletion">AllowAccountDeletion</a></code> | <code>interface{}</code> | Set to true to allow users to delete their accounts. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap">AllowGroupOwnersToManageLdap</a></code> | <code>interface{}</code> | Set to true to allow group owners to manage LDAP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks">AllowLocalRequestsFromSystemHooks</a></code> | <code>interface{}</code> | Allow requests to the local network from system hooks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices">AllowLocalRequestsFromWebHooksAndServices</a></code> | <code>interface{}</code> | Allow requests to the local network from web hooks and services. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowProjectCreationForGuestAndBelow">AllowProjectCreationForGuestAndBelow</a></code> | <code>interface{}</code> | Indicates whether users assigned up to the Guest role can create groups and personal projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowRunnerRegistrationToken">AllowRunnerRegistrationToken</a></code> | <code>interface{}</code> | Allow using a registration token to create a runner. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable">ArchiveBuildsInHumanReadable</a></code> | <code>*string</code> | Set the duration for which the jobs are considered as old and expired. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.asciidocMaxIncludes">AsciidocMaxIncludes</a></code> | <code>*f64</code> | Maximum limit of AsciiDoc include directives being processed in any one document. Maximum: 64. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist">AssetProxyAllowlist</a></code> | <code>*[]*string</code> | Assets that match these domains are not proxied. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled">AssetProxyEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey">AssetProxySecretKey</a></code> | <code>*string</code> | Shared secret with the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl">AssetProxyUrl</a></code> | <code>*string</code> | URL of the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled">AuthorizedKeysEnabled</a></code> | <code>interface{}</code> | By default, we write to the authorized_keys file to support Git over SSH without additional configuration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoBanUserOnExcessiveProjectsDownload">AutoBanUserOnExcessiveProjectsDownload</a></code> | <code>interface{}</code> | When enabled, users will get automatically banned from the application when they download more than the maximum number of unique projects in the time period specified by max_number_of_repository_downloads and max_number_of_repository_downloads_within_time_period respectively. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain">AutoDevopsDomain</a></code> | <code>*string</code> | Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | Enable Auto DevOps for projects by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation">AutomaticPurchasedStorageAllocation</a></code> | <code>interface{}</code> | Enabling this permits automatic allocation of purchased storage in a namespace. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportConcurrentPipelineBatchLimit">BulkImportConcurrentPipelineBatchLimit</a></code> | <code>*f64</code> | Maximum simultaneous Direct Transfer batches to process. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportEnabled">BulkImportEnabled</a></code> | <code>interface{}</code> | Enable migrating GitLab groups by direct transfer. Introduced in GitLab 15.8. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportMaxDownloadFileSize">BulkImportMaxDownloadFileSize</a></code> | <code>*f64</code> | Maximum download file size when importing from source GitLab instances by direct transfer. Introduced in GitLab 16.3. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup">CanCreateGroup</a></code> | <code>interface{}</code> | Indicates whether users can create top-level groups. Introduced in GitLab 15.5. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan">CheckNamespacePlan</a></code> | <code>interface{}</code> | Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxIncludes">CiMaxIncludes</a></code> | <code>*f64</code> | The maximum number of includes per pipeline. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxTotalYamlSizeBytes">CiMaxTotalYamlSizeBytes</a></code> | <code>*f64</code> | The maximum amount of memory, in bytes, that can be allocated for the pipeline configuration, with all included YAML configuration files. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname">CommitEmailHostname</a></code> | <code>*string</code> | Custom hostname (for private commit emails). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketImportJobsLimit">ConcurrentBitbucketImportJobsLimit</a></code> | <code>*f64</code> | Maximum number of simultaneous import jobs for the Bitbucket Cloud importer. Introduced in GitLab 16.11. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketServerImportJobsLimit">ConcurrentBitbucketServerImportJobsLimit</a></code> | <code>*f64</code> | Maximum number of simultaneous import jobs for the Bitbucket Server importer. Introduced in GitLab 16.11. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentGithubImportJobsLimit">ConcurrentGithubImportJobsLimit</a></code> | <code>*f64</code> | Maximum number of simultaneous import jobs for the GitHub importer. Introduced in GitLab 16.11. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries">ContainerExpirationPoliciesEnableHistoricEntries</a></code> | <code>interface{}</code> | Enable cleanup policies for all projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize">ContainerRegistryCleanupTagsServiceMaxListSize</a></code> | <code>*f64</code> | The maximum number of tags that can be deleted in a single execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout">ContainerRegistryDeleteTagsServiceTimeout</a></code> | <code>*f64</code> | The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching">ContainerRegistryExpirationPoliciesCaching</a></code> | <code>interface{}</code> | Caching during the execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity">ContainerRegistryExpirationPoliciesWorkerCapacity</a></code> | <code>*f64</code> | Number of workers for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay">ContainerRegistryTokenExpireDelay</a></code> | <code>*f64</code> | Container Registry token duration in minutes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers">DeactivateDormantUsers</a></code> | <code>interface{}</code> | Enable automatic deactivation of dormant users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsersPeriod">DeactivateDormantUsersPeriod</a></code> | <code>*f64</code> | Length of time (in days) after which a user is considered dormant. Introduced in GitLab 15.3. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.decompressArchiveFileTimeout">DecompressArchiveFileTimeout</a></code> | <code>*f64</code> | Default timeout for decompressing archived files, in seconds. Set to 0 to disable timeouts. Introduced in GitLab 16.4. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn">DefaultArtifactsExpireIn</a></code> | <code>*string</code> | Set the default expiration time for each job’s artifacts. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName">DefaultBranchName</a></code> | <code>*string</code> | Instance-level custom initial branch name (introduced in GitLab 13.2). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection">DefaultBranchProtection</a></code> | <code>*f64</code> | Determine if developers can push to the default branch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtectionDefaults">DefaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a></code> | default_branch_protection_defaults block. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath">DefaultCiConfigPath</a></code> | <code>*string</code> | Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility">DefaultGroupVisibility</a></code> | <code>*string</code> | What visibility level new groups receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultPreferredLanguage">DefaultPreferredLanguage</a></code> | <code>*string</code> | Default preferred language for users who are not logged in. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation">DefaultProjectCreation</a></code> | <code>*f64</code> | Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit">DefaultProjectsLimit</a></code> | <code>*f64</code> | Project limit per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility">DefaultProjectVisibility</a></code> | <code>*string</code> | What visibility level new projects receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility">DefaultSnippetVisibility</a></code> | <code>*string</code> | What visibility level new snippets receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSyntaxHighlightingTheme">DefaultSyntaxHighlightingTheme</a></code> | <code>*f64</code> | Default syntax highlighting theme for users who are new or not signed in. See IDs of available themes (https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/themes.rb#L16). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects">DeleteInactiveProjects</a></code> | <code>interface{}</code> | Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteUnconfirmedUsers">DeleteUnconfirmedUsers</a></code> | <code>interface{}</code> | Specifies whether users who have not confirmed their email should be deleted. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod">DeletionAdjournedPeriod</a></code> | <code>*f64</code> | The number of days to wait before deleting a project or group that is marked for deletion. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetEnabled">DiagramsnetEnabled</a></code> | <code>interface{}</code> | (If enabled, requires diagramsnet_url) Enable Diagrams.net integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetUrl">DiagramsnetUrl</a></code> | <code>*string</code> | The Diagrams.net instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles">DiffMaxFiles</a></code> | <code>*f64</code> | Maximum files in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines">DiffMaxLines</a></code> | <code>*f64</code> | Maximum lines in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes">DiffMaxPatchBytes</a></code> | <code>*f64</code> | Maximum diff patch size, in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableAdminOauthScopes">DisableAdminOauthScopes</a></code> | <code>interface{}</code> | Stops administrators from connecting their GitLab accounts to non-trusted OAuth 2.0 applications that have the api, read_api, read_repository, write_repository, read_registry, write_registry, or sudo scopes. Introduced in GitLab 15.6. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources">DisabledOauthSignInSources</a></code> | <code>*[]*string</code> | Disabled OAuth sign-in sources. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken">DisableFeedToken</a></code> | <code>interface{}</code> | Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disablePersonalAccessTokens">DisablePersonalAccessTokens</a></code> | <code>interface{}</code> | Disable personal access tokens. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled">DnsRebindingProtectionEnabled</a></code> | <code>interface{}</code> | Enforce DNS rebinding attack protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist">DomainAllowlist</a></code> | <code>*[]*string</code> | Force people to use only corporate emails for sign-up. Null means there is no restriction. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist">DomainDenylist</a></code> | <code>*[]*string</code> | Users with email addresses that match these domains cannot sign up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled">DomainDenylistEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.downstreamPipelineTriggerLimitPerProjectUserSha">DownstreamPipelineTriggerLimitPerProjectUserSha</a></code> | <code>*f64</code> | Maximum downstream pipeline trigger rate. Introduced in GitLab 16.10. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction">DsaKeyRestriction</a></code> | <code>*f64</code> | The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.duoFeaturesEnabled">DuoFeaturesEnabled</a></code> | <code>interface{}</code> | Indicates whether GitLab Duo features are enabled for this instance. Introduced in GitLab 16.10. Self-managed, Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction">EcdsaKeyRestriction</a></code> | <code>*f64</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction">EcdsaSkKeyRestriction</a></code> | <code>*f64</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction">Ed25519KeyRestriction</a></code> | <code>*f64</code> | The minimum allowed curve size (in bits) of an uploaded ED25519 key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction">Ed25519SkKeyRestriction</a></code> | <code>*f64</code> | The minimum allowed curve size (in bits) of an uploaded ED25519_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId">EksAccessKeyId</a></code> | <code>*string</code> | AWS IAM access key ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId">EksAccountId</a></code> | <code>*string</code> | Amazon account ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled">EksIntegrationEnabled</a></code> | <code>interface{}</code> | Enable integration with Amazon EKS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey">EksSecretAccessKey</a></code> | <code>*string</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws">ElasticsearchAws</a></code> | <code>interface{}</code> | Enable the use of AWS hosted Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey">ElasticsearchAwsAccessKey</a></code> | <code>*string</code> | AWS IAM access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion">ElasticsearchAwsRegion</a></code> | <code>*string</code> | The AWS region the Elasticsearch domain is configured. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey">ElasticsearchAwsSecretAccessKey</a></code> | <code>*string</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit">ElasticsearchIndexedFieldLengthLimit</a></code> | <code>*f64</code> | Maximum size of text fields to index by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb">ElasticsearchIndexedFileSizeLimitKb</a></code> | <code>*f64</code> | Maximum size of repository and wiki files that are indexed by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing">ElasticsearchIndexing</a></code> | <code>interface{}</code> | Enable Elasticsearch indexing. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing">ElasticsearchLimitIndexing</a></code> | <code>interface{}</code> | Limit Elasticsearch to index certain namespaces and projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency">ElasticsearchMaxBulkConcurrency</a></code> | <code>*f64</code> | Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb">ElasticsearchMaxBulkSizeMb</a></code> | <code>*f64</code> | Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxCodeIndexingConcurrency">ElasticsearchMaxCodeIndexingConcurrency</a></code> | <code>*f64</code> | Maximum concurrency of Elasticsearch code indexing background jobs. This only applies to repository indexing operations. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds">ElasticsearchNamespaceIds</a></code> | <code>*[]*f64</code> | The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword">ElasticsearchPassword</a></code> | <code>*string</code> | The password of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds">ElasticsearchProjectIds</a></code> | <code>*[]*f64</code> | The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchRequeueWorkers">ElasticsearchRequeueWorkers</a></code> | <code>interface{}</code> | Enable automatic requeuing of indexing workers. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch">ElasticsearchSearch</a></code> | <code>interface{}</code> | Enable Elasticsearch search. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl">ElasticsearchUrl</a></code> | <code>*[]*string</code> | The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername">ElasticsearchUsername</a></code> | <code>*string</code> | The username of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchWorkerNumberOfShards">ElasticsearchWorkerNumberOfShards</a></code> | <code>*f64</code> | Number of indexing worker shards. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText">EmailAdditionalText</a></code> | <code>*string</code> | Additional text added to the bottom of every email for legal/auditing/compliance reasons. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody">EmailAuthorInBody</a></code> | <code>interface{}</code> | Some email servers do not support overriding the email sender name. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailConfirmationSetting">EmailConfirmationSetting</a></code> | <code>*string</code> | Specifies whether users must confirm their email before sign in. Possible values are off, soft, and hard. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enableArtifactExternalRedirectWarningPage">EnableArtifactExternalRedirectWarningPage</a></code> | <code>interface{}</code> | Show the external redirect page that warns you about user-generated content in GitLab Pages. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol">EnabledGitAccessProtocol</a></code> | <code>*string</code> | Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit">EnforceNamespaceStorageLimit</a></code> | <code>interface{}</code> | Enabling this permits enforcement of namespace storage limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms">EnforceTerms</a></code> | <code>interface{}</code> | (If enabled, requires: terms) Enforce application ToS to all users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert">ExternalAuthClientCert</a></code> | <code>*string</code> | (If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey">ExternalAuthClientKey</a></code> | <code>*string</code> | Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass">ExternalAuthClientKeyPass</a></code> | <code>*string</code> | Passphrase to use for the private key when authenticating with the external service this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel">ExternalAuthorizationServiceDefaultLabel</a></code> | <code>*string</code> | The default classification label to use when requesting authorization and no classification label has been specified on the project. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled">ExternalAuthorizationServiceEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout">ExternalAuthorizationServiceTimeout</a></code> | <code>*f64</code> | The timeout after which an authorization request is aborted, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl">ExternalAuthorizationServiceUrl</a></code> | <code>*string</code> | URL to which authorization requests are directed. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout">ExternalPipelineValidationServiceTimeout</a></code> | <code>*f64</code> | How long to wait for a response from the pipeline validation service. Assumes OK if it times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken">ExternalPipelineValidationServiceToken</a></code> | <code>*string</code> | Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl">ExternalPipelineValidationServiceUrl</a></code> | <code>*string</code> | URL to use for pipeline validation requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.failedLoginAttemptsUnlockPeriodInMinutes">FailedLoginAttemptsUnlockPeriodInMinutes</a></code> | <code>*f64</code> | Time period in minutes after which the user is unlocked when maximum number of failed sign-in attempts reached. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId">FileTemplateProjectId</a></code> | <code>*f64</code> | The ID of a project to load custom file templates from. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek">FirstDayOfWeek</a></code> | <code>*f64</code> | Start day of the week for calendar views and date pickers. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps">GeoNodeAllowedIps</a></code> | <code>*string</code> | Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout">GeoStatusTimeout</a></code> | <code>*f64</code> | The amount of seconds after which a request to get a secondary node status times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault">GitalyTimeoutDefault</a></code> | <code>*f64</code> | Default Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast">GitalyTimeoutFast</a></code> | <code>*f64</code> | Gitaly fast operation timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium">GitalyTimeoutMedium</a></code> | <code>*f64</code> | Medium Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitlabShellOperationLimit">GitlabShellOperationLimit</a></code> | <code>*f64</code> | Maximum number of Git operations per minute a user can perform. Introduced in GitLab 16.2. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodEnabled">GitpodEnabled</a></code> | <code>interface{}</code> | Enable Gitpod integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodUrl">GitpodUrl</a></code> | <code>*string</code> | The Gitpod instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAlertlist">GitRateLimitUsersAlertlist</a></code> | <code>*[]*f64</code> | List of user IDs that are emailed when the Git abuse rate limit is exceeded. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist">GitRateLimitUsersAllowlist</a></code> | <code>*[]*string</code> | List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2. Self-managed, Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry">GitTwoFactorSessionExpiry</a></code> | <code>*f64</code> | Maximum duration (in minutes) of a session for Git operations when 2FA is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.globallyAllowedIps">GloballyAllowedIps</a></code> | <code>*string</code> | Comma-separated list of IP addresses and CIDRs always allowed for inbound traffic. For example, 1.1.1.1, 2.2.2.0/24. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled">GrafanaEnabled</a></code> | <code>interface{}</code> | Enable Grafana. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl">GrafanaUrl</a></code> | <code>*string</code> | Grafana URL. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled">GravatarEnabled</a></code> | <code>interface{}</code> | Enable Gravatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection">GroupOwnersCanManageDefaultBranchProtection</a></code> | <code>interface{}</code> | Prevent overrides of default branch protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled">HashedStorageEnabled</a></code> | <code>interface{}</code> | Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent">HelpPageHideCommercialContent</a></code> | <code>interface{}</code> | Hide marketing-related entries from help. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl">HelpPageSupportUrl</a></code> | <code>*string</code> | Alternate support URL for help page and help dropdown. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText">HelpPageText</a></code> | <code>*string</code> | Custom text displayed on the help page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText">HelpText</a></code> | <code>*string</code> | GitLab server administrator information. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers">HideThirdPartyOffers</a></code> | <code>interface{}</code> | Do not display offers from third parties in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl">HomePageUrl</a></code> | <code>*string</code> | Redirect to this URL when not logged in. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled">HousekeepingEnabled</a></code> | <code>interface{}</code> | Enable or disable Git housekeeping. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod">HousekeepingFullRepackPeriod</a></code> | <code>*f64</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod">HousekeepingGcPeriod</a></code> | <code>*f64</code> | Number of Git pushes after which git gc is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod">HousekeepingIncrementalRepackPeriod</a></code> | <code>*f64</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingOptimizeRepositoryPeriod">HousekeepingOptimizeRepositoryPeriod</a></code> | <code>*f64</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled">HtmlEmailsEnabled</a></code> | <code>interface{}</code> | Enable HTML emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources">ImportSources</a></code> | <code>*[]*string</code> | Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths">InactiveProjectsDeleteAfterMonths</a></code> | <code>*f64</code> | If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb">InactiveProjectsMinSizeMb</a></code> | <code>*f64</code> | If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths">InactiveProjectsSendWarningEmailAfterMonths</a></code> | <code>*f64</code> | If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.includeOptionalMetricsInServicePing">IncludeOptionalMetricsInServicePing</a></code> | <code>interface{}</code> | Whether or not optional metrics are enabled in Service Ping. Introduced in GitLab 16.10. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled">InProductMarketingEmailsEnabled</a></code> | <code>interface{}</code> | Enable in-product marketing emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled">InvisibleCaptchaEnabled</a></code> | <code>interface{}</code> | Enable Invisible CAPTCHA spam detection during sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit">IssuesCreateLimit</a></code> | <code>*f64</code> | Max number of issue creation requests per minute per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectApplicationKey">JiraConnectApplicationKey</a></code> | <code>*string</code> | ID of the OAuth application used to authenticate with the GitLab for Jira Cloud app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectProxyUrl">JiraConnectProxyUrl</a></code> | <code>*string</code> | URL of the GitLab instance used as a proxy for the GitLab for Jira Cloud app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectPublicKeyStorageEnabled">JiraConnectPublicKeyStorageEnabled</a></code> | <code>interface{}</code> | Enable public key storage for the GitLab for Jira Cloud app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>interface{}</code> | Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion">LocalMarkdownVersion</a></code> | <code>*f64</code> | Increase this value when any cached Markdown should be invalidated. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lockDuoFeaturesEnabled">LockDuoFeaturesEnabled</a></code> | <code>interface{}</code> | Indicates whether the GitLab Duo features enabled setting is enforced for all subgroups. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled">MailgunEventsEnabled</a></code> | <code>interface{}</code> | Enable Mailgun event receiver. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey">MailgunSigningKey</a></code> | <code>*string</code> | The Mailgun HTTP webhook signing key for receiving events from webhook. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode">MaintenanceMode</a></code> | <code>interface{}</code> | When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage">MaintenanceModeMessage</a></code> | <code>*string</code> | Message displayed when instance is in maintenance mode. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mavenPackageRequestsForwarding">MavenPackageRequestsForwarding</a></code> | <code>interface{}</code> | Use repo.maven.apache.org as a default remote repository when the package is not found in the GitLab Package Registry for Maven. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize">MaxArtifactsSize</a></code> | <code>*f64</code> | Maximum artifacts size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize">MaxAttachmentSize</a></code> | <code>*f64</code> | Limit attachment size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxDecompressedArchiveSize">MaxDecompressedArchiveSize</a></code> | <code>*f64</code> | Maximum decompressed archive size in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize">MaxExportSize</a></code> | <code>*f64</code> | Maximum export size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportRemoteFileSize">MaxImportRemoteFileSize</a></code> | <code>*f64</code> | Maximum remote file size for imports from external object storages. Introduced in GitLab 16.3. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize">MaxImportSize</a></code> | <code>*f64</code> | Maximum import size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxLoginAttempts">MaxLoginAttempts</a></code> | <code>*f64</code> | Maximum number of sign-in attempts before locking out the user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads">MaxNumberOfRepositoryDownloads</a></code> | <code>*f64</code> | Maximum number of unique repositories a user can download in the specified time period before they are banned. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">MaxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | <code>*f64</code> | Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize">MaxPagesSize</a></code> | <code>*f64</code> | Maximum size of pages repositories in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime">MaxPersonalAccessTokenLifetime</a></code> | <code>*f64</code> | Maximum allowable lifetime for access tokens in days. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime">MaxSshKeyLifetime</a></code> | <code>*f64</code> | Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxTerraformStateSizeBytes">MaxTerraformStateSizeBytes</a></code> | <code>*f64</code> | Maximum size in bytes of the Terraform state files. Set this to 0 for unlimited file size. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold">MetricsMethodCallThreshold</a></code> | <code>*f64</code> | A method call is only tracked when it takes longer than the given amount of milliseconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | Indicates whether passwords require a minimum length. Introduced in GitLab 15.1. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable">MirrorAvailable</a></code> | <code>interface{}</code> | Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold">MirrorCapacityThreshold</a></code> | <code>*f64</code> | Minimum capacity to be available before scheduling more mirrors preemptively. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity">MirrorMaxCapacity</a></code> | <code>*f64</code> | Maximum number of mirrors that can be synchronizing at the same time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay">MirrorMaxDelay</a></code> | <code>*f64</code> | Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding">NpmPackageRequestsForwarding</a></code> | <code>interface{}</code> | Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.nugetSkipMetadataUrlValidation">NugetSkipMetadataUrlValidation</a></code> | <code>interface{}</code> | Indicates whether to skip metadata URL validation for the NuGet package. Introduced in GitLab 17.0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist">OutboundLocalRequestsWhitelist</a></code> | <code>*[]*string</code> | Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageMetadataPurlTypes">PackageMetadataPurlTypes</a></code> | <code>*[]*f64</code> | List of package registry metadata to sync. See the list of the available values (https://gitlab.com/gitlab-org/gitlab/-/blob/ace16c20d5da7c4928dd03fb139692638b557fe3/app/models/concerns/enums/package_metadata.rb#L5). Self-managed, Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryAllowAnyoneToPullOption">PackageRegistryAllowAnyoneToPullOption</a></code> | <code>interface{}</code> | Enable to allow anyone to pull from Package Registry visible and changeable. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity">PackageRegistryCleanupPoliciesWorkerCapacity</a></code> | <code>*f64</code> | Number of workers assigned to the packages cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled">PagesDomainVerificationEnabled</a></code> | <code>interface{}</code> | Require users to prove ownership of custom domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit">PasswordAuthenticationEnabledForGit</a></code> | <code>interface{}</code> | Enable authentication for Git over HTTP(S) via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb">PasswordAuthenticationEnabledForWeb</a></code> | <code>interface{}</code> | Enable authentication for the web interface via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired">PasswordLowercaseRequired</a></code> | <code>interface{}</code> | Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired">PasswordNumberRequired</a></code> | <code>interface{}</code> | Indicates whether passwords require at least one number. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired">PasswordSymbolRequired</a></code> | <code>interface{}</code> | Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired">PasswordUppercaseRequired</a></code> | <code>interface{}</code> | Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath">PerformanceBarAllowedGroupPath</a></code> | <code>*string</code> | Path of the group that is allowed to toggle the performance bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix">PersonalAccessTokenPrefix</a></code> | <code>*string</code> | Prefix for all generated personal access tokens. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha">PipelineLimitPerProjectUserSha</a></code> | <code>*f64</code> | Maximum number of pipeline creation requests per minute per user and commit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled">PlantumlEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: plantuml_url) Enable PlantUML integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl">PlantumlUrl</a></code> | <code>*string</code> | The PlantUML instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier">PollingIntervalMultiplier</a></code> | <code>*f64</code> | Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled">ProjectExportEnabled</a></code> | <code>interface{}</code> | Enable project export. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectJobsApiRateLimit">ProjectJobsApiRateLimit</a></code> | <code>*f64</code> | Maximum authenticated requests to /project/:id/jobs per minute. Introduced in GitLab 16.5. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectsApiRateLimitUnauthenticated">ProjectsApiRateLimitUnauthenticated</a></code> | <code>*f64</code> | Introduced in GitLab 15.10. Max number of requests per 10 minutes per IP address for unauthenticated requests to the list all projects API. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled">PrometheusMetricsEnabled</a></code> | <code>interface{}</code> | Enable Prometheus metrics. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables">ProtectedCiVariables</a></code> | <code>interface{}</code> | CI/CD variables are protected by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit">PushEventActivitiesLimit</a></code> | <code>*f64</code> | Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit">PushEventHooksLimit</a></code> | <code>*f64</code> | Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding">PypiPackageRequestsForwarding</a></code> | <code>interface{}</code> | Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText">RateLimitingResponseText</a></code> | <code>*string</code> | When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit">RawBlobRequestLimit</a></code> | <code>*f64</code> | Max number of requests per minute for each raw path. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled">RecaptchaEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey">RecaptchaPrivateKey</a></code> | <code>*string</code> | Private key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey">RecaptchaSiteKey</a></code> | <code>*string</code> | Site key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize">ReceiveMaxInputSize</a></code> | <code>*f64</code> | Maximum push size (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receptiveClusterAgentsEnabled">ReceptiveClusterAgentsEnabled</a></code> | <code>interface{}</code> | Enable receptive mode for GitLab Agents for Kubernetes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rememberMeEnabled">RememberMeEnabled</a></code> | <code>interface{}</code> | Enable Remember me setting. Introduced in GitLab 16.0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled">RepositoryChecksEnabled</a></code> | <code>interface{}</code> | GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit">RepositorySizeLimit</a></code> | <code>*f64</code> | Size limit per repository (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages">RepositoryStorages</a></code> | <code>*[]*string</code> | (GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted">RepositoryStoragesWeighted</a></code> | <code>*map[string]*f64</code> | (GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup">RequireAdminApprovalAfterUserSignup</a></code> | <code>interface{}</code> | When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminTwoFactorAuthentication">RequireAdminTwoFactorAuthentication</a></code> | <code>interface{}</code> | Allow administrators to require 2FA for all administrators on the instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requirePersonalAccessTokenExpiry">RequirePersonalAccessTokenExpiry</a></code> | <code>interface{}</code> | When enabled, users must set an expiration date when creating a group or project access token, or a personal access token owned by a non-service account. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication">RequireTwoFactorAuthentication</a></code> | <code>interface{}</code> | (If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels">RestrictedVisibilityLevels</a></code> | <code>*[]*string</code> | Selected levels cannot be used by non-Administrator users for groups, projects or snippets. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction">RsaKeyRestriction</a></code> | <code>*f64</code> | The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit">SearchRateLimit</a></code> | <code>*f64</code> | Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated">SearchRateLimitUnauthenticated</a></code> | <code>*f64</code> | Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityApprovalPoliciesLimit">SecurityApprovalPoliciesLimit</a></code> | <code>*f64</code> | Maximum number of active merge request approval policies per security policy project. Maximum: 20. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityPolicyGlobalGroupApproversEnabled">SecurityPolicyGlobalGroupApproversEnabled</a></code> | <code>interface{}</code> | Whether to look up merge request approval policy approval groups globally or within project hierarchies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityTxtContent">SecurityTxtContent</a></code> | <code>*string</code> | Public security contact information. Introduced in GitLab 16.7. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail">SendUserConfirmationEmail</a></code> | <code>interface{}</code> | Send confirmation email on sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.serviceAccessTokensExpirationEnforced">ServiceAccessTokensExpirationEnforced</a></code> | <code>interface{}</code> | Flag to indicate if token expiry date can be optional for service account users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay">SessionExpireDelay</a></code> | <code>*f64</code> | Session duration in minutes. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes">SharedRunnersMinutes</a></code> | <code>*f64</code> | Set the maximum number of CI/CD minutes that a group can use on shared runners per month. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText">SharedRunnersText</a></code> | <code>*string</code> | Shared runners text. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes">SidekiqJobLimiterCompressionThresholdBytes</a></code> | <code>*f64</code> | The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes">SidekiqJobLimiterLimitBytes</a></code> | <code>*f64</code> | The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode">SidekiqJobLimiterMode</a></code> | <code>*string</code> | track or compress. Sets the behavior for Sidekiq job size limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText">SignInText</a></code> | <code>*string</code> | Text on the login page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled">SignupEnabled</a></code> | <code>interface{}</code> | Enable registration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentAdminExportsEnabled">SilentAdminExportsEnabled</a></code> | <code>interface{}</code> | Enable Silent admin exports. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentModeEnabled">SilentModeEnabled</a></code> | <code>interface{}</code> | Enable Silent mode. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled">SlackAppEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId">SlackAppId</a></code> | <code>*string</code> | The app ID of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret">SlackAppSecret</a></code> | <code>*string</code> | The app secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret">SlackAppSigningSecret</a></code> | <code>*string</code> | The signing secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken">SlackAppVerificationToken</a></code> | <code>*string</code> | The verification token of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit">SnippetSizeLimit</a></code> | <code>*f64</code> | Max snippet content size in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId">SnowplowAppId</a></code> | <code>*string</code> | The Snowplow site name / application ID. (for example, gitlab). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname">SnowplowCollectorHostname</a></code> | <code>*string</code> | The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain">SnowplowCookieDomain</a></code> | <code>*string</code> | The Snowplow cookie domain. (for example, .gitlab.com). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowDatabaseCollectorHostname">SnowplowDatabaseCollectorHostname</a></code> | <code>*string</code> | The Snowplow collector for database events hostname. (for example, db-snowplow.trx.gitlab.net). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled">SnowplowEnabled</a></code> | <code>interface{}</code> | Enable snowplow tracking. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled">SourcegraphEnabled</a></code> | <code>interface{}</code> | Enables Sourcegraph integration. If enabled, requires sourcegraph_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly">SourcegraphPublicOnly</a></code> | <code>interface{}</code> | Blocks Sourcegraph from being loaded on private and internal projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl">SourcegraphUrl</a></code> | <code>*string</code> | The Sourcegraph instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey">SpamCheckApiKey</a></code> | <code>*string</code> | API key used by GitLab for accessing the Spam Check service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled">SpamCheckEndpointEnabled</a></code> | <code>interface{}</code> | Enables spam checking using external Spam Check API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl">SpamCheckEndpointUrl</a></code> | <code>*string</code> | URL of the external Spamcheck service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageAuthToken">StaticObjectsExternalStorageAuthToken</a></code> | <code>*string</code> | Authentication token for the external storage linked in static_objects_external_storage_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageUrl">StaticObjectsExternalStorageUrl</a></code> | <code>*string</code> | URL to an external storage for repository static objects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled">SuggestPipelineEnabled</a></code> | <code>interface{}</code> | Enable pipeline suggestion banner. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime">TerminalMaxSessionTime</a></code> | <code>*f64</code> | Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms">Terms</a></code> | <code>*string</code> | (Required by: enforce_terms) Markdown content for the ToS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled">ThrottleAuthenticatedApiEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds">ThrottleAuthenticatedApiPeriodInSeconds</a></code> | <code>*f64</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod">ThrottleAuthenticatedApiRequestsPerPeriod</a></code> | <code>*f64</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled">ThrottleAuthenticatedPackagesApiEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds">ThrottleAuthenticatedPackagesApiPeriodInSeconds</a></code> | <code>*f64</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">ThrottleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>*f64</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled">ThrottleAuthenticatedWebEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds">ThrottleAuthenticatedWebPeriodInSeconds</a></code> | <code>*f64</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod">ThrottleAuthenticatedWebRequestsPerPeriod</a></code> | <code>*f64</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled">ThrottleUnauthenticatedApiEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds">ThrottleUnauthenticatedApiPeriodInSeconds</a></code> | <code>*f64</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod">ThrottleUnauthenticatedApiRequestsPerPeriod</a></code> | <code>*f64</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled">ThrottleUnauthenticatedPackagesApiEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">ThrottleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | <code>*f64</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">ThrottleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>*f64</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled">ThrottleUnauthenticatedWebEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds">ThrottleUnauthenticatedWebPeriodInSeconds</a></code> | <code>*f64</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod">ThrottleUnauthenticatedWebRequestsPerPeriod</a></code> | <code>*f64</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours">TimeTrackingLimitToHours</a></code> | <code>interface{}</code> | Limit display of time tracking units to hours. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod">TwoFactorGracePeriod</a></code> | <code>*f64</code> | Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.unconfirmedUsersDeleteAfterDays">UnconfirmedUsersDeleteAfterDays</a></code> | <code>*f64</code> | Specifies how many days after sign-up to delete users who have not confirmed their email. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled">UniqueIpsLimitEnabled</a></code> | <code>interface{}</code> | (If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser">UniqueIpsLimitPerUser</a></code> | <code>*f64</code> | Maximum number of IPs per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow">UniqueIpsLimitTimeWindow</a></code> | <code>*f64</code> | How many seconds an IP is counted towards the limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.updateRunnerVersionsEnabled">UpdateRunnerVersionsEnabled</a></code> | <code>interface{}</code> | Fetch GitLab Runner release version data from GitLab.com. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled">UsagePingEnabled</a></code> | <code>interface{}</code> | Every week GitLab reports license usage back to GitLab, Inc. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.useClickhouseForAnalytics">UseClickhouseForAnalytics</a></code> | <code>interface{}</code> | Enables ClickHouse as a data source for analytics reports. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled">UserDeactivationEmailsEnabled</a></code> | <code>interface{}</code> | Send an email to users upon account deactivation. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal">UserDefaultExternal</a></code> | <code>interface{}</code> | Newly registered users are external by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex">UserDefaultInternalRegex</a></code> | <code>*string</code> | Specify an email address regex pattern to identify default internal users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultsToPrivateProfile">UserDefaultsToPrivateProfile</a></code> | <code>interface{}</code> | Newly created users have private profile by default. Introduced in GitLab 15.8. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications">UserOauthApplications</a></code> | <code>interface{}</code> | Allow users to register any application to use GitLab as an OAuth provider. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage">UserShowAddSshKeyMessage</a></code> | <code>interface{}</code> | When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.validRunnerRegistrars">ValidRunnerRegistrars</a></code> | <code>*[]*string</code> | List of types which are allowed to register a GitLab Runner. Can be [], ['group'], ['project'] or ['group', 'project']. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled">VersionCheckEnabled</a></code> | <code>interface{}</code> | Let GitLab inform you when an update is available. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled">WebIdeClientsidePreviewEnabled</a></code> | <code>interface{}</code> | Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant">WhatsNewVariant</a></code> | <code>*string</code> | What's new variant, possible values: all_tiers, current_tier, and disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes">WikiPageMaxContentBytes</a></code> | <code>*f64</code> | Maximum wiki page content size in bytes. The minimum value is 1024 bytes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AbuseNotificationEmail`<sup>Optional</sup> <a name="AbuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail"></a>

```go
AbuseNotificationEmail *string
```

- *Type:* *string

If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#abuse_notification_email ApplicationSettings#abuse_notification_email}

---

##### `AdminMode`<sup>Optional</sup> <a name="AdminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode"></a>

```go
AdminMode interface{}
```

- *Type:* interface{}

Require administrators to enable Admin Mode by re-authenticating for administrative tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#admin_mode ApplicationSettings#admin_mode}

---

##### `AfterSignOutPath`<sup>Optional</sup> <a name="AfterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath"></a>

```go
AfterSignOutPath *string
```

- *Type:* *string

Where to redirect users after logout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#after_sign_out_path ApplicationSettings#after_sign_out_path}

---

##### `AfterSignUpText`<sup>Optional</sup> <a name="AfterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText"></a>

```go
AfterSignUpText *string
```

- *Type:* *string

Text shown to the user after signing up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#after_sign_up_text ApplicationSettings#after_sign_up_text}

---

##### `AkismetApiKey`<sup>Optional</sup> <a name="AkismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey"></a>

```go
AkismetApiKey *string
```

- *Type:* *string

API key for Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#akismet_api_key ApplicationSettings#akismet_api_key}

---

##### `AkismetEnabled`<sup>Optional</sup> <a name="AkismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled"></a>

```go
AkismetEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#akismet_enabled ApplicationSettings#akismet_enabled}

---

##### `AllowAccountDeletion`<sup>Optional</sup> <a name="AllowAccountDeletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowAccountDeletion"></a>

```go
AllowAccountDeletion interface{}
```

- *Type:* interface{}

Set to true to allow users to delete their accounts. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allow_account_deletion ApplicationSettings#allow_account_deletion}

---

##### `AllowGroupOwnersToManageLdap`<sup>Optional</sup> <a name="AllowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap"></a>

```go
AllowGroupOwnersToManageLdap interface{}
```

- *Type:* interface{}

Set to true to allow group owners to manage LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allow_group_owners_to_manage_ldap ApplicationSettings#allow_group_owners_to_manage_ldap}

---

##### `AllowLocalRequestsFromSystemHooks`<sup>Optional</sup> <a name="AllowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks"></a>

```go
AllowLocalRequestsFromSystemHooks interface{}
```

- *Type:* interface{}

Allow requests to the local network from system hooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allow_local_requests_from_system_hooks ApplicationSettings#allow_local_requests_from_system_hooks}

---

##### `AllowLocalRequestsFromWebHooksAndServices`<sup>Optional</sup> <a name="AllowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices"></a>

```go
AllowLocalRequestsFromWebHooksAndServices interface{}
```

- *Type:* interface{}

Allow requests to the local network from web hooks and services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allow_local_requests_from_web_hooks_and_services ApplicationSettings#allow_local_requests_from_web_hooks_and_services}

---

##### `AllowProjectCreationForGuestAndBelow`<sup>Optional</sup> <a name="AllowProjectCreationForGuestAndBelow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowProjectCreationForGuestAndBelow"></a>

```go
AllowProjectCreationForGuestAndBelow interface{}
```

- *Type:* interface{}

Indicates whether users assigned up to the Guest role can create groups and personal projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allow_project_creation_for_guest_and_below ApplicationSettings#allow_project_creation_for_guest_and_below}

---

##### `AllowRunnerRegistrationToken`<sup>Optional</sup> <a name="AllowRunnerRegistrationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowRunnerRegistrationToken"></a>

```go
AllowRunnerRegistrationToken interface{}
```

- *Type:* interface{}

Allow using a registration token to create a runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allow_runner_registration_token ApplicationSettings#allow_runner_registration_token}

---

##### `ArchiveBuildsInHumanReadable`<sup>Optional</sup> <a name="ArchiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable"></a>

```go
ArchiveBuildsInHumanReadable *string
```

- *Type:* *string

Set the duration for which the jobs are considered as old and expired.

After that time passes, the jobs are archived and no longer able to be retried. Make it empty to never expire jobs. It has to be no less than 1 day, for example: 15 days, 1 month, 2 years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#archive_builds_in_human_readable ApplicationSettings#archive_builds_in_human_readable}

---

##### `AsciidocMaxIncludes`<sup>Optional</sup> <a name="AsciidocMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.asciidocMaxIncludes"></a>

```go
AsciidocMaxIncludes *f64
```

- *Type:* *f64

Maximum limit of AsciiDoc include directives being processed in any one document. Maximum: 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#asciidoc_max_includes ApplicationSettings#asciidoc_max_includes}

---

##### `AssetProxyAllowlist`<sup>Optional</sup> <a name="AssetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist"></a>

```go
AssetProxyAllowlist *[]*string
```

- *Type:* *[]*string

Assets that match these domains are not proxied.

Wildcards allowed. Your GitLab installation URL is automatically allowlisted. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#asset_proxy_allowlist ApplicationSettings#asset_proxy_allowlist}

---

##### `AssetProxyEnabled`<sup>Optional</sup> <a name="AssetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled"></a>

```go
AssetProxyEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#asset_proxy_enabled ApplicationSettings#asset_proxy_enabled}

---

##### `AssetProxySecretKey`<sup>Optional</sup> <a name="AssetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey"></a>

```go
AssetProxySecretKey *string
```

- *Type:* *string

Shared secret with the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#asset_proxy_secret_key ApplicationSettings#asset_proxy_secret_key}

---

##### `AssetProxyUrl`<sup>Optional</sup> <a name="AssetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl"></a>

```go
AssetProxyUrl *string
```

- *Type:* *string

URL of the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#asset_proxy_url ApplicationSettings#asset_proxy_url}

---

##### `AuthorizedKeysEnabled`<sup>Optional</sup> <a name="AuthorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled"></a>

```go
AuthorizedKeysEnabled interface{}
```

- *Type:* interface{}

By default, we write to the authorized_keys file to support Git over SSH without additional configuration.

GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#authorized_keys_enabled ApplicationSettings#authorized_keys_enabled}

---

##### `AutoBanUserOnExcessiveProjectsDownload`<sup>Optional</sup> <a name="AutoBanUserOnExcessiveProjectsDownload" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoBanUserOnExcessiveProjectsDownload"></a>

```go
AutoBanUserOnExcessiveProjectsDownload interface{}
```

- *Type:* interface{}

When enabled, users will get automatically banned from the application when they download more than the maximum number of unique projects in the time period specified by max_number_of_repository_downloads and max_number_of_repository_downloads_within_time_period respectively.

Introduced in GitLab 15.4. Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#auto_ban_user_on_excessive_projects_download ApplicationSettings#auto_ban_user_on_excessive_projects_download}

---

##### `AutoDevopsDomain`<sup>Optional</sup> <a name="AutoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain"></a>

```go
AutoDevopsDomain *string
```

- *Type:* *string

Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#auto_devops_domain ApplicationSettings#auto_devops_domain}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled"></a>

```go
AutoDevopsEnabled interface{}
```

- *Type:* interface{}

Enable Auto DevOps for projects by default.

It automatically builds, tests, and deploys applications based on a predefined CI/CD configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#auto_devops_enabled ApplicationSettings#auto_devops_enabled}

---

##### `AutomaticPurchasedStorageAllocation`<sup>Optional</sup> <a name="AutomaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation"></a>

```go
AutomaticPurchasedStorageAllocation interface{}
```

- *Type:* interface{}

Enabling this permits automatic allocation of purchased storage in a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#automatic_purchased_storage_allocation ApplicationSettings#automatic_purchased_storage_allocation}

---

##### `BulkImportConcurrentPipelineBatchLimit`<sup>Optional</sup> <a name="BulkImportConcurrentPipelineBatchLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportConcurrentPipelineBatchLimit"></a>

```go
BulkImportConcurrentPipelineBatchLimit *f64
```

- *Type:* *f64

Maximum simultaneous Direct Transfer batches to process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#bulk_import_concurrent_pipeline_batch_limit ApplicationSettings#bulk_import_concurrent_pipeline_batch_limit}

---

##### `BulkImportEnabled`<sup>Optional</sup> <a name="BulkImportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportEnabled"></a>

```go
BulkImportEnabled interface{}
```

- *Type:* interface{}

Enable migrating GitLab groups by direct transfer. Introduced in GitLab 15.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#bulk_import_enabled ApplicationSettings#bulk_import_enabled}

---

##### `BulkImportMaxDownloadFileSize`<sup>Optional</sup> <a name="BulkImportMaxDownloadFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportMaxDownloadFileSize"></a>

```go
BulkImportMaxDownloadFileSize *f64
```

- *Type:* *f64

Maximum download file size when importing from source GitLab instances by direct transfer. Introduced in GitLab 16.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#bulk_import_max_download_file_size ApplicationSettings#bulk_import_max_download_file_size}

---

##### `CanCreateGroup`<sup>Optional</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup"></a>

```go
CanCreateGroup interface{}
```

- *Type:* interface{}

Indicates whether users can create top-level groups. Introduced in GitLab 15.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#can_create_group ApplicationSettings#can_create_group}

---

##### `CheckNamespacePlan`<sup>Optional</sup> <a name="CheckNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan"></a>

```go
CheckNamespacePlan interface{}
```

- *Type:* interface{}

Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#check_namespace_plan ApplicationSettings#check_namespace_plan}

---

##### `CiMaxIncludes`<sup>Optional</sup> <a name="CiMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxIncludes"></a>

```go
CiMaxIncludes *f64
```

- *Type:* *f64

The maximum number of includes per pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#ci_max_includes ApplicationSettings#ci_max_includes}

---

##### `CiMaxTotalYamlSizeBytes`<sup>Optional</sup> <a name="CiMaxTotalYamlSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxTotalYamlSizeBytes"></a>

```go
CiMaxTotalYamlSizeBytes *f64
```

- *Type:* *f64

The maximum amount of memory, in bytes, that can be allocated for the pipeline configuration, with all included YAML configuration files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#ci_max_total_yaml_size_bytes ApplicationSettings#ci_max_total_yaml_size_bytes}

---

##### `CommitEmailHostname`<sup>Optional</sup> <a name="CommitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname"></a>

```go
CommitEmailHostname *string
```

- *Type:* *string

Custom hostname (for private commit emails).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#commit_email_hostname ApplicationSettings#commit_email_hostname}

---

##### `ConcurrentBitbucketImportJobsLimit`<sup>Optional</sup> <a name="ConcurrentBitbucketImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketImportJobsLimit"></a>

```go
ConcurrentBitbucketImportJobsLimit *f64
```

- *Type:* *f64

Maximum number of simultaneous import jobs for the Bitbucket Cloud importer. Introduced in GitLab 16.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#concurrent_bitbucket_import_jobs_limit ApplicationSettings#concurrent_bitbucket_import_jobs_limit}

---

##### `ConcurrentBitbucketServerImportJobsLimit`<sup>Optional</sup> <a name="ConcurrentBitbucketServerImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketServerImportJobsLimit"></a>

```go
ConcurrentBitbucketServerImportJobsLimit *f64
```

- *Type:* *f64

Maximum number of simultaneous import jobs for the Bitbucket Server importer. Introduced in GitLab 16.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#concurrent_bitbucket_server_import_jobs_limit ApplicationSettings#concurrent_bitbucket_server_import_jobs_limit}

---

##### `ConcurrentGithubImportJobsLimit`<sup>Optional</sup> <a name="ConcurrentGithubImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentGithubImportJobsLimit"></a>

```go
ConcurrentGithubImportJobsLimit *f64
```

- *Type:* *f64

Maximum number of simultaneous import jobs for the GitHub importer. Introduced in GitLab 16.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#concurrent_github_import_jobs_limit ApplicationSettings#concurrent_github_import_jobs_limit}

---

##### `ContainerExpirationPoliciesEnableHistoricEntries`<sup>Optional</sup> <a name="ContainerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```go
ContainerExpirationPoliciesEnableHistoricEntries interface{}
```

- *Type:* interface{}

Enable cleanup policies for all projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#container_expiration_policies_enable_historic_entries ApplicationSettings#container_expiration_policies_enable_historic_entries}

---

##### `ContainerRegistryCleanupTagsServiceMaxListSize`<sup>Optional</sup> <a name="ContainerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```go
ContainerRegistryCleanupTagsServiceMaxListSize *f64
```

- *Type:* *f64

The maximum number of tags that can be deleted in a single execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#container_registry_cleanup_tags_service_max_list_size ApplicationSettings#container_registry_cleanup_tags_service_max_list_size}

---

##### `ContainerRegistryDeleteTagsServiceTimeout`<sup>Optional</sup> <a name="ContainerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout"></a>

```go
ContainerRegistryDeleteTagsServiceTimeout *f64
```

- *Type:* *f64

The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#container_registry_delete_tags_service_timeout ApplicationSettings#container_registry_delete_tags_service_timeout}

---

##### `ContainerRegistryExpirationPoliciesCaching`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching"></a>

```go
ContainerRegistryExpirationPoliciesCaching interface{}
```

- *Type:* interface{}

Caching during the execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#container_registry_expiration_policies_caching ApplicationSettings#container_registry_expiration_policies_caching}

---

##### `ContainerRegistryExpirationPoliciesWorkerCapacity`<sup>Optional</sup> <a name="ContainerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```go
ContainerRegistryExpirationPoliciesWorkerCapacity *f64
```

- *Type:* *f64

Number of workers for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#container_registry_expiration_policies_worker_capacity ApplicationSettings#container_registry_expiration_policies_worker_capacity}

---

##### `ContainerRegistryTokenExpireDelay`<sup>Optional</sup> <a name="ContainerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay"></a>

```go
ContainerRegistryTokenExpireDelay *f64
```

- *Type:* *f64

Container Registry token duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#container_registry_token_expire_delay ApplicationSettings#container_registry_token_expire_delay}

---

##### `DeactivateDormantUsers`<sup>Optional</sup> <a name="DeactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers"></a>

```go
DeactivateDormantUsers interface{}
```

- *Type:* interface{}

Enable automatic deactivation of dormant users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#deactivate_dormant_users ApplicationSettings#deactivate_dormant_users}

---

##### `DeactivateDormantUsersPeriod`<sup>Optional</sup> <a name="DeactivateDormantUsersPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsersPeriod"></a>

```go
DeactivateDormantUsersPeriod *f64
```

- *Type:* *f64

Length of time (in days) after which a user is considered dormant. Introduced in GitLab 15.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#deactivate_dormant_users_period ApplicationSettings#deactivate_dormant_users_period}

---

##### `DecompressArchiveFileTimeout`<sup>Optional</sup> <a name="DecompressArchiveFileTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.decompressArchiveFileTimeout"></a>

```go
DecompressArchiveFileTimeout *f64
```

- *Type:* *f64

Default timeout for decompressing archived files, in seconds. Set to 0 to disable timeouts. Introduced in GitLab 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#decompress_archive_file_timeout ApplicationSettings#decompress_archive_file_timeout}

---

##### `DefaultArtifactsExpireIn`<sup>Optional</sup> <a name="DefaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn"></a>

```go
DefaultArtifactsExpireIn *string
```

- *Type:* *string

Set the default expiration time for each job’s artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_artifacts_expire_in ApplicationSettings#default_artifacts_expire_in}

---

##### `DefaultBranchName`<sup>Optional</sup> <a name="DefaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName"></a>

```go
DefaultBranchName *string
```

- *Type:* *string

Instance-level custom initial branch name (introduced in GitLab 13.2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_branch_name ApplicationSettings#default_branch_name}

---

##### `DefaultBranchProtection`<sup>Optional</sup> <a name="DefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection"></a>

```go
DefaultBranchProtection *f64
```

- *Type:* *f64

Determine if developers can push to the default branch.

Can take: 0 (not protected, both users with the Developer role or Maintainer role can push new commits and force push), 1 (partially protected, users with the Developer role or Maintainer role can push new commits, but cannot force push) or 2 (fully protected, users with the Developer or Maintainer role cannot push new commits, but users with the Developer or Maintainer role can; no one can force push) as a parameter. Default is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_branch_protection ApplicationSettings#default_branch_protection}

---

##### `DefaultBranchProtectionDefaults`<sup>Optional</sup> <a name="DefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtectionDefaults"></a>

```go
DefaultBranchProtectionDefaults ApplicationSettingsDefaultBranchProtectionDefaults
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

default_branch_protection_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_branch_protection_defaults ApplicationSettings#default_branch_protection_defaults}

---

##### `DefaultCiConfigPath`<sup>Optional</sup> <a name="DefaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath"></a>

```go
DefaultCiConfigPath *string
```

- *Type:* *string

Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_ci_config_path ApplicationSettings#default_ci_config_path}

---

##### `DefaultGroupVisibility`<sup>Optional</sup> <a name="DefaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility"></a>

```go
DefaultGroupVisibility *string
```

- *Type:* *string

What visibility level new groups receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_group_visibility ApplicationSettings#default_group_visibility}

---

##### `DefaultPreferredLanguage`<sup>Optional</sup> <a name="DefaultPreferredLanguage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultPreferredLanguage"></a>

```go
DefaultPreferredLanguage *string
```

- *Type:* *string

Default preferred language for users who are not logged in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_preferred_language ApplicationSettings#default_preferred_language}

---

##### `DefaultProjectCreation`<sup>Optional</sup> <a name="DefaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation"></a>

```go
DefaultProjectCreation *f64
```

- *Type:* *f64

Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_project_creation ApplicationSettings#default_project_creation}

---

##### `DefaultProjectsLimit`<sup>Optional</sup> <a name="DefaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit"></a>

```go
DefaultProjectsLimit *f64
```

- *Type:* *f64

Project limit per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_projects_limit ApplicationSettings#default_projects_limit}

---

##### `DefaultProjectVisibility`<sup>Optional</sup> <a name="DefaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility"></a>

```go
DefaultProjectVisibility *string
```

- *Type:* *string

What visibility level new projects receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_project_visibility ApplicationSettings#default_project_visibility}

---

##### `DefaultSnippetVisibility`<sup>Optional</sup> <a name="DefaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility"></a>

```go
DefaultSnippetVisibility *string
```

- *Type:* *string

What visibility level new snippets receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_snippet_visibility ApplicationSettings#default_snippet_visibility}

---

##### `DefaultSyntaxHighlightingTheme`<sup>Optional</sup> <a name="DefaultSyntaxHighlightingTheme" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSyntaxHighlightingTheme"></a>

```go
DefaultSyntaxHighlightingTheme *f64
```

- *Type:* *f64

Default syntax highlighting theme for users who are new or not signed in. See IDs of available themes (https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/themes.rb#L16).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#default_syntax_highlighting_theme ApplicationSettings#default_syntax_highlighting_theme}

---

##### `DeleteInactiveProjects`<sup>Optional</sup> <a name="DeleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects"></a>

```go
DeleteInactiveProjects interface{}
```

- *Type:* interface{}

Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#delete_inactive_projects ApplicationSettings#delete_inactive_projects}

---

##### `DeleteUnconfirmedUsers`<sup>Optional</sup> <a name="DeleteUnconfirmedUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteUnconfirmedUsers"></a>

```go
DeleteUnconfirmedUsers interface{}
```

- *Type:* interface{}

Specifies whether users who have not confirmed their email should be deleted.

When set to true, unconfirmed users are deleted after unconfirmed_users_delete_after_days days. Introduced in GitLab 16.1. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#delete_unconfirmed_users ApplicationSettings#delete_unconfirmed_users}

---

##### `DeletionAdjournedPeriod`<sup>Optional</sup> <a name="DeletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod"></a>

```go
DeletionAdjournedPeriod *f64
```

- *Type:* *f64

The number of days to wait before deleting a project or group that is marked for deletion.

Value must be between 1 and 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#deletion_adjourned_period ApplicationSettings#deletion_adjourned_period}

---

##### `DiagramsnetEnabled`<sup>Optional</sup> <a name="DiagramsnetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetEnabled"></a>

```go
DiagramsnetEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires diagramsnet_url) Enable Diagrams.net integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#diagramsnet_enabled ApplicationSettings#diagramsnet_enabled}

---

##### `DiagramsnetUrl`<sup>Optional</sup> <a name="DiagramsnetUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetUrl"></a>

```go
DiagramsnetUrl *string
```

- *Type:* *string

The Diagrams.net instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#diagramsnet_url ApplicationSettings#diagramsnet_url}

---

##### `DiffMaxFiles`<sup>Optional</sup> <a name="DiffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles"></a>

```go
DiffMaxFiles *f64
```

- *Type:* *f64

Maximum files in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#diff_max_files ApplicationSettings#diff_max_files}

---

##### `DiffMaxLines`<sup>Optional</sup> <a name="DiffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines"></a>

```go
DiffMaxLines *f64
```

- *Type:* *f64

Maximum lines in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#diff_max_lines ApplicationSettings#diff_max_lines}

---

##### `DiffMaxPatchBytes`<sup>Optional</sup> <a name="DiffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes"></a>

```go
DiffMaxPatchBytes *f64
```

- *Type:* *f64

Maximum diff patch size, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#diff_max_patch_bytes ApplicationSettings#diff_max_patch_bytes}

---

##### `DisableAdminOauthScopes`<sup>Optional</sup> <a name="DisableAdminOauthScopes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableAdminOauthScopes"></a>

```go
DisableAdminOauthScopes interface{}
```

- *Type:* interface{}

Stops administrators from connecting their GitLab accounts to non-trusted OAuth 2.0 applications that have the api, read_api, read_repository, write_repository, read_registry, write_registry, or sudo scopes. Introduced in GitLab 15.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#disable_admin_oauth_scopes ApplicationSettings#disable_admin_oauth_scopes}

---

##### `DisabledOauthSignInSources`<sup>Optional</sup> <a name="DisabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources"></a>

```go
DisabledOauthSignInSources *[]*string
```

- *Type:* *[]*string

Disabled OAuth sign-in sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#disabled_oauth_sign_in_sources ApplicationSettings#disabled_oauth_sign_in_sources}

---

##### `DisableFeedToken`<sup>Optional</sup> <a name="DisableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken"></a>

```go
DisableFeedToken interface{}
```

- *Type:* interface{}

Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#disable_feed_token ApplicationSettings#disable_feed_token}

---

##### `DisablePersonalAccessTokens`<sup>Optional</sup> <a name="DisablePersonalAccessTokens" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disablePersonalAccessTokens"></a>

```go
DisablePersonalAccessTokens interface{}
```

- *Type:* interface{}

Disable personal access tokens.

Introduced in GitLab 15.7. Self-managed, Premium and Ultimate only. There is no method available to enable a personal access token that’s been disabled through the API. This is a known issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#disable_personal_access_tokens ApplicationSettings#disable_personal_access_tokens}

---

##### `DnsRebindingProtectionEnabled`<sup>Optional</sup> <a name="DnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled"></a>

```go
DnsRebindingProtectionEnabled interface{}
```

- *Type:* interface{}

Enforce DNS rebinding attack protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#dns_rebinding_protection_enabled ApplicationSettings#dns_rebinding_protection_enabled}

---

##### `DomainAllowlist`<sup>Optional</sup> <a name="DomainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist"></a>

```go
DomainAllowlist *[]*string
```

- *Type:* *[]*string

Force people to use only corporate emails for sign-up. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#domain_allowlist ApplicationSettings#domain_allowlist}

---

##### `DomainDenylist`<sup>Optional</sup> <a name="DomainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist"></a>

```go
DomainDenylist *[]*string
```

- *Type:* *[]*string

Users with email addresses that match these domains cannot sign up.

Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#domain_denylist ApplicationSettings#domain_denylist}

---

##### `DomainDenylistEnabled`<sup>Optional</sup> <a name="DomainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled"></a>

```go
DomainDenylistEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#domain_denylist_enabled ApplicationSettings#domain_denylist_enabled}

---

##### `DownstreamPipelineTriggerLimitPerProjectUserSha`<sup>Optional</sup> <a name="DownstreamPipelineTriggerLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.downstreamPipelineTriggerLimitPerProjectUserSha"></a>

```go
DownstreamPipelineTriggerLimitPerProjectUserSha *f64
```

- *Type:* *f64

Maximum downstream pipeline trigger rate. Introduced in GitLab 16.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#downstream_pipeline_trigger_limit_per_project_user_sha ApplicationSettings#downstream_pipeline_trigger_limit_per_project_user_sha}

---

##### `DsaKeyRestriction`<sup>Optional</sup> <a name="DsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction"></a>

```go
DsaKeyRestriction *f64
```

- *Type:* *f64

The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#dsa_key_restriction ApplicationSettings#dsa_key_restriction}

---

##### `DuoFeaturesEnabled`<sup>Optional</sup> <a name="DuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.duoFeaturesEnabled"></a>

```go
DuoFeaturesEnabled interface{}
```

- *Type:* interface{}

Indicates whether GitLab Duo features are enabled for this instance. Introduced in GitLab 16.10. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#duo_features_enabled ApplicationSettings#duo_features_enabled}

---

##### `EcdsaKeyRestriction`<sup>Optional</sup> <a name="EcdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction"></a>

```go
EcdsaKeyRestriction *f64
```

- *Type:* *f64

The minimum allowed curve size (in bits) of an uploaded ECDSA key.

0 means no restriction. -1 disables ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#ecdsa_key_restriction ApplicationSettings#ecdsa_key_restriction}

---

##### `EcdsaSkKeyRestriction`<sup>Optional</sup> <a name="EcdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction"></a>

```go
EcdsaSkKeyRestriction *f64
```

- *Type:* *f64

The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key.

0 means no restriction. -1 disables ECDSA_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#ecdsa_sk_key_restriction ApplicationSettings#ecdsa_sk_key_restriction}

---

##### `Ed25519KeyRestriction`<sup>Optional</sup> <a name="Ed25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction"></a>

```go
Ed25519KeyRestriction *f64
```

- *Type:* *f64

The minimum allowed curve size (in bits) of an uploaded ED25519 key.

0 means no restriction. -1 disables ED25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#ed25519_key_restriction ApplicationSettings#ed25519_key_restriction}

---

##### `Ed25519SkKeyRestriction`<sup>Optional</sup> <a name="Ed25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction"></a>

```go
Ed25519SkKeyRestriction *f64
```

- *Type:* *f64

The minimum allowed curve size (in bits) of an uploaded ED25519_SK key.

0 means no restriction. -1 disables ED25519_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#ed25519_sk_key_restriction ApplicationSettings#ed25519_sk_key_restriction}

---

##### `EksAccessKeyId`<sup>Optional</sup> <a name="EksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId"></a>

```go
EksAccessKeyId *string
```

- *Type:* *string

AWS IAM access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#eks_access_key_id ApplicationSettings#eks_access_key_id}

---

##### `EksAccountId`<sup>Optional</sup> <a name="EksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId"></a>

```go
EksAccountId *string
```

- *Type:* *string

Amazon account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#eks_account_id ApplicationSettings#eks_account_id}

---

##### `EksIntegrationEnabled`<sup>Optional</sup> <a name="EksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled"></a>

```go
EksIntegrationEnabled interface{}
```

- *Type:* interface{}

Enable integration with Amazon EKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#eks_integration_enabled ApplicationSettings#eks_integration_enabled}

---

##### `EksSecretAccessKey`<sup>Optional</sup> <a name="EksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey"></a>

```go
EksSecretAccessKey *string
```

- *Type:* *string

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#eks_secret_access_key ApplicationSettings#eks_secret_access_key}

---

##### `ElasticsearchAws`<sup>Optional</sup> <a name="ElasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws"></a>

```go
ElasticsearchAws interface{}
```

- *Type:* interface{}

Enable the use of AWS hosted Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_aws ApplicationSettings#elasticsearch_aws}

---

##### `ElasticsearchAwsAccessKey`<sup>Optional</sup> <a name="ElasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey"></a>

```go
ElasticsearchAwsAccessKey *string
```

- *Type:* *string

AWS IAM access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_aws_access_key ApplicationSettings#elasticsearch_aws_access_key}

---

##### `ElasticsearchAwsRegion`<sup>Optional</sup> <a name="ElasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion"></a>

```go
ElasticsearchAwsRegion *string
```

- *Type:* *string

The AWS region the Elasticsearch domain is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_aws_region ApplicationSettings#elasticsearch_aws_region}

---

##### `ElasticsearchAwsSecretAccessKey`<sup>Optional</sup> <a name="ElasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey"></a>

```go
ElasticsearchAwsSecretAccessKey *string
```

- *Type:* *string

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_aws_secret_access_key ApplicationSettings#elasticsearch_aws_secret_access_key}

---

##### `ElasticsearchIndexedFieldLengthLimit`<sup>Optional</sup> <a name="ElasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit"></a>

```go
ElasticsearchIndexedFieldLengthLimit *f64
```

- *Type:* *f64

Maximum size of text fields to index by Elasticsearch.

0 value means no limit. This does not apply to repository and wiki indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_indexed_field_length_limit ApplicationSettings#elasticsearch_indexed_field_length_limit}

---

##### `ElasticsearchIndexedFileSizeLimitKb`<sup>Optional</sup> <a name="ElasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb"></a>

```go
ElasticsearchIndexedFileSizeLimitKb *f64
```

- *Type:* *f64

Maximum size of repository and wiki files that are indexed by Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_indexed_file_size_limit_kb ApplicationSettings#elasticsearch_indexed_file_size_limit_kb}

---

##### `ElasticsearchIndexing`<sup>Optional</sup> <a name="ElasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing"></a>

```go
ElasticsearchIndexing interface{}
```

- *Type:* interface{}

Enable Elasticsearch indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_indexing ApplicationSettings#elasticsearch_indexing}

---

##### `ElasticsearchLimitIndexing`<sup>Optional</sup> <a name="ElasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing"></a>

```go
ElasticsearchLimitIndexing interface{}
```

- *Type:* interface{}

Limit Elasticsearch to index certain namespaces and projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_limit_indexing ApplicationSettings#elasticsearch_limit_indexing}

---

##### `ElasticsearchMaxBulkConcurrency`<sup>Optional</sup> <a name="ElasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency"></a>

```go
ElasticsearchMaxBulkConcurrency *f64
```

- *Type:* *f64

Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_max_bulk_concurrency ApplicationSettings#elasticsearch_max_bulk_concurrency}

---

##### `ElasticsearchMaxBulkSizeMb`<sup>Optional</sup> <a name="ElasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb"></a>

```go
ElasticsearchMaxBulkSizeMb *f64
```

- *Type:* *f64

Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_max_bulk_size_mb ApplicationSettings#elasticsearch_max_bulk_size_mb}

---

##### `ElasticsearchMaxCodeIndexingConcurrency`<sup>Optional</sup> <a name="ElasticsearchMaxCodeIndexingConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxCodeIndexingConcurrency"></a>

```go
ElasticsearchMaxCodeIndexingConcurrency *f64
```

- *Type:* *f64

Maximum concurrency of Elasticsearch code indexing background jobs. This only applies to repository indexing operations. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_max_code_indexing_concurrency ApplicationSettings#elasticsearch_max_code_indexing_concurrency}

---

##### `ElasticsearchNamespaceIds`<sup>Optional</sup> <a name="ElasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds"></a>

```go
ElasticsearchNamespaceIds *[]*f64
```

- *Type:* *[]*f64

The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_namespace_ids ApplicationSettings#elasticsearch_namespace_ids}

---

##### `ElasticsearchPassword`<sup>Optional</sup> <a name="ElasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword"></a>

```go
ElasticsearchPassword *string
```

- *Type:* *string

The password of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_password ApplicationSettings#elasticsearch_password}

---

##### `ElasticsearchProjectIds`<sup>Optional</sup> <a name="ElasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds"></a>

```go
ElasticsearchProjectIds *[]*f64
```

- *Type:* *[]*f64

The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_project_ids ApplicationSettings#elasticsearch_project_ids}

---

##### `ElasticsearchRequeueWorkers`<sup>Optional</sup> <a name="ElasticsearchRequeueWorkers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchRequeueWorkers"></a>

```go
ElasticsearchRequeueWorkers interface{}
```

- *Type:* interface{}

Enable automatic requeuing of indexing workers.

This improves non-code indexing throughput by enqueuing Sidekiq jobs until all documents are processed. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_requeue_workers ApplicationSettings#elasticsearch_requeue_workers}

---

##### `ElasticsearchSearch`<sup>Optional</sup> <a name="ElasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch"></a>

```go
ElasticsearchSearch interface{}
```

- *Type:* interface{}

Enable Elasticsearch search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_search ApplicationSettings#elasticsearch_search}

---

##### `ElasticsearchUrl`<sup>Optional</sup> <a name="ElasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl"></a>

```go
ElasticsearchUrl *[]*string
```

- *Type:* *[]*string

The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_url ApplicationSettings#elasticsearch_url}

---

##### `ElasticsearchUsername`<sup>Optional</sup> <a name="ElasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername"></a>

```go
ElasticsearchUsername *string
```

- *Type:* *string

The username of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_username ApplicationSettings#elasticsearch_username}

---

##### `ElasticsearchWorkerNumberOfShards`<sup>Optional</sup> <a name="ElasticsearchWorkerNumberOfShards" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchWorkerNumberOfShards"></a>

```go
ElasticsearchWorkerNumberOfShards *f64
```

- *Type:* *f64

Number of indexing worker shards.

This improves non-code indexing throughput by enqueuing more parallel Sidekiq jobs. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#elasticsearch_worker_number_of_shards ApplicationSettings#elasticsearch_worker_number_of_shards}

---

##### `EmailAdditionalText`<sup>Optional</sup> <a name="EmailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText"></a>

```go
EmailAdditionalText *string
```

- *Type:* *string

Additional text added to the bottom of every email for legal/auditing/compliance reasons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#email_additional_text ApplicationSettings#email_additional_text}

---

##### `EmailAuthorInBody`<sup>Optional</sup> <a name="EmailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody"></a>

```go
EmailAuthorInBody interface{}
```

- *Type:* interface{}

Some email servers do not support overriding the email sender name.

Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#email_author_in_body ApplicationSettings#email_author_in_body}

---

##### `EmailConfirmationSetting`<sup>Optional</sup> <a name="EmailConfirmationSetting" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailConfirmationSetting"></a>

```go
EmailConfirmationSetting *string
```

- *Type:* *string

Specifies whether users must confirm their email before sign in. Possible values are off, soft, and hard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#email_confirmation_setting ApplicationSettings#email_confirmation_setting}

---

##### `EnableArtifactExternalRedirectWarningPage`<sup>Optional</sup> <a name="EnableArtifactExternalRedirectWarningPage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enableArtifactExternalRedirectWarningPage"></a>

```go
EnableArtifactExternalRedirectWarningPage interface{}
```

- *Type:* interface{}

Show the external redirect page that warns you about user-generated content in GitLab Pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#enable_artifact_external_redirect_warning_page ApplicationSettings#enable_artifact_external_redirect_warning_page}

---

##### `EnabledGitAccessProtocol`<sup>Optional</sup> <a name="EnabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol"></a>

```go
EnabledGitAccessProtocol *string
```

- *Type:* *string

Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#enabled_git_access_protocol ApplicationSettings#enabled_git_access_protocol}

---

##### `EnforceNamespaceStorageLimit`<sup>Optional</sup> <a name="EnforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit"></a>

```go
EnforceNamespaceStorageLimit interface{}
```

- *Type:* interface{}

Enabling this permits enforcement of namespace storage limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#enforce_namespace_storage_limit ApplicationSettings#enforce_namespace_storage_limit}

---

##### `EnforceTerms`<sup>Optional</sup> <a name="EnforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms"></a>

```go
EnforceTerms interface{}
```

- *Type:* interface{}

(If enabled, requires: terms) Enforce application ToS to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#enforce_terms ApplicationSettings#enforce_terms}

---

##### `ExternalAuthClientCert`<sup>Optional</sup> <a name="ExternalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert"></a>

```go
ExternalAuthClientCert *string
```

- *Type:* *string

(If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_auth_client_cert ApplicationSettings#external_auth_client_cert}

---

##### `ExternalAuthClientKey`<sup>Optional</sup> <a name="ExternalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey"></a>

```go
ExternalAuthClientKey *string
```

- *Type:* *string

Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_auth_client_key ApplicationSettings#external_auth_client_key}

---

##### `ExternalAuthClientKeyPass`<sup>Optional</sup> <a name="ExternalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass"></a>

```go
ExternalAuthClientKeyPass *string
```

- *Type:* *string

Passphrase to use for the private key when authenticating with the external service this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_auth_client_key_pass ApplicationSettings#external_auth_client_key_pass}

---

##### `ExternalAuthorizationServiceDefaultLabel`<sup>Optional</sup> <a name="ExternalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel"></a>

```go
ExternalAuthorizationServiceDefaultLabel *string
```

- *Type:* *string

The default classification label to use when requesting authorization and no classification label has been specified on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_authorization_service_default_label ApplicationSettings#external_authorization_service_default_label}

---

##### `ExternalAuthorizationServiceEnabled`<sup>Optional</sup> <a name="ExternalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled"></a>

```go
ExternalAuthorizationServiceEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_authorization_service_enabled ApplicationSettings#external_authorization_service_enabled}

---

##### `ExternalAuthorizationServiceTimeout`<sup>Optional</sup> <a name="ExternalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout"></a>

```go
ExternalAuthorizationServiceTimeout *f64
```

- *Type:* *f64

The timeout after which an authorization request is aborted, in seconds.

When a request times out, access is denied to the user. (min: 0.001, max: 10, step: 0.001).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_authorization_service_timeout ApplicationSettings#external_authorization_service_timeout}

---

##### `ExternalAuthorizationServiceUrl`<sup>Optional</sup> <a name="ExternalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl"></a>

```go
ExternalAuthorizationServiceUrl *string
```

- *Type:* *string

URL to which authorization requests are directed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_authorization_service_url ApplicationSettings#external_authorization_service_url}

---

##### `ExternalPipelineValidationServiceTimeout`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout"></a>

```go
ExternalPipelineValidationServiceTimeout *f64
```

- *Type:* *f64

How long to wait for a response from the pipeline validation service. Assumes OK if it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_pipeline_validation_service_timeout ApplicationSettings#external_pipeline_validation_service_timeout}

---

##### `ExternalPipelineValidationServiceToken`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken"></a>

```go
ExternalPipelineValidationServiceToken *string
```

- *Type:* *string

Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_pipeline_validation_service_token ApplicationSettings#external_pipeline_validation_service_token}

---

##### `ExternalPipelineValidationServiceUrl`<sup>Optional</sup> <a name="ExternalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl"></a>

```go
ExternalPipelineValidationServiceUrl *string
```

- *Type:* *string

URL to use for pipeline validation requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#external_pipeline_validation_service_url ApplicationSettings#external_pipeline_validation_service_url}

---

##### `FailedLoginAttemptsUnlockPeriodInMinutes`<sup>Optional</sup> <a name="FailedLoginAttemptsUnlockPeriodInMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.failedLoginAttemptsUnlockPeriodInMinutes"></a>

```go
FailedLoginAttemptsUnlockPeriodInMinutes *f64
```

- *Type:* *f64

Time period in minutes after which the user is unlocked when maximum number of failed sign-in attempts reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#failed_login_attempts_unlock_period_in_minutes ApplicationSettings#failed_login_attempts_unlock_period_in_minutes}

---

##### `FileTemplateProjectId`<sup>Optional</sup> <a name="FileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId"></a>

```go
FileTemplateProjectId *f64
```

- *Type:* *f64

The ID of a project to load custom file templates from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#file_template_project_id ApplicationSettings#file_template_project_id}

---

##### `FirstDayOfWeek`<sup>Optional</sup> <a name="FirstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek"></a>

```go
FirstDayOfWeek *f64
```

- *Type:* *f64

Start day of the week for calendar views and date pickers.

Valid values are 0 for Sunday, 1 for Monday, and 6 for Saturday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#first_day_of_week ApplicationSettings#first_day_of_week}

---

##### `GeoNodeAllowedIps`<sup>Optional</sup> <a name="GeoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps"></a>

```go
GeoNodeAllowedIps *string
```

- *Type:* *string

Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#geo_node_allowed_ips ApplicationSettings#geo_node_allowed_ips}

---

##### `GeoStatusTimeout`<sup>Optional</sup> <a name="GeoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout"></a>

```go
GeoStatusTimeout *f64
```

- *Type:* *f64

The amount of seconds after which a request to get a secondary node status times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#geo_status_timeout ApplicationSettings#geo_status_timeout}

---

##### `GitalyTimeoutDefault`<sup>Optional</sup> <a name="GitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault"></a>

```go
GitalyTimeoutDefault *f64
```

- *Type:* *f64

Default Gitaly timeout, in seconds.

This timeout is not enforced for Git fetch/push operations or Sidekiq jobs. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#gitaly_timeout_default ApplicationSettings#gitaly_timeout_default}

---

##### `GitalyTimeoutFast`<sup>Optional</sup> <a name="GitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast"></a>

```go
GitalyTimeoutFast *f64
```

- *Type:* *f64

Gitaly fast operation timeout, in seconds.

Some Gitaly operations are expected to be fast. If they exceed this threshold, there may be a problem with a storage shard and ‘failing fast’ can help maintain the stability of the GitLab instance. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#gitaly_timeout_fast ApplicationSettings#gitaly_timeout_fast}

---

##### `GitalyTimeoutMedium`<sup>Optional</sup> <a name="GitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium"></a>

```go
GitalyTimeoutMedium *f64
```

- *Type:* *f64

Medium Gitaly timeout, in seconds.

This should be a value between the Fast and the Default timeout. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#gitaly_timeout_medium ApplicationSettings#gitaly_timeout_medium}

---

##### `GitlabShellOperationLimit`<sup>Optional</sup> <a name="GitlabShellOperationLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitlabShellOperationLimit"></a>

```go
GitlabShellOperationLimit *f64
```

- *Type:* *f64

Maximum number of Git operations per minute a user can perform. Introduced in GitLab 16.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#gitlab_shell_operation_limit ApplicationSettings#gitlab_shell_operation_limit}

---

##### `GitpodEnabled`<sup>Optional</sup> <a name="GitpodEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodEnabled"></a>

```go
GitpodEnabled interface{}
```

- *Type:* interface{}

Enable Gitpod integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#gitpod_enabled ApplicationSettings#gitpod_enabled}

---

##### `GitpodUrl`<sup>Optional</sup> <a name="GitpodUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodUrl"></a>

```go
GitpodUrl *string
```

- *Type:* *string

The Gitpod instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#gitpod_url ApplicationSettings#gitpod_url}

---

##### `GitRateLimitUsersAlertlist`<sup>Optional</sup> <a name="GitRateLimitUsersAlertlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAlertlist"></a>

```go
GitRateLimitUsersAlertlist *[]*f64
```

- *Type:* *[]*f64

List of user IDs that are emailed when the Git abuse rate limit is exceeded.

Maximum: 100 user IDs. Introduced in GitLab 15.9. Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#git_rate_limit_users_alertlist ApplicationSettings#git_rate_limit_users_alertlist}

---

##### `GitRateLimitUsersAllowlist`<sup>Optional</sup> <a name="GitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist"></a>

```go
GitRateLimitUsersAllowlist *[]*string
```

- *Type:* *[]*string

List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2. Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#git_rate_limit_users_allowlist ApplicationSettings#git_rate_limit_users_allowlist}

---

##### `GitTwoFactorSessionExpiry`<sup>Optional</sup> <a name="GitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry"></a>

```go
GitTwoFactorSessionExpiry *f64
```

- *Type:* *f64

Maximum duration (in minutes) of a session for Git operations when 2FA is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#git_two_factor_session_expiry ApplicationSettings#git_two_factor_session_expiry}

---

##### `GloballyAllowedIps`<sup>Optional</sup> <a name="GloballyAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.globallyAllowedIps"></a>

```go
GloballyAllowedIps *string
```

- *Type:* *string

Comma-separated list of IP addresses and CIDRs always allowed for inbound traffic. For example, 1.1.1.1, 2.2.2.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#globally_allowed_ips ApplicationSettings#globally_allowed_ips}

---

##### `GrafanaEnabled`<sup>Optional</sup> <a name="GrafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled"></a>

```go
GrafanaEnabled interface{}
```

- *Type:* interface{}

Enable Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#grafana_enabled ApplicationSettings#grafana_enabled}

---

##### `GrafanaUrl`<sup>Optional</sup> <a name="GrafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl"></a>

```go
GrafanaUrl *string
```

- *Type:* *string

Grafana URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#grafana_url ApplicationSettings#grafana_url}

---

##### `GravatarEnabled`<sup>Optional</sup> <a name="GravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled"></a>

```go
GravatarEnabled interface{}
```

- *Type:* interface{}

Enable Gravatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#gravatar_enabled ApplicationSettings#gravatar_enabled}

---

##### `GroupOwnersCanManageDefaultBranchProtection`<sup>Optional</sup> <a name="GroupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection"></a>

```go
GroupOwnersCanManageDefaultBranchProtection interface{}
```

- *Type:* interface{}

Prevent overrides of default branch protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#group_owners_can_manage_default_branch_protection ApplicationSettings#group_owners_can_manage_default_branch_protection}

---

##### `HashedStorageEnabled`<sup>Optional</sup> <a name="HashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled"></a>

```go
HashedStorageEnabled interface{}
```

- *Type:* interface{}

Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk.

This prevents repositories from having to be moved or renamed when the Project URL changes and may improve disk I/O performance. (Always enabled in GitLab versions 13.0 and later, configuration is scheduled for removal in 14.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#hashed_storage_enabled ApplicationSettings#hashed_storage_enabled}

---

##### `HelpPageHideCommercialContent`<sup>Optional</sup> <a name="HelpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent"></a>

```go
HelpPageHideCommercialContent interface{}
```

- *Type:* interface{}

Hide marketing-related entries from help.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#help_page_hide_commercial_content ApplicationSettings#help_page_hide_commercial_content}

---

##### `HelpPageSupportUrl`<sup>Optional</sup> <a name="HelpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl"></a>

```go
HelpPageSupportUrl *string
```

- *Type:* *string

Alternate support URL for help page and help dropdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#help_page_support_url ApplicationSettings#help_page_support_url}

---

##### `HelpPageText`<sup>Optional</sup> <a name="HelpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText"></a>

```go
HelpPageText *string
```

- *Type:* *string

Custom text displayed on the help page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#help_page_text ApplicationSettings#help_page_text}

---

##### `HelpText`<sup>Optional</sup> <a name="HelpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText"></a>

```go
HelpText *string
```

- *Type:* *string

GitLab server administrator information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#help_text ApplicationSettings#help_text}

---

##### `HideThirdPartyOffers`<sup>Optional</sup> <a name="HideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers"></a>

```go
HideThirdPartyOffers interface{}
```

- *Type:* interface{}

Do not display offers from third parties in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#hide_third_party_offers ApplicationSettings#hide_third_party_offers}

---

##### `HomePageUrl`<sup>Optional</sup> <a name="HomePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl"></a>

```go
HomePageUrl *string
```

- *Type:* *string

Redirect to this URL when not logged in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#home_page_url ApplicationSettings#home_page_url}

---

##### `HousekeepingEnabled`<sup>Optional</sup> <a name="HousekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled"></a>

```go
HousekeepingEnabled interface{}
```

- *Type:* interface{}

Enable or disable Git housekeeping.

If enabled, requires either housekeeping_optimize_repository_period OR housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period.
Options housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period are deprecated. Use housekeeping_optimize_repository_period instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#housekeeping_enabled ApplicationSettings#housekeeping_enabled}

---

##### `HousekeepingFullRepackPeriod`<sup>Optional</sup> <a name="HousekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod"></a>

```go
HousekeepingFullRepackPeriod *f64
```

- *Type:* *f64

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#housekeeping_full_repack_period ApplicationSettings#housekeeping_full_repack_period}

---

##### `HousekeepingGcPeriod`<sup>Optional</sup> <a name="HousekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod"></a>

```go
HousekeepingGcPeriod *f64
```

- *Type:* *f64

Number of Git pushes after which git gc is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#housekeeping_gc_period ApplicationSettings#housekeeping_gc_period}

---

##### `HousekeepingIncrementalRepackPeriod`<sup>Optional</sup> <a name="HousekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod"></a>

```go
HousekeepingIncrementalRepackPeriod *f64
```

- *Type:* *f64

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#housekeeping_incremental_repack_period ApplicationSettings#housekeeping_incremental_repack_period}

---

##### `HousekeepingOptimizeRepositoryPeriod`<sup>Optional</sup> <a name="HousekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingOptimizeRepositoryPeriod"></a>

```go
HousekeepingOptimizeRepositoryPeriod *f64
```

- *Type:* *f64

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#housekeeping_optimize_repository_period ApplicationSettings#housekeeping_optimize_repository_period}

---

##### `HtmlEmailsEnabled`<sup>Optional</sup> <a name="HtmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled"></a>

```go
HtmlEmailsEnabled interface{}
```

- *Type:* interface{}

Enable HTML emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#html_emails_enabled ApplicationSettings#html_emails_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportSources`<sup>Optional</sup> <a name="ImportSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources"></a>

```go
ImportSources *[]*string
```

- *Type:* *[]*string

Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#import_sources ApplicationSettings#import_sources}

---

##### `InactiveProjectsDeleteAfterMonths`<sup>Optional</sup> <a name="InactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths"></a>

```go
InactiveProjectsDeleteAfterMonths *f64
```

- *Type:* *f64

If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#inactive_projects_delete_after_months ApplicationSettings#inactive_projects_delete_after_months}

---

##### `InactiveProjectsMinSizeMb`<sup>Optional</sup> <a name="InactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb"></a>

```go
InactiveProjectsMinSizeMb *f64
```

- *Type:* *f64

If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#inactive_projects_min_size_mb ApplicationSettings#inactive_projects_min_size_mb}

---

##### `InactiveProjectsSendWarningEmailAfterMonths`<sup>Optional</sup> <a name="InactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```go
InactiveProjectsSendWarningEmailAfterMonths *f64
```

- *Type:* *f64

If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#inactive_projects_send_warning_email_after_months ApplicationSettings#inactive_projects_send_warning_email_after_months}

---

##### `IncludeOptionalMetricsInServicePing`<sup>Optional</sup> <a name="IncludeOptionalMetricsInServicePing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.includeOptionalMetricsInServicePing"></a>

```go
IncludeOptionalMetricsInServicePing interface{}
```

- *Type:* interface{}

Whether or not optional metrics are enabled in Service Ping. Introduced in GitLab 16.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#include_optional_metrics_in_service_ping ApplicationSettings#include_optional_metrics_in_service_ping}

---

##### `InProductMarketingEmailsEnabled`<sup>Optional</sup> <a name="InProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled"></a>

```go
InProductMarketingEmailsEnabled interface{}
```

- *Type:* interface{}

Enable in-product marketing emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#in_product_marketing_emails_enabled ApplicationSettings#in_product_marketing_emails_enabled}

---

##### `InvisibleCaptchaEnabled`<sup>Optional</sup> <a name="InvisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled"></a>

```go
InvisibleCaptchaEnabled interface{}
```

- *Type:* interface{}

Enable Invisible CAPTCHA spam detection during sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#invisible_captcha_enabled ApplicationSettings#invisible_captcha_enabled}

---

##### `IssuesCreateLimit`<sup>Optional</sup> <a name="IssuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit"></a>

```go
IssuesCreateLimit *f64
```

- *Type:* *f64

Max number of issue creation requests per minute per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#issues_create_limit ApplicationSettings#issues_create_limit}

---

##### `JiraConnectApplicationKey`<sup>Optional</sup> <a name="JiraConnectApplicationKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectApplicationKey"></a>

```go
JiraConnectApplicationKey *string
```

- *Type:* *string

ID of the OAuth application used to authenticate with the GitLab for Jira Cloud app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#jira_connect_application_key ApplicationSettings#jira_connect_application_key}

---

##### `JiraConnectProxyUrl`<sup>Optional</sup> <a name="JiraConnectProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectProxyUrl"></a>

```go
JiraConnectProxyUrl *string
```

- *Type:* *string

URL of the GitLab instance used as a proxy for the GitLab for Jira Cloud app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#jira_connect_proxy_url ApplicationSettings#jira_connect_proxy_url}

---

##### `JiraConnectPublicKeyStorageEnabled`<sup>Optional</sup> <a name="JiraConnectPublicKeyStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectPublicKeyStorageEnabled"></a>

```go
JiraConnectPublicKeyStorageEnabled interface{}
```

- *Type:* interface{}

Enable public key storage for the GitLab for Jira Cloud app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#jira_connect_public_key_storage_enabled ApplicationSettings#jira_connect_public_key_storage_enabled}

---

##### `KeepLatestArtifact`<sup>Optional</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact"></a>

```go
KeepLatestArtifact interface{}
```

- *Type:* interface{}

Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#keep_latest_artifact ApplicationSettings#keep_latest_artifact}

---

##### `LocalMarkdownVersion`<sup>Optional</sup> <a name="LocalMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion"></a>

```go
LocalMarkdownVersion *f64
```

- *Type:* *f64

Increase this value when any cached Markdown should be invalidated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#local_markdown_version ApplicationSettings#local_markdown_version}

---

##### `LockDuoFeaturesEnabled`<sup>Optional</sup> <a name="LockDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lockDuoFeaturesEnabled"></a>

```go
LockDuoFeaturesEnabled interface{}
```

- *Type:* interface{}

Indicates whether the GitLab Duo features enabled setting is enforced for all subgroups.

Introduced in GitLab 16.10. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#lock_duo_features_enabled ApplicationSettings#lock_duo_features_enabled}

---

##### `MailgunEventsEnabled`<sup>Optional</sup> <a name="MailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled"></a>

```go
MailgunEventsEnabled interface{}
```

- *Type:* interface{}

Enable Mailgun event receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#mailgun_events_enabled ApplicationSettings#mailgun_events_enabled}

---

##### `MailgunSigningKey`<sup>Optional</sup> <a name="MailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey"></a>

```go
MailgunSigningKey *string
```

- *Type:* *string

The Mailgun HTTP webhook signing key for receiving events from webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#mailgun_signing_key ApplicationSettings#mailgun_signing_key}

---

##### `MaintenanceMode`<sup>Optional</sup> <a name="MaintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode"></a>

```go
MaintenanceMode interface{}
```

- *Type:* interface{}

When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#maintenance_mode ApplicationSettings#maintenance_mode}

---

##### `MaintenanceModeMessage`<sup>Optional</sup> <a name="MaintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage"></a>

```go
MaintenanceModeMessage *string
```

- *Type:* *string

Message displayed when instance is in maintenance mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#maintenance_mode_message ApplicationSettings#maintenance_mode_message}

---

##### `MavenPackageRequestsForwarding`<sup>Optional</sup> <a name="MavenPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mavenPackageRequestsForwarding"></a>

```go
MavenPackageRequestsForwarding interface{}
```

- *Type:* interface{}

Use repo.maven.apache.org as a default remote repository when the package is not found in the GitLab Package Registry for Maven. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#maven_package_requests_forwarding ApplicationSettings#maven_package_requests_forwarding}

---

##### `MaxArtifactsSize`<sup>Optional</sup> <a name="MaxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize"></a>

```go
MaxArtifactsSize *f64
```

- *Type:* *f64

Maximum artifacts size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_artifacts_size ApplicationSettings#max_artifacts_size}

---

##### `MaxAttachmentSize`<sup>Optional</sup> <a name="MaxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize"></a>

```go
MaxAttachmentSize *f64
```

- *Type:* *f64

Limit attachment size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_attachment_size ApplicationSettings#max_attachment_size}

---

##### `MaxDecompressedArchiveSize`<sup>Optional</sup> <a name="MaxDecompressedArchiveSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxDecompressedArchiveSize"></a>

```go
MaxDecompressedArchiveSize *f64
```

- *Type:* *f64

Maximum decompressed archive size in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_decompressed_archive_size ApplicationSettings#max_decompressed_archive_size}

---

##### `MaxExportSize`<sup>Optional</sup> <a name="MaxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize"></a>

```go
MaxExportSize *f64
```

- *Type:* *f64

Maximum export size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_export_size ApplicationSettings#max_export_size}

---

##### `MaxImportRemoteFileSize`<sup>Optional</sup> <a name="MaxImportRemoteFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportRemoteFileSize"></a>

```go
MaxImportRemoteFileSize *f64
```

- *Type:* *f64

Maximum remote file size for imports from external object storages. Introduced in GitLab 16.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_import_remote_file_size ApplicationSettings#max_import_remote_file_size}

---

##### `MaxImportSize`<sup>Optional</sup> <a name="MaxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize"></a>

```go
MaxImportSize *f64
```

- *Type:* *f64

Maximum import size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_import_size ApplicationSettings#max_import_size}

---

##### `MaxLoginAttempts`<sup>Optional</sup> <a name="MaxLoginAttempts" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxLoginAttempts"></a>

```go
MaxLoginAttempts *f64
```

- *Type:* *f64

Maximum number of sign-in attempts before locking out the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_login_attempts ApplicationSettings#max_login_attempts}

---

##### `MaxNumberOfRepositoryDownloads`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads"></a>

```go
MaxNumberOfRepositoryDownloads *f64
```

- *Type:* *f64

Maximum number of unique repositories a user can download in the specified time period before they are banned.

Maximum: 10,000 repositories. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_number_of_repository_downloads ApplicationSettings#max_number_of_repository_downloads}

---

##### `MaxNumberOfRepositoryDownloadsWithinTimePeriod`<sup>Optional</sup> <a name="MaxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```go
MaxNumberOfRepositoryDownloadsWithinTimePeriod *f64
```

- *Type:* *f64

Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_number_of_repository_downloads_within_time_period ApplicationSettings#max_number_of_repository_downloads_within_time_period}

---

##### `MaxPagesSize`<sup>Optional</sup> <a name="MaxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize"></a>

```go
MaxPagesSize *f64
```

- *Type:* *f64

Maximum size of pages repositories in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_pages_size ApplicationSettings#max_pages_size}

---

##### `MaxPersonalAccessTokenLifetime`<sup>Optional</sup> <a name="MaxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime"></a>

```go
MaxPersonalAccessTokenLifetime *f64
```

- *Type:* *f64

Maximum allowable lifetime for access tokens in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_personal_access_token_lifetime ApplicationSettings#max_personal_access_token_lifetime}

---

##### `MaxSshKeyLifetime`<sup>Optional</sup> <a name="MaxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime"></a>

```go
MaxSshKeyLifetime *f64
```

- *Type:* *f64

Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_ssh_key_lifetime ApplicationSettings#max_ssh_key_lifetime}

---

##### `MaxTerraformStateSizeBytes`<sup>Optional</sup> <a name="MaxTerraformStateSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxTerraformStateSizeBytes"></a>

```go
MaxTerraformStateSizeBytes *f64
```

- *Type:* *f64

Maximum size in bytes of the Terraform state files. Set this to 0 for unlimited file size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#max_terraform_state_size_bytes ApplicationSettings#max_terraform_state_size_bytes}

---

##### `MetricsMethodCallThreshold`<sup>Optional</sup> <a name="MetricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold"></a>

```go
MetricsMethodCallThreshold *f64
```

- *Type:* *f64

A method call is only tracked when it takes longer than the given amount of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#metrics_method_call_threshold ApplicationSettings#metrics_method_call_threshold}

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.minimumPasswordLength"></a>

```go
MinimumPasswordLength *f64
```

- *Type:* *f64

Indicates whether passwords require a minimum length. Introduced in GitLab 15.1. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#minimum_password_length ApplicationSettings#minimum_password_length}

---

##### `MirrorAvailable`<sup>Optional</sup> <a name="MirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable"></a>

```go
MirrorAvailable interface{}
```

- *Type:* interface{}

Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#mirror_available ApplicationSettings#mirror_available}

---

##### `MirrorCapacityThreshold`<sup>Optional</sup> <a name="MirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold"></a>

```go
MirrorCapacityThreshold *f64
```

- *Type:* *f64

Minimum capacity to be available before scheduling more mirrors preemptively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#mirror_capacity_threshold ApplicationSettings#mirror_capacity_threshold}

---

##### `MirrorMaxCapacity`<sup>Optional</sup> <a name="MirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity"></a>

```go
MirrorMaxCapacity *f64
```

- *Type:* *f64

Maximum number of mirrors that can be synchronizing at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#mirror_max_capacity ApplicationSettings#mirror_max_capacity}

---

##### `MirrorMaxDelay`<sup>Optional</sup> <a name="MirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay"></a>

```go
MirrorMaxDelay *f64
```

- *Type:* *f64

Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#mirror_max_delay ApplicationSettings#mirror_max_delay}

---

##### `NpmPackageRequestsForwarding`<sup>Optional</sup> <a name="NpmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding"></a>

```go
NpmPackageRequestsForwarding interface{}
```

- *Type:* interface{}

Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#npm_package_requests_forwarding ApplicationSettings#npm_package_requests_forwarding}

---

##### `NugetSkipMetadataUrlValidation`<sup>Optional</sup> <a name="NugetSkipMetadataUrlValidation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.nugetSkipMetadataUrlValidation"></a>

```go
NugetSkipMetadataUrlValidation interface{}
```

- *Type:* interface{}

Indicates whether to skip metadata URL validation for the NuGet package. Introduced in GitLab 17.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#nuget_skip_metadata_url_validation ApplicationSettings#nuget_skip_metadata_url_validation}

---

##### `OutboundLocalRequestsWhitelist`<sup>Optional</sup> <a name="OutboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist"></a>

```go
OutboundLocalRequestsWhitelist *[]*string
```

- *Type:* *[]*string

Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#outbound_local_requests_whitelist ApplicationSettings#outbound_local_requests_whitelist}

---

##### `PackageMetadataPurlTypes`<sup>Optional</sup> <a name="PackageMetadataPurlTypes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageMetadataPurlTypes"></a>

```go
PackageMetadataPurlTypes *[]*f64
```

- *Type:* *[]*f64

List of package registry metadata to sync. See the list of the available values (https://gitlab.com/gitlab-org/gitlab/-/blob/ace16c20d5da7c4928dd03fb139692638b557fe3/app/models/concerns/enums/package_metadata.rb#L5). Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#package_metadata_purl_types ApplicationSettings#package_metadata_purl_types}

---

##### `PackageRegistryAllowAnyoneToPullOption`<sup>Optional</sup> <a name="PackageRegistryAllowAnyoneToPullOption" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryAllowAnyoneToPullOption"></a>

```go
PackageRegistryAllowAnyoneToPullOption interface{}
```

- *Type:* interface{}

Enable to allow anyone to pull from Package Registry visible and changeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#package_registry_allow_anyone_to_pull_option ApplicationSettings#package_registry_allow_anyone_to_pull_option}

---

##### `PackageRegistryCleanupPoliciesWorkerCapacity`<sup>Optional</sup> <a name="PackageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```go
PackageRegistryCleanupPoliciesWorkerCapacity *f64
```

- *Type:* *f64

Number of workers assigned to the packages cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#package_registry_cleanup_policies_worker_capacity ApplicationSettings#package_registry_cleanup_policies_worker_capacity}

---

##### `PagesDomainVerificationEnabled`<sup>Optional</sup> <a name="PagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled"></a>

```go
PagesDomainVerificationEnabled interface{}
```

- *Type:* interface{}

Require users to prove ownership of custom domains.

Domain verification is an essential security measure for public GitLab sites. Users are required to demonstrate they control a domain before it is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#pages_domain_verification_enabled ApplicationSettings#pages_domain_verification_enabled}

---

##### `PasswordAuthenticationEnabledForGit`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit"></a>

```go
PasswordAuthenticationEnabledForGit interface{}
```

- *Type:* interface{}

Enable authentication for Git over HTTP(S) via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#password_authentication_enabled_for_git ApplicationSettings#password_authentication_enabled_for_git}

---

##### `PasswordAuthenticationEnabledForWeb`<sup>Optional</sup> <a name="PasswordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb"></a>

```go
PasswordAuthenticationEnabledForWeb interface{}
```

- *Type:* interface{}

Enable authentication for the web interface via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#password_authentication_enabled_for_web ApplicationSettings#password_authentication_enabled_for_web}

---

##### `PasswordLowercaseRequired`<sup>Optional</sup> <a name="PasswordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired"></a>

```go
PasswordLowercaseRequired interface{}
```

- *Type:* interface{}

Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#password_lowercase_required ApplicationSettings#password_lowercase_required}

---

##### `PasswordNumberRequired`<sup>Optional</sup> <a name="PasswordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired"></a>

```go
PasswordNumberRequired interface{}
```

- *Type:* interface{}

Indicates whether passwords require at least one number. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#password_number_required ApplicationSettings#password_number_required}

---

##### `PasswordSymbolRequired`<sup>Optional</sup> <a name="PasswordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired"></a>

```go
PasswordSymbolRequired interface{}
```

- *Type:* interface{}

Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#password_symbol_required ApplicationSettings#password_symbol_required}

---

##### `PasswordUppercaseRequired`<sup>Optional</sup> <a name="PasswordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired"></a>

```go
PasswordUppercaseRequired interface{}
```

- *Type:* interface{}

Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#password_uppercase_required ApplicationSettings#password_uppercase_required}

---

##### `PerformanceBarAllowedGroupPath`<sup>Optional</sup> <a name="PerformanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath"></a>

```go
PerformanceBarAllowedGroupPath *string
```

- *Type:* *string

Path of the group that is allowed to toggle the performance bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#performance_bar_allowed_group_path ApplicationSettings#performance_bar_allowed_group_path}

---

##### `PersonalAccessTokenPrefix`<sup>Optional</sup> <a name="PersonalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix"></a>

```go
PersonalAccessTokenPrefix *string
```

- *Type:* *string

Prefix for all generated personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#personal_access_token_prefix ApplicationSettings#personal_access_token_prefix}

---

##### `PipelineLimitPerProjectUserSha`<sup>Optional</sup> <a name="PipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha"></a>

```go
PipelineLimitPerProjectUserSha *f64
```

- *Type:* *f64

Maximum number of pipeline creation requests per minute per user and commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#pipeline_limit_per_project_user_sha ApplicationSettings#pipeline_limit_per_project_user_sha}

---

##### `PlantumlEnabled`<sup>Optional</sup> <a name="PlantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled"></a>

```go
PlantumlEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: plantuml_url) Enable PlantUML integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#plantuml_enabled ApplicationSettings#plantuml_enabled}

---

##### `PlantumlUrl`<sup>Optional</sup> <a name="PlantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl"></a>

```go
PlantumlUrl *string
```

- *Type:* *string

The PlantUML instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#plantuml_url ApplicationSettings#plantuml_url}

---

##### `PollingIntervalMultiplier`<sup>Optional</sup> <a name="PollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier"></a>

```go
PollingIntervalMultiplier *f64
```

- *Type:* *f64

Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#polling_interval_multiplier ApplicationSettings#polling_interval_multiplier}

---

##### `ProjectExportEnabled`<sup>Optional</sup> <a name="ProjectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled"></a>

```go
ProjectExportEnabled interface{}
```

- *Type:* interface{}

Enable project export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#project_export_enabled ApplicationSettings#project_export_enabled}

---

##### `ProjectJobsApiRateLimit`<sup>Optional</sup> <a name="ProjectJobsApiRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectJobsApiRateLimit"></a>

```go
ProjectJobsApiRateLimit *f64
```

- *Type:* *f64

Maximum authenticated requests to /project/:id/jobs per minute. Introduced in GitLab 16.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#project_jobs_api_rate_limit ApplicationSettings#project_jobs_api_rate_limit}

---

##### `ProjectsApiRateLimitUnauthenticated`<sup>Optional</sup> <a name="ProjectsApiRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectsApiRateLimitUnauthenticated"></a>

```go
ProjectsApiRateLimitUnauthenticated *f64
```

- *Type:* *f64

Introduced in GitLab 15.10. Max number of requests per 10 minutes per IP address for unauthenticated requests to the list all projects API. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#projects_api_rate_limit_unauthenticated ApplicationSettings#projects_api_rate_limit_unauthenticated}

---

##### `PrometheusMetricsEnabled`<sup>Optional</sup> <a name="PrometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled"></a>

```go
PrometheusMetricsEnabled interface{}
```

- *Type:* interface{}

Enable Prometheus metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#prometheus_metrics_enabled ApplicationSettings#prometheus_metrics_enabled}

---

##### `ProtectedCiVariables`<sup>Optional</sup> <a name="ProtectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables"></a>

```go
ProtectedCiVariables interface{}
```

- *Type:* interface{}

CI/CD variables are protected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#protected_ci_variables ApplicationSettings#protected_ci_variables}

---

##### `PushEventActivitiesLimit`<sup>Optional</sup> <a name="PushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit"></a>

```go
PushEventActivitiesLimit *f64
```

- *Type:* *f64

Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created.

Bulk push events are created if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#push_event_activities_limit ApplicationSettings#push_event_activities_limit}

---

##### `PushEventHooksLimit`<sup>Optional</sup> <a name="PushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit"></a>

```go
PushEventHooksLimit *f64
```

- *Type:* *f64

Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not.

Webhooks and services aren’t submitted if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#push_event_hooks_limit ApplicationSettings#push_event_hooks_limit}

---

##### `PypiPackageRequestsForwarding`<sup>Optional</sup> <a name="PypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding"></a>

```go
PypiPackageRequestsForwarding interface{}
```

- *Type:* interface{}

Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#pypi_package_requests_forwarding ApplicationSettings#pypi_package_requests_forwarding}

---

##### `RateLimitingResponseText`<sup>Optional</sup> <a name="RateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText"></a>

```go
RateLimitingResponseText *string
```

- *Type:* *string

When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded.

‘Retry later’ is sent if this is blank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#rate_limiting_response_text ApplicationSettings#rate_limiting_response_text}

---

##### `RawBlobRequestLimit`<sup>Optional</sup> <a name="RawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit"></a>

```go
RawBlobRequestLimit *f64
```

- *Type:* *f64

Max number of requests per minute for each raw path. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#raw_blob_request_limit ApplicationSettings#raw_blob_request_limit}

---

##### `RecaptchaEnabled`<sup>Optional</sup> <a name="RecaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled"></a>

```go
RecaptchaEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#recaptcha_enabled ApplicationSettings#recaptcha_enabled}

---

##### `RecaptchaPrivateKey`<sup>Optional</sup> <a name="RecaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey"></a>

```go
RecaptchaPrivateKey *string
```

- *Type:* *string

Private key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#recaptcha_private_key ApplicationSettings#recaptcha_private_key}

---

##### `RecaptchaSiteKey`<sup>Optional</sup> <a name="RecaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey"></a>

```go
RecaptchaSiteKey *string
```

- *Type:* *string

Site key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#recaptcha_site_key ApplicationSettings#recaptcha_site_key}

---

##### `ReceiveMaxInputSize`<sup>Optional</sup> <a name="ReceiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize"></a>

```go
ReceiveMaxInputSize *f64
```

- *Type:* *f64

Maximum push size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#receive_max_input_size ApplicationSettings#receive_max_input_size}

---

##### `ReceptiveClusterAgentsEnabled`<sup>Optional</sup> <a name="ReceptiveClusterAgentsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receptiveClusterAgentsEnabled"></a>

```go
ReceptiveClusterAgentsEnabled interface{}
```

- *Type:* interface{}

Enable receptive mode for GitLab Agents for Kubernetes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#receptive_cluster_agents_enabled ApplicationSettings#receptive_cluster_agents_enabled}

---

##### `RememberMeEnabled`<sup>Optional</sup> <a name="RememberMeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rememberMeEnabled"></a>

```go
RememberMeEnabled interface{}
```

- *Type:* interface{}

Enable Remember me setting. Introduced in GitLab 16.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#remember_me_enabled ApplicationSettings#remember_me_enabled}

---

##### `RepositoryChecksEnabled`<sup>Optional</sup> <a name="RepositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled"></a>

```go
RepositoryChecksEnabled interface{}
```

- *Type:* interface{}

GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#repository_checks_enabled ApplicationSettings#repository_checks_enabled}

---

##### `RepositorySizeLimit`<sup>Optional</sup> <a name="RepositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit"></a>

```go
RepositorySizeLimit *f64
```

- *Type:* *f64

Size limit per repository (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#repository_size_limit ApplicationSettings#repository_size_limit}

---

##### `RepositoryStorages`<sup>Optional</sup> <a name="RepositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages"></a>

```go
RepositoryStorages *[]*string
```

- *Type:* *[]*string

(GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#repository_storages ApplicationSettings#repository_storages}

---

##### `RepositoryStoragesWeighted`<sup>Optional</sup> <a name="RepositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted"></a>

```go
RepositoryStoragesWeighted *map[string]*f64
```

- *Type:* *map[string]*f64

(GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#repository_storages_weighted ApplicationSettings#repository_storages_weighted}

---

##### `RequireAdminApprovalAfterUserSignup`<sup>Optional</sup> <a name="RequireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup"></a>

```go
RequireAdminApprovalAfterUserSignup interface{}
```

- *Type:* interface{}

When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#require_admin_approval_after_user_signup ApplicationSettings#require_admin_approval_after_user_signup}

---

##### `RequireAdminTwoFactorAuthentication`<sup>Optional</sup> <a name="RequireAdminTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminTwoFactorAuthentication"></a>

```go
RequireAdminTwoFactorAuthentication interface{}
```

- *Type:* interface{}

Allow administrators to require 2FA for all administrators on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#require_admin_two_factor_authentication ApplicationSettings#require_admin_two_factor_authentication}

---

##### `RequirePersonalAccessTokenExpiry`<sup>Optional</sup> <a name="RequirePersonalAccessTokenExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requirePersonalAccessTokenExpiry"></a>

```go
RequirePersonalAccessTokenExpiry interface{}
```

- *Type:* interface{}

When enabled, users must set an expiration date when creating a group or project access token, or a personal access token owned by a non-service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#require_personal_access_token_expiry ApplicationSettings#require_personal_access_token_expiry}

---

##### `RequireTwoFactorAuthentication`<sup>Optional</sup> <a name="RequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication"></a>

```go
RequireTwoFactorAuthentication interface{}
```

- *Type:* interface{}

(If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#require_two_factor_authentication ApplicationSettings#require_two_factor_authentication}

---

##### `RestrictedVisibilityLevels`<sup>Optional</sup> <a name="RestrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels"></a>

```go
RestrictedVisibilityLevels *[]*string
```

- *Type:* *[]*string

Selected levels cannot be used by non-Administrator users for groups, projects or snippets.

Can take private, internal and public as a parameter. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#restricted_visibility_levels ApplicationSettings#restricted_visibility_levels}

---

##### `RsaKeyRestriction`<sup>Optional</sup> <a name="RsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction"></a>

```go
RsaKeyRestriction *f64
```

- *Type:* *f64

The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#rsa_key_restriction ApplicationSettings#rsa_key_restriction}

---

##### `SearchRateLimit`<sup>Optional</sup> <a name="SearchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit"></a>

```go
SearchRateLimit *f64
```

- *Type:* *f64

Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#search_rate_limit ApplicationSettings#search_rate_limit}

---

##### `SearchRateLimitUnauthenticated`<sup>Optional</sup> <a name="SearchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated"></a>

```go
SearchRateLimitUnauthenticated *f64
```

- *Type:* *f64

Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#search_rate_limit_unauthenticated ApplicationSettings#search_rate_limit_unauthenticated}

---

##### `SecurityApprovalPoliciesLimit`<sup>Optional</sup> <a name="SecurityApprovalPoliciesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityApprovalPoliciesLimit"></a>

```go
SecurityApprovalPoliciesLimit *f64
```

- *Type:* *f64

Maximum number of active merge request approval policies per security policy project. Maximum: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#security_approval_policies_limit ApplicationSettings#security_approval_policies_limit}

---

##### `SecurityPolicyGlobalGroupApproversEnabled`<sup>Optional</sup> <a name="SecurityPolicyGlobalGroupApproversEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityPolicyGlobalGroupApproversEnabled"></a>

```go
SecurityPolicyGlobalGroupApproversEnabled interface{}
```

- *Type:* interface{}

Whether to look up merge request approval policy approval groups globally or within project hierarchies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#security_policy_global_group_approvers_enabled ApplicationSettings#security_policy_global_group_approvers_enabled}

---

##### `SecurityTxtContent`<sup>Optional</sup> <a name="SecurityTxtContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityTxtContent"></a>

```go
SecurityTxtContent *string
```

- *Type:* *string

Public security contact information. Introduced in GitLab 16.7.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#security_txt_content ApplicationSettings#security_txt_content}

---

##### `SendUserConfirmationEmail`<sup>Optional</sup> <a name="SendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail"></a>

```go
SendUserConfirmationEmail interface{}
```

- *Type:* interface{}

Send confirmation email on sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#send_user_confirmation_email ApplicationSettings#send_user_confirmation_email}

---

##### `ServiceAccessTokensExpirationEnforced`<sup>Optional</sup> <a name="ServiceAccessTokensExpirationEnforced" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.serviceAccessTokensExpirationEnforced"></a>

```go
ServiceAccessTokensExpirationEnforced interface{}
```

- *Type:* interface{}

Flag to indicate if token expiry date can be optional for service account users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#service_access_tokens_expiration_enforced ApplicationSettings#service_access_tokens_expiration_enforced}

---

##### `SessionExpireDelay`<sup>Optional</sup> <a name="SessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay"></a>

```go
SessionExpireDelay *f64
```

- *Type:* *f64

Session duration in minutes. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#session_expire_delay ApplicationSettings#session_expire_delay}

---

##### `SharedRunnersEnabled`<sup>Optional</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled"></a>

```go
SharedRunnersEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#shared_runners_enabled ApplicationSettings#shared_runners_enabled}

---

##### `SharedRunnersMinutes`<sup>Optional</sup> <a name="SharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes"></a>

```go
SharedRunnersMinutes *f64
```

- *Type:* *f64

Set the maximum number of CI/CD minutes that a group can use on shared runners per month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#shared_runners_minutes ApplicationSettings#shared_runners_minutes}

---

##### `SharedRunnersText`<sup>Optional</sup> <a name="SharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText"></a>

```go
SharedRunnersText *string
```

- *Type:* *string

Shared runners text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#shared_runners_text ApplicationSettings#shared_runners_text}

---

##### `SidekiqJobLimiterCompressionThresholdBytes`<sup>Optional</sup> <a name="SidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```go
SidekiqJobLimiterCompressionThresholdBytes *f64
```

- *Type:* *f64

The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#sidekiq_job_limiter_compression_threshold_bytes ApplicationSettings#sidekiq_job_limiter_compression_threshold_bytes}

---

##### `SidekiqJobLimiterLimitBytes`<sup>Optional</sup> <a name="SidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes"></a>

```go
SidekiqJobLimiterLimitBytes *f64
```

- *Type:* *f64

The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#sidekiq_job_limiter_limit_bytes ApplicationSettings#sidekiq_job_limiter_limit_bytes}

---

##### `SidekiqJobLimiterMode`<sup>Optional</sup> <a name="SidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode"></a>

```go
SidekiqJobLimiterMode *string
```

- *Type:* *string

track or compress. Sets the behavior for Sidekiq job size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#sidekiq_job_limiter_mode ApplicationSettings#sidekiq_job_limiter_mode}

---

##### `SignInText`<sup>Optional</sup> <a name="SignInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText"></a>

```go
SignInText *string
```

- *Type:* *string

Text on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#sign_in_text ApplicationSettings#sign_in_text}

---

##### `SignupEnabled`<sup>Optional</sup> <a name="SignupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled"></a>

```go
SignupEnabled interface{}
```

- *Type:* interface{}

Enable registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#signup_enabled ApplicationSettings#signup_enabled}

---

##### `SilentAdminExportsEnabled`<sup>Optional</sup> <a name="SilentAdminExportsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentAdminExportsEnabled"></a>

```go
SilentAdminExportsEnabled interface{}
```

- *Type:* interface{}

Enable Silent admin exports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#silent_admin_exports_enabled ApplicationSettings#silent_admin_exports_enabled}

---

##### `SilentModeEnabled`<sup>Optional</sup> <a name="SilentModeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentModeEnabled"></a>

```go
SilentModeEnabled interface{}
```

- *Type:* interface{}

Enable Silent mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#silent_mode_enabled ApplicationSettings#silent_mode_enabled}

---

##### `SlackAppEnabled`<sup>Optional</sup> <a name="SlackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled"></a>

```go
SlackAppEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#slack_app_enabled ApplicationSettings#slack_app_enabled}

---

##### `SlackAppId`<sup>Optional</sup> <a name="SlackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId"></a>

```go
SlackAppId *string
```

- *Type:* *string

The app ID of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#slack_app_id ApplicationSettings#slack_app_id}

---

##### `SlackAppSecret`<sup>Optional</sup> <a name="SlackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret"></a>

```go
SlackAppSecret *string
```

- *Type:* *string

The app secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#slack_app_secret ApplicationSettings#slack_app_secret}

---

##### `SlackAppSigningSecret`<sup>Optional</sup> <a name="SlackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret"></a>

```go
SlackAppSigningSecret *string
```

- *Type:* *string

The signing secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#slack_app_signing_secret ApplicationSettings#slack_app_signing_secret}

---

##### `SlackAppVerificationToken`<sup>Optional</sup> <a name="SlackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken"></a>

```go
SlackAppVerificationToken *string
```

- *Type:* *string

The verification token of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#slack_app_verification_token ApplicationSettings#slack_app_verification_token}

---

##### `SnippetSizeLimit`<sup>Optional</sup> <a name="SnippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit"></a>

```go
SnippetSizeLimit *f64
```

- *Type:* *f64

Max snippet content size in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#snippet_size_limit ApplicationSettings#snippet_size_limit}

---

##### `SnowplowAppId`<sup>Optional</sup> <a name="SnowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId"></a>

```go
SnowplowAppId *string
```

- *Type:* *string

The Snowplow site name / application ID. (for example, gitlab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#snowplow_app_id ApplicationSettings#snowplow_app_id}

---

##### `SnowplowCollectorHostname`<sup>Optional</sup> <a name="SnowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname"></a>

```go
SnowplowCollectorHostname *string
```

- *Type:* *string

The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#snowplow_collector_hostname ApplicationSettings#snowplow_collector_hostname}

---

##### `SnowplowCookieDomain`<sup>Optional</sup> <a name="SnowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain"></a>

```go
SnowplowCookieDomain *string
```

- *Type:* *string

The Snowplow cookie domain. (for example, .gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#snowplow_cookie_domain ApplicationSettings#snowplow_cookie_domain}

---

##### `SnowplowDatabaseCollectorHostname`<sup>Optional</sup> <a name="SnowplowDatabaseCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowDatabaseCollectorHostname"></a>

```go
SnowplowDatabaseCollectorHostname *string
```

- *Type:* *string

The Snowplow collector for database events hostname. (for example, db-snowplow.trx.gitlab.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#snowplow_database_collector_hostname ApplicationSettings#snowplow_database_collector_hostname}

---

##### `SnowplowEnabled`<sup>Optional</sup> <a name="SnowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled"></a>

```go
SnowplowEnabled interface{}
```

- *Type:* interface{}

Enable snowplow tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#snowplow_enabled ApplicationSettings#snowplow_enabled}

---

##### `SourcegraphEnabled`<sup>Optional</sup> <a name="SourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled"></a>

```go
SourcegraphEnabled interface{}
```

- *Type:* interface{}

Enables Sourcegraph integration. If enabled, requires sourcegraph_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#sourcegraph_enabled ApplicationSettings#sourcegraph_enabled}

---

##### `SourcegraphPublicOnly`<sup>Optional</sup> <a name="SourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly"></a>

```go
SourcegraphPublicOnly interface{}
```

- *Type:* interface{}

Blocks Sourcegraph from being loaded on private and internal projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#sourcegraph_public_only ApplicationSettings#sourcegraph_public_only}

---

##### `SourcegraphUrl`<sup>Optional</sup> <a name="SourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl"></a>

```go
SourcegraphUrl *string
```

- *Type:* *string

The Sourcegraph instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#sourcegraph_url ApplicationSettings#sourcegraph_url}

---

##### `SpamCheckApiKey`<sup>Optional</sup> <a name="SpamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey"></a>

```go
SpamCheckApiKey *string
```

- *Type:* *string

API key used by GitLab for accessing the Spam Check service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#spam_check_api_key ApplicationSettings#spam_check_api_key}

---

##### `SpamCheckEndpointEnabled`<sup>Optional</sup> <a name="SpamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled"></a>

```go
SpamCheckEndpointEnabled interface{}
```

- *Type:* interface{}

Enables spam checking using external Spam Check API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#spam_check_endpoint_enabled ApplicationSettings#spam_check_endpoint_enabled}

---

##### `SpamCheckEndpointUrl`<sup>Optional</sup> <a name="SpamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl"></a>

```go
SpamCheckEndpointUrl *string
```

- *Type:* *string

URL of the external Spamcheck service endpoint.

Valid URI schemes are grpc or tls. Specifying tls forces communication to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#spam_check_endpoint_url ApplicationSettings#spam_check_endpoint_url}

---

##### `StaticObjectsExternalStorageAuthToken`<sup>Optional</sup> <a name="StaticObjectsExternalStorageAuthToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageAuthToken"></a>

```go
StaticObjectsExternalStorageAuthToken *string
```

- *Type:* *string

Authentication token for the external storage linked in static_objects_external_storage_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#static_objects_external_storage_auth_token ApplicationSettings#static_objects_external_storage_auth_token}

---

##### `StaticObjectsExternalStorageUrl`<sup>Optional</sup> <a name="StaticObjectsExternalStorageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageUrl"></a>

```go
StaticObjectsExternalStorageUrl *string
```

- *Type:* *string

URL to an external storage for repository static objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#static_objects_external_storage_url ApplicationSettings#static_objects_external_storage_url}

---

##### `SuggestPipelineEnabled`<sup>Optional</sup> <a name="SuggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled"></a>

```go
SuggestPipelineEnabled interface{}
```

- *Type:* interface{}

Enable pipeline suggestion banner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#suggest_pipeline_enabled ApplicationSettings#suggest_pipeline_enabled}

---

##### `TerminalMaxSessionTime`<sup>Optional</sup> <a name="TerminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime"></a>

```go
TerminalMaxSessionTime *f64
```

- *Type:* *f64

Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#terminal_max_session_time ApplicationSettings#terminal_max_session_time}

---

##### `Terms`<sup>Optional</sup> <a name="Terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms"></a>

```go
Terms *string
```

- *Type:* *string

(Required by: enforce_terms) Markdown content for the ToS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#terms ApplicationSettings#terms}

---

##### `ThrottleAuthenticatedApiEnabled`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled"></a>

```go
ThrottleAuthenticatedApiEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_api_enabled ApplicationSettings#throttle_authenticated_api_enabled}

---

##### `ThrottleAuthenticatedApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```go
ThrottleAuthenticatedApiPeriodInSeconds *f64
```

- *Type:* *f64

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_api_period_in_seconds ApplicationSettings#throttle_authenticated_api_period_in_seconds}

---

##### `ThrottleAuthenticatedApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```go
ThrottleAuthenticatedApiRequestsPerPeriod *f64
```

- *Type:* *f64

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_api_requests_per_period ApplicationSettings#throttle_authenticated_api_requests_per_period}

---

##### `ThrottleAuthenticatedPackagesApiEnabled`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled"></a>

```go
ThrottleAuthenticatedPackagesApiEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_packages_api_enabled ApplicationSettings#throttle_authenticated_packages_api_enabled}

---

##### `ThrottleAuthenticatedPackagesApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```go
ThrottleAuthenticatedPackagesApiPeriodInSeconds *f64
```

- *Type:* *f64

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_packages_api_period_in_seconds ApplicationSettings#throttle_authenticated_packages_api_period_in_seconds}

---

##### `ThrottleAuthenticatedPackagesApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```go
ThrottleAuthenticatedPackagesApiRequestsPerPeriod *f64
```

- *Type:* *f64

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_packages_api_requests_per_period ApplicationSettings#throttle_authenticated_packages_api_requests_per_period}

---

##### `ThrottleAuthenticatedWebEnabled`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled"></a>

```go
ThrottleAuthenticatedWebEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_web_enabled ApplicationSettings#throttle_authenticated_web_enabled}

---

##### `ThrottleAuthenticatedWebPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```go
ThrottleAuthenticatedWebPeriodInSeconds *f64
```

- *Type:* *f64

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_web_period_in_seconds ApplicationSettings#throttle_authenticated_web_period_in_seconds}

---

##### `ThrottleAuthenticatedWebRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```go
ThrottleAuthenticatedWebRequestsPerPeriod *f64
```

- *Type:* *f64

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_authenticated_web_requests_per_period ApplicationSettings#throttle_authenticated_web_requests_per_period}

---

##### `ThrottleUnauthenticatedApiEnabled`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled"></a>

```go
ThrottleUnauthenticatedApiEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_api_enabled ApplicationSettings#throttle_unauthenticated_api_enabled}

---

##### `ThrottleUnauthenticatedApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```go
ThrottleUnauthenticatedApiPeriodInSeconds *f64
```

- *Type:* *f64

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_api_period_in_seconds}

---

##### `ThrottleUnauthenticatedApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```go
ThrottleUnauthenticatedApiRequestsPerPeriod *f64
```

- *Type:* *f64

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_api_requests_per_period ApplicationSettings#throttle_unauthenticated_api_requests_per_period}

---

##### `ThrottleUnauthenticatedPackagesApiEnabled`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```go
ThrottleUnauthenticatedPackagesApiEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_packages_api_enabled ApplicationSettings#throttle_unauthenticated_packages_api_enabled}

---

##### `ThrottleUnauthenticatedPackagesApiPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```go
ThrottleUnauthenticatedPackagesApiPeriodInSeconds *f64
```

- *Type:* *f64

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_packages_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_packages_api_period_in_seconds}

---

##### `ThrottleUnauthenticatedPackagesApiRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```go
ThrottleUnauthenticatedPackagesApiRequestsPerPeriod *f64
```

- *Type:* *f64

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_packages_api_requests_per_period ApplicationSettings#throttle_unauthenticated_packages_api_requests_per_period}

---

##### `ThrottleUnauthenticatedWebEnabled`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled"></a>

```go
ThrottleUnauthenticatedWebEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_web_enabled ApplicationSettings#throttle_unauthenticated_web_enabled}

---

##### `ThrottleUnauthenticatedWebPeriodInSeconds`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```go
ThrottleUnauthenticatedWebPeriodInSeconds *f64
```

- *Type:* *f64

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_web_period_in_seconds ApplicationSettings#throttle_unauthenticated_web_period_in_seconds}

---

##### `ThrottleUnauthenticatedWebRequestsPerPeriod`<sup>Optional</sup> <a name="ThrottleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```go
ThrottleUnauthenticatedWebRequestsPerPeriod *f64
```

- *Type:* *f64

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#throttle_unauthenticated_web_requests_per_period ApplicationSettings#throttle_unauthenticated_web_requests_per_period}

---

##### `TimeTrackingLimitToHours`<sup>Optional</sup> <a name="TimeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours"></a>

```go
TimeTrackingLimitToHours interface{}
```

- *Type:* interface{}

Limit display of time tracking units to hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#time_tracking_limit_to_hours ApplicationSettings#time_tracking_limit_to_hours}

---

##### `TwoFactorGracePeriod`<sup>Optional</sup> <a name="TwoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod"></a>

```go
TwoFactorGracePeriod *f64
```

- *Type:* *f64

Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#two_factor_grace_period ApplicationSettings#two_factor_grace_period}

---

##### `UnconfirmedUsersDeleteAfterDays`<sup>Optional</sup> <a name="UnconfirmedUsersDeleteAfterDays" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.unconfirmedUsersDeleteAfterDays"></a>

```go
UnconfirmedUsersDeleteAfterDays *f64
```

- *Type:* *f64

Specifies how many days after sign-up to delete users who have not confirmed their email.

Only applicable if delete_unconfirmed_users is set to true. Must be 1 or greater. Introduced in GitLab 16.1. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#unconfirmed_users_delete_after_days ApplicationSettings#unconfirmed_users_delete_after_days}

---

##### `UniqueIpsLimitEnabled`<sup>Optional</sup> <a name="UniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled"></a>

```go
UniqueIpsLimitEnabled interface{}
```

- *Type:* interface{}

(If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#unique_ips_limit_enabled ApplicationSettings#unique_ips_limit_enabled}

---

##### `UniqueIpsLimitPerUser`<sup>Optional</sup> <a name="UniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser"></a>

```go
UniqueIpsLimitPerUser *f64
```

- *Type:* *f64

Maximum number of IPs per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#unique_ips_limit_per_user ApplicationSettings#unique_ips_limit_per_user}

---

##### `UniqueIpsLimitTimeWindow`<sup>Optional</sup> <a name="UniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow"></a>

```go
UniqueIpsLimitTimeWindow *f64
```

- *Type:* *f64

How many seconds an IP is counted towards the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#unique_ips_limit_time_window ApplicationSettings#unique_ips_limit_time_window}

---

##### `UpdateRunnerVersionsEnabled`<sup>Optional</sup> <a name="UpdateRunnerVersionsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.updateRunnerVersionsEnabled"></a>

```go
UpdateRunnerVersionsEnabled interface{}
```

- *Type:* interface{}

Fetch GitLab Runner release version data from GitLab.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#update_runner_versions_enabled ApplicationSettings#update_runner_versions_enabled}

---

##### `UsagePingEnabled`<sup>Optional</sup> <a name="UsagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled"></a>

```go
UsagePingEnabled interface{}
```

- *Type:* interface{}

Every week GitLab reports license usage back to GitLab, Inc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#usage_ping_enabled ApplicationSettings#usage_ping_enabled}

---

##### `UseClickhouseForAnalytics`<sup>Optional</sup> <a name="UseClickhouseForAnalytics" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.useClickhouseForAnalytics"></a>

```go
UseClickhouseForAnalytics interface{}
```

- *Type:* interface{}

Enables ClickHouse as a data source for analytics reports.

ClickHouse must be configured for this setting to take effect. Available on Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#use_clickhouse_for_analytics ApplicationSettings#use_clickhouse_for_analytics}

---

##### `UserDeactivationEmailsEnabled`<sup>Optional</sup> <a name="UserDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled"></a>

```go
UserDeactivationEmailsEnabled interface{}
```

- *Type:* interface{}

Send an email to users upon account deactivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#user_deactivation_emails_enabled ApplicationSettings#user_deactivation_emails_enabled}

---

##### `UserDefaultExternal`<sup>Optional</sup> <a name="UserDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal"></a>

```go
UserDefaultExternal interface{}
```

- *Type:* interface{}

Newly registered users are external by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#user_default_external ApplicationSettings#user_default_external}

---

##### `UserDefaultInternalRegex`<sup>Optional</sup> <a name="UserDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex"></a>

```go
UserDefaultInternalRegex *string
```

- *Type:* *string

Specify an email address regex pattern to identify default internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#user_default_internal_regex ApplicationSettings#user_default_internal_regex}

---

##### `UserDefaultsToPrivateProfile`<sup>Optional</sup> <a name="UserDefaultsToPrivateProfile" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultsToPrivateProfile"></a>

```go
UserDefaultsToPrivateProfile interface{}
```

- *Type:* interface{}

Newly created users have private profile by default. Introduced in GitLab 15.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#user_defaults_to_private_profile ApplicationSettings#user_defaults_to_private_profile}

---

##### `UserOauthApplications`<sup>Optional</sup> <a name="UserOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications"></a>

```go
UserOauthApplications interface{}
```

- *Type:* interface{}

Allow users to register any application to use GitLab as an OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#user_oauth_applications ApplicationSettings#user_oauth_applications}

---

##### `UserShowAddSshKeyMessage`<sup>Optional</sup> <a name="UserShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage"></a>

```go
UserShowAddSshKeyMessage interface{}
```

- *Type:* interface{}

When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#user_show_add_ssh_key_message ApplicationSettings#user_show_add_ssh_key_message}

---

##### `ValidRunnerRegistrars`<sup>Optional</sup> <a name="ValidRunnerRegistrars" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.validRunnerRegistrars"></a>

```go
ValidRunnerRegistrars *[]*string
```

- *Type:* *[]*string

List of types which are allowed to register a GitLab Runner. Can be [], ['group'], ['project'] or ['group', 'project'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#valid_runner_registrars ApplicationSettings#valid_runner_registrars}

---

##### `VersionCheckEnabled`<sup>Optional</sup> <a name="VersionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled"></a>

```go
VersionCheckEnabled interface{}
```

- *Type:* interface{}

Let GitLab inform you when an update is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#version_check_enabled ApplicationSettings#version_check_enabled}

---

##### `WebIdeClientsidePreviewEnabled`<sup>Optional</sup> <a name="WebIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled"></a>

```go
WebIdeClientsidePreviewEnabled interface{}
```

- *Type:* interface{}

Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#web_ide_clientside_preview_enabled ApplicationSettings#web_ide_clientside_preview_enabled}

---

##### `WhatsNewVariant`<sup>Optional</sup> <a name="WhatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant"></a>

```go
WhatsNewVariant *string
```

- *Type:* *string

What's new variant, possible values: all_tiers, current_tier, and disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#whats_new_variant ApplicationSettings#whats_new_variant}

---

##### `WikiPageMaxContentBytes`<sup>Optional</sup> <a name="WikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes"></a>

```go
WikiPageMaxContentBytes *f64
```

- *Type:* *f64

Maximum wiki page content size in bytes. The minimum value is 1024 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#wiki_page_max_content_bytes ApplicationSettings#wiki_page_max_content_bytes}

---

### ApplicationSettingsDefaultBranchProtectionDefaults <a name="ApplicationSettingsDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

&applicationsettings.ApplicationSettingsDefaultBranchProtectionDefaults {
	AllowedToMerge: *[]*f64,
	AllowedToPush: *[]*f64,
	AllowForcePush: interface{},
	DeveloperCanInitialPush: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToMerge">AllowedToMerge</a></code> | <code>*[]*f64</code> | An array of access levels allowed to merge. Supports Developer (30) or Maintainer (40). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToPush">AllowedToPush</a></code> | <code>*[]*f64</code> | An array of access levels allowed to push. Supports Developer (30) or Maintainer (40). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowForcePush">AllowForcePush</a></code> | <code>interface{}</code> | Allow force push for all users with push access. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.developerCanInitialPush">DeveloperCanInitialPush</a></code> | <code>interface{}</code> | Allow developers to initial push. |

---

##### `AllowedToMerge`<sup>Optional</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToMerge"></a>

```go
AllowedToMerge *[]*f64
```

- *Type:* *[]*f64

An array of access levels allowed to merge. Supports Developer (30) or Maintainer (40).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allowed_to_merge ApplicationSettings#allowed_to_merge}

---

##### `AllowedToPush`<sup>Optional</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToPush"></a>

```go
AllowedToPush *[]*f64
```

- *Type:* *[]*f64

An array of access levels allowed to push. Supports Developer (30) or Maintainer (40).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allowed_to_push ApplicationSettings#allowed_to_push}

---

##### `AllowForcePush`<sup>Optional</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowForcePush"></a>

```go
AllowForcePush interface{}
```

- *Type:* interface{}

Allow force push for all users with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#allow_force_push ApplicationSettings#allow_force_push}

---

##### `DeveloperCanInitialPush`<sup>Optional</sup> <a name="DeveloperCanInitialPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.developerCanInitialPush"></a>

```go
DeveloperCanInitialPush interface{}
```

- *Type:* interface{}

Allow developers to initial push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/application_settings#developer_can_initial_push ApplicationSettings#developer_can_initial_push}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference <a name="ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/applicationsettings"

applicationsettings.NewApplicationSettingsDefaultBranchProtectionDefaultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge">ResetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush">ResetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush">ResetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush">ResetDeveloperCanInitialPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedToMerge` <a name="ResetAllowedToMerge" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge"></a>

```go
func ResetAllowedToMerge()
```

##### `ResetAllowedToPush` <a name="ResetAllowedToPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush"></a>

```go
func ResetAllowedToPush()
```

##### `ResetAllowForcePush` <a name="ResetAllowForcePush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush"></a>

```go
func ResetAllowForcePush()
```

##### `ResetDeveloperCanInitialPush` <a name="ResetDeveloperCanInitialPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush"></a>

```go
func ResetDeveloperCanInitialPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput">AllowedToMergeInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput">AllowedToPushInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput">AllowForcePushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput">DeveloperCanInitialPushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge">AllowedToMerge</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush">AllowedToPush</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush">AllowForcePush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush">DeveloperCanInitialPush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedToMergeInput`<sup>Optional</sup> <a name="AllowedToMergeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput"></a>

```go
func AllowedToMergeInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `AllowedToPushInput`<sup>Optional</sup> <a name="AllowedToPushInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput"></a>

```go
func AllowedToPushInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `AllowForcePushInput`<sup>Optional</sup> <a name="AllowForcePushInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput"></a>

```go
func AllowForcePushInput() interface{}
```

- *Type:* interface{}

---

##### `DeveloperCanInitialPushInput`<sup>Optional</sup> <a name="DeveloperCanInitialPushInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput"></a>

```go
func DeveloperCanInitialPushInput() interface{}
```

- *Type:* interface{}

---

##### `AllowedToMerge`<sup>Required</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge"></a>

```go
func AllowedToMerge() *[]*f64
```

- *Type:* *[]*f64

---

##### `AllowedToPush`<sup>Required</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush"></a>

```go
func AllowedToPush() *[]*f64
```

- *Type:* *[]*f64

---

##### `AllowForcePush`<sup>Required</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush"></a>

```go
func AllowForcePush() interface{}
```

- *Type:* interface{}

---

##### `DeveloperCanInitialPush`<sup>Required</sup> <a name="DeveloperCanInitialPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush"></a>

```go
func DeveloperCanInitialPush() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationSettingsDefaultBranchProtectionDefaults
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

---




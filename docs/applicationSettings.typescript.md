# `applicationSettings` Submodule <a name="`applicationSettings` Submodule" id="@cdktf/provider-gitlab.applicationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationSettings <a name="ApplicationSettings" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings gitlab_application_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

new applicationSettings.ApplicationSettings(scope: Construct, id: string, config?: ApplicationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig">ApplicationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.putDefaultBranchProtectionDefaults">putDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail">resetAbuseNotificationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode">resetAdminMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath">resetAfterSignOutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText">resetAfterSignUpText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey">resetAkismetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled">resetAkismetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowAccountDeletion">resetAllowAccountDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap">resetAllowGroupOwnersToManageLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks">resetAllowLocalRequestsFromSystemHooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices">resetAllowLocalRequestsFromWebHooksAndServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowProjectCreationForGuestAndBelow">resetAllowProjectCreationForGuestAndBelow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowRunnerRegistrationToken">resetAllowRunnerRegistrationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable">resetArchiveBuildsInHumanReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAsciidocMaxIncludes">resetAsciidocMaxIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist">resetAssetProxyAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled">resetAssetProxyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey">resetAssetProxySecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl">resetAssetProxyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled">resetAuthorizedKeysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoBanUserOnExcessiveProjectsDownload">resetAutoBanUserOnExcessiveProjectsDownload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain">resetAutoDevopsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled">resetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation">resetAutomaticPurchasedStorageAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportConcurrentPipelineBatchLimit">resetBulkImportConcurrentPipelineBatchLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportEnabled">resetBulkImportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportMaxDownloadFileSize">resetBulkImportMaxDownloadFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup">resetCanCreateGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan">resetCheckNamespacePlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxIncludes">resetCiMaxIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxTotalYamlSizeBytes">resetCiMaxTotalYamlSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname">resetCommitEmailHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketImportJobsLimit">resetConcurrentBitbucketImportJobsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketServerImportJobsLimit">resetConcurrentBitbucketServerImportJobsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentGithubImportJobsLimit">resetConcurrentGithubImportJobsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries">resetContainerExpirationPoliciesEnableHistoricEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize">resetContainerRegistryCleanupTagsServiceMaxListSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout">resetContainerRegistryDeleteTagsServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching">resetContainerRegistryExpirationPoliciesCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity">resetContainerRegistryExpirationPoliciesWorkerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay">resetContainerRegistryTokenExpireDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers">resetDeactivateDormantUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsersPeriod">resetDeactivateDormantUsersPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDecompressArchiveFileTimeout">resetDecompressArchiveFileTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn">resetDefaultArtifactsExpireIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName">resetDefaultBranchName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection">resetDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtectionDefaults">resetDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath">resetDefaultCiConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility">resetDefaultGroupVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultPreferredLanguage">resetDefaultPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation">resetDefaultProjectCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit">resetDefaultProjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility">resetDefaultProjectVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility">resetDefaultSnippetVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSyntaxHighlightingTheme">resetDefaultSyntaxHighlightingTheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects">resetDeleteInactiveProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteUnconfirmedUsers">resetDeleteUnconfirmedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod">resetDeletionAdjournedPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetEnabled">resetDiagramsnetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetUrl">resetDiagramsnetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles">resetDiffMaxFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines">resetDiffMaxLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes">resetDiffMaxPatchBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableAdminOauthScopes">resetDisableAdminOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources">resetDisabledOauthSignInSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken">resetDisableFeedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisablePersonalAccessTokens">resetDisablePersonalAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled">resetDnsRebindingProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist">resetDomainAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist">resetDomainDenylist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled">resetDomainDenylistEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDownstreamPipelineTriggerLimitPerProjectUserSha">resetDownstreamPipelineTriggerLimitPerProjectUserSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction">resetDsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDuoFeaturesEnabled">resetDuoFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaKeyRestriction">resetEcdsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaSkKeyRestriction">resetEcdsaSkKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519KeyRestriction">resetEd25519KeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519SkKeyRestriction">resetEd25519SkKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccessKeyId">resetEksAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccountId">resetEksAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksIntegrationEnabled">resetEksIntegrationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksSecretAccessKey">resetEksSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAws">resetElasticsearchAws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsAccessKey">resetElasticsearchAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsRegion">resetElasticsearchAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsSecretAccessKey">resetElasticsearchAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFieldLengthLimit">resetElasticsearchIndexedFieldLengthLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFileSizeLimitKb">resetElasticsearchIndexedFileSizeLimitKb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexing">resetElasticsearchIndexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchLimitIndexing">resetElasticsearchLimitIndexing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkConcurrency">resetElasticsearchMaxBulkConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkSizeMb">resetElasticsearchMaxBulkSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxCodeIndexingConcurrency">resetElasticsearchMaxCodeIndexingConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds">resetElasticsearchNamespaceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword">resetElasticsearchPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds">resetElasticsearchProjectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchRequeueWorkers">resetElasticsearchRequeueWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch">resetElasticsearchSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl">resetElasticsearchUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername">resetElasticsearchUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchWorkerNumberOfShards">resetElasticsearchWorkerNumberOfShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText">resetEmailAdditionalText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody">resetEmailAuthorInBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailConfirmationSetting">resetEmailConfirmationSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnableArtifactExternalRedirectWarningPage">resetEnableArtifactExternalRedirectWarningPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnabledGitAccessProtocol">resetEnabledGitAccessProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceNamespaceStorageLimit">resetEnforceNamespaceStorageLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceTerms">resetEnforceTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientCert">resetExternalAuthClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKey">resetExternalAuthClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKeyPass">resetExternalAuthClientKeyPass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceDefaultLabel">resetExternalAuthorizationServiceDefaultLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceEnabled">resetExternalAuthorizationServiceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceTimeout">resetExternalAuthorizationServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceUrl">resetExternalAuthorizationServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceTimeout">resetExternalPipelineValidationServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceToken">resetExternalPipelineValidationServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceUrl">resetExternalPipelineValidationServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFailedLoginAttemptsUnlockPeriodInMinutes">resetFailedLoginAttemptsUnlockPeriodInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId">resetFileTemplateProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek">resetFirstDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps">resetGeoNodeAllowedIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout">resetGeoStatusTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault">resetGitalyTimeoutDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast">resetGitalyTimeoutFast</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium">resetGitalyTimeoutMedium</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitlabShellOperationLimit">resetGitlabShellOperationLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodEnabled">resetGitpodEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodUrl">resetGitpodUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAlertlist">resetGitRateLimitUsersAlertlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist">resetGitRateLimitUsersAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry">resetGitTwoFactorSessionExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGloballyAllowedIps">resetGloballyAllowedIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaEnabled">resetGrafanaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaUrl">resetGrafanaUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGravatarEnabled">resetGravatarEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGroupOwnersCanManageDefaultBranchProtection">resetGroupOwnersCanManageDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHashedStorageEnabled">resetHashedStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageHideCommercialContent">resetHelpPageHideCommercialContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageSupportUrl">resetHelpPageSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageText">resetHelpPageText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpText">resetHelpText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHideThirdPartyOffers">resetHideThirdPartyOffers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHomePageUrl">resetHomePageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingEnabled">resetHousekeepingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingFullRepackPeriod">resetHousekeepingFullRepackPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingGcPeriod">resetHousekeepingGcPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingIncrementalRepackPeriod">resetHousekeepingIncrementalRepackPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingOptimizeRepositoryPeriod">resetHousekeepingOptimizeRepositoryPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHtmlEmailsEnabled">resetHtmlEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetImportSources">resetImportSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsDeleteAfterMonths">resetInactiveProjectsDeleteAfterMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsMinSizeMb">resetInactiveProjectsMinSizeMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsSendWarningEmailAfterMonths">resetInactiveProjectsSendWarningEmailAfterMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIncludeOptionalMetricsInServicePing">resetIncludeOptionalMetricsInServicePing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled">resetInProductMarketingEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled">resetInvisibleCaptchaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit">resetIssuesCreateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectApplicationKey">resetJiraConnectApplicationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectProxyUrl">resetJiraConnectProxyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectPublicKeyStorageEnabled">resetJiraConnectPublicKeyStorageEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact">resetKeepLatestArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion">resetLocalMarkdownVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLockDuoFeaturesEnabled">resetLockDuoFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled">resetMailgunEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey">resetMailgunSigningKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode">resetMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage">resetMaintenanceModeMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMavenPackageRequestsForwarding">resetMavenPackageRequestsForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize">resetMaxArtifactsSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize">resetMaxAttachmentSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxDecompressedArchiveSize">resetMaxDecompressedArchiveSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize">resetMaxExportSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportRemoteFileSize">resetMaxImportRemoteFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize">resetMaxImportSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxLoginAttempts">resetMaxLoginAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads">resetMaxNumberOfRepositoryDownloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod">resetMaxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize">resetMaxPagesSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime">resetMaxPersonalAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime">resetMaxSshKeyLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxTerraformStateSizeBytes">resetMaxTerraformStateSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold">resetMetricsMethodCallThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMinimumPasswordLength">resetMinimumPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable">resetMirrorAvailable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold">resetMirrorCapacityThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity">resetMirrorMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay">resetMirrorMaxDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding">resetNpmPackageRequestsForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNugetSkipMetadataUrlValidation">resetNugetSkipMetadataUrlValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist">resetOutboundLocalRequestsWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageMetadataPurlTypes">resetPackageMetadataPurlTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryAllowAnyoneToPullOption">resetPackageRegistryAllowAnyoneToPullOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryCleanupPoliciesWorkerCapacity">resetPackageRegistryCleanupPoliciesWorkerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPagesDomainVerificationEnabled">resetPagesDomainVerificationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForGit">resetPasswordAuthenticationEnabledForGit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForWeb">resetPasswordAuthenticationEnabledForWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordLowercaseRequired">resetPasswordLowercaseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordNumberRequired">resetPasswordNumberRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordSymbolRequired">resetPasswordSymbolRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordUppercaseRequired">resetPasswordUppercaseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPerformanceBarAllowedGroupPath">resetPerformanceBarAllowedGroupPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPersonalAccessTokenPrefix">resetPersonalAccessTokenPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPipelineLimitPerProjectUserSha">resetPipelineLimitPerProjectUserSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlEnabled">resetPlantumlEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlUrl">resetPlantumlUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPollingIntervalMultiplier">resetPollingIntervalMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectExportEnabled">resetProjectExportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectJobsApiRateLimit">resetProjectJobsApiRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectsApiRateLimitUnauthenticated">resetProjectsApiRateLimitUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPrometheusMetricsEnabled">resetPrometheusMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProtectedCiVariables">resetProtectedCiVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventActivitiesLimit">resetPushEventActivitiesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventHooksLimit">resetPushEventHooksLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPypiPackageRequestsForwarding">resetPypiPackageRequestsForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRateLimitingResponseText">resetRateLimitingResponseText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRawBlobRequestLimit">resetRawBlobRequestLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaEnabled">resetRecaptchaEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaPrivateKey">resetRecaptchaPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaSiteKey">resetRecaptchaSiteKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceiveMaxInputSize">resetReceiveMaxInputSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceptiveClusterAgentsEnabled">resetReceptiveClusterAgentsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRememberMeEnabled">resetRememberMeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled">resetRepositoryChecksEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit">resetRepositorySizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages">resetRepositoryStorages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted">resetRepositoryStoragesWeighted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup">resetRequireAdminApprovalAfterUserSignup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminTwoFactorAuthentication">resetRequireAdminTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequirePersonalAccessTokenExpiry">resetRequirePersonalAccessTokenExpiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication">resetRequireTwoFactorAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels">resetRestrictedVisibilityLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction">resetRsaKeyRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit">resetSearchRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated">resetSearchRateLimitUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityApprovalPoliciesLimit">resetSecurityApprovalPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityPolicyGlobalGroupApproversEnabled">resetSecurityPolicyGlobalGroupApproversEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityTxtContent">resetSecurityTxtContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail">resetSendUserConfirmationEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetServiceAccessTokensExpirationEnforced">resetServiceAccessTokensExpirationEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay">resetSessionExpireDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled">resetSharedRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes">resetSharedRunnersMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText">resetSharedRunnersText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes">resetSidekiqJobLimiterCompressionThresholdBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes">resetSidekiqJobLimiterLimitBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode">resetSidekiqJobLimiterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText">resetSignInText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled">resetSignupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentAdminExportsEnabled">resetSilentAdminExportsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentModeEnabled">resetSilentModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled">resetSlackAppEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId">resetSlackAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret">resetSlackAppSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret">resetSlackAppSigningSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken">resetSlackAppVerificationToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit">resetSnippetSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId">resetSnowplowAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname">resetSnowplowCollectorHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain">resetSnowplowCookieDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowDatabaseCollectorHostname">resetSnowplowDatabaseCollectorHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled">resetSnowplowEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled">resetSourcegraphEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly">resetSourcegraphPublicOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl">resetSourcegraphUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey">resetSpamCheckApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled">resetSpamCheckEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl">resetSpamCheckEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageAuthToken">resetStaticObjectsExternalStorageAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageUrl">resetStaticObjectsExternalStorageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSuggestPipelineEnabled">resetSuggestPipelineEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerminalMaxSessionTime">resetTerminalMaxSessionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerms">resetTerms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiEnabled">resetThrottleAuthenticatedApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiPeriodInSeconds">resetThrottleAuthenticatedApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiRequestsPerPeriod">resetThrottleAuthenticatedApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiEnabled">resetThrottleAuthenticatedPackagesApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiPeriodInSeconds">resetThrottleAuthenticatedPackagesApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiRequestsPerPeriod">resetThrottleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebEnabled">resetThrottleAuthenticatedWebEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebPeriodInSeconds">resetThrottleAuthenticatedWebPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebRequestsPerPeriod">resetThrottleAuthenticatedWebRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiEnabled">resetThrottleUnauthenticatedApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiPeriodInSeconds">resetThrottleUnauthenticatedApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiRequestsPerPeriod">resetThrottleUnauthenticatedApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiEnabled">resetThrottleUnauthenticatedPackagesApiEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiPeriodInSeconds">resetThrottleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod">resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebEnabled">resetThrottleUnauthenticatedWebEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebPeriodInSeconds">resetThrottleUnauthenticatedWebPeriodInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebRequestsPerPeriod">resetThrottleUnauthenticatedWebRequestsPerPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTimeTrackingLimitToHours">resetTimeTrackingLimitToHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTwoFactorGracePeriod">resetTwoFactorGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUnconfirmedUsersDeleteAfterDays">resetUnconfirmedUsersDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled">resetUniqueIpsLimitEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser">resetUniqueIpsLimitPerUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow">resetUniqueIpsLimitTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUpdateRunnerVersionsEnabled">resetUpdateRunnerVersionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled">resetUsagePingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUseClickhouseForAnalytics">resetUseClickhouseForAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled">resetUserDeactivationEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal">resetUserDefaultExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex">resetUserDefaultInternalRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultsToPrivateProfile">resetUserDefaultsToPrivateProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications">resetUserOauthApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage">resetUserShowAddSshKeyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetValidRunnerRegistrars">resetValidRunnerRegistrars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled">resetVersionCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled">resetWebIdeClientsidePreviewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant">resetWhatsNewVariant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes">resetWikiPageMaxContentBytes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultBranchProtectionDefaults` <a name="putDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.putDefaultBranchProtectionDefaults"></a>

```typescript
public putDefaultBranchProtectionDefaults(value: ApplicationSettingsDefaultBranchProtectionDefaults): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.putDefaultBranchProtectionDefaults.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

---

##### `resetAbuseNotificationEmail` <a name="resetAbuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAbuseNotificationEmail"></a>

```typescript
public resetAbuseNotificationEmail(): void
```

##### `resetAdminMode` <a name="resetAdminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAdminMode"></a>

```typescript
public resetAdminMode(): void
```

##### `resetAfterSignOutPath` <a name="resetAfterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignOutPath"></a>

```typescript
public resetAfterSignOutPath(): void
```

##### `resetAfterSignUpText` <a name="resetAfterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAfterSignUpText"></a>

```typescript
public resetAfterSignUpText(): void
```

##### `resetAkismetApiKey` <a name="resetAkismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetApiKey"></a>

```typescript
public resetAkismetApiKey(): void
```

##### `resetAkismetEnabled` <a name="resetAkismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAkismetEnabled"></a>

```typescript
public resetAkismetEnabled(): void
```

##### `resetAllowAccountDeletion` <a name="resetAllowAccountDeletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowAccountDeletion"></a>

```typescript
public resetAllowAccountDeletion(): void
```

##### `resetAllowGroupOwnersToManageLdap` <a name="resetAllowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowGroupOwnersToManageLdap"></a>

```typescript
public resetAllowGroupOwnersToManageLdap(): void
```

##### `resetAllowLocalRequestsFromSystemHooks` <a name="resetAllowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromSystemHooks"></a>

```typescript
public resetAllowLocalRequestsFromSystemHooks(): void
```

##### `resetAllowLocalRequestsFromWebHooksAndServices` <a name="resetAllowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowLocalRequestsFromWebHooksAndServices"></a>

```typescript
public resetAllowLocalRequestsFromWebHooksAndServices(): void
```

##### `resetAllowProjectCreationForGuestAndBelow` <a name="resetAllowProjectCreationForGuestAndBelow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowProjectCreationForGuestAndBelow"></a>

```typescript
public resetAllowProjectCreationForGuestAndBelow(): void
```

##### `resetAllowRunnerRegistrationToken` <a name="resetAllowRunnerRegistrationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAllowRunnerRegistrationToken"></a>

```typescript
public resetAllowRunnerRegistrationToken(): void
```

##### `resetArchiveBuildsInHumanReadable` <a name="resetArchiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetArchiveBuildsInHumanReadable"></a>

```typescript
public resetArchiveBuildsInHumanReadable(): void
```

##### `resetAsciidocMaxIncludes` <a name="resetAsciidocMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAsciidocMaxIncludes"></a>

```typescript
public resetAsciidocMaxIncludes(): void
```

##### `resetAssetProxyAllowlist` <a name="resetAssetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyAllowlist"></a>

```typescript
public resetAssetProxyAllowlist(): void
```

##### `resetAssetProxyEnabled` <a name="resetAssetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyEnabled"></a>

```typescript
public resetAssetProxyEnabled(): void
```

##### `resetAssetProxySecretKey` <a name="resetAssetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxySecretKey"></a>

```typescript
public resetAssetProxySecretKey(): void
```

##### `resetAssetProxyUrl` <a name="resetAssetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAssetProxyUrl"></a>

```typescript
public resetAssetProxyUrl(): void
```

##### `resetAuthorizedKeysEnabled` <a name="resetAuthorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAuthorizedKeysEnabled"></a>

```typescript
public resetAuthorizedKeysEnabled(): void
```

##### `resetAutoBanUserOnExcessiveProjectsDownload` <a name="resetAutoBanUserOnExcessiveProjectsDownload" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoBanUserOnExcessiveProjectsDownload"></a>

```typescript
public resetAutoBanUserOnExcessiveProjectsDownload(): void
```

##### `resetAutoDevopsDomain` <a name="resetAutoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsDomain"></a>

```typescript
public resetAutoDevopsDomain(): void
```

##### `resetAutoDevopsEnabled` <a name="resetAutoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutoDevopsEnabled"></a>

```typescript
public resetAutoDevopsEnabled(): void
```

##### `resetAutomaticPurchasedStorageAllocation` <a name="resetAutomaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetAutomaticPurchasedStorageAllocation"></a>

```typescript
public resetAutomaticPurchasedStorageAllocation(): void
```

##### `resetBulkImportConcurrentPipelineBatchLimit` <a name="resetBulkImportConcurrentPipelineBatchLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportConcurrentPipelineBatchLimit"></a>

```typescript
public resetBulkImportConcurrentPipelineBatchLimit(): void
```

##### `resetBulkImportEnabled` <a name="resetBulkImportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportEnabled"></a>

```typescript
public resetBulkImportEnabled(): void
```

##### `resetBulkImportMaxDownloadFileSize` <a name="resetBulkImportMaxDownloadFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetBulkImportMaxDownloadFileSize"></a>

```typescript
public resetBulkImportMaxDownloadFileSize(): void
```

##### `resetCanCreateGroup` <a name="resetCanCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCanCreateGroup"></a>

```typescript
public resetCanCreateGroup(): void
```

##### `resetCheckNamespacePlan` <a name="resetCheckNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCheckNamespacePlan"></a>

```typescript
public resetCheckNamespacePlan(): void
```

##### `resetCiMaxIncludes` <a name="resetCiMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxIncludes"></a>

```typescript
public resetCiMaxIncludes(): void
```

##### `resetCiMaxTotalYamlSizeBytes` <a name="resetCiMaxTotalYamlSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCiMaxTotalYamlSizeBytes"></a>

```typescript
public resetCiMaxTotalYamlSizeBytes(): void
```

##### `resetCommitEmailHostname` <a name="resetCommitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetCommitEmailHostname"></a>

```typescript
public resetCommitEmailHostname(): void
```

##### `resetConcurrentBitbucketImportJobsLimit` <a name="resetConcurrentBitbucketImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketImportJobsLimit"></a>

```typescript
public resetConcurrentBitbucketImportJobsLimit(): void
```

##### `resetConcurrentBitbucketServerImportJobsLimit` <a name="resetConcurrentBitbucketServerImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentBitbucketServerImportJobsLimit"></a>

```typescript
public resetConcurrentBitbucketServerImportJobsLimit(): void
```

##### `resetConcurrentGithubImportJobsLimit` <a name="resetConcurrentGithubImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetConcurrentGithubImportJobsLimit"></a>

```typescript
public resetConcurrentGithubImportJobsLimit(): void
```

##### `resetContainerExpirationPoliciesEnableHistoricEntries` <a name="resetContainerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerExpirationPoliciesEnableHistoricEntries"></a>

```typescript
public resetContainerExpirationPoliciesEnableHistoricEntries(): void
```

##### `resetContainerRegistryCleanupTagsServiceMaxListSize` <a name="resetContainerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryCleanupTagsServiceMaxListSize"></a>

```typescript
public resetContainerRegistryCleanupTagsServiceMaxListSize(): void
```

##### `resetContainerRegistryDeleteTagsServiceTimeout` <a name="resetContainerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryDeleteTagsServiceTimeout"></a>

```typescript
public resetContainerRegistryDeleteTagsServiceTimeout(): void
```

##### `resetContainerRegistryExpirationPoliciesCaching` <a name="resetContainerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesCaching"></a>

```typescript
public resetContainerRegistryExpirationPoliciesCaching(): void
```

##### `resetContainerRegistryExpirationPoliciesWorkerCapacity` <a name="resetContainerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryExpirationPoliciesWorkerCapacity"></a>

```typescript
public resetContainerRegistryExpirationPoliciesWorkerCapacity(): void
```

##### `resetContainerRegistryTokenExpireDelay` <a name="resetContainerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetContainerRegistryTokenExpireDelay"></a>

```typescript
public resetContainerRegistryTokenExpireDelay(): void
```

##### `resetDeactivateDormantUsers` <a name="resetDeactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsers"></a>

```typescript
public resetDeactivateDormantUsers(): void
```

##### `resetDeactivateDormantUsersPeriod` <a name="resetDeactivateDormantUsersPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeactivateDormantUsersPeriod"></a>

```typescript
public resetDeactivateDormantUsersPeriod(): void
```

##### `resetDecompressArchiveFileTimeout` <a name="resetDecompressArchiveFileTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDecompressArchiveFileTimeout"></a>

```typescript
public resetDecompressArchiveFileTimeout(): void
```

##### `resetDefaultArtifactsExpireIn` <a name="resetDefaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultArtifactsExpireIn"></a>

```typescript
public resetDefaultArtifactsExpireIn(): void
```

##### `resetDefaultBranchName` <a name="resetDefaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchName"></a>

```typescript
public resetDefaultBranchName(): void
```

##### `resetDefaultBranchProtection` <a name="resetDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtection"></a>

```typescript
public resetDefaultBranchProtection(): void
```

##### `resetDefaultBranchProtectionDefaults` <a name="resetDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultBranchProtectionDefaults"></a>

```typescript
public resetDefaultBranchProtectionDefaults(): void
```

##### `resetDefaultCiConfigPath` <a name="resetDefaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultCiConfigPath"></a>

```typescript
public resetDefaultCiConfigPath(): void
```

##### `resetDefaultGroupVisibility` <a name="resetDefaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultGroupVisibility"></a>

```typescript
public resetDefaultGroupVisibility(): void
```

##### `resetDefaultPreferredLanguage` <a name="resetDefaultPreferredLanguage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultPreferredLanguage"></a>

```typescript
public resetDefaultPreferredLanguage(): void
```

##### `resetDefaultProjectCreation` <a name="resetDefaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectCreation"></a>

```typescript
public resetDefaultProjectCreation(): void
```

##### `resetDefaultProjectsLimit` <a name="resetDefaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectsLimit"></a>

```typescript
public resetDefaultProjectsLimit(): void
```

##### `resetDefaultProjectVisibility` <a name="resetDefaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultProjectVisibility"></a>

```typescript
public resetDefaultProjectVisibility(): void
```

##### `resetDefaultSnippetVisibility` <a name="resetDefaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSnippetVisibility"></a>

```typescript
public resetDefaultSnippetVisibility(): void
```

##### `resetDefaultSyntaxHighlightingTheme` <a name="resetDefaultSyntaxHighlightingTheme" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDefaultSyntaxHighlightingTheme"></a>

```typescript
public resetDefaultSyntaxHighlightingTheme(): void
```

##### `resetDeleteInactiveProjects` <a name="resetDeleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteInactiveProjects"></a>

```typescript
public resetDeleteInactiveProjects(): void
```

##### `resetDeleteUnconfirmedUsers` <a name="resetDeleteUnconfirmedUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeleteUnconfirmedUsers"></a>

```typescript
public resetDeleteUnconfirmedUsers(): void
```

##### `resetDeletionAdjournedPeriod` <a name="resetDeletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDeletionAdjournedPeriod"></a>

```typescript
public resetDeletionAdjournedPeriod(): void
```

##### `resetDiagramsnetEnabled` <a name="resetDiagramsnetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetEnabled"></a>

```typescript
public resetDiagramsnetEnabled(): void
```

##### `resetDiagramsnetUrl` <a name="resetDiagramsnetUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiagramsnetUrl"></a>

```typescript
public resetDiagramsnetUrl(): void
```

##### `resetDiffMaxFiles` <a name="resetDiffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxFiles"></a>

```typescript
public resetDiffMaxFiles(): void
```

##### `resetDiffMaxLines` <a name="resetDiffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxLines"></a>

```typescript
public resetDiffMaxLines(): void
```

##### `resetDiffMaxPatchBytes` <a name="resetDiffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDiffMaxPatchBytes"></a>

```typescript
public resetDiffMaxPatchBytes(): void
```

##### `resetDisableAdminOauthScopes` <a name="resetDisableAdminOauthScopes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableAdminOauthScopes"></a>

```typescript
public resetDisableAdminOauthScopes(): void
```

##### `resetDisabledOauthSignInSources` <a name="resetDisabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisabledOauthSignInSources"></a>

```typescript
public resetDisabledOauthSignInSources(): void
```

##### `resetDisableFeedToken` <a name="resetDisableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisableFeedToken"></a>

```typescript
public resetDisableFeedToken(): void
```

##### `resetDisablePersonalAccessTokens` <a name="resetDisablePersonalAccessTokens" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDisablePersonalAccessTokens"></a>

```typescript
public resetDisablePersonalAccessTokens(): void
```

##### `resetDnsRebindingProtectionEnabled` <a name="resetDnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDnsRebindingProtectionEnabled"></a>

```typescript
public resetDnsRebindingProtectionEnabled(): void
```

##### `resetDomainAllowlist` <a name="resetDomainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainAllowlist"></a>

```typescript
public resetDomainAllowlist(): void
```

##### `resetDomainDenylist` <a name="resetDomainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylist"></a>

```typescript
public resetDomainDenylist(): void
```

##### `resetDomainDenylistEnabled` <a name="resetDomainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDomainDenylistEnabled"></a>

```typescript
public resetDomainDenylistEnabled(): void
```

##### `resetDownstreamPipelineTriggerLimitPerProjectUserSha` <a name="resetDownstreamPipelineTriggerLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDownstreamPipelineTriggerLimitPerProjectUserSha"></a>

```typescript
public resetDownstreamPipelineTriggerLimitPerProjectUserSha(): void
```

##### `resetDsaKeyRestriction` <a name="resetDsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDsaKeyRestriction"></a>

```typescript
public resetDsaKeyRestriction(): void
```

##### `resetDuoFeaturesEnabled` <a name="resetDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetDuoFeaturesEnabled"></a>

```typescript
public resetDuoFeaturesEnabled(): void
```

##### `resetEcdsaKeyRestriction` <a name="resetEcdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaKeyRestriction"></a>

```typescript
public resetEcdsaKeyRestriction(): void
```

##### `resetEcdsaSkKeyRestriction` <a name="resetEcdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEcdsaSkKeyRestriction"></a>

```typescript
public resetEcdsaSkKeyRestriction(): void
```

##### `resetEd25519KeyRestriction` <a name="resetEd25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519KeyRestriction"></a>

```typescript
public resetEd25519KeyRestriction(): void
```

##### `resetEd25519SkKeyRestriction` <a name="resetEd25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEd25519SkKeyRestriction"></a>

```typescript
public resetEd25519SkKeyRestriction(): void
```

##### `resetEksAccessKeyId` <a name="resetEksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccessKeyId"></a>

```typescript
public resetEksAccessKeyId(): void
```

##### `resetEksAccountId` <a name="resetEksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksAccountId"></a>

```typescript
public resetEksAccountId(): void
```

##### `resetEksIntegrationEnabled` <a name="resetEksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksIntegrationEnabled"></a>

```typescript
public resetEksIntegrationEnabled(): void
```

##### `resetEksSecretAccessKey` <a name="resetEksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEksSecretAccessKey"></a>

```typescript
public resetEksSecretAccessKey(): void
```

##### `resetElasticsearchAws` <a name="resetElasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAws"></a>

```typescript
public resetElasticsearchAws(): void
```

##### `resetElasticsearchAwsAccessKey` <a name="resetElasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsAccessKey"></a>

```typescript
public resetElasticsearchAwsAccessKey(): void
```

##### `resetElasticsearchAwsRegion` <a name="resetElasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsRegion"></a>

```typescript
public resetElasticsearchAwsRegion(): void
```

##### `resetElasticsearchAwsSecretAccessKey` <a name="resetElasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchAwsSecretAccessKey"></a>

```typescript
public resetElasticsearchAwsSecretAccessKey(): void
```

##### `resetElasticsearchIndexedFieldLengthLimit` <a name="resetElasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFieldLengthLimit"></a>

```typescript
public resetElasticsearchIndexedFieldLengthLimit(): void
```

##### `resetElasticsearchIndexedFileSizeLimitKb` <a name="resetElasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexedFileSizeLimitKb"></a>

```typescript
public resetElasticsearchIndexedFileSizeLimitKb(): void
```

##### `resetElasticsearchIndexing` <a name="resetElasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchIndexing"></a>

```typescript
public resetElasticsearchIndexing(): void
```

##### `resetElasticsearchLimitIndexing` <a name="resetElasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchLimitIndexing"></a>

```typescript
public resetElasticsearchLimitIndexing(): void
```

##### `resetElasticsearchMaxBulkConcurrency` <a name="resetElasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkConcurrency"></a>

```typescript
public resetElasticsearchMaxBulkConcurrency(): void
```

##### `resetElasticsearchMaxBulkSizeMb` <a name="resetElasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxBulkSizeMb"></a>

```typescript
public resetElasticsearchMaxBulkSizeMb(): void
```

##### `resetElasticsearchMaxCodeIndexingConcurrency` <a name="resetElasticsearchMaxCodeIndexingConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchMaxCodeIndexingConcurrency"></a>

```typescript
public resetElasticsearchMaxCodeIndexingConcurrency(): void
```

##### `resetElasticsearchNamespaceIds` <a name="resetElasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchNamespaceIds"></a>

```typescript
public resetElasticsearchNamespaceIds(): void
```

##### `resetElasticsearchPassword` <a name="resetElasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchPassword"></a>

```typescript
public resetElasticsearchPassword(): void
```

##### `resetElasticsearchProjectIds` <a name="resetElasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchProjectIds"></a>

```typescript
public resetElasticsearchProjectIds(): void
```

##### `resetElasticsearchRequeueWorkers` <a name="resetElasticsearchRequeueWorkers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchRequeueWorkers"></a>

```typescript
public resetElasticsearchRequeueWorkers(): void
```

##### `resetElasticsearchSearch` <a name="resetElasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchSearch"></a>

```typescript
public resetElasticsearchSearch(): void
```

##### `resetElasticsearchUrl` <a name="resetElasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUrl"></a>

```typescript
public resetElasticsearchUrl(): void
```

##### `resetElasticsearchUsername` <a name="resetElasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchUsername"></a>

```typescript
public resetElasticsearchUsername(): void
```

##### `resetElasticsearchWorkerNumberOfShards` <a name="resetElasticsearchWorkerNumberOfShards" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetElasticsearchWorkerNumberOfShards"></a>

```typescript
public resetElasticsearchWorkerNumberOfShards(): void
```

##### `resetEmailAdditionalText` <a name="resetEmailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAdditionalText"></a>

```typescript
public resetEmailAdditionalText(): void
```

##### `resetEmailAuthorInBody` <a name="resetEmailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailAuthorInBody"></a>

```typescript
public resetEmailAuthorInBody(): void
```

##### `resetEmailConfirmationSetting` <a name="resetEmailConfirmationSetting" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEmailConfirmationSetting"></a>

```typescript
public resetEmailConfirmationSetting(): void
```

##### `resetEnableArtifactExternalRedirectWarningPage` <a name="resetEnableArtifactExternalRedirectWarningPage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnableArtifactExternalRedirectWarningPage"></a>

```typescript
public resetEnableArtifactExternalRedirectWarningPage(): void
```

##### `resetEnabledGitAccessProtocol` <a name="resetEnabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnabledGitAccessProtocol"></a>

```typescript
public resetEnabledGitAccessProtocol(): void
```

##### `resetEnforceNamespaceStorageLimit` <a name="resetEnforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceNamespaceStorageLimit"></a>

```typescript
public resetEnforceNamespaceStorageLimit(): void
```

##### `resetEnforceTerms` <a name="resetEnforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetEnforceTerms"></a>

```typescript
public resetEnforceTerms(): void
```

##### `resetExternalAuthClientCert` <a name="resetExternalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientCert"></a>

```typescript
public resetExternalAuthClientCert(): void
```

##### `resetExternalAuthClientKey` <a name="resetExternalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKey"></a>

```typescript
public resetExternalAuthClientKey(): void
```

##### `resetExternalAuthClientKeyPass` <a name="resetExternalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthClientKeyPass"></a>

```typescript
public resetExternalAuthClientKeyPass(): void
```

##### `resetExternalAuthorizationServiceDefaultLabel` <a name="resetExternalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceDefaultLabel"></a>

```typescript
public resetExternalAuthorizationServiceDefaultLabel(): void
```

##### `resetExternalAuthorizationServiceEnabled` <a name="resetExternalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceEnabled"></a>

```typescript
public resetExternalAuthorizationServiceEnabled(): void
```

##### `resetExternalAuthorizationServiceTimeout` <a name="resetExternalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceTimeout"></a>

```typescript
public resetExternalAuthorizationServiceTimeout(): void
```

##### `resetExternalAuthorizationServiceUrl` <a name="resetExternalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalAuthorizationServiceUrl"></a>

```typescript
public resetExternalAuthorizationServiceUrl(): void
```

##### `resetExternalPipelineValidationServiceTimeout` <a name="resetExternalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceTimeout"></a>

```typescript
public resetExternalPipelineValidationServiceTimeout(): void
```

##### `resetExternalPipelineValidationServiceToken` <a name="resetExternalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceToken"></a>

```typescript
public resetExternalPipelineValidationServiceToken(): void
```

##### `resetExternalPipelineValidationServiceUrl` <a name="resetExternalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetExternalPipelineValidationServiceUrl"></a>

```typescript
public resetExternalPipelineValidationServiceUrl(): void
```

##### `resetFailedLoginAttemptsUnlockPeriodInMinutes` <a name="resetFailedLoginAttemptsUnlockPeriodInMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFailedLoginAttemptsUnlockPeriodInMinutes"></a>

```typescript
public resetFailedLoginAttemptsUnlockPeriodInMinutes(): void
```

##### `resetFileTemplateProjectId` <a name="resetFileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFileTemplateProjectId"></a>

```typescript
public resetFileTemplateProjectId(): void
```

##### `resetFirstDayOfWeek` <a name="resetFirstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetFirstDayOfWeek"></a>

```typescript
public resetFirstDayOfWeek(): void
```

##### `resetGeoNodeAllowedIps` <a name="resetGeoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoNodeAllowedIps"></a>

```typescript
public resetGeoNodeAllowedIps(): void
```

##### `resetGeoStatusTimeout` <a name="resetGeoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGeoStatusTimeout"></a>

```typescript
public resetGeoStatusTimeout(): void
```

##### `resetGitalyTimeoutDefault` <a name="resetGitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutDefault"></a>

```typescript
public resetGitalyTimeoutDefault(): void
```

##### `resetGitalyTimeoutFast` <a name="resetGitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutFast"></a>

```typescript
public resetGitalyTimeoutFast(): void
```

##### `resetGitalyTimeoutMedium` <a name="resetGitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitalyTimeoutMedium"></a>

```typescript
public resetGitalyTimeoutMedium(): void
```

##### `resetGitlabShellOperationLimit` <a name="resetGitlabShellOperationLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitlabShellOperationLimit"></a>

```typescript
public resetGitlabShellOperationLimit(): void
```

##### `resetGitpodEnabled` <a name="resetGitpodEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodEnabled"></a>

```typescript
public resetGitpodEnabled(): void
```

##### `resetGitpodUrl` <a name="resetGitpodUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitpodUrl"></a>

```typescript
public resetGitpodUrl(): void
```

##### `resetGitRateLimitUsersAlertlist` <a name="resetGitRateLimitUsersAlertlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAlertlist"></a>

```typescript
public resetGitRateLimitUsersAlertlist(): void
```

##### `resetGitRateLimitUsersAllowlist` <a name="resetGitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitRateLimitUsersAllowlist"></a>

```typescript
public resetGitRateLimitUsersAllowlist(): void
```

##### `resetGitTwoFactorSessionExpiry` <a name="resetGitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGitTwoFactorSessionExpiry"></a>

```typescript
public resetGitTwoFactorSessionExpiry(): void
```

##### `resetGloballyAllowedIps` <a name="resetGloballyAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGloballyAllowedIps"></a>

```typescript
public resetGloballyAllowedIps(): void
```

##### `resetGrafanaEnabled` <a name="resetGrafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaEnabled"></a>

```typescript
public resetGrafanaEnabled(): void
```

##### `resetGrafanaUrl` <a name="resetGrafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGrafanaUrl"></a>

```typescript
public resetGrafanaUrl(): void
```

##### `resetGravatarEnabled` <a name="resetGravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGravatarEnabled"></a>

```typescript
public resetGravatarEnabled(): void
```

##### `resetGroupOwnersCanManageDefaultBranchProtection` <a name="resetGroupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetGroupOwnersCanManageDefaultBranchProtection"></a>

```typescript
public resetGroupOwnersCanManageDefaultBranchProtection(): void
```

##### `resetHashedStorageEnabled` <a name="resetHashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHashedStorageEnabled"></a>

```typescript
public resetHashedStorageEnabled(): void
```

##### `resetHelpPageHideCommercialContent` <a name="resetHelpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageHideCommercialContent"></a>

```typescript
public resetHelpPageHideCommercialContent(): void
```

##### `resetHelpPageSupportUrl` <a name="resetHelpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageSupportUrl"></a>

```typescript
public resetHelpPageSupportUrl(): void
```

##### `resetHelpPageText` <a name="resetHelpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpPageText"></a>

```typescript
public resetHelpPageText(): void
```

##### `resetHelpText` <a name="resetHelpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHelpText"></a>

```typescript
public resetHelpText(): void
```

##### `resetHideThirdPartyOffers` <a name="resetHideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHideThirdPartyOffers"></a>

```typescript
public resetHideThirdPartyOffers(): void
```

##### `resetHomePageUrl` <a name="resetHomePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHomePageUrl"></a>

```typescript
public resetHomePageUrl(): void
```

##### `resetHousekeepingEnabled` <a name="resetHousekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingEnabled"></a>

```typescript
public resetHousekeepingEnabled(): void
```

##### `resetHousekeepingFullRepackPeriod` <a name="resetHousekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingFullRepackPeriod"></a>

```typescript
public resetHousekeepingFullRepackPeriod(): void
```

##### `resetHousekeepingGcPeriod` <a name="resetHousekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingGcPeriod"></a>

```typescript
public resetHousekeepingGcPeriod(): void
```

##### `resetHousekeepingIncrementalRepackPeriod` <a name="resetHousekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingIncrementalRepackPeriod"></a>

```typescript
public resetHousekeepingIncrementalRepackPeriod(): void
```

##### `resetHousekeepingOptimizeRepositoryPeriod` <a name="resetHousekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHousekeepingOptimizeRepositoryPeriod"></a>

```typescript
public resetHousekeepingOptimizeRepositoryPeriod(): void
```

##### `resetHtmlEmailsEnabled` <a name="resetHtmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetHtmlEmailsEnabled"></a>

```typescript
public resetHtmlEmailsEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportSources` <a name="resetImportSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetImportSources"></a>

```typescript
public resetImportSources(): void
```

##### `resetInactiveProjectsDeleteAfterMonths` <a name="resetInactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsDeleteAfterMonths"></a>

```typescript
public resetInactiveProjectsDeleteAfterMonths(): void
```

##### `resetInactiveProjectsMinSizeMb` <a name="resetInactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsMinSizeMb"></a>

```typescript
public resetInactiveProjectsMinSizeMb(): void
```

##### `resetInactiveProjectsSendWarningEmailAfterMonths` <a name="resetInactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInactiveProjectsSendWarningEmailAfterMonths"></a>

```typescript
public resetInactiveProjectsSendWarningEmailAfterMonths(): void
```

##### `resetIncludeOptionalMetricsInServicePing` <a name="resetIncludeOptionalMetricsInServicePing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIncludeOptionalMetricsInServicePing"></a>

```typescript
public resetIncludeOptionalMetricsInServicePing(): void
```

##### `resetInProductMarketingEmailsEnabled` <a name="resetInProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInProductMarketingEmailsEnabled"></a>

```typescript
public resetInProductMarketingEmailsEnabled(): void
```

##### `resetInvisibleCaptchaEnabled` <a name="resetInvisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetInvisibleCaptchaEnabled"></a>

```typescript
public resetInvisibleCaptchaEnabled(): void
```

##### `resetIssuesCreateLimit` <a name="resetIssuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetIssuesCreateLimit"></a>

```typescript
public resetIssuesCreateLimit(): void
```

##### `resetJiraConnectApplicationKey` <a name="resetJiraConnectApplicationKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectApplicationKey"></a>

```typescript
public resetJiraConnectApplicationKey(): void
```

##### `resetJiraConnectProxyUrl` <a name="resetJiraConnectProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectProxyUrl"></a>

```typescript
public resetJiraConnectProxyUrl(): void
```

##### `resetJiraConnectPublicKeyStorageEnabled` <a name="resetJiraConnectPublicKeyStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetJiraConnectPublicKeyStorageEnabled"></a>

```typescript
public resetJiraConnectPublicKeyStorageEnabled(): void
```

##### `resetKeepLatestArtifact` <a name="resetKeepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetKeepLatestArtifact"></a>

```typescript
public resetKeepLatestArtifact(): void
```

##### `resetLocalMarkdownVersion` <a name="resetLocalMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLocalMarkdownVersion"></a>

```typescript
public resetLocalMarkdownVersion(): void
```

##### `resetLockDuoFeaturesEnabled` <a name="resetLockDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetLockDuoFeaturesEnabled"></a>

```typescript
public resetLockDuoFeaturesEnabled(): void
```

##### `resetMailgunEventsEnabled` <a name="resetMailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunEventsEnabled"></a>

```typescript
public resetMailgunEventsEnabled(): void
```

##### `resetMailgunSigningKey` <a name="resetMailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMailgunSigningKey"></a>

```typescript
public resetMailgunSigningKey(): void
```

##### `resetMaintenanceMode` <a name="resetMaintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceMode"></a>

```typescript
public resetMaintenanceMode(): void
```

##### `resetMaintenanceModeMessage` <a name="resetMaintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaintenanceModeMessage"></a>

```typescript
public resetMaintenanceModeMessage(): void
```

##### `resetMavenPackageRequestsForwarding` <a name="resetMavenPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMavenPackageRequestsForwarding"></a>

```typescript
public resetMavenPackageRequestsForwarding(): void
```

##### `resetMaxArtifactsSize` <a name="resetMaxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxArtifactsSize"></a>

```typescript
public resetMaxArtifactsSize(): void
```

##### `resetMaxAttachmentSize` <a name="resetMaxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxAttachmentSize"></a>

```typescript
public resetMaxAttachmentSize(): void
```

##### `resetMaxDecompressedArchiveSize` <a name="resetMaxDecompressedArchiveSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxDecompressedArchiveSize"></a>

```typescript
public resetMaxDecompressedArchiveSize(): void
```

##### `resetMaxExportSize` <a name="resetMaxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxExportSize"></a>

```typescript
public resetMaxExportSize(): void
```

##### `resetMaxImportRemoteFileSize` <a name="resetMaxImportRemoteFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportRemoteFileSize"></a>

```typescript
public resetMaxImportRemoteFileSize(): void
```

##### `resetMaxImportSize` <a name="resetMaxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxImportSize"></a>

```typescript
public resetMaxImportSize(): void
```

##### `resetMaxLoginAttempts` <a name="resetMaxLoginAttempts" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxLoginAttempts"></a>

```typescript
public resetMaxLoginAttempts(): void
```

##### `resetMaxNumberOfRepositoryDownloads` <a name="resetMaxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloads"></a>

```typescript
public resetMaxNumberOfRepositoryDownloads(): void
```

##### `resetMaxNumberOfRepositoryDownloadsWithinTimePeriod` <a name="resetMaxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```typescript
public resetMaxNumberOfRepositoryDownloadsWithinTimePeriod(): void
```

##### `resetMaxPagesSize` <a name="resetMaxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPagesSize"></a>

```typescript
public resetMaxPagesSize(): void
```

##### `resetMaxPersonalAccessTokenLifetime` <a name="resetMaxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxPersonalAccessTokenLifetime"></a>

```typescript
public resetMaxPersonalAccessTokenLifetime(): void
```

##### `resetMaxSshKeyLifetime` <a name="resetMaxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxSshKeyLifetime"></a>

```typescript
public resetMaxSshKeyLifetime(): void
```

##### `resetMaxTerraformStateSizeBytes` <a name="resetMaxTerraformStateSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMaxTerraformStateSizeBytes"></a>

```typescript
public resetMaxTerraformStateSizeBytes(): void
```

##### `resetMetricsMethodCallThreshold` <a name="resetMetricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMetricsMethodCallThreshold"></a>

```typescript
public resetMetricsMethodCallThreshold(): void
```

##### `resetMinimumPasswordLength` <a name="resetMinimumPasswordLength" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMinimumPasswordLength"></a>

```typescript
public resetMinimumPasswordLength(): void
```

##### `resetMirrorAvailable` <a name="resetMirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorAvailable"></a>

```typescript
public resetMirrorAvailable(): void
```

##### `resetMirrorCapacityThreshold` <a name="resetMirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorCapacityThreshold"></a>

```typescript
public resetMirrorCapacityThreshold(): void
```

##### `resetMirrorMaxCapacity` <a name="resetMirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxCapacity"></a>

```typescript
public resetMirrorMaxCapacity(): void
```

##### `resetMirrorMaxDelay` <a name="resetMirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetMirrorMaxDelay"></a>

```typescript
public resetMirrorMaxDelay(): void
```

##### `resetNpmPackageRequestsForwarding` <a name="resetNpmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNpmPackageRequestsForwarding"></a>

```typescript
public resetNpmPackageRequestsForwarding(): void
```

##### `resetNugetSkipMetadataUrlValidation` <a name="resetNugetSkipMetadataUrlValidation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetNugetSkipMetadataUrlValidation"></a>

```typescript
public resetNugetSkipMetadataUrlValidation(): void
```

##### `resetOutboundLocalRequestsWhitelist` <a name="resetOutboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetOutboundLocalRequestsWhitelist"></a>

```typescript
public resetOutboundLocalRequestsWhitelist(): void
```

##### `resetPackageMetadataPurlTypes` <a name="resetPackageMetadataPurlTypes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageMetadataPurlTypes"></a>

```typescript
public resetPackageMetadataPurlTypes(): void
```

##### `resetPackageRegistryAllowAnyoneToPullOption` <a name="resetPackageRegistryAllowAnyoneToPullOption" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryAllowAnyoneToPullOption"></a>

```typescript
public resetPackageRegistryAllowAnyoneToPullOption(): void
```

##### `resetPackageRegistryCleanupPoliciesWorkerCapacity` <a name="resetPackageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPackageRegistryCleanupPoliciesWorkerCapacity"></a>

```typescript
public resetPackageRegistryCleanupPoliciesWorkerCapacity(): void
```

##### `resetPagesDomainVerificationEnabled` <a name="resetPagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPagesDomainVerificationEnabled"></a>

```typescript
public resetPagesDomainVerificationEnabled(): void
```

##### `resetPasswordAuthenticationEnabledForGit` <a name="resetPasswordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForGit"></a>

```typescript
public resetPasswordAuthenticationEnabledForGit(): void
```

##### `resetPasswordAuthenticationEnabledForWeb` <a name="resetPasswordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordAuthenticationEnabledForWeb"></a>

```typescript
public resetPasswordAuthenticationEnabledForWeb(): void
```

##### `resetPasswordLowercaseRequired` <a name="resetPasswordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordLowercaseRequired"></a>

```typescript
public resetPasswordLowercaseRequired(): void
```

##### `resetPasswordNumberRequired` <a name="resetPasswordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordNumberRequired"></a>

```typescript
public resetPasswordNumberRequired(): void
```

##### `resetPasswordSymbolRequired` <a name="resetPasswordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordSymbolRequired"></a>

```typescript
public resetPasswordSymbolRequired(): void
```

##### `resetPasswordUppercaseRequired` <a name="resetPasswordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPasswordUppercaseRequired"></a>

```typescript
public resetPasswordUppercaseRequired(): void
```

##### `resetPerformanceBarAllowedGroupPath` <a name="resetPerformanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPerformanceBarAllowedGroupPath"></a>

```typescript
public resetPerformanceBarAllowedGroupPath(): void
```

##### `resetPersonalAccessTokenPrefix` <a name="resetPersonalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPersonalAccessTokenPrefix"></a>

```typescript
public resetPersonalAccessTokenPrefix(): void
```

##### `resetPipelineLimitPerProjectUserSha` <a name="resetPipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPipelineLimitPerProjectUserSha"></a>

```typescript
public resetPipelineLimitPerProjectUserSha(): void
```

##### `resetPlantumlEnabled` <a name="resetPlantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlEnabled"></a>

```typescript
public resetPlantumlEnabled(): void
```

##### `resetPlantumlUrl` <a name="resetPlantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPlantumlUrl"></a>

```typescript
public resetPlantumlUrl(): void
```

##### `resetPollingIntervalMultiplier` <a name="resetPollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPollingIntervalMultiplier"></a>

```typescript
public resetPollingIntervalMultiplier(): void
```

##### `resetProjectExportEnabled` <a name="resetProjectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectExportEnabled"></a>

```typescript
public resetProjectExportEnabled(): void
```

##### `resetProjectJobsApiRateLimit` <a name="resetProjectJobsApiRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectJobsApiRateLimit"></a>

```typescript
public resetProjectJobsApiRateLimit(): void
```

##### `resetProjectsApiRateLimitUnauthenticated` <a name="resetProjectsApiRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProjectsApiRateLimitUnauthenticated"></a>

```typescript
public resetProjectsApiRateLimitUnauthenticated(): void
```

##### `resetPrometheusMetricsEnabled` <a name="resetPrometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPrometheusMetricsEnabled"></a>

```typescript
public resetPrometheusMetricsEnabled(): void
```

##### `resetProtectedCiVariables` <a name="resetProtectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetProtectedCiVariables"></a>

```typescript
public resetProtectedCiVariables(): void
```

##### `resetPushEventActivitiesLimit` <a name="resetPushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventActivitiesLimit"></a>

```typescript
public resetPushEventActivitiesLimit(): void
```

##### `resetPushEventHooksLimit` <a name="resetPushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPushEventHooksLimit"></a>

```typescript
public resetPushEventHooksLimit(): void
```

##### `resetPypiPackageRequestsForwarding` <a name="resetPypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetPypiPackageRequestsForwarding"></a>

```typescript
public resetPypiPackageRequestsForwarding(): void
```

##### `resetRateLimitingResponseText` <a name="resetRateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRateLimitingResponseText"></a>

```typescript
public resetRateLimitingResponseText(): void
```

##### `resetRawBlobRequestLimit` <a name="resetRawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRawBlobRequestLimit"></a>

```typescript
public resetRawBlobRequestLimit(): void
```

##### `resetRecaptchaEnabled` <a name="resetRecaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaEnabled"></a>

```typescript
public resetRecaptchaEnabled(): void
```

##### `resetRecaptchaPrivateKey` <a name="resetRecaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaPrivateKey"></a>

```typescript
public resetRecaptchaPrivateKey(): void
```

##### `resetRecaptchaSiteKey` <a name="resetRecaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRecaptchaSiteKey"></a>

```typescript
public resetRecaptchaSiteKey(): void
```

##### `resetReceiveMaxInputSize` <a name="resetReceiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceiveMaxInputSize"></a>

```typescript
public resetReceiveMaxInputSize(): void
```

##### `resetReceptiveClusterAgentsEnabled` <a name="resetReceptiveClusterAgentsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetReceptiveClusterAgentsEnabled"></a>

```typescript
public resetReceptiveClusterAgentsEnabled(): void
```

##### `resetRememberMeEnabled` <a name="resetRememberMeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRememberMeEnabled"></a>

```typescript
public resetRememberMeEnabled(): void
```

##### `resetRepositoryChecksEnabled` <a name="resetRepositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryChecksEnabled"></a>

```typescript
public resetRepositoryChecksEnabled(): void
```

##### `resetRepositorySizeLimit` <a name="resetRepositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositorySizeLimit"></a>

```typescript
public resetRepositorySizeLimit(): void
```

##### `resetRepositoryStorages` <a name="resetRepositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStorages"></a>

```typescript
public resetRepositoryStorages(): void
```

##### `resetRepositoryStoragesWeighted` <a name="resetRepositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRepositoryStoragesWeighted"></a>

```typescript
public resetRepositoryStoragesWeighted(): void
```

##### `resetRequireAdminApprovalAfterUserSignup` <a name="resetRequireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminApprovalAfterUserSignup"></a>

```typescript
public resetRequireAdminApprovalAfterUserSignup(): void
```

##### `resetRequireAdminTwoFactorAuthentication` <a name="resetRequireAdminTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireAdminTwoFactorAuthentication"></a>

```typescript
public resetRequireAdminTwoFactorAuthentication(): void
```

##### `resetRequirePersonalAccessTokenExpiry` <a name="resetRequirePersonalAccessTokenExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequirePersonalAccessTokenExpiry"></a>

```typescript
public resetRequirePersonalAccessTokenExpiry(): void
```

##### `resetRequireTwoFactorAuthentication` <a name="resetRequireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRequireTwoFactorAuthentication"></a>

```typescript
public resetRequireTwoFactorAuthentication(): void
```

##### `resetRestrictedVisibilityLevels` <a name="resetRestrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRestrictedVisibilityLevels"></a>

```typescript
public resetRestrictedVisibilityLevels(): void
```

##### `resetRsaKeyRestriction` <a name="resetRsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetRsaKeyRestriction"></a>

```typescript
public resetRsaKeyRestriction(): void
```

##### `resetSearchRateLimit` <a name="resetSearchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimit"></a>

```typescript
public resetSearchRateLimit(): void
```

##### `resetSearchRateLimitUnauthenticated` <a name="resetSearchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSearchRateLimitUnauthenticated"></a>

```typescript
public resetSearchRateLimitUnauthenticated(): void
```

##### `resetSecurityApprovalPoliciesLimit` <a name="resetSecurityApprovalPoliciesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityApprovalPoliciesLimit"></a>

```typescript
public resetSecurityApprovalPoliciesLimit(): void
```

##### `resetSecurityPolicyGlobalGroupApproversEnabled` <a name="resetSecurityPolicyGlobalGroupApproversEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityPolicyGlobalGroupApproversEnabled"></a>

```typescript
public resetSecurityPolicyGlobalGroupApproversEnabled(): void
```

##### `resetSecurityTxtContent` <a name="resetSecurityTxtContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSecurityTxtContent"></a>

```typescript
public resetSecurityTxtContent(): void
```

##### `resetSendUserConfirmationEmail` <a name="resetSendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSendUserConfirmationEmail"></a>

```typescript
public resetSendUserConfirmationEmail(): void
```

##### `resetServiceAccessTokensExpirationEnforced` <a name="resetServiceAccessTokensExpirationEnforced" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetServiceAccessTokensExpirationEnforced"></a>

```typescript
public resetServiceAccessTokensExpirationEnforced(): void
```

##### `resetSessionExpireDelay` <a name="resetSessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSessionExpireDelay"></a>

```typescript
public resetSessionExpireDelay(): void
```

##### `resetSharedRunnersEnabled` <a name="resetSharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersEnabled"></a>

```typescript
public resetSharedRunnersEnabled(): void
```

##### `resetSharedRunnersMinutes` <a name="resetSharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersMinutes"></a>

```typescript
public resetSharedRunnersMinutes(): void
```

##### `resetSharedRunnersText` <a name="resetSharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSharedRunnersText"></a>

```typescript
public resetSharedRunnersText(): void
```

##### `resetSidekiqJobLimiterCompressionThresholdBytes` <a name="resetSidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterCompressionThresholdBytes"></a>

```typescript
public resetSidekiqJobLimiterCompressionThresholdBytes(): void
```

##### `resetSidekiqJobLimiterLimitBytes` <a name="resetSidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterLimitBytes"></a>

```typescript
public resetSidekiqJobLimiterLimitBytes(): void
```

##### `resetSidekiqJobLimiterMode` <a name="resetSidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSidekiqJobLimiterMode"></a>

```typescript
public resetSidekiqJobLimiterMode(): void
```

##### `resetSignInText` <a name="resetSignInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignInText"></a>

```typescript
public resetSignInText(): void
```

##### `resetSignupEnabled` <a name="resetSignupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSignupEnabled"></a>

```typescript
public resetSignupEnabled(): void
```

##### `resetSilentAdminExportsEnabled` <a name="resetSilentAdminExportsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentAdminExportsEnabled"></a>

```typescript
public resetSilentAdminExportsEnabled(): void
```

##### `resetSilentModeEnabled` <a name="resetSilentModeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSilentModeEnabled"></a>

```typescript
public resetSilentModeEnabled(): void
```

##### `resetSlackAppEnabled` <a name="resetSlackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppEnabled"></a>

```typescript
public resetSlackAppEnabled(): void
```

##### `resetSlackAppId` <a name="resetSlackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppId"></a>

```typescript
public resetSlackAppId(): void
```

##### `resetSlackAppSecret` <a name="resetSlackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSecret"></a>

```typescript
public resetSlackAppSecret(): void
```

##### `resetSlackAppSigningSecret` <a name="resetSlackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppSigningSecret"></a>

```typescript
public resetSlackAppSigningSecret(): void
```

##### `resetSlackAppVerificationToken` <a name="resetSlackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSlackAppVerificationToken"></a>

```typescript
public resetSlackAppVerificationToken(): void
```

##### `resetSnippetSizeLimit` <a name="resetSnippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnippetSizeLimit"></a>

```typescript
public resetSnippetSizeLimit(): void
```

##### `resetSnowplowAppId` <a name="resetSnowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowAppId"></a>

```typescript
public resetSnowplowAppId(): void
```

##### `resetSnowplowCollectorHostname` <a name="resetSnowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCollectorHostname"></a>

```typescript
public resetSnowplowCollectorHostname(): void
```

##### `resetSnowplowCookieDomain` <a name="resetSnowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowCookieDomain"></a>

```typescript
public resetSnowplowCookieDomain(): void
```

##### `resetSnowplowDatabaseCollectorHostname` <a name="resetSnowplowDatabaseCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowDatabaseCollectorHostname"></a>

```typescript
public resetSnowplowDatabaseCollectorHostname(): void
```

##### `resetSnowplowEnabled` <a name="resetSnowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSnowplowEnabled"></a>

```typescript
public resetSnowplowEnabled(): void
```

##### `resetSourcegraphEnabled` <a name="resetSourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphEnabled"></a>

```typescript
public resetSourcegraphEnabled(): void
```

##### `resetSourcegraphPublicOnly` <a name="resetSourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphPublicOnly"></a>

```typescript
public resetSourcegraphPublicOnly(): void
```

##### `resetSourcegraphUrl` <a name="resetSourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSourcegraphUrl"></a>

```typescript
public resetSourcegraphUrl(): void
```

##### `resetSpamCheckApiKey` <a name="resetSpamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckApiKey"></a>

```typescript
public resetSpamCheckApiKey(): void
```

##### `resetSpamCheckEndpointEnabled` <a name="resetSpamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointEnabled"></a>

```typescript
public resetSpamCheckEndpointEnabled(): void
```

##### `resetSpamCheckEndpointUrl` <a name="resetSpamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSpamCheckEndpointUrl"></a>

```typescript
public resetSpamCheckEndpointUrl(): void
```

##### `resetStaticObjectsExternalStorageAuthToken` <a name="resetStaticObjectsExternalStorageAuthToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageAuthToken"></a>

```typescript
public resetStaticObjectsExternalStorageAuthToken(): void
```

##### `resetStaticObjectsExternalStorageUrl` <a name="resetStaticObjectsExternalStorageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetStaticObjectsExternalStorageUrl"></a>

```typescript
public resetStaticObjectsExternalStorageUrl(): void
```

##### `resetSuggestPipelineEnabled` <a name="resetSuggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetSuggestPipelineEnabled"></a>

```typescript
public resetSuggestPipelineEnabled(): void
```

##### `resetTerminalMaxSessionTime` <a name="resetTerminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerminalMaxSessionTime"></a>

```typescript
public resetTerminalMaxSessionTime(): void
```

##### `resetTerms` <a name="resetTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTerms"></a>

```typescript
public resetTerms(): void
```

##### `resetThrottleAuthenticatedApiEnabled` <a name="resetThrottleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiEnabled"></a>

```typescript
public resetThrottleAuthenticatedApiEnabled(): void
```

##### `resetThrottleAuthenticatedApiPeriodInSeconds` <a name="resetThrottleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiPeriodInSeconds"></a>

```typescript
public resetThrottleAuthenticatedApiPeriodInSeconds(): void
```

##### `resetThrottleAuthenticatedApiRequestsPerPeriod` <a name="resetThrottleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedApiRequestsPerPeriod"></a>

```typescript
public resetThrottleAuthenticatedApiRequestsPerPeriod(): void
```

##### `resetThrottleAuthenticatedPackagesApiEnabled` <a name="resetThrottleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiEnabled"></a>

```typescript
public resetThrottleAuthenticatedPackagesApiEnabled(): void
```

##### `resetThrottleAuthenticatedPackagesApiPeriodInSeconds` <a name="resetThrottleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiPeriodInSeconds"></a>

```typescript
public resetThrottleAuthenticatedPackagesApiPeriodInSeconds(): void
```

##### `resetThrottleAuthenticatedPackagesApiRequestsPerPeriod` <a name="resetThrottleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```typescript
public resetThrottleAuthenticatedPackagesApiRequestsPerPeriod(): void
```

##### `resetThrottleAuthenticatedWebEnabled` <a name="resetThrottleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebEnabled"></a>

```typescript
public resetThrottleAuthenticatedWebEnabled(): void
```

##### `resetThrottleAuthenticatedWebPeriodInSeconds` <a name="resetThrottleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebPeriodInSeconds"></a>

```typescript
public resetThrottleAuthenticatedWebPeriodInSeconds(): void
```

##### `resetThrottleAuthenticatedWebRequestsPerPeriod` <a name="resetThrottleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleAuthenticatedWebRequestsPerPeriod"></a>

```typescript
public resetThrottleAuthenticatedWebRequestsPerPeriod(): void
```

##### `resetThrottleUnauthenticatedApiEnabled` <a name="resetThrottleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiEnabled"></a>

```typescript
public resetThrottleUnauthenticatedApiEnabled(): void
```

##### `resetThrottleUnauthenticatedApiPeriodInSeconds` <a name="resetThrottleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiPeriodInSeconds"></a>

```typescript
public resetThrottleUnauthenticatedApiPeriodInSeconds(): void
```

##### `resetThrottleUnauthenticatedApiRequestsPerPeriod` <a name="resetThrottleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedApiRequestsPerPeriod"></a>

```typescript
public resetThrottleUnauthenticatedApiRequestsPerPeriod(): void
```

##### `resetThrottleUnauthenticatedPackagesApiEnabled` <a name="resetThrottleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiEnabled"></a>

```typescript
public resetThrottleUnauthenticatedPackagesApiEnabled(): void
```

##### `resetThrottleUnauthenticatedPackagesApiPeriodInSeconds` <a name="resetThrottleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```typescript
public resetThrottleUnauthenticatedPackagesApiPeriodInSeconds(): void
```

##### `resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod` <a name="resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```typescript
public resetThrottleUnauthenticatedPackagesApiRequestsPerPeriod(): void
```

##### `resetThrottleUnauthenticatedWebEnabled` <a name="resetThrottleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebEnabled"></a>

```typescript
public resetThrottleUnauthenticatedWebEnabled(): void
```

##### `resetThrottleUnauthenticatedWebPeriodInSeconds` <a name="resetThrottleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebPeriodInSeconds"></a>

```typescript
public resetThrottleUnauthenticatedWebPeriodInSeconds(): void
```

##### `resetThrottleUnauthenticatedWebRequestsPerPeriod` <a name="resetThrottleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetThrottleUnauthenticatedWebRequestsPerPeriod"></a>

```typescript
public resetThrottleUnauthenticatedWebRequestsPerPeriod(): void
```

##### `resetTimeTrackingLimitToHours` <a name="resetTimeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTimeTrackingLimitToHours"></a>

```typescript
public resetTimeTrackingLimitToHours(): void
```

##### `resetTwoFactorGracePeriod` <a name="resetTwoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetTwoFactorGracePeriod"></a>

```typescript
public resetTwoFactorGracePeriod(): void
```

##### `resetUnconfirmedUsersDeleteAfterDays` <a name="resetUnconfirmedUsersDeleteAfterDays" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUnconfirmedUsersDeleteAfterDays"></a>

```typescript
public resetUnconfirmedUsersDeleteAfterDays(): void
```

##### `resetUniqueIpsLimitEnabled` <a name="resetUniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitEnabled"></a>

```typescript
public resetUniqueIpsLimitEnabled(): void
```

##### `resetUniqueIpsLimitPerUser` <a name="resetUniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitPerUser"></a>

```typescript
public resetUniqueIpsLimitPerUser(): void
```

##### `resetUniqueIpsLimitTimeWindow` <a name="resetUniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUniqueIpsLimitTimeWindow"></a>

```typescript
public resetUniqueIpsLimitTimeWindow(): void
```

##### `resetUpdateRunnerVersionsEnabled` <a name="resetUpdateRunnerVersionsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUpdateRunnerVersionsEnabled"></a>

```typescript
public resetUpdateRunnerVersionsEnabled(): void
```

##### `resetUsagePingEnabled` <a name="resetUsagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUsagePingEnabled"></a>

```typescript
public resetUsagePingEnabled(): void
```

##### `resetUseClickhouseForAnalytics` <a name="resetUseClickhouseForAnalytics" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUseClickhouseForAnalytics"></a>

```typescript
public resetUseClickhouseForAnalytics(): void
```

##### `resetUserDeactivationEmailsEnabled` <a name="resetUserDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDeactivationEmailsEnabled"></a>

```typescript
public resetUserDeactivationEmailsEnabled(): void
```

##### `resetUserDefaultExternal` <a name="resetUserDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultExternal"></a>

```typescript
public resetUserDefaultExternal(): void
```

##### `resetUserDefaultInternalRegex` <a name="resetUserDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultInternalRegex"></a>

```typescript
public resetUserDefaultInternalRegex(): void
```

##### `resetUserDefaultsToPrivateProfile` <a name="resetUserDefaultsToPrivateProfile" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserDefaultsToPrivateProfile"></a>

```typescript
public resetUserDefaultsToPrivateProfile(): void
```

##### `resetUserOauthApplications` <a name="resetUserOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserOauthApplications"></a>

```typescript
public resetUserOauthApplications(): void
```

##### `resetUserShowAddSshKeyMessage` <a name="resetUserShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetUserShowAddSshKeyMessage"></a>

```typescript
public resetUserShowAddSshKeyMessage(): void
```

##### `resetValidRunnerRegistrars` <a name="resetValidRunnerRegistrars" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetValidRunnerRegistrars"></a>

```typescript
public resetValidRunnerRegistrars(): void
```

##### `resetVersionCheckEnabled` <a name="resetVersionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetVersionCheckEnabled"></a>

```typescript
public resetVersionCheckEnabled(): void
```

##### `resetWebIdeClientsidePreviewEnabled` <a name="resetWebIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWebIdeClientsidePreviewEnabled"></a>

```typescript
public resetWebIdeClientsidePreviewEnabled(): void
```

##### `resetWhatsNewVariant` <a name="resetWhatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWhatsNewVariant"></a>

```typescript
public resetWhatsNewVariant(): void
```

##### `resetWikiPageMaxContentBytes` <a name="resetWikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.resetWikiPageMaxContentBytes"></a>

```typescript
public resetWikiPageMaxContentBytes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isConstruct"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

applicationSettings.ApplicationSettings.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

applicationSettings.ApplicationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

applicationSettings.ApplicationSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

applicationSettings.ApplicationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApplicationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaults">defaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference">ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabDedicatedInstance">gitlabDedicatedInstance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabEnvironmentToolkitInstance">gitlabEnvironmentToolkitInstance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput">abuseNotificationEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput">adminModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput">afterSignOutPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput">afterSignUpTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput">akismetApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput">akismetEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletionInput">allowAccountDeletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput">allowGroupOwnersToManageLdapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput">allowLocalRequestsFromSystemHooksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput">allowLocalRequestsFromWebHooksAndServicesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelowInput">allowProjectCreationForGuestAndBelowInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationTokenInput">allowRunnerRegistrationTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput">archiveBuildsInHumanReadableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludesInput">asciidocMaxIncludesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput">assetProxyAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput">assetProxyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput">assetProxySecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput">assetProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput">authorizedKeysEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownloadInput">autoBanUserOnExcessiveProjectsDownloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput">autoDevopsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput">autoDevopsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput">automaticPurchasedStorageAllocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimitInput">bulkImportConcurrentPipelineBatchLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabledInput">bulkImportEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSizeInput">bulkImportMaxDownloadFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput">canCreateGroupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput">checkNamespacePlanInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludesInput">ciMaxIncludesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytesInput">ciMaxTotalYamlSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput">commitEmailHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimitInput">concurrentBitbucketImportJobsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimitInput">concurrentBitbucketServerImportJobsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimitInput">concurrentGithubImportJobsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput">containerExpirationPoliciesEnableHistoricEntriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput">containerRegistryCleanupTagsServiceMaxListSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput">containerRegistryDeleteTagsServiceTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput">containerRegistryExpirationPoliciesCachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput">containerRegistryExpirationPoliciesWorkerCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput">containerRegistryTokenExpireDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput">deactivateDormantUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriodInput">deactivateDormantUsersPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeoutInput">decompressArchiveFileTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput">defaultArtifactsExpireInInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput">defaultBranchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaultsInput">defaultBranchProtectionDefaultsInput</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput">defaultBranchProtectionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput">defaultCiConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput">defaultGroupVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguageInput">defaultPreferredLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput">defaultProjectCreationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput">defaultProjectsLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput">defaultProjectVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput">defaultSnippetVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingThemeInput">defaultSyntaxHighlightingThemeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput">deleteInactiveProjectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsersInput">deleteUnconfirmedUsersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput">deletionAdjournedPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabledInput">diagramsnetEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrlInput">diagramsnetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput">diffMaxFilesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput">diffMaxLinesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput">diffMaxPatchBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopesInput">disableAdminOauthScopesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput">disabledOauthSignInSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput">disableFeedTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokensInput">disablePersonalAccessTokensInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput">dnsRebindingProtectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput">domainAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput">domainDenylistEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput">domainDenylistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserShaInput">downstreamPipelineTriggerLimitPerProjectUserShaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput">dsaKeyRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabledInput">duoFeaturesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput">ecdsaKeyRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput">ecdsaSkKeyRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput">ed25519KeyRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput">ed25519SkKeyRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput">eksAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput">eksAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput">eksIntegrationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput">eksSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput">elasticsearchAwsAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput">elasticsearchAwsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput">elasticsearchAwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput">elasticsearchAwsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput">elasticsearchIndexedFieldLengthLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput">elasticsearchIndexedFileSizeLimitKbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput">elasticsearchIndexingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput">elasticsearchLimitIndexingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput">elasticsearchMaxBulkConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput">elasticsearchMaxBulkSizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrencyInput">elasticsearchMaxCodeIndexingConcurrencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput">elasticsearchNamespaceIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput">elasticsearchPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput">elasticsearchProjectIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkersInput">elasticsearchRequeueWorkersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput">elasticsearchSearchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput">elasticsearchUrlInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput">elasticsearchUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShardsInput">elasticsearchWorkerNumberOfShardsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput">emailAdditionalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput">emailAuthorInBodyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSettingInput">emailConfirmationSettingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPageInput">enableArtifactExternalRedirectWarningPageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput">enabledGitAccessProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput">enforceNamespaceStorageLimitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput">enforceTermsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput">externalAuthClientCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput">externalAuthClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput">externalAuthClientKeyPassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput">externalAuthorizationServiceDefaultLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput">externalAuthorizationServiceEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput">externalAuthorizationServiceTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput">externalAuthorizationServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput">externalPipelineValidationServiceTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput">externalPipelineValidationServiceTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput">externalPipelineValidationServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutesInput">failedLoginAttemptsUnlockPeriodInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput">fileTemplateProjectIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput">firstDayOfWeekInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput">geoNodeAllowedIpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput">geoStatusTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput">gitalyTimeoutDefaultInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput">gitalyTimeoutFastInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput">gitalyTimeoutMediumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimitInput">gitlabShellOperationLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabledInput">gitpodEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrlInput">gitpodUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlistInput">gitRateLimitUsersAlertlistInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput">gitRateLimitUsersAllowlistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput">gitTwoFactorSessionExpiryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIpsInput">globallyAllowedIpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput">grafanaEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput">grafanaUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput">gravatarEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput">groupOwnersCanManageDefaultBranchProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput">hashedStorageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput">helpPageHideCommercialContentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput">helpPageSupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput">helpPageTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput">helpTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput">hideThirdPartyOffersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput">homePageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput">housekeepingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput">housekeepingFullRepackPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput">housekeepingGcPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput">housekeepingIncrementalRepackPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriodInput">housekeepingOptimizeRepositoryPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput">htmlEmailsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput">importSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput">inactiveProjectsDeleteAfterMonthsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput">inactiveProjectsMinSizeMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput">inactiveProjectsSendWarningEmailAfterMonthsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePingInput">includeOptionalMetricsInServicePingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput">inProductMarketingEmailsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput">invisibleCaptchaEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput">issuesCreateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKeyInput">jiraConnectApplicationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrlInput">jiraConnectProxyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabledInput">jiraConnectPublicKeyStorageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput">keepLatestArtifactInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput">localMarkdownVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabledInput">lockDuoFeaturesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput">mailgunEventsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput">mailgunSigningKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput">maintenanceModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput">maintenanceModeMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwardingInput">mavenPackageRequestsForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput">maxArtifactsSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput">maxAttachmentSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSizeInput">maxDecompressedArchiveSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput">maxExportSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSizeInput">maxImportRemoteFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput">maxImportSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttemptsInput">maxLoginAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput">maxNumberOfRepositoryDownloadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput">maxNumberOfRepositoryDownloadsWithinTimePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput">maxPagesSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput">maxPersonalAccessTokenLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput">maxSshKeyLifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytesInput">maxTerraformStateSizeBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput">metricsMethodCallThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLengthInput">minimumPasswordLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput">mirrorAvailableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput">mirrorCapacityThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput">mirrorMaxCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput">mirrorMaxDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput">npmPackageRequestsForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidationInput">nugetSkipMetadataUrlValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput">outboundLocalRequestsWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypesInput">packageMetadataPurlTypesInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOptionInput">packageRegistryAllowAnyoneToPullOptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput">packageRegistryCleanupPoliciesWorkerCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput">pagesDomainVerificationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput">passwordAuthenticationEnabledForGitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput">passwordAuthenticationEnabledForWebInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput">passwordLowercaseRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput">passwordNumberRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput">passwordSymbolRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput">passwordUppercaseRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput">performanceBarAllowedGroupPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput">personalAccessTokenPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput">pipelineLimitPerProjectUserShaInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput">plantumlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput">plantumlUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput">pollingIntervalMultiplierInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput">projectExportEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimitInput">projectJobsApiRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticatedInput">projectsApiRateLimitUnauthenticatedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput">prometheusMetricsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput">protectedCiVariablesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput">pushEventActivitiesLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput">pushEventHooksLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput">pypiPackageRequestsForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput">rateLimitingResponseTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput">rawBlobRequestLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput">recaptchaEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput">recaptchaPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput">recaptchaSiteKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput">receiveMaxInputSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabledInput">receptiveClusterAgentsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabledInput">rememberMeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput">repositoryChecksEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput">repositorySizeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput">repositoryStoragesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput">repositoryStoragesWeightedInput</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput">requireAdminApprovalAfterUserSignupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthenticationInput">requireAdminTwoFactorAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiryInput">requirePersonalAccessTokenExpiryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput">requireTwoFactorAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput">restrictedVisibilityLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput">rsaKeyRestrictionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput">searchRateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput">searchRateLimitUnauthenticatedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimitInput">securityApprovalPoliciesLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabledInput">securityPolicyGlobalGroupApproversEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContentInput">securityTxtContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput">sendUserConfirmationEmailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforcedInput">serviceAccessTokensExpirationEnforcedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput">sessionExpireDelayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput">sharedRunnersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput">sharedRunnersMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput">sharedRunnersTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput">sidekiqJobLimiterCompressionThresholdBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput">sidekiqJobLimiterLimitBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput">sidekiqJobLimiterModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput">signInTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput">signupEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabledInput">silentAdminExportsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabledInput">silentModeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput">slackAppEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput">slackAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput">slackAppSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput">slackAppSigningSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput">slackAppVerificationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput">snippetSizeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput">snowplowAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput">snowplowCollectorHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput">snowplowCookieDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostnameInput">snowplowDatabaseCollectorHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput">snowplowEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput">sourcegraphEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput">sourcegraphPublicOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput">sourcegraphUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput">spamCheckApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput">spamCheckEndpointEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput">spamCheckEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthTokenInput">staticObjectsExternalStorageAuthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrlInput">staticObjectsExternalStorageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput">suggestPipelineEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput">terminalMaxSessionTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput">termsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput">throttleAuthenticatedApiEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput">throttleAuthenticatedApiPeriodInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput">throttleAuthenticatedApiRequestsPerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput">throttleAuthenticatedPackagesApiEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput">throttleAuthenticatedPackagesApiPeriodInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput">throttleAuthenticatedPackagesApiRequestsPerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput">throttleAuthenticatedWebEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput">throttleAuthenticatedWebPeriodInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput">throttleAuthenticatedWebRequestsPerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput">throttleUnauthenticatedApiEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput">throttleUnauthenticatedApiPeriodInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput">throttleUnauthenticatedApiRequestsPerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput">throttleUnauthenticatedPackagesApiEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput">throttleUnauthenticatedPackagesApiPeriodInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput">throttleUnauthenticatedPackagesApiRequestsPerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput">throttleUnauthenticatedWebEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput">throttleUnauthenticatedWebPeriodInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput">throttleUnauthenticatedWebRequestsPerPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput">timeTrackingLimitToHoursInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput">twoFactorGracePeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDaysInput">unconfirmedUsersDeleteAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput">uniqueIpsLimitEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput">uniqueIpsLimitPerUserInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput">uniqueIpsLimitTimeWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabledInput">updateRunnerVersionsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput">usagePingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalyticsInput">useClickhouseForAnalyticsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput">userDeactivationEmailsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput">userDefaultExternalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput">userDefaultInternalRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfileInput">userDefaultsToPrivateProfileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput">userOauthApplicationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput">userShowAddSshKeyMessageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrarsInput">validRunnerRegistrarsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput">versionCheckEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput">webIdeClientsidePreviewEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput">whatsNewVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput">wikiPageMaxContentBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail">abuseNotificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode">adminMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath">afterSignOutPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText">afterSignUpText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey">akismetApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled">akismetEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletion">allowAccountDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap">allowGroupOwnersToManageLdap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks">allowLocalRequestsFromSystemHooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices">allowLocalRequestsFromWebHooksAndServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelow">allowProjectCreationForGuestAndBelow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationToken">allowRunnerRegistrationToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable">archiveBuildsInHumanReadable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludes">asciidocMaxIncludes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist">assetProxyAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled">assetProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey">assetProxySecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl">assetProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled">authorizedKeysEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownload">autoBanUserOnExcessiveProjectsDownload</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain">autoDevopsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation">automaticPurchasedStorageAllocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimit">bulkImportConcurrentPipelineBatchLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabled">bulkImportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSize">bulkImportMaxDownloadFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup">canCreateGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan">checkNamespacePlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludes">ciMaxIncludes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytes">ciMaxTotalYamlSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname">commitEmailHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimit">concurrentBitbucketImportJobsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimit">concurrentBitbucketServerImportJobsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimit">concurrentGithubImportJobsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries">containerExpirationPoliciesEnableHistoricEntries</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize">containerRegistryCleanupTagsServiceMaxListSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout">containerRegistryDeleteTagsServiceTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching">containerRegistryExpirationPoliciesCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity">containerRegistryExpirationPoliciesWorkerCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay">containerRegistryTokenExpireDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers">deactivateDormantUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriod">deactivateDormantUsersPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeout">decompressArchiveFileTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn">defaultArtifactsExpireIn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName">defaultBranchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath">defaultCiConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility">defaultGroupVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguage">defaultPreferredLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation">defaultProjectCreation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit">defaultProjectsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility">defaultProjectVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility">defaultSnippetVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingTheme">defaultSyntaxHighlightingTheme</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects">deleteInactiveProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsers">deleteUnconfirmedUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod">deletionAdjournedPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabled">diagramsnetEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrl">diagramsnetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles">diffMaxFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines">diffMaxLines</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes">diffMaxPatchBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopes">disableAdminOauthScopes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources">disabledOauthSignInSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken">disableFeedToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokens">disablePersonalAccessTokens</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled">dnsRebindingProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist">domainAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist">domainDenylist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled">domainDenylistEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserSha">downstreamPipelineTriggerLimitPerProjectUserSha</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction">dsaKeyRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabled">duoFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction">ecdsaKeyRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction">ecdsaSkKeyRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction">ed25519KeyRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction">ed25519SkKeyRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId">eksAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId">eksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled">eksIntegrationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey">eksSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws">elasticsearchAws</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey">elasticsearchAwsAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion">elasticsearchAwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey">elasticsearchAwsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit">elasticsearchIndexedFieldLengthLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb">elasticsearchIndexedFileSizeLimitKb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing">elasticsearchIndexing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing">elasticsearchLimitIndexing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency">elasticsearchMaxBulkConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb">elasticsearchMaxBulkSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrency">elasticsearchMaxCodeIndexingConcurrency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds">elasticsearchNamespaceIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds">elasticsearchProjectIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkers">elasticsearchRequeueWorkers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch">elasticsearchSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl">elasticsearchUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername">elasticsearchUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShards">elasticsearchWorkerNumberOfShards</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText">emailAdditionalText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody">emailAuthorInBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSetting">emailConfirmationSetting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPage">enableArtifactExternalRedirectWarningPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol">enabledGitAccessProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit">enforceNamespaceStorageLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms">enforceTerms</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert">externalAuthClientCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey">externalAuthClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass">externalAuthClientKeyPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel">externalAuthorizationServiceDefaultLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled">externalAuthorizationServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout">externalAuthorizationServiceTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl">externalAuthorizationServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout">externalPipelineValidationServiceTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken">externalPipelineValidationServiceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl">externalPipelineValidationServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutes">failedLoginAttemptsUnlockPeriodInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId">fileTemplateProjectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek">firstDayOfWeek</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps">geoNodeAllowedIps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout">geoStatusTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault">gitalyTimeoutDefault</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast">gitalyTimeoutFast</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium">gitalyTimeoutMedium</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimit">gitlabShellOperationLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabled">gitpodEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrl">gitpodUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlist">gitRateLimitUsersAlertlist</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist">gitRateLimitUsersAllowlist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry">gitTwoFactorSessionExpiry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIps">globallyAllowedIps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled">grafanaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl">grafanaUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled">gravatarEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection">groupOwnersCanManageDefaultBranchProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled">hashedStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent">helpPageHideCommercialContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl">helpPageSupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText">helpPageText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText">helpText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers">hideThirdPartyOffers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl">homePageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled">housekeepingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod">housekeepingFullRepackPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod">housekeepingGcPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod">housekeepingIncrementalRepackPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriod">housekeepingOptimizeRepositoryPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled">htmlEmailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources">importSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths">inactiveProjectsDeleteAfterMonths</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb">inactiveProjectsMinSizeMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths">inactiveProjectsSendWarningEmailAfterMonths</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePing">includeOptionalMetricsInServicePing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled">inProductMarketingEmailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled">invisibleCaptchaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit">issuesCreateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKey">jiraConnectApplicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrl">jiraConnectProxyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabled">jiraConnectPublicKeyStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion">localMarkdownVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabled">lockDuoFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled">mailgunEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey">mailgunSigningKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode">maintenanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage">maintenanceModeMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwarding">mavenPackageRequestsForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize">maxArtifactsSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize">maxAttachmentSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSize">maxDecompressedArchiveSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize">maxExportSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSize">maxImportRemoteFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize">maxImportSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttempts">maxLoginAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads">maxNumberOfRepositoryDownloads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">maxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize">maxPagesSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime">maxPersonalAccessTokenLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime">maxSshKeyLifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytes">maxTerraformStateSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold">metricsMethodCallThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable">mirrorAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold">mirrorCapacityThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity">mirrorMaxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay">mirrorMaxDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding">npmPackageRequestsForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidation">nugetSkipMetadataUrlValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist">outboundLocalRequestsWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypes">packageMetadataPurlTypes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOption">packageRegistryAllowAnyoneToPullOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity">packageRegistryCleanupPoliciesWorkerCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled">pagesDomainVerificationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit">passwordAuthenticationEnabledForGit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb">passwordAuthenticationEnabledForWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired">passwordLowercaseRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired">passwordNumberRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired">passwordSymbolRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired">passwordUppercaseRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath">performanceBarAllowedGroupPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix">personalAccessTokenPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha">pipelineLimitPerProjectUserSha</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled">plantumlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl">plantumlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier">pollingIntervalMultiplier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled">projectExportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimit">projectJobsApiRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticated">projectsApiRateLimitUnauthenticated</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled">prometheusMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables">protectedCiVariables</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit">pushEventActivitiesLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit">pushEventHooksLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding">pypiPackageRequestsForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText">rateLimitingResponseText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit">rawBlobRequestLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled">recaptchaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey">recaptchaPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey">recaptchaSiteKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize">receiveMaxInputSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabled">receptiveClusterAgentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabled">rememberMeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled">repositoryChecksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit">repositorySizeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages">repositoryStorages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted">repositoryStoragesWeighted</a></code> | <code>{[ key: string ]: number}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup">requireAdminApprovalAfterUserSignup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthentication">requireAdminTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiry">requirePersonalAccessTokenExpiry</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels">restrictedVisibilityLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction">rsaKeyRestriction</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit">searchRateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated">searchRateLimitUnauthenticated</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimit">securityApprovalPoliciesLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabled">securityPolicyGlobalGroupApproversEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContent">securityTxtContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail">sendUserConfirmationEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforced">serviceAccessTokensExpirationEnforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay">sessionExpireDelay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes">sharedRunnersMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText">sharedRunnersText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes">sidekiqJobLimiterCompressionThresholdBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes">sidekiqJobLimiterLimitBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode">sidekiqJobLimiterMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText">signInText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled">signupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabled">silentAdminExportsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabled">silentModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled">slackAppEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId">slackAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret">slackAppSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret">slackAppSigningSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken">slackAppVerificationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit">snippetSizeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId">snowplowAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname">snowplowCollectorHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain">snowplowCookieDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostname">snowplowDatabaseCollectorHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled">snowplowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled">sourcegraphEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly">sourcegraphPublicOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl">sourcegraphUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey">spamCheckApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled">spamCheckEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl">spamCheckEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthToken">staticObjectsExternalStorageAuthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrl">staticObjectsExternalStorageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled">suggestPipelineEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime">terminalMaxSessionTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms">terms</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled">throttleAuthenticatedApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds">throttleAuthenticatedApiPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod">throttleAuthenticatedApiRequestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled">throttleAuthenticatedPackagesApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds">throttleAuthenticatedPackagesApiPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">throttleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled">throttleAuthenticatedWebEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds">throttleAuthenticatedWebPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod">throttleAuthenticatedWebRequestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled">throttleUnauthenticatedApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds">throttleUnauthenticatedApiPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod">throttleUnauthenticatedApiRequestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled">throttleUnauthenticatedPackagesApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">throttleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">throttleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled">throttleUnauthenticatedWebEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds">throttleUnauthenticatedWebPeriodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod">throttleUnauthenticatedWebRequestsPerPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours">timeTrackingLimitToHours</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDays">unconfirmedUsersDeleteAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled">uniqueIpsLimitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser">uniqueIpsLimitPerUser</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow">uniqueIpsLimitTimeWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabled">updateRunnerVersionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled">usagePingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalytics">useClickhouseForAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled">userDeactivationEmailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal">userDefaultExternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex">userDefaultInternalRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfile">userDefaultsToPrivateProfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications">userOauthApplications</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage">userShowAddSshKeyMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrars">validRunnerRegistrars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled">versionCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled">webIdeClientsidePreviewEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant">whatsNewVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes">wikiPageMaxContentBytes</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultBranchProtectionDefaults`<sup>Required</sup> <a name="defaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaults"></a>

```typescript
public readonly defaultBranchProtectionDefaults: ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference">ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference</a>

---

##### `gitlabDedicatedInstance`<sup>Required</sup> <a name="gitlabDedicatedInstance" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabDedicatedInstance"></a>

```typescript
public readonly gitlabDedicatedInstance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `gitlabEnvironmentToolkitInstance`<sup>Required</sup> <a name="gitlabEnvironmentToolkitInstance" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabEnvironmentToolkitInstance"></a>

```typescript
public readonly gitlabEnvironmentToolkitInstance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `abuseNotificationEmailInput`<sup>Optional</sup> <a name="abuseNotificationEmailInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmailInput"></a>

```typescript
public readonly abuseNotificationEmailInput: string;
```

- *Type:* string

---

##### `adminModeInput`<sup>Optional</sup> <a name="adminModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminModeInput"></a>

```typescript
public readonly adminModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `afterSignOutPathInput`<sup>Optional</sup> <a name="afterSignOutPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPathInput"></a>

```typescript
public readonly afterSignOutPathInput: string;
```

- *Type:* string

---

##### `afterSignUpTextInput`<sup>Optional</sup> <a name="afterSignUpTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpTextInput"></a>

```typescript
public readonly afterSignUpTextInput: string;
```

- *Type:* string

---

##### `akismetApiKeyInput`<sup>Optional</sup> <a name="akismetApiKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKeyInput"></a>

```typescript
public readonly akismetApiKeyInput: string;
```

- *Type:* string

---

##### `akismetEnabledInput`<sup>Optional</sup> <a name="akismetEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabledInput"></a>

```typescript
public readonly akismetEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAccountDeletionInput`<sup>Optional</sup> <a name="allowAccountDeletionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletionInput"></a>

```typescript
public readonly allowAccountDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowGroupOwnersToManageLdapInput`<sup>Optional</sup> <a name="allowGroupOwnersToManageLdapInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdapInput"></a>

```typescript
public readonly allowGroupOwnersToManageLdapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowLocalRequestsFromSystemHooksInput`<sup>Optional</sup> <a name="allowLocalRequestsFromSystemHooksInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooksInput"></a>

```typescript
public readonly allowLocalRequestsFromSystemHooksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowLocalRequestsFromWebHooksAndServicesInput`<sup>Optional</sup> <a name="allowLocalRequestsFromWebHooksAndServicesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServicesInput"></a>

```typescript
public readonly allowLocalRequestsFromWebHooksAndServicesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowProjectCreationForGuestAndBelowInput`<sup>Optional</sup> <a name="allowProjectCreationForGuestAndBelowInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelowInput"></a>

```typescript
public readonly allowProjectCreationForGuestAndBelowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRunnerRegistrationTokenInput`<sup>Optional</sup> <a name="allowRunnerRegistrationTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationTokenInput"></a>

```typescript
public readonly allowRunnerRegistrationTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveBuildsInHumanReadableInput`<sup>Optional</sup> <a name="archiveBuildsInHumanReadableInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadableInput"></a>

```typescript
public readonly archiveBuildsInHumanReadableInput: string;
```

- *Type:* string

---

##### `asciidocMaxIncludesInput`<sup>Optional</sup> <a name="asciidocMaxIncludesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludesInput"></a>

```typescript
public readonly asciidocMaxIncludesInput: number;
```

- *Type:* number

---

##### `assetProxyAllowlistInput`<sup>Optional</sup> <a name="assetProxyAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlistInput"></a>

```typescript
public readonly assetProxyAllowlistInput: string[];
```

- *Type:* string[]

---

##### `assetProxyEnabledInput`<sup>Optional</sup> <a name="assetProxyEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabledInput"></a>

```typescript
public readonly assetProxyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assetProxySecretKeyInput`<sup>Optional</sup> <a name="assetProxySecretKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKeyInput"></a>

```typescript
public readonly assetProxySecretKeyInput: string;
```

- *Type:* string

---

##### `assetProxyUrlInput`<sup>Optional</sup> <a name="assetProxyUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrlInput"></a>

```typescript
public readonly assetProxyUrlInput: string;
```

- *Type:* string

---

##### `authorizedKeysEnabledInput`<sup>Optional</sup> <a name="authorizedKeysEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabledInput"></a>

```typescript
public readonly authorizedKeysEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoBanUserOnExcessiveProjectsDownloadInput`<sup>Optional</sup> <a name="autoBanUserOnExcessiveProjectsDownloadInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownloadInput"></a>

```typescript
public readonly autoBanUserOnExcessiveProjectsDownloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDevopsDomainInput`<sup>Optional</sup> <a name="autoDevopsDomainInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomainInput"></a>

```typescript
public readonly autoDevopsDomainInput: string;
```

- *Type:* string

---

##### `autoDevopsEnabledInput`<sup>Optional</sup> <a name="autoDevopsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabledInput"></a>

```typescript
public readonly autoDevopsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticPurchasedStorageAllocationInput`<sup>Optional</sup> <a name="automaticPurchasedStorageAllocationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocationInput"></a>

```typescript
public readonly automaticPurchasedStorageAllocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bulkImportConcurrentPipelineBatchLimitInput`<sup>Optional</sup> <a name="bulkImportConcurrentPipelineBatchLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimitInput"></a>

```typescript
public readonly bulkImportConcurrentPipelineBatchLimitInput: number;
```

- *Type:* number

---

##### `bulkImportEnabledInput`<sup>Optional</sup> <a name="bulkImportEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabledInput"></a>

```typescript
public readonly bulkImportEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bulkImportMaxDownloadFileSizeInput`<sup>Optional</sup> <a name="bulkImportMaxDownloadFileSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSizeInput"></a>

```typescript
public readonly bulkImportMaxDownloadFileSizeInput: number;
```

- *Type:* number

---

##### `canCreateGroupInput`<sup>Optional</sup> <a name="canCreateGroupInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroupInput"></a>

```typescript
public readonly canCreateGroupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkNamespacePlanInput`<sup>Optional</sup> <a name="checkNamespacePlanInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlanInput"></a>

```typescript
public readonly checkNamespacePlanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ciMaxIncludesInput`<sup>Optional</sup> <a name="ciMaxIncludesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludesInput"></a>

```typescript
public readonly ciMaxIncludesInput: number;
```

- *Type:* number

---

##### `ciMaxTotalYamlSizeBytesInput`<sup>Optional</sup> <a name="ciMaxTotalYamlSizeBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytesInput"></a>

```typescript
public readonly ciMaxTotalYamlSizeBytesInput: number;
```

- *Type:* number

---

##### `commitEmailHostnameInput`<sup>Optional</sup> <a name="commitEmailHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostnameInput"></a>

```typescript
public readonly commitEmailHostnameInput: string;
```

- *Type:* string

---

##### `concurrentBitbucketImportJobsLimitInput`<sup>Optional</sup> <a name="concurrentBitbucketImportJobsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimitInput"></a>

```typescript
public readonly concurrentBitbucketImportJobsLimitInput: number;
```

- *Type:* number

---

##### `concurrentBitbucketServerImportJobsLimitInput`<sup>Optional</sup> <a name="concurrentBitbucketServerImportJobsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimitInput"></a>

```typescript
public readonly concurrentBitbucketServerImportJobsLimitInput: number;
```

- *Type:* number

---

##### `concurrentGithubImportJobsLimitInput`<sup>Optional</sup> <a name="concurrentGithubImportJobsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimitInput"></a>

```typescript
public readonly concurrentGithubImportJobsLimitInput: number;
```

- *Type:* number

---

##### `containerExpirationPoliciesEnableHistoricEntriesInput`<sup>Optional</sup> <a name="containerExpirationPoliciesEnableHistoricEntriesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntriesInput"></a>

```typescript
public readonly containerExpirationPoliciesEnableHistoricEntriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerRegistryCleanupTagsServiceMaxListSizeInput`<sup>Optional</sup> <a name="containerRegistryCleanupTagsServiceMaxListSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSizeInput"></a>

```typescript
public readonly containerRegistryCleanupTagsServiceMaxListSizeInput: number;
```

- *Type:* number

---

##### `containerRegistryDeleteTagsServiceTimeoutInput`<sup>Optional</sup> <a name="containerRegistryDeleteTagsServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeoutInput"></a>

```typescript
public readonly containerRegistryDeleteTagsServiceTimeoutInput: number;
```

- *Type:* number

---

##### `containerRegistryExpirationPoliciesCachingInput`<sup>Optional</sup> <a name="containerRegistryExpirationPoliciesCachingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCachingInput"></a>

```typescript
public readonly containerRegistryExpirationPoliciesCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerRegistryExpirationPoliciesWorkerCapacityInput`<sup>Optional</sup> <a name="containerRegistryExpirationPoliciesWorkerCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacityInput"></a>

```typescript
public readonly containerRegistryExpirationPoliciesWorkerCapacityInput: number;
```

- *Type:* number

---

##### `containerRegistryTokenExpireDelayInput`<sup>Optional</sup> <a name="containerRegistryTokenExpireDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelayInput"></a>

```typescript
public readonly containerRegistryTokenExpireDelayInput: number;
```

- *Type:* number

---

##### `deactivateDormantUsersInput`<sup>Optional</sup> <a name="deactivateDormantUsersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersInput"></a>

```typescript
public readonly deactivateDormantUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deactivateDormantUsersPeriodInput`<sup>Optional</sup> <a name="deactivateDormantUsersPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriodInput"></a>

```typescript
public readonly deactivateDormantUsersPeriodInput: number;
```

- *Type:* number

---

##### `decompressArchiveFileTimeoutInput`<sup>Optional</sup> <a name="decompressArchiveFileTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeoutInput"></a>

```typescript
public readonly decompressArchiveFileTimeoutInput: number;
```

- *Type:* number

---

##### `defaultArtifactsExpireInInput`<sup>Optional</sup> <a name="defaultArtifactsExpireInInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireInInput"></a>

```typescript
public readonly defaultArtifactsExpireInInput: string;
```

- *Type:* string

---

##### `defaultBranchNameInput`<sup>Optional</sup> <a name="defaultBranchNameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchNameInput"></a>

```typescript
public readonly defaultBranchNameInput: string;
```

- *Type:* string

---

##### `defaultBranchProtectionDefaultsInput`<sup>Optional</sup> <a name="defaultBranchProtectionDefaultsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionDefaultsInput"></a>

```typescript
public readonly defaultBranchProtectionDefaultsInput: ApplicationSettingsDefaultBranchProtectionDefaults;
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

---

##### `defaultBranchProtectionInput`<sup>Optional</sup> <a name="defaultBranchProtectionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtectionInput"></a>

```typescript
public readonly defaultBranchProtectionInput: number;
```

- *Type:* number

---

##### `defaultCiConfigPathInput`<sup>Optional</sup> <a name="defaultCiConfigPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPathInput"></a>

```typescript
public readonly defaultCiConfigPathInput: string;
```

- *Type:* string

---

##### `defaultGroupVisibilityInput`<sup>Optional</sup> <a name="defaultGroupVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibilityInput"></a>

```typescript
public readonly defaultGroupVisibilityInput: string;
```

- *Type:* string

---

##### `defaultPreferredLanguageInput`<sup>Optional</sup> <a name="defaultPreferredLanguageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguageInput"></a>

```typescript
public readonly defaultPreferredLanguageInput: string;
```

- *Type:* string

---

##### `defaultProjectCreationInput`<sup>Optional</sup> <a name="defaultProjectCreationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreationInput"></a>

```typescript
public readonly defaultProjectCreationInput: number;
```

- *Type:* number

---

##### `defaultProjectsLimitInput`<sup>Optional</sup> <a name="defaultProjectsLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimitInput"></a>

```typescript
public readonly defaultProjectsLimitInput: number;
```

- *Type:* number

---

##### `defaultProjectVisibilityInput`<sup>Optional</sup> <a name="defaultProjectVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibilityInput"></a>

```typescript
public readonly defaultProjectVisibilityInput: string;
```

- *Type:* string

---

##### `defaultSnippetVisibilityInput`<sup>Optional</sup> <a name="defaultSnippetVisibilityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibilityInput"></a>

```typescript
public readonly defaultSnippetVisibilityInput: string;
```

- *Type:* string

---

##### `defaultSyntaxHighlightingThemeInput`<sup>Optional</sup> <a name="defaultSyntaxHighlightingThemeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingThemeInput"></a>

```typescript
public readonly defaultSyntaxHighlightingThemeInput: number;
```

- *Type:* number

---

##### `deleteInactiveProjectsInput`<sup>Optional</sup> <a name="deleteInactiveProjectsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjectsInput"></a>

```typescript
public readonly deleteInactiveProjectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteUnconfirmedUsersInput`<sup>Optional</sup> <a name="deleteUnconfirmedUsersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsersInput"></a>

```typescript
public readonly deleteUnconfirmedUsersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionAdjournedPeriodInput`<sup>Optional</sup> <a name="deletionAdjournedPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriodInput"></a>

```typescript
public readonly deletionAdjournedPeriodInput: number;
```

- *Type:* number

---

##### `diagramsnetEnabledInput`<sup>Optional</sup> <a name="diagramsnetEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabledInput"></a>

```typescript
public readonly diagramsnetEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diagramsnetUrlInput`<sup>Optional</sup> <a name="diagramsnetUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrlInput"></a>

```typescript
public readonly diagramsnetUrlInput: string;
```

- *Type:* string

---

##### `diffMaxFilesInput`<sup>Optional</sup> <a name="diffMaxFilesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFilesInput"></a>

```typescript
public readonly diffMaxFilesInput: number;
```

- *Type:* number

---

##### `diffMaxLinesInput`<sup>Optional</sup> <a name="diffMaxLinesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLinesInput"></a>

```typescript
public readonly diffMaxLinesInput: number;
```

- *Type:* number

---

##### `diffMaxPatchBytesInput`<sup>Optional</sup> <a name="diffMaxPatchBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytesInput"></a>

```typescript
public readonly diffMaxPatchBytesInput: number;
```

- *Type:* number

---

##### `disableAdminOauthScopesInput`<sup>Optional</sup> <a name="disableAdminOauthScopesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopesInput"></a>

```typescript
public readonly disableAdminOauthScopesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabledOauthSignInSourcesInput`<sup>Optional</sup> <a name="disabledOauthSignInSourcesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSourcesInput"></a>

```typescript
public readonly disabledOauthSignInSourcesInput: string[];
```

- *Type:* string[]

---

##### `disableFeedTokenInput`<sup>Optional</sup> <a name="disableFeedTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedTokenInput"></a>

```typescript
public readonly disableFeedTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disablePersonalAccessTokensInput`<sup>Optional</sup> <a name="disablePersonalAccessTokensInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokensInput"></a>

```typescript
public readonly disablePersonalAccessTokensInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsRebindingProtectionEnabledInput`<sup>Optional</sup> <a name="dnsRebindingProtectionEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabledInput"></a>

```typescript
public readonly dnsRebindingProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainAllowlistInput`<sup>Optional</sup> <a name="domainAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlistInput"></a>

```typescript
public readonly domainAllowlistInput: string[];
```

- *Type:* string[]

---

##### `domainDenylistEnabledInput`<sup>Optional</sup> <a name="domainDenylistEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabledInput"></a>

```typescript
public readonly domainDenylistEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainDenylistInput`<sup>Optional</sup> <a name="domainDenylistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistInput"></a>

```typescript
public readonly domainDenylistInput: string[];
```

- *Type:* string[]

---

##### `downstreamPipelineTriggerLimitPerProjectUserShaInput`<sup>Optional</sup> <a name="downstreamPipelineTriggerLimitPerProjectUserShaInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserShaInput"></a>

```typescript
public readonly downstreamPipelineTriggerLimitPerProjectUserShaInput: number;
```

- *Type:* number

---

##### `dsaKeyRestrictionInput`<sup>Optional</sup> <a name="dsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestrictionInput"></a>

```typescript
public readonly dsaKeyRestrictionInput: number;
```

- *Type:* number

---

##### `duoFeaturesEnabledInput`<sup>Optional</sup> <a name="duoFeaturesEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabledInput"></a>

```typescript
public readonly duoFeaturesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecdsaKeyRestrictionInput`<sup>Optional</sup> <a name="ecdsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestrictionInput"></a>

```typescript
public readonly ecdsaKeyRestrictionInput: number;
```

- *Type:* number

---

##### `ecdsaSkKeyRestrictionInput`<sup>Optional</sup> <a name="ecdsaSkKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestrictionInput"></a>

```typescript
public readonly ecdsaSkKeyRestrictionInput: number;
```

- *Type:* number

---

##### `ed25519KeyRestrictionInput`<sup>Optional</sup> <a name="ed25519KeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestrictionInput"></a>

```typescript
public readonly ed25519KeyRestrictionInput: number;
```

- *Type:* number

---

##### `ed25519SkKeyRestrictionInput`<sup>Optional</sup> <a name="ed25519SkKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestrictionInput"></a>

```typescript
public readonly ed25519SkKeyRestrictionInput: number;
```

- *Type:* number

---

##### `eksAccessKeyIdInput`<sup>Optional</sup> <a name="eksAccessKeyIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyIdInput"></a>

```typescript
public readonly eksAccessKeyIdInput: string;
```

- *Type:* string

---

##### `eksAccountIdInput`<sup>Optional</sup> <a name="eksAccountIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountIdInput"></a>

```typescript
public readonly eksAccountIdInput: string;
```

- *Type:* string

---

##### `eksIntegrationEnabledInput`<sup>Optional</sup> <a name="eksIntegrationEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabledInput"></a>

```typescript
public readonly eksIntegrationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eksSecretAccessKeyInput`<sup>Optional</sup> <a name="eksSecretAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKeyInput"></a>

```typescript
public readonly eksSecretAccessKeyInput: string;
```

- *Type:* string

---

##### `elasticsearchAwsAccessKeyInput`<sup>Optional</sup> <a name="elasticsearchAwsAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKeyInput"></a>

```typescript
public readonly elasticsearchAwsAccessKeyInput: string;
```

- *Type:* string

---

##### `elasticsearchAwsInput`<sup>Optional</sup> <a name="elasticsearchAwsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsInput"></a>

```typescript
public readonly elasticsearchAwsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchAwsRegionInput`<sup>Optional</sup> <a name="elasticsearchAwsRegionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegionInput"></a>

```typescript
public readonly elasticsearchAwsRegionInput: string;
```

- *Type:* string

---

##### `elasticsearchAwsSecretAccessKeyInput`<sup>Optional</sup> <a name="elasticsearchAwsSecretAccessKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKeyInput"></a>

```typescript
public readonly elasticsearchAwsSecretAccessKeyInput: string;
```

- *Type:* string

---

##### `elasticsearchIndexedFieldLengthLimitInput`<sup>Optional</sup> <a name="elasticsearchIndexedFieldLengthLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimitInput"></a>

```typescript
public readonly elasticsearchIndexedFieldLengthLimitInput: number;
```

- *Type:* number

---

##### `elasticsearchIndexedFileSizeLimitKbInput`<sup>Optional</sup> <a name="elasticsearchIndexedFileSizeLimitKbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKbInput"></a>

```typescript
public readonly elasticsearchIndexedFileSizeLimitKbInput: number;
```

- *Type:* number

---

##### `elasticsearchIndexingInput`<sup>Optional</sup> <a name="elasticsearchIndexingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexingInput"></a>

```typescript
public readonly elasticsearchIndexingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchLimitIndexingInput`<sup>Optional</sup> <a name="elasticsearchLimitIndexingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexingInput"></a>

```typescript
public readonly elasticsearchLimitIndexingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchMaxBulkConcurrencyInput`<sup>Optional</sup> <a name="elasticsearchMaxBulkConcurrencyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrencyInput"></a>

```typescript
public readonly elasticsearchMaxBulkConcurrencyInput: number;
```

- *Type:* number

---

##### `elasticsearchMaxBulkSizeMbInput`<sup>Optional</sup> <a name="elasticsearchMaxBulkSizeMbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMbInput"></a>

```typescript
public readonly elasticsearchMaxBulkSizeMbInput: number;
```

- *Type:* number

---

##### `elasticsearchMaxCodeIndexingConcurrencyInput`<sup>Optional</sup> <a name="elasticsearchMaxCodeIndexingConcurrencyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrencyInput"></a>

```typescript
public readonly elasticsearchMaxCodeIndexingConcurrencyInput: number;
```

- *Type:* number

---

##### `elasticsearchNamespaceIdsInput`<sup>Optional</sup> <a name="elasticsearchNamespaceIdsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIdsInput"></a>

```typescript
public readonly elasticsearchNamespaceIdsInput: number[];
```

- *Type:* number[]

---

##### `elasticsearchPasswordInput`<sup>Optional</sup> <a name="elasticsearchPasswordInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPasswordInput"></a>

```typescript
public readonly elasticsearchPasswordInput: string;
```

- *Type:* string

---

##### `elasticsearchProjectIdsInput`<sup>Optional</sup> <a name="elasticsearchProjectIdsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIdsInput"></a>

```typescript
public readonly elasticsearchProjectIdsInput: number[];
```

- *Type:* number[]

---

##### `elasticsearchRequeueWorkersInput`<sup>Optional</sup> <a name="elasticsearchRequeueWorkersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkersInput"></a>

```typescript
public readonly elasticsearchRequeueWorkersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchSearchInput`<sup>Optional</sup> <a name="elasticsearchSearchInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearchInput"></a>

```typescript
public readonly elasticsearchSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchUrlInput`<sup>Optional</sup> <a name="elasticsearchUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrlInput"></a>

```typescript
public readonly elasticsearchUrlInput: string[];
```

- *Type:* string[]

---

##### `elasticsearchUsernameInput`<sup>Optional</sup> <a name="elasticsearchUsernameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsernameInput"></a>

```typescript
public readonly elasticsearchUsernameInput: string;
```

- *Type:* string

---

##### `elasticsearchWorkerNumberOfShardsInput`<sup>Optional</sup> <a name="elasticsearchWorkerNumberOfShardsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShardsInput"></a>

```typescript
public readonly elasticsearchWorkerNumberOfShardsInput: number;
```

- *Type:* number

---

##### `emailAdditionalTextInput`<sup>Optional</sup> <a name="emailAdditionalTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalTextInput"></a>

```typescript
public readonly emailAdditionalTextInput: string;
```

- *Type:* string

---

##### `emailAuthorInBodyInput`<sup>Optional</sup> <a name="emailAuthorInBodyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBodyInput"></a>

```typescript
public readonly emailAuthorInBodyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailConfirmationSettingInput`<sup>Optional</sup> <a name="emailConfirmationSettingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSettingInput"></a>

```typescript
public readonly emailConfirmationSettingInput: string;
```

- *Type:* string

---

##### `enableArtifactExternalRedirectWarningPageInput`<sup>Optional</sup> <a name="enableArtifactExternalRedirectWarningPageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPageInput"></a>

```typescript
public readonly enableArtifactExternalRedirectWarningPageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledGitAccessProtocolInput`<sup>Optional</sup> <a name="enabledGitAccessProtocolInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocolInput"></a>

```typescript
public readonly enabledGitAccessProtocolInput: string;
```

- *Type:* string

---

##### `enforceNamespaceStorageLimitInput`<sup>Optional</sup> <a name="enforceNamespaceStorageLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimitInput"></a>

```typescript
public readonly enforceNamespaceStorageLimitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceTermsInput`<sup>Optional</sup> <a name="enforceTermsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTermsInput"></a>

```typescript
public readonly enforceTermsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalAuthClientCertInput`<sup>Optional</sup> <a name="externalAuthClientCertInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCertInput"></a>

```typescript
public readonly externalAuthClientCertInput: string;
```

- *Type:* string

---

##### `externalAuthClientKeyInput`<sup>Optional</sup> <a name="externalAuthClientKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyInput"></a>

```typescript
public readonly externalAuthClientKeyInput: string;
```

- *Type:* string

---

##### `externalAuthClientKeyPassInput`<sup>Optional</sup> <a name="externalAuthClientKeyPassInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPassInput"></a>

```typescript
public readonly externalAuthClientKeyPassInput: string;
```

- *Type:* string

---

##### `externalAuthorizationServiceDefaultLabelInput`<sup>Optional</sup> <a name="externalAuthorizationServiceDefaultLabelInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabelInput"></a>

```typescript
public readonly externalAuthorizationServiceDefaultLabelInput: string;
```

- *Type:* string

---

##### `externalAuthorizationServiceEnabledInput`<sup>Optional</sup> <a name="externalAuthorizationServiceEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabledInput"></a>

```typescript
public readonly externalAuthorizationServiceEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalAuthorizationServiceTimeoutInput`<sup>Optional</sup> <a name="externalAuthorizationServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeoutInput"></a>

```typescript
public readonly externalAuthorizationServiceTimeoutInput: number;
```

- *Type:* number

---

##### `externalAuthorizationServiceUrlInput`<sup>Optional</sup> <a name="externalAuthorizationServiceUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrlInput"></a>

```typescript
public readonly externalAuthorizationServiceUrlInput: string;
```

- *Type:* string

---

##### `externalPipelineValidationServiceTimeoutInput`<sup>Optional</sup> <a name="externalPipelineValidationServiceTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeoutInput"></a>

```typescript
public readonly externalPipelineValidationServiceTimeoutInput: number;
```

- *Type:* number

---

##### `externalPipelineValidationServiceTokenInput`<sup>Optional</sup> <a name="externalPipelineValidationServiceTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTokenInput"></a>

```typescript
public readonly externalPipelineValidationServiceTokenInput: string;
```

- *Type:* string

---

##### `externalPipelineValidationServiceUrlInput`<sup>Optional</sup> <a name="externalPipelineValidationServiceUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrlInput"></a>

```typescript
public readonly externalPipelineValidationServiceUrlInput: string;
```

- *Type:* string

---

##### `failedLoginAttemptsUnlockPeriodInMinutesInput`<sup>Optional</sup> <a name="failedLoginAttemptsUnlockPeriodInMinutesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutesInput"></a>

```typescript
public readonly failedLoginAttemptsUnlockPeriodInMinutesInput: number;
```

- *Type:* number

---

##### `fileTemplateProjectIdInput`<sup>Optional</sup> <a name="fileTemplateProjectIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectIdInput"></a>

```typescript
public readonly fileTemplateProjectIdInput: number;
```

- *Type:* number

---

##### `firstDayOfWeekInput`<sup>Optional</sup> <a name="firstDayOfWeekInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeekInput"></a>

```typescript
public readonly firstDayOfWeekInput: number;
```

- *Type:* number

---

##### `geoNodeAllowedIpsInput`<sup>Optional</sup> <a name="geoNodeAllowedIpsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIpsInput"></a>

```typescript
public readonly geoNodeAllowedIpsInput: string;
```

- *Type:* string

---

##### `geoStatusTimeoutInput`<sup>Optional</sup> <a name="geoStatusTimeoutInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeoutInput"></a>

```typescript
public readonly geoStatusTimeoutInput: number;
```

- *Type:* number

---

##### `gitalyTimeoutDefaultInput`<sup>Optional</sup> <a name="gitalyTimeoutDefaultInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefaultInput"></a>

```typescript
public readonly gitalyTimeoutDefaultInput: number;
```

- *Type:* number

---

##### `gitalyTimeoutFastInput`<sup>Optional</sup> <a name="gitalyTimeoutFastInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFastInput"></a>

```typescript
public readonly gitalyTimeoutFastInput: number;
```

- *Type:* number

---

##### `gitalyTimeoutMediumInput`<sup>Optional</sup> <a name="gitalyTimeoutMediumInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMediumInput"></a>

```typescript
public readonly gitalyTimeoutMediumInput: number;
```

- *Type:* number

---

##### `gitlabShellOperationLimitInput`<sup>Optional</sup> <a name="gitlabShellOperationLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimitInput"></a>

```typescript
public readonly gitlabShellOperationLimitInput: number;
```

- *Type:* number

---

##### `gitpodEnabledInput`<sup>Optional</sup> <a name="gitpodEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabledInput"></a>

```typescript
public readonly gitpodEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitpodUrlInput`<sup>Optional</sup> <a name="gitpodUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrlInput"></a>

```typescript
public readonly gitpodUrlInput: string;
```

- *Type:* string

---

##### `gitRateLimitUsersAlertlistInput`<sup>Optional</sup> <a name="gitRateLimitUsersAlertlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlistInput"></a>

```typescript
public readonly gitRateLimitUsersAlertlistInput: number[];
```

- *Type:* number[]

---

##### `gitRateLimitUsersAllowlistInput`<sup>Optional</sup> <a name="gitRateLimitUsersAllowlistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlistInput"></a>

```typescript
public readonly gitRateLimitUsersAllowlistInput: string[];
```

- *Type:* string[]

---

##### `gitTwoFactorSessionExpiryInput`<sup>Optional</sup> <a name="gitTwoFactorSessionExpiryInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiryInput"></a>

```typescript
public readonly gitTwoFactorSessionExpiryInput: number;
```

- *Type:* number

---

##### `globallyAllowedIpsInput`<sup>Optional</sup> <a name="globallyAllowedIpsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIpsInput"></a>

```typescript
public readonly globallyAllowedIpsInput: string;
```

- *Type:* string

---

##### `grafanaEnabledInput`<sup>Optional</sup> <a name="grafanaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabledInput"></a>

```typescript
public readonly grafanaEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grafanaUrlInput`<sup>Optional</sup> <a name="grafanaUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrlInput"></a>

```typescript
public readonly grafanaUrlInput: string;
```

- *Type:* string

---

##### `gravatarEnabledInput`<sup>Optional</sup> <a name="gravatarEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabledInput"></a>

```typescript
public readonly gravatarEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupOwnersCanManageDefaultBranchProtectionInput`<sup>Optional</sup> <a name="groupOwnersCanManageDefaultBranchProtectionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtectionInput"></a>

```typescript
public readonly groupOwnersCanManageDefaultBranchProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hashedStorageEnabledInput`<sup>Optional</sup> <a name="hashedStorageEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabledInput"></a>

```typescript
public readonly hashedStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `helpPageHideCommercialContentInput`<sup>Optional</sup> <a name="helpPageHideCommercialContentInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContentInput"></a>

```typescript
public readonly helpPageHideCommercialContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `helpPageSupportUrlInput`<sup>Optional</sup> <a name="helpPageSupportUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrlInput"></a>

```typescript
public readonly helpPageSupportUrlInput: string;
```

- *Type:* string

---

##### `helpPageTextInput`<sup>Optional</sup> <a name="helpPageTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageTextInput"></a>

```typescript
public readonly helpPageTextInput: string;
```

- *Type:* string

---

##### `helpTextInput`<sup>Optional</sup> <a name="helpTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpTextInput"></a>

```typescript
public readonly helpTextInput: string;
```

- *Type:* string

---

##### `hideThirdPartyOffersInput`<sup>Optional</sup> <a name="hideThirdPartyOffersInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffersInput"></a>

```typescript
public readonly hideThirdPartyOffersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `homePageUrlInput`<sup>Optional</sup> <a name="homePageUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrlInput"></a>

```typescript
public readonly homePageUrlInput: string;
```

- *Type:* string

---

##### `housekeepingEnabledInput`<sup>Optional</sup> <a name="housekeepingEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabledInput"></a>

```typescript
public readonly housekeepingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `housekeepingFullRepackPeriodInput`<sup>Optional</sup> <a name="housekeepingFullRepackPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriodInput"></a>

```typescript
public readonly housekeepingFullRepackPeriodInput: number;
```

- *Type:* number

---

##### `housekeepingGcPeriodInput`<sup>Optional</sup> <a name="housekeepingGcPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriodInput"></a>

```typescript
public readonly housekeepingGcPeriodInput: number;
```

- *Type:* number

---

##### `housekeepingIncrementalRepackPeriodInput`<sup>Optional</sup> <a name="housekeepingIncrementalRepackPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriodInput"></a>

```typescript
public readonly housekeepingIncrementalRepackPeriodInput: number;
```

- *Type:* number

---

##### `housekeepingOptimizeRepositoryPeriodInput`<sup>Optional</sup> <a name="housekeepingOptimizeRepositoryPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriodInput"></a>

```typescript
public readonly housekeepingOptimizeRepositoryPeriodInput: number;
```

- *Type:* number

---

##### `htmlEmailsEnabledInput`<sup>Optional</sup> <a name="htmlEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabledInput"></a>

```typescript
public readonly htmlEmailsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importSourcesInput`<sup>Optional</sup> <a name="importSourcesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSourcesInput"></a>

```typescript
public readonly importSourcesInput: string[];
```

- *Type:* string[]

---

##### `inactiveProjectsDeleteAfterMonthsInput`<sup>Optional</sup> <a name="inactiveProjectsDeleteAfterMonthsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonthsInput"></a>

```typescript
public readonly inactiveProjectsDeleteAfterMonthsInput: number;
```

- *Type:* number

---

##### `inactiveProjectsMinSizeMbInput`<sup>Optional</sup> <a name="inactiveProjectsMinSizeMbInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMbInput"></a>

```typescript
public readonly inactiveProjectsMinSizeMbInput: number;
```

- *Type:* number

---

##### `inactiveProjectsSendWarningEmailAfterMonthsInput`<sup>Optional</sup> <a name="inactiveProjectsSendWarningEmailAfterMonthsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonthsInput"></a>

```typescript
public readonly inactiveProjectsSendWarningEmailAfterMonthsInput: number;
```

- *Type:* number

---

##### `includeOptionalMetricsInServicePingInput`<sup>Optional</sup> <a name="includeOptionalMetricsInServicePingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePingInput"></a>

```typescript
public readonly includeOptionalMetricsInServicePingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inProductMarketingEmailsEnabledInput`<sup>Optional</sup> <a name="inProductMarketingEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabledInput"></a>

```typescript
public readonly inProductMarketingEmailsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `invisibleCaptchaEnabledInput`<sup>Optional</sup> <a name="invisibleCaptchaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabledInput"></a>

```typescript
public readonly invisibleCaptchaEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuesCreateLimitInput`<sup>Optional</sup> <a name="issuesCreateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimitInput"></a>

```typescript
public readonly issuesCreateLimitInput: number;
```

- *Type:* number

---

##### `jiraConnectApplicationKeyInput`<sup>Optional</sup> <a name="jiraConnectApplicationKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKeyInput"></a>

```typescript
public readonly jiraConnectApplicationKeyInput: string;
```

- *Type:* string

---

##### `jiraConnectProxyUrlInput`<sup>Optional</sup> <a name="jiraConnectProxyUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrlInput"></a>

```typescript
public readonly jiraConnectProxyUrlInput: string;
```

- *Type:* string

---

##### `jiraConnectPublicKeyStorageEnabledInput`<sup>Optional</sup> <a name="jiraConnectPublicKeyStorageEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabledInput"></a>

```typescript
public readonly jiraConnectPublicKeyStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepLatestArtifactInput`<sup>Optional</sup> <a name="keepLatestArtifactInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifactInput"></a>

```typescript
public readonly keepLatestArtifactInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localMarkdownVersionInput`<sup>Optional</sup> <a name="localMarkdownVersionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersionInput"></a>

```typescript
public readonly localMarkdownVersionInput: number;
```

- *Type:* number

---

##### `lockDuoFeaturesEnabledInput`<sup>Optional</sup> <a name="lockDuoFeaturesEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabledInput"></a>

```typescript
public readonly lockDuoFeaturesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailgunEventsEnabledInput`<sup>Optional</sup> <a name="mailgunEventsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabledInput"></a>

```typescript
public readonly mailgunEventsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailgunSigningKeyInput`<sup>Optional</sup> <a name="mailgunSigningKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKeyInput"></a>

```typescript
public readonly mailgunSigningKeyInput: string;
```

- *Type:* string

---

##### `maintenanceModeInput`<sup>Optional</sup> <a name="maintenanceModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeInput"></a>

```typescript
public readonly maintenanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceModeMessageInput`<sup>Optional</sup> <a name="maintenanceModeMessageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessageInput"></a>

```typescript
public readonly maintenanceModeMessageInput: string;
```

- *Type:* string

---

##### `mavenPackageRequestsForwardingInput`<sup>Optional</sup> <a name="mavenPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwardingInput"></a>

```typescript
public readonly mavenPackageRequestsForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxArtifactsSizeInput`<sup>Optional</sup> <a name="maxArtifactsSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSizeInput"></a>

```typescript
public readonly maxArtifactsSizeInput: number;
```

- *Type:* number

---

##### `maxAttachmentSizeInput`<sup>Optional</sup> <a name="maxAttachmentSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSizeInput"></a>

```typescript
public readonly maxAttachmentSizeInput: number;
```

- *Type:* number

---

##### `maxDecompressedArchiveSizeInput`<sup>Optional</sup> <a name="maxDecompressedArchiveSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSizeInput"></a>

```typescript
public readonly maxDecompressedArchiveSizeInput: number;
```

- *Type:* number

---

##### `maxExportSizeInput`<sup>Optional</sup> <a name="maxExportSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSizeInput"></a>

```typescript
public readonly maxExportSizeInput: number;
```

- *Type:* number

---

##### `maxImportRemoteFileSizeInput`<sup>Optional</sup> <a name="maxImportRemoteFileSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSizeInput"></a>

```typescript
public readonly maxImportRemoteFileSizeInput: number;
```

- *Type:* number

---

##### `maxImportSizeInput`<sup>Optional</sup> <a name="maxImportSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSizeInput"></a>

```typescript
public readonly maxImportSizeInput: number;
```

- *Type:* number

---

##### `maxLoginAttemptsInput`<sup>Optional</sup> <a name="maxLoginAttemptsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttemptsInput"></a>

```typescript
public readonly maxLoginAttemptsInput: number;
```

- *Type:* number

---

##### `maxNumberOfRepositoryDownloadsInput`<sup>Optional</sup> <a name="maxNumberOfRepositoryDownloadsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsInput"></a>

```typescript
public readonly maxNumberOfRepositoryDownloadsInput: number;
```

- *Type:* number

---

##### `maxNumberOfRepositoryDownloadsWithinTimePeriodInput`<sup>Optional</sup> <a name="maxNumberOfRepositoryDownloadsWithinTimePeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriodInput"></a>

```typescript
public readonly maxNumberOfRepositoryDownloadsWithinTimePeriodInput: number;
```

- *Type:* number

---

##### `maxPagesSizeInput`<sup>Optional</sup> <a name="maxPagesSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSizeInput"></a>

```typescript
public readonly maxPagesSizeInput: number;
```

- *Type:* number

---

##### `maxPersonalAccessTokenLifetimeInput`<sup>Optional</sup> <a name="maxPersonalAccessTokenLifetimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetimeInput"></a>

```typescript
public readonly maxPersonalAccessTokenLifetimeInput: number;
```

- *Type:* number

---

##### `maxSshKeyLifetimeInput`<sup>Optional</sup> <a name="maxSshKeyLifetimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetimeInput"></a>

```typescript
public readonly maxSshKeyLifetimeInput: number;
```

- *Type:* number

---

##### `maxTerraformStateSizeBytesInput`<sup>Optional</sup> <a name="maxTerraformStateSizeBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytesInput"></a>

```typescript
public readonly maxTerraformStateSizeBytesInput: number;
```

- *Type:* number

---

##### `metricsMethodCallThresholdInput`<sup>Optional</sup> <a name="metricsMethodCallThresholdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThresholdInput"></a>

```typescript
public readonly metricsMethodCallThresholdInput: number;
```

- *Type:* number

---

##### `minimumPasswordLengthInput`<sup>Optional</sup> <a name="minimumPasswordLengthInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLengthInput"></a>

```typescript
public readonly minimumPasswordLengthInput: number;
```

- *Type:* number

---

##### `mirrorAvailableInput`<sup>Optional</sup> <a name="mirrorAvailableInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailableInput"></a>

```typescript
public readonly mirrorAvailableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirrorCapacityThresholdInput`<sup>Optional</sup> <a name="mirrorCapacityThresholdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThresholdInput"></a>

```typescript
public readonly mirrorCapacityThresholdInput: number;
```

- *Type:* number

---

##### `mirrorMaxCapacityInput`<sup>Optional</sup> <a name="mirrorMaxCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacityInput"></a>

```typescript
public readonly mirrorMaxCapacityInput: number;
```

- *Type:* number

---

##### `mirrorMaxDelayInput`<sup>Optional</sup> <a name="mirrorMaxDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelayInput"></a>

```typescript
public readonly mirrorMaxDelayInput: number;
```

- *Type:* number

---

##### `npmPackageRequestsForwardingInput`<sup>Optional</sup> <a name="npmPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwardingInput"></a>

```typescript
public readonly npmPackageRequestsForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nugetSkipMetadataUrlValidationInput`<sup>Optional</sup> <a name="nugetSkipMetadataUrlValidationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidationInput"></a>

```typescript
public readonly nugetSkipMetadataUrlValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outboundLocalRequestsWhitelistInput`<sup>Optional</sup> <a name="outboundLocalRequestsWhitelistInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelistInput"></a>

```typescript
public readonly outboundLocalRequestsWhitelistInput: string[];
```

- *Type:* string[]

---

##### `packageMetadataPurlTypesInput`<sup>Optional</sup> <a name="packageMetadataPurlTypesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypesInput"></a>

```typescript
public readonly packageMetadataPurlTypesInput: number[];
```

- *Type:* number[]

---

##### `packageRegistryAllowAnyoneToPullOptionInput`<sup>Optional</sup> <a name="packageRegistryAllowAnyoneToPullOptionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOptionInput"></a>

```typescript
public readonly packageRegistryAllowAnyoneToPullOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packageRegistryCleanupPoliciesWorkerCapacityInput`<sup>Optional</sup> <a name="packageRegistryCleanupPoliciesWorkerCapacityInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacityInput"></a>

```typescript
public readonly packageRegistryCleanupPoliciesWorkerCapacityInput: number;
```

- *Type:* number

---

##### `pagesDomainVerificationEnabledInput`<sup>Optional</sup> <a name="pagesDomainVerificationEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabledInput"></a>

```typescript
public readonly pagesDomainVerificationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordAuthenticationEnabledForGitInput`<sup>Optional</sup> <a name="passwordAuthenticationEnabledForGitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGitInput"></a>

```typescript
public readonly passwordAuthenticationEnabledForGitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordAuthenticationEnabledForWebInput`<sup>Optional</sup> <a name="passwordAuthenticationEnabledForWebInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWebInput"></a>

```typescript
public readonly passwordAuthenticationEnabledForWebInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordLowercaseRequiredInput`<sup>Optional</sup> <a name="passwordLowercaseRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequiredInput"></a>

```typescript
public readonly passwordLowercaseRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordNumberRequiredInput`<sup>Optional</sup> <a name="passwordNumberRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequiredInput"></a>

```typescript
public readonly passwordNumberRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordSymbolRequiredInput`<sup>Optional</sup> <a name="passwordSymbolRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequiredInput"></a>

```typescript
public readonly passwordSymbolRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordUppercaseRequiredInput`<sup>Optional</sup> <a name="passwordUppercaseRequiredInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequiredInput"></a>

```typescript
public readonly passwordUppercaseRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceBarAllowedGroupPathInput`<sup>Optional</sup> <a name="performanceBarAllowedGroupPathInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPathInput"></a>

```typescript
public readonly performanceBarAllowedGroupPathInput: string;
```

- *Type:* string

---

##### `personalAccessTokenPrefixInput`<sup>Optional</sup> <a name="personalAccessTokenPrefixInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefixInput"></a>

```typescript
public readonly personalAccessTokenPrefixInput: string;
```

- *Type:* string

---

##### `pipelineLimitPerProjectUserShaInput`<sup>Optional</sup> <a name="pipelineLimitPerProjectUserShaInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserShaInput"></a>

```typescript
public readonly pipelineLimitPerProjectUserShaInput: number;
```

- *Type:* number

---

##### `plantumlEnabledInput`<sup>Optional</sup> <a name="plantumlEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabledInput"></a>

```typescript
public readonly plantumlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `plantumlUrlInput`<sup>Optional</sup> <a name="plantumlUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrlInput"></a>

```typescript
public readonly plantumlUrlInput: string;
```

- *Type:* string

---

##### `pollingIntervalMultiplierInput`<sup>Optional</sup> <a name="pollingIntervalMultiplierInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplierInput"></a>

```typescript
public readonly pollingIntervalMultiplierInput: number;
```

- *Type:* number

---

##### `projectExportEnabledInput`<sup>Optional</sup> <a name="projectExportEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabledInput"></a>

```typescript
public readonly projectExportEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectJobsApiRateLimitInput`<sup>Optional</sup> <a name="projectJobsApiRateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimitInput"></a>

```typescript
public readonly projectJobsApiRateLimitInput: number;
```

- *Type:* number

---

##### `projectsApiRateLimitUnauthenticatedInput`<sup>Optional</sup> <a name="projectsApiRateLimitUnauthenticatedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticatedInput"></a>

```typescript
public readonly projectsApiRateLimitUnauthenticatedInput: number;
```

- *Type:* number

---

##### `prometheusMetricsEnabledInput`<sup>Optional</sup> <a name="prometheusMetricsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabledInput"></a>

```typescript
public readonly prometheusMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protectedCiVariablesInput`<sup>Optional</sup> <a name="protectedCiVariablesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariablesInput"></a>

```typescript
public readonly protectedCiVariablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushEventActivitiesLimitInput`<sup>Optional</sup> <a name="pushEventActivitiesLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimitInput"></a>

```typescript
public readonly pushEventActivitiesLimitInput: number;
```

- *Type:* number

---

##### `pushEventHooksLimitInput`<sup>Optional</sup> <a name="pushEventHooksLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimitInput"></a>

```typescript
public readonly pushEventHooksLimitInput: number;
```

- *Type:* number

---

##### `pypiPackageRequestsForwardingInput`<sup>Optional</sup> <a name="pypiPackageRequestsForwardingInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwardingInput"></a>

```typescript
public readonly pypiPackageRequestsForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rateLimitingResponseTextInput`<sup>Optional</sup> <a name="rateLimitingResponseTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseTextInput"></a>

```typescript
public readonly rateLimitingResponseTextInput: string;
```

- *Type:* string

---

##### `rawBlobRequestLimitInput`<sup>Optional</sup> <a name="rawBlobRequestLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimitInput"></a>

```typescript
public readonly rawBlobRequestLimitInput: number;
```

- *Type:* number

---

##### `recaptchaEnabledInput`<sup>Optional</sup> <a name="recaptchaEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabledInput"></a>

```typescript
public readonly recaptchaEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recaptchaPrivateKeyInput`<sup>Optional</sup> <a name="recaptchaPrivateKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKeyInput"></a>

```typescript
public readonly recaptchaPrivateKeyInput: string;
```

- *Type:* string

---

##### `recaptchaSiteKeyInput`<sup>Optional</sup> <a name="recaptchaSiteKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKeyInput"></a>

```typescript
public readonly recaptchaSiteKeyInput: string;
```

- *Type:* string

---

##### `receiveMaxInputSizeInput`<sup>Optional</sup> <a name="receiveMaxInputSizeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSizeInput"></a>

```typescript
public readonly receiveMaxInputSizeInput: number;
```

- *Type:* number

---

##### `receptiveClusterAgentsEnabledInput`<sup>Optional</sup> <a name="receptiveClusterAgentsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabledInput"></a>

```typescript
public readonly receptiveClusterAgentsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rememberMeEnabledInput`<sup>Optional</sup> <a name="rememberMeEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabledInput"></a>

```typescript
public readonly rememberMeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryChecksEnabledInput`<sup>Optional</sup> <a name="repositoryChecksEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabledInput"></a>

```typescript
public readonly repositoryChecksEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositorySizeLimitInput`<sup>Optional</sup> <a name="repositorySizeLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimitInput"></a>

```typescript
public readonly repositorySizeLimitInput: number;
```

- *Type:* number

---

##### `repositoryStoragesInput`<sup>Optional</sup> <a name="repositoryStoragesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesInput"></a>

```typescript
public readonly repositoryStoragesInput: string[];
```

- *Type:* string[]

---

##### `repositoryStoragesWeightedInput`<sup>Optional</sup> <a name="repositoryStoragesWeightedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeightedInput"></a>

```typescript
public readonly repositoryStoragesWeightedInput: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `requireAdminApprovalAfterUserSignupInput`<sup>Optional</sup> <a name="requireAdminApprovalAfterUserSignupInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignupInput"></a>

```typescript
public readonly requireAdminApprovalAfterUserSignupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireAdminTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="requireAdminTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthenticationInput"></a>

```typescript
public readonly requireAdminTwoFactorAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requirePersonalAccessTokenExpiryInput`<sup>Optional</sup> <a name="requirePersonalAccessTokenExpiryInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiryInput"></a>

```typescript
public readonly requirePersonalAccessTokenExpiryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTwoFactorAuthenticationInput`<sup>Optional</sup> <a name="requireTwoFactorAuthenticationInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthenticationInput"></a>

```typescript
public readonly requireTwoFactorAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictedVisibilityLevelsInput`<sup>Optional</sup> <a name="restrictedVisibilityLevelsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevelsInput"></a>

```typescript
public readonly restrictedVisibilityLevelsInput: string[];
```

- *Type:* string[]

---

##### `rsaKeyRestrictionInput`<sup>Optional</sup> <a name="rsaKeyRestrictionInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestrictionInput"></a>

```typescript
public readonly rsaKeyRestrictionInput: number;
```

- *Type:* number

---

##### `searchRateLimitInput`<sup>Optional</sup> <a name="searchRateLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitInput"></a>

```typescript
public readonly searchRateLimitInput: number;
```

- *Type:* number

---

##### `searchRateLimitUnauthenticatedInput`<sup>Optional</sup> <a name="searchRateLimitUnauthenticatedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticatedInput"></a>

```typescript
public readonly searchRateLimitUnauthenticatedInput: number;
```

- *Type:* number

---

##### `securityApprovalPoliciesLimitInput`<sup>Optional</sup> <a name="securityApprovalPoliciesLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimitInput"></a>

```typescript
public readonly securityApprovalPoliciesLimitInput: number;
```

- *Type:* number

---

##### `securityPolicyGlobalGroupApproversEnabledInput`<sup>Optional</sup> <a name="securityPolicyGlobalGroupApproversEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabledInput"></a>

```typescript
public readonly securityPolicyGlobalGroupApproversEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityTxtContentInput`<sup>Optional</sup> <a name="securityTxtContentInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContentInput"></a>

```typescript
public readonly securityTxtContentInput: string;
```

- *Type:* string

---

##### `sendUserConfirmationEmailInput`<sup>Optional</sup> <a name="sendUserConfirmationEmailInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmailInput"></a>

```typescript
public readonly sendUserConfirmationEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccessTokensExpirationEnforcedInput`<sup>Optional</sup> <a name="serviceAccessTokensExpirationEnforcedInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforcedInput"></a>

```typescript
public readonly serviceAccessTokensExpirationEnforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionExpireDelayInput`<sup>Optional</sup> <a name="sessionExpireDelayInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelayInput"></a>

```typescript
public readonly sessionExpireDelayInput: number;
```

- *Type:* number

---

##### `sharedRunnersEnabledInput`<sup>Optional</sup> <a name="sharedRunnersEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabledInput"></a>

```typescript
public readonly sharedRunnersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedRunnersMinutesInput`<sup>Optional</sup> <a name="sharedRunnersMinutesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutesInput"></a>

```typescript
public readonly sharedRunnersMinutesInput: number;
```

- *Type:* number

---

##### `sharedRunnersTextInput`<sup>Optional</sup> <a name="sharedRunnersTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersTextInput"></a>

```typescript
public readonly sharedRunnersTextInput: string;
```

- *Type:* string

---

##### `sidekiqJobLimiterCompressionThresholdBytesInput`<sup>Optional</sup> <a name="sidekiqJobLimiterCompressionThresholdBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytesInput"></a>

```typescript
public readonly sidekiqJobLimiterCompressionThresholdBytesInput: number;
```

- *Type:* number

---

##### `sidekiqJobLimiterLimitBytesInput`<sup>Optional</sup> <a name="sidekiqJobLimiterLimitBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytesInput"></a>

```typescript
public readonly sidekiqJobLimiterLimitBytesInput: number;
```

- *Type:* number

---

##### `sidekiqJobLimiterModeInput`<sup>Optional</sup> <a name="sidekiqJobLimiterModeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterModeInput"></a>

```typescript
public readonly sidekiqJobLimiterModeInput: string;
```

- *Type:* string

---

##### `signInTextInput`<sup>Optional</sup> <a name="signInTextInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInTextInput"></a>

```typescript
public readonly signInTextInput: string;
```

- *Type:* string

---

##### `signupEnabledInput`<sup>Optional</sup> <a name="signupEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabledInput"></a>

```typescript
public readonly signupEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `silentAdminExportsEnabledInput`<sup>Optional</sup> <a name="silentAdminExportsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabledInput"></a>

```typescript
public readonly silentAdminExportsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `silentModeEnabledInput`<sup>Optional</sup> <a name="silentModeEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabledInput"></a>

```typescript
public readonly silentModeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slackAppEnabledInput`<sup>Optional</sup> <a name="slackAppEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabledInput"></a>

```typescript
public readonly slackAppEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slackAppIdInput`<sup>Optional</sup> <a name="slackAppIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppIdInput"></a>

```typescript
public readonly slackAppIdInput: string;
```

- *Type:* string

---

##### `slackAppSecretInput`<sup>Optional</sup> <a name="slackAppSecretInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecretInput"></a>

```typescript
public readonly slackAppSecretInput: string;
```

- *Type:* string

---

##### `slackAppSigningSecretInput`<sup>Optional</sup> <a name="slackAppSigningSecretInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecretInput"></a>

```typescript
public readonly slackAppSigningSecretInput: string;
```

- *Type:* string

---

##### `slackAppVerificationTokenInput`<sup>Optional</sup> <a name="slackAppVerificationTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationTokenInput"></a>

```typescript
public readonly slackAppVerificationTokenInput: string;
```

- *Type:* string

---

##### `snippetSizeLimitInput`<sup>Optional</sup> <a name="snippetSizeLimitInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimitInput"></a>

```typescript
public readonly snippetSizeLimitInput: number;
```

- *Type:* number

---

##### `snowplowAppIdInput`<sup>Optional</sup> <a name="snowplowAppIdInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppIdInput"></a>

```typescript
public readonly snowplowAppIdInput: string;
```

- *Type:* string

---

##### `snowplowCollectorHostnameInput`<sup>Optional</sup> <a name="snowplowCollectorHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostnameInput"></a>

```typescript
public readonly snowplowCollectorHostnameInput: string;
```

- *Type:* string

---

##### `snowplowCookieDomainInput`<sup>Optional</sup> <a name="snowplowCookieDomainInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomainInput"></a>

```typescript
public readonly snowplowCookieDomainInput: string;
```

- *Type:* string

---

##### `snowplowDatabaseCollectorHostnameInput`<sup>Optional</sup> <a name="snowplowDatabaseCollectorHostnameInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostnameInput"></a>

```typescript
public readonly snowplowDatabaseCollectorHostnameInput: string;
```

- *Type:* string

---

##### `snowplowEnabledInput`<sup>Optional</sup> <a name="snowplowEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabledInput"></a>

```typescript
public readonly snowplowEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcegraphEnabledInput`<sup>Optional</sup> <a name="sourcegraphEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabledInput"></a>

```typescript
public readonly sourcegraphEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcegraphPublicOnlyInput`<sup>Optional</sup> <a name="sourcegraphPublicOnlyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnlyInput"></a>

```typescript
public readonly sourcegraphPublicOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcegraphUrlInput`<sup>Optional</sup> <a name="sourcegraphUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrlInput"></a>

```typescript
public readonly sourcegraphUrlInput: string;
```

- *Type:* string

---

##### `spamCheckApiKeyInput`<sup>Optional</sup> <a name="spamCheckApiKeyInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKeyInput"></a>

```typescript
public readonly spamCheckApiKeyInput: string;
```

- *Type:* string

---

##### `spamCheckEndpointEnabledInput`<sup>Optional</sup> <a name="spamCheckEndpointEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabledInput"></a>

```typescript
public readonly spamCheckEndpointEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spamCheckEndpointUrlInput`<sup>Optional</sup> <a name="spamCheckEndpointUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrlInput"></a>

```typescript
public readonly spamCheckEndpointUrlInput: string;
```

- *Type:* string

---

##### `staticObjectsExternalStorageAuthTokenInput`<sup>Optional</sup> <a name="staticObjectsExternalStorageAuthTokenInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthTokenInput"></a>

```typescript
public readonly staticObjectsExternalStorageAuthTokenInput: string;
```

- *Type:* string

---

##### `staticObjectsExternalStorageUrlInput`<sup>Optional</sup> <a name="staticObjectsExternalStorageUrlInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrlInput"></a>

```typescript
public readonly staticObjectsExternalStorageUrlInput: string;
```

- *Type:* string

---

##### `suggestPipelineEnabledInput`<sup>Optional</sup> <a name="suggestPipelineEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabledInput"></a>

```typescript
public readonly suggestPipelineEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminalMaxSessionTimeInput`<sup>Optional</sup> <a name="terminalMaxSessionTimeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTimeInput"></a>

```typescript
public readonly terminalMaxSessionTimeInput: number;
```

- *Type:* number

---

##### `termsInput`<sup>Optional</sup> <a name="termsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.termsInput"></a>

```typescript
public readonly termsInput: string;
```

- *Type:* string

---

##### `throttleAuthenticatedApiEnabledInput`<sup>Optional</sup> <a name="throttleAuthenticatedApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabledInput"></a>

```typescript
public readonly throttleAuthenticatedApiEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleAuthenticatedApiPeriodInSecondsInput`<sup>Optional</sup> <a name="throttleAuthenticatedApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSecondsInput"></a>

```typescript
public readonly throttleAuthenticatedApiPeriodInSecondsInput: number;
```

- *Type:* number

---

##### `throttleAuthenticatedApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="throttleAuthenticatedApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriodInput"></a>

```typescript
public readonly throttleAuthenticatedApiRequestsPerPeriodInput: number;
```

- *Type:* number

---

##### `throttleAuthenticatedPackagesApiEnabledInput`<sup>Optional</sup> <a name="throttleAuthenticatedPackagesApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabledInput"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleAuthenticatedPackagesApiPeriodInSecondsInput`<sup>Optional</sup> <a name="throttleAuthenticatedPackagesApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSecondsInput"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiPeriodInSecondsInput: number;
```

- *Type:* number

---

##### `throttleAuthenticatedPackagesApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="throttleAuthenticatedPackagesApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriodInput"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiRequestsPerPeriodInput: number;
```

- *Type:* number

---

##### `throttleAuthenticatedWebEnabledInput`<sup>Optional</sup> <a name="throttleAuthenticatedWebEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabledInput"></a>

```typescript
public readonly throttleAuthenticatedWebEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleAuthenticatedWebPeriodInSecondsInput`<sup>Optional</sup> <a name="throttleAuthenticatedWebPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSecondsInput"></a>

```typescript
public readonly throttleAuthenticatedWebPeriodInSecondsInput: number;
```

- *Type:* number

---

##### `throttleAuthenticatedWebRequestsPerPeriodInput`<sup>Optional</sup> <a name="throttleAuthenticatedWebRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriodInput"></a>

```typescript
public readonly throttleAuthenticatedWebRequestsPerPeriodInput: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedApiEnabledInput`<sup>Optional</sup> <a name="throttleUnauthenticatedApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabledInput"></a>

```typescript
public readonly throttleUnauthenticatedApiEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleUnauthenticatedApiPeriodInSecondsInput`<sup>Optional</sup> <a name="throttleUnauthenticatedApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSecondsInput"></a>

```typescript
public readonly throttleUnauthenticatedApiPeriodInSecondsInput: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="throttleUnauthenticatedApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriodInput"></a>

```typescript
public readonly throttleUnauthenticatedApiRequestsPerPeriodInput: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedPackagesApiEnabledInput`<sup>Optional</sup> <a name="throttleUnauthenticatedPackagesApiEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabledInput"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleUnauthenticatedPackagesApiPeriodInSecondsInput`<sup>Optional</sup> <a name="throttleUnauthenticatedPackagesApiPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSecondsInput"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiPeriodInSecondsInput: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedPackagesApiRequestsPerPeriodInput`<sup>Optional</sup> <a name="throttleUnauthenticatedPackagesApiRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriodInput"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiRequestsPerPeriodInput: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedWebEnabledInput`<sup>Optional</sup> <a name="throttleUnauthenticatedWebEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabledInput"></a>

```typescript
public readonly throttleUnauthenticatedWebEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleUnauthenticatedWebPeriodInSecondsInput`<sup>Optional</sup> <a name="throttleUnauthenticatedWebPeriodInSecondsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSecondsInput"></a>

```typescript
public readonly throttleUnauthenticatedWebPeriodInSecondsInput: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedWebRequestsPerPeriodInput`<sup>Optional</sup> <a name="throttleUnauthenticatedWebRequestsPerPeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriodInput"></a>

```typescript
public readonly throttleUnauthenticatedWebRequestsPerPeriodInput: number;
```

- *Type:* number

---

##### `timeTrackingLimitToHoursInput`<sup>Optional</sup> <a name="timeTrackingLimitToHoursInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHoursInput"></a>

```typescript
public readonly timeTrackingLimitToHoursInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twoFactorGracePeriodInput`<sup>Optional</sup> <a name="twoFactorGracePeriodInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriodInput"></a>

```typescript
public readonly twoFactorGracePeriodInput: number;
```

- *Type:* number

---

##### `unconfirmedUsersDeleteAfterDaysInput`<sup>Optional</sup> <a name="unconfirmedUsersDeleteAfterDaysInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDaysInput"></a>

```typescript
public readonly unconfirmedUsersDeleteAfterDaysInput: number;
```

- *Type:* number

---

##### `uniqueIpsLimitEnabledInput`<sup>Optional</sup> <a name="uniqueIpsLimitEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabledInput"></a>

```typescript
public readonly uniqueIpsLimitEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uniqueIpsLimitPerUserInput`<sup>Optional</sup> <a name="uniqueIpsLimitPerUserInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUserInput"></a>

```typescript
public readonly uniqueIpsLimitPerUserInput: number;
```

- *Type:* number

---

##### `uniqueIpsLimitTimeWindowInput`<sup>Optional</sup> <a name="uniqueIpsLimitTimeWindowInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindowInput"></a>

```typescript
public readonly uniqueIpsLimitTimeWindowInput: number;
```

- *Type:* number

---

##### `updateRunnerVersionsEnabledInput`<sup>Optional</sup> <a name="updateRunnerVersionsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabledInput"></a>

```typescript
public readonly updateRunnerVersionsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usagePingEnabledInput`<sup>Optional</sup> <a name="usagePingEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabledInput"></a>

```typescript
public readonly usagePingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useClickhouseForAnalyticsInput`<sup>Optional</sup> <a name="useClickhouseForAnalyticsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalyticsInput"></a>

```typescript
public readonly useClickhouseForAnalyticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDeactivationEmailsEnabledInput`<sup>Optional</sup> <a name="userDeactivationEmailsEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabledInput"></a>

```typescript
public readonly userDeactivationEmailsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDefaultExternalInput`<sup>Optional</sup> <a name="userDefaultExternalInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternalInput"></a>

```typescript
public readonly userDefaultExternalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDefaultInternalRegexInput`<sup>Optional</sup> <a name="userDefaultInternalRegexInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegexInput"></a>

```typescript
public readonly userDefaultInternalRegexInput: string;
```

- *Type:* string

---

##### `userDefaultsToPrivateProfileInput`<sup>Optional</sup> <a name="userDefaultsToPrivateProfileInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfileInput"></a>

```typescript
public readonly userDefaultsToPrivateProfileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userOauthApplicationsInput`<sup>Optional</sup> <a name="userOauthApplicationsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplicationsInput"></a>

```typescript
public readonly userOauthApplicationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userShowAddSshKeyMessageInput`<sup>Optional</sup> <a name="userShowAddSshKeyMessageInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessageInput"></a>

```typescript
public readonly userShowAddSshKeyMessageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validRunnerRegistrarsInput`<sup>Optional</sup> <a name="validRunnerRegistrarsInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrarsInput"></a>

```typescript
public readonly validRunnerRegistrarsInput: string[];
```

- *Type:* string[]

---

##### `versionCheckEnabledInput`<sup>Optional</sup> <a name="versionCheckEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabledInput"></a>

```typescript
public readonly versionCheckEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webIdeClientsidePreviewEnabledInput`<sup>Optional</sup> <a name="webIdeClientsidePreviewEnabledInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabledInput"></a>

```typescript
public readonly webIdeClientsidePreviewEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whatsNewVariantInput`<sup>Optional</sup> <a name="whatsNewVariantInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariantInput"></a>

```typescript
public readonly whatsNewVariantInput: string;
```

- *Type:* string

---

##### `wikiPageMaxContentBytesInput`<sup>Optional</sup> <a name="wikiPageMaxContentBytesInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytesInput"></a>

```typescript
public readonly wikiPageMaxContentBytesInput: number;
```

- *Type:* number

---

##### `abuseNotificationEmail`<sup>Required</sup> <a name="abuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.abuseNotificationEmail"></a>

```typescript
public readonly abuseNotificationEmail: string;
```

- *Type:* string

---

##### `adminMode`<sup>Required</sup> <a name="adminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.adminMode"></a>

```typescript
public readonly adminMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `afterSignOutPath`<sup>Required</sup> <a name="afterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignOutPath"></a>

```typescript
public readonly afterSignOutPath: string;
```

- *Type:* string

---

##### `afterSignUpText`<sup>Required</sup> <a name="afterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.afterSignUpText"></a>

```typescript
public readonly afterSignUpText: string;
```

- *Type:* string

---

##### `akismetApiKey`<sup>Required</sup> <a name="akismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetApiKey"></a>

```typescript
public readonly akismetApiKey: string;
```

- *Type:* string

---

##### `akismetEnabled`<sup>Required</sup> <a name="akismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.akismetEnabled"></a>

```typescript
public readonly akismetEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAccountDeletion`<sup>Required</sup> <a name="allowAccountDeletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowAccountDeletion"></a>

```typescript
public readonly allowAccountDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowGroupOwnersToManageLdap`<sup>Required</sup> <a name="allowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowGroupOwnersToManageLdap"></a>

```typescript
public readonly allowGroupOwnersToManageLdap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowLocalRequestsFromSystemHooks`<sup>Required</sup> <a name="allowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromSystemHooks"></a>

```typescript
public readonly allowLocalRequestsFromSystemHooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowLocalRequestsFromWebHooksAndServices`<sup>Required</sup> <a name="allowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowLocalRequestsFromWebHooksAndServices"></a>

```typescript
public readonly allowLocalRequestsFromWebHooksAndServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowProjectCreationForGuestAndBelow`<sup>Required</sup> <a name="allowProjectCreationForGuestAndBelow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowProjectCreationForGuestAndBelow"></a>

```typescript
public readonly allowProjectCreationForGuestAndBelow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRunnerRegistrationToken`<sup>Required</sup> <a name="allowRunnerRegistrationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.allowRunnerRegistrationToken"></a>

```typescript
public readonly allowRunnerRegistrationToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveBuildsInHumanReadable`<sup>Required</sup> <a name="archiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.archiveBuildsInHumanReadable"></a>

```typescript
public readonly archiveBuildsInHumanReadable: string;
```

- *Type:* string

---

##### `asciidocMaxIncludes`<sup>Required</sup> <a name="asciidocMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.asciidocMaxIncludes"></a>

```typescript
public readonly asciidocMaxIncludes: number;
```

- *Type:* number

---

##### `assetProxyAllowlist`<sup>Required</sup> <a name="assetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyAllowlist"></a>

```typescript
public readonly assetProxyAllowlist: string[];
```

- *Type:* string[]

---

##### `assetProxyEnabled`<sup>Required</sup> <a name="assetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyEnabled"></a>

```typescript
public readonly assetProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `assetProxySecretKey`<sup>Required</sup> <a name="assetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxySecretKey"></a>

```typescript
public readonly assetProxySecretKey: string;
```

- *Type:* string

---

##### `assetProxyUrl`<sup>Required</sup> <a name="assetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.assetProxyUrl"></a>

```typescript
public readonly assetProxyUrl: string;
```

- *Type:* string

---

##### `authorizedKeysEnabled`<sup>Required</sup> <a name="authorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.authorizedKeysEnabled"></a>

```typescript
public readonly authorizedKeysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoBanUserOnExcessiveProjectsDownload`<sup>Required</sup> <a name="autoBanUserOnExcessiveProjectsDownload" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoBanUserOnExcessiveProjectsDownload"></a>

```typescript
public readonly autoBanUserOnExcessiveProjectsDownload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDevopsDomain`<sup>Required</sup> <a name="autoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsDomain"></a>

```typescript
public readonly autoDevopsDomain: string;
```

- *Type:* string

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `automaticPurchasedStorageAllocation`<sup>Required</sup> <a name="automaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.automaticPurchasedStorageAllocation"></a>

```typescript
public readonly automaticPurchasedStorageAllocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bulkImportConcurrentPipelineBatchLimit`<sup>Required</sup> <a name="bulkImportConcurrentPipelineBatchLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportConcurrentPipelineBatchLimit"></a>

```typescript
public readonly bulkImportConcurrentPipelineBatchLimit: number;
```

- *Type:* number

---

##### `bulkImportEnabled`<sup>Required</sup> <a name="bulkImportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportEnabled"></a>

```typescript
public readonly bulkImportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bulkImportMaxDownloadFileSize`<sup>Required</sup> <a name="bulkImportMaxDownloadFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.bulkImportMaxDownloadFileSize"></a>

```typescript
public readonly bulkImportMaxDownloadFileSize: number;
```

- *Type:* number

---

##### `canCreateGroup`<sup>Required</sup> <a name="canCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.canCreateGroup"></a>

```typescript
public readonly canCreateGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `checkNamespacePlan`<sup>Required</sup> <a name="checkNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.checkNamespacePlan"></a>

```typescript
public readonly checkNamespacePlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ciMaxIncludes`<sup>Required</sup> <a name="ciMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxIncludes"></a>

```typescript
public readonly ciMaxIncludes: number;
```

- *Type:* number

---

##### `ciMaxTotalYamlSizeBytes`<sup>Required</sup> <a name="ciMaxTotalYamlSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ciMaxTotalYamlSizeBytes"></a>

```typescript
public readonly ciMaxTotalYamlSizeBytes: number;
```

- *Type:* number

---

##### `commitEmailHostname`<sup>Required</sup> <a name="commitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.commitEmailHostname"></a>

```typescript
public readonly commitEmailHostname: string;
```

- *Type:* string

---

##### `concurrentBitbucketImportJobsLimit`<sup>Required</sup> <a name="concurrentBitbucketImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketImportJobsLimit"></a>

```typescript
public readonly concurrentBitbucketImportJobsLimit: number;
```

- *Type:* number

---

##### `concurrentBitbucketServerImportJobsLimit`<sup>Required</sup> <a name="concurrentBitbucketServerImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentBitbucketServerImportJobsLimit"></a>

```typescript
public readonly concurrentBitbucketServerImportJobsLimit: number;
```

- *Type:* number

---

##### `concurrentGithubImportJobsLimit`<sup>Required</sup> <a name="concurrentGithubImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.concurrentGithubImportJobsLimit"></a>

```typescript
public readonly concurrentGithubImportJobsLimit: number;
```

- *Type:* number

---

##### `containerExpirationPoliciesEnableHistoricEntries`<sup>Required</sup> <a name="containerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```typescript
public readonly containerExpirationPoliciesEnableHistoricEntries: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerRegistryCleanupTagsServiceMaxListSize`<sup>Required</sup> <a name="containerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```typescript
public readonly containerRegistryCleanupTagsServiceMaxListSize: number;
```

- *Type:* number

---

##### `containerRegistryDeleteTagsServiceTimeout`<sup>Required</sup> <a name="containerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryDeleteTagsServiceTimeout"></a>

```typescript
public readonly containerRegistryDeleteTagsServiceTimeout: number;
```

- *Type:* number

---

##### `containerRegistryExpirationPoliciesCaching`<sup>Required</sup> <a name="containerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesCaching"></a>

```typescript
public readonly containerRegistryExpirationPoliciesCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerRegistryExpirationPoliciesWorkerCapacity`<sup>Required</sup> <a name="containerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```typescript
public readonly containerRegistryExpirationPoliciesWorkerCapacity: number;
```

- *Type:* number

---

##### `containerRegistryTokenExpireDelay`<sup>Required</sup> <a name="containerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.containerRegistryTokenExpireDelay"></a>

```typescript
public readonly containerRegistryTokenExpireDelay: number;
```

- *Type:* number

---

##### `deactivateDormantUsers`<sup>Required</sup> <a name="deactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsers"></a>

```typescript
public readonly deactivateDormantUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deactivateDormantUsersPeriod`<sup>Required</sup> <a name="deactivateDormantUsersPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deactivateDormantUsersPeriod"></a>

```typescript
public readonly deactivateDormantUsersPeriod: number;
```

- *Type:* number

---

##### `decompressArchiveFileTimeout`<sup>Required</sup> <a name="decompressArchiveFileTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.decompressArchiveFileTimeout"></a>

```typescript
public readonly decompressArchiveFileTimeout: number;
```

- *Type:* number

---

##### `defaultArtifactsExpireIn`<sup>Required</sup> <a name="defaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultArtifactsExpireIn"></a>

```typescript
public readonly defaultArtifactsExpireIn: string;
```

- *Type:* string

---

##### `defaultBranchName`<sup>Required</sup> <a name="defaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchName"></a>

```typescript
public readonly defaultBranchName: string;
```

- *Type:* string

---

##### `defaultBranchProtection`<sup>Required</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultBranchProtection"></a>

```typescript
public readonly defaultBranchProtection: number;
```

- *Type:* number

---

##### `defaultCiConfigPath`<sup>Required</sup> <a name="defaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultCiConfigPath"></a>

```typescript
public readonly defaultCiConfigPath: string;
```

- *Type:* string

---

##### `defaultGroupVisibility`<sup>Required</sup> <a name="defaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultGroupVisibility"></a>

```typescript
public readonly defaultGroupVisibility: string;
```

- *Type:* string

---

##### `defaultPreferredLanguage`<sup>Required</sup> <a name="defaultPreferredLanguage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultPreferredLanguage"></a>

```typescript
public readonly defaultPreferredLanguage: string;
```

- *Type:* string

---

##### `defaultProjectCreation`<sup>Required</sup> <a name="defaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectCreation"></a>

```typescript
public readonly defaultProjectCreation: number;
```

- *Type:* number

---

##### `defaultProjectsLimit`<sup>Required</sup> <a name="defaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectsLimit"></a>

```typescript
public readonly defaultProjectsLimit: number;
```

- *Type:* number

---

##### `defaultProjectVisibility`<sup>Required</sup> <a name="defaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultProjectVisibility"></a>

```typescript
public readonly defaultProjectVisibility: string;
```

- *Type:* string

---

##### `defaultSnippetVisibility`<sup>Required</sup> <a name="defaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSnippetVisibility"></a>

```typescript
public readonly defaultSnippetVisibility: string;
```

- *Type:* string

---

##### `defaultSyntaxHighlightingTheme`<sup>Required</sup> <a name="defaultSyntaxHighlightingTheme" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.defaultSyntaxHighlightingTheme"></a>

```typescript
public readonly defaultSyntaxHighlightingTheme: number;
```

- *Type:* number

---

##### `deleteInactiveProjects`<sup>Required</sup> <a name="deleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteInactiveProjects"></a>

```typescript
public readonly deleteInactiveProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteUnconfirmedUsers`<sup>Required</sup> <a name="deleteUnconfirmedUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deleteUnconfirmedUsers"></a>

```typescript
public readonly deleteUnconfirmedUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deletionAdjournedPeriod`<sup>Required</sup> <a name="deletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.deletionAdjournedPeriod"></a>

```typescript
public readonly deletionAdjournedPeriod: number;
```

- *Type:* number

---

##### `diagramsnetEnabled`<sup>Required</sup> <a name="diagramsnetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetEnabled"></a>

```typescript
public readonly diagramsnetEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diagramsnetUrl`<sup>Required</sup> <a name="diagramsnetUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diagramsnetUrl"></a>

```typescript
public readonly diagramsnetUrl: string;
```

- *Type:* string

---

##### `diffMaxFiles`<sup>Required</sup> <a name="diffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxFiles"></a>

```typescript
public readonly diffMaxFiles: number;
```

- *Type:* number

---

##### `diffMaxLines`<sup>Required</sup> <a name="diffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxLines"></a>

```typescript
public readonly diffMaxLines: number;
```

- *Type:* number

---

##### `diffMaxPatchBytes`<sup>Required</sup> <a name="diffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.diffMaxPatchBytes"></a>

```typescript
public readonly diffMaxPatchBytes: number;
```

- *Type:* number

---

##### `disableAdminOauthScopes`<sup>Required</sup> <a name="disableAdminOauthScopes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableAdminOauthScopes"></a>

```typescript
public readonly disableAdminOauthScopes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabledOauthSignInSources`<sup>Required</sup> <a name="disabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disabledOauthSignInSources"></a>

```typescript
public readonly disabledOauthSignInSources: string[];
```

- *Type:* string[]

---

##### `disableFeedToken`<sup>Required</sup> <a name="disableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disableFeedToken"></a>

```typescript
public readonly disableFeedToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disablePersonalAccessTokens`<sup>Required</sup> <a name="disablePersonalAccessTokens" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.disablePersonalAccessTokens"></a>

```typescript
public readonly disablePersonalAccessTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsRebindingProtectionEnabled`<sup>Required</sup> <a name="dnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dnsRebindingProtectionEnabled"></a>

```typescript
public readonly dnsRebindingProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainAllowlist`<sup>Required</sup> <a name="domainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainAllowlist"></a>

```typescript
public readonly domainAllowlist: string[];
```

- *Type:* string[]

---

##### `domainDenylist`<sup>Required</sup> <a name="domainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylist"></a>

```typescript
public readonly domainDenylist: string[];
```

- *Type:* string[]

---

##### `domainDenylistEnabled`<sup>Required</sup> <a name="domainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.domainDenylistEnabled"></a>

```typescript
public readonly domainDenylistEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `downstreamPipelineTriggerLimitPerProjectUserSha`<sup>Required</sup> <a name="downstreamPipelineTriggerLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.downstreamPipelineTriggerLimitPerProjectUserSha"></a>

```typescript
public readonly downstreamPipelineTriggerLimitPerProjectUserSha: number;
```

- *Type:* number

---

##### `dsaKeyRestriction`<sup>Required</sup> <a name="dsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.dsaKeyRestriction"></a>

```typescript
public readonly dsaKeyRestriction: number;
```

- *Type:* number

---

##### `duoFeaturesEnabled`<sup>Required</sup> <a name="duoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.duoFeaturesEnabled"></a>

```typescript
public readonly duoFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ecdsaKeyRestriction`<sup>Required</sup> <a name="ecdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaKeyRestriction"></a>

```typescript
public readonly ecdsaKeyRestriction: number;
```

- *Type:* number

---

##### `ecdsaSkKeyRestriction`<sup>Required</sup> <a name="ecdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ecdsaSkKeyRestriction"></a>

```typescript
public readonly ecdsaSkKeyRestriction: number;
```

- *Type:* number

---

##### `ed25519KeyRestriction`<sup>Required</sup> <a name="ed25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519KeyRestriction"></a>

```typescript
public readonly ed25519KeyRestriction: number;
```

- *Type:* number

---

##### `ed25519SkKeyRestriction`<sup>Required</sup> <a name="ed25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.ed25519SkKeyRestriction"></a>

```typescript
public readonly ed25519SkKeyRestriction: number;
```

- *Type:* number

---

##### `eksAccessKeyId`<sup>Required</sup> <a name="eksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccessKeyId"></a>

```typescript
public readonly eksAccessKeyId: string;
```

- *Type:* string

---

##### `eksAccountId`<sup>Required</sup> <a name="eksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksAccountId"></a>

```typescript
public readonly eksAccountId: string;
```

- *Type:* string

---

##### `eksIntegrationEnabled`<sup>Required</sup> <a name="eksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksIntegrationEnabled"></a>

```typescript
public readonly eksIntegrationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eksSecretAccessKey`<sup>Required</sup> <a name="eksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.eksSecretAccessKey"></a>

```typescript
public readonly eksSecretAccessKey: string;
```

- *Type:* string

---

##### `elasticsearchAws`<sup>Required</sup> <a name="elasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAws"></a>

```typescript
public readonly elasticsearchAws: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchAwsAccessKey`<sup>Required</sup> <a name="elasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsAccessKey"></a>

```typescript
public readonly elasticsearchAwsAccessKey: string;
```

- *Type:* string

---

##### `elasticsearchAwsRegion`<sup>Required</sup> <a name="elasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsRegion"></a>

```typescript
public readonly elasticsearchAwsRegion: string;
```

- *Type:* string

---

##### `elasticsearchAwsSecretAccessKey`<sup>Required</sup> <a name="elasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchAwsSecretAccessKey"></a>

```typescript
public readonly elasticsearchAwsSecretAccessKey: string;
```

- *Type:* string

---

##### `elasticsearchIndexedFieldLengthLimit`<sup>Required</sup> <a name="elasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFieldLengthLimit"></a>

```typescript
public readonly elasticsearchIndexedFieldLengthLimit: number;
```

- *Type:* number

---

##### `elasticsearchIndexedFileSizeLimitKb`<sup>Required</sup> <a name="elasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexedFileSizeLimitKb"></a>

```typescript
public readonly elasticsearchIndexedFileSizeLimitKb: number;
```

- *Type:* number

---

##### `elasticsearchIndexing`<sup>Required</sup> <a name="elasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchIndexing"></a>

```typescript
public readonly elasticsearchIndexing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchLimitIndexing`<sup>Required</sup> <a name="elasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchLimitIndexing"></a>

```typescript
public readonly elasticsearchLimitIndexing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchMaxBulkConcurrency`<sup>Required</sup> <a name="elasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkConcurrency"></a>

```typescript
public readonly elasticsearchMaxBulkConcurrency: number;
```

- *Type:* number

---

##### `elasticsearchMaxBulkSizeMb`<sup>Required</sup> <a name="elasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxBulkSizeMb"></a>

```typescript
public readonly elasticsearchMaxBulkSizeMb: number;
```

- *Type:* number

---

##### `elasticsearchMaxCodeIndexingConcurrency`<sup>Required</sup> <a name="elasticsearchMaxCodeIndexingConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchMaxCodeIndexingConcurrency"></a>

```typescript
public readonly elasticsearchMaxCodeIndexingConcurrency: number;
```

- *Type:* number

---

##### `elasticsearchNamespaceIds`<sup>Required</sup> <a name="elasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchNamespaceIds"></a>

```typescript
public readonly elasticsearchNamespaceIds: number[];
```

- *Type:* number[]

---

##### `elasticsearchPassword`<sup>Required</sup> <a name="elasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchPassword"></a>

```typescript
public readonly elasticsearchPassword: string;
```

- *Type:* string

---

##### `elasticsearchProjectIds`<sup>Required</sup> <a name="elasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchProjectIds"></a>

```typescript
public readonly elasticsearchProjectIds: number[];
```

- *Type:* number[]

---

##### `elasticsearchRequeueWorkers`<sup>Required</sup> <a name="elasticsearchRequeueWorkers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchRequeueWorkers"></a>

```typescript
public readonly elasticsearchRequeueWorkers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchSearch`<sup>Required</sup> <a name="elasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchSearch"></a>

```typescript
public readonly elasticsearchSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `elasticsearchUrl`<sup>Required</sup> <a name="elasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUrl"></a>

```typescript
public readonly elasticsearchUrl: string[];
```

- *Type:* string[]

---

##### `elasticsearchUsername`<sup>Required</sup> <a name="elasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchUsername"></a>

```typescript
public readonly elasticsearchUsername: string;
```

- *Type:* string

---

##### `elasticsearchWorkerNumberOfShards`<sup>Required</sup> <a name="elasticsearchWorkerNumberOfShards" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.elasticsearchWorkerNumberOfShards"></a>

```typescript
public readonly elasticsearchWorkerNumberOfShards: number;
```

- *Type:* number

---

##### `emailAdditionalText`<sup>Required</sup> <a name="emailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAdditionalText"></a>

```typescript
public readonly emailAdditionalText: string;
```

- *Type:* string

---

##### `emailAuthorInBody`<sup>Required</sup> <a name="emailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailAuthorInBody"></a>

```typescript
public readonly emailAuthorInBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `emailConfirmationSetting`<sup>Required</sup> <a name="emailConfirmationSetting" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.emailConfirmationSetting"></a>

```typescript
public readonly emailConfirmationSetting: string;
```

- *Type:* string

---

##### `enableArtifactExternalRedirectWarningPage`<sup>Required</sup> <a name="enableArtifactExternalRedirectWarningPage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enableArtifactExternalRedirectWarningPage"></a>

```typescript
public readonly enableArtifactExternalRedirectWarningPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledGitAccessProtocol`<sup>Required</sup> <a name="enabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enabledGitAccessProtocol"></a>

```typescript
public readonly enabledGitAccessProtocol: string;
```

- *Type:* string

---

##### `enforceNamespaceStorageLimit`<sup>Required</sup> <a name="enforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceNamespaceStorageLimit"></a>

```typescript
public readonly enforceNamespaceStorageLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceTerms`<sup>Required</sup> <a name="enforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.enforceTerms"></a>

```typescript
public readonly enforceTerms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalAuthClientCert`<sup>Required</sup> <a name="externalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientCert"></a>

```typescript
public readonly externalAuthClientCert: string;
```

- *Type:* string

---

##### `externalAuthClientKey`<sup>Required</sup> <a name="externalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKey"></a>

```typescript
public readonly externalAuthClientKey: string;
```

- *Type:* string

---

##### `externalAuthClientKeyPass`<sup>Required</sup> <a name="externalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthClientKeyPass"></a>

```typescript
public readonly externalAuthClientKeyPass: string;
```

- *Type:* string

---

##### `externalAuthorizationServiceDefaultLabel`<sup>Required</sup> <a name="externalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceDefaultLabel"></a>

```typescript
public readonly externalAuthorizationServiceDefaultLabel: string;
```

- *Type:* string

---

##### `externalAuthorizationServiceEnabled`<sup>Required</sup> <a name="externalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceEnabled"></a>

```typescript
public readonly externalAuthorizationServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalAuthorizationServiceTimeout`<sup>Required</sup> <a name="externalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceTimeout"></a>

```typescript
public readonly externalAuthorizationServiceTimeout: number;
```

- *Type:* number

---

##### `externalAuthorizationServiceUrl`<sup>Required</sup> <a name="externalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalAuthorizationServiceUrl"></a>

```typescript
public readonly externalAuthorizationServiceUrl: string;
```

- *Type:* string

---

##### `externalPipelineValidationServiceTimeout`<sup>Required</sup> <a name="externalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceTimeout"></a>

```typescript
public readonly externalPipelineValidationServiceTimeout: number;
```

- *Type:* number

---

##### `externalPipelineValidationServiceToken`<sup>Required</sup> <a name="externalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceToken"></a>

```typescript
public readonly externalPipelineValidationServiceToken: string;
```

- *Type:* string

---

##### `externalPipelineValidationServiceUrl`<sup>Required</sup> <a name="externalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.externalPipelineValidationServiceUrl"></a>

```typescript
public readonly externalPipelineValidationServiceUrl: string;
```

- *Type:* string

---

##### `failedLoginAttemptsUnlockPeriodInMinutes`<sup>Required</sup> <a name="failedLoginAttemptsUnlockPeriodInMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.failedLoginAttemptsUnlockPeriodInMinutes"></a>

```typescript
public readonly failedLoginAttemptsUnlockPeriodInMinutes: number;
```

- *Type:* number

---

##### `fileTemplateProjectId`<sup>Required</sup> <a name="fileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.fileTemplateProjectId"></a>

```typescript
public readonly fileTemplateProjectId: number;
```

- *Type:* number

---

##### `firstDayOfWeek`<sup>Required</sup> <a name="firstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.firstDayOfWeek"></a>

```typescript
public readonly firstDayOfWeek: number;
```

- *Type:* number

---

##### `geoNodeAllowedIps`<sup>Required</sup> <a name="geoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoNodeAllowedIps"></a>

```typescript
public readonly geoNodeAllowedIps: string;
```

- *Type:* string

---

##### `geoStatusTimeout`<sup>Required</sup> <a name="geoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.geoStatusTimeout"></a>

```typescript
public readonly geoStatusTimeout: number;
```

- *Type:* number

---

##### `gitalyTimeoutDefault`<sup>Required</sup> <a name="gitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutDefault"></a>

```typescript
public readonly gitalyTimeoutDefault: number;
```

- *Type:* number

---

##### `gitalyTimeoutFast`<sup>Required</sup> <a name="gitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutFast"></a>

```typescript
public readonly gitalyTimeoutFast: number;
```

- *Type:* number

---

##### `gitalyTimeoutMedium`<sup>Required</sup> <a name="gitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitalyTimeoutMedium"></a>

```typescript
public readonly gitalyTimeoutMedium: number;
```

- *Type:* number

---

##### `gitlabShellOperationLimit`<sup>Required</sup> <a name="gitlabShellOperationLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitlabShellOperationLimit"></a>

```typescript
public readonly gitlabShellOperationLimit: number;
```

- *Type:* number

---

##### `gitpodEnabled`<sup>Required</sup> <a name="gitpodEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodEnabled"></a>

```typescript
public readonly gitpodEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitpodUrl`<sup>Required</sup> <a name="gitpodUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitpodUrl"></a>

```typescript
public readonly gitpodUrl: string;
```

- *Type:* string

---

##### `gitRateLimitUsersAlertlist`<sup>Required</sup> <a name="gitRateLimitUsersAlertlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAlertlist"></a>

```typescript
public readonly gitRateLimitUsersAlertlist: number[];
```

- *Type:* number[]

---

##### `gitRateLimitUsersAllowlist`<sup>Required</sup> <a name="gitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitRateLimitUsersAllowlist"></a>

```typescript
public readonly gitRateLimitUsersAllowlist: string[];
```

- *Type:* string[]

---

##### `gitTwoFactorSessionExpiry`<sup>Required</sup> <a name="gitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gitTwoFactorSessionExpiry"></a>

```typescript
public readonly gitTwoFactorSessionExpiry: number;
```

- *Type:* number

---

##### `globallyAllowedIps`<sup>Required</sup> <a name="globallyAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.globallyAllowedIps"></a>

```typescript
public readonly globallyAllowedIps: string;
```

- *Type:* string

---

##### `grafanaEnabled`<sup>Required</sup> <a name="grafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaEnabled"></a>

```typescript
public readonly grafanaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grafanaUrl`<sup>Required</sup> <a name="grafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.grafanaUrl"></a>

```typescript
public readonly grafanaUrl: string;
```

- *Type:* string

---

##### `gravatarEnabled`<sup>Required</sup> <a name="gravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.gravatarEnabled"></a>

```typescript
public readonly gravatarEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupOwnersCanManageDefaultBranchProtection`<sup>Required</sup> <a name="groupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.groupOwnersCanManageDefaultBranchProtection"></a>

```typescript
public readonly groupOwnersCanManageDefaultBranchProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hashedStorageEnabled`<sup>Required</sup> <a name="hashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hashedStorageEnabled"></a>

```typescript
public readonly hashedStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `helpPageHideCommercialContent`<sup>Required</sup> <a name="helpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageHideCommercialContent"></a>

```typescript
public readonly helpPageHideCommercialContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `helpPageSupportUrl`<sup>Required</sup> <a name="helpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageSupportUrl"></a>

```typescript
public readonly helpPageSupportUrl: string;
```

- *Type:* string

---

##### `helpPageText`<sup>Required</sup> <a name="helpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpPageText"></a>

```typescript
public readonly helpPageText: string;
```

- *Type:* string

---

##### `helpText`<sup>Required</sup> <a name="helpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.helpText"></a>

```typescript
public readonly helpText: string;
```

- *Type:* string

---

##### `hideThirdPartyOffers`<sup>Required</sup> <a name="hideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.hideThirdPartyOffers"></a>

```typescript
public readonly hideThirdPartyOffers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `homePageUrl`<sup>Required</sup> <a name="homePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.homePageUrl"></a>

```typescript
public readonly homePageUrl: string;
```

- *Type:* string

---

##### `housekeepingEnabled`<sup>Required</sup> <a name="housekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingEnabled"></a>

```typescript
public readonly housekeepingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `housekeepingFullRepackPeriod`<sup>Required</sup> <a name="housekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingFullRepackPeriod"></a>

```typescript
public readonly housekeepingFullRepackPeriod: number;
```

- *Type:* number

---

##### `housekeepingGcPeriod`<sup>Required</sup> <a name="housekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingGcPeriod"></a>

```typescript
public readonly housekeepingGcPeriod: number;
```

- *Type:* number

---

##### `housekeepingIncrementalRepackPeriod`<sup>Required</sup> <a name="housekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingIncrementalRepackPeriod"></a>

```typescript
public readonly housekeepingIncrementalRepackPeriod: number;
```

- *Type:* number

---

##### `housekeepingOptimizeRepositoryPeriod`<sup>Required</sup> <a name="housekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.housekeepingOptimizeRepositoryPeriod"></a>

```typescript
public readonly housekeepingOptimizeRepositoryPeriod: number;
```

- *Type:* number

---

##### `htmlEmailsEnabled`<sup>Required</sup> <a name="htmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.htmlEmailsEnabled"></a>

```typescript
public readonly htmlEmailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importSources`<sup>Required</sup> <a name="importSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.importSources"></a>

```typescript
public readonly importSources: string[];
```

- *Type:* string[]

---

##### `inactiveProjectsDeleteAfterMonths`<sup>Required</sup> <a name="inactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsDeleteAfterMonths"></a>

```typescript
public readonly inactiveProjectsDeleteAfterMonths: number;
```

- *Type:* number

---

##### `inactiveProjectsMinSizeMb`<sup>Required</sup> <a name="inactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsMinSizeMb"></a>

```typescript
public readonly inactiveProjectsMinSizeMb: number;
```

- *Type:* number

---

##### `inactiveProjectsSendWarningEmailAfterMonths`<sup>Required</sup> <a name="inactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```typescript
public readonly inactiveProjectsSendWarningEmailAfterMonths: number;
```

- *Type:* number

---

##### `includeOptionalMetricsInServicePing`<sup>Required</sup> <a name="includeOptionalMetricsInServicePing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.includeOptionalMetricsInServicePing"></a>

```typescript
public readonly includeOptionalMetricsInServicePing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inProductMarketingEmailsEnabled`<sup>Required</sup> <a name="inProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.inProductMarketingEmailsEnabled"></a>

```typescript
public readonly inProductMarketingEmailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `invisibleCaptchaEnabled`<sup>Required</sup> <a name="invisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.invisibleCaptchaEnabled"></a>

```typescript
public readonly invisibleCaptchaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuesCreateLimit`<sup>Required</sup> <a name="issuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.issuesCreateLimit"></a>

```typescript
public readonly issuesCreateLimit: number;
```

- *Type:* number

---

##### `jiraConnectApplicationKey`<sup>Required</sup> <a name="jiraConnectApplicationKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectApplicationKey"></a>

```typescript
public readonly jiraConnectApplicationKey: string;
```

- *Type:* string

---

##### `jiraConnectProxyUrl`<sup>Required</sup> <a name="jiraConnectProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectProxyUrl"></a>

```typescript
public readonly jiraConnectProxyUrl: string;
```

- *Type:* string

---

##### `jiraConnectPublicKeyStorageEnabled`<sup>Required</sup> <a name="jiraConnectPublicKeyStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.jiraConnectPublicKeyStorageEnabled"></a>

```typescript
public readonly jiraConnectPublicKeyStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepLatestArtifact`<sup>Required</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.keepLatestArtifact"></a>

```typescript
public readonly keepLatestArtifact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localMarkdownVersion`<sup>Required</sup> <a name="localMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.localMarkdownVersion"></a>

```typescript
public readonly localMarkdownVersion: number;
```

- *Type:* number

---

##### `lockDuoFeaturesEnabled`<sup>Required</sup> <a name="lockDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.lockDuoFeaturesEnabled"></a>

```typescript
public readonly lockDuoFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailgunEventsEnabled`<sup>Required</sup> <a name="mailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunEventsEnabled"></a>

```typescript
public readonly mailgunEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mailgunSigningKey`<sup>Required</sup> <a name="mailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mailgunSigningKey"></a>

```typescript
public readonly mailgunSigningKey: string;
```

- *Type:* string

---

##### `maintenanceMode`<sup>Required</sup> <a name="maintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceMode"></a>

```typescript
public readonly maintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maintenanceModeMessage`<sup>Required</sup> <a name="maintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maintenanceModeMessage"></a>

```typescript
public readonly maintenanceModeMessage: string;
```

- *Type:* string

---

##### `mavenPackageRequestsForwarding`<sup>Required</sup> <a name="mavenPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mavenPackageRequestsForwarding"></a>

```typescript
public readonly mavenPackageRequestsForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxArtifactsSize`<sup>Required</sup> <a name="maxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxArtifactsSize"></a>

```typescript
public readonly maxArtifactsSize: number;
```

- *Type:* number

---

##### `maxAttachmentSize`<sup>Required</sup> <a name="maxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxAttachmentSize"></a>

```typescript
public readonly maxAttachmentSize: number;
```

- *Type:* number

---

##### `maxDecompressedArchiveSize`<sup>Required</sup> <a name="maxDecompressedArchiveSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxDecompressedArchiveSize"></a>

```typescript
public readonly maxDecompressedArchiveSize: number;
```

- *Type:* number

---

##### `maxExportSize`<sup>Required</sup> <a name="maxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxExportSize"></a>

```typescript
public readonly maxExportSize: number;
```

- *Type:* number

---

##### `maxImportRemoteFileSize`<sup>Required</sup> <a name="maxImportRemoteFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportRemoteFileSize"></a>

```typescript
public readonly maxImportRemoteFileSize: number;
```

- *Type:* number

---

##### `maxImportSize`<sup>Required</sup> <a name="maxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxImportSize"></a>

```typescript
public readonly maxImportSize: number;
```

- *Type:* number

---

##### `maxLoginAttempts`<sup>Required</sup> <a name="maxLoginAttempts" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxLoginAttempts"></a>

```typescript
public readonly maxLoginAttempts: number;
```

- *Type:* number

---

##### `maxNumberOfRepositoryDownloads`<sup>Required</sup> <a name="maxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloads"></a>

```typescript
public readonly maxNumberOfRepositoryDownloads: number;
```

- *Type:* number

---

##### `maxNumberOfRepositoryDownloadsWithinTimePeriod`<sup>Required</sup> <a name="maxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```typescript
public readonly maxNumberOfRepositoryDownloadsWithinTimePeriod: number;
```

- *Type:* number

---

##### `maxPagesSize`<sup>Required</sup> <a name="maxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPagesSize"></a>

```typescript
public readonly maxPagesSize: number;
```

- *Type:* number

---

##### `maxPersonalAccessTokenLifetime`<sup>Required</sup> <a name="maxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxPersonalAccessTokenLifetime"></a>

```typescript
public readonly maxPersonalAccessTokenLifetime: number;
```

- *Type:* number

---

##### `maxSshKeyLifetime`<sup>Required</sup> <a name="maxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxSshKeyLifetime"></a>

```typescript
public readonly maxSshKeyLifetime: number;
```

- *Type:* number

---

##### `maxTerraformStateSizeBytes`<sup>Required</sup> <a name="maxTerraformStateSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.maxTerraformStateSizeBytes"></a>

```typescript
public readonly maxTerraformStateSizeBytes: number;
```

- *Type:* number

---

##### `metricsMethodCallThreshold`<sup>Required</sup> <a name="metricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.metricsMethodCallThreshold"></a>

```typescript
public readonly metricsMethodCallThreshold: number;
```

- *Type:* number

---

##### `minimumPasswordLength`<sup>Required</sup> <a name="minimumPasswordLength" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: number;
```

- *Type:* number

---

##### `mirrorAvailable`<sup>Required</sup> <a name="mirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorAvailable"></a>

```typescript
public readonly mirrorAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirrorCapacityThreshold`<sup>Required</sup> <a name="mirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorCapacityThreshold"></a>

```typescript
public readonly mirrorCapacityThreshold: number;
```

- *Type:* number

---

##### `mirrorMaxCapacity`<sup>Required</sup> <a name="mirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxCapacity"></a>

```typescript
public readonly mirrorMaxCapacity: number;
```

- *Type:* number

---

##### `mirrorMaxDelay`<sup>Required</sup> <a name="mirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.mirrorMaxDelay"></a>

```typescript
public readonly mirrorMaxDelay: number;
```

- *Type:* number

---

##### `npmPackageRequestsForwarding`<sup>Required</sup> <a name="npmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.npmPackageRequestsForwarding"></a>

```typescript
public readonly npmPackageRequestsForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nugetSkipMetadataUrlValidation`<sup>Required</sup> <a name="nugetSkipMetadataUrlValidation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.nugetSkipMetadataUrlValidation"></a>

```typescript
public readonly nugetSkipMetadataUrlValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `outboundLocalRequestsWhitelist`<sup>Required</sup> <a name="outboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.outboundLocalRequestsWhitelist"></a>

```typescript
public readonly outboundLocalRequestsWhitelist: string[];
```

- *Type:* string[]

---

##### `packageMetadataPurlTypes`<sup>Required</sup> <a name="packageMetadataPurlTypes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageMetadataPurlTypes"></a>

```typescript
public readonly packageMetadataPurlTypes: number[];
```

- *Type:* number[]

---

##### `packageRegistryAllowAnyoneToPullOption`<sup>Required</sup> <a name="packageRegistryAllowAnyoneToPullOption" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryAllowAnyoneToPullOption"></a>

```typescript
public readonly packageRegistryAllowAnyoneToPullOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packageRegistryCleanupPoliciesWorkerCapacity`<sup>Required</sup> <a name="packageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```typescript
public readonly packageRegistryCleanupPoliciesWorkerCapacity: number;
```

- *Type:* number

---

##### `pagesDomainVerificationEnabled`<sup>Required</sup> <a name="pagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pagesDomainVerificationEnabled"></a>

```typescript
public readonly pagesDomainVerificationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordAuthenticationEnabledForGit`<sup>Required</sup> <a name="passwordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForGit"></a>

```typescript
public readonly passwordAuthenticationEnabledForGit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordAuthenticationEnabledForWeb`<sup>Required</sup> <a name="passwordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordAuthenticationEnabledForWeb"></a>

```typescript
public readonly passwordAuthenticationEnabledForWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordLowercaseRequired`<sup>Required</sup> <a name="passwordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordLowercaseRequired"></a>

```typescript
public readonly passwordLowercaseRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordNumberRequired`<sup>Required</sup> <a name="passwordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordNumberRequired"></a>

```typescript
public readonly passwordNumberRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordSymbolRequired`<sup>Required</sup> <a name="passwordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordSymbolRequired"></a>

```typescript
public readonly passwordSymbolRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordUppercaseRequired`<sup>Required</sup> <a name="passwordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.passwordUppercaseRequired"></a>

```typescript
public readonly passwordUppercaseRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `performanceBarAllowedGroupPath`<sup>Required</sup> <a name="performanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.performanceBarAllowedGroupPath"></a>

```typescript
public readonly performanceBarAllowedGroupPath: string;
```

- *Type:* string

---

##### `personalAccessTokenPrefix`<sup>Required</sup> <a name="personalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.personalAccessTokenPrefix"></a>

```typescript
public readonly personalAccessTokenPrefix: string;
```

- *Type:* string

---

##### `pipelineLimitPerProjectUserSha`<sup>Required</sup> <a name="pipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pipelineLimitPerProjectUserSha"></a>

```typescript
public readonly pipelineLimitPerProjectUserSha: number;
```

- *Type:* number

---

##### `plantumlEnabled`<sup>Required</sup> <a name="plantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlEnabled"></a>

```typescript
public readonly plantumlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `plantumlUrl`<sup>Required</sup> <a name="plantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.plantumlUrl"></a>

```typescript
public readonly plantumlUrl: string;
```

- *Type:* string

---

##### `pollingIntervalMultiplier`<sup>Required</sup> <a name="pollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pollingIntervalMultiplier"></a>

```typescript
public readonly pollingIntervalMultiplier: number;
```

- *Type:* number

---

##### `projectExportEnabled`<sup>Required</sup> <a name="projectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectExportEnabled"></a>

```typescript
public readonly projectExportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectJobsApiRateLimit`<sup>Required</sup> <a name="projectJobsApiRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectJobsApiRateLimit"></a>

```typescript
public readonly projectJobsApiRateLimit: number;
```

- *Type:* number

---

##### `projectsApiRateLimitUnauthenticated`<sup>Required</sup> <a name="projectsApiRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.projectsApiRateLimitUnauthenticated"></a>

```typescript
public readonly projectsApiRateLimitUnauthenticated: number;
```

- *Type:* number

---

##### `prometheusMetricsEnabled`<sup>Required</sup> <a name="prometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.prometheusMetricsEnabled"></a>

```typescript
public readonly prometheusMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `protectedCiVariables`<sup>Required</sup> <a name="protectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.protectedCiVariables"></a>

```typescript
public readonly protectedCiVariables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushEventActivitiesLimit`<sup>Required</sup> <a name="pushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventActivitiesLimit"></a>

```typescript
public readonly pushEventActivitiesLimit: number;
```

- *Type:* number

---

##### `pushEventHooksLimit`<sup>Required</sup> <a name="pushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pushEventHooksLimit"></a>

```typescript
public readonly pushEventHooksLimit: number;
```

- *Type:* number

---

##### `pypiPackageRequestsForwarding`<sup>Required</sup> <a name="pypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.pypiPackageRequestsForwarding"></a>

```typescript
public readonly pypiPackageRequestsForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rateLimitingResponseText`<sup>Required</sup> <a name="rateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rateLimitingResponseText"></a>

```typescript
public readonly rateLimitingResponseText: string;
```

- *Type:* string

---

##### `rawBlobRequestLimit`<sup>Required</sup> <a name="rawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rawBlobRequestLimit"></a>

```typescript
public readonly rawBlobRequestLimit: number;
```

- *Type:* number

---

##### `recaptchaEnabled`<sup>Required</sup> <a name="recaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaEnabled"></a>

```typescript
public readonly recaptchaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recaptchaPrivateKey`<sup>Required</sup> <a name="recaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaPrivateKey"></a>

```typescript
public readonly recaptchaPrivateKey: string;
```

- *Type:* string

---

##### `recaptchaSiteKey`<sup>Required</sup> <a name="recaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.recaptchaSiteKey"></a>

```typescript
public readonly recaptchaSiteKey: string;
```

- *Type:* string

---

##### `receiveMaxInputSize`<sup>Required</sup> <a name="receiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receiveMaxInputSize"></a>

```typescript
public readonly receiveMaxInputSize: number;
```

- *Type:* number

---

##### `receptiveClusterAgentsEnabled`<sup>Required</sup> <a name="receptiveClusterAgentsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.receptiveClusterAgentsEnabled"></a>

```typescript
public readonly receptiveClusterAgentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rememberMeEnabled`<sup>Required</sup> <a name="rememberMeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rememberMeEnabled"></a>

```typescript
public readonly rememberMeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryChecksEnabled`<sup>Required</sup> <a name="repositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryChecksEnabled"></a>

```typescript
public readonly repositoryChecksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositorySizeLimit`<sup>Required</sup> <a name="repositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositorySizeLimit"></a>

```typescript
public readonly repositorySizeLimit: number;
```

- *Type:* number

---

##### `repositoryStorages`<sup>Required</sup> <a name="repositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStorages"></a>

```typescript
public readonly repositoryStorages: string[];
```

- *Type:* string[]

---

##### `repositoryStoragesWeighted`<sup>Required</sup> <a name="repositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.repositoryStoragesWeighted"></a>

```typescript
public readonly repositoryStoragesWeighted: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

---

##### `requireAdminApprovalAfterUserSignup`<sup>Required</sup> <a name="requireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminApprovalAfterUserSignup"></a>

```typescript
public readonly requireAdminApprovalAfterUserSignup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireAdminTwoFactorAuthentication`<sup>Required</sup> <a name="requireAdminTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireAdminTwoFactorAuthentication"></a>

```typescript
public readonly requireAdminTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requirePersonalAccessTokenExpiry`<sup>Required</sup> <a name="requirePersonalAccessTokenExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requirePersonalAccessTokenExpiry"></a>

```typescript
public readonly requirePersonalAccessTokenExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireTwoFactorAuthentication`<sup>Required</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.requireTwoFactorAuthentication"></a>

```typescript
public readonly requireTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictedVisibilityLevels`<sup>Required</sup> <a name="restrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.restrictedVisibilityLevels"></a>

```typescript
public readonly restrictedVisibilityLevels: string[];
```

- *Type:* string[]

---

##### `rsaKeyRestriction`<sup>Required</sup> <a name="rsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.rsaKeyRestriction"></a>

```typescript
public readonly rsaKeyRestriction: number;
```

- *Type:* number

---

##### `searchRateLimit`<sup>Required</sup> <a name="searchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimit"></a>

```typescript
public readonly searchRateLimit: number;
```

- *Type:* number

---

##### `searchRateLimitUnauthenticated`<sup>Required</sup> <a name="searchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.searchRateLimitUnauthenticated"></a>

```typescript
public readonly searchRateLimitUnauthenticated: number;
```

- *Type:* number

---

##### `securityApprovalPoliciesLimit`<sup>Required</sup> <a name="securityApprovalPoliciesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityApprovalPoliciesLimit"></a>

```typescript
public readonly securityApprovalPoliciesLimit: number;
```

- *Type:* number

---

##### `securityPolicyGlobalGroupApproversEnabled`<sup>Required</sup> <a name="securityPolicyGlobalGroupApproversEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityPolicyGlobalGroupApproversEnabled"></a>

```typescript
public readonly securityPolicyGlobalGroupApproversEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityTxtContent`<sup>Required</sup> <a name="securityTxtContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.securityTxtContent"></a>

```typescript
public readonly securityTxtContent: string;
```

- *Type:* string

---

##### `sendUserConfirmationEmail`<sup>Required</sup> <a name="sendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sendUserConfirmationEmail"></a>

```typescript
public readonly sendUserConfirmationEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccessTokensExpirationEnforced`<sup>Required</sup> <a name="serviceAccessTokensExpirationEnforced" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.serviceAccessTokensExpirationEnforced"></a>

```typescript
public readonly serviceAccessTokensExpirationEnforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sessionExpireDelay`<sup>Required</sup> <a name="sessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sessionExpireDelay"></a>

```typescript
public readonly sessionExpireDelay: number;
```

- *Type:* number

---

##### `sharedRunnersEnabled`<sup>Required</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersEnabled"></a>

```typescript
public readonly sharedRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedRunnersMinutes`<sup>Required</sup> <a name="sharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersMinutes"></a>

```typescript
public readonly sharedRunnersMinutes: number;
```

- *Type:* number

---

##### `sharedRunnersText`<sup>Required</sup> <a name="sharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sharedRunnersText"></a>

```typescript
public readonly sharedRunnersText: string;
```

- *Type:* string

---

##### `sidekiqJobLimiterCompressionThresholdBytes`<sup>Required</sup> <a name="sidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```typescript
public readonly sidekiqJobLimiterCompressionThresholdBytes: number;
```

- *Type:* number

---

##### `sidekiqJobLimiterLimitBytes`<sup>Required</sup> <a name="sidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterLimitBytes"></a>

```typescript
public readonly sidekiqJobLimiterLimitBytes: number;
```

- *Type:* number

---

##### `sidekiqJobLimiterMode`<sup>Required</sup> <a name="sidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sidekiqJobLimiterMode"></a>

```typescript
public readonly sidekiqJobLimiterMode: string;
```

- *Type:* string

---

##### `signInText`<sup>Required</sup> <a name="signInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signInText"></a>

```typescript
public readonly signInText: string;
```

- *Type:* string

---

##### `signupEnabled`<sup>Required</sup> <a name="signupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.signupEnabled"></a>

```typescript
public readonly signupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `silentAdminExportsEnabled`<sup>Required</sup> <a name="silentAdminExportsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentAdminExportsEnabled"></a>

```typescript
public readonly silentAdminExportsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `silentModeEnabled`<sup>Required</sup> <a name="silentModeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.silentModeEnabled"></a>

```typescript
public readonly silentModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slackAppEnabled`<sup>Required</sup> <a name="slackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppEnabled"></a>

```typescript
public readonly slackAppEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `slackAppId`<sup>Required</sup> <a name="slackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppId"></a>

```typescript
public readonly slackAppId: string;
```

- *Type:* string

---

##### `slackAppSecret`<sup>Required</sup> <a name="slackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSecret"></a>

```typescript
public readonly slackAppSecret: string;
```

- *Type:* string

---

##### `slackAppSigningSecret`<sup>Required</sup> <a name="slackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppSigningSecret"></a>

```typescript
public readonly slackAppSigningSecret: string;
```

- *Type:* string

---

##### `slackAppVerificationToken`<sup>Required</sup> <a name="slackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.slackAppVerificationToken"></a>

```typescript
public readonly slackAppVerificationToken: string;
```

- *Type:* string

---

##### `snippetSizeLimit`<sup>Required</sup> <a name="snippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snippetSizeLimit"></a>

```typescript
public readonly snippetSizeLimit: number;
```

- *Type:* number

---

##### `snowplowAppId`<sup>Required</sup> <a name="snowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowAppId"></a>

```typescript
public readonly snowplowAppId: string;
```

- *Type:* string

---

##### `snowplowCollectorHostname`<sup>Required</sup> <a name="snowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCollectorHostname"></a>

```typescript
public readonly snowplowCollectorHostname: string;
```

- *Type:* string

---

##### `snowplowCookieDomain`<sup>Required</sup> <a name="snowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowCookieDomain"></a>

```typescript
public readonly snowplowCookieDomain: string;
```

- *Type:* string

---

##### `snowplowDatabaseCollectorHostname`<sup>Required</sup> <a name="snowplowDatabaseCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowDatabaseCollectorHostname"></a>

```typescript
public readonly snowplowDatabaseCollectorHostname: string;
```

- *Type:* string

---

##### `snowplowEnabled`<sup>Required</sup> <a name="snowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.snowplowEnabled"></a>

```typescript
public readonly snowplowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcegraphEnabled`<sup>Required</sup> <a name="sourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphEnabled"></a>

```typescript
public readonly sourcegraphEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcegraphPublicOnly`<sup>Required</sup> <a name="sourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphPublicOnly"></a>

```typescript
public readonly sourcegraphPublicOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourcegraphUrl`<sup>Required</sup> <a name="sourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.sourcegraphUrl"></a>

```typescript
public readonly sourcegraphUrl: string;
```

- *Type:* string

---

##### `spamCheckApiKey`<sup>Required</sup> <a name="spamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckApiKey"></a>

```typescript
public readonly spamCheckApiKey: string;
```

- *Type:* string

---

##### `spamCheckEndpointEnabled`<sup>Required</sup> <a name="spamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointEnabled"></a>

```typescript
public readonly spamCheckEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `spamCheckEndpointUrl`<sup>Required</sup> <a name="spamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.spamCheckEndpointUrl"></a>

```typescript
public readonly spamCheckEndpointUrl: string;
```

- *Type:* string

---

##### `staticObjectsExternalStorageAuthToken`<sup>Required</sup> <a name="staticObjectsExternalStorageAuthToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageAuthToken"></a>

```typescript
public readonly staticObjectsExternalStorageAuthToken: string;
```

- *Type:* string

---

##### `staticObjectsExternalStorageUrl`<sup>Required</sup> <a name="staticObjectsExternalStorageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.staticObjectsExternalStorageUrl"></a>

```typescript
public readonly staticObjectsExternalStorageUrl: string;
```

- *Type:* string

---

##### `suggestPipelineEnabled`<sup>Required</sup> <a name="suggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.suggestPipelineEnabled"></a>

```typescript
public readonly suggestPipelineEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `terminalMaxSessionTime`<sup>Required</sup> <a name="terminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terminalMaxSessionTime"></a>

```typescript
public readonly terminalMaxSessionTime: number;
```

- *Type:* number

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.terms"></a>

```typescript
public readonly terms: string;
```

- *Type:* string

---

##### `throttleAuthenticatedApiEnabled`<sup>Required</sup> <a name="throttleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiEnabled"></a>

```typescript
public readonly throttleAuthenticatedApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleAuthenticatedApiPeriodInSeconds`<sup>Required</sup> <a name="throttleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```typescript
public readonly throttleAuthenticatedApiPeriodInSeconds: number;
```

- *Type:* number

---

##### `throttleAuthenticatedApiRequestsPerPeriod`<sup>Required</sup> <a name="throttleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```typescript
public readonly throttleAuthenticatedApiRequestsPerPeriod: number;
```

- *Type:* number

---

##### `throttleAuthenticatedPackagesApiEnabled`<sup>Required</sup> <a name="throttleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiEnabled"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleAuthenticatedPackagesApiPeriodInSeconds`<sup>Required</sup> <a name="throttleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiPeriodInSeconds: number;
```

- *Type:* number

---

##### `throttleAuthenticatedPackagesApiRequestsPerPeriod`<sup>Required</sup> <a name="throttleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiRequestsPerPeriod: number;
```

- *Type:* number

---

##### `throttleAuthenticatedWebEnabled`<sup>Required</sup> <a name="throttleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebEnabled"></a>

```typescript
public readonly throttleAuthenticatedWebEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleAuthenticatedWebPeriodInSeconds`<sup>Required</sup> <a name="throttleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```typescript
public readonly throttleAuthenticatedWebPeriodInSeconds: number;
```

- *Type:* number

---

##### `throttleAuthenticatedWebRequestsPerPeriod`<sup>Required</sup> <a name="throttleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```typescript
public readonly throttleAuthenticatedWebRequestsPerPeriod: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedApiEnabled`<sup>Required</sup> <a name="throttleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiEnabled"></a>

```typescript
public readonly throttleUnauthenticatedApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleUnauthenticatedApiPeriodInSeconds`<sup>Required</sup> <a name="throttleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```typescript
public readonly throttleUnauthenticatedApiPeriodInSeconds: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedApiRequestsPerPeriod`<sup>Required</sup> <a name="throttleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```typescript
public readonly throttleUnauthenticatedApiRequestsPerPeriod: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedPackagesApiEnabled`<sup>Required</sup> <a name="throttleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleUnauthenticatedPackagesApiPeriodInSeconds`<sup>Required</sup> <a name="throttleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiPeriodInSeconds: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedPackagesApiRequestsPerPeriod`<sup>Required</sup> <a name="throttleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiRequestsPerPeriod: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedWebEnabled`<sup>Required</sup> <a name="throttleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebEnabled"></a>

```typescript
public readonly throttleUnauthenticatedWebEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `throttleUnauthenticatedWebPeriodInSeconds`<sup>Required</sup> <a name="throttleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```typescript
public readonly throttleUnauthenticatedWebPeriodInSeconds: number;
```

- *Type:* number

---

##### `throttleUnauthenticatedWebRequestsPerPeriod`<sup>Required</sup> <a name="throttleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```typescript
public readonly throttleUnauthenticatedWebRequestsPerPeriod: number;
```

- *Type:* number

---

##### `timeTrackingLimitToHours`<sup>Required</sup> <a name="timeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.timeTrackingLimitToHours"></a>

```typescript
public readonly timeTrackingLimitToHours: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `twoFactorGracePeriod`<sup>Required</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.twoFactorGracePeriod"></a>

```typescript
public readonly twoFactorGracePeriod: number;
```

- *Type:* number

---

##### `unconfirmedUsersDeleteAfterDays`<sup>Required</sup> <a name="unconfirmedUsersDeleteAfterDays" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.unconfirmedUsersDeleteAfterDays"></a>

```typescript
public readonly unconfirmedUsersDeleteAfterDays: number;
```

- *Type:* number

---

##### `uniqueIpsLimitEnabled`<sup>Required</sup> <a name="uniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitEnabled"></a>

```typescript
public readonly uniqueIpsLimitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uniqueIpsLimitPerUser`<sup>Required</sup> <a name="uniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitPerUser"></a>

```typescript
public readonly uniqueIpsLimitPerUser: number;
```

- *Type:* number

---

##### `uniqueIpsLimitTimeWindow`<sup>Required</sup> <a name="uniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.uniqueIpsLimitTimeWindow"></a>

```typescript
public readonly uniqueIpsLimitTimeWindow: number;
```

- *Type:* number

---

##### `updateRunnerVersionsEnabled`<sup>Required</sup> <a name="updateRunnerVersionsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.updateRunnerVersionsEnabled"></a>

```typescript
public readonly updateRunnerVersionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usagePingEnabled`<sup>Required</sup> <a name="usagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.usagePingEnabled"></a>

```typescript
public readonly usagePingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useClickhouseForAnalytics`<sup>Required</sup> <a name="useClickhouseForAnalytics" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.useClickhouseForAnalytics"></a>

```typescript
public readonly useClickhouseForAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDeactivationEmailsEnabled`<sup>Required</sup> <a name="userDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDeactivationEmailsEnabled"></a>

```typescript
public readonly userDeactivationEmailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDefaultExternal`<sup>Required</sup> <a name="userDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultExternal"></a>

```typescript
public readonly userDefaultExternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userDefaultInternalRegex`<sup>Required</sup> <a name="userDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultInternalRegex"></a>

```typescript
public readonly userDefaultInternalRegex: string;
```

- *Type:* string

---

##### `userDefaultsToPrivateProfile`<sup>Required</sup> <a name="userDefaultsToPrivateProfile" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userDefaultsToPrivateProfile"></a>

```typescript
public readonly userDefaultsToPrivateProfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userOauthApplications`<sup>Required</sup> <a name="userOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userOauthApplications"></a>

```typescript
public readonly userOauthApplications: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userShowAddSshKeyMessage`<sup>Required</sup> <a name="userShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.userShowAddSshKeyMessage"></a>

```typescript
public readonly userShowAddSshKeyMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validRunnerRegistrars`<sup>Required</sup> <a name="validRunnerRegistrars" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.validRunnerRegistrars"></a>

```typescript
public readonly validRunnerRegistrars: string[];
```

- *Type:* string[]

---

##### `versionCheckEnabled`<sup>Required</sup> <a name="versionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.versionCheckEnabled"></a>

```typescript
public readonly versionCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webIdeClientsidePreviewEnabled`<sup>Required</sup> <a name="webIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.webIdeClientsidePreviewEnabled"></a>

```typescript
public readonly webIdeClientsidePreviewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `whatsNewVariant`<sup>Required</sup> <a name="whatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.whatsNewVariant"></a>

```typescript
public readonly whatsNewVariant: string;
```

- *Type:* string

---

##### `wikiPageMaxContentBytes`<sup>Required</sup> <a name="wikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.wikiPageMaxContentBytes"></a>

```typescript
public readonly wikiPageMaxContentBytes: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationSettingsConfig <a name="ApplicationSettingsConfig" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

const applicationSettingsConfig: applicationSettings.ApplicationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail">abuseNotificationEmail</a></code> | <code>string</code> | If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode">adminMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require administrators to enable Admin Mode by re-authenticating for administrative tasks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath">afterSignOutPath</a></code> | <code>string</code> | Where to redirect users after logout. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText">afterSignUpText</a></code> | <code>string</code> | Text shown to the user after signing up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey">akismetApiKey</a></code> | <code>string</code> | API key for Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled">akismetEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowAccountDeletion">allowAccountDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to allow users to delete their accounts. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap">allowGroupOwnersToManageLdap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to allow group owners to manage LDAP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks">allowLocalRequestsFromSystemHooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow requests to the local network from system hooks. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices">allowLocalRequestsFromWebHooksAndServices</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow requests to the local network from web hooks and services. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowProjectCreationForGuestAndBelow">allowProjectCreationForGuestAndBelow</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether users assigned up to the Guest role can create groups and personal projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowRunnerRegistrationToken">allowRunnerRegistrationToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow using a registration token to create a runner. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable">archiveBuildsInHumanReadable</a></code> | <code>string</code> | Set the duration for which the jobs are considered as old and expired. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.asciidocMaxIncludes">asciidocMaxIncludes</a></code> | <code>number</code> | Maximum limit of AsciiDoc include directives being processed in any one document. Maximum: 64. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist">assetProxyAllowlist</a></code> | <code>string[]</code> | Assets that match these domains are not proxied. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled">assetProxyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey">assetProxySecretKey</a></code> | <code>string</code> | Shared secret with the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl">assetProxyUrl</a></code> | <code>string</code> | URL of the asset proxy server. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled">authorizedKeysEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | By default, we write to the authorized_keys file to support Git over SSH without additional configuration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoBanUserOnExcessiveProjectsDownload">autoBanUserOnExcessiveProjectsDownload</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, users will get automatically banned from the application when they download more than the maximum number of unique projects in the time period specified by max_number_of_repository_downloads and max_number_of_repository_downloads_within_time_period respectively. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain">autoDevopsDomain</a></code> | <code>string</code> | Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Auto DevOps for projects by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation">automaticPurchasedStorageAllocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabling this permits automatic allocation of purchased storage in a namespace. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportConcurrentPipelineBatchLimit">bulkImportConcurrentPipelineBatchLimit</a></code> | <code>number</code> | Maximum simultaneous Direct Transfer batches to process. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportEnabled">bulkImportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable migrating GitLab groups by direct transfer. Introduced in GitLab 15.8. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportMaxDownloadFileSize">bulkImportMaxDownloadFileSize</a></code> | <code>number</code> | Maximum download file size when importing from source GitLab instances by direct transfer. Introduced in GitLab 16.3. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup">canCreateGroup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether users can create top-level groups. Introduced in GitLab 15.5. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan">checkNamespacePlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxIncludes">ciMaxIncludes</a></code> | <code>number</code> | The maximum number of includes per pipeline. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxTotalYamlSizeBytes">ciMaxTotalYamlSizeBytes</a></code> | <code>number</code> | The maximum amount of memory, in bytes, that can be allocated for the pipeline configuration, with all included YAML configuration files. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname">commitEmailHostname</a></code> | <code>string</code> | Custom hostname (for private commit emails). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketImportJobsLimit">concurrentBitbucketImportJobsLimit</a></code> | <code>number</code> | Maximum number of simultaneous import jobs for the Bitbucket Cloud importer. Introduced in GitLab 16.11. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketServerImportJobsLimit">concurrentBitbucketServerImportJobsLimit</a></code> | <code>number</code> | Maximum number of simultaneous import jobs for the Bitbucket Server importer. Introduced in GitLab 16.11. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentGithubImportJobsLimit">concurrentGithubImportJobsLimit</a></code> | <code>number</code> | Maximum number of simultaneous import jobs for the GitHub importer. Introduced in GitLab 16.11. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries">containerExpirationPoliciesEnableHistoricEntries</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable cleanup policies for all projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize">containerRegistryCleanupTagsServiceMaxListSize</a></code> | <code>number</code> | The maximum number of tags that can be deleted in a single execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout">containerRegistryDeleteTagsServiceTimeout</a></code> | <code>number</code> | The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching">containerRegistryExpirationPoliciesCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Caching during the execution of cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity">containerRegistryExpirationPoliciesWorkerCapacity</a></code> | <code>number</code> | Number of workers for cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay">containerRegistryTokenExpireDelay</a></code> | <code>number</code> | Container Registry token duration in minutes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers">deactivateDormantUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable automatic deactivation of dormant users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsersPeriod">deactivateDormantUsersPeriod</a></code> | <code>number</code> | Length of time (in days) after which a user is considered dormant. Introduced in GitLab 15.3. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.decompressArchiveFileTimeout">decompressArchiveFileTimeout</a></code> | <code>number</code> | Default timeout for decompressing archived files, in seconds. Set to 0 to disable timeouts. Introduced in GitLab 16.4. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn">defaultArtifactsExpireIn</a></code> | <code>string</code> | Set the default expiration time for each job’s artifacts. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName">defaultBranchName</a></code> | <code>string</code> | Instance-level custom initial branch name (introduced in GitLab 13.2). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection">defaultBranchProtection</a></code> | <code>number</code> | Determine if developers can push to the default branch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtectionDefaults">defaultBranchProtectionDefaults</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a></code> | default_branch_protection_defaults block. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath">defaultCiConfigPath</a></code> | <code>string</code> | Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility">defaultGroupVisibility</a></code> | <code>string</code> | What visibility level new groups receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultPreferredLanguage">defaultPreferredLanguage</a></code> | <code>string</code> | Default preferred language for users who are not logged in. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation">defaultProjectCreation</a></code> | <code>number</code> | Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit">defaultProjectsLimit</a></code> | <code>number</code> | Project limit per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility">defaultProjectVisibility</a></code> | <code>string</code> | What visibility level new projects receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility">defaultSnippetVisibility</a></code> | <code>string</code> | What visibility level new snippets receive. Can take private, internal and public as a parameter. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSyntaxHighlightingTheme">defaultSyntaxHighlightingTheme</a></code> | <code>number</code> | Default syntax highlighting theme for users who are new or not signed in. See IDs of available themes (https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/themes.rb#L16). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects">deleteInactiveProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteUnconfirmedUsers">deleteUnconfirmedUsers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether users who have not confirmed their email should be deleted. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod">deletionAdjournedPeriod</a></code> | <code>number</code> | The number of days to wait before deleting a project or group that is marked for deletion. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetEnabled">diagramsnetEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires diagramsnet_url) Enable Diagrams.net integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetUrl">diagramsnetUrl</a></code> | <code>string</code> | The Diagrams.net instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles">diffMaxFiles</a></code> | <code>number</code> | Maximum files in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines">diffMaxLines</a></code> | <code>number</code> | Maximum lines in a diff. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes">diffMaxPatchBytes</a></code> | <code>number</code> | Maximum diff patch size, in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableAdminOauthScopes">disableAdminOauthScopes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Stops administrators from connecting their GitLab accounts to non-trusted OAuth 2.0 applications that have the api, read_api, read_repository, write_repository, read_registry, write_registry, or sudo scopes. Introduced in GitLab 15.6. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources">disabledOauthSignInSources</a></code> | <code>string[]</code> | Disabled OAuth sign-in sources. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken">disableFeedToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disablePersonalAccessTokens">disablePersonalAccessTokens</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable personal access tokens. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled">dnsRebindingProtectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enforce DNS rebinding attack protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist">domainAllowlist</a></code> | <code>string[]</code> | Force people to use only corporate emails for sign-up. Null means there is no restriction. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist">domainDenylist</a></code> | <code>string[]</code> | Users with email addresses that match these domains cannot sign up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled">domainDenylistEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.downstreamPipelineTriggerLimitPerProjectUserSha">downstreamPipelineTriggerLimitPerProjectUserSha</a></code> | <code>number</code> | Maximum downstream pipeline trigger rate. Introduced in GitLab 16.10. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction">dsaKeyRestriction</a></code> | <code>number</code> | The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.duoFeaturesEnabled">duoFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether GitLab Duo features are enabled for this instance. Introduced in GitLab 16.10. Self-managed, Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction">ecdsaKeyRestriction</a></code> | <code>number</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction">ecdsaSkKeyRestriction</a></code> | <code>number</code> | The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction">ed25519KeyRestriction</a></code> | <code>number</code> | The minimum allowed curve size (in bits) of an uploaded ED25519 key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction">ed25519SkKeyRestriction</a></code> | <code>number</code> | The minimum allowed curve size (in bits) of an uploaded ED25519_SK key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId">eksAccessKeyId</a></code> | <code>string</code> | AWS IAM access key ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId">eksAccountId</a></code> | <code>string</code> | Amazon account ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled">eksIntegrationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable integration with Amazon EKS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey">eksSecretAccessKey</a></code> | <code>string</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws">elasticsearchAws</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the use of AWS hosted Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey">elasticsearchAwsAccessKey</a></code> | <code>string</code> | AWS IAM access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion">elasticsearchAwsRegion</a></code> | <code>string</code> | The AWS region the Elasticsearch domain is configured. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey">elasticsearchAwsSecretAccessKey</a></code> | <code>string</code> | AWS IAM secret access key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit">elasticsearchIndexedFieldLengthLimit</a></code> | <code>number</code> | Maximum size of text fields to index by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb">elasticsearchIndexedFileSizeLimitKb</a></code> | <code>number</code> | Maximum size of repository and wiki files that are indexed by Elasticsearch. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing">elasticsearchIndexing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Elasticsearch indexing. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing">elasticsearchLimitIndexing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit Elasticsearch to index certain namespaces and projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency">elasticsearchMaxBulkConcurrency</a></code> | <code>number</code> | Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb">elasticsearchMaxBulkSizeMb</a></code> | <code>number</code> | Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxCodeIndexingConcurrency">elasticsearchMaxCodeIndexingConcurrency</a></code> | <code>number</code> | Maximum concurrency of Elasticsearch code indexing background jobs. This only applies to repository indexing operations. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds">elasticsearchNamespaceIds</a></code> | <code>number[]</code> | The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>string</code> | The password of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds">elasticsearchProjectIds</a></code> | <code>number[]</code> | The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchRequeueWorkers">elasticsearchRequeueWorkers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable automatic requeuing of indexing workers. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch">elasticsearchSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Elasticsearch search. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl">elasticsearchUrl</a></code> | <code>string[]</code> | The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername">elasticsearchUsername</a></code> | <code>string</code> | The username of your Elasticsearch instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchWorkerNumberOfShards">elasticsearchWorkerNumberOfShards</a></code> | <code>number</code> | Number of indexing worker shards. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText">emailAdditionalText</a></code> | <code>string</code> | Additional text added to the bottom of every email for legal/auditing/compliance reasons. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody">emailAuthorInBody</a></code> | <code>boolean \| cdktf.IResolvable</code> | Some email servers do not support overriding the email sender name. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailConfirmationSetting">emailConfirmationSetting</a></code> | <code>string</code> | Specifies whether users must confirm their email before sign in. Possible values are off, soft, and hard. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enableArtifactExternalRedirectWarningPage">enableArtifactExternalRedirectWarningPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Show the external redirect page that warns you about user-generated content in GitLab Pages. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol">enabledGitAccessProtocol</a></code> | <code>string</code> | Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit">enforceNamespaceStorageLimit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enabling this permits enforcement of namespace storage limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms">enforceTerms</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: terms) Enforce application ToS to all users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert">externalAuthClientCert</a></code> | <code>string</code> | (If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey">externalAuthClientKey</a></code> | <code>string</code> | Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass">externalAuthClientKeyPass</a></code> | <code>string</code> | Passphrase to use for the private key when authenticating with the external service this is encrypted when stored. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel">externalAuthorizationServiceDefaultLabel</a></code> | <code>string</code> | The default classification label to use when requesting authorization and no classification label has been specified on the project. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled">externalAuthorizationServiceEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout">externalAuthorizationServiceTimeout</a></code> | <code>number</code> | The timeout after which an authorization request is aborted, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl">externalAuthorizationServiceUrl</a></code> | <code>string</code> | URL to which authorization requests are directed. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout">externalPipelineValidationServiceTimeout</a></code> | <code>number</code> | How long to wait for a response from the pipeline validation service. Assumes OK if it times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken">externalPipelineValidationServiceToken</a></code> | <code>string</code> | Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl">externalPipelineValidationServiceUrl</a></code> | <code>string</code> | URL to use for pipeline validation requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.failedLoginAttemptsUnlockPeriodInMinutes">failedLoginAttemptsUnlockPeriodInMinutes</a></code> | <code>number</code> | Time period in minutes after which the user is unlocked when maximum number of failed sign-in attempts reached. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId">fileTemplateProjectId</a></code> | <code>number</code> | The ID of a project to load custom file templates from. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek">firstDayOfWeek</a></code> | <code>number</code> | Start day of the week for calendar views and date pickers. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps">geoNodeAllowedIps</a></code> | <code>string</code> | Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout">geoStatusTimeout</a></code> | <code>number</code> | The amount of seconds after which a request to get a secondary node status times out. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault">gitalyTimeoutDefault</a></code> | <code>number</code> | Default Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast">gitalyTimeoutFast</a></code> | <code>number</code> | Gitaly fast operation timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium">gitalyTimeoutMedium</a></code> | <code>number</code> | Medium Gitaly timeout, in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitlabShellOperationLimit">gitlabShellOperationLimit</a></code> | <code>number</code> | Maximum number of Git operations per minute a user can perform. Introduced in GitLab 16.2. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodEnabled">gitpodEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Gitpod integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodUrl">gitpodUrl</a></code> | <code>string</code> | The Gitpod instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAlertlist">gitRateLimitUsersAlertlist</a></code> | <code>number[]</code> | List of user IDs that are emailed when the Git abuse rate limit is exceeded. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist">gitRateLimitUsersAllowlist</a></code> | <code>string[]</code> | List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2. Self-managed, Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry">gitTwoFactorSessionExpiry</a></code> | <code>number</code> | Maximum duration (in minutes) of a session for Git operations when 2FA is enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.globallyAllowedIps">globallyAllowedIps</a></code> | <code>string</code> | Comma-separated list of IP addresses and CIDRs always allowed for inbound traffic. For example, 1.1.1.1, 2.2.2.0/24. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled">grafanaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Grafana. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl">grafanaUrl</a></code> | <code>string</code> | Grafana URL. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled">gravatarEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Gravatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection">groupOwnersCanManageDefaultBranchProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent overrides of default branch protection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled">hashedStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent">helpPageHideCommercialContent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Hide marketing-related entries from help. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl">helpPageSupportUrl</a></code> | <code>string</code> | Alternate support URL for help page and help dropdown. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText">helpPageText</a></code> | <code>string</code> | Custom text displayed on the help page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText">helpText</a></code> | <code>string</code> | GitLab server administrator information. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers">hideThirdPartyOffers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not display offers from third parties in GitLab. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl">homePageUrl</a></code> | <code>string</code> | Redirect to this URL when not logged in. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled">housekeepingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable Git housekeeping. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod">housekeepingFullRepackPeriod</a></code> | <code>number</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod">housekeepingGcPeriod</a></code> | <code>number</code> | Number of Git pushes after which git gc is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod">housekeepingIncrementalRepackPeriod</a></code> | <code>number</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingOptimizeRepositoryPeriod">housekeepingOptimizeRepositoryPeriod</a></code> | <code>number</code> | Number of Git pushes after which an incremental git repack is run. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled">htmlEmailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable HTML emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#id ApplicationSettings#id}. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources">importSources</a></code> | <code>string[]</code> | Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths">inactiveProjectsDeleteAfterMonths</a></code> | <code>number</code> | If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb">inactiveProjectsMinSizeMb</a></code> | <code>number</code> | If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths">inactiveProjectsSendWarningEmailAfterMonths</a></code> | <code>number</code> | If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.includeOptionalMetricsInServicePing">includeOptionalMetricsInServicePing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not optional metrics are enabled in Service Ping. Introduced in GitLab 16.10. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled">inProductMarketingEmailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable in-product marketing emails. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled">invisibleCaptchaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Invisible CAPTCHA spam detection during sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit">issuesCreateLimit</a></code> | <code>number</code> | Max number of issue creation requests per minute per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectApplicationKey">jiraConnectApplicationKey</a></code> | <code>string</code> | ID of the OAuth application used to authenticate with the GitLab for Jira Cloud app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectProxyUrl">jiraConnectProxyUrl</a></code> | <code>string</code> | URL of the GitLab instance used as a proxy for the GitLab for Jira Cloud app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectPublicKeyStorageEnabled">jiraConnectPublicKeyStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable public key storage for the GitLab for Jira Cloud app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion">localMarkdownVersion</a></code> | <code>number</code> | Increase this value when any cached Markdown should be invalidated. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lockDuoFeaturesEnabled">lockDuoFeaturesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the GitLab Duo features enabled setting is enforced for all subgroups. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled">mailgunEventsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Mailgun event receiver. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey">mailgunSigningKey</a></code> | <code>string</code> | The Mailgun HTTP webhook signing key for receiving events from webhook. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode">maintenanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage">maintenanceModeMessage</a></code> | <code>string</code> | Message displayed when instance is in maintenance mode. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mavenPackageRequestsForwarding">mavenPackageRequestsForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use repo.maven.apache.org as a default remote repository when the package is not found in the GitLab Package Registry for Maven. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize">maxArtifactsSize</a></code> | <code>number</code> | Maximum artifacts size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize">maxAttachmentSize</a></code> | <code>number</code> | Limit attachment size in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxDecompressedArchiveSize">maxDecompressedArchiveSize</a></code> | <code>number</code> | Maximum decompressed archive size in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize">maxExportSize</a></code> | <code>number</code> | Maximum export size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportRemoteFileSize">maxImportRemoteFileSize</a></code> | <code>number</code> | Maximum remote file size for imports from external object storages. Introduced in GitLab 16.3. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize">maxImportSize</a></code> | <code>number</code> | Maximum import size in MB. 0 for unlimited. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxLoginAttempts">maxLoginAttempts</a></code> | <code>number</code> | Maximum number of sign-in attempts before locking out the user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads">maxNumberOfRepositoryDownloads</a></code> | <code>number</code> | Maximum number of unique repositories a user can download in the specified time period before they are banned. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod">maxNumberOfRepositoryDownloadsWithinTimePeriod</a></code> | <code>number</code> | Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize">maxPagesSize</a></code> | <code>number</code> | Maximum size of pages repositories in MB. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime">maxPersonalAccessTokenLifetime</a></code> | <code>number</code> | Maximum allowable lifetime for access tokens in days. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime">maxSshKeyLifetime</a></code> | <code>number</code> | Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxTerraformStateSizeBytes">maxTerraformStateSizeBytes</a></code> | <code>number</code> | Maximum size in bytes of the Terraform state files. Set this to 0 for unlimited file size. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold">metricsMethodCallThreshold</a></code> | <code>number</code> | A method call is only tracked when it takes longer than the given amount of milliseconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.minimumPasswordLength">minimumPasswordLength</a></code> | <code>number</code> | Indicates whether passwords require a minimum length. Introduced in GitLab 15.1. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable">mirrorAvailable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold">mirrorCapacityThreshold</a></code> | <code>number</code> | Minimum capacity to be available before scheduling more mirrors preemptively. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity">mirrorMaxCapacity</a></code> | <code>number</code> | Maximum number of mirrors that can be synchronizing at the same time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay">mirrorMaxDelay</a></code> | <code>number</code> | Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding">npmPackageRequestsForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.nugetSkipMetadataUrlValidation">nugetSkipMetadataUrlValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether to skip metadata URL validation for the NuGet package. Introduced in GitLab 17.0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist">outboundLocalRequestsWhitelist</a></code> | <code>string[]</code> | Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageMetadataPurlTypes">packageMetadataPurlTypes</a></code> | <code>number[]</code> | List of package registry metadata to sync. See the list of the available values (https://gitlab.com/gitlab-org/gitlab/-/blob/ace16c20d5da7c4928dd03fb139692638b557fe3/app/models/concerns/enums/package_metadata.rb#L5). Self-managed, Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryAllowAnyoneToPullOption">packageRegistryAllowAnyoneToPullOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable to allow anyone to pull from Package Registry visible and changeable. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity">packageRegistryCleanupPoliciesWorkerCapacity</a></code> | <code>number</code> | Number of workers assigned to the packages cleanup policies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled">pagesDomainVerificationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Require users to prove ownership of custom domains. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit">passwordAuthenticationEnabledForGit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable authentication for Git over HTTP(S) via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb">passwordAuthenticationEnabledForWeb</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable authentication for the web interface via a GitLab account password. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired">passwordLowercaseRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired">passwordNumberRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether passwords require at least one number. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired">passwordSymbolRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired">passwordUppercaseRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath">performanceBarAllowedGroupPath</a></code> | <code>string</code> | Path of the group that is allowed to toggle the performance bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix">personalAccessTokenPrefix</a></code> | <code>string</code> | Prefix for all generated personal access tokens. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha">pipelineLimitPerProjectUserSha</a></code> | <code>number</code> | Maximum number of pipeline creation requests per minute per user and commit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled">plantumlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: plantuml_url) Enable PlantUML integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl">plantumlUrl</a></code> | <code>string</code> | The PlantUML instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier">pollingIntervalMultiplier</a></code> | <code>number</code> | Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled">projectExportEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable project export. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectJobsApiRateLimit">projectJobsApiRateLimit</a></code> | <code>number</code> | Maximum authenticated requests to /project/:id/jobs per minute. Introduced in GitLab 16.5. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectsApiRateLimitUnauthenticated">projectsApiRateLimitUnauthenticated</a></code> | <code>number</code> | Introduced in GitLab 15.10. Max number of requests per 10 minutes per IP address for unauthenticated requests to the list all projects API. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled">prometheusMetricsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Prometheus metrics. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables">protectedCiVariables</a></code> | <code>boolean \| cdktf.IResolvable</code> | CI/CD variables are protected by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit">pushEventActivitiesLimit</a></code> | <code>number</code> | Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit">pushEventHooksLimit</a></code> | <code>number</code> | Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding">pypiPackageRequestsForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText">rateLimitingResponseText</a></code> | <code>string</code> | When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit">rawBlobRequestLimit</a></code> | <code>number</code> | Max number of requests per minute for each raw path. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled">recaptchaEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey">recaptchaPrivateKey</a></code> | <code>string</code> | Private key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey">recaptchaSiteKey</a></code> | <code>string</code> | Site key for reCAPTCHA. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize">receiveMaxInputSize</a></code> | <code>number</code> | Maximum push size (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receptiveClusterAgentsEnabled">receptiveClusterAgentsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable receptive mode for GitLab Agents for Kubernetes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rememberMeEnabled">rememberMeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Remember me setting. Introduced in GitLab 16.0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled">repositoryChecksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit">repositorySizeLimit</a></code> | <code>number</code> | Size limit per repository (MB). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages">repositoryStorages</a></code> | <code>string[]</code> | (GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted">repositoryStoragesWeighted</a></code> | <code>{[ key: string ]: number}</code> | (GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup">requireAdminApprovalAfterUserSignup</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminTwoFactorAuthentication">requireAdminTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow administrators to require 2FA for all administrators on the instance. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requirePersonalAccessTokenExpiry">requirePersonalAccessTokenExpiry</a></code> | <code>boolean \| cdktf.IResolvable</code> | When enabled, users must set an expiration date when creating a group or project access token, or a personal access token owned by a non-service account. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication">requireTwoFactorAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels">restrictedVisibilityLevels</a></code> | <code>string[]</code> | Selected levels cannot be used by non-Administrator users for groups, projects or snippets. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction">rsaKeyRestriction</a></code> | <code>number</code> | The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit">searchRateLimit</a></code> | <code>number</code> | Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated">searchRateLimitUnauthenticated</a></code> | <code>number</code> | Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityApprovalPoliciesLimit">securityApprovalPoliciesLimit</a></code> | <code>number</code> | Maximum number of active merge request approval policies per security policy project. Maximum: 20. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityPolicyGlobalGroupApproversEnabled">securityPolicyGlobalGroupApproversEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to look up merge request approval policy approval groups globally or within project hierarchies. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityTxtContent">securityTxtContent</a></code> | <code>string</code> | Public security contact information. Introduced in GitLab 16.7. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail">sendUserConfirmationEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Send confirmation email on sign-up. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.serviceAccessTokensExpirationEnforced">serviceAccessTokensExpirationEnforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to indicate if token expiry date can be optional for service account users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay">sessionExpireDelay</a></code> | <code>number</code> | Session duration in minutes. GitLab restart is required to apply changes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes">sharedRunnersMinutes</a></code> | <code>number</code> | Set the maximum number of CI/CD minutes that a group can use on shared runners per month. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText">sharedRunnersText</a></code> | <code>string</code> | Shared runners text. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes">sidekiqJobLimiterCompressionThresholdBytes</a></code> | <code>number</code> | The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes">sidekiqJobLimiterLimitBytes</a></code> | <code>number</code> | The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode">sidekiqJobLimiterMode</a></code> | <code>string</code> | track or compress. Sets the behavior for Sidekiq job size limits. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText">signInText</a></code> | <code>string</code> | Text on the login page. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled">signupEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable registration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentAdminExportsEnabled">silentAdminExportsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Silent admin exports. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentModeEnabled">silentModeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Silent mode. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled">slackAppEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId">slackAppId</a></code> | <code>string</code> | The app ID of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret">slackAppSecret</a></code> | <code>string</code> | The app secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret">slackAppSigningSecret</a></code> | <code>string</code> | The signing secret of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken">slackAppVerificationToken</a></code> | <code>string</code> | The verification token of the Slack-app. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit">snippetSizeLimit</a></code> | <code>number</code> | Max snippet content size in bytes. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId">snowplowAppId</a></code> | <code>string</code> | The Snowplow site name / application ID. (for example, gitlab). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname">snowplowCollectorHostname</a></code> | <code>string</code> | The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain">snowplowCookieDomain</a></code> | <code>string</code> | The Snowplow cookie domain. (for example, .gitlab.com). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowDatabaseCollectorHostname">snowplowDatabaseCollectorHostname</a></code> | <code>string</code> | The Snowplow collector for database events hostname. (for example, db-snowplow.trx.gitlab.net). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled">snowplowEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable snowplow tracking. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled">sourcegraphEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables Sourcegraph integration. If enabled, requires sourcegraph_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly">sourcegraphPublicOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Blocks Sourcegraph from being loaded on private and internal projects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl">sourcegraphUrl</a></code> | <code>string</code> | The Sourcegraph instance URL for integration. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey">spamCheckApiKey</a></code> | <code>string</code> | API key used by GitLab for accessing the Spam Check service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled">spamCheckEndpointEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables spam checking using external Spam Check API endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl">spamCheckEndpointUrl</a></code> | <code>string</code> | URL of the external Spamcheck service endpoint. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageAuthToken">staticObjectsExternalStorageAuthToken</a></code> | <code>string</code> | Authentication token for the external storage linked in static_objects_external_storage_url. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageUrl">staticObjectsExternalStorageUrl</a></code> | <code>string</code> | URL to an external storage for repository static objects. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled">suggestPipelineEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable pipeline suggestion banner. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime">terminalMaxSessionTime</a></code> | <code>number</code> | Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms">terms</a></code> | <code>string</code> | (Required by: enforce_terms) Markdown content for the ToS. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled">throttleAuthenticatedApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds">throttleAuthenticatedApiPeriodInSeconds</a></code> | <code>number</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod">throttleAuthenticatedApiRequestsPerPeriod</a></code> | <code>number</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled">throttleAuthenticatedPackagesApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds">throttleAuthenticatedPackagesApiPeriodInSeconds</a></code> | <code>number</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod">throttleAuthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>number</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled">throttleAuthenticatedWebEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds">throttleAuthenticatedWebPeriodInSeconds</a></code> | <code>number</code> | Rate limit period (in seconds). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod">throttleAuthenticatedWebRequestsPerPeriod</a></code> | <code>number</code> | Maximum requests per period per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled">throttleUnauthenticatedApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds">throttleUnauthenticatedApiPeriodInSeconds</a></code> | <code>number</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod">throttleUnauthenticatedApiRequestsPerPeriod</a></code> | <code>number</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled">throttleUnauthenticatedPackagesApiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds">throttleUnauthenticatedPackagesApiPeriodInSeconds</a></code> | <code>number</code> | Rate limit period (in seconds). View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod">throttleUnauthenticatedPackagesApiRequestsPerPeriod</a></code> | <code>number</code> | Maximum requests per period per user. View Package Registry rate limits for more details. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled">throttleUnauthenticatedWebEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds">throttleUnauthenticatedWebPeriodInSeconds</a></code> | <code>number</code> | Rate limit period in seconds. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod">throttleUnauthenticatedWebRequestsPerPeriod</a></code> | <code>number</code> | Max requests per period per IP. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours">timeTrackingLimitToHours</a></code> | <code>boolean \| cdktf.IResolvable</code> | Limit display of time tracking units to hours. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod">twoFactorGracePeriod</a></code> | <code>number</code> | Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.unconfirmedUsersDeleteAfterDays">unconfirmedUsersDeleteAfterDays</a></code> | <code>number</code> | Specifies how many days after sign-up to delete users who have not confirmed their email. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled">uniqueIpsLimitEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | (If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser">uniqueIpsLimitPerUser</a></code> | <code>number</code> | Maximum number of IPs per user. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow">uniqueIpsLimitTimeWindow</a></code> | <code>number</code> | How many seconds an IP is counted towards the limit. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.updateRunnerVersionsEnabled">updateRunnerVersionsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Fetch GitLab Runner release version data from GitLab.com. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled">usagePingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Every week GitLab reports license usage back to GitLab, Inc. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.useClickhouseForAnalytics">useClickhouseForAnalytics</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables ClickHouse as a data source for analytics reports. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled">userDeactivationEmailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Send an email to users upon account deactivation. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal">userDefaultExternal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Newly registered users are external by default. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex">userDefaultInternalRegex</a></code> | <code>string</code> | Specify an email address regex pattern to identify default internal users. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultsToPrivateProfile">userDefaultsToPrivateProfile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Newly created users have private profile by default. Introduced in GitLab 15.8. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications">userOauthApplications</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow users to register any application to use GitLab as an OAuth provider. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage">userShowAddSshKeyMessage</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.validRunnerRegistrars">validRunnerRegistrars</a></code> | <code>string[]</code> | List of types which are allowed to register a GitLab Runner. Can be [], ['group'], ['project'] or ['group', 'project']. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled">versionCheckEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Let GitLab inform you when an update is available. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled">webIdeClientsidePreviewEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant">whatsNewVariant</a></code> | <code>string</code> | What's new variant, possible values: all_tiers, current_tier, and disabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes">wikiPageMaxContentBytes</a></code> | <code>number</code> | Maximum wiki page content size in bytes. The minimum value is 1024 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `abuseNotificationEmail`<sup>Optional</sup> <a name="abuseNotificationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.abuseNotificationEmail"></a>

```typescript
public readonly abuseNotificationEmail: string;
```

- *Type:* string

If set, abuse reports are sent to this address. Abuse reports are always available in the Admin Area.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#abuse_notification_email ApplicationSettings#abuse_notification_email}

---

##### `adminMode`<sup>Optional</sup> <a name="adminMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.adminMode"></a>

```typescript
public readonly adminMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require administrators to enable Admin Mode by re-authenticating for administrative tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#admin_mode ApplicationSettings#admin_mode}

---

##### `afterSignOutPath`<sup>Optional</sup> <a name="afterSignOutPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignOutPath"></a>

```typescript
public readonly afterSignOutPath: string;
```

- *Type:* string

Where to redirect users after logout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#after_sign_out_path ApplicationSettings#after_sign_out_path}

---

##### `afterSignUpText`<sup>Optional</sup> <a name="afterSignUpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.afterSignUpText"></a>

```typescript
public readonly afterSignUpText: string;
```

- *Type:* string

Text shown to the user after signing up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#after_sign_up_text ApplicationSettings#after_sign_up_text}

---

##### `akismetApiKey`<sup>Optional</sup> <a name="akismetApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetApiKey"></a>

```typescript
public readonly akismetApiKey: string;
```

- *Type:* string

API key for Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#akismet_api_key ApplicationSettings#akismet_api_key}

---

##### `akismetEnabled`<sup>Optional</sup> <a name="akismetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.akismetEnabled"></a>

```typescript
public readonly akismetEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: akismet_api_key) Enable or disable Akismet spam protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#akismet_enabled ApplicationSettings#akismet_enabled}

---

##### `allowAccountDeletion`<sup>Optional</sup> <a name="allowAccountDeletion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowAccountDeletion"></a>

```typescript
public readonly allowAccountDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to allow users to delete their accounts. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allow_account_deletion ApplicationSettings#allow_account_deletion}

---

##### `allowGroupOwnersToManageLdap`<sup>Optional</sup> <a name="allowGroupOwnersToManageLdap" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowGroupOwnersToManageLdap"></a>

```typescript
public readonly allowGroupOwnersToManageLdap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to allow group owners to manage LDAP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allow_group_owners_to_manage_ldap ApplicationSettings#allow_group_owners_to_manage_ldap}

---

##### `allowLocalRequestsFromSystemHooks`<sup>Optional</sup> <a name="allowLocalRequestsFromSystemHooks" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromSystemHooks"></a>

```typescript
public readonly allowLocalRequestsFromSystemHooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow requests to the local network from system hooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allow_local_requests_from_system_hooks ApplicationSettings#allow_local_requests_from_system_hooks}

---

##### `allowLocalRequestsFromWebHooksAndServices`<sup>Optional</sup> <a name="allowLocalRequestsFromWebHooksAndServices" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowLocalRequestsFromWebHooksAndServices"></a>

```typescript
public readonly allowLocalRequestsFromWebHooksAndServices: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow requests to the local network from web hooks and services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allow_local_requests_from_web_hooks_and_services ApplicationSettings#allow_local_requests_from_web_hooks_and_services}

---

##### `allowProjectCreationForGuestAndBelow`<sup>Optional</sup> <a name="allowProjectCreationForGuestAndBelow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowProjectCreationForGuestAndBelow"></a>

```typescript
public readonly allowProjectCreationForGuestAndBelow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether users assigned up to the Guest role can create groups and personal projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allow_project_creation_for_guest_and_below ApplicationSettings#allow_project_creation_for_guest_and_below}

---

##### `allowRunnerRegistrationToken`<sup>Optional</sup> <a name="allowRunnerRegistrationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.allowRunnerRegistrationToken"></a>

```typescript
public readonly allowRunnerRegistrationToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow using a registration token to create a runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allow_runner_registration_token ApplicationSettings#allow_runner_registration_token}

---

##### `archiveBuildsInHumanReadable`<sup>Optional</sup> <a name="archiveBuildsInHumanReadable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.archiveBuildsInHumanReadable"></a>

```typescript
public readonly archiveBuildsInHumanReadable: string;
```

- *Type:* string

Set the duration for which the jobs are considered as old and expired.

After that time passes, the jobs are archived and no longer able to be retried. Make it empty to never expire jobs. It has to be no less than 1 day, for example: 15 days, 1 month, 2 years.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#archive_builds_in_human_readable ApplicationSettings#archive_builds_in_human_readable}

---

##### `asciidocMaxIncludes`<sup>Optional</sup> <a name="asciidocMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.asciidocMaxIncludes"></a>

```typescript
public readonly asciidocMaxIncludes: number;
```

- *Type:* number

Maximum limit of AsciiDoc include directives being processed in any one document. Maximum: 64.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#asciidoc_max_includes ApplicationSettings#asciidoc_max_includes}

---

##### `assetProxyAllowlist`<sup>Optional</sup> <a name="assetProxyAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyAllowlist"></a>

```typescript
public readonly assetProxyAllowlist: string[];
```

- *Type:* string[]

Assets that match these domains are not proxied.

Wildcards allowed. Your GitLab installation URL is automatically allowlisted. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#asset_proxy_allowlist ApplicationSettings#asset_proxy_allowlist}

---

##### `assetProxyEnabled`<sup>Optional</sup> <a name="assetProxyEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyEnabled"></a>

```typescript
public readonly assetProxyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: asset_proxy_url) Enable proxying of assets. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#asset_proxy_enabled ApplicationSettings#asset_proxy_enabled}

---

##### `assetProxySecretKey`<sup>Optional</sup> <a name="assetProxySecretKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxySecretKey"></a>

```typescript
public readonly assetProxySecretKey: string;
```

- *Type:* string

Shared secret with the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#asset_proxy_secret_key ApplicationSettings#asset_proxy_secret_key}

---

##### `assetProxyUrl`<sup>Optional</sup> <a name="assetProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.assetProxyUrl"></a>

```typescript
public readonly assetProxyUrl: string;
```

- *Type:* string

URL of the asset proxy server. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#asset_proxy_url ApplicationSettings#asset_proxy_url}

---

##### `authorizedKeysEnabled`<sup>Optional</sup> <a name="authorizedKeysEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.authorizedKeysEnabled"></a>

```typescript
public readonly authorizedKeysEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

By default, we write to the authorized_keys file to support Git over SSH without additional configuration.

GitLab can be optimized to authenticate SSH keys via the database file. Only disable this if you have configured your OpenSSH server to use the AuthorizedKeysCommand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#authorized_keys_enabled ApplicationSettings#authorized_keys_enabled}

---

##### `autoBanUserOnExcessiveProjectsDownload`<sup>Optional</sup> <a name="autoBanUserOnExcessiveProjectsDownload" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoBanUserOnExcessiveProjectsDownload"></a>

```typescript
public readonly autoBanUserOnExcessiveProjectsDownload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, users will get automatically banned from the application when they download more than the maximum number of unique projects in the time period specified by max_number_of_repository_downloads and max_number_of_repository_downloads_within_time_period respectively.

Introduced in GitLab 15.4. Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#auto_ban_user_on_excessive_projects_download ApplicationSettings#auto_ban_user_on_excessive_projects_download}

---

##### `autoDevopsDomain`<sup>Optional</sup> <a name="autoDevopsDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsDomain"></a>

```typescript
public readonly autoDevopsDomain: string;
```

- *Type:* string

Specify a domain to use by default for every project’s Auto Review Apps and Auto Deploy stages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#auto_devops_domain ApplicationSettings#auto_devops_domain}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Auto DevOps for projects by default.

It automatically builds, tests, and deploys applications based on a predefined CI/CD configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#auto_devops_enabled ApplicationSettings#auto_devops_enabled}

---

##### `automaticPurchasedStorageAllocation`<sup>Optional</sup> <a name="automaticPurchasedStorageAllocation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.automaticPurchasedStorageAllocation"></a>

```typescript
public readonly automaticPurchasedStorageAllocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabling this permits automatic allocation of purchased storage in a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#automatic_purchased_storage_allocation ApplicationSettings#automatic_purchased_storage_allocation}

---

##### `bulkImportConcurrentPipelineBatchLimit`<sup>Optional</sup> <a name="bulkImportConcurrentPipelineBatchLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportConcurrentPipelineBatchLimit"></a>

```typescript
public readonly bulkImportConcurrentPipelineBatchLimit: number;
```

- *Type:* number

Maximum simultaneous Direct Transfer batches to process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#bulk_import_concurrent_pipeline_batch_limit ApplicationSettings#bulk_import_concurrent_pipeline_batch_limit}

---

##### `bulkImportEnabled`<sup>Optional</sup> <a name="bulkImportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportEnabled"></a>

```typescript
public readonly bulkImportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable migrating GitLab groups by direct transfer. Introduced in GitLab 15.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#bulk_import_enabled ApplicationSettings#bulk_import_enabled}

---

##### `bulkImportMaxDownloadFileSize`<sup>Optional</sup> <a name="bulkImportMaxDownloadFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.bulkImportMaxDownloadFileSize"></a>

```typescript
public readonly bulkImportMaxDownloadFileSize: number;
```

- *Type:* number

Maximum download file size when importing from source GitLab instances by direct transfer. Introduced in GitLab 16.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#bulk_import_max_download_file_size ApplicationSettings#bulk_import_max_download_file_size}

---

##### `canCreateGroup`<sup>Optional</sup> <a name="canCreateGroup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.canCreateGroup"></a>

```typescript
public readonly canCreateGroup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether users can create top-level groups. Introduced in GitLab 15.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#can_create_group ApplicationSettings#can_create_group}

---

##### `checkNamespacePlan`<sup>Optional</sup> <a name="checkNamespacePlan" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.checkNamespacePlan"></a>

```typescript
public readonly checkNamespacePlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabling this makes only licensed EE features available to projects if the project namespace’s plan includes the feature or if the project is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#check_namespace_plan ApplicationSettings#check_namespace_plan}

---

##### `ciMaxIncludes`<sup>Optional</sup> <a name="ciMaxIncludes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxIncludes"></a>

```typescript
public readonly ciMaxIncludes: number;
```

- *Type:* number

The maximum number of includes per pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#ci_max_includes ApplicationSettings#ci_max_includes}

---

##### `ciMaxTotalYamlSizeBytes`<sup>Optional</sup> <a name="ciMaxTotalYamlSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ciMaxTotalYamlSizeBytes"></a>

```typescript
public readonly ciMaxTotalYamlSizeBytes: number;
```

- *Type:* number

The maximum amount of memory, in bytes, that can be allocated for the pipeline configuration, with all included YAML configuration files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#ci_max_total_yaml_size_bytes ApplicationSettings#ci_max_total_yaml_size_bytes}

---

##### `commitEmailHostname`<sup>Optional</sup> <a name="commitEmailHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.commitEmailHostname"></a>

```typescript
public readonly commitEmailHostname: string;
```

- *Type:* string

Custom hostname (for private commit emails).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#commit_email_hostname ApplicationSettings#commit_email_hostname}

---

##### `concurrentBitbucketImportJobsLimit`<sup>Optional</sup> <a name="concurrentBitbucketImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketImportJobsLimit"></a>

```typescript
public readonly concurrentBitbucketImportJobsLimit: number;
```

- *Type:* number

Maximum number of simultaneous import jobs for the Bitbucket Cloud importer. Introduced in GitLab 16.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#concurrent_bitbucket_import_jobs_limit ApplicationSettings#concurrent_bitbucket_import_jobs_limit}

---

##### `concurrentBitbucketServerImportJobsLimit`<sup>Optional</sup> <a name="concurrentBitbucketServerImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentBitbucketServerImportJobsLimit"></a>

```typescript
public readonly concurrentBitbucketServerImportJobsLimit: number;
```

- *Type:* number

Maximum number of simultaneous import jobs for the Bitbucket Server importer. Introduced in GitLab 16.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#concurrent_bitbucket_server_import_jobs_limit ApplicationSettings#concurrent_bitbucket_server_import_jobs_limit}

---

##### `concurrentGithubImportJobsLimit`<sup>Optional</sup> <a name="concurrentGithubImportJobsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.concurrentGithubImportJobsLimit"></a>

```typescript
public readonly concurrentGithubImportJobsLimit: number;
```

- *Type:* number

Maximum number of simultaneous import jobs for the GitHub importer. Introduced in GitLab 16.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#concurrent_github_import_jobs_limit ApplicationSettings#concurrent_github_import_jobs_limit}

---

##### `containerExpirationPoliciesEnableHistoricEntries`<sup>Optional</sup> <a name="containerExpirationPoliciesEnableHistoricEntries" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerExpirationPoliciesEnableHistoricEntries"></a>

```typescript
public readonly containerExpirationPoliciesEnableHistoricEntries: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable cleanup policies for all projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#container_expiration_policies_enable_historic_entries ApplicationSettings#container_expiration_policies_enable_historic_entries}

---

##### `containerRegistryCleanupTagsServiceMaxListSize`<sup>Optional</sup> <a name="containerRegistryCleanupTagsServiceMaxListSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryCleanupTagsServiceMaxListSize"></a>

```typescript
public readonly containerRegistryCleanupTagsServiceMaxListSize: number;
```

- *Type:* number

The maximum number of tags that can be deleted in a single execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#container_registry_cleanup_tags_service_max_list_size ApplicationSettings#container_registry_cleanup_tags_service_max_list_size}

---

##### `containerRegistryDeleteTagsServiceTimeout`<sup>Optional</sup> <a name="containerRegistryDeleteTagsServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryDeleteTagsServiceTimeout"></a>

```typescript
public readonly containerRegistryDeleteTagsServiceTimeout: number;
```

- *Type:* number

The maximum time, in seconds, that the cleanup process can take to delete a batch of tags for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#container_registry_delete_tags_service_timeout ApplicationSettings#container_registry_delete_tags_service_timeout}

---

##### `containerRegistryExpirationPoliciesCaching`<sup>Optional</sup> <a name="containerRegistryExpirationPoliciesCaching" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesCaching"></a>

```typescript
public readonly containerRegistryExpirationPoliciesCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Caching during the execution of cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#container_registry_expiration_policies_caching ApplicationSettings#container_registry_expiration_policies_caching}

---

##### `containerRegistryExpirationPoliciesWorkerCapacity`<sup>Optional</sup> <a name="containerRegistryExpirationPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryExpirationPoliciesWorkerCapacity"></a>

```typescript
public readonly containerRegistryExpirationPoliciesWorkerCapacity: number;
```

- *Type:* number

Number of workers for cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#container_registry_expiration_policies_worker_capacity ApplicationSettings#container_registry_expiration_policies_worker_capacity}

---

##### `containerRegistryTokenExpireDelay`<sup>Optional</sup> <a name="containerRegistryTokenExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.containerRegistryTokenExpireDelay"></a>

```typescript
public readonly containerRegistryTokenExpireDelay: number;
```

- *Type:* number

Container Registry token duration in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#container_registry_token_expire_delay ApplicationSettings#container_registry_token_expire_delay}

---

##### `deactivateDormantUsers`<sup>Optional</sup> <a name="deactivateDormantUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsers"></a>

```typescript
public readonly deactivateDormantUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable automatic deactivation of dormant users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#deactivate_dormant_users ApplicationSettings#deactivate_dormant_users}

---

##### `deactivateDormantUsersPeriod`<sup>Optional</sup> <a name="deactivateDormantUsersPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deactivateDormantUsersPeriod"></a>

```typescript
public readonly deactivateDormantUsersPeriod: number;
```

- *Type:* number

Length of time (in days) after which a user is considered dormant. Introduced in GitLab 15.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#deactivate_dormant_users_period ApplicationSettings#deactivate_dormant_users_period}

---

##### `decompressArchiveFileTimeout`<sup>Optional</sup> <a name="decompressArchiveFileTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.decompressArchiveFileTimeout"></a>

```typescript
public readonly decompressArchiveFileTimeout: number;
```

- *Type:* number

Default timeout for decompressing archived files, in seconds. Set to 0 to disable timeouts. Introduced in GitLab 16.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#decompress_archive_file_timeout ApplicationSettings#decompress_archive_file_timeout}

---

##### `defaultArtifactsExpireIn`<sup>Optional</sup> <a name="defaultArtifactsExpireIn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultArtifactsExpireIn"></a>

```typescript
public readonly defaultArtifactsExpireIn: string;
```

- *Type:* string

Set the default expiration time for each job’s artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_artifacts_expire_in ApplicationSettings#default_artifacts_expire_in}

---

##### `defaultBranchName`<sup>Optional</sup> <a name="defaultBranchName" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchName"></a>

```typescript
public readonly defaultBranchName: string;
```

- *Type:* string

Instance-level custom initial branch name (introduced in GitLab 13.2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_branch_name ApplicationSettings#default_branch_name}

---

##### `defaultBranchProtection`<sup>Optional</sup> <a name="defaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtection"></a>

```typescript
public readonly defaultBranchProtection: number;
```

- *Type:* number

Determine if developers can push to the default branch.

Can take: 0 (not protected, both users with the Developer role or Maintainer role can push new commits and force push), 1 (partially protected, users with the Developer role or Maintainer role can push new commits, but cannot force push) or 2 (fully protected, users with the Developer or Maintainer role cannot push new commits, but users with the Developer or Maintainer role can; no one can force push) as a parameter. Default is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_branch_protection ApplicationSettings#default_branch_protection}

---

##### `defaultBranchProtectionDefaults`<sup>Optional</sup> <a name="defaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultBranchProtectionDefaults"></a>

```typescript
public readonly defaultBranchProtectionDefaults: ApplicationSettingsDefaultBranchProtectionDefaults;
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

default_branch_protection_defaults block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_branch_protection_defaults ApplicationSettings#default_branch_protection_defaults}

---

##### `defaultCiConfigPath`<sup>Optional</sup> <a name="defaultCiConfigPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultCiConfigPath"></a>

```typescript
public readonly defaultCiConfigPath: string;
```

- *Type:* string

Default CI/CD configuration file and path for new projects (.gitlab-ci.yml if not set).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_ci_config_path ApplicationSettings#default_ci_config_path}

---

##### `defaultGroupVisibility`<sup>Optional</sup> <a name="defaultGroupVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultGroupVisibility"></a>

```typescript
public readonly defaultGroupVisibility: string;
```

- *Type:* string

What visibility level new groups receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_group_visibility ApplicationSettings#default_group_visibility}

---

##### `defaultPreferredLanguage`<sup>Optional</sup> <a name="defaultPreferredLanguage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultPreferredLanguage"></a>

```typescript
public readonly defaultPreferredLanguage: string;
```

- *Type:* string

Default preferred language for users who are not logged in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_preferred_language ApplicationSettings#default_preferred_language}

---

##### `defaultProjectCreation`<sup>Optional</sup> <a name="defaultProjectCreation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectCreation"></a>

```typescript
public readonly defaultProjectCreation: number;
```

- *Type:* number

Default project creation protection. Can take: 0 (No one), 1 (Maintainers) or 2 (Developers + Maintainers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_project_creation ApplicationSettings#default_project_creation}

---

##### `defaultProjectsLimit`<sup>Optional</sup> <a name="defaultProjectsLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectsLimit"></a>

```typescript
public readonly defaultProjectsLimit: number;
```

- *Type:* number

Project limit per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_projects_limit ApplicationSettings#default_projects_limit}

---

##### `defaultProjectVisibility`<sup>Optional</sup> <a name="defaultProjectVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultProjectVisibility"></a>

```typescript
public readonly defaultProjectVisibility: string;
```

- *Type:* string

What visibility level new projects receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_project_visibility ApplicationSettings#default_project_visibility}

---

##### `defaultSnippetVisibility`<sup>Optional</sup> <a name="defaultSnippetVisibility" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSnippetVisibility"></a>

```typescript
public readonly defaultSnippetVisibility: string;
```

- *Type:* string

What visibility level new snippets receive. Can take private, internal and public as a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_snippet_visibility ApplicationSettings#default_snippet_visibility}

---

##### `defaultSyntaxHighlightingTheme`<sup>Optional</sup> <a name="defaultSyntaxHighlightingTheme" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.defaultSyntaxHighlightingTheme"></a>

```typescript
public readonly defaultSyntaxHighlightingTheme: number;
```

- *Type:* number

Default syntax highlighting theme for users who are new or not signed in. See IDs of available themes (https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/themes.rb#L16).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#default_syntax_highlighting_theme ApplicationSettings#default_syntax_highlighting_theme}

---

##### `deleteInactiveProjects`<sup>Optional</sup> <a name="deleteInactiveProjects" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteInactiveProjects"></a>

```typescript
public readonly deleteInactiveProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable inactive project deletion feature. Introduced in GitLab 14.10. Became operational in GitLab 15.0 (with feature flag inactive_projects_deletion).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#delete_inactive_projects ApplicationSettings#delete_inactive_projects}

---

##### `deleteUnconfirmedUsers`<sup>Optional</sup> <a name="deleteUnconfirmedUsers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deleteUnconfirmedUsers"></a>

```typescript
public readonly deleteUnconfirmedUsers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether users who have not confirmed their email should be deleted.

When set to true, unconfirmed users are deleted after unconfirmed_users_delete_after_days days. Introduced in GitLab 16.1. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#delete_unconfirmed_users ApplicationSettings#delete_unconfirmed_users}

---

##### `deletionAdjournedPeriod`<sup>Optional</sup> <a name="deletionAdjournedPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.deletionAdjournedPeriod"></a>

```typescript
public readonly deletionAdjournedPeriod: number;
```

- *Type:* number

The number of days to wait before deleting a project or group that is marked for deletion.

Value must be between 1 and 90.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#deletion_adjourned_period ApplicationSettings#deletion_adjourned_period}

---

##### `diagramsnetEnabled`<sup>Optional</sup> <a name="diagramsnetEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetEnabled"></a>

```typescript
public readonly diagramsnetEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires diagramsnet_url) Enable Diagrams.net integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#diagramsnet_enabled ApplicationSettings#diagramsnet_enabled}

---

##### `diagramsnetUrl`<sup>Optional</sup> <a name="diagramsnetUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diagramsnetUrl"></a>

```typescript
public readonly diagramsnetUrl: string;
```

- *Type:* string

The Diagrams.net instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#diagramsnet_url ApplicationSettings#diagramsnet_url}

---

##### `diffMaxFiles`<sup>Optional</sup> <a name="diffMaxFiles" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxFiles"></a>

```typescript
public readonly diffMaxFiles: number;
```

- *Type:* number

Maximum files in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#diff_max_files ApplicationSettings#diff_max_files}

---

##### `diffMaxLines`<sup>Optional</sup> <a name="diffMaxLines" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxLines"></a>

```typescript
public readonly diffMaxLines: number;
```

- *Type:* number

Maximum lines in a diff.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#diff_max_lines ApplicationSettings#diff_max_lines}

---

##### `diffMaxPatchBytes`<sup>Optional</sup> <a name="diffMaxPatchBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.diffMaxPatchBytes"></a>

```typescript
public readonly diffMaxPatchBytes: number;
```

- *Type:* number

Maximum diff patch size, in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#diff_max_patch_bytes ApplicationSettings#diff_max_patch_bytes}

---

##### `disableAdminOauthScopes`<sup>Optional</sup> <a name="disableAdminOauthScopes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableAdminOauthScopes"></a>

```typescript
public readonly disableAdminOauthScopes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Stops administrators from connecting their GitLab accounts to non-trusted OAuth 2.0 applications that have the api, read_api, read_repository, write_repository, read_registry, write_registry, or sudo scopes. Introduced in GitLab 15.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#disable_admin_oauth_scopes ApplicationSettings#disable_admin_oauth_scopes}

---

##### `disabledOauthSignInSources`<sup>Optional</sup> <a name="disabledOauthSignInSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disabledOauthSignInSources"></a>

```typescript
public readonly disabledOauthSignInSources: string[];
```

- *Type:* string[]

Disabled OAuth sign-in sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#disabled_oauth_sign_in_sources ApplicationSettings#disabled_oauth_sign_in_sources}

---

##### `disableFeedToken`<sup>Optional</sup> <a name="disableFeedToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disableFeedToken"></a>

```typescript
public readonly disableFeedToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable display of RSS/Atom and calendar feed tokens (introduced in GitLab 13.7).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#disable_feed_token ApplicationSettings#disable_feed_token}

---

##### `disablePersonalAccessTokens`<sup>Optional</sup> <a name="disablePersonalAccessTokens" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.disablePersonalAccessTokens"></a>

```typescript
public readonly disablePersonalAccessTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable personal access tokens.

Introduced in GitLab 15.7. Self-managed, Premium and Ultimate only. There is no method available to enable a personal access token that’s been disabled through the API. This is a known issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#disable_personal_access_tokens ApplicationSettings#disable_personal_access_tokens}

---

##### `dnsRebindingProtectionEnabled`<sup>Optional</sup> <a name="dnsRebindingProtectionEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dnsRebindingProtectionEnabled"></a>

```typescript
public readonly dnsRebindingProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enforce DNS rebinding attack protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#dns_rebinding_protection_enabled ApplicationSettings#dns_rebinding_protection_enabled}

---

##### `domainAllowlist`<sup>Optional</sup> <a name="domainAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainAllowlist"></a>

```typescript
public readonly domainAllowlist: string[];
```

- *Type:* string[]

Force people to use only corporate emails for sign-up. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#domain_allowlist ApplicationSettings#domain_allowlist}

---

##### `domainDenylist`<sup>Optional</sup> <a name="domainDenylist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylist"></a>

```typescript
public readonly domainDenylist: string[];
```

- *Type:* string[]

Users with email addresses that match these domains cannot sign up.

Wildcards allowed. Use separate lines for multiple entries. Ex: domain.com, *.domain.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#domain_denylist ApplicationSettings#domain_denylist}

---

##### `domainDenylistEnabled`<sup>Optional</sup> <a name="domainDenylistEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.domainDenylistEnabled"></a>

```typescript
public readonly domainDenylistEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: domain_denylist) Allows blocking sign-ups from emails from specific domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#domain_denylist_enabled ApplicationSettings#domain_denylist_enabled}

---

##### `downstreamPipelineTriggerLimitPerProjectUserSha`<sup>Optional</sup> <a name="downstreamPipelineTriggerLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.downstreamPipelineTriggerLimitPerProjectUserSha"></a>

```typescript
public readonly downstreamPipelineTriggerLimitPerProjectUserSha: number;
```

- *Type:* number

Maximum downstream pipeline trigger rate. Introduced in GitLab 16.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#downstream_pipeline_trigger_limit_per_project_user_sha ApplicationSettings#downstream_pipeline_trigger_limit_per_project_user_sha}

---

##### `dsaKeyRestriction`<sup>Optional</sup> <a name="dsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.dsaKeyRestriction"></a>

```typescript
public readonly dsaKeyRestriction: number;
```

- *Type:* number

The minimum allowed bit length of an uploaded DSA key. 0 means no restriction. -1 disables DSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#dsa_key_restriction ApplicationSettings#dsa_key_restriction}

---

##### `duoFeaturesEnabled`<sup>Optional</sup> <a name="duoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.duoFeaturesEnabled"></a>

```typescript
public readonly duoFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether GitLab Duo features are enabled for this instance. Introduced in GitLab 16.10. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#duo_features_enabled ApplicationSettings#duo_features_enabled}

---

##### `ecdsaKeyRestriction`<sup>Optional</sup> <a name="ecdsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaKeyRestriction"></a>

```typescript
public readonly ecdsaKeyRestriction: number;
```

- *Type:* number

The minimum allowed curve size (in bits) of an uploaded ECDSA key.

0 means no restriction. -1 disables ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#ecdsa_key_restriction ApplicationSettings#ecdsa_key_restriction}

---

##### `ecdsaSkKeyRestriction`<sup>Optional</sup> <a name="ecdsaSkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ecdsaSkKeyRestriction"></a>

```typescript
public readonly ecdsaSkKeyRestriction: number;
```

- *Type:* number

The minimum allowed curve size (in bits) of an uploaded ECDSA_SK key.

0 means no restriction. -1 disables ECDSA_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#ecdsa_sk_key_restriction ApplicationSettings#ecdsa_sk_key_restriction}

---

##### `ed25519KeyRestriction`<sup>Optional</sup> <a name="ed25519KeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519KeyRestriction"></a>

```typescript
public readonly ed25519KeyRestriction: number;
```

- *Type:* number

The minimum allowed curve size (in bits) of an uploaded ED25519 key.

0 means no restriction. -1 disables ED25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#ed25519_key_restriction ApplicationSettings#ed25519_key_restriction}

---

##### `ed25519SkKeyRestriction`<sup>Optional</sup> <a name="ed25519SkKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.ed25519SkKeyRestriction"></a>

```typescript
public readonly ed25519SkKeyRestriction: number;
```

- *Type:* number

The minimum allowed curve size (in bits) of an uploaded ED25519_SK key.

0 means no restriction. -1 disables ED25519_SK keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#ed25519_sk_key_restriction ApplicationSettings#ed25519_sk_key_restriction}

---

##### `eksAccessKeyId`<sup>Optional</sup> <a name="eksAccessKeyId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccessKeyId"></a>

```typescript
public readonly eksAccessKeyId: string;
```

- *Type:* string

AWS IAM access key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#eks_access_key_id ApplicationSettings#eks_access_key_id}

---

##### `eksAccountId`<sup>Optional</sup> <a name="eksAccountId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksAccountId"></a>

```typescript
public readonly eksAccountId: string;
```

- *Type:* string

Amazon account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#eks_account_id ApplicationSettings#eks_account_id}

---

##### `eksIntegrationEnabled`<sup>Optional</sup> <a name="eksIntegrationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksIntegrationEnabled"></a>

```typescript
public readonly eksIntegrationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable integration with Amazon EKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#eks_integration_enabled ApplicationSettings#eks_integration_enabled}

---

##### `eksSecretAccessKey`<sup>Optional</sup> <a name="eksSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.eksSecretAccessKey"></a>

```typescript
public readonly eksSecretAccessKey: string;
```

- *Type:* string

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#eks_secret_access_key ApplicationSettings#eks_secret_access_key}

---

##### `elasticsearchAws`<sup>Optional</sup> <a name="elasticsearchAws" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAws"></a>

```typescript
public readonly elasticsearchAws: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the use of AWS hosted Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_aws ApplicationSettings#elasticsearch_aws}

---

##### `elasticsearchAwsAccessKey`<sup>Optional</sup> <a name="elasticsearchAwsAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsAccessKey"></a>

```typescript
public readonly elasticsearchAwsAccessKey: string;
```

- *Type:* string

AWS IAM access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_aws_access_key ApplicationSettings#elasticsearch_aws_access_key}

---

##### `elasticsearchAwsRegion`<sup>Optional</sup> <a name="elasticsearchAwsRegion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsRegion"></a>

```typescript
public readonly elasticsearchAwsRegion: string;
```

- *Type:* string

The AWS region the Elasticsearch domain is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_aws_region ApplicationSettings#elasticsearch_aws_region}

---

##### `elasticsearchAwsSecretAccessKey`<sup>Optional</sup> <a name="elasticsearchAwsSecretAccessKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchAwsSecretAccessKey"></a>

```typescript
public readonly elasticsearchAwsSecretAccessKey: string;
```

- *Type:* string

AWS IAM secret access key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_aws_secret_access_key ApplicationSettings#elasticsearch_aws_secret_access_key}

---

##### `elasticsearchIndexedFieldLengthLimit`<sup>Optional</sup> <a name="elasticsearchIndexedFieldLengthLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFieldLengthLimit"></a>

```typescript
public readonly elasticsearchIndexedFieldLengthLimit: number;
```

- *Type:* number

Maximum size of text fields to index by Elasticsearch.

0 value means no limit. This does not apply to repository and wiki indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_indexed_field_length_limit ApplicationSettings#elasticsearch_indexed_field_length_limit}

---

##### `elasticsearchIndexedFileSizeLimitKb`<sup>Optional</sup> <a name="elasticsearchIndexedFileSizeLimitKb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexedFileSizeLimitKb"></a>

```typescript
public readonly elasticsearchIndexedFileSizeLimitKb: number;
```

- *Type:* number

Maximum size of repository and wiki files that are indexed by Elasticsearch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_indexed_file_size_limit_kb ApplicationSettings#elasticsearch_indexed_file_size_limit_kb}

---

##### `elasticsearchIndexing`<sup>Optional</sup> <a name="elasticsearchIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchIndexing"></a>

```typescript
public readonly elasticsearchIndexing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Elasticsearch indexing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_indexing ApplicationSettings#elasticsearch_indexing}

---

##### `elasticsearchLimitIndexing`<sup>Optional</sup> <a name="elasticsearchLimitIndexing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchLimitIndexing"></a>

```typescript
public readonly elasticsearchLimitIndexing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit Elasticsearch to index certain namespaces and projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_limit_indexing ApplicationSettings#elasticsearch_limit_indexing}

---

##### `elasticsearchMaxBulkConcurrency`<sup>Optional</sup> <a name="elasticsearchMaxBulkConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkConcurrency"></a>

```typescript
public readonly elasticsearchMaxBulkConcurrency: number;
```

- *Type:* number

Maximum concurrency of Elasticsearch bulk requests per indexing operation. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_max_bulk_concurrency ApplicationSettings#elasticsearch_max_bulk_concurrency}

---

##### `elasticsearchMaxBulkSizeMb`<sup>Optional</sup> <a name="elasticsearchMaxBulkSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxBulkSizeMb"></a>

```typescript
public readonly elasticsearchMaxBulkSizeMb: number;
```

- *Type:* number

Maximum size of Elasticsearch bulk indexing requests in MB. This only applies to repository indexing operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_max_bulk_size_mb ApplicationSettings#elasticsearch_max_bulk_size_mb}

---

##### `elasticsearchMaxCodeIndexingConcurrency`<sup>Optional</sup> <a name="elasticsearchMaxCodeIndexingConcurrency" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchMaxCodeIndexingConcurrency"></a>

```typescript
public readonly elasticsearchMaxCodeIndexingConcurrency: number;
```

- *Type:* number

Maximum concurrency of Elasticsearch code indexing background jobs. This only applies to repository indexing operations. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_max_code_indexing_concurrency ApplicationSettings#elasticsearch_max_code_indexing_concurrency}

---

##### `elasticsearchNamespaceIds`<sup>Optional</sup> <a name="elasticsearchNamespaceIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchNamespaceIds"></a>

```typescript
public readonly elasticsearchNamespaceIds: number[];
```

- *Type:* number[]

The namespaces to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_namespace_ids ApplicationSettings#elasticsearch_namespace_ids}

---

##### `elasticsearchPassword`<sup>Optional</sup> <a name="elasticsearchPassword" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchPassword"></a>

```typescript
public readonly elasticsearchPassword: string;
```

- *Type:* string

The password of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_password ApplicationSettings#elasticsearch_password}

---

##### `elasticsearchProjectIds`<sup>Optional</sup> <a name="elasticsearchProjectIds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchProjectIds"></a>

```typescript
public readonly elasticsearchProjectIds: number[];
```

- *Type:* number[]

The projects to index via Elasticsearch if elasticsearch_limit_indexing is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_project_ids ApplicationSettings#elasticsearch_project_ids}

---

##### `elasticsearchRequeueWorkers`<sup>Optional</sup> <a name="elasticsearchRequeueWorkers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchRequeueWorkers"></a>

```typescript
public readonly elasticsearchRequeueWorkers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable automatic requeuing of indexing workers.

This improves non-code indexing throughput by enqueuing Sidekiq jobs until all documents are processed. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_requeue_workers ApplicationSettings#elasticsearch_requeue_workers}

---

##### `elasticsearchSearch`<sup>Optional</sup> <a name="elasticsearchSearch" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchSearch"></a>

```typescript
public readonly elasticsearchSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Elasticsearch search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_search ApplicationSettings#elasticsearch_search}

---

##### `elasticsearchUrl`<sup>Optional</sup> <a name="elasticsearchUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUrl"></a>

```typescript
public readonly elasticsearchUrl: string[];
```

- *Type:* string[]

The URL to use for connecting to Elasticsearch. Use a comma-separated list to support cluster (for example, http://localhost:9200, http://localhost:9201).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_url ApplicationSettings#elasticsearch_url}

---

##### `elasticsearchUsername`<sup>Optional</sup> <a name="elasticsearchUsername" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchUsername"></a>

```typescript
public readonly elasticsearchUsername: string;
```

- *Type:* string

The username of your Elasticsearch instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_username ApplicationSettings#elasticsearch_username}

---

##### `elasticsearchWorkerNumberOfShards`<sup>Optional</sup> <a name="elasticsearchWorkerNumberOfShards" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.elasticsearchWorkerNumberOfShards"></a>

```typescript
public readonly elasticsearchWorkerNumberOfShards: number;
```

- *Type:* number

Number of indexing worker shards.

This improves non-code indexing throughput by enqueuing more parallel Sidekiq jobs. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#elasticsearch_worker_number_of_shards ApplicationSettings#elasticsearch_worker_number_of_shards}

---

##### `emailAdditionalText`<sup>Optional</sup> <a name="emailAdditionalText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAdditionalText"></a>

```typescript
public readonly emailAdditionalText: string;
```

- *Type:* string

Additional text added to the bottom of every email for legal/auditing/compliance reasons.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#email_additional_text ApplicationSettings#email_additional_text}

---

##### `emailAuthorInBody`<sup>Optional</sup> <a name="emailAuthorInBody" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailAuthorInBody"></a>

```typescript
public readonly emailAuthorInBody: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Some email servers do not support overriding the email sender name.

Enable this option to include the name of the author of the issue, merge request or comment in the email body instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#email_author_in_body ApplicationSettings#email_author_in_body}

---

##### `emailConfirmationSetting`<sup>Optional</sup> <a name="emailConfirmationSetting" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.emailConfirmationSetting"></a>

```typescript
public readonly emailConfirmationSetting: string;
```

- *Type:* string

Specifies whether users must confirm their email before sign in. Possible values are off, soft, and hard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#email_confirmation_setting ApplicationSettings#email_confirmation_setting}

---

##### `enableArtifactExternalRedirectWarningPage`<sup>Optional</sup> <a name="enableArtifactExternalRedirectWarningPage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enableArtifactExternalRedirectWarningPage"></a>

```typescript
public readonly enableArtifactExternalRedirectWarningPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Show the external redirect page that warns you about user-generated content in GitLab Pages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#enable_artifact_external_redirect_warning_page ApplicationSettings#enable_artifact_external_redirect_warning_page}

---

##### `enabledGitAccessProtocol`<sup>Optional</sup> <a name="enabledGitAccessProtocol" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enabledGitAccessProtocol"></a>

```typescript
public readonly enabledGitAccessProtocol: string;
```

- *Type:* string

Enabled protocols for Git access. Allowed values are: ssh, http, and nil to allow both protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#enabled_git_access_protocol ApplicationSettings#enabled_git_access_protocol}

---

##### `enforceNamespaceStorageLimit`<sup>Optional</sup> <a name="enforceNamespaceStorageLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceNamespaceStorageLimit"></a>

```typescript
public readonly enforceNamespaceStorageLimit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enabling this permits enforcement of namespace storage limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#enforce_namespace_storage_limit ApplicationSettings#enforce_namespace_storage_limit}

---

##### `enforceTerms`<sup>Optional</sup> <a name="enforceTerms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.enforceTerms"></a>

```typescript
public readonly enforceTerms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: terms) Enforce application ToS to all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#enforce_terms ApplicationSettings#enforce_terms}

---

##### `externalAuthClientCert`<sup>Optional</sup> <a name="externalAuthClientCert" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientCert"></a>

```typescript
public readonly externalAuthClientCert: string;
```

- *Type:* string

(If enabled, requires: external_auth_client_key) The certificate to use to authenticate with the external authorization service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_auth_client_cert ApplicationSettings#external_auth_client_cert}

---

##### `externalAuthClientKey`<sup>Optional</sup> <a name="externalAuthClientKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKey"></a>

```typescript
public readonly externalAuthClientKey: string;
```

- *Type:* string

Private key for the certificate when authentication is required for the external authorization service, this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_auth_client_key ApplicationSettings#external_auth_client_key}

---

##### `externalAuthClientKeyPass`<sup>Optional</sup> <a name="externalAuthClientKeyPass" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthClientKeyPass"></a>

```typescript
public readonly externalAuthClientKeyPass: string;
```

- *Type:* string

Passphrase to use for the private key when authenticating with the external service this is encrypted when stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_auth_client_key_pass ApplicationSettings#external_auth_client_key_pass}

---

##### `externalAuthorizationServiceDefaultLabel`<sup>Optional</sup> <a name="externalAuthorizationServiceDefaultLabel" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceDefaultLabel"></a>

```typescript
public readonly externalAuthorizationServiceDefaultLabel: string;
```

- *Type:* string

The default classification label to use when requesting authorization and no classification label has been specified on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_authorization_service_default_label ApplicationSettings#external_authorization_service_default_label}

---

##### `externalAuthorizationServiceEnabled`<sup>Optional</sup> <a name="externalAuthorizationServiceEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceEnabled"></a>

```typescript
public readonly externalAuthorizationServiceEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: external_authorization_service_default_label, external_authorization_service_timeout and external_authorization_service_url) Enable using an external authorization service for accessing projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_authorization_service_enabled ApplicationSettings#external_authorization_service_enabled}

---

##### `externalAuthorizationServiceTimeout`<sup>Optional</sup> <a name="externalAuthorizationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceTimeout"></a>

```typescript
public readonly externalAuthorizationServiceTimeout: number;
```

- *Type:* number

The timeout after which an authorization request is aborted, in seconds.

When a request times out, access is denied to the user. (min: 0.001, max: 10, step: 0.001).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_authorization_service_timeout ApplicationSettings#external_authorization_service_timeout}

---

##### `externalAuthorizationServiceUrl`<sup>Optional</sup> <a name="externalAuthorizationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalAuthorizationServiceUrl"></a>

```typescript
public readonly externalAuthorizationServiceUrl: string;
```

- *Type:* string

URL to which authorization requests are directed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_authorization_service_url ApplicationSettings#external_authorization_service_url}

---

##### `externalPipelineValidationServiceTimeout`<sup>Optional</sup> <a name="externalPipelineValidationServiceTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceTimeout"></a>

```typescript
public readonly externalPipelineValidationServiceTimeout: number;
```

- *Type:* number

How long to wait for a response from the pipeline validation service. Assumes OK if it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_pipeline_validation_service_timeout ApplicationSettings#external_pipeline_validation_service_timeout}

---

##### `externalPipelineValidationServiceToken`<sup>Optional</sup> <a name="externalPipelineValidationServiceToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceToken"></a>

```typescript
public readonly externalPipelineValidationServiceToken: string;
```

- *Type:* string

Optional. Token to include as the X-Gitlab-Token header in requests to the URL in external_pipeline_validation_service_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_pipeline_validation_service_token ApplicationSettings#external_pipeline_validation_service_token}

---

##### `externalPipelineValidationServiceUrl`<sup>Optional</sup> <a name="externalPipelineValidationServiceUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.externalPipelineValidationServiceUrl"></a>

```typescript
public readonly externalPipelineValidationServiceUrl: string;
```

- *Type:* string

URL to use for pipeline validation requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#external_pipeline_validation_service_url ApplicationSettings#external_pipeline_validation_service_url}

---

##### `failedLoginAttemptsUnlockPeriodInMinutes`<sup>Optional</sup> <a name="failedLoginAttemptsUnlockPeriodInMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.failedLoginAttemptsUnlockPeriodInMinutes"></a>

```typescript
public readonly failedLoginAttemptsUnlockPeriodInMinutes: number;
```

- *Type:* number

Time period in minutes after which the user is unlocked when maximum number of failed sign-in attempts reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#failed_login_attempts_unlock_period_in_minutes ApplicationSettings#failed_login_attempts_unlock_period_in_minutes}

---

##### `fileTemplateProjectId`<sup>Optional</sup> <a name="fileTemplateProjectId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.fileTemplateProjectId"></a>

```typescript
public readonly fileTemplateProjectId: number;
```

- *Type:* number

The ID of a project to load custom file templates from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#file_template_project_id ApplicationSettings#file_template_project_id}

---

##### `firstDayOfWeek`<sup>Optional</sup> <a name="firstDayOfWeek" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.firstDayOfWeek"></a>

```typescript
public readonly firstDayOfWeek: number;
```

- *Type:* number

Start day of the week for calendar views and date pickers.

Valid values are 0 for Sunday, 1 for Monday, and 6 for Saturday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#first_day_of_week ApplicationSettings#first_day_of_week}

---

##### `geoNodeAllowedIps`<sup>Optional</sup> <a name="geoNodeAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoNodeAllowedIps"></a>

```typescript
public readonly geoNodeAllowedIps: string;
```

- *Type:* string

Comma-separated list of IPs and CIDRs of allowed secondary nodes. For example, 1.1.1.1, 2.2.2.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#geo_node_allowed_ips ApplicationSettings#geo_node_allowed_ips}

---

##### `geoStatusTimeout`<sup>Optional</sup> <a name="geoStatusTimeout" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.geoStatusTimeout"></a>

```typescript
public readonly geoStatusTimeout: number;
```

- *Type:* number

The amount of seconds after which a request to get a secondary node status times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#geo_status_timeout ApplicationSettings#geo_status_timeout}

---

##### `gitalyTimeoutDefault`<sup>Optional</sup> <a name="gitalyTimeoutDefault" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutDefault"></a>

```typescript
public readonly gitalyTimeoutDefault: number;
```

- *Type:* number

Default Gitaly timeout, in seconds.

This timeout is not enforced for Git fetch/push operations or Sidekiq jobs. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#gitaly_timeout_default ApplicationSettings#gitaly_timeout_default}

---

##### `gitalyTimeoutFast`<sup>Optional</sup> <a name="gitalyTimeoutFast" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutFast"></a>

```typescript
public readonly gitalyTimeoutFast: number;
```

- *Type:* number

Gitaly fast operation timeout, in seconds.

Some Gitaly operations are expected to be fast. If they exceed this threshold, there may be a problem with a storage shard and ‘failing fast’ can help maintain the stability of the GitLab instance. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#gitaly_timeout_fast ApplicationSettings#gitaly_timeout_fast}

---

##### `gitalyTimeoutMedium`<sup>Optional</sup> <a name="gitalyTimeoutMedium" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitalyTimeoutMedium"></a>

```typescript
public readonly gitalyTimeoutMedium: number;
```

- *Type:* number

Medium Gitaly timeout, in seconds.

This should be a value between the Fast and the Default timeout. Set to 0 to disable timeouts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#gitaly_timeout_medium ApplicationSettings#gitaly_timeout_medium}

---

##### `gitlabShellOperationLimit`<sup>Optional</sup> <a name="gitlabShellOperationLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitlabShellOperationLimit"></a>

```typescript
public readonly gitlabShellOperationLimit: number;
```

- *Type:* number

Maximum number of Git operations per minute a user can perform. Introduced in GitLab 16.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#gitlab_shell_operation_limit ApplicationSettings#gitlab_shell_operation_limit}

---

##### `gitpodEnabled`<sup>Optional</sup> <a name="gitpodEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodEnabled"></a>

```typescript
public readonly gitpodEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Gitpod integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#gitpod_enabled ApplicationSettings#gitpod_enabled}

---

##### `gitpodUrl`<sup>Optional</sup> <a name="gitpodUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitpodUrl"></a>

```typescript
public readonly gitpodUrl: string;
```

- *Type:* string

The Gitpod instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#gitpod_url ApplicationSettings#gitpod_url}

---

##### `gitRateLimitUsersAlertlist`<sup>Optional</sup> <a name="gitRateLimitUsersAlertlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAlertlist"></a>

```typescript
public readonly gitRateLimitUsersAlertlist: number[];
```

- *Type:* number[]

List of user IDs that are emailed when the Git abuse rate limit is exceeded.

Maximum: 100 user IDs. Introduced in GitLab 15.9. Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#git_rate_limit_users_alertlist ApplicationSettings#git_rate_limit_users_alertlist}

---

##### `gitRateLimitUsersAllowlist`<sup>Optional</sup> <a name="gitRateLimitUsersAllowlist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitRateLimitUsersAllowlist"></a>

```typescript
public readonly gitRateLimitUsersAllowlist: string[];
```

- *Type:* string[]

List of usernames excluded from Git anti-abuse rate limits. Maximum: 100 usernames. Introduced in GitLab 15.2. Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#git_rate_limit_users_allowlist ApplicationSettings#git_rate_limit_users_allowlist}

---

##### `gitTwoFactorSessionExpiry`<sup>Optional</sup> <a name="gitTwoFactorSessionExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gitTwoFactorSessionExpiry"></a>

```typescript
public readonly gitTwoFactorSessionExpiry: number;
```

- *Type:* number

Maximum duration (in minutes) of a session for Git operations when 2FA is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#git_two_factor_session_expiry ApplicationSettings#git_two_factor_session_expiry}

---

##### `globallyAllowedIps`<sup>Optional</sup> <a name="globallyAllowedIps" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.globallyAllowedIps"></a>

```typescript
public readonly globallyAllowedIps: string;
```

- *Type:* string

Comma-separated list of IP addresses and CIDRs always allowed for inbound traffic. For example, 1.1.1.1, 2.2.2.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#globally_allowed_ips ApplicationSettings#globally_allowed_ips}

---

##### `grafanaEnabled`<sup>Optional</sup> <a name="grafanaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaEnabled"></a>

```typescript
public readonly grafanaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Grafana.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#grafana_enabled ApplicationSettings#grafana_enabled}

---

##### `grafanaUrl`<sup>Optional</sup> <a name="grafanaUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.grafanaUrl"></a>

```typescript
public readonly grafanaUrl: string;
```

- *Type:* string

Grafana URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#grafana_url ApplicationSettings#grafana_url}

---

##### `gravatarEnabled`<sup>Optional</sup> <a name="gravatarEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.gravatarEnabled"></a>

```typescript
public readonly gravatarEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Gravatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#gravatar_enabled ApplicationSettings#gravatar_enabled}

---

##### `groupOwnersCanManageDefaultBranchProtection`<sup>Optional</sup> <a name="groupOwnersCanManageDefaultBranchProtection" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.groupOwnersCanManageDefaultBranchProtection"></a>

```typescript
public readonly groupOwnersCanManageDefaultBranchProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent overrides of default branch protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#group_owners_can_manage_default_branch_protection ApplicationSettings#group_owners_can_manage_default_branch_protection}

---

##### `hashedStorageEnabled`<sup>Optional</sup> <a name="hashedStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hashedStorageEnabled"></a>

```typescript
public readonly hashedStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Create new projects using hashed storage paths: Enable immutable, hash-based paths and repository names to store repositories on disk.

This prevents repositories from having to be moved or renamed when the Project URL changes and may improve disk I/O performance. (Always enabled in GitLab versions 13.0 and later, configuration is scheduled for removal in 14.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#hashed_storage_enabled ApplicationSettings#hashed_storage_enabled}

---

##### `helpPageHideCommercialContent`<sup>Optional</sup> <a name="helpPageHideCommercialContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageHideCommercialContent"></a>

```typescript
public readonly helpPageHideCommercialContent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Hide marketing-related entries from help.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#help_page_hide_commercial_content ApplicationSettings#help_page_hide_commercial_content}

---

##### `helpPageSupportUrl`<sup>Optional</sup> <a name="helpPageSupportUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageSupportUrl"></a>

```typescript
public readonly helpPageSupportUrl: string;
```

- *Type:* string

Alternate support URL for help page and help dropdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#help_page_support_url ApplicationSettings#help_page_support_url}

---

##### `helpPageText`<sup>Optional</sup> <a name="helpPageText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpPageText"></a>

```typescript
public readonly helpPageText: string;
```

- *Type:* string

Custom text displayed on the help page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#help_page_text ApplicationSettings#help_page_text}

---

##### `helpText`<sup>Optional</sup> <a name="helpText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.helpText"></a>

```typescript
public readonly helpText: string;
```

- *Type:* string

GitLab server administrator information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#help_text ApplicationSettings#help_text}

---

##### `hideThirdPartyOffers`<sup>Optional</sup> <a name="hideThirdPartyOffers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.hideThirdPartyOffers"></a>

```typescript
public readonly hideThirdPartyOffers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not display offers from third parties in GitLab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#hide_third_party_offers ApplicationSettings#hide_third_party_offers}

---

##### `homePageUrl`<sup>Optional</sup> <a name="homePageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.homePageUrl"></a>

```typescript
public readonly homePageUrl: string;
```

- *Type:* string

Redirect to this URL when not logged in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#home_page_url ApplicationSettings#home_page_url}

---

##### `housekeepingEnabled`<sup>Optional</sup> <a name="housekeepingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingEnabled"></a>

```typescript
public readonly housekeepingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable Git housekeeping.

If enabled, requires either housekeeping_optimize_repository_period OR housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period.
Options housekeeping_bitmaps_enabled, housekeeping_full_repack_period, housekeeping_gc_period, and housekeeping_incremental_repack_period are deprecated. Use housekeeping_optimize_repository_period instead.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#housekeeping_enabled ApplicationSettings#housekeeping_enabled}

---

##### `housekeepingFullRepackPeriod`<sup>Optional</sup> <a name="housekeepingFullRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingFullRepackPeriod"></a>

```typescript
public readonly housekeepingFullRepackPeriod: number;
```

- *Type:* number

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#housekeeping_full_repack_period ApplicationSettings#housekeeping_full_repack_period}

---

##### `housekeepingGcPeriod`<sup>Optional</sup> <a name="housekeepingGcPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingGcPeriod"></a>

```typescript
public readonly housekeepingGcPeriod: number;
```

- *Type:* number

Number of Git pushes after which git gc is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#housekeeping_gc_period ApplicationSettings#housekeeping_gc_period}

---

##### `housekeepingIncrementalRepackPeriod`<sup>Optional</sup> <a name="housekeepingIncrementalRepackPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingIncrementalRepackPeriod"></a>

```typescript
public readonly housekeepingIncrementalRepackPeriod: number;
```

- *Type:* number

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#housekeeping_incremental_repack_period ApplicationSettings#housekeeping_incremental_repack_period}

---

##### `housekeepingOptimizeRepositoryPeriod`<sup>Optional</sup> <a name="housekeepingOptimizeRepositoryPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.housekeepingOptimizeRepositoryPeriod"></a>

```typescript
public readonly housekeepingOptimizeRepositoryPeriod: number;
```

- *Type:* number

Number of Git pushes after which an incremental git repack is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#housekeeping_optimize_repository_period ApplicationSettings#housekeeping_optimize_repository_period}

---

##### `htmlEmailsEnabled`<sup>Optional</sup> <a name="htmlEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.htmlEmailsEnabled"></a>

```typescript
public readonly htmlEmailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable HTML emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#html_emails_enabled ApplicationSettings#html_emails_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#id ApplicationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importSources`<sup>Optional</sup> <a name="importSources" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.importSources"></a>

```typescript
public readonly importSources: string[];
```

- *Type:* string[]

Sources to allow project import from. Valid values are: `github`, `bitbucket`, `bitbucket_server`, `fogbugz`, `git`, `gitlab_project`, `gitea`, `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#import_sources ApplicationSettings#import_sources}

---

##### `inactiveProjectsDeleteAfterMonths`<sup>Optional</sup> <a name="inactiveProjectsDeleteAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsDeleteAfterMonths"></a>

```typescript
public readonly inactiveProjectsDeleteAfterMonths: number;
```

- *Type:* number

If delete_inactive_projects is true, the time (in months) to wait before deleting inactive projects.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#inactive_projects_delete_after_months ApplicationSettings#inactive_projects_delete_after_months}

---

##### `inactiveProjectsMinSizeMb`<sup>Optional</sup> <a name="inactiveProjectsMinSizeMb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsMinSizeMb"></a>

```typescript
public readonly inactiveProjectsMinSizeMb: number;
```

- *Type:* number

If delete_inactive_projects is true, the minimum repository size for projects to be checked for inactivity.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#inactive_projects_min_size_mb ApplicationSettings#inactive_projects_min_size_mb}

---

##### `inactiveProjectsSendWarningEmailAfterMonths`<sup>Optional</sup> <a name="inactiveProjectsSendWarningEmailAfterMonths" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inactiveProjectsSendWarningEmailAfterMonths"></a>

```typescript
public readonly inactiveProjectsSendWarningEmailAfterMonths: number;
```

- *Type:* number

If delete_inactive_projects is true, sets the time (in months) to wait before emailing maintainers that the project is scheduled be deleted because it is inactive.

Introduced in GitLab 14.10. Became operational in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#inactive_projects_send_warning_email_after_months ApplicationSettings#inactive_projects_send_warning_email_after_months}

---

##### `includeOptionalMetricsInServicePing`<sup>Optional</sup> <a name="includeOptionalMetricsInServicePing" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.includeOptionalMetricsInServicePing"></a>

```typescript
public readonly includeOptionalMetricsInServicePing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not optional metrics are enabled in Service Ping. Introduced in GitLab 16.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#include_optional_metrics_in_service_ping ApplicationSettings#include_optional_metrics_in_service_ping}

---

##### `inProductMarketingEmailsEnabled`<sup>Optional</sup> <a name="inProductMarketingEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.inProductMarketingEmailsEnabled"></a>

```typescript
public readonly inProductMarketingEmailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable in-product marketing emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#in_product_marketing_emails_enabled ApplicationSettings#in_product_marketing_emails_enabled}

---

##### `invisibleCaptchaEnabled`<sup>Optional</sup> <a name="invisibleCaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.invisibleCaptchaEnabled"></a>

```typescript
public readonly invisibleCaptchaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Invisible CAPTCHA spam detection during sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#invisible_captcha_enabled ApplicationSettings#invisible_captcha_enabled}

---

##### `issuesCreateLimit`<sup>Optional</sup> <a name="issuesCreateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.issuesCreateLimit"></a>

```typescript
public readonly issuesCreateLimit: number;
```

- *Type:* number

Max number of issue creation requests per minute per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#issues_create_limit ApplicationSettings#issues_create_limit}

---

##### `jiraConnectApplicationKey`<sup>Optional</sup> <a name="jiraConnectApplicationKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectApplicationKey"></a>

```typescript
public readonly jiraConnectApplicationKey: string;
```

- *Type:* string

ID of the OAuth application used to authenticate with the GitLab for Jira Cloud app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#jira_connect_application_key ApplicationSettings#jira_connect_application_key}

---

##### `jiraConnectProxyUrl`<sup>Optional</sup> <a name="jiraConnectProxyUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectProxyUrl"></a>

```typescript
public readonly jiraConnectProxyUrl: string;
```

- *Type:* string

URL of the GitLab instance used as a proxy for the GitLab for Jira Cloud app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#jira_connect_proxy_url ApplicationSettings#jira_connect_proxy_url}

---

##### `jiraConnectPublicKeyStorageEnabled`<sup>Optional</sup> <a name="jiraConnectPublicKeyStorageEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.jiraConnectPublicKeyStorageEnabled"></a>

```typescript
public readonly jiraConnectPublicKeyStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable public key storage for the GitLab for Jira Cloud app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#jira_connect_public_key_storage_enabled ApplicationSettings#jira_connect_public_key_storage_enabled}

---

##### `keepLatestArtifact`<sup>Optional</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.keepLatestArtifact"></a>

```typescript
public readonly keepLatestArtifact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent the deletion of the artifacts from the most recent successful jobs, regardless of the expiry time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#keep_latest_artifact ApplicationSettings#keep_latest_artifact}

---

##### `localMarkdownVersion`<sup>Optional</sup> <a name="localMarkdownVersion" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.localMarkdownVersion"></a>

```typescript
public readonly localMarkdownVersion: number;
```

- *Type:* number

Increase this value when any cached Markdown should be invalidated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#local_markdown_version ApplicationSettings#local_markdown_version}

---

##### `lockDuoFeaturesEnabled`<sup>Optional</sup> <a name="lockDuoFeaturesEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.lockDuoFeaturesEnabled"></a>

```typescript
public readonly lockDuoFeaturesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the GitLab Duo features enabled setting is enforced for all subgroups.

Introduced in GitLab 16.10. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#lock_duo_features_enabled ApplicationSettings#lock_duo_features_enabled}

---

##### `mailgunEventsEnabled`<sup>Optional</sup> <a name="mailgunEventsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunEventsEnabled"></a>

```typescript
public readonly mailgunEventsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Mailgun event receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#mailgun_events_enabled ApplicationSettings#mailgun_events_enabled}

---

##### `mailgunSigningKey`<sup>Optional</sup> <a name="mailgunSigningKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mailgunSigningKey"></a>

```typescript
public readonly mailgunSigningKey: string;
```

- *Type:* string

The Mailgun HTTP webhook signing key for receiving events from webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#mailgun_signing_key ApplicationSettings#mailgun_signing_key}

---

##### `maintenanceMode`<sup>Optional</sup> <a name="maintenanceMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceMode"></a>

```typescript
public readonly maintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When instance is in maintenance mode, non-administrative users can sign in with read-only access and make read-only API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#maintenance_mode ApplicationSettings#maintenance_mode}

---

##### `maintenanceModeMessage`<sup>Optional</sup> <a name="maintenanceModeMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maintenanceModeMessage"></a>

```typescript
public readonly maintenanceModeMessage: string;
```

- *Type:* string

Message displayed when instance is in maintenance mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#maintenance_mode_message ApplicationSettings#maintenance_mode_message}

---

##### `mavenPackageRequestsForwarding`<sup>Optional</sup> <a name="mavenPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mavenPackageRequestsForwarding"></a>

```typescript
public readonly mavenPackageRequestsForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use repo.maven.apache.org as a default remote repository when the package is not found in the GitLab Package Registry for Maven. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#maven_package_requests_forwarding ApplicationSettings#maven_package_requests_forwarding}

---

##### `maxArtifactsSize`<sup>Optional</sup> <a name="maxArtifactsSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxArtifactsSize"></a>

```typescript
public readonly maxArtifactsSize: number;
```

- *Type:* number

Maximum artifacts size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_artifacts_size ApplicationSettings#max_artifacts_size}

---

##### `maxAttachmentSize`<sup>Optional</sup> <a name="maxAttachmentSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxAttachmentSize"></a>

```typescript
public readonly maxAttachmentSize: number;
```

- *Type:* number

Limit attachment size in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_attachment_size ApplicationSettings#max_attachment_size}

---

##### `maxDecompressedArchiveSize`<sup>Optional</sup> <a name="maxDecompressedArchiveSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxDecompressedArchiveSize"></a>

```typescript
public readonly maxDecompressedArchiveSize: number;
```

- *Type:* number

Maximum decompressed archive size in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_decompressed_archive_size ApplicationSettings#max_decompressed_archive_size}

---

##### `maxExportSize`<sup>Optional</sup> <a name="maxExportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxExportSize"></a>

```typescript
public readonly maxExportSize: number;
```

- *Type:* number

Maximum export size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_export_size ApplicationSettings#max_export_size}

---

##### `maxImportRemoteFileSize`<sup>Optional</sup> <a name="maxImportRemoteFileSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportRemoteFileSize"></a>

```typescript
public readonly maxImportRemoteFileSize: number;
```

- *Type:* number

Maximum remote file size for imports from external object storages. Introduced in GitLab 16.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_import_remote_file_size ApplicationSettings#max_import_remote_file_size}

---

##### `maxImportSize`<sup>Optional</sup> <a name="maxImportSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxImportSize"></a>

```typescript
public readonly maxImportSize: number;
```

- *Type:* number

Maximum import size in MB. 0 for unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_import_size ApplicationSettings#max_import_size}

---

##### `maxLoginAttempts`<sup>Optional</sup> <a name="maxLoginAttempts" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxLoginAttempts"></a>

```typescript
public readonly maxLoginAttempts: number;
```

- *Type:* number

Maximum number of sign-in attempts before locking out the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_login_attempts ApplicationSettings#max_login_attempts}

---

##### `maxNumberOfRepositoryDownloads`<sup>Optional</sup> <a name="maxNumberOfRepositoryDownloads" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloads"></a>

```typescript
public readonly maxNumberOfRepositoryDownloads: number;
```

- *Type:* number

Maximum number of unique repositories a user can download in the specified time period before they are banned.

Maximum: 10,000 repositories. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_number_of_repository_downloads ApplicationSettings#max_number_of_repository_downloads}

---

##### `maxNumberOfRepositoryDownloadsWithinTimePeriod`<sup>Optional</sup> <a name="maxNumberOfRepositoryDownloadsWithinTimePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxNumberOfRepositoryDownloadsWithinTimePeriod"></a>

```typescript
public readonly maxNumberOfRepositoryDownloadsWithinTimePeriod: number;
```

- *Type:* number

Reporting time period (in seconds). Maximum: 864000 seconds (10 days). Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_number_of_repository_downloads_within_time_period ApplicationSettings#max_number_of_repository_downloads_within_time_period}

---

##### `maxPagesSize`<sup>Optional</sup> <a name="maxPagesSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPagesSize"></a>

```typescript
public readonly maxPagesSize: number;
```

- *Type:* number

Maximum size of pages repositories in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_pages_size ApplicationSettings#max_pages_size}

---

##### `maxPersonalAccessTokenLifetime`<sup>Optional</sup> <a name="maxPersonalAccessTokenLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxPersonalAccessTokenLifetime"></a>

```typescript
public readonly maxPersonalAccessTokenLifetime: number;
```

- *Type:* number

Maximum allowable lifetime for access tokens in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_personal_access_token_lifetime ApplicationSettings#max_personal_access_token_lifetime}

---

##### `maxSshKeyLifetime`<sup>Optional</sup> <a name="maxSshKeyLifetime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxSshKeyLifetime"></a>

```typescript
public readonly maxSshKeyLifetime: number;
```

- *Type:* number

Maximum allowable lifetime for SSH keys in days. Introduced in GitLab 14.6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_ssh_key_lifetime ApplicationSettings#max_ssh_key_lifetime}

---

##### `maxTerraformStateSizeBytes`<sup>Optional</sup> <a name="maxTerraformStateSizeBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.maxTerraformStateSizeBytes"></a>

```typescript
public readonly maxTerraformStateSizeBytes: number;
```

- *Type:* number

Maximum size in bytes of the Terraform state files. Set this to 0 for unlimited file size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#max_terraform_state_size_bytes ApplicationSettings#max_terraform_state_size_bytes}

---

##### `metricsMethodCallThreshold`<sup>Optional</sup> <a name="metricsMethodCallThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.metricsMethodCallThreshold"></a>

```typescript
public readonly metricsMethodCallThreshold: number;
```

- *Type:* number

A method call is only tracked when it takes longer than the given amount of milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#metrics_method_call_threshold ApplicationSettings#metrics_method_call_threshold}

---

##### `minimumPasswordLength`<sup>Optional</sup> <a name="minimumPasswordLength" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.minimumPasswordLength"></a>

```typescript
public readonly minimumPasswordLength: number;
```

- *Type:* number

Indicates whether passwords require a minimum length. Introduced in GitLab 15.1. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#minimum_password_length ApplicationSettings#minimum_password_length}

---

##### `mirrorAvailable`<sup>Optional</sup> <a name="mirrorAvailable" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorAvailable"></a>

```typescript
public readonly mirrorAvailable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow repository mirroring to configured by project Maintainers. If disabled, only Administrators can configure repository mirroring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#mirror_available ApplicationSettings#mirror_available}

---

##### `mirrorCapacityThreshold`<sup>Optional</sup> <a name="mirrorCapacityThreshold" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorCapacityThreshold"></a>

```typescript
public readonly mirrorCapacityThreshold: number;
```

- *Type:* number

Minimum capacity to be available before scheduling more mirrors preemptively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#mirror_capacity_threshold ApplicationSettings#mirror_capacity_threshold}

---

##### `mirrorMaxCapacity`<sup>Optional</sup> <a name="mirrorMaxCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxCapacity"></a>

```typescript
public readonly mirrorMaxCapacity: number;
```

- *Type:* number

Maximum number of mirrors that can be synchronizing at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#mirror_max_capacity ApplicationSettings#mirror_max_capacity}

---

##### `mirrorMaxDelay`<sup>Optional</sup> <a name="mirrorMaxDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.mirrorMaxDelay"></a>

```typescript
public readonly mirrorMaxDelay: number;
```

- *Type:* number

Maximum time (in minutes) between updates that a mirror can have when scheduled to synchronize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#mirror_max_delay ApplicationSettings#mirror_max_delay}

---

##### `npmPackageRequestsForwarding`<sup>Optional</sup> <a name="npmPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.npmPackageRequestsForwarding"></a>

```typescript
public readonly npmPackageRequestsForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use npmjs.org as a default remote repository when the package is not found in the GitLab Package Registry for npm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#npm_package_requests_forwarding ApplicationSettings#npm_package_requests_forwarding}

---

##### `nugetSkipMetadataUrlValidation`<sup>Optional</sup> <a name="nugetSkipMetadataUrlValidation" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.nugetSkipMetadataUrlValidation"></a>

```typescript
public readonly nugetSkipMetadataUrlValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether to skip metadata URL validation for the NuGet package. Introduced in GitLab 17.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#nuget_skip_metadata_url_validation ApplicationSettings#nuget_skip_metadata_url_validation}

---

##### `outboundLocalRequestsWhitelist`<sup>Optional</sup> <a name="outboundLocalRequestsWhitelist" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.outboundLocalRequestsWhitelist"></a>

```typescript
public readonly outboundLocalRequestsWhitelist: string[];
```

- *Type:* string[]

Define a list of trusted domains or IP addresses to which local requests are allowed when local requests for hooks and services are disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#outbound_local_requests_whitelist ApplicationSettings#outbound_local_requests_whitelist}

---

##### `packageMetadataPurlTypes`<sup>Optional</sup> <a name="packageMetadataPurlTypes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageMetadataPurlTypes"></a>

```typescript
public readonly packageMetadataPurlTypes: number[];
```

- *Type:* number[]

List of package registry metadata to sync. See the list of the available values (https://gitlab.com/gitlab-org/gitlab/-/blob/ace16c20d5da7c4928dd03fb139692638b557fe3/app/models/concerns/enums/package_metadata.rb#L5). Self-managed, Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#package_metadata_purl_types ApplicationSettings#package_metadata_purl_types}

---

##### `packageRegistryAllowAnyoneToPullOption`<sup>Optional</sup> <a name="packageRegistryAllowAnyoneToPullOption" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryAllowAnyoneToPullOption"></a>

```typescript
public readonly packageRegistryAllowAnyoneToPullOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable to allow anyone to pull from Package Registry visible and changeable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#package_registry_allow_anyone_to_pull_option ApplicationSettings#package_registry_allow_anyone_to_pull_option}

---

##### `packageRegistryCleanupPoliciesWorkerCapacity`<sup>Optional</sup> <a name="packageRegistryCleanupPoliciesWorkerCapacity" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.packageRegistryCleanupPoliciesWorkerCapacity"></a>

```typescript
public readonly packageRegistryCleanupPoliciesWorkerCapacity: number;
```

- *Type:* number

Number of workers assigned to the packages cleanup policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#package_registry_cleanup_policies_worker_capacity ApplicationSettings#package_registry_cleanup_policies_worker_capacity}

---

##### `pagesDomainVerificationEnabled`<sup>Optional</sup> <a name="pagesDomainVerificationEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pagesDomainVerificationEnabled"></a>

```typescript
public readonly pagesDomainVerificationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Require users to prove ownership of custom domains.

Domain verification is an essential security measure for public GitLab sites. Users are required to demonstrate they control a domain before it is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#pages_domain_verification_enabled ApplicationSettings#pages_domain_verification_enabled}

---

##### `passwordAuthenticationEnabledForGit`<sup>Optional</sup> <a name="passwordAuthenticationEnabledForGit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForGit"></a>

```typescript
public readonly passwordAuthenticationEnabledForGit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable authentication for Git over HTTP(S) via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#password_authentication_enabled_for_git ApplicationSettings#password_authentication_enabled_for_git}

---

##### `passwordAuthenticationEnabledForWeb`<sup>Optional</sup> <a name="passwordAuthenticationEnabledForWeb" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordAuthenticationEnabledForWeb"></a>

```typescript
public readonly passwordAuthenticationEnabledForWeb: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable authentication for the web interface via a GitLab account password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#password_authentication_enabled_for_web ApplicationSettings#password_authentication_enabled_for_web}

---

##### `passwordLowercaseRequired`<sup>Optional</sup> <a name="passwordLowercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordLowercaseRequired"></a>

```typescript
public readonly passwordLowercaseRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether passwords require at least one lowercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#password_lowercase_required ApplicationSettings#password_lowercase_required}

---

##### `passwordNumberRequired`<sup>Optional</sup> <a name="passwordNumberRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordNumberRequired"></a>

```typescript
public readonly passwordNumberRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether passwords require at least one number. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#password_number_required ApplicationSettings#password_number_required}

---

##### `passwordSymbolRequired`<sup>Optional</sup> <a name="passwordSymbolRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordSymbolRequired"></a>

```typescript
public readonly passwordSymbolRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether passwords require at least one symbol character. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#password_symbol_required ApplicationSettings#password_symbol_required}

---

##### `passwordUppercaseRequired`<sup>Optional</sup> <a name="passwordUppercaseRequired" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.passwordUppercaseRequired"></a>

```typescript
public readonly passwordUppercaseRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether passwords require at least one uppercase letter. Introduced in GitLab 15.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#password_uppercase_required ApplicationSettings#password_uppercase_required}

---

##### `performanceBarAllowedGroupPath`<sup>Optional</sup> <a name="performanceBarAllowedGroupPath" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.performanceBarAllowedGroupPath"></a>

```typescript
public readonly performanceBarAllowedGroupPath: string;
```

- *Type:* string

Path of the group that is allowed to toggle the performance bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#performance_bar_allowed_group_path ApplicationSettings#performance_bar_allowed_group_path}

---

##### `personalAccessTokenPrefix`<sup>Optional</sup> <a name="personalAccessTokenPrefix" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.personalAccessTokenPrefix"></a>

```typescript
public readonly personalAccessTokenPrefix: string;
```

- *Type:* string

Prefix for all generated personal access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#personal_access_token_prefix ApplicationSettings#personal_access_token_prefix}

---

##### `pipelineLimitPerProjectUserSha`<sup>Optional</sup> <a name="pipelineLimitPerProjectUserSha" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pipelineLimitPerProjectUserSha"></a>

```typescript
public readonly pipelineLimitPerProjectUserSha: number;
```

- *Type:* number

Maximum number of pipeline creation requests per minute per user and commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#pipeline_limit_per_project_user_sha ApplicationSettings#pipeline_limit_per_project_user_sha}

---

##### `plantumlEnabled`<sup>Optional</sup> <a name="plantumlEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlEnabled"></a>

```typescript
public readonly plantumlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: plantuml_url) Enable PlantUML integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#plantuml_enabled ApplicationSettings#plantuml_enabled}

---

##### `plantumlUrl`<sup>Optional</sup> <a name="plantumlUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.plantumlUrl"></a>

```typescript
public readonly plantumlUrl: string;
```

- *Type:* string

The PlantUML instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#plantuml_url ApplicationSettings#plantuml_url}

---

##### `pollingIntervalMultiplier`<sup>Optional</sup> <a name="pollingIntervalMultiplier" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pollingIntervalMultiplier"></a>

```typescript
public readonly pollingIntervalMultiplier: number;
```

- *Type:* number

Interval multiplier used by endpoints that perform polling. Set to 0 to disable polling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#polling_interval_multiplier ApplicationSettings#polling_interval_multiplier}

---

##### `projectExportEnabled`<sup>Optional</sup> <a name="projectExportEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectExportEnabled"></a>

```typescript
public readonly projectExportEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable project export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#project_export_enabled ApplicationSettings#project_export_enabled}

---

##### `projectJobsApiRateLimit`<sup>Optional</sup> <a name="projectJobsApiRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectJobsApiRateLimit"></a>

```typescript
public readonly projectJobsApiRateLimit: number;
```

- *Type:* number

Maximum authenticated requests to /project/:id/jobs per minute. Introduced in GitLab 16.5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#project_jobs_api_rate_limit ApplicationSettings#project_jobs_api_rate_limit}

---

##### `projectsApiRateLimitUnauthenticated`<sup>Optional</sup> <a name="projectsApiRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.projectsApiRateLimitUnauthenticated"></a>

```typescript
public readonly projectsApiRateLimitUnauthenticated: number;
```

- *Type:* number

Introduced in GitLab 15.10. Max number of requests per 10 minutes per IP address for unauthenticated requests to the list all projects API. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#projects_api_rate_limit_unauthenticated ApplicationSettings#projects_api_rate_limit_unauthenticated}

---

##### `prometheusMetricsEnabled`<sup>Optional</sup> <a name="prometheusMetricsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.prometheusMetricsEnabled"></a>

```typescript
public readonly prometheusMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Prometheus metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#prometheus_metrics_enabled ApplicationSettings#prometheus_metrics_enabled}

---

##### `protectedCiVariables`<sup>Optional</sup> <a name="protectedCiVariables" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.protectedCiVariables"></a>

```typescript
public readonly protectedCiVariables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

CI/CD variables are protected by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#protected_ci_variables ApplicationSettings#protected_ci_variables}

---

##### `pushEventActivitiesLimit`<sup>Optional</sup> <a name="pushEventActivitiesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventActivitiesLimit"></a>

```typescript
public readonly pushEventActivitiesLimit: number;
```

- *Type:* number

Number of changes (branches or tags) in a single push to determine whether individual push events or bulk push events are created.

Bulk push events are created if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#push_event_activities_limit ApplicationSettings#push_event_activities_limit}

---

##### `pushEventHooksLimit`<sup>Optional</sup> <a name="pushEventHooksLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pushEventHooksLimit"></a>

```typescript
public readonly pushEventHooksLimit: number;
```

- *Type:* number

Number of changes (branches or tags) in a single push to determine whether webhooks and services fire or not.

Webhooks and services aren’t submitted if it surpasses that value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#push_event_hooks_limit ApplicationSettings#push_event_hooks_limit}

---

##### `pypiPackageRequestsForwarding`<sup>Optional</sup> <a name="pypiPackageRequestsForwarding" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.pypiPackageRequestsForwarding"></a>

```typescript
public readonly pypiPackageRequestsForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use pypi.org as a default remote repository when the package is not found in the GitLab Package Registry for PyPI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#pypi_package_requests_forwarding ApplicationSettings#pypi_package_requests_forwarding}

---

##### `rateLimitingResponseText`<sup>Optional</sup> <a name="rateLimitingResponseText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rateLimitingResponseText"></a>

```typescript
public readonly rateLimitingResponseText: string;
```

- *Type:* string

When rate limiting is enabled via the throttle_* settings, send this plain text response when a rate limit is exceeded.

‘Retry later’ is sent if this is blank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#rate_limiting_response_text ApplicationSettings#rate_limiting_response_text}

---

##### `rawBlobRequestLimit`<sup>Optional</sup> <a name="rawBlobRequestLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rawBlobRequestLimit"></a>

```typescript
public readonly rawBlobRequestLimit: number;
```

- *Type:* number

Max number of requests per minute for each raw path. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#raw_blob_request_limit ApplicationSettings#raw_blob_request_limit}

---

##### `recaptchaEnabled`<sup>Optional</sup> <a name="recaptchaEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaEnabled"></a>

```typescript
public readonly recaptchaEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: recaptcha_private_key and recaptcha_site_key) Enable reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#recaptcha_enabled ApplicationSettings#recaptcha_enabled}

---

##### `recaptchaPrivateKey`<sup>Optional</sup> <a name="recaptchaPrivateKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaPrivateKey"></a>

```typescript
public readonly recaptchaPrivateKey: string;
```

- *Type:* string

Private key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#recaptcha_private_key ApplicationSettings#recaptcha_private_key}

---

##### `recaptchaSiteKey`<sup>Optional</sup> <a name="recaptchaSiteKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.recaptchaSiteKey"></a>

```typescript
public readonly recaptchaSiteKey: string;
```

- *Type:* string

Site key for reCAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#recaptcha_site_key ApplicationSettings#recaptcha_site_key}

---

##### `receiveMaxInputSize`<sup>Optional</sup> <a name="receiveMaxInputSize" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receiveMaxInputSize"></a>

```typescript
public readonly receiveMaxInputSize: number;
```

- *Type:* number

Maximum push size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#receive_max_input_size ApplicationSettings#receive_max_input_size}

---

##### `receptiveClusterAgentsEnabled`<sup>Optional</sup> <a name="receptiveClusterAgentsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.receptiveClusterAgentsEnabled"></a>

```typescript
public readonly receptiveClusterAgentsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable receptive mode for GitLab Agents for Kubernetes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#receptive_cluster_agents_enabled ApplicationSettings#receptive_cluster_agents_enabled}

---

##### `rememberMeEnabled`<sup>Optional</sup> <a name="rememberMeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rememberMeEnabled"></a>

```typescript
public readonly rememberMeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Remember me setting. Introduced in GitLab 16.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#remember_me_enabled ApplicationSettings#remember_me_enabled}

---

##### `repositoryChecksEnabled`<sup>Optional</sup> <a name="repositoryChecksEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryChecksEnabled"></a>

```typescript
public readonly repositoryChecksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

GitLab periodically runs git fsck in all project and wiki repositories to look for silent disk corruption issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#repository_checks_enabled ApplicationSettings#repository_checks_enabled}

---

##### `repositorySizeLimit`<sup>Optional</sup> <a name="repositorySizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositorySizeLimit"></a>

```typescript
public readonly repositorySizeLimit: number;
```

- *Type:* number

Size limit per repository (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#repository_size_limit ApplicationSettings#repository_size_limit}

---

##### `repositoryStorages`<sup>Optional</sup> <a name="repositoryStorages" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStorages"></a>

```typescript
public readonly repositoryStorages: string[];
```

- *Type:* string[]

(GitLab 13.0 and earlier) List of names of enabled storage paths, taken from gitlab.yml. New projects are created in one of these stores, chosen at random.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#repository_storages ApplicationSettings#repository_storages}

---

##### `repositoryStoragesWeighted`<sup>Optional</sup> <a name="repositoryStoragesWeighted" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.repositoryStoragesWeighted"></a>

```typescript
public readonly repositoryStoragesWeighted: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

(GitLab 13.1 and later) Hash of names of taken from gitlab.yml to weights. New projects are created in one of these stores, chosen by a weighted random selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#repository_storages_weighted ApplicationSettings#repository_storages_weighted}

---

##### `requireAdminApprovalAfterUserSignup`<sup>Optional</sup> <a name="requireAdminApprovalAfterUserSignup" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminApprovalAfterUserSignup"></a>

```typescript
public readonly requireAdminApprovalAfterUserSignup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, any user that signs up for an account using the registration form is placed under a Pending approval state and has to be explicitly approved by an administrator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#require_admin_approval_after_user_signup ApplicationSettings#require_admin_approval_after_user_signup}

---

##### `requireAdminTwoFactorAuthentication`<sup>Optional</sup> <a name="requireAdminTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireAdminTwoFactorAuthentication"></a>

```typescript
public readonly requireAdminTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow administrators to require 2FA for all administrators on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#require_admin_two_factor_authentication ApplicationSettings#require_admin_two_factor_authentication}

---

##### `requirePersonalAccessTokenExpiry`<sup>Optional</sup> <a name="requirePersonalAccessTokenExpiry" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requirePersonalAccessTokenExpiry"></a>

```typescript
public readonly requirePersonalAccessTokenExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When enabled, users must set an expiration date when creating a group or project access token, or a personal access token owned by a non-service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#require_personal_access_token_expiry ApplicationSettings#require_personal_access_token_expiry}

---

##### `requireTwoFactorAuthentication`<sup>Optional</sup> <a name="requireTwoFactorAuthentication" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.requireTwoFactorAuthentication"></a>

```typescript
public readonly requireTwoFactorAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: two_factor_grace_period) Require all users to set up Two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#require_two_factor_authentication ApplicationSettings#require_two_factor_authentication}

---

##### `restrictedVisibilityLevels`<sup>Optional</sup> <a name="restrictedVisibilityLevels" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.restrictedVisibilityLevels"></a>

```typescript
public readonly restrictedVisibilityLevels: string[];
```

- *Type:* string[]

Selected levels cannot be used by non-Administrator users for groups, projects or snippets.

Can take private, internal and public as a parameter. Null means there is no restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#restricted_visibility_levels ApplicationSettings#restricted_visibility_levels}

---

##### `rsaKeyRestriction`<sup>Optional</sup> <a name="rsaKeyRestriction" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.rsaKeyRestriction"></a>

```typescript
public readonly rsaKeyRestriction: number;
```

- *Type:* number

The minimum allowed bit length of an uploaded RSA key. 0 means no restriction. -1 disables RSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#rsa_key_restriction ApplicationSettings#rsa_key_restriction}

---

##### `searchRateLimit`<sup>Optional</sup> <a name="searchRateLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimit"></a>

```typescript
public readonly searchRateLimit: number;
```

- *Type:* number

Max number of requests per minute for performing a search while authenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#search_rate_limit ApplicationSettings#search_rate_limit}

---

##### `searchRateLimitUnauthenticated`<sup>Optional</sup> <a name="searchRateLimitUnauthenticated" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.searchRateLimitUnauthenticated"></a>

```typescript
public readonly searchRateLimitUnauthenticated: number;
```

- *Type:* number

Max number of requests per minute for performing a search while unauthenticated. To disable throttling set to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#search_rate_limit_unauthenticated ApplicationSettings#search_rate_limit_unauthenticated}

---

##### `securityApprovalPoliciesLimit`<sup>Optional</sup> <a name="securityApprovalPoliciesLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityApprovalPoliciesLimit"></a>

```typescript
public readonly securityApprovalPoliciesLimit: number;
```

- *Type:* number

Maximum number of active merge request approval policies per security policy project. Maximum: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#security_approval_policies_limit ApplicationSettings#security_approval_policies_limit}

---

##### `securityPolicyGlobalGroupApproversEnabled`<sup>Optional</sup> <a name="securityPolicyGlobalGroupApproversEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityPolicyGlobalGroupApproversEnabled"></a>

```typescript
public readonly securityPolicyGlobalGroupApproversEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to look up merge request approval policy approval groups globally or within project hierarchies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#security_policy_global_group_approvers_enabled ApplicationSettings#security_policy_global_group_approvers_enabled}

---

##### `securityTxtContent`<sup>Optional</sup> <a name="securityTxtContent" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.securityTxtContent"></a>

```typescript
public readonly securityTxtContent: string;
```

- *Type:* string

Public security contact information. Introduced in GitLab 16.7.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#security_txt_content ApplicationSettings#security_txt_content}

---

##### `sendUserConfirmationEmail`<sup>Optional</sup> <a name="sendUserConfirmationEmail" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sendUserConfirmationEmail"></a>

```typescript
public readonly sendUserConfirmationEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Send confirmation email on sign-up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#send_user_confirmation_email ApplicationSettings#send_user_confirmation_email}

---

##### `serviceAccessTokensExpirationEnforced`<sup>Optional</sup> <a name="serviceAccessTokensExpirationEnforced" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.serviceAccessTokensExpirationEnforced"></a>

```typescript
public readonly serviceAccessTokensExpirationEnforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to indicate if token expiry date can be optional for service account users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#service_access_tokens_expiration_enforced ApplicationSettings#service_access_tokens_expiration_enforced}

---

##### `sessionExpireDelay`<sup>Optional</sup> <a name="sessionExpireDelay" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sessionExpireDelay"></a>

```typescript
public readonly sessionExpireDelay: number;
```

- *Type:* number

Session duration in minutes. GitLab restart is required to apply changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#session_expire_delay ApplicationSettings#session_expire_delay}

---

##### `sharedRunnersEnabled`<sup>Optional</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersEnabled"></a>

```typescript
public readonly sharedRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: shared_runners_text and shared_runners_minutes) Enable shared runners for new projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#shared_runners_enabled ApplicationSettings#shared_runners_enabled}

---

##### `sharedRunnersMinutes`<sup>Optional</sup> <a name="sharedRunnersMinutes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersMinutes"></a>

```typescript
public readonly sharedRunnersMinutes: number;
```

- *Type:* number

Set the maximum number of CI/CD minutes that a group can use on shared runners per month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#shared_runners_minutes ApplicationSettings#shared_runners_minutes}

---

##### `sharedRunnersText`<sup>Optional</sup> <a name="sharedRunnersText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sharedRunnersText"></a>

```typescript
public readonly sharedRunnersText: string;
```

- *Type:* string

Shared runners text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#shared_runners_text ApplicationSettings#shared_runners_text}

---

##### `sidekiqJobLimiterCompressionThresholdBytes`<sup>Optional</sup> <a name="sidekiqJobLimiterCompressionThresholdBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterCompressionThresholdBytes"></a>

```typescript
public readonly sidekiqJobLimiterCompressionThresholdBytes: number;
```

- *Type:* number

The threshold in bytes at which Sidekiq jobs are compressed before being stored in Redis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#sidekiq_job_limiter_compression_threshold_bytes ApplicationSettings#sidekiq_job_limiter_compression_threshold_bytes}

---

##### `sidekiqJobLimiterLimitBytes`<sup>Optional</sup> <a name="sidekiqJobLimiterLimitBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterLimitBytes"></a>

```typescript
public readonly sidekiqJobLimiterLimitBytes: number;
```

- *Type:* number

The threshold in bytes at which Sidekiq jobs are rejected. 0 means do not reject any job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#sidekiq_job_limiter_limit_bytes ApplicationSettings#sidekiq_job_limiter_limit_bytes}

---

##### `sidekiqJobLimiterMode`<sup>Optional</sup> <a name="sidekiqJobLimiterMode" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sidekiqJobLimiterMode"></a>

```typescript
public readonly sidekiqJobLimiterMode: string;
```

- *Type:* string

track or compress. Sets the behavior for Sidekiq job size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#sidekiq_job_limiter_mode ApplicationSettings#sidekiq_job_limiter_mode}

---

##### `signInText`<sup>Optional</sup> <a name="signInText" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signInText"></a>

```typescript
public readonly signInText: string;
```

- *Type:* string

Text on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#sign_in_text ApplicationSettings#sign_in_text}

---

##### `signupEnabled`<sup>Optional</sup> <a name="signupEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.signupEnabled"></a>

```typescript
public readonly signupEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#signup_enabled ApplicationSettings#signup_enabled}

---

##### `silentAdminExportsEnabled`<sup>Optional</sup> <a name="silentAdminExportsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentAdminExportsEnabled"></a>

```typescript
public readonly silentAdminExportsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Silent admin exports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#silent_admin_exports_enabled ApplicationSettings#silent_admin_exports_enabled}

---

##### `silentModeEnabled`<sup>Optional</sup> <a name="silentModeEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.silentModeEnabled"></a>

```typescript
public readonly silentModeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Silent mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#silent_mode_enabled ApplicationSettings#silent_mode_enabled}

---

##### `slackAppEnabled`<sup>Optional</sup> <a name="slackAppEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppEnabled"></a>

```typescript
public readonly slackAppEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: slack_app_id, slack_app_secret and slack_app_secret) Enable Slack app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#slack_app_enabled ApplicationSettings#slack_app_enabled}

---

##### `slackAppId`<sup>Optional</sup> <a name="slackAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppId"></a>

```typescript
public readonly slackAppId: string;
```

- *Type:* string

The app ID of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#slack_app_id ApplicationSettings#slack_app_id}

---

##### `slackAppSecret`<sup>Optional</sup> <a name="slackAppSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSecret"></a>

```typescript
public readonly slackAppSecret: string;
```

- *Type:* string

The app secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#slack_app_secret ApplicationSettings#slack_app_secret}

---

##### `slackAppSigningSecret`<sup>Optional</sup> <a name="slackAppSigningSecret" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppSigningSecret"></a>

```typescript
public readonly slackAppSigningSecret: string;
```

- *Type:* string

The signing secret of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#slack_app_signing_secret ApplicationSettings#slack_app_signing_secret}

---

##### `slackAppVerificationToken`<sup>Optional</sup> <a name="slackAppVerificationToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.slackAppVerificationToken"></a>

```typescript
public readonly slackAppVerificationToken: string;
```

- *Type:* string

The verification token of the Slack-app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#slack_app_verification_token ApplicationSettings#slack_app_verification_token}

---

##### `snippetSizeLimit`<sup>Optional</sup> <a name="snippetSizeLimit" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snippetSizeLimit"></a>

```typescript
public readonly snippetSizeLimit: number;
```

- *Type:* number

Max snippet content size in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#snippet_size_limit ApplicationSettings#snippet_size_limit}

---

##### `snowplowAppId`<sup>Optional</sup> <a name="snowplowAppId" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowAppId"></a>

```typescript
public readonly snowplowAppId: string;
```

- *Type:* string

The Snowplow site name / application ID. (for example, gitlab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#snowplow_app_id ApplicationSettings#snowplow_app_id}

---

##### `snowplowCollectorHostname`<sup>Optional</sup> <a name="snowplowCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCollectorHostname"></a>

```typescript
public readonly snowplowCollectorHostname: string;
```

- *Type:* string

The Snowplow collector hostname. (for example, snowplow.trx.gitlab.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#snowplow_collector_hostname ApplicationSettings#snowplow_collector_hostname}

---

##### `snowplowCookieDomain`<sup>Optional</sup> <a name="snowplowCookieDomain" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowCookieDomain"></a>

```typescript
public readonly snowplowCookieDomain: string;
```

- *Type:* string

The Snowplow cookie domain. (for example, .gitlab.com).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#snowplow_cookie_domain ApplicationSettings#snowplow_cookie_domain}

---

##### `snowplowDatabaseCollectorHostname`<sup>Optional</sup> <a name="snowplowDatabaseCollectorHostname" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowDatabaseCollectorHostname"></a>

```typescript
public readonly snowplowDatabaseCollectorHostname: string;
```

- *Type:* string

The Snowplow collector for database events hostname. (for example, db-snowplow.trx.gitlab.net).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#snowplow_database_collector_hostname ApplicationSettings#snowplow_database_collector_hostname}

---

##### `snowplowEnabled`<sup>Optional</sup> <a name="snowplowEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.snowplowEnabled"></a>

```typescript
public readonly snowplowEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable snowplow tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#snowplow_enabled ApplicationSettings#snowplow_enabled}

---

##### `sourcegraphEnabled`<sup>Optional</sup> <a name="sourcegraphEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphEnabled"></a>

```typescript
public readonly sourcegraphEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables Sourcegraph integration. If enabled, requires sourcegraph_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#sourcegraph_enabled ApplicationSettings#sourcegraph_enabled}

---

##### `sourcegraphPublicOnly`<sup>Optional</sup> <a name="sourcegraphPublicOnly" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphPublicOnly"></a>

```typescript
public readonly sourcegraphPublicOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Blocks Sourcegraph from being loaded on private and internal projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#sourcegraph_public_only ApplicationSettings#sourcegraph_public_only}

---

##### `sourcegraphUrl`<sup>Optional</sup> <a name="sourcegraphUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.sourcegraphUrl"></a>

```typescript
public readonly sourcegraphUrl: string;
```

- *Type:* string

The Sourcegraph instance URL for integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#sourcegraph_url ApplicationSettings#sourcegraph_url}

---

##### `spamCheckApiKey`<sup>Optional</sup> <a name="spamCheckApiKey" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckApiKey"></a>

```typescript
public readonly spamCheckApiKey: string;
```

- *Type:* string

API key used by GitLab for accessing the Spam Check service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#spam_check_api_key ApplicationSettings#spam_check_api_key}

---

##### `spamCheckEndpointEnabled`<sup>Optional</sup> <a name="spamCheckEndpointEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointEnabled"></a>

```typescript
public readonly spamCheckEndpointEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables spam checking using external Spam Check API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#spam_check_endpoint_enabled ApplicationSettings#spam_check_endpoint_enabled}

---

##### `spamCheckEndpointUrl`<sup>Optional</sup> <a name="spamCheckEndpointUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.spamCheckEndpointUrl"></a>

```typescript
public readonly spamCheckEndpointUrl: string;
```

- *Type:* string

URL of the external Spamcheck service endpoint.

Valid URI schemes are grpc or tls. Specifying tls forces communication to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#spam_check_endpoint_url ApplicationSettings#spam_check_endpoint_url}

---

##### `staticObjectsExternalStorageAuthToken`<sup>Optional</sup> <a name="staticObjectsExternalStorageAuthToken" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageAuthToken"></a>

```typescript
public readonly staticObjectsExternalStorageAuthToken: string;
```

- *Type:* string

Authentication token for the external storage linked in static_objects_external_storage_url.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#static_objects_external_storage_auth_token ApplicationSettings#static_objects_external_storage_auth_token}

---

##### `staticObjectsExternalStorageUrl`<sup>Optional</sup> <a name="staticObjectsExternalStorageUrl" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.staticObjectsExternalStorageUrl"></a>

```typescript
public readonly staticObjectsExternalStorageUrl: string;
```

- *Type:* string

URL to an external storage for repository static objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#static_objects_external_storage_url ApplicationSettings#static_objects_external_storage_url}

---

##### `suggestPipelineEnabled`<sup>Optional</sup> <a name="suggestPipelineEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.suggestPipelineEnabled"></a>

```typescript
public readonly suggestPipelineEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable pipeline suggestion banner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#suggest_pipeline_enabled ApplicationSettings#suggest_pipeline_enabled}

---

##### `terminalMaxSessionTime`<sup>Optional</sup> <a name="terminalMaxSessionTime" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terminalMaxSessionTime"></a>

```typescript
public readonly terminalMaxSessionTime: number;
```

- *Type:* number

Maximum time for web terminal websocket connection (in seconds). Set to 0 for unlimited time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#terminal_max_session_time ApplicationSettings#terminal_max_session_time}

---

##### `terms`<sup>Optional</sup> <a name="terms" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.terms"></a>

```typescript
public readonly terms: string;
```

- *Type:* string

(Required by: enforce_terms) Markdown content for the ToS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#terms ApplicationSettings#terms}

---

##### `throttleAuthenticatedApiEnabled`<sup>Optional</sup> <a name="throttleAuthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiEnabled"></a>

```typescript
public readonly throttleAuthenticatedApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: throttle_authenticated_api_period_in_seconds and throttle_authenticated_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_api_enabled ApplicationSettings#throttle_authenticated_api_enabled}

---

##### `throttleAuthenticatedApiPeriodInSeconds`<sup>Optional</sup> <a name="throttleAuthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiPeriodInSeconds"></a>

```typescript
public readonly throttleAuthenticatedApiPeriodInSeconds: number;
```

- *Type:* number

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_api_period_in_seconds ApplicationSettings#throttle_authenticated_api_period_in_seconds}

---

##### `throttleAuthenticatedApiRequestsPerPeriod`<sup>Optional</sup> <a name="throttleAuthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedApiRequestsPerPeriod"></a>

```typescript
public readonly throttleAuthenticatedApiRequestsPerPeriod: number;
```

- *Type:* number

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_api_requests_per_period ApplicationSettings#throttle_authenticated_api_requests_per_period}

---

##### `throttleAuthenticatedPackagesApiEnabled`<sup>Optional</sup> <a name="throttleAuthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiEnabled"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: throttle_authenticated_packages_api_period_in_seconds and throttle_authenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_packages_api_enabled ApplicationSettings#throttle_authenticated_packages_api_enabled}

---

##### `throttleAuthenticatedPackagesApiPeriodInSeconds`<sup>Optional</sup> <a name="throttleAuthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiPeriodInSeconds"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiPeriodInSeconds: number;
```

- *Type:* number

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_packages_api_period_in_seconds ApplicationSettings#throttle_authenticated_packages_api_period_in_seconds}

---

##### `throttleAuthenticatedPackagesApiRequestsPerPeriod`<sup>Optional</sup> <a name="throttleAuthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedPackagesApiRequestsPerPeriod"></a>

```typescript
public readonly throttleAuthenticatedPackagesApiRequestsPerPeriod: number;
```

- *Type:* number

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_packages_api_requests_per_period ApplicationSettings#throttle_authenticated_packages_api_requests_per_period}

---

##### `throttleAuthenticatedWebEnabled`<sup>Optional</sup> <a name="throttleAuthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebEnabled"></a>

```typescript
public readonly throttleAuthenticatedWebEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: throttle_authenticated_web_period_in_seconds and throttle_authenticated_web_requests_per_period) Enable authenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_web_enabled ApplicationSettings#throttle_authenticated_web_enabled}

---

##### `throttleAuthenticatedWebPeriodInSeconds`<sup>Optional</sup> <a name="throttleAuthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebPeriodInSeconds"></a>

```typescript
public readonly throttleAuthenticatedWebPeriodInSeconds: number;
```

- *Type:* number

Rate limit period (in seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_web_period_in_seconds ApplicationSettings#throttle_authenticated_web_period_in_seconds}

---

##### `throttleAuthenticatedWebRequestsPerPeriod`<sup>Optional</sup> <a name="throttleAuthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleAuthenticatedWebRequestsPerPeriod"></a>

```typescript
public readonly throttleAuthenticatedWebRequestsPerPeriod: number;
```

- *Type:* number

Maximum requests per period per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_authenticated_web_requests_per_period ApplicationSettings#throttle_authenticated_web_requests_per_period}

---

##### `throttleUnauthenticatedApiEnabled`<sup>Optional</sup> <a name="throttleUnauthenticatedApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiEnabled"></a>

```typescript
public readonly throttleUnauthenticatedApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: throttle_unauthenticated_api_period_in_seconds and throttle_unauthenticated_api_requests_per_period) Enable unauthenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_api_enabled ApplicationSettings#throttle_unauthenticated_api_enabled}

---

##### `throttleUnauthenticatedApiPeriodInSeconds`<sup>Optional</sup> <a name="throttleUnauthenticatedApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiPeriodInSeconds"></a>

```typescript
public readonly throttleUnauthenticatedApiPeriodInSeconds: number;
```

- *Type:* number

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_api_period_in_seconds}

---

##### `throttleUnauthenticatedApiRequestsPerPeriod`<sup>Optional</sup> <a name="throttleUnauthenticatedApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedApiRequestsPerPeriod"></a>

```typescript
public readonly throttleUnauthenticatedApiRequestsPerPeriod: number;
```

- *Type:* number

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_api_requests_per_period ApplicationSettings#throttle_unauthenticated_api_requests_per_period}

---

##### `throttleUnauthenticatedPackagesApiEnabled`<sup>Optional</sup> <a name="throttleUnauthenticatedPackagesApiEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiEnabled"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: throttle_unauthenticated_packages_api_period_in_seconds and throttle_unauthenticated_packages_api_requests_per_period) Enable authenticated API request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_packages_api_enabled ApplicationSettings#throttle_unauthenticated_packages_api_enabled}

---

##### `throttleUnauthenticatedPackagesApiPeriodInSeconds`<sup>Optional</sup> <a name="throttleUnauthenticatedPackagesApiPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiPeriodInSeconds"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiPeriodInSeconds: number;
```

- *Type:* number

Rate limit period (in seconds). View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_packages_api_period_in_seconds ApplicationSettings#throttle_unauthenticated_packages_api_period_in_seconds}

---

##### `throttleUnauthenticatedPackagesApiRequestsPerPeriod`<sup>Optional</sup> <a name="throttleUnauthenticatedPackagesApiRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedPackagesApiRequestsPerPeriod"></a>

```typescript
public readonly throttleUnauthenticatedPackagesApiRequestsPerPeriod: number;
```

- *Type:* number

Maximum requests per period per user. View Package Registry rate limits for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_packages_api_requests_per_period ApplicationSettings#throttle_unauthenticated_packages_api_requests_per_period}

---

##### `throttleUnauthenticatedWebEnabled`<sup>Optional</sup> <a name="throttleUnauthenticatedWebEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebEnabled"></a>

```typescript
public readonly throttleUnauthenticatedWebEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: throttle_unauthenticated_web_period_in_seconds and throttle_unauthenticated_web_requests_per_period) Enable unauthenticated web request rate limit.

Helps reduce request volume (for example, from crawlers or abusive bots).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_web_enabled ApplicationSettings#throttle_unauthenticated_web_enabled}

---

##### `throttleUnauthenticatedWebPeriodInSeconds`<sup>Optional</sup> <a name="throttleUnauthenticatedWebPeriodInSeconds" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebPeriodInSeconds"></a>

```typescript
public readonly throttleUnauthenticatedWebPeriodInSeconds: number;
```

- *Type:* number

Rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_web_period_in_seconds ApplicationSettings#throttle_unauthenticated_web_period_in_seconds}

---

##### `throttleUnauthenticatedWebRequestsPerPeriod`<sup>Optional</sup> <a name="throttleUnauthenticatedWebRequestsPerPeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.throttleUnauthenticatedWebRequestsPerPeriod"></a>

```typescript
public readonly throttleUnauthenticatedWebRequestsPerPeriod: number;
```

- *Type:* number

Max requests per period per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#throttle_unauthenticated_web_requests_per_period ApplicationSettings#throttle_unauthenticated_web_requests_per_period}

---

##### `timeTrackingLimitToHours`<sup>Optional</sup> <a name="timeTrackingLimitToHours" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.timeTrackingLimitToHours"></a>

```typescript
public readonly timeTrackingLimitToHours: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Limit display of time tracking units to hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#time_tracking_limit_to_hours ApplicationSettings#time_tracking_limit_to_hours}

---

##### `twoFactorGracePeriod`<sup>Optional</sup> <a name="twoFactorGracePeriod" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.twoFactorGracePeriod"></a>

```typescript
public readonly twoFactorGracePeriod: number;
```

- *Type:* number

Amount of time (in hours) that users are allowed to skip forced configuration of two-factor authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#two_factor_grace_period ApplicationSettings#two_factor_grace_period}

---

##### `unconfirmedUsersDeleteAfterDays`<sup>Optional</sup> <a name="unconfirmedUsersDeleteAfterDays" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.unconfirmedUsersDeleteAfterDays"></a>

```typescript
public readonly unconfirmedUsersDeleteAfterDays: number;
```

- *Type:* number

Specifies how many days after sign-up to delete users who have not confirmed their email.

Only applicable if delete_unconfirmed_users is set to true. Must be 1 or greater. Introduced in GitLab 16.1. Self-managed, Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#unconfirmed_users_delete_after_days ApplicationSettings#unconfirmed_users_delete_after_days}

---

##### `uniqueIpsLimitEnabled`<sup>Optional</sup> <a name="uniqueIpsLimitEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitEnabled"></a>

```typescript
public readonly uniqueIpsLimitEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(If enabled, requires: unique_ips_limit_per_user and unique_ips_limit_time_window) Limit sign in from multiple IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#unique_ips_limit_enabled ApplicationSettings#unique_ips_limit_enabled}

---

##### `uniqueIpsLimitPerUser`<sup>Optional</sup> <a name="uniqueIpsLimitPerUser" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitPerUser"></a>

```typescript
public readonly uniqueIpsLimitPerUser: number;
```

- *Type:* number

Maximum number of IPs per user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#unique_ips_limit_per_user ApplicationSettings#unique_ips_limit_per_user}

---

##### `uniqueIpsLimitTimeWindow`<sup>Optional</sup> <a name="uniqueIpsLimitTimeWindow" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.uniqueIpsLimitTimeWindow"></a>

```typescript
public readonly uniqueIpsLimitTimeWindow: number;
```

- *Type:* number

How many seconds an IP is counted towards the limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#unique_ips_limit_time_window ApplicationSettings#unique_ips_limit_time_window}

---

##### `updateRunnerVersionsEnabled`<sup>Optional</sup> <a name="updateRunnerVersionsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.updateRunnerVersionsEnabled"></a>

```typescript
public readonly updateRunnerVersionsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Fetch GitLab Runner release version data from GitLab.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#update_runner_versions_enabled ApplicationSettings#update_runner_versions_enabled}

---

##### `usagePingEnabled`<sup>Optional</sup> <a name="usagePingEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.usagePingEnabled"></a>

```typescript
public readonly usagePingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Every week GitLab reports license usage back to GitLab, Inc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#usage_ping_enabled ApplicationSettings#usage_ping_enabled}

---

##### `useClickhouseForAnalytics`<sup>Optional</sup> <a name="useClickhouseForAnalytics" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.useClickhouseForAnalytics"></a>

```typescript
public readonly useClickhouseForAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables ClickHouse as a data source for analytics reports.

ClickHouse must be configured for this setting to take effect. Available on Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#use_clickhouse_for_analytics ApplicationSettings#use_clickhouse_for_analytics}

---

##### `userDeactivationEmailsEnabled`<sup>Optional</sup> <a name="userDeactivationEmailsEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDeactivationEmailsEnabled"></a>

```typescript
public readonly userDeactivationEmailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Send an email to users upon account deactivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#user_deactivation_emails_enabled ApplicationSettings#user_deactivation_emails_enabled}

---

##### `userDefaultExternal`<sup>Optional</sup> <a name="userDefaultExternal" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultExternal"></a>

```typescript
public readonly userDefaultExternal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Newly registered users are external by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#user_default_external ApplicationSettings#user_default_external}

---

##### `userDefaultInternalRegex`<sup>Optional</sup> <a name="userDefaultInternalRegex" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultInternalRegex"></a>

```typescript
public readonly userDefaultInternalRegex: string;
```

- *Type:* string

Specify an email address regex pattern to identify default internal users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#user_default_internal_regex ApplicationSettings#user_default_internal_regex}

---

##### `userDefaultsToPrivateProfile`<sup>Optional</sup> <a name="userDefaultsToPrivateProfile" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userDefaultsToPrivateProfile"></a>

```typescript
public readonly userDefaultsToPrivateProfile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Newly created users have private profile by default. Introduced in GitLab 15.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#user_defaults_to_private_profile ApplicationSettings#user_defaults_to_private_profile}

---

##### `userOauthApplications`<sup>Optional</sup> <a name="userOauthApplications" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userOauthApplications"></a>

```typescript
public readonly userOauthApplications: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow users to register any application to use GitLab as an OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#user_oauth_applications ApplicationSettings#user_oauth_applications}

---

##### `userShowAddSshKeyMessage`<sup>Optional</sup> <a name="userShowAddSshKeyMessage" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.userShowAddSshKeyMessage"></a>

```typescript
public readonly userShowAddSshKeyMessage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to false disable the You won't be able to pull or push project code via SSH warning shown to users with no uploaded SSH key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#user_show_add_ssh_key_message ApplicationSettings#user_show_add_ssh_key_message}

---

##### `validRunnerRegistrars`<sup>Optional</sup> <a name="validRunnerRegistrars" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.validRunnerRegistrars"></a>

```typescript
public readonly validRunnerRegistrars: string[];
```

- *Type:* string[]

List of types which are allowed to register a GitLab Runner. Can be [], ['group'], ['project'] or ['group', 'project'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#valid_runner_registrars ApplicationSettings#valid_runner_registrars}

---

##### `versionCheckEnabled`<sup>Optional</sup> <a name="versionCheckEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.versionCheckEnabled"></a>

```typescript
public readonly versionCheckEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Let GitLab inform you when an update is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#version_check_enabled ApplicationSettings#version_check_enabled}

---

##### `webIdeClientsidePreviewEnabled`<sup>Optional</sup> <a name="webIdeClientsidePreviewEnabled" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.webIdeClientsidePreviewEnabled"></a>

```typescript
public readonly webIdeClientsidePreviewEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Live Preview (allow live previews of JavaScript projects in the Web IDE using CodeSandbox Live Preview).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#web_ide_clientside_preview_enabled ApplicationSettings#web_ide_clientside_preview_enabled}

---

##### `whatsNewVariant`<sup>Optional</sup> <a name="whatsNewVariant" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.whatsNewVariant"></a>

```typescript
public readonly whatsNewVariant: string;
```

- *Type:* string

What's new variant, possible values: all_tiers, current_tier, and disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#whats_new_variant ApplicationSettings#whats_new_variant}

---

##### `wikiPageMaxContentBytes`<sup>Optional</sup> <a name="wikiPageMaxContentBytes" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsConfig.property.wikiPageMaxContentBytes"></a>

```typescript
public readonly wikiPageMaxContentBytes: number;
```

- *Type:* number

Maximum wiki page content size in bytes. The minimum value is 1024 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#wiki_page_max_content_bytes ApplicationSettings#wiki_page_max_content_bytes}

---

### ApplicationSettingsDefaultBranchProtectionDefaults <a name="ApplicationSettingsDefaultBranchProtectionDefaults" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

const applicationSettingsDefaultBranchProtectionDefaults: applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToMerge">allowedToMerge</a></code> | <code>number[]</code> | An array of access levels allowed to merge. Supports Developer (30) or Maintainer (40). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToPush">allowedToPush</a></code> | <code>number[]</code> | An array of access levels allowed to push. Supports Developer (30) or Maintainer (40). |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowForcePush">allowForcePush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow force push for all users with push access. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.developerCanInitialPush">developerCanInitialPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow developers to initial push. |

---

##### `allowedToMerge`<sup>Optional</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToMerge"></a>

```typescript
public readonly allowedToMerge: number[];
```

- *Type:* number[]

An array of access levels allowed to merge. Supports Developer (30) or Maintainer (40).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allowed_to_merge ApplicationSettings#allowed_to_merge}

---

##### `allowedToPush`<sup>Optional</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowedToPush"></a>

```typescript
public readonly allowedToPush: number[];
```

- *Type:* number[]

An array of access levels allowed to push. Supports Developer (30) or Maintainer (40).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allowed_to_push ApplicationSettings#allowed_to_push}

---

##### `allowForcePush`<sup>Optional</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.allowForcePush"></a>

```typescript
public readonly allowForcePush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow force push for all users with push access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#allow_force_push ApplicationSettings#allow_force_push}

---

##### `developerCanInitialPush`<sup>Optional</sup> <a name="developerCanInitialPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults.property.developerCanInitialPush"></a>

```typescript
public readonly developerCanInitialPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow developers to initial push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/application_settings#developer_can_initial_push ApplicationSettings#developer_can_initial_push}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference <a name="ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer"></a>

```typescript
import { applicationSettings } from '@cdktf/provider-gitlab'

new applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge">resetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush">resetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush">resetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush">resetDeveloperCanInitialPush</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedToMerge` <a name="resetAllowedToMerge" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToMerge"></a>

```typescript
public resetAllowedToMerge(): void
```

##### `resetAllowedToPush` <a name="resetAllowedToPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowedToPush"></a>

```typescript
public resetAllowedToPush(): void
```

##### `resetAllowForcePush` <a name="resetAllowForcePush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetAllowForcePush"></a>

```typescript
public resetAllowForcePush(): void
```

##### `resetDeveloperCanInitialPush` <a name="resetDeveloperCanInitialPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.resetDeveloperCanInitialPush"></a>

```typescript
public resetDeveloperCanInitialPush(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput">allowedToMergeInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput">allowedToPushInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput">allowForcePushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput">developerCanInitialPushInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge">allowedToMerge</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush">allowedToPush</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush">allowForcePush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush">developerCanInitialPush</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedToMergeInput`<sup>Optional</sup> <a name="allowedToMergeInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMergeInput"></a>

```typescript
public readonly allowedToMergeInput: number[];
```

- *Type:* number[]

---

##### `allowedToPushInput`<sup>Optional</sup> <a name="allowedToPushInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPushInput"></a>

```typescript
public readonly allowedToPushInput: number[];
```

- *Type:* number[]

---

##### `allowForcePushInput`<sup>Optional</sup> <a name="allowForcePushInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePushInput"></a>

```typescript
public readonly allowForcePushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `developerCanInitialPushInput`<sup>Optional</sup> <a name="developerCanInitialPushInput" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPushInput"></a>

```typescript
public readonly developerCanInitialPushInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedToMerge`<sup>Required</sup> <a name="allowedToMerge" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToMerge"></a>

```typescript
public readonly allowedToMerge: number[];
```

- *Type:* number[]

---

##### `allowedToPush`<sup>Required</sup> <a name="allowedToPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowedToPush"></a>

```typescript
public readonly allowedToPush: number[];
```

- *Type:* number[]

---

##### `allowForcePush`<sup>Required</sup> <a name="allowForcePush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.allowForcePush"></a>

```typescript
public readonly allowForcePush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `developerCanInitialPush`<sup>Required</sup> <a name="developerCanInitialPush" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.developerCanInitialPush"></a>

```typescript
public readonly developerCanInitialPush: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApplicationSettingsDefaultBranchProtectionDefaults;
```

- *Type:* <a href="#@cdktf/provider-gitlab.applicationSettings.ApplicationSettingsDefaultBranchProtectionDefaults">ApplicationSettingsDefaultBranchProtectionDefaults</a>

---




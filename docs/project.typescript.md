# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-gitlab.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-gitlab.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.Project.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

new project.Project(scope: Construct, id: string, config: ProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy">putContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putPushRules">putPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline">resetAllowMergeOnSkippedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAllowPipelineTriggerApproveDeployment">resetAllowPipelineTriggerApproveDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel">resetAnalyticsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge">resetApprovalsBeforeMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy">resetArchiveOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines">resetAutoCancelPendingPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues">resetAutocloseReferencedIssues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy">resetAutoDevopsDeployStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled">resetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatar">resetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatarHash">resetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildCoverageRegex">resetBuildCoverageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy">resetBuildGitStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel">resetBuildsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildTimeout">resetBuildTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiConfigPath">resetCiConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth">resetCiDefaultGitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled">resetCiForwardDeploymentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiPipelineVariablesMinimumOverrideRole">resetCiPipelineVariablesMinimumOverrideRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole">resetCiRestrictPipelineCancellationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches">resetCiSeparatedCaches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy">resetContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel">resetContainerRegistryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled">resetContainerRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDefaultBranch">resetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEmailsEnabled">resetEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel">resetEnvironmentsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel">resetExternalAuthorizationClassificationLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel">resetFeatureFlagsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId">resetForkedFromProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel">resetForkingAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled">resetGroupRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId">resetGroupWithProjectTemplatesId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrl">resetImportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlPassword">resetImportUrlPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlUsername">resetImportUrlUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel">resetInfrastructureAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme">resetInitializeWithReadme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel">resetIssuesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesEnabled">resetIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesTemplate">resetIssuesTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact">resetKeepLatestArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetLfsEnabled">resetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate">resetMergeCommitTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeMethod">resetMergeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled">resetMergePipelinesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel">resetMergeRequestsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled">resetMergeRequestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate">resetMergeRequestsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled">resetMergeTrainsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirror">resetMirror</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches">resetMirrorOverwritesDivergedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds">resetMirrorTriggerBuilds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetModelExperimentsAccessLevel">resetModelExperimentsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetModelRegistryAccessLevel">resetModelRegistryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel">resetMonitorAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf">resetMrDefaultTargetSelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved">resetOnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds">resetOnlyAllowMergeIfPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches">resetOnlyMirrorProtectedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPackagesEnabled">resetPackagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel">resetPagesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled">resetPipelinesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPreReceiveSecretDetectionEnabled">resetPreReceiveSecretDetectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPreventMergeWithoutJiraIssue">resetPreventMergeWithoutJiraIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled">resetPrintingMergeRequestLinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicBuilds">resetPublicBuilds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicJobs">resetPublicJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPushRules">resetPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel">resetReleasesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge">resetRemoveSourceBranchAfterMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel">resetRepositoryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryStorage">resetRepositoryStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled">resetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel">resetRequirementsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions">resetResolveOutdatedDiffDiscussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables">resetRestrictUserDefinedVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel">resetSecurityAndComplianceAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled">resetSharedRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection">resetSkipWaitForDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel">resetSnippetsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled">resetSnippetsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate">resetSquashCommitTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashOption">resetSquashOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage">resetSuggestionCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateProjectId">resetTemplateProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate">resetUseCustomTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetVisibilityLevel">resetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel">resetWikiAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiEnabled">resetWikiEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.project.Project.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.project.Project.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.project.Project.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.project.Project.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.project.Project.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.project.Project.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.project.Project.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.project.Project.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.project.Project.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.project.Project.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainerExpirationPolicy` <a name="putContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy"></a>

```typescript
public putContainerExpirationPolicy(value: ProjectContainerExpirationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `putPushRules` <a name="putPushRules" id="@cdktf/provider-gitlab.project.Project.putPushRules"></a>

```typescript
public putPushRules(value: ProjectPushRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-gitlab.project.Project.putTimeouts"></a>

```typescript
public putTimeouts(value: ProjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

---

##### `resetAllowMergeOnSkippedPipeline` <a name="resetAllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline"></a>

```typescript
public resetAllowMergeOnSkippedPipeline(): void
```

##### `resetAllowPipelineTriggerApproveDeployment` <a name="resetAllowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.project.Project.resetAllowPipelineTriggerApproveDeployment"></a>

```typescript
public resetAllowPipelineTriggerApproveDeployment(): void
```

##### `resetAnalyticsAccessLevel` <a name="resetAnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel"></a>

```typescript
public resetAnalyticsAccessLevel(): void
```

##### `resetApprovalsBeforeMerge` <a name="resetApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge"></a>

```typescript
public resetApprovalsBeforeMerge(): void
```

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-gitlab.project.Project.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetArchiveOnDestroy` <a name="resetArchiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy"></a>

```typescript
public resetArchiveOnDestroy(): void
```

##### `resetAutoCancelPendingPipelines` <a name="resetAutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines"></a>

```typescript
public resetAutoCancelPendingPipelines(): void
```

##### `resetAutocloseReferencedIssues` <a name="resetAutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues"></a>

```typescript
public resetAutocloseReferencedIssues(): void
```

##### `resetAutoDevopsDeployStrategy` <a name="resetAutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy"></a>

```typescript
public resetAutoDevopsDeployStrategy(): void
```

##### `resetAutoDevopsEnabled` <a name="resetAutoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled"></a>

```typescript
public resetAutoDevopsEnabled(): void
```

##### `resetAvatar` <a name="resetAvatar" id="@cdktf/provider-gitlab.project.Project.resetAvatar"></a>

```typescript
public resetAvatar(): void
```

##### `resetAvatarHash` <a name="resetAvatarHash" id="@cdktf/provider-gitlab.project.Project.resetAvatarHash"></a>

```typescript
public resetAvatarHash(): void
```

##### `resetBuildCoverageRegex` <a name="resetBuildCoverageRegex" id="@cdktf/provider-gitlab.project.Project.resetBuildCoverageRegex"></a>

```typescript
public resetBuildCoverageRegex(): void
```

##### `resetBuildGitStrategy` <a name="resetBuildGitStrategy" id="@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy"></a>

```typescript
public resetBuildGitStrategy(): void
```

##### `resetBuildsAccessLevel` <a name="resetBuildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel"></a>

```typescript
public resetBuildsAccessLevel(): void
```

##### `resetBuildTimeout` <a name="resetBuildTimeout" id="@cdktf/provider-gitlab.project.Project.resetBuildTimeout"></a>

```typescript
public resetBuildTimeout(): void
```

##### `resetCiConfigPath` <a name="resetCiConfigPath" id="@cdktf/provider-gitlab.project.Project.resetCiConfigPath"></a>

```typescript
public resetCiConfigPath(): void
```

##### `resetCiDefaultGitDepth` <a name="resetCiDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth"></a>

```typescript
public resetCiDefaultGitDepth(): void
```

##### `resetCiForwardDeploymentEnabled` <a name="resetCiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled"></a>

```typescript
public resetCiForwardDeploymentEnabled(): void
```

##### `resetCiPipelineVariablesMinimumOverrideRole` <a name="resetCiPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.project.Project.resetCiPipelineVariablesMinimumOverrideRole"></a>

```typescript
public resetCiPipelineVariablesMinimumOverrideRole(): void
```

##### `resetCiRestrictPipelineCancellationRole` <a name="resetCiRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole"></a>

```typescript
public resetCiRestrictPipelineCancellationRole(): void
```

##### `resetCiSeparatedCaches` <a name="resetCiSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches"></a>

```typescript
public resetCiSeparatedCaches(): void
```

##### `resetContainerExpirationPolicy` <a name="resetContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy"></a>

```typescript
public resetContainerExpirationPolicy(): void
```

##### `resetContainerRegistryAccessLevel` <a name="resetContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel"></a>

```typescript
public resetContainerRegistryAccessLevel(): void
```

##### `resetContainerRegistryEnabled` <a name="resetContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled"></a>

```typescript
public resetContainerRegistryEnabled(): void
```

##### `resetDefaultBranch` <a name="resetDefaultBranch" id="@cdktf/provider-gitlab.project.Project.resetDefaultBranch"></a>

```typescript
public resetDefaultBranch(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.project.Project.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEmailsEnabled` <a name="resetEmailsEnabled" id="@cdktf/provider-gitlab.project.Project.resetEmailsEnabled"></a>

```typescript
public resetEmailsEnabled(): void
```

##### `resetEnvironmentsAccessLevel` <a name="resetEnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel"></a>

```typescript
public resetEnvironmentsAccessLevel(): void
```

##### `resetExternalAuthorizationClassificationLabel` <a name="resetExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel"></a>

```typescript
public resetExternalAuthorizationClassificationLabel(): void
```

##### `resetFeatureFlagsAccessLevel` <a name="resetFeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel"></a>

```typescript
public resetFeatureFlagsAccessLevel(): void
```

##### `resetForkedFromProjectId` <a name="resetForkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId"></a>

```typescript
public resetForkedFromProjectId(): void
```

##### `resetForkingAccessLevel` <a name="resetForkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel"></a>

```typescript
public resetForkingAccessLevel(): void
```

##### `resetGroupRunnersEnabled` <a name="resetGroupRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled"></a>

```typescript
public resetGroupRunnersEnabled(): void
```

##### `resetGroupWithProjectTemplatesId` <a name="resetGroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId"></a>

```typescript
public resetGroupWithProjectTemplatesId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.project.Project.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportUrl` <a name="resetImportUrl" id="@cdktf/provider-gitlab.project.Project.resetImportUrl"></a>

```typescript
public resetImportUrl(): void
```

##### `resetImportUrlPassword` <a name="resetImportUrlPassword" id="@cdktf/provider-gitlab.project.Project.resetImportUrlPassword"></a>

```typescript
public resetImportUrlPassword(): void
```

##### `resetImportUrlUsername` <a name="resetImportUrlUsername" id="@cdktf/provider-gitlab.project.Project.resetImportUrlUsername"></a>

```typescript
public resetImportUrlUsername(): void
```

##### `resetInfrastructureAccessLevel` <a name="resetInfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel"></a>

```typescript
public resetInfrastructureAccessLevel(): void
```

##### `resetInitializeWithReadme` <a name="resetInitializeWithReadme" id="@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme"></a>

```typescript
public resetInitializeWithReadme(): void
```

##### `resetIssuesAccessLevel` <a name="resetIssuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel"></a>

```typescript
public resetIssuesAccessLevel(): void
```

##### `resetIssuesEnabled` <a name="resetIssuesEnabled" id="@cdktf/provider-gitlab.project.Project.resetIssuesEnabled"></a>

```typescript
public resetIssuesEnabled(): void
```

##### `resetIssuesTemplate` <a name="resetIssuesTemplate" id="@cdktf/provider-gitlab.project.Project.resetIssuesTemplate"></a>

```typescript
public resetIssuesTemplate(): void
```

##### `resetKeepLatestArtifact` <a name="resetKeepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact"></a>

```typescript
public resetKeepLatestArtifact(): void
```

##### `resetLfsEnabled` <a name="resetLfsEnabled" id="@cdktf/provider-gitlab.project.Project.resetLfsEnabled"></a>

```typescript
public resetLfsEnabled(): void
```

##### `resetMergeCommitTemplate` <a name="resetMergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate"></a>

```typescript
public resetMergeCommitTemplate(): void
```

##### `resetMergeMethod` <a name="resetMergeMethod" id="@cdktf/provider-gitlab.project.Project.resetMergeMethod"></a>

```typescript
public resetMergeMethod(): void
```

##### `resetMergePipelinesEnabled` <a name="resetMergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled"></a>

```typescript
public resetMergePipelinesEnabled(): void
```

##### `resetMergeRequestsAccessLevel` <a name="resetMergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel"></a>

```typescript
public resetMergeRequestsAccessLevel(): void
```

##### `resetMergeRequestsEnabled` <a name="resetMergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled"></a>

```typescript
public resetMergeRequestsEnabled(): void
```

##### `resetMergeRequestsTemplate` <a name="resetMergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate"></a>

```typescript
public resetMergeRequestsTemplate(): void
```

##### `resetMergeTrainsEnabled` <a name="resetMergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled"></a>

```typescript
public resetMergeTrainsEnabled(): void
```

##### `resetMirror` <a name="resetMirror" id="@cdktf/provider-gitlab.project.Project.resetMirror"></a>

```typescript
public resetMirror(): void
```

##### `resetMirrorOverwritesDivergedBranches` <a name="resetMirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches"></a>

```typescript
public resetMirrorOverwritesDivergedBranches(): void
```

##### `resetMirrorTriggerBuilds` <a name="resetMirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds"></a>

```typescript
public resetMirrorTriggerBuilds(): void
```

##### `resetModelExperimentsAccessLevel` <a name="resetModelExperimentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetModelExperimentsAccessLevel"></a>

```typescript
public resetModelExperimentsAccessLevel(): void
```

##### `resetModelRegistryAccessLevel` <a name="resetModelRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetModelRegistryAccessLevel"></a>

```typescript
public resetModelRegistryAccessLevel(): void
```

##### `resetMonitorAccessLevel` <a name="resetMonitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel"></a>

```typescript
public resetMonitorAccessLevel(): void
```

##### `resetMrDefaultTargetSelf` <a name="resetMrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf"></a>

```typescript
public resetMrDefaultTargetSelf(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/provider-gitlab.project.Project.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetOnlyAllowMergeIfAllDiscussionsAreResolved` <a name="resetOnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved"></a>

```typescript
public resetOnlyAllowMergeIfAllDiscussionsAreResolved(): void
```

##### `resetOnlyAllowMergeIfPipelineSucceeds` <a name="resetOnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds"></a>

```typescript
public resetOnlyAllowMergeIfPipelineSucceeds(): void
```

##### `resetOnlyMirrorProtectedBranches` <a name="resetOnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches"></a>

```typescript
public resetOnlyMirrorProtectedBranches(): void
```

##### `resetPackagesEnabled` <a name="resetPackagesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPackagesEnabled"></a>

```typescript
public resetPackagesEnabled(): void
```

##### `resetPagesAccessLevel` <a name="resetPagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel"></a>

```typescript
public resetPagesAccessLevel(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-gitlab.project.Project.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPipelinesEnabled` <a name="resetPipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled"></a>

```typescript
public resetPipelinesEnabled(): void
```

##### `resetPreReceiveSecretDetectionEnabled` <a name="resetPreReceiveSecretDetectionEnabled" id="@cdktf/provider-gitlab.project.Project.resetPreReceiveSecretDetectionEnabled"></a>

```typescript
public resetPreReceiveSecretDetectionEnabled(): void
```

##### `resetPreventMergeWithoutJiraIssue` <a name="resetPreventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.project.Project.resetPreventMergeWithoutJiraIssue"></a>

```typescript
public resetPreventMergeWithoutJiraIssue(): void
```

##### `resetPrintingMergeRequestLinkEnabled` <a name="resetPrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled"></a>

```typescript
public resetPrintingMergeRequestLinkEnabled(): void
```

##### `resetPublicBuilds` <a name="resetPublicBuilds" id="@cdktf/provider-gitlab.project.Project.resetPublicBuilds"></a>

```typescript
public resetPublicBuilds(): void
```

##### `resetPublicJobs` <a name="resetPublicJobs" id="@cdktf/provider-gitlab.project.Project.resetPublicJobs"></a>

```typescript
public resetPublicJobs(): void
```

##### `resetPushRules` <a name="resetPushRules" id="@cdktf/provider-gitlab.project.Project.resetPushRules"></a>

```typescript
public resetPushRules(): void
```

##### `resetReleasesAccessLevel` <a name="resetReleasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel"></a>

```typescript
public resetReleasesAccessLevel(): void
```

##### `resetRemoveSourceBranchAfterMerge` <a name="resetRemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge"></a>

```typescript
public resetRemoveSourceBranchAfterMerge(): void
```

##### `resetRepositoryAccessLevel` <a name="resetRepositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel"></a>

```typescript
public resetRepositoryAccessLevel(): void
```

##### `resetRepositoryStorage` <a name="resetRepositoryStorage" id="@cdktf/provider-gitlab.project.Project.resetRepositoryStorage"></a>

```typescript
public resetRepositoryStorage(): void
```

##### `resetRequestAccessEnabled` <a name="resetRequestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled"></a>

```typescript
public resetRequestAccessEnabled(): void
```

##### `resetRequirementsAccessLevel` <a name="resetRequirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel"></a>

```typescript
public resetRequirementsAccessLevel(): void
```

##### `resetResolveOutdatedDiffDiscussions` <a name="resetResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions"></a>

```typescript
public resetResolveOutdatedDiffDiscussions(): void
```

##### `resetRestrictUserDefinedVariables` <a name="resetRestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables"></a>

```typescript
public resetRestrictUserDefinedVariables(): void
```

##### `resetSecurityAndComplianceAccessLevel` <a name="resetSecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel"></a>

```typescript
public resetSecurityAndComplianceAccessLevel(): void
```

##### `resetSharedRunnersEnabled` <a name="resetSharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled"></a>

```typescript
public resetSharedRunnersEnabled(): void
```

##### `resetSkipWaitForDefaultBranchProtection` <a name="resetSkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection"></a>

```typescript
public resetSkipWaitForDefaultBranchProtection(): void
```

##### `resetSnippetsAccessLevel` <a name="resetSnippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel"></a>

```typescript
public resetSnippetsAccessLevel(): void
```

##### `resetSnippetsEnabled` <a name="resetSnippetsEnabled" id="@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled"></a>

```typescript
public resetSnippetsEnabled(): void
```

##### `resetSquashCommitTemplate` <a name="resetSquashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate"></a>

```typescript
public resetSquashCommitTemplate(): void
```

##### `resetSquashOption` <a name="resetSquashOption" id="@cdktf/provider-gitlab.project.Project.resetSquashOption"></a>

```typescript
public resetSquashOption(): void
```

##### `resetSuggestionCommitMessage` <a name="resetSuggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage"></a>

```typescript
public resetSuggestionCommitMessage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-gitlab.project.Project.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktf/provider-gitlab.project.Project.resetTemplateName"></a>

```typescript
public resetTemplateName(): void
```

##### `resetTemplateProjectId` <a name="resetTemplateProjectId" id="@cdktf/provider-gitlab.project.Project.resetTemplateProjectId"></a>

```typescript
public resetTemplateProjectId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-gitlab.project.Project.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-gitlab.project.Project.resetTopics"></a>

```typescript
public resetTopics(): void
```

##### `resetUseCustomTemplate` <a name="resetUseCustomTemplate" id="@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate"></a>

```typescript
public resetUseCustomTemplate(): void
```

##### `resetVisibilityLevel` <a name="resetVisibilityLevel" id="@cdktf/provider-gitlab.project.Project.resetVisibilityLevel"></a>

```typescript
public resetVisibilityLevel(): void
```

##### `resetWikiAccessLevel` <a name="resetWikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel"></a>

```typescript
public resetWikiAccessLevel(): void
```

##### `resetWikiEnabled` <a name="resetWikiEnabled" id="@cdktf/provider-gitlab.project.Project.resetWikiEnabled"></a>

```typescript
public resetWikiEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.project.Project.isConstruct"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

project.Project.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.project.Project.isTerraformElement"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

project.Project.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.project.Project.isTerraformResource"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

project.Project.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

project.Project.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarUrl">avatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emptyRepo">emptyRepo</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo">httpUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathWithNamespace">pathWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.runnersToken">runnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo">sshUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput">allowMergeOnSkippedPipelineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeploymentInput">allowPipelineTriggerApproveDeploymentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput">analyticsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput">approvalsBeforeMergeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput">archiveOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput">autoCancelPendingPipelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput">autocloseReferencedIssuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput">autoDevopsDeployStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput">autoDevopsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHashInput">avatarHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarInput">avatarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput">buildCoverageRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput">buildGitStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput">buildsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput">buildTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput">ciConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput">ciDefaultGitDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput">ciForwardDeploymentEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRoleInput">ciPipelineVariablesMinimumOverrideRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput">ciRestrictPipelineCancellationRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput">ciSeparatedCachesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput">containerExpirationPolicyInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput">containerRegistryAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput">containerRegistryEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranchInput">defaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput">emailsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput">environmentsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput">externalAuthorizationClassificationLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput">featureFlagsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput">forkedFromProjectIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput">forkingAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput">groupRunnersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput">groupWithProjectTemplatesIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlInput">importUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput">importUrlPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput">importUrlUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput">infrastructureAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput">initializeWithReadmeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput">issuesAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput">issuesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput">issuesTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput">keepLatestArtifactInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput">lfsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput">mergeCommitTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethodInput">mergeMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput">mergePipelinesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput">mergeRequestsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput">mergeRequestsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput">mergeRequestsTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput">mergeTrainsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorInput">mirrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput">mirrorOverwritesDivergedBranchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput">mirrorTriggerBuildsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevelInput">modelExperimentsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevelInput">modelRegistryAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput">monitorAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput">mrDefaultTargetSelfInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceIdInput">namespaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput">onlyAllowMergeIfAllDiscussionsAreResolvedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput">onlyAllowMergeIfPipelineSucceedsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput">onlyMirrorProtectedBranchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput">packagesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput">pagesAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput">pipelinesEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabledInput">preReceiveSecretDetectionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssueInput">preventMergeWithoutJiraIssueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput">printingMergeRequestLinkEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuildsInput">publicBuildsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobsInput">publicJobsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRulesInput">pushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput">releasesAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput">removeSourceBranchAfterMergeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput">repositoryAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput">repositoryStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput">requestAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput">requirementsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput">resolveOutdatedDiffDiscussionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput">restrictUserDefinedVariablesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput">securityAndComplianceAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput">sharedRunnersEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput">skipWaitForDefaultBranchProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput">snippetsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput">snippetsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput">squashCommitTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOptionInput">squashOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput">suggestionCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput">templateProjectIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topicsInput">topicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput">useCustomTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput">visibilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput">wikiAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput">wikiEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline">allowMergeOnSkippedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeployment">allowPipelineTriggerApproveDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge">approvalsBeforeMerge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatar">avatar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHash">avatarHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex">buildCoverageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategy">buildGitStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel">buildsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeout">buildTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPath">ciConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled">ciForwardDeploymentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRole">ciPipelineVariablesMinimumOverrideRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole">ciRestrictPipelineCancellationRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches">ciSeparatedCaches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled">containerRegistryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabled">emailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel">environmentsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel">featureFlagsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId">forkedFromProjectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel">forkingAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled">groupRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId">groupWithProjectTemplatesId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrl">importUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPassword">importUrlPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsername">importUrlUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel">infrastructureAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadme">initializeWithReadme</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel">issuesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabled">issuesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplate">issuesTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabled">lfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethod">mergeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate">mergeRequestsTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirror">mirror</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches">mirrorOverwritesDivergedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds">mirrorTriggerBuilds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevel">modelExperimentsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevel">modelRegistryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel">monitorAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf">mrDefaultTargetSelf</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceId">namespaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved">onlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds">onlyAllowMergeIfPipelineSucceeds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches">onlyMirrorProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabled">packagesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel">pagesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled">pipelinesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabled">preReceiveSecretDetectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssue">preventMergeWithoutJiraIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled">printingMergeRequestLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuilds">publicBuilds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobs">publicJobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel">releasesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge">removeSourceBranchAfterMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorage">repositoryStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection">skipWaitForDefaultBranchProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabled">snippetsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate">squashCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOption">squashOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectId">templateProjectId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topics">topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplate">useCustomTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevel">visibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabled">wikiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.project.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.project.Project.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.Project.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.project.Project.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.Project.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.Project.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.project.Project.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.project.Project.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.Project.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.Project.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `avatarUrl`<sup>Required</sup> <a name="avatarUrl" id="@cdktf/provider-gitlab.project.Project.property.avatarUrl"></a>

```typescript
public readonly avatarUrl: string;
```

- *Type:* string

---

##### `containerExpirationPolicy`<sup>Required</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy"></a>

```typescript
public readonly containerExpirationPolicy: ProjectContainerExpirationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a>

---

##### `emptyRepo`<sup>Required</sup> <a name="emptyRepo" id="@cdktf/provider-gitlab.project.Project.property.emptyRepo"></a>

```typescript
public readonly emptyRepo: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `httpUrlToRepo`<sup>Required</sup> <a name="httpUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo"></a>

```typescript
public readonly httpUrlToRepo: string;
```

- *Type:* string

---

##### `pathWithNamespace`<sup>Required</sup> <a name="pathWithNamespace" id="@cdktf/provider-gitlab.project.Project.property.pathWithNamespace"></a>

```typescript
public readonly pathWithNamespace: string;
```

- *Type:* string

---

##### `pushRules`<sup>Required</sup> <a name="pushRules" id="@cdktf/provider-gitlab.project.Project.property.pushRules"></a>

```typescript
public readonly pushRules: ProjectPushRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a>

---

##### `runnersToken`<sup>Required</sup> <a name="runnersToken" id="@cdktf/provider-gitlab.project.Project.property.runnersToken"></a>

```typescript
public readonly runnersToken: string;
```

- *Type:* string

---

##### `sshUrlToRepo`<sup>Required</sup> <a name="sshUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo"></a>

```typescript
public readonly sshUrlToRepo: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.Project.property.timeouts"></a>

```typescript
public readonly timeouts: ProjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a>

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/provider-gitlab.project.Project.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `allowMergeOnSkippedPipelineInput`<sup>Optional</sup> <a name="allowMergeOnSkippedPipelineInput" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput"></a>

```typescript
public readonly allowMergeOnSkippedPipelineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPipelineTriggerApproveDeploymentInput`<sup>Optional</sup> <a name="allowPipelineTriggerApproveDeploymentInput" id="@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeploymentInput"></a>

```typescript
public readonly allowPipelineTriggerApproveDeploymentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analyticsAccessLevelInput`<sup>Optional</sup> <a name="analyticsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput"></a>

```typescript
public readonly analyticsAccessLevelInput: string;
```

- *Type:* string

---

##### `approvalsBeforeMergeInput`<sup>Optional</sup> <a name="approvalsBeforeMergeInput" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput"></a>

```typescript
public readonly approvalsBeforeMergeInput: number;
```

- *Type:* number

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-gitlab.project.Project.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveOnDestroyInput`<sup>Optional</sup> <a name="archiveOnDestroyInput" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput"></a>

```typescript
public readonly archiveOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoCancelPendingPipelinesInput`<sup>Optional</sup> <a name="autoCancelPendingPipelinesInput" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput"></a>

```typescript
public readonly autoCancelPendingPipelinesInput: string;
```

- *Type:* string

---

##### `autocloseReferencedIssuesInput`<sup>Optional</sup> <a name="autocloseReferencedIssuesInput" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput"></a>

```typescript
public readonly autocloseReferencedIssuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDevopsDeployStrategyInput`<sup>Optional</sup> <a name="autoDevopsDeployStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput"></a>

```typescript
public readonly autoDevopsDeployStrategyInput: string;
```

- *Type:* string

---

##### `autoDevopsEnabledInput`<sup>Optional</sup> <a name="autoDevopsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput"></a>

```typescript
public readonly autoDevopsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `avatarHashInput`<sup>Optional</sup> <a name="avatarHashInput" id="@cdktf/provider-gitlab.project.Project.property.avatarHashInput"></a>

```typescript
public readonly avatarHashInput: string;
```

- *Type:* string

---

##### `avatarInput`<sup>Optional</sup> <a name="avatarInput" id="@cdktf/provider-gitlab.project.Project.property.avatarInput"></a>

```typescript
public readonly avatarInput: string;
```

- *Type:* string

---

##### `buildCoverageRegexInput`<sup>Optional</sup> <a name="buildCoverageRegexInput" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput"></a>

```typescript
public readonly buildCoverageRegexInput: string;
```

- *Type:* string

---

##### `buildGitStrategyInput`<sup>Optional</sup> <a name="buildGitStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput"></a>

```typescript
public readonly buildGitStrategyInput: string;
```

- *Type:* string

---

##### `buildsAccessLevelInput`<sup>Optional</sup> <a name="buildsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput"></a>

```typescript
public readonly buildsAccessLevelInput: string;
```

- *Type:* string

---

##### `buildTimeoutInput`<sup>Optional</sup> <a name="buildTimeoutInput" id="@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput"></a>

```typescript
public readonly buildTimeoutInput: number;
```

- *Type:* number

---

##### `ciConfigPathInput`<sup>Optional</sup> <a name="ciConfigPathInput" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput"></a>

```typescript
public readonly ciConfigPathInput: string;
```

- *Type:* string

---

##### `ciDefaultGitDepthInput`<sup>Optional</sup> <a name="ciDefaultGitDepthInput" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput"></a>

```typescript
public readonly ciDefaultGitDepthInput: number;
```

- *Type:* number

---

##### `ciForwardDeploymentEnabledInput`<sup>Optional</sup> <a name="ciForwardDeploymentEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput"></a>

```typescript
public readonly ciForwardDeploymentEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ciPipelineVariablesMinimumOverrideRoleInput`<sup>Optional</sup> <a name="ciPipelineVariablesMinimumOverrideRoleInput" id="@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRoleInput"></a>

```typescript
public readonly ciPipelineVariablesMinimumOverrideRoleInput: string;
```

- *Type:* string

---

##### `ciRestrictPipelineCancellationRoleInput`<sup>Optional</sup> <a name="ciRestrictPipelineCancellationRoleInput" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput"></a>

```typescript
public readonly ciRestrictPipelineCancellationRoleInput: string;
```

- *Type:* string

---

##### `ciSeparatedCachesInput`<sup>Optional</sup> <a name="ciSeparatedCachesInput" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput"></a>

```typescript
public readonly ciSeparatedCachesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerExpirationPolicyInput`<sup>Optional</sup> <a name="containerExpirationPolicyInput" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput"></a>

```typescript
public readonly containerExpirationPolicyInput: ProjectContainerExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `containerRegistryAccessLevelInput`<sup>Optional</sup> <a name="containerRegistryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput"></a>

```typescript
public readonly containerRegistryAccessLevelInput: string;
```

- *Type:* string

---

##### `containerRegistryEnabledInput`<sup>Optional</sup> <a name="containerRegistryEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput"></a>

```typescript
public readonly containerRegistryEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultBranchInput`<sup>Optional</sup> <a name="defaultBranchInput" id="@cdktf/provider-gitlab.project.Project.property.defaultBranchInput"></a>

```typescript
public readonly defaultBranchInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.project.Project.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `emailsEnabledInput`<sup>Optional</sup> <a name="emailsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput"></a>

```typescript
public readonly emailsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentsAccessLevelInput`<sup>Optional</sup> <a name="environmentsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput"></a>

```typescript
public readonly environmentsAccessLevelInput: string;
```

- *Type:* string

---

##### `externalAuthorizationClassificationLabelInput`<sup>Optional</sup> <a name="externalAuthorizationClassificationLabelInput" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput"></a>

```typescript
public readonly externalAuthorizationClassificationLabelInput: string;
```

- *Type:* string

---

##### `featureFlagsAccessLevelInput`<sup>Optional</sup> <a name="featureFlagsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput"></a>

```typescript
public readonly featureFlagsAccessLevelInput: string;
```

- *Type:* string

---

##### `forkedFromProjectIdInput`<sup>Optional</sup> <a name="forkedFromProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput"></a>

```typescript
public readonly forkedFromProjectIdInput: number;
```

- *Type:* number

---

##### `forkingAccessLevelInput`<sup>Optional</sup> <a name="forkingAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput"></a>

```typescript
public readonly forkingAccessLevelInput: string;
```

- *Type:* string

---

##### `groupRunnersEnabledInput`<sup>Optional</sup> <a name="groupRunnersEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput"></a>

```typescript
public readonly groupRunnersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupWithProjectTemplatesIdInput`<sup>Optional</sup> <a name="groupWithProjectTemplatesIdInput" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput"></a>

```typescript
public readonly groupWithProjectTemplatesIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.project.Project.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importUrlInput`<sup>Optional</sup> <a name="importUrlInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlInput"></a>

```typescript
public readonly importUrlInput: string;
```

- *Type:* string

---

##### `importUrlPasswordInput`<sup>Optional</sup> <a name="importUrlPasswordInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput"></a>

```typescript
public readonly importUrlPasswordInput: string;
```

- *Type:* string

---

##### `importUrlUsernameInput`<sup>Optional</sup> <a name="importUrlUsernameInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput"></a>

```typescript
public readonly importUrlUsernameInput: string;
```

- *Type:* string

---

##### `infrastructureAccessLevelInput`<sup>Optional</sup> <a name="infrastructureAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput"></a>

```typescript
public readonly infrastructureAccessLevelInput: string;
```

- *Type:* string

---

##### `initializeWithReadmeInput`<sup>Optional</sup> <a name="initializeWithReadmeInput" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput"></a>

```typescript
public readonly initializeWithReadmeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuesAccessLevelInput`<sup>Optional</sup> <a name="issuesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput"></a>

```typescript
public readonly issuesAccessLevelInput: string;
```

- *Type:* string

---

##### `issuesEnabledInput`<sup>Optional</sup> <a name="issuesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput"></a>

```typescript
public readonly issuesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuesTemplateInput`<sup>Optional</sup> <a name="issuesTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput"></a>

```typescript
public readonly issuesTemplateInput: string;
```

- *Type:* string

---

##### `keepLatestArtifactInput`<sup>Optional</sup> <a name="keepLatestArtifactInput" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput"></a>

```typescript
public readonly keepLatestArtifactInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lfsEnabledInput`<sup>Optional</sup> <a name="lfsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput"></a>

```typescript
public readonly lfsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeCommitTemplateInput`<sup>Optional</sup> <a name="mergeCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput"></a>

```typescript
public readonly mergeCommitTemplateInput: string;
```

- *Type:* string

---

##### `mergeMethodInput`<sup>Optional</sup> <a name="mergeMethodInput" id="@cdktf/provider-gitlab.project.Project.property.mergeMethodInput"></a>

```typescript
public readonly mergeMethodInput: string;
```

- *Type:* string

---

##### `mergePipelinesEnabledInput`<sup>Optional</sup> <a name="mergePipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput"></a>

```typescript
public readonly mergePipelinesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsAccessLevelInput`<sup>Optional</sup> <a name="mergeRequestsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput"></a>

```typescript
public readonly mergeRequestsAccessLevelInput: string;
```

- *Type:* string

---

##### `mergeRequestsEnabledInput`<sup>Optional</sup> <a name="mergeRequestsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput"></a>

```typescript
public readonly mergeRequestsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsTemplateInput`<sup>Optional</sup> <a name="mergeRequestsTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput"></a>

```typescript
public readonly mergeRequestsTemplateInput: string;
```

- *Type:* string

---

##### `mergeTrainsEnabledInput`<sup>Optional</sup> <a name="mergeTrainsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput"></a>

```typescript
public readonly mergeTrainsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirrorInput`<sup>Optional</sup> <a name="mirrorInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorInput"></a>

```typescript
public readonly mirrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirrorOverwritesDivergedBranchesInput`<sup>Optional</sup> <a name="mirrorOverwritesDivergedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput"></a>

```typescript
public readonly mirrorOverwritesDivergedBranchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirrorTriggerBuildsInput`<sup>Optional</sup> <a name="mirrorTriggerBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput"></a>

```typescript
public readonly mirrorTriggerBuildsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `modelExperimentsAccessLevelInput`<sup>Optional</sup> <a name="modelExperimentsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevelInput"></a>

```typescript
public readonly modelExperimentsAccessLevelInput: string;
```

- *Type:* string

---

##### `modelRegistryAccessLevelInput`<sup>Optional</sup> <a name="modelRegistryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevelInput"></a>

```typescript
public readonly modelRegistryAccessLevelInput: string;
```

- *Type:* string

---

##### `monitorAccessLevelInput`<sup>Optional</sup> <a name="monitorAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput"></a>

```typescript
public readonly monitorAccessLevelInput: string;
```

- *Type:* string

---

##### `mrDefaultTargetSelfInput`<sup>Optional</sup> <a name="mrDefaultTargetSelfInput" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput"></a>

```typescript
public readonly mrDefaultTargetSelfInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.project.Project.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/provider-gitlab.project.Project.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: number;
```

- *Type:* number

---

##### `onlyAllowMergeIfAllDiscussionsAreResolvedInput`<sup>Optional</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolvedInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput"></a>

```typescript
public readonly onlyAllowMergeIfAllDiscussionsAreResolvedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyAllowMergeIfPipelineSucceedsInput`<sup>Optional</sup> <a name="onlyAllowMergeIfPipelineSucceedsInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput"></a>

```typescript
public readonly onlyAllowMergeIfPipelineSucceedsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyMirrorProtectedBranchesInput`<sup>Optional</sup> <a name="onlyMirrorProtectedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput"></a>

```typescript
public readonly onlyMirrorProtectedBranchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packagesEnabledInput`<sup>Optional</sup> <a name="packagesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput"></a>

```typescript
public readonly packagesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pagesAccessLevelInput`<sup>Optional</sup> <a name="pagesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput"></a>

```typescript
public readonly pagesAccessLevelInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-gitlab.project.Project.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `pipelinesEnabledInput`<sup>Optional</sup> <a name="pipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput"></a>

```typescript
public readonly pipelinesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preReceiveSecretDetectionEnabledInput`<sup>Optional</sup> <a name="preReceiveSecretDetectionEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabledInput"></a>

```typescript
public readonly preReceiveSecretDetectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventMergeWithoutJiraIssueInput`<sup>Optional</sup> <a name="preventMergeWithoutJiraIssueInput" id="@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssueInput"></a>

```typescript
public readonly preventMergeWithoutJiraIssueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `printingMergeRequestLinkEnabledInput`<sup>Optional</sup> <a name="printingMergeRequestLinkEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput"></a>

```typescript
public readonly printingMergeRequestLinkEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicBuildsInput`<sup>Optional</sup> <a name="publicBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.publicBuildsInput"></a>

```typescript
public readonly publicBuildsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicJobsInput`<sup>Optional</sup> <a name="publicJobsInput" id="@cdktf/provider-gitlab.project.Project.property.publicJobsInput"></a>

```typescript
public readonly publicJobsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pushRulesInput`<sup>Optional</sup> <a name="pushRulesInput" id="@cdktf/provider-gitlab.project.Project.property.pushRulesInput"></a>

```typescript
public readonly pushRulesInput: ProjectPushRules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `releasesAccessLevelInput`<sup>Optional</sup> <a name="releasesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput"></a>

```typescript
public readonly releasesAccessLevelInput: string;
```

- *Type:* string

---

##### `removeSourceBranchAfterMergeInput`<sup>Optional</sup> <a name="removeSourceBranchAfterMergeInput" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput"></a>

```typescript
public readonly removeSourceBranchAfterMergeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryAccessLevelInput`<sup>Optional</sup> <a name="repositoryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput"></a>

```typescript
public readonly repositoryAccessLevelInput: string;
```

- *Type:* string

---

##### `repositoryStorageInput`<sup>Optional</sup> <a name="repositoryStorageInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput"></a>

```typescript
public readonly repositoryStorageInput: string;
```

- *Type:* string

---

##### `requestAccessEnabledInput`<sup>Optional</sup> <a name="requestAccessEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput"></a>

```typescript
public readonly requestAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requirementsAccessLevelInput`<sup>Optional</sup> <a name="requirementsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput"></a>

```typescript
public readonly requirementsAccessLevelInput: string;
```

- *Type:* string

---

##### `resolveOutdatedDiffDiscussionsInput`<sup>Optional</sup> <a name="resolveOutdatedDiffDiscussionsInput" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput"></a>

```typescript
public readonly resolveOutdatedDiffDiscussionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictUserDefinedVariablesInput`<sup>Optional</sup> <a name="restrictUserDefinedVariablesInput" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput"></a>

```typescript
public readonly restrictUserDefinedVariablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAndComplianceAccessLevelInput`<sup>Optional</sup> <a name="securityAndComplianceAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput"></a>

```typescript
public readonly securityAndComplianceAccessLevelInput: string;
```

- *Type:* string

---

##### `sharedRunnersEnabledInput`<sup>Optional</sup> <a name="sharedRunnersEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput"></a>

```typescript
public readonly sharedRunnersEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipWaitForDefaultBranchProtectionInput`<sup>Optional</sup> <a name="skipWaitForDefaultBranchProtectionInput" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput"></a>

```typescript
public readonly skipWaitForDefaultBranchProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snippetsAccessLevelInput`<sup>Optional</sup> <a name="snippetsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput"></a>

```typescript
public readonly snippetsAccessLevelInput: string;
```

- *Type:* string

---

##### `snippetsEnabledInput`<sup>Optional</sup> <a name="snippetsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput"></a>

```typescript
public readonly snippetsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `squashCommitTemplateInput`<sup>Optional</sup> <a name="squashCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput"></a>

```typescript
public readonly squashCommitTemplateInput: string;
```

- *Type:* string

---

##### `squashOptionInput`<sup>Optional</sup> <a name="squashOptionInput" id="@cdktf/provider-gitlab.project.Project.property.squashOptionInput"></a>

```typescript
public readonly squashOptionInput: string;
```

- *Type:* string

---

##### `suggestionCommitMessageInput`<sup>Optional</sup> <a name="suggestionCommitMessageInput" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput"></a>

```typescript
public readonly suggestionCommitMessageInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-gitlab.project.Project.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/provider-gitlab.project.Project.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `templateProjectIdInput`<sup>Optional</sup> <a name="templateProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput"></a>

```typescript
public readonly templateProjectIdInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-gitlab.project.Project.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-gitlab.project.Project.property.topicsInput"></a>

```typescript
public readonly topicsInput: string[];
```

- *Type:* string[]

---

##### `useCustomTemplateInput`<sup>Optional</sup> <a name="useCustomTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput"></a>

```typescript
public readonly useCustomTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibilityLevelInput`<sup>Optional</sup> <a name="visibilityLevelInput" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput"></a>

```typescript
public readonly visibilityLevelInput: string;
```

- *Type:* string

---

##### `wikiAccessLevelInput`<sup>Optional</sup> <a name="wikiAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput"></a>

```typescript
public readonly wikiAccessLevelInput: string;
```

- *Type:* string

---

##### `wikiEnabledInput`<sup>Optional</sup> <a name="wikiEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput"></a>

```typescript
public readonly wikiEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowMergeOnSkippedPipeline`<sup>Required</sup> <a name="allowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline"></a>

```typescript
public readonly allowMergeOnSkippedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowPipelineTriggerApproveDeployment`<sup>Required</sup> <a name="allowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.project.Project.property.allowPipelineTriggerApproveDeployment"></a>

```typescript
public readonly allowPipelineTriggerApproveDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `analyticsAccessLevel`<sup>Required</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel"></a>

```typescript
public readonly analyticsAccessLevel: string;
```

- *Type:* string

---

##### `approvalsBeforeMerge`<sup>Required</sup> <a name="approvalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge"></a>

```typescript
public readonly approvalsBeforeMerge: number;
```

- *Type:* number

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-gitlab.project.Project.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archiveOnDestroy`<sup>Required</sup> <a name="archiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy"></a>

```typescript
public readonly archiveOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoCancelPendingPipelines`<sup>Required</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines"></a>

```typescript
public readonly autoCancelPendingPipelines: string;
```

- *Type:* string

---

##### `autocloseReferencedIssues`<sup>Required</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues"></a>

```typescript
public readonly autocloseReferencedIssues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoDevopsDeployStrategy`<sup>Required</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy"></a>

```typescript
public readonly autoDevopsDeployStrategy: string;
```

- *Type:* string

---

##### `autoDevopsEnabled`<sup>Required</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `avatar`<sup>Required</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.Project.property.avatar"></a>

```typescript
public readonly avatar: string;
```

- *Type:* string

---

##### `avatarHash`<sup>Required</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.project.Project.property.avatarHash"></a>

```typescript
public readonly avatarHash: string;
```

- *Type:* string

---

##### `buildCoverageRegex`<sup>Required</sup> <a name="buildCoverageRegex" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex"></a>

```typescript
public readonly buildCoverageRegex: string;
```

- *Type:* string

---

##### `buildGitStrategy`<sup>Required</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategy"></a>

```typescript
public readonly buildGitStrategy: string;
```

- *Type:* string

---

##### `buildsAccessLevel`<sup>Required</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel"></a>

```typescript
public readonly buildsAccessLevel: string;
```

- *Type:* string

---

##### `buildTimeout`<sup>Required</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.project.Project.property.buildTimeout"></a>

```typescript
public readonly buildTimeout: number;
```

- *Type:* number

---

##### `ciConfigPath`<sup>Required</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPath"></a>

```typescript
public readonly ciConfigPath: string;
```

- *Type:* string

---

##### `ciDefaultGitDepth`<sup>Required</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth"></a>

```typescript
public readonly ciDefaultGitDepth: number;
```

- *Type:* number

---

##### `ciForwardDeploymentEnabled`<sup>Required</sup> <a name="ciForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled"></a>

```typescript
public readonly ciForwardDeploymentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ciPipelineVariablesMinimumOverrideRole`<sup>Required</sup> <a name="ciPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.project.Project.property.ciPipelineVariablesMinimumOverrideRole"></a>

```typescript
public readonly ciPipelineVariablesMinimumOverrideRole: string;
```

- *Type:* string

---

##### `ciRestrictPipelineCancellationRole`<sup>Required</sup> <a name="ciRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole"></a>

```typescript
public readonly ciRestrictPipelineCancellationRole: string;
```

- *Type:* string

---

##### `ciSeparatedCaches`<sup>Required</sup> <a name="ciSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches"></a>

```typescript
public readonly ciSeparatedCaches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerRegistryAccessLevel`<sup>Required</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel"></a>

```typescript
public readonly containerRegistryAccessLevel: string;
```

- *Type:* string

---

##### `containerRegistryEnabled`<sup>Required</sup> <a name="containerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled"></a>

```typescript
public readonly containerRegistryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultBranch`<sup>Required</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.project.Project.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.project.Project.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailsEnabled`<sup>Required</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabled"></a>

```typescript
public readonly emailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentsAccessLevel`<sup>Required</sup> <a name="environmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel"></a>

```typescript
public readonly environmentsAccessLevel: string;
```

- *Type:* string

---

##### `externalAuthorizationClassificationLabel`<sup>Required</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel"></a>

```typescript
public readonly externalAuthorizationClassificationLabel: string;
```

- *Type:* string

---

##### `featureFlagsAccessLevel`<sup>Required</sup> <a name="featureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel"></a>

```typescript
public readonly featureFlagsAccessLevel: string;
```

- *Type:* string

---

##### `forkedFromProjectId`<sup>Required</sup> <a name="forkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId"></a>

```typescript
public readonly forkedFromProjectId: number;
```

- *Type:* number

---

##### `forkingAccessLevel`<sup>Required</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel"></a>

```typescript
public readonly forkingAccessLevel: string;
```

- *Type:* string

---

##### `groupRunnersEnabled`<sup>Required</sup> <a name="groupRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled"></a>

```typescript
public readonly groupRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupWithProjectTemplatesId`<sup>Required</sup> <a name="groupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId"></a>

```typescript
public readonly groupWithProjectTemplatesId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importUrl`<sup>Required</sup> <a name="importUrl" id="@cdktf/provider-gitlab.project.Project.property.importUrl"></a>

```typescript
public readonly importUrl: string;
```

- *Type:* string

---

##### `importUrlPassword`<sup>Required</sup> <a name="importUrlPassword" id="@cdktf/provider-gitlab.project.Project.property.importUrlPassword"></a>

```typescript
public readonly importUrlPassword: string;
```

- *Type:* string

---

##### `importUrlUsername`<sup>Required</sup> <a name="importUrlUsername" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsername"></a>

```typescript
public readonly importUrlUsername: string;
```

- *Type:* string

---

##### `infrastructureAccessLevel`<sup>Required</sup> <a name="infrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel"></a>

```typescript
public readonly infrastructureAccessLevel: string;
```

- *Type:* string

---

##### `initializeWithReadme`<sup>Required</sup> <a name="initializeWithReadme" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadme"></a>

```typescript
public readonly initializeWithReadme: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuesAccessLevel`<sup>Required</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel"></a>

```typescript
public readonly issuesAccessLevel: string;
```

- *Type:* string

---

##### `issuesEnabled`<sup>Required</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `issuesTemplate`<sup>Required</sup> <a name="issuesTemplate" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplate"></a>

```typescript
public readonly issuesTemplate: string;
```

- *Type:* string

---

##### `keepLatestArtifact`<sup>Required</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact"></a>

```typescript
public readonly keepLatestArtifact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lfsEnabled`<sup>Required</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeCommitTemplate`<sup>Required</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate"></a>

```typescript
public readonly mergeCommitTemplate: string;
```

- *Type:* string

---

##### `mergeMethod`<sup>Required</sup> <a name="mergeMethod" id="@cdktf/provider-gitlab.project.Project.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: string;
```

- *Type:* string

---

##### `mergePipelinesEnabled`<sup>Required</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled"></a>

```typescript
public readonly mergePipelinesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsAccessLevel`<sup>Required</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel"></a>

```typescript
public readonly mergeRequestsAccessLevel: string;
```

- *Type:* string

---

##### `mergeRequestsEnabled`<sup>Required</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled"></a>

```typescript
public readonly mergeRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mergeRequestsTemplate`<sup>Required</sup> <a name="mergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate"></a>

```typescript
public readonly mergeRequestsTemplate: string;
```

- *Type:* string

---

##### `mergeTrainsEnabled`<sup>Required</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled"></a>

```typescript
public readonly mergeTrainsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirror`<sup>Required</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.Project.property.mirror"></a>

```typescript
public readonly mirror: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirrorOverwritesDivergedBranches`<sup>Required</sup> <a name="mirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches"></a>

```typescript
public readonly mirrorOverwritesDivergedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mirrorTriggerBuilds`<sup>Required</sup> <a name="mirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds"></a>

```typescript
public readonly mirrorTriggerBuilds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `modelExperimentsAccessLevel`<sup>Required</sup> <a name="modelExperimentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.modelExperimentsAccessLevel"></a>

```typescript
public readonly modelExperimentsAccessLevel: string;
```

- *Type:* string

---

##### `modelRegistryAccessLevel`<sup>Required</sup> <a name="modelRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.modelRegistryAccessLevel"></a>

```typescript
public readonly modelRegistryAccessLevel: string;
```

- *Type:* string

---

##### `monitorAccessLevel`<sup>Required</sup> <a name="monitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel"></a>

```typescript
public readonly monitorAccessLevel: string;
```

- *Type:* string

---

##### `mrDefaultTargetSelf`<sup>Required</sup> <a name="mrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf"></a>

```typescript
public readonly mrDefaultTargetSelf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.Project.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.project.Project.property.namespaceId"></a>

```typescript
public readonly namespaceId: number;
```

- *Type:* number

---

##### `onlyAllowMergeIfAllDiscussionsAreResolved`<sup>Required</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```typescript
public readonly onlyAllowMergeIfAllDiscussionsAreResolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyAllowMergeIfPipelineSucceeds`<sup>Required</sup> <a name="onlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds"></a>

```typescript
public readonly onlyAllowMergeIfPipelineSucceeds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyMirrorProtectedBranches`<sup>Required</sup> <a name="onlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches"></a>

```typescript
public readonly onlyMirrorProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packagesEnabled`<sup>Required</sup> <a name="packagesEnabled" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabled"></a>

```typescript
public readonly packagesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pagesAccessLevel`<sup>Required</sup> <a name="pagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel"></a>

```typescript
public readonly pagesAccessLevel: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pipelinesEnabled`<sup>Required</sup> <a name="pipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled"></a>

```typescript
public readonly pipelinesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preReceiveSecretDetectionEnabled`<sup>Required</sup> <a name="preReceiveSecretDetectionEnabled" id="@cdktf/provider-gitlab.project.Project.property.preReceiveSecretDetectionEnabled"></a>

```typescript
public readonly preReceiveSecretDetectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventMergeWithoutJiraIssue`<sup>Required</sup> <a name="preventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.project.Project.property.preventMergeWithoutJiraIssue"></a>

```typescript
public readonly preventMergeWithoutJiraIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `printingMergeRequestLinkEnabled`<sup>Required</sup> <a name="printingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled"></a>

```typescript
public readonly printingMergeRequestLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicBuilds`<sup>Required</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.project.Project.property.publicBuilds"></a>

```typescript
public readonly publicBuilds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicJobs`<sup>Required</sup> <a name="publicJobs" id="@cdktf/provider-gitlab.project.Project.property.publicJobs"></a>

```typescript
public readonly publicJobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `releasesAccessLevel`<sup>Required</sup> <a name="releasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel"></a>

```typescript
public readonly releasesAccessLevel: string;
```

- *Type:* string

---

##### `removeSourceBranchAfterMerge`<sup>Required</sup> <a name="removeSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge"></a>

```typescript
public readonly removeSourceBranchAfterMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryAccessLevel`<sup>Required</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel"></a>

```typescript
public readonly repositoryAccessLevel: string;
```

- *Type:* string

---

##### `repositoryStorage`<sup>Required</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorage"></a>

```typescript
public readonly repositoryStorage: string;
```

- *Type:* string

---

##### `requestAccessEnabled`<sup>Required</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requirementsAccessLevel`<sup>Required</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel"></a>

```typescript
public readonly requirementsAccessLevel: string;
```

- *Type:* string

---

##### `resolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions"></a>

```typescript
public readonly resolveOutdatedDiffDiscussions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictUserDefinedVariables`<sup>Required</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables"></a>

```typescript
public readonly restrictUserDefinedVariables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `securityAndComplianceAccessLevel`<sup>Required</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel"></a>

```typescript
public readonly securityAndComplianceAccessLevel: string;
```

- *Type:* string

---

##### `sharedRunnersEnabled`<sup>Required</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled"></a>

```typescript
public readonly sharedRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipWaitForDefaultBranchProtection`<sup>Required</sup> <a name="skipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection"></a>

```typescript
public readonly skipWaitForDefaultBranchProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `snippetsAccessLevel`<sup>Required</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel"></a>

```typescript
public readonly snippetsAccessLevel: string;
```

- *Type:* string

---

##### `snippetsEnabled`<sup>Required</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabled"></a>

```typescript
public readonly snippetsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `squashCommitTemplate`<sup>Required</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate"></a>

```typescript
public readonly squashCommitTemplate: string;
```

- *Type:* string

---

##### `squashOption`<sup>Required</sup> <a name="squashOption" id="@cdktf/provider-gitlab.project.Project.property.squashOption"></a>

```typescript
public readonly squashOption: string;
```

- *Type:* string

---

##### `suggestionCommitMessage`<sup>Required</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage"></a>

```typescript
public readonly suggestionCommitMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-gitlab.project.Project.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/provider-gitlab.project.Project.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `templateProjectId`<sup>Required</sup> <a name="templateProjectId" id="@cdktf/provider-gitlab.project.Project.property.templateProjectId"></a>

```typescript
public readonly templateProjectId: number;
```

- *Type:* number

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-gitlab.project.Project.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

---

##### `useCustomTemplate`<sup>Required</sup> <a name="useCustomTemplate" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplate"></a>

```typescript
public readonly useCustomTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibilityLevel`<sup>Required</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevel"></a>

```typescript
public readonly visibilityLevel: string;
```

- *Type:* string

---

##### `wikiAccessLevel`<sup>Required</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel"></a>

```typescript
public readonly wikiAccessLevel: string;
```

- *Type:* string

---

##### `wikiEnabled`<sup>Required</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabled"></a>

```typescript
public readonly wikiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.project.Project.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-gitlab.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectConfig.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

const projectConfig: project.ProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.name">name</a></code> | <code>string</code> | The name of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline">allowMergeOnSkippedPipeline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if you want to treat skipped pipelines as if they finished with success. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowPipelineTriggerApproveDeployment">allowPipelineTriggerApproveDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel">analyticsAccessLevel</a></code> | <code>string</code> | Set the analytics access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge">approvalsBeforeMerge</a></code> | <code>number</code> | Number of merge request approvals required for merging. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy">archiveOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to `true` to archive the project instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines">autoCancelPendingPipelines</a></code> | <code>string</code> | Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues">autocloseReferencedIssues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set whether auto-closing referenced issues on default branch. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy">autoDevopsDeployStrategy</a></code> | <code>string</code> | Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled">autoDevopsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Auto DevOps for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatar">avatar</a></code> | <code>string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash">avatarHash</a></code> | <code>string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex">buildCoverageRegex</a></code> | <code>string</code> | Test coverage parsing for the project. This is deprecated feature in GitLab 15.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy">buildGitStrategy</a></code> | <code>string</code> | The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel">buildsAccessLevel</a></code> | <code>string</code> | Set the builds access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout">buildTimeout</a></code> | <code>number</code> | The maximum amount of time, in seconds, that a job can run. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath">ciConfigPath</a></code> | <code>string</code> | Custom Path to CI config file. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth">ciDefaultGitDepth</a></code> | <code>number</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled">ciForwardDeploymentEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | When a new deployment job starts, skip older deployment jobs that are still pending. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciPipelineVariablesMinimumOverrideRole">ciPipelineVariablesMinimumOverrideRole</a></code> | <code>string</code> | The minimum role required to set variables when running pipelines and jobs. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole">ciRestrictPipelineCancellationRole</a></code> | <code>string</code> | The role required to cancel a pipeline or job. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches">ciSeparatedCaches</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use separate caches for protected branches. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy">containerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | container_expiration_policy block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel">containerRegistryAccessLevel</a></code> | <code>string</code> | Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled">containerRegistryEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable container registry for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch">defaultBranch</a></code> | <code>string</code> | The default branch for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.description">description</a></code> | <code>string</code> | A description of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled">emailsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel">environmentsAccessLevel</a></code> | <code>string</code> | Set the environments access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel">externalAuthorizationClassificationLabel</a></code> | <code>string</code> | The classification label for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel">featureFlagsAccessLevel</a></code> | <code>string</code> | Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId">forkedFromProjectId</a></code> | <code>number</code> | The id of the project to fork. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel">forkingAccessLevel</a></code> | <code>string</code> | Set the forking access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled">groupRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable group runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId">groupWithProjectTemplatesId</a></code> | <code>number</code> | For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl">importUrl</a></code> | <code>string</code> | Git URL to a repository to be imported. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword">importUrlPassword</a></code> | <code>string</code> | The password for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername">importUrlUsername</a></code> | <code>string</code> | The username for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel">infrastructureAccessLevel</a></code> | <code>string</code> | Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme">initializeWithReadme</a></code> | <code>boolean \| cdktf.IResolvable</code> | Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel">issuesAccessLevel</a></code> | <code>string</code> | Set the issues access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled">issuesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable issue tracking for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate">issuesTemplate</a></code> | <code>string</code> | Sets the template for new issues in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact">keepLatestArtifact</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable or enable the ability to keep the latest artifact for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled">lfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable LFS for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate">mergeCommitTemplate</a></code> | <code>string</code> | Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod">mergeMethod</a></code> | <code>string</code> | Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled">mergePipelinesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable merge pipelines. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel">mergeRequestsAccessLevel</a></code> | <code>string</code> | Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled">mergeRequestsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable merge requests for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate">mergeRequestsTemplate</a></code> | <code>string</code> | Sets the template for new merge requests in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled">mergeTrainsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirror">mirror</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable project pull mirror. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches">mirrorOverwritesDivergedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable overwrite diverged branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds">mirrorTriggerBuilds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable trigger builds on pushes for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.modelExperimentsAccessLevel">modelExperimentsAccessLevel</a></code> | <code>string</code> | Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.modelRegistryAccessLevel">modelRegistryAccessLevel</a></code> | <code>string</code> | Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel">monitorAccessLevel</a></code> | <code>string</code> | Set the monitor access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf">mrDefaultTargetSelf</a></code> | <code>boolean \| cdktf.IResolvable</code> | For forked projects, target merge requests to this project. If false, the target will be the upstream project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId">namespaceId</a></code> | <code>number</code> | The namespace (group or user) of the project. Defaults to your user. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved">onlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if you want allow merges only if all discussions are resolved. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds">onlyAllowMergeIfPipelineSucceeds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if you want allow merges only if a pipeline succeeds. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches">onlyMirrorProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable only mirror protected branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled">packagesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable packages repository for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel">pagesAccessLevel</a></code> | <code>string</code> | Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.path">path</a></code> | <code>string</code> | The path of the repository. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled">pipelinesEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.preReceiveSecretDetectionEnabled">preReceiveSecretDetectionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Secret Push Detection is enabled. Requires GitLab Ultimate and at least GitLab 17.3. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.preventMergeWithoutJiraIssue">preventMergeWithoutJiraIssue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set whether merge requests require an associated issue from Jira. Premium and Ultimate only. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled">printingMergeRequestLinkEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Show link to create/view merge request when pushing from the command line. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds">publicBuilds</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs">publicJobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules">pushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel">releasesAccessLevel</a></code> | <code>string</code> | Set the releases access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge">removeSourceBranchAfterMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable `Delete source branch` option by default for all new merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel">repositoryAccessLevel</a></code> | <code>string</code> | Set the repository access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage">repositoryStorage</a></code> | <code>string</code> | Which storage shard the repository is on. (administrator only). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled">requestAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel">requirementsAccessLevel</a></code> | <code>string</code> | Set the requirements access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions">resolveOutdatedDiffDiscussions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically resolve merge request diffs discussions on lines changed with a push. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables">restrictUserDefinedVariables</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel">securityAndComplianceAccessLevel</a></code> | <code>string</code> | Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled">sharedRunnersEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable shared runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection">skipWaitForDefaultBranchProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | If `true`, the default behavior to wait for the default branch protection to be created is skipped. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel">snippetsAccessLevel</a></code> | <code>string</code> | Set the snippets access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled">snippetsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable snippets for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate">squashCommitTemplate</a></code> | <code>string</code> | Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption">squashOption</a></code> | <code>string</code> | Squash commits when merge request. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage">suggestionCommitMessage</a></code> | <code>string</code> | The commit message used to apply merge request suggestions. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.tags">tags</a></code> | <code>string[]</code> | The list of tags for a project; |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateName">templateName</a></code> | <code>string</code> | When used without use_custom_template, name of a built-in project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId">templateProjectId</a></code> | <code>number</code> | When used with use_custom_template, project ID of a custom project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.topics">topics</a></code> | <code>string[]</code> | The list of topics for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate">useCustomTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel">visibilityLevel</a></code> | <code>string</code> | Set to `public` to create a public project. Valid values are `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel">wikiAccessLevel</a></code> | <code>string</code> | Set the wiki access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled">wikiEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable wiki for the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.project.ProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.project.ProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#name Project#name}

---

##### `allowMergeOnSkippedPipeline`<sup>Optional</sup> <a name="allowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline"></a>

```typescript
public readonly allowMergeOnSkippedPipeline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if you want to treat skipped pipelines as if they finished with success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}

---

##### `allowPipelineTriggerApproveDeployment`<sup>Optional</sup> <a name="allowPipelineTriggerApproveDeployment" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowPipelineTriggerApproveDeployment"></a>

```typescript
public readonly allowPipelineTriggerApproveDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set whether or not a pipeline triggerer is allowed to approve deployments. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#allow_pipeline_trigger_approve_deployment Project#allow_pipeline_trigger_approve_deployment}

---

##### `analyticsAccessLevel`<sup>Optional</sup> <a name="analyticsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel"></a>

```typescript
public readonly analyticsAccessLevel: string;
```

- *Type:* string

Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#analytics_access_level Project#analytics_access_level}

---

##### `approvalsBeforeMerge`<sup>Optional</sup> <a name="approvalsBeforeMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge"></a>

```typescript
public readonly approvalsBeforeMerge: number;
```

- *Type:* number

Number of merge request approvals required for merging.

Default is 0.
  This field **does not** work well in combination with the `gitlab_project_approval_rule` resource
  and is most likely gonna be deprecated in a future GitLab version (see [this upstream epic](https://gitlab.com/groups/gitlab-org/-/epics/7572)).
  In the meantime we recommend against using this attribute and use `gitlab_project_approval_rule` instead.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#approvals_before_merge Project#approvals_before_merge}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#archived Project#archived}

---

##### `archiveOnDestroy`<sup>Optional</sup> <a name="archiveOnDestroy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy"></a>

```typescript
public readonly archiveOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to `true` to archive the project instead of deleting on destroy.

If set to `true` it will entire omit the `DELETE` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#archive_on_destroy Project#archive_on_destroy}

---

##### `autoCancelPendingPipelines`<sup>Optional</sup> <a name="autoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines"></a>

```typescript
public readonly autoCancelPendingPipelines: string;
```

- *Type:* string

Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}

---

##### `autocloseReferencedIssues`<sup>Optional</sup> <a name="autocloseReferencedIssues" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues"></a>

```typescript
public readonly autocloseReferencedIssues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set whether auto-closing referenced issues on default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}

---

##### `autoDevopsDeployStrategy`<sup>Optional</sup> <a name="autoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy"></a>

```typescript
public readonly autoDevopsDeployStrategy: string;
```

- *Type:* string

Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}

---

##### `autoDevopsEnabled`<sup>Optional</sup> <a name="autoDevopsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled"></a>

```typescript
public readonly autoDevopsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Auto DevOps for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}

---

##### `avatar`<sup>Optional</sup> <a name="avatar" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatar"></a>

```typescript
public readonly avatar: string;
```

- *Type:* string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#avatar Project#avatar}

---

##### `avatarHash`<sup>Optional</sup> <a name="avatarHash" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash"></a>

```typescript
public readonly avatarHash: string;
```

- *Type:* string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#avatar_hash Project#avatar_hash}

---

##### `buildCoverageRegex`<sup>Optional</sup> <a name="buildCoverageRegex" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex"></a>

```typescript
public readonly buildCoverageRegex: string;
```

- *Type:* string

Test coverage parsing for the project. This is deprecated feature in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#build_coverage_regex Project#build_coverage_regex}

---

##### `buildGitStrategy`<sup>Optional</sup> <a name="buildGitStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy"></a>

```typescript
public readonly buildGitStrategy: string;
```

- *Type:* string

The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#build_git_strategy Project#build_git_strategy}

---

##### `buildsAccessLevel`<sup>Optional</sup> <a name="buildsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel"></a>

```typescript
public readonly buildsAccessLevel: string;
```

- *Type:* string

Set the builds access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#builds_access_level Project#builds_access_level}

---

##### `buildTimeout`<sup>Optional</sup> <a name="buildTimeout" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout"></a>

```typescript
public readonly buildTimeout: number;
```

- *Type:* number

The maximum amount of time, in seconds, that a job can run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#build_timeout Project#build_timeout}

---

##### `ciConfigPath`<sup>Optional</sup> <a name="ciConfigPath" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath"></a>

```typescript
public readonly ciConfigPath: string;
```

- *Type:* string

Custom Path to CI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#ci_config_path Project#ci_config_path}

---

##### `ciDefaultGitDepth`<sup>Optional</sup> <a name="ciDefaultGitDepth" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth"></a>

```typescript
public readonly ciDefaultGitDepth: number;
```

- *Type:* number

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}

---

##### `ciForwardDeploymentEnabled`<sup>Optional</sup> <a name="ciForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled"></a>

```typescript
public readonly ciForwardDeploymentEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When a new deployment job starts, skip older deployment jobs that are still pending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}

---

##### `ciPipelineVariablesMinimumOverrideRole`<sup>Optional</sup> <a name="ciPipelineVariablesMinimumOverrideRole" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciPipelineVariablesMinimumOverrideRole"></a>

```typescript
public readonly ciPipelineVariablesMinimumOverrideRole: string;
```

- *Type:* string

The minimum role required to set variables when running pipelines and jobs.

Introduced in GitLab 17.1. Valid values are `developer`, `maintainer`, `owner`, `no_one_allowed`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#ci_pipeline_variables_minimum_override_role Project#ci_pipeline_variables_minimum_override_role}

---

##### `ciRestrictPipelineCancellationRole`<sup>Optional</sup> <a name="ciRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole"></a>

```typescript
public readonly ciRestrictPipelineCancellationRole: string;
```

- *Type:* string

The role required to cancel a pipeline or job.

Introduced in GitLab 16.8. Premium and Ultimate only. Valid values are `developer`, `maintainer`, `no one`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#ci_restrict_pipeline_cancellation_role Project#ci_restrict_pipeline_cancellation_role}

---

##### `ciSeparatedCaches`<sup>Optional</sup> <a name="ciSeparatedCaches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches"></a>

```typescript
public readonly ciSeparatedCaches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use separate caches for protected branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#ci_separated_caches Project#ci_separated_caches}

---

##### `containerExpirationPolicy`<sup>Optional</sup> <a name="containerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy"></a>

```typescript
public readonly containerExpirationPolicy: ProjectContainerExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

container_expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#container_expiration_policy Project#container_expiration_policy}

---

##### `containerRegistryAccessLevel`<sup>Optional</sup> <a name="containerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel"></a>

```typescript
public readonly containerRegistryAccessLevel: string;
```

- *Type:* string

Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#container_registry_access_level Project#container_registry_access_level}

---

##### `containerRegistryEnabled`<sup>Optional</sup> <a name="containerRegistryEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled"></a>

```typescript
public readonly containerRegistryEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable container registry for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#container_registry_enabled Project#container_registry_enabled}

---

##### `defaultBranch`<sup>Optional</sup> <a name="defaultBranch" id="@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch"></a>

```typescript
public readonly defaultBranch: string;
```

- *Type:* string

The default branch for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#default_branch Project#default_branch}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.project.ProjectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#description Project#description}

---

##### `emailsEnabled`<sup>Optional</sup> <a name="emailsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled"></a>

```typescript
public readonly emailsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#emails_enabled Project#emails_enabled}

---

##### `environmentsAccessLevel`<sup>Optional</sup> <a name="environmentsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel"></a>

```typescript
public readonly environmentsAccessLevel: string;
```

- *Type:* string

Set the environments access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#environments_access_level Project#environments_access_level}

---

##### `externalAuthorizationClassificationLabel`<sup>Optional</sup> <a name="externalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel"></a>

```typescript
public readonly externalAuthorizationClassificationLabel: string;
```

- *Type:* string

The classification label for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}

---

##### `featureFlagsAccessLevel`<sup>Optional</sup> <a name="featureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel"></a>

```typescript
public readonly featureFlagsAccessLevel: string;
```

- *Type:* string

Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}

---

##### `forkedFromProjectId`<sup>Optional</sup> <a name="forkedFromProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId"></a>

```typescript
public readonly forkedFromProjectId: number;
```

- *Type:* number

The id of the project to fork.

During create the project is forked and during an update the fork relation is changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#forked_from_project_id Project#forked_from_project_id}

---

##### `forkingAccessLevel`<sup>Optional</sup> <a name="forkingAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel"></a>

```typescript
public readonly forkingAccessLevel: string;
```

- *Type:* string

Set the forking access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#forking_access_level Project#forking_access_level}

---

##### `groupRunnersEnabled`<sup>Optional</sup> <a name="groupRunnersEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled"></a>

```typescript
public readonly groupRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable group runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#group_runners_enabled Project#group_runners_enabled}

---

##### `groupWithProjectTemplatesId`<sup>Optional</sup> <a name="groupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId"></a>

```typescript
public readonly groupWithProjectTemplatesId: number;
```

- *Type:* number

For group-level custom templates, specifies ID of group from which all the custom project templates are sourced.

Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importUrl`<sup>Optional</sup> <a name="importUrl" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl"></a>

```typescript
public readonly importUrl: string;
```

- *Type:* string

Git URL to a repository to be imported.

Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#import_url Project#import_url}

---

##### `importUrlPassword`<sup>Optional</sup> <a name="importUrlPassword" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword"></a>

```typescript
public readonly importUrlPassword: string;
```

- *Type:* string

The password for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#import_url_password Project#import_url_password}

---

##### `importUrlUsername`<sup>Optional</sup> <a name="importUrlUsername" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername"></a>

```typescript
public readonly importUrlUsername: string;
```

- *Type:* string

The username for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#import_url_username Project#import_url_username}

---

##### `infrastructureAccessLevel`<sup>Optional</sup> <a name="infrastructureAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel"></a>

```typescript
public readonly infrastructureAccessLevel: string;
```

- *Type:* string

Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}

---

##### `initializeWithReadme`<sup>Optional</sup> <a name="initializeWithReadme" id="@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme"></a>

```typescript
public readonly initializeWithReadme: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#initialize_with_readme Project#initialize_with_readme}

---

##### `issuesAccessLevel`<sup>Optional</sup> <a name="issuesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel"></a>

```typescript
public readonly issuesAccessLevel: string;
```

- *Type:* string

Set the issues access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#issues_access_level Project#issues_access_level}

---

##### `issuesEnabled`<sup>Optional</sup> <a name="issuesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled"></a>

```typescript
public readonly issuesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable issue tracking for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#issues_enabled Project#issues_enabled}

---

##### `issuesTemplate`<sup>Optional</sup> <a name="issuesTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate"></a>

```typescript
public readonly issuesTemplate: string;
```

- *Type:* string

Sets the template for new issues in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#issues_template Project#issues_template}

---

##### `keepLatestArtifact`<sup>Optional</sup> <a name="keepLatestArtifact" id="@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact"></a>

```typescript
public readonly keepLatestArtifact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable or enable the ability to keep the latest artifact for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}

---

##### `lfsEnabled`<sup>Optional</sup> <a name="lfsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled"></a>

```typescript
public readonly lfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable LFS for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#lfs_enabled Project#lfs_enabled}

---

##### `mergeCommitTemplate`<sup>Optional</sup> <a name="mergeCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate"></a>

```typescript
public readonly mergeCommitTemplate: string;
```

- *Type:* string

Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#merge_commit_template Project#merge_commit_template}

---

##### `mergeMethod`<sup>Optional</sup> <a name="mergeMethod" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod"></a>

```typescript
public readonly mergeMethod: string;
```

- *Type:* string

Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#merge_method Project#merge_method}

---

##### `mergePipelinesEnabled`<sup>Optional</sup> <a name="mergePipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled"></a>

```typescript
public readonly mergePipelinesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable merge pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}

---

##### `mergeRequestsAccessLevel`<sup>Optional</sup> <a name="mergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel"></a>

```typescript
public readonly mergeRequestsAccessLevel: string;
```

- *Type:* string

Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}

---

##### `mergeRequestsEnabled`<sup>Optional</sup> <a name="mergeRequestsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled"></a>

```typescript
public readonly mergeRequestsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable merge requests for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}

---

##### `mergeRequestsTemplate`<sup>Optional</sup> <a name="mergeRequestsTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate"></a>

```typescript
public readonly mergeRequestsTemplate: string;
```

- *Type:* string

Sets the template for new merge requests in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#merge_requests_template Project#merge_requests_template}

---

##### `mergeTrainsEnabled`<sup>Optional</sup> <a name="mergeTrainsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled"></a>

```typescript
public readonly mergeTrainsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}

---

##### `mirror`<sup>Optional</sup> <a name="mirror" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirror"></a>

```typescript
public readonly mirror: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable project pull mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#mirror Project#mirror}

---

##### `mirrorOverwritesDivergedBranches`<sup>Optional</sup> <a name="mirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches"></a>

```typescript
public readonly mirrorOverwritesDivergedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable overwrite diverged branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}

---

##### `mirrorTriggerBuilds`<sup>Optional</sup> <a name="mirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds"></a>

```typescript
public readonly mirrorTriggerBuilds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable trigger builds on pushes for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}

---

##### `modelExperimentsAccessLevel`<sup>Optional</sup> <a name="modelExperimentsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.modelExperimentsAccessLevel"></a>

```typescript
public readonly modelExperimentsAccessLevel: string;
```

- *Type:* string

Set visibility of machine learning model experiments. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#model_experiments_access_level Project#model_experiments_access_level}

---

##### `modelRegistryAccessLevel`<sup>Optional</sup> <a name="modelRegistryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.modelRegistryAccessLevel"></a>

```typescript
public readonly modelRegistryAccessLevel: string;
```

- *Type:* string

Set visibility of machine learning model registry. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#model_registry_access_level Project#model_registry_access_level}

---

##### `monitorAccessLevel`<sup>Optional</sup> <a name="monitorAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel"></a>

```typescript
public readonly monitorAccessLevel: string;
```

- *Type:* string

Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#monitor_access_level Project#monitor_access_level}

---

##### `mrDefaultTargetSelf`<sup>Optional</sup> <a name="mrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf"></a>

```typescript
public readonly mrDefaultTargetSelf: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

For forked projects, target merge requests to this project. If false, the target will be the upstream project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#mr_default_target_self Project#mr_default_target_self}

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: number;
```

- *Type:* number

The namespace (group or user) of the project. Defaults to your user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#namespace_id Project#namespace_id}

---

##### `onlyAllowMergeIfAllDiscussionsAreResolved`<sup>Optional</sup> <a name="onlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```typescript
public readonly onlyAllowMergeIfAllDiscussionsAreResolved: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if you want allow merges only if all discussions are resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}

---

##### `onlyAllowMergeIfPipelineSucceeds`<sup>Optional</sup> <a name="onlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds"></a>

```typescript
public readonly onlyAllowMergeIfPipelineSucceeds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if you want allow merges only if a pipeline succeeds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}

---

##### `onlyMirrorProtectedBranches`<sup>Optional</sup> <a name="onlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches"></a>

```typescript
public readonly onlyMirrorProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable only mirror protected branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}

---

##### `packagesEnabled`<sup>Optional</sup> <a name="packagesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled"></a>

```typescript
public readonly packagesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable packages repository for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#packages_enabled Project#packages_enabled}

---

##### `pagesAccessLevel`<sup>Optional</sup> <a name="pagesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel"></a>

```typescript
public readonly pagesAccessLevel: string;
```

- *Type:* string

Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#pages_access_level Project#pages_access_level}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-gitlab.project.ProjectConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#path Project#path}

---

##### `pipelinesEnabled`<sup>Optional</sup> <a name="pipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled"></a>

```typescript
public readonly pipelinesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#pipelines_enabled Project#pipelines_enabled}

---

##### `preReceiveSecretDetectionEnabled`<sup>Optional</sup> <a name="preReceiveSecretDetectionEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.preReceiveSecretDetectionEnabled"></a>

```typescript
public readonly preReceiveSecretDetectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Secret Push Detection is enabled. Requires GitLab Ultimate and at least GitLab 17.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#pre_receive_secret_detection_enabled Project#pre_receive_secret_detection_enabled}

---

##### `preventMergeWithoutJiraIssue`<sup>Optional</sup> <a name="preventMergeWithoutJiraIssue" id="@cdktf/provider-gitlab.project.ProjectConfig.property.preventMergeWithoutJiraIssue"></a>

```typescript
public readonly preventMergeWithoutJiraIssue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set whether merge requests require an associated issue from Jira. Premium and Ultimate only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#prevent_merge_without_jira_issue Project#prevent_merge_without_jira_issue}

---

##### `printingMergeRequestLinkEnabled`<sup>Optional</sup> <a name="printingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled"></a>

```typescript
public readonly printingMergeRequestLinkEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Show link to create/view merge request when pushing from the command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}

---

##### `publicBuilds`<sup>Optional</sup> <a name="publicBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds"></a>

```typescript
public readonly publicBuilds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#public_builds Project#public_builds}

---

##### `publicJobs`<sup>Optional</sup> <a name="publicJobs" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs"></a>

```typescript
public readonly publicJobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#public_jobs Project#public_jobs}

---

##### `pushRules`<sup>Optional</sup> <a name="pushRules" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules"></a>

```typescript
public readonly pushRules: ProjectPushRules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#push_rules Project#push_rules}

---

##### `releasesAccessLevel`<sup>Optional</sup> <a name="releasesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel"></a>

```typescript
public readonly releasesAccessLevel: string;
```

- *Type:* string

Set the releases access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#releases_access_level Project#releases_access_level}

---

##### `removeSourceBranchAfterMerge`<sup>Optional</sup> <a name="removeSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge"></a>

```typescript
public readonly removeSourceBranchAfterMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable `Delete source branch` option by default for all new merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}

---

##### `repositoryAccessLevel`<sup>Optional</sup> <a name="repositoryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel"></a>

```typescript
public readonly repositoryAccessLevel: string;
```

- *Type:* string

Set the repository access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#repository_access_level Project#repository_access_level}

---

##### `repositoryStorage`<sup>Optional</sup> <a name="repositoryStorage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage"></a>

```typescript
public readonly repositoryStorage: string;
```

- *Type:* string

Which storage shard the repository is on. (administrator only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#repository_storage Project#repository_storage}

---

##### `requestAccessEnabled`<sup>Optional</sup> <a name="requestAccessEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled"></a>

```typescript
public readonly requestAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#request_access_enabled Project#request_access_enabled}

---

##### `requirementsAccessLevel`<sup>Optional</sup> <a name="requirementsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel"></a>

```typescript
public readonly requirementsAccessLevel: string;
```

- *Type:* string

Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#requirements_access_level Project#requirements_access_level}

---

##### `resolveOutdatedDiffDiscussions`<sup>Optional</sup> <a name="resolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions"></a>

```typescript
public readonly resolveOutdatedDiffDiscussions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically resolve merge request diffs discussions on lines changed with a push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}

---

##### `restrictUserDefinedVariables`<sup>Optional</sup> <a name="restrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables"></a>

```typescript
public readonly restrictUserDefinedVariables: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}

---

##### `securityAndComplianceAccessLevel`<sup>Optional</sup> <a name="securityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel"></a>

```typescript
public readonly securityAndComplianceAccessLevel: string;
```

- *Type:* string

Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}

---

##### `sharedRunnersEnabled`<sup>Optional</sup> <a name="sharedRunnersEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled"></a>

```typescript
public readonly sharedRunnersEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable shared runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}

---

##### `skipWaitForDefaultBranchProtection`<sup>Optional</sup> <a name="skipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection"></a>

```typescript
public readonly skipWaitForDefaultBranchProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If `true`, the default behavior to wait for the default branch protection to be created is skipped.

This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}

---

##### `snippetsAccessLevel`<sup>Optional</sup> <a name="snippetsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel"></a>

```typescript
public readonly snippetsAccessLevel: string;
```

- *Type:* string

Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#snippets_access_level Project#snippets_access_level}

---

##### `snippetsEnabled`<sup>Optional</sup> <a name="snippetsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled"></a>

```typescript
public readonly snippetsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable snippets for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#snippets_enabled Project#snippets_enabled}

---

##### `squashCommitTemplate`<sup>Optional</sup> <a name="squashCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate"></a>

```typescript
public readonly squashCommitTemplate: string;
```

- *Type:* string

Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#squash_commit_template Project#squash_commit_template}

---

##### `squashOption`<sup>Optional</sup> <a name="squashOption" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption"></a>

```typescript
public readonly squashOption: string;
```

- *Type:* string

Squash commits when merge request.

Valid values are `never`, `always`, `default_on`, or `default_off`. The default value is `default_off`. [GitLab >= 14.1]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#squash_option Project#squash_option}

---

##### `suggestionCommitMessage`<sup>Optional</sup> <a name="suggestionCommitMessage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage"></a>

```typescript
public readonly suggestionCommitMessage: string;
```

- *Type:* string

The commit message used to apply merge request suggestions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-gitlab.project.ProjectConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

The list of tags for a project;

put array of tags, that should be finally assigned to a project. Use topics instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#tags Project#tags}

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

When used without use_custom_template, name of a built-in project template.

When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#template_name Project#template_name}

---

##### `templateProjectId`<sup>Optional</sup> <a name="templateProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId"></a>

```typescript
public readonly templateProjectId: number;
```

- *Type:* number

When used with use_custom_template, project ID of a custom project template.

This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#template_project_id Project#template_project_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ProjectTimeouts;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#timeouts Project#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-gitlab.project.ProjectConfig.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

The list of topics for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#topics Project#topics}

---

##### `useCustomTemplate`<sup>Optional</sup> <a name="useCustomTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate"></a>

```typescript
public readonly useCustomTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).

~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting.html#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#use_custom_template Project#use_custom_template}

---

##### `visibilityLevel`<sup>Optional</sup> <a name="visibilityLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel"></a>

```typescript
public readonly visibilityLevel: string;
```

- *Type:* string

Set to `public` to create a public project. Valid values are `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#visibility_level Project#visibility_level}

---

##### `wikiAccessLevel`<sup>Optional</sup> <a name="wikiAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel"></a>

```typescript
public readonly wikiAccessLevel: string;
```

- *Type:* string

Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#wiki_access_level Project#wiki_access_level}

---

##### `wikiEnabled`<sup>Optional</sup> <a name="wikiEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled"></a>

```typescript
public readonly wikiEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable wiki for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#wiki_enabled Project#wiki_enabled}

---

### ProjectContainerExpirationPolicy <a name="ProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

const projectContainerExpirationPolicy: project.ProjectContainerExpirationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence">cadence</a></code> | <code>string</code> | The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the policy is enabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN">keepN</a></code> | <code>number</code> | The number of images to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex">nameRegex</a></code> | <code>string</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete">nameRegexDelete</a></code> | <code>string</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep">nameRegexKeep</a></code> | <code>string</code> | The regular expression to match image names to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan">olderThan</a></code> | <code>string</code> | The number of days to keep images. |

---

##### `cadence`<sup>Optional</sup> <a name="cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence"></a>

```typescript
public readonly cadence: string;
```

- *Type:* string

The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#cadence Project#cadence}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#enabled Project#enabled}

---

##### `keepN`<sup>Optional</sup> <a name="keepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN"></a>

```typescript
public readonly keepN: number;
```

- *Type:* number

The number of images to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#keep_n Project#keep_n}

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#name_regex Project#name_regex}

---

##### `nameRegexDelete`<sup>Optional</sup> <a name="nameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete"></a>

```typescript
public readonly nameRegexDelete: string;
```

- *Type:* string

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#name_regex_delete Project#name_regex_delete}

---

##### `nameRegexKeep`<sup>Optional</sup> <a name="nameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep"></a>

```typescript
public readonly nameRegexKeep: string;
```

- *Type:* string

The regular expression to match image names to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#name_regex_keep Project#name_regex_keep}

---

##### `olderThan`<sup>Optional</sup> <a name="olderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan"></a>

```typescript
public readonly olderThan: string;
```

- *Type:* string

The number of days to keep images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#older_than Project#older_than}

---

### ProjectPushRules <a name="ProjectPushRules" id="@cdktf/provider-gitlab.project.ProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectPushRules.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

const projectPushRules: project.ProjectPushRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex">authorEmailRegex</a></code> | <code>string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex">branchNameRegex</a></code> | <code>string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>string</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex">commitMessageRegex</a></code> | <code>string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag">denyDeleteTag</a></code> | <code>boolean \| cdktf.IResolvable</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex">fileNameRegex</a></code> | <code>string</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck">memberCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets">preventSecrets</a></code> | <code>boolean \| cdktf.IResolvable</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | Reject commit when it’s not signed through GPG. |

---

##### `authorEmailRegex`<sup>Optional</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex"></a>

```typescript
public readonly authorEmailRegex: string;
```

- *Type:* string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#author_email_regex Project#author_email_regex}

---

##### `branchNameRegex`<sup>Optional</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex"></a>

```typescript
public readonly branchNameRegex: string;
```

- *Type:* string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#branch_name_regex Project#branch_name_regex}

---

##### `commitCommitterCheck`<sup>Optional</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck"></a>

```typescript
public readonly commitCommitterCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#commit_committer_check Project#commit_committer_check}

---

##### `commitCommitterNameCheck`<sup>Optional</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck"></a>

```typescript
public readonly commitCommitterNameCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#commit_committer_name_check Project#commit_committer_name_check}

---

##### `commitMessageNegativeRegex`<sup>Optional</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex"></a>

```typescript
public readonly commitMessageNegativeRegex: string;
```

- *Type:* string

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#commit_message_negative_regex Project#commit_message_negative_regex}

---

##### `commitMessageRegex`<sup>Optional</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex"></a>

```typescript
public readonly commitMessageRegex: string;
```

- *Type:* string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#commit_message_regex Project#commit_message_regex}

---

##### `denyDeleteTag`<sup>Optional</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag"></a>

```typescript
public readonly denyDeleteTag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#deny_delete_tag Project#deny_delete_tag}

---

##### `fileNameRegex`<sup>Optional</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex"></a>

```typescript
public readonly fileNameRegex: string;
```

- *Type:* string

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#file_name_regex Project#file_name_regex}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#max_file_size Project#max_file_size}

---

##### `memberCheck`<sup>Optional</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck"></a>

```typescript
public readonly memberCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#member_check Project#member_check}

---

##### `preventSecrets`<sup>Optional</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets"></a>

```typescript
public readonly preventSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#prevent_secrets Project#prevent_secrets}

---

##### `rejectNonDcoCommits`<sup>Optional</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectNonDcoCommits"></a>

```typescript
public readonly rejectNonDcoCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#reject_non_dco_commits Project#reject_non_dco_commits}

---

##### `rejectUnsignedCommits`<sup>Optional</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits"></a>

```typescript
public readonly rejectUnsignedCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Reject commit when it’s not signed through GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#reject_unsigned_commits Project#reject_unsigned_commits}

---

### ProjectTimeouts <a name="ProjectTimeouts" id="@cdktf/provider-gitlab.project.ProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectTimeouts.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

const projectTimeouts: project.ProjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#create Project#create}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#delete Project#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#create Project#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/project#delete Project#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectContainerExpirationPolicyOutputReference <a name="ProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

new project.ProjectContainerExpirationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence">resetCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN">resetKeepN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete">resetNameRegexDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep">resetNameRegexKeep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan">resetOlderThan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCadence` <a name="resetCadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence"></a>

```typescript
public resetCadence(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetKeepN` <a name="resetKeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN"></a>

```typescript
public resetKeepN(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetNameRegexDelete` <a name="resetNameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete"></a>

```typescript
public resetNameRegexDelete(): void
```

##### `resetNameRegexKeep` <a name="resetNameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep"></a>

```typescript
public resetNameRegexKeep(): void
```

##### `resetOlderThan` <a name="resetOlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan"></a>

```typescript
public resetOlderThan(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt">nextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput">cadenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput">keepNInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput">nameRegexDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput">nameRegexKeepInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput">olderThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence">cadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN">keepN</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">nameRegexDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">nameRegexKeep</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan">olderThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nextRunAt`<sup>Required</sup> <a name="nextRunAt" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```typescript
public readonly nextRunAt: string;
```

- *Type:* string

---

##### `cadenceInput`<sup>Optional</sup> <a name="cadenceInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput"></a>

```typescript
public readonly cadenceInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepNInput`<sup>Optional</sup> <a name="keepNInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput"></a>

```typescript
public readonly keepNInput: number;
```

- *Type:* number

---

##### `nameRegexDeleteInput`<sup>Optional</sup> <a name="nameRegexDeleteInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput"></a>

```typescript
public readonly nameRegexDeleteInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `nameRegexKeepInput`<sup>Optional</sup> <a name="nameRegexKeepInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput"></a>

```typescript
public readonly nameRegexKeepInput: string;
```

- *Type:* string

---

##### `olderThanInput`<sup>Optional</sup> <a name="olderThanInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput"></a>

```typescript
public readonly olderThanInput: string;
```

- *Type:* string

---

##### `cadence`<sup>Required</sup> <a name="cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```typescript
public readonly cadence: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keepN`<sup>Required</sup> <a name="keepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```typescript
public readonly keepN: number;
```

- *Type:* number

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `nameRegexDelete`<sup>Required</sup> <a name="nameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```typescript
public readonly nameRegexDelete: string;
```

- *Type:* string

---

##### `nameRegexKeep`<sup>Required</sup> <a name="nameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```typescript
public readonly nameRegexKeep: string;
```

- *Type:* string

---

##### `olderThan`<sup>Required</sup> <a name="olderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```typescript
public readonly olderThan: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectContainerExpirationPolicy;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---


### ProjectPushRulesOutputReference <a name="ProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

new project.ProjectPushRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex">resetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex">resetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck">resetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck">resetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex">resetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex">resetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag">resetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex">resetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck">resetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets">resetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectNonDcoCommits">resetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits">resetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorEmailRegex` <a name="resetAuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex"></a>

```typescript
public resetAuthorEmailRegex(): void
```

##### `resetBranchNameRegex` <a name="resetBranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex"></a>

```typescript
public resetBranchNameRegex(): void
```

##### `resetCommitCommitterCheck` <a name="resetCommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck"></a>

```typescript
public resetCommitCommitterCheck(): void
```

##### `resetCommitCommitterNameCheck` <a name="resetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```typescript
public resetCommitCommitterNameCheck(): void
```

##### `resetCommitMessageNegativeRegex` <a name="resetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```typescript
public resetCommitMessageNegativeRegex(): void
```

##### `resetCommitMessageRegex` <a name="resetCommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex"></a>

```typescript
public resetCommitMessageRegex(): void
```

##### `resetDenyDeleteTag` <a name="resetDenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag"></a>

```typescript
public resetDenyDeleteTag(): void
```

##### `resetFileNameRegex` <a name="resetFileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex"></a>

```typescript
public resetFileNameRegex(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetMemberCheck` <a name="resetMemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck"></a>

```typescript
public resetMemberCheck(): void
```

##### `resetPreventSecrets` <a name="resetPreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets"></a>

```typescript
public resetPreventSecrets(): void
```

##### `resetRejectNonDcoCommits` <a name="resetRejectNonDcoCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectNonDcoCommits"></a>

```typescript
public resetRejectNonDcoCommits(): void
```

##### `resetRejectUnsignedCommits` <a name="resetRejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```typescript
public resetRejectUnsignedCommits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput">authorEmailRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput">branchNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput">commitCommitterCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput">commitCommitterNameCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput">commitMessageNegativeRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput">commitMessageRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput">denyDeleteTagInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput">fileNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput">memberCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput">preventSecretsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommitsInput">rejectNonDcoCommitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput">rejectUnsignedCommitsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex">authorEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex">branchNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck">commitCommitterCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck">commitCommitterNameCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex">commitMessageNegativeRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex">commitMessageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag">denyDeleteTag</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex">fileNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck">memberCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets">preventSecrets</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommits">rejectNonDcoCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits">rejectUnsignedCommits</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorEmailRegexInput`<sup>Optional</sup> <a name="authorEmailRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput"></a>

```typescript
public readonly authorEmailRegexInput: string;
```

- *Type:* string

---

##### `branchNameRegexInput`<sup>Optional</sup> <a name="branchNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput"></a>

```typescript
public readonly branchNameRegexInput: string;
```

- *Type:* string

---

##### `commitCommitterCheckInput`<sup>Optional</sup> <a name="commitCommitterCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```typescript
public readonly commitCommitterCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitCommitterNameCheckInput`<sup>Optional</sup> <a name="commitCommitterNameCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```typescript
public readonly commitCommitterNameCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitMessageNegativeRegexInput`<sup>Optional</sup> <a name="commitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```typescript
public readonly commitMessageNegativeRegexInput: string;
```

- *Type:* string

---

##### `commitMessageRegexInput`<sup>Optional</sup> <a name="commitMessageRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput"></a>

```typescript
public readonly commitMessageRegexInput: string;
```

- *Type:* string

---

##### `denyDeleteTagInput`<sup>Optional</sup> <a name="denyDeleteTagInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput"></a>

```typescript
public readonly denyDeleteTagInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileNameRegexInput`<sup>Optional</sup> <a name="fileNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput"></a>

```typescript
public readonly fileNameRegexInput: string;
```

- *Type:* string

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `memberCheckInput`<sup>Optional</sup> <a name="memberCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput"></a>

```typescript
public readonly memberCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventSecretsInput`<sup>Optional</sup> <a name="preventSecretsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput"></a>

```typescript
public readonly preventSecretsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectNonDcoCommitsInput`<sup>Optional</sup> <a name="rejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommitsInput"></a>

```typescript
public readonly rejectNonDcoCommitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectUnsignedCommitsInput`<sup>Optional</sup> <a name="rejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```typescript
public readonly rejectUnsignedCommitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `authorEmailRegex`<sup>Required</sup> <a name="authorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```typescript
public readonly authorEmailRegex: string;
```

- *Type:* string

---

##### `branchNameRegex`<sup>Required</sup> <a name="branchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex"></a>

```typescript
public readonly branchNameRegex: string;
```

- *Type:* string

---

##### `commitCommitterCheck`<sup>Required</sup> <a name="commitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```typescript
public readonly commitCommitterCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitCommitterNameCheck`<sup>Required</sup> <a name="commitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```typescript
public readonly commitCommitterNameCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commitMessageNegativeRegex`<sup>Required</sup> <a name="commitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```typescript
public readonly commitMessageNegativeRegex: string;
```

- *Type:* string

---

##### `commitMessageRegex`<sup>Required</sup> <a name="commitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```typescript
public readonly commitMessageRegex: string;
```

- *Type:* string

---

##### `denyDeleteTag`<sup>Required</sup> <a name="denyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```typescript
public readonly denyDeleteTag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileNameRegex`<sup>Required</sup> <a name="fileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex"></a>

```typescript
public readonly fileNameRegex: string;
```

- *Type:* string

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `memberCheck`<sup>Required</sup> <a name="memberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck"></a>

```typescript
public readonly memberCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventSecrets`<sup>Required</sup> <a name="preventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets"></a>

```typescript
public readonly preventSecrets: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectNonDcoCommits`<sup>Required</sup> <a name="rejectNonDcoCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectNonDcoCommits"></a>

```typescript
public readonly rejectNonDcoCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rejectUnsignedCommits`<sup>Required</sup> <a name="rejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```typescript
public readonly rejectUnsignedCommits: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ProjectPushRules;
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---


### ProjectTimeoutsOutputReference <a name="ProjectTimeoutsOutputReference" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { project } from '@cdktf/provider-gitlab'

new project.ProjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ProjectTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

---




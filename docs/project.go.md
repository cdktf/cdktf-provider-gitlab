# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-gitlab.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-gitlab.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.Project.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.NewProject(scope Construct, id *string, config ProjectConfig) Project
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy">PutContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putPushRules">PutPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline">ResetAllowMergeOnSkippedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel">ResetAnalyticsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge">ResetApprovalsBeforeMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchived">ResetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy">ResetArchiveOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines">ResetAutoCancelPendingPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues">ResetAutocloseReferencedIssues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy">ResetAutoDevopsDeployStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled">ResetAutoDevopsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatar">ResetAvatar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetAvatarHash">ResetAvatarHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildCoverageRegex">ResetBuildCoverageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy">ResetBuildGitStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel">ResetBuildsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetBuildTimeout">ResetBuildTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiConfigPath">ResetCiConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth">ResetCiDefaultGitDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled">ResetCiForwardDeploymentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole">ResetCiRestrictPipelineCancellationRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches">ResetCiSeparatedCaches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy">ResetContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel">ResetContainerRegistryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled">ResetContainerRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEmailsEnabled">ResetEmailsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel">ResetEnvironmentsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel">ResetExternalAuthorizationClassificationLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel">ResetFeatureFlagsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId">ResetForkedFromProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel">ResetForkingAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled">ResetGroupRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId">ResetGroupWithProjectTemplatesId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrl">ResetImportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlPassword">ResetImportUrlPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetImportUrlUsername">ResetImportUrlUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel">ResetInfrastructureAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme">ResetInitializeWithReadme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel">ResetIssuesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesEnabled">ResetIssuesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetIssuesTemplate">ResetIssuesTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact">ResetKeepLatestArtifact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetLfsEnabled">ResetLfsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate">ResetMergeCommitTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeMethod">ResetMergeMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled">ResetMergePipelinesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel">ResetMergeRequestsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled">ResetMergeRequestsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate">ResetMergeRequestsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled">ResetMergeTrainsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirror">ResetMirror</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches">ResetMirrorOverwritesDivergedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds">ResetMirrorTriggerBuilds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel">ResetMonitorAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf">ResetMrDefaultTargetSelf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved">ResetOnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds">ResetOnlyAllowMergeIfPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches">ResetOnlyMirrorProtectedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPackagesEnabled">ResetPackagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel">ResetPagesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled">ResetPipelinesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled">ResetPrintingMergeRequestLinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicBuilds">ResetPublicBuilds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicJobs">ResetPublicJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPushRules">ResetPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel">ResetReleasesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge">ResetRemoveSourceBranchAfterMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel">ResetRepositoryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRepositoryStorage">ResetRepositoryStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled">ResetRequestAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel">ResetRequirementsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions">ResetResolveOutdatedDiffDiscussions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables">ResetRestrictUserDefinedVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel">ResetSecurityAndComplianceAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled">ResetSharedRunnersEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection">ResetSkipWaitForDefaultBranchProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel">ResetSnippetsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled">ResetSnippetsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate">ResetSquashCommitTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSquashOption">ResetSquashOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage">ResetSuggestionCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateName">ResetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTemplateProjectId">ResetTemplateProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate">ResetUseCustomTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetVisibilityLevel">ResetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel">ResetWikiAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiEnabled">ResetWikiEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.project.Project.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.project.Project.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.project.Project.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.project.Project.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.project.Project.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.project.Project.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.project.Project.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.project.Project.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.project.Project.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.project.Project.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.project.Project.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.project.Project.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.project.Project.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.project.Project.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerExpirationPolicy` <a name="PutContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy"></a>

```go
func PutContainerExpirationPolicy(value ProjectContainerExpirationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `PutPushRules` <a name="PutPushRules" id="@cdktf/provider-gitlab.project.Project.putPushRules"></a>

```go
func PutPushRules(value ProjectPushRules)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-gitlab.project.Project.putTimeouts"></a>

```go
func PutTimeouts(value ProjectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.project.Project.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

---

##### `ResetAllowMergeOnSkippedPipeline` <a name="ResetAllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline"></a>

```go
func ResetAllowMergeOnSkippedPipeline()
```

##### `ResetAnalyticsAccessLevel` <a name="ResetAnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel"></a>

```go
func ResetAnalyticsAccessLevel()
```

##### `ResetApprovalsBeforeMerge` <a name="ResetApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge"></a>

```go
func ResetApprovalsBeforeMerge()
```

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-gitlab.project.Project.resetArchived"></a>

```go
func ResetArchived()
```

##### `ResetArchiveOnDestroy` <a name="ResetArchiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy"></a>

```go
func ResetArchiveOnDestroy()
```

##### `ResetAutoCancelPendingPipelines` <a name="ResetAutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines"></a>

```go
func ResetAutoCancelPendingPipelines()
```

##### `ResetAutocloseReferencedIssues` <a name="ResetAutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues"></a>

```go
func ResetAutocloseReferencedIssues()
```

##### `ResetAutoDevopsDeployStrategy` <a name="ResetAutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy"></a>

```go
func ResetAutoDevopsDeployStrategy()
```

##### `ResetAutoDevopsEnabled` <a name="ResetAutoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled"></a>

```go
func ResetAutoDevopsEnabled()
```

##### `ResetAvatar` <a name="ResetAvatar" id="@cdktf/provider-gitlab.project.Project.resetAvatar"></a>

```go
func ResetAvatar()
```

##### `ResetAvatarHash` <a name="ResetAvatarHash" id="@cdktf/provider-gitlab.project.Project.resetAvatarHash"></a>

```go
func ResetAvatarHash()
```

##### `ResetBuildCoverageRegex` <a name="ResetBuildCoverageRegex" id="@cdktf/provider-gitlab.project.Project.resetBuildCoverageRegex"></a>

```go
func ResetBuildCoverageRegex()
```

##### `ResetBuildGitStrategy` <a name="ResetBuildGitStrategy" id="@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy"></a>

```go
func ResetBuildGitStrategy()
```

##### `ResetBuildsAccessLevel` <a name="ResetBuildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel"></a>

```go
func ResetBuildsAccessLevel()
```

##### `ResetBuildTimeout` <a name="ResetBuildTimeout" id="@cdktf/provider-gitlab.project.Project.resetBuildTimeout"></a>

```go
func ResetBuildTimeout()
```

##### `ResetCiConfigPath` <a name="ResetCiConfigPath" id="@cdktf/provider-gitlab.project.Project.resetCiConfigPath"></a>

```go
func ResetCiConfigPath()
```

##### `ResetCiDefaultGitDepth` <a name="ResetCiDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth"></a>

```go
func ResetCiDefaultGitDepth()
```

##### `ResetCiForwardDeploymentEnabled` <a name="ResetCiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled"></a>

```go
func ResetCiForwardDeploymentEnabled()
```

##### `ResetCiRestrictPipelineCancellationRole` <a name="ResetCiRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.Project.resetCiRestrictPipelineCancellationRole"></a>

```go
func ResetCiRestrictPipelineCancellationRole()
```

##### `ResetCiSeparatedCaches` <a name="ResetCiSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches"></a>

```go
func ResetCiSeparatedCaches()
```

##### `ResetContainerExpirationPolicy` <a name="ResetContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy"></a>

```go
func ResetContainerExpirationPolicy()
```

##### `ResetContainerRegistryAccessLevel` <a name="ResetContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel"></a>

```go
func ResetContainerRegistryAccessLevel()
```

##### `ResetContainerRegistryEnabled` <a name="ResetContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled"></a>

```go
func ResetContainerRegistryEnabled()
```

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktf/provider-gitlab.project.Project.resetDefaultBranch"></a>

```go
func ResetDefaultBranch()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.project.Project.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmailsEnabled` <a name="ResetEmailsEnabled" id="@cdktf/provider-gitlab.project.Project.resetEmailsEnabled"></a>

```go
func ResetEmailsEnabled()
```

##### `ResetEnvironmentsAccessLevel` <a name="ResetEnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel"></a>

```go
func ResetEnvironmentsAccessLevel()
```

##### `ResetExternalAuthorizationClassificationLabel` <a name="ResetExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel"></a>

```go
func ResetExternalAuthorizationClassificationLabel()
```

##### `ResetFeatureFlagsAccessLevel` <a name="ResetFeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel"></a>

```go
func ResetFeatureFlagsAccessLevel()
```

##### `ResetForkedFromProjectId` <a name="ResetForkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId"></a>

```go
func ResetForkedFromProjectId()
```

##### `ResetForkingAccessLevel` <a name="ResetForkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel"></a>

```go
func ResetForkingAccessLevel()
```

##### `ResetGroupRunnersEnabled` <a name="ResetGroupRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.resetGroupRunnersEnabled"></a>

```go
func ResetGroupRunnersEnabled()
```

##### `ResetGroupWithProjectTemplatesId` <a name="ResetGroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId"></a>

```go
func ResetGroupWithProjectTemplatesId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.project.Project.resetId"></a>

```go
func ResetId()
```

##### `ResetImportUrl` <a name="ResetImportUrl" id="@cdktf/provider-gitlab.project.Project.resetImportUrl"></a>

```go
func ResetImportUrl()
```

##### `ResetImportUrlPassword` <a name="ResetImportUrlPassword" id="@cdktf/provider-gitlab.project.Project.resetImportUrlPassword"></a>

```go
func ResetImportUrlPassword()
```

##### `ResetImportUrlUsername` <a name="ResetImportUrlUsername" id="@cdktf/provider-gitlab.project.Project.resetImportUrlUsername"></a>

```go
func ResetImportUrlUsername()
```

##### `ResetInfrastructureAccessLevel` <a name="ResetInfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel"></a>

```go
func ResetInfrastructureAccessLevel()
```

##### `ResetInitializeWithReadme` <a name="ResetInitializeWithReadme" id="@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme"></a>

```go
func ResetInitializeWithReadme()
```

##### `ResetIssuesAccessLevel` <a name="ResetIssuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel"></a>

```go
func ResetIssuesAccessLevel()
```

##### `ResetIssuesEnabled` <a name="ResetIssuesEnabled" id="@cdktf/provider-gitlab.project.Project.resetIssuesEnabled"></a>

```go
func ResetIssuesEnabled()
```

##### `ResetIssuesTemplate` <a name="ResetIssuesTemplate" id="@cdktf/provider-gitlab.project.Project.resetIssuesTemplate"></a>

```go
func ResetIssuesTemplate()
```

##### `ResetKeepLatestArtifact` <a name="ResetKeepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact"></a>

```go
func ResetKeepLatestArtifact()
```

##### `ResetLfsEnabled` <a name="ResetLfsEnabled" id="@cdktf/provider-gitlab.project.Project.resetLfsEnabled"></a>

```go
func ResetLfsEnabled()
```

##### `ResetMergeCommitTemplate` <a name="ResetMergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate"></a>

```go
func ResetMergeCommitTemplate()
```

##### `ResetMergeMethod` <a name="ResetMergeMethod" id="@cdktf/provider-gitlab.project.Project.resetMergeMethod"></a>

```go
func ResetMergeMethod()
```

##### `ResetMergePipelinesEnabled` <a name="ResetMergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled"></a>

```go
func ResetMergePipelinesEnabled()
```

##### `ResetMergeRequestsAccessLevel` <a name="ResetMergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel"></a>

```go
func ResetMergeRequestsAccessLevel()
```

##### `ResetMergeRequestsEnabled` <a name="ResetMergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled"></a>

```go
func ResetMergeRequestsEnabled()
```

##### `ResetMergeRequestsTemplate` <a name="ResetMergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate"></a>

```go
func ResetMergeRequestsTemplate()
```

##### `ResetMergeTrainsEnabled` <a name="ResetMergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled"></a>

```go
func ResetMergeTrainsEnabled()
```

##### `ResetMirror` <a name="ResetMirror" id="@cdktf/provider-gitlab.project.Project.resetMirror"></a>

```go
func ResetMirror()
```

##### `ResetMirrorOverwritesDivergedBranches` <a name="ResetMirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches"></a>

```go
func ResetMirrorOverwritesDivergedBranches()
```

##### `ResetMirrorTriggerBuilds` <a name="ResetMirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds"></a>

```go
func ResetMirrorTriggerBuilds()
```

##### `ResetMonitorAccessLevel` <a name="ResetMonitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel"></a>

```go
func ResetMonitorAccessLevel()
```

##### `ResetMrDefaultTargetSelf` <a name="ResetMrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf"></a>

```go
func ResetMrDefaultTargetSelf()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-gitlab.project.Project.resetNamespaceId"></a>

```go
func ResetNamespaceId()
```

##### `ResetOnlyAllowMergeIfAllDiscussionsAreResolved` <a name="ResetOnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved"></a>

```go
func ResetOnlyAllowMergeIfAllDiscussionsAreResolved()
```

##### `ResetOnlyAllowMergeIfPipelineSucceeds` <a name="ResetOnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds"></a>

```go
func ResetOnlyAllowMergeIfPipelineSucceeds()
```

##### `ResetOnlyMirrorProtectedBranches` <a name="ResetOnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches"></a>

```go
func ResetOnlyMirrorProtectedBranches()
```

##### `ResetPackagesEnabled` <a name="ResetPackagesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPackagesEnabled"></a>

```go
func ResetPackagesEnabled()
```

##### `ResetPagesAccessLevel` <a name="ResetPagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel"></a>

```go
func ResetPagesAccessLevel()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-gitlab.project.Project.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPipelinesEnabled` <a name="ResetPipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled"></a>

```go
func ResetPipelinesEnabled()
```

##### `ResetPrintingMergeRequestLinkEnabled` <a name="ResetPrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled"></a>

```go
func ResetPrintingMergeRequestLinkEnabled()
```

##### `ResetPublicBuilds` <a name="ResetPublicBuilds" id="@cdktf/provider-gitlab.project.Project.resetPublicBuilds"></a>

```go
func ResetPublicBuilds()
```

##### `ResetPublicJobs` <a name="ResetPublicJobs" id="@cdktf/provider-gitlab.project.Project.resetPublicJobs"></a>

```go
func ResetPublicJobs()
```

##### `ResetPushRules` <a name="ResetPushRules" id="@cdktf/provider-gitlab.project.Project.resetPushRules"></a>

```go
func ResetPushRules()
```

##### `ResetReleasesAccessLevel` <a name="ResetReleasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel"></a>

```go
func ResetReleasesAccessLevel()
```

##### `ResetRemoveSourceBranchAfterMerge` <a name="ResetRemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge"></a>

```go
func ResetRemoveSourceBranchAfterMerge()
```

##### `ResetRepositoryAccessLevel` <a name="ResetRepositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel"></a>

```go
func ResetRepositoryAccessLevel()
```

##### `ResetRepositoryStorage` <a name="ResetRepositoryStorage" id="@cdktf/provider-gitlab.project.Project.resetRepositoryStorage"></a>

```go
func ResetRepositoryStorage()
```

##### `ResetRequestAccessEnabled` <a name="ResetRequestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled"></a>

```go
func ResetRequestAccessEnabled()
```

##### `ResetRequirementsAccessLevel` <a name="ResetRequirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel"></a>

```go
func ResetRequirementsAccessLevel()
```

##### `ResetResolveOutdatedDiffDiscussions` <a name="ResetResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions"></a>

```go
func ResetResolveOutdatedDiffDiscussions()
```

##### `ResetRestrictUserDefinedVariables` <a name="ResetRestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables"></a>

```go
func ResetRestrictUserDefinedVariables()
```

##### `ResetSecurityAndComplianceAccessLevel` <a name="ResetSecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel"></a>

```go
func ResetSecurityAndComplianceAccessLevel()
```

##### `ResetSharedRunnersEnabled` <a name="ResetSharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled"></a>

```go
func ResetSharedRunnersEnabled()
```

##### `ResetSkipWaitForDefaultBranchProtection` <a name="ResetSkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection"></a>

```go
func ResetSkipWaitForDefaultBranchProtection()
```

##### `ResetSnippetsAccessLevel` <a name="ResetSnippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel"></a>

```go
func ResetSnippetsAccessLevel()
```

##### `ResetSnippetsEnabled` <a name="ResetSnippetsEnabled" id="@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled"></a>

```go
func ResetSnippetsEnabled()
```

##### `ResetSquashCommitTemplate` <a name="ResetSquashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate"></a>

```go
func ResetSquashCommitTemplate()
```

##### `ResetSquashOption` <a name="ResetSquashOption" id="@cdktf/provider-gitlab.project.Project.resetSquashOption"></a>

```go
func ResetSquashOption()
```

##### `ResetSuggestionCommitMessage` <a name="ResetSuggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage"></a>

```go
func ResetSuggestionCommitMessage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-gitlab.project.Project.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktf/provider-gitlab.project.Project.resetTemplateName"></a>

```go
func ResetTemplateName()
```

##### `ResetTemplateProjectId` <a name="ResetTemplateProjectId" id="@cdktf/provider-gitlab.project.Project.resetTemplateProjectId"></a>

```go
func ResetTemplateProjectId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-gitlab.project.Project.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-gitlab.project.Project.resetTopics"></a>

```go
func ResetTopics()
```

##### `ResetUseCustomTemplate` <a name="ResetUseCustomTemplate" id="@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate"></a>

```go
func ResetUseCustomTemplate()
```

##### `ResetVisibilityLevel` <a name="ResetVisibilityLevel" id="@cdktf/provider-gitlab.project.Project.resetVisibilityLevel"></a>

```go
func ResetVisibilityLevel()
```

##### `ResetWikiAccessLevel` <a name="ResetWikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel"></a>

```go
func ResetWikiAccessLevel()
```

##### `ResetWikiEnabled` <a name="ResetWikiEnabled" id="@cdktf/provider-gitlab.project.Project.resetWikiEnabled"></a>

```go
func ResetWikiEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.project.Project.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.Project_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.project.Project.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.Project_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.project.Project.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.Project_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.Project_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Project to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Project that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.project.Project.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Project to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarUrl">AvatarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy">ContainerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emptyRepo">EmptyRepo</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo">HttpUrlToRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathWithNamespace">PathWithNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.runnersToken">RunnersToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo">SshUrlToRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput">AllowMergeOnSkippedPipelineInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput">AnalyticsAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput">ApprovalsBeforeMergeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archivedInput">ArchivedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput">ArchiveOnDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput">AutoCancelPendingPipelinesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput">AutocloseReferencedIssuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput">AutoDevopsDeployStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHashInput">AvatarHashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarInput">AvatarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput">BuildCoverageRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput">BuildGitStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput">BuildsAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput">BuildTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput">CiConfigPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput">CiDefaultGitDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput">CiForwardDeploymentEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput">CiRestrictPipelineCancellationRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput">CiSeparatedCachesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput">ContainerExpirationPolicyInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput">ContainerRegistryAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput">ContainerRegistryEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput">EmailsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput">EnvironmentsAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput">ExternalAuthorizationClassificationLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput">FeatureFlagsAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput">ForkedFromProjectIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput">ForkingAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput">GroupRunnersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput">GroupWithProjectTemplatesIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlInput">ImportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput">ImportUrlPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput">ImportUrlUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput">InfrastructureAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput">InitializeWithReadmeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput">IssuesAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput">IssuesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput">IssuesTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput">KeepLatestArtifactInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput">LfsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput">MergeCommitTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethodInput">MergeMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput">MergePipelinesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput">MergeRequestsAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput">MergeRequestsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput">MergeRequestsTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput">MergeTrainsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorInput">MirrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput">MirrorOverwritesDivergedBranchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput">MirrorTriggerBuildsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput">MonitorAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput">MrDefaultTargetSelfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput">OnlyAllowMergeIfAllDiscussionsAreResolvedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput">OnlyAllowMergeIfPipelineSucceedsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput">OnlyMirrorProtectedBranchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput">PackagesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput">PagesAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput">PipelinesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput">PrintingMergeRequestLinkEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuildsInput">PublicBuildsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobsInput">PublicJobsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRulesInput">PushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput">ReleasesAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput">RemoveSourceBranchAfterMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput">RepositoryAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput">RepositoryStorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput">RequestAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput">RequirementsAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput">ResolveOutdatedDiffDiscussionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput">RestrictUserDefinedVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput">SecurityAndComplianceAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput">SharedRunnersEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput">SkipWaitForDefaultBranchProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput">SnippetsAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput">SnippetsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput">SquashCommitTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOptionInput">SquashOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput">SuggestionCommitMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateNameInput">TemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput">TemplateProjectIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topicsInput">TopicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput">UseCustomTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput">VisibilityLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput">WikiAccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput">WikiEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline">AllowMergeOnSkippedPipeline</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel">AnalyticsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge">ApprovalsBeforeMerge</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archived">Archived</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines">AutoCancelPendingPipelines</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues">AutocloseReferencedIssues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy">AutoDevopsDeployStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatar">Avatar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHash">AvatarHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex">BuildCoverageRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategy">BuildGitStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel">BuildsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeout">BuildTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPath">CiConfigPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled">CiForwardDeploymentEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole">CiRestrictPipelineCancellationRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches">CiSeparatedCaches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel">ContainerRegistryAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled">ContainerRegistryEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsEnabled">EmailsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel">EnvironmentsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel">ExternalAuthorizationClassificationLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel">FeatureFlagsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId">ForkedFromProjectId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel">ForkingAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled">GroupRunnersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId">GroupWithProjectTemplatesId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrl">ImportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPassword">ImportUrlPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsername">ImportUrlUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel">InfrastructureAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadme">InitializeWithReadme</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel">IssuesAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabled">IssuesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplate">IssuesTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabled">LfsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate">MergeCommitTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethod">MergeMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled">MergePipelinesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel">MergeRequestsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled">MergeRequestsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate">MergeRequestsTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled">MergeTrainsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirror">Mirror</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches">MirrorOverwritesDivergedBranches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds">MirrorTriggerBuilds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel">MonitorAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf">MrDefaultTargetSelf</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceId">NamespaceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved">OnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds">OnlyAllowMergeIfPipelineSucceeds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches">OnlyMirrorProtectedBranches</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabled">PackagesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel">PagesAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled">PipelinesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled">PrintingMergeRequestLinkEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuilds">PublicBuilds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicJobs">PublicJobs</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel">ReleasesAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge">RemoveSourceBranchAfterMerge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel">RepositoryAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorage">RepositoryStorage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel">RequirementsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions">ResolveOutdatedDiffDiscussions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables">RestrictUserDefinedVariables</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel">SecurityAndComplianceAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection">SkipWaitForDefaultBranchProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel">SnippetsAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabled">SnippetsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate">SquashCommitTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOption">SquashOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage">SuggestionCommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectId">TemplateProjectId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topics">Topics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplate">UseCustomTemplate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevel">VisibilityLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabled">WikiEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.project.Project.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.project.Project.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.project.Project.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.project.Project.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.project.Project.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.project.Project.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.project.Project.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.project.Project.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.project.Project.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.project.Project.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.project.Project.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.project.Project.property.avatarUrl"></a>

```go
func AvatarUrl() *string
```

- *Type:* *string

---

##### `ContainerExpirationPolicy`<sup>Required</sup> <a name="ContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy"></a>

```go
func ContainerExpirationPolicy() ProjectContainerExpirationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a>

---

##### `EmptyRepo`<sup>Required</sup> <a name="EmptyRepo" id="@cdktf/provider-gitlab.project.Project.property.emptyRepo"></a>

```go
func EmptyRepo() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HttpUrlToRepo`<sup>Required</sup> <a name="HttpUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo"></a>

```go
func HttpUrlToRepo() *string
```

- *Type:* *string

---

##### `PathWithNamespace`<sup>Required</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.project.Project.property.pathWithNamespace"></a>

```go
func PathWithNamespace() *string
```

- *Type:* *string

---

##### `PushRules`<sup>Required</sup> <a name="PushRules" id="@cdktf/provider-gitlab.project.Project.property.pushRules"></a>

```go
func PushRules() ProjectPushRulesOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a>

---

##### `RunnersToken`<sup>Required</sup> <a name="RunnersToken" id="@cdktf/provider-gitlab.project.Project.property.runnersToken"></a>

```go
func RunnersToken() *string
```

- *Type:* *string

---

##### `SshUrlToRepo`<sup>Required</sup> <a name="SshUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo"></a>

```go
func SshUrlToRepo() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-gitlab.project.Project.property.timeouts"></a>

```go
func Timeouts() ProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference">ProjectTimeoutsOutputReference</a>

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.project.Project.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `AllowMergeOnSkippedPipelineInput`<sup>Optional</sup> <a name="AllowMergeOnSkippedPipelineInput" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput"></a>

```go
func AllowMergeOnSkippedPipelineInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsAccessLevelInput`<sup>Optional</sup> <a name="AnalyticsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput"></a>

```go
func AnalyticsAccessLevelInput() *string
```

- *Type:* *string

---

##### `ApprovalsBeforeMergeInput`<sup>Optional</sup> <a name="ApprovalsBeforeMergeInput" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput"></a>

```go
func ApprovalsBeforeMergeInput() *f64
```

- *Type:* *f64

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-gitlab.project.Project.property.archivedInput"></a>

```go
func ArchivedInput() interface{}
```

- *Type:* interface{}

---

##### `ArchiveOnDestroyInput`<sup>Optional</sup> <a name="ArchiveOnDestroyInput" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput"></a>

```go
func ArchiveOnDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `AutoCancelPendingPipelinesInput`<sup>Optional</sup> <a name="AutoCancelPendingPipelinesInput" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput"></a>

```go
func AutoCancelPendingPipelinesInput() *string
```

- *Type:* *string

---

##### `AutocloseReferencedIssuesInput`<sup>Optional</sup> <a name="AutocloseReferencedIssuesInput" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput"></a>

```go
func AutocloseReferencedIssuesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoDevopsDeployStrategyInput`<sup>Optional</sup> <a name="AutoDevopsDeployStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput"></a>

```go
func AutoDevopsDeployStrategyInput() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabledInput`<sup>Optional</sup> <a name="AutoDevopsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput"></a>

```go
func AutoDevopsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AvatarHashInput`<sup>Optional</sup> <a name="AvatarHashInput" id="@cdktf/provider-gitlab.project.Project.property.avatarHashInput"></a>

```go
func AvatarHashInput() *string
```

- *Type:* *string

---

##### `AvatarInput`<sup>Optional</sup> <a name="AvatarInput" id="@cdktf/provider-gitlab.project.Project.property.avatarInput"></a>

```go
func AvatarInput() *string
```

- *Type:* *string

---

##### `BuildCoverageRegexInput`<sup>Optional</sup> <a name="BuildCoverageRegexInput" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput"></a>

```go
func BuildCoverageRegexInput() *string
```

- *Type:* *string

---

##### `BuildGitStrategyInput`<sup>Optional</sup> <a name="BuildGitStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput"></a>

```go
func BuildGitStrategyInput() *string
```

- *Type:* *string

---

##### `BuildsAccessLevelInput`<sup>Optional</sup> <a name="BuildsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput"></a>

```go
func BuildsAccessLevelInput() *string
```

- *Type:* *string

---

##### `BuildTimeoutInput`<sup>Optional</sup> <a name="BuildTimeoutInput" id="@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput"></a>

```go
func BuildTimeoutInput() *f64
```

- *Type:* *f64

---

##### `CiConfigPathInput`<sup>Optional</sup> <a name="CiConfigPathInput" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput"></a>

```go
func CiConfigPathInput() *string
```

- *Type:* *string

---

##### `CiDefaultGitDepthInput`<sup>Optional</sup> <a name="CiDefaultGitDepthInput" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput"></a>

```go
func CiDefaultGitDepthInput() *f64
```

- *Type:* *f64

---

##### `CiForwardDeploymentEnabledInput`<sup>Optional</sup> <a name="CiForwardDeploymentEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput"></a>

```go
func CiForwardDeploymentEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CiRestrictPipelineCancellationRoleInput`<sup>Optional</sup> <a name="CiRestrictPipelineCancellationRoleInput" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRoleInput"></a>

```go
func CiRestrictPipelineCancellationRoleInput() *string
```

- *Type:* *string

---

##### `CiSeparatedCachesInput`<sup>Optional</sup> <a name="CiSeparatedCachesInput" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput"></a>

```go
func CiSeparatedCachesInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerExpirationPolicyInput`<sup>Optional</sup> <a name="ContainerExpirationPolicyInput" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput"></a>

```go
func ContainerExpirationPolicyInput() ProjectContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `ContainerRegistryAccessLevelInput`<sup>Optional</sup> <a name="ContainerRegistryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput"></a>

```go
func ContainerRegistryAccessLevelInput() *string
```

- *Type:* *string

---

##### `ContainerRegistryEnabledInput`<sup>Optional</sup> <a name="ContainerRegistryEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput"></a>

```go
func ContainerRegistryEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-gitlab.project.Project.property.defaultBranchInput"></a>

```go
func DefaultBranchInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.project.Project.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailsEnabledInput`<sup>Optional</sup> <a name="EmailsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabledInput"></a>

```go
func EmailsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentsAccessLevelInput`<sup>Optional</sup> <a name="EnvironmentsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput"></a>

```go
func EnvironmentsAccessLevelInput() *string
```

- *Type:* *string

---

##### `ExternalAuthorizationClassificationLabelInput`<sup>Optional</sup> <a name="ExternalAuthorizationClassificationLabelInput" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput"></a>

```go
func ExternalAuthorizationClassificationLabelInput() *string
```

- *Type:* *string

---

##### `FeatureFlagsAccessLevelInput`<sup>Optional</sup> <a name="FeatureFlagsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput"></a>

```go
func FeatureFlagsAccessLevelInput() *string
```

- *Type:* *string

---

##### `ForkedFromProjectIdInput`<sup>Optional</sup> <a name="ForkedFromProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput"></a>

```go
func ForkedFromProjectIdInput() *f64
```

- *Type:* *f64

---

##### `ForkingAccessLevelInput`<sup>Optional</sup> <a name="ForkingAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput"></a>

```go
func ForkingAccessLevelInput() *string
```

- *Type:* *string

---

##### `GroupRunnersEnabledInput`<sup>Optional</sup> <a name="GroupRunnersEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabledInput"></a>

```go
func GroupRunnersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupWithProjectTemplatesIdInput`<sup>Optional</sup> <a name="GroupWithProjectTemplatesIdInput" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput"></a>

```go
func GroupWithProjectTemplatesIdInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.project.Project.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportUrlInput`<sup>Optional</sup> <a name="ImportUrlInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlInput"></a>

```go
func ImportUrlInput() *string
```

- *Type:* *string

---

##### `ImportUrlPasswordInput`<sup>Optional</sup> <a name="ImportUrlPasswordInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput"></a>

```go
func ImportUrlPasswordInput() *string
```

- *Type:* *string

---

##### `ImportUrlUsernameInput`<sup>Optional</sup> <a name="ImportUrlUsernameInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput"></a>

```go
func ImportUrlUsernameInput() *string
```

- *Type:* *string

---

##### `InfrastructureAccessLevelInput`<sup>Optional</sup> <a name="InfrastructureAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput"></a>

```go
func InfrastructureAccessLevelInput() *string
```

- *Type:* *string

---

##### `InitializeWithReadmeInput`<sup>Optional</sup> <a name="InitializeWithReadmeInput" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput"></a>

```go
func InitializeWithReadmeInput() interface{}
```

- *Type:* interface{}

---

##### `IssuesAccessLevelInput`<sup>Optional</sup> <a name="IssuesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput"></a>

```go
func IssuesAccessLevelInput() *string
```

- *Type:* *string

---

##### `IssuesEnabledInput`<sup>Optional</sup> <a name="IssuesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput"></a>

```go
func IssuesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IssuesTemplateInput`<sup>Optional</sup> <a name="IssuesTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput"></a>

```go
func IssuesTemplateInput() *string
```

- *Type:* *string

---

##### `KeepLatestArtifactInput`<sup>Optional</sup> <a name="KeepLatestArtifactInput" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput"></a>

```go
func KeepLatestArtifactInput() interface{}
```

- *Type:* interface{}

---

##### `LfsEnabledInput`<sup>Optional</sup> <a name="LfsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput"></a>

```go
func LfsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MergeCommitTemplateInput`<sup>Optional</sup> <a name="MergeCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput"></a>

```go
func MergeCommitTemplateInput() *string
```

- *Type:* *string

---

##### `MergeMethodInput`<sup>Optional</sup> <a name="MergeMethodInput" id="@cdktf/provider-gitlab.project.Project.property.mergeMethodInput"></a>

```go
func MergeMethodInput() *string
```

- *Type:* *string

---

##### `MergePipelinesEnabledInput`<sup>Optional</sup> <a name="MergePipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput"></a>

```go
func MergePipelinesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsAccessLevelInput`<sup>Optional</sup> <a name="MergeRequestsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput"></a>

```go
func MergeRequestsAccessLevelInput() *string
```

- *Type:* *string

---

##### `MergeRequestsEnabledInput`<sup>Optional</sup> <a name="MergeRequestsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput"></a>

```go
func MergeRequestsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsTemplateInput`<sup>Optional</sup> <a name="MergeRequestsTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput"></a>

```go
func MergeRequestsTemplateInput() *string
```

- *Type:* *string

---

##### `MergeTrainsEnabledInput`<sup>Optional</sup> <a name="MergeTrainsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput"></a>

```go
func MergeTrainsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MirrorInput`<sup>Optional</sup> <a name="MirrorInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorInput"></a>

```go
func MirrorInput() interface{}
```

- *Type:* interface{}

---

##### `MirrorOverwritesDivergedBranchesInput`<sup>Optional</sup> <a name="MirrorOverwritesDivergedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput"></a>

```go
func MirrorOverwritesDivergedBranchesInput() interface{}
```

- *Type:* interface{}

---

##### `MirrorTriggerBuildsInput`<sup>Optional</sup> <a name="MirrorTriggerBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput"></a>

```go
func MirrorTriggerBuildsInput() interface{}
```

- *Type:* interface{}

---

##### `MonitorAccessLevelInput`<sup>Optional</sup> <a name="MonitorAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput"></a>

```go
func MonitorAccessLevelInput() *string
```

- *Type:* *string

---

##### `MrDefaultTargetSelfInput`<sup>Optional</sup> <a name="MrDefaultTargetSelfInput" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput"></a>

```go
func MrDefaultTargetSelfInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.project.Project.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-gitlab.project.Project.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *f64
```

- *Type:* *f64

---

##### `OnlyAllowMergeIfAllDiscussionsAreResolvedInput`<sup>Optional</sup> <a name="OnlyAllowMergeIfAllDiscussionsAreResolvedInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput"></a>

```go
func OnlyAllowMergeIfAllDiscussionsAreResolvedInput() interface{}
```

- *Type:* interface{}

---

##### `OnlyAllowMergeIfPipelineSucceedsInput`<sup>Optional</sup> <a name="OnlyAllowMergeIfPipelineSucceedsInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput"></a>

```go
func OnlyAllowMergeIfPipelineSucceedsInput() interface{}
```

- *Type:* interface{}

---

##### `OnlyMirrorProtectedBranchesInput`<sup>Optional</sup> <a name="OnlyMirrorProtectedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput"></a>

```go
func OnlyMirrorProtectedBranchesInput() interface{}
```

- *Type:* interface{}

---

##### `PackagesEnabledInput`<sup>Optional</sup> <a name="PackagesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput"></a>

```go
func PackagesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PagesAccessLevelInput`<sup>Optional</sup> <a name="PagesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput"></a>

```go
func PagesAccessLevelInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-gitlab.project.Project.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PipelinesEnabledInput`<sup>Optional</sup> <a name="PipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput"></a>

```go
func PipelinesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PrintingMergeRequestLinkEnabledInput`<sup>Optional</sup> <a name="PrintingMergeRequestLinkEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput"></a>

```go
func PrintingMergeRequestLinkEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PublicBuildsInput`<sup>Optional</sup> <a name="PublicBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.publicBuildsInput"></a>

```go
func PublicBuildsInput() interface{}
```

- *Type:* interface{}

---

##### `PublicJobsInput`<sup>Optional</sup> <a name="PublicJobsInput" id="@cdktf/provider-gitlab.project.Project.property.publicJobsInput"></a>

```go
func PublicJobsInput() interface{}
```

- *Type:* interface{}

---

##### `PushRulesInput`<sup>Optional</sup> <a name="PushRulesInput" id="@cdktf/provider-gitlab.project.Project.property.pushRulesInput"></a>

```go
func PushRulesInput() ProjectPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `ReleasesAccessLevelInput`<sup>Optional</sup> <a name="ReleasesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput"></a>

```go
func ReleasesAccessLevelInput() *string
```

- *Type:* *string

---

##### `RemoveSourceBranchAfterMergeInput`<sup>Optional</sup> <a name="RemoveSourceBranchAfterMergeInput" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput"></a>

```go
func RemoveSourceBranchAfterMergeInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryAccessLevelInput`<sup>Optional</sup> <a name="RepositoryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput"></a>

```go
func RepositoryAccessLevelInput() *string
```

- *Type:* *string

---

##### `RepositoryStorageInput`<sup>Optional</sup> <a name="RepositoryStorageInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput"></a>

```go
func RepositoryStorageInput() *string
```

- *Type:* *string

---

##### `RequestAccessEnabledInput`<sup>Optional</sup> <a name="RequestAccessEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput"></a>

```go
func RequestAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RequirementsAccessLevelInput`<sup>Optional</sup> <a name="RequirementsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput"></a>

```go
func RequirementsAccessLevelInput() *string
```

- *Type:* *string

---

##### `ResolveOutdatedDiffDiscussionsInput`<sup>Optional</sup> <a name="ResolveOutdatedDiffDiscussionsInput" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput"></a>

```go
func ResolveOutdatedDiffDiscussionsInput() interface{}
```

- *Type:* interface{}

---

##### `RestrictUserDefinedVariablesInput`<sup>Optional</sup> <a name="RestrictUserDefinedVariablesInput" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput"></a>

```go
func RestrictUserDefinedVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityAndComplianceAccessLevelInput`<sup>Optional</sup> <a name="SecurityAndComplianceAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput"></a>

```go
func SecurityAndComplianceAccessLevelInput() *string
```

- *Type:* *string

---

##### `SharedRunnersEnabledInput`<sup>Optional</sup> <a name="SharedRunnersEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput"></a>

```go
func SharedRunnersEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SkipWaitForDefaultBranchProtectionInput`<sup>Optional</sup> <a name="SkipWaitForDefaultBranchProtectionInput" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput"></a>

```go
func SkipWaitForDefaultBranchProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `SnippetsAccessLevelInput`<sup>Optional</sup> <a name="SnippetsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput"></a>

```go
func SnippetsAccessLevelInput() *string
```

- *Type:* *string

---

##### `SnippetsEnabledInput`<sup>Optional</sup> <a name="SnippetsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput"></a>

```go
func SnippetsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SquashCommitTemplateInput`<sup>Optional</sup> <a name="SquashCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput"></a>

```go
func SquashCommitTemplateInput() *string
```

- *Type:* *string

---

##### `SquashOptionInput`<sup>Optional</sup> <a name="SquashOptionInput" id="@cdktf/provider-gitlab.project.Project.property.squashOptionInput"></a>

```go
func SquashOptionInput() *string
```

- *Type:* *string

---

##### `SuggestionCommitMessageInput`<sup>Optional</sup> <a name="SuggestionCommitMessageInput" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput"></a>

```go
func SuggestionCommitMessageInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-gitlab.project.Project.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktf/provider-gitlab.project.Project.property.templateNameInput"></a>

```go
func TemplateNameInput() *string
```

- *Type:* *string

---

##### `TemplateProjectIdInput`<sup>Optional</sup> <a name="TemplateProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput"></a>

```go
func TemplateProjectIdInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-gitlab.project.Project.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-gitlab.project.Project.property.topicsInput"></a>

```go
func TopicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UseCustomTemplateInput`<sup>Optional</sup> <a name="UseCustomTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput"></a>

```go
func UseCustomTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `VisibilityLevelInput`<sup>Optional</sup> <a name="VisibilityLevelInput" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput"></a>

```go
func VisibilityLevelInput() *string
```

- *Type:* *string

---

##### `WikiAccessLevelInput`<sup>Optional</sup> <a name="WikiAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput"></a>

```go
func WikiAccessLevelInput() *string
```

- *Type:* *string

---

##### `WikiEnabledInput`<sup>Optional</sup> <a name="WikiEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput"></a>

```go
func WikiEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AllowMergeOnSkippedPipeline`<sup>Required</sup> <a name="AllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline"></a>

```go
func AllowMergeOnSkippedPipeline() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsAccessLevel`<sup>Required</sup> <a name="AnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel"></a>

```go
func AnalyticsAccessLevel() *string
```

- *Type:* *string

---

##### `ApprovalsBeforeMerge`<sup>Required</sup> <a name="ApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge"></a>

```go
func ApprovalsBeforeMerge() *f64
```

- *Type:* *f64

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-gitlab.project.Project.property.archived"></a>

```go
func Archived() interface{}
```

- *Type:* interface{}

---

##### `ArchiveOnDestroy`<sup>Required</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy"></a>

```go
func ArchiveOnDestroy() interface{}
```

- *Type:* interface{}

---

##### `AutoCancelPendingPipelines`<sup>Required</sup> <a name="AutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines"></a>

```go
func AutoCancelPendingPipelines() *string
```

- *Type:* *string

---

##### `AutocloseReferencedIssues`<sup>Required</sup> <a name="AutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues"></a>

```go
func AutocloseReferencedIssues() interface{}
```

- *Type:* interface{}

---

##### `AutoDevopsDeployStrategy`<sup>Required</sup> <a name="AutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy"></a>

```go
func AutoDevopsDeployStrategy() *string
```

- *Type:* *string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled"></a>

```go
func AutoDevopsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Avatar`<sup>Required</sup> <a name="Avatar" id="@cdktf/provider-gitlab.project.Project.property.avatar"></a>

```go
func Avatar() *string
```

- *Type:* *string

---

##### `AvatarHash`<sup>Required</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.project.Project.property.avatarHash"></a>

```go
func AvatarHash() *string
```

- *Type:* *string

---

##### `BuildCoverageRegex`<sup>Required</sup> <a name="BuildCoverageRegex" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex"></a>

```go
func BuildCoverageRegex() *string
```

- *Type:* *string

---

##### `BuildGitStrategy`<sup>Required</sup> <a name="BuildGitStrategy" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategy"></a>

```go
func BuildGitStrategy() *string
```

- *Type:* *string

---

##### `BuildsAccessLevel`<sup>Required</sup> <a name="BuildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel"></a>

```go
func BuildsAccessLevel() *string
```

- *Type:* *string

---

##### `BuildTimeout`<sup>Required</sup> <a name="BuildTimeout" id="@cdktf/provider-gitlab.project.Project.property.buildTimeout"></a>

```go
func BuildTimeout() *f64
```

- *Type:* *f64

---

##### `CiConfigPath`<sup>Required</sup> <a name="CiConfigPath" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPath"></a>

```go
func CiConfigPath() *string
```

- *Type:* *string

---

##### `CiDefaultGitDepth`<sup>Required</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth"></a>

```go
func CiDefaultGitDepth() *f64
```

- *Type:* *f64

---

##### `CiForwardDeploymentEnabled`<sup>Required</sup> <a name="CiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled"></a>

```go
func CiForwardDeploymentEnabled() interface{}
```

- *Type:* interface{}

---

##### `CiRestrictPipelineCancellationRole`<sup>Required</sup> <a name="CiRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.Project.property.ciRestrictPipelineCancellationRole"></a>

```go
func CiRestrictPipelineCancellationRole() *string
```

- *Type:* *string

---

##### `CiSeparatedCaches`<sup>Required</sup> <a name="CiSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches"></a>

```go
func CiSeparatedCaches() interface{}
```

- *Type:* interface{}

---

##### `ContainerRegistryAccessLevel`<sup>Required</sup> <a name="ContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel"></a>

```go
func ContainerRegistryAccessLevel() *string
```

- *Type:* *string

---

##### `ContainerRegistryEnabled`<sup>Required</sup> <a name="ContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled"></a>

```go
func ContainerRegistryEnabled() interface{}
```

- *Type:* interface{}

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.project.Project.property.defaultBranch"></a>

```go
func DefaultBranch() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.project.Project.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EmailsEnabled`<sup>Required</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.project.Project.property.emailsEnabled"></a>

```go
func EmailsEnabled() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentsAccessLevel`<sup>Required</sup> <a name="EnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel"></a>

```go
func EnvironmentsAccessLevel() *string
```

- *Type:* *string

---

##### `ExternalAuthorizationClassificationLabel`<sup>Required</sup> <a name="ExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel"></a>

```go
func ExternalAuthorizationClassificationLabel() *string
```

- *Type:* *string

---

##### `FeatureFlagsAccessLevel`<sup>Required</sup> <a name="FeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel"></a>

```go
func FeatureFlagsAccessLevel() *string
```

- *Type:* *string

---

##### `ForkedFromProjectId`<sup>Required</sup> <a name="ForkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId"></a>

```go
func ForkedFromProjectId() *f64
```

- *Type:* *f64

---

##### `ForkingAccessLevel`<sup>Required</sup> <a name="ForkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel"></a>

```go
func ForkingAccessLevel() *string
```

- *Type:* *string

---

##### `GroupRunnersEnabled`<sup>Required</sup> <a name="GroupRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.property.groupRunnersEnabled"></a>

```go
func GroupRunnersEnabled() interface{}
```

- *Type:* interface{}

---

##### `GroupWithProjectTemplatesId`<sup>Required</sup> <a name="GroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId"></a>

```go
func GroupWithProjectTemplatesId() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.project.Project.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportUrl`<sup>Required</sup> <a name="ImportUrl" id="@cdktf/provider-gitlab.project.Project.property.importUrl"></a>

```go
func ImportUrl() *string
```

- *Type:* *string

---

##### `ImportUrlPassword`<sup>Required</sup> <a name="ImportUrlPassword" id="@cdktf/provider-gitlab.project.Project.property.importUrlPassword"></a>

```go
func ImportUrlPassword() *string
```

- *Type:* *string

---

##### `ImportUrlUsername`<sup>Required</sup> <a name="ImportUrlUsername" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsername"></a>

```go
func ImportUrlUsername() *string
```

- *Type:* *string

---

##### `InfrastructureAccessLevel`<sup>Required</sup> <a name="InfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel"></a>

```go
func InfrastructureAccessLevel() *string
```

- *Type:* *string

---

##### `InitializeWithReadme`<sup>Required</sup> <a name="InitializeWithReadme" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadme"></a>

```go
func InitializeWithReadme() interface{}
```

- *Type:* interface{}

---

##### `IssuesAccessLevel`<sup>Required</sup> <a name="IssuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel"></a>

```go
func IssuesAccessLevel() *string
```

- *Type:* *string

---

##### `IssuesEnabled`<sup>Required</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabled"></a>

```go
func IssuesEnabled() interface{}
```

- *Type:* interface{}

---

##### `IssuesTemplate`<sup>Required</sup> <a name="IssuesTemplate" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplate"></a>

```go
func IssuesTemplate() *string
```

- *Type:* *string

---

##### `KeepLatestArtifact`<sup>Required</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact"></a>

```go
func KeepLatestArtifact() interface{}
```

- *Type:* interface{}

---

##### `LfsEnabled`<sup>Required</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabled"></a>

```go
func LfsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MergeCommitTemplate`<sup>Required</sup> <a name="MergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate"></a>

```go
func MergeCommitTemplate() *string
```

- *Type:* *string

---

##### `MergeMethod`<sup>Required</sup> <a name="MergeMethod" id="@cdktf/provider-gitlab.project.Project.property.mergeMethod"></a>

```go
func MergeMethod() *string
```

- *Type:* *string

---

##### `MergePipelinesEnabled`<sup>Required</sup> <a name="MergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled"></a>

```go
func MergePipelinesEnabled() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsAccessLevel`<sup>Required</sup> <a name="MergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel"></a>

```go
func MergeRequestsAccessLevel() *string
```

- *Type:* *string

---

##### `MergeRequestsEnabled`<sup>Required</sup> <a name="MergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled"></a>

```go
func MergeRequestsEnabled() interface{}
```

- *Type:* interface{}

---

##### `MergeRequestsTemplate`<sup>Required</sup> <a name="MergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate"></a>

```go
func MergeRequestsTemplate() *string
```

- *Type:* *string

---

##### `MergeTrainsEnabled`<sup>Required</sup> <a name="MergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled"></a>

```go
func MergeTrainsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Mirror`<sup>Required</sup> <a name="Mirror" id="@cdktf/provider-gitlab.project.Project.property.mirror"></a>

```go
func Mirror() interface{}
```

- *Type:* interface{}

---

##### `MirrorOverwritesDivergedBranches`<sup>Required</sup> <a name="MirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches"></a>

```go
func MirrorOverwritesDivergedBranches() interface{}
```

- *Type:* interface{}

---

##### `MirrorTriggerBuilds`<sup>Required</sup> <a name="MirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds"></a>

```go
func MirrorTriggerBuilds() interface{}
```

- *Type:* interface{}

---

##### `MonitorAccessLevel`<sup>Required</sup> <a name="MonitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel"></a>

```go
func MonitorAccessLevel() *string
```

- *Type:* *string

---

##### `MrDefaultTargetSelf`<sup>Required</sup> <a name="MrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf"></a>

```go
func MrDefaultTargetSelf() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.project.Project.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.project.Project.property.namespaceId"></a>

```go
func NamespaceId() *f64
```

- *Type:* *f64

---

##### `OnlyAllowMergeIfAllDiscussionsAreResolved`<sup>Required</sup> <a name="OnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```go
func OnlyAllowMergeIfAllDiscussionsAreResolved() interface{}
```

- *Type:* interface{}

---

##### `OnlyAllowMergeIfPipelineSucceeds`<sup>Required</sup> <a name="OnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds"></a>

```go
func OnlyAllowMergeIfPipelineSucceeds() interface{}
```

- *Type:* interface{}

---

##### `OnlyMirrorProtectedBranches`<sup>Required</sup> <a name="OnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches"></a>

```go
func OnlyMirrorProtectedBranches() interface{}
```

- *Type:* interface{}

---

##### `PackagesEnabled`<sup>Required</sup> <a name="PackagesEnabled" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabled"></a>

```go
func PackagesEnabled() interface{}
```

- *Type:* interface{}

---

##### `PagesAccessLevel`<sup>Required</sup> <a name="PagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel"></a>

```go
func PagesAccessLevel() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.project.Project.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PipelinesEnabled`<sup>Required</sup> <a name="PipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled"></a>

```go
func PipelinesEnabled() interface{}
```

- *Type:* interface{}

---

##### `PrintingMergeRequestLinkEnabled`<sup>Required</sup> <a name="PrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled"></a>

```go
func PrintingMergeRequestLinkEnabled() interface{}
```

- *Type:* interface{}

---

##### `PublicBuilds`<sup>Required</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.project.Project.property.publicBuilds"></a>

```go
func PublicBuilds() interface{}
```

- *Type:* interface{}

---

##### `PublicJobs`<sup>Required</sup> <a name="PublicJobs" id="@cdktf/provider-gitlab.project.Project.property.publicJobs"></a>

```go
func PublicJobs() interface{}
```

- *Type:* interface{}

---

##### `ReleasesAccessLevel`<sup>Required</sup> <a name="ReleasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel"></a>

```go
func ReleasesAccessLevel() *string
```

- *Type:* *string

---

##### `RemoveSourceBranchAfterMerge`<sup>Required</sup> <a name="RemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge"></a>

```go
func RemoveSourceBranchAfterMerge() interface{}
```

- *Type:* interface{}

---

##### `RepositoryAccessLevel`<sup>Required</sup> <a name="RepositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel"></a>

```go
func RepositoryAccessLevel() *string
```

- *Type:* *string

---

##### `RepositoryStorage`<sup>Required</sup> <a name="RepositoryStorage" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorage"></a>

```go
func RepositoryStorage() *string
```

- *Type:* *string

---

##### `RequestAccessEnabled`<sup>Required</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled"></a>

```go
func RequestAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `RequirementsAccessLevel`<sup>Required</sup> <a name="RequirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel"></a>

```go
func RequirementsAccessLevel() *string
```

- *Type:* *string

---

##### `ResolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="ResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions"></a>

```go
func ResolveOutdatedDiffDiscussions() interface{}
```

- *Type:* interface{}

---

##### `RestrictUserDefinedVariables`<sup>Required</sup> <a name="RestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables"></a>

```go
func RestrictUserDefinedVariables() interface{}
```

- *Type:* interface{}

---

##### `SecurityAndComplianceAccessLevel`<sup>Required</sup> <a name="SecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel"></a>

```go
func SecurityAndComplianceAccessLevel() *string
```

- *Type:* *string

---

##### `SharedRunnersEnabled`<sup>Required</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled"></a>

```go
func SharedRunnersEnabled() interface{}
```

- *Type:* interface{}

---

##### `SkipWaitForDefaultBranchProtection`<sup>Required</sup> <a name="SkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection"></a>

```go
func SkipWaitForDefaultBranchProtection() interface{}
```

- *Type:* interface{}

---

##### `SnippetsAccessLevel`<sup>Required</sup> <a name="SnippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel"></a>

```go
func SnippetsAccessLevel() *string
```

- *Type:* *string

---

##### `SnippetsEnabled`<sup>Required</sup> <a name="SnippetsEnabled" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabled"></a>

```go
func SnippetsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SquashCommitTemplate`<sup>Required</sup> <a name="SquashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate"></a>

```go
func SquashCommitTemplate() *string
```

- *Type:* *string

---

##### `SquashOption`<sup>Required</sup> <a name="SquashOption" id="@cdktf/provider-gitlab.project.Project.property.squashOption"></a>

```go
func SquashOption() *string
```

- *Type:* *string

---

##### `SuggestionCommitMessage`<sup>Required</sup> <a name="SuggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage"></a>

```go
func SuggestionCommitMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-gitlab.project.Project.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-gitlab.project.Project.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `TemplateProjectId`<sup>Required</sup> <a name="TemplateProjectId" id="@cdktf/provider-gitlab.project.Project.property.templateProjectId"></a>

```go
func TemplateProjectId() *f64
```

- *Type:* *f64

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-gitlab.project.Project.property.topics"></a>

```go
func Topics() *[]*string
```

- *Type:* *[]*string

---

##### `UseCustomTemplate`<sup>Required</sup> <a name="UseCustomTemplate" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplate"></a>

```go
func UseCustomTemplate() interface{}
```

- *Type:* interface{}

---

##### `VisibilityLevel`<sup>Required</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevel"></a>

```go
func VisibilityLevel() *string
```

- *Type:* *string

---

##### `WikiAccessLevel`<sup>Required</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel"></a>

```go
func WikiAccessLevel() *string
```

- *Type:* *string

---

##### `WikiEnabled`<sup>Required</sup> <a name="WikiEnabled" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabled"></a>

```go
func WikiEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.project.Project.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-gitlab.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

&project.ProjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowMergeOnSkippedPipeline: interface{},
	AnalyticsAccessLevel: *string,
	ApprovalsBeforeMerge: *f64,
	Archived: interface{},
	ArchiveOnDestroy: interface{},
	AutoCancelPendingPipelines: *string,
	AutocloseReferencedIssues: interface{},
	AutoDevopsDeployStrategy: *string,
	AutoDevopsEnabled: interface{},
	Avatar: *string,
	AvatarHash: *string,
	BuildCoverageRegex: *string,
	BuildGitStrategy: *string,
	BuildsAccessLevel: *string,
	BuildTimeout: *f64,
	CiConfigPath: *string,
	CiDefaultGitDepth: *f64,
	CiForwardDeploymentEnabled: interface{},
	CiRestrictPipelineCancellationRole: *string,
	CiSeparatedCaches: interface{},
	ContainerExpirationPolicy: github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13.project.ProjectContainerExpirationPolicy,
	ContainerRegistryAccessLevel: *string,
	ContainerRegistryEnabled: interface{},
	DefaultBranch: *string,
	Description: *string,
	EmailsEnabled: interface{},
	EnvironmentsAccessLevel: *string,
	ExternalAuthorizationClassificationLabel: *string,
	FeatureFlagsAccessLevel: *string,
	ForkedFromProjectId: *f64,
	ForkingAccessLevel: *string,
	GroupRunnersEnabled: interface{},
	GroupWithProjectTemplatesId: *f64,
	Id: *string,
	ImportUrl: *string,
	ImportUrlPassword: *string,
	ImportUrlUsername: *string,
	InfrastructureAccessLevel: *string,
	InitializeWithReadme: interface{},
	IssuesAccessLevel: *string,
	IssuesEnabled: interface{},
	IssuesTemplate: *string,
	KeepLatestArtifact: interface{},
	LfsEnabled: interface{},
	MergeCommitTemplate: *string,
	MergeMethod: *string,
	MergePipelinesEnabled: interface{},
	MergeRequestsAccessLevel: *string,
	MergeRequestsEnabled: interface{},
	MergeRequestsTemplate: *string,
	MergeTrainsEnabled: interface{},
	Mirror: interface{},
	MirrorOverwritesDivergedBranches: interface{},
	MirrorTriggerBuilds: interface{},
	MonitorAccessLevel: *string,
	MrDefaultTargetSelf: interface{},
	NamespaceId: *f64,
	OnlyAllowMergeIfAllDiscussionsAreResolved: interface{},
	OnlyAllowMergeIfPipelineSucceeds: interface{},
	OnlyMirrorProtectedBranches: interface{},
	PackagesEnabled: interface{},
	PagesAccessLevel: *string,
	Path: *string,
	PipelinesEnabled: interface{},
	PrintingMergeRequestLinkEnabled: interface{},
	PublicBuilds: interface{},
	PublicJobs: interface{},
	PushRules: github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13.project.ProjectPushRules,
	ReleasesAccessLevel: *string,
	RemoveSourceBranchAfterMerge: interface{},
	RepositoryAccessLevel: *string,
	RepositoryStorage: *string,
	RequestAccessEnabled: interface{},
	RequirementsAccessLevel: *string,
	ResolveOutdatedDiffDiscussions: interface{},
	RestrictUserDefinedVariables: interface{},
	SecurityAndComplianceAccessLevel: *string,
	SharedRunnersEnabled: interface{},
	SkipWaitForDefaultBranchProtection: interface{},
	SnippetsAccessLevel: *string,
	SnippetsEnabled: interface{},
	SquashCommitTemplate: *string,
	SquashOption: *string,
	SuggestionCommitMessage: *string,
	Tags: *[]*string,
	TemplateName: *string,
	TemplateProjectId: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13.project.ProjectTimeouts,
	Topics: *[]*string,
	UseCustomTemplate: interface{},
	VisibilityLevel: *string,
	WikiAccessLevel: *string,
	WikiEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.name">Name</a></code> | <code>*string</code> | The name of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline">AllowMergeOnSkippedPipeline</a></code> | <code>interface{}</code> | Set to true if you want to treat skipped pipelines as if they finished with success. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel">AnalyticsAccessLevel</a></code> | <code>*string</code> | Set the analytics access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge">ApprovalsBeforeMerge</a></code> | <code>*f64</code> | Number of merge request approvals required for merging. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archived">Archived</a></code> | <code>interface{}</code> | Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>interface{}</code> | Set to `true` to archive the project instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines">AutoCancelPendingPipelines</a></code> | <code>*string</code> | Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues">AutocloseReferencedIssues</a></code> | <code>interface{}</code> | Set whether auto-closing referenced issues on default branch. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy">AutoDevopsDeployStrategy</a></code> | <code>*string</code> | Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>interface{}</code> | Enable Auto DevOps for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatar">Avatar</a></code> | <code>*string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash">AvatarHash</a></code> | <code>*string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex">BuildCoverageRegex</a></code> | <code>*string</code> | Test coverage parsing for the project. This is deprecated feature in GitLab 15.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy">BuildGitStrategy</a></code> | <code>*string</code> | The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel">BuildsAccessLevel</a></code> | <code>*string</code> | Set the builds access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout">BuildTimeout</a></code> | <code>*f64</code> | The maximum amount of time, in seconds, that a job can run. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath">CiConfigPath</a></code> | <code>*string</code> | Custom Path to CI config file. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>*f64</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled">CiForwardDeploymentEnabled</a></code> | <code>interface{}</code> | When a new deployment job starts, skip older deployment jobs that are still pending. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole">CiRestrictPipelineCancellationRole</a></code> | <code>*string</code> | The role required to cancel a pipeline or job. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches">CiSeparatedCaches</a></code> | <code>interface{}</code> | Use separate caches for protected branches. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy">ContainerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | container_expiration_policy block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel">ContainerRegistryAccessLevel</a></code> | <code>*string</code> | Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled">ContainerRegistryEnabled</a></code> | <code>interface{}</code> | Enable container registry for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch">DefaultBranch</a></code> | <code>*string</code> | The default branch for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.description">Description</a></code> | <code>*string</code> | A description of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled">EmailsEnabled</a></code> | <code>interface{}</code> | Enable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel">EnvironmentsAccessLevel</a></code> | <code>*string</code> | Set the environments access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel">ExternalAuthorizationClassificationLabel</a></code> | <code>*string</code> | The classification label for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel">FeatureFlagsAccessLevel</a></code> | <code>*string</code> | Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId">ForkedFromProjectId</a></code> | <code>*f64</code> | The id of the project to fork. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel">ForkingAccessLevel</a></code> | <code>*string</code> | Set the forking access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled">GroupRunnersEnabled</a></code> | <code>interface{}</code> | Enable group runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId">GroupWithProjectTemplatesId</a></code> | <code>*f64</code> | For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl">ImportUrl</a></code> | <code>*string</code> | Git URL to a repository to be imported. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword">ImportUrlPassword</a></code> | <code>*string</code> | The password for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername">ImportUrlUsername</a></code> | <code>*string</code> | The username for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel">InfrastructureAccessLevel</a></code> | <code>*string</code> | Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme">InitializeWithReadme</a></code> | <code>interface{}</code> | Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel">IssuesAccessLevel</a></code> | <code>*string</code> | Set the issues access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled">IssuesEnabled</a></code> | <code>interface{}</code> | Enable issue tracking for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate">IssuesTemplate</a></code> | <code>*string</code> | Sets the template for new issues in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>interface{}</code> | Disable or enable the ability to keep the latest artifact for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled">LfsEnabled</a></code> | <code>interface{}</code> | Enable LFS for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate">MergeCommitTemplate</a></code> | <code>*string</code> | Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod">MergeMethod</a></code> | <code>*string</code> | Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled">MergePipelinesEnabled</a></code> | <code>interface{}</code> | Enable or disable merge pipelines. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel">MergeRequestsAccessLevel</a></code> | <code>*string</code> | Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled">MergeRequestsEnabled</a></code> | <code>interface{}</code> | Enable merge requests for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate">MergeRequestsTemplate</a></code> | <code>*string</code> | Sets the template for new merge requests in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled">MergeTrainsEnabled</a></code> | <code>interface{}</code> | Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirror">Mirror</a></code> | <code>interface{}</code> | Enable project pull mirror. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches">MirrorOverwritesDivergedBranches</a></code> | <code>interface{}</code> | Enable overwrite diverged branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds">MirrorTriggerBuilds</a></code> | <code>interface{}</code> | Enable trigger builds on pushes for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel">MonitorAccessLevel</a></code> | <code>*string</code> | Set the monitor access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf">MrDefaultTargetSelf</a></code> | <code>interface{}</code> | For forked projects, target merge requests to this project. If false, the target will be the upstream project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId">NamespaceId</a></code> | <code>*f64</code> | The namespace (group or user) of the project. Defaults to your user. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved">OnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>interface{}</code> | Set to true if you want allow merges only if all discussions are resolved. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds">OnlyAllowMergeIfPipelineSucceeds</a></code> | <code>interface{}</code> | Set to true if you want allow merges only if a pipeline succeeds. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches">OnlyMirrorProtectedBranches</a></code> | <code>interface{}</code> | Enable only mirror protected branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled">PackagesEnabled</a></code> | <code>interface{}</code> | Enable packages repository for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel">PagesAccessLevel</a></code> | <code>*string</code> | Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.path">Path</a></code> | <code>*string</code> | The path of the repository. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled">PipelinesEnabled</a></code> | <code>interface{}</code> | Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled">PrintingMergeRequestLinkEnabled</a></code> | <code>interface{}</code> | Show link to create/view merge request when pushing from the command line. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds">PublicBuilds</a></code> | <code>interface{}</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs">PublicJobs</a></code> | <code>interface{}</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel">ReleasesAccessLevel</a></code> | <code>*string</code> | Set the releases access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge">RemoveSourceBranchAfterMerge</a></code> | <code>interface{}</code> | Enable `Delete source branch` option by default for all new merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel">RepositoryAccessLevel</a></code> | <code>*string</code> | Set the repository access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage">RepositoryStorage</a></code> | <code>*string</code> | Which storage shard the repository is on. (administrator only). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>interface{}</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel">RequirementsAccessLevel</a></code> | <code>*string</code> | Set the requirements access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions">ResolveOutdatedDiffDiscussions</a></code> | <code>interface{}</code> | Automatically resolve merge request diffs discussions on lines changed with a push. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables">RestrictUserDefinedVariables</a></code> | <code>interface{}</code> | Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel">SecurityAndComplianceAccessLevel</a></code> | <code>*string</code> | Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>interface{}</code> | Enable shared runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection">SkipWaitForDefaultBranchProtection</a></code> | <code>interface{}</code> | If `true`, the default behavior to wait for the default branch protection to be created is skipped. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel">SnippetsAccessLevel</a></code> | <code>*string</code> | Set the snippets access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled">SnippetsEnabled</a></code> | <code>interface{}</code> | Enable snippets for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate">SquashCommitTemplate</a></code> | <code>*string</code> | Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption">SquashOption</a></code> | <code>*string</code> | Squash commits when merge request. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage">SuggestionCommitMessage</a></code> | <code>*string</code> | The commit message used to apply merge request suggestions. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | The list of tags for a project; |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateName">TemplateName</a></code> | <code>*string</code> | When used without use_custom_template, name of a built-in project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId">TemplateProjectId</a></code> | <code>*f64</code> | When used with use_custom_template, project ID of a custom project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.topics">Topics</a></code> | <code>*[]*string</code> | The list of topics for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate">UseCustomTemplate</a></code> | <code>interface{}</code> | Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel">VisibilityLevel</a></code> | <code>*string</code> | Set to `public` to create a public project. Valid values are `private`, `internal`, `public`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>*string</code> | Set the wiki access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled">WikiEnabled</a></code> | <code>interface{}</code> | Enable wiki for the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.project.ProjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.project.ProjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#name Project#name}

---

##### `AllowMergeOnSkippedPipeline`<sup>Optional</sup> <a name="AllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline"></a>

```go
AllowMergeOnSkippedPipeline interface{}
```

- *Type:* interface{}

Set to true if you want to treat skipped pipelines as if they finished with success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}

---

##### `AnalyticsAccessLevel`<sup>Optional</sup> <a name="AnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel"></a>

```go
AnalyticsAccessLevel *string
```

- *Type:* *string

Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#analytics_access_level Project#analytics_access_level}

---

##### `ApprovalsBeforeMerge`<sup>Optional</sup> <a name="ApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge"></a>

```go
ApprovalsBeforeMerge *f64
```

- *Type:* *f64

Number of merge request approvals required for merging.

Default is 0.
This field **does not** work well in combination with the `gitlab_project_approval_rule` resource
and is most likely gonna be deprecated in a future GitLab version (see [this upstream epic](https://gitlab.com/groups/gitlab-org/-/epics/7572)).
In the meantime we recommend against using this attribute and use `gitlab_project_approval_rule` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#approvals_before_merge Project#approvals_before_merge}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archived"></a>

```go
Archived interface{}
```

- *Type:* interface{}

Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#archived Project#archived}

---

##### `ArchiveOnDestroy`<sup>Optional</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy"></a>

```go
ArchiveOnDestroy interface{}
```

- *Type:* interface{}

Set to `true` to archive the project instead of deleting on destroy.

If set to `true` it will entire omit the `DELETE` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#archive_on_destroy Project#archive_on_destroy}

---

##### `AutoCancelPendingPipelines`<sup>Optional</sup> <a name="AutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines"></a>

```go
AutoCancelPendingPipelines *string
```

- *Type:* *string

Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}

---

##### `AutocloseReferencedIssues`<sup>Optional</sup> <a name="AutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues"></a>

```go
AutocloseReferencedIssues interface{}
```

- *Type:* interface{}

Set whether auto-closing referenced issues on default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}

---

##### `AutoDevopsDeployStrategy`<sup>Optional</sup> <a name="AutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy"></a>

```go
AutoDevopsDeployStrategy *string
```

- *Type:* *string

Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled"></a>

```go
AutoDevopsEnabled interface{}
```

- *Type:* interface{}

Enable Auto DevOps for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}

---

##### `Avatar`<sup>Optional</sup> <a name="Avatar" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatar"></a>

```go
Avatar *string
```

- *Type:* *string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#avatar Project#avatar}

---

##### `AvatarHash`<sup>Optional</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash"></a>

```go
AvatarHash *string
```

- *Type:* *string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#avatar_hash Project#avatar_hash}

---

##### `BuildCoverageRegex`<sup>Optional</sup> <a name="BuildCoverageRegex" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex"></a>

```go
BuildCoverageRegex *string
```

- *Type:* *string

Test coverage parsing for the project. This is deprecated feature in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#build_coverage_regex Project#build_coverage_regex}

---

##### `BuildGitStrategy`<sup>Optional</sup> <a name="BuildGitStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy"></a>

```go
BuildGitStrategy *string
```

- *Type:* *string

The Git strategy. Defaults to fetch. Valid values are `clone`, `fetch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#build_git_strategy Project#build_git_strategy}

---

##### `BuildsAccessLevel`<sup>Optional</sup> <a name="BuildsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel"></a>

```go
BuildsAccessLevel *string
```

- *Type:* *string

Set the builds access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#builds_access_level Project#builds_access_level}

---

##### `BuildTimeout`<sup>Optional</sup> <a name="BuildTimeout" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout"></a>

```go
BuildTimeout *f64
```

- *Type:* *f64

The maximum amount of time, in seconds, that a job can run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#build_timeout Project#build_timeout}

---

##### `CiConfigPath`<sup>Optional</sup> <a name="CiConfigPath" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath"></a>

```go
CiConfigPath *string
```

- *Type:* *string

Custom Path to CI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#ci_config_path Project#ci_config_path}

---

##### `CiDefaultGitDepth`<sup>Optional</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth"></a>

```go
CiDefaultGitDepth *f64
```

- *Type:* *f64

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}

---

##### `CiForwardDeploymentEnabled`<sup>Optional</sup> <a name="CiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled"></a>

```go
CiForwardDeploymentEnabled interface{}
```

- *Type:* interface{}

When a new deployment job starts, skip older deployment jobs that are still pending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}

---

##### `CiRestrictPipelineCancellationRole`<sup>Optional</sup> <a name="CiRestrictPipelineCancellationRole" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciRestrictPipelineCancellationRole"></a>

```go
CiRestrictPipelineCancellationRole *string
```

- *Type:* *string

The role required to cancel a pipeline or job.

Introduced in GitLab 16.8. Premium and Ultimate only. Valid values are `developer`, `maintainer`, `no one`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#ci_restrict_pipeline_cancellation_role Project#ci_restrict_pipeline_cancellation_role}

---

##### `CiSeparatedCaches`<sup>Optional</sup> <a name="CiSeparatedCaches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches"></a>

```go
CiSeparatedCaches interface{}
```

- *Type:* interface{}

Use separate caches for protected branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#ci_separated_caches Project#ci_separated_caches}

---

##### `ContainerExpirationPolicy`<sup>Optional</sup> <a name="ContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy"></a>

```go
ContainerExpirationPolicy ProjectContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

container_expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#container_expiration_policy Project#container_expiration_policy}

---

##### `ContainerRegistryAccessLevel`<sup>Optional</sup> <a name="ContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel"></a>

```go
ContainerRegistryAccessLevel *string
```

- *Type:* *string

Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#container_registry_access_level Project#container_registry_access_level}

---

##### `ContainerRegistryEnabled`<sup>Optional</sup> <a name="ContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled"></a>

```go
ContainerRegistryEnabled interface{}
```

- *Type:* interface{}

Enable container registry for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#container_registry_enabled Project#container_registry_enabled}

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch"></a>

```go
DefaultBranch *string
```

- *Type:* *string

The default branch for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#default_branch Project#default_branch}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.project.ProjectConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#description Project#description}

---

##### `EmailsEnabled`<sup>Optional</sup> <a name="EmailsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.emailsEnabled"></a>

```go
EmailsEnabled interface{}
```

- *Type:* interface{}

Enable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#emails_enabled Project#emails_enabled}

---

##### `EnvironmentsAccessLevel`<sup>Optional</sup> <a name="EnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel"></a>

```go
EnvironmentsAccessLevel *string
```

- *Type:* *string

Set the environments access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#environments_access_level Project#environments_access_level}

---

##### `ExternalAuthorizationClassificationLabel`<sup>Optional</sup> <a name="ExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel"></a>

```go
ExternalAuthorizationClassificationLabel *string
```

- *Type:* *string

The classification label for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}

---

##### `FeatureFlagsAccessLevel`<sup>Optional</sup> <a name="FeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel"></a>

```go
FeatureFlagsAccessLevel *string
```

- *Type:* *string

Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}

---

##### `ForkedFromProjectId`<sup>Optional</sup> <a name="ForkedFromProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId"></a>

```go
ForkedFromProjectId *f64
```

- *Type:* *f64

The id of the project to fork.

During create the project is forked and during an update the fork relation is changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#forked_from_project_id Project#forked_from_project_id}

---

##### `ForkingAccessLevel`<sup>Optional</sup> <a name="ForkingAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel"></a>

```go
ForkingAccessLevel *string
```

- *Type:* *string

Set the forking access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#forking_access_level Project#forking_access_level}

---

##### `GroupRunnersEnabled`<sup>Optional</sup> <a name="GroupRunnersEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupRunnersEnabled"></a>

```go
GroupRunnersEnabled interface{}
```

- *Type:* interface{}

Enable group runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#group_runners_enabled Project#group_runners_enabled}

---

##### `GroupWithProjectTemplatesId`<sup>Optional</sup> <a name="GroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId"></a>

```go
GroupWithProjectTemplatesId *f64
```

- *Type:* *f64

For group-level custom templates, specifies ID of group from which all the custom project templates are sourced.

Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportUrl`<sup>Optional</sup> <a name="ImportUrl" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl"></a>

```go
ImportUrl *string
```

- *Type:* *string

Git URL to a repository to be imported.

Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#import_url Project#import_url}

---

##### `ImportUrlPassword`<sup>Optional</sup> <a name="ImportUrlPassword" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword"></a>

```go
ImportUrlPassword *string
```

- *Type:* *string

The password for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#import_url_password Project#import_url_password}

---

##### `ImportUrlUsername`<sup>Optional</sup> <a name="ImportUrlUsername" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername"></a>

```go
ImportUrlUsername *string
```

- *Type:* *string

The username for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#import_url_username Project#import_url_username}

---

##### `InfrastructureAccessLevel`<sup>Optional</sup> <a name="InfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel"></a>

```go
InfrastructureAccessLevel *string
```

- *Type:* *string

Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}

---

##### `InitializeWithReadme`<sup>Optional</sup> <a name="InitializeWithReadme" id="@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme"></a>

```go
InitializeWithReadme interface{}
```

- *Type:* interface{}

Create main branch with first commit containing a README.md file. Must be set to `true` if importing an uninitialized project with a different `default_branch`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#initialize_with_readme Project#initialize_with_readme}

---

##### `IssuesAccessLevel`<sup>Optional</sup> <a name="IssuesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel"></a>

```go
IssuesAccessLevel *string
```

- *Type:* *string

Set the issues access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#issues_access_level Project#issues_access_level}

---

##### `IssuesEnabled`<sup>Optional</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled"></a>

```go
IssuesEnabled interface{}
```

- *Type:* interface{}

Enable issue tracking for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#issues_enabled Project#issues_enabled}

---

##### `IssuesTemplate`<sup>Optional</sup> <a name="IssuesTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate"></a>

```go
IssuesTemplate *string
```

- *Type:* *string

Sets the template for new issues in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#issues_template Project#issues_template}

---

##### `KeepLatestArtifact`<sup>Optional</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact"></a>

```go
KeepLatestArtifact interface{}
```

- *Type:* interface{}

Disable or enable the ability to keep the latest artifact for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}

---

##### `LfsEnabled`<sup>Optional</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled"></a>

```go
LfsEnabled interface{}
```

- *Type:* interface{}

Enable LFS for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#lfs_enabled Project#lfs_enabled}

---

##### `MergeCommitTemplate`<sup>Optional</sup> <a name="MergeCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate"></a>

```go
MergeCommitTemplate *string
```

- *Type:* *string

Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#merge_commit_template Project#merge_commit_template}

---

##### `MergeMethod`<sup>Optional</sup> <a name="MergeMethod" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod"></a>

```go
MergeMethod *string
```

- *Type:* *string

Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#merge_method Project#merge_method}

---

##### `MergePipelinesEnabled`<sup>Optional</sup> <a name="MergePipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled"></a>

```go
MergePipelinesEnabled interface{}
```

- *Type:* interface{}

Enable or disable merge pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}

---

##### `MergeRequestsAccessLevel`<sup>Optional</sup> <a name="MergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel"></a>

```go
MergeRequestsAccessLevel *string
```

- *Type:* *string

Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}

---

##### `MergeRequestsEnabled`<sup>Optional</sup> <a name="MergeRequestsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled"></a>

```go
MergeRequestsEnabled interface{}
```

- *Type:* interface{}

Enable merge requests for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}

---

##### `MergeRequestsTemplate`<sup>Optional</sup> <a name="MergeRequestsTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate"></a>

```go
MergeRequestsTemplate *string
```

- *Type:* *string

Sets the template for new merge requests in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#merge_requests_template Project#merge_requests_template}

---

##### `MergeTrainsEnabled`<sup>Optional</sup> <a name="MergeTrainsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled"></a>

```go
MergeTrainsEnabled interface{}
```

- *Type:* interface{}

Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}

---

##### `Mirror`<sup>Optional</sup> <a name="Mirror" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirror"></a>

```go
Mirror interface{}
```

- *Type:* interface{}

Enable project pull mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#mirror Project#mirror}

---

##### `MirrorOverwritesDivergedBranches`<sup>Optional</sup> <a name="MirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches"></a>

```go
MirrorOverwritesDivergedBranches interface{}
```

- *Type:* interface{}

Enable overwrite diverged branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}

---

##### `MirrorTriggerBuilds`<sup>Optional</sup> <a name="MirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds"></a>

```go
MirrorTriggerBuilds interface{}
```

- *Type:* interface{}

Enable trigger builds on pushes for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}

---

##### `MonitorAccessLevel`<sup>Optional</sup> <a name="MonitorAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel"></a>

```go
MonitorAccessLevel *string
```

- *Type:* *string

Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#monitor_access_level Project#monitor_access_level}

---

##### `MrDefaultTargetSelf`<sup>Optional</sup> <a name="MrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf"></a>

```go
MrDefaultTargetSelf interface{}
```

- *Type:* interface{}

For forked projects, target merge requests to this project. If false, the target will be the upstream project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#mr_default_target_self Project#mr_default_target_self}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId"></a>

```go
NamespaceId *f64
```

- *Type:* *f64

The namespace (group or user) of the project. Defaults to your user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#namespace_id Project#namespace_id}

---

##### `OnlyAllowMergeIfAllDiscussionsAreResolved`<sup>Optional</sup> <a name="OnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```go
OnlyAllowMergeIfAllDiscussionsAreResolved interface{}
```

- *Type:* interface{}

Set to true if you want allow merges only if all discussions are resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}

---

##### `OnlyAllowMergeIfPipelineSucceeds`<sup>Optional</sup> <a name="OnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds"></a>

```go
OnlyAllowMergeIfPipelineSucceeds interface{}
```

- *Type:* interface{}

Set to true if you want allow merges only if a pipeline succeeds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}

---

##### `OnlyMirrorProtectedBranches`<sup>Optional</sup> <a name="OnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches"></a>

```go
OnlyMirrorProtectedBranches interface{}
```

- *Type:* interface{}

Enable only mirror protected branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}

---

##### `PackagesEnabled`<sup>Optional</sup> <a name="PackagesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled"></a>

```go
PackagesEnabled interface{}
```

- *Type:* interface{}

Enable packages repository for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#packages_enabled Project#packages_enabled}

---

##### `PagesAccessLevel`<sup>Optional</sup> <a name="PagesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel"></a>

```go
PagesAccessLevel *string
```

- *Type:* *string

Enable pages access control. Valid values are `public`, `private`, `enabled`, `disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#pages_access_level Project#pages_access_level}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-gitlab.project.ProjectConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#path Project#path}

---

##### `PipelinesEnabled`<sup>Optional</sup> <a name="PipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled"></a>

```go
PipelinesEnabled interface{}
```

- *Type:* interface{}

Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#pipelines_enabled Project#pipelines_enabled}

---

##### `PrintingMergeRequestLinkEnabled`<sup>Optional</sup> <a name="PrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled"></a>

```go
PrintingMergeRequestLinkEnabled interface{}
```

- *Type:* interface{}

Show link to create/view merge request when pushing from the command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}

---

##### `PublicBuilds`<sup>Optional</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds"></a>

```go
PublicBuilds interface{}
```

- *Type:* interface{}

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#public_builds Project#public_builds}

---

##### `PublicJobs`<sup>Optional</sup> <a name="PublicJobs" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicJobs"></a>

```go
PublicJobs interface{}
```

- *Type:* interface{}

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#public_jobs Project#public_jobs}

---

##### `PushRules`<sup>Optional</sup> <a name="PushRules" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules"></a>

```go
PushRules ProjectPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#push_rules Project#push_rules}

---

##### `ReleasesAccessLevel`<sup>Optional</sup> <a name="ReleasesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel"></a>

```go
ReleasesAccessLevel *string
```

- *Type:* *string

Set the releases access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#releases_access_level Project#releases_access_level}

---

##### `RemoveSourceBranchAfterMerge`<sup>Optional</sup> <a name="RemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge"></a>

```go
RemoveSourceBranchAfterMerge interface{}
```

- *Type:* interface{}

Enable `Delete source branch` option by default for all new merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}

---

##### `RepositoryAccessLevel`<sup>Optional</sup> <a name="RepositoryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel"></a>

```go
RepositoryAccessLevel *string
```

- *Type:* *string

Set the repository access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#repository_access_level Project#repository_access_level}

---

##### `RepositoryStorage`<sup>Optional</sup> <a name="RepositoryStorage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage"></a>

```go
RepositoryStorage *string
```

- *Type:* *string

Which storage shard the repository is on. (administrator only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#repository_storage Project#repository_storage}

---

##### `RequestAccessEnabled`<sup>Optional</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled"></a>

```go
RequestAccessEnabled interface{}
```

- *Type:* interface{}

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#request_access_enabled Project#request_access_enabled}

---

##### `RequirementsAccessLevel`<sup>Optional</sup> <a name="RequirementsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel"></a>

```go
RequirementsAccessLevel *string
```

- *Type:* *string

Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#requirements_access_level Project#requirements_access_level}

---

##### `ResolveOutdatedDiffDiscussions`<sup>Optional</sup> <a name="ResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions"></a>

```go
ResolveOutdatedDiffDiscussions interface{}
```

- *Type:* interface{}

Automatically resolve merge request diffs discussions on lines changed with a push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}

---

##### `RestrictUserDefinedVariables`<sup>Optional</sup> <a name="RestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables"></a>

```go
RestrictUserDefinedVariables interface{}
```

- *Type:* interface{}

Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}

---

##### `SecurityAndComplianceAccessLevel`<sup>Optional</sup> <a name="SecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel"></a>

```go
SecurityAndComplianceAccessLevel *string
```

- *Type:* *string

Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}

---

##### `SharedRunnersEnabled`<sup>Optional</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled"></a>

```go
SharedRunnersEnabled interface{}
```

- *Type:* interface{}

Enable shared runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}

---

##### `SkipWaitForDefaultBranchProtection`<sup>Optional</sup> <a name="SkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection"></a>

```go
SkipWaitForDefaultBranchProtection interface{}
```

- *Type:* interface{}

If `true`, the default behavior to wait for the default branch protection to be created is skipped.

This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}

---

##### `SnippetsAccessLevel`<sup>Optional</sup> <a name="SnippetsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel"></a>

```go
SnippetsAccessLevel *string
```

- *Type:* *string

Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#snippets_access_level Project#snippets_access_level}

---

##### `SnippetsEnabled`<sup>Optional</sup> <a name="SnippetsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled"></a>

```go
SnippetsEnabled interface{}
```

- *Type:* interface{}

Enable snippets for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#snippets_enabled Project#snippets_enabled}

---

##### `SquashCommitTemplate`<sup>Optional</sup> <a name="SquashCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate"></a>

```go
SquashCommitTemplate *string
```

- *Type:* *string

Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#squash_commit_template Project#squash_commit_template}

---

##### `SquashOption`<sup>Optional</sup> <a name="SquashOption" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption"></a>

```go
SquashOption *string
```

- *Type:* *string

Squash commits when merge request.

Valid values are `never`, `always`, `default_on`, or `default_off`. The default value is `default_off`. [GitLab >= 14.1]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#squash_option Project#squash_option}

---

##### `SuggestionCommitMessage`<sup>Optional</sup> <a name="SuggestionCommitMessage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage"></a>

```go
SuggestionCommitMessage *string
```

- *Type:* *string

The commit message used to apply merge request suggestions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-gitlab.project.ProjectConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

The list of tags for a project;

put array of tags, that should be finally assigned to a project. Use topics instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#tags Project#tags}

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateName"></a>

```go
TemplateName *string
```

- *Type:* *string

When used without use_custom_template, name of a built-in project template.

When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#template_name Project#template_name}

---

##### `TemplateProjectId`<sup>Optional</sup> <a name="TemplateProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId"></a>

```go
TemplateProjectId *f64
```

- *Type:* *f64

When used with use_custom_template, project ID of a custom project template.

This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#template_project_id Project#template_project_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-gitlab.project.ProjectConfig.property.timeouts"></a>

```go
Timeouts ProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectTimeouts">ProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#timeouts Project#timeouts}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-gitlab.project.ProjectConfig.property.topics"></a>

```go
Topics *[]*string
```

- *Type:* *[]*string

The list of topics for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#topics Project#topics}

---

##### `UseCustomTemplate`<sup>Optional</sup> <a name="UseCustomTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate"></a>

```go
UseCustomTemplate interface{}
```

- *Type:* interface{}

Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).

~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting.html#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#use_custom_template Project#use_custom_template}

---

##### `VisibilityLevel`<sup>Optional</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel"></a>

```go
VisibilityLevel *string
```

- *Type:* *string

Set to `public` to create a public project. Valid values are `private`, `internal`, `public`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#visibility_level Project#visibility_level}

---

##### `WikiAccessLevel`<sup>Optional</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel"></a>

```go
WikiAccessLevel *string
```

- *Type:* *string

Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#wiki_access_level Project#wiki_access_level}

---

##### `WikiEnabled`<sup>Optional</sup> <a name="WikiEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled"></a>

```go
WikiEnabled interface{}
```

- *Type:* interface{}

Enable wiki for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#wiki_enabled Project#wiki_enabled}

---

### ProjectContainerExpirationPolicy <a name="ProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

&project.ProjectContainerExpirationPolicy {
	Cadence: *string,
	Enabled: interface{},
	KeepN: *f64,
	NameRegex: *string,
	NameRegexDelete: *string,
	NameRegexKeep: *string,
	OlderThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence">Cadence</a></code> | <code>*string</code> | The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | If true, the policy is enabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN">KeepN</a></code> | <code>*f64</code> | The number of images to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex">NameRegex</a></code> | <code>*string</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete">NameRegexDelete</a></code> | <code>*string</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep">NameRegexKeep</a></code> | <code>*string</code> | The regular expression to match image names to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan">OlderThan</a></code> | <code>*string</code> | The number of days to keep images. |

---

##### `Cadence`<sup>Optional</sup> <a name="Cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence"></a>

```go
Cadence *string
```

- *Type:* *string

The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#cadence Project#cadence}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

If true, the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#enabled Project#enabled}

---

##### `KeepN`<sup>Optional</sup> <a name="KeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN"></a>

```go
KeepN *f64
```

- *Type:* *f64

The number of images to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#keep_n Project#keep_n}

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex"></a>

```go
NameRegex *string
```

- *Type:* *string

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#name_regex Project#name_regex}

---

##### `NameRegexDelete`<sup>Optional</sup> <a name="NameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete"></a>

```go
NameRegexDelete *string
```

- *Type:* *string

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#name_regex_delete Project#name_regex_delete}

---

##### `NameRegexKeep`<sup>Optional</sup> <a name="NameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep"></a>

```go
NameRegexKeep *string
```

- *Type:* *string

The regular expression to match image names to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#name_regex_keep Project#name_regex_keep}

---

##### `OlderThan`<sup>Optional</sup> <a name="OlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan"></a>

```go
OlderThan *string
```

- *Type:* *string

The number of days to keep images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#older_than Project#older_than}

---

### ProjectPushRules <a name="ProjectPushRules" id="@cdktf/provider-gitlab.project.ProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectPushRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

&project.ProjectPushRules {
	AuthorEmailRegex: *string,
	BranchNameRegex: *string,
	CommitCommitterCheck: interface{},
	CommitCommitterNameCheck: interface{},
	CommitMessageNegativeRegex: *string,
	CommitMessageRegex: *string,
	DenyDeleteTag: interface{},
	FileNameRegex: *string,
	MaxFileSize: *f64,
	MemberCheck: interface{},
	PreventSecrets: interface{},
	RejectUnsignedCommits: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>*string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex">BranchNameRegex</a></code> | <code>*string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>interface{}</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>interface{}</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>*string</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>*string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>interface{}</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex">FileNameRegex</a></code> | <code>*string</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck">MemberCheck</a></code> | <code>interface{}</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets">PreventSecrets</a></code> | <code>interface{}</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>interface{}</code> | Reject commit when it’s not signed through GPG. |

---

##### `AuthorEmailRegex`<sup>Optional</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex"></a>

```go
AuthorEmailRegex *string
```

- *Type:* *string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#author_email_regex Project#author_email_regex}

---

##### `BranchNameRegex`<sup>Optional</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex"></a>

```go
BranchNameRegex *string
```

- *Type:* *string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#branch_name_regex Project#branch_name_regex}

---

##### `CommitCommitterCheck`<sup>Optional</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck"></a>

```go
CommitCommitterCheck interface{}
```

- *Type:* interface{}

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#commit_committer_check Project#commit_committer_check}

---

##### `CommitCommitterNameCheck`<sup>Optional</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterNameCheck"></a>

```go
CommitCommitterNameCheck interface{}
```

- *Type:* interface{}

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#commit_committer_name_check Project#commit_committer_name_check}

---

##### `CommitMessageNegativeRegex`<sup>Optional</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex"></a>

```go
CommitMessageNegativeRegex *string
```

- *Type:* *string

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#commit_message_negative_regex Project#commit_message_negative_regex}

---

##### `CommitMessageRegex`<sup>Optional</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex"></a>

```go
CommitMessageRegex *string
```

- *Type:* *string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#commit_message_regex Project#commit_message_regex}

---

##### `DenyDeleteTag`<sup>Optional</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag"></a>

```go
DenyDeleteTag interface{}
```

- *Type:* interface{}

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#deny_delete_tag Project#deny_delete_tag}

---

##### `FileNameRegex`<sup>Optional</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex"></a>

```go
FileNameRegex *string
```

- *Type:* *string

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#file_name_regex Project#file_name_regex}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize"></a>

```go
MaxFileSize *f64
```

- *Type:* *f64

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#max_file_size Project#max_file_size}

---

##### `MemberCheck`<sup>Optional</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck"></a>

```go
MemberCheck interface{}
```

- *Type:* interface{}

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#member_check Project#member_check}

---

##### `PreventSecrets`<sup>Optional</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets"></a>

```go
PreventSecrets interface{}
```

- *Type:* interface{}

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#prevent_secrets Project#prevent_secrets}

---

##### `RejectUnsignedCommits`<sup>Optional</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits"></a>

```go
RejectUnsignedCommits interface{}
```

- *Type:* interface{}

Reject commit when it’s not signed through GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#reject_unsigned_commits Project#reject_unsigned_commits}

---

### ProjectTimeouts <a name="ProjectTimeouts" id="@cdktf/provider-gitlab.project.ProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

&project.ProjectTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#create Project#create}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#delete Project#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#create Project#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-gitlab.project.ProjectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project#delete Project#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectContainerExpirationPolicyOutputReference <a name="ProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.NewProjectContainerExpirationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectContainerExpirationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence">ResetCadence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN">ResetKeepN</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegex">ResetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete">ResetNameRegexDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep">ResetNameRegexKeep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan">ResetOlderThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCadence` <a name="ResetCadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence"></a>

```go
func ResetCadence()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKeepN` <a name="ResetKeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN"></a>

```go
func ResetKeepN()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegex"></a>

```go
func ResetNameRegex()
```

##### `ResetNameRegexDelete` <a name="ResetNameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete"></a>

```go
func ResetNameRegexDelete()
```

##### `ResetNameRegexKeep` <a name="ResetNameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep"></a>

```go
func ResetNameRegexKeep()
```

##### `ResetOlderThan` <a name="ResetOlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan"></a>

```go
func ResetOlderThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt">NextRunAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput">CadenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput">KeepNInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput">NameRegexDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput">NameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput">NameRegexKeepInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput">OlderThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence">Cadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN">KeepN</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex">NameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">NameRegexDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">NameRegexKeep</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan">OlderThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```go
func NextRunAt() *string
```

- *Type:* *string

---

##### `CadenceInput`<sup>Optional</sup> <a name="CadenceInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput"></a>

```go
func CadenceInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KeepNInput`<sup>Optional</sup> <a name="KeepNInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput"></a>

```go
func KeepNInput() *f64
```

- *Type:* *f64

---

##### `NameRegexDeleteInput`<sup>Optional</sup> <a name="NameRegexDeleteInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput"></a>

```go
func NameRegexDeleteInput() *string
```

- *Type:* *string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput"></a>

```go
func NameRegexInput() *string
```

- *Type:* *string

---

##### `NameRegexKeepInput`<sup>Optional</sup> <a name="NameRegexKeepInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput"></a>

```go
func NameRegexKeepInput() *string
```

- *Type:* *string

---

##### `OlderThanInput`<sup>Optional</sup> <a name="OlderThanInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput"></a>

```go
func OlderThanInput() *string
```

- *Type:* *string

---

##### `Cadence`<sup>Required</sup> <a name="Cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```go
func Cadence() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KeepN`<sup>Required</sup> <a name="KeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```go
func KeepN() *f64
```

- *Type:* *f64

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex"></a>

```go
func NameRegex() *string
```

- *Type:* *string

---

##### `NameRegexDelete`<sup>Required</sup> <a name="NameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```go
func NameRegexDelete() *string
```

- *Type:* *string

---

##### `NameRegexKeep`<sup>Required</sup> <a name="NameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```go
func NameRegexKeep() *string
```

- *Type:* *string

---

##### `OlderThan`<sup>Required</sup> <a name="OlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```go
func OlderThan() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectContainerExpirationPolicy
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---


### ProjectPushRulesOutputReference <a name="ProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.NewProjectPushRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectPushRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex">ResetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex">ResetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck">ResetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck">ResetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex">ResetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex">ResetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag">ResetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex">ResetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck">ResetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets">ResetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits">ResetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorEmailRegex` <a name="ResetAuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex"></a>

```go
func ResetAuthorEmailRegex()
```

##### `ResetBranchNameRegex` <a name="ResetBranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex"></a>

```go
func ResetBranchNameRegex()
```

##### `ResetCommitCommitterCheck` <a name="ResetCommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck"></a>

```go
func ResetCommitCommitterCheck()
```

##### `ResetCommitCommitterNameCheck` <a name="ResetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterNameCheck"></a>

```go
func ResetCommitCommitterNameCheck()
```

##### `ResetCommitMessageNegativeRegex` <a name="ResetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```go
func ResetCommitMessageNegativeRegex()
```

##### `ResetCommitMessageRegex` <a name="ResetCommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex"></a>

```go
func ResetCommitMessageRegex()
```

##### `ResetDenyDeleteTag` <a name="ResetDenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag"></a>

```go
func ResetDenyDeleteTag()
```

##### `ResetFileNameRegex` <a name="ResetFileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex"></a>

```go
func ResetFileNameRegex()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize"></a>

```go
func ResetMaxFileSize()
```

##### `ResetMemberCheck` <a name="ResetMemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck"></a>

```go
func ResetMemberCheck()
```

##### `ResetPreventSecrets` <a name="ResetPreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets"></a>

```go
func ResetPreventSecrets()
```

##### `ResetRejectUnsignedCommits` <a name="ResetRejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```go
func ResetRejectUnsignedCommits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput">AuthorEmailRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput">BranchNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput">CommitCommitterCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput">CommitCommitterNameCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput">CommitMessageNegativeRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput">CommitMessageRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput">DenyDeleteTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput">FileNameRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput">MemberCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput">PreventSecretsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput">RejectUnsignedCommitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex">BranchNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex">FileNameRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck">MemberCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets">PreventSecrets</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorEmailRegexInput`<sup>Optional</sup> <a name="AuthorEmailRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput"></a>

```go
func AuthorEmailRegexInput() *string
```

- *Type:* *string

---

##### `BranchNameRegexInput`<sup>Optional</sup> <a name="BranchNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput"></a>

```go
func BranchNameRegexInput() *string
```

- *Type:* *string

---

##### `CommitCommitterCheckInput`<sup>Optional</sup> <a name="CommitCommitterCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```go
func CommitCommitterCheckInput() interface{}
```

- *Type:* interface{}

---

##### `CommitCommitterNameCheckInput`<sup>Optional</sup> <a name="CommitCommitterNameCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheckInput"></a>

```go
func CommitCommitterNameCheckInput() interface{}
```

- *Type:* interface{}

---

##### `CommitMessageNegativeRegexInput`<sup>Optional</sup> <a name="CommitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```go
func CommitMessageNegativeRegexInput() *string
```

- *Type:* *string

---

##### `CommitMessageRegexInput`<sup>Optional</sup> <a name="CommitMessageRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput"></a>

```go
func CommitMessageRegexInput() *string
```

- *Type:* *string

---

##### `DenyDeleteTagInput`<sup>Optional</sup> <a name="DenyDeleteTagInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput"></a>

```go
func DenyDeleteTagInput() interface{}
```

- *Type:* interface{}

---

##### `FileNameRegexInput`<sup>Optional</sup> <a name="FileNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput"></a>

```go
func FileNameRegexInput() *string
```

- *Type:* *string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput"></a>

```go
func MaxFileSizeInput() *f64
```

- *Type:* *f64

---

##### `MemberCheckInput`<sup>Optional</sup> <a name="MemberCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput"></a>

```go
func MemberCheckInput() interface{}
```

- *Type:* interface{}

---

##### `PreventSecretsInput`<sup>Optional</sup> <a name="PreventSecretsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput"></a>

```go
func PreventSecretsInput() interface{}
```

- *Type:* interface{}

---

##### `RejectUnsignedCommitsInput`<sup>Optional</sup> <a name="RejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```go
func RejectUnsignedCommitsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```go
func AuthorEmailRegex() *string
```

- *Type:* *string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex"></a>

```go
func BranchNameRegex() *string
```

- *Type:* *string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```go
func CommitCommitterCheck() interface{}
```

- *Type:* interface{}

---

##### `CommitCommitterNameCheck`<sup>Required</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterNameCheck"></a>

```go
func CommitCommitterNameCheck() interface{}
```

- *Type:* interface{}

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```go
func CommitMessageNegativeRegex() *string
```

- *Type:* *string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```go
func CommitMessageRegex() *string
```

- *Type:* *string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```go
func DenyDeleteTag() interface{}
```

- *Type:* interface{}

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex"></a>

```go
func FileNameRegex() *string
```

- *Type:* *string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize"></a>

```go
func MaxFileSize() *f64
```

- *Type:* *f64

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck"></a>

```go
func MemberCheck() interface{}
```

- *Type:* interface{}

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets"></a>

```go
func PreventSecrets() interface{}
```

- *Type:* interface{}

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```go
func RejectUnsignedCommits() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectPushRules
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---


### ProjectTimeoutsOutputReference <a name="ProjectTimeoutsOutputReference" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/project"

project.NewProjectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.project.ProjectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




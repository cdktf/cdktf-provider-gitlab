# `gitlab_project`

Refer to the Terraform Registory for docs: [`gitlab_project`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project).

# `project` Submodule <a name="`project` Submodule" id="@cdktf/provider-gitlab.project"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Project <a name="Project" id="@cdktf/provider-gitlab.project.Project"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project gitlab_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.Project.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new Project(Construct Scope, string Id, ProjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig">ProjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.project.Project.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectConfig">ProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy">PutContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.putPushRules">PutPushRules</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches">ResetCiSeparatedCaches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy">ResetContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel">ResetContainerRegistryAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled">ResetContainerRegistryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEmailsDisabled">ResetEmailsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel">ResetEnvironmentsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel">ResetExternalAuthorizationClassificationLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel">ResetFeatureFlagsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId">ResetForkedFromProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel">ResetForkingAccessLevel</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetOperationsAccessLevel">ResetOperationsAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPackagesEnabled">ResetPackagesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel">ResetPagesAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled">ResetPipelinesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled">ResetPrintingMergeRequestLinkEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetPublicBuilds">ResetPublicBuilds</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetTopics">ResetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate">ResetUseCustomTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetVisibilityLevel">ResetVisibilityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel">ResetWikiAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.resetWikiEnabled">ResetWikiEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.project.Project.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.project.Project.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.project.Project.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.project.Project.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.project.Project.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.project.Project.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.project.Project.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.Project.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutContainerExpirationPolicy` <a name="PutContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy"></a>

```csharp
private void PutContainerExpirationPolicy(ProjectContainerExpirationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.project.Project.putContainerExpirationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `PutPushRules` <a name="PutPushRules" id="@cdktf/provider-gitlab.project.Project.putPushRules"></a>

```csharp
private void PutPushRules(ProjectPushRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.project.Project.putPushRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `ResetAllowMergeOnSkippedPipeline` <a name="ResetAllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.resetAllowMergeOnSkippedPipeline"></a>

```csharp
private void ResetAllowMergeOnSkippedPipeline()
```

##### `ResetAnalyticsAccessLevel` <a name="ResetAnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetAnalyticsAccessLevel"></a>

```csharp
private void ResetAnalyticsAccessLevel()
```

##### `ResetApprovalsBeforeMerge` <a name="ResetApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.resetApprovalsBeforeMerge"></a>

```csharp
private void ResetApprovalsBeforeMerge()
```

##### `ResetArchived` <a name="ResetArchived" id="@cdktf/provider-gitlab.project.Project.resetArchived"></a>

```csharp
private void ResetArchived()
```

##### `ResetArchiveOnDestroy` <a name="ResetArchiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.resetArchiveOnDestroy"></a>

```csharp
private void ResetArchiveOnDestroy()
```

##### `ResetAutoCancelPendingPipelines` <a name="ResetAutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.resetAutoCancelPendingPipelines"></a>

```csharp
private void ResetAutoCancelPendingPipelines()
```

##### `ResetAutocloseReferencedIssues` <a name="ResetAutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.resetAutocloseReferencedIssues"></a>

```csharp
private void ResetAutocloseReferencedIssues()
```

##### `ResetAutoDevopsDeployStrategy` <a name="ResetAutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsDeployStrategy"></a>

```csharp
private void ResetAutoDevopsDeployStrategy()
```

##### `ResetAutoDevopsEnabled` <a name="ResetAutoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.resetAutoDevopsEnabled"></a>

```csharp
private void ResetAutoDevopsEnabled()
```

##### `ResetAvatar` <a name="ResetAvatar" id="@cdktf/provider-gitlab.project.Project.resetAvatar"></a>

```csharp
private void ResetAvatar()
```

##### `ResetAvatarHash` <a name="ResetAvatarHash" id="@cdktf/provider-gitlab.project.Project.resetAvatarHash"></a>

```csharp
private void ResetAvatarHash()
```

##### `ResetBuildCoverageRegex` <a name="ResetBuildCoverageRegex" id="@cdktf/provider-gitlab.project.Project.resetBuildCoverageRegex"></a>

```csharp
private void ResetBuildCoverageRegex()
```

##### `ResetBuildGitStrategy` <a name="ResetBuildGitStrategy" id="@cdktf/provider-gitlab.project.Project.resetBuildGitStrategy"></a>

```csharp
private void ResetBuildGitStrategy()
```

##### `ResetBuildsAccessLevel` <a name="ResetBuildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetBuildsAccessLevel"></a>

```csharp
private void ResetBuildsAccessLevel()
```

##### `ResetBuildTimeout` <a name="ResetBuildTimeout" id="@cdktf/provider-gitlab.project.Project.resetBuildTimeout"></a>

```csharp
private void ResetBuildTimeout()
```

##### `ResetCiConfigPath` <a name="ResetCiConfigPath" id="@cdktf/provider-gitlab.project.Project.resetCiConfigPath"></a>

```csharp
private void ResetCiConfigPath()
```

##### `ResetCiDefaultGitDepth` <a name="ResetCiDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.resetCiDefaultGitDepth"></a>

```csharp
private void ResetCiDefaultGitDepth()
```

##### `ResetCiForwardDeploymentEnabled` <a name="ResetCiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.resetCiForwardDeploymentEnabled"></a>

```csharp
private void ResetCiForwardDeploymentEnabled()
```

##### `ResetCiSeparatedCaches` <a name="ResetCiSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.resetCiSeparatedCaches"></a>

```csharp
private void ResetCiSeparatedCaches()
```

##### `ResetContainerExpirationPolicy` <a name="ResetContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.resetContainerExpirationPolicy"></a>

```csharp
private void ResetContainerExpirationPolicy()
```

##### `ResetContainerRegistryAccessLevel` <a name="ResetContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryAccessLevel"></a>

```csharp
private void ResetContainerRegistryAccessLevel()
```

##### `ResetContainerRegistryEnabled` <a name="ResetContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.resetContainerRegistryEnabled"></a>

```csharp
private void ResetContainerRegistryEnabled()
```

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktf/provider-gitlab.project.Project.resetDefaultBranch"></a>

```csharp
private void ResetDefaultBranch()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.project.Project.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmailsDisabled` <a name="ResetEmailsDisabled" id="@cdktf/provider-gitlab.project.Project.resetEmailsDisabled"></a>

```csharp
private void ResetEmailsDisabled()
```

##### `ResetEnvironmentsAccessLevel` <a name="ResetEnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetEnvironmentsAccessLevel"></a>

```csharp
private void ResetEnvironmentsAccessLevel()
```

##### `ResetExternalAuthorizationClassificationLabel` <a name="ResetExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.resetExternalAuthorizationClassificationLabel"></a>

```csharp
private void ResetExternalAuthorizationClassificationLabel()
```

##### `ResetFeatureFlagsAccessLevel` <a name="ResetFeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetFeatureFlagsAccessLevel"></a>

```csharp
private void ResetFeatureFlagsAccessLevel()
```

##### `ResetForkedFromProjectId` <a name="ResetForkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.resetForkedFromProjectId"></a>

```csharp
private void ResetForkedFromProjectId()
```

##### `ResetForkingAccessLevel` <a name="ResetForkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetForkingAccessLevel"></a>

```csharp
private void ResetForkingAccessLevel()
```

##### `ResetGroupWithProjectTemplatesId` <a name="ResetGroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.resetGroupWithProjectTemplatesId"></a>

```csharp
private void ResetGroupWithProjectTemplatesId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.project.Project.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportUrl` <a name="ResetImportUrl" id="@cdktf/provider-gitlab.project.Project.resetImportUrl"></a>

```csharp
private void ResetImportUrl()
```

##### `ResetImportUrlPassword` <a name="ResetImportUrlPassword" id="@cdktf/provider-gitlab.project.Project.resetImportUrlPassword"></a>

```csharp
private void ResetImportUrlPassword()
```

##### `ResetImportUrlUsername` <a name="ResetImportUrlUsername" id="@cdktf/provider-gitlab.project.Project.resetImportUrlUsername"></a>

```csharp
private void ResetImportUrlUsername()
```

##### `ResetInfrastructureAccessLevel` <a name="ResetInfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetInfrastructureAccessLevel"></a>

```csharp
private void ResetInfrastructureAccessLevel()
```

##### `ResetInitializeWithReadme` <a name="ResetInitializeWithReadme" id="@cdktf/provider-gitlab.project.Project.resetInitializeWithReadme"></a>

```csharp
private void ResetInitializeWithReadme()
```

##### `ResetIssuesAccessLevel` <a name="ResetIssuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetIssuesAccessLevel"></a>

```csharp
private void ResetIssuesAccessLevel()
```

##### `ResetIssuesEnabled` <a name="ResetIssuesEnabled" id="@cdktf/provider-gitlab.project.Project.resetIssuesEnabled"></a>

```csharp
private void ResetIssuesEnabled()
```

##### `ResetIssuesTemplate` <a name="ResetIssuesTemplate" id="@cdktf/provider-gitlab.project.Project.resetIssuesTemplate"></a>

```csharp
private void ResetIssuesTemplate()
```

##### `ResetKeepLatestArtifact` <a name="ResetKeepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.resetKeepLatestArtifact"></a>

```csharp
private void ResetKeepLatestArtifact()
```

##### `ResetLfsEnabled` <a name="ResetLfsEnabled" id="@cdktf/provider-gitlab.project.Project.resetLfsEnabled"></a>

```csharp
private void ResetLfsEnabled()
```

##### `ResetMergeCommitTemplate` <a name="ResetMergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeCommitTemplate"></a>

```csharp
private void ResetMergeCommitTemplate()
```

##### `ResetMergeMethod` <a name="ResetMergeMethod" id="@cdktf/provider-gitlab.project.Project.resetMergeMethod"></a>

```csharp
private void ResetMergeMethod()
```

##### `ResetMergePipelinesEnabled` <a name="ResetMergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergePipelinesEnabled"></a>

```csharp
private void ResetMergePipelinesEnabled()
```

##### `ResetMergeRequestsAccessLevel` <a name="ResetMergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsAccessLevel"></a>

```csharp
private void ResetMergeRequestsAccessLevel()
```

##### `ResetMergeRequestsEnabled` <a name="ResetMergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsEnabled"></a>

```csharp
private void ResetMergeRequestsEnabled()
```

##### `ResetMergeRequestsTemplate` <a name="ResetMergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.resetMergeRequestsTemplate"></a>

```csharp
private void ResetMergeRequestsTemplate()
```

##### `ResetMergeTrainsEnabled` <a name="ResetMergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.resetMergeTrainsEnabled"></a>

```csharp
private void ResetMergeTrainsEnabled()
```

##### `ResetMirror` <a name="ResetMirror" id="@cdktf/provider-gitlab.project.Project.resetMirror"></a>

```csharp
private void ResetMirror()
```

##### `ResetMirrorOverwritesDivergedBranches` <a name="ResetMirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.resetMirrorOverwritesDivergedBranches"></a>

```csharp
private void ResetMirrorOverwritesDivergedBranches()
```

##### `ResetMirrorTriggerBuilds` <a name="ResetMirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.resetMirrorTriggerBuilds"></a>

```csharp
private void ResetMirrorTriggerBuilds()
```

##### `ResetMonitorAccessLevel` <a name="ResetMonitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetMonitorAccessLevel"></a>

```csharp
private void ResetMonitorAccessLevel()
```

##### `ResetMrDefaultTargetSelf` <a name="ResetMrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.resetMrDefaultTargetSelf"></a>

```csharp
private void ResetMrDefaultTargetSelf()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-gitlab.project.Project.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetOnlyAllowMergeIfAllDiscussionsAreResolved` <a name="ResetOnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfAllDiscussionsAreResolved"></a>

```csharp
private void ResetOnlyAllowMergeIfAllDiscussionsAreResolved()
```

##### `ResetOnlyAllowMergeIfPipelineSucceeds` <a name="ResetOnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.resetOnlyAllowMergeIfPipelineSucceeds"></a>

```csharp
private void ResetOnlyAllowMergeIfPipelineSucceeds()
```

##### `ResetOnlyMirrorProtectedBranches` <a name="ResetOnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.resetOnlyMirrorProtectedBranches"></a>

```csharp
private void ResetOnlyMirrorProtectedBranches()
```

##### `ResetOperationsAccessLevel` <a name="ResetOperationsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetOperationsAccessLevel"></a>

```csharp
private void ResetOperationsAccessLevel()
```

##### `ResetPackagesEnabled` <a name="ResetPackagesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPackagesEnabled"></a>

```csharp
private void ResetPackagesEnabled()
```

##### `ResetPagesAccessLevel` <a name="ResetPagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetPagesAccessLevel"></a>

```csharp
private void ResetPagesAccessLevel()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-gitlab.project.Project.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPipelinesEnabled` <a name="ResetPipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.resetPipelinesEnabled"></a>

```csharp
private void ResetPipelinesEnabled()
```

##### `ResetPrintingMergeRequestLinkEnabled` <a name="ResetPrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.resetPrintingMergeRequestLinkEnabled"></a>

```csharp
private void ResetPrintingMergeRequestLinkEnabled()
```

##### `ResetPublicBuilds` <a name="ResetPublicBuilds" id="@cdktf/provider-gitlab.project.Project.resetPublicBuilds"></a>

```csharp
private void ResetPublicBuilds()
```

##### `ResetPushRules` <a name="ResetPushRules" id="@cdktf/provider-gitlab.project.Project.resetPushRules"></a>

```csharp
private void ResetPushRules()
```

##### `ResetReleasesAccessLevel` <a name="ResetReleasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetReleasesAccessLevel"></a>

```csharp
private void ResetReleasesAccessLevel()
```

##### `ResetRemoveSourceBranchAfterMerge` <a name="ResetRemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.resetRemoveSourceBranchAfterMerge"></a>

```csharp
private void ResetRemoveSourceBranchAfterMerge()
```

##### `ResetRepositoryAccessLevel` <a name="ResetRepositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRepositoryAccessLevel"></a>

```csharp
private void ResetRepositoryAccessLevel()
```

##### `ResetRepositoryStorage` <a name="ResetRepositoryStorage" id="@cdktf/provider-gitlab.project.Project.resetRepositoryStorage"></a>

```csharp
private void ResetRepositoryStorage()
```

##### `ResetRequestAccessEnabled` <a name="ResetRequestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.resetRequestAccessEnabled"></a>

```csharp
private void ResetRequestAccessEnabled()
```

##### `ResetRequirementsAccessLevel` <a name="ResetRequirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetRequirementsAccessLevel"></a>

```csharp
private void ResetRequirementsAccessLevel()
```

##### `ResetResolveOutdatedDiffDiscussions` <a name="ResetResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.resetResolveOutdatedDiffDiscussions"></a>

```csharp
private void ResetResolveOutdatedDiffDiscussions()
```

##### `ResetRestrictUserDefinedVariables` <a name="ResetRestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.resetRestrictUserDefinedVariables"></a>

```csharp
private void ResetRestrictUserDefinedVariables()
```

##### `ResetSecurityAndComplianceAccessLevel` <a name="ResetSecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSecurityAndComplianceAccessLevel"></a>

```csharp
private void ResetSecurityAndComplianceAccessLevel()
```

##### `ResetSharedRunnersEnabled` <a name="ResetSharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.resetSharedRunnersEnabled"></a>

```csharp
private void ResetSharedRunnersEnabled()
```

##### `ResetSkipWaitForDefaultBranchProtection` <a name="ResetSkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.resetSkipWaitForDefaultBranchProtection"></a>

```csharp
private void ResetSkipWaitForDefaultBranchProtection()
```

##### `ResetSnippetsAccessLevel` <a name="ResetSnippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetSnippetsAccessLevel"></a>

```csharp
private void ResetSnippetsAccessLevel()
```

##### `ResetSnippetsEnabled` <a name="ResetSnippetsEnabled" id="@cdktf/provider-gitlab.project.Project.resetSnippetsEnabled"></a>

```csharp
private void ResetSnippetsEnabled()
```

##### `ResetSquashCommitTemplate` <a name="ResetSquashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.resetSquashCommitTemplate"></a>

```csharp
private void ResetSquashCommitTemplate()
```

##### `ResetSquashOption` <a name="ResetSquashOption" id="@cdktf/provider-gitlab.project.Project.resetSquashOption"></a>

```csharp
private void ResetSquashOption()
```

##### `ResetSuggestionCommitMessage` <a name="ResetSuggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.resetSuggestionCommitMessage"></a>

```csharp
private void ResetSuggestionCommitMessage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-gitlab.project.Project.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktf/provider-gitlab.project.Project.resetTemplateName"></a>

```csharp
private void ResetTemplateName()
```

##### `ResetTemplateProjectId` <a name="ResetTemplateProjectId" id="@cdktf/provider-gitlab.project.Project.resetTemplateProjectId"></a>

```csharp
private void ResetTemplateProjectId()
```

##### `ResetTopics` <a name="ResetTopics" id="@cdktf/provider-gitlab.project.Project.resetTopics"></a>

```csharp
private void ResetTopics()
```

##### `ResetUseCustomTemplate` <a name="ResetUseCustomTemplate" id="@cdktf/provider-gitlab.project.Project.resetUseCustomTemplate"></a>

```csharp
private void ResetUseCustomTemplate()
```

##### `ResetVisibilityLevel` <a name="ResetVisibilityLevel" id="@cdktf/provider-gitlab.project.Project.resetVisibilityLevel"></a>

```csharp
private void ResetVisibilityLevel()
```

##### `ResetWikiAccessLevel` <a name="ResetWikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.resetWikiAccessLevel"></a>

```csharp
private void ResetWikiAccessLevel()
```

##### `ResetWikiEnabled` <a name="ResetWikiEnabled" id="@cdktf/provider-gitlab.project.Project.resetWikiEnabled"></a>

```csharp
private void ResetWikiEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.project.Project.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Project.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.project.Project.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.project.Project.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Project.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.project.Project.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.project.Project.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Project.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.project.Project.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy">ContainerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo">HttpUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathWithNamespace">PathWithNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.runnersToken">RunnersToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo">SshUrlToRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput">AllowMergeOnSkippedPipelineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput">AnalyticsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput">ApprovalsBeforeMergeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archivedInput">ArchivedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput">ArchiveOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput">AutoCancelPendingPipelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput">AutocloseReferencedIssuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput">AutoDevopsDeployStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput">AutoDevopsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHashInput">AvatarHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarInput">AvatarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput">BuildCoverageRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput">BuildGitStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput">BuildsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput">BuildTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput">CiConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput">CiDefaultGitDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput">CiForwardDeploymentEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput">CiSeparatedCachesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput">ContainerExpirationPolicyInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput">ContainerRegistryAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput">ContainerRegistryEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsDisabledInput">EmailsDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput">EnvironmentsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput">ExternalAuthorizationClassificationLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput">FeatureFlagsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput">ForkedFromProjectIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput">ForkingAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput">GroupWithProjectTemplatesIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlInput">ImportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput">ImportUrlPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput">ImportUrlUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput">InfrastructureAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput">InitializeWithReadmeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput">IssuesAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput">IssuesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput">IssuesTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput">KeepLatestArtifactInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput">LfsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput">MergeCommitTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethodInput">MergeMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput">MergePipelinesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput">MergeRequestsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput">MergeRequestsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput">MergeRequestsTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput">MergeTrainsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorInput">MirrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput">MirrorOverwritesDivergedBranchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput">MirrorTriggerBuildsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput">MonitorAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput">MrDefaultTargetSelfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput">OnlyAllowMergeIfAllDiscussionsAreResolvedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput">OnlyAllowMergeIfPipelineSucceedsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput">OnlyMirrorProtectedBranchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.operationsAccessLevelInput">OperationsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput">PackagesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput">PagesAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput">PipelinesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput">PrintingMergeRequestLinkEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuildsInput">PublicBuildsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pushRulesInput">PushRulesInput</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput">ReleasesAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput">RemoveSourceBranchAfterMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput">RepositoryAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput">RepositoryStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput">RequestAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput">RequirementsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput">ResolveOutdatedDiffDiscussionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput">RestrictUserDefinedVariablesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput">SecurityAndComplianceAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput">SharedRunnersEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput">SkipWaitForDefaultBranchProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput">SnippetsAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput">SnippetsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput">SquashCommitTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOptionInput">SquashOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput">SuggestionCommitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput">TemplateProjectIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topicsInput">TopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput">UseCustomTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput">VisibilityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput">WikiAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput">WikiEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline">AllowMergeOnSkippedPipeline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel">AnalyticsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge">ApprovalsBeforeMerge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archived">Archived</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines">AutoCancelPendingPipelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues">AutocloseReferencedIssues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy">AutoDevopsDeployStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatar">Avatar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.avatarHash">AvatarHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex">BuildCoverageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildGitStrategy">BuildGitStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel">BuildsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.buildTimeout">BuildTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciConfigPath">CiConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled">CiForwardDeploymentEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches">CiSeparatedCaches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel">ContainerRegistryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled">ContainerRegistryEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.emailsDisabled">EmailsDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel">EnvironmentsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel">ExternalAuthorizationClassificationLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel">FeatureFlagsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId">ForkedFromProjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel">ForkingAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId">GroupWithProjectTemplatesId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrl">ImportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlPassword">ImportUrlPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.importUrlUsername">ImportUrlUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel">InfrastructureAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.initializeWithReadme">InitializeWithReadme</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel">IssuesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesEnabled">IssuesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.issuesTemplate">IssuesTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.lfsEnabled">LfsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate">MergeCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeMethod">MergeMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled">MergePipelinesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel">MergeRequestsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled">MergeRequestsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate">MergeRequestsTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled">MergeTrainsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirror">Mirror</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches">MirrorOverwritesDivergedBranches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds">MirrorTriggerBuilds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel">MonitorAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf">MrDefaultTargetSelf</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.namespaceId">NamespaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved">OnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds">OnlyAllowMergeIfPipelineSucceeds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches">OnlyMirrorProtectedBranches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.operationsAccessLevel">OperationsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.packagesEnabled">PackagesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel">PagesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled">PipelinesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled">PrintingMergeRequestLinkEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.publicBuilds">PublicBuilds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel">ReleasesAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge">RemoveSourceBranchAfterMerge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel">RepositoryAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.repositoryStorage">RepositoryStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel">RequirementsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions">ResolveOutdatedDiffDiscussions</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables">RestrictUserDefinedVariables</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel">SecurityAndComplianceAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection">SkipWaitForDefaultBranchProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel">SnippetsAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.snippetsEnabled">SnippetsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate">SquashCommitTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.squashOption">SquashOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage">SuggestionCommitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.templateProjectId">TemplateProjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.topics">Topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.useCustomTemplate">UseCustomTemplate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.visibilityLevel">VisibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.wikiEnabled">WikiEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.project.Project.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.project.Project.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.project.Project.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.project.Project.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.project.Project.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.project.Project.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.project.Project.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.project.Project.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.project.Project.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.project.Project.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.project.Project.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.project.Project.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.project.Project.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.project.Project.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.project.Project.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `ContainerExpirationPolicy`<sup>Required</sup> <a name="ContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicy"></a>

```csharp
public ProjectContainerExpirationPolicyOutputReference ContainerExpirationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference">ProjectContainerExpirationPolicyOutputReference</a>

---

##### `HttpUrlToRepo`<sup>Required</sup> <a name="HttpUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.httpUrlToRepo"></a>

```csharp
public string HttpUrlToRepo { get; }
```

- *Type:* string

---

##### `PathWithNamespace`<sup>Required</sup> <a name="PathWithNamespace" id="@cdktf/provider-gitlab.project.Project.property.pathWithNamespace"></a>

```csharp
public string PathWithNamespace { get; }
```

- *Type:* string

---

##### `PushRules`<sup>Required</sup> <a name="PushRules" id="@cdktf/provider-gitlab.project.Project.property.pushRules"></a>

```csharp
public ProjectPushRulesOutputReference PushRules { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference">ProjectPushRulesOutputReference</a>

---

##### `RunnersToken`<sup>Required</sup> <a name="RunnersToken" id="@cdktf/provider-gitlab.project.Project.property.runnersToken"></a>

```csharp
public string RunnersToken { get; }
```

- *Type:* string

---

##### `SshUrlToRepo`<sup>Required</sup> <a name="SshUrlToRepo" id="@cdktf/provider-gitlab.project.Project.property.sshUrlToRepo"></a>

```csharp
public string SshUrlToRepo { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.project.Project.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `AllowMergeOnSkippedPipelineInput`<sup>Optional</sup> <a name="AllowMergeOnSkippedPipelineInput" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipelineInput"></a>

```csharp
public object AllowMergeOnSkippedPipelineInput { get; }
```

- *Type:* object

---

##### `AnalyticsAccessLevelInput`<sup>Optional</sup> <a name="AnalyticsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevelInput"></a>

```csharp
public string AnalyticsAccessLevelInput { get; }
```

- *Type:* string

---

##### `ApprovalsBeforeMergeInput`<sup>Optional</sup> <a name="ApprovalsBeforeMergeInput" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMergeInput"></a>

```csharp
public double ApprovalsBeforeMergeInput { get; }
```

- *Type:* double

---

##### `ArchivedInput`<sup>Optional</sup> <a name="ArchivedInput" id="@cdktf/provider-gitlab.project.Project.property.archivedInput"></a>

```csharp
public object ArchivedInput { get; }
```

- *Type:* object

---

##### `ArchiveOnDestroyInput`<sup>Optional</sup> <a name="ArchiveOnDestroyInput" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroyInput"></a>

```csharp
public object ArchiveOnDestroyInput { get; }
```

- *Type:* object

---

##### `AutoCancelPendingPipelinesInput`<sup>Optional</sup> <a name="AutoCancelPendingPipelinesInput" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelinesInput"></a>

```csharp
public string AutoCancelPendingPipelinesInput { get; }
```

- *Type:* string

---

##### `AutocloseReferencedIssuesInput`<sup>Optional</sup> <a name="AutocloseReferencedIssuesInput" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssuesInput"></a>

```csharp
public object AutocloseReferencedIssuesInput { get; }
```

- *Type:* object

---

##### `AutoDevopsDeployStrategyInput`<sup>Optional</sup> <a name="AutoDevopsDeployStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategyInput"></a>

```csharp
public string AutoDevopsDeployStrategyInput { get; }
```

- *Type:* string

---

##### `AutoDevopsEnabledInput`<sup>Optional</sup> <a name="AutoDevopsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabledInput"></a>

```csharp
public object AutoDevopsEnabledInput { get; }
```

- *Type:* object

---

##### `AvatarHashInput`<sup>Optional</sup> <a name="AvatarHashInput" id="@cdktf/provider-gitlab.project.Project.property.avatarHashInput"></a>

```csharp
public string AvatarHashInput { get; }
```

- *Type:* string

---

##### `AvatarInput`<sup>Optional</sup> <a name="AvatarInput" id="@cdktf/provider-gitlab.project.Project.property.avatarInput"></a>

```csharp
public string AvatarInput { get; }
```

- *Type:* string

---

##### `BuildCoverageRegexInput`<sup>Optional</sup> <a name="BuildCoverageRegexInput" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegexInput"></a>

```csharp
public string BuildCoverageRegexInput { get; }
```

- *Type:* string

---

##### `BuildGitStrategyInput`<sup>Optional</sup> <a name="BuildGitStrategyInput" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategyInput"></a>

```csharp
public string BuildGitStrategyInput { get; }
```

- *Type:* string

---

##### `BuildsAccessLevelInput`<sup>Optional</sup> <a name="BuildsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevelInput"></a>

```csharp
public string BuildsAccessLevelInput { get; }
```

- *Type:* string

---

##### `BuildTimeoutInput`<sup>Optional</sup> <a name="BuildTimeoutInput" id="@cdktf/provider-gitlab.project.Project.property.buildTimeoutInput"></a>

```csharp
public double BuildTimeoutInput { get; }
```

- *Type:* double

---

##### `CiConfigPathInput`<sup>Optional</sup> <a name="CiConfigPathInput" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPathInput"></a>

```csharp
public string CiConfigPathInput { get; }
```

- *Type:* string

---

##### `CiDefaultGitDepthInput`<sup>Optional</sup> <a name="CiDefaultGitDepthInput" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepthInput"></a>

```csharp
public double CiDefaultGitDepthInput { get; }
```

- *Type:* double

---

##### `CiForwardDeploymentEnabledInput`<sup>Optional</sup> <a name="CiForwardDeploymentEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabledInput"></a>

```csharp
public object CiForwardDeploymentEnabledInput { get; }
```

- *Type:* object

---

##### `CiSeparatedCachesInput`<sup>Optional</sup> <a name="CiSeparatedCachesInput" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCachesInput"></a>

```csharp
public object CiSeparatedCachesInput { get; }
```

- *Type:* object

---

##### `ContainerExpirationPolicyInput`<sup>Optional</sup> <a name="ContainerExpirationPolicyInput" id="@cdktf/provider-gitlab.project.Project.property.containerExpirationPolicyInput"></a>

```csharp
public ProjectContainerExpirationPolicy ContainerExpirationPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---

##### `ContainerRegistryAccessLevelInput`<sup>Optional</sup> <a name="ContainerRegistryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevelInput"></a>

```csharp
public string ContainerRegistryAccessLevelInput { get; }
```

- *Type:* string

---

##### `ContainerRegistryEnabledInput`<sup>Optional</sup> <a name="ContainerRegistryEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabledInput"></a>

```csharp
public object ContainerRegistryEnabledInput { get; }
```

- *Type:* object

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-gitlab.project.Project.property.defaultBranchInput"></a>

```csharp
public string DefaultBranchInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.project.Project.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailsDisabledInput`<sup>Optional</sup> <a name="EmailsDisabledInput" id="@cdktf/provider-gitlab.project.Project.property.emailsDisabledInput"></a>

```csharp
public object EmailsDisabledInput { get; }
```

- *Type:* object

---

##### `EnvironmentsAccessLevelInput`<sup>Optional</sup> <a name="EnvironmentsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevelInput"></a>

```csharp
public string EnvironmentsAccessLevelInput { get; }
```

- *Type:* string

---

##### `ExternalAuthorizationClassificationLabelInput`<sup>Optional</sup> <a name="ExternalAuthorizationClassificationLabelInput" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabelInput"></a>

```csharp
public string ExternalAuthorizationClassificationLabelInput { get; }
```

- *Type:* string

---

##### `FeatureFlagsAccessLevelInput`<sup>Optional</sup> <a name="FeatureFlagsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevelInput"></a>

```csharp
public string FeatureFlagsAccessLevelInput { get; }
```

- *Type:* string

---

##### `ForkedFromProjectIdInput`<sup>Optional</sup> <a name="ForkedFromProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectIdInput"></a>

```csharp
public double ForkedFromProjectIdInput { get; }
```

- *Type:* double

---

##### `ForkingAccessLevelInput`<sup>Optional</sup> <a name="ForkingAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevelInput"></a>

```csharp
public string ForkingAccessLevelInput { get; }
```

- *Type:* string

---

##### `GroupWithProjectTemplatesIdInput`<sup>Optional</sup> <a name="GroupWithProjectTemplatesIdInput" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesIdInput"></a>

```csharp
public double GroupWithProjectTemplatesIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.project.Project.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportUrlInput`<sup>Optional</sup> <a name="ImportUrlInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlInput"></a>

```csharp
public string ImportUrlInput { get; }
```

- *Type:* string

---

##### `ImportUrlPasswordInput`<sup>Optional</sup> <a name="ImportUrlPasswordInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlPasswordInput"></a>

```csharp
public string ImportUrlPasswordInput { get; }
```

- *Type:* string

---

##### `ImportUrlUsernameInput`<sup>Optional</sup> <a name="ImportUrlUsernameInput" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsernameInput"></a>

```csharp
public string ImportUrlUsernameInput { get; }
```

- *Type:* string

---

##### `InfrastructureAccessLevelInput`<sup>Optional</sup> <a name="InfrastructureAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevelInput"></a>

```csharp
public string InfrastructureAccessLevelInput { get; }
```

- *Type:* string

---

##### `InitializeWithReadmeInput`<sup>Optional</sup> <a name="InitializeWithReadmeInput" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadmeInput"></a>

```csharp
public object InitializeWithReadmeInput { get; }
```

- *Type:* object

---

##### `IssuesAccessLevelInput`<sup>Optional</sup> <a name="IssuesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevelInput"></a>

```csharp
public string IssuesAccessLevelInput { get; }
```

- *Type:* string

---

##### `IssuesEnabledInput`<sup>Optional</sup> <a name="IssuesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabledInput"></a>

```csharp
public object IssuesEnabledInput { get; }
```

- *Type:* object

---

##### `IssuesTemplateInput`<sup>Optional</sup> <a name="IssuesTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplateInput"></a>

```csharp
public string IssuesTemplateInput { get; }
```

- *Type:* string

---

##### `KeepLatestArtifactInput`<sup>Optional</sup> <a name="KeepLatestArtifactInput" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifactInput"></a>

```csharp
public object KeepLatestArtifactInput { get; }
```

- *Type:* object

---

##### `LfsEnabledInput`<sup>Optional</sup> <a name="LfsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabledInput"></a>

```csharp
public object LfsEnabledInput { get; }
```

- *Type:* object

---

##### `MergeCommitTemplateInput`<sup>Optional</sup> <a name="MergeCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplateInput"></a>

```csharp
public string MergeCommitTemplateInput { get; }
```

- *Type:* string

---

##### `MergeMethodInput`<sup>Optional</sup> <a name="MergeMethodInput" id="@cdktf/provider-gitlab.project.Project.property.mergeMethodInput"></a>

```csharp
public string MergeMethodInput { get; }
```

- *Type:* string

---

##### `MergePipelinesEnabledInput`<sup>Optional</sup> <a name="MergePipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabledInput"></a>

```csharp
public object MergePipelinesEnabledInput { get; }
```

- *Type:* object

---

##### `MergeRequestsAccessLevelInput`<sup>Optional</sup> <a name="MergeRequestsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevelInput"></a>

```csharp
public string MergeRequestsAccessLevelInput { get; }
```

- *Type:* string

---

##### `MergeRequestsEnabledInput`<sup>Optional</sup> <a name="MergeRequestsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabledInput"></a>

```csharp
public object MergeRequestsEnabledInput { get; }
```

- *Type:* object

---

##### `MergeRequestsTemplateInput`<sup>Optional</sup> <a name="MergeRequestsTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplateInput"></a>

```csharp
public string MergeRequestsTemplateInput { get; }
```

- *Type:* string

---

##### `MergeTrainsEnabledInput`<sup>Optional</sup> <a name="MergeTrainsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabledInput"></a>

```csharp
public object MergeTrainsEnabledInput { get; }
```

- *Type:* object

---

##### `MirrorInput`<sup>Optional</sup> <a name="MirrorInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorInput"></a>

```csharp
public object MirrorInput { get; }
```

- *Type:* object

---

##### `MirrorOverwritesDivergedBranchesInput`<sup>Optional</sup> <a name="MirrorOverwritesDivergedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranchesInput"></a>

```csharp
public object MirrorOverwritesDivergedBranchesInput { get; }
```

- *Type:* object

---

##### `MirrorTriggerBuildsInput`<sup>Optional</sup> <a name="MirrorTriggerBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuildsInput"></a>

```csharp
public object MirrorTriggerBuildsInput { get; }
```

- *Type:* object

---

##### `MonitorAccessLevelInput`<sup>Optional</sup> <a name="MonitorAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevelInput"></a>

```csharp
public string MonitorAccessLevelInput { get; }
```

- *Type:* string

---

##### `MrDefaultTargetSelfInput`<sup>Optional</sup> <a name="MrDefaultTargetSelfInput" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelfInput"></a>

```csharp
public object MrDefaultTargetSelfInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.project.Project.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-gitlab.project.Project.property.namespaceIdInput"></a>

```csharp
public double NamespaceIdInput { get; }
```

- *Type:* double

---

##### `OnlyAllowMergeIfAllDiscussionsAreResolvedInput`<sup>Optional</sup> <a name="OnlyAllowMergeIfAllDiscussionsAreResolvedInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolvedInput"></a>

```csharp
public object OnlyAllowMergeIfAllDiscussionsAreResolvedInput { get; }
```

- *Type:* object

---

##### `OnlyAllowMergeIfPipelineSucceedsInput`<sup>Optional</sup> <a name="OnlyAllowMergeIfPipelineSucceedsInput" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceedsInput"></a>

```csharp
public object OnlyAllowMergeIfPipelineSucceedsInput { get; }
```

- *Type:* object

---

##### `OnlyMirrorProtectedBranchesInput`<sup>Optional</sup> <a name="OnlyMirrorProtectedBranchesInput" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranchesInput"></a>

```csharp
public object OnlyMirrorProtectedBranchesInput { get; }
```

- *Type:* object

---

##### `OperationsAccessLevelInput`<sup>Optional</sup> <a name="OperationsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.operationsAccessLevelInput"></a>

```csharp
public string OperationsAccessLevelInput { get; }
```

- *Type:* string

---

##### `PackagesEnabledInput`<sup>Optional</sup> <a name="PackagesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabledInput"></a>

```csharp
public object PackagesEnabledInput { get; }
```

- *Type:* object

---

##### `PagesAccessLevelInput`<sup>Optional</sup> <a name="PagesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevelInput"></a>

```csharp
public string PagesAccessLevelInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-gitlab.project.Project.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PipelinesEnabledInput`<sup>Optional</sup> <a name="PipelinesEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabledInput"></a>

```csharp
public object PipelinesEnabledInput { get; }
```

- *Type:* object

---

##### `PrintingMergeRequestLinkEnabledInput`<sup>Optional</sup> <a name="PrintingMergeRequestLinkEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabledInput"></a>

```csharp
public object PrintingMergeRequestLinkEnabledInput { get; }
```

- *Type:* object

---

##### `PublicBuildsInput`<sup>Optional</sup> <a name="PublicBuildsInput" id="@cdktf/provider-gitlab.project.Project.property.publicBuildsInput"></a>

```csharp
public object PublicBuildsInput { get; }
```

- *Type:* object

---

##### `PushRulesInput`<sup>Optional</sup> <a name="PushRulesInput" id="@cdktf/provider-gitlab.project.Project.property.pushRulesInput"></a>

```csharp
public ProjectPushRules PushRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---

##### `ReleasesAccessLevelInput`<sup>Optional</sup> <a name="ReleasesAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevelInput"></a>

```csharp
public string ReleasesAccessLevelInput { get; }
```

- *Type:* string

---

##### `RemoveSourceBranchAfterMergeInput`<sup>Optional</sup> <a name="RemoveSourceBranchAfterMergeInput" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMergeInput"></a>

```csharp
public object RemoveSourceBranchAfterMergeInput { get; }
```

- *Type:* object

---

##### `RepositoryAccessLevelInput`<sup>Optional</sup> <a name="RepositoryAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevelInput"></a>

```csharp
public string RepositoryAccessLevelInput { get; }
```

- *Type:* string

---

##### `RepositoryStorageInput`<sup>Optional</sup> <a name="RepositoryStorageInput" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorageInput"></a>

```csharp
public string RepositoryStorageInput { get; }
```

- *Type:* string

---

##### `RequestAccessEnabledInput`<sup>Optional</sup> <a name="RequestAccessEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabledInput"></a>

```csharp
public object RequestAccessEnabledInput { get; }
```

- *Type:* object

---

##### `RequirementsAccessLevelInput`<sup>Optional</sup> <a name="RequirementsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevelInput"></a>

```csharp
public string RequirementsAccessLevelInput { get; }
```

- *Type:* string

---

##### `ResolveOutdatedDiffDiscussionsInput`<sup>Optional</sup> <a name="ResolveOutdatedDiffDiscussionsInput" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussionsInput"></a>

```csharp
public object ResolveOutdatedDiffDiscussionsInput { get; }
```

- *Type:* object

---

##### `RestrictUserDefinedVariablesInput`<sup>Optional</sup> <a name="RestrictUserDefinedVariablesInput" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariablesInput"></a>

```csharp
public object RestrictUserDefinedVariablesInput { get; }
```

- *Type:* object

---

##### `SecurityAndComplianceAccessLevelInput`<sup>Optional</sup> <a name="SecurityAndComplianceAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevelInput"></a>

```csharp
public string SecurityAndComplianceAccessLevelInput { get; }
```

- *Type:* string

---

##### `SharedRunnersEnabledInput`<sup>Optional</sup> <a name="SharedRunnersEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabledInput"></a>

```csharp
public object SharedRunnersEnabledInput { get; }
```

- *Type:* object

---

##### `SkipWaitForDefaultBranchProtectionInput`<sup>Optional</sup> <a name="SkipWaitForDefaultBranchProtectionInput" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtectionInput"></a>

```csharp
public object SkipWaitForDefaultBranchProtectionInput { get; }
```

- *Type:* object

---

##### `SnippetsAccessLevelInput`<sup>Optional</sup> <a name="SnippetsAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevelInput"></a>

```csharp
public string SnippetsAccessLevelInput { get; }
```

- *Type:* string

---

##### `SnippetsEnabledInput`<sup>Optional</sup> <a name="SnippetsEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabledInput"></a>

```csharp
public object SnippetsEnabledInput { get; }
```

- *Type:* object

---

##### `SquashCommitTemplateInput`<sup>Optional</sup> <a name="SquashCommitTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplateInput"></a>

```csharp
public string SquashCommitTemplateInput { get; }
```

- *Type:* string

---

##### `SquashOptionInput`<sup>Optional</sup> <a name="SquashOptionInput" id="@cdktf/provider-gitlab.project.Project.property.squashOptionInput"></a>

```csharp
public string SquashOptionInput { get; }
```

- *Type:* string

---

##### `SuggestionCommitMessageInput`<sup>Optional</sup> <a name="SuggestionCommitMessageInput" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessageInput"></a>

```csharp
public string SuggestionCommitMessageInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-gitlab.project.Project.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktf/provider-gitlab.project.Project.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `TemplateProjectIdInput`<sup>Optional</sup> <a name="TemplateProjectIdInput" id="@cdktf/provider-gitlab.project.Project.property.templateProjectIdInput"></a>

```csharp
public double TemplateProjectIdInput { get; }
```

- *Type:* double

---

##### `TopicsInput`<sup>Optional</sup> <a name="TopicsInput" id="@cdktf/provider-gitlab.project.Project.property.topicsInput"></a>

```csharp
public string[] TopicsInput { get; }
```

- *Type:* string[]

---

##### `UseCustomTemplateInput`<sup>Optional</sup> <a name="UseCustomTemplateInput" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplateInput"></a>

```csharp
public object UseCustomTemplateInput { get; }
```

- *Type:* object

---

##### `VisibilityLevelInput`<sup>Optional</sup> <a name="VisibilityLevelInput" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevelInput"></a>

```csharp
public string VisibilityLevelInput { get; }
```

- *Type:* string

---

##### `WikiAccessLevelInput`<sup>Optional</sup> <a name="WikiAccessLevelInput" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevelInput"></a>

```csharp
public string WikiAccessLevelInput { get; }
```

- *Type:* string

---

##### `WikiEnabledInput`<sup>Optional</sup> <a name="WikiEnabledInput" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabledInput"></a>

```csharp
public object WikiEnabledInput { get; }
```

- *Type:* object

---

##### `AllowMergeOnSkippedPipeline`<sup>Required</sup> <a name="AllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.Project.property.allowMergeOnSkippedPipeline"></a>

```csharp
public object AllowMergeOnSkippedPipeline { get; }
```

- *Type:* object

---

##### `AnalyticsAccessLevel`<sup>Required</sup> <a name="AnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.analyticsAccessLevel"></a>

```csharp
public string AnalyticsAccessLevel { get; }
```

- *Type:* string

---

##### `ApprovalsBeforeMerge`<sup>Required</sup> <a name="ApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.Project.property.approvalsBeforeMerge"></a>

```csharp
public double ApprovalsBeforeMerge { get; }
```

- *Type:* double

---

##### `Archived`<sup>Required</sup> <a name="Archived" id="@cdktf/provider-gitlab.project.Project.property.archived"></a>

```csharp
public object Archived { get; }
```

- *Type:* object

---

##### `ArchiveOnDestroy`<sup>Required</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-gitlab.project.Project.property.archiveOnDestroy"></a>

```csharp
public object ArchiveOnDestroy { get; }
```

- *Type:* object

---

##### `AutoCancelPendingPipelines`<sup>Required</sup> <a name="AutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.Project.property.autoCancelPendingPipelines"></a>

```csharp
public string AutoCancelPendingPipelines { get; }
```

- *Type:* string

---

##### `AutocloseReferencedIssues`<sup>Required</sup> <a name="AutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.Project.property.autocloseReferencedIssues"></a>

```csharp
public object AutocloseReferencedIssues { get; }
```

- *Type:* object

---

##### `AutoDevopsDeployStrategy`<sup>Required</sup> <a name="AutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsDeployStrategy"></a>

```csharp
public string AutoDevopsDeployStrategy { get; }
```

- *Type:* string

---

##### `AutoDevopsEnabled`<sup>Required</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.project.Project.property.autoDevopsEnabled"></a>

```csharp
public object AutoDevopsEnabled { get; }
```

- *Type:* object

---

##### `Avatar`<sup>Required</sup> <a name="Avatar" id="@cdktf/provider-gitlab.project.Project.property.avatar"></a>

```csharp
public string Avatar { get; }
```

- *Type:* string

---

##### `AvatarHash`<sup>Required</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.project.Project.property.avatarHash"></a>

```csharp
public string AvatarHash { get; }
```

- *Type:* string

---

##### `BuildCoverageRegex`<sup>Required</sup> <a name="BuildCoverageRegex" id="@cdktf/provider-gitlab.project.Project.property.buildCoverageRegex"></a>

```csharp
public string BuildCoverageRegex { get; }
```

- *Type:* string

---

##### `BuildGitStrategy`<sup>Required</sup> <a name="BuildGitStrategy" id="@cdktf/provider-gitlab.project.Project.property.buildGitStrategy"></a>

```csharp
public string BuildGitStrategy { get; }
```

- *Type:* string

---

##### `BuildsAccessLevel`<sup>Required</sup> <a name="BuildsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.buildsAccessLevel"></a>

```csharp
public string BuildsAccessLevel { get; }
```

- *Type:* string

---

##### `BuildTimeout`<sup>Required</sup> <a name="BuildTimeout" id="@cdktf/provider-gitlab.project.Project.property.buildTimeout"></a>

```csharp
public double BuildTimeout { get; }
```

- *Type:* double

---

##### `CiConfigPath`<sup>Required</sup> <a name="CiConfigPath" id="@cdktf/provider-gitlab.project.Project.property.ciConfigPath"></a>

```csharp
public string CiConfigPath { get; }
```

- *Type:* string

---

##### `CiDefaultGitDepth`<sup>Required</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.project.Project.property.ciDefaultGitDepth"></a>

```csharp
public double CiDefaultGitDepth { get; }
```

- *Type:* double

---

##### `CiForwardDeploymentEnabled`<sup>Required</sup> <a name="CiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.Project.property.ciForwardDeploymentEnabled"></a>

```csharp
public object CiForwardDeploymentEnabled { get; }
```

- *Type:* object

---

##### `CiSeparatedCaches`<sup>Required</sup> <a name="CiSeparatedCaches" id="@cdktf/provider-gitlab.project.Project.property.ciSeparatedCaches"></a>

```csharp
public object CiSeparatedCaches { get; }
```

- *Type:* object

---

##### `ContainerRegistryAccessLevel`<sup>Required</sup> <a name="ContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryAccessLevel"></a>

```csharp
public string ContainerRegistryAccessLevel { get; }
```

- *Type:* string

---

##### `ContainerRegistryEnabled`<sup>Required</sup> <a name="ContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.Project.property.containerRegistryEnabled"></a>

```csharp
public object ContainerRegistryEnabled { get; }
```

- *Type:* object

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.project.Project.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.project.Project.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EmailsDisabled`<sup>Required</sup> <a name="EmailsDisabled" id="@cdktf/provider-gitlab.project.Project.property.emailsDisabled"></a>

```csharp
public object EmailsDisabled { get; }
```

- *Type:* object

---

##### `EnvironmentsAccessLevel`<sup>Required</sup> <a name="EnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.environmentsAccessLevel"></a>

```csharp
public string EnvironmentsAccessLevel { get; }
```

- *Type:* string

---

##### `ExternalAuthorizationClassificationLabel`<sup>Required</sup> <a name="ExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.Project.property.externalAuthorizationClassificationLabel"></a>

```csharp
public string ExternalAuthorizationClassificationLabel { get; }
```

- *Type:* string

---

##### `FeatureFlagsAccessLevel`<sup>Required</sup> <a name="FeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.featureFlagsAccessLevel"></a>

```csharp
public string FeatureFlagsAccessLevel { get; }
```

- *Type:* string

---

##### `ForkedFromProjectId`<sup>Required</sup> <a name="ForkedFromProjectId" id="@cdktf/provider-gitlab.project.Project.property.forkedFromProjectId"></a>

```csharp
public double ForkedFromProjectId { get; }
```

- *Type:* double

---

##### `ForkingAccessLevel`<sup>Required</sup> <a name="ForkingAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.forkingAccessLevel"></a>

```csharp
public string ForkingAccessLevel { get; }
```

- *Type:* string

---

##### `GroupWithProjectTemplatesId`<sup>Required</sup> <a name="GroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.Project.property.groupWithProjectTemplatesId"></a>

```csharp
public double GroupWithProjectTemplatesId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.project.Project.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportUrl`<sup>Required</sup> <a name="ImportUrl" id="@cdktf/provider-gitlab.project.Project.property.importUrl"></a>

```csharp
public string ImportUrl { get; }
```

- *Type:* string

---

##### `ImportUrlPassword`<sup>Required</sup> <a name="ImportUrlPassword" id="@cdktf/provider-gitlab.project.Project.property.importUrlPassword"></a>

```csharp
public string ImportUrlPassword { get; }
```

- *Type:* string

---

##### `ImportUrlUsername`<sup>Required</sup> <a name="ImportUrlUsername" id="@cdktf/provider-gitlab.project.Project.property.importUrlUsername"></a>

```csharp
public string ImportUrlUsername { get; }
```

- *Type:* string

---

##### `InfrastructureAccessLevel`<sup>Required</sup> <a name="InfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.infrastructureAccessLevel"></a>

```csharp
public string InfrastructureAccessLevel { get; }
```

- *Type:* string

---

##### `InitializeWithReadme`<sup>Required</sup> <a name="InitializeWithReadme" id="@cdktf/provider-gitlab.project.Project.property.initializeWithReadme"></a>

```csharp
public object InitializeWithReadme { get; }
```

- *Type:* object

---

##### `IssuesAccessLevel`<sup>Required</sup> <a name="IssuesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.issuesAccessLevel"></a>

```csharp
public string IssuesAccessLevel { get; }
```

- *Type:* string

---

##### `IssuesEnabled`<sup>Required</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.project.Project.property.issuesEnabled"></a>

```csharp
public object IssuesEnabled { get; }
```

- *Type:* object

---

##### `IssuesTemplate`<sup>Required</sup> <a name="IssuesTemplate" id="@cdktf/provider-gitlab.project.Project.property.issuesTemplate"></a>

```csharp
public string IssuesTemplate { get; }
```

- *Type:* string

---

##### `KeepLatestArtifact`<sup>Required</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.project.Project.property.keepLatestArtifact"></a>

```csharp
public object KeepLatestArtifact { get; }
```

- *Type:* object

---

##### `LfsEnabled`<sup>Required</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.project.Project.property.lfsEnabled"></a>

```csharp
public object LfsEnabled { get; }
```

- *Type:* object

---

##### `MergeCommitTemplate`<sup>Required</sup> <a name="MergeCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeCommitTemplate"></a>

```csharp
public string MergeCommitTemplate { get; }
```

- *Type:* string

---

##### `MergeMethod`<sup>Required</sup> <a name="MergeMethod" id="@cdktf/provider-gitlab.project.Project.property.mergeMethod"></a>

```csharp
public string MergeMethod { get; }
```

- *Type:* string

---

##### `MergePipelinesEnabled`<sup>Required</sup> <a name="MergePipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergePipelinesEnabled"></a>

```csharp
public object MergePipelinesEnabled { get; }
```

- *Type:* object

---

##### `MergeRequestsAccessLevel`<sup>Required</sup> <a name="MergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsAccessLevel"></a>

```csharp
public string MergeRequestsAccessLevel { get; }
```

- *Type:* string

---

##### `MergeRequestsEnabled`<sup>Required</sup> <a name="MergeRequestsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsEnabled"></a>

```csharp
public object MergeRequestsEnabled { get; }
```

- *Type:* object

---

##### `MergeRequestsTemplate`<sup>Required</sup> <a name="MergeRequestsTemplate" id="@cdktf/provider-gitlab.project.Project.property.mergeRequestsTemplate"></a>

```csharp
public string MergeRequestsTemplate { get; }
```

- *Type:* string

---

##### `MergeTrainsEnabled`<sup>Required</sup> <a name="MergeTrainsEnabled" id="@cdktf/provider-gitlab.project.Project.property.mergeTrainsEnabled"></a>

```csharp
public object MergeTrainsEnabled { get; }
```

- *Type:* object

---

##### `Mirror`<sup>Required</sup> <a name="Mirror" id="@cdktf/provider-gitlab.project.Project.property.mirror"></a>

```csharp
public object Mirror { get; }
```

- *Type:* object

---

##### `MirrorOverwritesDivergedBranches`<sup>Required</sup> <a name="MirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.Project.property.mirrorOverwritesDivergedBranches"></a>

```csharp
public object MirrorOverwritesDivergedBranches { get; }
```

- *Type:* object

---

##### `MirrorTriggerBuilds`<sup>Required</sup> <a name="MirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.Project.property.mirrorTriggerBuilds"></a>

```csharp
public object MirrorTriggerBuilds { get; }
```

- *Type:* object

---

##### `MonitorAccessLevel`<sup>Required</sup> <a name="MonitorAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.monitorAccessLevel"></a>

```csharp
public string MonitorAccessLevel { get; }
```

- *Type:* string

---

##### `MrDefaultTargetSelf`<sup>Required</sup> <a name="MrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.Project.property.mrDefaultTargetSelf"></a>

```csharp
public object MrDefaultTargetSelf { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.project.Project.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.project.Project.property.namespaceId"></a>

```csharp
public double NamespaceId { get; }
```

- *Type:* double

---

##### `OnlyAllowMergeIfAllDiscussionsAreResolved`<sup>Required</sup> <a name="OnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```csharp
public object OnlyAllowMergeIfAllDiscussionsAreResolved { get; }
```

- *Type:* object

---

##### `OnlyAllowMergeIfPipelineSucceeds`<sup>Required</sup> <a name="OnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.Project.property.onlyAllowMergeIfPipelineSucceeds"></a>

```csharp
public object OnlyAllowMergeIfPipelineSucceeds { get; }
```

- *Type:* object

---

##### `OnlyMirrorProtectedBranches`<sup>Required</sup> <a name="OnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.Project.property.onlyMirrorProtectedBranches"></a>

```csharp
public object OnlyMirrorProtectedBranches { get; }
```

- *Type:* object

---

##### `OperationsAccessLevel`<sup>Required</sup> <a name="OperationsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.operationsAccessLevel"></a>

```csharp
public string OperationsAccessLevel { get; }
```

- *Type:* string

---

##### `PackagesEnabled`<sup>Required</sup> <a name="PackagesEnabled" id="@cdktf/provider-gitlab.project.Project.property.packagesEnabled"></a>

```csharp
public object PackagesEnabled { get; }
```

- *Type:* object

---

##### `PagesAccessLevel`<sup>Required</sup> <a name="PagesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.pagesAccessLevel"></a>

```csharp
public string PagesAccessLevel { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.project.Project.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PipelinesEnabled`<sup>Required</sup> <a name="PipelinesEnabled" id="@cdktf/provider-gitlab.project.Project.property.pipelinesEnabled"></a>

```csharp
public object PipelinesEnabled { get; }
```

- *Type:* object

---

##### `PrintingMergeRequestLinkEnabled`<sup>Required</sup> <a name="PrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.Project.property.printingMergeRequestLinkEnabled"></a>

```csharp
public object PrintingMergeRequestLinkEnabled { get; }
```

- *Type:* object

---

##### `PublicBuilds`<sup>Required</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.project.Project.property.publicBuilds"></a>

```csharp
public object PublicBuilds { get; }
```

- *Type:* object

---

##### `ReleasesAccessLevel`<sup>Required</sup> <a name="ReleasesAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.releasesAccessLevel"></a>

```csharp
public string ReleasesAccessLevel { get; }
```

- *Type:* string

---

##### `RemoveSourceBranchAfterMerge`<sup>Required</sup> <a name="RemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.Project.property.removeSourceBranchAfterMerge"></a>

```csharp
public object RemoveSourceBranchAfterMerge { get; }
```

- *Type:* object

---

##### `RepositoryAccessLevel`<sup>Required</sup> <a name="RepositoryAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.repositoryAccessLevel"></a>

```csharp
public string RepositoryAccessLevel { get; }
```

- *Type:* string

---

##### `RepositoryStorage`<sup>Required</sup> <a name="RepositoryStorage" id="@cdktf/provider-gitlab.project.Project.property.repositoryStorage"></a>

```csharp
public string RepositoryStorage { get; }
```

- *Type:* string

---

##### `RequestAccessEnabled`<sup>Required</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.project.Project.property.requestAccessEnabled"></a>

```csharp
public object RequestAccessEnabled { get; }
```

- *Type:* object

---

##### `RequirementsAccessLevel`<sup>Required</sup> <a name="RequirementsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.requirementsAccessLevel"></a>

```csharp
public string RequirementsAccessLevel { get; }
```

- *Type:* string

---

##### `ResolveOutdatedDiffDiscussions`<sup>Required</sup> <a name="ResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.Project.property.resolveOutdatedDiffDiscussions"></a>

```csharp
public object ResolveOutdatedDiffDiscussions { get; }
```

- *Type:* object

---

##### `RestrictUserDefinedVariables`<sup>Required</sup> <a name="RestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.Project.property.restrictUserDefinedVariables"></a>

```csharp
public object RestrictUserDefinedVariables { get; }
```

- *Type:* object

---

##### `SecurityAndComplianceAccessLevel`<sup>Required</sup> <a name="SecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.securityAndComplianceAccessLevel"></a>

```csharp
public string SecurityAndComplianceAccessLevel { get; }
```

- *Type:* string

---

##### `SharedRunnersEnabled`<sup>Required</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.project.Project.property.sharedRunnersEnabled"></a>

```csharp
public object SharedRunnersEnabled { get; }
```

- *Type:* object

---

##### `SkipWaitForDefaultBranchProtection`<sup>Required</sup> <a name="SkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.Project.property.skipWaitForDefaultBranchProtection"></a>

```csharp
public object SkipWaitForDefaultBranchProtection { get; }
```

- *Type:* object

---

##### `SnippetsAccessLevel`<sup>Required</sup> <a name="SnippetsAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.snippetsAccessLevel"></a>

```csharp
public string SnippetsAccessLevel { get; }
```

- *Type:* string

---

##### `SnippetsEnabled`<sup>Required</sup> <a name="SnippetsEnabled" id="@cdktf/provider-gitlab.project.Project.property.snippetsEnabled"></a>

```csharp
public object SnippetsEnabled { get; }
```

- *Type:* object

---

##### `SquashCommitTemplate`<sup>Required</sup> <a name="SquashCommitTemplate" id="@cdktf/provider-gitlab.project.Project.property.squashCommitTemplate"></a>

```csharp
public string SquashCommitTemplate { get; }
```

- *Type:* string

---

##### `SquashOption`<sup>Required</sup> <a name="SquashOption" id="@cdktf/provider-gitlab.project.Project.property.squashOption"></a>

```csharp
public string SquashOption { get; }
```

- *Type:* string

---

##### `SuggestionCommitMessage`<sup>Required</sup> <a name="SuggestionCommitMessage" id="@cdktf/provider-gitlab.project.Project.property.suggestionCommitMessage"></a>

```csharp
public string SuggestionCommitMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-gitlab.project.Project.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-gitlab.project.Project.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `TemplateProjectId`<sup>Required</sup> <a name="TemplateProjectId" id="@cdktf/provider-gitlab.project.Project.property.templateProjectId"></a>

```csharp
public double TemplateProjectId { get; }
```

- *Type:* double

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-gitlab.project.Project.property.topics"></a>

```csharp
public string[] Topics { get; }
```

- *Type:* string[]

---

##### `UseCustomTemplate`<sup>Required</sup> <a name="UseCustomTemplate" id="@cdktf/provider-gitlab.project.Project.property.useCustomTemplate"></a>

```csharp
public object UseCustomTemplate { get; }
```

- *Type:* object

---

##### `VisibilityLevel`<sup>Required</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.project.Project.property.visibilityLevel"></a>

```csharp
public string VisibilityLevel { get; }
```

- *Type:* string

---

##### `WikiAccessLevel`<sup>Required</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.project.Project.property.wikiAccessLevel"></a>

```csharp
public string WikiAccessLevel { get; }
```

- *Type:* string

---

##### `WikiEnabled`<sup>Required</sup> <a name="WikiEnabled" id="@cdktf/provider-gitlab.project.Project.property.wikiEnabled"></a>

```csharp
public object WikiEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.Project.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.project.Project.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectConfig <a name="ProjectConfig" id="@cdktf/provider-gitlab.project.ProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AllowMergeOnSkippedPipeline = null,
    string AnalyticsAccessLevel = null,
    double ApprovalsBeforeMerge = null,
    object Archived = null,
    object ArchiveOnDestroy = null,
    string AutoCancelPendingPipelines = null,
    object AutocloseReferencedIssues = null,
    string AutoDevopsDeployStrategy = null,
    object AutoDevopsEnabled = null,
    string Avatar = null,
    string AvatarHash = null,
    string BuildCoverageRegex = null,
    string BuildGitStrategy = null,
    string BuildsAccessLevel = null,
    double BuildTimeout = null,
    string CiConfigPath = null,
    double CiDefaultGitDepth = null,
    object CiForwardDeploymentEnabled = null,
    object CiSeparatedCaches = null,
    ProjectContainerExpirationPolicy ContainerExpirationPolicy = null,
    string ContainerRegistryAccessLevel = null,
    object ContainerRegistryEnabled = null,
    string DefaultBranch = null,
    string Description = null,
    object EmailsDisabled = null,
    string EnvironmentsAccessLevel = null,
    string ExternalAuthorizationClassificationLabel = null,
    string FeatureFlagsAccessLevel = null,
    double ForkedFromProjectId = null,
    string ForkingAccessLevel = null,
    double GroupWithProjectTemplatesId = null,
    string Id = null,
    string ImportUrl = null,
    string ImportUrlPassword = null,
    string ImportUrlUsername = null,
    string InfrastructureAccessLevel = null,
    object InitializeWithReadme = null,
    string IssuesAccessLevel = null,
    object IssuesEnabled = null,
    string IssuesTemplate = null,
    object KeepLatestArtifact = null,
    object LfsEnabled = null,
    string MergeCommitTemplate = null,
    string MergeMethod = null,
    object MergePipelinesEnabled = null,
    string MergeRequestsAccessLevel = null,
    object MergeRequestsEnabled = null,
    string MergeRequestsTemplate = null,
    object MergeTrainsEnabled = null,
    object Mirror = null,
    object MirrorOverwritesDivergedBranches = null,
    object MirrorTriggerBuilds = null,
    string MonitorAccessLevel = null,
    object MrDefaultTargetSelf = null,
    double NamespaceId = null,
    object OnlyAllowMergeIfAllDiscussionsAreResolved = null,
    object OnlyAllowMergeIfPipelineSucceeds = null,
    object OnlyMirrorProtectedBranches = null,
    string OperationsAccessLevel = null,
    object PackagesEnabled = null,
    string PagesAccessLevel = null,
    string Path = null,
    object PipelinesEnabled = null,
    object PrintingMergeRequestLinkEnabled = null,
    object PublicBuilds = null,
    ProjectPushRules PushRules = null,
    string ReleasesAccessLevel = null,
    object RemoveSourceBranchAfterMerge = null,
    string RepositoryAccessLevel = null,
    string RepositoryStorage = null,
    object RequestAccessEnabled = null,
    string RequirementsAccessLevel = null,
    object ResolveOutdatedDiffDiscussions = null,
    object RestrictUserDefinedVariables = null,
    string SecurityAndComplianceAccessLevel = null,
    object SharedRunnersEnabled = null,
    object SkipWaitForDefaultBranchProtection = null,
    string SnippetsAccessLevel = null,
    object SnippetsEnabled = null,
    string SquashCommitTemplate = null,
    string SquashOption = null,
    string SuggestionCommitMessage = null,
    string[] Tags = null,
    string TemplateName = null,
    double TemplateProjectId = null,
    string[] Topics = null,
    object UseCustomTemplate = null,
    string VisibilityLevel = null,
    string WikiAccessLevel = null,
    object WikiEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.name">Name</a></code> | <code>string</code> | The name of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline">AllowMergeOnSkippedPipeline</a></code> | <code>object</code> | Set to true if you want to treat skipped pipelines as if they finished with success. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel">AnalyticsAccessLevel</a></code> | <code>string</code> | Set the analytics access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge">ApprovalsBeforeMerge</a></code> | <code>double</code> | Number of merge request approvals required for merging. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archived">Archived</a></code> | <code>object</code> | Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy">ArchiveOnDestroy</a></code> | <code>object</code> | Set to `true` to archive the project instead of deleting on destroy. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines">AutoCancelPendingPipelines</a></code> | <code>string</code> | Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues">AutocloseReferencedIssues</a></code> | <code>object</code> | Set whether auto-closing referenced issues on default branch. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy">AutoDevopsDeployStrategy</a></code> | <code>string</code> | Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled">AutoDevopsEnabled</a></code> | <code>object</code> | Enable Auto DevOps for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatar">Avatar</a></code> | <code>string</code> | A local path to the avatar image to upload. **Note**: not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash">AvatarHash</a></code> | <code>string</code> | The hash of the avatar image. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex">BuildCoverageRegex</a></code> | <code>string</code> | Test coverage parsing for the project. This is deprecated feature in GitLab 15.0. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy">BuildGitStrategy</a></code> | <code>string</code> | The Git strategy. Defaults to fetch. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel">BuildsAccessLevel</a></code> | <code>string</code> | Set the builds access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout">BuildTimeout</a></code> | <code>double</code> | The maximum amount of time, in seconds, that a job can run. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath">CiConfigPath</a></code> | <code>string</code> | Custom Path to CI config file. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth">CiDefaultGitDepth</a></code> | <code>double</code> | Default number of revisions for shallow cloning. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled">CiForwardDeploymentEnabled</a></code> | <code>object</code> | When a new deployment job starts, skip older deployment jobs that are still pending. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches">CiSeparatedCaches</a></code> | <code>object</code> | Use separate caches for protected branches. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy">ContainerExpirationPolicy</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | container_expiration_policy block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel">ContainerRegistryAccessLevel</a></code> | <code>string</code> | Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled">ContainerRegistryEnabled</a></code> | <code>object</code> | Enable container registry for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | The default branch for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.description">Description</a></code> | <code>string</code> | A description of the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.emailsDisabled">EmailsDisabled</a></code> | <code>object</code> | Disable email notifications. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel">EnvironmentsAccessLevel</a></code> | <code>string</code> | Set the environments access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel">ExternalAuthorizationClassificationLabel</a></code> | <code>string</code> | The classification label for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel">FeatureFlagsAccessLevel</a></code> | <code>string</code> | Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId">ForkedFromProjectId</a></code> | <code>double</code> | The id of the project to fork. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel">ForkingAccessLevel</a></code> | <code>string</code> | Set the forking access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId">GroupWithProjectTemplatesId</a></code> | <code>double</code> | For group-level custom templates, specifies ID of group from which all the custom project templates are sourced. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#id Project#id}. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl">ImportUrl</a></code> | <code>string</code> | Git URL to a repository to be imported. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword">ImportUrlPassword</a></code> | <code>string</code> | The password for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername">ImportUrlUsername</a></code> | <code>string</code> | The username for the `import_url`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel">InfrastructureAccessLevel</a></code> | <code>string</code> | Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme">InitializeWithReadme</a></code> | <code>object</code> | Create main branch with first commit containing a README.md file. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel">IssuesAccessLevel</a></code> | <code>string</code> | Set the issues access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled">IssuesEnabled</a></code> | <code>object</code> | Enable issue tracking for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate">IssuesTemplate</a></code> | <code>string</code> | Sets the template for new issues in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact">KeepLatestArtifact</a></code> | <code>object</code> | Disable or enable the ability to keep the latest artifact for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled">LfsEnabled</a></code> | <code>object</code> | Enable LFS for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate">MergeCommitTemplate</a></code> | <code>string</code> | Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod">MergeMethod</a></code> | <code>string</code> | Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled">MergePipelinesEnabled</a></code> | <code>object</code> | Enable or disable merge pipelines. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel">MergeRequestsAccessLevel</a></code> | <code>string</code> | Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled">MergeRequestsEnabled</a></code> | <code>object</code> | Enable merge requests for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate">MergeRequestsTemplate</a></code> | <code>string</code> | Sets the template for new merge requests in the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled">MergeTrainsEnabled</a></code> | <code>object</code> | Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirror">Mirror</a></code> | <code>object</code> | Enable project pull mirror. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches">MirrorOverwritesDivergedBranches</a></code> | <code>object</code> | Enable overwrite diverged branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds">MirrorTriggerBuilds</a></code> | <code>object</code> | Enable trigger builds on pushes for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel">MonitorAccessLevel</a></code> | <code>string</code> | Set the monitor access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf">MrDefaultTargetSelf</a></code> | <code>object</code> | For forked projects, target merge requests to this project. If false, the target will be the upstream project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId">NamespaceId</a></code> | <code>double</code> | The namespace (group or user) of the project. Defaults to your user. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved">OnlyAllowMergeIfAllDiscussionsAreResolved</a></code> | <code>object</code> | Set to true if you want allow merges only if all discussions are resolved. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds">OnlyAllowMergeIfPipelineSucceeds</a></code> | <code>object</code> | Set to true if you want allow merges only if a pipeline succeeds. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches">OnlyMirrorProtectedBranches</a></code> | <code>object</code> | Enable only mirror protected branches for a mirrored project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.operationsAccessLevel">OperationsAccessLevel</a></code> | <code>string</code> | Set the operations access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled">PackagesEnabled</a></code> | <code>object</code> | Enable packages repository for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel">PagesAccessLevel</a></code> | <code>string</code> | Enable pages access control. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.path">Path</a></code> | <code>string</code> | The path of the repository. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled">PipelinesEnabled</a></code> | <code>object</code> | Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled">PrintingMergeRequestLinkEnabled</a></code> | <code>object</code> | Show link to create/view merge request when pushing from the command line. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds">PublicBuilds</a></code> | <code>object</code> | If true, jobs can be viewed by non-project members. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules">PushRules</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | push_rules block. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel">ReleasesAccessLevel</a></code> | <code>string</code> | Set the releases access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge">RemoveSourceBranchAfterMerge</a></code> | <code>object</code> | Enable `Delete source branch` option by default for all new merge requests. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel">RepositoryAccessLevel</a></code> | <code>string</code> | Set the repository access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage">RepositoryStorage</a></code> | <code>string</code> | Which storage shard the repository is on. (administrator only). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled">RequestAccessEnabled</a></code> | <code>object</code> | Allow users to request member access. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel">RequirementsAccessLevel</a></code> | <code>string</code> | Set the requirements access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions">ResolveOutdatedDiffDiscussions</a></code> | <code>object</code> | Automatically resolve merge request diffs discussions on lines changed with a push. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables">RestrictUserDefinedVariables</a></code> | <code>object</code> | Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel">SecurityAndComplianceAccessLevel</a></code> | <code>string</code> | Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled">SharedRunnersEnabled</a></code> | <code>object</code> | Enable shared runners for this project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection">SkipWaitForDefaultBranchProtection</a></code> | <code>object</code> | If `true`, the default behavior to wait for the default branch protection to be created is skipped. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel">SnippetsAccessLevel</a></code> | <code>string</code> | Set the snippets access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled">SnippetsEnabled</a></code> | <code>object</code> | Enable snippets for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate">SquashCommitTemplate</a></code> | <code>string</code> | Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption">SquashOption</a></code> | <code>string</code> | Squash commits when merge request. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage">SuggestionCommitMessage</a></code> | <code>string</code> | The commit message used to apply merge request suggestions. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.tags">Tags</a></code> | <code>string[]</code> | The list of tags for a project; |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateName">TemplateName</a></code> | <code>string</code> | When used without use_custom_template, name of a built-in project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId">TemplateProjectId</a></code> | <code>double</code> | When used with use_custom_template, project ID of a custom project template. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.topics">Topics</a></code> | <code>string[]</code> | The list of topics for the project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate">UseCustomTemplate</a></code> | <code>object</code> | Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel">VisibilityLevel</a></code> | <code>string</code> | Set to `public` to create a public project. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel">WikiAccessLevel</a></code> | <code>string</code> | Set the wiki access level. Valid values are `disabled`, `private`, `enabled`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled">WikiEnabled</a></code> | <code>object</code> | Enable wiki for the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.project.ProjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.project.ProjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.project.ProjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.project.ProjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#name Project#name}

---

##### `AllowMergeOnSkippedPipeline`<sup>Optional</sup> <a name="AllowMergeOnSkippedPipeline" id="@cdktf/provider-gitlab.project.ProjectConfig.property.allowMergeOnSkippedPipeline"></a>

```csharp
public object AllowMergeOnSkippedPipeline { get; set; }
```

- *Type:* object

Set to true if you want to treat skipped pipelines as if they finished with success.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#allow_merge_on_skipped_pipeline Project#allow_merge_on_skipped_pipeline}

---

##### `AnalyticsAccessLevel`<sup>Optional</sup> <a name="AnalyticsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.analyticsAccessLevel"></a>

```csharp
public string AnalyticsAccessLevel { get; set; }
```

- *Type:* string

Set the analytics access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#analytics_access_level Project#analytics_access_level}

---

##### `ApprovalsBeforeMerge`<sup>Optional</sup> <a name="ApprovalsBeforeMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.approvalsBeforeMerge"></a>

```csharp
public double ApprovalsBeforeMerge { get; set; }
```

- *Type:* double

Number of merge request approvals required for merging.

Default is 0.
This field **does not** work well in combination with the `gitlab_project_approval_rule` resource
and is most likely gonna be deprecated in a future GitLab version (see [this upstream epic](https://gitlab.com/groups/gitlab-org/-/epics/7572)).
In the meantime we recommend against using this attribute and use `gitlab_project_approval_rule` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#approvals_before_merge Project#approvals_before_merge}

---

##### `Archived`<sup>Optional</sup> <a name="Archived" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archived"></a>

```csharp
public object Archived { get; set; }
```

- *Type:* object

Whether the project is in read-only mode (archived). Repositories can be archived/unarchived by toggling this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#archived Project#archived}

---

##### `ArchiveOnDestroy`<sup>Optional</sup> <a name="ArchiveOnDestroy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.archiveOnDestroy"></a>

```csharp
public object ArchiveOnDestroy { get; set; }
```

- *Type:* object

Set to `true` to archive the project instead of deleting on destroy.

If set to `true` it will entire omit the `DELETE` operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#archive_on_destroy Project#archive_on_destroy}

---

##### `AutoCancelPendingPipelines`<sup>Optional</sup> <a name="AutoCancelPendingPipelines" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoCancelPendingPipelines"></a>

```csharp
public string AutoCancelPendingPipelines { get; set; }
```

- *Type:* string

Auto-cancel pending pipelines. This isn’t a boolean, but enabled/disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#auto_cancel_pending_pipelines Project#auto_cancel_pending_pipelines}

---

##### `AutocloseReferencedIssues`<sup>Optional</sup> <a name="AutocloseReferencedIssues" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autocloseReferencedIssues"></a>

```csharp
public object AutocloseReferencedIssues { get; set; }
```

- *Type:* object

Set whether auto-closing referenced issues on default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#autoclose_referenced_issues Project#autoclose_referenced_issues}

---

##### `AutoDevopsDeployStrategy`<sup>Optional</sup> <a name="AutoDevopsDeployStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsDeployStrategy"></a>

```csharp
public string AutoDevopsDeployStrategy { get; set; }
```

- *Type:* string

Auto Deploy strategy. Valid values are `continuous`, `manual`, `timed_incremental`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#auto_devops_deploy_strategy Project#auto_devops_deploy_strategy}

---

##### `AutoDevopsEnabled`<sup>Optional</sup> <a name="AutoDevopsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.autoDevopsEnabled"></a>

```csharp
public object AutoDevopsEnabled { get; set; }
```

- *Type:* object

Enable Auto DevOps for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#auto_devops_enabled Project#auto_devops_enabled}

---

##### `Avatar`<sup>Optional</sup> <a name="Avatar" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatar"></a>

```csharp
public string Avatar { get; set; }
```

- *Type:* string

A local path to the avatar image to upload. **Note**: not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#avatar Project#avatar}

---

##### `AvatarHash`<sup>Optional</sup> <a name="AvatarHash" id="@cdktf/provider-gitlab.project.ProjectConfig.property.avatarHash"></a>

```csharp
public string AvatarHash { get; set; }
```

- *Type:* string

The hash of the avatar image.

Use `filesha256("path/to/avatar.png")` whenever possible. **Note**: this is used to trigger an update of the avatar. If it's not given, but an avatar is given, the avatar will be updated each time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#avatar_hash Project#avatar_hash}

---

##### `BuildCoverageRegex`<sup>Optional</sup> <a name="BuildCoverageRegex" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildCoverageRegex"></a>

```csharp
public string BuildCoverageRegex { get; set; }
```

- *Type:* string

Test coverage parsing for the project. This is deprecated feature in GitLab 15.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#build_coverage_regex Project#build_coverage_regex}

---

##### `BuildGitStrategy`<sup>Optional</sup> <a name="BuildGitStrategy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildGitStrategy"></a>

```csharp
public string BuildGitStrategy { get; set; }
```

- *Type:* string

The Git strategy. Defaults to fetch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#build_git_strategy Project#build_git_strategy}

---

##### `BuildsAccessLevel`<sup>Optional</sup> <a name="BuildsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildsAccessLevel"></a>

```csharp
public string BuildsAccessLevel { get; set; }
```

- *Type:* string

Set the builds access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#builds_access_level Project#builds_access_level}

---

##### `BuildTimeout`<sup>Optional</sup> <a name="BuildTimeout" id="@cdktf/provider-gitlab.project.ProjectConfig.property.buildTimeout"></a>

```csharp
public double BuildTimeout { get; set; }
```

- *Type:* double

The maximum amount of time, in seconds, that a job can run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#build_timeout Project#build_timeout}

---

##### `CiConfigPath`<sup>Optional</sup> <a name="CiConfigPath" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciConfigPath"></a>

```csharp
public string CiConfigPath { get; set; }
```

- *Type:* string

Custom Path to CI config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#ci_config_path Project#ci_config_path}

---

##### `CiDefaultGitDepth`<sup>Optional</sup> <a name="CiDefaultGitDepth" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciDefaultGitDepth"></a>

```csharp
public double CiDefaultGitDepth { get; set; }
```

- *Type:* double

Default number of revisions for shallow cloning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#ci_default_git_depth Project#ci_default_git_depth}

---

##### `CiForwardDeploymentEnabled`<sup>Optional</sup> <a name="CiForwardDeploymentEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciForwardDeploymentEnabled"></a>

```csharp
public object CiForwardDeploymentEnabled { get; set; }
```

- *Type:* object

When a new deployment job starts, skip older deployment jobs that are still pending.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#ci_forward_deployment_enabled Project#ci_forward_deployment_enabled}

---

##### `CiSeparatedCaches`<sup>Optional</sup> <a name="CiSeparatedCaches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.ciSeparatedCaches"></a>

```csharp
public object CiSeparatedCaches { get; set; }
```

- *Type:* object

Use separate caches for protected branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#ci_separated_caches Project#ci_separated_caches}

---

##### `ContainerExpirationPolicy`<sup>Optional</sup> <a name="ContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerExpirationPolicy"></a>

```csharp
public ProjectContainerExpirationPolicy ContainerExpirationPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

container_expiration_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#container_expiration_policy Project#container_expiration_policy}

---

##### `ContainerRegistryAccessLevel`<sup>Optional</sup> <a name="ContainerRegistryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryAccessLevel"></a>

```csharp
public string ContainerRegistryAccessLevel { get; set; }
```

- *Type:* string

Set visibility of container registry, for this project. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#container_registry_access_level Project#container_registry_access_level}

---

##### `ContainerRegistryEnabled`<sup>Optional</sup> <a name="ContainerRegistryEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.containerRegistryEnabled"></a>

```csharp
public object ContainerRegistryEnabled { get; set; }
```

- *Type:* object

Enable container registry for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#container_registry_enabled Project#container_registry_enabled}

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktf/provider-gitlab.project.ProjectConfig.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; set; }
```

- *Type:* string

The default branch for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#default_branch Project#default_branch}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.project.ProjectConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#description Project#description}

---

##### `EmailsDisabled`<sup>Optional</sup> <a name="EmailsDisabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.emailsDisabled"></a>

```csharp
public object EmailsDisabled { get; set; }
```

- *Type:* object

Disable email notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#emails_disabled Project#emails_disabled}

---

##### `EnvironmentsAccessLevel`<sup>Optional</sup> <a name="EnvironmentsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.environmentsAccessLevel"></a>

```csharp
public string EnvironmentsAccessLevel { get; set; }
```

- *Type:* string

Set the environments access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#environments_access_level Project#environments_access_level}

---

##### `ExternalAuthorizationClassificationLabel`<sup>Optional</sup> <a name="ExternalAuthorizationClassificationLabel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.externalAuthorizationClassificationLabel"></a>

```csharp
public string ExternalAuthorizationClassificationLabel { get; set; }
```

- *Type:* string

The classification label for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#external_authorization_classification_label Project#external_authorization_classification_label}

---

##### `FeatureFlagsAccessLevel`<sup>Optional</sup> <a name="FeatureFlagsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.featureFlagsAccessLevel"></a>

```csharp
public string FeatureFlagsAccessLevel { get; set; }
```

- *Type:* string

Set the feature flags access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#feature_flags_access_level Project#feature_flags_access_level}

---

##### `ForkedFromProjectId`<sup>Optional</sup> <a name="ForkedFromProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkedFromProjectId"></a>

```csharp
public double ForkedFromProjectId { get; set; }
```

- *Type:* double

The id of the project to fork.

During create the project is forked and during an update the fork relation is changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#forked_from_project_id Project#forked_from_project_id}

---

##### `ForkingAccessLevel`<sup>Optional</sup> <a name="ForkingAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.forkingAccessLevel"></a>

```csharp
public string ForkingAccessLevel { get; set; }
```

- *Type:* string

Set the forking access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#forking_access_level Project#forking_access_level}

---

##### `GroupWithProjectTemplatesId`<sup>Optional</sup> <a name="GroupWithProjectTemplatesId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.groupWithProjectTemplatesId"></a>

```csharp
public double GroupWithProjectTemplatesId { get; set; }
```

- *Type:* double

For group-level custom templates, specifies ID of group from which all the custom project templates are sourced.

Leave empty for instance-level templates. Requires use_custom_template to be true (enterprise edition).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#group_with_project_templates_id Project#group_with_project_templates_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.project.ProjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#id Project#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportUrl`<sup>Optional</sup> <a name="ImportUrl" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrl"></a>

```csharp
public string ImportUrl { get; set; }
```

- *Type:* string

Git URL to a repository to be imported.

Together with `mirror = true` it will setup a Pull Mirror. This can also be used together with `forked_from_project_id` to setup a Pull Mirror for a fork. The fork takes precedence over the import. Make sure to provide the credentials in `import_url_username` and `import_url_password`. GitLab never returns the credentials, thus the provider cannot detect configuration drift in the credentials. They can also not be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#import_url Project#import_url}

---

##### `ImportUrlPassword`<sup>Optional</sup> <a name="ImportUrlPassword" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlPassword"></a>

```csharp
public string ImportUrlPassword { get; set; }
```

- *Type:* string

The password for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`. See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#import_url_password Project#import_url_password}

---

##### `ImportUrlUsername`<sup>Optional</sup> <a name="ImportUrlUsername" id="@cdktf/provider-gitlab.project.ProjectConfig.property.importUrlUsername"></a>

```csharp
public string ImportUrlUsername { get; set; }
```

- *Type:* string

The username for the `import_url`.

The value of this field is used to construct a valid `import_url` and is only related to the provider. This field cannot be imported using `terraform import`.  See the examples section for how to properly use it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#import_url_username Project#import_url_username}

---

##### `InfrastructureAccessLevel`<sup>Optional</sup> <a name="InfrastructureAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.infrastructureAccessLevel"></a>

```csharp
public string InfrastructureAccessLevel { get; set; }
```

- *Type:* string

Set the infrastructure access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#infrastructure_access_level Project#infrastructure_access_level}

---

##### `InitializeWithReadme`<sup>Optional</sup> <a name="InitializeWithReadme" id="@cdktf/provider-gitlab.project.ProjectConfig.property.initializeWithReadme"></a>

```csharp
public object InitializeWithReadme { get; set; }
```

- *Type:* object

Create main branch with first commit containing a README.md file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#initialize_with_readme Project#initialize_with_readme}

---

##### `IssuesAccessLevel`<sup>Optional</sup> <a name="IssuesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesAccessLevel"></a>

```csharp
public string IssuesAccessLevel { get; set; }
```

- *Type:* string

Set the issues access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#issues_access_level Project#issues_access_level}

---

##### `IssuesEnabled`<sup>Optional</sup> <a name="IssuesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesEnabled"></a>

```csharp
public object IssuesEnabled { get; set; }
```

- *Type:* object

Enable issue tracking for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#issues_enabled Project#issues_enabled}

---

##### `IssuesTemplate`<sup>Optional</sup> <a name="IssuesTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.issuesTemplate"></a>

```csharp
public string IssuesTemplate { get; set; }
```

- *Type:* string

Sets the template for new issues in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#issues_template Project#issues_template}

---

##### `KeepLatestArtifact`<sup>Optional</sup> <a name="KeepLatestArtifact" id="@cdktf/provider-gitlab.project.ProjectConfig.property.keepLatestArtifact"></a>

```csharp
public object KeepLatestArtifact { get; set; }
```

- *Type:* object

Disable or enable the ability to keep the latest artifact for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#keep_latest_artifact Project#keep_latest_artifact}

---

##### `LfsEnabled`<sup>Optional</sup> <a name="LfsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.lfsEnabled"></a>

```csharp
public object LfsEnabled { get; set; }
```

- *Type:* object

Enable LFS for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#lfs_enabled Project#lfs_enabled}

---

##### `MergeCommitTemplate`<sup>Optional</sup> <a name="MergeCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeCommitTemplate"></a>

```csharp
public string MergeCommitTemplate { get; set; }
```

- *Type:* string

Template used to create merge commit message in merge requests. (Introduced in GitLab 14.5.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#merge_commit_template Project#merge_commit_template}

---

##### `MergeMethod`<sup>Optional</sup> <a name="MergeMethod" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeMethod"></a>

```csharp
public string MergeMethod { get; set; }
```

- *Type:* string

Set the merge method. Valid values are `merge`, `rebase_merge`, `ff`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#merge_method Project#merge_method}

---

##### `MergePipelinesEnabled`<sup>Optional</sup> <a name="MergePipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergePipelinesEnabled"></a>

```csharp
public object MergePipelinesEnabled { get; set; }
```

- *Type:* object

Enable or disable merge pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#merge_pipelines_enabled Project#merge_pipelines_enabled}

---

##### `MergeRequestsAccessLevel`<sup>Optional</sup> <a name="MergeRequestsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsAccessLevel"></a>

```csharp
public string MergeRequestsAccessLevel { get; set; }
```

- *Type:* string

Set the merge requests access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#merge_requests_access_level Project#merge_requests_access_level}

---

##### `MergeRequestsEnabled`<sup>Optional</sup> <a name="MergeRequestsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsEnabled"></a>

```csharp
public object MergeRequestsEnabled { get; set; }
```

- *Type:* object

Enable merge requests for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#merge_requests_enabled Project#merge_requests_enabled}

---

##### `MergeRequestsTemplate`<sup>Optional</sup> <a name="MergeRequestsTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeRequestsTemplate"></a>

```csharp
public string MergeRequestsTemplate { get; set; }
```

- *Type:* string

Sets the template for new merge requests in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#merge_requests_template Project#merge_requests_template}

---

##### `MergeTrainsEnabled`<sup>Optional</sup> <a name="MergeTrainsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mergeTrainsEnabled"></a>

```csharp
public object MergeTrainsEnabled { get; set; }
```

- *Type:* object

Enable or disable merge trains. Requires `merge_pipelines_enabled` to be set to `true` to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#merge_trains_enabled Project#merge_trains_enabled}

---

##### `Mirror`<sup>Optional</sup> <a name="Mirror" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirror"></a>

```csharp
public object Mirror { get; set; }
```

- *Type:* object

Enable project pull mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#mirror Project#mirror}

---

##### `MirrorOverwritesDivergedBranches`<sup>Optional</sup> <a name="MirrorOverwritesDivergedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorOverwritesDivergedBranches"></a>

```csharp
public object MirrorOverwritesDivergedBranches { get; set; }
```

- *Type:* object

Enable overwrite diverged branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#mirror_overwrites_diverged_branches Project#mirror_overwrites_diverged_branches}

---

##### `MirrorTriggerBuilds`<sup>Optional</sup> <a name="MirrorTriggerBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mirrorTriggerBuilds"></a>

```csharp
public object MirrorTriggerBuilds { get; set; }
```

- *Type:* object

Enable trigger builds on pushes for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#mirror_trigger_builds Project#mirror_trigger_builds}

---

##### `MonitorAccessLevel`<sup>Optional</sup> <a name="MonitorAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.monitorAccessLevel"></a>

```csharp
public string MonitorAccessLevel { get; set; }
```

- *Type:* string

Set the monitor access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#monitor_access_level Project#monitor_access_level}

---

##### `MrDefaultTargetSelf`<sup>Optional</sup> <a name="MrDefaultTargetSelf" id="@cdktf/provider-gitlab.project.ProjectConfig.property.mrDefaultTargetSelf"></a>

```csharp
public object MrDefaultTargetSelf { get; set; }
```

- *Type:* object

For forked projects, target merge requests to this project. If false, the target will be the upstream project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#mr_default_target_self Project#mr_default_target_self}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.namespaceId"></a>

```csharp
public double NamespaceId { get; set; }
```

- *Type:* double

The namespace (group or user) of the project. Defaults to your user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#namespace_id Project#namespace_id}

---

##### `OnlyAllowMergeIfAllDiscussionsAreResolved`<sup>Optional</sup> <a name="OnlyAllowMergeIfAllDiscussionsAreResolved" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfAllDiscussionsAreResolved"></a>

```csharp
public object OnlyAllowMergeIfAllDiscussionsAreResolved { get; set; }
```

- *Type:* object

Set to true if you want allow merges only if all discussions are resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#only_allow_merge_if_all_discussions_are_resolved Project#only_allow_merge_if_all_discussions_are_resolved}

---

##### `OnlyAllowMergeIfPipelineSucceeds`<sup>Optional</sup> <a name="OnlyAllowMergeIfPipelineSucceeds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyAllowMergeIfPipelineSucceeds"></a>

```csharp
public object OnlyAllowMergeIfPipelineSucceeds { get; set; }
```

- *Type:* object

Set to true if you want allow merges only if a pipeline succeeds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#only_allow_merge_if_pipeline_succeeds Project#only_allow_merge_if_pipeline_succeeds}

---

##### `OnlyMirrorProtectedBranches`<sup>Optional</sup> <a name="OnlyMirrorProtectedBranches" id="@cdktf/provider-gitlab.project.ProjectConfig.property.onlyMirrorProtectedBranches"></a>

```csharp
public object OnlyMirrorProtectedBranches { get; set; }
```

- *Type:* object

Enable only mirror protected branches for a mirrored project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#only_mirror_protected_branches Project#only_mirror_protected_branches}

---

##### `OperationsAccessLevel`<sup>Optional</sup> <a name="OperationsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.operationsAccessLevel"></a>

```csharp
public string OperationsAccessLevel { get; set; }
```

- *Type:* string

Set the operations access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#operations_access_level Project#operations_access_level}

---

##### `PackagesEnabled`<sup>Optional</sup> <a name="PackagesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.packagesEnabled"></a>

```csharp
public object PackagesEnabled { get; set; }
```

- *Type:* object

Enable packages repository for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#packages_enabled Project#packages_enabled}

---

##### `PagesAccessLevel`<sup>Optional</sup> <a name="PagesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pagesAccessLevel"></a>

```csharp
public string PagesAccessLevel { get; set; }
```

- *Type:* string

Enable pages access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#pages_access_level Project#pages_access_level}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-gitlab.project.ProjectConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#path Project#path}

---

##### `PipelinesEnabled`<sup>Optional</sup> <a name="PipelinesEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pipelinesEnabled"></a>

```csharp
public object PipelinesEnabled { get; set; }
```

- *Type:* object

Enable pipelines for the project. The `pipelines_enabled` field is being sent as `jobs_enabled` in the GitLab API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#pipelines_enabled Project#pipelines_enabled}

---

##### `PrintingMergeRequestLinkEnabled`<sup>Optional</sup> <a name="PrintingMergeRequestLinkEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.printingMergeRequestLinkEnabled"></a>

```csharp
public object PrintingMergeRequestLinkEnabled { get; set; }
```

- *Type:* object

Show link to create/view merge request when pushing from the command line.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#printing_merge_request_link_enabled Project#printing_merge_request_link_enabled}

---

##### `PublicBuilds`<sup>Optional</sup> <a name="PublicBuilds" id="@cdktf/provider-gitlab.project.ProjectConfig.property.publicBuilds"></a>

```csharp
public object PublicBuilds { get; set; }
```

- *Type:* object

If true, jobs can be viewed by non-project members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#public_builds Project#public_builds}

---

##### `PushRules`<sup>Optional</sup> <a name="PushRules" id="@cdktf/provider-gitlab.project.ProjectConfig.property.pushRules"></a>

```csharp
public ProjectPushRules PushRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

push_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#push_rules Project#push_rules}

---

##### `ReleasesAccessLevel`<sup>Optional</sup> <a name="ReleasesAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.releasesAccessLevel"></a>

```csharp
public string ReleasesAccessLevel { get; set; }
```

- *Type:* string

Set the releases access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#releases_access_level Project#releases_access_level}

---

##### `RemoveSourceBranchAfterMerge`<sup>Optional</sup> <a name="RemoveSourceBranchAfterMerge" id="@cdktf/provider-gitlab.project.ProjectConfig.property.removeSourceBranchAfterMerge"></a>

```csharp
public object RemoveSourceBranchAfterMerge { get; set; }
```

- *Type:* object

Enable `Delete source branch` option by default for all new merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#remove_source_branch_after_merge Project#remove_source_branch_after_merge}

---

##### `RepositoryAccessLevel`<sup>Optional</sup> <a name="RepositoryAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryAccessLevel"></a>

```csharp
public string RepositoryAccessLevel { get; set; }
```

- *Type:* string

Set the repository access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#repository_access_level Project#repository_access_level}

---

##### `RepositoryStorage`<sup>Optional</sup> <a name="RepositoryStorage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.repositoryStorage"></a>

```csharp
public string RepositoryStorage { get; set; }
```

- *Type:* string

Which storage shard the repository is on. (administrator only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#repository_storage Project#repository_storage}

---

##### `RequestAccessEnabled`<sup>Optional</sup> <a name="RequestAccessEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requestAccessEnabled"></a>

```csharp
public object RequestAccessEnabled { get; set; }
```

- *Type:* object

Allow users to request member access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#request_access_enabled Project#request_access_enabled}

---

##### `RequirementsAccessLevel`<sup>Optional</sup> <a name="RequirementsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.requirementsAccessLevel"></a>

```csharp
public string RequirementsAccessLevel { get; set; }
```

- *Type:* string

Set the requirements access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#requirements_access_level Project#requirements_access_level}

---

##### `ResolveOutdatedDiffDiscussions`<sup>Optional</sup> <a name="ResolveOutdatedDiffDiscussions" id="@cdktf/provider-gitlab.project.ProjectConfig.property.resolveOutdatedDiffDiscussions"></a>

```csharp
public object ResolveOutdatedDiffDiscussions { get; set; }
```

- *Type:* object

Automatically resolve merge request diffs discussions on lines changed with a push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#resolve_outdated_diff_discussions Project#resolve_outdated_diff_discussions}

---

##### `RestrictUserDefinedVariables`<sup>Optional</sup> <a name="RestrictUserDefinedVariables" id="@cdktf/provider-gitlab.project.ProjectConfig.property.restrictUserDefinedVariables"></a>

```csharp
public object RestrictUserDefinedVariables { get; set; }
```

- *Type:* object

Allow only users with the Maintainer role to pass user-defined variables when triggering a pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#restrict_user_defined_variables Project#restrict_user_defined_variables}

---

##### `SecurityAndComplianceAccessLevel`<sup>Optional</sup> <a name="SecurityAndComplianceAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.securityAndComplianceAccessLevel"></a>

```csharp
public string SecurityAndComplianceAccessLevel { get; set; }
```

- *Type:* string

Set the security and compliance access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#security_and_compliance_access_level Project#security_and_compliance_access_level}

---

##### `SharedRunnersEnabled`<sup>Optional</sup> <a name="SharedRunnersEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.sharedRunnersEnabled"></a>

```csharp
public object SharedRunnersEnabled { get; set; }
```

- *Type:* object

Enable shared runners for this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#shared_runners_enabled Project#shared_runners_enabled}

---

##### `SkipWaitForDefaultBranchProtection`<sup>Optional</sup> <a name="SkipWaitForDefaultBranchProtection" id="@cdktf/provider-gitlab.project.ProjectConfig.property.skipWaitForDefaultBranchProtection"></a>

```csharp
public object SkipWaitForDefaultBranchProtection { get; set; }
```

- *Type:* object

If `true`, the default behavior to wait for the default branch protection to be created is skipped.

This is necessary if the current user is not an admin and the default branch protection is disabled on an instance-level.
There is currently no known way to determine if the default branch protection is disabled on an instance-level for non-admin users.
This attribute is only used during resource creation, thus changes are suppressed and the attribute cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#skip_wait_for_default_branch_protection Project#skip_wait_for_default_branch_protection}

---

##### `SnippetsAccessLevel`<sup>Optional</sup> <a name="SnippetsAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsAccessLevel"></a>

```csharp
public string SnippetsAccessLevel { get; set; }
```

- *Type:* string

Set the snippets access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#snippets_access_level Project#snippets_access_level}

---

##### `SnippetsEnabled`<sup>Optional</sup> <a name="SnippetsEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.snippetsEnabled"></a>

```csharp
public object SnippetsEnabled { get; set; }
```

- *Type:* object

Enable snippets for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#snippets_enabled Project#snippets_enabled}

---

##### `SquashCommitTemplate`<sup>Optional</sup> <a name="SquashCommitTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashCommitTemplate"></a>

```csharp
public string SquashCommitTemplate { get; set; }
```

- *Type:* string

Template used to create squash commit message in merge requests. (Introduced in GitLab 14.6.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#squash_commit_template Project#squash_commit_template}

---

##### `SquashOption`<sup>Optional</sup> <a name="SquashOption" id="@cdktf/provider-gitlab.project.ProjectConfig.property.squashOption"></a>

```csharp
public string SquashOption { get; set; }
```

- *Type:* string

Squash commits when merge request.

Valid values are `never`, `always`, `default_on`, or `default_off`. The default value is `default_off`. [GitLab >= 14.1]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#squash_option Project#squash_option}

---

##### `SuggestionCommitMessage`<sup>Optional</sup> <a name="SuggestionCommitMessage" id="@cdktf/provider-gitlab.project.ProjectConfig.property.suggestionCommitMessage"></a>

```csharp
public string SuggestionCommitMessage { get; set; }
```

- *Type:* string

The commit message used to apply merge request suggestions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#suggestion_commit_message Project#suggestion_commit_message}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-gitlab.project.ProjectConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The list of tags for a project;

put array of tags, that should be finally assigned to a project. Use topics instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#tags Project#tags}

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

When used without use_custom_template, name of a built-in project template.

When used with use_custom_template, name of a custom project template. This option is mutually exclusive with `template_project_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#template_name Project#template_name}

---

##### `TemplateProjectId`<sup>Optional</sup> <a name="TemplateProjectId" id="@cdktf/provider-gitlab.project.ProjectConfig.property.templateProjectId"></a>

```csharp
public double TemplateProjectId { get; set; }
```

- *Type:* double

When used with use_custom_template, project ID of a custom project template.

This is preferable to using template_name since template_name may be ambiguous (enterprise edition). This option is mutually exclusive with `template_name`. See `gitlab_group_project_file_template` to set a project as a template project. If a project has not been set as a template, using it here will result in an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#template_project_id Project#template_project_id}

---

##### `Topics`<sup>Optional</sup> <a name="Topics" id="@cdktf/provider-gitlab.project.ProjectConfig.property.topics"></a>

```csharp
public string[] Topics { get; set; }
```

- *Type:* string[]

The list of topics for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#topics Project#topics}

---

##### `UseCustomTemplate`<sup>Optional</sup> <a name="UseCustomTemplate" id="@cdktf/provider-gitlab.project.ProjectConfig.property.useCustomTemplate"></a>

```csharp
public object UseCustomTemplate { get; set; }
```

- *Type:* object

Use either custom instance or group (with group_with_project_templates_id) project template (enterprise edition).

~> When using a custom template, [Group Tokens won't work](https://docs.gitlab.com/15.7/ee/user/project/settings/import_export_troubleshooting.html#import-using-the-rest-api-fails-when-using-a-group-access-token). You must use a real user's Personal Access Token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#use_custom_template Project#use_custom_template}

---

##### `VisibilityLevel`<sup>Optional</sup> <a name="VisibilityLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.visibilityLevel"></a>

```csharp
public string VisibilityLevel { get; set; }
```

- *Type:* string

Set to `public` to create a public project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#visibility_level Project#visibility_level}

---

##### `WikiAccessLevel`<sup>Optional</sup> <a name="WikiAccessLevel" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiAccessLevel"></a>

```csharp
public string WikiAccessLevel { get; set; }
```

- *Type:* string

Set the wiki access level. Valid values are `disabled`, `private`, `enabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#wiki_access_level Project#wiki_access_level}

---

##### `WikiEnabled`<sup>Optional</sup> <a name="WikiEnabled" id="@cdktf/provider-gitlab.project.ProjectConfig.property.wikiEnabled"></a>

```csharp
public object WikiEnabled { get; set; }
```

- *Type:* object

Enable wiki for the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#wiki_enabled Project#wiki_enabled}

---

### ProjectContainerExpirationPolicy <a name="ProjectContainerExpirationPolicy" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectContainerExpirationPolicy {
    string Cadence = null,
    object Enabled = null,
    double KeepN = null,
    string NameRegex = null,
    string NameRegexDelete = null,
    string NameRegexKeep = null,
    string OlderThan = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence">Cadence</a></code> | <code>string</code> | The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled">Enabled</a></code> | <code>object</code> | If true, the policy is enabled. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN">KeepN</a></code> | <code>double</code> | The number of images to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex">NameRegex</a></code> | <code>string</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete">NameRegexDelete</a></code> | <code>string</code> | The regular expression to match image names to delete. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep">NameRegexKeep</a></code> | <code>string</code> | The regular expression to match image names to keep. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan">OlderThan</a></code> | <code>string</code> | The number of days to keep images. |

---

##### `Cadence`<sup>Optional</sup> <a name="Cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.cadence"></a>

```csharp
public string Cadence { get; set; }
```

- *Type:* string

The cadence of the policy. Valid values are: `1d`, `7d`, `14d`, `1month`, `3month`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#cadence Project#cadence}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

If true, the policy is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#enabled Project#enabled}

---

##### `KeepN`<sup>Optional</sup> <a name="KeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.keepN"></a>

```csharp
public double KeepN { get; set; }
```

- *Type:* double

The number of images to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#keep_n Project#keep_n}

---

##### `NameRegex`<sup>Optional</sup> <a name="NameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegex"></a>

```csharp
public string NameRegex { get; set; }
```

- *Type:* string

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#name_regex Project#name_regex}

---

##### `NameRegexDelete`<sup>Optional</sup> <a name="NameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexDelete"></a>

```csharp
public string NameRegexDelete { get; set; }
```

- *Type:* string

The regular expression to match image names to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#name_regex_delete Project#name_regex_delete}

---

##### `NameRegexKeep`<sup>Optional</sup> <a name="NameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.nameRegexKeep"></a>

```csharp
public string NameRegexKeep { get; set; }
```

- *Type:* string

The regular expression to match image names to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#name_regex_keep Project#name_regex_keep}

---

##### `OlderThan`<sup>Optional</sup> <a name="OlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy.property.olderThan"></a>

```csharp
public string OlderThan { get; set; }
```

- *Type:* string

The number of days to keep images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#older_than Project#older_than}

---

### ProjectPushRules <a name="ProjectPushRules" id="@cdktf/provider-gitlab.project.ProjectPushRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.project.ProjectPushRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectPushRules {
    string AuthorEmailRegex = null,
    string BranchNameRegex = null,
    object CommitCommitterCheck = null,
    string CommitMessageNegativeRegex = null,
    string CommitMessageRegex = null,
    object DenyDeleteTag = null,
    string FileNameRegex = null,
    double MaxFileSize = null,
    object MemberCheck = null,
    object PreventSecrets = null,
    object RejectUnsignedCommits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex">BranchNameRegex</a></code> | <code>string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>object</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>string</code> | No commit message is allowed to match this regex, for example `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>object</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex">FileNameRegex</a></code> | <code>string</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck">MemberCheck</a></code> | <code>object</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets">PreventSecrets</a></code> | <code>object</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>object</code> | Reject commit when it’s not signed through GPG. |

---

##### `AuthorEmailRegex`<sup>Optional</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.authorEmailRegex"></a>

```csharp
public string AuthorEmailRegex { get; set; }
```

- *Type:* string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#author_email_regex Project#author_email_regex}

---

##### `BranchNameRegex`<sup>Optional</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.branchNameRegex"></a>

```csharp
public string BranchNameRegex { get; set; }
```

- *Type:* string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#branch_name_regex Project#branch_name_regex}

---

##### `CommitCommitterCheck`<sup>Optional</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitCommitterCheck"></a>

```csharp
public object CommitCommitterCheck { get; set; }
```

- *Type:* object

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#commit_committer_check Project#commit_committer_check}

---

##### `CommitMessageNegativeRegex`<sup>Optional</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageNegativeRegex"></a>

```csharp
public string CommitMessageNegativeRegex { get; set; }
```

- *Type:* string

No commit message is allowed to match this regex, for example `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#commit_message_negative_regex Project#commit_message_negative_regex}

---

##### `CommitMessageRegex`<sup>Optional</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.commitMessageRegex"></a>

```csharp
public string CommitMessageRegex { get; set; }
```

- *Type:* string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#commit_message_regex Project#commit_message_regex}

---

##### `DenyDeleteTag`<sup>Optional</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.denyDeleteTag"></a>

```csharp
public object DenyDeleteTag { get; set; }
```

- *Type:* object

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#deny_delete_tag Project#deny_delete_tag}

---

##### `FileNameRegex`<sup>Optional</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.fileNameRegex"></a>

```csharp
public string FileNameRegex { get; set; }
```

- *Type:* string

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#file_name_regex Project#file_name_regex}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#max_file_size Project#max_file_size}

---

##### `MemberCheck`<sup>Optional</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.memberCheck"></a>

```csharp
public object MemberCheck { get; set; }
```

- *Type:* object

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#member_check Project#member_check}

---

##### `PreventSecrets`<sup>Optional</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.preventSecrets"></a>

```csharp
public object PreventSecrets { get; set; }
```

- *Type:* object

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#prevent_secrets Project#prevent_secrets}

---

##### `RejectUnsignedCommits`<sup>Optional</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRules.property.rejectUnsignedCommits"></a>

```csharp
public object RejectUnsignedCommits { get; set; }
```

- *Type:* object

Reject commit when it’s not signed through GPG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.11.0/docs/resources/project#reject_unsigned_commits Project#reject_unsigned_commits}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectContainerExpirationPolicyOutputReference <a name="ProjectContainerExpirationPolicyOutputReference" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectContainerExpirationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCadence` <a name="ResetCadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetCadence"></a>

```csharp
private void ResetCadence()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetKeepN` <a name="ResetKeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetKeepN"></a>

```csharp
private void ResetKeepN()
```

##### `ResetNameRegex` <a name="ResetNameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegex"></a>

```csharp
private void ResetNameRegex()
```

##### `ResetNameRegexDelete` <a name="ResetNameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexDelete"></a>

```csharp
private void ResetNameRegexDelete()
```

##### `ResetNameRegexKeep` <a name="ResetNameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetNameRegexKeep"></a>

```csharp
private void ResetNameRegexKeep()
```

##### `ResetOlderThan` <a name="ResetOlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.resetOlderThan"></a>

```csharp
private void ResetOlderThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt">NextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput">CadenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput">KeepNInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput">NameRegexDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput">NameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput">NameRegexKeepInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput">OlderThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence">Cadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN">KeepN</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex">NameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete">NameRegexDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep">NameRegexKeep</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan">OlderThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nextRunAt"></a>

```csharp
public string NextRunAt { get; }
```

- *Type:* string

---

##### `CadenceInput`<sup>Optional</sup> <a name="CadenceInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadenceInput"></a>

```csharp
public string CadenceInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `KeepNInput`<sup>Optional</sup> <a name="KeepNInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepNInput"></a>

```csharp
public double KeepNInput { get; }
```

- *Type:* double

---

##### `NameRegexDeleteInput`<sup>Optional</sup> <a name="NameRegexDeleteInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDeleteInput"></a>

```csharp
public string NameRegexDeleteInput { get; }
```

- *Type:* string

---

##### `NameRegexInput`<sup>Optional</sup> <a name="NameRegexInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexInput"></a>

```csharp
public string NameRegexInput { get; }
```

- *Type:* string

---

##### `NameRegexKeepInput`<sup>Optional</sup> <a name="NameRegexKeepInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeepInput"></a>

```csharp
public string NameRegexKeepInput { get; }
```

- *Type:* string

---

##### `OlderThanInput`<sup>Optional</sup> <a name="OlderThanInput" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThanInput"></a>

```csharp
public string OlderThanInput { get; }
```

- *Type:* string

---

##### `Cadence`<sup>Required</sup> <a name="Cadence" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.cadence"></a>

```csharp
public string Cadence { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `KeepN`<sup>Required</sup> <a name="KeepN" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.keepN"></a>

```csharp
public double KeepN { get; }
```

- *Type:* double

---

##### `NameRegex`<sup>Required</sup> <a name="NameRegex" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegex"></a>

```csharp
public string NameRegex { get; }
```

- *Type:* string

---

##### `NameRegexDelete`<sup>Required</sup> <a name="NameRegexDelete" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexDelete"></a>

```csharp
public string NameRegexDelete { get; }
```

- *Type:* string

---

##### `NameRegexKeep`<sup>Required</sup> <a name="NameRegexKeep" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.nameRegexKeep"></a>

```csharp
public string NameRegexKeep { get; }
```

- *Type:* string

---

##### `OlderThan`<sup>Required</sup> <a name="OlderThan" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.olderThan"></a>

```csharp
public string OlderThan { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicyOutputReference.property.internalValue"></a>

```csharp
public ProjectContainerExpirationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectContainerExpirationPolicy">ProjectContainerExpirationPolicy</a>

---


### ProjectPushRulesOutputReference <a name="ProjectPushRulesOutputReference" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectPushRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorEmailRegex` <a name="ResetAuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetAuthorEmailRegex"></a>

```csharp
private void ResetAuthorEmailRegex()
```

##### `ResetBranchNameRegex` <a name="ResetBranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetBranchNameRegex"></a>

```csharp
private void ResetBranchNameRegex()
```

##### `ResetCommitCommitterCheck` <a name="ResetCommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitCommitterCheck"></a>

```csharp
private void ResetCommitCommitterCheck()
```

##### `ResetCommitMessageNegativeRegex` <a name="ResetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageNegativeRegex"></a>

```csharp
private void ResetCommitMessageNegativeRegex()
```

##### `ResetCommitMessageRegex` <a name="ResetCommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetCommitMessageRegex"></a>

```csharp
private void ResetCommitMessageRegex()
```

##### `ResetDenyDeleteTag` <a name="ResetDenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetDenyDeleteTag"></a>

```csharp
private void ResetDenyDeleteTag()
```

##### `ResetFileNameRegex` <a name="ResetFileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetFileNameRegex"></a>

```csharp
private void ResetFileNameRegex()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetMemberCheck` <a name="ResetMemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetMemberCheck"></a>

```csharp
private void ResetMemberCheck()
```

##### `ResetPreventSecrets` <a name="ResetPreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetPreventSecrets"></a>

```csharp
private void ResetPreventSecrets()
```

##### `ResetRejectUnsignedCommits` <a name="ResetRejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.resetRejectUnsignedCommits"></a>

```csharp
private void ResetRejectUnsignedCommits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput">AuthorEmailRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput">BranchNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput">CommitCommitterCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput">CommitMessageNegativeRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput">CommitMessageRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput">DenyDeleteTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput">FileNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput">MemberCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput">PreventSecretsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput">RejectUnsignedCommitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex">BranchNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex">FileNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck">MemberCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets">PreventSecrets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorEmailRegexInput`<sup>Optional</sup> <a name="AuthorEmailRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegexInput"></a>

```csharp
public string AuthorEmailRegexInput { get; }
```

- *Type:* string

---

##### `BranchNameRegexInput`<sup>Optional</sup> <a name="BranchNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegexInput"></a>

```csharp
public string BranchNameRegexInput { get; }
```

- *Type:* string

---

##### `CommitCommitterCheckInput`<sup>Optional</sup> <a name="CommitCommitterCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheckInput"></a>

```csharp
public object CommitCommitterCheckInput { get; }
```

- *Type:* object

---

##### `CommitMessageNegativeRegexInput`<sup>Optional</sup> <a name="CommitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegexInput"></a>

```csharp
public string CommitMessageNegativeRegexInput { get; }
```

- *Type:* string

---

##### `CommitMessageRegexInput`<sup>Optional</sup> <a name="CommitMessageRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegexInput"></a>

```csharp
public string CommitMessageRegexInput { get; }
```

- *Type:* string

---

##### `DenyDeleteTagInput`<sup>Optional</sup> <a name="DenyDeleteTagInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTagInput"></a>

```csharp
public object DenyDeleteTagInput { get; }
```

- *Type:* object

---

##### `FileNameRegexInput`<sup>Optional</sup> <a name="FileNameRegexInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegexInput"></a>

```csharp
public string FileNameRegexInput { get; }
```

- *Type:* string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `MemberCheckInput`<sup>Optional</sup> <a name="MemberCheckInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheckInput"></a>

```csharp
public object MemberCheckInput { get; }
```

- *Type:* object

---

##### `PreventSecretsInput`<sup>Optional</sup> <a name="PreventSecretsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecretsInput"></a>

```csharp
public object PreventSecretsInput { get; }
```

- *Type:* object

---

##### `RejectUnsignedCommitsInput`<sup>Optional</sup> <a name="RejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommitsInput"></a>

```csharp
public object RejectUnsignedCommitsInput { get; }
```

- *Type:* object

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.authorEmailRegex"></a>

```csharp
public string AuthorEmailRegex { get; }
```

- *Type:* string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.branchNameRegex"></a>

```csharp
public string BranchNameRegex { get; }
```

- *Type:* string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitCommitterCheck"></a>

```csharp
public object CommitCommitterCheck { get; }
```

- *Type:* object

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageNegativeRegex"></a>

```csharp
public string CommitMessageNegativeRegex { get; }
```

- *Type:* string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.commitMessageRegex"></a>

```csharp
public string CommitMessageRegex { get; }
```

- *Type:* string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.denyDeleteTag"></a>

```csharp
public object DenyDeleteTag { get; }
```

- *Type:* object

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.fileNameRegex"></a>

```csharp
public string FileNameRegex { get; }
```

- *Type:* string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.memberCheck"></a>

```csharp
public object MemberCheck { get; }
```

- *Type:* object

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.preventSecrets"></a>

```csharp
public object PreventSecrets { get; }
```

- *Type:* object

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.rejectUnsignedCommits"></a>

```csharp
public object RejectUnsignedCommits { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.project.ProjectPushRulesOutputReference.property.internalValue"></a>

```csharp
public ProjectPushRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.project.ProjectPushRules">ProjectPushRules</a>

---




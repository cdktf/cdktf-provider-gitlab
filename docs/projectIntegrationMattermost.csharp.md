# `projectIntegrationMattermost` Submodule <a name="`projectIntegrationMattermost` Submodule" id="@cdktf/provider-gitlab.projectIntegrationMattermost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationMattermost <a name="ProjectIntegrationMattermost" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost gitlab_project_integration_mattermost}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationMattermost(Construct Scope, string Id, ProjectIntegrationMattermostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig">ProjectIntegrationMattermostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig">ProjectIntegrationMattermostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssueChannel">ResetConfidentialIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteChannel">ResetConfidentialNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssueChannel">ResetIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestChannel">ResetMergeRequestChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteChannel">ResetNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineChannel">ResetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushChannel">ResetPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushChannel">ResetTagPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageChannel">ResetWikiPageChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetConfidentialIssueChannel` <a name="ResetConfidentialIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssueChannel"></a>

```csharp
private void ResetConfidentialIssueChannel()
```

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialIssuesEvents"></a>

```csharp
private void ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteChannel` <a name="ResetConfidentialNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteChannel"></a>

```csharp
private void ResetConfidentialNoteChannel()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetConfidentialNoteEvents"></a>

```csharp
private void ResetConfidentialNoteEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssueChannel` <a name="ResetIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssueChannel"></a>

```csharp
private void ResetIssueChannel()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetIssuesEvents"></a>

```csharp
private void ResetIssuesEvents()
```

##### `ResetMergeRequestChannel` <a name="ResetMergeRequestChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestChannel"></a>

```csharp
private void ResetMergeRequestChannel()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetMergeRequestsEvents"></a>

```csharp
private void ResetMergeRequestsEvents()
```

##### `ResetNoteChannel` <a name="ResetNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteChannel"></a>

```csharp
private void ResetNoteChannel()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNoteEvents"></a>

```csharp
private void ResetNoteEvents()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetNotifyOnlyBrokenPipelines"></a>

```csharp
private void ResetNotifyOnlyBrokenPipelines()
```

##### `ResetPipelineChannel` <a name="ResetPipelineChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineChannel"></a>

```csharp
private void ResetPipelineChannel()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPipelineEvents"></a>

```csharp
private void ResetPipelineEvents()
```

##### `ResetPushChannel` <a name="ResetPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushChannel"></a>

```csharp
private void ResetPushChannel()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetTagPushChannel` <a name="ResetTagPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushChannel"></a>

```csharp
private void ResetTagPushChannel()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetWikiPageChannel` <a name="ResetWikiPageChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageChannel"></a>

```csharp
private void ResetWikiPageChannel()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.resetWikiPageEvents"></a>

```csharp
private void ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationMattermost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMattermost.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMattermost.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMattermost.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMattermost.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationMattermost resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationMattermost to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationMattermost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationMattermost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannelInput">ConfidentialIssueChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannelInput">ConfidentialNoteChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannelInput">IssueChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannelInput">MergeRequestChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannelInput">NoteChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEventsInput">NoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannelInput">PipelineChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannelInput">PushChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEventsInput">PushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannelInput">TagPushChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhookInput">WebhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannelInput">WikiPageChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannel">IssueChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannel">NoteChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEvents">NoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannel">PipelineChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannel">PushChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEvents">PushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannel">TagPushChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhook">Webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannel">WikiPageChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `ConfidentialIssueChannelInput`<sup>Optional</sup> <a name="ConfidentialIssueChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannelInput"></a>

```csharp
public string ConfidentialIssueChannelInput { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEventsInput"></a>

```csharp
public object ConfidentialIssuesEventsInput { get; }
```

- *Type:* object

---

##### `ConfidentialNoteChannelInput`<sup>Optional</sup> <a name="ConfidentialNoteChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannelInput"></a>

```csharp
public string ConfidentialNoteChannelInput { get; }
```

- *Type:* string

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEventsInput"></a>

```csharp
public object ConfidentialNoteEventsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssueChannelInput`<sup>Optional</sup> <a name="IssueChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannelInput"></a>

```csharp
public string IssueChannelInput { get; }
```

- *Type:* string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEventsInput"></a>

```csharp
public object IssuesEventsInput { get; }
```

- *Type:* object

---

##### `MergeRequestChannelInput`<sup>Optional</sup> <a name="MergeRequestChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannelInput"></a>

```csharp
public string MergeRequestChannelInput { get; }
```

- *Type:* string

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEventsInput"></a>

```csharp
public object MergeRequestsEventsInput { get; }
```

- *Type:* object

---

##### `NoteChannelInput`<sup>Optional</sup> <a name="NoteChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannelInput"></a>

```csharp
public string NoteChannelInput { get; }
```

- *Type:* string

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEventsInput"></a>

```csharp
public object NoteEventsInput { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelinesInput"></a>

```csharp
public object NotifyOnlyBrokenPipelinesInput { get; }
```

- *Type:* object

---

##### `PipelineChannelInput`<sup>Optional</sup> <a name="PipelineChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannelInput"></a>

```csharp
public string PipelineChannelInput { get; }
```

- *Type:* string

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEventsInput"></a>

```csharp
public object PipelineEventsInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushChannelInput`<sup>Optional</sup> <a name="PushChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannelInput"></a>

```csharp
public string PushChannelInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEventsInput"></a>

```csharp
public object PushEventsInput { get; }
```

- *Type:* object

---

##### `TagPushChannelInput`<sup>Optional</sup> <a name="TagPushChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannelInput"></a>

```csharp
public string TagPushChannelInput { get; }
```

- *Type:* string

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEventsInput"></a>

```csharp
public object TagPushEventsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhookInput"></a>

```csharp
public string WebhookInput { get; }
```

- *Type:* string

---

##### `WikiPageChannelInput`<sup>Optional</sup> <a name="WikiPageChannelInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannelInput"></a>

```csharp
public string WikiPageChannelInput { get; }
```

- *Type:* string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEventsInput"></a>

```csharp
public object WikiPageEventsInput { get; }
```

- *Type:* object

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `ConfidentialIssueChannel`<sup>Required</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssueChannel"></a>

```csharp
public string ConfidentialIssueChannel { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; }
```

- *Type:* object

---

##### `ConfidentialNoteChannel`<sup>Required</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteChannel"></a>

```csharp
public string ConfidentialNoteChannel { get; }
```

- *Type:* string

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssueChannel`<sup>Required</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issueChannel"></a>

```csharp
public string IssueChannel { get; }
```

- *Type:* string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; }
```

- *Type:* object

---

##### `MergeRequestChannel`<sup>Required</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestChannel"></a>

```csharp
public string MergeRequestChannel { get; }
```

- *Type:* string

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; }
```

- *Type:* object

---

##### `NoteChannel`<sup>Required</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteChannel"></a>

```csharp
public string NoteChannel { get; }
```

- *Type:* string

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.noteEvents"></a>

```csharp
public object NoteEvents { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; }
```

- *Type:* object

---

##### `PipelineChannel`<sup>Required</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineChannel"></a>

```csharp
public string PipelineChannel { get; }
```

- *Type:* string

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushChannel`<sup>Required</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushChannel"></a>

```csharp
public string PushChannel { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.pushEvents"></a>

```csharp
public object PushEvents { get; }
```

- *Type:* object

---

##### `TagPushChannel`<sup>Required</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushChannel"></a>

```csharp
public string TagPushChannel { get; }
```

- *Type:* string

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.webhook"></a>

```csharp
public string Webhook { get; }
```

- *Type:* string

---

##### `WikiPageChannel`<sup>Required</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageChannel"></a>

```csharp
public string WikiPageChannel { get; }
```

- *Type:* string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermost.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationMattermostConfig <a name="ProjectIntegrationMattermostConfig" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationMattermostConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string Webhook,
    string BranchesToBeNotified = null,
    string ConfidentialIssueChannel = null,
    object ConfidentialIssuesEvents = null,
    string ConfidentialNoteChannel = null,
    object ConfidentialNoteEvents = null,
    string Id = null,
    string IssueChannel = null,
    object IssuesEvents = null,
    string MergeRequestChannel = null,
    object MergeRequestsEvents = null,
    string NoteChannel = null,
    object NoteEvents = null,
    object NotifyOnlyBrokenPipelines = null,
    string PipelineChannel = null,
    object PipelineEvents = null,
    string PushChannel = null,
    object PushEvents = null,
    string TagPushChannel = null,
    object TagPushEvents = null,
    string Username = null,
    string WikiPageChannel = null,
    object WikiPageEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.project">Project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.webhook">Webhook</a></code> | <code>string</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>string</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>string</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#id ProjectIntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issueChannel">IssueChannel</a></code> | <code>string</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>string</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteChannel">NoteChannel</a></code> | <code>string</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteEvents">NoteEvents</a></code> | <code>object</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineChannel">PipelineChannel</a></code> | <code>string</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushChannel">PushChannel</a></code> | <code>string</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushEvents">PushEvents</a></code> | <code>object</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushChannel">TagPushChannel</a></code> | <code>string</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.username">Username</a></code> | <code>string</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageChannel">WikiPageChannel</a></code> | <code>string</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | Enable notifications for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#project ProjectIntegrationMattermost#project}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.webhook"></a>

```csharp
public string Webhook { get; set; }
```

- *Type:* string

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#webhook ProjectIntegrationMattermost#webhook}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#branches_to_be_notified ProjectIntegrationMattermost#branches_to_be_notified}

---

##### `ConfidentialIssueChannel`<sup>Optional</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssueChannel"></a>

```csharp
public string ConfidentialIssueChannel { get; set; }
```

- *Type:* string

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#confidential_issue_channel ProjectIntegrationMattermost#confidential_issue_channel}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#confidential_issues_events ProjectIntegrationMattermost#confidential_issues_events}

---

##### `ConfidentialNoteChannel`<sup>Optional</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteChannel"></a>

```csharp
public string ConfidentialNoteChannel { get; set; }
```

- *Type:* string

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#confidential_note_channel ProjectIntegrationMattermost#confidential_note_channel}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#confidential_note_events ProjectIntegrationMattermost#confidential_note_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#id ProjectIntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssueChannel`<sup>Optional</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issueChannel"></a>

```csharp
public string IssueChannel { get; set; }
```

- *Type:* string

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#issue_channel ProjectIntegrationMattermost#issue_channel}

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#issues_events ProjectIntegrationMattermost#issues_events}

---

##### `MergeRequestChannel`<sup>Optional</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestChannel"></a>

```csharp
public string MergeRequestChannel { get; set; }
```

- *Type:* string

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#merge_request_channel ProjectIntegrationMattermost#merge_request_channel}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; set; }
```

- *Type:* object

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#merge_requests_events ProjectIntegrationMattermost#merge_requests_events}

---

##### `NoteChannel`<sup>Optional</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteChannel"></a>

```csharp
public string NoteChannel { get; set; }
```

- *Type:* string

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#note_channel ProjectIntegrationMattermost#note_channel}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.noteEvents"></a>

```csharp
public object NoteEvents { get; set; }
```

- *Type:* object

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#note_events ProjectIntegrationMattermost#note_events}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; set; }
```

- *Type:* object

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#notify_only_broken_pipelines ProjectIntegrationMattermost#notify_only_broken_pipelines}

---

##### `PipelineChannel`<sup>Optional</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineChannel"></a>

```csharp
public string PipelineChannel { get; set; }
```

- *Type:* string

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#pipeline_channel ProjectIntegrationMattermost#pipeline_channel}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; set; }
```

- *Type:* object

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#pipeline_events ProjectIntegrationMattermost#pipeline_events}

---

##### `PushChannel`<sup>Optional</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushChannel"></a>

```csharp
public string PushChannel { get; set; }
```

- *Type:* string

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#push_channel ProjectIntegrationMattermost#push_channel}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.pushEvents"></a>

```csharp
public object PushEvents { get; set; }
```

- *Type:* object

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#push_events ProjectIntegrationMattermost#push_events}

---

##### `TagPushChannel`<sup>Optional</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushChannel"></a>

```csharp
public string TagPushChannel { get; set; }
```

- *Type:* string

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#tag_push_channel ProjectIntegrationMattermost#tag_push_channel}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; set; }
```

- *Type:* object

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#tag_push_events ProjectIntegrationMattermost#tag_push_events}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#username ProjectIntegrationMattermost#username}

---

##### `WikiPageChannel`<sup>Optional</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageChannel"></a>

```csharp
public string WikiPageChannel { get; set; }
```

- *Type:* string

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#wiki_page_channel ProjectIntegrationMattermost#wiki_page_channel}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMattermost.ProjectIntegrationMattermostConfig.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; set; }
```

- *Type:* object

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.3.0/docs/resources/project_integration_mattermost#wiki_page_events ProjectIntegrationMattermost#wiki_page_events}

---




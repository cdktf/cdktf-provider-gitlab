# `integrationMattermost` Submodule <a name="`integrationMattermost` Submodule" id="@cdktf/provider-gitlab.integrationMattermost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationMattermost <a name="IntegrationMattermost" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost gitlab_integration_mattermost}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new IntegrationMattermost(Construct Scope, string Id, IntegrationMattermostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig">IntegrationMattermostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig">IntegrationMattermostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel">ResetConfidentialIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel">ResetConfidentialNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel">ResetIssueChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel">ResetMergeRequestChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel">ResetNoteChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel">ResetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel">ResetPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel">ResetTagPushChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel">ResetWikiPageChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetConfidentialIssueChannel` <a name="ResetConfidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssueChannel"></a>

```csharp
private void ResetConfidentialIssueChannel()
```

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialIssuesEvents"></a>

```csharp
private void ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteChannel` <a name="ResetConfidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteChannel"></a>

```csharp
private void ResetConfidentialNoteChannel()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetConfidentialNoteEvents"></a>

```csharp
private void ResetConfidentialNoteEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssueChannel` <a name="ResetIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssueChannel"></a>

```csharp
private void ResetIssueChannel()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetIssuesEvents"></a>

```csharp
private void ResetIssuesEvents()
```

##### `ResetMergeRequestChannel` <a name="ResetMergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestChannel"></a>

```csharp
private void ResetMergeRequestChannel()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetMergeRequestsEvents"></a>

```csharp
private void ResetMergeRequestsEvents()
```

##### `ResetNoteChannel` <a name="ResetNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteChannel"></a>

```csharp
private void ResetNoteChannel()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNoteEvents"></a>

```csharp
private void ResetNoteEvents()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetNotifyOnlyBrokenPipelines"></a>

```csharp
private void ResetNotifyOnlyBrokenPipelines()
```

##### `ResetPipelineChannel` <a name="ResetPipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineChannel"></a>

```csharp
private void ResetPipelineChannel()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPipelineEvents"></a>

```csharp
private void ResetPipelineEvents()
```

##### `ResetPushChannel` <a name="ResetPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushChannel"></a>

```csharp
private void ResetPushChannel()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetTagPushChannel` <a name="ResetTagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushChannel"></a>

```csharp
private void ResetTagPushChannel()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetWikiPageChannel` <a name="ResetWikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageChannel"></a>

```csharp
private void ResetWikiPageChannel()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.resetWikiPageEvents"></a>

```csharp
private void ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationMattermost.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationMattermost.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationMattermost.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationMattermost.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationMattermost resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationMattermost to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationMattermost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationMattermost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput">ConfidentialIssueChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput">ConfidentialNoteChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput">IssueChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput">MergeRequestChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput">NoteChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput">NoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput">PipelineChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput">PushChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput">PushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput">TagPushChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput">WebhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput">WikiPageChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel">IssueChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel">NoteChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents">NoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel">PipelineChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel">PushChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents">PushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel">TagPushChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook">Webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel">WikiPageChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `ConfidentialIssueChannelInput`<sup>Optional</sup> <a name="ConfidentialIssueChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannelInput"></a>

```csharp
public string ConfidentialIssueChannelInput { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEventsInput"></a>

```csharp
public object ConfidentialIssuesEventsInput { get; }
```

- *Type:* object

---

##### `ConfidentialNoteChannelInput`<sup>Optional</sup> <a name="ConfidentialNoteChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannelInput"></a>

```csharp
public string ConfidentialNoteChannelInput { get; }
```

- *Type:* string

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEventsInput"></a>

```csharp
public object ConfidentialNoteEventsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssueChannelInput`<sup>Optional</sup> <a name="IssueChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannelInput"></a>

```csharp
public string IssueChannelInput { get; }
```

- *Type:* string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEventsInput"></a>

```csharp
public object IssuesEventsInput { get; }
```

- *Type:* object

---

##### `MergeRequestChannelInput`<sup>Optional</sup> <a name="MergeRequestChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannelInput"></a>

```csharp
public string MergeRequestChannelInput { get; }
```

- *Type:* string

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEventsInput"></a>

```csharp
public object MergeRequestsEventsInput { get; }
```

- *Type:* object

---

##### `NoteChannelInput`<sup>Optional</sup> <a name="NoteChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannelInput"></a>

```csharp
public string NoteChannelInput { get; }
```

- *Type:* string

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEventsInput"></a>

```csharp
public object NoteEventsInput { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelinesInput"></a>

```csharp
public object NotifyOnlyBrokenPipelinesInput { get; }
```

- *Type:* object

---

##### `PipelineChannelInput`<sup>Optional</sup> <a name="PipelineChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannelInput"></a>

```csharp
public string PipelineChannelInput { get; }
```

- *Type:* string

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEventsInput"></a>

```csharp
public object PipelineEventsInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushChannelInput`<sup>Optional</sup> <a name="PushChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannelInput"></a>

```csharp
public string PushChannelInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEventsInput"></a>

```csharp
public object PushEventsInput { get; }
```

- *Type:* object

---

##### `TagPushChannelInput`<sup>Optional</sup> <a name="TagPushChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannelInput"></a>

```csharp
public string TagPushChannelInput { get; }
```

- *Type:* string

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEventsInput"></a>

```csharp
public object TagPushEventsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhookInput"></a>

```csharp
public string WebhookInput { get; }
```

- *Type:* string

---

##### `WikiPageChannelInput`<sup>Optional</sup> <a name="WikiPageChannelInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannelInput"></a>

```csharp
public string WikiPageChannelInput { get; }
```

- *Type:* string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEventsInput"></a>

```csharp
public object WikiPageEventsInput { get; }
```

- *Type:* object

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `ConfidentialIssueChannel`<sup>Required</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssueChannel"></a>

```csharp
public string ConfidentialIssueChannel { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; }
```

- *Type:* object

---

##### `ConfidentialNoteChannel`<sup>Required</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteChannel"></a>

```csharp
public string ConfidentialNoteChannel { get; }
```

- *Type:* string

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssueChannel`<sup>Required</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issueChannel"></a>

```csharp
public string IssueChannel { get; }
```

- *Type:* string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; }
```

- *Type:* object

---

##### `MergeRequestChannel`<sup>Required</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestChannel"></a>

```csharp
public string MergeRequestChannel { get; }
```

- *Type:* string

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; }
```

- *Type:* object

---

##### `NoteChannel`<sup>Required</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteChannel"></a>

```csharp
public string NoteChannel { get; }
```

- *Type:* string

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.noteEvents"></a>

```csharp
public object NoteEvents { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; }
```

- *Type:* object

---

##### `PipelineChannel`<sup>Required</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineChannel"></a>

```csharp
public string PipelineChannel { get; }
```

- *Type:* string

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushChannel`<sup>Required</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushChannel"></a>

```csharp
public string PushChannel { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.pushEvents"></a>

```csharp
public object PushEvents { get; }
```

- *Type:* object

---

##### `TagPushChannel`<sup>Required</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushChannel"></a>

```csharp
public string TagPushChannel { get; }
```

- *Type:* string

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.webhook"></a>

```csharp
public string Webhook { get; }
```

- *Type:* string

---

##### `WikiPageChannel`<sup>Required</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageChannel"></a>

```csharp
public string WikiPageChannel { get; }
```

- *Type:* string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermost.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationMattermostConfig <a name="IntegrationMattermostConfig" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new IntegrationMattermostConfig {
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
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project">Project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook">Webhook</a></code> | <code>string</code> | Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected". |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel">ConfidentialIssueChannel</a></code> | <code>string</code> | The name of the channel to receive confidential issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel">ConfidentialNoteChannel</a></code> | <code>string</code> | The name of the channel to receive confidential note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel">IssueChannel</a></code> | <code>string</code> | The name of the channel to receive issue events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel">MergeRequestChannel</a></code> | <code>string</code> | The name of the channel to receive merge request events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel">NoteChannel</a></code> | <code>string</code> | The name of the channel to receive note events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents">NoteEvents</a></code> | <code>object</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel">PipelineChannel</a></code> | <code>string</code> | The name of the channel to receive pipeline events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel">PushChannel</a></code> | <code>string</code> | The name of the channel to receive push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents">PushEvents</a></code> | <code>object</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel">TagPushChannel</a></code> | <code>string</code> | The name of the channel to receive tag push events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username">Username</a></code> | <code>string</code> | Username to use. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel">WikiPageChannel</a></code> | <code>string</code> | The name of the channel to receive wiki page events notifications. |
| <code><a href="#@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | Enable notifications for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#project IntegrationMattermost#project}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.webhook"></a>

```csharp
public string Webhook { get; set; }
```

- *Type:* string

Webhook URL (Example, https://mattermost.yourdomain.com/hooks/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#webhook IntegrationMattermost#webhook}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are "all", "default", "protected", and "default_and_protected".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#branches_to_be_notified IntegrationMattermost#branches_to_be_notified}

---

##### `ConfidentialIssueChannel`<sup>Optional</sup> <a name="ConfidentialIssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssueChannel"></a>

```csharp
public string ConfidentialIssueChannel { get; set; }
```

- *Type:* string

The name of the channel to receive confidential issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#confidential_issue_channel IntegrationMattermost#confidential_issue_channel}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#confidential_issues_events IntegrationMattermost#confidential_issues_events}

---

##### `ConfidentialNoteChannel`<sup>Optional</sup> <a name="ConfidentialNoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteChannel"></a>

```csharp
public string ConfidentialNoteChannel { get; set; }
```

- *Type:* string

The name of the channel to receive confidential note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#confidential_note_channel IntegrationMattermost#confidential_note_channel}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#confidential_note_events IntegrationMattermost#confidential_note_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#id IntegrationMattermost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssueChannel`<sup>Optional</sup> <a name="IssueChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issueChannel"></a>

```csharp
public string IssueChannel { get; set; }
```

- *Type:* string

The name of the channel to receive issue events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#issue_channel IntegrationMattermost#issue_channel}

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#issues_events IntegrationMattermost#issues_events}

---

##### `MergeRequestChannel`<sup>Optional</sup> <a name="MergeRequestChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestChannel"></a>

```csharp
public string MergeRequestChannel { get; set; }
```

- *Type:* string

The name of the channel to receive merge request events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#merge_request_channel IntegrationMattermost#merge_request_channel}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; set; }
```

- *Type:* object

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#merge_requests_events IntegrationMattermost#merge_requests_events}

---

##### `NoteChannel`<sup>Optional</sup> <a name="NoteChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteChannel"></a>

```csharp
public string NoteChannel { get; set; }
```

- *Type:* string

The name of the channel to receive note events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#note_channel IntegrationMattermost#note_channel}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.noteEvents"></a>

```csharp
public object NoteEvents { get; set; }
```

- *Type:* object

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#note_events IntegrationMattermost#note_events}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; set; }
```

- *Type:* object

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#notify_only_broken_pipelines IntegrationMattermost#notify_only_broken_pipelines}

---

##### `PipelineChannel`<sup>Optional</sup> <a name="PipelineChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineChannel"></a>

```csharp
public string PipelineChannel { get; set; }
```

- *Type:* string

The name of the channel to receive pipeline events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#pipeline_channel IntegrationMattermost#pipeline_channel}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; set; }
```

- *Type:* object

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#pipeline_events IntegrationMattermost#pipeline_events}

---

##### `PushChannel`<sup>Optional</sup> <a name="PushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushChannel"></a>

```csharp
public string PushChannel { get; set; }
```

- *Type:* string

The name of the channel to receive push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#push_channel IntegrationMattermost#push_channel}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.pushEvents"></a>

```csharp
public object PushEvents { get; set; }
```

- *Type:* object

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#push_events IntegrationMattermost#push_events}

---

##### `TagPushChannel`<sup>Optional</sup> <a name="TagPushChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushChannel"></a>

```csharp
public string TagPushChannel { get; set; }
```

- *Type:* string

The name of the channel to receive tag push events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#tag_push_channel IntegrationMattermost#tag_push_channel}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; set; }
```

- *Type:* object

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#tag_push_events IntegrationMattermost#tag_push_events}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#username IntegrationMattermost#username}

---

##### `WikiPageChannel`<sup>Optional</sup> <a name="WikiPageChannel" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageChannel"></a>

```csharp
public string WikiPageChannel { get; set; }
```

- *Type:* string

The name of the channel to receive wiki page events notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#wiki_page_channel IntegrationMattermost#wiki_page_channel}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.integrationMattermost.IntegrationMattermostConfig.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; set; }
```

- *Type:* object

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/integration_mattermost#wiki_page_events IntegrationMattermost#wiki_page_events}

---




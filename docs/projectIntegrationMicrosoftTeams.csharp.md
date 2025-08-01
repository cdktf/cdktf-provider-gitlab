# `projectIntegrationMicrosoftTeams` Submodule <a name="`projectIntegrationMicrosoftTeams` Submodule" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationMicrosoftTeams <a name="ProjectIntegrationMicrosoftTeams" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams gitlab_project_integration_microsoft_teams}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationMicrosoftTeams(Construct Scope, string Id, ProjectIntegrationMicrosoftTeamsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig">ProjectIntegrationMicrosoftTeamsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig">ProjectIntegrationMicrosoftTeamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialIssuesEvents"></a>

```csharp
private void ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetConfidentialNoteEvents"></a>

```csharp
private void ResetConfidentialNoteEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetIssuesEvents"></a>

```csharp
private void ResetIssuesEvents()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetMergeRequestsEvents"></a>

```csharp
private void ResetMergeRequestsEvents()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNoteEvents"></a>

```csharp
private void ResetNoteEvents()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetNotifyOnlyBrokenPipelines"></a>

```csharp
private void ResetNotifyOnlyBrokenPipelines()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPipelineEvents"></a>

```csharp
private void ResetPipelineEvents()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.resetWikiPageEvents"></a>

```csharp
private void ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMicrosoftTeams.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMicrosoftTeams.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMicrosoftTeams.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationMicrosoftTeams.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationMicrosoftTeams resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationMicrosoftTeams to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationMicrosoftTeams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationMicrosoftTeams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEventsInput">NoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEventsInput">PushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhookInput">WebhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEvents">NoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEvents">PushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhook">Webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEventsInput"></a>

```csharp
public object ConfidentialIssuesEventsInput { get; }
```

- *Type:* object

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEventsInput"></a>

```csharp
public object ConfidentialNoteEventsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEventsInput"></a>

```csharp
public object IssuesEventsInput { get; }
```

- *Type:* object

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEventsInput"></a>

```csharp
public object MergeRequestsEventsInput { get; }
```

- *Type:* object

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEventsInput"></a>

```csharp
public object NoteEventsInput { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelinesInput"></a>

```csharp
public object NotifyOnlyBrokenPipelinesInput { get; }
```

- *Type:* object

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEventsInput"></a>

```csharp
public object PipelineEventsInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEventsInput"></a>

```csharp
public object PushEventsInput { get; }
```

- *Type:* object

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEventsInput"></a>

```csharp
public object TagPushEventsInput { get; }
```

- *Type:* object

---

##### `WebhookInput`<sup>Optional</sup> <a name="WebhookInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhookInput"></a>

```csharp
public string WebhookInput { get; }
```

- *Type:* string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEventsInput"></a>

```csharp
public object WikiPageEventsInput { get; }
```

- *Type:* object

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; }
```

- *Type:* object

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; }
```

- *Type:* object

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; }
```

- *Type:* object

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.noteEvents"></a>

```csharp
public object NoteEvents { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; }
```

- *Type:* object

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.pushEvents"></a>

```csharp
public object PushEvents { get; }
```

- *Type:* object

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; }
```

- *Type:* object

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.webhook"></a>

```csharp
public string Webhook { get; }
```

- *Type:* string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeams.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationMicrosoftTeamsConfig <a name="ProjectIntegrationMicrosoftTeamsConfig" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationMicrosoftTeamsConfig {
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
    object ConfidentialIssuesEvents = null,
    object ConfidentialNoteEvents = null,
    string Id = null,
    object IssuesEvents = null,
    object MergeRequestsEvents = null,
    object NoteEvents = null,
    object NotifyOnlyBrokenPipelines = null,
    object PipelineEvents = null,
    object PushEvents = null,
    object TagPushEvents = null,
    object WikiPageEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.project">Project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.webhook">Webhook</a></code> | <code>string</code> | The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | Enable notifications for confidential issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | Enable notifications for issue events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.noteEvents">NoteEvents</a></code> | <code>object</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | Send notifications for broken pipelines. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pushEvents">PushEvents</a></code> | <code>object</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | Enable notifications for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#project ProjectIntegrationMicrosoftTeams#project}

---

##### `Webhook`<sup>Required</sup> <a name="Webhook" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.webhook"></a>

```csharp
public string Webhook { get; set; }
```

- *Type:* string

The Microsoft Teams webhook (Example, https://outlook.office.com/webhook/...). This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#webhook ProjectIntegrationMicrosoftTeams#webhook}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are “all”, “default”, “protected”, and “default_and_protected”. The default value is “default”.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#branches_to_be_notified ProjectIntegrationMicrosoftTeams#branches_to_be_notified}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#confidential_issues_events ProjectIntegrationMicrosoftTeams#confidential_issues_events}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#confidential_note_events ProjectIntegrationMicrosoftTeams#confidential_note_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#id ProjectIntegrationMicrosoftTeams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for issue events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#issues_events ProjectIntegrationMicrosoftTeams#issues_events}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; set; }
```

- *Type:* object

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#merge_requests_events ProjectIntegrationMicrosoftTeams#merge_requests_events}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.noteEvents"></a>

```csharp
public object NoteEvents { get; set; }
```

- *Type:* object

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#note_events ProjectIntegrationMicrosoftTeams#note_events}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; set; }
```

- *Type:* object

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#notify_only_broken_pipelines ProjectIntegrationMicrosoftTeams#notify_only_broken_pipelines}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; set; }
```

- *Type:* object

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#pipeline_events ProjectIntegrationMicrosoftTeams#pipeline_events}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.pushEvents"></a>

```csharp
public object PushEvents { get; set; }
```

- *Type:* object

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#push_events ProjectIntegrationMicrosoftTeams#push_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; set; }
```

- *Type:* object

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#tag_push_events ProjectIntegrationMicrosoftTeams#tag_push_events}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationMicrosoftTeams.ProjectIntegrationMicrosoftTeamsConfig.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; set; }
```

- *Type:* object

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_integration_microsoft_teams#wiki_page_events ProjectIntegrationMicrosoftTeams#wiki_page_events}

---




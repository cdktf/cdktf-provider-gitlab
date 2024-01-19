# `projectIssue` Submodule <a name="`projectIssue` Submodule" id="@cdktf/provider-gitlab.projectIssue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssue <a name="ProjectIssue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue gitlab_project_issue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssue(Construct Scope, string Id, ProjectIssueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig">ProjectIssueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig">ProjectIssueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds">ResetAssigneeIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential">ResetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy">ResetDeleteOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked">ResetDiscussionLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve">ResetDiscussionToResolve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate">ResetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId">ResetEpicIssueId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid">ResetIid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType">ResetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf">ResetMergeRequestToResolveDiscussionsOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId">ResetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssigneeIds` <a name="ResetAssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetAssigneeIds"></a>

```csharp
private void ResetAssigneeIds()
```

##### `ResetConfidential` <a name="ResetConfidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetConfidential"></a>

```csharp
private void ResetConfidential()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetDeleteOnDestroy` <a name="ResetDeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDeleteOnDestroy"></a>

```csharp
private void ResetDeleteOnDestroy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiscussionLocked` <a name="ResetDiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionLocked"></a>

```csharp
private void ResetDiscussionLocked()
```

##### `ResetDiscussionToResolve` <a name="ResetDiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDiscussionToResolve"></a>

```csharp
private void ResetDiscussionToResolve()
```

##### `ResetDueDate` <a name="ResetDueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetDueDate"></a>

```csharp
private void ResetDueDate()
```

##### `ResetEpicIssueId` <a name="ResetEpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetEpicIssueId"></a>

```csharp
private void ResetEpicIssueId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIid` <a name="ResetIid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIid"></a>

```csharp
private void ResetIid()
```

##### `ResetIssueType` <a name="ResetIssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetIssueType"></a>

```csharp
private void ResetIssueType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMergeRequestToResolveDiscussionsOf` <a name="ResetMergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMergeRequestToResolveDiscussionsOf"></a>

```csharp
private void ResetMergeRequestToResolveDiscussionsOf()
```

##### `ResetMilestoneId` <a name="ResetMilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetMilestoneId"></a>

```csharp
private void ResetMilestoneId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.resetWeight"></a>

```csharp
private void ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIssue resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIssue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIssue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId">AuthorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt">ClosedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId">ClosedByUserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes">Downvotes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId">EpicId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate">HumanTimeEstimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent">HumanTotalTimeSpent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId">IssueId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId">IssueLinkId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links">Links</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount">MergeRequestsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId">MovedToId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references">References</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed">Subscribed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus">TaskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate">TimeEstimate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent">TotalTimeSpent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes">Upvotes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount">UserNotesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput">AssigneeIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput">ConfidentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput">CreatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput">DeleteOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput">DiscussionLockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput">DiscussionToResolveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput">DueDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput">EpicIssueIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput">IidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput">IssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput">MergeRequestToResolveDiscussionsOfInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput">MilestoneIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput">UpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds">AssigneeIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential">Confidential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy">DeleteOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked">DiscussionLocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve">DiscussionToResolve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate">DueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId">EpicIssueId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid">Iid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType">IssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf">MergeRequestToResolveDiscussionsOf</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId">MilestoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight">Weight</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.authorId"></a>

```csharp
public double AuthorId { get; }
```

- *Type:* double

---

##### `ClosedAt`<sup>Required</sup> <a name="ClosedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedAt"></a>

```csharp
public string ClosedAt { get; }
```

- *Type:* string

---

##### `ClosedByUserId`<sup>Required</sup> <a name="ClosedByUserId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.closedByUserId"></a>

```csharp
public double ClosedByUserId { get; }
```

- *Type:* double

---

##### `Downvotes`<sup>Required</sup> <a name="Downvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.downvotes"></a>

```csharp
public double Downvotes { get; }
```

- *Type:* double

---

##### `EpicId`<sup>Required</sup> <a name="EpicId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicId"></a>

```csharp
public double EpicId { get; }
```

- *Type:* double

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `HumanTimeEstimate`<sup>Required</sup> <a name="HumanTimeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTimeEstimate"></a>

```csharp
public string HumanTimeEstimate { get; }
```

- *Type:* string

---

##### `HumanTotalTimeSpent`<sup>Required</sup> <a name="HumanTotalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.humanTotalTimeSpent"></a>

```csharp
public string HumanTotalTimeSpent { get; }
```

- *Type:* string

---

##### `IssueId`<sup>Required</sup> <a name="IssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueId"></a>

```csharp
public double IssueId { get; }
```

- *Type:* double

---

##### `IssueLinkId`<sup>Required</sup> <a name="IssueLinkId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueLinkId"></a>

```csharp
public double IssueLinkId { get; }
```

- *Type:* double

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.links"></a>

```csharp
public StringMap Links { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MergeRequestsCount`<sup>Required</sup> <a name="MergeRequestsCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestsCount"></a>

```csharp
public double MergeRequestsCount { get; }
```

- *Type:* double

---

##### `MovedToId`<sup>Required</sup> <a name="MovedToId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.movedToId"></a>

```csharp
public double MovedToId { get; }
```

- *Type:* double

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.references"></a>

```csharp
public StringMap References { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Subscribed`<sup>Required</sup> <a name="Subscribed" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.subscribed"></a>

```csharp
public IResolvable Subscribed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TaskCompletionStatus`<sup>Required</sup> <a name="TaskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.taskCompletionStatus"></a>

```csharp
public ProjectIssueTaskCompletionStatusList TaskCompletionStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList">ProjectIssueTaskCompletionStatusList</a>

---

##### `TimeEstimate`<sup>Required</sup> <a name="TimeEstimate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.timeEstimate"></a>

```csharp
public double TimeEstimate { get; }
```

- *Type:* double

---

##### `TotalTimeSpent`<sup>Required</sup> <a name="TotalTimeSpent" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.totalTimeSpent"></a>

```csharp
public double TotalTimeSpent { get; }
```

- *Type:* double

---

##### `Upvotes`<sup>Required</sup> <a name="Upvotes" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.upvotes"></a>

```csharp
public double Upvotes { get; }
```

- *Type:* double

---

##### `UserNotesCount`<sup>Required</sup> <a name="UserNotesCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.userNotesCount"></a>

```csharp
public double UserNotesCount { get; }
```

- *Type:* double

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `AssigneeIdsInput`<sup>Optional</sup> <a name="AssigneeIdsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIdsInput"></a>

```csharp
public double[] AssigneeIdsInput { get; }
```

- *Type:* double[]

---

##### `ConfidentialInput`<sup>Optional</sup> <a name="ConfidentialInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidentialInput"></a>

```csharp
public object ConfidentialInput { get; }
```

- *Type:* object

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAtInput"></a>

```csharp
public string CreatedAtInput { get; }
```

- *Type:* string

---

##### `DeleteOnDestroyInput`<sup>Optional</sup> <a name="DeleteOnDestroyInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroyInput"></a>

```csharp
public object DeleteOnDestroyInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscussionLockedInput`<sup>Optional</sup> <a name="DiscussionLockedInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLockedInput"></a>

```csharp
public object DiscussionLockedInput { get; }
```

- *Type:* object

---

##### `DiscussionToResolveInput`<sup>Optional</sup> <a name="DiscussionToResolveInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolveInput"></a>

```csharp
public string DiscussionToResolveInput { get; }
```

- *Type:* string

---

##### `DueDateInput`<sup>Optional</sup> <a name="DueDateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDateInput"></a>

```csharp
public string DueDateInput { get; }
```

- *Type:* string

---

##### `EpicIssueIdInput`<sup>Optional</sup> <a name="EpicIssueIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueIdInput"></a>

```csharp
public double EpicIssueIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IidInput`<sup>Optional</sup> <a name="IidInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iidInput"></a>

```csharp
public double IidInput { get; }
```

- *Type:* double

---

##### `IssueTypeInput`<sup>Optional</sup> <a name="IssueTypeInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueTypeInput"></a>

```csharp
public string IssueTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `MergeRequestToResolveDiscussionsOfInput`<sup>Optional</sup> <a name="MergeRequestToResolveDiscussionsOfInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOfInput"></a>

```csharp
public double MergeRequestToResolveDiscussionsOfInput { get; }
```

- *Type:* double

---

##### `MilestoneIdInput`<sup>Optional</sup> <a name="MilestoneIdInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneIdInput"></a>

```csharp
public double MilestoneIdInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAtInput"></a>

```csharp
public string UpdatedAtInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `AssigneeIds`<sup>Required</sup> <a name="AssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.assigneeIds"></a>

```csharp
public double[] AssigneeIds { get; }
```

- *Type:* double[]

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.confidential"></a>

```csharp
public object Confidential { get; }
```

- *Type:* object

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeleteOnDestroy`<sup>Required</sup> <a name="DeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.deleteOnDestroy"></a>

```csharp
public object DeleteOnDestroy { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscussionLocked`<sup>Required</sup> <a name="DiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionLocked"></a>

```csharp
public object DiscussionLocked { get; }
```

- *Type:* object

---

##### `DiscussionToResolve`<sup>Required</sup> <a name="DiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.discussionToResolve"></a>

```csharp
public string DiscussionToResolve { get; }
```

- *Type:* string

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.dueDate"></a>

```csharp
public string DueDate { get; }
```

- *Type:* string

---

##### `EpicIssueId`<sup>Required</sup> <a name="EpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.epicIssueId"></a>

```csharp
public double EpicIssueId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.iid"></a>

```csharp
public double Iid { get; }
```

- *Type:* double

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.issueType"></a>

```csharp
public string IssueType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `MergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="MergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.mergeRequestToResolveDiscussionsOf"></a>

```csharp
public double MergeRequestToResolveDiscussionsOf { get; }
```

- *Type:* double

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.milestoneId"></a>

```csharp
public double MilestoneId { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueConfig <a name="ProjectIssueConfig" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string Title,
    double[] AssigneeIds = null,
    object Confidential = null,
    string CreatedAt = null,
    object DeleteOnDestroy = null,
    string Description = null,
    object DiscussionLocked = null,
    string DiscussionToResolve = null,
    string DueDate = null,
    double EpicIssueId = null,
    string Id = null,
    double Iid = null,
    string IssueType = null,
    string[] Labels = null,
    double MergeRequestToResolveDiscussionsOf = null,
    double MilestoneId = null,
    string State = null,
    string UpdatedAt = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project">Project</a></code> | <code>string</code> | The name or ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title">Title</a></code> | <code>string</code> | The title of the issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds">AssigneeIds</a></code> | <code>double[]</code> | The IDs of the users to assign the issue to. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential">Confidential</a></code> | <code>object</code> | Set an issue to be confidential. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | When the issue was created. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy">DeleteOnDestroy</a></code> | <code>object</code> | Whether the issue is deleted instead of closed during destroy. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description">Description</a></code> | <code>string</code> | The description of an issue. Limited to 1,048,576 characters. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked">DiscussionLocked</a></code> | <code>object</code> | Whether the issue is locked for discussions or not. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve">DiscussionToResolve</a></code> | <code>string</code> | The ID of a discussion to resolve. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate">DueDate</a></code> | <code>string</code> | The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId">EpicIssueId</a></code> | <code>double</code> | The ID of the epic issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#id ProjectIssue#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid">Iid</a></code> | <code>double</code> | The internal ID of the project's issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType">IssueType</a></code> | <code>string</code> | The type of issue. Valid values are: `issue`, `incident`, `test_case`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels">Labels</a></code> | <code>string[]</code> | The labels of an issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf">MergeRequestToResolveDiscussionsOf</a></code> | <code>double</code> | The IID of a merge request in which to resolve all issues. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId">MilestoneId</a></code> | <code>double</code> | The global ID of a milestone to assign issue. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state">State</a></code> | <code>string</code> | The state of the issue. Valid values are: `opened`, `closed`. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight">Weight</a></code> | <code>double</code> | The weight of the issue. Valid values are greater than or equal to 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#project ProjectIssue#project}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#title ProjectIssue#title}

---

##### `AssigneeIds`<sup>Optional</sup> <a name="AssigneeIds" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.assigneeIds"></a>

```csharp
public double[] AssigneeIds { get; set; }
```

- *Type:* double[]

The IDs of the users to assign the issue to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#assignee_ids ProjectIssue#assignee_ids}

---

##### `Confidential`<sup>Optional</sup> <a name="Confidential" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.confidential"></a>

```csharp
public object Confidential { get; set; }
```

- *Type:* object

Set an issue to be confidential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#confidential ProjectIssue#confidential}

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; set; }
```

- *Type:* string

When the issue was created.

Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z. Requires administrator or project/group owner rights.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#created_at ProjectIssue#created_at}

---

##### `DeleteOnDestroy`<sup>Optional</sup> <a name="DeleteOnDestroy" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.deleteOnDestroy"></a>

```csharp
public object DeleteOnDestroy { get; set; }
```

- *Type:* object

Whether the issue is deleted instead of closed during destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#delete_on_destroy ProjectIssue#delete_on_destroy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of an issue. Limited to 1,048,576 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#description ProjectIssue#description}

---

##### `DiscussionLocked`<sup>Optional</sup> <a name="DiscussionLocked" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionLocked"></a>

```csharp
public object DiscussionLocked { get; set; }
```

- *Type:* object

Whether the issue is locked for discussions or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#discussion_locked ProjectIssue#discussion_locked}

---

##### `DiscussionToResolve`<sup>Optional</sup> <a name="DiscussionToResolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.discussionToResolve"></a>

```csharp
public string DiscussionToResolve { get; set; }
```

- *Type:* string

The ID of a discussion to resolve.

This fills out the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#discussion_to_resolve ProjectIssue#discussion_to_resolve}

---

##### `DueDate`<sup>Optional</sup> <a name="DueDate" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.dueDate"></a>

```csharp
public string DueDate { get; set; }
```

- *Type:* string

The due date. Date time string in the format YYYY-MM-DD, for example 2016-03-11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#due_date ProjectIssue#due_date}

---

##### `EpicIssueId`<sup>Optional</sup> <a name="EpicIssueId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.epicIssueId"></a>

```csharp
public double EpicIssueId { get; set; }
```

- *Type:* double

The ID of the epic issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#epic_issue_id ProjectIssue#epic_issue_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#id ProjectIssue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iid`<sup>Optional</sup> <a name="Iid" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.iid"></a>

```csharp
public double Iid { get; set; }
```

- *Type:* double

The internal ID of the project's issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#iid ProjectIssue#iid}

---

##### `IssueType`<sup>Optional</sup> <a name="IssueType" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.issueType"></a>

```csharp
public string IssueType { get; set; }
```

- *Type:* string

The type of issue. Valid values are: `issue`, `incident`, `test_case`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#issue_type ProjectIssue#issue_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

The labels of an issue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#labels ProjectIssue#labels}

---

##### `MergeRequestToResolveDiscussionsOf`<sup>Optional</sup> <a name="MergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.mergeRequestToResolveDiscussionsOf"></a>

```csharp
public double MergeRequestToResolveDiscussionsOf { get; set; }
```

- *Type:* double

The IID of a merge request in which to resolve all issues.

This fills out the issue with a default description and mark all discussions as resolved. When passing a description or title, these values take precedence over the default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#merge_request_to_resolve_discussions_of ProjectIssue#merge_request_to_resolve_discussions_of}

---

##### `MilestoneId`<sup>Optional</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.milestoneId"></a>

```csharp
public double MilestoneId { get; set; }
```

- *Type:* double

The global ID of a milestone to assign issue.

To find the milestone_id associated with a milestone, view an issue with the milestone assigned and use the API to retrieve the issue's details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#milestone_id ProjectIssue#milestone_id}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The state of the issue. Valid values are: `opened`, `closed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#state ProjectIssue#state}

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; set; }
```

- *Type:* string

When the issue was updated. Date time string, ISO 8601 formatted, for example 2016-03-11T03:45:40Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#updated_at ProjectIssue#updated_at}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The weight of the issue. Valid values are greater than or equal to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.8.0/docs/resources/project_issue#weight ProjectIssue#weight}

---

### ProjectIssueTaskCompletionStatus <a name="ProjectIssueTaskCompletionStatus" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueTaskCompletionStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueTaskCompletionStatusList <a name="ProjectIssueTaskCompletionStatusList" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueTaskCompletionStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get"></a>

```csharp
private ProjectIssueTaskCompletionStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ProjectIssueTaskCompletionStatusOutputReference <a name="ProjectIssueTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueTaskCompletionStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount">CompletedCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompletedCount`<sup>Required</sup> <a name="CompletedCount" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.completedCount"></a>

```csharp
public double CompletedCount { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatusOutputReference.property.internalValue"></a>

```csharp
public ProjectIssueTaskCompletionStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssue.ProjectIssueTaskCompletionStatus">ProjectIssueTaskCompletionStatus</a>

---




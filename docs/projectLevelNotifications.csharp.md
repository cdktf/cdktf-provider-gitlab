# `projectLevelNotifications` Submodule <a name="`projectLevelNotifications` Submodule" id="@cdktf/provider-gitlab.projectLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelNotifications <a name="ProjectLevelNotifications" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications gitlab_project_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectLevelNotifications(Construct Scope, string Id, ProjectLevelNotificationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig">ProjectLevelNotificationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig">ProjectLevelNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue">ResetCloseIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest">ResetCloseMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline">ResetFailedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline">ResetFixedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue">ResetIssueDue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest">ResetMergeMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds">ResetMergeWhenPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject">ResetMovedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue">ResetNewIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest">ResetNewMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote">ResetNewNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest">ResetPushToMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue">ResetReassignIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest">ResetReassignMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue">ResetReopenIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest">ResetReopenMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline">ResetSuccessPipeline</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCloseIssue` <a name="ResetCloseIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseIssue"></a>

```csharp
private void ResetCloseIssue()
```

##### `ResetCloseMergeRequest` <a name="ResetCloseMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetCloseMergeRequest"></a>

```csharp
private void ResetCloseMergeRequest()
```

##### `ResetFailedPipeline` <a name="ResetFailedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFailedPipeline"></a>

```csharp
private void ResetFailedPipeline()
```

##### `ResetFixedPipeline` <a name="ResetFixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetFixedPipeline"></a>

```csharp
private void ResetFixedPipeline()
```

##### `ResetIssueDue` <a name="ResetIssueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetIssueDue"></a>

```csharp
private void ResetIssueDue()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetMergeMergeRequest` <a name="ResetMergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeMergeRequest"></a>

```csharp
private void ResetMergeMergeRequest()
```

##### `ResetMergeWhenPipelineSucceeds` <a name="ResetMergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```csharp
private void ResetMergeWhenPipelineSucceeds()
```

##### `ResetMovedProject` <a name="ResetMovedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetMovedProject"></a>

```csharp
private void ResetMovedProject()
```

##### `ResetNewIssue` <a name="ResetNewIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewIssue"></a>

```csharp
private void ResetNewIssue()
```

##### `ResetNewMergeRequest` <a name="ResetNewMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewMergeRequest"></a>

```csharp
private void ResetNewMergeRequest()
```

##### `ResetNewNote` <a name="ResetNewNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetNewNote"></a>

```csharp
private void ResetNewNote()
```

##### `ResetPushToMergeRequest` <a name="ResetPushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetPushToMergeRequest"></a>

```csharp
private void ResetPushToMergeRequest()
```

##### `ResetReassignIssue` <a name="ResetReassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignIssue"></a>

```csharp
private void ResetReassignIssue()
```

##### `ResetReassignMergeRequest` <a name="ResetReassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReassignMergeRequest"></a>

```csharp
private void ResetReassignMergeRequest()
```

##### `ResetReopenIssue` <a name="ResetReopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenIssue"></a>

```csharp
private void ResetReopenIssue()
```

##### `ResetReopenMergeRequest` <a name="ResetReopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetReopenMergeRequest"></a>

```csharp
private void ResetReopenMergeRequest()
```

##### `ResetSuccessPipeline` <a name="ResetSuccessPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.resetSuccessPipeline"></a>

```csharp
private void ResetSuccessPipeline()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelNotifications.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelNotifications.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelNotifications.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelNotifications.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectLevelNotifications to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput">CloseIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput">CloseMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput">FailedPipelineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput">FixedPipelineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput">IssueDueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput">MergeMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput">MergeWhenPipelineSucceedsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput">MovedProjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput">NewIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput">NewMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput">NewNoteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput">PushToMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput">ReassignIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput">ReassignMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput">ReopenIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput">ReopenMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput">SuccessPipelineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue">CloseIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline">FailedPipeline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline">FixedPipeline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue">IssueDue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject">MovedProject</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue">NewIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest">NewMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote">NewNote</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue">ReassignIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue">ReopenIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline">SuccessPipeline</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CloseIssueInput`<sup>Optional</sup> <a name="CloseIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssueInput"></a>

```csharp
public object CloseIssueInput { get; }
```

- *Type:* object

---

##### `CloseMergeRequestInput`<sup>Optional</sup> <a name="CloseMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequestInput"></a>

```csharp
public object CloseMergeRequestInput { get; }
```

- *Type:* object

---

##### `FailedPipelineInput`<sup>Optional</sup> <a name="FailedPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipelineInput"></a>

```csharp
public object FailedPipelineInput { get; }
```

- *Type:* object

---

##### `FixedPipelineInput`<sup>Optional</sup> <a name="FixedPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipelineInput"></a>

```csharp
public object FixedPipelineInput { get; }
```

- *Type:* object

---

##### `IssueDueInput`<sup>Optional</sup> <a name="IssueDueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDueInput"></a>

```csharp
public object IssueDueInput { get; }
```

- *Type:* object

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `MergeMergeRequestInput`<sup>Optional</sup> <a name="MergeMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequestInput"></a>

```csharp
public object MergeMergeRequestInput { get; }
```

- *Type:* object

---

##### `MergeWhenPipelineSucceedsInput`<sup>Optional</sup> <a name="MergeWhenPipelineSucceedsInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```csharp
public object MergeWhenPipelineSucceedsInput { get; }
```

- *Type:* object

---

##### `MovedProjectInput`<sup>Optional</sup> <a name="MovedProjectInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProjectInput"></a>

```csharp
public object MovedProjectInput { get; }
```

- *Type:* object

---

##### `NewIssueInput`<sup>Optional</sup> <a name="NewIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssueInput"></a>

```csharp
public object NewIssueInput { get; }
```

- *Type:* object

---

##### `NewMergeRequestInput`<sup>Optional</sup> <a name="NewMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequestInput"></a>

```csharp
public object NewMergeRequestInput { get; }
```

- *Type:* object

---

##### `NewNoteInput`<sup>Optional</sup> <a name="NewNoteInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNoteInput"></a>

```csharp
public object NewNoteInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushToMergeRequestInput`<sup>Optional</sup> <a name="PushToMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequestInput"></a>

```csharp
public object PushToMergeRequestInput { get; }
```

- *Type:* object

---

##### `ReassignIssueInput`<sup>Optional</sup> <a name="ReassignIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssueInput"></a>

```csharp
public object ReassignIssueInput { get; }
```

- *Type:* object

---

##### `ReassignMergeRequestInput`<sup>Optional</sup> <a name="ReassignMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequestInput"></a>

```csharp
public object ReassignMergeRequestInput { get; }
```

- *Type:* object

---

##### `ReopenIssueInput`<sup>Optional</sup> <a name="ReopenIssueInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssueInput"></a>

```csharp
public object ReopenIssueInput { get; }
```

- *Type:* object

---

##### `ReopenMergeRequestInput`<sup>Optional</sup> <a name="ReopenMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequestInput"></a>

```csharp
public object ReopenMergeRequestInput { get; }
```

- *Type:* object

---

##### `SuccessPipelineInput`<sup>Optional</sup> <a name="SuccessPipelineInput" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipelineInput"></a>

```csharp
public object SuccessPipelineInput { get; }
```

- *Type:* object

---

##### `CloseIssue`<sup>Required</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeIssue"></a>

```csharp
public object CloseIssue { get; }
```

- *Type:* object

---

##### `CloseMergeRequest`<sup>Required</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.closeMergeRequest"></a>

```csharp
public object CloseMergeRequest { get; }
```

- *Type:* object

---

##### `FailedPipeline`<sup>Required</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.failedPipeline"></a>

```csharp
public object FailedPipeline { get; }
```

- *Type:* object

---

##### `FixedPipeline`<sup>Required</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.fixedPipeline"></a>

```csharp
public object FixedPipeline { get; }
```

- *Type:* object

---

##### `IssueDue`<sup>Required</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.issueDue"></a>

```csharp
public object IssueDue { get; }
```

- *Type:* object

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `MergeMergeRequest`<sup>Required</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeMergeRequest"></a>

```csharp
public object MergeMergeRequest { get; }
```

- *Type:* object

---

##### `MergeWhenPipelineSucceeds`<sup>Required</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```csharp
public object MergeWhenPipelineSucceeds { get; }
```

- *Type:* object

---

##### `MovedProject`<sup>Required</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.movedProject"></a>

```csharp
public object MovedProject { get; }
```

- *Type:* object

---

##### `NewIssue`<sup>Required</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newIssue"></a>

```csharp
public object NewIssue { get; }
```

- *Type:* object

---

##### `NewMergeRequest`<sup>Required</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newMergeRequest"></a>

```csharp
public object NewMergeRequest { get; }
```

- *Type:* object

---

##### `NewNote`<sup>Required</sup> <a name="NewNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.newNote"></a>

```csharp
public object NewNote { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushToMergeRequest`<sup>Required</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.pushToMergeRequest"></a>

```csharp
public object PushToMergeRequest { get; }
```

- *Type:* object

---

##### `ReassignIssue`<sup>Required</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignIssue"></a>

```csharp
public object ReassignIssue { get; }
```

- *Type:* object

---

##### `ReassignMergeRequest`<sup>Required</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reassignMergeRequest"></a>

```csharp
public object ReassignMergeRequest { get; }
```

- *Type:* object

---

##### `ReopenIssue`<sup>Required</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenIssue"></a>

```csharp
public object ReopenIssue { get; }
```

- *Type:* object

---

##### `ReopenMergeRequest`<sup>Required</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.reopenMergeRequest"></a>

```csharp
public object ReopenMergeRequest { get; }
```

- *Type:* object

---

##### `SuccessPipeline`<sup>Required</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.successPipeline"></a>

```csharp
public object SuccessPipeline { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotifications.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelNotificationsConfig <a name="ProjectLevelNotificationsConfig" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectLevelNotificationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    object CloseIssue = null,
    object CloseMergeRequest = null,
    object FailedPipeline = null,
    object FixedPipeline = null,
    object IssueDue = null,
    string Level = null,
    object MergeMergeRequest = null,
    object MergeWhenPipelineSucceeds = null,
    object MovedProject = null,
    object NewIssue = null,
    object NewMergeRequest = null,
    object NewNote = null,
    object PushToMergeRequest = null,
    object ReassignIssue = null,
    object ReassignMergeRequest = null,
    object ReopenIssue = null,
    object ReopenMergeRequest = null,
    object SuccessPipeline = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project">Project</a></code> | <code>string</code> | The ID or URL-encoded path of a project where notifications will be configured. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue">CloseIssue</a></code> | <code>object</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>object</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline">FailedPipeline</a></code> | <code>object</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline">FixedPipeline</a></code> | <code>object</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue">IssueDue</a></code> | <code>object</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level">Level</a></code> | <code>string</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>object</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>object</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject">MovedProject</a></code> | <code>object</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue">NewIssue</a></code> | <code>object</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest">NewMergeRequest</a></code> | <code>object</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote">NewNote</a></code> | <code>object</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>object</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue">ReassignIssue</a></code> | <code>object</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>object</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue">ReopenIssue</a></code> | <code>object</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>object</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline">SuccessPipeline</a></code> | <code>object</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or URL-encoded path of a project where notifications will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#project ProjectLevelNotifications#project}

---

##### `CloseIssue`<sup>Optional</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeIssue"></a>

```csharp
public object CloseIssue { get; set; }
```

- *Type:* object

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#close_issue ProjectLevelNotifications#close_issue}

---

##### `CloseMergeRequest`<sup>Optional</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.closeMergeRequest"></a>

```csharp
public object CloseMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#close_merge_request ProjectLevelNotifications#close_merge_request}

---

##### `FailedPipeline`<sup>Optional</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.failedPipeline"></a>

```csharp
public object FailedPipeline { get; set; }
```

- *Type:* object

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#failed_pipeline ProjectLevelNotifications#failed_pipeline}

---

##### `FixedPipeline`<sup>Optional</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.fixedPipeline"></a>

```csharp
public object FixedPipeline { get; set; }
```

- *Type:* object

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#fixed_pipeline ProjectLevelNotifications#fixed_pipeline}

---

##### `IssueDue`<sup>Optional</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.issueDue"></a>

```csharp
public object IssueDue { get; set; }
```

- *Type:* object

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#issue_due ProjectLevelNotifications#issue_due}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#level ProjectLevelNotifications#level}

---

##### `MergeMergeRequest`<sup>Optional</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeMergeRequest"></a>

```csharp
public object MergeMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#merge_merge_request ProjectLevelNotifications#merge_merge_request}

---

##### `MergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```csharp
public object MergeWhenPipelineSucceeds { get; set; }
```

- *Type:* object

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#merge_when_pipeline_succeeds ProjectLevelNotifications#merge_when_pipeline_succeeds}

---

##### `MovedProject`<sup>Optional</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.movedProject"></a>

```csharp
public object MovedProject { get; set; }
```

- *Type:* object

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#moved_project ProjectLevelNotifications#moved_project}

---

##### `NewIssue`<sup>Optional</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newIssue"></a>

```csharp
public object NewIssue { get; set; }
```

- *Type:* object

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#new_issue ProjectLevelNotifications#new_issue}

---

##### `NewMergeRequest`<sup>Optional</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newMergeRequest"></a>

```csharp
public object NewMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#new_merge_request ProjectLevelNotifications#new_merge_request}

---

##### `NewNote`<sup>Optional</sup> <a name="NewNote" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.newNote"></a>

```csharp
public object NewNote { get; set; }
```

- *Type:* object

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#new_note ProjectLevelNotifications#new_note}

---

##### `PushToMergeRequest`<sup>Optional</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.pushToMergeRequest"></a>

```csharp
public object PushToMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#push_to_merge_request ProjectLevelNotifications#push_to_merge_request}

---

##### `ReassignIssue`<sup>Optional</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignIssue"></a>

```csharp
public object ReassignIssue { get; set; }
```

- *Type:* object

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#reassign_issue ProjectLevelNotifications#reassign_issue}

---

##### `ReassignMergeRequest`<sup>Optional</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reassignMergeRequest"></a>

```csharp
public object ReassignMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#reassign_merge_request ProjectLevelNotifications#reassign_merge_request}

---

##### `ReopenIssue`<sup>Optional</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenIssue"></a>

```csharp
public object ReopenIssue { get; set; }
```

- *Type:* object

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#reopen_issue ProjectLevelNotifications#reopen_issue}

---

##### `ReopenMergeRequest`<sup>Optional</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.reopenMergeRequest"></a>

```csharp
public object ReopenMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#reopen_merge_request ProjectLevelNotifications#reopen_merge_request}

---

##### `SuccessPipeline`<sup>Optional</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.projectLevelNotifications.ProjectLevelNotificationsConfig.property.successPipeline"></a>

```csharp
public object SuccessPipeline { get; set; }
```

- *Type:* object

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_level_notifications#success_pipeline ProjectLevelNotifications#success_pipeline}

---




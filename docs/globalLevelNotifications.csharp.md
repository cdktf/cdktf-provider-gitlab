# `globalLevelNotifications` Submodule <a name="`globalLevelNotifications` Submodule" id="@cdktf/provider-gitlab.globalLevelNotifications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalLevelNotifications <a name="GlobalLevelNotifications" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications gitlab_global_level_notifications}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GlobalLevelNotifications(Construct Scope, string Id, GlobalLevelNotificationsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig">GlobalLevelNotificationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig">GlobalLevelNotificationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue">ResetCloseIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest">ResetCloseMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline">ResetFailedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline">ResetFixedPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue">ResetIssueDue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest">ResetMergeMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds">ResetMergeWhenPipelineSucceeds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject">ResetMovedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue">ResetNewIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest">ResetNewMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote">ResetNewNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest">ResetPushToMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue">ResetReassignIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest">ResetReassignMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue">ResetReopenIssue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest">ResetReopenMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline">ResetSuccessPipeline</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCloseIssue` <a name="ResetCloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseIssue"></a>

```csharp
private void ResetCloseIssue()
```

##### `ResetCloseMergeRequest` <a name="ResetCloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetCloseMergeRequest"></a>

```csharp
private void ResetCloseMergeRequest()
```

##### `ResetFailedPipeline` <a name="ResetFailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFailedPipeline"></a>

```csharp
private void ResetFailedPipeline()
```

##### `ResetFixedPipeline` <a name="ResetFixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetFixedPipeline"></a>

```csharp
private void ResetFixedPipeline()
```

##### `ResetIssueDue` <a name="ResetIssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetIssueDue"></a>

```csharp
private void ResetIssueDue()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetMergeMergeRequest` <a name="ResetMergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeMergeRequest"></a>

```csharp
private void ResetMergeMergeRequest()
```

##### `ResetMergeWhenPipelineSucceeds` <a name="ResetMergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMergeWhenPipelineSucceeds"></a>

```csharp
private void ResetMergeWhenPipelineSucceeds()
```

##### `ResetMovedProject` <a name="ResetMovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetMovedProject"></a>

```csharp
private void ResetMovedProject()
```

##### `ResetNewIssue` <a name="ResetNewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewIssue"></a>

```csharp
private void ResetNewIssue()
```

##### `ResetNewMergeRequest` <a name="ResetNewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewMergeRequest"></a>

```csharp
private void ResetNewMergeRequest()
```

##### `ResetNewNote` <a name="ResetNewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetNewNote"></a>

```csharp
private void ResetNewNote()
```

##### `ResetPushToMergeRequest` <a name="ResetPushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetPushToMergeRequest"></a>

```csharp
private void ResetPushToMergeRequest()
```

##### `ResetReassignIssue` <a name="ResetReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignIssue"></a>

```csharp
private void ResetReassignIssue()
```

##### `ResetReassignMergeRequest` <a name="ResetReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReassignMergeRequest"></a>

```csharp
private void ResetReassignMergeRequest()
```

##### `ResetReopenIssue` <a name="ResetReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenIssue"></a>

```csharp
private void ResetReopenIssue()
```

##### `ResetReopenMergeRequest` <a name="ResetReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetReopenMergeRequest"></a>

```csharp
private void ResetReopenMergeRequest()
```

##### `ResetSuccessPipeline` <a name="ResetSuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.resetSuccessPipeline"></a>

```csharp
private void ResetSuccessPipeline()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GlobalLevelNotifications.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GlobalLevelNotifications.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GlobalLevelNotifications.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GlobalLevelNotifications.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GlobalLevelNotifications resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalLevelNotifications to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalLevelNotifications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GlobalLevelNotifications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput">CloseIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput">CloseMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput">FailedPipelineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput">FixedPipelineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput">IssueDueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput">LevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput">MergeMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput">MergeWhenPipelineSucceedsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput">MovedProjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput">NewIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput">NewMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput">NewNoteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput">PushToMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput">ReassignIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput">ReassignMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput">ReopenIssueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput">ReopenMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput">SuccessPipelineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue">CloseIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline">FailedPipeline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline">FixedPipeline</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue">IssueDue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject">MovedProject</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue">NewIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest">NewMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote">NewNote</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue">ReassignIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue">ReopenIssue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline">SuccessPipeline</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CloseIssueInput`<sup>Optional</sup> <a name="CloseIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssueInput"></a>

```csharp
public object CloseIssueInput { get; }
```

- *Type:* object

---

##### `CloseMergeRequestInput`<sup>Optional</sup> <a name="CloseMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequestInput"></a>

```csharp
public object CloseMergeRequestInput { get; }
```

- *Type:* object

---

##### `FailedPipelineInput`<sup>Optional</sup> <a name="FailedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipelineInput"></a>

```csharp
public object FailedPipelineInput { get; }
```

- *Type:* object

---

##### `FixedPipelineInput`<sup>Optional</sup> <a name="FixedPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipelineInput"></a>

```csharp
public object FixedPipelineInput { get; }
```

- *Type:* object

---

##### `IssueDueInput`<sup>Optional</sup> <a name="IssueDueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDueInput"></a>

```csharp
public object IssueDueInput { get; }
```

- *Type:* object

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.levelInput"></a>

```csharp
public string LevelInput { get; }
```

- *Type:* string

---

##### `MergeMergeRequestInput`<sup>Optional</sup> <a name="MergeMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequestInput"></a>

```csharp
public object MergeMergeRequestInput { get; }
```

- *Type:* object

---

##### `MergeWhenPipelineSucceedsInput`<sup>Optional</sup> <a name="MergeWhenPipelineSucceedsInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceedsInput"></a>

```csharp
public object MergeWhenPipelineSucceedsInput { get; }
```

- *Type:* object

---

##### `MovedProjectInput`<sup>Optional</sup> <a name="MovedProjectInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProjectInput"></a>

```csharp
public object MovedProjectInput { get; }
```

- *Type:* object

---

##### `NewIssueInput`<sup>Optional</sup> <a name="NewIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssueInput"></a>

```csharp
public object NewIssueInput { get; }
```

- *Type:* object

---

##### `NewMergeRequestInput`<sup>Optional</sup> <a name="NewMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequestInput"></a>

```csharp
public object NewMergeRequestInput { get; }
```

- *Type:* object

---

##### `NewNoteInput`<sup>Optional</sup> <a name="NewNoteInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNoteInput"></a>

```csharp
public object NewNoteInput { get; }
```

- *Type:* object

---

##### `PushToMergeRequestInput`<sup>Optional</sup> <a name="PushToMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequestInput"></a>

```csharp
public object PushToMergeRequestInput { get; }
```

- *Type:* object

---

##### `ReassignIssueInput`<sup>Optional</sup> <a name="ReassignIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssueInput"></a>

```csharp
public object ReassignIssueInput { get; }
```

- *Type:* object

---

##### `ReassignMergeRequestInput`<sup>Optional</sup> <a name="ReassignMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequestInput"></a>

```csharp
public object ReassignMergeRequestInput { get; }
```

- *Type:* object

---

##### `ReopenIssueInput`<sup>Optional</sup> <a name="ReopenIssueInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssueInput"></a>

```csharp
public object ReopenIssueInput { get; }
```

- *Type:* object

---

##### `ReopenMergeRequestInput`<sup>Optional</sup> <a name="ReopenMergeRequestInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequestInput"></a>

```csharp
public object ReopenMergeRequestInput { get; }
```

- *Type:* object

---

##### `SuccessPipelineInput`<sup>Optional</sup> <a name="SuccessPipelineInput" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipelineInput"></a>

```csharp
public object SuccessPipelineInput { get; }
```

- *Type:* object

---

##### `CloseIssue`<sup>Required</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeIssue"></a>

```csharp
public object CloseIssue { get; }
```

- *Type:* object

---

##### `CloseMergeRequest`<sup>Required</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.closeMergeRequest"></a>

```csharp
public object CloseMergeRequest { get; }
```

- *Type:* object

---

##### `FailedPipeline`<sup>Required</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.failedPipeline"></a>

```csharp
public object FailedPipeline { get; }
```

- *Type:* object

---

##### `FixedPipeline`<sup>Required</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.fixedPipeline"></a>

```csharp
public object FixedPipeline { get; }
```

- *Type:* object

---

##### `IssueDue`<sup>Required</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.issueDue"></a>

```csharp
public object IssueDue { get; }
```

- *Type:* object

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `MergeMergeRequest`<sup>Required</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeMergeRequest"></a>

```csharp
public object MergeMergeRequest { get; }
```

- *Type:* object

---

##### `MergeWhenPipelineSucceeds`<sup>Required</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.mergeWhenPipelineSucceeds"></a>

```csharp
public object MergeWhenPipelineSucceeds { get; }
```

- *Type:* object

---

##### `MovedProject`<sup>Required</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.movedProject"></a>

```csharp
public object MovedProject { get; }
```

- *Type:* object

---

##### `NewIssue`<sup>Required</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newIssue"></a>

```csharp
public object NewIssue { get; }
```

- *Type:* object

---

##### `NewMergeRequest`<sup>Required</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newMergeRequest"></a>

```csharp
public object NewMergeRequest { get; }
```

- *Type:* object

---

##### `NewNote`<sup>Required</sup> <a name="NewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.newNote"></a>

```csharp
public object NewNote { get; }
```

- *Type:* object

---

##### `PushToMergeRequest`<sup>Required</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.pushToMergeRequest"></a>

```csharp
public object PushToMergeRequest { get; }
```

- *Type:* object

---

##### `ReassignIssue`<sup>Required</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignIssue"></a>

```csharp
public object ReassignIssue { get; }
```

- *Type:* object

---

##### `ReassignMergeRequest`<sup>Required</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reassignMergeRequest"></a>

```csharp
public object ReassignMergeRequest { get; }
```

- *Type:* object

---

##### `ReopenIssue`<sup>Required</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenIssue"></a>

```csharp
public object ReopenIssue { get; }
```

- *Type:* object

---

##### `ReopenMergeRequest`<sup>Required</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.reopenMergeRequest"></a>

```csharp
public object ReopenMergeRequest { get; }
```

- *Type:* object

---

##### `SuccessPipeline`<sup>Required</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.successPipeline"></a>

```csharp
public object SuccessPipeline { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotifications.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalLevelNotificationsConfig <a name="GlobalLevelNotificationsConfig" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GlobalLevelNotificationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
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
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue">CloseIssue</a></code> | <code>object</code> | Enable notifications for closed issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest">CloseMergeRequest</a></code> | <code>object</code> | Enable notifications for closed merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline">FailedPipeline</a></code> | <code>object</code> | Enable notifications for failed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline">FixedPipeline</a></code> | <code>object</code> | Enable notifications for fixed pipelines. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue">IssueDue</a></code> | <code>object</code> | Enable notifications for due issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level">Level</a></code> | <code>string</code> | The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest">MergeMergeRequest</a></code> | <code>object</code> | Enable notifications for merged merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds">MergeWhenPipelineSucceeds</a></code> | <code>object</code> | Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject">MovedProject</a></code> | <code>object</code> | Enable notifications for moved projects. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue">NewIssue</a></code> | <code>object</code> | Enable notifications for new issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest">NewMergeRequest</a></code> | <code>object</code> | Enable notifications for new merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote">NewNote</a></code> | <code>object</code> | Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest">PushToMergeRequest</a></code> | <code>object</code> | Enable notifications for push to merge request branches. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue">ReassignIssue</a></code> | <code>object</code> | Enable notifications for issue reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest">ReassignMergeRequest</a></code> | <code>object</code> | Enable notifications for merge request reassignments. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue">ReopenIssue</a></code> | <code>object</code> | Enable notifications for reopened issues. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest">ReopenMergeRequest</a></code> | <code>object</code> | Enable notifications for reopened merge requests. Can only be used when `level` is `custom`. |
| <code><a href="#@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline">SuccessPipeline</a></code> | <code>object</code> | Enable notifications for successful pipelines. Can only be used when `level` is `custom`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloseIssue`<sup>Optional</sup> <a name="CloseIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeIssue"></a>

```csharp
public object CloseIssue { get; set; }
```

- *Type:* object

Enable notifications for closed issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#close_issue GlobalLevelNotifications#close_issue}

---

##### `CloseMergeRequest`<sup>Optional</sup> <a name="CloseMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.closeMergeRequest"></a>

```csharp
public object CloseMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for closed merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#close_merge_request GlobalLevelNotifications#close_merge_request}

---

##### `FailedPipeline`<sup>Optional</sup> <a name="FailedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.failedPipeline"></a>

```csharp
public object FailedPipeline { get; set; }
```

- *Type:* object

Enable notifications for failed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#failed_pipeline GlobalLevelNotifications#failed_pipeline}

---

##### `FixedPipeline`<sup>Optional</sup> <a name="FixedPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.fixedPipeline"></a>

```csharp
public object FixedPipeline { get; set; }
```

- *Type:* object

Enable notifications for fixed pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#fixed_pipeline GlobalLevelNotifications#fixed_pipeline}

---

##### `IssueDue`<sup>Optional</sup> <a name="IssueDue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.issueDue"></a>

```csharp
public object IssueDue { get; set; }
```

- *Type:* object

Enable notifications for due issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#issue_due GlobalLevelNotifications#issue_due}

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.level"></a>

```csharp
public string Level { get; set; }
```

- *Type:* string

The level of the notification. Valid values are: `disabled`, `participating`, `watch`, `global`, `mention`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#level GlobalLevelNotifications#level}

---

##### `MergeMergeRequest`<sup>Optional</sup> <a name="MergeMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeMergeRequest"></a>

```csharp
public object MergeMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for merged merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#merge_merge_request GlobalLevelNotifications#merge_merge_request}

---

##### `MergeWhenPipelineSucceeds`<sup>Optional</sup> <a name="MergeWhenPipelineSucceeds" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.mergeWhenPipelineSucceeds"></a>

```csharp
public object MergeWhenPipelineSucceeds { get; set; }
```

- *Type:* object

Enable notifications for merged merge requests when the pipeline succeeds. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#merge_when_pipeline_succeeds GlobalLevelNotifications#merge_when_pipeline_succeeds}

---

##### `MovedProject`<sup>Optional</sup> <a name="MovedProject" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.movedProject"></a>

```csharp
public object MovedProject { get; set; }
```

- *Type:* object

Enable notifications for moved projects. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#moved_project GlobalLevelNotifications#moved_project}

---

##### `NewIssue`<sup>Optional</sup> <a name="NewIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newIssue"></a>

```csharp
public object NewIssue { get; set; }
```

- *Type:* object

Enable notifications for new issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#new_issue GlobalLevelNotifications#new_issue}

---

##### `NewMergeRequest`<sup>Optional</sup> <a name="NewMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newMergeRequest"></a>

```csharp
public object NewMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for new merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#new_merge_request GlobalLevelNotifications#new_merge_request}

---

##### `NewNote`<sup>Optional</sup> <a name="NewNote" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.newNote"></a>

```csharp
public object NewNote { get; set; }
```

- *Type:* object

Enable notifications for new notes on merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#new_note GlobalLevelNotifications#new_note}

---

##### `PushToMergeRequest`<sup>Optional</sup> <a name="PushToMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.pushToMergeRequest"></a>

```csharp
public object PushToMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for push to merge request branches. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#push_to_merge_request GlobalLevelNotifications#push_to_merge_request}

---

##### `ReassignIssue`<sup>Optional</sup> <a name="ReassignIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignIssue"></a>

```csharp
public object ReassignIssue { get; set; }
```

- *Type:* object

Enable notifications for issue reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reassign_issue GlobalLevelNotifications#reassign_issue}

---

##### `ReassignMergeRequest`<sup>Optional</sup> <a name="ReassignMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reassignMergeRequest"></a>

```csharp
public object ReassignMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for merge request reassignments. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reassign_merge_request GlobalLevelNotifications#reassign_merge_request}

---

##### `ReopenIssue`<sup>Optional</sup> <a name="ReopenIssue" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenIssue"></a>

```csharp
public object ReopenIssue { get; set; }
```

- *Type:* object

Enable notifications for reopened issues. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reopen_issue GlobalLevelNotifications#reopen_issue}

---

##### `ReopenMergeRequest`<sup>Optional</sup> <a name="ReopenMergeRequest" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.reopenMergeRequest"></a>

```csharp
public object ReopenMergeRequest { get; set; }
```

- *Type:* object

Enable notifications for reopened merge requests. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#reopen_merge_request GlobalLevelNotifications#reopen_merge_request}

---

##### `SuccessPipeline`<sup>Optional</sup> <a name="SuccessPipeline" id="@cdktf/provider-gitlab.globalLevelNotifications.GlobalLevelNotificationsConfig.property.successPipeline"></a>

```csharp
public object SuccessPipeline { get; set; }
```

- *Type:* object

Enable notifications for successful pipelines. Can only be used when `level` is `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/resources/global_level_notifications#success_pipeline GlobalLevelNotifications#success_pipeline}

---




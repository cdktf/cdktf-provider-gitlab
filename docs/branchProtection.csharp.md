# `branchProtection` Submodule <a name="`branchProtection` Submodule" id="@cdktf/provider-gitlab.branchProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BranchProtection <a name="BranchProtection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection gitlab_branch_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtection(Construct Scope, string Id, BranchProtectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig">BranchProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge">PutAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush">PutAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect">PutAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge">ResetAllowedToMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush">ResetAllowedToPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect">ResetAllowedToUnprotect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush">ResetAllowForcePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired">ResetCodeOwnerApprovalRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel">ResetMergeAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel">ResetPushAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel">ResetUnprotectAccessLevel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllowedToMerge` <a name="PutAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge"></a>

```csharp
private void PutAllowedToMerge(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToMerge.parameter.value"></a>

- *Type:* object

---

##### `PutAllowedToPush` <a name="PutAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush"></a>

```csharp
private void PutAllowedToPush(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToPush.parameter.value"></a>

- *Type:* object

---

##### `PutAllowedToUnprotect` <a name="PutAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect"></a>

```csharp
private void PutAllowedToUnprotect(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.putAllowedToUnprotect.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedToMerge` <a name="ResetAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToMerge"></a>

```csharp
private void ResetAllowedToMerge()
```

##### `ResetAllowedToPush` <a name="ResetAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToPush"></a>

```csharp
private void ResetAllowedToPush()
```

##### `ResetAllowedToUnprotect` <a name="ResetAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowedToUnprotect"></a>

```csharp
private void ResetAllowedToUnprotect()
```

##### `ResetAllowForcePush` <a name="ResetAllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetAllowForcePush"></a>

```csharp
private void ResetAllowForcePush()
```

##### `ResetCodeOwnerApprovalRequired` <a name="ResetCodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetCodeOwnerApprovalRequired"></a>

```csharp
private void ResetCodeOwnerApprovalRequired()
```

##### `ResetMergeAccessLevel` <a name="ResetMergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetMergeAccessLevel"></a>

```csharp
private void ResetMergeAccessLevel()
```

##### `ResetPushAccessLevel` <a name="ResetPushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetPushAccessLevel"></a>

```csharp
private void ResetPushAccessLevel()
```

##### `ResetUnprotectAccessLevel` <a name="ResetUnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.resetUnprotectAccessLevel"></a>

```csharp
private void ResetUnprotectAccessLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

BranchProtection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

BranchProtection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

BranchProtection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

BranchProtection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BranchProtection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BranchProtection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BranchProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BranchProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge">AllowedToMerge</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush">AllowedToPush</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect">AllowedToUnprotect</a></code> | <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId">BranchProtectionId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput">AllowedToMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput">AllowedToPushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput">AllowedToUnprotectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput">AllowForcePushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput">CodeOwnerApprovalRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput">MergeAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput">PushAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput">UnprotectAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush">AllowForcePush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired">CodeOwnerApprovalRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel">MergeAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel">PushAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel">UnprotectAccessLevel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedToMerge`<sup>Required</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMerge"></a>

```csharp
public BranchProtectionAllowedToMergeList AllowedToMerge { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList">BranchProtectionAllowedToMergeList</a>

---

##### `AllowedToPush`<sup>Required</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPush"></a>

```csharp
public BranchProtectionAllowedToPushList AllowedToPush { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList">BranchProtectionAllowedToPushList</a>

---

##### `AllowedToUnprotect`<sup>Required</sup> <a name="AllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotect"></a>

```csharp
public BranchProtectionAllowedToUnprotectList AllowedToUnprotect { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList">BranchProtectionAllowedToUnprotectList</a>

---

##### `BranchProtectionId`<sup>Required</sup> <a name="BranchProtectionId" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchProtectionId"></a>

```csharp
public double BranchProtectionId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AllowedToMergeInput`<sup>Optional</sup> <a name="AllowedToMergeInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToMergeInput"></a>

```csharp
public object AllowedToMergeInput { get; }
```

- *Type:* object

---

##### `AllowedToPushInput`<sup>Optional</sup> <a name="AllowedToPushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToPushInput"></a>

```csharp
public object AllowedToPushInput { get; }
```

- *Type:* object

---

##### `AllowedToUnprotectInput`<sup>Optional</sup> <a name="AllowedToUnprotectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowedToUnprotectInput"></a>

```csharp
public object AllowedToUnprotectInput { get; }
```

- *Type:* object

---

##### `AllowForcePushInput`<sup>Optional</sup> <a name="AllowForcePushInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePushInput"></a>

```csharp
public object AllowForcePushInput { get; }
```

- *Type:* object

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CodeOwnerApprovalRequiredInput`<sup>Optional</sup> <a name="CodeOwnerApprovalRequiredInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequiredInput"></a>

```csharp
public object CodeOwnerApprovalRequiredInput { get; }
```

- *Type:* object

---

##### `MergeAccessLevelInput`<sup>Optional</sup> <a name="MergeAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevelInput"></a>

```csharp
public string MergeAccessLevelInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushAccessLevelInput`<sup>Optional</sup> <a name="PushAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevelInput"></a>

```csharp
public string PushAccessLevelInput { get; }
```

- *Type:* string

---

##### `UnprotectAccessLevelInput`<sup>Optional</sup> <a name="UnprotectAccessLevelInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevelInput"></a>

```csharp
public string UnprotectAccessLevelInput { get; }
```

- *Type:* string

---

##### `AllowForcePush`<sup>Required</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.allowForcePush"></a>

```csharp
public object AllowForcePush { get; }
```

- *Type:* object

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CodeOwnerApprovalRequired`<sup>Required</sup> <a name="CodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.codeOwnerApprovalRequired"></a>

```csharp
public object CodeOwnerApprovalRequired { get; }
```

- *Type:* object

---

##### `MergeAccessLevel`<sup>Required</sup> <a name="MergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.mergeAccessLevel"></a>

```csharp
public string MergeAccessLevel { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushAccessLevel`<sup>Required</sup> <a name="PushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.pushAccessLevel"></a>

```csharp
public string PushAccessLevel { get; }
```

- *Type:* string

---

##### `UnprotectAccessLevel`<sup>Required</sup> <a name="UnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.unprotectAccessLevel"></a>

```csharp
public string UnprotectAccessLevel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.branchProtection.BranchProtection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BranchProtectionAllowedToMerge <a name="BranchProtectionAllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToMerge {
    double GroupId = null,
    double UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId">GroupId</a></code> | <code>double</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId">UserId</a></code> | <code>double</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.groupId"></a>

```csharp
public double GroupId { get; set; }
```

- *Type:* double

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMerge.property.userId"></a>

```csharp
public double UserId { get; set; }
```

- *Type:* double

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToPush <a name="BranchProtectionAllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToPush {
    double GroupId = null,
    double UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId">GroupId</a></code> | <code>double</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId">UserId</a></code> | <code>double</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.groupId"></a>

```csharp
public double GroupId { get; set; }
```

- *Type:* double

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPush.property.userId"></a>

```csharp
public double UserId { get; set; }
```

- *Type:* double

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionAllowedToUnprotect <a name="BranchProtectionAllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToUnprotect {
    double GroupId = null,
    double UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId">GroupId</a></code> | <code>double</code> | The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId">UserId</a></code> | <code>double</code> | The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`. |

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.groupId"></a>

```csharp
public double GroupId { get; set; }
```

- *Type:* double

The ID of a GitLab group allowed to perform the relevant action. Mutually exclusive with `user_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#group_id BranchProtection#group_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotect.property.userId"></a>

```csharp
public double UserId { get; set; }
```

- *Type:* double

The ID of a GitLab user allowed to perform the relevant action. Mutually exclusive with `group_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#user_id BranchProtection#user_id}

---

### BranchProtectionConfig <a name="BranchProtectionConfig" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Branch,
    string Project,
    object AllowedToMerge = null,
    object AllowedToPush = null,
    object AllowedToUnprotect = null,
    object AllowForcePush = null,
    object CodeOwnerApprovalRequired = null,
    string MergeAccessLevel = null,
    string PushAccessLevel = null,
    string UnprotectAccessLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch">Branch</a></code> | <code>string</code> | Name of the branch. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project">Project</a></code> | <code>string</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge">AllowedToMerge</a></code> | <code>object</code> | allowed_to_merge block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush">AllowedToPush</a></code> | <code>object</code> | allowed_to_push block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect">AllowedToUnprotect</a></code> | <code>object</code> | allowed_to_unprotect block. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush">AllowForcePush</a></code> | <code>object</code> | Can be set to true to allow users with push access to force push. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired">CodeOwnerApprovalRequired</a></code> | <code>object</code> | Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel">MergeAccessLevel</a></code> | <code>string</code> | Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel">PushAccessLevel</a></code> | <code>string</code> | Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel">UnprotectAccessLevel</a></code> | <code>string</code> | Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Name of the branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#branch BranchProtection#branch}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#project BranchProtection#project}

---

##### `AllowedToMerge`<sup>Optional</sup> <a name="AllowedToMerge" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToMerge"></a>

```csharp
public object AllowedToMerge { get; set; }
```

- *Type:* object

allowed_to_merge block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_merge BranchProtection#allowed_to_merge}

---

##### `AllowedToPush`<sup>Optional</sup> <a name="AllowedToPush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToPush"></a>

```csharp
public object AllowedToPush { get; set; }
```

- *Type:* object

allowed_to_push block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_push BranchProtection#allowed_to_push}

---

##### `AllowedToUnprotect`<sup>Optional</sup> <a name="AllowedToUnprotect" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowedToUnprotect"></a>

```csharp
public object AllowedToUnprotect { get; set; }
```

- *Type:* object

allowed_to_unprotect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allowed_to_unprotect BranchProtection#allowed_to_unprotect}

---

##### `AllowForcePush`<sup>Optional</sup> <a name="AllowForcePush" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.allowForcePush"></a>

```csharp
public object AllowForcePush { get; set; }
```

- *Type:* object

Can be set to true to allow users with push access to force push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#allow_force_push BranchProtection#allow_force_push}

---

##### `CodeOwnerApprovalRequired`<sup>Optional</sup> <a name="CodeOwnerApprovalRequired" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.codeOwnerApprovalRequired"></a>

```csharp
public object CodeOwnerApprovalRequired { get; set; }
```

- *Type:* object

Can be set to true to require code owner approval before merging. Only available for Premium and Ultimate instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#code_owner_approval_required BranchProtection#code_owner_approval_required}

---

##### `MergeAccessLevel`<sup>Optional</sup> <a name="MergeAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.mergeAccessLevel"></a>

```csharp
public string MergeAccessLevel { get; set; }
```

- *Type:* string

Access levels allowed to merge. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#merge_access_level BranchProtection#merge_access_level}

---

##### `PushAccessLevel`<sup>Optional</sup> <a name="PushAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.pushAccessLevel"></a>

```csharp
public string PushAccessLevel { get; set; }
```

- *Type:* string

Access levels allowed to push. Valid values are: `no one`, `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#push_access_level BranchProtection#push_access_level}

---

##### `UnprotectAccessLevel`<sup>Optional</sup> <a name="UnprotectAccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionConfig.property.unprotectAccessLevel"></a>

```csharp
public string UnprotectAccessLevel { get; set; }
```

- *Type:* string

Access levels allowed to unprotect. Valid values are: `developer`, `maintainer`, `admin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/branch_protection#unprotect_access_level BranchProtection#unprotect_access_level}

---

## Classes <a name="Classes" id="Classes"></a>

### BranchProtectionAllowedToMergeList <a name="BranchProtectionAllowedToMergeList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToMergeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get"></a>

```csharp
private BranchProtectionAllowedToMergeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionAllowedToMergeOutputReference <a name="BranchProtectionAllowedToMergeOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToMergeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput">UserIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId">UserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.accessLevelDescription"></a>

```csharp
public string AccessLevelDescription { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupIdInput"></a>

```csharp
public double GroupIdInput { get; }
```

- *Type:* double

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userIdInput"></a>

```csharp
public double UserIdInput { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToMergeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionAllowedToPushList <a name="BranchProtectionAllowedToPushList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToPushList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get"></a>

```csharp
private BranchProtectionAllowedToPushOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionAllowedToPushOutputReference <a name="BranchProtectionAllowedToPushOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToPushOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput">UserIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId">UserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.accessLevelDescription"></a>

```csharp
public string AccessLevelDescription { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupIdInput"></a>

```csharp
public double GroupIdInput { get; }
```

- *Type:* double

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userIdInput"></a>

```csharp
public double UserIdInput { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToPushOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionAllowedToUnprotectList <a name="BranchProtectionAllowedToUnprotectList" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToUnprotectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get"></a>

```csharp
private BranchProtectionAllowedToUnprotectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### BranchProtectionAllowedToUnprotectOutputReference <a name="BranchProtectionAllowedToUnprotectOutputReference" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new BranchProtectionAllowedToUnprotectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput">UserIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId">UserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.accessLevelDescription"></a>

```csharp
public string AccessLevelDescription { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupIdInput"></a>

```csharp
public double GroupIdInput { get; }
```

- *Type:* double

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userIdInput"></a>

```csharp
public double UserIdInput { get; }
```

- *Type:* double

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.branchProtection.BranchProtectionAllowedToUnprotectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




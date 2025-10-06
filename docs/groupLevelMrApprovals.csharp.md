# `groupLevelMrApprovals` Submodule <a name="`groupLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.groupLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupLevelMrApprovals <a name="GroupLevelMrApprovals" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals gitlab_group_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupLevelMrApprovals(Construct Scope, string Id, GroupLevelMrApprovalsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig">GroupLevelMrApprovalsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig">GroupLevelMrApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval">ResetAllowAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval">ResetAllowCommitterApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest">ResetAllowOverridesToApproverListPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy">ResetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove">ResetRequireReauthenticationToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush">ResetRetainApprovalsOnPush</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowAuthorApproval` <a name="ResetAllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowAuthorApproval"></a>

```csharp
private void ResetAllowAuthorApproval()
```

##### `ResetAllowCommitterApproval` <a name="ResetAllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowCommitterApproval"></a>

```csharp
private void ResetAllowCommitterApproval()
```

##### `ResetAllowOverridesToApproverListPerMergeRequest` <a name="ResetAllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetAllowOverridesToApproverListPerMergeRequest"></a>

```csharp
private void ResetAllowOverridesToApproverListPerMergeRequest()
```

##### `ResetKeepSettingsOnDestroy` <a name="ResetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetKeepSettingsOnDestroy"></a>

```csharp
private void ResetKeepSettingsOnDestroy()
```

##### `ResetRequireReauthenticationToApprove` <a name="ResetRequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRequireReauthenticationToApprove"></a>

```csharp
private void ResetRequireReauthenticationToApprove()
```

##### `ResetRetainApprovalsOnPush` <a name="ResetRetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.resetRetainApprovalsOnPush"></a>

```csharp
private void ResetRetainApprovalsOnPush()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupLevelMrApprovals.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupLevelMrApprovals.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupLevelMrApprovals.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupLevelMrApprovals.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GroupLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupLevelMrApprovals to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GroupLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput">AllowAuthorApprovalInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput">AllowCommitterApprovalInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput">AllowOverridesToApproverListPerMergeRequestInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput">KeepSettingsOnDestroyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput">RequireReauthenticationToApproveInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput">RetainApprovalsOnPushInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval">AllowAuthorApproval</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval">AllowCommitterApproval</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest">AllowOverridesToApproverListPerMergeRequest</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove">RequireReauthenticationToApprove</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush">RetainApprovalsOnPush</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AllowAuthorApprovalInput`<sup>Optional</sup> <a name="AllowAuthorApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApprovalInput"></a>

```csharp
public bool|IResolvable AllowAuthorApprovalInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowCommitterApprovalInput`<sup>Optional</sup> <a name="AllowCommitterApprovalInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApprovalInput"></a>

```csharp
public bool|IResolvable AllowCommitterApprovalInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowOverridesToApproverListPerMergeRequestInput`<sup>Optional</sup> <a name="AllowOverridesToApproverListPerMergeRequestInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequestInput"></a>

```csharp
public bool|IResolvable AllowOverridesToApproverListPerMergeRequestInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `KeepSettingsOnDestroyInput`<sup>Optional</sup> <a name="KeepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroyInput"></a>

```csharp
public bool|IResolvable KeepSettingsOnDestroyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RequireReauthenticationToApproveInput`<sup>Optional</sup> <a name="RequireReauthenticationToApproveInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApproveInput"></a>

```csharp
public bool|IResolvable RequireReauthenticationToApproveInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RetainApprovalsOnPushInput`<sup>Optional</sup> <a name="RetainApprovalsOnPushInput" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPushInput"></a>

```csharp
public bool|IResolvable RetainApprovalsOnPushInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowAuthorApproval`<sup>Required</sup> <a name="AllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowAuthorApproval"></a>

```csharp
public bool|IResolvable AllowAuthorApproval { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowCommitterApproval`<sup>Required</sup> <a name="AllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowCommitterApproval"></a>

```csharp
public bool|IResolvable AllowCommitterApproval { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowOverridesToApproverListPerMergeRequest`<sup>Required</sup> <a name="AllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.allowOverridesToApproverListPerMergeRequest"></a>

```csharp
public bool|IResolvable AllowOverridesToApproverListPerMergeRequest { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `KeepSettingsOnDestroy`<sup>Required</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.keepSettingsOnDestroy"></a>

```csharp
public bool|IResolvable KeepSettingsOnDestroy { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RequireReauthenticationToApprove`<sup>Required</sup> <a name="RequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.requireReauthenticationToApprove"></a>

```csharp
public bool|IResolvable RequireReauthenticationToApprove { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RetainApprovalsOnPush`<sup>Required</sup> <a name="RetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.retainApprovalsOnPush"></a>

```csharp
public bool|IResolvable RetainApprovalsOnPush { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovals.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupLevelMrApprovalsConfig <a name="GroupLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupLevelMrApprovalsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Group,
    bool|IResolvable AllowAuthorApproval = null,
    bool|IResolvable AllowCommitterApproval = null,
    bool|IResolvable AllowOverridesToApproverListPerMergeRequest = null,
    bool|IResolvable KeepSettingsOnDestroy = null,
    bool|IResolvable RequireReauthenticationToApprove = null,
    bool|IResolvable RetainApprovalsOnPush = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group">Group</a></code> | <code>string</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval">AllowAuthorApproval</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Allow or prevent authors from self approving merge requests; `true` means authors can self approve. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval">AllowCommitterApproval</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Allow or prevent committers from self approving merge requests. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest">AllowOverridesToApproverListPerMergeRequest</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Allow or prevent overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove">RequireReauthenticationToApprove</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Require approver to authenticate before adding the approval. |
| <code><a href="#@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush">RetainApprovalsOnPush</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Retain approval count on a new push. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#group GroupLevelMrApprovals#group}

---

##### `AllowAuthorApproval`<sup>Optional</sup> <a name="AllowAuthorApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowAuthorApproval"></a>

```csharp
public bool|IResolvable AllowAuthorApproval { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Allow or prevent authors from self approving merge requests; `true` means authors can self approve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#allow_author_approval GroupLevelMrApprovals#allow_author_approval}

---

##### `AllowCommitterApproval`<sup>Optional</sup> <a name="AllowCommitterApproval" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowCommitterApproval"></a>

```csharp
public bool|IResolvable AllowCommitterApproval { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Allow or prevent committers from self approving merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#allow_committer_approval GroupLevelMrApprovals#allow_committer_approval}

---

##### `AllowOverridesToApproverListPerMergeRequest`<sup>Optional</sup> <a name="AllowOverridesToApproverListPerMergeRequest" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.allowOverridesToApproverListPerMergeRequest"></a>

```csharp
public bool|IResolvable AllowOverridesToApproverListPerMergeRequest { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Allow or prevent overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#allow_overrides_to_approver_list_per_merge_request GroupLevelMrApprovals#allow_overrides_to_approver_list_per_merge_request}

---

##### `KeepSettingsOnDestroy`<sup>Optional</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.keepSettingsOnDestroy"></a>

```csharp
public bool|IResolvable KeepSettingsOnDestroy { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set to true if the group merge request approval settings should not be reset to their pre-terraform defaults on destroy.

You will need to apply the resource with the new setting before destroying the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#keep_settings_on_destroy GroupLevelMrApprovals#keep_settings_on_destroy}

---

##### `RequireReauthenticationToApprove`<sup>Optional</sup> <a name="RequireReauthenticationToApprove" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.requireReauthenticationToApprove"></a>

```csharp
public bool|IResolvable RequireReauthenticationToApprove { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Require approver to authenticate before adding the approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#require_reauthentication_to_approve GroupLevelMrApprovals#require_reauthentication_to_approve}

---

##### `RetainApprovalsOnPush`<sup>Optional</sup> <a name="RetainApprovalsOnPush" id="@cdktf/provider-gitlab.groupLevelMrApprovals.GroupLevelMrApprovalsConfig.property.retainApprovalsOnPush"></a>

```csharp
public bool|IResolvable RetainApprovalsOnPush { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Retain approval count on a new push.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/group_level_mr_approvals#retain_approvals_on_push GroupLevelMrApprovals#retain_approvals_on_push}

---




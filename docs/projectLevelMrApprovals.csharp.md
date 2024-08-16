# `projectLevelMrApprovals` Submodule <a name="`projectLevelMrApprovals` Submodule" id="@cdktf/provider-gitlab.projectLevelMrApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectLevelMrApprovals <a name="ProjectLevelMrApprovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals gitlab_project_level_mr_approvals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectLevelMrApprovals(Construct Scope, string Id, ProjectLevelMrApprovalsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig">ProjectLevelMrApprovalsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig">ProjectLevelMrApprovalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest">ResetDisableOverridingApproversPerMergeRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval">ResetMergeRequestsAuthorApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval">ResetMergeRequestsDisableCommittersApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove">ResetRequirePasswordToApprove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush">ResetResetApprovalsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetSelectiveCodeOwnerRemovals">ResetSelectiveCodeOwnerRemovals</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDisableOverridingApproversPerMergeRequest` <a name="ResetDisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetDisableOverridingApproversPerMergeRequest"></a>

```csharp
private void ResetDisableOverridingApproversPerMergeRequest()
```

##### `ResetMergeRequestsAuthorApproval` <a name="ResetMergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsAuthorApproval"></a>

```csharp
private void ResetMergeRequestsAuthorApproval()
```

##### `ResetMergeRequestsDisableCommittersApproval` <a name="ResetMergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetMergeRequestsDisableCommittersApproval"></a>

```csharp
private void ResetMergeRequestsDisableCommittersApproval()
```

##### `ResetRequirePasswordToApprove` <a name="ResetRequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetRequirePasswordToApprove"></a>

```csharp
private void ResetRequirePasswordToApprove()
```

##### `ResetResetApprovalsOnPush` <a name="ResetResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetResetApprovalsOnPush"></a>

```csharp
private void ResetResetApprovalsOnPush()
```

##### `ResetSelectiveCodeOwnerRemovals` <a name="ResetSelectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.resetSelectiveCodeOwnerRemovals"></a>

```csharp
private void ResetSelectiveCodeOwnerRemovals()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectLevelMrApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelMrApprovals.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelMrApprovals.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelMrApprovals.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectLevelMrApprovals.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectLevelMrApprovals resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectLevelMrApprovals to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectLevelMrApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectLevelMrApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput">DisableOverridingApproversPerMergeRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput">MergeRequestsAuthorApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput">MergeRequestsDisableCommittersApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput">RequirePasswordToApproveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput">ResetApprovalsOnPushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovalsInput">SelectiveCodeOwnerRemovalsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest">DisableOverridingApproversPerMergeRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval">MergeRequestsAuthorApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval">MergeRequestsDisableCommittersApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove">RequirePasswordToApprove</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush">ResetApprovalsOnPush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovals">SelectiveCodeOwnerRemovals</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DisableOverridingApproversPerMergeRequestInput`<sup>Optional</sup> <a name="DisableOverridingApproversPerMergeRequestInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequestInput"></a>

```csharp
public object DisableOverridingApproversPerMergeRequestInput { get; }
```

- *Type:* object

---

##### `MergeRequestsAuthorApprovalInput`<sup>Optional</sup> <a name="MergeRequestsAuthorApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApprovalInput"></a>

```csharp
public object MergeRequestsAuthorApprovalInput { get; }
```

- *Type:* object

---

##### `MergeRequestsDisableCommittersApprovalInput`<sup>Optional</sup> <a name="MergeRequestsDisableCommittersApprovalInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApprovalInput"></a>

```csharp
public object MergeRequestsDisableCommittersApprovalInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RequirePasswordToApproveInput`<sup>Optional</sup> <a name="RequirePasswordToApproveInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApproveInput"></a>

```csharp
public object RequirePasswordToApproveInput { get; }
```

- *Type:* object

---

##### `ResetApprovalsOnPushInput`<sup>Optional</sup> <a name="ResetApprovalsOnPushInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPushInput"></a>

```csharp
public object ResetApprovalsOnPushInput { get; }
```

- *Type:* object

---

##### `SelectiveCodeOwnerRemovalsInput`<sup>Optional</sup> <a name="SelectiveCodeOwnerRemovalsInput" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovalsInput"></a>

```csharp
public object SelectiveCodeOwnerRemovalsInput { get; }
```

- *Type:* object

---

##### `DisableOverridingApproversPerMergeRequest`<sup>Required</sup> <a name="DisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.disableOverridingApproversPerMergeRequest"></a>

```csharp
public object DisableOverridingApproversPerMergeRequest { get; }
```

- *Type:* object

---

##### `MergeRequestsAuthorApproval`<sup>Required</sup> <a name="MergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsAuthorApproval"></a>

```csharp
public object MergeRequestsAuthorApproval { get; }
```

- *Type:* object

---

##### `MergeRequestsDisableCommittersApproval`<sup>Required</sup> <a name="MergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.mergeRequestsDisableCommittersApproval"></a>

```csharp
public object MergeRequestsDisableCommittersApproval { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequirePasswordToApprove`<sup>Required</sup> <a name="RequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.requirePasswordToApprove"></a>

```csharp
public object RequirePasswordToApprove { get; }
```

- *Type:* object

---

##### `ResetApprovalsOnPush`<sup>Required</sup> <a name="ResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.resetApprovalsOnPush"></a>

```csharp
public object ResetApprovalsOnPush { get; }
```

- *Type:* object

---

##### `SelectiveCodeOwnerRemovals`<sup>Required</sup> <a name="SelectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.selectiveCodeOwnerRemovals"></a>

```csharp
public object SelectiveCodeOwnerRemovals { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovals.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectLevelMrApprovalsConfig <a name="ProjectLevelMrApprovalsConfig" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectLevelMrApprovalsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    object DisableOverridingApproversPerMergeRequest = null,
    object MergeRequestsAuthorApproval = null,
    object MergeRequestsDisableCommittersApproval = null,
    object RequirePasswordToApprove = null,
    object ResetApprovalsOnPush = null,
    object SelectiveCodeOwnerRemovals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.project">Project</a></code> | <code>string</code> | The ID or URL-encoded path of a project to change MR approval configuration. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest">DisableOverridingApproversPerMergeRequest</a></code> | <code>object</code> | Set to `true` to disable overriding approvers per merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval">MergeRequestsAuthorApproval</a></code> | <code>object</code> | Set to `true` to allow merge requests authors to approve their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval">MergeRequestsDisableCommittersApproval</a></code> | <code>object</code> | Set to `true` to disable merge request committers from approving their own merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove">RequirePasswordToApprove</a></code> | <code>object</code> | Set to `true` to require authentication to approve merge requests. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush">ResetApprovalsOnPush</a></code> | <code>object</code> | Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch. |
| <code><a href="#@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.selectiveCodeOwnerRemovals">SelectiveCodeOwnerRemovals</a></code> | <code>object</code> | Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or URL-encoded path of a project to change MR approval configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#project ProjectLevelMrApprovals#project}

---

##### `DisableOverridingApproversPerMergeRequest`<sup>Optional</sup> <a name="DisableOverridingApproversPerMergeRequest" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.disableOverridingApproversPerMergeRequest"></a>

```csharp
public object DisableOverridingApproversPerMergeRequest { get; set; }
```

- *Type:* object

Set to `true` to disable overriding approvers per merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#disable_overriding_approvers_per_merge_request ProjectLevelMrApprovals#disable_overriding_approvers_per_merge_request}

---

##### `MergeRequestsAuthorApproval`<sup>Optional</sup> <a name="MergeRequestsAuthorApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsAuthorApproval"></a>

```csharp
public object MergeRequestsAuthorApproval { get; set; }
```

- *Type:* object

Set to `true` to allow merge requests authors to approve their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#merge_requests_author_approval ProjectLevelMrApprovals#merge_requests_author_approval}

---

##### `MergeRequestsDisableCommittersApproval`<sup>Optional</sup> <a name="MergeRequestsDisableCommittersApproval" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.mergeRequestsDisableCommittersApproval"></a>

```csharp
public object MergeRequestsDisableCommittersApproval { get; set; }
```

- *Type:* object

Set to `true` to disable merge request committers from approving their own merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#merge_requests_disable_committers_approval ProjectLevelMrApprovals#merge_requests_disable_committers_approval}

---

##### `RequirePasswordToApprove`<sup>Optional</sup> <a name="RequirePasswordToApprove" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.requirePasswordToApprove"></a>

```csharp
public object RequirePasswordToApprove { get; set; }
```

- *Type:* object

Set to `true` to require authentication to approve merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#require_password_to_approve ProjectLevelMrApprovals#require_password_to_approve}

---

##### `ResetApprovalsOnPush`<sup>Optional</sup> <a name="ResetApprovalsOnPush" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.resetApprovalsOnPush"></a>

```csharp
public object ResetApprovalsOnPush { get; set; }
```

- *Type:* object

Set to `true` to remove all approvals in a merge request when new commits are pushed to its source branch.

Default is `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#reset_approvals_on_push ProjectLevelMrApprovals#reset_approvals_on_push}

---

##### `SelectiveCodeOwnerRemovals`<sup>Optional</sup> <a name="SelectiveCodeOwnerRemovals" id="@cdktf/provider-gitlab.projectLevelMrApprovals.ProjectLevelMrApprovalsConfig.property.selectiveCodeOwnerRemovals"></a>

```csharp
public object SelectiveCodeOwnerRemovals { get; set; }
```

- *Type:* object

Reset approvals from Code Owners if their files changed. Can be enabled only if reset_approvals_on_push is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/project_level_mr_approvals#selective_code_owner_removals ProjectLevelMrApprovals#selective_code_owner_removals}

---




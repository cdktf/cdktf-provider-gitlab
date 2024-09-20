# `projectPushRules` Submodule <a name="`projectPushRules` Submodule" id="@cdktf/provider-gitlab.projectPushRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectPushRulesA <a name="ProjectPushRulesA" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules gitlab_project_push_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectPushRulesA(Construct Scope, string Id, ProjectPushRulesAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig">ProjectPushRulesAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig">ProjectPushRulesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex">ResetAuthorEmailRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex">ResetBranchNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck">ResetCommitCommitterCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck">ResetCommitCommitterNameCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex">ResetCommitMessageNegativeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex">ResetCommitMessageRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag">ResetDenyDeleteTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex">ResetFileNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize">ResetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck">ResetMemberCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets">ResetPreventSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits">ResetRejectNonDcoCommits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits">ResetRejectUnsignedCommits</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAuthorEmailRegex` <a name="ResetAuthorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetAuthorEmailRegex"></a>

```csharp
private void ResetAuthorEmailRegex()
```

##### `ResetBranchNameRegex` <a name="ResetBranchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetBranchNameRegex"></a>

```csharp
private void ResetBranchNameRegex()
```

##### `ResetCommitCommitterCheck` <a name="ResetCommitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterCheck"></a>

```csharp
private void ResetCommitCommitterCheck()
```

##### `ResetCommitCommitterNameCheck` <a name="ResetCommitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitCommitterNameCheck"></a>

```csharp
private void ResetCommitCommitterNameCheck()
```

##### `ResetCommitMessageNegativeRegex` <a name="ResetCommitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageNegativeRegex"></a>

```csharp
private void ResetCommitMessageNegativeRegex()
```

##### `ResetCommitMessageRegex` <a name="ResetCommitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetCommitMessageRegex"></a>

```csharp
private void ResetCommitMessageRegex()
```

##### `ResetDenyDeleteTag` <a name="ResetDenyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetDenyDeleteTag"></a>

```csharp
private void ResetDenyDeleteTag()
```

##### `ResetFileNameRegex` <a name="ResetFileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetFileNameRegex"></a>

```csharp
private void ResetFileNameRegex()
```

##### `ResetMaxFileSize` <a name="ResetMaxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMaxFileSize"></a>

```csharp
private void ResetMaxFileSize()
```

##### `ResetMemberCheck` <a name="ResetMemberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetMemberCheck"></a>

```csharp
private void ResetMemberCheck()
```

##### `ResetPreventSecrets` <a name="ResetPreventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetPreventSecrets"></a>

```csharp
private void ResetPreventSecrets()
```

##### `ResetRejectNonDcoCommits` <a name="ResetRejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectNonDcoCommits"></a>

```csharp
private void ResetRejectNonDcoCommits()
```

##### `ResetRejectUnsignedCommits` <a name="ResetRejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.resetRejectUnsignedCommits"></a>

```csharp
private void ResetRejectUnsignedCommits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectPushRulesA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectPushRulesA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectPushRulesA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectPushRulesA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectPushRulesA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectPushRulesA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectPushRulesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectPushRulesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput">AuthorEmailRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput">BranchNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput">CommitCommitterCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput">CommitCommitterNameCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput">CommitMessageNegativeRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput">CommitMessageRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput">DenyDeleteTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput">FileNameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput">MaxFileSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput">MemberCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput">PreventSecretsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput">RejectNonDcoCommitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput">RejectUnsignedCommitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex">BranchNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex">FileNameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck">MemberCheck</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets">PreventSecrets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AuthorEmailRegexInput`<sup>Optional</sup> <a name="AuthorEmailRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegexInput"></a>

```csharp
public string AuthorEmailRegexInput { get; }
```

- *Type:* string

---

##### `BranchNameRegexInput`<sup>Optional</sup> <a name="BranchNameRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegexInput"></a>

```csharp
public string BranchNameRegexInput { get; }
```

- *Type:* string

---

##### `CommitCommitterCheckInput`<sup>Optional</sup> <a name="CommitCommitterCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheckInput"></a>

```csharp
public object CommitCommitterCheckInput { get; }
```

- *Type:* object

---

##### `CommitCommitterNameCheckInput`<sup>Optional</sup> <a name="CommitCommitterNameCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheckInput"></a>

```csharp
public object CommitCommitterNameCheckInput { get; }
```

- *Type:* object

---

##### `CommitMessageNegativeRegexInput`<sup>Optional</sup> <a name="CommitMessageNegativeRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegexInput"></a>

```csharp
public string CommitMessageNegativeRegexInput { get; }
```

- *Type:* string

---

##### `CommitMessageRegexInput`<sup>Optional</sup> <a name="CommitMessageRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegexInput"></a>

```csharp
public string CommitMessageRegexInput { get; }
```

- *Type:* string

---

##### `DenyDeleteTagInput`<sup>Optional</sup> <a name="DenyDeleteTagInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTagInput"></a>

```csharp
public object DenyDeleteTagInput { get; }
```

- *Type:* object

---

##### `FileNameRegexInput`<sup>Optional</sup> <a name="FileNameRegexInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegexInput"></a>

```csharp
public string FileNameRegexInput { get; }
```

- *Type:* string

---

##### `MaxFileSizeInput`<sup>Optional</sup> <a name="MaxFileSizeInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSizeInput"></a>

```csharp
public double MaxFileSizeInput { get; }
```

- *Type:* double

---

##### `MemberCheckInput`<sup>Optional</sup> <a name="MemberCheckInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheckInput"></a>

```csharp
public object MemberCheckInput { get; }
```

- *Type:* object

---

##### `PreventSecretsInput`<sup>Optional</sup> <a name="PreventSecretsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecretsInput"></a>

```csharp
public object PreventSecretsInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RejectNonDcoCommitsInput`<sup>Optional</sup> <a name="RejectNonDcoCommitsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommitsInput"></a>

```csharp
public object RejectNonDcoCommitsInput { get; }
```

- *Type:* object

---

##### `RejectUnsignedCommitsInput`<sup>Optional</sup> <a name="RejectUnsignedCommitsInput" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommitsInput"></a>

```csharp
public object RejectUnsignedCommitsInput { get; }
```

- *Type:* object

---

##### `AuthorEmailRegex`<sup>Required</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.authorEmailRegex"></a>

```csharp
public string AuthorEmailRegex { get; }
```

- *Type:* string

---

##### `BranchNameRegex`<sup>Required</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.branchNameRegex"></a>

```csharp
public string BranchNameRegex { get; }
```

- *Type:* string

---

##### `CommitCommitterCheck`<sup>Required</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterCheck"></a>

```csharp
public object CommitCommitterCheck { get; }
```

- *Type:* object

---

##### `CommitCommitterNameCheck`<sup>Required</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitCommitterNameCheck"></a>

```csharp
public object CommitCommitterNameCheck { get; }
```

- *Type:* object

---

##### `CommitMessageNegativeRegex`<sup>Required</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageNegativeRegex"></a>

```csharp
public string CommitMessageNegativeRegex { get; }
```

- *Type:* string

---

##### `CommitMessageRegex`<sup>Required</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.commitMessageRegex"></a>

```csharp
public string CommitMessageRegex { get; }
```

- *Type:* string

---

##### `DenyDeleteTag`<sup>Required</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.denyDeleteTag"></a>

```csharp
public object DenyDeleteTag { get; }
```

- *Type:* object

---

##### `FileNameRegex`<sup>Required</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.fileNameRegex"></a>

```csharp
public string FileNameRegex { get; }
```

- *Type:* string

---

##### `MaxFileSize`<sup>Required</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; }
```

- *Type:* double

---

##### `MemberCheck`<sup>Required</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.memberCheck"></a>

```csharp
public object MemberCheck { get; }
```

- *Type:* object

---

##### `PreventSecrets`<sup>Required</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.preventSecrets"></a>

```csharp
public object PreventSecrets { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RejectNonDcoCommits`<sup>Required</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectNonDcoCommits"></a>

```csharp
public object RejectNonDcoCommits { get; }
```

- *Type:* object

---

##### `RejectUnsignedCommits`<sup>Required</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.rejectUnsignedCommits"></a>

```csharp
public object RejectUnsignedCommits { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectPushRulesAConfig <a name="ProjectPushRulesAConfig" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectPushRulesAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string AuthorEmailRegex = null,
    string BranchNameRegex = null,
    object CommitCommitterCheck = null,
    object CommitCommitterNameCheck = null,
    string CommitMessageNegativeRegex = null,
    string CommitMessageRegex = null,
    object DenyDeleteTag = null,
    string FileNameRegex = null,
    double MaxFileSize = null,
    object MemberCheck = null,
    object PreventSecrets = null,
    object RejectNonDcoCommits = null,
    object RejectUnsignedCommits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project">Project</a></code> | <code>string</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex">AuthorEmailRegex</a></code> | <code>string</code> | All commit author emails must match this regex, e.g. `@my-company.com$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex">BranchNameRegex</a></code> | <code>string</code> | All branch names must match this regex, e.g. `(feature\|hotfix)\/*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck">CommitCommitterCheck</a></code> | <code>object</code> | Users can only push commits to this repository that were committed with one of their own verified emails. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck">CommitCommitterNameCheck</a></code> | <code>object</code> | Users can only push commits to this repository if the commit author name is consistent with their GitLab account name. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex">CommitMessageNegativeRegex</a></code> | <code>string</code> | No commit message is allowed to match this regex, e.g. `ssh\:\/\/`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex">CommitMessageRegex</a></code> | <code>string</code> | All commit messages must match this regex, e.g. `Fixed \d+\..*`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag">DenyDeleteTag</a></code> | <code>object</code> | Deny deleting a tag. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex">FileNameRegex</a></code> | <code>string</code> | All committed filenames must not match this regex, e.g. `(jar\|exe)$`. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize">MaxFileSize</a></code> | <code>double</code> | Maximum file size (MB). |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck">MemberCheck</a></code> | <code>object</code> | Restrict commits by author (email) to existing GitLab users. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets">PreventSecrets</a></code> | <code>object</code> | GitLab will reject any files that are likely to contain secrets. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits">RejectNonDcoCommits</a></code> | <code>object</code> | Reject commit when it’s not DCO certified. |
| <code><a href="#@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits">RejectUnsignedCommits</a></code> | <code>object</code> | Reject commit when it’s not signed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#project ProjectPushRulesA#project}

---

##### `AuthorEmailRegex`<sup>Optional</sup> <a name="AuthorEmailRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.authorEmailRegex"></a>

```csharp
public string AuthorEmailRegex { get; set; }
```

- *Type:* string

All commit author emails must match this regex, e.g. `@my-company.com$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#author_email_regex ProjectPushRulesA#author_email_regex}

---

##### `BranchNameRegex`<sup>Optional</sup> <a name="BranchNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.branchNameRegex"></a>

```csharp
public string BranchNameRegex { get; set; }
```

- *Type:* string

All branch names must match this regex, e.g. `(feature|hotfix)\/*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#branch_name_regex ProjectPushRulesA#branch_name_regex}

---

##### `CommitCommitterCheck`<sup>Optional</sup> <a name="CommitCommitterCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterCheck"></a>

```csharp
public object CommitCommitterCheck { get; set; }
```

- *Type:* object

Users can only push commits to this repository that were committed with one of their own verified emails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#commit_committer_check ProjectPushRulesA#commit_committer_check}

---

##### `CommitCommitterNameCheck`<sup>Optional</sup> <a name="CommitCommitterNameCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitCommitterNameCheck"></a>

```csharp
public object CommitCommitterNameCheck { get; set; }
```

- *Type:* object

Users can only push commits to this repository if the commit author name is consistent with their GitLab account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#commit_committer_name_check ProjectPushRulesA#commit_committer_name_check}

---

##### `CommitMessageNegativeRegex`<sup>Optional</sup> <a name="CommitMessageNegativeRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageNegativeRegex"></a>

```csharp
public string CommitMessageNegativeRegex { get; set; }
```

- *Type:* string

No commit message is allowed to match this regex, e.g. `ssh\:\/\/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#commit_message_negative_regex ProjectPushRulesA#commit_message_negative_regex}

---

##### `CommitMessageRegex`<sup>Optional</sup> <a name="CommitMessageRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.commitMessageRegex"></a>

```csharp
public string CommitMessageRegex { get; set; }
```

- *Type:* string

All commit messages must match this regex, e.g. `Fixed \d+\..*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#commit_message_regex ProjectPushRulesA#commit_message_regex}

---

##### `DenyDeleteTag`<sup>Optional</sup> <a name="DenyDeleteTag" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.denyDeleteTag"></a>

```csharp
public object DenyDeleteTag { get; set; }
```

- *Type:* object

Deny deleting a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#deny_delete_tag ProjectPushRulesA#deny_delete_tag}

---

##### `FileNameRegex`<sup>Optional</sup> <a name="FileNameRegex" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.fileNameRegex"></a>

```csharp
public string FileNameRegex { get; set; }
```

- *Type:* string

All committed filenames must not match this regex, e.g. `(jar|exe)$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#file_name_regex ProjectPushRulesA#file_name_regex}

---

##### `MaxFileSize`<sup>Optional</sup> <a name="MaxFileSize" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.maxFileSize"></a>

```csharp
public double MaxFileSize { get; set; }
```

- *Type:* double

Maximum file size (MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#max_file_size ProjectPushRulesA#max_file_size}

---

##### `MemberCheck`<sup>Optional</sup> <a name="MemberCheck" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.memberCheck"></a>

```csharp
public object MemberCheck { get; set; }
```

- *Type:* object

Restrict commits by author (email) to existing GitLab users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#member_check ProjectPushRulesA#member_check}

---

##### `PreventSecrets`<sup>Optional</sup> <a name="PreventSecrets" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.preventSecrets"></a>

```csharp
public object PreventSecrets { get; set; }
```

- *Type:* object

GitLab will reject any files that are likely to contain secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#prevent_secrets ProjectPushRulesA#prevent_secrets}

---

##### `RejectNonDcoCommits`<sup>Optional</sup> <a name="RejectNonDcoCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectNonDcoCommits"></a>

```csharp
public object RejectNonDcoCommits { get; set; }
```

- *Type:* object

Reject commit when it’s not DCO certified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#reject_non_dco_commits ProjectPushRulesA#reject_non_dco_commits}

---

##### `RejectUnsignedCommits`<sup>Optional</sup> <a name="RejectUnsignedCommits" id="@cdktf/provider-gitlab.projectPushRules.ProjectPushRulesAConfig.property.rejectUnsignedCommits"></a>

```csharp
public object RejectUnsignedCommits { get; set; }
```

- *Type:* object

Reject commit when it’s not signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.4.0/docs/resources/project_push_rules#reject_unsigned_commits ProjectPushRulesA#reject_unsigned_commits}

---




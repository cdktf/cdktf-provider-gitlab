# `projectIntegrationTelegram` Submodule <a name="`projectIntegrationTelegram` Submodule" id="@cdktf/provider-gitlab.projectIntegrationTelegram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationTelegram <a name="ProjectIntegrationTelegram" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram gitlab_project_integration_telegram}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationTelegram(Construct Scope, string Id, ProjectIntegrationTelegramConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig">ProjectIntegrationTelegramConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig">ProjectIntegrationTelegramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.resetNotifyOnlyBrokenPipelines"></a>

```csharp
private void ResetNotifyOnlyBrokenPipelines()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationTelegram resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationTelegram.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationTelegram.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationTelegram.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationTelegram.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationTelegram resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationTelegram to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationTelegram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationTelegram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.noteEventsInput">NoteEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pushEventsInput">PushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.roomInput">RoomInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.issuesEvents">IssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.noteEvents">NoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pipelineEvents">PipelineEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.room">Room</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.wikiPageEvents">WikiPageEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialIssuesEventsInput"></a>

```csharp
public bool|IResolvable ConfidentialIssuesEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialNoteEventsInput"></a>

```csharp
public bool|IResolvable ConfidentialNoteEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.issuesEventsInput"></a>

```csharp
public bool|IResolvable IssuesEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.mergeRequestsEventsInput"></a>

```csharp
public bool|IResolvable MergeRequestsEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.noteEventsInput"></a>

```csharp
public bool|IResolvable NoteEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.notifyOnlyBrokenPipelinesInput"></a>

```csharp
public bool|IResolvable NotifyOnlyBrokenPipelinesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pipelineEventsInput"></a>

```csharp
public bool|IResolvable PipelineEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pushEventsInput"></a>

```csharp
public bool|IResolvable PushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RoomInput`<sup>Optional</sup> <a name="RoomInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.roomInput"></a>

```csharp
public string RoomInput { get; }
```

- *Type:* string

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tagPushEventsInput"></a>

```csharp
public bool|IResolvable TagPushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.wikiPageEventsInput"></a>

```csharp
public bool|IResolvable WikiPageEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialIssuesEvents"></a>

```csharp
public bool|IResolvable ConfidentialIssuesEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.confidentialNoteEvents"></a>

```csharp
public bool|IResolvable ConfidentialNoteEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.issuesEvents"></a>

```csharp
public bool|IResolvable IssuesEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.mergeRequestsEvents"></a>

```csharp
public bool|IResolvable MergeRequestsEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.noteEvents"></a>

```csharp
public bool|IResolvable NoteEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.notifyOnlyBrokenPipelines"></a>

```csharp
public bool|IResolvable NotifyOnlyBrokenPipelines { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pipelineEvents"></a>

```csharp
public bool|IResolvable PipelineEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Room`<sup>Required</sup> <a name="Room" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.room"></a>

```csharp
public string Room { get; }
```

- *Type:* string

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.wikiPageEvents"></a>

```csharp
public bool|IResolvable WikiPageEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegram.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationTelegramConfig <a name="ProjectIntegrationTelegramConfig" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationTelegramConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable ConfidentialIssuesEvents,
    bool|IResolvable ConfidentialNoteEvents,
    bool|IResolvable IssuesEvents,
    bool|IResolvable MergeRequestsEvents,
    bool|IResolvable NoteEvents,
    bool|IResolvable PipelineEvents,
    string Project,
    bool|IResolvable PushEvents,
    string Room,
    bool|IResolvable TagPushEvents,
    string Token,
    bool|IResolvable WikiPageEvents,
    string BranchesToBeNotified = null,
    bool|IResolvable NotifyOnlyBrokenPipelines = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.issuesEvents">IssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.noteEvents">NoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.project">Project</a></code> | <code>string</code> | The ID or full path of the project to integrate with Telegram. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.room">Room</a></code> | <code>string</code> | Unique identifier for the target chat or the username of the target channel (in the format `@channelusername`). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.token">Token</a></code> | <code>string</code> | The Telegram bot token. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for wiki page events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Send notifications for broken pipelines. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.confidentialIssuesEvents"></a>

```csharp
public bool|IResolvable ConfidentialIssuesEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#confidential_issues_events ProjectIntegrationTelegram#confidential_issues_events}

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.confidentialNoteEvents"></a>

```csharp
public bool|IResolvable ConfidentialNoteEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#confidential_note_events ProjectIntegrationTelegram#confidential_note_events}

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.issuesEvents"></a>

```csharp
public bool|IResolvable IssuesEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#issues_events ProjectIntegrationTelegram#issues_events}

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.mergeRequestsEvents"></a>

```csharp
public bool|IResolvable MergeRequestsEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#merge_requests_events ProjectIntegrationTelegram#merge_requests_events}

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.noteEvents"></a>

```csharp
public bool|IResolvable NoteEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#note_events ProjectIntegrationTelegram#note_events}

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.pipelineEvents"></a>

```csharp
public bool|IResolvable PipelineEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#pipeline_events ProjectIntegrationTelegram#pipeline_events}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or full path of the project to integrate with Telegram.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#project ProjectIntegrationTelegram#project}

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#push_events ProjectIntegrationTelegram#push_events}

---

##### `Room`<sup>Required</sup> <a name="Room" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.room"></a>

```csharp
public string Room { get; set; }
```

- *Type:* string

Unique identifier for the target chat or the username of the target channel (in the format `@channelusername`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#room ProjectIntegrationTelegram#room}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#tag_push_events ProjectIntegrationTelegram#tag_push_events}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The Telegram bot token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#token ProjectIntegrationTelegram#token}

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.wikiPageEvents"></a>

```csharp
public bool|IResolvable WikiPageEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#wiki_page_events ProjectIntegrationTelegram#wiki_page_events}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#branches_to_be_notified ProjectIntegrationTelegram#branches_to_be_notified}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationTelegram.ProjectIntegrationTelegramConfig.property.notifyOnlyBrokenPipelines"></a>

```csharp
public bool|IResolvable NotifyOnlyBrokenPipelines { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/resources/project_integration_telegram#notify_only_broken_pipelines ProjectIntegrationTelegram#notify_only_broken_pipelines}

---




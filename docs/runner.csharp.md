# `runner` Submodule <a name="`runner` Submodule" id="@cdktf/provider-gitlab.runner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Runner <a name="Runner" id="@cdktf/provider-gitlab.runner.Runner"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner gitlab_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.runner.Runner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new Runner(Construct Scope, string Id, RunnerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig">RunnerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.runner.RunnerConfig">RunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetLocked">ResetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetMaintenanceNote">ResetMaintenanceNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetMaximumTimeout">ResetMaximumTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetPaused">ResetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetRunUntagged">ResetRunUntagged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetTagList">ResetTagList</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.runner.Runner.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.runner.Runner.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.runner.Runner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.runner.Runner.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.runner.Runner.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.runner.Runner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.runner.Runner.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.runner.Runner.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.runner.Runner.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.runner.Runner.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.runner.Runner.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.runner.Runner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.runner.Runner.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.runner.Runner.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.runner.Runner.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.runner.Runner.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.runner.Runner.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.runner.Runner.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.runner.Runner.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.runner.Runner.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.runner.Runner.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.runner.Runner.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.runner.Runner.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.runner.Runner.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.runner.Runner.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.runner.Runner.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.runner.Runner.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocked` <a name="ResetLocked" id="@cdktf/provider-gitlab.runner.Runner.resetLocked"></a>

```csharp
private void ResetLocked()
```

##### `ResetMaintenanceNote` <a name="ResetMaintenanceNote" id="@cdktf/provider-gitlab.runner.Runner.resetMaintenanceNote"></a>

```csharp
private void ResetMaintenanceNote()
```

##### `ResetMaximumTimeout` <a name="ResetMaximumTimeout" id="@cdktf/provider-gitlab.runner.Runner.resetMaximumTimeout"></a>

```csharp
private void ResetMaximumTimeout()
```

##### `ResetPaused` <a name="ResetPaused" id="@cdktf/provider-gitlab.runner.Runner.resetPaused"></a>

```csharp
private void ResetPaused()
```

##### `ResetRunUntagged` <a name="ResetRunUntagged" id="@cdktf/provider-gitlab.runner.Runner.resetRunUntagged"></a>

```csharp
private void ResetRunUntagged()
```

##### `ResetTagList` <a name="ResetTagList" id="@cdktf/provider-gitlab.runner.Runner.resetTagList"></a>

```csharp
private void ResetTagList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Runner resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.runner.Runner.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Runner.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.runner.Runner.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.runner.Runner.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Runner.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.runner.Runner.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.runner.Runner.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Runner.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.runner.Runner.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

Runner.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Runner resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Runner to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Runner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Runner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.authenticationToken">AuthenticationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.lockedInput">LockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maintenanceNoteInput">MaintenanceNoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maximumTimeoutInput">MaximumTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.pausedInput">PausedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.registrationTokenInput">RegistrationTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.runUntaggedInput">RunUntaggedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tagListInput">TagListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.locked">Locked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maintenanceNote">MaintenanceNote</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maximumTimeout">MaximumTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.paused">Paused</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.registrationToken">RegistrationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.runUntagged">RunUntagged</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tagList">TagList</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.runner.Runner.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.runner.Runner.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.runner.Runner.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.runner.Runner.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.runner.Runner.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.runner.Runner.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.runner.Runner.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.runner.Runner.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.runner.Runner.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.runner.Runner.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.runner.Runner.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.runner.Runner.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.runner.Runner.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.runner.Runner.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthenticationToken`<sup>Required</sup> <a name="AuthenticationToken" id="@cdktf/provider-gitlab.runner.Runner.property.authenticationToken"></a>

```csharp
public string AuthenticationToken { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-gitlab.runner.Runner.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.runner.Runner.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.runner.Runner.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.runner.Runner.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LockedInput`<sup>Optional</sup> <a name="LockedInput" id="@cdktf/provider-gitlab.runner.Runner.property.lockedInput"></a>

```csharp
public object LockedInput { get; }
```

- *Type:* object

---

##### `MaintenanceNoteInput`<sup>Optional</sup> <a name="MaintenanceNoteInput" id="@cdktf/provider-gitlab.runner.Runner.property.maintenanceNoteInput"></a>

```csharp
public string MaintenanceNoteInput { get; }
```

- *Type:* string

---

##### `MaximumTimeoutInput`<sup>Optional</sup> <a name="MaximumTimeoutInput" id="@cdktf/provider-gitlab.runner.Runner.property.maximumTimeoutInput"></a>

```csharp
public double MaximumTimeoutInput { get; }
```

- *Type:* double

---

##### `PausedInput`<sup>Optional</sup> <a name="PausedInput" id="@cdktf/provider-gitlab.runner.Runner.property.pausedInput"></a>

```csharp
public object PausedInput { get; }
```

- *Type:* object

---

##### `RegistrationTokenInput`<sup>Optional</sup> <a name="RegistrationTokenInput" id="@cdktf/provider-gitlab.runner.Runner.property.registrationTokenInput"></a>

```csharp
public string RegistrationTokenInput { get; }
```

- *Type:* string

---

##### `RunUntaggedInput`<sup>Optional</sup> <a name="RunUntaggedInput" id="@cdktf/provider-gitlab.runner.Runner.property.runUntaggedInput"></a>

```csharp
public object RunUntaggedInput { get; }
```

- *Type:* object

---

##### `TagListInput`<sup>Optional</sup> <a name="TagListInput" id="@cdktf/provider-gitlab.runner.Runner.property.tagListInput"></a>

```csharp
public string[] TagListInput { get; }
```

- *Type:* string[]

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.runner.Runner.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.runner.Runner.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.runner.Runner.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Locked`<sup>Required</sup> <a name="Locked" id="@cdktf/provider-gitlab.runner.Runner.property.locked"></a>

```csharp
public object Locked { get; }
```

- *Type:* object

---

##### `MaintenanceNote`<sup>Required</sup> <a name="MaintenanceNote" id="@cdktf/provider-gitlab.runner.Runner.property.maintenanceNote"></a>

```csharp
public string MaintenanceNote { get; }
```

- *Type:* string

---

##### `MaximumTimeout`<sup>Required</sup> <a name="MaximumTimeout" id="@cdktf/provider-gitlab.runner.Runner.property.maximumTimeout"></a>

```csharp
public double MaximumTimeout { get; }
```

- *Type:* double

---

##### `Paused`<sup>Required</sup> <a name="Paused" id="@cdktf/provider-gitlab.runner.Runner.property.paused"></a>

```csharp
public object Paused { get; }
```

- *Type:* object

---

##### `RegistrationToken`<sup>Required</sup> <a name="RegistrationToken" id="@cdktf/provider-gitlab.runner.Runner.property.registrationToken"></a>

```csharp
public string RegistrationToken { get; }
```

- *Type:* string

---

##### `RunUntagged`<sup>Required</sup> <a name="RunUntagged" id="@cdktf/provider-gitlab.runner.Runner.property.runUntagged"></a>

```csharp
public object RunUntagged { get; }
```

- *Type:* object

---

##### `TagList`<sup>Required</sup> <a name="TagList" id="@cdktf/provider-gitlab.runner.Runner.property.tagList"></a>

```csharp
public string[] TagList { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.runner.Runner.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerConfig <a name="RunnerConfig" id="@cdktf/provider-gitlab.runner.RunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.runner.RunnerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new RunnerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RegistrationToken,
    string AccessLevel = null,
    string Description = null,
    string Id = null,
    object Locked = null,
    string MaintenanceNote = null,
    double MaximumTimeout = null,
    object Paused = null,
    object RunUntagged = null,
    string[] TagList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.registrationToken">RegistrationToken</a></code> | <code>string</code> | The registration token used to register the runner. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | The access_level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.description">Description</a></code> | <code>string</code> | The runner's description. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#id Runner#id}. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.locked">Locked</a></code> | <code>object</code> | Whether the runner should be locked for current project. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.maintenanceNote">MaintenanceNote</a></code> | <code>string</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.maximumTimeout">MaximumTimeout</a></code> | <code>double</code> | Maximum timeout set when this runner handles the job. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.paused">Paused</a></code> | <code>object</code> | Whether the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.runUntagged">RunUntagged</a></code> | <code>object</code> | Whether the runner should handle untagged jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.tagList">TagList</a></code> | <code>string[]</code> | List of runner’s tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RegistrationToken`<sup>Required</sup> <a name="RegistrationToken" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.registrationToken"></a>

```csharp
public string RegistrationToken { get; set; }
```

- *Type:* string

The registration token used to register the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#registration_token Runner#registration_token}

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

The access_level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#access_level Runner#access_level}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The runner's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#description Runner#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#id Runner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Locked`<sup>Optional</sup> <a name="Locked" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.locked"></a>

```csharp
public object Locked { get; set; }
```

- *Type:* object

Whether the runner should be locked for current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#locked Runner#locked}

---

##### `MaintenanceNote`<sup>Optional</sup> <a name="MaintenanceNote" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.maintenanceNote"></a>

```csharp
public string MaintenanceNote { get; set; }
```

- *Type:* string

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#maintenance_note Runner#maintenance_note}

---

##### `MaximumTimeout`<sup>Optional</sup> <a name="MaximumTimeout" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.maximumTimeout"></a>

```csharp
public double MaximumTimeout { get; set; }
```

- *Type:* double

Maximum timeout set when this runner handles the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#maximum_timeout Runner#maximum_timeout}

---

##### `Paused`<sup>Optional</sup> <a name="Paused" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.paused"></a>

```csharp
public object Paused { get; set; }
```

- *Type:* object

Whether the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#paused Runner#paused}

---

##### `RunUntagged`<sup>Optional</sup> <a name="RunUntagged" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.runUntagged"></a>

```csharp
public object RunUntagged { get; set; }
```

- *Type:* object

Whether the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#run_untagged Runner#run_untagged}

---

##### `TagList`<sup>Optional</sup> <a name="TagList" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.tagList"></a>

```csharp
public string[] TagList { get; set; }
```

- *Type:* string[]

List of runner’s tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/runner#tag_list Runner#tag_list}

---




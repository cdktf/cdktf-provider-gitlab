# `pipelineSchedule` Submodule <a name="`pipelineSchedule` Submodule" id="@cdktf/provider-gitlab.pipelineSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSchedule <a name="PipelineSchedule" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule gitlab_pipeline_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new PipelineSchedule(Construct Scope, string Id, PipelineScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig">PipelineScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig">PipelineScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetCronTimezone">ResetCronTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetTakeOwnership">ResetTakeOwnership</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetCronTimezone` <a name="ResetCronTimezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetCronTimezone"></a>

```csharp
private void ResetCronTimezone()
```

##### `ResetTakeOwnership` <a name="ResetTakeOwnership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetTakeOwnership"></a>

```csharp
private void ResetTakeOwnership()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

PipelineSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

PipelineSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

PipelineSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

PipelineSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PipelineSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PipelineSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PipelineSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.owner">Owner</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.pipelineScheduleId">PipelineScheduleId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronInput">CronInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezoneInput">CronTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnershipInput">TakeOwnershipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cron">Cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezone">CronTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnership">TakeOwnership</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.owner"></a>

```csharp
public double Owner { get; }
```

- *Type:* double

---

##### `PipelineScheduleId`<sup>Required</sup> <a name="PipelineScheduleId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.pipelineScheduleId"></a>

```csharp
public double PipelineScheduleId { get; }
```

- *Type:* double

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronInput"></a>

```csharp
public string CronInput { get; }
```

- *Type:* string

---

##### `CronTimezoneInput`<sup>Optional</sup> <a name="CronTimezoneInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezoneInput"></a>

```csharp
public string CronTimezoneInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `TakeOwnershipInput`<sup>Optional</sup> <a name="TakeOwnershipInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnershipInput"></a>

```csharp
public object TakeOwnershipInput { get; }
```

- *Type:* object

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cron"></a>

```csharp
public string Cron { get; }
```

- *Type:* string

---

##### `CronTimezone`<sup>Required</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezone"></a>

```csharp
public string CronTimezone { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `TakeOwnership`<sup>Required</sup> <a name="TakeOwnership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnership"></a>

```csharp
public object TakeOwnership { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineScheduleConfig <a name="PipelineScheduleConfig" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new PipelineScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cron,
    string Description,
    string Project,
    string Ref,
    object Active = null,
    string CronTimezone = null,
    object TakeOwnership = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cron">Cron</a></code> | <code>string</code> | The cron (e.g. `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.description">Description</a></code> | <code>string</code> | The description of the pipeline schedule. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.project">Project</a></code> | <code>string</code> | The name or id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.ref">Ref</a></code> | <code>string</code> | The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.active">Active</a></code> | <code>object</code> | The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cronTimezone">CronTimezone</a></code> | <code>string</code> | The timezone. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.takeOwnership">TakeOwnership</a></code> | <code>object</code> | When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cron"></a>

```csharp
public string Cron { get; set; }
```

- *Type:* string

The cron (e.g. `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#cron PipelineSchedule#cron}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the pipeline schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#description PipelineSchedule#description}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#project PipelineSchedule#project}

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#ref PipelineSchedule#ref}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#active PipelineSchedule#active}

---

##### `CronTimezone`<sup>Optional</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cronTimezone"></a>

```csharp
public string CronTimezone { get; set; }
```

- *Type:* string

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#cron_timezone PipelineSchedule#cron_timezone}

---

##### `TakeOwnership`<sup>Optional</sup> <a name="TakeOwnership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.takeOwnership"></a>

```csharp
public object TakeOwnership { get; set; }
```

- *Type:* object

When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it.

This can help when managing scheduled pipeline drift when other users are making changes outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/pipeline_schedule#take_ownership PipelineSchedule#take_ownership}

---




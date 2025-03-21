# `valueStreamAnalytics` Submodule <a name="`valueStreamAnalytics` Submodule" id="@cdktf/provider-gitlab.valueStreamAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValueStreamAnalytics <a name="ValueStreamAnalytics" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics gitlab_value_stream_analytics}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ValueStreamAnalytics(Construct Scope, string Id, ValueStreamAnalyticsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig">ValueStreamAnalyticsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig">ValueStreamAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath">ResetGroupFullPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath">ResetProjectFullPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStages` <a name="PutStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages"></a>

```csharp
private void PutStages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.putStages.parameter.value"></a>

- *Type:* object

---

##### `ResetGroupFullPath` <a name="ResetGroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetGroupFullPath"></a>

```csharp
private void ResetGroupFullPath()
```

##### `ResetProjectFullPath` <a name="ResetProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.resetProjectFullPath"></a>

```csharp
private void ResetProjectFullPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ValueStreamAnalytics.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ValueStreamAnalytics.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ValueStreamAnalytics.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ValueStreamAnalytics.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ValueStreamAnalytics resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ValueStreamAnalytics to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ValueStreamAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ValueStreamAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages">Stages</a></code> | <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput">GroupFullPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput">ProjectFullPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput">StagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath">GroupFullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath">ProjectFullPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stages"></a>

```csharp
public ValueStreamAnalyticsStagesList Stages { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList">ValueStreamAnalyticsStagesList</a>

---

##### `GroupFullPathInput`<sup>Optional</sup> <a name="GroupFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPathInput"></a>

```csharp
public string GroupFullPathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectFullPathInput`<sup>Optional</sup> <a name="ProjectFullPathInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPathInput"></a>

```csharp
public string ProjectFullPathInput { get; }
```

- *Type:* string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.stagesInput"></a>

```csharp
public object StagesInput { get; }
```

- *Type:* object

---

##### `GroupFullPath`<sup>Required</sup> <a name="GroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.groupFullPath"></a>

```csharp
public string GroupFullPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectFullPath`<sup>Required</sup> <a name="ProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.projectFullPath"></a>

```csharp
public string ProjectFullPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalytics.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ValueStreamAnalyticsConfig <a name="ValueStreamAnalyticsConfig" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ValueStreamAnalyticsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Stages,
    string GroupFullPath = null,
    string ProjectFullPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name">Name</a></code> | <code>string</code> | The name of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages">Stages</a></code> | <code>object</code> | Stages of the value stream. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath">GroupFullPath</a></code> | <code>string</code> | Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath">ProjectFullPath</a></code> | <code>string</code> | Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.stages"></a>

```csharp
public object Stages { get; set; }
```

- *Type:* object

Stages of the value stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#stages ValueStreamAnalytics#stages}

---

##### `GroupFullPath`<sup>Optional</sup> <a name="GroupFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.groupFullPath"></a>

```csharp
public string GroupFullPath { get; set; }
```

- *Type:* string

Full path of the group the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#group_full_path ValueStreamAnalytics#group_full_path}

---

##### `ProjectFullPath`<sup>Optional</sup> <a name="ProjectFullPath" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsConfig.property.projectFullPath"></a>

```csharp
public string ProjectFullPath { get; set; }
```

- *Type:* string

Full path of the project the value stream is created in. **One of `group_full_path` OR `project_full_path` is required.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#project_full_path ValueStreamAnalytics#project_full_path}

---

### ValueStreamAnalyticsStages <a name="ValueStreamAnalyticsStages" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ValueStreamAnalyticsStages {
    string Name,
    object Custom = null,
    string EndEventIdentifier = null,
    string EndEventLabelId = null,
    object Hidden = null,
    string StartEventIdentifier = null,
    string StartEventLabelId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name">Name</a></code> | <code>string</code> | The name of the value stream stage. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom">Custom</a></code> | <code>object</code> | Boolean whether the stage is customized. If false, it assigns a built-in default stage by name. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier">EndEventIdentifier</a></code> | <code>string</code> | End event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId">EndEventLabelId</a></code> | <code>string</code> | Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden">Hidden</a></code> | <code>object</code> | Boolean whether the stage is hidden, GitLab provided default stages are hidden by default. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier">StartEventIdentifier</a></code> | <code>string</code> | Start event identifier. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId">StartEventLabelId</a></code> | <code>string</code> | Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the value stream stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#name ValueStreamAnalytics#name}

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.custom"></a>

```csharp
public object Custom { get; set; }
```

- *Type:* object

Boolean whether the stage is customized. If false, it assigns a built-in default stage by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#custom ValueStreamAnalytics#custom}

---

##### `EndEventIdentifier`<sup>Optional</sup> <a name="EndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventIdentifier"></a>

```csharp
public string EndEventIdentifier { get; set; }
```

- *Type:* string

End event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#end_event_identifier ValueStreamAnalytics#end_event_identifier}

---

##### `EndEventLabelId`<sup>Optional</sup> <a name="EndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.endEventLabelId"></a>

```csharp
public string EndEventLabelId { get; set; }
```

- *Type:* string

Label ID associated with the end event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#end_event_label_id ValueStreamAnalytics#end_event_label_id}

---

##### `Hidden`<sup>Optional</sup> <a name="Hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.hidden"></a>

```csharp
public object Hidden { get; set; }
```

- *Type:* object

Boolean whether the stage is hidden, GitLab provided default stages are hidden by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#hidden ValueStreamAnalytics#hidden}

---

##### `StartEventIdentifier`<sup>Optional</sup> <a name="StartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventIdentifier"></a>

```csharp
public string StartEventIdentifier { get; set; }
```

- *Type:* string

Start event identifier.

Valid values are: `CODE_STAGE_START`, `ISSUE_CLOSED`, `ISSUE_CREATED`, `ISSUE_DEPLOYED_TO_PRODUCTION`, `ISSUE_FIRST_ADDED_TO_BOARD`, `ISSUE_FIRST_ADDED_TO_ITERATION`, `ISSUE_FIRST_ASSIGNED_AT`, `ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE`, `ISSUE_FIRST_MENTIONED_IN_COMMIT`, `ISSUE_LABEL_ADDED`, `ISSUE_LABEL_REMOVED`, `ISSUE_LAST_EDITED`, `ISSUE_STAGE_END`, `MERGE_REQUEST_CLOSED`, `MERGE_REQUEST_CREATED`, `MERGE_REQUEST_FIRST_ASSIGNED_AT`, `MERGE_REQUEST_FIRST_COMMIT_AT`, `MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION`, `MERGE_REQUEST_LABEL_ADDED`, `MERGE_REQUEST_LABEL_REMOVED`, `MERGE_REQUEST_LAST_BUILD_FINISHED`, `MERGE_REQUEST_LAST_BUILD_STARTED`, `MERGE_REQUEST_LAST_EDITED`, `MERGE_REQUEST_MERGED`, `MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED`, `MERGE_REQUEST_PLAN_STAGE_START`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#start_event_identifier ValueStreamAnalytics#start_event_identifier}

---

##### `StartEventLabelId`<sup>Optional</sup> <a name="StartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStages.property.startEventLabelId"></a>

```csharp
public string StartEventLabelId { get; set; }
```

- *Type:* string

Label ID associated with the start event identifier. In the format of `gid://gitlab/GroupLabel/<id>` or `gid://gitlab/ProjectLabel/<id>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/value_stream_analytics#start_event_label_id ValueStreamAnalytics#start_event_label_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ValueStreamAnalyticsStagesList <a name="ValueStreamAnalyticsStagesList" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ValueStreamAnalyticsStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get"></a>

```csharp
private ValueStreamAnalyticsStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ValueStreamAnalyticsStagesOutputReference <a name="ValueStreamAnalyticsStagesOutputReference" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ValueStreamAnalyticsStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier">ResetEndEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId">ResetEndEventLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden">ResetHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier">ResetStartEventIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId">ResetStartEventLabelId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetEndEventIdentifier` <a name="ResetEndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventIdentifier"></a>

```csharp
private void ResetEndEventIdentifier()
```

##### `ResetEndEventLabelId` <a name="ResetEndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetEndEventLabelId"></a>

```csharp
private void ResetEndEventLabelId()
```

##### `ResetHidden` <a name="ResetHidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetHidden"></a>

```csharp
private void ResetHidden()
```

##### `ResetStartEventIdentifier` <a name="ResetStartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventIdentifier"></a>

```csharp
private void ResetStartEventIdentifier()
```

##### `ResetStartEventLabelId` <a name="ResetStartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.resetStartEventLabelId"></a>

```csharp
private void ResetStartEventLabelId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput">CustomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput">EndEventIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput">EndEventLabelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput">HiddenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput">StartEventIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput">StartEventLabelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom">Custom</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier">EndEventIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId">EndEventLabelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden">Hidden</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier">StartEventIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId">StartEventLabelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.customInput"></a>

```csharp
public object CustomInput { get; }
```

- *Type:* object

---

##### `EndEventIdentifierInput`<sup>Optional</sup> <a name="EndEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifierInput"></a>

```csharp
public string EndEventIdentifierInput { get; }
```

- *Type:* string

---

##### `EndEventLabelIdInput`<sup>Optional</sup> <a name="EndEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelIdInput"></a>

```csharp
public string EndEventLabelIdInput { get; }
```

- *Type:* string

---

##### `HiddenInput`<sup>Optional</sup> <a name="HiddenInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hiddenInput"></a>

```csharp
public object HiddenInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartEventIdentifierInput`<sup>Optional</sup> <a name="StartEventIdentifierInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifierInput"></a>

```csharp
public string StartEventIdentifierInput { get; }
```

- *Type:* string

---

##### `StartEventLabelIdInput`<sup>Optional</sup> <a name="StartEventLabelIdInput" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelIdInput"></a>

```csharp
public string StartEventLabelIdInput { get; }
```

- *Type:* string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.custom"></a>

```csharp
public object Custom { get; }
```

- *Type:* object

---

##### `EndEventIdentifier`<sup>Required</sup> <a name="EndEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventIdentifier"></a>

```csharp
public string EndEventIdentifier { get; }
```

- *Type:* string

---

##### `EndEventLabelId`<sup>Required</sup> <a name="EndEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.endEventLabelId"></a>

```csharp
public string EndEventLabelId { get; }
```

- *Type:* string

---

##### `Hidden`<sup>Required</sup> <a name="Hidden" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.hidden"></a>

```csharp
public object Hidden { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartEventIdentifier`<sup>Required</sup> <a name="StartEventIdentifier" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventIdentifier"></a>

```csharp
public string StartEventIdentifier { get; }
```

- *Type:* string

---

##### `StartEventLabelId`<sup>Required</sup> <a name="StartEventLabelId" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.startEventLabelId"></a>

```csharp
public string StartEventLabelId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.valueStreamAnalytics.ValueStreamAnalyticsStagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




# `groupVariable` Submodule <a name="`groupVariable` Submodule" id="@cdktf/provider-gitlab.groupVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupVariable <a name="GroupVariable" id="@cdktf/provider-gitlab.groupVariable.GroupVariable"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable gitlab_group_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupVariable(Construct Scope, string Id, GroupVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig">GroupVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig">GroupVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetEnvironmentScope">ResetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetHidden">ResetHidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetMasked">ResetMasked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetProtected">ResetProtected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetRaw">ResetRaw</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.resetVariableType">ResetVariableType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnvironmentScope` <a name="ResetEnvironmentScope" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetEnvironmentScope"></a>

```csharp
private void ResetEnvironmentScope()
```

##### `ResetHidden` <a name="ResetHidden" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetHidden"></a>

```csharp
private void ResetHidden()
```

##### `ResetMasked` <a name="ResetMasked" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetMasked"></a>

```csharp
private void ResetMasked()
```

##### `ResetProtected` <a name="ResetProtected" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetProtected"></a>

```csharp
private void ResetProtected()
```

##### `ResetRaw` <a name="ResetRaw" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetRaw"></a>

```csharp
private void ResetRaw()
```

##### `ResetVariableType` <a name="ResetVariableType" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.resetVariableType"></a>

```csharp
private void ResetVariableType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupVariable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupVariable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GroupVariable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupVariable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GroupVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.environmentScopeInput">EnvironmentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.hiddenInput">HiddenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.maskedInput">MaskedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.protectedInput">ProtectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.rawInput">RawInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.variableTypeInput">VariableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.environmentScope">EnvironmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.hidden">Hidden</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.masked">Masked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.protected">Protected</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.raw">Raw</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentScopeInput`<sup>Optional</sup> <a name="EnvironmentScopeInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.environmentScopeInput"></a>

```csharp
public string EnvironmentScopeInput { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `HiddenInput`<sup>Optional</sup> <a name="HiddenInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.hiddenInput"></a>

```csharp
public object HiddenInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MaskedInput`<sup>Optional</sup> <a name="MaskedInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.maskedInput"></a>

```csharp
public object MaskedInput { get; }
```

- *Type:* object

---

##### `ProtectedInput`<sup>Optional</sup> <a name="ProtectedInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.protectedInput"></a>

```csharp
public object ProtectedInput { get; }
```

- *Type:* object

---

##### `RawInput`<sup>Optional</sup> <a name="RawInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.rawInput"></a>

```csharp
public object RawInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableTypeInput`<sup>Optional</sup> <a name="VariableTypeInput" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.variableTypeInput"></a>

```csharp
public string VariableTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentScope`<sup>Required</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.environmentScope"></a>

```csharp
public string EnvironmentScope { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Hidden`<sup>Required</sup> <a name="Hidden" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.hidden"></a>

```csharp
public object Hidden { get; }
```

- *Type:* object

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Masked`<sup>Required</sup> <a name="Masked" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.masked"></a>

```csharp
public object Masked { get; }
```

- *Type:* object

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.protected"></a>

```csharp
public object Protected { get; }
```

- *Type:* object

---

##### `Raw`<sup>Required</sup> <a name="Raw" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.raw"></a>

```csharp
public object Raw { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.groupVariable.GroupVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupVariableConfig <a name="GroupVariableConfig" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupVariableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Group,
    string Key,
    string Value,
    string Description = null,
    string EnvironmentScope = null,
    object Hidden = null,
    object Masked = null,
    object Protected = null,
    object Raw = null,
    string VariableType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.group">Group</a></code> | <code>string</code> | The name or id of the group. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.key">Key</a></code> | <code>string</code> | The name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.value">Value</a></code> | <code>string</code> | The value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.description">Description</a></code> | <code>string</code> | The description of the variable. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.environmentScope">EnvironmentScope</a></code> | <code>string</code> | The environment scope of the variable. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.hidden">Hidden</a></code> | <code>object</code> | If set to `true`, the value of the variable will be hidden in the CI/CD User Interface. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.masked">Masked</a></code> | <code>object</code> | If set to `true`, the value of the variable will be masked in job logs. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.protected">Protected</a></code> | <code>object</code> | If set to `true`, the variable will be passed only to pipelines running on protected branches and tags. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.raw">Raw</a></code> | <code>object</code> | Whether the variable is treated as a raw string. When true, variables in the value are not expanded. |
| <code><a href="#@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.variableType">VariableType</a></code> | <code>string</code> | The type of a variable. Valid values are: `env_var`, `file`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The name or id of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#group GroupVariable#group}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#key GroupVariable#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#value GroupVariable#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#description GroupVariable#description}

---

##### `EnvironmentScope`<sup>Optional</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.environmentScope"></a>

```csharp
public string EnvironmentScope { get; set; }
```

- *Type:* string

The environment scope of the variable.

Defaults to all environment (`*`). Note that in Community Editions of Gitlab, values other than `*` will cause inconsistent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#environment_scope GroupVariable#environment_scope}

---

##### `Hidden`<sup>Optional</sup> <a name="Hidden" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.hidden"></a>

```csharp
public object Hidden { get; set; }
```

- *Type:* object

If set to `true`, the value of the variable will be hidden in the CI/CD User Interface.

The value must meet the [hidden requirements](https://docs.gitlab.com/ci/variables/#hide-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#hidden GroupVariable#hidden}

---

##### `Masked`<sup>Optional</sup> <a name="Masked" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.masked"></a>

```csharp
public object Masked { get; set; }
```

- *Type:* object

If set to `true`, the value of the variable will be masked in job logs.

The value must meet the [masking requirements](https://docs.gitlab.com/ci/variables/#mask-a-cicd-variable).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#masked GroupVariable#masked}

---

##### `Protected`<sup>Optional</sup> <a name="Protected" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.protected"></a>

```csharp
public object Protected { get; set; }
```

- *Type:* object

If set to `true`, the variable will be passed only to pipelines running on protected branches and tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#protected GroupVariable#protected}

---

##### `Raw`<sup>Optional</sup> <a name="Raw" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.raw"></a>

```csharp
public object Raw { get; set; }
```

- *Type:* object

Whether the variable is treated as a raw string. When true, variables in the value are not expanded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#raw GroupVariable#raw}

---

##### `VariableType`<sup>Optional</sup> <a name="VariableType" id="@cdktf/provider-gitlab.groupVariable.GroupVariableConfig.property.variableType"></a>

```csharp
public string VariableType { get; set; }
```

- *Type:* string

The type of a variable. Valid values are: `env_var`, `file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/resources/group_variable#variable_type GroupVariable#variable_type}

---




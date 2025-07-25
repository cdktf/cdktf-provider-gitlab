# `instanceServiceAccount` Submodule <a name="`instanceServiceAccount` Submodule" id="@cdktf/provider-gitlab.instanceServiceAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstanceServiceAccount <a name="InstanceServiceAccount" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account gitlab_instance_service_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new InstanceServiceAccount(Construct Scope, string Id, InstanceServiceAccountConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig">InstanceServiceAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig">InstanceServiceAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(InstanceServiceAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeouts">InstanceServiceAccountTimeouts</a>

---

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InstanceServiceAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceServiceAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceServiceAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceServiceAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceServiceAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InstanceServiceAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InstanceServiceAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InstanceServiceAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InstanceServiceAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference">InstanceServiceAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.timeouts"></a>

```csharp
public InstanceServiceAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference">InstanceServiceAccountTimeoutsOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceServiceAccountConfig <a name="InstanceServiceAccountConfig" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new InstanceServiceAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email = null,
    string Name = null,
    InstanceServiceAccountTimeouts Timeouts = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.email">Email</a></code> | <code>string</code> | The email of the user account. If not set, generates a no-reply email address. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.name">Name</a></code> | <code>string</code> | The name of the user. If not set, uses Service account user. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeouts">InstanceServiceAccountTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account#timeouts InstanceServiceAccount#timeouts}. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.username">Username</a></code> | <code>string</code> | The username of the user account. If not set, generates a name prepended with service_account_. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email of the user account. If not set, generates a no-reply email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account#email InstanceServiceAccount#email}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the user. If not set, uses Service account user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account#name InstanceServiceAccount#name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.timeouts"></a>

```csharp
public InstanceServiceAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeouts">InstanceServiceAccountTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account#timeouts InstanceServiceAccount#timeouts}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the user account. If not set, generates a name prepended with service_account_.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account#username InstanceServiceAccount#username}

---

### InstanceServiceAccountTimeouts <a name="InstanceServiceAccountTimeouts" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new InstanceServiceAccountTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/instance_service_account#delete InstanceServiceAccount#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### InstanceServiceAccountTimeoutsOutputReference <a name="InstanceServiceAccountTimeoutsOutputReference" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new InstanceServiceAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.instanceServiceAccount.InstanceServiceAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




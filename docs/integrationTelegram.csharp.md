# `integrationTelegram` Submodule <a name="`integrationTelegram` Submodule" id="@cdktf/provider-gitlab.integrationTelegram"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationTelegram <a name="IntegrationTelegram" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram gitlab_integration_telegram}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new IntegrationTelegram(Construct Scope, string Id, IntegrationTelegramConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig">IntegrationTelegramConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig">IntegrationTelegramConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.resetNotifyOnlyBrokenPipelines"></a>

```csharp
private void ResetNotifyOnlyBrokenPipelines()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationTelegram resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationTelegram.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationTelegram.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationTelegram.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationTelegram.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationTelegram resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationTelegram to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationTelegram that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationTelegram to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.noteEventsInput">NoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pushEventsInput">PushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.roomInput">RoomInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.noteEvents">NoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pushEvents">PushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.room">Room</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialIssuesEventsInput"></a>

```csharp
public object ConfidentialIssuesEventsInput { get; }
```

- *Type:* object

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialNoteEventsInput"></a>

```csharp
public object ConfidentialNoteEventsInput { get; }
```

- *Type:* object

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.issuesEventsInput"></a>

```csharp
public object IssuesEventsInput { get; }
```

- *Type:* object

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.mergeRequestsEventsInput"></a>

```csharp
public object MergeRequestsEventsInput { get; }
```

- *Type:* object

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.noteEventsInput"></a>

```csharp
public object NoteEventsInput { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.notifyOnlyBrokenPipelinesInput"></a>

```csharp
public object NotifyOnlyBrokenPipelinesInput { get; }
```

- *Type:* object

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pipelineEventsInput"></a>

```csharp
public object PipelineEventsInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pushEventsInput"></a>

```csharp
public object PushEventsInput { get; }
```

- *Type:* object

---

##### `RoomInput`<sup>Optional</sup> <a name="RoomInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.roomInput"></a>

```csharp
public string RoomInput { get; }
```

- *Type:* string

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tagPushEventsInput"></a>

```csharp
public object TagPushEventsInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.wikiPageEventsInput"></a>

```csharp
public object WikiPageEventsInput { get; }
```

- *Type:* object

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; }
```

- *Type:* object

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; }
```

- *Type:* object

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; }
```

- *Type:* object

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; }
```

- *Type:* object

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.noteEvents"></a>

```csharp
public object NoteEvents { get; }
```

- *Type:* object

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; }
```

- *Type:* object

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.pushEvents"></a>

```csharp
public object PushEvents { get; }
```

- *Type:* object

---

##### `Room`<sup>Required</sup> <a name="Room" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.room"></a>

```csharp
public string Room { get; }
```

- *Type:* string

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; }
```

- *Type:* object

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegram.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationTelegramConfig <a name="IntegrationTelegramConfig" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new IntegrationTelegramConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ConfidentialIssuesEvents,
    object ConfidentialNoteEvents,
    object IssuesEvents,
    object MergeRequestsEvents,
    object NoteEvents,
    object PipelineEvents,
    string Project,
    object PushEvents,
    string Room,
    object TagPushEvents,
    string Token,
    object WikiPageEvents,
    string BranchesToBeNotified = null,
    object NotifyOnlyBrokenPipelines = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>object</code> | Enable notifications for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>object</code> | Enable notifications for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | Enable notifications for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.noteEvents">NoteEvents</a></code> | <code>object</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.project">Project</a></code> | <code>string</code> | The ID or full path of the project to integrate with Telegram. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.pushEvents">PushEvents</a></code> | <code>object</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.room">Room</a></code> | <code>string</code> | Unique identifier for the target chat or the username of the target channel (in the format `@channelusername`). |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.token">Token</a></code> | <code>string</code> | The Telegram bot token. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>object</code> | Enable notifications for wiki page events. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for (introduced in GitLab 16.5). Update of this attribute was not supported before Gitlab 16.11 due to API bug. Valid options are `all`, `default`, `protected`, `default_and_protected`. |
| <code><a href="#@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | Send notifications for broken pipelines. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.confidentialIssuesEvents"></a>

```csharp
public object ConfidentialIssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#confidential_issues_events IntegrationTelegram#confidential_issues_events}

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.confidentialNoteEvents"></a>

```csharp
public object ConfidentialNoteEvents { get; set; }
```

- *Type:* object

Enable notifications for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#confidential_note_events IntegrationTelegram#confidential_note_events}

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#issues_events IntegrationTelegram#issues_events}

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; set; }
```

- *Type:* object

Enable notifications for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#merge_requests_events IntegrationTelegram#merge_requests_events}

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.noteEvents"></a>

```csharp
public object NoteEvents { get; set; }
```

- *Type:* object

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#note_events IntegrationTelegram#note_events}

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; set; }
```

- *Type:* object

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#pipeline_events IntegrationTelegram#pipeline_events}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or full path of the project to integrate with Telegram.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#project IntegrationTelegram#project}

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.pushEvents"></a>

```csharp
public object PushEvents { get; set; }
```

- *Type:* object

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#push_events IntegrationTelegram#push_events}

---

##### `Room`<sup>Required</sup> <a name="Room" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.room"></a>

```csharp
public string Room { get; set; }
```

- *Type:* string

Unique identifier for the target chat or the username of the target channel (in the format `@channelusername`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#room IntegrationTelegram#room}

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; set; }
```

- *Type:* object

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#tag_push_events IntegrationTelegram#tag_push_events}

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The Telegram bot token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#token IntegrationTelegram#token}

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.wikiPageEvents"></a>

```csharp
public object WikiPageEvents { get; set; }
```

- *Type:* object

Enable notifications for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#wiki_page_events IntegrationTelegram#wiki_page_events}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for (introduced in GitLab 16.5). Update of this attribute was not supported before Gitlab 16.11 due to API bug. Valid options are `all`, `default`, `protected`, `default_and_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#branches_to_be_notified IntegrationTelegram#branches_to_be_notified}

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.integrationTelegram.IntegrationTelegramConfig.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; set; }
```

- *Type:* object

Send notifications for broken pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.5.0/docs/resources/integration_telegram#notify_only_broken_pipelines IntegrationTelegram#notify_only_broken_pipelines}

---




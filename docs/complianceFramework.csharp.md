# `complianceFramework` Submodule <a name="`complianceFramework` Submodule" id="@cdktf/provider-gitlab.complianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceFramework <a name="ComplianceFramework" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework gitlab_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ComplianceFramework(Construct Scope, string Id, ComplianceFrameworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig">ComplianceFrameworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig">ComplianceFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetPipelineConfigurationFullPath">ResetPipelineConfigurationFullPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetPipelineConfigurationFullPath` <a name="ResetPipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetPipelineConfigurationFullPath"></a>

```csharp
private void ResetPipelineConfigurationFullPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceFramework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ComplianceFramework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ComplianceFramework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ComplianceFramework.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ComplianceFramework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComplianceFramework resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComplianceFramework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.frameworkId">FrameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.colorInput">ColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.defaultInput">DefaultInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePathInput">NamespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPathInput">PipelineConfigurationFullPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.color">Color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.default">Default</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPath">PipelineConfigurationFullPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.frameworkId"></a>

```csharp
public string FrameworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ColorInput`<sup>Optional</sup> <a name="ColorInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.colorInput"></a>

```csharp
public string ColorInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.defaultInput"></a>

```csharp
public bool|IResolvable DefaultInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePathInput"></a>

```csharp
public string NamespacePathInput { get; }
```

- *Type:* string

---

##### `PipelineConfigurationFullPathInput`<sup>Optional</sup> <a name="PipelineConfigurationFullPathInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPathInput"></a>

```csharp
public string PipelineConfigurationFullPathInput { get; }
```

- *Type:* string

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.color"></a>

```csharp
public string Color { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.default"></a>

```csharp
public bool|IResolvable Default { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

##### `PipelineConfigurationFullPath`<sup>Required</sup> <a name="PipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPath"></a>

```csharp
public string PipelineConfigurationFullPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceFrameworkConfig <a name="ComplianceFrameworkConfig" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ComplianceFrameworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Color,
    string Description,
    string Name,
    string NamespacePath,
    bool|IResolvable Default = null,
    string PipelineConfigurationFullPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.color">Color</a></code> | <code>string</code> | New color representation of the compliance framework in hex format. e.g. #FCA121. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.description">Description</a></code> | <code>string</code> | Description for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.name">Name</a></code> | <code>string</code> | Name for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.namespacePath">NamespacePath</a></code> | <code>string</code> | Full path of the namespace to add the compliance framework to. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.default">Default</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Set this compliance framework as the default framework for the group. Default: `false`. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.pipelineConfigurationFullPath">PipelineConfigurationFullPath</a></code> | <code>string</code> | Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.color"></a>

```csharp
public string Color { get; set; }
```

- *Type:* string

New color representation of the compliance framework in hex format. e.g. #FCA121.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework#color ComplianceFramework#color}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework#description ComplianceFramework#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework#name ComplianceFramework#name}

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.namespacePath"></a>

```csharp
public string NamespacePath { get; set; }
```

- *Type:* string

Full path of the namespace to add the compliance framework to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework#namespace_path ComplianceFramework#namespace_path}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.default"></a>

```csharp
public bool|IResolvable Default { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Set this compliance framework as the default framework for the group. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework#default ComplianceFramework#default}

---

##### `PipelineConfigurationFullPath`<sup>Optional</sup> <a name="PipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.pipelineConfigurationFullPath"></a>

```csharp
public string PipelineConfigurationFullPath { get; set; }
```

- *Type:* string

Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/compliance_framework#pipeline_configuration_full_path ComplianceFramework#pipeline_configuration_full_path}

---




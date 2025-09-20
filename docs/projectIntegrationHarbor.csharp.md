# `projectIntegrationHarbor` Submodule <a name="`projectIntegrationHarbor` Submodule" id="@cdktf/provider-gitlab.projectIntegrationHarbor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationHarbor <a name="ProjectIntegrationHarbor" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor gitlab_project_integration_harbor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationHarbor(Construct Scope, string Id, ProjectIntegrationHarborConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig">ProjectIntegrationHarborConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig">ProjectIntegrationHarborConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetUseInheritedSettings">ResetUseInheritedSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetUseInheritedSettings` <a name="ResetUseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.resetUseInheritedSettings"></a>

```csharp
private void ResetUseInheritedSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationHarbor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationHarbor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationHarbor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationHarbor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationHarbor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationHarbor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationHarbor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationHarbor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationHarbor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettingsInput">UseInheritedSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettings">UseInheritedSettings</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UseInheritedSettingsInput`<sup>Optional</sup> <a name="UseInheritedSettingsInput" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettingsInput"></a>

```csharp
public object UseInheritedSettingsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UseInheritedSettings`<sup>Required</sup> <a name="UseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.useInheritedSettings"></a>

```csharp
public object UseInheritedSettings { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarbor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationHarborConfig <a name="ProjectIntegrationHarborConfig" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationHarborConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Password,
    string Project,
    string ProjectName,
    string Url,
    string Username,
    object UseInheritedSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.password">Password</a></code> | <code>string</code> | Password for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.project">Project</a></code> | <code>string</code> | ID of the GitLab project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.projectName">ProjectName</a></code> | <code>string</code> | The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.url">Url</a></code> | <code>string</code> | Harbor URL. Example: `http://harbor.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.username">Username</a></code> | <code>string</code> | Username for authentication with the Harbor server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.useInheritedSettings">UseInheritedSettings</a></code> | <code>object</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor#password ProjectIntegrationHarbor#password}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the GitLab project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor#project ProjectIntegrationHarbor#project}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

The URL-friendly Harbor project name. This project needs to already exist in Harbor. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor#project_name ProjectIntegrationHarbor#project_name}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Harbor URL. Example: `http://harbor.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor#url ProjectIntegrationHarbor#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for authentication with the Harbor server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor#username ProjectIntegrationHarbor#username}

---

##### `UseInheritedSettings`<sup>Optional</sup> <a name="UseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationHarbor.ProjectIntegrationHarborConfig.property.useInheritedSettings"></a>

```csharp
public object UseInheritedSettings { get; set; }
```

- *Type:* object

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_harbor#use_inherited_settings ProjectIntegrationHarbor#use_inherited_settings}

---




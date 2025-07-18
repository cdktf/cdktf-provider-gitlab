# `projectContainerRepositoryProtection` Submodule <a name="`projectContainerRepositoryProtection` Submodule" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectContainerRepositoryProtection <a name="ProjectContainerRepositoryProtection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection gitlab_project_container_repository_protection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectContainerRepositoryProtection(Construct Scope, string Id, ProjectContainerRepositoryProtectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig">ProjectContainerRepositoryProtectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig">ProjectContainerRepositoryProtectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete">ResetMinimumAccessLevelForDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush">ResetMinimumAccessLevelForPush</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetMinimumAccessLevelForDelete` <a name="ResetMinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForDelete"></a>

```csharp
private void ResetMinimumAccessLevelForDelete()
```

##### `ResetMinimumAccessLevelForPush` <a name="ResetMinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.resetMinimumAccessLevelForPush"></a>

```csharp
private void ResetMinimumAccessLevelForPush()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectContainerRepositoryProtection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectContainerRepositoryProtection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectContainerRepositoryProtection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectContainerRepositoryProtection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectContainerRepositoryProtection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectContainerRepositoryProtection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectContainerRepositoryProtection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectContainerRepositoryProtection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId">ProtectionRuleId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput">MinimumAccessLevelForDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput">MinimumAccessLevelForPushInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput">RepositoryPathPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete">MinimumAccessLevelForDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush">MinimumAccessLevelForPush</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern">RepositoryPathPattern</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProtectionRuleId`<sup>Required</sup> <a name="ProtectionRuleId" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.protectionRuleId"></a>

```csharp
public double ProtectionRuleId { get; }
```

- *Type:* double

---

##### `MinimumAccessLevelForDeleteInput`<sup>Optional</sup> <a name="MinimumAccessLevelForDeleteInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDeleteInput"></a>

```csharp
public string MinimumAccessLevelForDeleteInput { get; }
```

- *Type:* string

---

##### `MinimumAccessLevelForPushInput`<sup>Optional</sup> <a name="MinimumAccessLevelForPushInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPushInput"></a>

```csharp
public string MinimumAccessLevelForPushInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryPathPatternInput`<sup>Optional</sup> <a name="RepositoryPathPatternInput" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPatternInput"></a>

```csharp
public string RepositoryPathPatternInput { get; }
```

- *Type:* string

---

##### `MinimumAccessLevelForDelete`<sup>Required</sup> <a name="MinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForDelete"></a>

```csharp
public string MinimumAccessLevelForDelete { get; }
```

- *Type:* string

---

##### `MinimumAccessLevelForPush`<sup>Required</sup> <a name="MinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.minimumAccessLevelForPush"></a>

```csharp
public string MinimumAccessLevelForPush { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryPathPattern`<sup>Required</sup> <a name="RepositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.repositoryPathPattern"></a>

```csharp
public string RepositoryPathPattern { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectContainerRepositoryProtectionConfig <a name="ProjectContainerRepositoryProtectionConfig" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectContainerRepositoryProtectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string RepositoryPathPattern,
    string MinimumAccessLevelForDelete = null,
    string MinimumAccessLevelForPush = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project">Project</a></code> | <code>string</code> | ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern">RepositoryPathPattern</a></code> | <code>string</code> | Container repository path pattern protected by the protection rule. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete">MinimumAccessLevelForDelete</a></code> | <code>string</code> | Minimum GitLab access level required to delete container images in the container registry. |
| <code><a href="#@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush">MinimumAccessLevelForPush</a></code> | <code>string</code> | Minimum GitLab access level required to push container images to the container registry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#project ProjectContainerRepositoryProtection#project}

---

##### `RepositoryPathPattern`<sup>Required</sup> <a name="RepositoryPathPattern" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.repositoryPathPattern"></a>

```csharp
public string RepositoryPathPattern { get; set; }
```

- *Type:* string

Container repository path pattern protected by the protection rule.

Wildcard character * allowed. Repository path pattern should start with the project's full path

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#repository_path_pattern ProjectContainerRepositoryProtection#repository_path_pattern}

---

##### `MinimumAccessLevelForDelete`<sup>Optional</sup> <a name="MinimumAccessLevelForDelete" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForDelete"></a>

```csharp
public string MinimumAccessLevelForDelete { get; set; }
```

- *Type:* string

Minimum GitLab access level required to delete container images in the container registry.

For example maintainer, owner, admin. Must be provided when `minimum_access_level_for_push` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#minimum_access_level_for_delete ProjectContainerRepositoryProtection#minimum_access_level_for_delete}

---

##### `MinimumAccessLevelForPush`<sup>Optional</sup> <a name="MinimumAccessLevelForPush" id="@cdktf/provider-gitlab.projectContainerRepositoryProtection.ProjectContainerRepositoryProtectionConfig.property.minimumAccessLevelForPush"></a>

```csharp
public string MinimumAccessLevelForPush { get; set; }
```

- *Type:* string

Minimum GitLab access level required to push container images to the container registry.

For example maintainer, owner or admin. Must be provided when `minimum_access_level_for_delete` is not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_container_repository_protection#minimum_access_level_for_push ProjectContainerRepositoryProtection#minimum_access_level_for_push}

---




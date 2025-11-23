# `projectAccessToken` Submodule <a name="`projectAccessToken` Submodule" id="@cdktf/provider-gitlab.projectAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectAccessToken <a name="ProjectAccessToken" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token gitlab_project_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectAccessToken(Construct Scope, string Id, ProjectAccessTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig">ProjectAccessTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig">ProjectAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration">PutRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetRotationConfiguration">ResetRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetValidatePastExpirationDate">ResetValidatePastExpirationDate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRotationConfiguration` <a name="PutRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration"></a>

```csharp
private void PutRotationConfiguration(ProjectAccessTokenRotationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.putRotationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetRotationConfiguration` <a name="ResetRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetRotationConfiguration"></a>

```csharp
private void ResetRotationConfiguration()
```

##### `ResetValidatePastExpirationDate` <a name="ResetValidatePastExpirationDate" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.resetValidatePastExpirationDate"></a>

```csharp
private void ResetValidatePastExpirationDate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectAccessToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectAccessToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectAccessToken.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectAccessToken.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectAccessToken resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectAccessToken to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.revoked">Revoked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfiguration">RotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference">ProjectAccessTokenRotationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.userId">UserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfigurationInput">RotationConfigurationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.validatePastExpirationDateInput">ValidatePastExpirationDateInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.validatePastExpirationDate">ValidatePastExpirationDate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Revoked`<sup>Required</sup> <a name="Revoked" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.revoked"></a>

```csharp
public IResolvable Revoked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RotationConfiguration`<sup>Required</sup> <a name="RotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfiguration"></a>

```csharp
public ProjectAccessTokenRotationConfigurationOutputReference RotationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference">ProjectAccessTokenRotationConfigurationOutputReference</a>

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RotationConfigurationInput`<sup>Optional</sup> <a name="RotationConfigurationInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.rotationConfigurationInput"></a>

```csharp
public IResolvable|ProjectAccessTokenRotationConfiguration RotationConfigurationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `ValidatePastExpirationDateInput`<sup>Optional</sup> <a name="ValidatePastExpirationDateInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.validatePastExpirationDateInput"></a>

```csharp
public bool|IResolvable ValidatePastExpirationDateInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `ValidatePastExpirationDate`<sup>Required</sup> <a name="ValidatePastExpirationDate" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.validatePastExpirationDate"></a>

```csharp
public bool|IResolvable ValidatePastExpirationDate { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectAccessTokenConfig <a name="ProjectAccessTokenConfig" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectAccessTokenConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Project,
    string[] Scopes,
    string AccessLevel = null,
    string Description = null,
    string ExpiresAt = null,
    ProjectAccessTokenRotationConfiguration RotationConfiguration = null,
    bool|IResolvable ValidatePastExpirationDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.name">Name</a></code> | <code>string</code> | The name of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.project">Project</a></code> | <code>string</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The scopes of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | The access level for the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.description">Description</a></code> | <code>string</code> | The description of the project access token. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.rotationConfiguration">RotationConfiguration</a></code> | <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.validatePastExpirationDate">ValidatePastExpirationDate</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Wether to validate if the expiration date is in the future. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the project access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#name ProjectAccessToken#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#project ProjectAccessToken#project}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The scopes of the project access token.

valid values are: `api`, `read_api`, `read_registry`, `write_registry`, `read_repository`, `write_repository`, `create_runner`, `manage_runner`, `ai_features`, `k8s_proxy`, `read_observability`, `write_observability`, `self_rotate`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#scopes ProjectAccessToken#scopes}

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

The access level for the project access token.

Valid values are: `no one`, `minimal`, `guest`, `planner`, `reporter`, `developer`, `maintainer`, `owner`. Default is `maintainer`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#access_level ProjectAccessToken#access_level}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the project access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#description ProjectAccessToken#description}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

When the token will expire, YYYY-MM-DD format. Is automatically set when `rotation_configuration` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#expires_at ProjectAccessToken#expires_at}

---

##### `RotationConfiguration`<sup>Optional</sup> <a name="RotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.rotationConfiguration"></a>

```csharp
public ProjectAccessTokenRotationConfiguration RotationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

The configuration for when to rotate a token automatically. Will not rotate a token until `terraform apply` is run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#rotation_configuration ProjectAccessToken#rotation_configuration}

---

##### `ValidatePastExpirationDate`<sup>Optional</sup> <a name="ValidatePastExpirationDate" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenConfig.property.validatePastExpirationDate"></a>

```csharp
public bool|IResolvable ValidatePastExpirationDate { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Wether to validate if the expiration date is in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#validate_past_expiration_date ProjectAccessToken#validate_past_expiration_date}

---

### ProjectAccessTokenRotationConfiguration <a name="ProjectAccessTokenRotationConfiguration" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectAccessTokenRotationConfiguration {
    double ExpirationDays,
    double RotateBeforeDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.expirationDays">ExpirationDays</a></code> | <code>double</code> | The duration (in days) the new token should be valid for. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.rotateBeforeDays">RotateBeforeDays</a></code> | <code>double</code> | The duration (in days) before the expiration when the token should be rotated. |

---

##### `ExpirationDays`<sup>Required</sup> <a name="ExpirationDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.expirationDays"></a>

```csharp
public double ExpirationDays { get; set; }
```

- *Type:* double

The duration (in days) the new token should be valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#expiration_days ProjectAccessToken#expiration_days}

---

##### `RotateBeforeDays`<sup>Required</sup> <a name="RotateBeforeDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration.property.rotateBeforeDays"></a>

```csharp
public double RotateBeforeDays { get; set; }
```

- *Type:* double

The duration (in days) before the expiration when the token should be rotated.

As an example, if set to 7 days, the token will rotate 7 days before the expiration date, but only when `terraform apply` is run in that timeframe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_access_token#rotate_before_days ProjectAccessToken#rotate_before_days}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectAccessTokenRotationConfigurationOutputReference <a name="ProjectAccessTokenRotationConfigurationOutputReference" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectAccessTokenRotationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput">ExpirationDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput">RotateBeforeDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDays">ExpirationDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays">RotateBeforeDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationDaysInput`<sup>Optional</sup> <a name="ExpirationDaysInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDaysInput"></a>

```csharp
public double ExpirationDaysInput { get; }
```

- *Type:* double

---

##### `RotateBeforeDaysInput`<sup>Optional</sup> <a name="RotateBeforeDaysInput" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDaysInput"></a>

```csharp
public double RotateBeforeDaysInput { get; }
```

- *Type:* double

---

##### `ExpirationDays`<sup>Required</sup> <a name="ExpirationDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.expirationDays"></a>

```csharp
public double ExpirationDays { get; }
```

- *Type:* double

---

##### `RotateBeforeDays`<sup>Required</sup> <a name="RotateBeforeDays" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.rotateBeforeDays"></a>

```csharp
public double RotateBeforeDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ProjectAccessTokenRotationConfiguration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectAccessToken.ProjectAccessTokenRotationConfiguration">ProjectAccessTokenRotationConfiguration</a>

---




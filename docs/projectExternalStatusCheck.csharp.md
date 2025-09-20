# `projectExternalStatusCheck` Submodule <a name="`projectExternalStatusCheck` Submodule" id="@cdktf/provider-gitlab.projectExternalStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectExternalStatusCheck <a name="ProjectExternalStatusCheck" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check gitlab_project_external_status_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectExternalStatusCheck(Construct Scope, string Id, ProjectExternalStatusCheckConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig">ProjectExternalStatusCheckConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig">ProjectExternalStatusCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetProtectedBranchIds">ResetProtectedBranchIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetSharedSecret">ResetSharedSecret</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProtectedBranchIds` <a name="ResetProtectedBranchIds" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetProtectedBranchIds"></a>

```csharp
private void ResetProtectedBranchIds()
```

##### `ResetSharedSecret` <a name="ResetSharedSecret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.resetSharedSecret"></a>

```csharp
private void ResetSharedSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectExternalStatusCheck resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectExternalStatusCheck.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectExternalStatusCheck.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectExternalStatusCheck.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectExternalStatusCheck.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectExternalStatusCheck resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectExternalStatusCheck to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectExternalStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectExternalStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.hmac">Hmac</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrlInput">ExternalUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectIdInput">ProjectIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIdsInput">ProtectedBranchIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecretInput">SharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrl">ExternalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectId">ProjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIds">ProtectedBranchIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Hmac`<sup>Required</sup> <a name="Hmac" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.hmac"></a>

```csharp
public IResolvable Hmac { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ExternalUrlInput`<sup>Optional</sup> <a name="ExternalUrlInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrlInput"></a>

```csharp
public string ExternalUrlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectIdInput"></a>

```csharp
public double ProjectIdInput { get; }
```

- *Type:* double

---

##### `ProtectedBranchIdsInput`<sup>Optional</sup> <a name="ProtectedBranchIdsInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIdsInput"></a>

```csharp
public double[] ProtectedBranchIdsInput { get; }
```

- *Type:* double[]

---

##### `SharedSecretInput`<sup>Optional</sup> <a name="SharedSecretInput" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecretInput"></a>

```csharp
public string SharedSecretInput { get; }
```

- *Type:* string

---

##### `ExternalUrl`<sup>Required</sup> <a name="ExternalUrl" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.externalUrl"></a>

```csharp
public string ExternalUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.projectId"></a>

```csharp
public double ProjectId { get; }
```

- *Type:* double

---

##### `ProtectedBranchIds`<sup>Required</sup> <a name="ProtectedBranchIds" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.protectedBranchIds"></a>

```csharp
public double[] ProtectedBranchIds { get; }
```

- *Type:* double[]

---

##### `SharedSecret`<sup>Required</sup> <a name="SharedSecret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheck.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectExternalStatusCheckConfig <a name="ProjectExternalStatusCheckConfig" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectExternalStatusCheckConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExternalUrl,
    string Name,
    double ProjectId,
    double[] ProtectedBranchIds = null,
    string SharedSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.externalUrl">ExternalUrl</a></code> | <code>string</code> | The URL of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.name">Name</a></code> | <code>string</code> | The display name of the external status check service. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.projectId">ProjectId</a></code> | <code>double</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.protectedBranchIds">ProtectedBranchIds</a></code> | <code>double[]</code> | The list of IDs of protected branches to scope the rule by. |
| <code><a href="#@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.sharedSecret">SharedSecret</a></code> | <code>string</code> | The HMAC secret for the external status check. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExternalUrl`<sup>Required</sup> <a name="ExternalUrl" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.externalUrl"></a>

```csharp
public string ExternalUrl { get; set; }
```

- *Type:* string

The URL of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#external_url ProjectExternalStatusCheck#external_url}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The display name of the external status check service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#name ProjectExternalStatusCheck#name}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.projectId"></a>

```csharp
public double ProjectId { get; set; }
```

- *Type:* double

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#project_id ProjectExternalStatusCheck#project_id}

---

##### `ProtectedBranchIds`<sup>Optional</sup> <a name="ProtectedBranchIds" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.protectedBranchIds"></a>

```csharp
public double[] ProtectedBranchIds { get; set; }
```

- *Type:* double[]

The list of IDs of protected branches to scope the rule by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#protected_branch_ids ProjectExternalStatusCheck#protected_branch_ids}

---

##### `SharedSecret`<sup>Optional</sup> <a name="SharedSecret" id="@cdktf/provider-gitlab.projectExternalStatusCheck.ProjectExternalStatusCheckConfig.property.sharedSecret"></a>

```csharp
public string SharedSecret { get; set; }
```

- *Type:* string

The HMAC secret for the external status check.

If this is set, then removed from the config, the value will get set to empty in the state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_external_status_check#shared_secret ProjectExternalStatusCheck#shared_secret}

---




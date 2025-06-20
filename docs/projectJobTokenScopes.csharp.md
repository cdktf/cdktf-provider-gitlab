# `projectJobTokenScopes` Submodule <a name="`projectJobTokenScopes` Submodule" id="@cdktf/provider-gitlab.projectJobTokenScopes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectJobTokenScopes <a name="ProjectJobTokenScopes" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_job_token_scopes gitlab_project_job_token_scopes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectJobTokenScopes(Construct Scope, string Id, ProjectJobTokenScopesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig">ProjectJobTokenScopesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig">ProjectJobTokenScopesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetGroupIds">ResetTargetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetProjectIds">ResetTargetProjectIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTargetGroupIds` <a name="ResetTargetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetGroupIds"></a>

```csharp
private void ResetTargetGroupIds()
```

##### `ResetTargetProjectIds` <a name="ResetTargetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.resetTargetProjectIds"></a>

```csharp
private void ResetTargetProjectIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectJobTokenScopes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectJobTokenScopes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectJobTokenScopes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectJobTokenScopes.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectJobTokenScopes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectJobTokenScopes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectJobTokenScopes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectJobTokenScopes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_job_token_scopes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectJobTokenScopes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectIdInput">ProjectIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIdsInput">TargetGroupIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIdsInput">TargetProjectIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectId">ProjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIds">TargetGroupIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIds">TargetProjectIds</a></code> | <code>double[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectIdInput"></a>

```csharp
public double ProjectIdInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetGroupIdsInput`<sup>Optional</sup> <a name="TargetGroupIdsInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIdsInput"></a>

```csharp
public double[] TargetGroupIdsInput { get; }
```

- *Type:* double[]

---

##### `TargetProjectIdsInput`<sup>Optional</sup> <a name="TargetProjectIdsInput" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIdsInput"></a>

```csharp
public double[] TargetProjectIdsInput { get; }
```

- *Type:* double[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.projectId"></a>

```csharp
public double ProjectId { get; }
```

- *Type:* double

---

##### `TargetGroupIds`<sup>Required</sup> <a name="TargetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetGroupIds"></a>

```csharp
public double[] TargetGroupIds { get; }
```

- *Type:* double[]

---

##### `TargetProjectIds`<sup>Required</sup> <a name="TargetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.targetProjectIds"></a>

```csharp
public double[] TargetProjectIds { get; }
```

- *Type:* double[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectJobTokenScopesConfig <a name="ProjectJobTokenScopesConfig" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectJobTokenScopesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled = null,
    string Project = null,
    double ProjectId = null,
    double[] TargetGroupIds = null,
    double[] TargetProjectIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.enabled">Enabled</a></code> | <code>object</code> | Enable the given inbound allowlist. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.project">Project</a></code> | <code>string</code> | The ID or full path of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.projectId">ProjectId</a></code> | <code>double</code> | The ID of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetGroupIds">TargetGroupIds</a></code> | <code>double[]</code> | A set of group IDs that are in the CI/CD job token inbound allowlist. |
| <code><a href="#@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetProjectIds">TargetProjectIds</a></code> | <code>double[]</code> | A set of project IDs that are in the CI/CD job token inbound allowlist. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable the given inbound allowlist.

If false, will allow any project or group regardless of the values in `target_project_ids` or `target_group_ids`. Deleting the associated `gitlab_project_job_token_scopes` resource will reset `Enabled` on the group to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_job_token_scopes#enabled ProjectJobTokenScopes#enabled}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or full path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_job_token_scopes#project ProjectJobTokenScopes#project}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.projectId"></a>

```csharp
public double ProjectId { get; set; }
```

- *Type:* double

The ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_job_token_scopes#project_id ProjectJobTokenScopes#project_id}

---

##### `TargetGroupIds`<sup>Optional</sup> <a name="TargetGroupIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetGroupIds"></a>

```csharp
public double[] TargetGroupIds { get; set; }
```

- *Type:* double[]

A set of group IDs that are in the CI/CD job token inbound allowlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_job_token_scopes#target_group_ids ProjectJobTokenScopes#target_group_ids}

---

##### `TargetProjectIds`<sup>Optional</sup> <a name="TargetProjectIds" id="@cdktf/provider-gitlab.projectJobTokenScopes.ProjectJobTokenScopesConfig.property.targetProjectIds"></a>

```csharp
public double[] TargetProjectIds { get; set; }
```

- *Type:* double[]

A set of project IDs that are in the CI/CD job token inbound allowlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_job_token_scopes#target_project_ids ProjectJobTokenScopes#target_project_ids}

---




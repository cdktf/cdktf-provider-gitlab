# `projectIntegrationRedmine` Submodule <a name="`projectIntegrationRedmine` Submodule" id="@cdktf/provider-gitlab.projectIntegrationRedmine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationRedmine <a name="ProjectIntegrationRedmine" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_redmine gitlab_project_integration_redmine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationRedmine(Construct Scope, string Id, ProjectIntegrationRedmineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig">ProjectIntegrationRedmineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig">ProjectIntegrationRedmineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetUseInheritedSettings">ResetUseInheritedSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetUseInheritedSettings` <a name="ResetUseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.resetUseInheritedSettings"></a>

```csharp
private void ResetUseInheritedSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationRedmine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationRedmine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationRedmine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationRedmine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationRedmine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationRedmine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationRedmine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationRedmine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_redmine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationRedmine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrlInput">IssuesUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrlInput">NewIssueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrlInput">ProjectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettingsInput">UseInheritedSettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrl">IssuesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrl">NewIssueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrl">ProjectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettings">UseInheritedSettings</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuesUrlInput`<sup>Optional</sup> <a name="IssuesUrlInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrlInput"></a>

```csharp
public string IssuesUrlInput { get; }
```

- *Type:* string

---

##### `NewIssueUrlInput`<sup>Optional</sup> <a name="NewIssueUrlInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrlInput"></a>

```csharp
public string NewIssueUrlInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProjectUrlInput`<sup>Optional</sup> <a name="ProjectUrlInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrlInput"></a>

```csharp
public string ProjectUrlInput { get; }
```

- *Type:* string

---

##### `UseInheritedSettingsInput`<sup>Optional</sup> <a name="UseInheritedSettingsInput" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettingsInput"></a>

```csharp
public object UseInheritedSettingsInput { get; }
```

- *Type:* object

---

##### `IssuesUrl`<sup>Required</sup> <a name="IssuesUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.issuesUrl"></a>

```csharp
public string IssuesUrl { get; }
```

- *Type:* string

---

##### `NewIssueUrl`<sup>Required</sup> <a name="NewIssueUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.newIssueUrl"></a>

```csharp
public string NewIssueUrl { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectUrl`<sup>Required</sup> <a name="ProjectUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.projectUrl"></a>

```csharp
public string ProjectUrl { get; }
```

- *Type:* string

---

##### `UseInheritedSettings`<sup>Required</sup> <a name="UseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.useInheritedSettings"></a>

```csharp
public object UseInheritedSettings { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationRedmineConfig <a name="ProjectIntegrationRedmineConfig" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationRedmineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IssuesUrl,
    string NewIssueUrl,
    string Project,
    string ProjectUrl,
    object UseInheritedSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.issuesUrl">IssuesUrl</a></code> | <code>string</code> | The URL to the Redmine project issue to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.newIssueUrl">NewIssueUrl</a></code> | <code>string</code> | The URL to use to create a new issue in the Redmine project linked to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.project">Project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.projectUrl">ProjectUrl</a></code> | <code>string</code> | The URL to the Redmine project to link to this GitLab project. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.useInheritedSettings">UseInheritedSettings</a></code> | <code>object</code> | Indicates whether or not to inherit default settings. Defaults to false. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IssuesUrl`<sup>Required</sup> <a name="IssuesUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.issuesUrl"></a>

```csharp
public string IssuesUrl { get; set; }
```

- *Type:* string

The URL to the Redmine project issue to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_redmine#issues_url ProjectIntegrationRedmine#issues_url}

---

##### `NewIssueUrl`<sup>Required</sup> <a name="NewIssueUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.newIssueUrl"></a>

```csharp
public string NewIssueUrl { get; set; }
```

- *Type:* string

The URL to use to create a new issue in the Redmine project linked to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_redmine#new_issue_url ProjectIntegrationRedmine#new_issue_url}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_redmine#project ProjectIntegrationRedmine#project}

---

##### `ProjectUrl`<sup>Required</sup> <a name="ProjectUrl" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.projectUrl"></a>

```csharp
public string ProjectUrl { get; set; }
```

- *Type:* string

The URL to the Redmine project to link to this GitLab project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_redmine#project_url ProjectIntegrationRedmine#project_url}

---

##### `UseInheritedSettings`<sup>Optional</sup> <a name="UseInheritedSettings" id="@cdktf/provider-gitlab.projectIntegrationRedmine.ProjectIntegrationRedmineConfig.property.useInheritedSettings"></a>

```csharp
public object UseInheritedSettings { get; set; }
```

- *Type:* object

Indicates whether or not to inherit default settings. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_integration_redmine#use_inherited_settings ProjectIntegrationRedmine#use_inherited_settings}

---




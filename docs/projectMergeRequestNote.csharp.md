# `projectMergeRequestNote` Submodule <a name="`projectMergeRequestNote` Submodule" id="@cdktf/provider-gitlab.projectMergeRequestNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectMergeRequestNote <a name="ProjectMergeRequestNote" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note gitlab_project_merge_request_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectMergeRequestNote(Construct Scope, string Id, ProjectMergeRequestNoteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig">ProjectMergeRequestNoteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig">ProjectMergeRequestNoteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal">ResetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha">ResetMergeRequestDiffHeadSha</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetInternal` <a name="ResetInternal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetInternal"></a>

```csharp
private void ResetInternal()
```

##### `ResetMergeRequestDiffHeadSha` <a name="ResetMergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.resetMergeRequestDiffHeadSha"></a>

```csharp
private void ResetMergeRequestDiffHeadSha()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectMergeRequestNote.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectMergeRequestNote.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectMergeRequestNote.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectMergeRequestNote.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectMergeRequestNote resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectMergeRequestNote to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectMergeRequestNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectMergeRequestNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId">NoteId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable">Resolvable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute">SystemAttribute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput">CreatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput">InternalInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput">MergeRequestDiffHeadShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput">MergeRequestIidInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal">Internal</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha">MergeRequestDiffHeadSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid">MergeRequestIid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NoteId`<sup>Required</sup> <a name="NoteId" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.noteId"></a>

```csharp
public double NoteId { get; }
```

- *Type:* double

---

##### `Resolvable`<sup>Required</sup> <a name="Resolvable" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.resolvable"></a>

```csharp
public IResolvable Resolvable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.systemAttribute"></a>

```csharp
public IResolvable SystemAttribute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAtInput"></a>

```csharp
public string CreatedAtInput { get; }
```

- *Type:* string

---

##### `InternalInput`<sup>Optional</sup> <a name="InternalInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internalInput"></a>

```csharp
public bool|IResolvable InternalInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MergeRequestDiffHeadShaInput`<sup>Optional</sup> <a name="MergeRequestDiffHeadShaInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadShaInput"></a>

```csharp
public string MergeRequestDiffHeadShaInput { get; }
```

- *Type:* string

---

##### `MergeRequestIidInput`<sup>Optional</sup> <a name="MergeRequestIidInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIidInput"></a>

```csharp
public double MergeRequestIidInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Internal`<sup>Required</sup> <a name="Internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.internal"></a>

```csharp
public bool|IResolvable Internal { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MergeRequestDiffHeadSha`<sup>Required</sup> <a name="MergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestDiffHeadSha"></a>

```csharp
public string MergeRequestDiffHeadSha { get; }
```

- *Type:* string

---

##### `MergeRequestIid`<sup>Required</sup> <a name="MergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.mergeRequestIid"></a>

```csharp
public double MergeRequestIid { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNote.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectMergeRequestNoteConfig <a name="ProjectMergeRequestNoteConfig" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectMergeRequestNoteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Body,
    double MergeRequestIid,
    string Project,
    string CreatedAt = null,
    bool|IResolvable Internal = null,
    string MergeRequestDiffHeadSha = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body">Body</a></code> | <code>string</code> | The body of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid">MergeRequestIid</a></code> | <code>double</code> | The IID of the merge request to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project">Project</a></code> | <code>string</code> | The ID or path of the project to add the note to. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | The creation date of the merge request note. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal">Internal</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Indicates if the merge request note is internal. |
| <code><a href="#@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha">MergeRequestDiffHeadSha</a></code> | <code>string</code> | The diff head SHA of the merge request when the note was created. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

The body of the merge request note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#body ProjectMergeRequestNote#body}

---

##### `MergeRequestIid`<sup>Required</sup> <a name="MergeRequestIid" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestIid"></a>

```csharp
public double MergeRequestIid { get; set; }
```

- *Type:* double

The IID of the merge request to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#merge_request_iid ProjectMergeRequestNote#merge_request_iid}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or path of the project to add the note to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#project ProjectMergeRequestNote#project}

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; set; }
```

- *Type:* string

The creation date of the merge request note.

Using this field requires the token used with the provider to either be an Admin, or hava a Project or Group Owner role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#created_at ProjectMergeRequestNote#created_at}

---

##### `Internal`<sup>Optional</sup> <a name="Internal" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.internal"></a>

```csharp
public bool|IResolvable Internal { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Indicates if the merge request note is internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#internal ProjectMergeRequestNote#internal}

---

##### `MergeRequestDiffHeadSha`<sup>Optional</sup> <a name="MergeRequestDiffHeadSha" id="@cdktf/provider-gitlab.projectMergeRequestNote.ProjectMergeRequestNoteConfig.property.mergeRequestDiffHeadSha"></a>

```csharp
public string MergeRequestDiffHeadSha { get; set; }
```

- *Type:* string

The diff head SHA of the merge request when the note was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/project_merge_request_note#merge_request_diff_head_sha ProjectMergeRequestNote#merge_request_diff_head_sha}

---




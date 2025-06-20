# `projectIntegrationPipelinesEmail` Submodule <a name="`projectIntegrationPipelinesEmail` Submodule" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationPipelinesEmail <a name="ProjectIntegrationPipelinesEmail" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email gitlab_project_integration_pipelines_email}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationPipelinesEmail(Construct Scope, string Id, ProjectIntegrationPipelinesEmailConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig">ProjectIntegrationPipelinesEmailConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig">ProjectIntegrationPipelinesEmailConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetNotifyOnlyBrokenPipelines">ResetNotifyOnlyBrokenPipelines</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotifyOnlyBrokenPipelines` <a name="ResetNotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.resetNotifyOnlyBrokenPipelines"></a>

```csharp
private void ResetNotifyOnlyBrokenPipelines()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationPipelinesEmail resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationPipelinesEmail.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationPipelinesEmail.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationPipelinesEmail.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationPipelinesEmail.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationPipelinesEmail resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationPipelinesEmail to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationPipelinesEmail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationPipelinesEmail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelinesInput">NotifyOnlyBrokenPipelinesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipientsInput">RecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipients">Recipients</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotifyOnlyBrokenPipelinesInput`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelinesInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelinesInput"></a>

```csharp
public object NotifyOnlyBrokenPipelinesInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipientsInput"></a>

```csharp
public string[] RecipientsInput { get; }
```

- *Type:* string[]

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotifyOnlyBrokenPipelines`<sup>Required</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.recipients"></a>

```csharp
public string[] Recipients { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmail.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationPipelinesEmailConfig <a name="ProjectIntegrationPipelinesEmailConfig" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationPipelinesEmailConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string[] Recipients,
    string BranchesToBeNotified = null,
    string Id = null,
    object NotifyOnlyBrokenPipelines = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.project">Project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.recipients">Recipients</a></code> | <code>string[]</code> | ) email addresses where notifications are sent. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email#id ProjectIntegrationPipelinesEmail#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.notifyOnlyBrokenPipelines">NotifyOnlyBrokenPipelines</a></code> | <code>object</code> | Notify only broken pipelines. Default is true. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email#project ProjectIntegrationPipelinesEmail#project}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.recipients"></a>

```csharp
public string[] Recipients { get; set; }
```

- *Type:* string[]

) email addresses where notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email#recipients ProjectIntegrationPipelinesEmail#recipients}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email#branches_to_be_notified ProjectIntegrationPipelinesEmail#branches_to_be_notified}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email#id ProjectIntegrationPipelinesEmail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifyOnlyBrokenPipelines`<sup>Optional</sup> <a name="NotifyOnlyBrokenPipelines" id="@cdktf/provider-gitlab.projectIntegrationPipelinesEmail.ProjectIntegrationPipelinesEmailConfig.property.notifyOnlyBrokenPipelines"></a>

```csharp
public object NotifyOnlyBrokenPipelines { get; set; }
```

- *Type:* object

Notify only broken pipelines. Default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/project_integration_pipelines_email#notify_only_broken_pipelines ProjectIntegrationPipelinesEmail#notify_only_broken_pipelines}

---




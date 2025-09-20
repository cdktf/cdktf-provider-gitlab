# `projectIntegrationCustomIssueTracker` Submodule <a name="`projectIntegrationCustomIssueTracker` Submodule" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationCustomIssueTracker <a name="ProjectIntegrationCustomIssueTracker" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker gitlab_project_integration_custom_issue_tracker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationCustomIssueTracker(Construct Scope, string Id, ProjectIntegrationCustomIssueTrackerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig">ProjectIntegrationCustomIssueTrackerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig">ProjectIntegrationCustomIssueTrackerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationCustomIssueTracker.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationCustomIssueTracker.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationCustomIssueTracker.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationCustomIssueTracker.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationCustomIssueTracker resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationCustomIssueTracker to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationCustomIssueTracker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationCustomIssueTracker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrlInput">IssuesUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrlInput">ProjectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrl">IssuesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrl">ProjectUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IssuesUrlInput`<sup>Optional</sup> <a name="IssuesUrlInput" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrlInput"></a>

```csharp
public string IssuesUrlInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProjectUrlInput`<sup>Optional</sup> <a name="ProjectUrlInput" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrlInput"></a>

```csharp
public string ProjectUrlInput { get; }
```

- *Type:* string

---

##### `IssuesUrl`<sup>Required</sup> <a name="IssuesUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.issuesUrl"></a>

```csharp
public string IssuesUrl { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectUrl`<sup>Required</sup> <a name="ProjectUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.projectUrl"></a>

```csharp
public string ProjectUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTracker.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationCustomIssueTrackerConfig <a name="ProjectIntegrationCustomIssueTrackerConfig" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationCustomIssueTrackerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IssuesUrl,
    string Project,
    string ProjectUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.issuesUrl">IssuesUrl</a></code> | <code>string</code> | The URL to view an issue in the external issue tracker. Must contain :id. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.project">Project</a></code> | <code>string</code> | The ID or full path of the project for the custom issue tracker. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.projectUrl">ProjectUrl</a></code> | <code>string</code> | The URL to the project in the external issue tracker. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IssuesUrl`<sup>Required</sup> <a name="IssuesUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.issuesUrl"></a>

```csharp
public string IssuesUrl { get; set; }
```

- *Type:* string

The URL to view an issue in the external issue tracker. Must contain :id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#issues_url ProjectIntegrationCustomIssueTracker#issues_url}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or full path of the project for the custom issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#project ProjectIntegrationCustomIssueTracker#project}

---

##### `ProjectUrl`<sup>Required</sup> <a name="ProjectUrl" id="@cdktf/provider-gitlab.projectIntegrationCustomIssueTracker.ProjectIntegrationCustomIssueTrackerConfig.property.projectUrl"></a>

```csharp
public string ProjectUrl { get; set; }
```

- *Type:* string

The URL to the project in the external issue tracker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_custom_issue_tracker#project_url ProjectIntegrationCustomIssueTracker#project_url}

---




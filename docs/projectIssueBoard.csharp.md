# `gitlab_project_issue_board`

Refer to the Terraform Registory for docs: [`gitlab_project_issue_board`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board).

# `projectIssueBoard` Submodule <a name="`projectIssueBoard` Submodule" id="@cdktf/provider-gitlab.projectIssueBoard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIssueBoard <a name="ProjectIssueBoard" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board gitlab_project_issue_board}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueBoard(Construct Scope, string Id, ProjectIssueBoardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig">ProjectIssueBoardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig">ProjectIssueBoardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists">PutLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists">ResetLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId">ResetMilestoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutLists` <a name="PutLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists"></a>

```csharp
private void PutLists(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.putLists.parameter.value"></a>

- *Type:* object

---

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetAssigneeId"></a>

```csharp
private void ResetAssigneeId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLists` <a name="ResetLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetLists"></a>

```csharp
private void ResetLists()
```

##### `ResetMilestoneId` <a name="ResetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetMilestoneId"></a>

```csharp
private void ResetMilestoneId()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.resetWeight"></a>

```csharp
private void ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssueBoard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssueBoard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssueBoard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIssueBoard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIssueBoard resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIssueBoard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIssueBoard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIssueBoard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists">Lists</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput">ListsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput">MilestoneIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId">AssigneeId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId">MilestoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight">Weight</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Lists`<sup>Required</sup> <a name="Lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.lists"></a>

```csharp
public ProjectIssueBoardListsList Lists { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList">ProjectIssueBoardListsList</a>

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeIdInput"></a>

```csharp
public double AssigneeIdInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `ListsInput`<sup>Optional</sup> <a name="ListsInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.listsInput"></a>

```csharp
public object ListsInput { get; }
```

- *Type:* object

---

##### `MilestoneIdInput`<sup>Optional</sup> <a name="MilestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneIdInput"></a>

```csharp
public double MilestoneIdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.assigneeId"></a>

```csharp
public double AssigneeId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.milestoneId"></a>

```csharp
public double MilestoneId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIssueBoardConfig <a name="ProjectIssueBoardConfig" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueBoardConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Project,
    double AssigneeId = null,
    string Id = null,
    string[] Labels = null,
    object Lists = null,
    double MilestoneId = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name">Name</a></code> | <code>string</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project">Project</a></code> | <code>string</code> | The ID or full path of the project maintained by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId">AssigneeId</a></code> | <code>double</code> | The assignee the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels">Labels</a></code> | <code>string[]</code> | The list of label names which the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists">Lists</a></code> | <code>object</code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId">MilestoneId</a></code> | <code>double</code> | The milestone the board should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight">Weight</a></code> | <code>double</code> | The weight range from 0 to 9, to which the board should be scoped to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#name ProjectIssueBoard#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or full path of the project maintained by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#project ProjectIssueBoard#project}

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.assigneeId"></a>

```csharp
public double AssigneeId { get; set; }
```

- *Type:* double

The assignee the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#id ProjectIssueBoard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

The list of label names which the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#labels ProjectIssueBoard#labels}

---

##### `Lists`<sup>Optional</sup> <a name="Lists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.lists"></a>

```csharp
public object Lists { get; set; }
```

- *Type:* object

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#lists ProjectIssueBoard#lists}

---

##### `MilestoneId`<sup>Optional</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.milestoneId"></a>

```csharp
public double MilestoneId { get; set; }
```

- *Type:* double

The milestone the board should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

The weight range from 0 to 9, to which the board should be scoped to.

Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#weight ProjectIssueBoard#weight}

---

### ProjectIssueBoardLists <a name="ProjectIssueBoardLists" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueBoardLists {
    double AssigneeId = null,
    double IterationId = null,
    double LabelId = null,
    double MilestoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId">AssigneeId</a></code> | <code>double</code> | The ID of the assignee the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId">IterationId</a></code> | <code>double</code> | The ID of the iteration the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId">LabelId</a></code> | <code>double</code> | The ID of the label the list should be scoped to. Requires a GitLab EE license. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId">MilestoneId</a></code> | <code>double</code> | The ID of the milestone the list should be scoped to. Requires a GitLab EE license. |

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.assigneeId"></a>

```csharp
public double AssigneeId { get; set; }
```

- *Type:* double

The ID of the assignee the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#assignee_id ProjectIssueBoard#assignee_id}

---

##### `IterationId`<sup>Optional</sup> <a name="IterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.iterationId"></a>

```csharp
public double IterationId { get; set; }
```

- *Type:* double

The ID of the iteration the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#iteration_id ProjectIssueBoard#iteration_id}

---

##### `LabelId`<sup>Optional</sup> <a name="LabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.labelId"></a>

```csharp
public double LabelId { get; set; }
```

- *Type:* double

The ID of the label the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#label_id ProjectIssueBoard#label_id}

---

##### `MilestoneId`<sup>Optional</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardLists.property.milestoneId"></a>

```csharp
public double MilestoneId { get; set; }
```

- *Type:* double

The ID of the milestone the list should be scoped to. Requires a GitLab EE license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.6.0/docs/resources/project_issue_board#milestone_id ProjectIssueBoard#milestone_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectIssueBoardListsList <a name="ProjectIssueBoardListsList" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueBoardListsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get"></a>

```csharp
private ProjectIssueBoardListsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectIssueBoardListsOutputReference <a name="ProjectIssueBoardListsOutputReference" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIssueBoardListsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId">ResetIterationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId">ResetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId">ResetMilestoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetAssigneeId"></a>

```csharp
private void ResetAssigneeId()
```

##### `ResetIterationId` <a name="ResetIterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetIterationId"></a>

```csharp
private void ResetIterationId()
```

##### `ResetLabelId` <a name="ResetLabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetLabelId"></a>

```csharp
private void ResetLabelId()
```

##### `ResetMilestoneId` <a name="ResetMilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.resetMilestoneId"></a>

```csharp
private void ResetMilestoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput">IterationIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput">LabelIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput">MilestoneIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId">AssigneeId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId">IterationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId">LabelId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId">MilestoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeIdInput"></a>

```csharp
public double AssigneeIdInput { get; }
```

- *Type:* double

---

##### `IterationIdInput`<sup>Optional</sup> <a name="IterationIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationIdInput"></a>

```csharp
public double IterationIdInput { get; }
```

- *Type:* double

---

##### `LabelIdInput`<sup>Optional</sup> <a name="LabelIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelIdInput"></a>

```csharp
public double LabelIdInput { get; }
```

- *Type:* double

---

##### `MilestoneIdInput`<sup>Optional</sup> <a name="MilestoneIdInput" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneIdInput"></a>

```csharp
public double MilestoneIdInput { get; }
```

- *Type:* double

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.assigneeId"></a>

```csharp
public double AssigneeId { get; }
```

- *Type:* double

---

##### `IterationId`<sup>Required</sup> <a name="IterationId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.iterationId"></a>

```csharp
public double IterationId { get; }
```

- *Type:* double

---

##### `LabelId`<sup>Required</sup> <a name="LabelId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.labelId"></a>

```csharp
public double LabelId { get; }
```

- *Type:* double

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.milestoneId"></a>

```csharp
public double MilestoneId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectIssueBoard.ProjectIssueBoardListsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




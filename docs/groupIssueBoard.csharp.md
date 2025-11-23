# `groupIssueBoard` Submodule <a name="`groupIssueBoard` Submodule" id="@cdktf/provider-gitlab.groupIssueBoard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupIssueBoard <a name="GroupIssueBoard" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board gitlab_group_issue_board}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupIssueBoard(Construct Scope, string Id, GroupIssueBoardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig">GroupIssueBoardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig">GroupIssueBoardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.putLists">PutLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetLists">ResetLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetMilestoneId">ResetMilestoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLists` <a name="PutLists" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.putLists"></a>

```csharp
private void PutLists(IResolvable|GroupIssueBoardLists[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.putLists.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>[]

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLists` <a name="ResetLists" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetLists"></a>

```csharp
private void ResetLists()
```

##### `ResetMilestoneId` <a name="ResetMilestoneId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.resetMilestoneId"></a>

```csharp
private void ResetMilestoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GroupIssueBoard resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupIssueBoard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupIssueBoard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupIssueBoard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

GroupIssueBoard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GroupIssueBoard resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroupIssueBoard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroupIssueBoard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GroupIssueBoard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.lists">Lists</a></code> | <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList">GroupIssueBoardListsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.listsInput">ListsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.milestoneIdInput">MilestoneIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.milestoneId">MilestoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Lists`<sup>Required</sup> <a name="Lists" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.lists"></a>

```csharp
public GroupIssueBoardListsList Lists { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList">GroupIssueBoardListsList</a>

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `ListsInput`<sup>Optional</sup> <a name="ListsInput" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.listsInput"></a>

```csharp
public IResolvable|GroupIssueBoardLists[] ListsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>[]

---

##### `MilestoneIdInput`<sup>Optional</sup> <a name="MilestoneIdInput" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.milestoneIdInput"></a>

```csharp
public double MilestoneIdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.milestoneId"></a>

```csharp
public double MilestoneId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupIssueBoardConfig <a name="GroupIssueBoardConfig" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupIssueBoardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Group,
    string Name,
    string[] Labels = null,
    IResolvable|GroupIssueBoardLists[] Lists = null,
    double MilestoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.group">Group</a></code> | <code>string</code> | The ID or URL-encoded path of the group owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.name">Name</a></code> | <code>string</code> | The name of the board. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.labels">Labels</a></code> | <code>string[]</code> | The list of label names which the board should be scoped to. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.lists">Lists</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>[]</code> | lists block. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.milestoneId">MilestoneId</a></code> | <code>double</code> | The milestone the board should be scoped to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

The ID or URL-encoded path of the group owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#group GroupIssueBoard#group}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the board.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#name GroupIssueBoard#name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

The list of label names which the board should be scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#labels GroupIssueBoard#labels}

---

##### `Lists`<sup>Optional</sup> <a name="Lists" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.lists"></a>

```csharp
public IResolvable|GroupIssueBoardLists[] Lists { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>[]

lists block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#lists GroupIssueBoard#lists}

---

##### `MilestoneId`<sup>Optional</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardConfig.property.milestoneId"></a>

```csharp
public double MilestoneId { get; set; }
```

- *Type:* double

The milestone the board should be scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#milestone_id GroupIssueBoard#milestone_id}

---

### GroupIssueBoardLists <a name="GroupIssueBoardLists" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupIssueBoardLists {
    double LabelId = null,
    double Position = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists.property.labelId">LabelId</a></code> | <code>double</code> | The ID of the label the list should be scoped to. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists.property.position">Position</a></code> | <code>double</code> | The explicit position of the list within the board, zero based. |

---

##### `LabelId`<sup>Optional</sup> <a name="LabelId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists.property.labelId"></a>

```csharp
public double LabelId { get; set; }
```

- *Type:* double

The ID of the label the list should be scoped to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#label_id GroupIssueBoard#label_id}

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

The explicit position of the list within the board, zero based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/group_issue_board#position GroupIssueBoard#position}

---

## Classes <a name="Classes" id="Classes"></a>

### GroupIssueBoardListsList <a name="GroupIssueBoardListsList" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupIssueBoardListsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.get"></a>

```csharp
private GroupIssueBoardListsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsList.property.internalValue"></a>

```csharp
public IResolvable|GroupIssueBoardLists[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>[]

---


### GroupIssueBoardListsOutputReference <a name="GroupIssueBoardListsOutputReference" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new GroupIssueBoardListsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.resetLabelId">ResetLabelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelId` <a name="ResetLabelId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.resetLabelId"></a>

```csharp
private void ResetLabelId()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.labelIdInput">LabelIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.labelId">LabelId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `LabelIdInput`<sup>Optional</sup> <a name="LabelIdInput" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.labelIdInput"></a>

```csharp
public double LabelIdInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `LabelId`<sup>Required</sup> <a name="LabelId" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.labelId"></a>

```csharp
public double LabelId { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardListsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GroupIssueBoardLists InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.groupIssueBoard.GroupIssueBoardLists">GroupIssueBoardLists</a>

---




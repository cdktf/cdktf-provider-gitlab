# `projectIntegrationEmailsOnPush` Submodule <a name="`projectIntegrationEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationEmailsOnPush <a name="ProjectIntegrationEmailsOnPush" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push gitlab_project_integration_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationEmailsOnPush(Construct Scope, string Id, ProjectIntegrationEmailsOnPushConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig">ProjectIntegrationEmailsOnPushConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig">ProjectIntegrationEmailsOnPushConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetDisableDiffs">ResetDisableDiffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetSendFromCommitterEmail">ResetSendFromCommitterEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetDisableDiffs` <a name="ResetDisableDiffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetDisableDiffs"></a>

```csharp
private void ResetDisableDiffs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetSendFromCommitterEmail` <a name="ResetSendFromCommitterEmail" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetSendFromCommitterEmail"></a>

```csharp
private void ResetSendFromCommitterEmail()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationEmailsOnPush.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationEmailsOnPush.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationEmailsOnPush.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationEmailsOnPush.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationEmailsOnPush to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffsInput">DisableDiffsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEventsInput">PushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipientsInput">RecipientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmailInput">SendFromCommitterEmailInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffs">DisableDiffs</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipients">Recipients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `DisableDiffsInput`<sup>Optional</sup> <a name="DisableDiffsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffsInput"></a>

```csharp
public bool|IResolvable DisableDiffsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEventsInput"></a>

```csharp
public bool|IResolvable PushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipientsInput"></a>

```csharp
public string RecipientsInput { get; }
```

- *Type:* string

---

##### `SendFromCommitterEmailInput`<sup>Optional</sup> <a name="SendFromCommitterEmailInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```csharp
public bool|IResolvable SendFromCommitterEmailInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEventsInput"></a>

```csharp
public bool|IResolvable TagPushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `DisableDiffs`<sup>Required</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.disableDiffs"></a>

```csharp
public bool|IResolvable DisableDiffs { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.recipients"></a>

```csharp
public string Recipients { get; }
```

- *Type:* string

---

##### `SendFromCommitterEmail`<sup>Required</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.sendFromCommitterEmail"></a>

```csharp
public bool|IResolvable SendFromCommitterEmail { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPush.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationEmailsOnPushConfig <a name="ProjectIntegrationEmailsOnPushConfig" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationEmailsOnPushConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Project,
    string Recipients,
    string BranchesToBeNotified = null,
    bool|IResolvable DisableDiffs = null,
    string Id = null,
    bool|IResolvable PushEvents = null,
    bool|IResolvable SendFromCommitterEmail = null,
    bool|IResolvable TagPushEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.project">Project</a></code> | <code>string</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.recipients">Recipients</a></code> | <code>string</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.disableDiffs">DisableDiffs</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for tag push events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#project ProjectIntegrationEmailsOnPush#project}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.recipients"></a>

```csharp
public string Recipients { get; set; }
```

- *Type:* string

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#recipients ProjectIntegrationEmailsOnPush#recipients}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#branches_to_be_notified ProjectIntegrationEmailsOnPush#branches_to_be_notified}

---

##### `DisableDiffs`<sup>Optional</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.disableDiffs"></a>

```csharp
public bool|IResolvable DisableDiffs { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#disable_diffs ProjectIntegrationEmailsOnPush#disable_diffs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#id ProjectIntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#push_events ProjectIntegrationEmailsOnPush#push_events}

---

##### `SendFromCommitterEmail`<sup>Optional</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```csharp
public bool|IResolvable SendFromCommitterEmail { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#send_from_committer_email ProjectIntegrationEmailsOnPush#send_from_committer_email}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationEmailsOnPush.ProjectIntegrationEmailsOnPushConfig.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_emails_on_push#tag_push_events ProjectIntegrationEmailsOnPush#tag_push_events}

---




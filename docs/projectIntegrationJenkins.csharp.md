# `projectIntegrationJenkins` Submodule <a name="`projectIntegrationJenkins` Submodule" id="@cdktf/provider-gitlab.projectIntegrationJenkins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationJenkins <a name="ProjectIntegrationJenkins" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins gitlab_project_integration_jenkins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationJenkins(Construct Scope, string Id, ProjectIntegrationJenkinsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig">ProjectIntegrationJenkinsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig">ProjectIntegrationJenkinsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetEnableSslVerification">ResetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetMergeRequestEvents">ResetMergeRequestEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEnableSslVerification` <a name="ResetEnableSslVerification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetEnableSslVerification"></a>

```csharp
private void ResetEnableSslVerification()
```

##### `ResetMergeRequestEvents` <a name="ResetMergeRequestEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetMergeRequestEvents"></a>

```csharp
private void ResetMergeRequestEvents()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationJenkins resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationJenkins.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationJenkins.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationJenkins.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectIntegrationJenkins.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectIntegrationJenkins resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectIntegrationJenkins to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectIntegrationJenkins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationJenkins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerificationInput">EnableSslVerificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrlInput">JenkinsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEventsInput">MergeRequestEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectNameInput">ProjectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEventsInput">PushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerification">EnableSslVerification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrl">JenkinsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEvents">MergeRequestEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectName">ProjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEvents">PushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EnableSslVerificationInput`<sup>Optional</sup> <a name="EnableSslVerificationInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerificationInput"></a>

```csharp
public object EnableSslVerificationInput { get; }
```

- *Type:* object

---

##### `JenkinsUrlInput`<sup>Optional</sup> <a name="JenkinsUrlInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrlInput"></a>

```csharp
public string JenkinsUrlInput { get; }
```

- *Type:* string

---

##### `MergeRequestEventsInput`<sup>Optional</sup> <a name="MergeRequestEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEventsInput"></a>

```csharp
public object MergeRequestEventsInput { get; }
```

- *Type:* object

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProjectNameInput`<sup>Optional</sup> <a name="ProjectNameInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectNameInput"></a>

```csharp
public string ProjectNameInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEventsInput"></a>

```csharp
public object PushEventsInput { get; }
```

- *Type:* object

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEventsInput"></a>

```csharp
public object TagPushEventsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `EnableSslVerification`<sup>Required</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerification"></a>

```csharp
public object EnableSslVerification { get; }
```

- *Type:* object

---

##### `JenkinsUrl`<sup>Required</sup> <a name="JenkinsUrl" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrl"></a>

```csharp
public string JenkinsUrl { get; }
```

- *Type:* string

---

##### `MergeRequestEvents`<sup>Required</sup> <a name="MergeRequestEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEvents"></a>

```csharp
public object MergeRequestEvents { get; }
```

- *Type:* object

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectName"></a>

```csharp
public string ProjectName { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEvents"></a>

```csharp
public object PushEvents { get; }
```

- *Type:* object

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; }
```

- *Type:* object

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationJenkinsConfig <a name="ProjectIntegrationJenkinsConfig" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectIntegrationJenkinsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string JenkinsUrl,
    string Project,
    string ProjectName,
    object EnableSslVerification = null,
    object MergeRequestEvents = null,
    string Password = null,
    object PushEvents = null,
    object TagPushEvents = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.jenkinsUrl">JenkinsUrl</a></code> | <code>string</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.project">Project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.projectName">ProjectName</a></code> | <code>string</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.enableSslVerification">EnableSslVerification</a></code> | <code>object</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.mergeRequestEvents">MergeRequestEvents</a></code> | <code>object</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.password">Password</a></code> | <code>string</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.pushEvents">PushEvents</a></code> | <code>object</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.username">Username</a></code> | <code>string</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JenkinsUrl`<sup>Required</sup> <a name="JenkinsUrl" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.jenkinsUrl"></a>

```csharp
public string JenkinsUrl { get; set; }
```

- *Type:* string

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#jenkins_url ProjectIntegrationJenkins#jenkins_url}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#project ProjectIntegrationJenkins#project}

---

##### `ProjectName`<sup>Required</sup> <a name="ProjectName" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.projectName"></a>

```csharp
public string ProjectName { get; set; }
```

- *Type:* string

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#project_name ProjectIntegrationJenkins#project_name}

---

##### `EnableSslVerification`<sup>Optional</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.enableSslVerification"></a>

```csharp
public object EnableSslVerification { get; set; }
```

- *Type:* object

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#enable_ssl_verification ProjectIntegrationJenkins#enable_ssl_verification}

---

##### `MergeRequestEvents`<sup>Optional</sup> <a name="MergeRequestEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.mergeRequestEvents"></a>

```csharp
public object MergeRequestEvents { get; set; }
```

- *Type:* object

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#merge_request_events ProjectIntegrationJenkins#merge_request_events}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#password ProjectIntegrationJenkins#password}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.pushEvents"></a>

```csharp
public object PushEvents { get; set; }
```

- *Type:* object

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#push_events ProjectIntegrationJenkins#push_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; set; }
```

- *Type:* object

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#tag_push_events ProjectIntegrationJenkins#tag_push_events}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.0/docs/resources/project_integration_jenkins#username ProjectIntegrationJenkins#username}

---




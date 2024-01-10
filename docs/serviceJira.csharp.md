# `serviceJira` Submodule <a name="`serviceJira` Submodule" id="@cdktf/provider-gitlab.serviceJira"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceJira <a name="ServiceJira" id="@cdktf/provider-gitlab.serviceJira.ServiceJira"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira gitlab_service_jira}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ServiceJira(Construct Scope, string Id, ServiceJiraConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig">ServiceJiraConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig">ServiceJiraConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommentOnEventEnabled">ResetCommentOnEventEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommitEvents">ResetCommitEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionId">ResetJiraIssueTransitionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJobEvents">ResetJobEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKey">ResetProjectKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetApiUrl"></a>

```csharp
private void ResetApiUrl()
```

##### `ResetCommentOnEventEnabled` <a name="ResetCommentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommentOnEventEnabled"></a>

```csharp
private void ResetCommentOnEventEnabled()
```

##### `ResetCommitEvents` <a name="ResetCommitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetCommitEvents"></a>

```csharp
private void ResetCommitEvents()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetIssuesEvents"></a>

```csharp
private void ResetIssuesEvents()
```

##### `ResetJiraIssueTransitionId` <a name="ResetJiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJiraIssueTransitionId"></a>

```csharp
private void ResetJiraIssueTransitionId()
```

##### `ResetJobEvents` <a name="ResetJobEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetJobEvents"></a>

```csharp
private void ResetJobEvents()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetMergeRequestsEvents"></a>

```csharp
private void ResetMergeRequestsEvents()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetNoteEvents"></a>

```csharp
private void ResetNoteEvents()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPipelineEvents"></a>

```csharp
private void ResetPipelineEvents()
```

##### `ResetProjectKey` <a name="ResetProjectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetProjectKey"></a>

```csharp
private void ResetProjectKey()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceJira resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceJira.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceJira.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceJira.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceJira.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceJira resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceJira to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceJira that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceJira to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrlInput">ApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabledInput">CommentOnEventEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEventsInput">CommitEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionIdInput">JiraIssueTransitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEventsInput">JobEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEventsInput">NoteEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeyInput">ProjectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEventsInput">PushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabled">CommentOnEventEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEvents">CommitEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionId">JiraIssueTransitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEvents">JobEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEvents">NoteEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKey">ProjectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEvents">PushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrlInput"></a>

```csharp
public string ApiUrlInput { get; }
```

- *Type:* string

---

##### `CommentOnEventEnabledInput`<sup>Optional</sup> <a name="CommentOnEventEnabledInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabledInput"></a>

```csharp
public object CommentOnEventEnabledInput { get; }
```

- *Type:* object

---

##### `CommitEventsInput`<sup>Optional</sup> <a name="CommitEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEventsInput"></a>

```csharp
public object CommitEventsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEventsInput"></a>

```csharp
public object IssuesEventsInput { get; }
```

- *Type:* object

---

##### `JiraIssueTransitionIdInput`<sup>Optional</sup> <a name="JiraIssueTransitionIdInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionIdInput"></a>

```csharp
public string JiraIssueTransitionIdInput { get; }
```

- *Type:* string

---

##### `JobEventsInput`<sup>Optional</sup> <a name="JobEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEventsInput"></a>

```csharp
public object JobEventsInput { get; }
```

- *Type:* object

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEventsInput"></a>

```csharp
public object MergeRequestsEventsInput { get; }
```

- *Type:* object

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEventsInput"></a>

```csharp
public object NoteEventsInput { get; }
```

- *Type:* object

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEventsInput"></a>

```csharp
public object PipelineEventsInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKeyInput"></a>

```csharp
public string ProjectKeyInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEventsInput"></a>

```csharp
public object PushEventsInput { get; }
```

- *Type:* object

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEventsInput"></a>

```csharp
public object TagPushEventsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `CommentOnEventEnabled`<sup>Required</sup> <a name="CommentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commentOnEventEnabled"></a>

```csharp
public object CommentOnEventEnabled { get; }
```

- *Type:* object

---

##### `CommitEvents`<sup>Required</sup> <a name="CommitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.commitEvents"></a>

```csharp
public object CommitEvents { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; }
```

- *Type:* object

---

##### `JiraIssueTransitionId`<sup>Required</sup> <a name="JiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jiraIssueTransitionId"></a>

```csharp
public string JiraIssueTransitionId { get; }
```

- *Type:* string

---

##### `JobEvents`<sup>Required</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.jobEvents"></a>

```csharp
public object JobEvents { get; }
```

- *Type:* object

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; }
```

- *Type:* object

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.noteEvents"></a>

```csharp
public object NoteEvents { get; }
```

- *Type:* object

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.projectKey"></a>

```csharp
public string ProjectKey { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.pushEvents"></a>

```csharp
public object PushEvents { get; }
```

- *Type:* object

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; }
```

- *Type:* object

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.serviceJira.ServiceJira.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceJiraConfig <a name="ServiceJiraConfig" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ServiceJiraConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Password,
    string Project,
    string Url,
    string Username,
    string ApiUrl = null,
    object CommentOnEventEnabled = null,
    object CommitEvents = null,
    string Id = null,
    object IssuesEvents = null,
    string JiraIssueTransitionId = null,
    object JobEvents = null,
    object MergeRequestsEvents = null,
    object NoteEvents = null,
    object PipelineEvents = null,
    string ProjectKey = null,
    object PushEvents = null,
    object TagPushEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.password">Password</a></code> | <code>string</code> | The password of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.project">Project</a></code> | <code>string</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.url">Url</a></code> | <code>string</code> | The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.username">Username</a></code> | <code>string</code> | The username of the user created to be used with GitLab/JIRA. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.apiUrl">ApiUrl</a></code> | <code>string</code> | The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commentOnEventEnabled">CommentOnEventEnabled</a></code> | <code>object</code> | Enable comments inside Jira issues on each GitLab event (commit / merge request). |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commitEvents">CommitEvents</a></code> | <code>object</code> | Enable notifications for commit events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#id ServiceJira#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.issuesEvents">IssuesEvents</a></code> | <code>object</code> | Enable notifications for issues events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionId">JiraIssueTransitionId</a></code> | <code>string</code> | The ID of a transition that moves issues to a closed state. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jobEvents">JobEvents</a></code> | <code>object</code> | Enable notifications for job events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>object</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.noteEvents">NoteEvents</a></code> | <code>object</code> | Enable notifications for note events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>object</code> | Enable notifications for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKey">ProjectKey</a></code> | <code>string</code> | The short identifier for your JIRA project, all uppercase, e.g., PROJ. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pushEvents">PushEvents</a></code> | <code>object</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | Enable notifications for tag_push events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#password ServiceJira#password}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#project ServiceJira#project}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL to the JIRA project which is being linked to this GitLab project. For example, https://jira.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#url ServiceJira#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the user created to be used with GitLab/JIRA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#username ServiceJira#username}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

The base URL to the Jira instance API. Web URL value is used if not set. For example, https://jira-api.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#api_url ServiceJira#api_url}

---

##### `CommentOnEventEnabled`<sup>Optional</sup> <a name="CommentOnEventEnabled" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commentOnEventEnabled"></a>

```csharp
public object CommentOnEventEnabled { get; set; }
```

- *Type:* object

Enable comments inside Jira issues on each GitLab event (commit / merge request).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#comment_on_event_enabled ServiceJira#comment_on_event_enabled}

---

##### `CommitEvents`<sup>Optional</sup> <a name="CommitEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.commitEvents"></a>

```csharp
public object CommitEvents { get; set; }
```

- *Type:* object

Enable notifications for commit events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#commit_events ServiceJira#commit_events}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#id ServiceJira#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.issuesEvents"></a>

```csharp
public object IssuesEvents { get; set; }
```

- *Type:* object

Enable notifications for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#issues_events ServiceJira#issues_events}

---

##### `JiraIssueTransitionId`<sup>Optional</sup> <a name="JiraIssueTransitionId" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jiraIssueTransitionId"></a>

```csharp
public string JiraIssueTransitionId { get; set; }
```

- *Type:* string

The ID of a transition that moves issues to a closed state.

You can find this number under the JIRA workflow administration (Administration > Issues > Workflows) by selecting View under Operations of the desired workflow of your project. By default, this ID is set to 2. *Note**: importing this field is only supported since GitLab 15.2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#jira_issue_transition_id ServiceJira#jira_issue_transition_id}

---

##### `JobEvents`<sup>Optional</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.jobEvents"></a>

```csharp
public object JobEvents { get; set; }
```

- *Type:* object

Enable notifications for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#job_events ServiceJira#job_events}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.mergeRequestsEvents"></a>

```csharp
public object MergeRequestsEvents { get; set; }
```

- *Type:* object

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#merge_requests_events ServiceJira#merge_requests_events}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.noteEvents"></a>

```csharp
public object NoteEvents { get; set; }
```

- *Type:* object

Enable notifications for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#note_events ServiceJira#note_events}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pipelineEvents"></a>

```csharp
public object PipelineEvents { get; set; }
```

- *Type:* object

Enable notifications for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#pipeline_events ServiceJira#pipeline_events}

---

##### `ProjectKey`<sup>Optional</sup> <a name="ProjectKey" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.projectKey"></a>

```csharp
public string ProjectKey { get; set; }
```

- *Type:* string

The short identifier for your JIRA project, all uppercase, e.g., PROJ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#project_key ServiceJira#project_key}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.pushEvents"></a>

```csharp
public object PushEvents { get; set; }
```

- *Type:* object

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#push_events ServiceJira#push_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceJira.ServiceJiraConfig.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; set; }
```

- *Type:* object

Enable notifications for tag_push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_jira#tag_push_events ServiceJira#tag_push_events}

---




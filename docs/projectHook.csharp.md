# `projectHook` Submodule <a name="`projectHook` Submodule" id="@cdktf/provider-gitlab.projectHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectHook <a name="ProjectHook" id="@cdktf/provider-gitlab.projectHook.ProjectHook"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook gitlab_project_hook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectHook(Construct Scope, string Id, ProjectHookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig">ProjectHookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectHook.ProjectHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig">ProjectHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.putCustomHeaders">PutCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialIssuesEvents">ResetConfidentialIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialNoteEvents">ResetConfidentialNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomHeaders">ResetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomWebhookTemplate">ResetCustomWebhookTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetDeploymentEvents">ResetDeploymentEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetEnableSslVerification">ResetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetIssuesEvents">ResetIssuesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetJobEvents">ResetJobEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetMergeRequestsEvents">ResetMergeRequestsEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetNoteEvents">ResetNoteEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPipelineEvents">ResetPipelineEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEventsBranchFilter">ResetPushEventsBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetReleasesEvents">ResetReleasesEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetResourceAccessTokenEvents">ResetResourceAccessTokenEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.resetWikiPageEvents">ResetWikiPageEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectHook.ProjectHook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectHook.ProjectHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.projectHook.ProjectHook.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomHeaders` <a name="PutCustomHeaders" id="@cdktf/provider-gitlab.projectHook.ProjectHook.putCustomHeaders"></a>

```csharp
private void PutCustomHeaders(IResolvable|ProjectHookCustomHeaders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectHook.ProjectHook.putCustomHeaders.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>[]

---

##### `ResetConfidentialIssuesEvents` <a name="ResetConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialIssuesEvents"></a>

```csharp
private void ResetConfidentialIssuesEvents()
```

##### `ResetConfidentialNoteEvents` <a name="ResetConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetConfidentialNoteEvents"></a>

```csharp
private void ResetConfidentialNoteEvents()
```

##### `ResetCustomHeaders` <a name="ResetCustomHeaders" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomHeaders"></a>

```csharp
private void ResetCustomHeaders()
```

##### `ResetCustomWebhookTemplate` <a name="ResetCustomWebhookTemplate" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetCustomWebhookTemplate"></a>

```csharp
private void ResetCustomWebhookTemplate()
```

##### `ResetDeploymentEvents` <a name="ResetDeploymentEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetDeploymentEvents"></a>

```csharp
private void ResetDeploymentEvents()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableSslVerification` <a name="ResetEnableSslVerification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetEnableSslVerification"></a>

```csharp
private void ResetEnableSslVerification()
```

##### `ResetIssuesEvents` <a name="ResetIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetIssuesEvents"></a>

```csharp
private void ResetIssuesEvents()
```

##### `ResetJobEvents` <a name="ResetJobEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetJobEvents"></a>

```csharp
private void ResetJobEvents()
```

##### `ResetMergeRequestsEvents` <a name="ResetMergeRequestsEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetMergeRequestsEvents"></a>

```csharp
private void ResetMergeRequestsEvents()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNoteEvents` <a name="ResetNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetNoteEvents"></a>

```csharp
private void ResetNoteEvents()
```

##### `ResetPipelineEvents` <a name="ResetPipelineEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPipelineEvents"></a>

```csharp
private void ResetPipelineEvents()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetPushEventsBranchFilter` <a name="ResetPushEventsBranchFilter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetPushEventsBranchFilter"></a>

```csharp
private void ResetPushEventsBranchFilter()
```

##### `ResetReleasesEvents` <a name="ResetReleasesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetReleasesEvents"></a>

```csharp
private void ResetReleasesEvents()
```

##### `ResetResourceAccessTokenEvents` <a name="ResetResourceAccessTokenEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetResourceAccessTokenEvents"></a>

```csharp
private void ResetResourceAccessTokenEvents()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetWikiPageEvents` <a name="ResetWikiPageEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.resetWikiPageEvents"></a>

```csharp
private void ResetWikiPageEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectHook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectHook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectHook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectHook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectHook.ProjectHook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectHook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectHook resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectHook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeaders">CustomHeaders</a></code> | <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList">ProjectHookCustomHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.hookId">HookId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectId">ProjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEventsInput">ConfidentialIssuesEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEventsInput">ConfidentialNoteEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeadersInput">CustomHeadersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplateInput">CustomWebhookTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEventsInput">DeploymentEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerificationInput">EnableSslVerificationInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEventsInput">IssuesEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEventsInput">JobEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEventsInput">MergeRequestsEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEventsInput">NoteEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEventsInput">PipelineEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilterInput">PushEventsBranchFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsInput">PushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEventsInput">ReleasesEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEventsInput">ResourceAccessTokenEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEventsInput">WikiPageEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplate">CustomWebhookTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEvents">DeploymentEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerification">EnableSslVerification</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEvents">IssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEvents">JobEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEvents">NoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEvents">PipelineEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilter">PushEventsBranchFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEvents">ReleasesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEvents">ResourceAccessTokenEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEvents">WikiPageEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CustomHeaders`<sup>Required</sup> <a name="CustomHeaders" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeaders"></a>

```csharp
public ProjectHookCustomHeadersList CustomHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList">ProjectHookCustomHeadersList</a>

---

##### `HookId`<sup>Required</sup> <a name="HookId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.hookId"></a>

```csharp
public double HookId { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectId"></a>

```csharp
public double ProjectId { get; }
```

- *Type:* double

---

##### `ConfidentialIssuesEventsInput`<sup>Optional</sup> <a name="ConfidentialIssuesEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEventsInput"></a>

```csharp
public bool|IResolvable ConfidentialIssuesEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ConfidentialNoteEventsInput`<sup>Optional</sup> <a name="ConfidentialNoteEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEventsInput"></a>

```csharp
public bool|IResolvable ConfidentialNoteEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CustomHeadersInput`<sup>Optional</sup> <a name="CustomHeadersInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customHeadersInput"></a>

```csharp
public IResolvable|ProjectHookCustomHeaders[] CustomHeadersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>[]

---

##### `CustomWebhookTemplateInput`<sup>Optional</sup> <a name="CustomWebhookTemplateInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplateInput"></a>

```csharp
public string CustomWebhookTemplateInput { get; }
```

- *Type:* string

---

##### `DeploymentEventsInput`<sup>Optional</sup> <a name="DeploymentEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEventsInput"></a>

```csharp
public bool|IResolvable DeploymentEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnableSslVerificationInput`<sup>Optional</sup> <a name="EnableSslVerificationInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerificationInput"></a>

```csharp
public bool|IResolvable EnableSslVerificationInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IssuesEventsInput`<sup>Optional</sup> <a name="IssuesEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEventsInput"></a>

```csharp
public bool|IResolvable IssuesEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `JobEventsInput`<sup>Optional</sup> <a name="JobEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEventsInput"></a>

```csharp
public bool|IResolvable JobEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MergeRequestsEventsInput`<sup>Optional</sup> <a name="MergeRequestsEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEventsInput"></a>

```csharp
public bool|IResolvable MergeRequestsEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NoteEventsInput`<sup>Optional</sup> <a name="NoteEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEventsInput"></a>

```csharp
public bool|IResolvable NoteEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PipelineEventsInput`<sup>Optional</sup> <a name="PipelineEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEventsInput"></a>

```csharp
public bool|IResolvable PipelineEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushEventsBranchFilterInput`<sup>Optional</sup> <a name="PushEventsBranchFilterInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilterInput"></a>

```csharp
public string PushEventsBranchFilterInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsInput"></a>

```csharp
public bool|IResolvable PushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ReleasesEventsInput`<sup>Optional</sup> <a name="ReleasesEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEventsInput"></a>

```csharp
public bool|IResolvable ReleasesEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ResourceAccessTokenEventsInput`<sup>Optional</sup> <a name="ResourceAccessTokenEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEventsInput"></a>

```csharp
public bool|IResolvable ResourceAccessTokenEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEventsInput"></a>

```csharp
public bool|IResolvable TagPushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `WikiPageEventsInput`<sup>Optional</sup> <a name="WikiPageEventsInput" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEventsInput"></a>

```csharp
public bool|IResolvable WikiPageEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ConfidentialIssuesEvents`<sup>Required</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialIssuesEvents"></a>

```csharp
public bool|IResolvable ConfidentialIssuesEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ConfidentialNoteEvents`<sup>Required</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.confidentialNoteEvents"></a>

```csharp
public bool|IResolvable ConfidentialNoteEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CustomWebhookTemplate`<sup>Required</sup> <a name="CustomWebhookTemplate" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.customWebhookTemplate"></a>

```csharp
public string CustomWebhookTemplate { get; }
```

- *Type:* string

---

##### `DeploymentEvents`<sup>Required</sup> <a name="DeploymentEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.deploymentEvents"></a>

```csharp
public bool|IResolvable DeploymentEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableSslVerification`<sup>Required</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.enableSslVerification"></a>

```csharp
public bool|IResolvable EnableSslVerification { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IssuesEvents`<sup>Required</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.issuesEvents"></a>

```csharp
public bool|IResolvable IssuesEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `JobEvents`<sup>Required</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.jobEvents"></a>

```csharp
public bool|IResolvable JobEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MergeRequestsEvents`<sup>Required</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.mergeRequestsEvents"></a>

```csharp
public bool|IResolvable MergeRequestsEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NoteEvents`<sup>Required</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.noteEvents"></a>

```csharp
public bool|IResolvable NoteEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PipelineEvents`<sup>Required</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pipelineEvents"></a>

```csharp
public bool|IResolvable PipelineEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PushEventsBranchFilter`<sup>Required</sup> <a name="PushEventsBranchFilter" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.pushEventsBranchFilter"></a>

```csharp
public string PushEventsBranchFilter { get; }
```

- *Type:* string

---

##### `ReleasesEvents`<sup>Required</sup> <a name="ReleasesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.releasesEvents"></a>

```csharp
public bool|IResolvable ReleasesEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ResourceAccessTokenEvents`<sup>Required</sup> <a name="ResourceAccessTokenEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.resourceAccessTokenEvents"></a>

```csharp
public bool|IResolvable ResourceAccessTokenEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `WikiPageEvents`<sup>Required</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.wikiPageEvents"></a>

```csharp
public bool|IResolvable WikiPageEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectHook.ProjectHook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectHookConfig <a name="ProjectHookConfig" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectHookConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Project,
    string Url,
    bool|IResolvable ConfidentialIssuesEvents = null,
    bool|IResolvable ConfidentialNoteEvents = null,
    IResolvable|ProjectHookCustomHeaders[] CustomHeaders = null,
    string CustomWebhookTemplate = null,
    bool|IResolvable DeploymentEvents = null,
    string Description = null,
    bool|IResolvable EnableSslVerification = null,
    bool|IResolvable IssuesEvents = null,
    bool|IResolvable JobEvents = null,
    bool|IResolvable MergeRequestsEvents = null,
    string Name = null,
    bool|IResolvable NoteEvents = null,
    bool|IResolvable PipelineEvents = null,
    bool|IResolvable PushEvents = null,
    string PushEventsBranchFilter = null,
    bool|IResolvable ReleasesEvents = null,
    bool|IResolvable ResourceAccessTokenEvents = null,
    bool|IResolvable TagPushEvents = null,
    string Token = null,
    bool|IResolvable WikiPageEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.project">Project</a></code> | <code>string</code> | The name or id of the project to add the hook to. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.url">Url</a></code> | <code>string</code> | The url of the hook to invoke. Forces re-creation to preserve `token`. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialIssuesEvents">ConfidentialIssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for confidential issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialNoteEvents">ConfidentialNoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for confidential note events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customHeaders">CustomHeaders</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>[]</code> | Custom headers for the project webhook. Available from GitLab 17.1 onwards. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customWebhookTemplate">CustomWebhookTemplate</a></code> | <code>string</code> | Custom webhook template. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.deploymentEvents">DeploymentEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for deployment events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.description">Description</a></code> | <code>string</code> | Description of the webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.enableSslVerification">EnableSslVerification</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable SSL verification when invoking the hook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.issuesEvents">IssuesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for issues events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.jobEvents">JobEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for job events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.mergeRequestsEvents">MergeRequestsEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for merge requests events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.name">Name</a></code> | <code>string</code> | Name of the project webhook. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.noteEvents">NoteEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for note events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pipelineEvents">PipelineEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for pipeline events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEventsBranchFilter">PushEventsBranchFilter</a></code> | <code>string</code> | Invoke the hook for push events on matching branches only. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.releasesEvents">ReleasesEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for release events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.resourceAccessTokenEvents">ResourceAccessTokenEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for project access token expiry events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.token">Token</a></code> | <code>string</code> | A token to present when invoking the hook. The token is not available for imported resources. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.wikiPageEvents">WikiPageEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Invoke the hook for wiki page events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or id of the project to add the hook to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#project ProjectHook#project}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The url of the hook to invoke. Forces re-creation to preserve `token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#url ProjectHook#url}

---

##### `ConfidentialIssuesEvents`<sup>Optional</sup> <a name="ConfidentialIssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialIssuesEvents"></a>

```csharp
public bool|IResolvable ConfidentialIssuesEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for confidential issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#confidential_issues_events ProjectHook#confidential_issues_events}

---

##### `ConfidentialNoteEvents`<sup>Optional</sup> <a name="ConfidentialNoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.confidentialNoteEvents"></a>

```csharp
public bool|IResolvable ConfidentialNoteEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for confidential note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#confidential_note_events ProjectHook#confidential_note_events}

---

##### `CustomHeaders`<sup>Optional</sup> <a name="CustomHeaders" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customHeaders"></a>

```csharp
public IResolvable|ProjectHookCustomHeaders[] CustomHeaders { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>[]

Custom headers for the project webhook. Available from GitLab 17.1 onwards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#custom_headers ProjectHook#custom_headers}

---

##### `CustomWebhookTemplate`<sup>Optional</sup> <a name="CustomWebhookTemplate" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.customWebhookTemplate"></a>

```csharp
public string CustomWebhookTemplate { get; set; }
```

- *Type:* string

Custom webhook template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#custom_webhook_template ProjectHook#custom_webhook_template}

---

##### `DeploymentEvents`<sup>Optional</sup> <a name="DeploymentEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.deploymentEvents"></a>

```csharp
public bool|IResolvable DeploymentEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for deployment events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#deployment_events ProjectHook#deployment_events}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#description ProjectHook#description}

---

##### `EnableSslVerification`<sup>Optional</sup> <a name="EnableSslVerification" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.enableSslVerification"></a>

```csharp
public bool|IResolvable EnableSslVerification { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable SSL verification when invoking the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#enable_ssl_verification ProjectHook#enable_ssl_verification}

---

##### `IssuesEvents`<sup>Optional</sup> <a name="IssuesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.issuesEvents"></a>

```csharp
public bool|IResolvable IssuesEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for issues events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#issues_events ProjectHook#issues_events}

---

##### `JobEvents`<sup>Optional</sup> <a name="JobEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.jobEvents"></a>

```csharp
public bool|IResolvable JobEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for job events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#job_events ProjectHook#job_events}

---

##### `MergeRequestsEvents`<sup>Optional</sup> <a name="MergeRequestsEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.mergeRequestsEvents"></a>

```csharp
public bool|IResolvable MergeRequestsEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for merge requests events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#merge_requests_events ProjectHook#merge_requests_events}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the project webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#name ProjectHook#name}

---

##### `NoteEvents`<sup>Optional</sup> <a name="NoteEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.noteEvents"></a>

```csharp
public bool|IResolvable NoteEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for note events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#note_events ProjectHook#note_events}

---

##### `PipelineEvents`<sup>Optional</sup> <a name="PipelineEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pipelineEvents"></a>

```csharp
public bool|IResolvable PipelineEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for pipeline events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#pipeline_events ProjectHook#pipeline_events}

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#push_events ProjectHook#push_events}

---

##### `PushEventsBranchFilter`<sup>Optional</sup> <a name="PushEventsBranchFilter" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.pushEventsBranchFilter"></a>

```csharp
public string PushEventsBranchFilter { get; set; }
```

- *Type:* string

Invoke the hook for push events on matching branches only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#push_events_branch_filter ProjectHook#push_events_branch_filter}

---

##### `ReleasesEvents`<sup>Optional</sup> <a name="ReleasesEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.releasesEvents"></a>

```csharp
public bool|IResolvable ReleasesEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for release events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#releases_events ProjectHook#releases_events}

---

##### `ResourceAccessTokenEvents`<sup>Optional</sup> <a name="ResourceAccessTokenEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.resourceAccessTokenEvents"></a>

```csharp
public bool|IResolvable ResourceAccessTokenEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for project access token expiry events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#resource_access_token_events ProjectHook#resource_access_token_events}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#tag_push_events ProjectHook#tag_push_events}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

A token to present when invoking the hook. The token is not available for imported resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#token ProjectHook#token}

---

##### `WikiPageEvents`<sup>Optional</sup> <a name="WikiPageEvents" id="@cdktf/provider-gitlab.projectHook.ProjectHookConfig.property.wikiPageEvents"></a>

```csharp
public bool|IResolvable WikiPageEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Invoke the hook for wiki page events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#wiki_page_events ProjectHook#wiki_page_events}

---

### ProjectHookCustomHeaders <a name="ProjectHookCustomHeaders" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectHookCustomHeaders {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.key">Key</a></code> | <code>string</code> | Key of the custom header. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.value">Value</a></code> | <code>string</code> | Value of the custom header. This value cannot be imported. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key of the custom header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#key ProjectHook#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the custom header. This value cannot be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_hook#value ProjectHook#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectHookCustomHeadersList <a name="ProjectHookCustomHeadersList" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectHookCustomHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.get"></a>

```csharp
private ProjectHookCustomHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersList.property.internalValue"></a>

```csharp
public IResolvable|ProjectHookCustomHeaders[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>[]

---


### ProjectHookCustomHeadersOutputReference <a name="ProjectHookCustomHeadersOutputReference" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectHookCustomHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeadersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ProjectHookCustomHeaders InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.projectHook.ProjectHookCustomHeaders">ProjectHookCustomHeaders</a>

---




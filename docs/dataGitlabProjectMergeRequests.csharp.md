# `dataGitlabProjectMergeRequests` Submodule <a name="`dataGitlabProjectMergeRequests` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMergeRequests <a name="DataGitlabProjectMergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests gitlab_project_merge_requests}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequests(Construct Scope, string Id, DataGitlabProjectMergeRequestsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig">DataGitlabProjectMergeRequestsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig">DataGitlabProjectMergeRequestsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorId">ResetAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorUsername">ResetAuthorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetIids">ResetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMilestone">ResetMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMyReactionEmoji">ResetMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetReviewerUsername">ResetReviewerUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSort">ResetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSourceBranch">ResetSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetTargetBranch">ResetTargetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedAfter">ResetUpdatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedBefore">ResetUpdatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetWip">ResetWip</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAuthorId` <a name="ResetAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorId"></a>

```csharp
private void ResetAuthorId()
```

##### `ResetAuthorUsername` <a name="ResetAuthorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetAuthorUsername"></a>

```csharp
private void ResetAuthorUsername()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedAfter"></a>

```csharp
private void ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetCreatedBefore"></a>

```csharp
private void ResetCreatedBefore()
```

##### `ResetIids` <a name="ResetIids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetIids"></a>

```csharp
private void ResetIids()
```

##### `ResetMilestone` <a name="ResetMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMilestone"></a>

```csharp
private void ResetMilestone()
```

##### `ResetMyReactionEmoji` <a name="ResetMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetMyReactionEmoji"></a>

```csharp
private void ResetMyReactionEmoji()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```

##### `ResetReviewerUsername` <a name="ResetReviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetReviewerUsername"></a>

```csharp
private void ResetReviewerUsername()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSort"></a>

```csharp
private void ResetSort()
```

##### `ResetSourceBranch` <a name="ResetSourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetSourceBranch"></a>

```csharp
private void ResetSourceBranch()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTargetBranch` <a name="ResetTargetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetTargetBranch"></a>

```csharp
private void ResetTargetBranch()
```

##### `ResetUpdatedAfter` <a name="ResetUpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedAfter"></a>

```csharp
private void ResetUpdatedAfter()
```

##### `ResetUpdatedBefore` <a name="ResetUpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetUpdatedBefore"></a>

```csharp
private void ResetUpdatedBefore()
```

##### `ResetWip` <a name="ResetWip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.resetWip"></a>

```csharp
private void ResetWip()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectMergeRequests resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMergeRequests.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMergeRequests.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMergeRequests.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMergeRequests.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabProjectMergeRequests resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectMergeRequests to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectMergeRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectMergeRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.mergeRequests">MergeRequests</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList">DataGitlabProjectMergeRequestsMergeRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorIdInput">AuthorIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsernameInput">AuthorUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfterInput">CreatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iidsInput">IidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestoneInput">MilestoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmojiInput">MyReactionEmojiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsernameInput">ReviewerUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sortInput">SortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranchInput">SourceBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranchInput">TargetBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfterInput">UpdatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBeforeInput">UpdatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wipInput">WipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorId">AuthorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsername">AuthorUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iids">Iids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestone">Milestone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmoji">MyReactionEmoji</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsername">ReviewerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sort">Sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranch">SourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranch">TargetBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfter">UpdatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBefore">UpdatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wip">Wip</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `MergeRequests`<sup>Required</sup> <a name="MergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.mergeRequests"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsList MergeRequests { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList">DataGitlabProjectMergeRequestsMergeRequestsList</a>

---

##### `AuthorIdInput`<sup>Optional</sup> <a name="AuthorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorIdInput"></a>

```csharp
public double AuthorIdInput { get; }
```

- *Type:* double

---

##### `AuthorUsernameInput`<sup>Optional</sup> <a name="AuthorUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsernameInput"></a>

```csharp
public string AuthorUsernameInput { get; }
```

- *Type:* string

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfterInput"></a>

```csharp
public string CreatedAfterInput { get; }
```

- *Type:* string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBeforeInput"></a>

```csharp
public string CreatedBeforeInput { get; }
```

- *Type:* string

---

##### `IidsInput`<sup>Optional</sup> <a name="IidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iidsInput"></a>

```csharp
public double[] IidsInput { get; }
```

- *Type:* double[]

---

##### `MilestoneInput`<sup>Optional</sup> <a name="MilestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestoneInput"></a>

```csharp
public string MilestoneInput { get; }
```

- *Type:* string

---

##### `MyReactionEmojiInput`<sup>Optional</sup> <a name="MyReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmojiInput"></a>

```csharp
public string MyReactionEmojiInput { get; }
```

- *Type:* string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReviewerUsernameInput`<sup>Optional</sup> <a name="ReviewerUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsernameInput"></a>

```csharp
public string ReviewerUsernameInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sortInput"></a>

```csharp
public string SortInput { get; }
```

- *Type:* string

---

##### `SourceBranchInput`<sup>Optional</sup> <a name="SourceBranchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranchInput"></a>

```csharp
public string SourceBranchInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TargetBranchInput`<sup>Optional</sup> <a name="TargetBranchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranchInput"></a>

```csharp
public string TargetBranchInput { get; }
```

- *Type:* string

---

##### `UpdatedAfterInput`<sup>Optional</sup> <a name="UpdatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfterInput"></a>

```csharp
public string UpdatedAfterInput { get; }
```

- *Type:* string

---

##### `UpdatedBeforeInput`<sup>Optional</sup> <a name="UpdatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBeforeInput"></a>

```csharp
public string UpdatedBeforeInput { get; }
```

- *Type:* string

---

##### `WipInput`<sup>Optional</sup> <a name="WipInput" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wipInput"></a>

```csharp
public string WipInput { get; }
```

- *Type:* string

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorId"></a>

```csharp
public double AuthorId { get; }
```

- *Type:* double

---

##### `AuthorUsername`<sup>Required</sup> <a name="AuthorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.authorUsername"></a>

```csharp
public string AuthorUsername { get; }
```

- *Type:* string

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; }
```

- *Type:* string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; }
```

- *Type:* string

---

##### `Iids`<sup>Required</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.iids"></a>

```csharp
public double[] Iids { get; }
```

- *Type:* double[]

---

##### `Milestone`<sup>Required</sup> <a name="Milestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.milestone"></a>

```csharp
public string Milestone { get; }
```

- *Type:* string

---

##### `MyReactionEmoji`<sup>Required</sup> <a name="MyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.myReactionEmoji"></a>

```csharp
public string MyReactionEmoji { get; }
```

- *Type:* string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReviewerUsername`<sup>Required</sup> <a name="ReviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.reviewerUsername"></a>

```csharp
public string ReviewerUsername { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sort"></a>

```csharp
public string Sort { get; }
```

- *Type:* string

---

##### `SourceBranch`<sup>Required</sup> <a name="SourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.sourceBranch"></a>

```csharp
public string SourceBranch { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetBranch`<sup>Required</sup> <a name="TargetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.targetBranch"></a>

```csharp
public string TargetBranch { get; }
```

- *Type:* string

---

##### `UpdatedAfter`<sup>Required</sup> <a name="UpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedAfter"></a>

```csharp
public string UpdatedAfter { get; }
```

- *Type:* string

---

##### `UpdatedBefore`<sup>Required</sup> <a name="UpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.updatedBefore"></a>

```csharp
public string UpdatedBefore { get; }
```

- *Type:* string

---

##### `Wip`<sup>Required</sup> <a name="Wip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.wip"></a>

```csharp
public string Wip { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequests.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMergeRequestsConfig <a name="DataGitlabProjectMergeRequestsConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Project,
    double AuthorId = null,
    string AuthorUsername = null,
    string CreatedAfter = null,
    string CreatedBefore = null,
    double[] Iids = null,
    string Milestone = null,
    string MyReactionEmoji = null,
    string OrderBy = null,
    string ReviewerUsername = null,
    string Scope = null,
    string Search = null,
    string Sort = null,
    string SourceBranch = null,
    string State = null,
    string TargetBranch = null,
    string UpdatedAfter = null,
    string UpdatedBefore = null,
    string Wip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.project">Project</a></code> | <code>string</code> | The ID or path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorId">AuthorId</a></code> | <code>double</code> | Return merge requests created by the given user ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorUsername">AuthorUsername</a></code> | <code>string</code> | Return merge requests created by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.iids">Iids</a></code> | <code>double[]</code> | The unique internal IDs of the merge requests. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.milestone">Milestone</a></code> | <code>string</code> | Return only merge requests for a specific milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.myReactionEmoji">MyReactionEmoji</a></code> | <code>string</code> | Return merge requests reacted to by the authenticated user with the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.orderBy">OrderBy</a></code> | <code>string</code> | Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.reviewerUsername">ReviewerUsername</a></code> | <code>string</code> | Return merge requests reviewed by the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.scope">Scope</a></code> | <code>string</code> | Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.search">Search</a></code> | <code>string</code> | Search merge requests against their `title` or `description`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sort">Sort</a></code> | <code>string</code> | Return requests sorted in `asc` or `desc` order. Default is `desc`. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sourceBranch">SourceBranch</a></code> | <code>string</code> | Return merge requests with the given source branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.state">State</a></code> | <code>string</code> | Return all merge requests (all) or just those that are opened, closed, locked, or merged. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.targetBranch">TargetBranch</a></code> | <code>string</code> | Return merge requests with the given target branch. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedAfter">UpdatedAfter</a></code> | <code>string</code> | Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedBefore">UpdatedBefore</a></code> | <code>string</code> | Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.wip">Wip</a></code> | <code>string</code> | Filter merge requests against their wip status. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#project DataGitlabProjectMergeRequests#project}

---

##### `AuthorId`<sup>Optional</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorId"></a>

```csharp
public double AuthorId { get; set; }
```

- *Type:* double

Return merge requests created by the given user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#author_id DataGitlabProjectMergeRequests#author_id}

---

##### `AuthorUsername`<sup>Optional</sup> <a name="AuthorUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.authorUsername"></a>

```csharp
public string AuthorUsername { get; set; }
```

- *Type:* string

Return merge requests created by the given username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#author_username DataGitlabProjectMergeRequests#author_username}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; set; }
```

- *Type:* string

Return merge requests created after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#created_after DataGitlabProjectMergeRequests#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; set; }
```

- *Type:* string

Return merge requests created before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#created_before DataGitlabProjectMergeRequests#created_before}

---

##### `Iids`<sup>Optional</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.iids"></a>

```csharp
public double[] Iids { get; set; }
```

- *Type:* double[]

The unique internal IDs of the merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#iids DataGitlabProjectMergeRequests#iids}

---

##### `Milestone`<sup>Optional</sup> <a name="Milestone" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.milestone"></a>

```csharp
public string Milestone { get; set; }
```

- *Type:* string

Return only merge requests for a specific milestone.

`None` returns merge requests with no milestone. `Any` returns merge requests that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#milestone DataGitlabProjectMergeRequests#milestone}

---

##### `MyReactionEmoji`<sup>Optional</sup> <a name="MyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.myReactionEmoji"></a>

```csharp
public string MyReactionEmoji { get; set; }
```

- *Type:* string

Return merge requests reacted to by the authenticated user with the given emoji.

`None` returns issues not given a reaction. `Any` returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#my_reaction_emoji DataGitlabProjectMergeRequests#my_reaction_emoji}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

Return requests ordered by `created_at`, `title` or `updated_at`. Default is `created_at`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#order_by DataGitlabProjectMergeRequests#order_by}

---

##### `ReviewerUsername`<sup>Optional</sup> <a name="ReviewerUsername" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.reviewerUsername"></a>

```csharp
public string ReviewerUsername { get; set; }
```

- *Type:* string

Return merge requests reviewed by the given username.

`None` returns merge requests with no reviews. `Any` returns merge requests with any reviewer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#reviewer_username DataGitlabProjectMergeRequests#reviewer_username}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Return merge requests for the given scope: `created_by_me`, `assigned_to_me`, or `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#scope DataGitlabProjectMergeRequests#scope}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search merge requests against their `title` or `description`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#search DataGitlabProjectMergeRequests#search}

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sort"></a>

```csharp
public string Sort { get; set; }
```

- *Type:* string

Return requests sorted in `asc` or `desc` order. Default is `desc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#sort DataGitlabProjectMergeRequests#sort}

---

##### `SourceBranch`<sup>Optional</sup> <a name="SourceBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.sourceBranch"></a>

```csharp
public string SourceBranch { get; set; }
```

- *Type:* string

Return merge requests with the given source branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#source_branch DataGitlabProjectMergeRequests#source_branch}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Return all merge requests (all) or just those that are opened, closed, locked, or merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#state DataGitlabProjectMergeRequests#state}

---

##### `TargetBranch`<sup>Optional</sup> <a name="TargetBranch" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.targetBranch"></a>

```csharp
public string TargetBranch { get; set; }
```

- *Type:* string

Return merge requests with the given target branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#target_branch DataGitlabProjectMergeRequests#target_branch}

---

##### `UpdatedAfter`<sup>Optional</sup> <a name="UpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedAfter"></a>

```csharp
public string UpdatedAfter { get; set; }
```

- *Type:* string

Return merge requests updated after the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#updated_after DataGitlabProjectMergeRequests#updated_after}

---

##### `UpdatedBefore`<sup>Optional</sup> <a name="UpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.updatedBefore"></a>

```csharp
public string UpdatedBefore { get; set; }
```

- *Type:* string

Return merge requests updated before the given time. Expected in RFC3339 format (2006-01-02T15:04:05Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#updated_before DataGitlabProjectMergeRequests#updated_before}

---

##### `Wip`<sup>Optional</sup> <a name="Wip" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsConfig.property.wip"></a>

```csharp
public string Wip { get; set; }
```

- *Type:* string

Filter merge requests against their wip status.

`yes` to return only draft merge requests, `no` to return non-draft merge requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/data-sources/project_merge_requests#wip DataGitlabProjectMergeRequests#wip}

---

### DataGitlabProjectMergeRequestsMergeRequests <a name="DataGitlabProjectMergeRequestsMergeRequests" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequests {

};
```


### DataGitlabProjectMergeRequestsMergeRequestsAssignee <a name="DataGitlabProjectMergeRequestsMergeRequestsAssignee" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsAssignee {

};
```


### DataGitlabProjectMergeRequestsMergeRequestsAssignees <a name="DataGitlabProjectMergeRequestsMergeRequestsAssignees" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsAssignees {

};
```


### DataGitlabProjectMergeRequestsMergeRequestsAuthor <a name="DataGitlabProjectMergeRequestsMergeRequestsAuthor" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsAuthor {

};
```


### DataGitlabProjectMergeRequestsMergeRequestsClosedBy <a name="DataGitlabProjectMergeRequestsMergeRequestsClosedBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsClosedBy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee">DataGitlabProjectMergeRequestsMergeRequestsAssignee</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsAssignee InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignee">DataGitlabProjectMergeRequestsMergeRequestsAssignee</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsAssigneesList <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneesList" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsAssigneesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get"></a>

```csharp
private DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees">DataGitlabProjectMergeRequestsMergeRequestsAssignees</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsAssignees InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssignees">DataGitlabProjectMergeRequestsMergeRequestsAssignees</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor">DataGitlabProjectMergeRequestsMergeRequestsAuthor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsAuthor InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthor">DataGitlabProjectMergeRequestsMergeRequestsAuthor</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy">DataGitlabProjectMergeRequestsMergeRequestsClosedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsClosedBy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedBy">DataGitlabProjectMergeRequestsMergeRequestsClosedBy</a>

---


### DataGitlabProjectMergeRequestsMergeRequestsList <a name="DataGitlabProjectMergeRequestsMergeRequestsList" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get"></a>

```csharp
private DataGitlabProjectMergeRequestsMergeRequestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectMergeRequestsMergeRequestsOutputReference <a name="DataGitlabProjectMergeRequestsMergeRequestsOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMergeRequestsMergeRequestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignee">Assignee</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignees">Assignees</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList">DataGitlabProjectMergeRequestsMergeRequestsAssigneesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.author">Author</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.blockingDiscussionsResolved">BlockingDiscussionsResolved</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedAt">ClosedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedBy">ClosedBy</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference">DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.iid">Iid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests">DataGitlabProjectMergeRequestsMergeRequests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Assignee`<sup>Required</sup> <a name="Assignee" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignee"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference Assignee { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAssigneeOutputReference</a>

---

##### `Assignees`<sup>Required</sup> <a name="Assignees" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.assignees"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsAssigneesList Assignees { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAssigneesList">DataGitlabProjectMergeRequestsMergeRequestsAssigneesList</a>

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.author"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference Author { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference">DataGitlabProjectMergeRequestsMergeRequestsAuthorOutputReference</a>

---

##### `BlockingDiscussionsResolved`<sup>Required</sup> <a name="BlockingDiscussionsResolved" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.blockingDiscussionsResolved"></a>

```csharp
public IResolvable BlockingDiscussionsResolved { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClosedAt`<sup>Required</sup> <a name="ClosedAt" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedAt"></a>

```csharp
public string ClosedAt { get; }
```

- *Type:* string

---

##### `ClosedBy`<sup>Required</sup> <a name="ClosedBy" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.closedBy"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference ClosedBy { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference">DataGitlabProjectMergeRequestsMergeRequestsClosedByOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.iid"></a>

```csharp
public double Iid { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequestsOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectMergeRequestsMergeRequests InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMergeRequests.DataGitlabProjectMergeRequestsMergeRequests">DataGitlabProjectMergeRequestsMergeRequests</a>

---




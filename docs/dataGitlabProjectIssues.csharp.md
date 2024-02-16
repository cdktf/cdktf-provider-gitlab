# `dataGitlabProjectIssues` Submodule <a name="`dataGitlabProjectIssues` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectIssues"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectIssues <a name="DataGitlabProjectIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues gitlab_project_issues}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssues(Construct Scope, string Id, DataGitlabProjectIssuesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig">DataGitlabProjectIssuesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig">DataGitlabProjectIssuesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId">ResetAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername">ResetAssigneeUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId">ResetAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential">ResetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate">ResetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids">ResetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType">ResetIssueType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone">ResetMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji">ResetMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId">ResetNotAssigneeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId">ResetNotAuthorId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels">ResetNotLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone">ResetNotMilestone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji">ResetNotMyReactionEmoji</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort">ResetSort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter">ResetUpdatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore">ResetUpdatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight">ResetWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails">ResetWithLabelsDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAssigneeId` <a name="ResetAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeId"></a>

```csharp
private void ResetAssigneeId()
```

##### `ResetAssigneeUsername` <a name="ResetAssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAssigneeUsername"></a>

```csharp
private void ResetAssigneeUsername()
```

##### `ResetAuthorId` <a name="ResetAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetAuthorId"></a>

```csharp
private void ResetAuthorId()
```

##### `ResetConfidential` <a name="ResetConfidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetConfidential"></a>

```csharp
private void ResetConfidential()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedAfter"></a>

```csharp
private void ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetCreatedBefore"></a>

```csharp
private void ResetCreatedBefore()
```

##### `ResetDueDate` <a name="ResetDueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetDueDate"></a>

```csharp
private void ResetDueDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIids` <a name="ResetIids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIids"></a>

```csharp
private void ResetIids()
```

##### `ResetIssueType` <a name="ResetIssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetIssueType"></a>

```csharp
private void ResetIssueType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMilestone` <a name="ResetMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMilestone"></a>

```csharp
private void ResetMilestone()
```

##### `ResetMyReactionEmoji` <a name="ResetMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetMyReactionEmoji"></a>

```csharp
private void ResetMyReactionEmoji()
```

##### `ResetNotAssigneeId` <a name="ResetNotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAssigneeId"></a>

```csharp
private void ResetNotAssigneeId()
```

##### `ResetNotAuthorId` <a name="ResetNotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotAuthorId"></a>

```csharp
private void ResetNotAuthorId()
```

##### `ResetNotLabels` <a name="ResetNotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotLabels"></a>

```csharp
private void ResetNotLabels()
```

##### `ResetNotMilestone` <a name="ResetNotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMilestone"></a>

```csharp
private void ResetNotMilestone()
```

##### `ResetNotMyReactionEmoji` <a name="ResetNotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetNotMyReactionEmoji"></a>

```csharp
private void ResetNotMyReactionEmoji()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetSort` <a name="ResetSort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetSort"></a>

```csharp
private void ResetSort()
```

##### `ResetUpdatedAfter` <a name="ResetUpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedAfter"></a>

```csharp
private void ResetUpdatedAfter()
```

##### `ResetUpdatedBefore` <a name="ResetUpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetUpdatedBefore"></a>

```csharp
private void ResetUpdatedBefore()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWeight"></a>

```csharp
private void ResetWeight()
```

##### `ResetWithLabelsDetails` <a name="ResetWithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.resetWithLabelsDetails"></a>

```csharp
private void ResetWithLabelsDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectIssues resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectIssues.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectIssues.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectIssues.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectIssues.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabProjectIssues resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectIssues to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectIssues that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectIssues to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues">Issues</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput">AssigneeIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput">AssigneeUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput">AuthorIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput">ConfidentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput">CreatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput">DueDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput">IidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput">IssueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput">MilestoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput">MyReactionEmojiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput">NotAssigneeIdInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput">NotAuthorIdInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput">NotLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput">NotMilestoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput">NotMyReactionEmojiInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput">SortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput">UpdatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput">UpdatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput">WithLabelsDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId">AssigneeId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername">AssigneeUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId">AuthorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential">Confidential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate">DueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids">Iids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType">IssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone">Milestone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji">MyReactionEmoji</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId">NotAssigneeId</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId">NotAuthorId</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels">NotLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone">NotMilestone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji">NotMyReactionEmoji</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort">Sort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter">UpdatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore">UpdatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails">WithLabelsDetails</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issues"></a>

```csharp
public DataGitlabProjectIssuesIssuesList Issues { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList">DataGitlabProjectIssuesIssuesList</a>

---

##### `AssigneeIdInput`<sup>Optional</sup> <a name="AssigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeIdInput"></a>

```csharp
public double AssigneeIdInput { get; }
```

- *Type:* double

---

##### `AssigneeUsernameInput`<sup>Optional</sup> <a name="AssigneeUsernameInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsernameInput"></a>

```csharp
public string AssigneeUsernameInput { get; }
```

- *Type:* string

---

##### `AuthorIdInput`<sup>Optional</sup> <a name="AuthorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorIdInput"></a>

```csharp
public double AuthorIdInput { get; }
```

- *Type:* double

---

##### `ConfidentialInput`<sup>Optional</sup> <a name="ConfidentialInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidentialInput"></a>

```csharp
public object ConfidentialInput { get; }
```

- *Type:* object

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfterInput"></a>

```csharp
public string CreatedAfterInput { get; }
```

- *Type:* string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBeforeInput"></a>

```csharp
public string CreatedBeforeInput { get; }
```

- *Type:* string

---

##### `DueDateInput`<sup>Optional</sup> <a name="DueDateInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDateInput"></a>

```csharp
public string DueDateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IidsInput`<sup>Optional</sup> <a name="IidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iidsInput"></a>

```csharp
public double[] IidsInput { get; }
```

- *Type:* double[]

---

##### `IssueTypeInput`<sup>Optional</sup> <a name="IssueTypeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueTypeInput"></a>

```csharp
public string IssueTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `MilestoneInput`<sup>Optional</sup> <a name="MilestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestoneInput"></a>

```csharp
public string MilestoneInput { get; }
```

- *Type:* string

---

##### `MyReactionEmojiInput`<sup>Optional</sup> <a name="MyReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmojiInput"></a>

```csharp
public string MyReactionEmojiInput { get; }
```

- *Type:* string

---

##### `NotAssigneeIdInput`<sup>Optional</sup> <a name="NotAssigneeIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeIdInput"></a>

```csharp
public double[] NotAssigneeIdInput { get; }
```

- *Type:* double[]

---

##### `NotAuthorIdInput`<sup>Optional</sup> <a name="NotAuthorIdInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorIdInput"></a>

```csharp
public double[] NotAuthorIdInput { get; }
```

- *Type:* double[]

---

##### `NotLabelsInput`<sup>Optional</sup> <a name="NotLabelsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabelsInput"></a>

```csharp
public string[] NotLabelsInput { get; }
```

- *Type:* string[]

---

##### `NotMilestoneInput`<sup>Optional</sup> <a name="NotMilestoneInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestoneInput"></a>

```csharp
public string NotMilestoneInput { get; }
```

- *Type:* string

---

##### `NotMyReactionEmojiInput`<sup>Optional</sup> <a name="NotMyReactionEmojiInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmojiInput"></a>

```csharp
public string[] NotMyReactionEmojiInput { get; }
```

- *Type:* string[]

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `SortInput`<sup>Optional</sup> <a name="SortInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sortInput"></a>

```csharp
public string SortInput { get; }
```

- *Type:* string

---

##### `UpdatedAfterInput`<sup>Optional</sup> <a name="UpdatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfterInput"></a>

```csharp
public string UpdatedAfterInput { get; }
```

- *Type:* string

---

##### `UpdatedBeforeInput`<sup>Optional</sup> <a name="UpdatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBeforeInput"></a>

```csharp
public string UpdatedBeforeInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `WithLabelsDetailsInput`<sup>Optional</sup> <a name="WithLabelsDetailsInput" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetailsInput"></a>

```csharp
public object WithLabelsDetailsInput { get; }
```

- *Type:* object

---

##### `AssigneeId`<sup>Required</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeId"></a>

```csharp
public double AssigneeId { get; }
```

- *Type:* double

---

##### `AssigneeUsername`<sup>Required</sup> <a name="AssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.assigneeUsername"></a>

```csharp
public string AssigneeUsername { get; }
```

- *Type:* string

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.authorId"></a>

```csharp
public double AuthorId { get; }
```

- *Type:* double

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.confidential"></a>

```csharp
public object Confidential { get; }
```

- *Type:* object

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; }
```

- *Type:* string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; }
```

- *Type:* string

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.dueDate"></a>

```csharp
public string DueDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Iids`<sup>Required</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.iids"></a>

```csharp
public double[] Iids { get; }
```

- *Type:* double[]

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.issueType"></a>

```csharp
public string IssueType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Milestone`<sup>Required</sup> <a name="Milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.milestone"></a>

```csharp
public string Milestone { get; }
```

- *Type:* string

---

##### `MyReactionEmoji`<sup>Required</sup> <a name="MyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.myReactionEmoji"></a>

```csharp
public string MyReactionEmoji { get; }
```

- *Type:* string

---

##### `NotAssigneeId`<sup>Required</sup> <a name="NotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAssigneeId"></a>

```csharp
public double[] NotAssigneeId { get; }
```

- *Type:* double[]

---

##### `NotAuthorId`<sup>Required</sup> <a name="NotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notAuthorId"></a>

```csharp
public double[] NotAuthorId { get; }
```

- *Type:* double[]

---

##### `NotLabels`<sup>Required</sup> <a name="NotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notLabels"></a>

```csharp
public string[] NotLabels { get; }
```

- *Type:* string[]

---

##### `NotMilestone`<sup>Required</sup> <a name="NotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMilestone"></a>

```csharp
public string NotMilestone { get; }
```

- *Type:* string

---

##### `NotMyReactionEmoji`<sup>Required</sup> <a name="NotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.notMyReactionEmoji"></a>

```csharp
public string[] NotMyReactionEmoji { get; }
```

- *Type:* string[]

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Sort`<sup>Required</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.sort"></a>

```csharp
public string Sort { get; }
```

- *Type:* string

---

##### `UpdatedAfter`<sup>Required</sup> <a name="UpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedAfter"></a>

```csharp
public string UpdatedAfter { get; }
```

- *Type:* string

---

##### `UpdatedBefore`<sup>Required</sup> <a name="UpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.updatedBefore"></a>

```csharp
public string UpdatedBefore { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `WithLabelsDetails`<sup>Required</sup> <a name="WithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.withLabelsDetails"></a>

```csharp
public object WithLabelsDetails { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssues.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectIssuesConfig <a name="DataGitlabProjectIssuesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssuesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    double AssigneeId = null,
    string AssigneeUsername = null,
    double AuthorId = null,
    object Confidential = null,
    string CreatedAfter = null,
    string CreatedBefore = null,
    string DueDate = null,
    string Id = null,
    double[] Iids = null,
    string IssueType = null,
    string[] Labels = null,
    string Milestone = null,
    string MyReactionEmoji = null,
    double[] NotAssigneeId = null,
    double[] NotAuthorId = null,
    string[] NotLabels = null,
    string NotMilestone = null,
    string[] NotMyReactionEmoji = null,
    string OrderBy = null,
    string Scope = null,
    string Search = null,
    string Sort = null,
    string UpdatedAfter = null,
    string UpdatedBefore = null,
    double Weight = null,
    object WithLabelsDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project">Project</a></code> | <code>string</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId">AssigneeId</a></code> | <code>double</code> | Return issues assigned to the given user id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername">AssigneeUsername</a></code> | <code>string</code> | Return issues assigned to the given username. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId">AuthorId</a></code> | <code>double</code> | Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential">Confidential</a></code> | <code>object</code> | Filter confidential or public issues. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate">DueDate</a></code> | <code>string</code> | Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids">Iids</a></code> | <code>double[]</code> | Return only the issues having the given iid. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType">IssueType</a></code> | <code>string</code> | Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels">Labels</a></code> | <code>string[]</code> | Return issues with labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone">Milestone</a></code> | <code>string</code> | The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji">MyReactionEmoji</a></code> | <code>string</code> | Return issues reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId">NotAssigneeId</a></code> | <code>double[]</code> | Return issues that do not match the assignee id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId">NotAuthorId</a></code> | <code>double[]</code> | Return issues that do not match the author id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels">NotLabels</a></code> | <code>string[]</code> | Return issues that do not match the labels. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone">NotMilestone</a></code> | <code>string</code> | Return issues that do not match the milestone. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji">NotMyReactionEmoji</a></code> | <code>string[]</code> | Return issues not reacted by the authenticated user by the given emoji. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy">OrderBy</a></code> | <code>string</code> | Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope">Scope</a></code> | <code>string</code> | Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search">Search</a></code> | <code>string</code> | Search project issues against their title and description. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort">Sort</a></code> | <code>string</code> | Return issues sorted in asc or desc order. Default is desc. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter">UpdatedAfter</a></code> | <code>string</code> | Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore">UpdatedBefore</a></code> | <code>string</code> | Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight">Weight</a></code> | <code>double</code> | Return issues with the specified weight. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails">WithLabelsDetails</a></code> | <code>object</code> | If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#project DataGitlabProjectIssues#project}

---

##### `AssigneeId`<sup>Optional</sup> <a name="AssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeId"></a>

```csharp
public double AssigneeId { get; set; }
```

- *Type:* double

Return issues assigned to the given user id.

Mutually exclusive with assignee_username. None returns unassigned issues. Any returns issues with an assignee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#assignee_id DataGitlabProjectIssues#assignee_id}

---

##### `AssigneeUsername`<sup>Optional</sup> <a name="AssigneeUsername" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.assigneeUsername"></a>

```csharp
public string AssigneeUsername { get; set; }
```

- *Type:* string

Return issues assigned to the given username.

Similar to assignee_id and mutually exclusive with assignee_id. In GitLab CE, the assignee_username array should only contain a single value. Otherwise, an invalid parameter error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#assignee_username DataGitlabProjectIssues#assignee_username}

---

##### `AuthorId`<sup>Optional</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.authorId"></a>

```csharp
public double AuthorId { get; set; }
```

- *Type:* double

Return issues created by the given user id. Combine with scope=all or scope=assigned_to_me.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#author_id DataGitlabProjectIssues#author_id}

---

##### `Confidential`<sup>Optional</sup> <a name="Confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.confidential"></a>

```csharp
public object Confidential { get; set; }
```

- *Type:* object

Filter confidential or public issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#confidential DataGitlabProjectIssues#confidential}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; set; }
```

- *Type:* string

Return issues created on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#created_after DataGitlabProjectIssues#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; set; }
```

- *Type:* string

Return issues created on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#created_before DataGitlabProjectIssues#created_before}

---

##### `DueDate`<sup>Optional</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.dueDate"></a>

```csharp
public string DueDate { get; set; }
```

- *Type:* string

Return issues that have no due date, are overdue, or whose due date is this week, this month, or between two weeks ago and next month.

Accepts: 0 (no due date), any, today, tomorrow, overdue, week, month, next_month_and_previous_two_weeks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#due_date DataGitlabProjectIssues#due_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#id DataGitlabProjectIssues#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iids`<sup>Optional</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.iids"></a>

```csharp
public double[] Iids { get; set; }
```

- *Type:* double[]

Return only the issues having the given iid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#iids DataGitlabProjectIssues#iids}

---

##### `IssueType`<sup>Optional</sup> <a name="IssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.issueType"></a>

```csharp
public string IssueType { get; set; }
```

- *Type:* string

Filter to a given type of issue. Valid values are [issue incident test_case]. (Introduced in GitLab 13.12).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#issue_type DataGitlabProjectIssues#issue_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Return issues with labels.

Issues must have all labels to be returned. None lists all issues with no labels. Any lists all issues with at least one label. No+Label (Deprecated) lists all issues with no labels. Predefined names are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#labels DataGitlabProjectIssues#labels}

---

##### `Milestone`<sup>Optional</sup> <a name="Milestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.milestone"></a>

```csharp
public string Milestone { get; set; }
```

- *Type:* string

The milestone title. None lists all issues with no milestone. Any lists all issues that have an assigned milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#milestone DataGitlabProjectIssues#milestone}

---

##### `MyReactionEmoji`<sup>Optional</sup> <a name="MyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.myReactionEmoji"></a>

```csharp
public string MyReactionEmoji { get; set; }
```

- *Type:* string

Return issues reacted by the authenticated user by the given emoji.

None returns issues not given a reaction. Any returns issues given at least one reaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#my_reaction_emoji DataGitlabProjectIssues#my_reaction_emoji}

---

##### `NotAssigneeId`<sup>Optional</sup> <a name="NotAssigneeId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAssigneeId"></a>

```csharp
public double[] NotAssigneeId { get; set; }
```

- *Type:* double[]

Return issues that do not match the assignee id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#not_assignee_id DataGitlabProjectIssues#not_assignee_id}

---

##### `NotAuthorId`<sup>Optional</sup> <a name="NotAuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notAuthorId"></a>

```csharp
public double[] NotAuthorId { get; set; }
```

- *Type:* double[]

Return issues that do not match the author id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#not_author_id DataGitlabProjectIssues#not_author_id}

---

##### `NotLabels`<sup>Optional</sup> <a name="NotLabels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notLabels"></a>

```csharp
public string[] NotLabels { get; set; }
```

- *Type:* string[]

Return issues that do not match the labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#not_labels DataGitlabProjectIssues#not_labels}

---

##### `NotMilestone`<sup>Optional</sup> <a name="NotMilestone" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMilestone"></a>

```csharp
public string NotMilestone { get; set; }
```

- *Type:* string

Return issues that do not match the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#not_milestone DataGitlabProjectIssues#not_milestone}

---

##### `NotMyReactionEmoji`<sup>Optional</sup> <a name="NotMyReactionEmoji" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.notMyReactionEmoji"></a>

```csharp
public string[] NotMyReactionEmoji { get; set; }
```

- *Type:* string[]

Return issues not reacted by the authenticated user by the given emoji.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#not_my_reaction_emoji DataGitlabProjectIssues#not_my_reaction_emoji}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

Return issues ordered by. Valid values are `created_at`, `updated_at`, `priority`, `due_date`, `relative_position`, `label_priority`, `milestone_due`, `popularity`, `weight`. Default is created_at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#order_by DataGitlabProjectIssues#order_by}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Return issues for the given scope. Valid values are `created_by_me`, `assigned_to_me`, `all`. Defaults to all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#scope DataGitlabProjectIssues#scope}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Search project issues against their title and description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#search DataGitlabProjectIssues#search}

---

##### `Sort`<sup>Optional</sup> <a name="Sort" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.sort"></a>

```csharp
public string Sort { get; set; }
```

- *Type:* string

Return issues sorted in asc or desc order. Default is desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#sort DataGitlabProjectIssues#sort}

---

##### `UpdatedAfter`<sup>Optional</sup> <a name="UpdatedAfter" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedAfter"></a>

```csharp
public string UpdatedAfter { get; set; }
```

- *Type:* string

Return issues updated on or after the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#updated_after DataGitlabProjectIssues#updated_after}

---

##### `UpdatedBefore`<sup>Optional</sup> <a name="UpdatedBefore" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.updatedBefore"></a>

```csharp
public string UpdatedBefore { get; set; }
```

- *Type:* string

Return issues updated on or before the given time. Expected in ISO 8601 format (2019-03-15T08:00:00Z).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#updated_before DataGitlabProjectIssues#updated_before}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Return issues with the specified weight.

None returns issues with no weight assigned. Any returns issues with a weight assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#weight DataGitlabProjectIssues#weight}

---

##### `WithLabelsDetails`<sup>Optional</sup> <a name="WithLabelsDetails" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesConfig.property.withLabelsDetails"></a>

```csharp
public object WithLabelsDetails { get; set; }
```

- *Type:* object

If true, the response returns more details for each label in labels field: :name, :color, :description, :description_html, :text_color.

Default is false. description_html was introduced in GitLab 12.7

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.9.1/docs/data-sources/project_issues#with_labels_details DataGitlabProjectIssues#with_labels_details}

---

### DataGitlabProjectIssuesIssues <a name="DataGitlabProjectIssuesIssues" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssuesIssues {

};
```


### DataGitlabProjectIssuesIssuesTaskCompletionStatus <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssuesIssuesTaskCompletionStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectIssuesIssuesList <a name="DataGitlabProjectIssuesIssuesList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssuesIssuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get"></a>

```csharp
private DataGitlabProjectIssuesIssuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectIssuesIssuesOutputReference <a name="DataGitlabProjectIssuesIssuesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssuesIssuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds">AssigneeIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId">AuthorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt">ClosedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId">ClosedByUserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential">Confidential</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked">DiscussionLocked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve">DiscussionToResolve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes">Downvotes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate">DueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId">EpicId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId">EpicIssueId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate">HumanTimeEstimate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent">HumanTotalTimeSpent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid">Iid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId">IssueId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId">IssueLinkId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType">IssueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links">Links</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount">MergeRequestsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf">MergeRequestToResolveDiscussionsOf</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId">MilestoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId">MovedToId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references">References</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed">Subscribed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus">TaskCompletionStatus</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate">TimeEstimate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent">TotalTimeSpent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes">Upvotes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount">UserNotesCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssigneeIds`<sup>Required</sup> <a name="AssigneeIds" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.assigneeIds"></a>

```csharp
public double[] AssigneeIds { get; }
```

- *Type:* double[]

---

##### `AuthorId`<sup>Required</sup> <a name="AuthorId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.authorId"></a>

```csharp
public double AuthorId { get; }
```

- *Type:* double

---

##### `ClosedAt`<sup>Required</sup> <a name="ClosedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedAt"></a>

```csharp
public string ClosedAt { get; }
```

- *Type:* string

---

##### `ClosedByUserId`<sup>Required</sup> <a name="ClosedByUserId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.closedByUserId"></a>

```csharp
public double ClosedByUserId { get; }
```

- *Type:* double

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.confidential"></a>

```csharp
public IResolvable Confidential { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscussionLocked`<sup>Required</sup> <a name="DiscussionLocked" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionLocked"></a>

```csharp
public IResolvable DiscussionLocked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DiscussionToResolve`<sup>Required</sup> <a name="DiscussionToResolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.discussionToResolve"></a>

```csharp
public string DiscussionToResolve { get; }
```

- *Type:* string

---

##### `Downvotes`<sup>Required</sup> <a name="Downvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.downvotes"></a>

```csharp
public double Downvotes { get; }
```

- *Type:* double

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.dueDate"></a>

```csharp
public string DueDate { get; }
```

- *Type:* string

---

##### `EpicId`<sup>Required</sup> <a name="EpicId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicId"></a>

```csharp
public double EpicId { get; }
```

- *Type:* double

---

##### `EpicIssueId`<sup>Required</sup> <a name="EpicIssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.epicIssueId"></a>

```csharp
public double EpicIssueId { get; }
```

- *Type:* double

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `HumanTimeEstimate`<sup>Required</sup> <a name="HumanTimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTimeEstimate"></a>

```csharp
public string HumanTimeEstimate { get; }
```

- *Type:* string

---

##### `HumanTotalTimeSpent`<sup>Required</sup> <a name="HumanTotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.humanTotalTimeSpent"></a>

```csharp
public string HumanTotalTimeSpent { get; }
```

- *Type:* string

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.iid"></a>

```csharp
public double Iid { get; }
```

- *Type:* double

---

##### `IssueId`<sup>Required</sup> <a name="IssueId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueId"></a>

```csharp
public double IssueId { get; }
```

- *Type:* double

---

##### `IssueLinkId`<sup>Required</sup> <a name="IssueLinkId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueLinkId"></a>

```csharp
public double IssueLinkId { get; }
```

- *Type:* double

---

##### `IssueType`<sup>Required</sup> <a name="IssueType" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.issueType"></a>

```csharp
public string IssueType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.links"></a>

```csharp
public StringMap Links { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MergeRequestsCount`<sup>Required</sup> <a name="MergeRequestsCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestsCount"></a>

```csharp
public double MergeRequestsCount { get; }
```

- *Type:* double

---

##### `MergeRequestToResolveDiscussionsOf`<sup>Required</sup> <a name="MergeRequestToResolveDiscussionsOf" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.mergeRequestToResolveDiscussionsOf"></a>

```csharp
public double MergeRequestToResolveDiscussionsOf { get; }
```

- *Type:* double

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.milestoneId"></a>

```csharp
public double MilestoneId { get; }
```

- *Type:* double

---

##### `MovedToId`<sup>Required</sup> <a name="MovedToId" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.movedToId"></a>

```csharp
public double MovedToId { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.references"></a>

```csharp
public StringMap References { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Subscribed`<sup>Required</sup> <a name="Subscribed" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.subscribed"></a>

```csharp
public IResolvable Subscribed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TaskCompletionStatus`<sup>Required</sup> <a name="TaskCompletionStatus" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.taskCompletionStatus"></a>

```csharp
public DataGitlabProjectIssuesIssuesTaskCompletionStatusList TaskCompletionStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList">DataGitlabProjectIssuesIssuesTaskCompletionStatusList</a>

---

##### `TimeEstimate`<sup>Required</sup> <a name="TimeEstimate" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.timeEstimate"></a>

```csharp
public double TimeEstimate { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `TotalTimeSpent`<sup>Required</sup> <a name="TotalTimeSpent" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.totalTimeSpent"></a>

```csharp
public double TotalTimeSpent { get; }
```

- *Type:* double

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Upvotes`<sup>Required</sup> <a name="Upvotes" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.upvotes"></a>

```csharp
public double Upvotes { get; }
```

- *Type:* double

---

##### `UserNotesCount`<sup>Required</sup> <a name="UserNotesCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.userNotesCount"></a>

```csharp
public double UserNotesCount { get; }
```

- *Type:* double

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectIssuesIssues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssues">DataGitlabProjectIssuesIssues</a>

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusList <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusList" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssuesIssuesTaskCompletionStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get"></a>

```csharp
private DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference <a name="DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount">CompletedCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompletedCount`<sup>Required</sup> <a name="CompletedCount" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.completedCount"></a>

```csharp
public double CompletedCount { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatusOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectIssuesIssuesTaskCompletionStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectIssues.DataGitlabProjectIssuesIssuesTaskCompletionStatus">DataGitlabProjectIssuesIssuesTaskCompletionStatus</a>

---




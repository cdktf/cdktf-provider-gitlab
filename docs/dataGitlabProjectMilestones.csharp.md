# `dataGitlabProjectMilestones` Submodule <a name="`dataGitlabProjectMilestones` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectMilestones <a name="DataGitlabProjectMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones gitlab_project_milestones}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMilestones(Construct Scope, string Id, DataGitlabProjectMilestonesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig">DataGitlabProjectMilestonesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig">DataGitlabProjectMilestonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIids">ResetIids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIncludeParentMilestones">ResetIncludeParentMilestones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIids` <a name="ResetIids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIids"></a>

```csharp
private void ResetIids()
```

##### `ResetIncludeParentMilestones` <a name="ResetIncludeParentMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetIncludeParentMilestones"></a>

```csharp
private void ResetIncludeParentMilestones()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.resetTitle"></a>

```csharp
private void ResetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectMilestones resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMilestones.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMilestones.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMilestones.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectMilestones.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabProjectMilestones resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectMilestones to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectMilestones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectMilestones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.milestones">Milestones</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList">DataGitlabProjectMilestonesMilestonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iidsInput">IidsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestonesInput">IncludeParentMilestonesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iids">Iids</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestones">IncludeParentMilestones</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Milestones`<sup>Required</sup> <a name="Milestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.milestones"></a>

```csharp
public DataGitlabProjectMilestonesMilestonesList Milestones { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList">DataGitlabProjectMilestonesMilestonesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IidsInput`<sup>Optional</sup> <a name="IidsInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iidsInput"></a>

```csharp
public double[] IidsInput { get; }
```

- *Type:* double[]

---

##### `IncludeParentMilestonesInput`<sup>Optional</sup> <a name="IncludeParentMilestonesInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestonesInput"></a>

```csharp
public object IncludeParentMilestonesInput { get; }
```

- *Type:* object

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Iids`<sup>Required</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.iids"></a>

```csharp
public double[] Iids { get; }
```

- *Type:* double[]

---

##### `IncludeParentMilestones`<sup>Required</sup> <a name="IncludeParentMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.includeParentMilestones"></a>

```csharp
public object IncludeParentMilestones { get; }
```

- *Type:* object

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestones.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectMilestonesConfig <a name="DataGitlabProjectMilestonesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMilestonesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string Id = null,
    double[] Iids = null,
    object IncludeParentMilestones = null,
    string Search = null,
    string State = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.project">Project</a></code> | <code>string</code> | The ID or URL-encoded path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#id DataGitlabProjectMilestones#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.iids">Iids</a></code> | <code>double[]</code> | Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.includeParentMilestones">IncludeParentMilestones</a></code> | <code>object</code> | Include group milestones from parent group and its ancestors. Introduced in GitLab 13.4. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.search">Search</a></code> | <code>string</code> | Return only milestones with a title or description matching the provided string. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.state">State</a></code> | <code>string</code> | Return only `active` or `closed` milestones. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.title">Title</a></code> | <code>string</code> | Return only the milestones having the given `title`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or URL-encoded path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#project DataGitlabProjectMilestones#project}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#id DataGitlabProjectMilestones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Iids`<sup>Optional</sup> <a name="Iids" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.iids"></a>

```csharp
public double[] Iids { get; set; }
```

- *Type:* double[]

Return only the milestones having the given `iid` (Note: ignored if `include_parent_milestones` is set as `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#iids DataGitlabProjectMilestones#iids}

---

##### `IncludeParentMilestones`<sup>Optional</sup> <a name="IncludeParentMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.includeParentMilestones"></a>

```csharp
public object IncludeParentMilestones { get; set; }
```

- *Type:* object

Include group milestones from parent group and its ancestors. Introduced in GitLab 13.4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#include_parent_milestones DataGitlabProjectMilestones#include_parent_milestones}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

Return only milestones with a title or description matching the provided string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#search DataGitlabProjectMilestones#search}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Return only `active` or `closed` milestones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#state DataGitlabProjectMilestones#state}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Return only the milestones having the given `title`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.0/docs/data-sources/project_milestones#title DataGitlabProjectMilestones#title}

---

### DataGitlabProjectMilestonesMilestones <a name="DataGitlabProjectMilestonesMilestones" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMilestonesMilestones {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectMilestonesMilestonesList <a name="DataGitlabProjectMilestonesMilestonesList" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMilestonesMilestonesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get"></a>

```csharp
private DataGitlabProjectMilestonesMilestonesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectMilestonesMilestonesOutputReference <a name="DataGitlabProjectMilestonesMilestonesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectMilestonesMilestonesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.dueDate">DueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.expired">Expired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.iid">Iid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.milestoneId">MilestoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.projectId">ProjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones">DataGitlabProjectMilestonesMilestones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.dueDate"></a>

```csharp
public string DueDate { get; }
```

- *Type:* string

---

##### `Expired`<sup>Required</sup> <a name="Expired" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.expired"></a>

```csharp
public IResolvable Expired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Iid`<sup>Required</sup> <a name="Iid" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.iid"></a>

```csharp
public double Iid { get; }
```

- *Type:* double

---

##### `MilestoneId`<sup>Required</sup> <a name="MilestoneId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.milestoneId"></a>

```csharp
public double MilestoneId { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.projectId"></a>

```csharp
public double ProjectId { get; }
```

- *Type:* double

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestonesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectMilestonesMilestones InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectMilestones.DataGitlabProjectMilestonesMilestones">DataGitlabProjectMilestonesMilestones</a>

---




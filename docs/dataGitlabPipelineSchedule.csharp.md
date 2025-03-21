# `dataGitlabPipelineSchedule` Submodule <a name="`dataGitlabPipelineSchedule` Submodule" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabPipelineSchedule <a name="DataGitlabPipelineSchedule" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/pipeline_schedule gitlab_pipeline_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedule(Construct Scope, string Id, DataGitlabPipelineScheduleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig">DataGitlabPipelineScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig">DataGitlabPipelineScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetCronTimezone">ResetCronTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCronTimezone` <a name="ResetCronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.resetCronTimezone"></a>

```csharp
private void ResetCronTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabPipelineSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabPipelineSchedule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabPipelineSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabPipelineSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/pipeline_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabPipelineSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cron">Cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lastPipeline">LastPipeline</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference">DataGitlabPipelineScheduleLastPipelineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.nextRunAt">NextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.owner">Owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference">DataGitlabPipelineScheduleOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.variables">Variables</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList">DataGitlabPipelineScheduleVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezoneInput">CronTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleIdInput">PipelineScheduleIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezone">CronTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleId">PipelineScheduleId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cron"></a>

```csharp
public string Cron { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastPipeline`<sup>Required</sup> <a name="LastPipeline" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.lastPipeline"></a>

```csharp
public DataGitlabPipelineScheduleLastPipelineOutputReference LastPipeline { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference">DataGitlabPipelineScheduleLastPipelineOutputReference</a>

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.nextRunAt"></a>

```csharp
public string NextRunAt { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.owner"></a>

```csharp
public DataGitlabPipelineScheduleOwnerOutputReference Owner { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference">DataGitlabPipelineScheduleOwnerOutputReference</a>

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.variables"></a>

```csharp
public DataGitlabPipelineScheduleVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList">DataGitlabPipelineScheduleVariablesList</a>

---

##### `CronTimezoneInput`<sup>Optional</sup> <a name="CronTimezoneInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezoneInput"></a>

```csharp
public string CronTimezoneInput { get; }
```

- *Type:* string

---

##### `PipelineScheduleIdInput`<sup>Optional</sup> <a name="PipelineScheduleIdInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleIdInput"></a>

```csharp
public double PipelineScheduleIdInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `CronTimezone`<sup>Required</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.cronTimezone"></a>

```csharp
public string CronTimezone { get; }
```

- *Type:* string

---

##### `PipelineScheduleId`<sup>Required</sup> <a name="PipelineScheduleId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.pipelineScheduleId"></a>

```csharp
public double PipelineScheduleId { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabPipelineScheduleConfig <a name="DataGitlabPipelineScheduleConfig" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double PipelineScheduleId,
    string Project,
    string CronTimezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.pipelineScheduleId">PipelineScheduleId</a></code> | <code>double</code> | The pipeline schedule id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.project">Project</a></code> | <code>string</code> | The name or id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.cronTimezone">CronTimezone</a></code> | <code>string</code> | The timezone. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PipelineScheduleId`<sup>Required</sup> <a name="PipelineScheduleId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.pipelineScheduleId"></a>

```csharp
public double PipelineScheduleId { get; set; }
```

- *Type:* double

The pipeline schedule id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/pipeline_schedule#pipeline_schedule_id DataGitlabPipelineSchedule#pipeline_schedule_id}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/pipeline_schedule#project DataGitlabPipelineSchedule#project}

---

##### `CronTimezone`<sup>Optional</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleConfig.property.cronTimezone"></a>

```csharp
public string CronTimezone { get; set; }
```

- *Type:* string

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/data-sources/pipeline_schedule#cron_timezone DataGitlabPipelineSchedule#cron_timezone}

---

### DataGitlabPipelineScheduleLastPipeline <a name="DataGitlabPipelineScheduleLastPipeline" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleLastPipeline {

};
```


### DataGitlabPipelineScheduleOwner <a name="DataGitlabPipelineScheduleOwner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleOwner {

};
```


### DataGitlabPipelineScheduleVariables <a name="DataGitlabPipelineScheduleVariables" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleVariables {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabPipelineScheduleLastPipelineOutputReference <a name="DataGitlabPipelineScheduleLastPipelineOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleLastPipelineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.sha">Sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline">DataGitlabPipelineScheduleLastPipeline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.sha"></a>

```csharp
public string Sha { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipelineOutputReference.property.internalValue"></a>

```csharp
public DataGitlabPipelineScheduleLastPipeline InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleLastPipeline">DataGitlabPipelineScheduleLastPipeline</a>

---


### DataGitlabPipelineScheduleOwnerOutputReference <a name="DataGitlabPipelineScheduleOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleOwnerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner">DataGitlabPipelineScheduleOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwnerOutputReference.property.internalValue"></a>

```csharp
public DataGitlabPipelineScheduleOwner InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleOwner">DataGitlabPipelineScheduleOwner</a>

---


### DataGitlabPipelineScheduleVariablesList <a name="DataGitlabPipelineScheduleVariablesList" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.get"></a>

```csharp
private DataGitlabPipelineScheduleVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabPipelineScheduleVariablesOutputReference <a name="DataGitlabPipelineScheduleVariablesOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineScheduleVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables">DataGitlabPipelineScheduleVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariablesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabPipelineScheduleVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedule.DataGitlabPipelineScheduleVariables">DataGitlabPipelineScheduleVariables</a>

---




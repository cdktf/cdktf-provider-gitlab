# `dataGitlabPipelineSchedules` Submodule <a name="`dataGitlabPipelineSchedules` Submodule" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabPipelineSchedules <a name="DataGitlabPipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedules gitlab_pipeline_schedules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedules(Construct Scope, string Id, DataGitlabPipelineSchedulesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig">DataGitlabPipelineSchedulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig">DataGitlabPipelineSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabPipelineSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabPipelineSchedules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabPipelineSchedules resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabPipelineSchedules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabPipelineSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabPipelineSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.pipelineSchedules">PipelineSchedules</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList">DataGitlabPipelineSchedulesPipelineSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PipelineSchedules`<sup>Required</sup> <a name="PipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.pipelineSchedules"></a>

```csharp
public DataGitlabPipelineSchedulesPipelineSchedulesList PipelineSchedules { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList">DataGitlabPipelineSchedulesPipelineSchedulesList</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabPipelineSchedulesConfig <a name="DataGitlabPipelineSchedulesConfig" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedulesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.project">Project</a></code> | <code>string</code> | The name or id of the project to add the schedule to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedules#project DataGitlabPipelineSchedules#project}

---

### DataGitlabPipelineSchedulesPipelineSchedules <a name="DataGitlabPipelineSchedulesPipelineSchedules" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedulesPipelineSchedules {
    double Id,
    string CronTimezone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.id">Id</a></code> | <code>double</code> | The pipeline schedule id. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.cronTimezone">CronTimezone</a></code> | <code>string</code> | The timezone. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

The pipeline schedule id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedules#id DataGitlabPipelineSchedules#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `CronTimezone`<sup>Optional</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules.property.cronTimezone"></a>

```csharp
public string CronTimezone { get; set; }
```

- *Type:* string

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.9.0/docs/data-sources/pipeline_schedules#cron_timezone DataGitlabPipelineSchedules#cron_timezone}

---

### DataGitlabPipelineSchedulesPipelineSchedulesOwner <a name="DataGitlabPipelineSchedulesPipelineSchedulesOwner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedulesPipelineSchedulesOwner {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabPipelineSchedulesPipelineSchedulesList <a name="DataGitlabPipelineSchedulesPipelineSchedulesList" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedulesPipelineSchedulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get"></a>

```csharp
private DataGitlabPipelineSchedulesPipelineSchedulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataGitlabPipelineSchedulesPipelineSchedulesOutputReference <a name="DataGitlabPipelineSchedulesPipelineSchedulesOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedulesPipelineSchedulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resetCronTimezone">ResetCronTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCronTimezone` <a name="ResetCronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.resetCronTimezone"></a>

```csharp
private void ResetCronTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cron">Cron</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.nextRunAt">NextRunAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.owner">Owner</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference">DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezoneInput">CronTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezone">CronTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cron"></a>

```csharp
public string Cron { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NextRunAt`<sup>Required</sup> <a name="NextRunAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.nextRunAt"></a>

```csharp
public string NextRunAt { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.owner"></a>

```csharp
public DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference Owner { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference">DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference</a>

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `CronTimezoneInput`<sup>Optional</sup> <a name="CronTimezoneInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezoneInput"></a>

```csharp
public string CronTimezoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `CronTimezone`<sup>Required</sup> <a name="CronTimezone" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.cronTimezone"></a>

```csharp
public string CronTimezone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabPipelineSchedulesPipelineSchedules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedules">DataGitlabPipelineSchedulesPipelineSchedules</a>

---


### DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference <a name="DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner">DataGitlabPipelineSchedulesPipelineSchedulesOwner</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwnerOutputReference.property.internalValue"></a>

```csharp
public DataGitlabPipelineSchedulesPipelineSchedulesOwner InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabPipelineSchedules.DataGitlabPipelineSchedulesPipelineSchedulesOwner">DataGitlabPipelineSchedulesPipelineSchedulesOwner</a>

---




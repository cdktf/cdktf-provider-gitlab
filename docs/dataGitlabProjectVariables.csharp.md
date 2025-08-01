# `dataGitlabProjectVariables` Submodule <a name="`dataGitlabProjectVariables` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectVariables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectVariables <a name="DataGitlabProjectVariables" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project_variables gitlab_project_variables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectVariables(Construct Scope, string Id, DataGitlabProjectVariablesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig">DataGitlabProjectVariablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig">DataGitlabProjectVariablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.resetEnvironmentScope">ResetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEnvironmentScope` <a name="ResetEnvironmentScope" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.resetEnvironmentScope"></a>

```csharp
private void ResetEnvironmentScope()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabProjectVariables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectVariables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectVariables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectVariables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectVariables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabProjectVariables resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabProjectVariables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabProjectVariables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project_variables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabProjectVariables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.variables">Variables</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList">DataGitlabProjectVariablesVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.environmentScopeInput">EnvironmentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.environmentScope">EnvironmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.variables"></a>

```csharp
public DataGitlabProjectVariablesVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList">DataGitlabProjectVariablesVariablesList</a>

---

##### `EnvironmentScopeInput`<sup>Optional</sup> <a name="EnvironmentScopeInput" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.environmentScopeInput"></a>

```csharp
public string EnvironmentScopeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `EnvironmentScope`<sup>Required</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.environmentScope"></a>

```csharp
public string EnvironmentScope { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectVariablesConfig <a name="DataGitlabProjectVariablesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectVariablesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string EnvironmentScope = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.project">Project</a></code> | <code>string</code> | The name or id of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.environmentScope">EnvironmentScope</a></code> | <code>string</code> | The environment scope of the variable. Defaults to all environment (`*`). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project_variables#id DataGitlabProjectVariables#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or id of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project_variables#project DataGitlabProjectVariables#project}

---

##### `EnvironmentScope`<sup>Optional</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.environmentScope"></a>

```csharp
public string EnvironmentScope { get; set; }
```

- *Type:* string

The environment scope of the variable. Defaults to all environment (`*`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project_variables#environment_scope DataGitlabProjectVariables#environment_scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/data-sources/project_variables#id DataGitlabProjectVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGitlabProjectVariablesVariables <a name="DataGitlabProjectVariablesVariables" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectVariablesVariables {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectVariablesVariablesList <a name="DataGitlabProjectVariablesVariablesList" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectVariablesVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.get"></a>

```csharp
private DataGitlabProjectVariablesVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectVariablesVariablesOutputReference <a name="DataGitlabProjectVariablesVariablesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectVariablesVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.environmentScope">EnvironmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.masked">Masked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.protected">Protected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.raw">Raw</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.variableType">VariableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariables">DataGitlabProjectVariablesVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentScope`<sup>Required</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.environmentScope"></a>

```csharp
public string EnvironmentScope { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Masked`<sup>Required</sup> <a name="Masked" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.masked"></a>

```csharp
public IResolvable Masked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.protected"></a>

```csharp
public IResolvable Protected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Raw`<sup>Required</sup> <a name="Raw" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.raw"></a>

```csharp
public IResolvable Raw { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VariableType`<sup>Required</sup> <a name="VariableType" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.variableType"></a>

```csharp
public string VariableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariablesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectVariablesVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectVariables.DataGitlabProjectVariablesVariables">DataGitlabProjectVariablesVariables</a>

---




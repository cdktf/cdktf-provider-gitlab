# `dataGitlabComplianceFramework` Submodule <a name="`dataGitlabComplianceFramework` Submodule" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabComplianceFramework <a name="DataGitlabComplianceFramework" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/compliance_framework gitlab_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabComplianceFramework(Construct Scope, string Id, DataGitlabComplianceFrameworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig">DataGitlabComplianceFrameworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig">DataGitlabComplianceFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabComplianceFramework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabComplianceFramework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabComplianceFramework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabComplianceFramework.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabComplianceFramework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabComplianceFramework resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabComplianceFramework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.color">Color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.frameworkId">FrameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.pipelineConfigurationFullPath">PipelineConfigurationFullPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.namespacePathInput">NamespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.namespacePath">NamespacePath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Color`<sup>Required</sup> <a name="Color" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.color"></a>

```csharp
public string Color { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.frameworkId"></a>

```csharp
public string FrameworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PipelineConfigurationFullPath`<sup>Required</sup> <a name="PipelineConfigurationFullPath" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.pipelineConfigurationFullPath"></a>

```csharp
public string PipelineConfigurationFullPath { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespacePathInput`<sup>Optional</sup> <a name="NamespacePathInput" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.namespacePathInput"></a>

```csharp
public string NamespacePathInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.namespacePath"></a>

```csharp
public string NamespacePath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFramework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabComplianceFrameworkConfig <a name="DataGitlabComplianceFrameworkConfig" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabComplianceFrameworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NamespacePath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.name">Name</a></code> | <code>string</code> | Name for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.namespacePath">NamespacePath</a></code> | <code>string</code> | Full path of the namespace to where the compliance framework is. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/compliance_framework#name DataGitlabComplianceFramework#name}

---

##### `NamespacePath`<sup>Required</sup> <a name="NamespacePath" id="@cdktf/provider-gitlab.dataGitlabComplianceFramework.DataGitlabComplianceFrameworkConfig.property.namespacePath"></a>

```csharp
public string NamespacePath { get; set; }
```

- *Type:* string

Full path of the namespace to where the compliance framework is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.1.0/docs/data-sources/compliance_framework#namespace_path DataGitlabComplianceFramework#namespace_path}

---




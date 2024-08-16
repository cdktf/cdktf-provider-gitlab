# `dataGitlabRelease` Submodule <a name="`dataGitlabRelease` Submodule" id="@cdktf/provider-gitlab.dataGitlabRelease"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabRelease <a name="DataGitlabRelease" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/release gitlab_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabRelease(Construct Scope, string Id, DataGitlabReleaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig">DataGitlabReleaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig">DataGitlabReleaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetAssets">ResetAssets</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAssets` <a name="PutAssets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.putAssets"></a>

```csharp
private void PutAssets(DataGitlabReleaseAssets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>

---

##### `ResetAssets` <a name="ResetAssets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.resetAssets"></a>

```csharp
private void ResetAssets()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabRelease resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabRelease.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabRelease.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabRelease.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabRelease.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabRelease resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabRelease to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabRelease that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/release#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabRelease to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference">DataGitlabReleaseAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.releasedAt">ReleasedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assetsInput">AssetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagNameInput">TagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagName">TagName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assets"></a>

```csharp
public DataGitlabReleaseAssetsOutputReference Assets { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference">DataGitlabReleaseAssetsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReleasedAt`<sup>Required</sup> <a name="ReleasedAt" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.releasedAt"></a>

```csharp
public string ReleasedAt { get; }
```

- *Type:* string

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.assetsInput"></a>

```csharp
public object AssetsInput { get; }
```

- *Type:* object

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TagNameInput`<sup>Optional</sup> <a name="TagNameInput" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagNameInput"></a>

```csharp
public string TagNameInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tagName"></a>

```csharp
public string TagName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabRelease.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabReleaseAssets <a name="DataGitlabReleaseAssets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssets {
    object Links = null,
    object Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.links">Links</a></code> | <code>object</code> | links block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.sources">Sources</a></code> | <code>object</code> | sources block. |

---

##### `Links`<sup>Optional</sup> <a name="Links" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.links"></a>

```csharp
public object Links { get; set; }
```

- *Type:* object

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/release#links DataGitlabRelease#links}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets.property.sources"></a>

```csharp
public object Sources { get; set; }
```

- *Type:* object

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/release#sources DataGitlabRelease#sources}

---

### DataGitlabReleaseAssetsLinks <a name="DataGitlabReleaseAssetsLinks" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssetsLinks {

};
```


### DataGitlabReleaseAssetsSources <a name="DataGitlabReleaseAssetsSources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssetsSources {

};
```


### DataGitlabReleaseConfig <a name="DataGitlabReleaseConfig" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProjectId,
    string TagName,
    DataGitlabReleaseAssets Assets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The ID or URL-encoded path of the project. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.tagName">TagName</a></code> | <code>string</code> | The Git tag the release is associated with. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a></code> | assets block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The ID or URL-encoded path of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/release#project_id DataGitlabRelease#project_id}

---

##### `TagName`<sup>Required</sup> <a name="TagName" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.tagName"></a>

```csharp
public string TagName { get; set; }
```

- *Type:* string

The Git tag the release is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/release#tag_name DataGitlabRelease#tag_name}

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseConfig.property.assets"></a>

```csharp
public DataGitlabReleaseAssets Assets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssets">DataGitlabReleaseAssets</a>

assets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/data-sources/release#assets DataGitlabRelease#assets}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabReleaseAssetsLinksList <a name="DataGitlabReleaseAssetsLinksList" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssetsLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.get"></a>

```csharp
private DataGitlabReleaseAssetsLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataGitlabReleaseAssetsLinksOutputReference <a name="DataGitlabReleaseAssetsLinksOutputReference" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssetsLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.linkType">LinkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `LinkType`<sup>Required</sup> <a name="LinkType" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.linkType"></a>

```csharp
public string LinkType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataGitlabReleaseAssetsOutputReference <a name="DataGitlabReleaseAssetsOutputReference" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetLinks">ResetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putLinks"></a>

```csharp
private void PutLinks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putLinks.parameter.value"></a>

- *Type:* object

---

##### `PutSources` <a name="PutSources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putSources"></a>

```csharp
private void PutSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.putSources.parameter.value"></a>

- *Type:* object

---

##### `ResetLinks` <a name="ResetLinks" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetLinks"></a>

```csharp
private void ResetLinks()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.links">Links</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList">DataGitlabReleaseAssetsLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList">DataGitlabReleaseAssetsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.linksInput">LinksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.links"></a>

```csharp
public DataGitlabReleaseAssetsLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsLinksList">DataGitlabReleaseAssetsLinksList</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sources"></a>

```csharp
public DataGitlabReleaseAssetsSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList">DataGitlabReleaseAssetsSourcesList</a>

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.linksInput"></a>

```csharp
public object LinksInput { get; }
```

- *Type:* object

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.sourcesInput"></a>

```csharp
public object SourcesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataGitlabReleaseAssetsSourcesList <a name="DataGitlabReleaseAssetsSourcesList" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssetsSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.get"></a>

```csharp
private DataGitlabReleaseAssetsSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataGitlabReleaseAssetsSourcesOutputReference <a name="DataGitlabReleaseAssetsSourcesOutputReference" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabReleaseAssetsSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabRelease.DataGitlabReleaseAssetsSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




# `data_gitlab_project_branches`

Refer to the Terraform Registory for docs: [`data_gitlab_project_branches`](https://www.terraform.io/docs/providers/gitlab/d/project_branches).

# `dataGitlabProjectBranches` Submodule <a name="`dataGitlabProjectBranches` Submodule" id="@cdktf/provider-gitlab.dataGitlabProjectBranches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabProjectBranches <a name="DataGitlabProjectBranches" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/project_branches gitlab_project_branches}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranches(Construct Scope, string Id, DataGitlabProjectBranchesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig">DataGitlabProjectBranchesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig">DataGitlabProjectBranchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectBranches.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectBranches.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabProjectBranches.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.branches">Branches</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList">DataGitlabProjectBranchesBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Branches`<sup>Required</sup> <a name="Branches" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.branches"></a>

```csharp
public DataGitlabProjectBranchesBranchesList Branches { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList">DataGitlabProjectBranchesBranchesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranches.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabProjectBranchesBranches <a name="DataGitlabProjectBranchesBranches" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranches.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranchesBranches {

};
```


### DataGitlabProjectBranchesBranchesCommit <a name="DataGitlabProjectBranchesBranchesCommit" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranchesBranchesCommit {

};
```


### DataGitlabProjectBranchesConfig <a name="DataGitlabProjectBranchesConfig" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranchesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.project">Project</a></code> | <code>string</code> | ID or URL-encoded path of the project owned by the authenticated user. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_branches#id DataGitlabProjectBranches#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID or URL-encoded path of the project owned by the authenticated user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_branches#project DataGitlabProjectBranches#project}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/project_branches#id DataGitlabProjectBranches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGitlabProjectBranchesBranchesCommitList <a name="DataGitlabProjectBranchesBranchesCommitList" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranchesBranchesCommitList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.get"></a>

```csharp
private DataGitlabProjectBranchesBranchesCommitOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectBranchesBranchesCommitOutputReference <a name="DataGitlabProjectBranchesBranchesCommitOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranchesBranchesCommitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.authoredDate">AuthoredDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.authorEmail">AuthorEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.authorName">AuthorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.committedDate">CommittedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.committerEmail">CommitterEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.committerName">CommitterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.parentIds">ParentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.shortId">ShortId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommit">DataGitlabProjectBranchesBranchesCommit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthoredDate`<sup>Required</sup> <a name="AuthoredDate" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.authoredDate"></a>

```csharp
public string AuthoredDate { get; }
```

- *Type:* string

---

##### `AuthorEmail`<sup>Required</sup> <a name="AuthorEmail" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.authorEmail"></a>

```csharp
public string AuthorEmail { get; }
```

- *Type:* string

---

##### `AuthorName`<sup>Required</sup> <a name="AuthorName" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.authorName"></a>

```csharp
public string AuthorName { get; }
```

- *Type:* string

---

##### `CommittedDate`<sup>Required</sup> <a name="CommittedDate" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.committedDate"></a>

```csharp
public string CommittedDate { get; }
```

- *Type:* string

---

##### `CommitterEmail`<sup>Required</sup> <a name="CommitterEmail" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.committerEmail"></a>

```csharp
public string CommitterEmail { get; }
```

- *Type:* string

---

##### `CommitterName`<sup>Required</sup> <a name="CommitterName" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.committerName"></a>

```csharp
public string CommitterName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ParentIds`<sup>Required</sup> <a name="ParentIds" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.parentIds"></a>

```csharp
public string[] ParentIds { get; }
```

- *Type:* string[]

---

##### `ShortId`<sup>Required</sup> <a name="ShortId" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.shortId"></a>

```csharp
public string ShortId { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectBranchesBranchesCommit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommit">DataGitlabProjectBranchesBranchesCommit</a>

---


### DataGitlabProjectBranchesBranchesList <a name="DataGitlabProjectBranchesBranchesList" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranchesBranchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.get"></a>

```csharp
private DataGitlabProjectBranchesBranchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabProjectBranchesBranchesOutputReference <a name="DataGitlabProjectBranchesBranchesOutputReference" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabProjectBranchesBranchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.canPush">CanPush</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.commit">Commit</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList">DataGitlabProjectBranchesBranchesCommitList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.developersCanMerge">DevelopersCanMerge</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.developersCanPush">DevelopersCanPush</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.merged">Merged</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.protected">Protected</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranches">DataGitlabProjectBranchesBranches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CanPush`<sup>Required</sup> <a name="CanPush" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.canPush"></a>

```csharp
public IResolvable CanPush { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Commit`<sup>Required</sup> <a name="Commit" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.commit"></a>

```csharp
public DataGitlabProjectBranchesBranchesCommitList Commit { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesCommitList">DataGitlabProjectBranchesBranchesCommitList</a>

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DevelopersCanMerge`<sup>Required</sup> <a name="DevelopersCanMerge" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.developersCanMerge"></a>

```csharp
public IResolvable DevelopersCanMerge { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DevelopersCanPush`<sup>Required</sup> <a name="DevelopersCanPush" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.developersCanPush"></a>

```csharp
public IResolvable DevelopersCanPush { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Merged`<sup>Required</sup> <a name="Merged" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.merged"></a>

```csharp
public IResolvable Merged { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.protected"></a>

```csharp
public IResolvable Protected { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranchesOutputReference.property.internalValue"></a>

```csharp
public DataGitlabProjectBranchesBranches InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabProjectBranches.DataGitlabProjectBranchesBranches">DataGitlabProjectBranchesBranches</a>

---




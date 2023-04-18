# `gitlab_project_protected_environment`

Refer to the Terraform Registory for docs: [`gitlab_project_protected_environment`](https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment).

# `projectProtectedEnvironment` Submodule <a name="`projectProtectedEnvironment` Submodule" id="@cdktf/provider-gitlab.projectProtectedEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectProtectedEnvironment <a name="ProjectProtectedEnvironment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment gitlab_project_protected_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectProtectedEnvironment(Construct Scope, string Id, ProjectProtectedEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig">ProjectProtectedEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig">ProjectProtectedEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels">PutDeployAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetDeployAccessLevels">ResetDeployAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetRequiredApprovalCount">ResetRequiredApprovalCount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutDeployAccessLevels` <a name="PutDeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels"></a>

```csharp
private void PutDeployAccessLevels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.putDeployAccessLevels.parameter.value"></a>

- *Type:* object

---

##### `ResetDeployAccessLevels` <a name="ResetDeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetDeployAccessLevels"></a>

```csharp
private void ResetDeployAccessLevels()
```

##### `ResetRequiredApprovalCount` <a name="ResetRequiredApprovalCount" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.resetRequiredApprovalCount"></a>

```csharp
private void ResetRequiredApprovalCount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectProtectedEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectProtectedEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectProtectedEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevels">DeployAccessLevels</a></code> | <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList">ProjectProtectedEnvironmentDeployAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevelsInput">DeployAccessLevelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCountInput">RequiredApprovalCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCount">RequiredApprovalCount</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeployAccessLevels`<sup>Required</sup> <a name="DeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevels"></a>

```csharp
public ProjectProtectedEnvironmentDeployAccessLevelsList DeployAccessLevels { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList">ProjectProtectedEnvironmentDeployAccessLevelsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DeployAccessLevelsInput`<sup>Optional</sup> <a name="DeployAccessLevelsInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.deployAccessLevelsInput"></a>

```csharp
public object DeployAccessLevelsInput { get; }
```

- *Type:* object

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RequiredApprovalCountInput`<sup>Optional</sup> <a name="RequiredApprovalCountInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCountInput"></a>

```csharp
public double RequiredApprovalCountInput { get; }
```

- *Type:* double

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RequiredApprovalCount`<sup>Required</sup> <a name="RequiredApprovalCount" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.requiredApprovalCount"></a>

```csharp
public double RequiredApprovalCount { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectProtectedEnvironmentConfig <a name="ProjectProtectedEnvironmentConfig" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectProtectedEnvironmentConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Environment,
    string Project,
    object DeployAccessLevels = null,
    double RequiredApprovalCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.environment">Environment</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.project">Project</a></code> | <code>string</code> | The ID or full path of the project which the protected environment is created against. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.deployAccessLevels">DeployAccessLevels</a></code> | <code>object</code> | deploy_access_levels block. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.requiredApprovalCount">RequiredApprovalCount</a></code> | <code>double</code> | The number of approvals required to deploy to this environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#environment ProjectProtectedEnvironment#environment}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID or full path of the project which the protected environment is created against.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#project ProjectProtectedEnvironment#project}

---

##### `DeployAccessLevels`<sup>Optional</sup> <a name="DeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.deployAccessLevels"></a>

```csharp
public object DeployAccessLevels { get; set; }
```

- *Type:* object

deploy_access_levels block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#deploy_access_levels ProjectProtectedEnvironment#deploy_access_levels}

---

##### `RequiredApprovalCount`<sup>Optional</sup> <a name="RequiredApprovalCount" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentConfig.property.requiredApprovalCount"></a>

```csharp
public double RequiredApprovalCount { get; set; }
```

- *Type:* double

The number of approvals required to deploy to this environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#required_approval_count ProjectProtectedEnvironment#required_approval_count}

---

### ProjectProtectedEnvironmentDeployAccessLevels <a name="ProjectProtectedEnvironmentDeployAccessLevels" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectProtectedEnvironmentDeployAccessLevels {
    string AccessLevel = null,
    double GroupId = null,
    double UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.accessLevel">AccessLevel</a></code> | <code>string</code> | Levels of access required to deploy to this protected environment. Valid values are `developer`, `maintainer`. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupId">GroupId</a></code> | <code>double</code> | The ID of the group allowed to deploy to this protected environment. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.userId">UserId</a></code> | <code>double</code> | The ID of the user allowed to deploy to this protected environment. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

Levels of access required to deploy to this protected environment. Valid values are `developer`, `maintainer`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#access_level ProjectProtectedEnvironment#access_level}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.groupId"></a>

```csharp
public double GroupId { get; set; }
```

- *Type:* double

The ID of the group allowed to deploy to this protected environment.

The project must be shared with the group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#group_id ProjectProtectedEnvironment#group_id}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevels.property.userId"></a>

```csharp
public double UserId { get; set; }
```

- *Type:* double

The ID of the user allowed to deploy to this protected environment.

The user must be a member of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_protected_environment#user_id ProjectProtectedEnvironment#user_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectProtectedEnvironmentDeployAccessLevelsList <a name="ProjectProtectedEnvironmentDeployAccessLevelsList" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectProtectedEnvironmentDeployAccessLevelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get"></a>

```csharp
private ProjectProtectedEnvironmentDeployAccessLevelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ProjectProtectedEnvironmentDeployAccessLevelsOutputReference <a name="ProjectProtectedEnvironmentDeployAccessLevelsOutputReference" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectProtectedEnvironmentDeployAccessLevelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetAccessLevel"></a>

```csharp
private void ResetAccessLevel()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription">AccessLevelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput">UserIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId">GroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId">UserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLevelDescription`<sup>Required</sup> <a name="AccessLevelDescription" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelDescription"></a>

```csharp
public string AccessLevelDescription { get; }
```

- *Type:* string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupIdInput"></a>

```csharp
public double GroupIdInput { get; }
```

- *Type:* double

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userIdInput"></a>

```csharp
public double UserIdInput { get; }
```

- *Type:* double

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.groupId"></a>

```csharp
public double GroupId { get; }
```

- *Type:* double

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.projectProtectedEnvironment.ProjectProtectedEnvironmentDeployAccessLevelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




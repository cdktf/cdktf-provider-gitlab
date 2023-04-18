# `gitlab_project_membership`

Refer to the Terraform Registory for docs: [`gitlab_project_membership`](https://www.terraform.io/docs/providers/gitlab/r/project_membership).

# `projectMembership` Submodule <a name="`projectMembership` Submodule" id="@cdktf/provider-gitlab.projectMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectMembership <a name="ProjectMembership" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership gitlab_project_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectMembership(Construct Scope, string Id, ProjectMembershipConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig">ProjectMembershipConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig">ProjectMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectMembership.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectMembership.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectMembership.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.accessLevelInput">AccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.userIdInput">UserIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.accessLevel">AccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.userId">UserId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.accessLevelInput"></a>

```csharp
public string AccessLevelInput { get; }
```

- *Type:* string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.userIdInput"></a>

```csharp
public double UserIdInput { get; }
```

- *Type:* double

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.accessLevel"></a>

```csharp
public string AccessLevel { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectMembership.ProjectMembership.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectMembershipConfig <a name="ProjectMembershipConfig" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectMembershipConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccessLevel,
    string ProjectId,
    double UserId,
    string ExpiresAt = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.accessLevel">AccessLevel</a></code> | <code>string</code> | The access level for the member. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.projectId">ProjectId</a></code> | <code>string</code> | The id of the project. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.userId">UserId</a></code> | <code>double</code> | The id of the user. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | Expiration date for the project membership. Format: `YYYY-MM-DD`. |
| <code><a href="#@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#id ProjectMembership#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.accessLevel"></a>

```csharp
public string AccessLevel { get; set; }
```

- *Type:* string

The access level for the member. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#access_level ProjectMembership#access_level}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The id of the project.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#project_id ProjectMembership#project_id}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.userId"></a>

```csharp
public double UserId { get; set; }
```

- *Type:* double

The id of the user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#user_id ProjectMembership#user_id}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

Expiration date for the project membership. Format: `YYYY-MM-DD`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#expires_at ProjectMembership#expires_at}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectMembership.ProjectMembershipConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_membership#id ProjectMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---




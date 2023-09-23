# `gitlab_user`

Refer to the Terraform Registory for docs: [`gitlab_user`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-gitlab.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-gitlab.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user gitlab_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.user.User.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new User(Construct Scope, string Id, UserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetCanCreateGroup">ResetCanCreateGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsAdmin">ResetIsAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetIsExternal">ResetIsExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetNote">ResetNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetProjectsLimit">ResetProjectsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetResetPassword">ResetResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetSkipConfirmation">ResetSkipConfirmation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.resetTfPassword">ResetTfPassword</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.user.User.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.user.User.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.user.User.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.user.User.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.user.User.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.user.User.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.user.User.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.user.User.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCanCreateGroup` <a name="ResetCanCreateGroup" id="@cdktf/provider-gitlab.user.User.resetCanCreateGroup"></a>

```csharp
private void ResetCanCreateGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.user.User.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAdmin` <a name="ResetIsAdmin" id="@cdktf/provider-gitlab.user.User.resetIsAdmin"></a>

```csharp
private void ResetIsAdmin()
```

##### `ResetIsExternal` <a name="ResetIsExternal" id="@cdktf/provider-gitlab.user.User.resetIsExternal"></a>

```csharp
private void ResetIsExternal()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-gitlab.user.User.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetNote` <a name="ResetNote" id="@cdktf/provider-gitlab.user.User.resetNote"></a>

```csharp
private void ResetNote()
```

##### `ResetProjectsLimit` <a name="ResetProjectsLimit" id="@cdktf/provider-gitlab.user.User.resetProjectsLimit"></a>

```csharp
private void ResetProjectsLimit()
```

##### `ResetResetPassword` <a name="ResetResetPassword" id="@cdktf/provider-gitlab.user.User.resetResetPassword"></a>

```csharp
private void ResetResetPassword()
```

##### `ResetSkipConfirmation` <a name="ResetSkipConfirmation" id="@cdktf/provider-gitlab.user.User.resetSkipConfirmation"></a>

```csharp
private void ResetSkipConfirmation()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-gitlab.user.User.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTfPassword` <a name="ResetTfPassword" id="@cdktf/provider-gitlab.user.User.resetTfPassword"></a>

```csharp
private void ResetTfPassword()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.user.User.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

User.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.user.User.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.user.User.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

User.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.user.User.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.user.User.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

User.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.user.User.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroupInput">CanCreateGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdminInput">IsAdminInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternalInput">IsExternalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.noteInput">NoteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimitInput">ProjectsLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPasswordInput">ResetPasswordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmationInput">SkipConfirmationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.canCreateGroup">CanCreateGroup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isAdmin">IsAdmin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.isExternal">IsExternal</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.namespaceId">NamespaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.note">Note</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.projectsLimit">ProjectsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.resetPassword">ResetPassword</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.skipConfirmation">SkipConfirmation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.user.User.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.user.User.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.user.User.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.user.User.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.user.User.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.user.User.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.user.User.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.user.User.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.user.User.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.user.User.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.user.User.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.user.User.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.user.User.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.user.User.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CanCreateGroupInput`<sup>Optional</sup> <a name="CanCreateGroupInput" id="@cdktf/provider-gitlab.user.User.property.canCreateGroupInput"></a>

```csharp
public object CanCreateGroupInput { get; }
```

- *Type:* object

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-gitlab.user.User.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.user.User.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAdminInput`<sup>Optional</sup> <a name="IsAdminInput" id="@cdktf/provider-gitlab.user.User.property.isAdminInput"></a>

```csharp
public object IsAdminInput { get; }
```

- *Type:* object

---

##### `IsExternalInput`<sup>Optional</sup> <a name="IsExternalInput" id="@cdktf/provider-gitlab.user.User.property.isExternalInput"></a>

```csharp
public object IsExternalInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.user.User.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-gitlab.user.User.property.namespaceIdInput"></a>

```csharp
public double NamespaceIdInput { get; }
```

- *Type:* double

---

##### `NoteInput`<sup>Optional</sup> <a name="NoteInput" id="@cdktf/provider-gitlab.user.User.property.noteInput"></a>

```csharp
public string NoteInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-gitlab.user.User.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProjectsLimitInput`<sup>Optional</sup> <a name="ProjectsLimitInput" id="@cdktf/provider-gitlab.user.User.property.projectsLimitInput"></a>

```csharp
public double ProjectsLimitInput { get; }
```

- *Type:* double

---

##### `ResetPasswordInput`<sup>Optional</sup> <a name="ResetPasswordInput" id="@cdktf/provider-gitlab.user.User.property.resetPasswordInput"></a>

```csharp
public object ResetPasswordInput { get; }
```

- *Type:* object

---

##### `SkipConfirmationInput`<sup>Optional</sup> <a name="SkipConfirmationInput" id="@cdktf/provider-gitlab.user.User.property.skipConfirmationInput"></a>

```csharp
public object SkipConfirmationInput { get; }
```

- *Type:* object

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-gitlab.user.User.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.user.User.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `CanCreateGroup`<sup>Required</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.user.User.property.canCreateGroup"></a>

```csharp
public object CanCreateGroup { get; }
```

- *Type:* object

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-gitlab.user.User.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.user.User.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAdmin`<sup>Required</sup> <a name="IsAdmin" id="@cdktf/provider-gitlab.user.User.property.isAdmin"></a>

```csharp
public object IsAdmin { get; }
```

- *Type:* object

---

##### `IsExternal`<sup>Required</sup> <a name="IsExternal" id="@cdktf/provider-gitlab.user.User.property.isExternal"></a>

```csharp
public object IsExternal { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.user.User.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.user.User.property.namespaceId"></a>

```csharp
public double NamespaceId { get; }
```

- *Type:* double

---

##### `Note`<sup>Required</sup> <a name="Note" id="@cdktf/provider-gitlab.user.User.property.note"></a>

```csharp
public string Note { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-gitlab.user.User.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ProjectsLimit`<sup>Required</sup> <a name="ProjectsLimit" id="@cdktf/provider-gitlab.user.User.property.projectsLimit"></a>

```csharp
public double ProjectsLimit { get; }
```

- *Type:* double

---

##### `ResetPassword`<sup>Required</sup> <a name="ResetPassword" id="@cdktf/provider-gitlab.user.User.property.resetPassword"></a>

```csharp
public object ResetPassword { get; }
```

- *Type:* object

---

##### `SkipConfirmation`<sup>Required</sup> <a name="SkipConfirmation" id="@cdktf/provider-gitlab.user.User.property.skipConfirmation"></a>

```csharp
public object SkipConfirmation { get; }
```

- *Type:* object

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.user.User.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.user.User.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.User.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.user.User.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-gitlab.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.user.UserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new UserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Email,
    string Name,
    string Username,
    object CanCreateGroup = null,
    string Id = null,
    object IsAdmin = null,
    object IsExternal = null,
    double NamespaceId = null,
    string Note = null,
    string Password = null,
    double ProjectsLimit = null,
    object ResetPassword = null,
    object SkipConfirmation = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.email">Email</a></code> | <code>string</code> | The e-mail address of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.name">Name</a></code> | <code>string</code> | The name of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.username">Username</a></code> | <code>string</code> | The username of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup">CanCreateGroup</a></code> | <code>object</code> | Boolean, defaults to false. Whether to allow the user to create groups. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isAdmin">IsAdmin</a></code> | <code>object</code> | Boolean, defaults to false.  Whether to enable administrative privileges. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.isExternal">IsExternal</a></code> | <code>object</code> | Boolean, defaults to false. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.namespaceId">NamespaceId</a></code> | <code>double</code> | The ID of the user's namespace. Available since GitLab 14.10. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.note">Note</a></code> | <code>string</code> | The note associated to the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.password">Password</a></code> | <code>string</code> | The password of the user. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit">ProjectsLimit</a></code> | <code>double</code> | Integer, defaults to 0.  Number of projects user can create. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.resetPassword">ResetPassword</a></code> | <code>object</code> | Boolean, defaults to false. Send user password reset link. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation">SkipConfirmation</a></code> | <code>object</code> | Boolean, defaults to true. Whether to skip confirmation. |
| <code><a href="#@cdktf/provider-gitlab.user.UserConfig.property.state">State</a></code> | <code>string</code> | String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.user.UserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.user.UserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.user.UserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.user.UserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.user.UserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.user.UserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.user.UserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-gitlab.user.UserConfig.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The e-mail address of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#email User#email}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.user.UserConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#name User#name}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.user.UserConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#username User#username}

---

##### `CanCreateGroup`<sup>Optional</sup> <a name="CanCreateGroup" id="@cdktf/provider-gitlab.user.UserConfig.property.canCreateGroup"></a>

```csharp
public object CanCreateGroup { get; set; }
```

- *Type:* object

Boolean, defaults to false. Whether to allow the user to create groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#can_create_group User#can_create_group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.user.UserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAdmin`<sup>Optional</sup> <a name="IsAdmin" id="@cdktf/provider-gitlab.user.UserConfig.property.isAdmin"></a>

```csharp
public object IsAdmin { get; set; }
```

- *Type:* object

Boolean, defaults to false.  Whether to enable administrative privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#is_admin User#is_admin}

---

##### `IsExternal`<sup>Optional</sup> <a name="IsExternal" id="@cdktf/provider-gitlab.user.UserConfig.property.isExternal"></a>

```csharp
public object IsExternal { get; set; }
```

- *Type:* object

Boolean, defaults to false.

Whether a user has access only to some internal or private projects. External users can only access projects to which they are explicitly granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#is_external User#is_external}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-gitlab.user.UserConfig.property.namespaceId"></a>

```csharp
public double NamespaceId { get; set; }
```

- *Type:* double

The ID of the user's namespace. Available since GitLab 14.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#namespace_id User#namespace_id}

---

##### `Note`<sup>Optional</sup> <a name="Note" id="@cdktf/provider-gitlab.user.UserConfig.property.note"></a>

```csharp
public string Note { get; set; }
```

- *Type:* string

The note associated to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#note User#note}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-gitlab.user.UserConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#password User#password}

---

##### `ProjectsLimit`<sup>Optional</sup> <a name="ProjectsLimit" id="@cdktf/provider-gitlab.user.UserConfig.property.projectsLimit"></a>

```csharp
public double ProjectsLimit { get; set; }
```

- *Type:* double

Integer, defaults to 0.  Number of projects user can create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#projects_limit User#projects_limit}

---

##### `ResetPassword`<sup>Optional</sup> <a name="ResetPassword" id="@cdktf/provider-gitlab.user.UserConfig.property.resetPassword"></a>

```csharp
public object ResetPassword { get; set; }
```

- *Type:* object

Boolean, defaults to false. Send user password reset link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#reset_password User#reset_password}

---

##### `SkipConfirmation`<sup>Optional</sup> <a name="SkipConfirmation" id="@cdktf/provider-gitlab.user.UserConfig.property.skipConfirmation"></a>

```csharp
public object SkipConfirmation { get; set; }
```

- *Type:* object

Boolean, defaults to true. Whether to skip confirmation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#skip_confirmation User#skip_confirmation}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-gitlab.user.UserConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.0/docs/resources/user#state User#state}

---




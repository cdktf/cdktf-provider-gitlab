# `dataGitlabUserSshkeys` Submodule <a name="`dataGitlabUserSshkeys` Submodule" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabUserSshkeys <a name="DataGitlabUserSshkeys" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/user_sshkeys gitlab_user_sshkeys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabUserSshkeys(Construct Scope, string Id, DataGitlabUserSshkeysConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig">DataGitlabUserSshkeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig">DataGitlabUserSshkeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetUserId">ResetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetUserId"></a>

```csharp
private void ResetUserId()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabUserSshkeys resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabUserSshkeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabUserSshkeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabUserSshkeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabUserSshkeys.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabUserSshkeys resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabUserSshkeys to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabUserSshkeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/user_sshkeys#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabUserSshkeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.keys">Keys</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList">DataGitlabUserSshkeysKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.userIdInput">UserIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.userId">UserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.keys"></a>

```csharp
public DataGitlabUserSshkeysKeysList Keys { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList">DataGitlabUserSshkeysKeysList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.userIdInput"></a>

```csharp
public double UserIdInput { get; }
```

- *Type:* double

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabUserSshkeysConfig <a name="DataGitlabUserSshkeysConfig" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabUserSshkeysConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    double UserId = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/user_sshkeys#id DataGitlabUserSshkeys#id}. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.userId">UserId</a></code> | <code>double</code> | ID of the user to get the SSH keys for. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.username">Username</a></code> | <code>string</code> | Username of the user to get the SSH keys for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/user_sshkeys#id DataGitlabUserSshkeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.userId"></a>

```csharp
public double UserId { get; set; }
```

- *Type:* double

ID of the user to get the SSH keys for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/user_sshkeys#user_id DataGitlabUserSshkeys#user_id}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username of the user to get the SSH keys for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/data-sources/user_sshkeys#username DataGitlabUserSshkeys#username}

---

### DataGitlabUserSshkeysKeys <a name="DataGitlabUserSshkeysKeys" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabUserSshkeysKeys {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabUserSshkeysKeysList <a name="DataGitlabUserSshkeysKeysList" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabUserSshkeysKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.get"></a>

```csharp
private DataGitlabUserSshkeysKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGitlabUserSshkeysKeysOutputReference <a name="DataGitlabUserSshkeysKeysOutputReference" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabUserSshkeysKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.keyId">KeyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.userId">UserId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeys">DataGitlabUserSshkeysKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.keyId"></a>

```csharp
public double KeyId { get; }
```

- *Type:* double

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.userId"></a>

```csharp
public double UserId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeysOutputReference.property.internalValue"></a>

```csharp
public DataGitlabUserSshkeysKeys InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabUserSshkeys.DataGitlabUserSshkeysKeys">DataGitlabUserSshkeysKeys</a>

---




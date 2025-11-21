# `dataGitlabGroupProvisionedUsers` Submodule <a name="`dataGitlabGroupProvisionedUsers` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupProvisionedUsers <a name="DataGitlabGroupProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users gitlab_group_provisioned_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabGroupProvisionedUsers(Construct Scope, string Id, DataGitlabGroupProvisionedUsersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig">DataGitlabGroupProvisionedUsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig">DataGitlabGroupProvisionedUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers">PutProvisionedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetBlocked">ResetBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedAfter">ResetCreatedAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedBefore">ResetCreatedBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetProvisionedUsers">ResetProvisionedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProvisionedUsers` <a name="PutProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers"></a>

```csharp
private void PutProvisionedUsers(IResolvable|DataGitlabGroupProvisionedUsersProvisionedUsers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetBlocked` <a name="ResetBlocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetBlocked"></a>

```csharp
private void ResetBlocked()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedAfter"></a>

```csharp
private void ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedBefore"></a>

```csharp
private void ResetCreatedBefore()
```

##### `ResetProvisionedUsers` <a name="ResetProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetProvisionedUsers"></a>

```csharp
private void ResetProvisionedUsers()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetSearch"></a>

```csharp
private void ResetSearch()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetUsername"></a>

```csharp
private void ResetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabGroupProvisionedUsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabGroupProvisionedUsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabGroupProvisionedUsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

DataGitlabGroupProvisionedUsers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGitlabGroupProvisionedUsers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGitlabGroupProvisionedUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupProvisionedUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers">ProvisionedUsers</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput">ActiveInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput">BlockedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput">CreatedAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput">ProvisionedUsersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput">SearchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active">Active</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked">Blocked</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search">Search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ProvisionedUsers`<sup>Required</sup> <a name="ProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers"></a>

```csharp
public DataGitlabGroupProvisionedUsersProvisionedUsersList ProvisionedUsers { get; }
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a>

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput"></a>

```csharp
public bool|IResolvable ActiveInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BlockedInput`<sup>Optional</sup> <a name="BlockedInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput"></a>

```csharp
public bool|IResolvable BlockedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput"></a>

```csharp
public string CreatedAfterInput { get; }
```

- *Type:* string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput"></a>

```csharp
public string CreatedBeforeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProvisionedUsersInput`<sup>Optional</sup> <a name="ProvisionedUsersInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput"></a>

```csharp
public IResolvable|DataGitlabGroupProvisionedUsersProvisionedUsers[] ProvisionedUsersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput"></a>

```csharp
public string SearchInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active"></a>

```csharp
public bool|IResolvable Active { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Blocked`<sup>Required</sup> <a name="Blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked"></a>

```csharp
public bool|IResolvable Blocked { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; }
```

- *Type:* string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search"></a>

```csharp
public string Search { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupProvisionedUsersConfig <a name="DataGitlabGroupProvisionedUsersConfig" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabGroupProvisionedUsersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id,
    bool|IResolvable Active = null,
    bool|IResolvable Blocked = null,
    string CreatedAfter = null,
    string CreatedBefore = null,
    IResolvable|DataGitlabGroupProvisionedUsersProvisionedUsers[] ProvisionedUsers = null,
    string Search = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id">Id</a></code> | <code>string</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active">Active</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Return only active provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked">Blocked</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Return only blocked provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter">CreatedAfter</a></code> | <code>string</code> | Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore">CreatedBefore</a></code> | <code>string</code> | Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers">ProvisionedUsers</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]</code> | provisioned_users block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search">Search</a></code> | <code>string</code> | The search query to filter the provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username">Username</a></code> | <code>string</code> | The username of the provisioned user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#id DataGitlabGroupProvisionedUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active"></a>

```csharp
public bool|IResolvable Active { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Return only active provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#active DataGitlabGroupProvisionedUsers#active}

---

##### `Blocked`<sup>Optional</sup> <a name="Blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked"></a>

```csharp
public bool|IResolvable Blocked { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Return only blocked provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#blocked DataGitlabGroupProvisionedUsers#blocked}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter"></a>

```csharp
public string CreatedAfter { get; set; }
```

- *Type:* string

Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#created_after DataGitlabGroupProvisionedUsers#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore"></a>

```csharp
public string CreatedBefore { get; set; }
```

- *Type:* string

Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#created_before DataGitlabGroupProvisionedUsers#created_before}

---

##### `ProvisionedUsers`<sup>Optional</sup> <a name="ProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers"></a>

```csharp
public IResolvable|DataGitlabGroupProvisionedUsersProvisionedUsers[] ProvisionedUsers { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

provisioned_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#provisioned_users DataGitlabGroupProvisionedUsers#provisioned_users}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search"></a>

```csharp
public string Search { get; set; }
```

- *Type:* string

The search query to filter the provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#search DataGitlabGroupProvisionedUsers#search}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the provisioned user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/group_provisioned_users#username DataGitlabGroupProvisionedUsers#username}

---

### DataGitlabGroupProvisionedUsersProvisionedUsers <a name="DataGitlabGroupProvisionedUsersProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabGroupProvisionedUsersProvisionedUsers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupProvisionedUsersProvisionedUsersList <a name="DataGitlabGroupProvisionedUsersProvisionedUsersList" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabGroupProvisionedUsersProvisionedUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get"></a>

```csharp
private DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue"></a>

```csharp
public IResolvable|DataGitlabGroupProvisionedUsersProvisionedUsers[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>[]

---


### DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference <a name="DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio">Bio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot">Bot</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt">ConfirmedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external">External</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle">JobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn">LastActivityOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt">LastSignInAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin">Linkedin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile">PrivateProfile</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns">Pronouns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail">PublicEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype">Skype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter">Twitter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled">TwoFactorEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl">WebsiteUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl">WebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl"></a>

```csharp
public string AvatarUrl { get; }
```

- *Type:* string

---

##### `Bio`<sup>Required</sup> <a name="Bio" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio"></a>

```csharp
public string Bio { get; }
```

- *Type:* string

---

##### `Bot`<sup>Required</sup> <a name="Bot" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot"></a>

```csharp
public IResolvable Bot { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ConfirmedAt`<sup>Required</sup> <a name="ConfirmedAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt"></a>

```csharp
public string ConfirmedAt { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external"></a>

```csharp
public IResolvable External { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle"></a>

```csharp
public string JobTitle { get; }
```

- *Type:* string

---

##### `LastActivityOn`<sup>Required</sup> <a name="LastActivityOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn"></a>

```csharp
public string LastActivityOn { get; }
```

- *Type:* string

---

##### `LastSignInAt`<sup>Required</sup> <a name="LastSignInAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt"></a>

```csharp
public string LastSignInAt { get; }
```

- *Type:* string

---

##### `Linkedin`<sup>Required</sup> <a name="Linkedin" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin"></a>

```csharp
public string Linkedin { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `PrivateProfile`<sup>Required</sup> <a name="PrivateProfile" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile"></a>

```csharp
public IResolvable PrivateProfile { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Pronouns`<sup>Required</sup> <a name="Pronouns" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns"></a>

```csharp
public string Pronouns { get; }
```

- *Type:* string

---

##### `PublicEmail`<sup>Required</sup> <a name="PublicEmail" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail"></a>

```csharp
public string PublicEmail { get; }
```

- *Type:* string

---

##### `Skype`<sup>Required</sup> <a name="Skype" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype"></a>

```csharp
public string Skype { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter"></a>

```csharp
public string Twitter { get; }
```

- *Type:* string

---

##### `TwoFactorEnabled`<sup>Required</sup> <a name="TwoFactorEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled"></a>

```csharp
public IResolvable TwoFactorEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WebsiteUrl`<sup>Required</sup> <a name="WebsiteUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl"></a>

```csharp
public string WebsiteUrl { get; }
```

- *Type:* string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl"></a>

```csharp
public string WebUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataGitlabGroupProvisionedUsersProvisionedUsers InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers">DataGitlabGroupProvisionedUsersProvisionedUsers</a>

---




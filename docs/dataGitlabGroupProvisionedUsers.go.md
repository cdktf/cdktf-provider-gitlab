# `dataGitlabGroupProvisionedUsers` Submodule <a name="`dataGitlabGroupProvisionedUsers` Submodule" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGitlabGroupProvisionedUsers <a name="DataGitlabGroupProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users gitlab_group_provisioned_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

datagitlabgroupprovisionedusers.NewDataGitlabGroupProvisionedUsers(scope Construct, id *string, config DataGitlabGroupProvisionedUsersConfig) DataGitlabGroupProvisionedUsers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig">DataGitlabGroupProvisionedUsersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProvisionedUsers` <a name="PutProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers"></a>

```go
func PutProvisionedUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.putProvisionedUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetActive"></a>

```go
func ResetActive()
```

##### `ResetBlocked` <a name="ResetBlocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetBlocked"></a>

```go
func ResetBlocked()
```

##### `ResetCreatedAfter` <a name="ResetCreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedAfter"></a>

```go
func ResetCreatedAfter()
```

##### `ResetCreatedBefore` <a name="ResetCreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetCreatedBefore"></a>

```go
func ResetCreatedBefore()
```

##### `ResetProvisionedUsers` <a name="ResetProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetProvisionedUsers"></a>

```go
func ResetProvisionedUsers()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.resetUsername"></a>

```go
func ResetUsername()
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

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

datagitlabgroupprovisionedusers.DataGitlabGroupProvisionedUsers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

datagitlabgroupprovisionedusers.DataGitlabGroupProvisionedUsers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

datagitlabgroupprovisionedusers.DataGitlabGroupProvisionedUsers_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

datagitlabgroupprovisionedusers.DataGitlabGroupProvisionedUsers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGitlabGroupProvisionedUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGitlabGroupProvisionedUsers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGitlabGroupProvisionedUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGitlabGroupProvisionedUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers">ProvisionedUsers</a></code> | <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput">ActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput">BlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput">CreatedAfterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput">CreatedBeforeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput">ProvisionedUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active">Active</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked">Blocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ProvisionedUsers`<sup>Required</sup> <a name="ProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsers"></a>

```go
func ProvisionedUsers() DataGitlabGroupProvisionedUsersProvisionedUsersList
```

- *Type:* <a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList">DataGitlabGroupProvisionedUsersProvisionedUsersList</a>

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.activeInput"></a>

```go
func ActiveInput() interface{}
```

- *Type:* interface{}

---

##### `BlockedInput`<sup>Optional</sup> <a name="BlockedInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blockedInput"></a>

```go
func BlockedInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedAfterInput`<sup>Optional</sup> <a name="CreatedAfterInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfterInput"></a>

```go
func CreatedAfterInput() *string
```

- *Type:* *string

---

##### `CreatedBeforeInput`<sup>Optional</sup> <a name="CreatedBeforeInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBeforeInput"></a>

```go
func CreatedBeforeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProvisionedUsersInput`<sup>Optional</sup> <a name="ProvisionedUsersInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.provisionedUsersInput"></a>

```go
func ProvisionedUsersInput() interface{}
```

- *Type:* interface{}

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.active"></a>

```go
func Active() interface{}
```

- *Type:* interface{}

---

##### `Blocked`<sup>Required</sup> <a name="Blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.blocked"></a>

```go
func Blocked() interface{}
```

- *Type:* interface{}

---

##### `CreatedAfter`<sup>Required</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdAfter"></a>

```go
func CreatedAfter() *string
```

- *Type:* *string

---

##### `CreatedBefore`<sup>Required</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.createdBefore"></a>

```go
func CreatedBefore() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGitlabGroupProvisionedUsersConfig <a name="DataGitlabGroupProvisionedUsersConfig" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

&datagitlabgroupprovisionedusers.DataGitlabGroupProvisionedUsersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Active: interface{},
	Blocked: interface{},
	CreatedAfter: *string,
	CreatedBefore: *string,
	ProvisionedUsers: interface{},
	Search: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id">Id</a></code> | <code>*string</code> | The ID or URL-encoded path of the group. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active">Active</a></code> | <code>interface{}</code> | Return only active provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked">Blocked</a></code> | <code>interface{}</code> | Return only blocked provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter">CreatedAfter</a></code> | <code>*string</code> | Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore">CreatedBefore</a></code> | <code>*string</code> | Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers">ProvisionedUsers</a></code> | <code>interface{}</code> | provisioned_users block. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search">Search</a></code> | <code>*string</code> | The search query to filter the provisioned users. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username">Username</a></code> | <code>*string</code> | The username of the provisioned user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID or URL-encoded path of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#id DataGitlabGroupProvisionedUsers#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.active"></a>

```go
Active interface{}
```

- *Type:* interface{}

Return only active provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#active DataGitlabGroupProvisionedUsers#active}

---

##### `Blocked`<sup>Optional</sup> <a name="Blocked" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.blocked"></a>

```go
Blocked interface{}
```

- *Type:* interface{}

Return only blocked provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#blocked DataGitlabGroupProvisionedUsers#blocked}

---

##### `CreatedAfter`<sup>Optional</sup> <a name="CreatedAfter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdAfter"></a>

```go
CreatedAfter *string
```

- *Type:* *string

Return only provisioned users created on or after the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#created_after DataGitlabGroupProvisionedUsers#created_after}

---

##### `CreatedBefore`<sup>Optional</sup> <a name="CreatedBefore" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.createdBefore"></a>

```go
CreatedBefore *string
```

- *Type:* *string

Return only provisioned users created on or before the specified date. Expected in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#created_before DataGitlabGroupProvisionedUsers#created_before}

---

##### `ProvisionedUsers`<sup>Optional</sup> <a name="ProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.provisionedUsers"></a>

```go
ProvisionedUsers interface{}
```

- *Type:* interface{}

provisioned_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#provisioned_users DataGitlabGroupProvisionedUsers#provisioned_users}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

The search query to filter the provisioned users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#search DataGitlabGroupProvisionedUsers#search}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username of the provisioned user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/data-sources/group_provisioned_users#username DataGitlabGroupProvisionedUsers#username}

---

### DataGitlabGroupProvisionedUsersProvisionedUsers <a name="DataGitlabGroupProvisionedUsersProvisionedUsers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

&datagitlabgroupprovisionedusers.DataGitlabGroupProvisionedUsersProvisionedUsers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGitlabGroupProvisionedUsersProvisionedUsersList <a name="DataGitlabGroupProvisionedUsersProvisionedUsersList" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

datagitlabgroupprovisionedusers.NewDataGitlabGroupProvisionedUsersProvisionedUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGitlabGroupProvisionedUsersProvisionedUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get"></a>

```go
func Get(index *f64) DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference <a name="DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/v13/datagitlabgroupprovisionedusers"

datagitlabgroupprovisionedusers.NewDataGitlabGroupProvisionedUsersProvisionedUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl">AvatarUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio">Bio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot">Bot</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt">ConfirmedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external">External</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn">LastActivityOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt">LastSignInAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin">Linkedin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile">PrivateProfile</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns">Pronouns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail">PublicEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype">Skype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter">Twitter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled">TwoFactorEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl">WebsiteUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl">WebUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvatarUrl`<sup>Required</sup> <a name="AvatarUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.avatarUrl"></a>

```go
func AvatarUrl() *string
```

- *Type:* *string

---

##### `Bio`<sup>Required</sup> <a name="Bio" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bio"></a>

```go
func Bio() *string
```

- *Type:* *string

---

##### `Bot`<sup>Required</sup> <a name="Bot" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.bot"></a>

```go
func Bot() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConfirmedAt`<sup>Required</sup> <a name="ConfirmedAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.confirmedAt"></a>

```go
func ConfirmedAt() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `External`<sup>Required</sup> <a name="External" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.external"></a>

```go
func External() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `LastActivityOn`<sup>Required</sup> <a name="LastActivityOn" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastActivityOn"></a>

```go
func LastActivityOn() *string
```

- *Type:* *string

---

##### `LastSignInAt`<sup>Required</sup> <a name="LastSignInAt" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.lastSignInAt"></a>

```go
func LastSignInAt() *string
```

- *Type:* *string

---

##### `Linkedin`<sup>Required</sup> <a name="Linkedin" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.linkedin"></a>

```go
func Linkedin() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PrivateProfile`<sup>Required</sup> <a name="PrivateProfile" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.privateProfile"></a>

```go
func PrivateProfile() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Pronouns`<sup>Required</sup> <a name="Pronouns" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.pronouns"></a>

```go
func Pronouns() *string
```

- *Type:* *string

---

##### `PublicEmail`<sup>Required</sup> <a name="PublicEmail" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.publicEmail"></a>

```go
func PublicEmail() *string
```

- *Type:* *string

---

##### `Skype`<sup>Required</sup> <a name="Skype" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.skype"></a>

```go
func Skype() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twitter"></a>

```go
func Twitter() *string
```

- *Type:* *string

---

##### `TwoFactorEnabled`<sup>Required</sup> <a name="TwoFactorEnabled" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.twoFactorEnabled"></a>

```go
func TwoFactorEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `WebsiteUrl`<sup>Required</sup> <a name="WebsiteUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.websiteUrl"></a>

```go
func WebsiteUrl() *string
```

- *Type:* *string

---

##### `WebUrl`<sup>Required</sup> <a name="WebUrl" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.webUrl"></a>

```go
func WebUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-gitlab.dataGitlabGroupProvisionedUsers.DataGitlabGroupProvisionedUsersProvisionedUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




# `groupAccessToken` Submodule <a name="`groupAccessToken` Submodule" id="@cdktf/provider-gitlab.groupAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupAccessToken <a name="GroupAccessToken" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken"></a>

Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token gitlab_group_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/groupaccesstoken"

groupaccesstoken.NewGroupAccessToken(scope Construct, id *string, config GroupAccessTokenConfig) GroupAccessToken
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig">GroupAccessTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig">GroupAccessTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetExpiresAt"></a>

```go
func ResetExpiresAt()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/groupaccesstoken"

groupaccesstoken.GroupAccessToken_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/groupaccesstoken"

groupaccesstoken.GroupAccessToken_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/groupaccesstoken"

groupaccesstoken.GroupAccessToken_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.revoked">Revoked</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.userId">UserId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAtInput">ExpiresAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.groupInput">GroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.group">Group</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Revoked`<sup>Required</sup> <a name="Revoked" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.revoked"></a>

```go
func Revoked() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.userId"></a>

```go
func UserId() *f64
```

- *Type:* *f64

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAtInput"></a>

```go
func ExpiresAtInput() *string
```

- *Type:* *string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.groupInput"></a>

```go
func GroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.group"></a>

```go
func Group() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessToken.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupAccessTokenConfig <a name="GroupAccessTokenConfig" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-gitlab-go/gitlab/groupaccesstoken"

&groupaccesstoken.GroupAccessTokenConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Group: *string,
	Name: *string,
	Scopes: *[]*string,
	AccessLevel: *string,
	ExpiresAt: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.group">Group</a></code> | <code>*string</code> | The ID or path of the group to add the group access token to. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.name">Name</a></code> | <code>*string</code> | The name of the group access token. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | The scope for the group access token. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | The access level for the group access token. Valid values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | The token expires at midnight UTC on that date. |
| <code><a href="#@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token#id GroupAccessToken#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.group"></a>

```go
Group *string
```

- *Type:* *string

The ID or path of the group to add the group access token to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token#group GroupAccessToken#group}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the group access token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token#name GroupAccessToken#name}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

The scope for the group access token.

It determines the actions which can be performed when authenticating with this token. Valid values are: `api`, `read_api`, `read_registry`, `write_registry`, `read_repository`, `write_repository`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token#scopes GroupAccessToken#scopes}

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

The access level for the group access token. Valid values are: `guest`, `reporter`, `developer`, `maintainer`, `owner`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token#access_level GroupAccessToken#access_level}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.expiresAt"></a>

```go
ExpiresAt *string
```

- *Type:* *string

The token expires at midnight UTC on that date.

The date must be in the format YYYY-MM-DD. Default is never.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token#expires_at GroupAccessToken#expires_at}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.groupAccessToken.GroupAccessTokenConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_access_token#id GroupAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


